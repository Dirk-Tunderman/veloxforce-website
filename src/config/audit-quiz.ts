import { Question, QuizStep, QuizPhase } from '@/types/audit-tool'

// New 4-Phase Optimized Quiz Structure
export const QUIZ_PHASES: QuizPhase[] = [
  // Phase 1: Problem Identification & Engagement (2 minutes)
  {
    id: 'phase1',
    title: 'Problem Identification',
    description: 'Let\'s understand your specific process challenges',
    estimatedTime: 2,
    questions: [
      // Screen 1.1: Process Selection & Description
      {
        id: 'q1_processName',
        title: 'Let\'s focus on the specific process that\'s consuming your valuable time.',
        subtitle: 'What would you call this process in your business?',
        description: 'Examples: "Customer onboarding", "Monthly financial reporting", "Invoice processing"',
        type: 'text',
        required: true,
        placeholder: 'e.g., B2B lead qualification process',
        maxLength: 250,
        helpText: 'The more specific you are, the more accurate your analysis will be',
        examples: [
          '"B2B lead qualification process" > "Lead generation"',
          '"Invoice approval workflow" > "Finance tasks"',
          '"New client onboarding checklist" > "Customer setup"'
        ]
      },
      {
        id: 'q1_biggestPain',
        title: 'What frustrates you MOST about [PROCESS_NAME] today?',
        subtitle: 'Choose the biggest pain point:',
        type: 'radio',
        required: true,
        options: [
          { value: 'personal-time', label: 'Takes too much of my personal time', score: 2 },
          { value: 'too-many-errors', label: 'Too many errors requiring rework', score: 2 },
          { value: 'cant-scale', label: 'Can\'t scale without hiring more people', score: 2 },
          { value: 'customer-delays', label: 'Delays upset customers/stakeholders', score: 1 },
          { value: 'no-visibility', label: 'No visibility into status or bottlenecks', score: 1 },
          { value: 'inconsistent-quality', label: 'Inconsistent quality depending on who does it', score: 1 }
        ],
        followUpText: true,
        followUpPrompt: 'Tell us more about this specific frustration (optional):',
        followUpMaxLength: 200
      }
    ]
  },

  // Screen 1.2: Volume & Frequency Assessment
  {
    id: 'phase1_screen2',
    title: 'Volume & Time Assessment',
    description: 'Understanding the scale and impact',
    questions: [
      {
        id: 'q2_processUnit',
        title: 'How often does [PROCESS_NAME] occur in your business?',
        subtitle: 'First, what\'s your unit of measurement for [PROCESS_NAME]?',
        type: 'radio',
        required: true,
        options: [
          { value: 'transactions', label: 'Number of transactions (invoices, orders, reports)' },
          { value: 'people', label: 'Number of people (leads, customers, employees)' },
          { value: 'requests', label: 'Number of requests (tickets, inquiries, approvals)' },
          { value: 'projects', label: 'Number of projects/cases' },
          { value: 'other', label: 'Other', allowCustom: true }
        ]
      },
      {
        id: 'q2_volume',
        title: 'Now, how many [SELECTED_UNIT] do you handle?',
        type: 'slider',
        required: true,
        sliderConfig: {
          timeframes: ['daily', 'weekly', 'monthly'],
          ranges: {
            daily: { min: 1, max: 100, markers: [5, 10, 25, 50, 100] },
            weekly: { min: 5, max: 500, markers: [25, 50, 125, 250, 500] },
            monthly: { min: 25, max: 2000, markers: [100, 200, 500, 1000, 2000] }
          },
          colors: {
            low: '#EF4444',    // Red for <50 monthly
            medium: '#F59E0B', // Yellow for 50-100 monthly
            high: '#10B981'    // Green for 100+ monthly
          }
        },
        realTimeCalculation: true
      },
      {
        id: 'q3_timeInvestment',
        title: 'Let\'s understand the total time impact of [PROCESS_NAME].',
        subtitle: 'Approximately how many total hours per week does your organization spend on this?',
        description: '(Include everyone involved: doing, checking, fixing, managing)',
        type: 'radio',
        required: true,
        options: [
          { value: 'less-than-5', label: 'Less than 5 hours/week', score: 0 },
          { value: '5-10', label: '5-10 hours/week', score: 1 },
          { value: '10-20', label: '10-20 hours/week', score: 1 },
          { value: '20-40', label: '20-40 hours/week', score: 2 },
          { value: '40-80', label: '40-80 hours/week', score: 2 },
          { value: 'more-than-80', label: 'More than 80 hours/week', score: 2 }
        ],
        expandableCalculator: {
          prompt: 'Want a more accurate calculation?',
          fields: [
            { id: 'fullTime', label: 'Full-time on this process', type: 'number', unit: 'people' },
            { id: 'partTime', label: 'Part-time on this process', type: 'number', unit: 'people' },
            { id: 'occasional', label: 'Occasionally involved', type: 'number', unit: 'people' }
          ]
        }
      }
    ]
  },

  // Phase 2: Impact Quantification & Urgency Building (3 minutes)
  {
    id: 'phase2',
    title: 'Impact Quantification',
    description: 'Understanding the real cost and urgency',
    estimatedTime: 3,
    questions: [
      // Screen 2.1: Financial Impact
      {
        id: 'q4_resourceCost',
        title: 'Let\'s calculate the real cost of [PROCESS_NAME].',
        subtitle: 'What\'s the average hourly cost of people handling this?',
        description: '(Include salary, benefits, overhead)',
        type: 'radio',
        required: true,
        options: [
          { value: '25-40', label: '€25-40 per hour (Administrative staff)', score: 1 },
          { value: '40-60', label: '€40-60 per hour (Professional staff)', score: 1 },
          { value: '60-100', label: '€60-100 per hour (Senior/Technical staff)', score: 2 },
          { value: '100-plus', label: '€100+ per hour (Executive/Specialist)', score: 2 }
        ],
        realTimeCalculation: true,
        calculationMessage: 'Based on [X] hours weekly, you\'re investing: €[Amount] per month on this process'
      },
      {
        id: 'q4_executiveTime',
        title: 'Here\'s the critical question for your growth...',
        subtitle: 'How many hours do YOU personally spend on [PROCESS_NAME] weekly?',
        description: '(Including oversight, fixes, approvals)',
        type: 'slider',
        required: true,
        sliderConfig: {
          min: 0,
          max: 20,
          step: 1,
          markers: [0, 2, 5, 10, 20],
          labels: ['None', '1-2', '3-5', '5-10', '10-20', '20+']
        },
        conditionalMessage: {
          condition: 'value > 0',
          message: 'That\'s [X] hours of strategic time worth €[Amount]/month\nTime you could spend on growth initiatives instead'
        },
        identityTransformation: true
      }
    ]
  },

  // Screen 2.2: Business Impact Assessment
  {
    id: 'phase2_screen2',
    title: 'Business Impact Assessment',
    description: 'Understanding growth limitations and error costs',
    questions: [
      {
        id: 'q5_growthLimitations',
        title: 'How is [PROCESS_NAME] limiting your business growth?',
        subtitle: 'Select all that impact you:',
        type: 'checkbox',
        required: true,
        options: [
          { value: 'cant-take-customers', label: 'Can\'t take on more customers without more staff', score: 2 },
          { value: 'quality-drops', label: 'Quality drops when volume increases', score: 1 },
          { value: 'stuck-managing', label: 'I\'m stuck managing operations instead of strategy', score: 2 },
          { value: 'competitors-faster', label: 'Competitors serve customers faster', score: 1 },
          { value: 'missing-opportunities', label: 'Missing opportunities while handling this', score: 2 },
          { value: 'team-morale', label: 'Team morale suffers from repetitive work', score: 1 },
          { value: 'losing-money', label: 'Losing money on inefficiencies', score: 2 }
        ],
        dynamicMessage: 'You\'ve identified [X] growth barriers. Service-as-Software typically eliminates [Y] of these.',
        awayFromMotivation: true
      },
      {
        id: 'q6_errorImpact',
        title: 'When errors occur in [PROCESS_NAME], what\'s the typical impact?',
        type: 'radio',
        required: true,
        options: [
          { value: 'minor', label: 'Minor inconvenience (<€100 impact)', score: 0 },
          { value: 'moderate', label: 'Moderate issues (€100-500 impact)', score: 1 },
          { value: 'significant', label: 'Significant problems (€500-2,000 impact)', score: 1 },
          { value: 'major', label: 'Major consequences (€2,000-5,000 impact)', score: 2 },
          { value: 'critical', label: 'Critical damage (€5,000+ or lost customers)', score: 2 }
        ]
      },
      {
        id: 'q6_errorFrequency',
        title: 'How often do errors require rework?',
        type: 'radio',
        required: true,
        options: [
          { value: 'daily', label: 'Daily', score: 2 },
          { value: 'weekly', label: 'Weekly', score: 1 },
          { value: 'monthly', label: 'Monthly', score: 1 },
          { value: 'rarely', label: 'Rarely', score: 0 }
        ],
        calculationMessage: 'Estimated error cost: €[Amount]/month\nService-as-Software typically achieves 98%+ accuracy'
      }
    ]
  },

  // Phase 3: Readiness Assessment & Qualification (2 minutes)
  {
    id: 'phase3',
    title: 'Readiness Assessment',
    description: 'Evaluating delegation potential and decision readiness',
    estimatedTime: 2,
    questions: [
      // Screen 3.1: Process Maturity Check
      {
        id: 'q7_processStandardization',
        title: 'For delegation to work, we need consistent processes.',
        subtitle: 'How standardized is your [PROCESS_NAME]?',
        type: 'radio',
        required: true,
        options: [
          { value: 'documented-steps', label: 'Documented step-by-step process everyone follows', score: 2 },
          { value: 'generally-consistent', label: 'Generally consistent with some variations', score: 2 },
          { value: 'depends-on-person', label: 'Depends on who\'s doing it', score: 1 },
          { value: 'different-every-time', label: 'Different every time', score: 0 },
          { value: 'no-standard', label: 'No standard approach', score: 0 }
        ],
        qualificationLogic: {
          qualified: ['documented-steps', 'generally-consistent'],
          conditional: ['depends-on-person'],
          notReady: ['different-every-time', 'no-standard']
        }
      },
      {
        id: 'q8_decisionAuthority',
        title: 'Who needs to approve Service-as-Software investments in your company?',
        type: 'radio',
        required: true,
        options: [
          { value: 'i-decide', label: 'I make the decision', score: 2 },
          { value: 'business-partner', label: 'I decide with my business partner', score: 2 },
          { value: 'board-approval', label: 'Need board/investor approval', score: 1 },
          { value: 'department-heads', label: 'Consult with department heads', score: 1 },
          { value: 'complex-process', label: 'Complex approval process', score: 0 }
        ]
      },
      {
        id: 'q8_roiTimeline',
        title: 'When would you want to see ROI from delegation?',
        type: 'radio',
        required: true,
        options: [
          { value: 'immediately', label: 'Immediately (urgent priority)', score: 2 },
          { value: 'within-3-months', label: 'Within 3 months', score: 2 },
          { value: 'within-6-months', label: 'Within 6 months', score: 1 },
          { value: 'just-exploring', label: 'Just exploring options', score: 0 }
        ],
        urgencyFrame: true
      }
    ]
  },

  // Screen 3.2: Current State Assessment
  {
    id: 'phase3_screen2',
    title: 'Current State Assessment',
    description: 'Understanding your current tools and integration needs',
    questions: [
      {
        id: 'q9_currentTools',
        title: 'What tools or systems currently touch [PROCESS_NAME]?',
        subtitle: '(This helps us design the right integration approach)',
        type: 'checkbox',
        required: true,
        options: [
          { value: 'email', label: 'Email (Gmail, Outlook, etc.)' },
          { value: 'spreadsheets', label: 'Spreadsheets (Excel, Google Sheets)' },
          { value: 'crm', label: 'CRM (Salesforce, HubSpot, etc.)' },
          { value: 'erp', label: 'ERP (SAP, Oracle, etc.)' },
          { value: 'project-management', label: 'Project Management (Asana, Monday, etc.)' },
          { value: 'industry-specific', label: 'Industry-specific software', allowCustom: true },
          { value: 'paper-manual', label: 'Paper-based/manual only' },
          { value: 'other', label: 'Other', allowCustom: true }
        ]
      },
      {
        id: 'q9_dataOrganization',
        title: 'Is the data in these systems:',
        type: 'radio',
        required: true,
        options: [
          { value: 'well-organized', label: 'Well-organized and consistent', score: 2 },
          { value: 'mostly-organized', label: 'Mostly organized with some cleanup needed', score: 1 },
          { value: 'scattered', label: 'Scattered and needs significant work', score: 0 },
          { value: 'not-sure', label: 'Not sure', score: 0 }
        ],
        helpText: 'Why this matters: Cleaner data = faster implementation'
      }
    ]
  },

  // Phase 4: Solution Alignment & Value Preview (1 minute)
  {
    id: 'phase4',
    title: 'Solution Alignment',
    description: 'Final questions to complete your analysis',
    estimatedTime: 1,
    questions: [
      // Screen 4.1: Investment Context
      {
        id: 'q10_idealTimeline',
        title: 'Final question to complete your analysis...',
        subtitle: 'What\'s your ideal timeline for addressing [PROCESS_NAME]?',
        type: 'radio',
        required: true,
        options: [
          { value: 'this-quarter', label: 'This quarter (urgent priority)', score: 2 },
          { value: 'next-6-months', label: 'Next 6 months (planned initiative)', score: 2 },
          { value: 'within-year', label: 'Within the year (on roadmap)', score: 1 },
          { value: 'exploring-next-year', label: 'Exploring for next year', score: 0 },
          { value: 'just-researching', label: 'Just researching options', score: 0 }
        ]
      },
      {
        id: 'q11_solutionCriteria',
        title: 'What would need to be true for a Service-as-Software solution to make sense?',
        type: 'checkbox',
        required: true,
        options: [
          { value: 'clear-roi', label: 'Clear return on investment' },
          { value: 'no-complexity', label: 'No technical complexity for my team' },
          { value: 'proven-similar', label: 'Proven to work in similar businesses' },
          { value: 'fits-budget', label: 'Fits within operational budget' },
          { value: 'minimal-disruption', label: 'Minimal disruption during implementation' }
        ]
      }
    ]
  },

  // Screen 4.2: Optional Enhancement Questions
  {
    id: 'phase4_optional',
    title: 'Optional Enhancement',
    description: 'One last insight for your custom report',
    optional: true,
    questions: [
      {
        id: 'q12_competitivePressure',
        title: 'Are your competitors more efficient at similar processes?',
        type: 'radio',
        required: false,
        options: [
          { value: 'yes-hurting', label: 'Yes, and it\'s hurting our business', score: 1 },
          { value: 'probably', label: 'Probably, but not sure', score: 0 },
          { value: 'everyone-struggles', label: 'No, everyone struggles with this', score: 0 },
          { value: 'we-are-ahead', label: 'We\'re actually ahead', score: 0 },
          { value: 'dont-know', label: 'Don\'t know', score: 0 }
        ]
      },
      {
        id: 'q13_additionalProcess',
        title: 'Any other process you\'d like to automate after [PROCESS_NAME]?',
        type: 'text',
        required: false,
        placeholder: 'e.g., Customer support ticket routing',
        helpText: 'This helps us design a complete delegation strategy'
      }
    ]
  }
]

// Keep existing bonus questions for backward compatibility
export const BONUS_QUESTIONS: Question[] = [
  {
    id: 'b1_teamCost',
    title: 'What\'s the average hourly cost of people working on this process?',
    type: 'radio',
    options: [
      { value: '20-30', label: '€20-30 per hour' },
      { value: '30-40', label: '€30-40 per hour' },
      { value: '40-50', label: '€40-50 per hour' },
      { value: '50-75', label: '€50-75 per hour' },
      { value: 'more-than-75', label: 'More than €75 per hour' },
    ],
  },
  {
    id: 'b2_competitivePressure',
    title: 'Are your competitors more efficient at this process?',
    type: 'radio',
    options: [
      { value: 'yes-hurting', label: 'Yes, and it\'s hurting our business' },
      { value: 'probably', label: 'Probably, but not sure' },
      { value: 'everyone-struggles', label: 'No, everyone struggles with this' },
      { value: 'we-are-ahead', label: 'We\'re actually ahead' },
      { value: 'dont-know', label: 'Don\'t know' },
    ],
  },
  {
    id: 'b3_documentation',
    title: 'Do you have this process documented?',
    type: 'radio',
    options: [
      { value: 'detailed-sops', label: 'Yes, detailed SOPs exist' },
      { value: 'some-documentation', label: 'Some documentation' },
      { value: 'in-peoples-heads', label: 'It\'s in people\'s heads' },
      { value: 'no-documentation', label: 'No documentation' },
    ],
  },
]

// Legacy questions export for backward compatibility
export const QUIZ_QUESTIONS = QUIZ_PHASES.flatMap(phase =>
  phase.questions?.map(q => ({ ...q, phaseId: phase.id })) || []
)
