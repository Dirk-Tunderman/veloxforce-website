📋 Veloxforce Service Quiz - Complete Updated Documentation
🎯 Project Overview
The Veloxforce Service Quiz is a sophisticated multi-step assessment tool built with Next.js 14+, TypeScript, and shadcn/ui components. It guides users through department-specific questions to analyze their business processes and generate personalized automation recommendations.
🏗️ System Architecture
Core Technologies:

Framework: Next.js 14+ with App Router
Language: TypeScript
UI Components: shadcn/ui with Radix UI primitives
Styling: Tailwind CSS
State Management: React useState/useEffect
Form Handling: Custom form state management
Icons: Lucide React

🔄 Quiz Flow & Navigation
Step Structure:

Intro Page → User clicks "Start Assessment"
Opening Questions (5 questions) → General business info
Department Selection → User selects their focus area
Department-Specific Questions → Tailored to selected department
Final Questions → Business impact & contact information
Results/Analysis → Personalized recommendations

Navigation Logic:

Linear progression through opening questions
Branch routing based on department selection
No auto-advance - users must click "Next" button
Progress tracking with visual progress bar
Back navigation available (Previous button)

📊 Complete Question Inventory - Updated
Phase 1: Opening Questions (5 Questions)
Question 1: Company Size

ID: company_size
Type: radio
Options:

1-10 employees
11-25 employees
26-50 employees
51-100 employees
101-250 employees
250+ employees



Question 2: Your Role

ID: role
Type: radio
Options:

Owner/CEO
C-Suite Executive
Department Head
Operations Manager
Team Lead
Other (with custom input)


Special: Has allowCustom: true for "Other" option

Question 3: Business Model

ID: business_model
Type: radio
Options:

B2B Services
B2B Products
B2C E-commerce
B2C Services
Marketplace/Platform
SaaS/Software
Other



Question 4: Primary Operational Challenge

ID: primary_challenge
Type: radio
Options:

Too many manual processes
Team is overwhelmed
Can't scale efficiently
Costs growing faster than revenue
Quality consistency issues
Missing growth opportunities



Question 5: Which Department Needs The Most Help?

ID: department_focus
Type: visual_grid
Options:

Sales & Business Development
Finance & Administration
Customer Service & Support
Operations & Fulfillment
Marketing & Communications
Human Resources & Recruiting


Special: Visual grid with icons and descriptions

Phase 2: Department-Specific Routes
🎯 Sales & Business Development Route (9 Questions)
Phase 1: Lead Generation Methods
Question 1: How do you currently generate leads?

ID: lead_generation_methods
Type: checkbox
Options:

LinkedIn outreach
Cold email campaigns
Cold calling
Networking events
Referral programs
Inbound marketing
Paid advertising
Channel partners
Other (with custom input)


Special: Has allowCustom: true for "Other"

Question 2: Weekly sales conversations with prospects

ID: weekly_conversations
Type: slider
Options:

Less than 10
10-25
26-50
51-75
76-100
101-150
More than 150


Benchmark: "Companies your size typically have 40-60 conversations weekly"

Phase 2: Time Investment Breakdown
Question 3: Time spent per prospect (average)

ID: time_breakdown_per_prospect
Type: multi_time_breakdown
Categories:

Research & Qualification
Personalization & Outreach
Follow-up & Nurturing
CRM & Administrative


Options per category:

Less than 5 minutes
5-15 minutes
15-30 minutes
30-45 minutes
45-60 minutes
More than 60 minutes


Special: Real-time calculation of total time

Question 4: Sales team structure

ID: sales_team_structure
Type: team_structure
Inputs:

Full-time Sales/BDRs (dropdown, max 50)
Part-time/Support (dropdown, max 20)
Your weekly hours on sales (dropdown, max 60)
Marketing support hours (dropdown, max 20)



Question 5: Average hourly cost of sales activities

ID: hourly_cost_sales
Type: radio
Options:

€20-35 per hour
€35-50 per hour
€50-75 per hour
€75-100 per hour
More than €100 per hour



Phase 3: Sales Effectiveness
Question 6: Current conversion rate (qualified prospects to customers)

ID: prospect_outcomes
Type: radio
Options:

Excellent (40%+ become customers)
Strong (30-40% conversion)
Good (20-30% conversion)
Average (15-20% conversion)
Below average (10-15% conversion)
Poor (less than 10% conversion)
We're talking to the wrong people



Question 7: What prevents you from scaling sales?

ID: scaling_obstacles
Type: checkbox
Max Selections: 3
Options:

Not enough hours in the day
Finding the right prospects
Getting contact information
Personalizing outreach takes too long
CRM data maintenance
Inconsistent follow-up
Poor data quality
Team burnout



Question 8: Current sales technology stack

ID: current_sales_tools
Type: checkbox
Options:

CRM system (Salesforce, HubSpot, etc.)
LinkedIn Sales Navigator
Email automation platform
Data/lead providers (Apollo, ZoomInfo)
Calendar scheduling tools
Call recording/analytics
Proposal/quote software
Just spreadsheets and email
No formal systems



Question 9: Sales transformation priorities

ID: transformation_priorities
Type: checkbox
Max Selections: 3
Options:

Have 10x more sales conversations
Never waste time on prospecting
Perfect data in CRM automatically
Consistent pipeline flow
Shorter sales cycles
Higher quality prospects
Focus only on relationship building
Competitive advantage through efficiency



💰 Finance & Administration Route (8 Questions)
Phase 1: Financial Process Analysis
Question 1: Which financial processes consume the most time?

ID: main_time_consumers
Type: checkbox
Max Selections: 3
Options:

Processing vendor invoices (accounts payable)
Creating customer invoices (accounts receivable)
Expense report management
Payment processing and reconciliation
Financial reporting and analysis
Bank reconciliation
Budget tracking and forecasts
Month-end closing procedures



Question 2: Monthly transaction volumes

ID: transaction_volumes
Type: transaction_volumes
Categories:

Vendor invoices received
Customer invoices created
Expense reports processed


Options per category:

Less than 10
10-25
26-50
51-100
101-200
201-500
More than 500


Benchmark: "Similar companies process [X] total transactions monthly"

Phase 2: Processing Efficiency
Question 3: Average time to process one invoice (from receipt to payment)

ID: invoice_processing_time
Type: radio
Options:

Less than 5 minutes
5-10 minutes
10-20 minutes
20-30 minutes
30-45 minutes
45-60 minutes
1-2 hours
More than 2 hours



Question 4: Approval workflow efficiency

ID: approval_workflows
Type: approval_analysis
Metrics:

Typical approval cycle time
Number of approvers involved


Options for cycle time:

Same day
1-2 days
3-5 days
1 week
1-2 weeks
More than 2 weeks


Options for approvers:

1 person
2 people
3-4 people
5+ people



Question 5: How often do financial errors or discrepancies occur?

ID: error_frequency
Type: radio
Options:

Multiple times daily
Daily
Several times per week
Weekly
Several times per month
Monthly
Rarely



Question 6: Estimated cost impact of errors and rework

ID: error_cost
Type: radio
Options:

Less than €500 per month
€500-1,000 per month
€1,000-2,500 per month
€2,500-5,000 per month
€5,000-10,000 per month
More than €10,000 per month



Phase 3: Team Structure & Systems
Question 7: Finance team composition

ID: finance_team_structure
Type: team_structure
Inputs:

Dedicated finance staff (dropdown, max 20)
Part-time/shared resources (dropdown, max 10)
Your weekly hours on finance (dropdown, max 60)
External bookkeeper/accountant (checkbox)



Question 8: Where do you manage financial information?

ID: financial_systems
Type: checkbox
Options:

ERP system (SAP, Oracle, etc.)
Accounting software (QuickBooks, Xero, etc.)
Bank portals and websites
Expense management platform
Payment processing systems
Excel/Google Sheets
Email and folders
Paper filing systems



🎧 Customer Service & Support Route (8 Questions)
Phase 1: Customer Communication Channels
Question 1: How do customers contact you?

ID: customer_channels
Type: checkbox
Options:

Email
Phone calls
Live chat
Support ticket system
Social media messages
WhatsApp/SMS
Community forum
In-person/walk-ins



Question 2: Daily customer inquiry volume

ID: daily_inquiry_volume
Type: slider
Options:

Less than 10
10-25
26-50
51-100
101-200
201-500
501-1000
More than 1000



Question 3: Inquiry type distribution

ID: inquiry_type_breakdown
Type: percentage_sliders
Categories:

Order status/tracking
Product information
Technical support
Billing and payments
Returns and complaints
Account management
Other/complex issues


Special: Must total 100%

Phase 2: Response Times & Quality
Question 4: Average first response time

ID: first_response_time
Type: radio
Options:

Less than 15 minutes
15-30 minutes
30-60 minutes
1-2 hours
2-4 hours
4-8 hours
8-24 hours
More than 24 hours


Benchmark: "Industry best practice: Under 2 hours for initial response"

Question 5: What percentage of inquiries are repetitive?

ID: inquiry_repetitiveness
Type: radio
Options:

80%+ are the same questions
60-80% repetitive
40-60% repetitive
20-40% repetitive
Less than 20% repetitive
Every inquiry is unique



Question 6: Customer service team structure

ID: service_team_structure
Type: team_structure
Inputs:

Full-time support agents (dropdown, max 50)
Part-time/overflow staff (dropdown, max 20)
Your involvement hours/week (dropdown, max 40)
Other departments helping (dropdown, max 20)



Phase 3: Tools & Performance
Question 7: Current support tools and systems

ID: service_tools
Type: checkbox
Options:

Professional help desk software
Shared team email inbox
CRM system
Knowledge base/FAQ
Live chat software
Phone system/call center
Social media management tools
Just email and spreadsheets
No formal system



Question 8: Customer satisfaction rating

ID: customer_satisfaction
Type: radio
Options:

Excellent - regular praise and referrals
Good - mostly positive feedback
Average - mixed feedback
Below average - frequent complaints
Poor - losing customers due to service
Not measured - we don't track this



⚙️ Operations & Fulfillment Route (6 Questions)
Phase 1: Operations & Workflow Analysis
Question 1: Primary operational challenges

ID: main_operations_challenges
Type: checkbox
Max Selections: 3
Options:

Order processing and fulfillment
Inventory management and tracking
Project/job coordination
Quality control and assurance
Vendor/supplier management
Workflow bottlenecks
Resource allocation
Compliance and documentation



Question 2: Operations time allocation

ID: operations_time_breakdown
Type: percentage_sliders
Categories:

Planning and coordination
Task execution
Monitoring and tracking
Reporting and documentation


Special: Must total 100%

Question 3: Operations team size

ID: operations_team_size
Type: radio
Options:

1-2 people
3-5 people
6-10 people
11-20 people
More than 20 people



Question 4: Operational consistency

ID: operational_consistency
Type: radio
Options:

Highly consistent - same process every time
Mostly consistent - occasional variations
Somewhat consistent - regular adjustments needed
Inconsistent - frequent changes required
Ad hoc - every situation is different



Question 5: Weekly hours on repetitive operational tasks

ID: repetitive_operations_hours
Type: slider
Options:

Less than 5 hours
5-10 hours
10-20 hours
20-30 hours
30-40 hours
40-60 hours
60-80 hours
More than 80 hours


Visual: "That's X hours that could be automated!"

Question 6: What happens when key operations staff are unavailable?

ID: operations_continuity
Type: radio
Options:

Operations halt or slow significantly
Other staff struggle to maintain pace
Manageable but stressful for the team
Smooth transition with minimal impact
No impact - fully documented processes
We have automated backups



📢 Marketing & Communications Route (6 Questions)
Phase 1: Marketing Activities & Efficiency
Question 1: Active marketing channels

ID: marketing_channels
Type: checkbox
Options:

Social media marketing
Content marketing (blog, videos)
Email marketing campaigns
Paid advertising (Google, social)
SEO/website optimization
Events and webinars
Partnership/affiliate marketing
Traditional advertising



Question 2: Weekly content creation hours

ID: content_creation_time
Type: radio
Options:

Less than 5 hours
5-10 hours
10-20 hours
20-30 hours
30-40 hours
More than 40 hours



Question 3: Marketing execution challenges

ID: marketing_pain_points
Type: checkbox
Max Selections: 3
Options:

Content creation takes too long
Inconsistent posting schedule
Campaign coordination complexity
Performance tracking difficulties
Managing multiple platforms
Email list management
Budget optimization
Team coordination



Question 4: Monthly lead generation volume

ID: lead_generation_volume
Type: slider
Options:

Less than 10 leads
10-25 leads
25-50 leads
50-100 leads
100-250 leads
250-500 leads
500-1000 leads
More than 1000 leads


Subtext: "From all marketing efforts combined"

Question 5: Marketing time split

ID: marketing_time_allocation
Type: percentage_sliders
Categories:

Strategic planning and creative work
Execution and administrative tasks


Special: Must total 100%

Question 6: Marketing performance measurement

ID: marketing_measurement
Type: checkbox
Max Selections: 2
Options:

Website traffic and analytics
Lead quality and quantity
Sales team feedback
Social media engagement
Detailed ROI tracking
Customer feedback
We don't have clear metrics
Everything is measured



👥 Human Resources Route (6 Questions)
Phase 1: HR Processes & Efficiency
Question 1: Primary HR activities

ID: hr_main_activities
Type: checkbox
Max Selections: 3
Options:

Recruiting and hiring
Employee onboarding
Performance management
Payroll processing
Benefits administration
Employee relations
Compliance and regulations
Training and development



Question 2: Hiring frequency

ID: hiring_frequency
Type: radio
Options:

Multiple hires monthly
Monthly
Quarterly
Twice per year
Annually
Rarely/as needed



Question 3: HR team structure

ID: hr_team_structure
Type: team_structure
Inputs:

Dedicated HR staff (dropdown, max 10)
Your HR involvement hours/week (dropdown, max 40)
External HR consultant/service (checkbox)
HR management software in use (checkbox)



Question 4: Time to fully onboard new employees

ID: employee_onboarding_time
Type: radio
Options:

Same day - everything is ready
2-3 days
One week
2 weeks
3-4 weeks
More than a month
Varies significantly



Question 5: Monthly HR administrative hours

ID: hr_admin_hours
Type: slider
Options:

Less than 5 hours
5-10 hours
10-20 hours
20-40 hours
40-60 hours
60-80 hours
80-100 hours
More than 100 hours


Subtext: "Including payroll, benefits, compliance, paperwork"

Question 6: Most challenging HR aspect

ID: hr_biggest_challenge
Type: radio
Options:

Finding qualified candidates
Onboarding efficiency
Payroll and benefits complexity
Regulatory compliance
Employee engagement
Performance management
All equally challenging



Phase 3: Final Questions (6 Questions)
Phase 1: Business Impact Assessment
Question 1: How are current inefficiencies affecting your business?

ID: operational_impact
Type: checkbox
Options:

Limiting our growth potential
Increasing operational costs
Affecting customer satisfaction
Causing employee frustration
Missing market opportunities
Losing competitive advantage
Preventing strategic initiatives
Creating compliance risks



Question 2: Timeline for addressing these challenges

ID: timeline_urgency
Type: radio
Options:

Immediate priority (this month)
This quarter
Next 6 months
Within the year
Next year
Just exploring options



Question 3: Monthly operational improvement budget

ID: monthly_investment
Type: radio
Options:

Less than €500 per month
€500-1,000 per month
€1,000-2,500 per month
€2,500-5,000 per month
€5,000-7,500 per month
€7,500-10,000 per month
€10,000-15,000 per month
More than €15,000 per month


Benchmark: "Companies your size typically invest €[X] monthly in operational improvements"

Question 4: Vision for operational excellence

ID: success_vision
Type: textarea
Placeholder: "Describe your ideal state - What would your business look like with perfect operations? Consider time savings, stress reduction, growth potential..."

Question 5: Who needs to be involved in this decision?

ID: decision_makers
Type: checkbox
Options:

Business partner(s)
CFO/Finance lead
Operations head
IT/Technology lead
Department managers
Board/Investors
Just me



Phase 2: Contact Information
Question 6: Contact Information

ID: contact_details
Type: contact_form
Fields:

Full Name (text, required)
Business Email (email, required)
Company Name (text, required)
Phone Number (tel, optional)


Preference Field:

Preferred contact method (radio):

Email
Phone
Either is fine





🎨 Question Types & Components
Supported Question Types:

radio - Single selection with radio buttons
checkbox - Multiple selection with checkboxes
visual_grid - Department selection with icons and descriptions
slider - Interactive drag slider for ranges
multi_time_breakdown - Multiple radio groups for time categories
team_structure - Dropdown selects + boolean checkboxes
transaction_volumes - Multiple radio groups for volume categories
approval_analysis - Multiple radio groups for approval metrics
percentage_sliders - Slider inputs that must total 100%
textarea - Large text input with character counter
contact_form - Structured contact information form

Special Properties:

maxSelections - Limits checkbox selections
allowCustom - Shows custom input field for "Other" options
benchmark - Shows informational benchmark text
mustTotal - For percentage sliders that must sum to 100%
realTimeCalculation - Shows calculation results
subtext - Additional context below the question