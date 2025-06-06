const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs').promises;

async function splitLandingPageScreenshot() {
  console.log('🚀 Starting landing page split screenshot capture...\n');
  
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    const page = await browser.newPage();
    
    // Set desktop viewport
    await page.setViewport({ width: 1920, height: 1080 });
    
    // Navigate to landing page
    console.log('📄 Loading landing page...');
    await page.goto('http://localhost:3000/', {
      waitUntil: 'networkidle2',
      timeout: 30000
    });
    
    // Wait for animations
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Get page dimensions
    const dimensions = await page.evaluate(() => {
      return {
        width: document.documentElement.scrollWidth,
        height: document.documentElement.scrollHeight,
        viewportHeight: window.innerHeight
      };
    });
    
    console.log(`📏 Page dimensions: ${dimensions.width}x${dimensions.height}px`);
    console.log(`📏 Viewport height: ${dimensions.viewportHeight}px`);
    
    // Create screenshots directory
    const screenshotDir = path.join(__dirname, '..', 'screenshots', 'landing');
    await fs.mkdir(screenshotDir, { recursive: true });
    
    // Calculate split point (roughly in the middle)
    const splitPoint = Math.floor(dimensions.height / 2);
    
    // Capture top half
    console.log('\n📸 Capturing top half...');
    const topPath = path.join(screenshotDir, 'landing-desktop-top-half.png');
    await page.screenshot({
      path: topPath,
      clip: {
        x: 0,
        y: 0,
        width: dimensions.width,
        height: splitPoint
      }
    });
    console.log(`✓ Top half saved: ${topPath}`);
    console.log(`  Height: ${splitPoint}px`);
    
    // Capture bottom half
    console.log('\n📸 Capturing bottom half...');
    const bottomPath = path.join(screenshotDir, 'landing-desktop-bottom-half.png');
    await page.screenshot({
      path: bottomPath,
      clip: {
        x: 0,
        y: splitPoint,
        width: dimensions.width,
        height: dimensions.height - splitPoint
      }
    });
    console.log(`✓ Bottom half saved: ${bottomPath}`);
    console.log(`  Height: ${dimensions.height - splitPoint}px`);
    
    // Also create a version split by sections (more intelligent split)
    console.log('\n📸 Creating section-based split...');
    
    // Scroll to middle and find a good section break
    await page.evaluate((scrollY) => window.scrollTo(0, scrollY), splitPoint - dimensions.viewportHeight/2);
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Find section boundaries near the middle
    const sectionBreak = await page.evaluate(() => {
      const sections = document.querySelectorAll('section, [class*="section"], div[class*="py-16"], div[class*="py-20"], div[class*="py-24"]');
      const pageHeight = document.documentElement.scrollHeight;
      const targetY = pageHeight / 2;
      
      let bestBreak = targetY;
      let minDistance = Infinity;
      
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const absoluteTop = window.scrollY + rect.top;
        const distance = Math.abs(absoluteTop - targetY);
        
        if (distance < minDistance) {
          minDistance = distance;
          bestBreak = absoluteTop;
        }
      });
      
      return Math.floor(bestBreak);
    });
    
    // Capture using section break
    console.log(`📍 Found section break at: ${sectionBreak}px`);
    
    // Top section
    const topSectionPath = path.join(screenshotDir, 'landing-desktop-top-section.png');
    await page.screenshot({
      path: topSectionPath,
      clip: {
        x: 0,
        y: 0,
        width: dimensions.width,
        height: sectionBreak
      }
    });
    console.log(`✓ Top section saved: ${topSectionPath}`);
    
    // Bottom section
    const bottomSectionPath = path.join(screenshotDir, 'landing-desktop-bottom-section.png');
    await page.screenshot({
      path: bottomSectionPath,
      clip: {
        x: 0,
        y: sectionBreak,
        width: dimensions.width,
        height: dimensions.height - sectionBreak
      }
    });
    console.log(`✓ Bottom section saved: ${bottomSectionPath}`);
    
    // Summary
    console.log('\n📋 SPLIT SUMMARY:');
    console.log('=================');
    console.log('Half-split version:');
    console.log(`  - Top: 0 to ${splitPoint}px`);
    console.log(`  - Bottom: ${splitPoint} to ${dimensions.height}px`);
    console.log('\nSection-split version:');
    console.log(`  - Top: 0 to ${sectionBreak}px`);
    console.log(`  - Bottom: ${sectionBreak} to ${dimensions.height}px`);
    
    return {
      dimensions,
      splits: {
        half: { point: splitPoint, top: topPath, bottom: bottomPath },
        section: { point: sectionBreak, top: topSectionPath, bottom: bottomSectionPath }
      }
    };

  } catch (error) {
    console.error('❌ Error during screenshot capture:', error);
    throw error;
  } finally {
    await browser.close();
  }
}

// Run if called directly
if (require.main === module) {
  // Check if dev server is running
  const http = require('http');
  http.get('http://localhost:3000/', (res) => {
    splitLandingPageScreenshot()
      .then(() => console.log('\n✅ Split screenshots completed!'))
      .catch(error => console.error('\n❌ Split failed:', error));
  }).on('error', () => {
    console.error('❌ Dev server not running! Please run: npm run dev');
    process.exit(1);
  });
}

module.exports = { splitLandingPageScreenshot };