const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs').promises;

async function analyzeSolutionsPage() {
  console.log('🚀 Starting Solutions Page Analysis...\n');
  
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    const page = await browser.newPage();
    const results = {
      timestamp: new Date().toISOString(),
      url: 'http://localhost:3001/solutions',
      viewports: {},
      performance: {},
      content: {},
      issues: []
    };

    // Navigate to page
    console.log('📄 Loading solutions page...');
    await page.goto(results.url, {
      waitUntil: 'networkidle2',
      timeout: 30000
    });

    // Analyze different viewports
    const viewports = [
      { name: 'desktop', width: 1920, height: 1080 },
      { name: 'tablet', width: 768, height: 1024 },
      { name: 'mobile', width: 375, height: 812 }
    ];

    for (const viewport of viewports) {
      console.log(`\n📱 Analyzing ${viewport.name} view...`);
      await page.setViewport({ width: viewport.width, height: viewport.height });
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Take screenshot
      const screenshotDir = path.join(__dirname, '..', 'screenshots', 'analysis');
      await fs.mkdir(screenshotDir, { recursive: true });
      const screenshotPath = path.join(screenshotDir, `solutions-${viewport.name}.png`);
      await page.screenshot({ path: screenshotPath, fullPage: true });
      console.log(`  ✓ Screenshot saved: ${screenshotPath}`);

      // Check for horizontal scroll
      const hasHorizontalScroll = await page.evaluate(() => {
        return document.documentElement.scrollWidth > document.documentElement.clientWidth;
      });
      
      if (hasHorizontalScroll) {
        results.issues.push(`Horizontal scroll detected on ${viewport.name}`);
      }

      // Check above-the-fold content
      const aboveFoldContent = await page.evaluate(() => {
        const elements = document.elementsFromPoint(window.innerWidth / 2, window.innerHeight / 2);
        return {
          hasHeroSection: !!document.querySelector('.hero-section, [class*="hero"]'),
          hasClearHeading: !!document.querySelector('h1'),
          hasCallToAction: !!document.querySelector('button, a[href*="contact"], a[href*="book"]')
        };
      });

      results.viewports[viewport.name] = {
        hasHorizontalScroll,
        aboveFoldContent,
        screenshot: screenshotPath
      };
    }

    // Reset to desktop for detailed analysis
    await page.setViewport({ width: 1920, height: 1080 });

    // Analyze page content
    console.log('\n📊 Analyzing page content...');
    const contentAnalysis = await page.evaluate(() => {
      const analysis = {
        headings: {},
        images: [],
        buttons: [],
        links: [],
        text: {}
      };

      // Count headings
      ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].forEach(tag => {
        const headings = document.querySelectorAll(tag);
        analysis.headings[tag] = {
          count: headings.length,
          texts: Array.from(headings).map(h => h.textContent.trim()).slice(0, 3)
        };
      });

      // Analyze images
      const images = document.querySelectorAll('img');
      analysis.images = Array.from(images).map(img => ({
        src: img.src,
        alt: img.alt,
        hasAlt: !!img.alt,
        loading: img.loading,
        width: img.width,
        height: img.height
      })).slice(0, 10);

      // Find CTAs
      const buttons = document.querySelectorAll('button, a[class*="button"], a[class*="btn"]');
      analysis.buttons = Array.from(buttons).map(btn => ({
        text: btn.textContent.trim(),
        href: btn.href || null,
        classes: btn.className
      })).slice(0, 10);

      // Text analysis
      const textContent = document.body.textContent;
      analysis.text = {
        totalLength: textContent.length,
        wordCount: textContent.split(/\s+/).filter(word => word.length > 0).length
      };

      return analysis;
    });

    results.content = contentAnalysis;

    // Performance metrics
    console.log('\n⚡ Measuring performance...');
    const metrics = await page.metrics();
    results.performance = {
      domContentLoaded: `${Math.round(metrics.DOMContentLoaded)}ms`,
      layoutDuration: `${Math.round(metrics.LayoutDuration)}ms`,
      scriptDuration: `${Math.round(metrics.ScriptDuration)}ms`,
      documents: metrics.Documents,
      nodes: metrics.Nodes
    };

    // Check for common issues
    console.log('\n🔍 Checking for common issues...');
    
    // Check for missing alt texts
    const missingAltCount = contentAnalysis.images.filter(img => !img.hasAlt).length;
    if (missingAltCount > 0) {
      results.issues.push(`${missingAltCount} images missing alt text`);
    }

    // Check for proper heading hierarchy
    if (contentAnalysis.headings.h1.count === 0) {
      results.issues.push('No H1 heading found');
    } else if (contentAnalysis.headings.h1.count > 1) {
      results.issues.push('Multiple H1 headings found');
    }

    // Save analysis results
    const resultsPath = path.join(__dirname, '..', 'screenshots', 'analysis', 'results.json');
    await fs.writeFile(resultsPath, JSON.stringify(results, null, 2));
    console.log(`\n✓ Analysis results saved: ${resultsPath}`);

    // Print summary
    console.log('\n📋 ANALYSIS SUMMARY:');
    console.log('===================');
    console.log(`✓ Screenshots captured for ${Object.keys(results.viewports).length} viewports`);
    console.log(`✓ Found ${contentAnalysis.headings.h1.count} H1, ${contentAnalysis.headings.h2.count} H2 headings`);
    console.log(`✓ ${contentAnalysis.images.length} images analyzed`);
    console.log(`✓ ${contentAnalysis.buttons.length} CTAs found`);
    console.log(`✓ Page contains ~${contentAnalysis.text.wordCount} words`);
    
    if (results.issues.length > 0) {
      console.log('\n⚠️  Issues found:');
      results.issues.forEach(issue => console.log(`   - ${issue}`));
    } else {
      console.log('\n✅ No major issues detected!');
    }

    return results;

  } catch (error) {
    console.error('❌ Error during analysis:', error);
    throw error;
  } finally {
    await browser.close();
  }
}

// Run the analysis
if (require.main === module) {
  analyzeSolutionsPage()
    .then(() => console.log('\n✅ Analysis completed successfully!'))
    .catch(error => console.error('\n❌ Analysis failed:', error));
}

module.exports = { analyzeSolutionsPage };