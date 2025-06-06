const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs').promises;

async function splitPageScreenshot(pageName, pageUrl) {
  console.log(`\n🚀 Starting ${pageName} split screenshot capture...`);
  
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    const page = await browser.newPage();
    
    // Set desktop viewport
    await page.setViewport({ width: 1920, height: 1080 });
    
    // Navigate to page
    console.log(`📄 Loading ${pageName} page...`);
    await page.goto(pageUrl, {
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
    
    // Create screenshots directory
    const screenshotDir = path.join(__dirname, '..', 'screenshots', pageName, 'compressed');
    await fs.mkdir(screenshotDir, { recursive: true });
    
    // Calculate split point (roughly in the middle)
    const splitPoint = Math.floor(dimensions.height / 2);
    
    // Screenshot options with compression
    const screenshotOptions = {
      type: 'jpeg',
      quality: 60, // Reduced quality for smaller file size
      fullPage: false
    };
    
    // Capture top half
    console.log('📸 Capturing top half...');
    const topPath = path.join(screenshotDir, `${pageName}-desktop-top-half.jpg`);
    await page.screenshot({
      ...screenshotOptions,
      path: topPath,
      clip: {
        x: 0,
        y: 0,
        width: dimensions.width,
        height: splitPoint
      }
    });
    console.log(`✓ Top half saved: ${topPath}`);
    
    // Capture bottom half
    console.log('📸 Capturing bottom half...');
    const bottomPath = path.join(screenshotDir, `${pageName}-desktop-bottom-half.jpg`);
    await page.screenshot({
      ...screenshotOptions,
      path: bottomPath,
      clip: {
        x: 0,
        y: splitPoint,
        width: dimensions.width,
        height: dimensions.height - splitPoint
      }
    });
    console.log(`✓ Bottom half saved: ${bottomPath}`);
    
    // Find section boundaries for more intelligent split
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
        
        if (distance < minDistance && absoluteTop > pageHeight * 0.3 && absoluteTop < pageHeight * 0.7) {
          minDistance = distance;
          bestBreak = absoluteTop;
        }
      });
      
      return Math.floor(bestBreak);
    });
    
    // Capture using section break
    console.log(`📍 Found section break at: ${sectionBreak}px`);
    
    // Top section
    const topSectionPath = path.join(screenshotDir, `${pageName}-desktop-top-section.jpg`);
    await page.screenshot({
      ...screenshotOptions,
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
    const bottomSectionPath = path.join(screenshotDir, `${pageName}-desktop-bottom-section.jpg`);
    await page.screenshot({
      ...screenshotOptions,
      path: bottomSectionPath,
      clip: {
        x: 0,
        y: sectionBreak,
        width: dimensions.width,
        height: dimensions.height - sectionBreak
      }
    });
    console.log(`✓ Bottom section saved: ${bottomSectionPath}`);
    
    // Get file sizes
    const getFileSize = async (filePath) => {
      const stats = await fs.stat(filePath);
      return (stats.size / 1024).toFixed(1) + ' KB';
    };
    
    console.log('\n📊 File sizes:');
    console.log(`  - Top half: ${await getFileSize(topPath)}`);
    console.log(`  - Bottom half: ${await getFileSize(bottomPath)}`);
    console.log(`  - Top section: ${await getFileSize(topSectionPath)}`);
    console.log(`  - Bottom section: ${await getFileSize(bottomSectionPath)}`);
    
    return {
      pageName,
      dimensions,
      splits: {
        half: { point: splitPoint, top: topPath, bottom: bottomPath },
        section: { point: sectionBreak, top: topSectionPath, bottom: bottomSectionPath }
      }
    };

  } catch (error) {
    console.error(`❌ Error capturing ${pageName}:`, error);
    throw error;
  } finally {
    await browser.close();
  }
}

async function captureAllSplitScreenshots() {
  console.log('🎯 Split Screenshot Capture with Compression\n');
  
  const pages = [
    { name: 'landing', url: 'http://localhost:3000/' },
    { name: 'solutions', url: 'http://localhost:3000/solutions' }
  ];
  
  const results = [];
  
  for (const pageInfo of pages) {
    try {
      const result = await splitPageScreenshot(pageInfo.name, pageInfo.url);
      results.push(result);
    } catch (error) {
      console.error(`Failed to capture ${pageInfo.name}`);
    }
  }
  
  // Summary
  console.log('\n\n📋 CAPTURE SUMMARY:');
  console.log('===================');
  results.forEach(result => {
    console.log(`\n${result.pageName.toUpperCase()}:`);
    console.log(`  Total height: ${result.dimensions.height}px`);
    console.log(`  Half-split at: ${result.splits.half.point}px`);
    console.log(`  Section-split at: ${result.splits.section.point}px`);
  });
  
  console.log('\n💡 Tips:');
  console.log('  - JPEG format used with 60% quality for smaller file sizes');
  console.log('  - Section-based splits align with content boundaries');
  console.log('  - Check screenshots/[page]/compressed/ for all files');
  
  return results;
}

// Run if called directly
if (require.main === module) {
  // Check if dev server is running
  const http = require('http');
  http.get('http://localhost:3000/', (res) => {
    captureAllSplitScreenshots()
      .then(() => console.log('\n✅ All split screenshots completed!'))
      .catch(error => console.error('\n❌ Capture failed:', error));
  }).on('error', () => {
    console.error('❌ Dev server not running! Please run: npm run dev');
    process.exit(1);
  });
}

module.exports = { splitPageScreenshot, captureAllSplitScreenshots };