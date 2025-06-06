const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

async function takeScreenshot(url, outputPath) {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  try {
    const page = await browser.newPage();
    
    // Set viewport for desktop
    await page.setViewport({ width: 1920, height: 1080 });
    
    // Navigate to the page
    await page.goto(url, {
      waitUntil: 'networkidle2',
      timeout: 30000
    });
    
    // Wait a bit for any animations
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Take full page screenshot
    await page.screenshot({
      path: outputPath,
      fullPage: true
    });
    
    console.log(`Screenshot saved to: ${outputPath}`);
    
    // Also take mobile screenshot
    await page.setViewport({ width: 375, height: 812 }); // iPhone X viewport
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const mobilePath = outputPath.replace('.png', '-mobile.png');
    await page.screenshot({
      path: mobilePath,
      fullPage: true
    });
    
    console.log(`Mobile screenshot saved to: ${mobilePath}`);
    
  } catch (error) {
    console.error('Error taking screenshot:', error);
  } finally {
    await browser.close();
  }
}

// Create screenshots directory if it doesn't exist
const screenshotsDir = path.join(__dirname, '..', 'screenshots');
if (!fs.existsSync(screenshotsDir)) {
  fs.mkdirSync(screenshotsDir, { recursive: true });
}

// Get page to screenshot from command line argument
const page = process.argv[2] || 'landing';
const timestamp = new Date().toISOString().replace(/:/g, '-').split('.')[0];
const outputPath = path.join(screenshotsDir, `${page}-${timestamp}.png`);

// Use port 3000 as that's where dev server is running
const port = 3000;

takeScreenshot(`http://localhost:${port}/${page === 'landing' ? '' : page}`, outputPath);