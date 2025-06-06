const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs').promises;

async function captureScreenshots() {
  const browser = await puppeteer.launch({
    headless: true,
    defaultViewport: null,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    const page = await browser.newPage();
    
    // Define viewport sizes for responsive testing
    const viewports = [
      { name: 'desktop', width: 1920, height: 1080 },
      { name: 'laptop', width: 1366, height: 768 },
      { name: 'tablet', width: 768, height: 1024 },
      { name: 'mobile', width: 375, height: 812 }
    ];

    // Create screenshots directory if it doesn't exist
    const screenshotDir = path.join(__dirname, '..', 'screenshots', 'solutions-page');
    await fs.mkdir(screenshotDir, { recursive: true });

    // Navigate to the solutions page
    await page.goto('http://localhost:3000/solutions', {
      waitUntil: 'networkidle2',
      timeout: 30000
    });

    // Capture screenshots at different viewport sizes
    for (const viewport of viewports) {
      await page.setViewport({ width: viewport.width, height: viewport.height });
      
      // Wait for any animations to complete
      await page.waitForTimeout(1000);
      
      // Capture full page screenshot
      const screenshotPath = path.join(screenshotDir, `solutions-${viewport.name}-full.png`);
      await page.screenshot({
        path: screenshotPath,
        fullPage: true
      });
      
      console.log(`✓ Captured ${viewport.name} screenshot: ${screenshotPath}`);
      
      // Capture above-the-fold screenshot
      const atfPath = path.join(screenshotDir, `solutions-${viewport.name}-atf.png`);
      await page.screenshot({
        path: atfPath,
        fullPage: false
      });
      
      console.log(`✓ Captured ${viewport.name} above-the-fold screenshot: ${atfPath}`);
    }

    // Capture specific sections
    const sections = [
      { selector: '.hero-section', name: 'hero' },
      { selector: '.problem-section', name: 'problem' },
      { selector: '.solution-section', name: 'solution' },
      { selector: '.roi-section', name: 'roi' },
      { selector: '.cta-section', name: 'cta' }
    ];

    // Reset to desktop viewport for section captures
    await page.setViewport({ width: 1920, height: 1080 });

    for (const section of sections) {
      try {
        const element = await page.$(section.selector);
        if (element) {
          const sectionPath = path.join(screenshotDir, `section-${section.name}.png`);
          await element.screenshot({ path: sectionPath });
          console.log(`✓ Captured ${section.name} section: ${sectionPath}`);
        } else {
          console.log(`⚠ Section ${section.name} not found (selector: ${section.selector})`);
        }
      } catch (error) {
        console.log(`⚠ Error capturing ${section.name} section: ${error.message}`);
      }
    }

    // Performance metrics
    const metrics = await page.metrics();
    console.log('\nPerformance Metrics:');
    console.log(`- DOM Content Loaded: ${metrics.DOMContentLoaded}ms`);
    console.log(`- Layout Duration: ${metrics.LayoutDuration}ms`);
    console.log(`- Script Duration: ${metrics.ScriptDuration}ms`);

    // Accessibility tree snapshot
    const snapshot = await page.accessibility.snapshot();
    const accessibilityPath = path.join(screenshotDir, 'accessibility-tree.json');
    await fs.writeFile(accessibilityPath, JSON.stringify(snapshot, null, 2));
    console.log(`\n✓ Saved accessibility tree: ${accessibilityPath}`);

  } catch (error) {
    console.error('Error during screenshot capture:', error);
  } finally {
    await browser.close();
  }
}

// Run the workflow
if (require.main === module) {
  captureScreenshots()
    .then(() => console.log('\n✅ Screenshot workflow completed'))
    .catch(error => console.error('❌ Workflow failed:', error));
}

module.exports = { captureScreenshots };