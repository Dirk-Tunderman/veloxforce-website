import { Question, QuizPhase } from '@/types/audit-tool'

// Updated Service-as-Software Quiz with New Comprehensive Content
export const SERVICE_QUIZ_PHASES: QuizPhase[] = [
  // Opening Context (All Routes)
  {
    id: 'opening',
    title: 'Company Context',
    description: 'Let\'s start with some quick context about your business',
    estimatedTime: 0.5,
    questions: [
      {
        id: 'company_size',
        title: 'Let\'s understand your business',
        subtitle: 'Company Size:',
        type: 'radio',
        required: true,
        options: [
          { value: 'solo', label: 'Solo entrepreneur (1 person)' },
          { value: '2-10', label: 'Micro team (2-10 employees)' },
          { value: '11-25', label: 'Small business (11-25 employees)' },
          { value: '26-50', label: 'Growing company (26-50 employees)' },
          { value: '51-100', label: 'Mid-size business (51-100 employees)' },
          { value: '101-200', label: 'Established company (101-200 employees)' },
          { value: '200+', label: 'Enterprise (200+ employees)' }
        ]
      },
      {
        id: 'user_role',
        title: 'Your Role:',
        type: 'radio',
        required: true,
        options: [
          { value: 'owner-ceo', label: 'Owner/Founder/CEO' },
          { value: 'c-suite', label: 'C-Suite Executive' },
          { value: 'department-head', label: 'Department Head/Director' },
          { value: 'operations-manager', label: 'Operations Manager' },
          { value: 'team-lead', label: 'Team Lead/Supervisor' },
          { value: 'other', label: 'Other', allowCustom: true }
        ]
      },
      {
        id: 'business_model',
        title: 'Primary Business Model:',
        type: 'radio',
        required: true,
        options: [
          { value: 'b2b', label: 'B2B - Selling to businesses' },
          { value: 'b2c', label: 'B2C - Selling to consumers' },
          { value: 'b2b2c', label: 'B2B2C - Both business and consumer' },
          { value: 'marketplace', label: 'Marketplace/Platform' },
          { value: 'nonprofit', label: 'Non-profit/NGO' }
        ]
      }
    ]
  },

  // Department Selection
  {
    id: 'department_selection',
    title: 'Department Selection',
    description: 'Which area consumes the most valuable time in your business?',
    estimatedTime: 0.5,
    questions: [
      {
        id: 'department_focus',
        title: 'Which area consumes the most valuable time in your business?',
        subtitle: 'Select the department where you feel your team spends too much time on routine work',
        type: 'visual_grid',
        required: true,
        visualOptions: [
          {
            value: 'sales',
            label: 'Sales & Business Development',
            description: 'Finding and qualifying new customers',
            icon: 'TrendingUp',
            color: 'blue'
          },
          {
            value: 'finance',
            label: 'Finance & Administration',
            description: 'Processing invoices, expenses, and financial tasks',
            icon: 'Calculator',
            color: 'green'
          },
          {
            value: 'customer_service',
            label: 'Customer Service & Support',
            description: 'Handling customer inquiries and requests',
            icon: 'Headphones',
            color: 'purple'
          },
          {
            value: 'operations',
            label: 'Operations & Fulfillment',
            description: 'Managing orders, projects, and workflows',
            icon: 'Settings',
            color: 'orange'
          },
          {
            value: 'marketing',
            label: 'Marketing & Communications',
            description: 'Content creation and campaign management',
            icon: 'Megaphone',
            color: 'pink'
          },
          {
            value: 'hr',
            label: 'Human Resources',
            description: 'Recruiting, onboarding, and employee management',
            icon: 'Users',
            color: 'teal'
          }
        ]
      }
    ]
  }
]

// Route 1: Sales & Business Development - UPDATED WITH NEW CONTENT
export const SALES_ROUTE_PHASES: QuizPhase[] = [
  {
    id: 'sales_generation',
    title: 'Sales Generation Methods',
    description: 'Understanding how you generate opportunities',
    estimatedTime: 1,
    questions: [
      {
        id: 'lead_generation_methods',
        title: 'How does your sales team currently generate new opportunities?',
        subtitle: 'Select all methods you actively use',
        type: 'checkbox',
        required: true,
        options: [
          { value: 'linkedin-outreach', label: 'LinkedIn outreach and social selling' },
          { value: 'cold-email', label: 'Cold email campaigns' },
          { value: 'cold-calling', label: 'Cold calling' },
          { value: 'networking-events', label: 'Networking events and conferences' },
          { value: 'referral-programs', label: 'Referral programs' },
          { value: 'inbound-marketing', label: 'Inbound marketing (content/SEO)' },
          { value: 'paid-advertising', label: 'Paid advertising (Google/Social)' },
          { value: 'channel-partners', label: 'Channel partners' },
          { value: 'other', label: 'Other', allowCustom: true }
        ]
      },
      {
        id: 'weekly_conversations',
        title: 'In a typical week, how many meaningful sales conversations does your entire team have?',
        subtitle: 'Count actual discussions with prospects, not just outreach attempts',
        type: 'radio',
        required: true,
        options: [
          { value: 'fewer-than-10', label: 'Fewer than 10 conversations' },
          { value: '10-25', label: '10-25 conversations' },
          { value: '26-50', label: '26-50 conversations' },
          { value: '51-75', label: '51-75 conversations' },
          { value: '76-100', label: '76-100 conversations' },
          { value: '101-150', label: '101-150 conversations' },
          { value: 'more-than-150', label: 'More than 150 conversations' }
        ],
        benchmark: "Companies your size typically have 40-60 conversations weekly"
      }
    ]
  },
  {
    id: 'sales_time_investment',
    title: 'Time Investment Breakdown',
    description: 'Understanding where your sales team invests time',
    estimatedTime: 2,
    questions: [
      {
        id: 'time_breakdown_per_prospect',
        title: 'Breaking down the sales process - for every 10 qualified prospects, how much time does your team invest?',
        type: 'multi_time_breakdown',
        required: true,
        timeBreakdowns: [
          {
            category: 'Research & Qualification',
            options: [
              { value: 'less-than-2', label: 'Less than 2 hours' },
              { value: '2-5', label: '2-5 hours' },
              { value: '5-10', label: '5-10 hours' },
              { value: '10-15', label: '10-15 hours' },
              { value: 'more-than-15', label: 'More than 15 hours' }
            ]
          },
          {
            category: 'Personalization & Outreach',
            options: [
              { value: 'less-than-2', label: 'Less than 2 hours' },
              { value: '2-4', label: '2-4 hours' },
              { value: '4-6', label: '4-6 hours' },
              { value: '6-8', label: '6-8 hours' },
              { value: 'more-than-8', label: 'More than 8 hours' }
            ]
          },
          {
            category: 'Follow-up & Nurturing',
            options: [
              { value: 'less-than-2', label: 'Less than 2 hours' },
              { value: '2-4', label: '2-4 hours' },
              { value: '4-6', label: '4-6 hours' },
              { value: '6-8', label: '6-8 hours' },
              { value: 'more-than-8', label: 'More than 8 hours' }
            ]
          },
          {
            category: 'CRM & Administrative',
            options: [
              { value: 'less-than-1', label: 'Less than 1 hour' },
              { value: '1-2', label: '1-2 hours' },
              { value: '2-4', label: '2-4 hours' },
              { value: '4-6', label: '4-6 hours' },
              { value: 'more-than-6', label: 'More than 6 hours' }
            ]
          }
        ],
        realTimeCalculation: true,
        calculationText: "Total investment per prospect: [X] hours (€[Y] cost)"
      },
      {
        id: 'sales_team_structure',
        title: 'Who\'s involved in your sales development process?',
        type: 'team_structure',
        required: true,
        teamInputs: [
          { id: 'full_time_sales', label: 'Full-time Sales/BDRs', type: 'dropdown', max: 50 },
          { id: 'part_time_support', label: 'Part-time/Support', type: 'dropdown', max: 20 },
          { id: 'weekly_hours', label: 'Your weekly hours', type: 'dropdown', max: 60 },
          { id: 'marketing_support', label: 'Marketing support', type: 'dropdown', max: 20 }
        ]
      },
      {
        id: 'hourly_cost_sales',
        title: 'Average hourly cost of sales team:',
        type: 'radio',
        required: true,
        options: [
          { value: '20-35', label: '€20-35/hour (Entry level)' },
          { value: '35-50', label: '€35-50/hour (Mid-level)' },
          { value: '50-75', label: '€50-75/hour (Senior)' },
          { value: '75-100', label: '€75-100/hour (Leadership)' },
          { value: '100+', label: '€100+/hour (Executive)' }
        ]
      }
    ]
  },
  {
    id: 'sales_effectiveness',
    title: 'Sales Effectiveness & Outcomes',
    description: 'Understanding your conversion rates and challenges',
    estimatedTime: 1.5,
    questions: [
      {
        id: 'prospect_outcomes',
        title: 'When your team connects with prospects, what\'s the typical outcome?',
        type: 'radio',
        required: true,
        options: [
          { value: 'excellent', label: 'Excellent (40%+ book meetings)' },
          { value: 'strong', label: 'Strong (30-40% book meetings)' },
          { value: 'good', label: 'Good (20-30% book meetings)' },
          { value: 'average', label: 'Average (15-20% book meetings)' },
          { value: 'below-average', label: 'Below average (10-15% book meetings)' },
          { value: 'poor', label: 'Poor (Less than 10% book meetings)' },
          { value: 'wrong-people', label: 'We\'re not reaching the right people' }
        ]
      },
      {
        id: 'scaling_obstacles',
        title: 'What\'s preventing you from scaling sales effectively?',
        subtitle: 'Select up to 3 primary obstacles',
        type: 'checkbox',
        required: true,
        maxSelections: 3,
        options: [
          { value: 'not-enough-hours', label: 'Not enough hours for prospecting' },
          { value: 'finding-prospects', label: 'Difficulty finding ideal prospects' },
          { value: 'contact-info', label: 'Contact information is hard to obtain' },
          { value: 'personalization-time', label: 'Personalization takes too long' },
          { value: 'crm-maintenance', label: 'CRM maintenance is time-consuming' },
          { value: 'inconsistent-followup', label: 'Inconsistent follow-up' },
          { value: 'poor-data-quality', label: 'Poor data quality' },
          { value: 'team-burnout', label: 'Team burnout from repetitive tasks' }
        ]
      },
      {
        id: 'current_sales_tools',
        title: 'Which tools does your sales team currently use?',
        subtitle: 'Select all that apply',
        type: 'checkbox',
        required: true,
        options: [
          { value: 'crm', label: 'CRM (Salesforce, HubSpot, Pipedrive, etc.)' },
          { value: 'linkedin-sales-nav', label: 'LinkedIn Sales Navigator' },
          { value: 'email-automation', label: 'Email automation (Outreach, SalesLoft, etc.)' },
          { value: 'data-providers', label: 'Data providers (Apollo, ZoomInfo, etc.)' },
          { value: 'calendar-scheduling', label: 'Calendar scheduling (Calendly, etc.)' },
          { value: 'call-recording', label: 'Call recording/dialing' },
          { value: 'proposal-software', label: 'Proposal software' },
          { value: 'spreadsheets-email', label: 'Just spreadsheets and email' }
        ]
      },
      {
        id: 'transformation_priorities',
        title: 'If we could transform your sales process, what outcomes would matter most?',
        subtitle: 'Select your top 3 priorities',
        type: 'checkbox',
        required: true,
        maxSelections: 3,
        options: [
          { value: '10x-conversations', label: '10x more qualified conversations' },
          { value: 'eliminate-prospecting', label: 'Eliminate manual prospecting' },
          { value: 'perfect-crm', label: 'Perfect data in CRM always' },
          { value: 'consistent-pipeline', label: 'Consistent pipeline growth' },
          { value: 'reduce-sales-cycle', label: 'Reduce sales cycle length' },
          { value: 'better-prospect-quality', label: 'Better prospect quality' },
          { value: 'focus-on-selling', label: 'Team focuses only on selling' },
          { value: 'competitive-advantage', label: 'Competitive market advantage' }
        ]
      }
    ]
  }
]

// Route 2: Finance & Administration - UPDATED WITH NEW CONTENT
export const FINANCE_ROUTE_PHASES: QuizPhase[] = [
  {
    id: 'finance_time_consumers',
    title: 'Financial Process Analysis',
    description: 'Understanding your biggest time consumers',
    estimatedTime: 1,
    questions: [
      {
        id: 'main_time_consumers',
        title: 'Which financial processes consume the most time for your team?',
        subtitle: 'Select up to 3 main time consumers',
        type: 'checkbox',
        required: true,
        maxSelections: 3,
        options: [
          { value: 'vendor-invoices-ap', label: 'Processing vendor invoices (AP)' },
          { value: 'customer-invoices-ar', label: 'Creating customer invoices (AR)' },
          { value: 'expense-reports', label: 'Expense report management' },
          { value: 'payment-processing', label: 'Payment processing and approvals' },
          { value: 'financial-reporting', label: 'Financial reporting and analysis' },
          { value: 'bank-reconciliation', label: 'Bank reconciliation' },
          { value: 'budget-tracking', label: 'Budget tracking' },
          { value: 'month-end-closing', label: 'Month-end closing procedures' }
        ]
      },
      {
        id: 'transaction_volumes',
        title: 'Let\'s understand your transaction volumes',
        type: 'transaction_volumes',
        required: true,
        volumeInputs: [
          {
            category: 'Monthly invoices received (AP)',
            options: [
              { value: 'less-than-50', label: 'Less than 50' },
              { value: '50-100', label: '50-100' },
              { value: '101-250', label: '101-250' },
              { value: '251-500', label: '251-500' },
              { value: '501-1000', label: '501-1000' },
              { value: 'more-than-1000', label: 'More than 1000' }
            ]
          },
          {
            category: 'Monthly invoices sent (AR)',
            options: [
              { value: 'less-than-50', label: 'Less than 50' },
              { value: '50-100', label: '50-100' },
              { value: '101-250', label: '101-250' },
              { value: '251-500', label: '251-500' },
              { value: '501-1000', label: '501-1000' },
              { value: 'more-than-1000', label: 'More than 1000' }
            ]
          },
          {
            category: 'Monthly expense reports',
            options: [
              { value: 'less-than-25', label: 'Less than 25' },
              { value: '25-50', label: '25-50' },
              { value: '51-100', label: '51-100' },
              { value: '101-200', label: '101-200' },
              { value: 'more-than-200', label: 'More than 200' }
            ]
          }
        ],
        benchmark: "Similar sized companies typically process [X] total transactions monthly"
      }
    ]
  },
  {
    id: 'finance_processing_time',
    title: 'Processing Efficiency',
    description: 'Understanding your current processing times',
    estimatedTime: 1.5,
    questions: [
      {
        id: 'invoice_processing_time',
        title: 'How long does it take to fully process a typical invoice?',
        subtitle: 'From receipt to payment ready',
        type: 'radio',
        required: true,
        options: [
          { value: 'under-5', label: 'Under 5 minutes (highly automated)' },
          { value: '5-10', label: '5-10 minutes' },
          { value: '10-20', label: '10-20 minutes' },
          { value: '20-30', label: '20-30 minutes' },
          { value: '30-45', label: '30-45 minutes' },
          { value: '45-60', label: '45-60 minutes' },
          { value: '1-2-hours', label: '1-2 hours' },
          { value: 'more-than-2', label: 'More than 2 hours' }
        ]
      },
      {
        id: 'approval_workflows',
        title: 'What about your approval workflows?',
        type: 'approval_analysis',
        required: true,
        approvalMetrics: [
          {
            metric: 'Typical approval cycle time',
            options: [
              { value: 'same-day', label: 'Same day' },
              { value: '1-2-days', label: '1-2 days' },
              { value: '3-4-days', label: '3-4 days' },
              { value: '5-7-days', label: '5-7 days' },
              { value: 'more-than-week', label: 'More than a week' }
            ]
          },
          {
            metric: 'Number of approvers involved',
            options: [
              { value: '1-person', label: '1 person' },
              { value: '2-people', label: '2 people' },
              { value: '3-4-people', label: '3-4 people' },
              { value: '5-plus', label: '5+ people' },
              { value: 'varies', label: 'Varies significantly' }
            ]
          }
        ]
      },
      {
        id: 'error_frequency',
        title: 'How often do errors or exceptions require rework?',
        type: 'radio',
        required: true,
        options: [
          { value: 'multiple-daily', label: 'Multiple times daily' },
          { value: 'daily', label: 'Daily' },
          { value: 'few-times-week', label: 'Few times per week' },
          { value: 'weekly', label: 'Weekly' },
          { value: 'few-times-month', label: 'Few times per month' },
          { value: 'monthly', label: 'Monthly' },
          { value: 'rarely', label: 'Rarely' }
        ]
      },
      {
        id: 'error_cost',
        title: 'Estimated monthly cost of these errors:',
        type: 'radio',
        required: true,
        options: [
          { value: 'under-500', label: 'Under €500' },
          { value: '500-1000', label: '€500-1,000' },
          { value: '1000-2500', label: '€1,000-2,500' },
          { value: '2500-5000', label: '€2,500-5,000' },
          { value: '5000-10000', label: '€5,000-10,000' },
          { value: 'over-10000', label: 'Over €10,000' }
        ]
      }
    ]
  },
  {
    id: 'finance_team_systems',
    title: 'Team Structure & Systems',
    description: 'Understanding your team and technology',
    estimatedTime: 1,
    questions: [
      {
        id: 'finance_team_structure',
        title: 'Tell us about your finance team structure',
        type: 'team_structure',
        required: true,
        teamInputs: [
          { id: 'dedicated_finance', label: 'Dedicated finance staff', type: 'dropdown', max: 20 },
          { id: 'part_time_shared', label: 'Part-time/shared resources', type: 'dropdown', max: 10 },
          { id: 'your_involvement', label: 'Your involvement (hours/week)', type: 'dropdown', max: 60 }
        ],
        booleanInputs: [
          { id: 'external_bookkeeper', label: 'External bookkeeper/accountant' }
        ]
      },
      {
        id: 'systems_count',
        title: 'How many different systems or platforms are involved in your financial processes?',
        type: 'radio',
        required: true,
        options: [
          { value: '1-2', label: '1-2 systems (highly integrated)' },
          { value: '3-4', label: '3-4 systems' },
          { value: '5-6', label: '5-6 systems' },
          { value: '7-8', label: '7-8 systems' },
          { value: '9-10', label: '9-10 systems' },
          { value: 'more-than-10', label: 'More than 10 systems' }
        ]
      },
      {
        id: 'system_types',
        title: 'Which types?',
        subtitle: 'Select all that apply',
        type: 'checkbox',
        required: true,
        options: [
          { value: 'erp-system', label: 'ERP system' },
          { value: 'accounting-software', label: 'Dedicated accounting software' },
          { value: 'bank-portals', label: 'Bank portals' },
          { value: 'expense-management', label: 'Expense management' },
          { value: 'payment-platforms', label: 'Payment platforms' },
          { value: 'spreadsheets', label: 'Spreadsheets' },
          { value: 'paper-based', label: 'Paper-based processes' }
        ]
      },
      {
        id: 'finance_transformation',
        title: 'What would transform your financial operations?',
        subtitle: 'Select your top 3 priorities',
        type: 'checkbox',
        required: true,
        maxSelections: 3,
        options: [
          { value: 'automated-invoice-processing', label: 'Automated invoice processing' },
          { value: 'real-time-visibility', label: 'Real-time financial visibility' },
          { value: 'eliminate-data-entry', label: 'Eliminate manual data entry' },
          { value: 'faster-approvals', label: 'Faster approval cycles' },
          { value: 'error-free-processing', label: 'Error-free processing' },
          { value: 'better-compliance', label: 'Better compliance/audit trail' },
          { value: 'strategic-analysis', label: 'More time for strategic analysis' },
          { value: 'reduced-month-end', label: 'Reduced month-end stress' }
        ]
      }
    ]
  }
]

// Route 3: Customer Service & Support - UPDATED WITH NEW CONTENT
export const CUSTOMER_SERVICE_ROUTE_PHASES: QuizPhase[] = [
  {
    id: 'service_channels_volume',
    title: 'Customer Communication Channels',
    description: 'Understanding how customers reach you',
    estimatedTime: 1,
    questions: [
      {
        id: 'customer_channels',
        title: 'Through which channels do customers reach you?',
        subtitle: 'Select all active channels',
        type: 'checkbox',
        required: true,
        options: [
          { value: 'email', label: 'Email' },
          { value: 'phone', label: 'Phone' },
          { value: 'live-chat', label: 'Live chat (website)' },
          { value: 'ticket-system', label: 'Support ticket system' },
          { value: 'social-media', label: 'Social media (Facebook, Twitter, etc.)' },
          { value: 'whatsapp-sms', label: 'WhatsApp/SMS' },
          { value: 'community-forum', label: 'Community forum' },
          { value: 'in-person', label: 'In-person/walk-in' }
        ]
      },
      {
        id: 'daily_inquiry_volume',
        title: 'What\'s your average daily volume of customer inquiries?',
        subtitle: 'Across all channels',
        type: 'radio',
        required: true,
        options: [
          { value: 'less-than-10', label: 'Less than 10' },
          { value: '10-25', label: '10-25' },
          { value: '26-50', label: '26-50' },
          { value: '51-100', label: '51-100' },
          { value: '101-200', label: '101-200' },
          { value: '201-500', label: '201-500' },
          { value: '501-1000', label: '501-1000' },
          { value: 'more-than-1000', label: 'More than 1000' }
        ]
      },
      {
        id: 'inquiry_type_breakdown',
        title: 'Breaking down inquiry types - what percentage fall into each category?',
        subtitle: 'Must total 100%',
        type: 'percentage_sliders',
        required: true,
        categories: [
          { id: 'order_status', label: 'Order status/tracking', max: 100 },
          { id: 'product_info', label: 'Product information/how-to', max: 100 },
          { id: 'technical_support', label: 'Technical support', max: 100 },
          { id: 'billing_payment', label: 'Billing/payment issues', max: 100 },
          { id: 'returns_complaints', label: 'Returns/complaints', max: 100 },
          { id: 'account_management', label: 'Account management', max: 100 },
          { id: 'other_complex', label: 'Other/complex issues', max: 100 }
        ],
        mustTotal: 100
      }
    ]
  },
  {
    id: 'service_response_quality',
    title: 'Response Times & Quality',
    description: 'Understanding your current service levels',
    estimatedTime: 1,
    questions: [
      {
        id: 'first_response_time',
        title: 'What\'s your current average first response time?',
        type: 'radio',
        required: true,
        options: [
          { value: 'under-15-min', label: 'Under 15 minutes' },
          { value: '15-30-min', label: '15-30 minutes' },
          { value: '30-60-min', label: '30-60 minutes' },
          { value: '1-2-hours', label: '1-2 hours' },
          { value: '2-4-hours', label: '2-4 hours' },
          { value: '4-8-hours', label: '4-8 hours' },
          { value: '8-24-hours', label: '8-24 hours' },
          { value: 'over-24-hours', label: 'Over 24 hours' }
        ],
        benchmark: "Industry best practice: Under 2 hours for initial response"
      },
      {
        id: 'inquiry_repetitiveness',
        title: 'How would you rate the repetitiveness of inquiries?',
        type: 'radio',
        required: true,
        options: [
          { value: '80-plus', label: '80%+ are the same questions' },
          { value: '60-80', label: '60-80% repetitive' },
          { value: '40-60', label: '40-60% repetitive' },
          { value: '20-40', label: '20-40% repetitive' },
          { value: 'less-than-20', label: 'Less than 20% repetitive' },
          { value: 'every-unique', label: 'Every inquiry is unique' }
        ]
      },
      {
        id: 'service_team_structure',
        title: 'Describe your customer service team',
        type: 'team_structure',
        required: true,
        teamInputs: [
          { id: 'full_time_agents', label: 'Full-time agents', type: 'dropdown', max: 50 },
          { id: 'part_time_overflow', label: 'Part-time/overflow', type: 'dropdown', max: 20 },
          { id: 'your_involvement', label: 'Your involvement (hours/week)', type: 'dropdown', max: 40 },
          { id: 'other_departments', label: 'Other departments helping', type: 'dropdown', max: 20 }
        ]
      }
    ]
  },
  {
    id: 'service_tools_challenges',
    title: 'Tools & Challenges',
    description: 'Understanding your service infrastructure',
    estimatedTime: 1,
    questions: [
      {
        id: 'service_tools',
        title: 'What tools do you use for customer service?',
        subtitle: 'Select all that apply',
        type: 'checkbox',
        required: true,
        options: [
          { value: 'help-desk', label: 'Dedicated help desk (Zendesk, Freshdesk, etc.)' },
          { value: 'shared-email', label: 'Shared email inbox' },
          { value: 'crm-system', label: 'CRM system' },
          { value: 'knowledge-base', label: 'Knowledge base' },
          { value: 'live-chat-software', label: 'Live chat software' },
          { value: 'phone-system', label: 'Phone system/call center' },
          { value: 'social-media-tools', label: 'Social media management tools' },
          { value: 'email-spreadsheets', label: 'Just email and spreadsheets' }
        ]
      },
      {
        id: 'service_obstacles',
        title: 'What\'s preventing excellent customer service?',
        subtitle: 'Select up to 3 main obstacles',
        type: 'checkbox',
        required: true,
        maxSelections: 3,
        options: [
          { value: 'response-time-expectations', label: 'Response time expectations' },
          { value: 'volume-overwhelming', label: 'Volume overwhelming team' },
          { value: 'scattered-information', label: 'Information scattered across systems' },
          { value: 'lack-customer-context', label: 'Lack of customer context' },
          { value: 'repetitive-questions', label: 'Repetitive questions drain time' },
          { value: 'language-timezone', label: 'Language/timezone coverage' },
          { value: 'inconsistent-responses', label: 'Inconsistent responses' },
          { value: 'difficult-metrics', label: 'Difficult to track metrics' }
        ]
      }
    ]
  }
]

// Final Questions (All Routes) - UPDATED WITH NEW CONTENT
export const FINAL_QUESTIONS: QuizPhase[] = [
  {
    id: 'business_impact',
    title: 'Business Impact Assessment',
    description: 'Understanding the broader impact of these challenges',
    estimatedTime: 1,
    questions: [
      {
        id: 'operational_impact',
        title: 'How is this operational challenge impacting your business?',
        subtitle: 'Select all that apply',
        type: 'checkbox',
        required: true,
        options: [
          { value: 'limiting-growth', label: 'Limiting our growth potential' },
          { value: 'increasing-costs', label: 'Increasing operational costs' },
          { value: 'affecting-satisfaction', label: 'Affecting customer satisfaction' },
          { value: 'employee-frustration', label: 'Causing employee frustration/turnover' },
          { value: 'missing-opportunities', label: 'Missing market opportunities' },
          { value: 'losing-advantage', label: 'Losing competitive advantage' },
          { value: 'preventing-initiatives', label: 'Preventing strategic initiatives' },
          { value: 'compliance-risks', label: 'Creating compliance risks' }
        ]
      },
      {
        id: 'timeline_urgency',
        title: 'When do you need to address these challenges?',
        type: 'radio',
        required: true,
        options: [
          { value: 'immediate', label: 'Immediate priority (this month)' },
          { value: 'this-quarter', label: 'This quarter (next 3 months)' },
          { value: 'next-6-months', label: 'Next 6 months' },
          { value: 'within-year', label: 'Within the year' },
          { value: 'next-year', label: 'Next year planning' },
          { value: 'exploring', label: 'Just exploring options' }
        ]
      },
      {
        id: 'monthly_investment',
        title: 'For the right solution, what monthly investment makes sense?',
        type: 'radio',
        required: true,
        options: [
          { value: 'under-500', label: 'Under €500/month' },
          { value: '500-1000', label: '€500-1,000/month' },
          { value: '1000-2500', label: '€1,000-2,500/month' },
          { value: '2500-5000', label: '€2,500-5,000/month' },
          { value: '5000-7500', label: '€5,000-7,500/month' },
          { value: '7500-10000', label: '€7,500-10,000/month' },
          { value: '10000-15000', label: '€10,000-15,000/month' },
          { value: 'over-15000', label: 'Over €15,000/month' }
        ],
        benchmark: "Companies your size typically invest €[X] monthly in automation"
      },
      {
        id: 'success_vision',
        title: 'What would success look like for your organization?',
        subtitle: 'Describe your ideal outcome',
        type: 'textarea',
        required: true,
        placeholder: 'Describe what perfect would look like - time saved, stress reduced, growth enabled...'
      }
    ]
  },
  {
    id: 'contact_information',
    title: 'Get Your Analysis',
    description: 'Where should we send your personalized automation roadmap?',
    estimatedTime: 0.5,
    questions: [
      {
        id: 'contact_details',
        title: 'Where should we send your personalized analysis?',
        type: 'contact_form',
        required: true,
        contactFields: [
          { id: 'full_name', label: 'Full Name', type: 'text', required: true },
          { id: 'business_email', label: 'Business Email', type: 'email', required: true },
          { id: 'company', label: 'Company', type: 'text', required: true },
          { id: 'phone', label: 'Phone (optional)', type: 'tel', required: false }
        ],
        preferenceField: {
          id: 'contact_preference',
          label: 'Preferred contact method',
          options: [
            { value: 'email', label: 'Email' },
            { value: 'phone', label: 'Phone' },
            { value: 'both', label: 'Both' }
          ]
        }
      }
    ]
  }
]

// Route 4: Operations & Fulfillment - PLACEHOLDER CONTENT
export const OPERATIONS_ROUTE_PHASES: QuizPhase[] = [
  {
    id: 'operations_processes',
    title: 'Operations & Workflow Analysis',
    description: 'Understanding your operational challenges',
    estimatedTime: 2,
    questions: [
      {
        id: 'main_operations_challenges',
        title: 'What are your biggest operational challenges?',
        subtitle: 'Select up to 3 main challenges',
        type: 'checkbox',
        required: true,
        maxSelections: 3,
        options: [
          { value: 'order-processing', label: 'Order processing and fulfillment' },
          { value: 'inventory-management', label: 'Inventory management' },
          { value: 'project-coordination', label: 'Project coordination and tracking' },
          { value: 'quality-control', label: 'Quality control processes' },
          { value: 'vendor-management', label: 'Vendor and supplier management' },
          { value: 'workflow-bottlenecks', label: 'Workflow bottlenecks' },
          { value: 'resource-allocation', label: 'Resource allocation' },
          { value: 'compliance-tracking', label: 'Compliance and documentation' }
        ]
      },
      {
        id: 'operations_time_breakdown',
        title: 'How does your team spend time on operational tasks?',
        type: 'percentage_sliders',
        required: true,
        categories: [
          { id: 'planning', label: 'Planning and coordination', max: 100 },
          { id: 'execution', label: 'Task execution', max: 100 },
          { id: 'monitoring', label: 'Monitoring and tracking', max: 100 },
          { id: 'reporting', label: 'Reporting and documentation', max: 100 }
        ],
        mustTotal: 100
      },
      {
        id: 'operations_team_size',
        title: 'How many people are involved in operations?',
        type: 'radio',
        required: true,
        options: [
          { value: '1-2', label: '1-2 people' },
          { value: '3-5', label: '3-5 people' },
          { value: '6-10', label: '6-10 people' },
          { value: '11-20', label: '11-20 people' },
          { value: '20+', label: 'More than 20 people' }
        ]
      }
    ]
  }
]

// Route 5: Marketing & Communications - PLACEHOLDER CONTENT
export const MARKETING_ROUTE_PHASES: QuizPhase[] = [
  {
    id: 'marketing_activities',
    title: 'Marketing Activities & Challenges',
    description: 'Understanding your marketing processes',
    estimatedTime: 2,
    questions: [
      {
        id: 'marketing_channels',
        title: 'Which marketing channels do you actively use?',
        subtitle: 'Select all that apply',
        type: 'checkbox',
        required: true,
        options: [
          { value: 'social-media', label: 'Social media marketing' },
          { value: 'content-marketing', label: 'Content marketing and blogging' },
          { value: 'email-marketing', label: 'Email marketing campaigns' },
          { value: 'paid-advertising', label: 'Paid advertising (Google, Facebook, etc.)' },
          { value: 'seo', label: 'Search engine optimization (SEO)' },
          { value: 'events', label: 'Events and webinars' },
          { value: 'partnerships', label: 'Partnership marketing' },
          { value: 'traditional', label: 'Traditional advertising' }
        ]
      },
      {
        id: 'content_creation_time',
        title: 'How much time does your team spend on content creation weekly?',
        type: 'radio',
        required: true,
        options: [
          { value: 'less-than-5', label: 'Less than 5 hours' },
          { value: '5-10', label: '5-10 hours' },
          { value: '10-20', label: '10-20 hours' },
          { value: '20-30', label: '20-30 hours' },
          { value: '30-40', label: '30-40 hours' },
          { value: 'more-than-40', label: 'More than 40 hours' }
        ]
      },
      {
        id: 'marketing_pain_points',
        title: 'What are your biggest marketing pain points?',
        subtitle: 'Select up to 3',
        type: 'checkbox',
        required: true,
        maxSelections: 3,
        options: [
          { value: 'content-creation', label: 'Time-consuming content creation' },
          { value: 'lead-generation', label: 'Generating quality leads' },
          { value: 'campaign-management', label: 'Managing multiple campaigns' },
          { value: 'performance-tracking', label: 'Tracking and measuring performance' },
          { value: 'social-media-management', label: 'Social media management' },
          { value: 'email-automation', label: 'Email automation and nurturing' },
          { value: 'budget-optimization', label: 'Budget allocation and optimization' },
          { value: 'team-coordination', label: 'Team coordination and workflows' }
        ]
      }
    ]
  }
]

// Route 6: Human Resources - PLACEHOLDER CONTENT
export const HR_ROUTE_PHASES: QuizPhase[] = [
  {
    id: 'hr_processes',
    title: 'HR Processes & Challenges',
    description: 'Understanding your human resources workflows',
    estimatedTime: 2,
    questions: [
      {
        id: 'hr_main_activities',
        title: 'Which HR activities consume the most time?',
        subtitle: 'Select up to 3 main time consumers',
        type: 'checkbox',
        required: true,
        maxSelections: 3,
        options: [
          { value: 'recruiting', label: 'Recruiting and hiring' },
          { value: 'onboarding', label: 'Employee onboarding' },
          { value: 'performance-management', label: 'Performance management and reviews' },
          { value: 'payroll', label: 'Payroll processing' },
          { value: 'benefits-administration', label: 'Benefits administration' },
          { value: 'employee-relations', label: 'Employee relations and support' },
          { value: 'compliance', label: 'Compliance and documentation' },
          { value: 'training', label: 'Training and development' }
        ]
      },
      {
        id: 'hiring_frequency',
        title: 'How often does your company hire new employees?',
        type: 'radio',
        required: true,
        options: [
          { value: 'monthly', label: 'Monthly or more frequently' },
          { value: 'quarterly', label: 'Every quarter' },
          { value: 'bi-annually', label: 'Twice a year' },
          { value: 'annually', label: 'Once a year' },
          { value: 'rarely', label: 'Rarely (as needed)' }
        ]
      },
      {
        id: 'hr_team_structure',
        title: 'Tell us about your HR team structure',
        type: 'team_structure',
        required: true,
        teamInputs: [
          { id: 'dedicated_hr', label: 'Dedicated HR staff', type: 'dropdown', max: 10 },
          { id: 'hr_hours_weekly', label: 'Your HR involvement (hours/week)', type: 'dropdown', max: 40 }
        ],
        booleanInputs: [
          { id: 'external_hr', label: 'External HR consultant/service' },
          { id: 'hr_software', label: 'HR management software in use' }
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