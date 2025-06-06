# Veloxforce Website - Comprehensive Codebase Documentation

## 1. Project Overview

### Core Functionality and Purpose
The Veloxforce website is a high-performance Next.js application designed to showcase and sell hybrid AI-human automation services to SMEs (Small and Medium Enterprises). The platform emphasizes "Service-as-Software" solutions that deliver guaranteed outcomes through a combination of AI technology and human expertise.

### Technology Stack
- **Core Framework**: Next.js 14+ with App Router for optimal performance
- **Frontend**: React 18+, TypeScript, Tailwind CSS
- **UI Components**: shadcn/ui with Radix UI primitives
- **Icons**: Lucide React
- **Animations**: Framer Motion (performance-conscious implementation)
- **Forms**: React Hook Form with Zod validation
- **Backend**: Next.js API Routes, Supabase integration
- **Analytics**: Google Analytics 4, Next SEO
- **Deployment**: Vercel (optimized hosting)

### Key Dependencies
```json
{
  "next": "14.1.0",
  "react": "^18.2.0",
  "typescript": "^5",
  "tailwindcss": "^3.4.17",
  "@supabase/supabase-js": "^2.49.8",
  "framer-motion": "^12.12.1",
  "lucide-react": "^0.511.0",
  "react-hook-form": "^7.56.4",
  "zod": "^3.25.7"
}
```

### Overall Architecture
The application follows a modern Next.js App Router architecture with:
- **Server Components** for data fetching and SEO optimization
- **Client Components** for interactive features and animations
- **API Routes** for form submissions and email handling
- **Component-based architecture** with reusable UI components
- **Type-safe development** with TypeScript throughout

## 2. System Architecture

### Component Hierarchy
```
MainLayout
├── Header (Navigation)
├── Page Content
│   ├── Sections (Home, Solutions, Approach)
│   ├── Tools (Service Quiz, Business Audit)
│   └── Forms (Contact, Booking)
└── Footer
```

### Data Flow
1. **Static Content**: Rendered server-side for optimal SEO and performance
2. **Interactive Elements**: Client-side components with state management
3. **Form Submissions**: API routes handle data processing and email sending
4. **Quiz System**: Multi-step form with dynamic routing based on department selection

### Design Patterns
- **Composition Pattern**: UI components built with shadcn/ui and Radix primitives
- **Container/Presentational Pattern**: Separation of logic and presentation
- **Provider Pattern**: Analytics and form tracking contexts
- **Factory Pattern**: Dynamic component rendering based on question types

## 3. User Flows

### Primary User Journey: Service Quiz
1. **Landing**: User arrives at `/tools/service-quiz`
2. **Introduction**: Value proposition and quiz overview
3. **Company Context**: Basic business information (3 questions)
4. **Department Selection**: Visual grid selection of focus area
5. **Department-Specific Questions**: Dynamic routing based on selection
   - Sales Route: Lead generation, time investment, effectiveness
   - Finance Route: Process analysis, efficiency, team structure
   - Customer Service Route: Channels, response times, tools
6. **Business Impact Assessment**: Final questions about urgency and budget
7. **Contact Information**: Lead capture form
8. **Results Display**: Personalized analysis and recommendations

### Secondary User Flows
- **Homepage Navigation**: Hero → Problem → Solution → Proof → CTA
- **Solutions Exploration**: Overview → Specific service pages
- **Contact Process**: Multiple entry points → Contact form → Confirmation

## 4. Core Modules/Components

### Service Quiz System (`src/config/service-quiz.ts`)
**Purpose**: Comprehensive assessment tool for identifying automation opportunities

**Key Components**:
- `SERVICE_QUIZ_PHASES`: Opening context questions
- `SALES_ROUTE_PHASES`: Sales-specific assessment (164 lines)
- `FINANCE_ROUTE_PHASES`: Finance-specific assessment (220 lines)
- `CUSTOMER_SERVICE_ROUTE_PHASES`: Support-specific assessment (155 lines)
- `FINAL_QUESTIONS`: Business impact and contact capture

**Question Types Supported**:
- `radio`: Single selection
- `checkbox`: Multiple selection with optional limits
- `visual_grid`: Department selection with icons
- `multi_time_breakdown`: Time investment analysis
- `team_structure`: Team composition inputs
- `transaction_volumes`: Volume-based assessments
- `contact_form`: Lead capture

**Example Usage**:
```typescript
// Department selection question
{
  id: 'department_focus',
  type: 'visual_grid',
  visualOptions: [
    {
      value: 'sales',
      label: 'Sales & Business Development',
      icon: 'TrendingUp',
      color: 'blue'
    }
  ]
}
```

### Enhanced Service Quiz Component (`src/components/tools/audit/enhanced-working-service-quiz.tsx`)
**Purpose**: Main quiz interface with step management and question rendering

**Key Features**:
- Multi-step navigation with progress tracking
- Dynamic question rendering based on type
- Real-time validation and error handling
- Responsive design with mobile optimization

**State Management**:
```typescript
const [currentStep, setCurrentStep] = useState<QuizStep>('opening')
const [selectedDepartment, setSelectedDepartment] = useState<string>("")
const [answers, setAnswers] = useState<Record<string, any>>({})
```

### Question Renderer (`src/components/tools/audit/service-question-renderer.tsx`)
**Purpose**: Renders different question types with appropriate UI components

**Supported Renderers**:
- Visual grid with animated cards
- Time breakdown matrices
- Team structure inputs
- Percentage sliders
- Contact forms

## 5. Feature Map

### Homepage Features
- **Hero Section**: Value proposition with CTA
- **Social Proof**: Client testimonials and metrics
- **Problem Recognition**: Pain point identification
- **Solution Presentation**: Service pillars explanation
- **Process Overview**: 3-step methodology
- **Case Studies**: Success story previews

### Service Quiz Tool
- **Multi-department Assessment**: Sales, Finance, Customer Service
- **Dynamic Question Flow**: Adaptive based on selections
- **Real-time Calculations**: Time and cost savings estimates
- **Results Analysis**: Personalized recommendations
- **Lead Capture**: Contact information collection

### Solutions Pages
- **Service Overview**: Main services presentation
- **Vertical-specific Content**: Industry-focused solutions
- **Process Deep Dives**: Detailed methodology explanations

## 6. Code Navigation Guide

### Directory Structure
```
src/
├── app/                    # Next.js App Router pages
│   ├── tools/service-quiz/ # Service quiz implementation
│   ├── solutions/          # Solutions pages
│   └── api/               # API routes
├── components/            # Reusable components
│   ├── ui/               # Base UI components
│   ├── tools/audit/      # Quiz-specific components
│   ├── sections/         # Page sections
│   └── layout/           # Layout components
├── config/               # Configuration files
│   └── service-quiz.ts   # Quiz questions and logic
├── types/                # TypeScript type definitions
└── lib/                  # Utility functions
```

### Key File Locations
- **Quiz Configuration**: `src/config/service-quiz.ts`
- **Quiz Implementation**: `src/components/tools/audit/enhanced-working-service-quiz.tsx`
- **Type Definitions**: `src/types/audit-tool.ts`
- **API Endpoints**: `src/app/api/`
- **Page Components**: `src/app/[page]/page.tsx`

### File Naming Conventions
- **Pages**: `page.tsx` (App Router convention)
- **Components**: `kebab-case.tsx`
- **Types**: `kebab-case.ts`
- **Configs**: `kebab-case.ts`

## 7. Development Workflows

### Build Process
```bash
npm run dev      # Development server
npm run build    # Production build
npm run start    # Production server
npm run lint     # ESLint checking
```

### Component Development
1. Create component in appropriate directory
2. Export from index file if needed
3. Add TypeScript interfaces
4. Implement responsive design
5. Add to Storybook (if applicable)

### Quiz Question Addition
1. Add question to appropriate phase in `service-quiz.ts`
2. Update TypeScript types if needed
3. Test question rendering
4. Verify data flow to results

## 8. Extension Points

### Adding New Quiz Routes
1. **Create Route Configuration**:
```typescript
export const NEW_ROUTE_PHASES: QuizPhase[] = [
  {
    id: 'new_route_phase',
    title: 'New Route Assessment',
    questions: [/* questions */]
  }
]
```

2. **Update Department Routes**:
```typescript
export const DEPARTMENT_ROUTES = {
  // existing routes...
  new_department: NEW_ROUTE_PHASES
}
```

3. **Add Visual Option**:
```typescript
{
  value: 'new_department',
  label: 'New Department',
  icon: 'NewIcon',
  color: 'purple'
}
```

### Adding New Question Types
1. **Update Type Definition**:
```typescript
type QuestionType = 'existing_types' | 'new_type'
```

2. **Implement Renderer**:
```typescript
case 'new_type':
  return <NewQuestionComponent />
```

3. **Add Validation Logic**:
```typescript
const validateNewType = (value: any) => {
  // validation logic
}
```

## 9. API Documentation

### Internal APIs

#### Quiz Submission API (`/api/submit-quiz`)
**Purpose**: Handles service quiz form submissions and email notifications

**Request Format**:
```typescript
POST /api/submit-quiz
Content-Type: application/json

{
  "contactDetails": {
    "full_name": "John Doe",
    "business_email": "john@company.com",
    "company": "Company Name",
    "phone": "+1234567890",
    "contact_preference": "email"
  },
  "quizAnswers": {
    "company_size": "11-25",
    "department_focus": "sales",
    // ... other answers
  },
  "departmentRoute": "sales",
  "summary": {
    "selectedDepartment": "Sales & Business Development",
    "calculatedScore": 85,
    "estimatedSavings": {
      "timePerWeek": 20,
      "costPerWeek": 2000,
      "annualSavings": 104000
    }
  }
}
```

**Response Format**:
```typescript
{
  "success": true,
  "message": "Quiz submitted successfully",
  "submissionId": "uuid"
}
```

#### Email Testing API (`/api/test-email`)
**Purpose**: Development endpoint for testing email functionality

#### Audit Email API (`/api/send-audit-email`)
**Purpose**: Handles business audit form submissions

### External APIs
- **Supabase**: Database operations and authentication
- **Resend**: Email delivery service
- **Google Analytics**: User behavior tracking

## 10. Database Schema

### Supabase Integration
The application uses Supabase for data persistence with the following key tables:

#### Quiz Submissions Table
```sql
CREATE TABLE quiz_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  contact_details JSONB NOT NULL,
  quiz_answers JSONB NOT NULL,
  department_route TEXT NOT NULL,
  calculated_score INTEGER,
  estimated_savings JSONB,
  submission_source TEXT DEFAULT 'website'
);
```

#### Contact Forms Table
```sql
CREATE TABLE contact_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  message TEXT,
  form_type TEXT DEFAULT 'general'
);
```

### Data Models
```typescript
interface ServiceQuizSubmission {
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
```

## 11. Common Patterns & Conventions

### Coding Standards
- **TypeScript**: Strict mode enabled, explicit typing required
- **Component Structure**: Props interface, main component, export
- **File Organization**: Feature-based directory structure
- **Naming**: PascalCase for components, camelCase for functions

### Error Handling
```typescript
// API Route Error Handling
try {
  const result = await processSubmission(data)
  return NextResponse.json({ success: true, data: result })
} catch (error) {
  console.error('Submission error:', error)
  return NextResponse.json(
    { success: false, error: 'Submission failed' },
    { status: 500 }
  )
}
```

### Form Validation Pattern
```typescript
// Using Zod for validation
const contactSchema = z.object({
  full_name: z.string().min(2, 'Name required'),
  business_email: z.string().email('Valid email required'),
  company: z.string().min(2, 'Company name required')
})

// React Hook Form integration
const form = useForm<ContactDetails>({
  resolver: zodResolver(contactSchema)
})
```

### Animation Patterns
```typescript
// Framer Motion best practices
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

// Performance-conscious animations
<motion.div
  {...fadeInUp}
  className="will-change-transform"
>
  Content
</motion.div>
```

### Responsive Design Pattern
```typescript
// Mobile-first Tailwind classes
<div className="
  grid grid-cols-1 gap-4
  md:grid-cols-2 md:gap-6
  lg:grid-cols-3 lg:gap-8
">
```

## 12. Learning Resources

### Next.js 14 App Router
- [Official Next.js Documentation](https://nextjs.org/docs)
- [App Router Migration Guide](https://nextjs.org/docs/app/building-your-application/upgrading/app-router-migration)
- [Server Components vs Client Components](https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns)

### TypeScript Best Practices
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)
- [Zod Validation Library](https://zod.dev/)

### UI Component Libraries
- [shadcn/ui Documentation](https://ui.shadcn.com/)
- [Radix UI Primitives](https://www.radix-ui.com/primitives)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

### Animation and Performance
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [Web Performance Best Practices](https://web.dev/performance/)
- [Core Web Vitals](https://web.dev/vitals/)

### Form Handling
- [React Hook Form Documentation](https://react-hook-form.com/)
- [Form Validation with Zod](https://react-hook-form.com/get-started#SchemaValidation)

### Database and Backend
- [Supabase Documentation](https://supabase.com/docs)
- [Next.js API Routes](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)

## Focus: Service Quiz Configuration (`src/config/service-quiz.ts`)

### Architecture Overview
The service quiz system is built around a phase-based architecture where each department has its own assessment flow:

1. **Opening Phase**: Universal business context questions
2. **Department Selection**: Visual grid for choosing focus area
3. **Department-Specific Routes**: Tailored questions for each department
4. **Final Phase**: Business impact and contact capture

### Question Type System
The quiz supports 15+ question types, each with specific rendering and validation logic:

#### Basic Question Types
- `radio`: Single selection with optional benchmarks
- `checkbox`: Multiple selection with optional limits
- `textarea`: Free-form text input

#### Advanced Question Types
- `visual_grid`: Department selection with animated cards
- `multi_time_breakdown`: Complex time investment analysis
- `team_structure`: Team composition with dropdowns and booleans
- `transaction_volumes`: Volume-based assessments
- `approval_analysis`: Workflow analysis
- `percentage_sliders`: Must-total-100% breakdowns
- `contact_form`: Lead capture with validation

### Department Routes Deep Dive

#### Sales Route (324 lines)
**Focus**: Lead generation, time investment, and sales effectiveness
**Key Assessments**:
- Lead generation methods and conversation volumes
- Time breakdown per prospect (research, outreach, follow-up, CRM)
- Team structure and hourly costs
- Conversion rates and scaling obstacles
- Current tools and transformation priorities

**Example Complex Question**:
```typescript
{
  id: 'time_breakdown_per_prospect',
  title: 'Breaking down the sales process - for every 10 qualified prospects, how much time does your team invest?',
  type: 'multi_time_breakdown',
  timeBreakdowns: [
    {
      category: 'Research & Qualification',
      options: [
        { value: 'less-than-2', label: 'Less than 2 hours' },
        { value: '2-5', label: '2-5 hours' },
        // ... more options
      ]
    }
    // ... more categories
  ],
  realTimeCalculation: true,
  calculationText: "Total investment per prospect: [X] hours (€[Y] cost)"
}
```

#### Finance Route (220 lines)
**Focus**: Financial process efficiency and automation potential
**Key Assessments**:
- Main time consumers (AP, AR, expenses, reporting)
- Transaction volumes and processing times
- Approval workflows and error rates
- System complexity and team structure
- Transformation priorities

#### Customer Service Route (155 lines)
**Focus**: Customer communication efficiency and service quality
**Key Assessments**:
- Communication channels and inquiry volumes
- Inquiry type breakdown with percentage sliders
- Response times and repetitiveness analysis
- Team structure and tools
- Service obstacles and improvement priorities

### Data Flow and Calculations
The quiz system includes real-time calculations for:
- Time investment per process
- Cost calculations based on team structure
- ROI projections and payback periods
- Automation potential scoring

### Extension Strategy
To add new departments:
1. Create new route phases following existing patterns
2. Add to `DEPARTMENT_ROUTES` mapping
3. Include visual option in department selection
4. Implement any new question types needed
5. Update results calculation logic

The modular design allows for easy expansion while maintaining consistency across all assessment routes.
