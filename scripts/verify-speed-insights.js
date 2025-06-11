#!/usr/bin/env node

/**
 * Vercel Speed Insights Verification Script
 * 
 * This script verifies that Speed Insights is properly implemented
 * according to the official Vercel documentation.
 */

const fs = require('fs');
const path = require('path');

console.log('🔍 Verifying Vercel Speed Insights Implementation...\n');

// Check if package is installed
function checkPackageInstallation() {
  console.log('1. Checking package installation...');
  
  try {
    const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
    const speedInsightsVersion = packageJson.dependencies?.['@vercel/speed-insights'];
    
    if (speedInsightsVersion) {
      console.log(`   ✅ @vercel/speed-insights installed (${speedInsightsVersion})`);
      return true;
    } else {
      console.log('   ❌ @vercel/speed-insights not found in dependencies');
      return false;
    }
  } catch (error) {
    console.log('   ❌ Could not read package.json');
    return false;
  }
}

// Check if component is properly imported and used
function checkComponentImplementation() {
  console.log('\n2. Checking component implementation...');
  
  const analyticsProviderPath = 'src/components/analytics/analytics-provider.tsx';
  
  try {
    const content = fs.readFileSync(analyticsProviderPath, 'utf8');
    
    // Check for proper import
    const hasImport = content.includes("import { SpeedInsights } from '@vercel/speed-insights/next'");
    if (hasImport) {
      console.log('   ✅ SpeedInsights component imported correctly');
    } else {
      console.log('   ❌ SpeedInsights import not found or incorrect');
      return false;
    }
    
    // Check for component usage
    const hasComponent = content.includes('<SpeedInsights />');
    if (hasComponent) {
      console.log('   ✅ SpeedInsights component used in JSX');
    } else {
      console.log('   ❌ SpeedInsights component not found in JSX');
      return false;
    }
    
    return true;
  } catch (error) {
    console.log(`   ❌ Could not read ${analyticsProviderPath}`);
    return false;
  }
}

// Check if analytics provider is used in layout
function checkLayoutIntegration() {
  console.log('\n3. Checking layout integration...');
  
  const layoutPath = 'src/app/layout.tsx';
  
  try {
    const content = fs.readFileSync(layoutPath, 'utf8');
    
    // Check for AnalyticsProvider import
    const hasImport = content.includes('AnalyticsProvider');
    if (hasImport) {
      console.log('   ✅ AnalyticsProvider imported in layout');
    } else {
      console.log('   ❌ AnalyticsProvider not found in layout');
      return false;
    }
    
    // Check for AnalyticsProvider usage
    const hasUsage = content.includes('<AnalyticsProvider>');
    if (hasUsage) {
      console.log('   ✅ AnalyticsProvider used in layout JSX');
    } else {
      console.log('   ❌ AnalyticsProvider not used in layout JSX');
      return false;
    }
    
    return true;
  } catch (error) {
    console.log(`   ❌ Could not read ${layoutPath}`);
    return false;
  }
}

// Check build configuration
function checkBuildConfig() {
  console.log('\n4. Checking build configuration...');
  
  try {
    // Check if Next.js config exists and is compatible
    const nextConfigPath = 'next.config.js';
    if (fs.existsSync(nextConfigPath)) {
      console.log('   ✅ Next.js config found');
    } else {
      console.log('   ⚠️  No next.config.js found (this is okay for basic setups)');
    }
    
    // Check TypeScript config
    const tsConfigPath = 'tsconfig.json';
    if (fs.existsSync(tsConfigPath)) {
      console.log('   ✅ TypeScript config found');
    } else {
      console.log('   ⚠️  No tsconfig.json found');
    }
    
    return true;
  } catch (error) {
    console.log('   ❌ Error checking build configuration');
    return false;
  }
}

// Main verification function
function runVerification() {
  const checks = [
    checkPackageInstallation(),
    checkComponentImplementation(),
    checkLayoutIntegration(),
    checkBuildConfig()
  ];
  
  const passedChecks = checks.filter(Boolean).length;
  const totalChecks = checks.length;
  
  console.log('\n' + '='.repeat(50));
  console.log(`📊 Verification Results: ${passedChecks}/${totalChecks} checks passed`);
  
  if (passedChecks === totalChecks) {
    console.log('\n🎉 All checks passed! Your Speed Insights implementation is ready.');
    console.log('\n📋 Next steps:');
    console.log('   1. Enable Speed Insights in your Vercel dashboard');
    console.log('   2. Deploy your application to Vercel');
    console.log('   3. Wait for data to appear (24-48 hours)');
    console.log('   4. View metrics in the Speed Insights tab');
  } else {
    console.log('\n⚠️  Some checks failed. Please review the issues above.');
    console.log('\n📋 Common fixes:');
    console.log('   - Run: npm install @vercel/speed-insights');
    console.log('   - Check import statements in analytics provider');
    console.log('   - Ensure AnalyticsProvider wraps your app');
  }
  
  console.log('\n📚 Documentation: https://vercel.com/docs/speed-insights/quickstart');
  console.log('='.repeat(50));
}

// Run the verification
runVerification();
