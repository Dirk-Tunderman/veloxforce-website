const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs').promises;

async function verifyLandingPageRevisions() {
  console.log('🔍 Verifying comprehensive landing page revisions...\n');
  
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    const page = await browser.newPage();
    
    // Define breakpoints for responsive testing
    const breakpoints = [
      { name: 'mobile', width: 375, height: 812, device: 'iPhone SE' },
      { name: 'tablet', width: 768, height: 1024, device: 'iPad' },
      { name: 'desktop', width: 1440, height: 900, device: 'Desktop' }
    ];

    // Create verification directory
    const verifyDir = path.join(__dirname, '..', 'screenshots', 'verification');
    await fs.mkdir(verifyDir, { recursive: true });

    const results = {
      timestamp: new Date().toISOString(),
      url: 'http://localhost:3001/',
      breakpoints: {},
      verifications: {}
    };

    // Navigate to page (updated port)
    results.url = 'http://localhost:3001/';
    await page.goto(results.url, {
      waitUntil: 'networkidle2',
      timeout: 30000
    });

    console.log('📄 Page loaded successfully\n');

    // Test each breakpoint
    for (const breakpoint of breakpoints) {
      console.log(`📱 Testing ${breakpoint.device} (${breakpoint.width}x${breakpoint.height})`);
      
      await page.setViewport({ 
        width: breakpoint.width, 
        height: breakpoint.height 
      });
      
      // Wait for responsive changes
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Capture full page screenshot
      const screenshotPath = path.join(verifyDir, `revised-landing-${breakpoint.name}.jpg`);
      await page.screenshot({
        path: screenshotPath,
        type: 'jpeg',
        quality: 80,
        fullPage: true
      });

      // Check for horizontal scroll
      const hasHorizontalScroll = await page.evaluate(() => {
        return document.documentElement.scrollWidth > document.documentElement.clientWidth;
      });

      results.breakpoints[breakpoint.name] = {
        screenshot: screenshotPath,
        hasHorizontalScroll,
        device: breakpoint.device
      };

      console.log(`  ✓ Screenshot saved: ${screenshotPath}`);
      if (hasHorizontalScroll) {
        console.log(`  ⚠️ Horizontal scroll detected on ${breakpoint.device}`);
      }
    }

    // Reset to desktop for content verification
    await page.setViewport({ width: 1440, height: 900 });

    console.log('\n🔍 Verifying content changes...');

    // Verify key messaging changes
    const contentVerification = await page.evaluate(() => {
      const verification = {
        title: document.title,
        messaging: {},
        colors: {},
        education: {}
      };

      // Check for Service-as-Software messaging
      const h1 = document.querySelector('h1');
      verification.messaging.headline = h1 ? h1.textContent.trim() : 'Not found';
      verification.messaging.hasServiceAsSoftware = document.body.textContent.includes('Service-as-Software');
      verification.messaging.hasAutomationLanguage = document.body.textContent.includes('automation') || 
                                                    document.body.textContent.includes('automated');

      // Check for education box
      const educationBox = document.querySelector('[class*="blue-50"]');
      verification.education.hasEducationBox = !!educationBox;
      verification.education.hasApproachLink = document.body.textContent.includes('How Service-as-Software Works');

      // Check for red colors (should be none)
      const redElements = document.querySelectorAll('[class*="red-"]');
      verification.colors.hasRedColors = redElements.length > 0;
      verification.colors.redElementCount = redElements.length;

      // Check for placeholder content
      verification.messaging.hasPlaceholders = document.body.textContent.includes('[') && 
                                             document.body.textContent.includes('coming soon]');

      return verification;
    });

    results.verifications = contentVerification;

    console.log('\n📋 VERIFICATION RESULTS:');
    console.log('========================');
    console.log(`Title: ${contentVerification.title}`);
    console.log(`Headline: ${contentVerification.messaging.headline}`);
    console.log(`Service-as-Software messaging: ${contentVerification.messaging.hasServiceAsSoftware ? '✅' : '❌'}`);
    console.log(`Automation language removed: ${!contentVerification.messaging.hasAutomationLanguage ? '✅' : '⚠️'}`);
    console.log(`Education box present: ${contentVerification.education.hasEducationBox ? '✅' : '❌'}`);
    console.log(`Approach page link: ${contentVerification.education.hasApproachLink ? '✅' : '❌'}`);
    console.log(`No red colors: ${!contentVerification.colors.hasRedColors ? '✅' : '❌'} (${contentVerification.colors.redElementCount} red elements)`);
    console.log(`Placeholder content: ${contentVerification.messaging.hasPlaceholders ? '✅' : '❌'}`);

    // Check responsive issues
    const responsiveIssues = Object.values(results.breakpoints).filter(bp => bp.hasHorizontalScroll);
    console.log(`\nResponsive issues: ${responsiveIssues.length === 0 ? '✅ None' : `⚠️ ${responsiveIssues.length} breakpoints with horizontal scroll`}`);

    // Save verification results
    const resultsPath = path.join(verifyDir, 'verification-results.json');
    await fs.writeFile(resultsPath, JSON.stringify(results, null, 2));
    console.log(`\n✓ Verification results saved: ${resultsPath}`);

    return results;

  } catch (error) {
    console.error('❌ Error during verification:', error);
    throw error;
  } finally {
    await browser.close();
  }
}

// Run verification
if (require.main === module) {
  verifyLandingPageRevisions()
    .then(() => {
      console.log('\n✅ Verification completed successfully!');
      console.log('\nScreenshots available in: screenshots/verification/');
    })
    .catch(error => console.error('\n❌ Verification failed:', error));
}

module.exports = { verifyLandingPageRevisions };