/**
 * End-to-end test for the automated report generation system
 * This tests the complete pipeline with real data
 */

// Load environment variables manually
const fs = require('fs')
const path = require('path')

// Check if fetch is available, otherwise use a fallback
let fetch
if (typeof globalThis.fetch === 'undefined') {
  try {
    fetch = require('node-fetch')
  } catch (e) {
    // If node-fetch is not available, we'll try the built-in fetch
    if (typeof global.fetch !== 'undefined') {
      fetch = global.fetch
    } else {
      console.log('❌ No fetch implementation available')
      console.log('   Please install node-fetch: npm install node-fetch')
      process.exit(1)
    }
  }
} else {
  fetch = globalThis.fetch
}

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

const testSubmissionData = {
  contactDetails: {
    full_name: "Dirk Tunderman", 
    business_email: "dirk.tunderman@outlook.com",
    company_name: "VeloxForce",
    website: "https://veloxforce.ai",
    phone_number: "+31123456789"
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
    success_vision: "We want to automate our HR processes to focus on strategic hiring and business growth.",
    decision_makers: ["business-partners"]
  },
  departmentRoute: "hr",
  summary: {
    selectedDepartment: "hr",
    calculatedScore: 85,
    estimatedSavings: {
      timePerWeek: 20,
      costPerWeek: 1200,
      annualSavings: 62400
    },
    recommendations: [
      "Automate candidate screening and initial assessments",
      "Implement digital onboarding workflows",
      "Create compliance tracking systems"
    ]
  }
}

async function runEndToEndTest() {
  console.log('🚀 End-to-End Report Generation Test')
  console.log('=' .repeat(50))
  console.log(`Testing with: ${testSubmissionData.contactDetails.website}`)
  console.log(`Email target: ${testSubmissionData.contactDetails.business_email}`)
  console.log('')
  
  try {
    // Step 1: Check environment setup
    console.log('📋 Step 1: Environment Check')
    if (!process.env.OPENROUTER_API_KEY || process.env.OPENROUTER_API_KEY.includes('YOUR_')) {
      console.log('❌ OpenRouter API key not configured')
      return
    }
    if (!process.env.RESEND_API_KEY) {
      console.log('❌ Resend API key not configured')
      return
    }
    console.log('✅ All API keys configured')
    console.log('')
    
    // Step 2: Start development server check
    console.log('📡 Step 2: API Health Check')
    
    let healthResponse
    try {
      healthResponse = await fetch('http://localhost:3002/api/generate-report', {
        method: 'GET'
      })
    } catch (error) {
      console.log('❌ Cannot connect to development server')
      console.log(`   Error: ${error.message}`)
      console.log('   Please ensure the server is running: npm run dev')
      return
    }
    
    if (!healthResponse.ok) {
      console.log('❌ Development server responded with error')
      console.log(`   Status: ${healthResponse.status}`)
      const errorText = await healthResponse.text()
      console.log(`   Response: ${errorText}`)
      return
    }
    
    const healthData = await healthResponse.json()
    console.log('✅ Report generation API ready')
    console.log(`   Version: ${healthData.version}`)
    console.log('')
    
    // Step 3: Submit quiz and trigger complete pipeline
    console.log('🎯 Step 3: Submitting Quiz & Triggering Pipeline')
    console.log('   This will test:')
    console.log('   • Quiz submission and database storage')
    console.log('   • Website scraping (https://veloxforce.ai)')
    console.log('   • AI analysis via OpenRouter')
    console.log('   • PDF report generation')
    console.log('   • Email delivery with attachment')
    console.log('')
    
    const startTime = Date.now()
    
    const submitResponse = await fetch('http://localhost:3002/api/submit-quiz', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(testSubmissionData)
    })
    
    if (!submitResponse.ok) {
      const errorText = await submitResponse.text()
      console.log('❌ Quiz submission failed')
      console.log(`   Status: ${submitResponse.status}`)
      console.log(`   Error: ${errorText}`)
      return
    }
    
    const submitData = await submitResponse.json()
    console.log('✅ Quiz submitted successfully')
    console.log(`   Submission ID: ${submitData.submissionId}`)
    console.log(`   Questions processed: ${submitData.questionsProcessed}`)
    console.log(`   Report generation triggered: ${submitData.reportGenerated ? 'Yes' : 'No'}`)
    console.log('')
    
    // Step 4: Monitor processing (since it's async)
    console.log('⏳ Step 4: Monitoring Report Generation')
    console.log('   Report generation is running asynchronously...')
    console.log('   This may take 1-3 minutes to complete.')
    console.log('')
    console.log('   The pipeline includes:')
    console.log('   1. 🌐 Scraping https://veloxforce.ai')
    console.log('   2. 🧠 AI analysis with Gemini Flash 2.5 + Sonnet 4.0')
    console.log('   3. 📄 Professional PDF generation')
    console.log('   4. 📧 Email delivery to dirk.tunderman@outlook.com')
    console.log('')
    
    const endTime = Date.now()
    const processingTime = (endTime - startTime) / 1000
    
    console.log('🎉 Test Completed!')
    console.log(`   Processing time: ${processingTime}s`)
    console.log('')
    console.log('📬 Next Steps:')
    console.log('   1. Check dirk.tunderman@outlook.com for the business analysis email')
    console.log('   2. Verify the PDF attachment contains:')
    console.log('      • Executive summary with VeloxForce analysis')
    console.log('      • Current state assessment')
    console.log('      • Automation opportunities')
    console.log('      • ROI projections')
    console.log('      • Implementation roadmap')
    console.log('   3. Review email template and formatting')
    console.log('   4. Check console logs for any processing errors')
    console.log('')
    console.log('🔍 Validation Checklist:')
    console.log('   [ ] Email received with VeloxForce branding')
    console.log('   [ ] PDF attachment opens correctly')
    console.log('   [ ] Report contains website analysis data')
    console.log('   [ ] Business insights are relevant and accurate')
    console.log('   [ ] Contact information is properly formatted')
    console.log('   [ ] CTA links point to correct pages')
    
  } catch (error) {
    console.error('❌ Test failed with error:', error.message)
    console.log('')
    console.log('🔧 Troubleshooting:')
    console.log('   1. Ensure development server is running (npm run dev)')
    console.log('   2. Check that OpenRouter API key is valid and has credits')
    console.log('   3. Verify Resend API key and domain configuration')
    console.log('   4. Check database connection and schema')
    console.log('   5. Review console logs for detailed error messages')
  }
}

async function testDirectReportGeneration() {
  console.log('🧪 Direct Report Generation Test')
  console.log('=' .repeat(40))
  console.log('Testing the report generation API directly...')
  console.log('')
  
  try {
    const reportData = {
      contactDetails: testSubmissionData.contactDetails,
      quizAnswers: testSubmissionData.quizAnswers,
      departmentRoute: testSubmissionData.departmentRoute,
      summary: testSubmissionData.summary
    }
    
    const response = await fetch('http://localhost:3002/api/generate-report', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(reportData)
    })
    
    if (response.ok) {
      const result = await response.json()
      console.log('✅ Direct report generation successful')
      console.log(`   Status: ${result.status}`)
      console.log(`   Message: ${result.message}`)
      if (result.emailSent) {
        console.log(`   Email ID: ${result.emailId}`)
      }
    } else {
      const error = await response.text()
      console.log('❌ Direct report generation failed')
      console.log(`   Status: ${response.status}`)
      console.log(`   Error: ${error}`)
    }
    
  } catch (error) {
    console.log('❌ Direct test failed:', error.message)
  }
}

// Export for manual testing
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { runEndToEndTest, testDirectReportGeneration }
}

// Run if called directly
if (require.main === module) {
  console.log('Select test to run:')
  console.log('1. End-to-end quiz submission test (recommended)')
  console.log('2. Direct report generation test')
  console.log('')
  
  // Default to end-to-end test
  runEndToEndTest()
}