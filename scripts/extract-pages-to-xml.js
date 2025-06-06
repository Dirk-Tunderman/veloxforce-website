const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs').promises;

// Helper function to escape XML special characters
function escapeXml(unsafe) {
  if (!unsafe) return '';
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

async function extractPageToXml(pageName, pageUrl) {
  console.log(`\n📄 Extracting ${pageName} to XML...`);
  
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    const page = await browser.newPage();
    
    // Navigate to page
    await page.goto(pageUrl, {
      waitUntil: 'networkidle2',
      timeout: 30000
    });
    
    // Wait for content to load
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Extract page data
    const pageData = await page.evaluate(() => {
      const data = {
        title: document.title,
        meta: {},
        headings: [],
        sections: [],
        links: [],
        images: [],
        buttons: [],
        text: []
      };
      
      // Extract meta tags
      document.querySelectorAll('meta').forEach(meta => {
        const name = meta.getAttribute('name') || meta.getAttribute('property');
        const content = meta.getAttribute('content');
        if (name && content) {
          data.meta[name] = content;
        }
      });
      
      // Extract all headings
      ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].forEach(tag => {
        document.querySelectorAll(tag).forEach(heading => {
          data.headings.push({
            level: tag,
            text: heading.textContent.trim(),
            id: heading.id || null,
            className: heading.className || null
          });
        });
      });
      
      // Extract sections
      const sectionSelectors = 'section, [class*="section"], main > div';
      document.querySelectorAll(sectionSelectors).forEach((section, index) => {
        const sectionData = {
          index: index,
          className: section.className || null,
          id: section.id || null,
          content: []
        };
        
        // Get text content from paragraphs
        section.querySelectorAll('p').forEach(p => {
          const text = p.textContent.trim();
          if (text) {
            sectionData.content.push({
              type: 'paragraph',
              text: text
            });
          }
        });
        
        // Get lists
        section.querySelectorAll('ul, ol').forEach(list => {
          const items = Array.from(list.querySelectorAll('li')).map(li => li.textContent.trim());
          if (items.length > 0) {
            sectionData.content.push({
              type: list.tagName.toLowerCase(),
              items: items
            });
          }
        });
        
        if (sectionData.content.length > 0) {
          data.sections.push(sectionData);
        }
      });
      
      // Extract all links
      document.querySelectorAll('a').forEach(link => {
        const href = link.getAttribute('href');
        const text = link.textContent.trim();
        if (href && text) {
          data.links.push({
            href: href,
            text: text,
            isExternal: href.startsWith('http') && !href.includes(window.location.hostname)
          });
        }
      });
      
      // Extract images
      document.querySelectorAll('img').forEach(img => {
        data.images.push({
          src: img.src,
          alt: img.alt || null,
          width: img.width || null,
          height: img.height || null
        });
      });
      
      // Extract buttons and CTAs
      document.querySelectorAll('button, a[class*="button"], a[class*="btn"]').forEach(btn => {
        data.buttons.push({
          text: btn.textContent.trim(),
          type: btn.tagName.toLowerCase(),
          href: btn.href || null,
          className: btn.className || null
        });
      });
      
      // Get all text content
      const walker = document.createTreeWalker(
        document.body,
        NodeFilter.SHOW_TEXT,
        {
          acceptNode: function(node) {
            const parent = node.parentNode;
            if (parent.tagName === 'SCRIPT' || parent.tagName === 'STYLE' || parent.tagName === 'NOSCRIPT') {
              return NodeFilter.FILTER_REJECT;
            }
            const text = node.textContent.trim();
            if (text.length > 0) {
              return NodeFilter.FILTER_ACCEPT;
            }
            return NodeFilter.FILTER_REJECT;
          }
        }
      );
      
      let node;
      while (node = walker.nextNode()) {
        data.text.push(node.textContent.trim());
      }
      
      return data;
    });
    
    // Generate XML
    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
    xml += `<page url="${escapeXml(pageUrl)}" name="${escapeXml(pageName)}" timestamp="${new Date().toISOString()}">\n`;
    
    // Title
    xml += `  <title>${escapeXml(pageData.title)}</title>\n`;
    
    // Meta tags
    xml += '  <meta>\n';
    for (const [name, content] of Object.entries(pageData.meta)) {
      xml += `    <tag name="${escapeXml(name)}" content="${escapeXml(content)}" />\n`;
    }
    xml += '  </meta>\n';
    
    // Headings
    xml += '  <headings>\n';
    pageData.headings.forEach(heading => {
      xml += `    <heading level="${heading.level}"`;
      if (heading.id) xml += ` id="${escapeXml(heading.id)}"`;
      if (heading.className) xml += ` class="${escapeXml(heading.className)}"`;
      xml += `>${escapeXml(heading.text)}</heading>\n`;
    });
    xml += '  </headings>\n';
    
    // Sections
    xml += '  <sections>\n';
    pageData.sections.forEach(section => {
      xml += `    <section index="${section.index}"`;
      if (section.id) xml += ` id="${escapeXml(section.id)}"`;
      if (section.className) xml += ` class="${escapeXml(section.className)}"`;
      xml += '>\n';
      
      section.content.forEach(item => {
        if (item.type === 'paragraph') {
          xml += `      <paragraph>${escapeXml(item.text)}</paragraph>\n`;
        } else if (item.type === 'ul' || item.type === 'ol') {
          xml += `      <list type="${item.type}">\n`;
          item.items.forEach(listItem => {
            xml += `        <item>${escapeXml(listItem)}</item>\n`;
          });
          xml += '      </list>\n';
        }
      });
      
      xml += '    </section>\n';
    });
    xml += '  </sections>\n';
    
    // Links
    xml += '  <links>\n';
    // Deduplicate links
    const uniqueLinks = pageData.links.filter((link, index, self) => 
      index === self.findIndex(l => l.href === link.href && l.text === link.text)
    ).slice(0, 50); // Limit to 50 unique links
    
    uniqueLinks.forEach(link => {
      xml += `    <link href="${escapeXml(link.href)}" external="${link.isExternal}">${escapeXml(link.text)}</link>\n`;
    });
    xml += '  </links>\n';
    
    // Images
    xml += '  <images>\n';
    // Deduplicate images
    const uniqueImages = pageData.images.filter((img, index, self) => 
      index === self.findIndex(i => i.src === img.src)
    );
    
    uniqueImages.forEach(img => {
      xml += `    <image src="${escapeXml(img.src)}"`;
      if (img.alt) xml += ` alt="${escapeXml(img.alt)}"`;
      if (img.width) xml += ` width="${img.width}"`;
      if (img.height) xml += ` height="${img.height}"`;
      xml += ' />\n';
    });
    xml += '  </images>\n';
    
    // Buttons/CTAs
    xml += '  <buttons>\n';
    // Deduplicate buttons
    const uniqueButtons = pageData.buttons.filter((btn, index, self) => 
      index === self.findIndex(b => b.text === btn.text && b.href === btn.href)
    );
    
    uniqueButtons.forEach(btn => {
      xml += `    <button type="${btn.type}"`;
      if (btn.href) xml += ` href="${escapeXml(btn.href)}"`;
      if (btn.className) xml += ` class="${escapeXml(btn.className)}"`;
      xml += `>${escapeXml(btn.text)}</button>\n`;
    });
    xml += '  </buttons>\n';
    
    // Full text content
    xml += '  <fulltext>\n';
    xml += '    <![CDATA[\n';
    xml += pageData.text.join('\n');
    xml += '\n    ]]>\n';
    xml += '  </fulltext>\n';
    
    xml += '</page>';
    
    return {
      pageName,
      pageUrl,
      xml,
      stats: {
        headings: pageData.headings.length,
        sections: pageData.sections.length,
        links: uniqueLinks.length,
        images: uniqueImages.length,
        buttons: uniqueButtons.length,
        textNodes: pageData.text.length
      }
    };
    
  } catch (error) {
    console.error(`❌ Error extracting ${pageName}:`, error);
    throw error;
  } finally {
    await browser.close();
  }
}

async function extractAllPages() {
  console.log('🚀 Starting XML extraction for all pages...\n');
  
  // Define all main pages to extract
  const pages = [
    { name: 'landing', path: '/' },
    { name: 'solutions', path: '/solutions' },
    { name: 'our-approach', path: '/our-approach' },
    { name: 'contact', path: '/contact' },
    { name: 'faq', path: '/faq' },
    { name: 'tools-business-audit', path: '/tools/business-audit' },
    { name: 'tools-sop-automator', path: '/tools/sop-automator' },
    { name: 'privacy-policy', path: '/privacy-policy' },
    { name: 'terms-of-service', path: '/terms-of-service' }
  ];
  
  // Create output directory
  const outputDir = path.join(__dirname, '..', 'xml-exports');
  await fs.mkdir(outputDir, { recursive: true });
  
  const results = [];
  
  for (const pageInfo of pages) {
    try {
      const url = `http://localhost:3000${pageInfo.path}`;
      const result = await extractPageToXml(pageInfo.name, url);
      
      // Save XML file
      const filename = path.join(outputDir, `${pageInfo.name}.xml`);
      await fs.writeFile(filename, result.xml, 'utf-8');
      
      console.log(`✓ Saved: ${filename}`);
      console.log(`  Stats: ${result.stats.headings} headings, ${result.stats.sections} sections, ${result.stats.links} links`);
      
      results.push(result);
    } catch (error) {
      console.error(`Failed to extract ${pageInfo.name}`);
    }
  }
  
  // Create index XML
  let indexXml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  indexXml += '<site-index>\n';
  results.forEach(result => {
    indexXml += `  <page name="${escapeXml(result.pageName)}" url="${escapeXml(result.pageUrl)}">\n`;
    indexXml += `    <stats>\n`;
    for (const [key, value] of Object.entries(result.stats)) {
      indexXml += `      <${key}>${value}</${key}>\n`;
    }
    indexXml += `    </stats>\n`;
    indexXml += `  </page>\n`;
  });
  indexXml += '</site-index>';
  
  const indexPath = path.join(outputDir, 'index.xml');
  await fs.writeFile(indexPath, indexXml, 'utf-8');
  
  console.log(`\n✓ Created index: ${indexPath}`);
  
  return results;
}

// Run if called directly
if (require.main === module) {
  // Check if dev server is running
  const http = require('http');
  http.get('http://localhost:3000/', (res) => {
    extractAllPages()
      .then((results) => {
        console.log('\n📋 EXTRACTION SUMMARY:');
        console.log('=====================');
        console.log(`✓ Extracted ${results.length} pages to XML`);
        console.log(`✓ Files saved in: xml-exports/`);
        console.log('\nPages extracted:');
        results.forEach(r => console.log(`  - ${r.pageName}`));
      })
      .catch(error => console.error('\n❌ Extraction failed:', error));
  }).on('error', () => {
    console.error('❌ Dev server not running! Please run: npm run dev');
    process.exit(1);
  });
}

module.exports = { extractPageToXml, extractAllPages };