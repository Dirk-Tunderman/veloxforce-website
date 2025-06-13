export interface ServiceQuizAnswers {
  // Opening Context
  company_size: string
  role: string
  business_model: string
  primary_challenge: string
  department_focus: string
  
  // Dynamic answers based on department selection
  [key: string]: any
}

// Legacy interface for backward compatibility
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

export interface ServiceContactDetails {
  full_name: string
  business_email: string
  company_name: string
  website: string
  phone_number?: string
}

// Legacy interface for backward compatibility
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

export interface ServiceQuizSubmission {
  contactDetails: ServiceContactDetails
  quizAnswers: ServiceQuizAnswers
  departmentRoute: string
  summary: {
    selectedDepartment: string
    calculatedScore: number
    estimatedSavings: {
      timePerWeek: number
      costPerWeek: number
      annualSavings: number
    }
    recommendations: string[]
  }
}

// Legacy interface for backward compatibility
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
  icon?: string
  description?: string
}

export interface TeamInput {
  id: string
  label: string
  type: 'dropdown' | 'text'
  max?: number
  unit?: string
}

export interface BooleanInput {
  id: string
  label: string
}

export interface TimeBreakdown {
  category: string
  options: QuestionOption[]
}

export interface VolumeInput {
  category: string
  options: QuestionOption[]
}

export interface ApprovalMetric {
  metric: string
  options: QuestionOption[]
}

export interface ContactField {
  id: string
  label: string
  type: 'text' | 'email' | 'tel' | 'url'
  required: boolean
  placeholder?: string
  options?: QuestionOption[]
}

export interface PreferenceField {
  id: string
  label: string
  options: QuestionOption[]
}

export interface TeamRole {
  id: string
  label: string
  hourlyRate: number
  description?: string
}

export interface Category {
  id: string
  label: string
  description?: string
}

export interface PercentageCategory {
  id: string
  label: string
  max?: number
  description?: string
}

export interface SliderConfig {
  // Volume sliders with timeframe switching
  timeframes?: string[]
  ranges?: {
    daily?: { min: number; max: number; markers: number[] }
    weekly?: { min: number; max: number; markers: number[] }
    monthly?: { min: number; max: number; markers: number[] }
  }
  
  // Basic sliders (time, money, numbers)
  min?: number
  max?: number
  step?: number
  unit?: string // 'minutes', 'hours', 'euros', 'conversations', etc.
  markers?: number[]
  
  // Display options
  colors?: {
    low: string
    medium: string
    high: string
  }
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

export interface VisualOption {
  value: string
  label: string
  description: string
  icon: string
  color: 'blue' | 'gray' // Simplified to 90/10 color rule
  allowCustom?: boolean // Allow custom input for options like "Other"
}

export interface TimeCategory {
  id: string
  label: string
  max: number
  unit?: string
}

export interface TeamCategory {
  id: string
  label: string
  max: number
  unit?: string
}

export interface SystemConfig {
  id: string
  label: string
  type: 'text' | 'number'
  max?: number
  placeholder?: string
}

// ContactField already defined above

export interface SliderDef {
  id: string
  label: string
  min: number
  max: number
  step: number
  markers: number[]
}

export interface PercentageCategory {
  id: string
  label: string
}

export interface Question {
  id: string
  title: string
  subtitle?: string
  description?: string
  
  // Simplified to only 2 main types plus text/textarea/contact_form
  type: 'visual_grid' | 'slider' | 'text' | 'textarea' | 'contact_form' | 'radio' | 'checkbox'
  
  // Visual Grid properties
  visualOptions?: VisualOption[]
  multiple?: boolean // For visual_grid: single vs multiple selection
  maxSelections?: number // For visual_grid: limit selections
  
  // Slider properties
  sliderConfig?: SliderConfig
  unitLabel?: string // For volume sliders: 'inquiries', 'transactions', etc.
  
  // Text/Textarea properties
  placeholder?: string
  maxLength?: number
  
  // Contact form properties
  contactFields?: ContactField[]
  preferenceField?: PreferenceField
  
  // Common properties
  required?: boolean
  tooltip?: string
  helpText?: string
  examples?: string[]
  benchmark?: string
  subtext?: string
  
  // Real-time calculation
  realTimeCalculation?: boolean
  calculationMessage?: string
  hourlyRate?: number // For time-based calculations
  
  // Legacy properties (deprecated but kept for backward compatibility)
  options?: QuestionOption[]
  timeBreakdowns?: TimeBreakdown[]
  teamInputs?: TeamInput[]
  booleanInputs?: BooleanInput[]
  volumeInputs?: VolumeInput[]
  approvalMetrics?: ApprovalMetric[]
  teamRoles?: TeamRole[]
  categories?: PercentageCategory[]
  mustTotal?: number
  followUpText?: boolean
  followUpPrompt?: string
  followUpMaxLength?: number
  expandableCalculator?: ExpandableCalculator
  conditionalMessage?: ConditionalMessage
  qualificationLogic?: QualificationLogic
  urgencyFrame?: boolean
  awayFromMotivation?: boolean
  dynamicMessage?: string
  identityTransformation?: boolean
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
