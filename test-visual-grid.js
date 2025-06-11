const puppeteer = require('puppeteer');

async function testVisualGrid() {
  const browser = await puppeteer.launch({ 
    headless: false,
    devtools: true,
    defaultViewport: null
  });
  const page = await browser.newPage();
  
  // Listen for console logs
  page.on('console', msg => {
    console.log('BROWSER LOG:', msg.text());
  });
  
  try {
    console.log('🚀 Opening service quiz...');
    await page.goto('http://localhost:3001/tools/service-quiz', { waitUntil: 'networkidle0' });
    
    // Wait for page to load
    await page.waitForTimeout(2000);
    
    console.log('📝 Filling out initial questions...');
    
    // Fill company size (first question)
    await page.click('input[value="26-50"]');
    await page.waitForTimeout(500);
    
    // Fill user role
    await page.click('input[value="owner-ceo"]');
    await page.waitForTimeout(500);
    
    // Fill business model
    await page.click('input[value="b2b"]');
    await page.waitForTimeout(500);
    
    // Click Continue to get to department selection
    await page.click('button:has-text("Continue")');
    await page.waitForTimeout(1000);
    
    console.log('🎯 Selecting Customer Service department...');
    // Select Customer Service department
    await page.click('[data-testid="department-customer_service"], button:has-text("Customer Service")');
    await page.waitForTimeout(1000);
    
    // Continue to Customer Service questions
    await page.click('button:has-text("Continue")');
    await page.waitForTimeout(2000);
    
    console.log('👀 Looking for visual grid questions...');
    
    // Wait a bit more to see console logs
    await page.waitForTimeout(5000);
    
    console.log('✅ Test completed - check browser for visual grids!');
    
  } catch (error) {
    console.error('❌ Test failed:', error);
  }
  
  // Keep browser open for manual inspection
  console.log('🔍 Browser will stay open for manual inspection...');
}

testVisualGrid();