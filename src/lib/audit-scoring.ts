import { QuizAnswers, ScoreCalculation, ResultsData } from '@/types/audit-tool'

export function calculateQuizScore(answers: QuizAnswers): ScoreCalculation {
  let volume = 0
  let time = 0
  let personalTime = 0
  let consistency = 0
  let painLevel = 0
  let urgency = 0
  let budget = 0

  // Volume scoring: 100+ monthly = 2 points, 50-100 = 1 point
  if (answers.q2_volume === '100-250' || answers.q2_volume === '250-500' || answers.q2_volume === 'more-than-500') {
    volume = 2
  } else if (answers.q2_volume === '50-100') {
    volume = 1
  }

  // Time scoring: 20+ hours weekly = 2 points, 10-20 = 1 point
  if (answers.q3_teamTimeWeekly === '20-40' || answers.q3_teamTimeWeekly === '40-60' || answers.q3_teamTimeWeekly === 'more-than-60') {
    time = 2
  } else if (answers.q3_teamTimeWeekly === '10-20') {
    time = 1
  }

  // Personal Time: Any owner time = 1 point
  if (answers.q4_personalTime !== 'none') {
    personalTime = 1
  }

  // Consistency: Same/Generally same = 2 points
  if (answers.q5_consistency === 'exact-same' || answers.q5_consistency === 'generally-same') {
    consistency = 2
  } else if (answers.q5_consistency === 'mostly-consistent') {
    consistency = 1
  }

  // Pain Level: 2+ major frustrations = 1 point
  if (answers.q6_painPoints && answers.q6_painPoints.length >= 2) {
    painLevel = 1
  }

  // Urgency: Immediate/Next month = 2 points
  if (answers.q10_timeline === 'immediately' || answers.q10_timeline === 'next-month') {
    urgency = 2
  } else if (answers.q10_timeline === 'next-quarter') {
    urgency = 1
  }

  // Budget: Proven ROI or €1k+ = 1 point
  if (answers.q12_budget === 'whatever-it-takes' || 
      answers.q12_budget === '1000-2500' || 
      answers.q12_budget === '2500-5000' ||
      answers.q12_budget === 'need-roi-first') {
    budget = 1
  }

  const total = volume + time + personalTime + consistency + painLevel + urgency + budget

  return {
    volume,
    time,
    personalTime,
    consistency,
    painLevel,
    urgency,
    budget,
    total
  }
}

export function getResultCategory(score: number): 'Highly Qualified' | 'Qualified' | 'Not Yet Ready' {
  if (score >= 9) return 'Highly Qualified'
  if (score >= 5) return 'Qualified'
  return 'Not Yet Ready'
}

export function calculateROIEstimates(answers: QuizAnswers, score: ScoreCalculation): Partial<ResultsData> {
  // Basic ROI calculation based on team time and volume
  let estimatedMonthlyCost = 0
  let hoursFreed = 0
  
  // Estimate hours per week based on answers
  const timeMapping: Record<string, number> = {
    'less-than-10': 5,
    '10-20': 15,
    '20-40': 30,
    '40-60': 50,
    'more-than-60': 70
  }
  
  hoursFreed = timeMapping[answers.q3_teamTimeWeekly] || 0
  
  // Estimate hourly cost (default to €35 if bonus question not answered)
  let hourlyCost = 35
  if (answers.b1_teamCost) {
    const costMapping: Record<string, number> = {
      '20-30': 25,
      '30-40': 35,
      '40-50': 45,
      '50-75': 62,
      'more-than-75': 85
    }
    hourlyCost = costMapping[answers.b1_teamCost] || 35
  }
  
  // Calculate monthly cost (hours per week * 4.33 weeks * hourly cost)
  estimatedMonthlyCost = Math.round(hoursFreed * 4.33 * hourlyCost)
  
  // Potential savings (70% of current cost)
  const potentialSavings = Math.round(estimatedMonthlyCost * 0.7)
  
  // Service fee estimate (25% of savings)
  const serviceFee = Math.round(potentialSavings * 0.25)
  
  // Net gain
  const netGain = potentialSavings - serviceFee
  
  // Payback period in weeks (assuming implementation cost of €5000)
  const implementationCost = 5000
  const paybackWeeks = Math.ceil(implementationCost / (netGain / 4.33))

  return {
    estimatedMonthlyCost,
    potentialSavings,
    paybackWeeks: Math.min(paybackWeeks, 52), // Cap at 1 year
    hoursFreed,
    netGain
  }
}

export function generateResultsData(answers: QuizAnswers): ResultsData {
  const score = calculateQuizScore(answers)
  const category = getResultCategory(score.total)
  const processName = answers.q1_processDescription || answers.q1_selectedProcess || 'your process'
  const roiEstimates = calculateROIEstimates(answers, score)

  return {
    score,
    category,
    processName,
    ...roiEstimates
  }
}
