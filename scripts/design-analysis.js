const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs').promises;

async function analyzeDesignState() {
  console.log('🎨 Analyzing current design state for perfection...\n');
  
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    const page = await browser.newPage();
    
    // Set desktop viewport for analysis
    await page.setViewport({ width: 1440, height: 900 });
    
    // Navigate to page
    await page.goto('http://localhost:3001/', {
      waitUntil: 'networkidle2',
      timeout: 30000
    });
    
    // Wait for content to load
    await new Promise(resolve => setTimeout(resolve, 2000));

    console.log('📄 Page loaded, analyzing design elements...\n');

    // Comprehensive design analysis
    const designAnalysis = await page.evaluate(() => {
      const analysis = {
        colorIssues: [],
        iconIssues: [],
        alignmentIssues: [],
        spacingIssues: [],
        typographyIssues: [],
        accessibilityIssues: [],
        sections: []
      };

      // Check for non-approved colors
      const problematicColors = ['red', 'yellow', 'amber', 'green'];
      const allElements = document.querySelectorAll('*');
      
      allElements.forEach((el, index) => {
        const computedStyle = window.getComputedStyle(el);
        const classList = Array.from(el.classList);
        
        // Check for problematic color classes
        problematicColors.forEach(color => {
          const hasProblematicColor = classList.some(cls => 
            cls.includes(`text-${color}`) || 
            cls.includes(`bg-${color}`) || 
            cls.includes(`border-${color}`)
          );
          
          if (hasProblematicColor && index < 100) { // Limit to first 100 for performance
            analysis.colorIssues.push({
              element: el.tagName.toLowerCase(),
              classes: classList.join(' '),
              problematicColor: color
            });
          }
        });
      });

      // Check icon colors and sizes
      const icons = document.querySelectorAll('svg');
      let blueIcons = 0;
      let grayIcons = 0;
      
      icons.forEach((icon, index) => {
        if (index < 50) { // Limit for performance
          const classList = Array.from(icon.classList);
          const hasBlueColor = classList.some(cls => cls.includes('text-blue'));
          const hasGrayColor = classList.some(cls => cls.includes('text-gray'));
          
          if (hasBlueColor) blueIcons++;
          if (hasGrayColor) grayIcons++;
          
          // Check for proper sizing
          const hasProperSize = classList.some(cls => 
            cls.includes('h-4') || cls.includes('h-5') || cls.includes('h-6') || cls.includes('h-8')
          );
          
          if (!hasProperSize) {
            analysis.iconIssues.push({
              index: index,
              classes: classList.join(' '),
              issue: 'Missing proper size class'
            });
          }
        }
      });

      analysis.iconColorRatio = {
        blue: blueIcons,
        gray: grayIcons,
        ratio: blueIcons / (blueIcons + grayIcons) * 100,
        compliance: (blueIcons / (blueIcons + grayIcons) * 100) <= 15 // Should be ~10%
      };

      // Check text alignment
      const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6');
      textElements.forEach((el, index) => {
        if (index < 30) { // Limit for performance
          const computedStyle = window.getComputedStyle(el);
          const textAlign = computedStyle.textAlign;
          const classList = Array.from(el.classList);
          
          // Body text should be left-aligned, not center
          if (el.tagName.toLowerCase() === 'p' && textAlign === 'center') {
            analysis.alignmentIssues.push({
              element: el.tagName.toLowerCase(),
              issue: 'Body text should be left-aligned',
              classes: classList.join(' ')
            });
          }
        }
      });

      // Check button styles and CTA compliance
      const buttons = document.querySelectorAll('button, a[class*="button"], a[class*="btn"]');
      buttons.forEach((btn, index) => {
        if (index < 20) {
          const classList = Array.from(btn.classList);
          const hasGradient = classList.some(cls => cls.includes('gradient'));
          const hasProperSize = classList.some(cls => 
            cls.includes('px-') && cls.includes('py-')
          );
          
          if (!hasGradient && btn.textContent.includes('Calculate')) {
            analysis.alignmentIssues.push({
              element: 'primary-cta',
              issue: 'Primary CTA missing gradient',
              text: btn.textContent.trim()
            });
          }
        }
      });

      // Analyze sections for spacing and structure
      const sections = document.querySelectorAll('section');
      sections.forEach((section, index) => {
        const classList = Array.from(section.classList);
        const sectionData = {
          index: index,
          classes: classList.join(' '),
          hasProperPadding: classList.some(cls => cls.includes('py-')),
          backgroundClass: classList.find(cls => cls.includes('bg-')) || 'none'
        };
        
        analysis.sections.push(sectionData);
      });

      return analysis;
    });

    // Take screenshot for visual reference
    const screenshotDir = path.join(__dirname, '..', 'screenshots', 'design-analysis');
    await fs.mkdir(screenshotDir, { recursive: true });
    
    const screenshotPath = path.join(screenshotDir, 'current-design-state.jpg');
    await page.screenshot({
      path: screenshotPath,
      type: 'jpeg',
      quality: 90,
      fullPage: true
    });

    // Generate detailed report
    console.log('🔍 DESIGN ANALYSIS REPORT:');
    console.log('=========================\n');

    console.log('🎨 COLOR ISSUES:');
    if (designAnalysis.colorIssues.length === 0) {
      console.log('  ✅ No problematic colors found');
    } else {
      designAnalysis.colorIssues.slice(0, 10).forEach(issue => {
        console.log(`  ❌ ${issue.element}: ${issue.problematicColor} color in "${issue.classes}"`);
      });
      if (designAnalysis.colorIssues.length > 10) {
        console.log(`  ... and ${designAnalysis.colorIssues.length - 10} more issues`);
      }
    }

    console.log('\n🎯 ICON COLOR COMPLIANCE:');
    console.log(`  Blue icons: ${designAnalysis.iconColorRatio.blue}`);
    console.log(`  Gray icons: ${designAnalysis.iconColorRatio.gray}`);
    console.log(`  Blue percentage: ${designAnalysis.iconColorRatio.ratio.toFixed(1)}%`);
    console.log(`  Compliance: ${designAnalysis.iconColorRatio.compliance ? '✅' : '❌'} (should be ~10%)`);

    console.log('\n📐 ALIGNMENT ISSUES:');
    if (designAnalysis.alignmentIssues.length === 0) {
      console.log('  ✅ No alignment issues found');
    } else {
      designAnalysis.alignmentIssues.forEach(issue => {
        console.log(`  ❌ ${issue.element}: ${issue.issue}`);
      });
    }

    console.log('\n📱 ICON SIZE ISSUES:');
    if (designAnalysis.iconIssues.length === 0) {
      console.log('  ✅ No icon size issues found');
    } else {
      designAnalysis.iconIssues.slice(0, 5).forEach(issue => {
        console.log(`  ❌ Icon ${issue.index}: ${issue.issue}`);
      });
    }

    console.log('\n📄 SECTION ANALYSIS:');
    designAnalysis.sections.forEach((section, index) => {
      console.log(`  Section ${index + 1}: ${section.backgroundClass} - Padding: ${section.hasProperPadding ? '✅' : '❌'}`);
    });

    console.log(`\n📸 Screenshot saved: ${screenshotPath}`);

    // Save detailed analysis
    const analysisPath = path.join(screenshotDir, 'design-analysis.json');
    await fs.writeFile(analysisPath, JSON.stringify(designAnalysis, null, 2));
    console.log(`📊 Analysis data saved: ${analysisPath}`);

    return designAnalysis;

  } catch (error) {
    console.error('❌ Error during design analysis:', error);
    throw error;
  } finally {
    await browser.close();
  }
}

// Run analysis
if (require.main === module) {
  analyzeDesignState()
    .then(() => console.log('\n✅ Design analysis complete!'))
    .catch(error => console.error('\n❌ Analysis failed:', error));
}

module.exports = { analyzeDesignState };