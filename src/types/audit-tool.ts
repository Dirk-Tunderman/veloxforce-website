export interface QuizAnswers {
  // Main Questions
  q1_processDescription: string
  q1_selectedProcess?: string
  q2_volume: string
  q3_teamTimeWeekly: string
  q4_personalTime: string
  q5_consistency: string
  q6_painPoints: string[]
  q7_errorImpact: string
  q8_growthBlocker: string
  q9_solutionAttempts: string
  q10_timeline: string
  q11_investmentReadiness: string
  q12_budget: string

  // Bonus Questions
  b1_teamCost?: string
  b2_competitivePressure?: string
  b3_documentation?: string
}

export interface ContactDetails {
  email: string
  fullName: string
  role: string
  companyName: string
  website: string
  phoneNumber?: string
}

export interface QuizSummary {
  processName: string
  calculatedScore: number
  resultCategory: 'Highly Qualified' | 'Qualified' | 'Not Yet Ready'
}

export interface QuizSubmission {
  contactDetails: ContactDetails
  quizAnswers: QuizAnswers
  summary: QuizSummary
}

export interface QuestionOption {
  value: string
  label: string
  score?: number
  allowCustom?: boolean
}

export interface SliderConfig {
  timeframes?: string[]
  ranges?: {
    daily?: { min: number; max: number; markers: number[] }
    weekly?: { min: number; max: number; markers: number[] }
    monthly?: { min: number; max: number; markers: number[] }
  }
  colors?: {
    low: string
    medium: string
    high: string
  }
  min?: number
  max?: number
  step?: number
  markers?: number[]
  labels?: string[]
}

export interface ExpandableCalculator {
  prompt: string
  fields: {
    id: string
    label: string
    type: 'number' | 'text'
    unit?: string
  }[]
}

export interface ConditionalMessage {
  condition: string
  message: string
}

export interface QualificationLogic {
  qualified: string[]
  conditional: string[]
  notReady: string[]
}

export interface QuizPhase {
  id: string
  title: string
  description: string
  estimatedTime?: number
  optional?: boolean
  questions?: Question[]
}

export interface Question {
  id: string
  title: string
  subtitle?: string
  description?: string
  type: 'text' | 'radio' | 'checkbox' | 'select' | 'slider'
  options?: QuestionOption[]
  required?: boolean
  tooltip?: string
  maxSelections?: number
  placeholder?: string
  maxLength?: number
  helpText?: string
  examples?: string[]
  followUpText?: boolean
  followUpPrompt?: string
  followUpMaxLength?: number
  sliderConfig?: SliderConfig
  expandableCalculator?: ExpandableCalculator
  realTimeCalculation?: boolean
  calculationMessage?: string
  conditionalMessage?: ConditionalMessage
  identityTransformation?: boolean
  dynamicMessage?: string
  awayFromMotivation?: boolean
  qualificationLogic?: QualificationLogic
  urgencyFrame?: boolean
  phaseId?: string
}

export interface QuizStep {
  id: string
  title: string
  questions: Question[]
  isBonus?: boolean
}

export interface ScoreCalculation {
  volume: number
  time: number
  personalTime: number
  consistency: number
  painLevel: number
  urgency: number
  budget: number
  total: number
}

export interface ResultsData {
  score: ScoreCalculation
  category: QuizSummary['resultCategory']
  processName: string
  estimatedMonthlyCost?: number
  potentialSavings?: number
  paybackWeeks?: number
  hoursFreed?: number
  netGain?: number
}

// Predefined process options for conditional path
export const PREDEFINED_PROCESSES = [
  'Lead generation and qualification',
  'Invoice processing and accounts receivable',
  'Client onboarding and setup',
  'Project management and tracking',
  'Customer support ticket handling',
  'Reporting and data analysis',
  'Order processing and fulfillment',
  'Employee onboarding',
  'Other repetitive administrative task'
] as const

export type PredefinedProcess = typeof PREDEFINED_PROCESSES[number]
