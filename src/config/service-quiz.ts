import { Question, QuizPhase } from '@/types/audit-tool'

// Updated Service-as-Software Quiz with New Comprehensive Content
export const SERVICE_QUIZ_PHASES: QuizPhase[] = [
  // Opening Context (All Routes) - 3 Questions
  {
    id: 'opening',
    title: 'Company Context',
    description: 'Let\'s start with some quick context about your business',
    estimatedTime: 1.5,
    questions: [
      {
        id: 'company_size',
        title: 'Company Size',
        type: 'visual_grid',
        required: true,
        multiple: false,
        visualOptions: [
          { value: '1', label: '1 person', description: 'Solo entrepreneur', icon: 'User', color: 'blue' },
          { value: '2-10', label: '2-10 employees', description: 'Micro team', icon: 'Users', color: 'gray' },
          { value: '11-25', label: '11-25 employees', description: 'Growing business', icon: 'Users', color: 'gray' },
          { value: '26-50', label: '26-50 employees', description: 'Medium company', icon: 'Building', color: 'gray' },
          { value: '51-100', label: '51-100 employees', description: 'Established business', icon: 'Building', color: 'gray' },
          { value: '101-250', label: '101-250 employees', description: '101-250 employees', icon: 'Building2', color: 'gray' },
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
          { value: 'decision-maker', label: 'Decision Maker', description: 'Owner/CEO/C-Suite', icon: 'Crown', color: 'blue' },
          { value: 'department-head', label: 'Department Head', description: 'Director/VP/Head of', icon: 'Target', color: 'gray' },
          { value: 'manager', label: 'Manager', description: 'Operations/Team Lead', icon: 'Users', color: 'gray' },
          { value: 'individual-contributor', label: 'Individual Contributor', description: 'Team member/specialist', icon: 'User', color: 'gray' },
          { value: 'other', label: 'Other', description: 'Please specify', icon: 'MoreHorizontal', color: 'gray', allowCustom: true }
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

// Sales & Business Development Route - 8 Questions
export const SALES_ROUTE_PHASES: QuizPhase[] = [
  {
    id: 'sales_analysis',
    title: 'Sales Process Analysis',
    description: 'Understanding your sales operations and challenges',
    estimatedTime: 7,
    questions: [
      {
        id: 'current_volume',
        title: 'How many NEW prospects does your team engage with weekly?',
        type: 'visual_grid',
        required: true,
        multiple: false,
        visualOptions: [
          { value: 'less-than-25', label: 'Less than 25 prospects', description: 'Under 25 prospects', icon: 'Users', color: 'blue' },
          { value: '25-50', label: '25-50 prospects', description: '25-50 prospects', icon: 'Users', color: 'gray' },
          { value: '51-100', label: '51-100 prospects', description: '51-100 prospects', icon: 'TrendingUp', color: 'gray' },
          { value: '101-200', label: '101-200 prospects', description: '101-200 prospects', icon: 'BarChart3', color: 'gray' },
          { value: '201-500', label: '201-500 prospects', description: '201-500 prospects', icon: 'Building', color: 'gray' },
          { value: '501-1000', label: '501-1000 prospects', description: '501-1000 prospects', icon: 'Building2', color: 'gray' },
          { value: 'more-than-1000', label: 'More than 1000 prospects', description: 'Over 1000 prospects', icon: 'Factory', color: 'gray' }
        ]
      },
      {
        id: 'lead_generation_methods',
        title: 'What are your TOP 3 lead generation methods?',
        type: 'visual_grid',
        required: true,
        multiple: true,
        maxSelections: 3,
        visualOptions: [
          { value: 'linkedin-outreach', label: 'LinkedIn outreach and social selling', description: 'Professional networking', icon: 'Users', color: 'blue' },
          { value: 'cold-email', label: 'Cold email campaigns', description: 'Direct email marketing', icon: 'Mail', color: 'gray' },
          { value: 'cold-calling', label: 'Cold calling', description: 'Direct phone outreach', icon: 'Phone', color: 'gray' },
          { value: 'networking-events', label: 'Networking events and conferences', description: 'Industry events', icon: 'Calendar', color: 'gray' },
          { value: 'referral-programs', label: 'Referral programs', description: 'Customer and partner referrals', icon: 'Share2', color: 'gray' },
          { value: 'inbound-marketing', label: 'Inbound marketing (content/SEO)', description: 'Content marketing and SEO', icon: 'TrendingUp', color: 'gray' },
          { value: 'paid-advertising', label: 'Paid advertising (Google/Social)', description: 'Google Ads, social media ads', icon: 'Target', color: 'gray' },
          { value: 'channel-partners', label: 'Channel partners', description: 'Strategic business partnerships', icon: 'Building', color: 'gray' },
          { value: 'other', label: 'Other', description: 'Please specify', icon: 'MoreHorizontal', color: 'gray', allowCustom: true }
        ]
      },
      {
        id: 'sales_process_time',
        title: 'Average time from first contact to qualified opportunity?',
        type: 'visual_grid',
        required: true,
        multiple: false,
        visualOptions: [
          { value: 'less-than-2', label: 'Less than 2 hours', description: 'Under 2 hours', icon: 'Zap', color: 'blue' },
          { value: '2-5', label: '2-5 hours', description: '2-5 hours', icon: 'Clock', color: 'gray' },
          { value: '5-10', label: '5-10 hours', description: '5-10 hours', icon: 'Timer', color: 'gray' },
          { value: '10-20', label: '10-20 hours', description: '10-20 hours', icon: 'Calendar', color: 'gray' },
          { value: '20-40', label: '20-40 hours', description: '20-40 hours', icon: 'BarChart', color: 'gray' },
          { value: 'more-than-40', label: 'More than 40 hours', description: 'More than 40 hours', icon: 'BarChart2', color: 'gray' }
        ]
      },
      {
        id: 'cost_per_sales_activity',
        title: 'What\'s your blended cost per hour for sales activities (including all team members)?',
        type: 'visual_grid',
        required: true,
        multiple: false,
        visualOptions: [
          { value: 'less-than-40', label: 'Less than €40/hour', description: 'Under €40/hour', icon: 'DollarSign', color: 'blue' },
          { value: '40-60', label: '€40-60/hour', description: '€40-60/hour', icon: 'DollarSign', color: 'gray' },
          { value: '60-80', label: '€60-80/hour', description: '€60-80/hour', icon: 'TrendingUp', color: 'gray' },
          { value: '80-120', label: '€80-120/hour', description: '€80-120/hour', icon: 'Target', color: 'gray' },
          { value: 'more-than-120', label: 'More than €120/hour', description: 'Over €120/hour', icon: 'BarChart3', color: 'gray' }
        ]
      },
      {
        id: 'conversion_rate',
        title: 'What percentage of qualified prospects become customers?',
        type: 'visual_grid',
        required: true,
        multiple: false,
        visualOptions: [
          { value: '40-plus', label: '40%+ become customers', description: '40%+ conversion rate', icon: 'TrendingUp', color: 'blue' },
          { value: '30-40', label: '30-40% conversion', description: '30-40% conversion rate', icon: 'BarChart3', color: 'gray' },
          { value: '20-30', label: '20-30% conversion', description: '20-30% conversion rate', icon: 'Target', color: 'gray' },
          { value: '15-20', label: '15-20% conversion', description: '15-20% conversion rate', icon: 'BarChart', color: 'gray' },
          { value: '10-15', label: '10-15% conversion', description: '10-15% conversion rate', icon: 'BarChart2', color: 'gray' },
          { value: 'less-than-10', label: 'Less than 10% conversion', description: 'Less than 10% conversion', icon: 'BarChart', color: 'gray' },
          { value: 'other', label: 'Other', description: 'Please specify', icon: 'MoreHorizontal', color: 'gray', allowCustom: true }
        ]
      },
      {
        id: 'lost_opportunities',
        title: 'How many qualified opportunities do you miss monthly due to capacity constraints?',
        type: 'visual_grid',
        required: true,
        multiple: false,
        visualOptions: [
          { value: 'none', label: 'None - we handle everything', description: 'No missed opportunities', icon: 'CheckCircle', color: 'blue' },
          { value: '1-5', label: '1-5 opportunities', description: '1-5 opportunities', icon: 'Target', color: 'gray' },
          { value: '6-15', label: '6-15 opportunities', description: '6-15 opportunities', icon: 'BarChart', color: 'gray' },
          { value: '16-30', label: '16-30 opportunities', description: '16-30 opportunities', icon: 'BarChart2', color: 'gray' },
          { value: '31-50', label: '31-50 opportunities', description: '31-50 opportunities', icon: 'BarChart3', color: 'gray' },
          { value: 'more-than-50', label: 'More than 50 opportunities', description: 'More than 50 opportunities', icon: 'TrendingUp', color: 'gray' }
        ]
      },
      {
        id: 'critical_bottleneck',
        title: 'What are your main sales bottlenecks? (select up to 3)',
        type: 'visual_grid',
        required: true,
        multiple: true,
        maxSelections: 3,
        visualOptions: [
          { value: 'finding-prospects', label: 'Finding qualified prospects', description: 'Lead generation challenges', icon: 'Target', color: 'blue' },
          { value: 'personalizing-outreach', label: 'Personalizing outreach at scale', description: 'Custom messaging bottleneck', icon: 'Mail', color: 'gray' },
          { value: 'consistent-followup', label: 'Consistent follow-up', description: 'Follow-up process issues', icon: 'Calendar', color: 'gray' },
          { value: 'crm-maintenance', label: 'CRM data maintenance', description: 'Data management overhead', icon: 'FileText', color: 'gray' },
          { value: 'available-hours', label: 'Available selling hours', description: 'Time constraints', icon: 'Clock', color: 'gray' },
          { value: 'data-quality-issues', label: 'Data quality issues', description: 'Inaccurate information', icon: 'AlertTriangle', color: 'gray' },
          { value: 'other', label: 'Other', description: 'Please specify', icon: 'MoreHorizontal', color: 'gray', allowCustom: true }
        ]
      },
      {
        id: 'monthly_sales_investment',
        title: 'Current monthly investment in sales team and tools?',
        type: 'visual_grid',
        required: true,
        multiple: false,
        visualOptions: [
          { value: 'less-than-5000', label: 'Less than €5,000', description: 'Under €5,000', icon: 'DollarSign', color: 'blue' },
          { value: '5000-10000', label: '€5,000-10,000', description: '€5,000-10,000', icon: 'DollarSign', color: 'gray' },
          { value: '10000-25000', label: '€10,000-25,000', description: '€10,000-25,000', icon: 'TrendingUp', color: 'gray' },
          { value: '25000-50000', label: '€25,000-50,000', description: '€25,000-50,000', icon: 'BarChart3', color: 'gray' },
          { value: '50000-100000', label: '€50,000-100,000', description: '€50,000-100,000', icon: 'Building', color: 'gray' },
          { value: '100000-200000', label: '€100,000-200,000', description: '€100,000-200,000', icon: 'Building2', color: 'gray' },
          { value: 'more-than-200000', label: 'More than €200,000', description: 'Over €200,000', icon: 'Factory', color: 'gray' }
        ]
      }
    ]
  }
]

// Finance & Administration Route - 8 Questions
export const FINANCE_ROUTE_PHASES: QuizPhase[] = [
  {
    id: 'finance_analysis',
    title: 'Finance Operations Analysis',
    description: 'Understanding your financial processes and challenges',
    estimatedTime: 7,
    questions: [
      {
        id: 'transaction_volume',
        title: 'Total monthly financial transactions (invoices, expenses, payments)?',
        type: 'visual_grid',
        required: true,
        multiple: false,
        visualOptions: [
          { value: 'less-than-100', label: 'Less than 100', description: 'Under 100 transactions', icon: 'FileText', color: 'blue' },
          { value: '100-250', label: '100-250', description: '100-250 transactions', icon: 'FileText', color: 'gray' },
          { value: '251-500', label: '251-500', description: '251-500 transactions', icon: 'BarChart', color: 'gray' },
          { value: '501-1000', label: '501-1,000', description: '501-1,000 transactions', icon: 'BarChart3', color: 'gray' },
          { value: '1001-5000', label: '1,001-5,000', description: '1,001-5,000 transactions', icon: 'Building', color: 'gray' },
          { value: 'more-than-5000', label: 'More than 5,000', description: 'Over 5,000 transactions', icon: 'Building2', color: 'gray' }
        ]
      },
      {
        id: 'critical_process',
        title: 'Which processes consume the most time? (select up to 3)',
        type: 'visual_grid',
        required: true,
        multiple: true,
        maxSelections: 3,
        visualOptions: [
          { value: 'vendor-invoices', label: 'Processing vendor invoices (accounts payable)', description: 'Vendor invoice processing', icon: 'FileText', color: 'blue' },
          { value: 'customer-invoices', label: 'Creating customer invoices (accounts receivable)', description: 'Customer billing', icon: 'Mail', color: 'gray' },
          { value: 'expense-reports', label: 'Expense report management', description: 'Employee expense processing', icon: 'BarChart3', color: 'gray' },
          { value: 'payment-processing', label: 'Payment processing and reconciliation', description: 'Payment management', icon: 'CreditCard', color: 'gray' },
          { value: 'financial-reporting', label: 'Financial reporting and analysis', description: 'Monthly reports and analysis', icon: 'PieChart', color: 'gray' },
          { value: 'bank-reconciliation', label: 'Bank reconciliation', description: 'Bank statement matching', icon: 'BarChart', color: 'gray' },
          { value: 'budget-tracking', label: 'Budget tracking and forecasts', description: 'Budget monitoring', icon: 'TrendingUp', color: 'gray' },
          { value: 'month-end-closing', label: 'Month-end closing procedures', description: 'Month-end processes', icon: 'Calendar', color: 'gray' },
          { value: 'other', label: 'Other', description: 'Please specify', icon: 'MoreHorizontal', color: 'gray', allowCustom: true }
        ]
      },
      {
        id: 'processing_time',
        title: 'Average time to process one invoice (from receipt to payment)',
        type: 'visual_grid',
        required: true,
        multiple: false,
        visualOptions: [
          { value: 'same-day', label: 'Same day', description: 'Same day processing', icon: 'Zap', color: 'blue' },
          { value: '1-2-days', label: '1-2 days', description: '1-2 days processing', icon: 'Clock', color: 'gray' },
          { value: '3-5-days', label: '3-5 days', description: '3-5 days processing', icon: 'Timer', color: 'gray' },
          { value: '1-week', label: '1 week', description: '1 week processing', icon: 'Calendar', color: 'gray' },
          { value: '1-2-weeks', label: '1-2 weeks', description: '1-2 weeks processing', icon: 'BarChart', color: 'gray' },
          { value: 'more-2-weeks', label: 'More than 2 weeks', description: 'Over 2 weeks processing', icon: 'BarChart2', color: 'gray' }
        ]
      },
      {
        id: 'error_impact',
        title: 'Monthly cost of errors, rework, and corrections?',
        type: 'visual_grid',
        required: true,
        multiple: false,
        visualOptions: [
          { value: 'less-than-1000', label: 'Less than €1,000', description: 'Under €1,000', icon: 'CheckCircle', color: 'blue' },
          { value: '1000-2500', label: '€1,000-2,500', description: '€1,000-2,500', icon: 'BarChart', color: 'gray' },
          { value: '2500-5000', label: '€2,500-5,000', description: '€2,500-5,000', icon: 'TrendingUp', color: 'gray' },
          { value: '5000-10000', label: '€5,000-10,000', description: '€5,000-10,000', icon: 'BarChart3', color: 'gray' },
          { value: '10000-25000', label: '€10,000-25,000', description: '€10,000-25,000', icon: 'BarChart2', color: 'gray' },
          { value: '25000-50000', label: '€25,000-50,000', description: '€25,000-50,000', icon: 'Building', color: 'gray' },
          { value: 'more-than-50000', label: 'More than €50,000', description: 'Over €50,000', icon: 'Building2', color: 'gray' }
        ]
      },
      {
        id: 'staff_cost',
        title: 'Monthly cost of finance team (salaries + benefits)?',
        type: 'visual_grid',
        required: true,
        multiple: false,
        visualOptions: [
          { value: 'less-than-10000', label: 'Less than €10,000', description: 'Under €10,000', icon: 'DollarSign', color: 'blue' },
          { value: '10000-20000', label: '€10,000-20,000', description: '€10,000-20,000', icon: 'DollarSign', color: 'gray' },
          { value: '20000-40000', label: '€20,000-40,000', description: '€20,000-40,000', icon: 'TrendingUp', color: 'gray' },
          { value: '40000-60000', label: '€40,000-60,000', description: '€40,000-60,000', icon: 'BarChart3', color: 'gray' },
          { value: '60000-100000', label: '€60,000-100,000', description: '€60,000-100,000', icon: 'Building', color: 'gray' },
          { value: 'more-than-100000', label: 'More than €100,000', description: 'Over €100,000', icon: 'Building2', color: 'gray' }
        ]
      },
      {
        id: 'approval_delays',
        title: 'Average approval cycle time?',
        type: 'visual_grid',
        required: true,
        multiple: false,
        visualOptions: [
          { value: 'same-day', label: 'Same day', description: 'Same day approvals', icon: 'Zap', color: 'blue' },
          { value: '1-2-days', label: '1-2 days', description: '1-2 days approval time', icon: 'Clock', color: 'gray' },
          { value: '3-5-days', label: '3-5 days', description: '3-5 days approval time', icon: 'Calendar', color: 'gray' },
          { value: '1-week', label: '1 week', description: '1 week approval time', icon: 'Timer', color: 'gray' },
          { value: 'more-than-week', label: 'More than 1 week', description: 'Over 1 week approval time', icon: 'BarChart', color: 'gray' }
        ]
      },
      {
        id: 'growth_impact',
        title: 'How much could you grow if finance processes were instant?',
        type: 'visual_grid',
        required: true,
        multiple: false,
        visualOptions: [
          { value: 'no-impact', label: 'No impact on growth', description: 'No additional capacity needed', icon: 'CheckCircle', color: 'blue' },
          { value: '10-20-percent', label: '10-20% more capacity', description: '10-20% additional capacity', icon: 'TrendingUp', color: 'gray' },
          { value: '20-40-percent', label: '20-40% more capacity', description: '20-40% additional capacity', icon: 'BarChart', color: 'gray' },
          { value: '40-60-percent', label: '40-60% more capacity', description: '40-60% additional capacity', icon: 'BarChart3', color: 'gray' },
          { value: 'more-than-60', label: 'More than 60% more capacity', description: 'Over 60% additional capacity', icon: 'Rocket', color: 'gray' }
        ]
      },
      {
        id: 'finance_pain_point',
        title: 'What are your main finance operations challenges? (select up to 3)',
        type: 'visual_grid',
        required: true,
        multiple: true,
        maxSelections: 3,
        visualOptions: [
          { value: 'manual-data-entry', label: 'Too many manual data entries', description: 'Data entry overhead', icon: 'FileText', color: 'blue' },
          { value: 'approval-delays', label: 'Approval process delays', description: 'Approval bottlenecks', icon: 'Clock', color: 'gray' },
          { value: 'frequent-errors', label: 'Frequent errors requiring rework', description: 'Error correction overhead', icon: 'AlertTriangle', color: 'gray' },
          { value: 'lack-visibility', label: 'Lack of real-time visibility', description: 'Poor financial visibility', icon: 'BarChart', color: 'gray' },
          { value: 'month-end-stress', label: 'Month-end overtime stress', description: 'Month-end pressure', icon: 'Timer', color: 'gray' },
          { value: 'compliance-concerns', label: 'Compliance/audit concerns', description: 'Regulatory compliance issues', icon: 'Shield', color: 'gray' },
          { value: 'other', label: 'Other', description: 'Please specify', icon: 'MoreHorizontal', color: 'gray', allowCustom: true }
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
        id: 'weekly_inquiry_volume',
        title: 'Weekly customer inquiry volume',
        type: 'range_slider',
        required: true,
        ranges: [
          { value: 'very-low', label: 'Under 15', displayValue: '< 15 inquiries per week', numericValue: 10 },
          { value: 'low', label: '15-30', displayValue: '15-30 inquiries per week', numericValue: 22 },
          { value: 'moderate', label: '30-60', displayValue: '30-60 inquiries per week', numericValue: 45 },
          { value: 'high', label: '60-120', displayValue: '60-120 inquiries per week', numericValue: 90 },
          { value: 'very-high', label: '120-200', displayValue: '120-200 inquiries per week', numericValue: 160 },
          { value: 'extreme', label: '200+', displayValue: '200+ inquiries per week', numericValue: 250 }
        ],
        unitLabel: 'inquiries'
      },
      {
        id: 'primary_inquiry_type',
        title: 'Most common support requests? (select up to 3)',
        type: 'visual_grid',
        required: true,
        multiple: true,
        maxSelections: 3,
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
        type: 'range_slider',
        required: true,
        ranges: [
          { value: 'excellent', label: 'Under 1hr', displayValue: '< 1 hour', numericValue: 0.5 },
          { value: 'very-good', label: '1-2hrs', displayValue: '1-2 hours', numericValue: 1.5 },
          { value: 'good', label: '2-4hrs', displayValue: '2-4 hours', numericValue: 3 },
          { value: 'slow', label: '4-8hrs', displayValue: '4-8 hours', numericValue: 6 },
          { value: 'poor', label: '8-24hrs', displayValue: '8-24 hours', numericValue: 16 },
          { value: 'critical', label: '24hrs+', displayValue: '24+ hours', numericValue: 36 }
        ],
        benchmark: 'Industry best practice: Under 2 hours for initial response'
      },
      {
        id: 'inquiry_repetitiveness',
        title: 'What percentage of inquiries are repetitive?',
        type: 'range_slider',
        required: true,
        ranges: [
          { value: 'very-low', label: '0-20%', displayValue: '0-20% repetitive', numericValue: 10 },
          { value: 'low', label: '20-40%', displayValue: '20-40% repetitive', numericValue: 30 },
          { value: 'moderate', label: '40-60%', displayValue: '40-60% repetitive', numericValue: 50 },
          { value: 'high', label: '60-80%', displayValue: '60-80% repetitive', numericValue: 70 },
          { value: 'very-high', label: '80-100%', displayValue: '80-100% repetitive', numericValue: 90 }
        ],
        realTimeCalculation: true,
        calculationMessage: '[X]% repetitive inquiries identified'
      },
      {
        id: 'service_team_size',
        title: 'Customer service team size',
        type: 'visual_grid',
        required: true,
        multiple: false,
        visualOptions: [
          { value: 'just-me', label: 'Just me', description: 'Solo customer service', icon: 'Target', color: 'blue' },
          { value: '1-2-people', label: '1-2 people', description: '1-2 support team members', icon: 'Users', color: 'gray' },
          { value: '3-5-people', label: '3-5 people', description: '3-5 support team members', icon: 'Users', color: 'gray' },
          { value: '6-10-people', label: '6-10 people', description: '6-10 support team members', icon: 'Building', color: 'gray' },
          { value: 'more-10', label: '10+ people', description: 'Over 10 support team members', icon: 'Building2', color: 'gray' }
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
          { value: 'regular-praise', label: 'Regular praise and referrals', description: 'Frequent positive feedback', icon: 'TrendingUp', color: 'blue' },
          { value: 'mostly-positive', label: 'Mostly positive feedback', description: 'Generally positive responses', icon: 'CheckCircle', color: 'gray' },
          { value: 'mixed-feedback', label: 'Mixed feedback', description: 'Varied customer responses', icon: 'BarChart', color: 'gray' },
          { value: 'frequent-complaints', label: 'Frequent complaints', description: 'Regular negative feedback', icon: 'TrendingDown', color: 'gray' },
          { value: 'losing-customers', label: 'Losing customers due to service', description: 'Customer churn from service issues', icon: 'AlertTriangle', color: 'gray' },
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
        title: 'Main operational time drains (select up to 2)',
        type: 'visual_grid',
        required: true,
        multiple: true,
        maxSelections: 2,
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
          { value: '1-2', label: '1-2 people', description: '1-2 operations team members', icon: 'Target', color: 'blue' },
          { value: '3-5', label: '3-5 people', description: '3-5 operations team members', icon: 'Users', color: 'gray' },
          { value: '6-10', label: '6-10 people', description: '6-10 operations team members', icon: 'Building', color: 'gray' },
          { value: '11-20', label: '11-20 people', description: '11-20 operations team members', icon: 'Building2', color: 'gray' },
          { value: 'more-20', label: 'More than 20 people', description: 'Over 20 operations team members', icon: 'Building2', color: 'gray' }
        ]
      },
      {
        id: 'operational_consistency',
        title: 'Operational consistency',
        type: 'visual_grid',
        required: true,
        multiple: false,
        visualOptions: [
          { value: 'same-process', label: 'Same process every time', description: 'Standardized procedures', icon: 'CheckCircle', color: 'blue' },
          { value: 'occasional-variations', label: 'Occasional variations', description: 'Minor adjustments sometimes', icon: 'BarChart3', color: 'gray' },
          { value: 'regular-adjustments', label: 'Regular adjustments needed', description: 'Frequent process modifications', icon: 'BarChart', color: 'gray' },
          { value: 'frequent-changes', label: 'Frequent changes required', description: 'Process changes often', icon: 'Shuffle', color: 'gray' },
          { value: 'every-situation-different', label: 'Every situation is different', description: 'Unique approach each time', icon: 'AlertTriangle', color: 'gray' }
        ]
      },
      {
        id: 'repetitive_operations_hours',
        title: 'Weekly hours on repetitive operational tasks',
        type: 'range_slider',
        required: true,
        ranges: [
          { value: 'minimal', label: '0-10hrs', displayValue: '0-10 hours per week', numericValue: 5 },
          { value: 'low', label: '10-20hrs', displayValue: '10-20 hours per week', numericValue: 15 },
          { value: 'moderate', label: '20-30hrs', displayValue: '20-30 hours per week', numericValue: 25 },
          { value: 'high', label: '30-40hrs', displayValue: '30-40 hours per week', numericValue: 35 },
          { value: 'very-high', label: '40-60hrs', displayValue: '40-60 hours per week', numericValue: 50 },
          { value: 'extreme', label: '60hrs+', displayValue: '60+ hours per week', numericValue: 70 }
        ],
        subtext: 'That\'s X hours that could be automated!'
      },
      {
        id: 'operations_continuity',
        title: 'What happens when key operations staff are unavailable? (select all that apply)',
        type: 'visual_grid',
        required: true,
        multiple: true,
        maxSelections: 4,
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
        type: 'range_slider',
        required: true,
        ranges: [
          { value: 'minimal', label: '0-5hrs', displayValue: '0-5 hours per week', numericValue: 2.5 },
          { value: 'low', label: '5-10hrs', displayValue: '5-10 hours per week', numericValue: 7.5 },
          { value: 'moderate', label: '10-20hrs', displayValue: '10-20 hours per week', numericValue: 15 },
          { value: 'high', label: '20-30hrs', displayValue: '20-30 hours per week', numericValue: 25 },
          { value: 'very-high', label: '30-40hrs', displayValue: '30-40 hours per week', numericValue: 35 },
          { value: 'extreme', label: '40hrs+', displayValue: '40+ hours per week', numericValue: 45 }
        ],
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
        type: 'range_slider',
        required: true,
        ranges: [
          { value: 'very-low', label: 'Under 25', displayValue: '< 25 leads per month', numericValue: 15 },
          { value: 'low', label: '25-50', displayValue: '25-50 leads per month', numericValue: 37 },
          { value: 'moderate', label: '50-100', displayValue: '50-100 leads per month', numericValue: 75 },
          { value: 'high', label: '100-250', displayValue: '100-250 leads per month', numericValue: 175 },
          { value: 'very-high', label: '250-500', displayValue: '250-500 leads per month', numericValue: 375 },
          { value: 'extreme', label: '500+', displayValue: '500+ leads per month', numericValue: 750 }
        ],
        subtext: 'From all marketing efforts combined'
      },
      {
        id: 'biggest_marketing_challenge',
        title: 'Main marketing time challenges (select up to 2)',
        type: 'visual_grid',
        required: true,
        multiple: true,
        maxSelections: 2,
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
          { value: '1-2-people', label: '1-2 people', description: '1-2 HR team members', icon: 'Users', color: 'gray' },
          { value: '3-5-people', label: '3-5 people', description: '3-5 HR team members', icon: 'Building', color: 'gray' },
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
        type: 'range_slider',
        required: true,
        ranges: [
          { value: 'minimal', label: 'Under 10', displayValue: '< 10 hours per month', numericValue: 7 },
          { value: 'low', label: '10-20', displayValue: '10-20 hours per month', numericValue: 15 },
          { value: 'moderate', label: '20-40', displayValue: '20-40 hours per month', numericValue: 30 },
          { value: 'high', label: '40-60', displayValue: '40-60 hours per month', numericValue: 50 },
          { value: 'very-high', label: '60-80', displayValue: '60-80 hours per month', numericValue: 70 },
          { value: 'high-volume', label: '80-120', displayValue: '80-120 hours per month', numericValue: 100 },
          { value: 'extreme', label: '120+', displayValue: '120+ hours per month', numericValue: 140 }
        ],
        subtext: 'Including payroll, benefits, compliance, paperwork'
      },
      {
        id: 'hr_biggest_challenge',
        title: 'Most challenging HR aspects? (select up to 3)',
        type: 'visual_grid',
        required: true,
        multiple: true,
        maxSelections: 3,
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
          { value: 'less-500', label: 'Less than €500', description: 'Under €500', icon: 'Target', color: 'blue' },
          { value: '500-1000', label: '€500-1,000', description: '€500-1,000', icon: 'BarChart', color: 'gray' },
          { value: '1000-2500', label: '€1,000-2,500', description: '€1,000-2,500', icon: 'BarChart3', color: 'gray' },
          { value: '2500-5000', label: '€2,500-5,000', description: '€2,500-5,000', icon: 'TrendingUp', color: 'gray' },
          { value: '5000-7500', label: '€5,000-7,500', description: '€5,000-7,500', icon: 'TrendingUp', color: 'gray' },
          { value: '7500-10000', label: '€7,500-10,000', description: '€7,500-10,000', icon: 'Building', color: 'gray' },
          { value: '10000-15000', label: '€10,000-15,000', description: '€10,000-15,000', icon: 'Building2', color: 'gray' },
          { value: '15000-25000', label: '€15,000-25,000', description: '€15,000-25,000', icon: 'Building2', color: 'gray' },
          { value: '25000-50000', label: '€25,000-50,000', description: '€25,000-50,000', icon: 'Factory', color: 'gray' },
          { value: 'more-50000', label: 'More than €50,000', description: 'Over €50,000', icon: 'Factory', color: 'gray' }
        ],
        benchmark: 'Companies your size typically invest €5,000-15,000 monthly in operational improvements'
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
            value: 'external-consultant',
            label: 'External consultant/advisor',
            description: 'External business advisor or consultant',
            icon: 'UserCheck',
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