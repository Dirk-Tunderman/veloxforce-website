const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs').promises;

async function capturePageScreenshots(pageName, pagePath) {
  console.log(`\n📸 Capturing ${pageName} screenshots...`);
  
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    const page = await browser.newPage();
    
    // Define viewport sizes
    const viewports = [
      { name: 'desktop', width: 1920, height: 1080 },
      { name: 'tablet', width: 768, height: 1024 },
      { name: 'mobile', width: 375, height: 812 }
    ];

    // Create screenshots directory
    const screenshotDir = path.join(__dirname, '..', 'screenshots', pageName);
    await fs.mkdir(screenshotDir, { recursive: true });

    const results = {
      page: pageName,
      url: `http://localhost:3000${pagePath}`,
      screenshots: {},
      metrics: {}
    };

    // Navigate to page
    await page.goto(results.url, {
      waitUntil: 'networkidle2',
      timeout: 30000
    });

    // Capture screenshots for each viewport
    for (const viewport of viewports) {
      await page.setViewport({ width: viewport.width, height: viewport.height });
      
      // Wait for any animations
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Full page screenshot
      const fullPath = path.join(screenshotDir, `${pageName}-${viewport.name}-full.png`);
      await page.screenshot({
        path: fullPath,
        fullPage: true
      });
      
      // Above the fold screenshot
      const atfPath = path.join(screenshotDir, `${pageName}-${viewport.name}-atf.png`);
      await page.screenshot({
        path: atfPath,
        fullPage: false
      });
      
      results.screenshots[viewport.name] = {
        full: fullPath,
        aboveTheFold: atfPath
      };
      
      console.log(`  ✓ ${viewport.name} screenshots saved`);
    }

    // Get performance metrics
    const metrics = await page.metrics();
    results.metrics = {
      documents: metrics.Documents,
      nodes: metrics.Nodes,
      layoutDuration: Math.round(metrics.LayoutDuration),
      scriptDuration: Math.round(metrics.ScriptDuration)
    };

    // Save results
    const resultsPath = path.join(screenshotDir, 'capture-info.json');
    await fs.writeFile(resultsPath, JSON.stringify(results, null, 2));

    return results;

  } catch (error) {
    console.error(`❌ Error capturing ${pageName}:`, error.message);
    throw error;
  } finally {
    await browser.close();
  }
}

async function captureAllPages() {
  console.log('🚀 Starting page capture workflow...\n');
  
  const pages = [
    { name: 'landing', path: '/' },
    { name: 'our-approach', path: '/our-approach' }
  ];

  const results = [];

  for (const pageInfo of pages) {
    try {
      const result = await capturePageScreenshots(pageInfo.name, pageInfo.path);
      results.push(result);
    } catch (error) {
      console.error(`Failed to capture ${pageInfo.name}`);
    }
  }

  // Summary
  console.log('\n📋 CAPTURE SUMMARY:');
  console.log('==================');
  results.forEach(result => {
    console.log(`\n${result.page}:`);
    console.log(`  - URL: ${result.url}`);
    console.log(`  - Screenshots: ${Object.keys(result.screenshots).length} viewports`);
    console.log(`  - DOM Nodes: ${result.metrics.nodes}`);
  });

  return results;
}

// Run if called directly
if (require.main === module) {
  captureAllPages()
    .then(() => {
      console.log('\n✅ All captures completed!');
      console.log('\nScreenshots saved in:');
      console.log('  - screenshots/landing/');
      console.log('  - screenshots/how-it-works/');
    })
    .catch(error => console.error('\n❌ Capture workflow failed:', error));
}

module.exports = { capturePageScreenshots, captureAllPages };