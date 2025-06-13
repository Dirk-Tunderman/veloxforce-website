/**
 * Test script for the automated report generation system
 * This simulates a complete quiz submission and report generation flow
 */

// Load environment variables manually
const fs = require('fs')
const path = require('path')

try {
  const envFile = fs.readFileSync(path.join(__dirname, '..', '.env'), 'utf8')
  envFile.split('\n').forEach(line => {
    const [key, value] = line.split('=')
    if (key && value) {
      process.env[key] = value
    }
  })
} catch (error) {
  console.log('Could not load .env file')
}

const testSubmission = {
  contactDetails: {
    full_name: "Test User", 
    business_email: "test@example.com",
    company_name: "Test Company Ltd",
    website: "https://example.com", // Use a real website for testing
    phone_number: "1234567890"
  },
  quizAnswers: {
    // Opening context
    company_size: "26-50",
    role: "owner-ceo", 
    business_model: "b2b-services",
    primary_challenge: ["manual-processes", "cant-scale"],
    department_focus: "hr",
    
    // HR-specific questions
    hr_main_activities: ["recruiting-hiring", "compliance-regulations"],
    hiring_frequency: "quarterly",
    hr_team_size: "3-5-people",
    employee_onboarding_time: "2-weeks", 
    hr_admin_hours: 20,
    hr_biggest_challenge: "finding-candidates",
    
    // Final questions
    operational_impact: ["increasing-costs", "missing-opportunities"],
    timeline_urgency: "within-year",
    monthly_investment: "2500-5000",
    success_vision: "We want to automate our HR processes to focus on strategic hiring.",
    decision_makers: ["business-partners"]
  },
  departmentRoute: "hr",
  summary: {
    selectedDepartment: "hr",
    calculatedScore: 75,
    estimatedSavings: {
      timePerWeek: 15,
      costPerWeek: 900,
      annualSavings: 46800
    },
    recommendations: ["Automate candidate screening", "Implement onboarding workflows"]
  }
}

async function testReportGeneration() {
  console.log('🧪 Testing Automated Report Generation System')
  console.log('=' .repeat(60))
  
  try {
    // Test 1: Check if the API endpoints are accessible
    console.log('📡 Test 1: Checking API endpoints...')
    
    const healthCheck = await fetch('http://localhost:3000/api/generate-report', {
      method: 'GET'
    })
    
    if (healthCheck.ok) {
      const healthData = await healthCheck.json()
      console.log('✅ Report generation API is active')
      console.log(`   Version: ${healthData.version}`)
      console.log(`   Capabilities: ${healthData.capabilities.length} features`)
    } else {
      console.log('❌ Report generation API is not accessible')
      return
    }
    
    // Test 2: Submit quiz and trigger report generation
    console.log('\n📝 Test 2: Submitting quiz and triggering report...')
    
    const submitResponse = await fetch('http://localhost:3000/api/submit-quiz', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(testSubmission)
    })
    
    if (submitResponse.ok) {
      const submitData = await submitResponse.json()
      console.log('✅ Quiz submitted successfully')
      console.log(`   Submission ID: ${submitData.submissionId}`)
      console.log(`   Questions processed: ${submitData.questionsProcessed}`)
      console.log(`   Report triggered: ${submitData.reportGenerated ? 'Yes' : 'No'}`)
      console.log(`   Message: ${submitData.message}`)
    } else {
      const errorData = await submitResponse.text()
      console.log('❌ Quiz submission failed')
      console.log(`   Status: ${submitResponse.status}`)
      console.log(`   Error: ${errorData}`)
      return
    }
    
    // Test 3: Direct report generation test (if needed)
    console.log('\n🔧 Test 3: Direct report generation test...')
    console.log('Note: This will actually generate and send a report email!')
    console.log('Skipping direct test to avoid sending test emails.')
    
    console.log('\n🎉 All tests completed!')
    console.log('\nNext steps:')
    console.log('1. Check your email for the business analysis report')
    console.log('2. Verify the PDF attachment is properly formatted')
    console.log('3. Review the email template and content')
    console.log('4. Test with a real website URL for full analysis')
    
  } catch (error) {
    console.error('❌ Test failed:', error.message)
    console.log('\nTroubleshooting:')
    console.log('1. Ensure the development server is running (npm run dev)')
    console.log('2. Check that all environment variables are set')
    console.log('3. Verify OpenRouter API key is valid')
    console.log('4. Confirm Resend API key is working')
  }
}

async function testEnvironmentSetup() {
  console.log('🔧 Environment Setup Check')
  console.log('=' .repeat(40))
  
  const requiredEnvVars = [
    'SUPABASE_URL',
    'SUPABASE_KEY', 
    'RESEND_API_KEY',
    'OPENROUTER_API_KEY'
  ]
  
  let allPresent = true
  
  for (const envVar of requiredEnvVars) {
    const value = process.env[envVar]
    if (value && value !== 'YOUR_OPENROUTER_API_KEY_HERE') {
      console.log(`✅ ${envVar}: Set`)
    } else {
      console.log(`❌ ${envVar}: Missing or placeholder`)
      allPresent = false
    }
  }
  
  if (!allPresent) {
    console.log('\n⚠️  Please update your .env file with valid API keys before testing.')
    return false
  }
  
  console.log('\n✅ All environment variables are configured!')
  return true
}

// Export for manual testing
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { testReportGeneration, testEnvironmentSetup, testSubmission }
}

// Run if called directly
if (require.main === module) {
  testEnvironmentSetup().then(envOk => {
    if (envOk) {
      return testReportGeneration()
    }
  })
}