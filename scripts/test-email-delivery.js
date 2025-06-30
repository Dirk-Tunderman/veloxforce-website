#!/usr/bin/env node

/**
 * Email Delivery Diagnostic Script
 * Tests various email configurations to identify delivery issues
 */

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3001'

async function testEmailEndpoint(endpoint, data, testName) {
  console.log(`\n🧪 ${testName}`)
  console.log('='.repeat(50))
  
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })

    const result = await response.json()
    
    if (response.ok && result.success) {
      console.log(`✅ ${testName} - SUCCESS`)
      console.log(`   Email ID: ${result.emailId}`)
      console.log(`   Message: ${result.message}`)
      return true
    } else {
      console.log(`❌ ${testName} - FAILED`)
      console.log(`   Status: ${response.status}`)
      console.log(`   Error: ${result.error}`)
      console.log(`   Details: ${JSON.stringify(result, null, 2)}`)
      return false
    }
  } catch (error) {
    console.log(`❌ ${testName} - ERROR`)
    console.log(`   Error: ${error.message}`)
    return false
  }
}

async function runEmailDiagnostics() {
  console.log('📧 EMAIL DELIVERY DIAGNOSTICS')
  console.log('='.repeat(60))
  console.log(`🌐 Testing against: ${BASE_URL}`)
  console.log(`📧 Test email: dirk.tunderman@outlook.com`)
  
  const testEmail = 'team@veloxforce.ai'
  const results = []

  // Test 1: Basic email test with multiple domains
  results.push(await testEmailEndpoint(
    '/api/test-email',
    { email: testEmail },
    'Multi-Domain Email Test'
  ))

  // Test 2: Simple email service test
  results.push(await testEmailEndpoint(
    '/api/test-simple-email',
    { 
      email: testEmail,
      companyName: 'Email Diagnostic Test'
    },
    'Simple Email Service Test'
  ))

  // Test 3: Full report generation (if working)
  console.log('\n🧪 Full Report Generation Test')
  console.log('='.repeat(50))
  console.log('⚠️  This test will trigger the full report generation pipeline')
  console.log('   Including website scraping, AI analysis, PDF generation, and email')
  
  const fullTestData = {
    contactDetails: {
      full_name: "Email Test User",
      business_email: testEmail,
      company_name: "Email Diagnostic Company",
      website: "https://veloxforce.ai",
      phone_number: "+1234567890"
    },
    quizAnswers: {
      company_size: "11-25",
      role: "decision-maker",
      department_focus: "marketing",
      marketing_channels: ["social-media", "content-marketing"],
      content_creation_time: "low",
      marketing_pain_points: ["content-creation-time"],
      lead_generation_volume: "moderate",
      biggest_marketing_challenge: ["strategic_creative"],
      marketing_measurement: ["website-analytics"]
    },
    departmentRoute: "marketing",
    summary: {
      selectedDepartment: "marketing",
      calculatedScore: 85,
      estimatedSavings: {
        timePerWeek: 15,
        costPerWeek: 900,
        annualSavings: 46800
      },
      recommendations: [
        "Streamline marketing processes",
        "Implement automation workflows",
        "Reduce manual administrative tasks"
      ]
    }
  }

  results.push(await testEmailEndpoint(
    '/api/submit-quiz',
    fullTestData,
    'Full Report Generation Test'
  ))

  // Summary
  console.log('\n📊 DIAGNOSTIC SUMMARY')
  console.log('='.repeat(60))
  
  const successCount = results.filter(r => r).length
  const totalTests = results.length
  
  console.log(`✅ Successful tests: ${successCount}/${totalTests}`)
  
  if (successCount === totalTests) {
    console.log('🎉 All email tests passed!')
    console.log('📬 Check your email inbox (and spam folder) for test emails')
  } else {
    console.log('⚠️  Some email tests failed')
    console.log('🔍 Common issues to check:')
    console.log('   1. Domain verification in Resend dashboard')
    console.log('   2. RESEND_API_KEY environment variable')
    console.log('   3. Email going to spam folder')
    console.log('   4. Email provider blocking the domain')
  }

  console.log('\n🔧 TROUBLESHOOTING STEPS:')
  console.log('1. Check Resend dashboard for domain verification status')
  console.log('2. Verify RESEND_API_KEY is correctly set')
  console.log('3. Check email spam/junk folders')
  console.log('4. Try with a different email address')
  console.log('5. Check Resend logs for delivery status')
  
  console.log('\n📋 NEXT STEPS:')
  console.log('1. If Test #1 works but Test #2 fails: Domain verification issue')
  console.log('2. If all tests fail: API key or configuration issue')
  console.log('3. If tests pass but no emails received: Delivery/spam issue')
}

// Run diagnostics
runEmailDiagnostics().catch(console.error)
