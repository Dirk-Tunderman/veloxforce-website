export interface ServiceQuizAnswers {
  // Opening Context
  company_size: string
  user_role: string
  business_model: string
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
  first_name: string
  last_name: string
  work_email: string
  phone?: string
  company_name: string
  preferred_contact: string
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
  type: 'text' | 'email' | 'tel'
  required: boolean
  options?: QuestionOption[]
}

export interface PreferenceField {
  id: string
  label: string
  options: QuestionOption[]
}

export interface PercentageCategory {
  id: string
  label: string
  max: number
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

export interface VisualOption {
  value: string
  label: string
  description: string
  icon: string
  color: string
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
  type: 'text' | 'radio' | 'checkbox' | 'select' | 'slider' | 'visual_grid' | 'conditional_checkbox' | 'time_breakdown' | 'team_breakdown' | 'dual_slider' | 'time_matrix' | 'system_count' | 'percentage_sliders' | 'contact_form' | 'multi_time_breakdown' | 'team_structure' | 'transaction_volumes' | 'approval_analysis' | 'textarea'
  options?: QuestionOption[]
  visualOptions?: VisualOption[]
  conditionalOn?: string
  conditionalOptions?: Record<string, QuestionOption[]>
  timeCategories?: TimeCategory[]
  teamCategories?: TeamCategory[]
  sliders?: SliderDef[]
  timeOptions?: string[]
  tasks?: { id: string; label: string }[]
  systems?: SystemConfig[]
  categories?: PercentageCategory[]
  mustTotal?: number
  fields?: ContactField[]
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
  calculationMessage?: string
  conditionalMessage?: ConditionalMessage
  identityTransformation?: boolean
  dynamicMessage?: string
  awayFromMotivation?: boolean
  qualificationLogic?: QualificationLogic
  urgencyFrame?: boolean
  phaseId?: string
  
  // New question type properties
  timeBreakdowns?: TimeBreakdown[]
  teamInputs?: TeamInput[]
  booleanInputs?: BooleanInput[]
  volumeInputs?: VolumeInput[]
  approvalMetrics?: ApprovalMetric[]
  contactFields?: ContactField[]
  preferenceField?: PreferenceField
  benchmark?: string
  realTimeCalculation?: boolean
  calculationText?: string
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
