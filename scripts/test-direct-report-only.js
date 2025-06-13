/**
 * Direct test of the report generation pipeline only
 * Bypasses database and tests: scraping -> AI -> PDF -> email
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
    console.log('❌ No fetch implementation available')
    console.log('   This test requires a fetch implementation')
    process.exit(1)
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

const testReportData = {
  contactDetails: {
    full_name: "Dirk Tunderman", 
    business_email: "dirk.tunderman@outlook.com",
    company_name: "VeloxForce",
    website: "https://veloxforce.ai",
    phone_number: "+31123456789"
  },
  quizAnswers: {
    company_size: "26-50",
    role: "owner-ceo", 
    business_model: "b2b-services",
    primary_challenge: ["manual-processes", "cant-scale"],
    department_focus: "hr",
    hr_main_activities: ["recruiting-hiring", "compliance-regulations"],
    hiring_frequency: "quarterly",
    hr_team_size: "3-5-people",
    employee_onboarding_time: "2-weeks", 
    hr_admin_hours: 20,
    hr_biggest_challenge: "finding-candidates",
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

async function testDirectReport() {
  console.log('🧪 Direct Report Generation Test')
  console.log('=' .repeat(50))
  console.log('Testing complete pipeline:')
  console.log('🌐 Website scraping: https://veloxforce.ai')
  console.log('🧠 AI analysis: OpenRouter + Gemini Flash 2.5 + Sonnet 4.0')
  console.log('📄 PDF generation: Professional business report')
  console.log('📧 Email delivery: dirk.tunderman@outlook.com')
  console.log('')
  
  try {
    // Environment check
    if (!process.env.OPENROUTER_API_KEY || process.env.OPENROUTER_API_KEY.includes('YOUR_')) {
      console.log('❌ OpenRouter API key not configured properly')
      return
    }
    
    if (!process.env.RESEND_API_KEY) {
      console.log('❌ Resend API key not configured')
      return
    }
    
    console.log('✅ API keys configured')
    console.log('')
    
    // Test report generation
    console.log('🚀 Starting Report Generation Pipeline...')
    console.log('   This may take 1-3 minutes to complete')
    console.log('')
    
    const startTime = Date.now()
    
    const response = await fetch('http://localhost:3002/api/generate-report', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(testReportData)
    })
    
    const responseData = await response.json()
    const endTime = Date.now()
    const processingTime = ((endTime - startTime) / 1000).toFixed(2)
    
    if (response.ok) {
      console.log('🎉 Report Generation Successful!')
      console.log(`   Processing time: ${processingTime}s`)
      console.log(`   Status: ${responseData.status}`)
      console.log(`   Message: ${responseData.message}`)
      
      if (responseData.emailSent) {
        console.log(`   ✅ Email sent successfully`)
        console.log(`   📧 Email ID: ${responseData.emailId}`)
      }
      
      if (responseData.report) {
        console.log(`   📊 Website scraped: ${responseData.report.websiteAnalyzed ? 'Yes' : 'No'}`)
        console.log(`   🧠 AI analysis: ${responseData.report.aiAnalysisCompleted ? 'Yes' : 'No'}`)
        console.log(`   📄 PDF generated: ${responseData.report.pdfGenerated ? 'Yes' : 'No'}`)
      }
      
      console.log('')
      console.log('📬 Validation Steps:')
      console.log('   1. Check dirk.tunderman@outlook.com for the email')
      console.log('   2. Verify the email has VeloxForce branding')
      console.log('   3. Download and review the PDF attachment')
      console.log('   4. Confirm the report contains VeloxForce website analysis')
      console.log('   5. Check that business insights are relevant and professional')
      
    } else {
      console.log('❌ Report Generation Failed')
      console.log(`   Processing time: ${processingTime}s`)
      console.log(`   Status: ${response.status}`)
      console.log(`   Error: ${responseData.error || responseData.message}`)
      
      if (responseData.details) {
        console.log(`   Details: ${responseData.details}`)
      }
      
      console.log('')
      console.log('🔧 Troubleshooting:')
      console.log('   1. Check OpenRouter API key has sufficient credits')
      console.log('   2. Verify Resend API key and domain configuration')
      console.log('   3. Ensure https://veloxforce.ai is accessible')
      console.log('   4. Review server logs for detailed error information')
    }
    
  } catch (error) {
    console.log('❌ Test failed with network error:', error.message)
    console.log('')
    console.log('🔧 Check:')
    console.log('   1. Development server is running: npm run dev')
    console.log('   2. Server is accessible at http://localhost:3002')
    console.log('   3. Network connectivity is working')
  }
}

// Export for manual testing
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { testDirectReport }
}

// Run if called directly
if (require.main === module) {
  testDirectReport()
}