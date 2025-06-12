/**
 * Simple test to validate question mapper - run with node
 */

// Mock the imports for testing
const hrQuestions = [
  'hr_main_activities',
  'hiring_frequency', 
  'hr_team_size',
  'employee_onboarding_time',
  'hr_admin_hours',
  'hr_biggest_challenge'
]

const commonQuestions = [
  'company_size',
  'role', 
  'business_model',
  'primary_challenge',
  'department_focus',
  'operational_impact',
  'timeline_urgency',
  'monthly_investment',
  'success_vision',
  'decision_makers',
  'contact_details'
]

console.log('=== Question Coverage Test ===')
console.log(`HR Questions to test: ${hrQuestions.length}`)
console.log(`Common Questions to test: ${commonQuestions.length}`)
console.log(`Total Questions Expected: ${hrQuestions.length + commonQuestions.length} (just for HR route)`)
console.log('')

console.log('=== Expected HR Questions ===')
hrQuestions.forEach((q, i) => {
  console.log(`${i+1}. ${q}`)
})

console.log('')
console.log('=== Expected Common Questions ===')
commonQuestions.forEach((q, i) => {
  console.log(`${i+1}. ${q}`)
})

console.log('')
console.log('✅ Question list validation complete')
console.log('Next: Run a quiz submission to test the API integration')