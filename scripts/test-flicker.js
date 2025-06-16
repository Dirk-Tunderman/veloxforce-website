const puppeteer = require('puppeteer');

async function testFlicker() {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  
  console.log('Testing landing page for flicker...');
  
  // Test landing page
  await page.goto('http://localhost:3001', { waitUntil: 'networkidle0' });
  await page.waitForTimeout(1000);
  
  // Reload to check for flicker
  console.log('Reloading landing page...');
  await page.reload({ waitUntil: 'networkidle0' });
  await page.waitForTimeout(1000);
  
  // Navigate to solutions
  console.log('Navigating to solutions page...');
  await page.goto('http://localhost:3001/solutions', { waitUntil: 'networkidle0' });
  await page.waitForTimeout(1000);
  
  // Go back to landing
  console.log('Going back to landing page...');
  await page.goto('http://localhost:3001', { waitUntil: 'networkidle0' });
  await page.waitForTimeout(1000);
  
  // Navigate to our-approach (control page)
  console.log('Navigating to our-approach page (control)...');
  await page.goto('http://localhost:3001/our-approach', { waitUntil: 'networkidle0' });
  await page.waitForTimeout(1000);
  
  console.log('Test complete! Check visually for any flickering.');
  console.log('The fixes should have eliminated the opacity flicker on page load and navigation.');
  
  await browser.close();
}

testFlicker().catch(console.error);