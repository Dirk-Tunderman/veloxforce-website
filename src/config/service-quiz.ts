import { Question, QuizPhase } from '@/types/audit-tool'

// Updated Service-as-Software Quiz with New Comprehensive Content
export const SERVICE_QUIZ_PHASES: QuizPhase[] = [
  // Opening Context (All Routes) - 5 Questions
  {
    id: 'opening',
    title: 'Company Context',
    description: 'Let\'s start with some quick context about your business',
    estimatedTime: 1,
    questions: [
      {
        id: 'company_size',
        title: 'Company Size',
        type: 'visual_grid',
        required: true,
        multiple: false,
        visualOptions: [
          { value: '1-10', label: '1-10 employees', description: 'Small team', icon: 'Users', color: 'blue' },
          { value: '11-25', label: '11-25 employees', description: 'Growing business', icon: 'Users', color: 'gray' },
          { value: '26-50', label: '26-50 employees', description: 'Medium company', icon: 'Building', color: 'gray' },
          { value: '51-100', label: '51-100 employees', description: 'Established business', icon: 'Building', color: 'gray' },
          { value: '101-250', label: '101-250 employees', description: 'Large organization', icon: 'Building2', color: 'gray' },
          { value: '250+', label: '250+ employees', description: 'Enterprise scale', icon: 'Building2', color: 'gray' }
        ]
      },
      {
        id: 'role',
        title: 'Your Role',
        type: 'visual_grid',
        required: true,
        multiple: false,
        visualOptions: [
          { value: 'owner-ceo', label: 'Owner/CEO', description: 'Business owner or CEO', icon: 'TrendingUp', color: 'blue' },
          { value: 'c-suite', label: 'C-Suite Executive', description: 'Executive leadership', icon: 'Target', color: 'gray' },
          { value: 'department-head', label: 'Department Head', description: 'Department manager', icon: 'Users', color: 'gray' },
          { value: 'operations-manager', label: 'Operations Manager', description: 'Operations leadership', icon: 'Settings', color: 'gray' },
          { value: 'team-lead', label: 'Team Lead', description: 'Team supervisor', icon: 'Users', color: 'gray' },
          { value: 'other', label: 'Other', description: 'Different role', icon: 'MoreHorizontal', color: 'gray' }
        ]
      },
      {
        id: 'business_model',
        title: 'Business Model',
        type: 'visual_grid',
        required: true,
        multiple: false,
        visualOptions: [
          { value: 'b2b-services', label: 'B2B Services', description: 'Business-to-business services', icon: 'Building', color: 'blue' },
          { value: 'b2b-products', label: 'B2B Products', description: 'Business-to-business products', icon: 'Package', color: 'gray' },
          { value: 'b2c-ecommerce', label: 'B2C E-commerce', description: 'Consumer online sales', icon: 'ShoppingCart', color: 'gray' },
          { value: 'b2c-services', label: 'B2C Services', description: 'Consumer services', icon: 'Users', color: 'gray' },
          { value: 'marketplace', label: 'Marketplace/Platform', description: 'Platform business model', icon: 'Shuffle', color: 'gray' },
          { value: 'saas', label: 'SaaS/Software', description: 'Software as a service', icon: 'Zap', color: 'gray' },
          { value: 'other', label: 'Other', description: 'Different business model', icon: 'MoreHorizontal', color: 'gray', allowCustom: true }
        ]
      },
      {
        id: 'primary_challenge',
        title: 'Primary Operational Challenge',
        type: 'visual_grid',
        required: true,
        multiple: true,
        maxSelections: 3,
        visualOptions: [
          { value: 'manual-processes', label: 'Too many manual processes', description: 'Heavy manual workload', icon: 'Clock', color: 'blue' },
          { value: 'team-overwhelmed', label: 'Team is overwhelmed', description: 'Staff capacity issues', icon: 'AlertTriangle', color: 'gray' },
          { value: 'cant-scale', label: 'Can\'t scale efficiently', description: 'Growth limitations', icon: 'TrendingUp', color: 'gray' },
          { value: 'costs-growing', label: 'Costs growing faster than revenue', description: 'Financial pressure', icon: 'BarChart3', color: 'gray' },
          { value: 'quality-consistency', label: 'Quality consistency issues', description: 'Quality control problems', icon: 'Shield', color: 'gray' },
          { value: 'missing-opportunities', label: 'Missing growth opportunities', description: 'Unrealized potential', icon: 'Target', color: 'gray' }
        ]
      },
      {
        id: 'department_focus',
        title: 'Which Department Needs The Most Help?',
        type: 'visual_grid',
        required: true,
        visualOptions: [
          {
            value: 'sales',
            label: 'Sales & Business Development',
            description: 'Lead generation, prospecting, conversion',
            icon: 'TrendingUp',
            color: 'blue'
          },
          {
            value: 'finance',
            label: 'Finance & Administration',
            description: 'Invoicing, payments, financial reporting',
            icon: 'Calculator',
            color: 'gray'
          },
          {
            value: 'customer_service',
            label: 'Customer Service & Support',
            description: 'Customer inquiries, support tickets, satisfaction',
            icon: 'Headphones',
            color: 'gray'
          },
          {
            value: 'operations',
            label: 'Operations & Fulfillment',
            description: 'Order processing, project management, workflows',
            icon: 'Settings',
            color: 'gray'
          },
          {
            value: 'marketing',
            label: 'Marketing & Communications',
            description: 'Content creation, campaigns, lead generation',
            icon: 'Megaphone',
            color: 'gray'
          },
          {
            value: 'hr',
            label: 'Human Resources & Recruiting',
            description: 'Hiring, onboarding, employee management',
            icon: 'Users',
            color: 'gray'
          }
        ]
      }
    ]
  }
]

// Sales & Business Development Route - 9 Questions
export const SALES_ROUTE_PHASES: QuizPhase[] = [
  {
    id: 'sales_generation',
    title: 'Lead Generation Methods',
    description: 'Understanding how you generate opportunities',
    estimatedTime: 2,
    questions: [
      {
        id: 'lead_generation_methods',
        title: 'How do you currently generate leads?',
        type: 'visual_grid',
        required: true,
        multiple: true,
        maxSelections: 3,
        visualOptions: [
          {
            value: 'linkedin',
            label: 'LinkedIn outreach',
            description: 'Professional networking and direct outreach',
            icon: 'Users',
            color: 'blue'
          },
          {
            value: 'cold-email',
            label: 'Cold email campaigns',
            description: 'Direct email marketing to prospects',
            icon: 'Mail',
            color: 'gray'
          },
          {
            value: 'cold-calling',
            label: 'Cold calling',
            description: 'Direct phone outreach to prospects',
            icon: 'Phone',
            color: 'gray'
          },
          {
            value: 'networking',
            label: 'Networking events',
            description: 'Industry events and conferences',
            icon: 'Calendar',
            color: 'gray'
          },
          {
            value: 'referrals',
            label: 'Referral programs',
            description: 'Customer and partner referrals',
            icon: 'Share2',
            color: 'gray'
          },
          {
            value: 'inbound',
            label: 'Inbound marketing',
            description: 'Content marketing and SEO',
            icon: 'TrendingUp',
            color: 'gray'
          },
          {
            value: 'paid-ads',
            label: 'Paid advertising',
            description: 'Google Ads, social media ads',
            icon: 'Target',
            color: 'gray'
          },
          {
            value: 'channel-partners',
            label: 'Channel partners',
            description: 'Strategic business partnerships',
            icon: 'Building',
            color: 'gray'
          },
          {
            value: 'other',
            label: 'Other methods',
            description: 'Custom lead generation approach',
            icon: 'Shuffle',
            color: 'gray'
          }
        ]
      },
      {
        id: 'weekly_conversations',
        title: 'Weekly sales conversations with prospects',
        type: 'slider',
        required: true,
        sliderConfig: {
          min: 0,
          max: 150,
          step: 5,
          unit: 'conversations',
          markers: [10, 25, 50, 75, 100, 150]
        },
        benchmark: 'Companies your size typically have 40-60 conversations weekly'
      },
      {
        id: 'time_per_prospect',
        title: 'Average time spent per prospect (total)',
        type: 'slider',
        required: true,
        sliderConfig: {
          min: 5,
          max: 180,
          step: 5,
          unit: 'minutes',
          markers: [5, 15, 30, 60, 120, 180]
        },
        realTimeCalculation: true,
        calculationMessage: 'That\'s [X] minutes per prospect - €[COST] weekly cost at 50 prospects'
      },
      {
        id: 'sales_team_size',
        title: 'Sales team size',
        type: 'visual_grid',
        required: true,
        multiple: false,
        visualOptions: [
          { value: 'just-me', label: 'Just me', description: 'Solo sales efforts', icon: 'Target', color: 'blue' },
          { value: '1-2-people', label: '1-2 people', description: 'Small sales team', icon: 'Users', color: 'gray' },
          { value: '3-5-people', label: '3-5 people', description: 'Medium sales team', icon: 'Users', color: 'gray' },
          { value: '6-10-people', label: '6-10 people', description: 'Large sales team', icon: 'Building', color: 'gray' },
          { value: 'more-10', label: '10+ people', description: 'Enterprise sales team', icon: 'Building2', color: 'gray' }
        ]
      },
      {
        id: 'hourly_cost_sales',
        title: 'Average hourly cost of sales activities',
        type: 'visual_grid',
        required: true,
        multiple: false,
        visualOptions: [
          { value: '20-35', label: '€20-35 per hour', description: 'Junior sales staff', icon: 'Clock', color: 'blue' },
          { value: '35-50', label: '€35-50 per hour', description: 'Mid-level sales team', icon: 'Clock', color: 'gray' },
          { value: '50-75', label: '€50-75 per hour', description: 'Senior sales staff', icon: 'TrendingUp', color: 'gray' },
          { value: '75-100', label: '€75-100 per hour', description: 'Executive sales time', icon: 'Target', color: 'gray' },
          { value: '100+', label: 'More than €100 per hour', description: 'Premium sales resources', icon: 'BarChart3', color: 'gray' }
        ]
      },
      {
        id: 'prospect_outcomes',
        title: 'Current conversion rate (qualified prospects to customers)',
        type: 'visual_grid',
        required: true,
        multiple: false,
        visualOptions: [
          { value: 'excellent', label: 'Excellent (40%+)', description: '40%+ become customers', icon: 'TrendingUp', color: 'blue' },
          { value: 'strong', label: 'Strong (30-40%)', description: '30-40% conversion rate', icon: 'BarChart3', color: 'gray' },
          { value: 'good', label: 'Good (20-30%)', description: '20-30% conversion rate', icon: 'Target', color: 'gray' },
          { value: 'average', label: 'Average (15-20%)', description: '15-20% conversion rate', icon: 'BarChart', color: 'gray' },
          { value: 'below-average', label: 'Below average (10-15%)', description: '10-15% conversion rate', icon: 'TrendingDown', color: 'gray' },
          { value: 'poor', label: 'Poor (less than 10%)', description: 'Less than 10% conversion', icon: 'AlertTriangle', color: 'gray' },
          { value: 'wrong-people', label: 'Wrong prospects', description: 'Talking to wrong people', icon: 'Shuffle', color: 'gray' }
        ]
      },
      {
        id: 'scaling_obstacles',
        title: 'What prevents you from scaling sales?',
        type: 'visual_grid',
        required: true,
        multiple: true,
        maxSelections: 3,
        visualOptions: [
          {
            value: 'not-enough-hours',
            label: 'Not enough hours in the day',
            description: 'Time constraints limiting growth',
            icon: 'Clock',
            color: 'blue'
          },
          {
            value: 'finding-prospects',
            label: 'Finding the right prospects',
            description: 'Difficulty identifying qualified leads',
            icon: 'Target',
            color: 'gray'
          },
          {
            value: 'contact-info',
            label: 'Getting contact information',
            description: 'Hard to find decision maker details',
            icon: 'Phone',
            color: 'gray'
          },
          {
            value: 'personalization-time',
            label: 'Personalizing outreach takes too long',
            description: 'Custom messaging is time-intensive',
            icon: 'Mail',
            color: 'gray'
          },
          {
            value: 'crm-maintenance',
            label: 'CRM data maintenance',
            description: 'Keeping customer data up to date',
            icon: 'FileText',
            color: 'gray'
          },
          {
            value: 'inconsistent-followup',
            label: 'Inconsistent follow-up',
            description: 'Missing opportunities due to timing',
            icon: 'Calendar',
            color: 'gray'
          },
          {
            value: 'poor-data',
            label: 'Poor data quality',
            description: 'Inaccurate or outdated information',
            icon: 'AlertTriangle',
            color: 'gray'
          },
          {
            value: 'team-burnout',
            label: 'Team burnout',
            description: 'Staff overwhelmed with workload',
            icon: 'Users',
            color: 'gray'
          }
        ]
      },
      {
        id: 'current_sales_tools',
        title: 'Current sales technology stack',
        type: 'visual_grid',
        required: true,
        multiple: true,
        maxSelections: 4,
        visualOptions: [
          {
            value: 'crm',
            label: 'CRM system',
            description: 'Salesforce, HubSpot, Pipedrive',
            icon: 'Building',
            color: 'blue'
          },
          {
            value: 'linkedin-nav',
            label: 'LinkedIn Sales Navigator',
            description: 'Professional networking and prospecting',
            icon: 'Users',
            color: 'gray'
          },
          {
            value: 'email-automation',
            label: 'Email automation platform',
            description: 'Automated email sequences',
            icon: 'Mail',
            color: 'gray'
          },
          {
            value: 'data-providers',
            label: 'Data/lead providers',
            description: 'Apollo, ZoomInfo, lead databases',
            icon: 'BarChart3',
            color: 'gray'
          },
          {
            value: 'calendar-tools',
            label: 'Calendar scheduling tools',
            description: 'Calendly, automated booking',
            icon: 'Calendar',
            color: 'gray'
          },
          {
            value: 'call-recording',
            label: 'Call recording/analytics',
            description: 'Track and analyze sales calls',
            icon: 'Phone',
            color: 'gray'
          },
          {
            value: 'proposal-software',
            label: 'Proposal/quote software',
            description: 'Automated proposal generation',
            icon: 'FileText',
            color: 'gray'
          },
          {
            value: 'spreadsheets-email',
            label: 'Just spreadsheets and email',
            description: 'Basic tools for tracking',
            icon: 'Gauge',
            color: 'gray'
          },
          {
            value: 'no-formal-systems',
            label: 'No formal systems',
            description: 'Manual processes only',
            icon: 'AlertTriangle',
            color: 'gray'
          }
        ]
      },
      {
        id: 'transformation_priorities',
        title: 'Sales transformation priorities',
        type: 'visual_grid',
        required: true,
        multiple: true,
        maxSelections: 3,
        visualOptions: [
          {
            value: '10x-conversations',
            label: 'Have 10x more sales conversations',
            description: 'Dramatically increase prospect interactions',
            icon: 'TrendingUp',
            color: 'blue'
          },
          {
            value: 'never-prospect',
            label: 'Never waste time on prospecting',
            description: 'Automate lead generation completely',
            icon: 'Target',
            color: 'gray'
          },
          {
            value: 'perfect-crm',
            label: 'Perfect data in CRM automatically',
            description: 'Automated data entry and updates',
            icon: 'Building',
            color: 'gray'
          },
          {
            value: 'consistent-pipeline',
            label: 'Consistent pipeline flow',
            description: 'Predictable lead generation',
            icon: 'BarChart',
            color: 'gray'
          },
          {
            value: 'shorter-cycles',
            label: 'Shorter sales cycles',
            description: 'Faster prospect to customer conversion',
            icon: 'Timer',
            color: 'gray'
          },
          {
            value: 'higher-quality',
            label: 'Higher quality prospects',
            description: 'Better lead qualification and targeting',
            icon: 'Gauge',
            color: 'gray'
          },
          {
            value: 'relationship-focus',
            label: 'Focus only on relationship building',
            description: 'Automate admin, focus on relationships',
            icon: 'Users',
            color: 'gray'
          },
          {
            value: 'competitive-advantage',
            label: 'Competitive advantage through efficiency',
            description: 'Outperform competitors with automation',
            icon: 'Zap',
            color: 'gray'
          }
        ]
      }
    ]
  }
]

// Finance & Administration Route - 8 Questions
export const FINANCE_ROUTE_PHASES: QuizPhase[] = [
  {
    id: 'finance_processes',
    title: 'Financial Process Analysis',
    description: 'Understanding your financial workflows',
    estimatedTime: 2.5,
    questions: [
      {
        id: 'main_time_consumers',
        title: 'Which financial processes consume the most time?',
        type: 'visual_grid',
        required: true,
        multiple: true,
        maxSelections: 3,
        visualOptions: [
          {
            value: 'vendor-invoices',
            label: 'Processing vendor invoices',
            description: 'Accounts payable and vendor management',
            icon: 'FileText',
            color: 'blue'
          },
          {
            value: 'customer-invoices',
            label: 'Creating customer invoices',
            description: 'Accounts receivable and billing',
            icon: 'Mail',
            color: 'gray'
          },
          {
            value: 'expense-reports',
            label: 'Expense report management',
            description: 'Employee expense processing',
            icon: 'BarChart3',
            color: 'gray'
          },
          {
            value: 'payment-processing',
            label: 'Payment processing and reconciliation',
            description: 'Managing payments and bank matching',
            icon: 'Building',
            color: 'gray'
          },
          {
            value: 'financial-reporting',
            label: 'Financial reporting and analysis',
            description: 'Monthly reports and financial analysis',
            icon: 'PieChart',
            color: 'gray'
          },
          {
            value: 'bank-reconciliation',
            label: 'Bank reconciliation',
            description: 'Matching bank statements to records',
            icon: 'BarChart',
            color: 'gray'
          },
          {
            value: 'budget-tracking',
            label: 'Budget tracking and forecasts',
            description: 'Budget monitoring and planning',
            icon: 'TrendingUp',
            color: 'gray'
          },
          {
            value: 'month-end-closing',
            label: 'Month-end closing procedures',
            description: 'Financial period closing activities',
            icon: 'Calendar',
            color: 'gray'
          }
        ]
      },
      {
        id: 'monthly_transactions',
        title: 'Monthly transaction volume (total)',
        type: 'slider',
        required: true,
        sliderConfig: {
          min: 10,
          max: 2000,
          step: 10,
          unit: 'transactions',
          markers: [10, 50, 100, 200, 500, 1000, 2000]
        },
        benchmark: 'Similar companies process 100-500 total transactions monthly'
      },
      {
        id: 'invoice_processing_time',
        title: 'Average time to process one invoice (from receipt to payment)',
        type: 'slider',
        required: true,
        sliderConfig: {
          min: 5,
          max: 180,
          step: 5,
          unit: 'minutes',
          markers: [5, 15, 30, 60, 120, 180]
        },
        realTimeCalculation: true,
        calculationMessage: '[X] minutes per invoice - that\'s [MONTHLY] hours monthly at current volume'
      },
      {
        id: 'approval_cycle_time',
        title: 'Typical approval cycle time',
        type: 'visual_grid',
        required: true,
        multiple: false,
        visualOptions: [
          { value: 'same-day', label: 'Same day', description: 'Immediate approvals', icon: 'Zap', color: 'blue' },
          { value: '1-2-days', label: '1-2 days', description: 'Quick turnaround', icon: 'Clock', color: 'gray' },
          { value: '3-5-days', label: '3-5 days', description: 'Standard process', icon: 'Calendar', color: 'gray' },
          { value: '1-week', label: '1 week', description: 'Slow approvals', icon: 'Timer', color: 'gray' },
          { value: '1-2-weeks', label: '1-2 weeks', description: 'Very slow process', icon: 'AlertTriangle', color: 'gray' },
          { value: 'more-2-weeks', label: 'More than 2 weeks', description: 'Extremely slow', icon: 'AlertTriangle', color: 'gray' }
        ]
      },
      {
        id: 'error_frequency',
        title: 'How often do financial errors or discrepancies occur?',
        type: 'visual_grid',
        required: true,
        multiple: false,
        visualOptions: [
          { value: 'multiple-daily', label: 'Multiple times daily', description: 'Constant error correction', icon: 'AlertTriangle', color: 'blue' },
          { value: 'daily', label: 'Daily', description: 'Daily error handling', icon: 'AlertTriangle', color: 'gray' },
          { value: 'several-weekly', label: 'Several times per week', description: 'Regular errors', icon: 'Clock', color: 'gray' },
          { value: 'weekly', label: 'Weekly', description: 'Weekly corrections', icon: 'Calendar', color: 'gray' },
          { value: 'several-monthly', label: 'Several times per month', description: 'Monthly errors', icon: 'BarChart', color: 'gray' },
          { value: 'monthly', label: 'Monthly', description: 'Rare errors', icon: 'CheckCircle', color: 'gray' },
          { value: 'rarely', label: 'Rarely', description: 'Very few errors', icon: 'Shield', color: 'gray' }
        ]
      },
      {
        id: 'error_cost',
        title: 'Estimated cost impact of errors and rework',
        type: 'visual_grid',
        required: true,
        multiple: false,
        visualOptions: [
          { value: 'less-500', label: 'Less than €500', description: 'Minimal error cost', icon: 'CheckCircle', color: 'blue' },
          { value: '500-1000', label: '€500-1,000', description: 'Low error impact', icon: 'BarChart', color: 'gray' },
          { value: '1000-2500', label: '€1,000-2,500', description: 'Moderate error cost', icon: 'BarChart3', color: 'gray' },
          { value: '2500-5000', label: '€2,500-5,000', description: 'High error impact', icon: 'TrendingUp', color: 'gray' },
          { value: '5000-10000', label: '€5,000-10,000', description: 'Very high cost', icon: 'AlertTriangle', color: 'gray' },
          { value: 'more-10000', label: 'More than €10,000', description: 'Critical error cost', icon: 'AlertTriangle', color: 'gray' }
        ]
      },
      {
        id: 'finance_team_size',
        title: 'Finance team size',
        type: 'visual_grid',
        required: true,
        multiple: false,
        visualOptions: [
          { value: 'just-me', label: 'Just me', description: 'Solo finance management', icon: 'Target', color: 'blue' },
          { value: '1-2-people', label: '1-2 people', description: 'Small finance team', icon: 'Users', color: 'gray' },
          { value: '3-5-people', label: '3-5 people', description: 'Medium finance team', icon: 'Building', color: 'gray' },
          { value: 'external-help', label: 'External bookkeeper', description: 'Outsourced finance', icon: 'FileText', color: 'gray' },
          { value: 'mixed-team', label: 'Mixed internal/external', description: 'Hybrid approach', icon: 'Shuffle', color: 'gray' }
        ]
      },
      {
        id: 'financial_systems',
        title: 'Where do you manage financial information?',
        type: 'visual_grid',
        required: true,
        multiple: true,
        maxSelections: 4,
        visualOptions: [
          {
            value: 'erp-system',
            label: 'ERP system',
            description: 'SAP, Oracle, comprehensive business systems',
            icon: 'Building',
            color: 'blue'
          },
          {
            value: 'accounting-software',
            label: 'Accounting software',
            description: 'QuickBooks, Xero, dedicated accounting tools',
            icon: 'BarChart3',
            color: 'gray'
          },
          {
            value: 'bank-portals',
            label: 'Bank portals and websites',
            description: 'Online banking and financial institutions',
            icon: 'Building',
            color: 'gray'
          },
          {
            value: 'expense-platform',
            label: 'Expense management platform',
            description: 'Dedicated expense tracking software',
            icon: 'FileText',
            color: 'gray'
          },
          {
            value: 'payment-systems',
            label: 'Payment processing systems',
            description: 'Payment gateways and processors',
            icon: 'BarChart',
            color: 'gray'
          },
          {
            value: 'spreadsheets',
            label: 'Excel/Google Sheets',
            description: 'Spreadsheet-based financial tracking',
            icon: 'Gauge',
            color: 'gray'
          },
          {
            value: 'email-folders',
            label: 'Email and folders',
            description: 'File-based organization system',
            icon: 'Mail',
            color: 'gray'
          },
          {
            value: 'paper-filing',
            label: 'Paper filing systems',
            description: 'Physical document management',
            icon: 'AlertTriangle',
            color: 'gray'
          }
        ]
      }
    ]
  }
]

// Customer Service & Support Route - 8 Questions
export const CUSTOMER_SERVICE_ROUTE_PHASES: QuizPhase[] = [
  {
    id: 'service_channels',
    title: 'Customer Communication & Volume',
    description: 'Understanding how customers reach you',
    estimatedTime: 2.5,
    questions: [
      {
        id: 'customer_channels',
        title: 'How do customers contact you?',
        type: 'visual_grid',
        required: true,
        multiple: true,
        maxSelections: 4,
        visualOptions: [
          {
            value: 'email',
            label: 'Email',
            description: 'Traditional email support',
            icon: 'Mail',
            color: 'blue'
          },
          {
            value: 'phone',
            label: 'Phone calls',
            description: 'Direct voice communication',
            icon: 'Phone',
            color: 'gray'
          },
          {
            value: 'live-chat',
            label: 'Live chat',
            description: 'Real-time website chat support',
            icon: 'MessageCircle',
            color: 'gray'
          },
          {
            value: 'ticket-system',
            label: 'Support ticket system',
            description: 'Formal ticketing platform',
            icon: 'FileText',
            color: 'gray'
          },
          {
            value: 'social-media',
            label: 'Social media messages',
            description: 'Social platform communication',
            icon: 'Share2',
            color: 'gray'
          },
          {
            value: 'whatsapp-sms',
            label: 'WhatsApp/SMS',
            description: 'Mobile messaging platforms',
            icon: 'MessageSquare',
            color: 'gray'
          },
          {
            value: 'community-forum',
            label: 'Community forum',
            description: 'Public discussion forums',
            icon: 'Users',
            color: 'gray'
          },
          {
            value: 'in-person',
            label: 'In-person/walk-ins',
            description: 'Face-to-face customer service',
            icon: 'Building',
            color: 'gray'
          }
        ]
      },
      {
        id: 'daily_inquiry_volume',
        title: 'Daily customer inquiry volume',
        type: 'slider',
        required: true,
        sliderConfig: {
          timeframes: ['daily', 'weekly', 'monthly'],
          ranges: {
            daily: { min: 1, max: 200, markers: [1, 10, 25, 50, 100, 200] },
            weekly: { min: 5, max: 1000, markers: [5, 50, 150, 300, 600, 1000] },
            monthly: { min: 20, max: 4000, markers: [20, 200, 600, 1200, 2400, 4000] }
          }
        },
        unitLabel: 'inquiries'
      },
      {
        id: 'primary_inquiry_type',
        title: 'Most common inquiry type',
        type: 'visual_grid',
        required: true,
        multiple: false,
        visualOptions: [
          { value: 'order_status', label: 'Order status/tracking', description: 'Shipping, delivery, order updates', icon: 'Package', color: 'blue' },
          { value: 'product_info', label: 'Product information', description: 'Features, specifications, how-to questions', icon: 'FileText', color: 'gray' },
          { value: 'technical_support', label: 'Technical support', description: 'Troubleshooting, setup, issues', icon: 'Wrench', color: 'gray' },
          { value: 'billing_payments', label: 'Billing and payments', description: 'Payment issues, invoicing, account billing', icon: 'BarChart3', color: 'gray' },
          { value: 'returns_complaints', label: 'Returns and complaints', description: 'Refunds, exchanges, dissatisfaction', icon: 'AlertTriangle', color: 'gray' },
          { value: 'account_management', label: 'Account management', description: 'Profile changes, preferences, general account help', icon: 'Users', color: 'gray' }
        ]
      },
      {
        id: 'first_response_time',
        title: 'Average first response time',
        type: 'slider',
        required: true,
        sliderConfig: {
          min: 15,
          max: 1440,
          step: 15,
          unit: 'minutes',
          markers: [15, 60, 120, 240, 480, 1440]
        },
        benchmark: 'Industry best practice: Under 2 hours for initial response'
      },
      {
        id: 'inquiry_repetitiveness',
        title: 'What percentage of inquiries are repetitive?',
        type: 'slider',
        required: true,
        sliderConfig: {
          min: 0,
          max: 100,
          step: 5,
          unit: '%',
          markers: [0, 20, 40, 60, 80, 100]
        },
        realTimeCalculation: true,
        calculationMessage: '[X]% repetitive means automation potential is high'
      },
      {
        id: 'service_team_size',
        title: 'Customer service team size',
        type: 'visual_grid',
        required: true,
        multiple: false,
        visualOptions: [
          { value: 'just-me', label: 'Just me', description: 'Solo customer service', icon: 'Target', color: 'blue' },
          { value: '1-2-people', label: '1-2 people', description: 'Small support team', icon: 'Users', color: 'gray' },
          { value: '3-5-people', label: '3-5 people', description: 'Medium support team', icon: 'Users', color: 'gray' },
          { value: '6-10-people', label: '6-10 people', description: 'Large support team', icon: 'Building', color: 'gray' },
          { value: 'more-10', label: '10+ people', description: 'Enterprise support team', icon: 'Building2', color: 'gray' }
        ]
      },
      {
        id: 'service_tools',
        title: 'Current support tools and systems',
        type: 'visual_grid',
        required: true,
        multiple: true,
        maxSelections: 4,
        visualOptions: [
          {
            value: 'help-desk',
            label: 'Professional help desk software',
            description: 'Zendesk, Freshdesk, ServiceNow',
            icon: 'Building',
            color: 'blue'
          },
          {
            value: 'shared-email',
            label: 'Shared team email inbox',
            description: 'Team email for support coordination',
            icon: 'Mail',
            color: 'gray'
          },
          {
            value: 'crm-system',
            label: 'CRM system',
            description: 'Customer relationship management platform',
            icon: 'Users',
            color: 'gray'
          },
          {
            value: 'knowledge-base',
            label: 'Knowledge base/FAQ',
            description: 'Self-service documentation',
            icon: 'FileText',
            color: 'gray'
          },
          {
            value: 'live-chat-software',
            label: 'Live chat software',
            description: 'Real-time chat support tools',
            icon: 'MessageCircle',
            color: 'gray'
          },
          {
            value: 'phone-system',
            label: 'Phone system/call center',
            description: 'Dedicated phone support infrastructure',
            icon: 'Phone',
            color: 'gray'
          },
          {
            value: 'social-media-tools',
            label: 'Social media management tools',
            description: 'Social platform support tools',
            icon: 'Share2',
            color: 'gray'
          },
          {
            value: 'spreadsheets-email',
            label: 'Just email and spreadsheets',
            description: 'Basic tracking tools',
            icon: 'Gauge',
            color: 'gray'
          },
          {
            value: 'no-formal-system',
            label: 'No formal system',
            description: 'Manual support processes',
            icon: 'AlertTriangle',
            color: 'gray'
          }
        ]
      },
      {
        id: 'customer_satisfaction',
        title: 'Customer satisfaction rating',
        type: 'visual_grid',
        required: true,
        multiple: false,
        visualOptions: [
          { value: 'excellent', label: 'Excellent', description: 'Regular praise and referrals', icon: 'TrendingUp', color: 'blue' },
          { value: 'good', label: 'Good', description: 'Mostly positive feedback', icon: 'CheckCircle', color: 'gray' },
          { value: 'average', label: 'Average', description: 'Mixed feedback', icon: 'BarChart', color: 'gray' },
          { value: 'below-average', label: 'Below average', description: 'Frequent complaints', icon: 'TrendingDown', color: 'gray' },
          { value: 'poor', label: 'Poor', description: 'Losing customers due to service', icon: 'AlertTriangle', color: 'gray' },
          { value: 'not-measured', label: 'Not measured', description: 'No tracking in place', icon: 'Shuffle', color: 'gray' }
        ]
      }
    ]
  }
]

// Operations & Fulfillment Route - 6 Questions
export const OPERATIONS_ROUTE_PHASES: QuizPhase[] = [
  {
    id: 'operations_analysis',
    title: 'Operations & Workflow Analysis',
    description: 'Understanding your operational processes',
    estimatedTime: 2,
    questions: [
      {
        id: 'main_operations_challenges',
        title: 'Primary operational challenges',
        type: 'visual_grid',
        required: true,
        multiple: true,
        maxSelections: 3,
        visualOptions: [
          {
            value: 'order-processing',
            label: 'Order processing and fulfillment',
            description: 'Managing customer orders and delivery',
            icon: 'BarChart3',
            color: 'blue'
          },
          {
            value: 'inventory-management',
            label: 'Inventory management and tracking',
            description: 'Stock level monitoring and control',
            icon: 'Building',
            color: 'gray'
          },
          {
            value: 'project-coordination',
            label: 'Project/job coordination',
            description: 'Managing multiple projects and tasks',
            icon: 'Calendar',
            color: 'gray'
          },
          {
            value: 'quality-control',
            label: 'Quality control and assurance',
            description: 'Maintaining standards and quality',
            icon: 'Target',
            color: 'gray'
          },
          {
            value: 'vendor-management',
            label: 'Vendor/supplier management',
            description: 'Managing external partnerships',
            icon: 'Users',
            color: 'gray'
          },
          {
            value: 'workflow-bottlenecks',
            label: 'Workflow bottlenecks',
            description: 'Process efficiency and flow issues',
            icon: 'AlertTriangle',
            color: 'gray'
          },
          {
            value: 'resource-allocation',
            label: 'Resource allocation',
            description: 'Optimizing staff and resource distribution',
            icon: 'PieChart',
            color: 'gray'
          },
          {
            value: 'compliance-documentation',
            label: 'Compliance and documentation',
            description: 'Regulatory requirements and record keeping',
            icon: 'FileText',
            color: 'gray'
          }
        ]
      },
      {
        id: 'biggest_time_drain',
        title: 'Biggest operational time drain',
        type: 'visual_grid',
        required: true,
        multiple: false,
        visualOptions: [
          { value: 'planning', label: 'Planning and coordination', description: 'Strategic planning, resource coordination, scheduling', icon: 'Calendar', color: 'blue' },
          { value: 'execution', label: 'Task execution', description: 'Direct work on products, services, deliverables', icon: 'Zap', color: 'gray' },
          { value: 'monitoring', label: 'Monitoring and tracking', description: 'Progress tracking, quality control, oversight', icon: 'BarChart3', color: 'gray' },
          { value: 'reporting', label: 'Reporting and documentation', description: 'Status reports, documentation, record keeping', icon: 'FileText', color: 'gray' }
        ]
      },
      {
        id: 'operations_team_size',
        title: 'Operations team size',
        type: 'visual_grid',
        required: true,
        multiple: false,
        visualOptions: [
          { value: '1-2', label: '1-2 people', description: 'Small operations team', icon: 'Target', color: 'blue' },
          { value: '3-5', label: '3-5 people', description: 'Medium operations team', icon: 'Users', color: 'gray' },
          { value: '6-10', label: '6-10 people', description: 'Large operations team', icon: 'Building', color: 'gray' },
          { value: '11-20', label: '11-20 people', description: 'Very large operations team', icon: 'Building2', color: 'gray' },
          { value: 'more-20', label: 'More than 20 people', description: 'Enterprise operations', icon: 'Building2', color: 'gray' }
        ]
      },
      {
        id: 'operational_consistency',
        title: 'Operational consistency',
        type: 'visual_grid',
        required: true,
        multiple: false,
        visualOptions: [
          { value: 'highly-consistent', label: 'Highly consistent', description: 'Same process every time', icon: 'CheckCircle', color: 'blue' },
          { value: 'mostly-consistent', label: 'Mostly consistent', description: 'Occasional variations', icon: 'BarChart3', color: 'gray' },
          { value: 'somewhat-consistent', label: 'Somewhat consistent', description: 'Regular adjustments needed', icon: 'BarChart', color: 'gray' },
          { value: 'inconsistent', label: 'Inconsistent', description: 'Frequent changes required', icon: 'Shuffle', color: 'gray' },
          { value: 'ad-hoc', label: 'Ad hoc', description: 'Every situation is different', icon: 'AlertTriangle', color: 'gray' }
        ]
      },
      {
        id: 'repetitive_operations_hours',
        title: 'Weekly hours on repetitive operational tasks',
        type: 'slider',
        required: true,
        sliderConfig: {
          min: 0,
          max: 80,
          step: 5,
          unit: 'hours',
          markers: [5, 10, 20, 30, 40, 60, 80]
        },
        subtext: 'That\'s X hours that could be automated!'
      },
      {
        id: 'operations_continuity',
        title: 'What happens when key operations staff are unavailable?',
        type: 'visual_grid',
        required: true,
        multiple: false,
        visualOptions: [
          { value: 'operations-halt', label: 'Operations halt', description: 'Operations halt or slow significantly', icon: 'AlertTriangle', color: 'blue' },
          { value: 'others-struggle', label: 'Others struggle', description: 'Other staff struggle to maintain pace', icon: 'Users', color: 'gray' },
          { value: 'manageable-stressful', label: 'Manageable but stressful', description: 'Stressful for the team', icon: 'Clock', color: 'gray' },
          { value: 'smooth-transition', label: 'Smooth transition', description: 'Minimal impact', icon: 'CheckCircle', color: 'gray' },
          { value: 'no-impact-documented', label: 'No impact', description: 'Fully documented processes', icon: 'FileCheck', color: 'gray' },
          { value: 'automated-backups', label: 'Automated backups', description: 'We have automated systems', icon: 'Zap', color: 'gray' }
        ]
      }
    ]
  }
]

// Marketing & Communications Route - 6 Questions
export const MARKETING_ROUTE_PHASES: QuizPhase[] = [
  {
    id: 'marketing_activities',
    title: 'Marketing Activities & Efficiency',
    description: 'Understanding your marketing processes',
    estimatedTime: 2,
    questions: [
      {
        id: 'marketing_channels',
        title: 'Active marketing channels',
        type: 'visual_grid',
        required: true,
        multiple: true,
        maxSelections: 4,
        visualOptions: [
          {
            value: 'social-media',
            label: 'Social media marketing',
            description: 'Facebook, LinkedIn, Instagram campaigns',
            icon: 'Share2',
            color: 'blue'
          },
          {
            value: 'content-marketing',
            label: 'Content marketing',
            description: 'Blog posts, videos, educational content',
            icon: 'FileText',
            color: 'gray'
          },
          {
            value: 'email-campaigns',
            label: 'Email marketing campaigns',
            description: 'Newsletter and promotional emails',
            icon: 'Mail',
            color: 'gray'
          },
          {
            value: 'paid-advertising',
            label: 'Paid advertising',
            description: 'Google Ads, social media ads',
            icon: 'Target',
            color: 'gray'
          },
          {
            value: 'seo-optimization',
            label: 'SEO/website optimization',
            description: 'Search engine optimization',
            icon: 'TrendingUp',
            color: 'gray'
          },
          {
            value: 'events-webinars',
            label: 'Events and webinars',
            description: 'Live events and online presentations',
            icon: 'Calendar',
            color: 'gray'
          },
          {
            value: 'partnership-marketing',
            label: 'Partnership/affiliate marketing',
            description: 'Strategic marketing partnerships',
            icon: 'Users',
            color: 'gray'
          },
          {
            value: 'traditional-advertising',
            label: 'Traditional advertising',
            description: 'Print, radio, TV advertising',
            icon: 'Building',
            color: 'gray'
          }
        ]
      },
      {
        id: 'content_creation_time',
        title: 'Weekly content creation hours',
        type: 'slider',
        required: true,
        sliderConfig: {
          min: 0,
          max: 50,
          step: 2,
          unit: 'hours',
          markers: [0, 5, 10, 20, 30, 40, 50]
        },
        realTimeCalculation: true,
        calculationMessage: '[X] hours weekly - AI could reduce this by 70%'
      },
      {
        id: 'marketing_pain_points',
        title: 'Marketing execution challenges',
        type: 'visual_grid',
        required: true,
        multiple: true,
        maxSelections: 3,
        visualOptions: [
          {
            value: 'content-creation-time',
            label: 'Content creation takes too long',
            description: 'Time-intensive content development',
            icon: 'Clock',
            color: 'blue'
          },
          {
            value: 'inconsistent-posting',
            label: 'Inconsistent posting schedule',
            description: 'Irregular content publishing',
            icon: 'Calendar',
            color: 'gray'
          },
          {
            value: 'campaign-coordination',
            label: 'Campaign coordination complexity',
            description: 'Managing multi-channel campaigns',
            icon: 'Shuffle',
            color: 'gray'
          },
          {
            value: 'performance-tracking',
            label: 'Performance tracking difficulties',
            description: 'Measuring campaign effectiveness',
            icon: 'BarChart3',
            color: 'gray'
          },
          {
            value: 'multiple-platforms',
            label: 'Managing multiple platforms',
            description: 'Cross-platform content management',
            icon: 'Building',
            color: 'gray'
          },
          {
            value: 'email-list-management',
            label: 'Email list management',
            description: 'Subscriber and segmentation management',
            icon: 'Mail',
            color: 'gray'
          },
          {
            value: 'budget-optimization',
            label: 'Budget optimization',
            description: 'Maximizing marketing spend efficiency',
            icon: 'Target',
            color: 'gray'
          },
          {
            value: 'team-coordination',
            label: 'Team coordination',
            description: 'Marketing team collaboration',
            icon: 'Users',
            color: 'gray'
          }
        ]
      },
      {
        id: 'lead_generation_volume',
        title: 'Monthly lead generation volume',
        type: 'slider',
        required: true,
        sliderConfig: {
          min: 0,
          max: 1000,
          step: 25,
          unit: 'leads',
          markers: [10, 25, 50, 100, 250, 500, 1000]
        },
        subtext: 'From all marketing efforts combined'
      },
      {
        id: 'biggest_marketing_challenge',
        title: 'Biggest marketing time challenge',
        type: 'visual_grid',
        required: true,
        multiple: false,
        visualOptions: [
          { value: 'strategic_creative', label: 'Strategic planning', description: 'Strategy, creative development, campaign planning', icon: 'Lightbulb', color: 'blue' },
          { value: 'content_creation', label: 'Content creation', description: 'Writing, design, video production', icon: 'FileText', color: 'gray' },
          { value: 'execution_admin', label: 'Administrative tasks', description: 'Publishing, scheduling, reporting, admin work', icon: 'Clock', color: 'gray' },
          { value: 'performance_tracking', label: 'Performance tracking', description: 'Analytics, measurement, optimization', icon: 'BarChart3', color: 'gray' }
        ]
      },
      {
        id: 'marketing_measurement',
        title: 'Marketing performance measurement',
        type: 'visual_grid',
        required: true,
        multiple: true,
        maxSelections: 3,
        visualOptions: [
          {
            value: 'website-analytics',
            label: 'Website traffic and analytics',
            description: 'Google Analytics and web metrics',
            icon: 'TrendingUp',
            color: 'blue'
          },
          {
            value: 'lead-quality-quantity',
            label: 'Lead quality and quantity',
            description: 'Lead generation effectiveness',
            icon: 'Target',
            color: 'gray'
          },
          {
            value: 'sales-feedback',
            label: 'Sales team feedback',
            description: 'Input from sales on lead quality',
            icon: 'Users',
            color: 'gray'
          },
          {
            value: 'social-engagement',
            label: 'Social media engagement',
            description: 'Social platform interaction metrics',
            icon: 'Share2',
            color: 'gray'
          },
          {
            value: 'roi-tracking',
            label: 'Detailed ROI tracking',
            description: 'Return on marketing investment',
            icon: 'BarChart3',
            color: 'gray'
          },
          {
            value: 'no-clear-metrics',
            label: 'No clear metrics',
            description: 'Limited measurement capabilities',
            icon: 'AlertTriangle',
            color: 'gray'
          }
        ]
      }
    ]
  }
]

// Human Resources Route - 6 Questions
export const HR_ROUTE_PHASES: QuizPhase[] = [
  {
    id: 'hr_processes',
    title: 'HR Processes & Efficiency',
    description: 'Understanding your human resources workflows',
    estimatedTime: 2,
    questions: [
      {
        id: 'hr_main_activities',
        title: 'Primary HR activities',
        type: 'visual_grid',
        required: true,
        multiple: true,
        maxSelections: 3,
        visualOptions: [
          {
            value: 'recruiting-hiring',
            label: 'Recruiting and hiring',
            description: 'Finding and onboarding new talent',
            icon: 'Users',
            color: 'blue'
          },
          {
            value: 'employee-onboarding',
            label: 'Employee onboarding',
            description: 'New employee setup and integration',
            icon: 'Calendar',
            color: 'gray'
          },
          {
            value: 'performance-management',
            label: 'Performance management',
            description: 'Employee reviews and development',
            icon: 'TrendingUp',
            color: 'gray'
          },
          {
            value: 'payroll-processing',
            label: 'Payroll processing',
            description: 'Salary and benefits administration',
            icon: 'BarChart3',
            color: 'gray'
          },
          {
            value: 'benefits-administration',
            label: 'Benefits administration',
            description: 'Health insurance and benefits management',
            icon: 'Building',
            color: 'gray'
          },
          {
            value: 'employee-relations',
            label: 'Employee relations',
            description: 'Workplace culture and communication',
            icon: 'MessageCircle',
            color: 'gray'
          },
          {
            value: 'compliance-regulations',
            label: 'Compliance and regulations',
            description: 'Employment law and regulatory compliance',
            icon: 'FileText',
            color: 'gray'
          },
          {
            value: 'training-development',
            label: 'Training and development',
            description: 'Employee skill development programs',
            icon: 'Lightbulb',
            color: 'gray'
          }
        ]
      },
      {
        id: 'hiring_frequency',
        title: 'Hiring frequency',
        type: 'visual_grid',
        required: true,
        multiple: false,
        visualOptions: [
          { value: 'multiple-monthly', label: 'Multiple hires monthly', description: 'Very frequent hiring', icon: 'TrendingUp', color: 'blue' },
          { value: 'monthly', label: 'Monthly', description: 'Regular monthly hiring', icon: 'Calendar', color: 'gray' },
          { value: 'quarterly', label: 'Quarterly', description: 'Quarterly hiring cycles', icon: 'BarChart3', color: 'gray' },
          { value: 'twice-yearly', label: 'Twice per year', description: 'Bi-annual hiring', icon: 'BarChart', color: 'gray' },
          { value: 'annually', label: 'Annually', description: 'Annual hiring only', icon: 'Clock', color: 'gray' },
          { value: 'rarely-as-needed', label: 'Rarely/as needed', description: 'Infrequent hiring', icon: 'Target', color: 'gray' }
        ]
      },
      {
        id: 'hr_team_size',
        title: 'HR team size',
        type: 'visual_grid',
        required: true,
        multiple: false,
        visualOptions: [
          { value: 'just-me', label: 'Just me', description: 'Solo HR management', icon: 'Target', color: 'blue' },
          { value: '1-2-people', label: '1-2 people', description: 'Small HR team', icon: 'Users', color: 'gray' },
          { value: '3-5-people', label: '3-5 people', description: 'Medium HR team', icon: 'Building', color: 'gray' },
          { value: 'external-help', label: 'External consultant', description: 'Outsourced HR services', icon: 'FileText', color: 'gray' },
          { value: 'mixed-team', label: 'Mixed internal/external', description: 'Hybrid HR approach', icon: 'Shuffle', color: 'gray' }
        ]
      },
      {
        id: 'employee_onboarding_time',
        title: 'Time to fully onboard new employees',
        type: 'visual_grid',
        required: true,
        multiple: false,
        visualOptions: [
          { value: 'same-day', label: 'Same day', description: 'Everything is ready', icon: 'Zap', color: 'blue' },
          { value: '2-3-days', label: '2-3 days', description: 'Quick onboarding', icon: 'Clock', color: 'gray' },
          { value: 'one-week', label: 'One week', description: 'Standard onboarding', icon: 'Calendar', color: 'gray' },
          { value: '2-weeks', label: '2 weeks', description: 'Extended onboarding', icon: 'Timer', color: 'gray' },
          { value: '3-4-weeks', label: '3-4 weeks', description: 'Long onboarding process', icon: 'AlertTriangle', color: 'gray' },
          { value: 'more-month', label: 'More than a month', description: 'Very long process', icon: 'AlertTriangle', color: 'gray' },
          { value: 'varies-significantly', label: 'Varies significantly', description: 'Inconsistent process', icon: 'Shuffle', color: 'gray' }
        ]
      },
      {
        id: 'hr_admin_hours',
        title: 'Monthly HR administrative hours',
        type: 'slider',
        required: true,
        sliderConfig: {
          min: 0,
          max: 100,
          step: 5,
          unit: 'hours',
          markers: [5, 10, 20, 40, 60, 80, 100]
        },
        subtext: 'Including payroll, benefits, compliance, paperwork'
      },
      {
        id: 'hr_biggest_challenge',
        title: 'Most challenging HR aspect',
        type: 'visual_grid',
        required: true,
        multiple: false,
        visualOptions: [
          { value: 'finding-candidates', label: 'Finding qualified candidates', description: 'Recruitment challenges', icon: 'Search', color: 'blue' },
          { value: 'onboarding-efficiency', label: 'Onboarding efficiency', description: 'New hire integration', icon: 'Calendar', color: 'gray' },
          { value: 'payroll-benefits', label: 'Payroll and benefits', description: 'Compensation complexity', icon: 'BarChart3', color: 'gray' },
          { value: 'regulatory-compliance', label: 'Regulatory compliance', description: 'Legal and regulatory requirements', icon: 'Shield', color: 'gray' },
          { value: 'employee-engagement', label: 'Employee engagement', description: 'Staff satisfaction and retention', icon: 'Users', color: 'gray' },
          { value: 'performance-management', label: 'Performance management', description: 'Reviews and development', icon: 'TrendingUp', color: 'gray' },
          { value: 'all-equally-challenging', label: 'All equally challenging', description: 'Multiple HR challenges', icon: 'AlertTriangle', color: 'gray' }
        ]
      }
    ]
  }
]

// Final Questions (All Routes) - 6 Questions
export const FINAL_QUESTIONS: QuizPhase[] = [
  {
    id: 'business_impact',
    title: 'Business Impact Assessment',
    description: 'Understanding the broader impact of these challenges',
    estimatedTime: 1.5,
    questions: [
      {
        id: 'operational_impact',
        title: 'How are current inefficiencies affecting your business?',
        type: 'visual_grid',
        required: true,
        multiple: true,
        maxSelections: 4,
        visualOptions: [
          {
            value: 'limiting-growth',
            label: 'Limiting our growth potential',
            description: 'Preventing business expansion',
            icon: 'TrendingUp',
            color: 'blue'
          },
          {
            value: 'increasing-costs',
            label: 'Increasing operational costs',
            description: 'Rising expenses and inefficiencies',
            icon: 'BarChart3',
            color: 'gray'
          },
          {
            value: 'affecting-satisfaction',
            label: 'Affecting customer satisfaction',
            description: 'Customer experience declining',
            icon: 'Users',
            color: 'gray'
          },
          {
            value: 'employee-frustration',
            label: 'Causing employee frustration',
            description: 'Staff overwhelmed with manual work',
            icon: 'MessageCircle',
            color: 'gray'
          },
          {
            value: 'missing-opportunities',
            label: 'Missing market opportunities',
            description: 'Unable to capitalize on opportunities',
            icon: 'Target',
            color: 'gray'
          },
          {
            value: 'losing-advantage',
            label: 'Losing competitive advantage',
            description: 'Competitors gaining ground',
            icon: 'AlertTriangle',
            color: 'gray'
          },
          {
            value: 'preventing-initiatives',
            label: 'Preventing strategic initiatives',
            description: 'Cannot focus on strategic projects',
            icon: 'Lightbulb',
            color: 'gray'
          },
          {
            value: 'compliance-risks',
            label: 'Creating compliance risks',
            description: 'Regulatory and legal concerns',
            icon: 'FileText',
            color: 'gray'
          }
        ]
      },
      {
        id: 'timeline_urgency',
        title: 'Timeline for addressing these challenges',
        type: 'visual_grid',
        required: true,
        multiple: false,
        visualOptions: [
          { value: 'immediate', label: 'Immediate priority', description: 'This month', icon: 'Zap', color: 'blue' },
          { value: 'this-quarter', label: 'This quarter', description: 'Next 3 months', icon: 'Calendar', color: 'gray' },
          { value: 'next-6-months', label: 'Next 6 months', description: 'Medium-term priority', icon: 'Clock', color: 'gray' },
          { value: 'within-year', label: 'Within the year', description: 'Long-term planning', icon: 'Target', color: 'gray' },
          { value: 'next-year', label: 'Next year', description: 'Future consideration', icon: 'Timer', color: 'gray' },
          { value: 'exploring-options', label: 'Just exploring', description: 'Research phase', icon: 'Search', color: 'gray' }
        ]
      },
      {
        id: 'monthly_investment',
        title: 'Monthly operational improvement budget',
        type: 'visual_grid',
        required: true,
        multiple: false,
        visualOptions: [
          { value: 'less-500', label: 'Less than €500', description: 'Small budget', icon: 'Target', color: 'blue' },
          { value: '500-1000', label: '€500-1,000', description: 'Basic investment', icon: 'BarChart', color: 'gray' },
          { value: '1000-2500', label: '€1,000-2,500', description: 'Moderate budget', icon: 'BarChart3', color: 'gray' },
          { value: '2500-5000', label: '€2,500-5,000', description: 'Substantial investment', icon: 'TrendingUp', color: 'gray' },
          { value: '5000-7500', label: '€5,000-7,500', description: 'High investment', icon: 'TrendingUp', color: 'gray' },
          { value: '7500-10000', label: '€7,500-10,000', description: 'Premium budget', icon: 'Building', color: 'gray' },
          { value: '10000-15000', label: '€10,000-15,000', description: 'Enterprise budget', icon: 'Building2', color: 'gray' },
          { value: 'more-15000', label: 'More than €15,000', description: 'Large enterprise budget', icon: 'Building2', color: 'gray' }
        ],
        benchmark: 'Companies your size typically invest €2,500-5,000 monthly in operational improvements'
      },
      {
        id: 'success_vision',
        title: 'Vision for operational excellence',
        type: 'textarea',
        required: true,
        placeholder: 'Describe your ideal state - What would your business look like with perfect operations? Consider time savings, stress reduction, growth potential...'
      },
      {
        id: 'decision_makers',
        title: 'Who needs to be involved in this decision?',
        type: 'visual_grid',
        required: true,
        multiple: true,
        maxSelections: 3,
        visualOptions: [
          {
            value: 'business-partners',
            label: 'Business partner(s)',
            description: 'Co-owners and business partners',
            icon: 'Users',
            color: 'blue'
          },
          {
            value: 'cfo-finance',
            label: 'CFO/Finance lead',
            description: 'Financial decision maker',
            icon: 'BarChart3',
            color: 'gray'
          },
          {
            value: 'operations-head',
            label: 'Operations head',
            description: 'Operations management',
            icon: 'Building',
            color: 'gray'
          },
          {
            value: 'it-technology',
            label: 'IT/Technology lead',
            description: 'Technology implementation lead',
            icon: 'Zap',
            color: 'gray'
          },
          {
            value: 'department-managers',
            label: 'Department managers',
            description: 'Department heads and managers',
            icon: 'FileText',
            color: 'gray'
          },
          {
            value: 'board-investors',
            label: 'Board/Investors',
            description: 'Board members and investors',
            icon: 'Building',
            color: 'gray'
          },
          {
            value: 'just-me',
            label: 'Just me',
            description: 'Independent decision making',
            icon: 'Target',
            color: 'gray'
          }
        ]
      },
      {
        id: 'contact_details',
        title: 'Get Your Free Business Analysis Report',
        subtitle: 'We\'ll send your personalized analysis report via email within 24 hours',
        type: 'contact_form',
        required: true,
        contactFields: [
          { id: 'full_name', label: 'Your Full Name', type: 'text', required: true, placeholder: 'e.g., John Smith' },
          { id: 'business_email', label: 'Business Email Address', type: 'email', required: true, placeholder: 'e.g., john@yourcompany.com' },
          { id: 'company_name', label: 'Company Name', type: 'text', required: true, placeholder: 'e.g., Your Company Ltd' },
          { id: 'website', label: 'Company Website', type: 'url', required: false, placeholder: 'e.g., https://yourcompany.com' },
          { id: 'phone_number', label: 'Phone Number (Optional)', type: 'tel', required: false, placeholder: 'e.g., +31 6 1234 5678' }
        ]
      }
    ]
  }
]

// Department Route Mapping
export const DEPARTMENT_ROUTES = {
  sales: SALES_ROUTE_PHASES,
  finance: FINANCE_ROUTE_PHASES,
  customer_service: CUSTOMER_SERVICE_ROUTE_PHASES,
  operations: OPERATIONS_ROUTE_PHASES,
  marketing: MARKETING_ROUTE_PHASES,
  hr: HR_ROUTE_PHASES
}

// Complete quiz structure
export const COMPLETE_SERVICE_QUIZ = {
  opening: SERVICE_QUIZ_PHASES,
  routes: DEPARTMENT_ROUTES,
  final: FINAL_QUESTIONS
}