# VeloxForce Quiz Design Guide
## Redesigning Customer Service, Operations, Marketing & HR Routes

*A comprehensive guide to replicate the superior design quality of Sales & Finance routes across all quiz departments.*

---

## Table of Contents
1. [Overview & Design Philosophy](#overview--design-philosophy)
2. [Design System Compliance](#design-system-compliance)
3. [Interactive Component Architecture](#interactive-component-architecture)
4. [Advanced Question Types](#advanced-question-types)
5. [Visual Design Patterns](#visual-design-patterns)
6. [Animation & Micro-Interactions](#animation--micro-interactions)
7. [Real-time Calculations](#real-time-calculations)
8. [Route-Specific Implementation Plans](#route-specific-implementation-plans)
9. [Quality Assurance Checklist](#quality-assurance-checklist)
10. [Code Templates & Examples](#code-templates--examples)

---

## Overview & Design Philosophy

### Current State Analysis
- **✅ Sales & Finance Routes**: Professional, interactive, calculation-heavy experiences with 15+ custom components
- **❌ Other Routes**: Basic form inputs with minimal interactivity and placeholder content

### Design Excellence Standards
The Sales & Finance routes demonstrate:
- **Interactive Engagement**: Real-time calculations, dynamic feedback, visual responses
- **Professional Polish**: Sophisticated animations, color-coded feedback, strategic typography
- **User-Centric Design**: Progressive disclosure, contextual help, intuitive interactions
- **Technical Sophistication**: Complex state management, conditional logic, advanced components

---

## Design System Compliance

### Color Strategy (90/10 Rule)
**Primary Palette:**
- **90% Gray Usage**: `text-gray-700`, `text-gray-600`, `bg-gray-50`
- **10% Blue Emphasis**: `text-blue-600`, `border-blue-500`, `bg-blue-50`

**Forbidden Colors (Must Remove):**
- ❌ Red variants: `#EF4444`, `red-500`, `bg-red-50`
- ❌ Yellow variants: `#F59E0B`, `yellow-500`, `bg-yellow-50` 
- ❌ Orange variants: `orange-500`, `bg-orange-50`
- ❌ Amber variants: `amber-500`, `bg-amber-50`

**Approved Replacement Mapping:**
```css
/* Error States */
#EF4444 → #1E40AF (blue-800)
red-500 → blue-800
bg-red-50 → bg-blue-50

/* Warning States */
#F59E0B → #1D4ED8 (blue-700)
yellow-500 → blue-700
bg-yellow-50 → bg-blue-50

/* Success States */
#10B981 → #2563EB (blue-600)
green-500 → blue-600
bg-green-50 → bg-blue-50
```

### Icon Application Strategy
**Lucide Icons Only:**
- **Strategic Blue (10%)**: Primary action icons, selected states, emphasis points
- **Standard Gray (90%)**: Secondary icons, navigation, general UI elements
- **Hover Transitions**: `hover:scale-110 transition-all duration-200`

**Color Distribution Example:**
```typescript
// Department selection - strategic blue emphasis
<TrendingUp className="h-6 w-6 text-blue-600" />

// Supporting icons - standard gray
<Info className="h-5 w-5 text-gray-700" />
<CheckCircle className="h-4 w-4 text-gray-700" />
```

---

## Interactive Component Architecture

### 1. VolumeSlider Component
**Purpose**: Handle volume-based questions with timeframe conversion
**Used in**: Sales (lead volumes), Finance (transaction volumes)

**Key Features:**
- Timeframe switching (daily/weekly/monthly)
- Real-time conversion calculations
- Color-coded volume feedback
- Monthly equivalent display

**Implementation Pattern:**
```typescript
// Usage in question renderer
if (question.id === 'inquiry_volume' || question.id === 'transaction_volume') {
  return (
    <VolumeSlider
      config={question.sliderConfig}
      value={value || { amount: 50, timeframe: 'monthly' }}
      onChange={onChange}
      unitLabel={question.unitLabel || 'inquiries'}
    />
  )
}
```

**Visual Design Elements:**
- Rounded toggle buttons for timeframe selection
- Large numerical display with unit labels
- Color-coded background tinting based on volume level
- Subtle animations on value changes

### 2. TimeSlider Component
**Purpose**: Analyze time investment with cost calculations
**Used in**: Sales (time per prospect), Finance (processing time)

**Key Features:**
- Executive time cost calculations (€100/hour default)
- Impact messaging based on value ranges
- Strategic insight callouts for high values
- Real-time ROI calculations

**Implementation Pattern:**
```typescript
if (question.id === 'time_investment' || question.id === 'processing_time') {
  return (
    <TimeSlider
      config={question.sliderConfig}
      value={value || 2}
      onChange={onChange}
      showCalculation={true}
      executiveHourlyRate={100}
    />
  )
}
```

**Visual Feedback System:**
```typescript
const getImpactColor = (hours: number): string => {
  if (hours === 0) return '#2563EB'      // Blue - excellent
  if (hours <= 2) return '#1D4ED8'       // Dark blue - good
  if (hours <= 5) return '#1E40AF'       // Darker blue - concerning
  return '#1E3A8A'                       // Darkest blue - critical
}
```

### 3. Visual Grid Component
**Purpose**: Interactive icon-based selection for categories
**Used in**: Company size, user roles, business models

**Key Features:**
- Icon-based visual selection
- Hover states with scale transforms
- Multi-column responsive grid
- Selected state highlighting

**Implementation Pattern:**
```typescript
// Visual grid for category selection
case 'visual_grid':
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {question.options?.map((option) => {
        const IconComponent = getIconForOption(option.value)
        const isSelected = value === option.value
        
        return (
          <motion.div
            key={option.value}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`
              relative p-6 rounded-lg border-2 cursor-pointer transition-all duration-200
              ${isSelected 
                ? 'border-blue-500 bg-blue-50 shadow-lg transform scale-105' 
                : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50/50'
              }
            `}
            onClick={() => onChange(option.value)}
          >
            <div className="flex flex-col items-center text-center space-y-3">
              <IconComponent className={`h-8 w-8 ${isSelected ? 'text-blue-600' : 'text-gray-700'}`} />
              <Text className="font-medium">{option.label}</Text>
            </div>
          </motion.div>
        )
      })}
    </div>
  )
```

### 4. Team Structure Builder
**Purpose**: Dynamic team composition analysis
**Used in**: Sales team analysis, Finance team structure

**Key Features:**
- Role-based dropdowns
- Boolean toggles for team attributes
- Real-time team cost calculations
- Validation for team composition

**Implementation Pattern:**
```typescript
case 'team_structure':
  return (
    <div className="space-y-6">
      {question.teamRoles?.map((role) => (
        <div key={role.id} className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-center justify-between mb-3">
            <Label className="font-medium">{role.label}</Label>
            <Checkbox
              checked={value?.[role.id]?.enabled || false}
              onCheckedChange={(checked) => 
                onChange({
                  ...value,
                  [role.id]: { ...value?.[role.id], enabled: checked }
                })
              }
            />
          </div>
          
          {value?.[role.id]?.enabled && (
            <Select
              value={value?.[role.id]?.count || '1'}
              onValueChange={(count) =>
                onChange({
                  ...value,
                  [role.id]: { ...value?.[role.id], count }
                })
              }
            >
              {[1,2,3,4,5].map(num => (
                <SelectItem key={num} value={num.toString()}>
                  {num} {role.label}{num > 1 ? 's' : ''}
                </SelectItem>
              ))}
            </Select>
          )}
        </div>
      ))}
    </div>
  )
```

### 5. Percentage Sliders Component
**Purpose**: Interactive percentage allocation with validation
**Used in**: Time breakdown analysis, budget allocation

**Key Features:**
- Must-total-100% validation
- Real-time percentage calculation
- Visual progress bars
- Error states for invalid totals

**Implementation Pattern:**
```typescript
case 'percentage_sliders':
  return (
    <PercentageSliders
      categories={question.categories}
      value={value || {}}
      onChange={onChange}
      mustTotal100={question.mustTotal100}
    />
  )
```

---

## Advanced Question Types

### 1. Multi-Time Breakdown
**Purpose**: Analyze time allocation across multiple categories
**Question Type**: `multi_time_breakdown`

**Configuration Example:**
```typescript
{
  id: 'time_breakdown_per_customer',
  title: 'How do you currently spend time with each customer inquiry?',
  type: 'multi_time_breakdown',
  categories: [
    { id: 'initial_response', label: 'Initial Response', description: 'Time to first reply' },
    { id: 'research', label: 'Research & Analysis', description: 'Understanding the inquiry' },
    { id: 'solution_development', label: 'Solution Development', description: 'Creating the response' },
    { id: 'follow_up', label: 'Follow-up', description: 'Ensuring satisfaction' }
  ],
  realTimeCalculation: true,
  calculationMessage: 'Total time per customer: [TOTAL] minutes (€[COST] per inquiry at €100/hour)',
  required: true
}
```

### 2. Approval Analysis
**Purpose**: Multi-dimensional workflow analysis
**Question Type**: `approval_analysis`

**Configuration Example:**
```typescript
{
  id: 'approval_workflows',
  title: 'Analyze your current approval processes',
  type: 'approval_analysis',
  workflows: [
    {
      id: 'purchase_orders',
      label: 'Purchase Orders',
      metrics: [
        { id: 'steps', label: 'Approval Steps', type: 'dropdown', options: ['1-2', '3-4', '5-6', '7+'] },
        { id: 'time', label: 'Average Time', type: 'dropdown', options: ['< 1 day', '1-3 days', '4-7 days', '> 1 week'] },
        { id: 'frequency', label: 'Monthly Volume', type: 'dropdown', options: ['1-10', '11-25', '26-50', '50+'] }
      ]
    }
  ],
  required: true
}
```

### 3. Transaction Volumes
**Purpose**: Volume-based analysis with benchmarking
**Question Type**: `transaction_volumes`

**Features:**
- Industry benchmarking
- Efficiency ratings
- Volume-based recommendations
- Real-time cost analysis

---

## Visual Design Patterns

### Card Layout Standards

**Interactive Selection Cards:**
```css
.selection-card {
  @apply relative p-6 rounded-lg border-2 cursor-pointer transition-all duration-200;
  
  /* Default state */
  @apply border-gray-200 hover:border-blue-300 hover:bg-blue-50/50;
  
  /* Selected state */
  &.selected {
    @apply border-blue-500 bg-blue-50 shadow-lg transform scale-105;
  }
  
  /* Hover effects */
  &:hover {
    @apply shadow-md transform scale-102;
  }
}
```

**Real-time Feedback Cards:**
```css
.feedback-card {
  /* Dynamic styling based on calculated values */
  border-color: var(--dynamic-color);
  background-color: color-mix(in srgb, var(--dynamic-color) 10%, transparent);
}
```

### Typography Hierarchy

**Question Titles:**
```css
.question-title {
  @apply text-2xl md:text-3xl font-bold text-blue-900 text-center leading-relaxed;
  /* Uses velox-text-h2 class */
}
```

**Question Subtitles:**
```css
.question-subtitle {
  @apply text-lg font-medium text-gray-700 text-center;
  /* Uses velox-text-body class */
}
```

**Interactive Labels:**
```css
.interactive-label {
  @apply font-medium text-gray-800;
  transition: color 0.2s ease;
}

.interactive-label.selected {
  @apply text-blue-800;
}
```

### Spacing & Layout Standards

**Question Container:**
```css
.question-container {
  @apply max-w-4xl mx-auto space-y-8;
}
```

**Question Header:**
```css
.question-header {
  @apply space-y-6 text-center;
}
```

**Interactive Elements:**
```css
.interactive-section {
  @apply space-y-6;
}

.option-group {
  @apply space-y-4;
}

.grid-layout {
  @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4;
}
```

---

## Animation & Micro-Interactions

### Framer Motion Patterns

**Entry Animations:**
```typescript
const entryAnimation = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.3, ease: "easeOut" }
}
```

**Selection Animations:**
```typescript
const selectionAnimation = {
  whileHover: { scale: 1.02 },
  whileTap: { scale: 0.98 },
  transition: { duration: 0.2 }
}
```

**Progressive Disclosure:**
```typescript
<AnimatePresence>
  {showCalculation && (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Calculation content */}
    </motion.div>
  )}
</AnimatePresence>
```

**Layout Animations:**
```typescript
<motion.div layout>
  {/* Content that maintains smooth transitions during layout changes */}
</motion.div>
```

### Icon Micro-Interactions

**Standard Icon Hover:**
```css
.icon-hover {
  @apply transition-all duration-200 hover:scale-110;
}
```

**Strategic Icon Emphasis:**
```css
.icon-emphasis {
  @apply text-blue-600 transition-all duration-200;
}

.icon-emphasis:hover {
  @apply scale-110 text-blue-700;
}
```

---

## Real-time Calculations

### Implementation Pattern

**Basic Calculation Display:**
```typescript
{question.realTimeCalculation && value && (
  <motion.div 
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    className="bg-blue-50 border border-blue-200 rounded-lg p-4"
  >
    <div className="flex items-center gap-2 justify-center">
      <BarChart3 className="h-5 w-5 text-gray-700" />
      <Text className="text-blue-800 font-medium">
        {formatCalculationMessage(question.calculationMessage, value, calculations)}
      </Text>
    </div>
  </motion.div>
)}
```

**Advanced Calculation with Insights:**
```typescript
const calculateROI = (timeValue: number, hourlyRate: number = 100) => {
  const weeklyCost = timeValue * hourlyRate
  const monthlyCost = weeklyCost * 4.33
  const annualCost = monthlyCost * 12
  
  return {
    weekly: weeklyCost,
    monthly: monthlyCost,
    annual: annualCost,
    automationSavings: annualCost * 0.8 // 80% time savings estimate
  }
}
```

### Calculation Message Templates

**Time Investment:**
```typescript
const timeCalculationMessages = {
  low: "Excellent delegation! This shows strong operational efficiency.",
  medium: "Good balance between oversight and delegation.",
  high: "Significant executive time investment. Consider automation opportunities.",
  critical: "Critical time drain on leadership. High automation ROI potential."
}
```

**Volume Analysis:**
```typescript
const volumeCalculationMessages = {
  low: "Current volume may not justify automation investment yet.",
  medium: "Moderate volume with automation potential.",
  high: "High volume - excellent automation candidate with strong ROI potential!"
}
```

---

## Route-Specific Implementation Plans

### 1. Customer Service Route Redesign

**Current State**: Basic checkboxes and radio buttons, missing percentage_sliders renderer
**Target Components Needed:**

#### A. Inquiry Volume Analyzer (VolumeSlider)
```typescript
// Replace basic volume question with interactive slider
{
  id: 'inquiry_volume',
  title: 'What\'s your typical inquiry volume?',
  type: 'volume_slider',
  sliderConfig: {
    timeframes: ['daily', 'weekly', 'monthly'],
    ranges: {
      daily: { min: 1, max: 50, markers: [1, 10, 25, 50] },
      weekly: { min: 5, max: 300, markers: [5, 50, 150, 300] },
      monthly: { min: 20, max: 1200, markers: [20, 200, 600, 1200] }
    },
    colors: {
      low: '#1E40AF',    // Blue instead of red
      medium: '#1D4ED8',  // Darker blue instead of yellow
      high: '#2563EB'     // Blue instead of green
    }
  },
  unitLabel: 'inquiries',
  realTimeCalculation: true,
  calculationMessage: 'Monthly equivalent: [MONTHLY] inquiries - [RATING]',
  required: true
}
```

#### B. Response Time Analyzer (TimeSlider)
```typescript
{
  id: 'response_time_investment',
  title: 'How much time do you spend on each customer inquiry?',
  type: 'time_slider',
  sliderConfig: {
    min: 0,
    max: 120,
    step: 5,
    markers: [0, 15, 30, 60, 120],
    labels: ['None', '15min', '30min', '1hr', '2hr+']
  },
  realTimeCalculation: true,
  calculationMessage: 'That\'s [X] minutes per inquiry worth €[COST]/month across all inquiries',
  required: true
}
```

#### C. Channel Breakdown (PercentageSliders)
```typescript
{
  id: 'channel_time_breakdown',
  title: 'How is your customer service time distributed across channels?',
  type: 'percentage_sliders',
  categories: [
    { id: 'email', label: 'Email Support', description: 'Written email responses' },
    { id: 'phone', label: 'Phone Support', description: 'Live phone conversations' },
    { id: 'chat', label: 'Live Chat', description: 'Real-time chat support' },
    { id: 'social', label: 'Social Media', description: 'Social platform responses' },
    { id: 'tickets', label: 'Ticket System', description: 'Formal support tickets' }
  ],
  mustTotal100: true,
  realTimeCalculation: true,
  calculationMessage: 'Primary channel: [TOP_CHANNEL] ([TOP_PERCENTAGE]%) - Consider automation opportunities',
  required: true
}
```

#### D. Team Structure Builder
```typescript
{
  id: 'cs_team_structure',
  title: 'What does your customer service team look like?',
  type: 'team_structure',
  teamRoles: [
    { id: 'cs_manager', label: 'Customer Service Manager', hourlyRate: 80 },
    { id: 'senior_agent', label: 'Senior Support Agent', hourlyRate: 60 },
    { id: 'junior_agent', label: 'Junior Support Agent', hourlyRate: 40 },
    { id: 'technical_specialist', label: 'Technical Specialist', hourlyRate: 75 }
  ],
  realTimeCalculation: true,
  calculationMessage: 'Total team cost: €[MONTHLY_COST]/month - Automation could reduce by 60-70%',
  required: true
}
```

### 2. Operations Route Redesign

**Current State**: Only 3 placeholder questions
**Target Components Needed:**

#### A. Process Complexity Analyzer (Visual Grid)
```typescript
{
  id: 'process_complexity',
  title: 'What type of operational processes do you manage?',
  type: 'visual_grid',
  options: [
    { value: 'inventory', label: 'Inventory Management', icon: 'Package' },
    { value: 'logistics', label: 'Logistics & Shipping', icon: 'Truck' },
    { value: 'quality', label: 'Quality Assurance', icon: 'Shield' },
    { value: 'procurement', label: 'Procurement', icon: 'ShoppingCart' },
    { value: 'maintenance', label: 'Equipment Maintenance', icon: 'Wrench' },
    { value: 'compliance', label: 'Compliance Tracking', icon: 'FileCheck' }
  ],
  multiple: true,
  maxSelections: 3,
  required: true
}
```

#### B. Workflow Analysis (Multi-Time Breakdown)
```typescript
{
  id: 'operations_time_breakdown',
  title: 'How do you spend time on your primary operational process?',
  type: 'multi_time_breakdown',
  categories: [
    { id: 'planning', label: 'Planning & Scheduling', description: 'Process planning and resource allocation' },
    { id: 'execution', label: 'Process Execution', description: 'Hands-on operational work' },
    { id: 'monitoring', label: 'Monitoring & Control', description: 'Quality control and progress tracking' },
    { id: 'reporting', label: 'Reporting & Documentation', description: 'Status updates and documentation' },
    { id: 'coordination', label: 'Team Coordination', description: 'Communication and collaboration' }
  ],
  realTimeCalculation: true,
  calculationMessage: 'Total process time: [TOTAL] hours/week (€[WEEKLY_COST] weekly cost)',
  required: true
}
```

#### C. Volume & Frequency Analyzer (VolumeSlider)
```typescript
{
  id: 'operations_volume',
  title: 'What\'s the volume of your primary operational process?',
  type: 'volume_slider',
  sliderConfig: {
    timeframes: ['daily', 'weekly', 'monthly'],
    ranges: {
      daily: { min: 1, max: 100, markers: [1, 25, 50, 100] },
      weekly: { min: 5, max: 500, markers: [5, 125, 250, 500] },
      monthly: { min: 20, max: 2000, markers: [20, 500, 1000, 2000] }
    }
  },
  unitLabel: 'processes',
  realTimeCalculation: true,
  required: true
}
```

### 3. Marketing Route Redesign

**Current State**: Only 3 placeholder questions
**Target Components Needed:**

#### A. Content Creation Time Analyzer (TimeSlider)
```typescript
{
  id: 'content_creation_time',
  title: 'How much time do you spend creating marketing content per week?',
  type: 'time_slider',
  sliderConfig: {
    min: 0,
    max: 40,
    step: 1,
    markers: [0, 5, 10, 20, 40],
    labels: ['None', '5hr', '10hr', '20hr', '40hr+']
  },
  realTimeCalculation: true,
  calculationMessage: 'That\'s [X] hours worth €[MONTHLY_COST]/month - AI could reduce this by 70%',
  required: true
}
```

#### B. Marketing Channel Analysis (Visual Grid)
```typescript
{
  id: 'marketing_channels',
  title: 'Which marketing channels do you actively manage?',
  type: 'visual_grid',
  options: [
    { value: 'social_media', label: 'Social Media', icon: 'Share2' },
    { value: 'email_marketing', label: 'Email Marketing', icon: 'Mail' },
    { value: 'content_marketing', label: 'Content Marketing', icon: 'FileText' },
    { value: 'paid_advertising', label: 'Paid Advertising', icon: 'Target' },
    { value: 'seo', label: 'SEO & Content', icon: 'Search' },
    { value: 'events', label: 'Events & Webinars', icon: 'Calendar' }
  ],
  multiple: true,
  maxSelections: 4,
  required: true
}
```

#### C. Campaign Time Breakdown (Percentage Sliders)
```typescript
{
  id: 'campaign_time_breakdown',
  title: 'How do you allocate time across marketing activities?',
  type: 'percentage_sliders',
  categories: [
    { id: 'strategy', label: 'Strategy & Planning', description: 'Campaign planning and market research' },
    { id: 'content', label: 'Content Creation', description: 'Writing, design, video production' },
    { id: 'execution', label: 'Campaign Execution', description: 'Publishing, advertising, outreach' },
    { id: 'analysis', label: 'Analytics & Reporting', description: 'Performance analysis and optimization' },
    { id: 'coordination', label: 'Team Coordination', description: 'Meetings, reviews, collaboration' }
  ],
  mustTotal100: true,
  realTimeCalculation: true,
  required: true
}
```

### 4. HR Route Redesign

**Current State**: Only 3 placeholder questions
**Target Components Needed:**

#### A. Hiring Process Analyzer (Multi-Time Breakdown)
```typescript
{
  id: 'hiring_time_breakdown',
  title: 'How much time does your typical hiring process require?',
  type: 'multi_time_breakdown',
  categories: [
    { id: 'job_posting', label: 'Job Posting & Sourcing', description: 'Creating listings and finding candidates' },
    { id: 'screening', label: 'Resume Screening', description: 'Initial candidate evaluation' },
    { id: 'interviews', label: 'Interview Process', description: 'Phone, video, and in-person interviews' },
    { id: 'background', label: 'Background Checks', description: 'Reference and credential verification' },
    { id: 'onboarding', label: 'Onboarding Process', description: 'New hire integration and training' }
  ],
  realTimeCalculation: true,
  calculationMessage: 'Total hiring time: [TOTAL] hours per hire (€[COST_PER_HIRE] cost per new employee)',
  required: true
}
```

#### B. HR Volume Analyzer (VolumeSlider)
```typescript
{
  id: 'hr_activity_volume',
  title: 'What\'s your typical HR activity volume?',
  type: 'volume_slider',
  sliderConfig: {
    timeframes: ['monthly', 'quarterly', 'annually'],
    ranges: {
      monthly: { min: 1, max: 50, markers: [1, 10, 25, 50] },
      quarterly: { min: 3, max: 150, markers: [3, 30, 75, 150] },
      annually: { min: 12, max: 600, markers: [12, 120, 300, 600] }
    }
  },
  unitLabel: 'HR processes',
  realTimeCalculation: true,
  required: true
}
```

#### C. HR Process Distribution (Percentage Sliders)
```typescript
{
  id: 'hr_time_distribution',
  title: 'How is your HR time distributed across activities?',
  type: 'percentage_sliders',
  categories: [
    { id: 'recruitment', label: 'Recruitment & Hiring', description: 'Finding and hiring new talent' },
    { id: 'employee_relations', label: 'Employee Relations', description: 'Performance, issues, satisfaction' },
    { id: 'compliance', label: 'Compliance & Documentation', description: 'Legal compliance and record keeping' },
    { id: 'training', label: 'Training & Development', description: 'Employee skill development' },
    { id: 'administration', label: 'HR Administration', description: 'Payroll, benefits, general admin' }
  ],
  mustTotal100: true,
  realTimeCalculation: true,
  required: true
}
```

---

## Quality Assurance Checklist

### Design System Compliance ✅
- [ ] All red/yellow/orange colors replaced with blue/gray palette
- [ ] Icon color distribution follows 90/10 rule (90% gray-700, 10% blue-600)
- [ ] Typography uses velox-text classes consistently
- [ ] Spacing follows established patterns (space-y-6, space-y-4, gap-4)

### Interactive Component Implementation ✅
- [ ] VolumeSlider implemented for volume-based questions
- [ ] TimeSlider implemented for time investment questions
- [ ] PercentageSliders implemented for breakdown analysis
- [ ] Visual Grid implemented for category selection
- [ ] Team Structure Builder implemented where applicable

### Animation & Micro-Interactions ✅
- [ ] Framer Motion entry animations implemented
- [ ] Selection animations (whileHover, whileTap) added
- [ ] Progressive disclosure for calculations
- [ ] Icon hover effects with scale transforms
- [ ] Smooth layout transitions

### Real-time Calculations ✅
- [ ] Calculation messages display for relevant questions
- [ ] ROI and cost analysis shown where appropriate
- [ ] Strategic insights appear for high-impact values
- [ ] Monthly/annual equivalents calculated correctly

### Content Quality ✅
- [ ] Professional, respectful language throughout
- [ ] Industry-relevant examples and contexts
- [ ] Clear question titles and descriptions
- [ ] Helpful tooltips where needed

### User Experience ✅
- [ ] Responsive design across all screen sizes
- [ ] Clear visual hierarchy and information flow
- [ ] Intuitive interaction patterns
- [ ] Appropriate loading states and transitions

---

## Code Templates & Examples

### 1. Custom Question Renderer Template

```typescript
// Add to QuestionRenderer component in question-renderer.tsx

// Custom renderers for advanced question types
if (question.id === 'your_question_id') {
  return (
    <YourCustomComponent
      question={question}
      value={value}
      onChange={onChange}
      allAnswers={allAnswers}
    />
  )
}

// Volume slider implementation
if (question.type === 'volume_slider') {
  return (
    <VolumeSlider
      config={question.sliderConfig}
      value={value || { amount: 50, timeframe: 'monthly' }}
      onChange={onChange}
      unitLabel={question.unitLabel || 'units'}
    />
  )
}

// Time slider implementation
if (question.type === 'time_slider') {
  return (
    <TimeSlider
      config={question.sliderConfig}
      value={value || 2}
      onChange={onChange}
      showCalculation={question.realTimeCalculation}
      executiveHourlyRate={question.hourlyRate || 100}
    />
  )
}
```

### 2. Percentage Sliders Component Template

```typescript
// Create new component: percentage-sliders.tsx
"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Slider } from "@/components/ui/slider"
import { Text } from "@/components/ui/typography"

interface Category {
  id: string
  label: string
  description?: string
}

interface PercentageSlidersProps {
  categories: Category[]
  value: Record<string, number>
  onChange: (value: Record<string, number>) => void
  mustTotal100?: boolean
}

export function PercentageSliders({
  categories,
  value,
  onChange,
  mustTotal100 = true
}: PercentageSlidersProps) {
  const [percentages, setPercentages] = useState<Record<string, number>>(
    categories.reduce((acc, cat) => ({
      ...acc,
      [cat.id]: value[cat.id] || Math.floor(100 / categories.length)
    }), {})
  )

  const total = Object.values(percentages).reduce((sum, val) => sum + val, 0)
  const isValid = !mustTotal100 || Math.abs(total - 100) < 1

  const handleSliderChange = (categoryId: string, newValue: number[]) => {
    const newPercentages = { ...percentages, [categoryId]: newValue[0] }
    setPercentages(newPercentages)
    onChange(newPercentages)
  }

  return (
    <div className="space-y-6">
      {categories.map((category) => (
        <div key={category.id} className="space-y-3">
          <div className="flex justify-between items-center">
            <div>
              <Text className="font-medium">{category.label}</Text>
              {category.description && (
                <Text className="text-sm text-gray-600">{category.description}</Text>
              )}
            </div>
            <Text className="text-lg font-bold text-blue-600">
              {percentages[category.id]}%
            </Text>
          </div>
          
          <Slider
            value={[percentages[category.id]]}
            onValueChange={(value) => handleSliderChange(category.id, value)}
            max={100}
            min={0}
            step={1}
            className="w-full"
          />
        </div>
      ))}

      {/* Total Validation */}
      <motion.div
        className={`p-4 rounded-lg border text-center ${
          isValid 
            ? 'border-blue-200 bg-blue-50' 
            : 'border-blue-300 bg-blue-100'
        }`}
        animate={{ scale: isValid ? 1 : 1.02 }}
      >
        <Text className={`font-medium ${
          isValid ? 'text-blue-800' : 'text-blue-900'
        }`}>
          Total: {total.toFixed(0)}%
          {mustTotal100 && !isValid && ' (Must equal 100%)'}
        </Text>
      </motion.div>
    </div>
  )
}
```

### 3. Route Configuration Template

```typescript
// Example route structure for service-quiz.ts
export const NEW_ROUTE_PHASES: QuizPhase[] = [
  {
    id: 'route_phase_1',
    title: 'Understanding Your [Department] Operations',
    description: 'Let\'s analyze your current [department] processes',
    estimatedTime: 2,
    questions: [
      {
        id: 'primary_challenge',
        title: 'What\'s your biggest [department] challenge?',
        type: 'visual_grid',
        options: [
          { value: 'time', label: 'Time Management', icon: 'Clock' },
          { value: 'quality', label: 'Quality Control', icon: 'Shield' },
          { value: 'efficiency', label: 'Process Efficiency', icon: 'Zap' },
          { value: 'coordination', label: 'Team Coordination', icon: 'Users' }
        ],
        required: true
      },
      {
        id: 'time_investment',
        title: 'How much time do you spend on [primary activity] per week?',
        type: 'time_slider',
        sliderConfig: {
          min: 0,
          max: 40,
          step: 1,
          markers: [0, 10, 20, 30, 40]
        },
        realTimeCalculation: true,
        calculationMessage: 'That\'s [X] hours worth €[MONTHLY_COST]/month',
        required: true
      }
    ]
  }
]
```

### 4. Animation Implementation Template

```typescript
// Standard animation patterns to use throughout

// Entry animation for questions
const questionEntryAnimation = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.3, ease: "easeOut" }
}

// Selection card animation
const cardSelectionAnimation = {
  whileHover: { scale: 1.02 },
  whileTap: { scale: 0.98 },
  transition: { duration: 0.2 }
}

// Progressive disclosure
const progressiveDisclosure = {
  initial: { opacity: 0, height: 0 },
  animate: { opacity: 1, height: 'auto' },
  exit: { opacity: 0, height: 0 },
  transition: { duration: 0.3 }
}

// Usage example
<motion.div {...questionEntryAnimation}>
  <motion.div {...cardSelectionAnimation}>
    {/* Interactive card content */}
  </motion.div>
</motion.div>
```

---

## Implementation Priority

### Phase 1: Foundation (Week 1)
1. Fix color system violations across all existing components
2. Implement PercentageSliders component
3. Update Customer Service route with 3-4 advanced components

### Phase 2: Expansion (Week 2)
1. Complete Operations route redesign
2. Complete Marketing route redesign
3. Implement remaining advanced question types

### Phase 3: Polish (Week 3)
1. Complete HR route redesign
2. Add animation consistency across all routes
3. Implement real-time calculations for all interactive components

### Phase 4: Quality Assurance (Week 4)
1. Cross-route consistency testing
2. Design system compliance audit
3. User experience testing and refinement

---

This guide provides everything needed to bring the Customer Service, Operations, Marketing, and HR routes up to the same professional quality as the Sales and Finance routes. Follow the templates, implement the components systematically, and maintain consistency with the established design patterns.