/**
 * Test API integration with enhanced question capture
 * This simulates the exact JSON structure from your example
 */

const sampleHRSubmission = {
  contactDetails: {
    full_name: "Dirk Tunderman",
    business_email: "dtunderman@veloxforce.ai", 
    company_name: "Veloxforce",
    website: "https://veloxforce.ai",
    phone_number: "0614554096"
  },
  quizAnswers: {
    // Opening context questions
    company_size: "26-50",
    role: "owner-ceo",
    business_model: "marketplace",
    primary_challenge: [
      "manual-processes",
      "cant-scale", 
      "costs-growing"
    ],
    department_focus: "hr",
    
    // HR-specific questions
    hr_main_activities: [
      "recruiting-hiring",
      "compliance-regulations", 
      "performance-management"
    ],
    hiring_frequency: "twice-yearly",
    hr_team_size: "3-5-people",
    employee_onboarding_time: "3-4-weeks",
    hr_admin_hours: 25,
    hr_biggest_challenge: "onboarding-efficiency",
    
    // Final questions
    operational_impact: [
      "increasing-costs",
      "missing-opportunities",
      "losing-advantage"
    ],
    timeline_urgency: "within-year",
    monthly_investment: "2500-5000",
    success_vision: "yes so we are stuggling to mainly onboard employees and once onboarded the chance they are leaving within 4 months is high. now this is major problem.",
    decision_makers: [
      "business-partners",
      "department-managers"
    ]
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
      "Automate employee onboarding workflows",
      "Implement smart hiring pipeline",
      "Create retention analysis system"
    ]
  }
}

// Test function
async function testAPISubmission() {
  console.log('=== API Integration Test ===')
  console.log('Testing quiz submission with enhanced question capture...')
  console.log('')
  
  console.log('Sample submission data:')
  console.log(`- Department: ${sampleHRSubmission.departmentRoute}`)
  console.log(`- Questions count: ${Object.keys(sampleHRSubmission.quizAnswers).length}`)
  console.log(`- Contact email: ${sampleHRSubmission.contactDetails.business_email}`)
  console.log('')
  
  console.log('Questions being submitted:')
  Object.keys(sampleHRSubmission.quizAnswers).forEach((questionId, index) => {
    console.log(`${index + 1}. ${questionId}`)
  })
  console.log('')
  
  try {
    const response = await fetch('http://localhost:3000/api/submit-quiz', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(sampleHRSubmission)
    })
    
    if (response.ok) {
      const result = await response.json()
      console.log('✅ API Test Success!')
      console.log(`Submission ID: ${result.submissionId}`)
      console.log(`Questions processed: ${result.questionsProcessed}`)
      
      if (result.debug) {
        console.log(`Total questions in mapper: ${result.debug.totalQuestionsInMapper}`)
        console.log(`Department route: ${result.debug.departmentRoute}`)
      }
      
      if (result.enrichedAnswers) {
        console.log('')
        console.log('=== Enriched Answers Sample ===')
        const sampleKeys = Object.keys(result.enrichedAnswers).slice(0, 3)
        sampleKeys.forEach(key => {
          console.log(`${key}:`)
          console.log(`  Question: ${result.enrichedAnswers[key].question_text}`)
          console.log(`  Answer: ${JSON.stringify(result.enrichedAnswers[key].answer)}`)
          console.log(`  Department: ${result.enrichedAnswers[key].department}`)
          console.log('')
        })
      }
    } else {
      console.log('❌ API Test Failed!')
      console.log(`Status: ${response.status}`)
      const error = await response.text()
      console.log(`Error: ${error}`)
    }
  } catch (error) {
    console.log('❌ Connection Error!')
    console.log(`Error: ${error.message}`)
    console.log('')
    console.log('Make sure the development server is running:')
    console.log('npm run dev')
  }
}

// Export for manual testing
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { testAPISubmission, sampleHRSubmission }
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  testAPISubmission()
}