# VeloxForce Audit Quiz System - Complete Documentation

## Overview

The VeloxForce website features two audit quiz systems designed to help businesses identify automation opportunities:

1. **Service Quiz** (`/tools/service-quiz`) - Department-specific questionnaire for comprehensive business analysis
2. **Business Audit** (`/tools/business-audit`) - Legacy process-specific questionnaire focused on individual workflows

Both quizzes lead users through structured assessments to identify Service-as-Software opportunities, calculate ROI potential, and generate personalized recommendations.

## Quiz Routes & Pages

### Primary Routes

- **Service Quiz**: `/tools/service-quiz` (main quiz interface)
- **Business Audit**: `/tools/business-audit` (legacy quiz interface)
- **Service Quiz Redirect**: `/tools/service-quiz/redirect` (redirects to main service quiz)
- **Business Audit Redirect**: `/tools/business-audit/redirect` (redirects to main business audit)

## Service Quiz Structure (Primary System)

The Service Quiz follows a dynamic routing system based on department selection:

### 1. Opening Context (All Routes)
**Phase ID**: `opening`  
**Estimated Time**: 0.5 minutes

#### Questions:
- **Company Size** (`company_size`)
  - Solo entrepreneur (1 person)
  - Micro team (2-10 employees)
  - Small business (11-25 employees)
  - Growing company (26-50 employees)
  - Mid-size business (51-100 employees)
  - Established company (101-200 employees)
  - Enterprise (200+ employees)

- **User Role** (`user_role`)
  - Owner/Founder/CEO
  - C-Suite Executive
  - Department Head/Director
  - Operations Manager
  - Team Lead/Supervisor
  - Other (with custom input)

- **Business Model** (`business_model`)
  - B2B - Selling to businesses
  - B2C - Selling to consumers
  - B2B2C - Both business and consumer
  - Marketplace/Platform
  - Non-profit/NGO

### 2. Department Selection
**Phase ID**: `department_selection`  
**Estimated Time**: 0.5 minutes

#### Question:
- **Department Focus** (`department_focus`) - Visual grid selection
  - **Sales & Business Development** - Finding and qualifying new customers
  - **Finance & Administration** - Processing invoices, expenses, and financial tasks
  - **Customer Service & Support** - Handling customer inquiries and requests
  - **Operations & Fulfillment** - Managing orders, projects, and workflows
  - **Marketing & Communications** - Content creation and campaign management
  - **Human Resources** - Recruiting, onboarding, and employee management

---

## Department-Specific Routes

### Route 1: Sales & Business Development

#### Phase 1: Sales Generation Methods
**Phase ID**: `sales_generation`  
**Estimated Time**: 1 minute

**Questions:**
- **Lead Generation Methods** (`lead_generation_methods`) - Checkbox selection
  - LinkedIn outreach and social selling
  - Cold email campaigns
  - Cold calling
  - Networking events and conferences
  - Referral programs
  - Inbound marketing (content/SEO)
  - Paid advertising (Google/Social)
  - Channel partners
  - Other (custom input)

- **Weekly Conversations** (`weekly_conversations`) - Radio selection
  - Fewer than 10 conversations
  - 10-25 conversations
  - 26-50 conversations
  - 51-75 conversations
  - 76-100 conversations
  - 101-150 conversations
  - More than 150 conversations
  - *Benchmark: "Companies your size typically have 40-60 conversations weekly"*

#### Phase 2: Time Investment Breakdown
**Phase ID**: `sales_time_investment`  
**Estimated Time**: 2 minutes

**Questions:**
- **Time Breakdown Per Prospect** (`time_breakdown_per_prospect`) - Multi-time breakdown
  - Research & Qualification (Less than 2 hours to More than 15 hours)
  - Personalization & Outreach (Less than 2 hours to More than 8 hours)
  - Follow-up & Nurturing (Less than 2 hours to More than 8 hours)
  - CRM & Administrative (Less than 1 hour to More than 6 hours)
  - *Real-time calculation: "Total investment per prospect: [X] hours (€[Y] cost)"*

- **Sales Team Structure** (`sales_team_structure`) - Team structure input
  - Full-time Sales/BDRs (0-50 people)
  - Part-time/Support (0-20 people)
  - Your weekly hours (0-60 hours)
  - Marketing support (0-20 people)

- **Hourly Cost Sales** (`hourly_cost_sales`) - Radio selection
  - €20-35/hour (Entry level)
  - €35-50/hour (Mid-level)
  - €50-75/hour (Senior)
  - €75-100/hour (Leadership)
  - €100+/hour (Executive)

#### Phase 3: Sales Effectiveness & Outcomes
**Phase ID**: `sales_effectiveness`  
**Estimated Time**: 1.5 minutes

**Questions:**
- **Prospect Outcomes** (`prospect_outcomes`) - Radio selection
  - Excellent (40%+ book meetings)
  - Strong (30-40% book meetings)
  - Good (20-30% book meetings)
  - Average (15-20% book meetings)
  - Below average (10-15% book meetings)
  - Poor (Less than 10% book meetings)
  - We're not reaching the right people

- **Scaling Obstacles** (`scaling_obstacles`) - Checkbox (max 3)
  - Not enough hours for prospecting
  - Difficulty finding ideal prospects
  - Contact information is hard to obtain
  - Personalization takes too long
  - CRM maintenance is time-consuming
  - Inconsistent follow-up
  - Poor data quality
  - Team burnout from repetitive tasks

- **Current Sales Tools** (`current_sales_tools`) - Checkbox selection
  - CRM (Salesforce, HubSpot, Pipedrive, etc.)
  - LinkedIn Sales Navigator
  - Email automation (Outreach, SalesLoft, etc.)
  - Data providers (Apollo, ZoomInfo, etc.)
  - Calendar scheduling (Calendly, etc.)
  - Call recording/dialing
  - Proposal software
  - Just spreadsheets and email

- **Transformation Priorities** (`transformation_priorities`) - Checkbox (max 3)
  - 10x more qualified conversations
  - Eliminate manual prospecting
  - Perfect data in CRM always
  - Consistent pipeline growth
  - Reduce sales cycle length
  - Better prospect quality
  - Team focuses only on selling
  - Competitive market advantage

### Route 2: Finance & Administration

#### Phase 1: Financial Process Analysis
**Phase ID**: `finance_time_consumers`  
**Estimated Time**: 1 minute

**Questions:**
- **Main Time Consumers** (`main_time_consumers`) - Checkbox (max 3)
  - Processing vendor invoices (AP)
  - Creating customer invoices (AR)
  - Expense report management
  - Payment processing and approvals
  - Financial reporting and analysis
  - Bank reconciliation
  - Budget tracking
  - Month-end closing procedures

- **Transaction Volumes** (`transaction_volumes`) - Transaction volume input
  - Monthly invoices received (AP): Less than 50 to More than 1000
  - Monthly invoices sent (AR): Less than 50 to More than 1000
  - Monthly expense reports: Less than 25 to More than 200
  - *Benchmark: "Similar sized companies typically process [X] total transactions monthly"*

#### Phase 2: Processing Efficiency
**Phase ID**: `finance_processing_time`  
**Estimated Time**: 1.5 minutes

**Questions:**
- **Invoice Processing Time** (`invoice_processing_time`) - Radio selection
  - Under 5 minutes (highly automated)
  - 5-10 minutes
  - 10-20 minutes
  - 20-30 minutes
  - 30-45 minutes
  - 45-60 minutes
  - 1-2 hours
  - More than 2 hours

- **Approval Workflows** (`approval_workflows`) - Approval analysis
  - Typical approval cycle time: Same day to More than a week
  - Number of approvers involved: 1 person to 5+ people

- **Error Frequency** (`error_frequency`) - Radio selection
  - Multiple times daily
  - Daily
  - Few times per week
  - Weekly
  - Few times per month
  - Monthly
  - Rarely

- **Error Cost** (`error_cost`) - Radio selection
  - Under €500
  - €500-1,000
  - €1,000-2,500
  - €2,500-5,000
  - €5,000-10,000
  - Over €10,000

#### Phase 3: Team Structure & Systems
**Phase ID**: `finance_team_systems`  
**Estimated Time**: 1 minute

**Questions:**
- **Finance Team Structure** (`finance_team_structure`) - Team structure input
  - Dedicated finance staff (0-20 people)
  - Part-time/shared resources (0-10 people)
  - Your involvement (0-60 hours/week)
  - External bookkeeper/accountant (boolean)

- **Systems Count** (`systems_count`) - Radio selection
  - 1-2 systems (highly integrated)
  - 3-4 systems
  - 5-6 systems
  - 7-8 systems
  - 9-10 systems
  - More than 10 systems

- **System Types** (`system_types`) - Checkbox selection
  - ERP system
  - Dedicated accounting software
  - Bank portals
  - Expense management
  - Payment platforms
  - Spreadsheets
  - Paper-based processes

- **Finance Transformation** (`finance_transformation`) - Checkbox (max 3)
  - Automated invoice processing
  - Real-time financial visibility
  - Eliminate manual data entry
  - Faster approval cycles
  - Error-free processing
  - Better compliance/audit trail
  - More time for strategic analysis
  - Reduced month-end stress

### Route 3: Customer Service & Support

#### Phase 1: Customer Communication Channels
**Phase ID**: `service_channels_volume`  
**Estimated Time**: 1 minute

**Questions:**
- **Customer Channels** (`customer_channels`) - Visual grid (multiple selection)
  - Email (Email support)
  - Phone (Phone support)
  - Live chat (Website chat)
  - Support ticket system (Ticketing system)
  - Social media (Social platforms)
  - WhatsApp/SMS (Messaging apps)
  - Community forum (Online forum)
  - In-person/walk-in (Physical location)

- **Daily Inquiry Volume** (`daily_inquiry_volume`) - Visual grid selection
  - Less than 10 (Low volume)
  - 10-25 (Light volume)
  - 26-50 (Moderate volume)
  - 51-100 (Good volume)
  - 101-200 (High volume)
  - 201-500 (Very high volume)
  - 501-1000 (Enterprise volume)
  - More than 1000 (Scale volume)

- **Inquiry Type Breakdown** (`inquiry_type_breakdown`) - Percentage sliders (must total 100%)
  - Technical Support (Product issues, troubleshooting, how-to questions)
  - Billing & Account (Payment issues, subscription questions, account changes)
  - Order & Shipping (Order status, tracking, delivery questions)
  - Product Information (Features, specifications, pre-sales questions)
  - Returns & Complaints (Refunds, exchanges, dissatisfaction issues)
  - Account Management (Profile changes, preferences, general account help)
  - *Real-time calculation: "Primary category: [TOP_CATEGORY] ([TOP_PERCENTAGE]%) - Focus automation here first"*

#### Phase 2: Response Times & Quality
**Phase ID**: `service_response_quality`  
**Estimated Time**: 1 minute

**Questions:**
- **First Response Time** (`first_response_time`) - Visual grid selection
  - Under 15 minutes (Excellent)
  - 15-30 minutes (Very good)
  - 30-60 minutes (Good)
  - 1-2 hours (Standard)
  - 2-4 hours (Slow)
  - 4-8 hours (Poor)
  - 8-24 hours (Very poor)
  - Over 24 hours (Critical)
  - *Benchmark: "Industry best practice: Under 2 hours for initial response"*

- **Inquiry Repetitiveness** (`inquiry_repetitiveness`) - Visual grid selection
  - 80%+ are the same questions (High automation potential)
  - 60-80% repetitive (Good automation potential)
  - 40-60% repetitive (Moderate automation potential)
  - 20-40% repetitive (Some automation potential)
  - Less than 20% repetitive (Limited automation potential)
  - Every inquiry is unique (Minimal automation potential)

- **Service Team Structure** (`service_team_structure`) - Service team efficiency builder
  - Customer Service Manager (€75/hour)
  - Senior Support Agent (€55/hour)
  - Junior Support Agent (€40/hour)
  - Technical Specialist (€70/hour)
  - Part-time/Overflow Support (€35/hour)
  - *Real-time calculation: "Total team cost: €[MONTHLY_COST]/month with [TEAM_SIZE] team members ([FTE] FTE)"*

#### Phase 3: Service Efficiency & Performance
**Phase ID**: `service_efficiency_metrics`  
**Estimated Time**: 2 minutes

**Questions:**
- **Response Time Breakdown** (`response_time_breakdown`) - Time slider (5-180 minutes)
  - Average time from initial contact to resolution
  - *Real-time calculation: "That's [X] minutes per inquiry worth €[MONTHLY_COST]/month across all inquiries"*

- **Inquiry Volume Analysis** (`inquiry_volume_analysis`) - Volume slider
  - Daily/Weekly/Monthly options (1-100 daily, 5-500 weekly, 20-2000 monthly)
  - *Real-time calculation: "Monthly equivalent: [MONTHLY] inquiries - [RATING]"*

- **Customer Satisfaction Analysis** (`customer_satisfaction_analysis`) - Checkbox (max 4)
  - Post-interaction survey ratings
  - Net Promoter Score (NPS) tracking
  - Customer Satisfaction (CSAT) scores
  - First-call/contact resolution rates
  - Escalation and complaint rates
  - Repeat contact frequency
  - Informal feedback and reviews
  - No formal satisfaction tracking

- **Resolution Rate Analysis** (`resolution_rate_analysis`) - Radio selection
  - 90-100% (Excellent)
  - 80-89% (Very Good)
  - 70-79% (Good)
  - 60-69% (Fair)
  - 50-59% (Below Average)
  - Under 50% (Needs Improvement)
  - I don't track this metric
  - *Benchmark: "Industry best practice: 75-85% first-contact resolution rate"*

#### Phase 4: Automation & Efficiency Opportunities
**Phase ID**: `service_automation_opportunities`  
**Estimated Time**: 2 minutes

**Questions:**
- **Repetitive Tasks Breakdown** (`repetitive_tasks_breakdown`) - Percentage sliders (must total 100%)
  - Answering Common Questions (FAQ-type responses, product info, how-to guidance)
  - Status Updates & Tracking (Order status, delivery tracking, progress updates)
  - Complex Issue Resolution (Technical troubleshooting, unique problem solving)
  - Escalation Management (Complaints, refunds, manager-level issues)
  - Data Entry & Documentation (Updating records, creating tickets, note-taking)
  - Internal Coordination (Working with other departments, follow-ups)
  - *Real-time calculation: "Primary activity: [TOP_CATEGORY] ([TOP_PERCENTAGE]%) - High automation potential"*

- **Knowledge Base Usage** (`knowledge_base_usage`) - Radio selection
  - 75%+ customers try self-service first
  - 50-74% use self-service sometimes
  - 25-49% occasionally use self-service
  - 10-24% rarely use self-service
  - Under 10% use self-service
  - No self-service options available

- **Automation Readiness Score** (`automation_readiness_score`) - Checkbox (max 5)
  - Initial inquiry triage and routing
  - Answering frequently asked questions
  - Order status and tracking updates
  - Appointment and callback scheduling
  - Basic troubleshooting guidance
  - Customer information collection
  - Follow-up satisfaction surveys
  - Smart escalation routing
  - Suggesting relevant help articles
  - None of our processes suit automation

#### Phase 5: Tools & Challenges
**Phase ID**: `service_tools_challenges`  
**Estimated Time**: 1 minute

**Questions:**
- **Service Tools** (`service_tools`) - Checkbox selection
  - Dedicated help desk (Zendesk, Freshdesk, etc.)
  - Shared email inbox
  - CRM system
  - Knowledge base
  - Live chat software
  - Phone system/call center
  - Social media management tools
  - Just email and spreadsheets

- **Service Obstacles** (`service_obstacles`) - Checkbox (max 3)
  - Response time expectations
  - Volume overwhelming team
  - Information scattered across systems
  - Lack of customer context
  - Repetitive questions drain time
  - Language/timezone coverage
  - Inconsistent responses
  - Difficult to track metrics

### Routes 4-6: Placeholder Content

**Operations & Fulfillment**, **Marketing & Communications**, and **Human Resources** routes contain placeholder content with basic structure but are not fully implemented.

---

## Final Questions (All Routes)

### Phase 1: Business Impact Assessment
**Phase ID**: `business_impact`  
**Estimated Time**: 1 minute

**Questions:**
- **Operational Impact** (`operational_impact`) - Checkbox selection
  - Limiting our growth potential
  - Increasing operational costs
  - Affecting customer satisfaction
  - Causing employee frustration/turnover
  - Missing market opportunities
  - Losing competitive advantage
  - Preventing strategic initiatives
  - Creating compliance risks

- **Timeline Urgency** (`timeline_urgency`) - Radio selection
  - Immediate priority (this month)
  - This quarter (next 3 months)
  - Next 6 months
  - Within the year
  - Next year planning
  - Just exploring options

- **Monthly Investment** (`monthly_investment`) - Radio selection
  - Under €500/month
  - €500-1,000/month
  - €1,000-2,500/month
  - €2,500-5,000/month
  - €5,000-7,500/month
  - €7,500-10,000/month
  - €10,000-15,000/month
  - Over €15,000/month
  - *Benchmark: "Companies your size typically invest €[X] monthly in process delegation"*

- **Success Vision** (`success_vision`) - Textarea
  - Open-ended description of ideal outcome

### Phase 2: Contact Information
**Phase ID**: `contact_information`  
**Estimated Time**: 0.5 minutes

**Questions:**
- **Contact Details** (`contact_details`) - Contact form
  - Full Name (required)
  - Business Email (required)
  - Company (required)
  - Phone (optional)
  - Preferred contact method: Email/Phone/Both

---

## Business Audit Quiz (Legacy System)

The Business Audit Quiz follows a 4-phase structure focused on individual process analysis:

### Phase 1: Problem Identification & Engagement
**Estimated Time**: 2 minutes

#### Screen 1.1: Process Selection & Description
- **Process Name** (`q1_processName`) - Text input
  - Examples: "Customer onboarding", "Monthly financial reporting", "Invoice processing"
  - Max 250 characters with help text and examples

- **Biggest Pain** (`q1_biggestPain`) - Radio with follow-up
  - Takes too much of my personal time (score: 2)
  - Too many errors requiring rework (score: 2)
  - Can't scale without hiring more people (score: 2)
  - Delays upset customers/stakeholders (score: 1)
  - No visibility into status or bottlenecks (score: 1)
  - Inconsistent quality depending on who does it (score: 1)
  - Optional follow-up text (200 characters)

#### Screen 1.2: Volume & Frequency Assessment
- **Process Unit** (`q2_processUnit`) - Radio selection
  - Number of transactions (invoices, orders, reports)
  - Number of people (leads, customers, employees)
  - Number of requests (tickets, inquiries, approvals)
  - Number of projects/cases
  - Other (custom input)

- **Volume** (`q2_volume`) - Slider with timeframes
  - Daily: 1-100 (markers: 5, 10, 25, 50, 100)
  - Weekly: 5-500 (markers: 25, 50, 125, 250, 500)
  - Monthly: 25-2000 (markers: 100, 200, 500, 1000, 2000)
  - Color coding: Red (<50 monthly), Yellow (50-100), Green (100+)
  - Real-time calculation enabled

- **Time Investment** (`q3_timeInvestment`) - Radio with expandable calculator
  - Less than 5 hours/week (score: 0)
  - 5-10 hours/week (score: 1)
  - 10-20 hours/week (score: 1)
  - 20-40 hours/week (score: 2)
  - 40-80 hours/week (score: 2)
  - More than 80 hours/week (score: 2)
  - Expandable calculator for detailed breakdown

### Phase 2: Impact Quantification & Urgency Building
**Estimated Time**: 3 minutes

#### Screen 2.1: Financial Impact
- **Resource Cost** (`q4_resourceCost`) - Radio with real-time calculation
  - €25-40 per hour (Administrative staff) (score: 1)
  - €40-60 per hour (Professional staff) (score: 1)
  - €60-100 per hour (Senior/Technical staff) (score: 2)
  - €100+ per hour (Executive/Specialist) (score: 2)
  - Shows calculation: "Based on [X] hours weekly, you're investing: €[Amount] per month"

- **Executive Time** (`q4_executiveTime`) - Slider with conditional messaging
  - Range: 0-20 hours weekly
  - Markers: 0, 2, 5, 10, 20
  - Conditional message when >0: "That's [X] hours of strategic time worth €[Amount]/month"

#### Screen 2.2: Business Impact Assessment
- **Growth Limitations** (`q5_growthLimitations`) - Checkbox with dynamic messaging
  - Can't take on more customers without more staff (score: 2)
  - Quality drops when volume increases (score: 1)
  - I'm stuck managing operations instead of strategy (score: 2)
  - Competitors serve customers faster (score: 1)
  - Missing opportunities while handling this (score: 2)
  - Team morale suffers from repetitive work (score: 1)
  - Losing money on inefficiencies (score: 2)

- **Error Impact** (`q6_errorImpact`) - Radio selection
  - Minor inconvenience (<€100 impact) (score: 0)
  - Moderate issues (€100-500 impact) (score: 1)
  - Significant problems (€500-2,000 impact) (score: 1)
  - Major consequences (€2,000-5,000 impact) (score: 2)
  - Critical damage (€5,000+ or lost customers) (score: 2)

- **Error Frequency** (`q6_errorFrequency`) - Radio with calculation
  - Daily (score: 2)
  - Weekly (score: 1)
  - Monthly (score: 1)
  - Rarely (score: 0)
  - Shows: "Estimated error cost: €[Amount]/month"

### Phase 3: Readiness Assessment & Qualification
**Estimated Time**: 2 minutes

#### Screen 3.1: Process Maturity Check
- **Process Standardization** (`q7_processStandardization`) - Radio with qualification logic
  - Documented step-by-step process everyone follows (score: 2, qualified)
  - Generally consistent with some variations (score: 2, qualified)
  - Depends on who's doing it (score: 1, conditional)
  - Different every time (score: 0, not ready)
  - No standard approach (score: 0, not ready)

- **Decision Authority** (`q8_decisionAuthority`) - Radio selection
  - I make the decision (score: 2)
  - I decide with my business partner (score: 2)
  - Need board/investor approval (score: 1)
  - Consult with department heads (score: 1)
  - Complex approval process (score: 0)

- **ROI Timeline** (`q8_roiTimeline`) - Radio with urgency frame
  - Immediately (urgent priority) (score: 2)
  - Within 3 months (score: 2)
  - Within 6 months (score: 1)
  - Just exploring options (score: 0)

#### Screen 3.2: Current State Assessment
- **Current Tools** (`q9_currentTools`) - Checkbox selection
  - Email (Gmail, Outlook, etc.)
  - Spreadsheets (Excel, Google Sheets)
  - CRM (Salesforce, HubSpot, etc.)
  - ERP (SAP, Oracle, etc.)
  - Project Management (Asana, Monday, etc.)
  - Industry-specific software (custom input)
  - Paper-based/manual only
  - Other (custom input)

- **Data Organization** (`q9_dataOrganization`) - Radio selection
  - Well-organized and consistent (score: 2)
  - Mostly organized with some cleanup needed (score: 1)
  - Scattered and needs significant work (score: 0)
  - Not sure (score: 0)

### Phase 4: Solution Alignment & Value Preview
**Estimated Time**: 1 minute

#### Screen 4.1: Investment Context
- **Ideal Timeline** (`q10_idealTimeline`) - Radio selection
  - This quarter (urgent priority) (score: 2)
  - Next 6 months (planned initiative) (score: 2)
  - Within the year (on roadmap) (score: 1)
  - Exploring for next year (score: 0)
  - Just researching options (score: 0)

- **Solution Criteria** (`q11_solutionCriteria`) - Checkbox selection
  - Clear return on investment
  - No technical complexity for my team
  - Proven to work in similar businesses
  - Fits within operational budget
  - Minimal disruption during implementation

#### Screen 4.2: Optional Enhancement Questions
- **Competitive Pressure** (`q12_competitivePressure`) - Radio (optional)
  - Yes, and it's hurting our business (score: 1)
  - Probably, but not sure (score: 0)
  - No, everyone struggles with this (score: 0)
  - We're actually ahead (score: 0)
  - Don't know (score: 0)

- **Additional Process** (`q13_additionalProcess`) - Text (optional)
  - Open-ended input for other automation opportunities

---

## API Endpoints

### 1. Quiz Submission API
**Endpoint**: `/api/submit-quiz`  
**Method**: POST  
**Purpose**: Handles both Service Quiz and Legacy Quiz submissions

#### Request Structure:
```typescript
// Service Quiz Submission
{
  contactDetails: ServiceContactDetails,
  quizAnswers: ServiceQuizAnswers,
  departmentRoute: string,
  summary: {
    selectedDepartment: string,
    calculatedScore: number,
    estimatedSavings: {
      timePerWeek: number,
      costPerWeek: number,
      annualSavings: number
    },
    recommendations: string[]
  }
}

// Legacy Quiz Submission
{
  contactDetails: ContactDetails,
  quizAnswers: QuizAnswers,
  summary: QuizSummary
}
```

#### Database Operations:
1. **Client Upsert**: Updates or creates client record in `audit_clients` table
2. **Quiz Submission**: Creates record in `audit_quiz_submissions` table
3. **Answer Storage**: Stores individual answers in `audit_quiz_answers` table

#### Response:
```json
{
  "success": true,
  "submissionId": "uuid"
}
```

### 2. Email Analysis API
**Endpoint**: `/api/send-audit-email`  
**Method**: POST  
**Purpose**: Sends personalized ROI analysis emails

#### Request Structure:
```typescript
{
  email: string,
  name?: string,
  companyName?: string,
  auditResults: {
    processName: string,
    calculatedScore: number,
    resultCategory: string,
    estimatedSavings: {
      timePerWeek: number,
      costPerWeek: number,
      annualSavings: number
    },
    recommendations: string[],
    nextSteps: string[]
  }
}
```

#### Email Features:
- HTML-formatted professional template
- ROI calculations and metrics
- Personalized recommendations
- Clear call-to-action for consultation booking
- Responsive design for mobile compatibility

#### Response:
```json
{
  "success": true,
  "emailId": "resend_email_id",
  "message": "Audit results sent successfully"
}
```

### 3. Test Email API
**Endpoint**: `/api/test-email`  
**Method**: POST  
**Purpose**: Development endpoint for testing email functionality

---

## Database Schema

### Tables:

#### 1. `audit_clients`
```sql
- id (uuid, primary key)
- email (text, unique)
- name (text)
- phone_number (text)
- company_name (text)
- created_at (timestamp)
- updated_at (timestamp)
```

#### 2. `audit_quiz_submissions`
```sql
- id (uuid, primary key)
- client_id (uuid, foreign key to audit_clients)
- process_name_input (text)
- selected_process_type (text)
- calculated_score (integer)
- result_category (text)
- ai_analysis_status (text: 'pending', 'processing', 'completed')
- department_route (text, nullable for legacy quizzes)
- created_at (timestamp)
- updated_at (timestamp)
```

#### 3. `audit_quiz_answers`
```sql
- id (uuid, primary key)
- submission_id (uuid, foreign key to audit_quiz_submissions)
- question_id (text)
- answer_value (text)
- created_at (timestamp)
```

---

## Scoring & Calculation Logic

### Service Quiz Scoring
Service Quiz scoring is dynamic and route-specific:

- **Sales Route**: Focus on conversation volume, time investment, and conversion rates
- **Finance Route**: Emphasis on transaction volume, processing time, and error rates
- **Customer Service Route**: Based on inquiry volume, response times, and automation potential

### Legacy Quiz Scoring (Business Audit)
The Business Audit uses a 12-point scoring system across 7 categories:

#### Scoring Categories:
1. **Volume** (0-2 points)
   - 100+ monthly = 2 points
   - 50-100 monthly = 1 point
   - <50 monthly = 0 points

2. **Time Investment** (0-2 points)
   - 20+ hours weekly = 2 points
   - 10-20 hours weekly = 1 point
   - <10 hours weekly = 0 points

3. **Personal Time** (0-1 points)
   - Any owner involvement = 1 point

4. **Process Consistency** (0-2 points)
   - Documented/consistent = 2 points
   - Mostly consistent = 1 point
   - Inconsistent/varies = 0 points

5. **Pain Level** (0-1 points)
   - 2+ major frustrations = 1 point

6. **Urgency** (0-2 points)
   - Immediate/next month = 2 points
   - Next quarter = 1 point
   - Exploring = 0 points

7. **Budget Readiness** (0-1 points)
   - €1,000+ budget or ROI-focused = 1 point

#### Result Categories:
- **Highly Qualified**: 9-12 points
- **Qualified**: 5-8 points
- **Not Yet Ready**: 0-4 points

### ROI Calculations
Both systems calculate estimated savings based on:
- Current time investment
- Hourly costs of involved personnel
- Process automation potential (typically 70% efficiency gain)
- Service fee estimates (25% of savings)
- Implementation payback periods

---

## Question Types & Components

### Standard Input Types:
- **Text**: Single-line text input with character limits
- **Textarea**: Multi-line text input for detailed responses
- **Radio**: Single selection from predefined options
- **Checkbox**: Multiple selection with optional limits
- **Select**: Dropdown selection

### Advanced Interactive Components:

#### 1. **Visual Grid** (`visual_grid`)
Icon-based selection interface with visual cards showing:
- Icons (Lucide React components)
- Titles and descriptions
- Color-coded categories
- Support for single or multiple selection

#### 2. **Slider Components**
- **Basic Slider**: Simple value selection with markers
- **Time Slider**: Specialized for time-based inputs (5-180 minutes)
- **Volume Slider**: Multi-timeframe selection (daily/weekly/monthly)

#### 3. **Team Structure Builder** (`team_structure`)
Interactive component for building team compositions:
- Dropdown selectors for team sizes
- Boolean toggles for additional resources
- Real-time cost calculations

#### 4. **Service Team Efficiency** (`service_team_efficiency`)
Specialized component for customer service team analysis:
- Role-based team building (Manager, Senior Agent, etc.)
- Predefined hourly rates per role
- FTE calculation and monthly cost analysis

#### 5. **Percentage Sliders** (`percentage_sliders`)
Multiple connected sliders that must total 100%:
- Real-time percentage validation
- Dynamic rebalancing as user adjusts values
- Category descriptions and examples

#### 6. **Transaction Volumes** (`transaction_volumes`)
Multi-category volume assessment:
- Separate inputs for different transaction types
- Benchmark comparisons
- Industry-specific volume ranges

#### 7. **Contact Form** (`contact_form`)
Structured contact information collection:
- Required and optional fields
- Email validation
- Phone number formatting
- Preference selection

### Special Features:

#### Real-Time Calculations
Many questions include live calculations showing:
- Cost implications
- Time savings potential
- ROI projections
- Benchmark comparisons

#### Conditional Logic
Questions can show/hide based on previous responses:
- Route-specific question sets
- Qualification branching
- Follow-up text fields

#### Benchmark Integration
Industry benchmarks provide context:
- "Companies your size typically..."
- "Industry best practice is..."
- Performance comparisons

---

## User Experience Flow

### Service Quiz Journey:
1. **Introduction** → Company context questions
2. **Department Selection** → Visual grid of business areas
3. **Department-Specific Assessment** → 3-5 phases of detailed questions
4. **Business Impact Analysis** → Growth implications and urgency
5. **Contact & Results** → Lead capture and analysis delivery

### Business Audit Journey:
1. **Process Definition** → Name and describe specific process
2. **Volume & Time Analysis** → Quantify current state
3. **Impact Assessment** → Cost and business implications
4. **Readiness Evaluation** → Qualification and decision-making capacity
5. **Solution Alignment** → Timeline and criteria matching
6. **Results & Recommendations** → Personalized analysis

### Results Delivery:
Both quizzes culminate in:
- **Immediate Results**: On-screen analysis with key metrics
- **Email Follow-up**: Detailed PDF or HTML report
- **Consultation Booking**: Direct scheduling integration
- **Lead Qualification**: Automatic scoring and routing

---

## Technical Implementation Notes

### Frontend Components:
- **React Hook Form**: Form state management and validation
- **Zod**: Schema validation for type safety
- **Framer Motion**: Smooth transitions and animations
- **Lucide React**: Consistent icon system
- **Tailwind CSS**: Responsive styling and design system

### State Management:
- Local component state for quiz progression
- Form context for answer persistence
- URL-based routing for deep linking
- Progress tracking across phases

### API Integration:
- **Supabase**: Database operations and real-time updates
- **Resend**: Email delivery and template management
- **Next.js API Routes**: Server-side processing and validation

### Performance Optimizations:
- **Lazy Loading**: Components load as needed
- **Image Optimization**: Next.js automatic image processing
- **Code Splitting**: Route-based bundle optimization
- **Caching**: Strategic caching for static content

This comprehensive audit quiz system provides VeloxForce with a sophisticated lead qualification and customer education tool, enabling personalized assessment of Service-as-Software opportunities across diverse business departments and use cases.