/**
 * Test script to validate the question mapper functionality
 * Run this to ensure all questions are properly mapped
 */

const { questionMapper } = require('../src/lib/quiz-question-mapper.ts')

console.log('=== Question Mapper Test ===')
console.log(`Total questions mapped: ${questionMapper.getTotalQuestionCount()}`)
console.log('')

// Test specific HR questions from the example JSON
const hrQuestions = [
  'hr_main_activities',
  'hiring_frequency', 
  'hr_team_size',
  'employee_onboarding_time',
  'hr_admin_hours',
  'hr_biggest_challenge'
]

console.log('=== HR Questions Test ===')
hrQuestions.forEach(questionId => {
  const questionText = questionMapper.getQuestionText(questionId)
  const metadata = questionMapper.getQuestionMetadata(questionId)
  
  console.log(`${questionId}: ${questionText || 'NOT FOUND'}`)
  if (metadata) {
    console.log(`  Department: ${metadata.department}, Phase: ${metadata.phase}`)
  }
  console.log('')
})

// Test common questions
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

console.log('=== Common Questions Test ===')
commonQuestions.forEach(questionId => {
  const questionText = questionMapper.getQuestionText(questionId)
  console.log(`${questionId}: ${questionText || 'NOT FOUND'}`)
})

console.log('')
console.log('=== Questions by Department ===')
const departments = ['sales', 'finance', 'customer_service', 'operations', 'marketing', 'hr']
departments.forEach(dept => {
  const questions = questionMapper.getQuestionsByDepartment(dept)
  console.log(`${dept}: ${questions.length} questions`)
  questions.forEach(q => console.log(`  - ${q.id}: ${q.text}`))
  console.log('')
})

// Test enriched answers format
console.log('=== Enriched Answers Test ===')
const sampleAnswers = {
  company_size: '26-50',
  role: 'owner-ceo', 
  hr_main_activities: ['recruiting-hiring', 'compliance-regulations'],
  hr_admin_hours: 25
}

const enriched = questionMapper.enrichAnswersWithQuestionText(sampleAnswers)
console.log('Sample enriched output:')
console.log(JSON.stringify(enriched, null, 2))