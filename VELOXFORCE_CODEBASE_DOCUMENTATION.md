# Veloxforce Website - Comprehensive Codebase Documentation

## Project Overview

**Veloxforce** is a high-performance Next.js website for a hybrid AI-human automation services company. The platform showcases Service-as-Software solutions that transform business processes, featuring an interactive AI audit tool, comprehensive service pages, and conversion-optimized user flows.

### Core Functionality
- **Service-as-Software Marketing**: Educates prospects about delegation-based automation vs traditional software
- **AI Self-Audit Tool**: Interactive quiz that analyzes business processes and generates personalized ROI reports
- **Lead Generation**: Multi-step conversion funnels with progressive disclosure and trust-building elements
- **Performance-First Architecture**: Mobile-optimized, sub-2s loading times, 95+ Lighthouse scores

### Technology Stack
- **Framework**: Next.js 14+ with App Router
- **Frontend**: React 18+, TypeScript 5+, Tailwind CSS 3+
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Animation**: Framer Motion 12+ (performance-conscious)
- **Forms**: React Hook Form + Zod validation
- **Backend**: Next.js API Routes, Supabase PostgreSQL
- **Email**: Resend service with custom templates
- **Analytics**: Google Analytics 4 with custom event tracking
- **Icons**: Lucide React (exclusive icon library)

### Key Dependencies
```json
{
  "next": "14.1.0",
  "react": "^18.2.0",
  "typescript": "^5",
  "tailwindcss": "^3.4.17",
  "@supabase/supabase-js": "^2.49.8",
  "framer-motion": "^12.12.1",
  "react-hook-form": "^7.56.4",
  "zod": "^3.25.7",
  "lucide-react": "^0.511.0",
  "resend": "^4.5.1"
}
```

## System Architecture

### Application Structure
```
src/
├── app/                    # Next.js App Router pages
│   ├── api/               # Backend API routes
│   ├── page.tsx           # Landing page (Service-as-Software focus)
│   ├── our-approach/      # Methodology explanation
│   ├── solutions/         # Service offerings
│   ├── tools/             # Interactive tools (AI audit)
│   └── layout.tsx         # Root layout with analytics
├── components/            # Reusable UI components
│   ├── sections/          # Page-specific sections
│   ├── ui/               # Design system components
│   ├── layout/           # Layout components
│   ├── forms/            # Form components
│   └── tools/            # Tool-specific components
├── lib/                  # Utility functions
├── config/               # Configuration files
├── types/                # TypeScript type definitions
└── hooks/                # Custom React hooks
```

### Data Flow Architecture

**Frontend → API → Database → Email Service**

1. **User Interaction**: Forms, quiz responses, CTA clicks
2. **Client-Side Processing**: Validation, scoring, real-time calculations
3. **API Layer**: Next.js API routes handle data persistence and email sending
4. **Database**: Supabase PostgreSQL stores audit submissions and client data
5. **Email Service**: Resend sends personalized audit reports and notifications

### Component Hierarchy

**Layout Components**:
- `MainLayout` → `Header` + `main` + `Footer`
- `Section` → Standardized spacing and background system
- `Container` → Responsive width constraints

**Page Components**:
- Landing Page: 6 main sections (Hero → Differentiation → Proof → ROI → Action)
- Our Approach: Methodology deep-dive with process visualization
- Solutions: Service offerings with challenge-solution mapping
- Tools: Interactive AI audit with multi-phase quiz

## User Flows

### Primary User Journey: Service-as-Software Education

**Step 1: Landing Page Discovery**
- User arrives via marketing campaigns or organic search
- Hero section presents "Stop Buying Software. Start Receiving Outcomes"
- Immediate differentiation from traditional SaaS/automation

**Step 2: Concept Understanding**
- Service Differentiation section explains the three options: Software, Services, Service-as-Software
- Gmail analogy helps users understand the delegation model
- Proof section provides industry validation and failure statistics

**Step 3: Personal ROI Assessment**
- ROI Calculator section with interactive elements
- Path Selection offers two routes: "Calculate ROI" or "Learn More"
- AI Self-Audit Tool provides personalized analysis

**Step 4: Conversion**
- Email capture for audit results
- Personalized report delivery via email
- Follow-up sequences based on qualification score

### AI Self-Audit Tool Flow

**Phase 1: Problem Identification (2 minutes)**
```
Process Name Input → Biggest Pain Point → Volume Assessment
```

**Phase 2: Impact Quantification (3 minutes)**
```
Resource Cost → Executive Time → Growth Limitations → Error Impact
```

**Phase 3: Readiness Assessment (2 minutes)**
```
Process Standardization → Decision Authority → ROI Timeline
```

**Phase 4: Solution Alignment (1 minute)**
```
Ideal Timeline → Solution Criteria → Optional Enhancements
```

**Results & Follow-up**:
- Real-time scoring algorithm
- Personalized email report generation
- Lead qualification and routing

### Technical User Flow Example

**Audit Tool Submission Process**:

1. **Frontend Validation**:
   ```typescript
   // Real-time validation with Zod schemas
   const validateCurrentQuestion = (): boolean => {
     const value = answers[currentQuestion.id as keyof QuizAnswers]
     if (currentQuestion.required && !value) {
       setErrors({ [currentQuestion.id]: 'This question is required' })
       return false
     }
     return true
   }
   ```

2. **API Processing**:
   ```typescript
   // /api/submit-quiz/route.ts
   POST /api/submit-quiz
   → Validate submission data
   → Upsert client record in Supabase
   → Create quiz submission record
   → Store individual answers
   → Trigger AI analysis (future)
   ```

3. **Database Operations**:
   ```sql
   -- Client data upsert
   INSERT INTO audit_clients (email, name, company_name)
   ON CONFLICT (email) DO UPDATE SET updated_at = NOW()
   
   -- Quiz submission
   INSERT INTO audit_quiz_submissions (client_id, process_name, calculated_score)
   
   -- Individual answers
   INSERT INTO audit_quiz_answers (submission_id, question_id, answer_value)
   ```

4. **Email Generation**:
   ```typescript
   // /api/send-audit-email/route.ts
   → Generate personalized report content
   → Send via Resend service
   → Track delivery status
   ```

## Core Modules/Components

### 1. Design System (`src/components/ui/`)

**Purpose**: Centralized component library ensuring visual consistency

**Key Components**:
- `Button`: Primary/secondary CTAs with hover animations
- `Card`: Traditional vs Advantage card variants (40/60 visual weight)
- `Typography`: Heading and Text components with responsive sizing
- `Icon`: Lucide React wrapper with 90/10 color distribution rule

**Example Usage**:
```typescript
// Advantage card with enhanced gradient
<div className="velox-card-advantage-enhanced">
  <Icon name="CheckCircle" className="velox-icon-accent-md" />
  <Heading level="3">Service-as-Software Benefits</Heading>
</div>
```

### 2. Section System (`src/components/sections/`)

**Purpose**: Page-building blocks with standardized layouts and backgrounds

**Background System**:
```css
/* Gradual transitions between sections */
.velox-section-white-to-light {
  background: linear-gradient(to bottom,
    #FFFFFF 0%, #FFFFFF 70%, #F7F9FC 100%
  );
}
```

**Key Sections**:
- `HeroTransformationSection`: Landing page hero with before/after visualization
- `ServiceDifferentiationSection`: Three-option comparison (Software/Services/Service-as-Software)
- `ProofSection`: Industry statistics and validation
- `ROICalculatorSection`: Interactive cost-benefit analysis

### 3. AI Audit Tool (`src/components/tools/audit/`)

**Architecture**: Multi-phase quiz with progressive disclosure

**Core Components**:
- `AuditQuiz`: Main orchestrator component
- `QuestionRenderer`: Dynamic question type rendering
- `ProgressTracker`: Visual progress indication
- `ResultsDisplay`: Personalized report generation

**Scoring Algorithm** (`src/lib/audit-scoring.ts`):
```typescript
export function generateResultsData(answers: QuizAnswers): ResultsData {
  // Volume scoring (0-2 points)
  const volumeScore = calculateVolumeScore(answers.q2_volume)
  
  // Time impact scoring (0-2 points)  
  const timeScore = calculateTimeScore(answers.q3_teamTimeWeekly)
  
  // Personal time scoring (0-2 points)
  const personalTimeScore = calculatePersonalTimeScore(answers.q4_personalTime)
  
  // Total qualification score
  const totalScore = volumeScore + timeScore + personalTimeScore + ...
  
  // Categorization
  const category = totalScore >= 8 ? 'Highly Qualified' : 
                  totalScore >= 5 ? 'Qualified' : 'Not Yet Ready'
}
```

### 4. Analytics System (`src/components/analytics/`)

**Purpose**: Comprehensive user behavior tracking

**Components**:
- `AnalyticsProvider`: Global analytics context
- `CTATracker`: Button click tracking
- `SectionTracker`: Viewport visibility tracking
- `FormTracker`: Form interaction analytics

**Implementation**:
```typescript
// Custom event tracking
trackEvent('quiz_question_completed', {
  question_id: currentQuestion?.id,
  phase: currentPhase?.id,
  answer: answers[currentQuestion.id]
})
```

### 5. Email System (`src/app/api/send-audit-email/`)

**Purpose**: Automated personalized report delivery

**Flow**:
1. Generate custom report content based on quiz answers
2. Create HTML email template with branding
3. Send via Resend service with tracking
4. Log delivery status for follow-up

## Feature Map

### Landing Page Features

**Hero Transformation Section**:
- **Files**: `src/components/sections/home/hero-transformation-section.tsx`
- **Functionality**: Before/after visualization, primary CTAs
- **Data Flow**: Static content → CTA clicks → Analytics tracking
- **Configuration**: CTA destinations in `src/config/navigation.ts`

**Service Differentiation**:
- **Files**: `src/components/sections/home/service-differentiation-section.tsx`
- **Functionality**: Three-option comparison with interactive elements
- **Example**: Software (tools) vs Services (people) vs Service-as-Software (outcomes)

**ROI Calculator**:
- **Files**: `src/components/sections/home/roi-calculator-section.tsx`
- **Functionality**: Interactive cost-benefit analysis
- **Data Flow**: User inputs → Real-time calculations → Results display

### AI Audit Tool Features

**Multi-Phase Quiz**:
- **Entry Point**: `/tools/business-audit`
- **Configuration**: `src/config/audit-quiz.ts` (425 lines of question definitions)
- **Data Flow**: 
  ```
  User Input → Validation → Auto-save → Scoring → Email Capture → Report Generation
  ```

**Real-Time Scoring**:
- **Algorithm**: `src/lib/audit-scoring.ts`
- **Inputs**: Process volume, time investment, standardization level, urgency
- **Outputs**: Qualification score (0-12), category, ROI projections

**Email Report Generation**:
- **API**: `/api/send-audit-email`
- **Template**: Dynamic HTML with personalized recommendations
- **Delivery**: Resend service with tracking

### Navigation & Routing

**Main Navigation**:
```typescript
// src/config/navigation.ts
export const mainNavigation = [
  { label: "Solutions", href: "/solutions" },
  { label: "How It Works", href: "/our-approach" },
  { label: "Success Stories", href: "/case-studies" },
  { label: "ROI Calculator", href: "/tools/business-audit" },
  { label: "Get Started", href: "/contact" }
]
```

**Page Routing**:
- `/` - Landing page (Service-as-Software education)
- `/our-approach` - Methodology explanation
- `/solutions` - Service offerings with challenge mapping
- `/tools/business-audit` - AI audit tool
- `/contact` - Contact forms and booking

## Code Navigation Guide

### Directory Structure Explanation

**`src/app/`** - Next.js App Router pages
- Each folder represents a route
- `page.tsx` files define page components
- `layout.tsx` files define nested layouts
- `api/` folder contains backend endpoints

**`src/components/`** - Reusable components organized by purpose
- `ui/` - Design system primitives
- `sections/` - Page-building blocks
- `layout/` - Layout components (Header, Footer, Container)
- `forms/` - Form components with validation
- `tools/` - Interactive tool components

**`src/lib/`** - Utility functions and business logic
- `utils.ts` - General utilities (cn, formatCurrency, etc.)
- `audit-scoring.ts` - Quiz scoring algorithm
- `analytics.ts` - Analytics helper functions
- `fonts.ts` - Font configuration

**`src/config/`** - Configuration files
- `site.ts` - Site metadata and contact info
- `navigation.ts` - Menu structure
- `audit-quiz.ts` - Quiz questions and phases

### Key File Locations

**Main Pages**:
- Landing page: `src/app/page.tsx`
- Our Approach: `src/app/our-approach/page.tsx`
- Solutions: `src/app/solutions/page.tsx`
- AI Audit Tool: `src/app/tools/business-audit/page.tsx`

**Core Components**:
- Design system: `src/components/ui/`
- Page sections: `src/components/sections/`
- Audit tool: `src/components/tools/audit/`

**Backend APIs**:
- Quiz submission: `src/app/api/submit-quiz/route.ts`
- Email sending: `src/app/api/send-audit-email/route.ts`

**Configuration**:
- Tailwind config: `tailwind.config.js`
- Next.js config: `next.config.js`
- TypeScript config: `tsconfig.json`

### File Naming Conventions

- **Components**: PascalCase with descriptive names (`HeroTransformationSection`)
- **Pages**: `page.tsx` for routes, `layout.tsx` for layouts
- **Utilities**: kebab-case for files (`audit-scoring.ts`)
- **Types**: kebab-case with `.ts` extension (`audit-tool.ts`)
- **Styles**: `globals.css` for global styles, component-specific styles inline

## Development Workflows

### Build Process
```bash
# Development
npm run dev          # Start development server on localhost:3000

# Production
npm run build        # Build optimized production bundle
npm run start        # Start production server

# Code Quality
npm run lint         # ESLint code checking
```

### Testing Strategy
- **Component Testing**: Manual testing with development server
- **Performance Testing**: Lighthouse audits (target: 95+ score)
- **Cross-browser Testing**: Chrome, Firefox, Safari, Edge
- **Mobile Testing**: Responsive design testing on actual devices

### Deployment Process
1. **Development**: Local development with hot reload
2. **Staging**: Vercel preview deployments for each PR
3. **Production**: Automatic deployment to Vercel on main branch merge
4. **Monitoring**: Analytics tracking and error monitoring

### Common Development Tasks

**Adding a New Page**:
1. Create folder in `src/app/`
2. Add `page.tsx` with page component
3. Update navigation in `src/config/navigation.ts`
4. Add route to sitemap if needed

**Creating a New Component**:
1. Add component file in appropriate `src/components/` subfolder
2. Follow naming conventions (PascalCase)
3. Use TypeScript interfaces for props
4. Apply design system classes

**Modifying the Audit Tool**:
1. Update questions in `src/config/audit-quiz.ts`
2. Modify scoring logic in `src/lib/audit-scoring.ts`
3. Update email templates in API routes
4. Test end-to-end flow

## Extension Points

### Adding New Quiz Questions

**Configuration Location**: `src/config/audit-quiz.ts`

**Question Structure**:
```typescript
{
  id: 'q_new_question',
  title: 'Question title with [PROCESS_NAME] placeholder',
  type: 'radio' | 'checkbox' | 'text' | 'slider',
  required: true,
  options: [
    { value: 'option1', label: 'Option 1', score: 2 },
    { value: 'option2', label: 'Option 2', score: 1 }
  ]
}
```

**Scoring Integration**: Update `src/lib/audit-scoring.ts` to include new question in calculations.

### Adding New Page Sections

**Section Template**:
```typescript
// src/components/sections/[area]/new-section.tsx
import { Section } from "@/components/layout/section"
import { Container } from "@/components/layout/container"

export function NewSection() {
  return (
    <Section background="white-to-light" padding="xl">
      <Container>
        {/* Section content */}
      </Container>
    </Section>
  )
}
```

### Extending the Design System

**Adding New Component Variants**:
1. Define CSS classes in `src/app/globals.css`
2. Create component in `src/components/ui/`
3. Export from appropriate index file
4. Document usage patterns

### API Extensions

**Adding New Endpoints**:
1. Create route file in `src/app/api/[endpoint]/route.ts`
2. Implement HTTP methods (GET, POST, etc.)
3. Add TypeScript types for request/response
4. Include error handling and validation

## Database Schema

### Tables Overview

**`audit_clients`** - Client information
```sql
CREATE TABLE audit_clients (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    email text UNIQUE NOT NULL,
    phone_number text,
    name text,
    company_name text,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now()
);
```

**`audit_quiz_submissions`** - Quiz completion records
```sql
CREATE TABLE audit_quiz_submissions (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    client_id uuid NOT NULL REFERENCES audit_clients(id),
    process_name_input text NOT NULL,
    calculated_score integer NOT NULL,
    result_category text NOT NULL,
    ai_analysis_status text DEFAULT 'pending',
    submitted_at timestamp with time zone DEFAULT now()
);
```

**`audit_quiz_answers`** - Individual question responses
```sql
CREATE TABLE audit_quiz_answers (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    submission_id uuid NOT NULL REFERENCES audit_quiz_submissions(id),
    question_id text NOT NULL,
    answer_value text NOT NULL,
    answer_score integer,
    created_at timestamp with time zone DEFAULT now()
);
```

### Data Relationships

```
audit_clients (1) → (many) audit_quiz_submissions
audit_quiz_submissions (1) → (many) audit_quiz_answers
```

### Migration System

**Location**: `supabase/migrations/`
**Current Migration**: `20241220000001_create_audit_tool_tables.sql`

**Adding New Migrations**:
1. Create new SQL file with timestamp prefix
2. Include both schema changes and data migrations
3. Test locally before deploying
4. Apply via Supabase CLI or dashboard

## Common Patterns & Conventions

### Coding Standards

**TypeScript Usage**:
- Strict mode enabled
- Interface definitions for all props
- Proper typing for API responses
- Generic types for reusable components

**Component Patterns**:
```typescript
// Standard component structure
interface ComponentProps {
  title: string
  optional?: boolean
}

export function Component({ title, optional = false }: ComponentProps) {
  return (
    <div className="velox-card">
      <Heading level="2">{title}</Heading>
      {optional && <Text>Optional content</Text>}
    </div>
  )
}
```

### Error Handling

**Frontend Error Handling**:
- Form validation with Zod schemas
- User-friendly error messages
- Graceful degradation for failed API calls

**Backend Error Handling**:
```typescript
try {
  // API operation
  const result = await operation()
  return NextResponse.json({ success: true, data: result })
} catch (error) {
  console.error('Operation failed:', error)
  return NextResponse.json(
    { success: false, error: 'Operation failed' },
    { status: 500 }
  )
}
```

### Performance Patterns

**Image Optimization**:
```typescript
import Image from 'next/image'

<Image
  src="/images/hero.jpg"
  alt="Description"
  width={800}
  height={600}
  priority={true}  // For above-the-fold images
  placeholder="blur"
/>
```

**Code Splitting**:
```typescript
// Dynamic imports for large components
const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <Skeleton />,
  ssr: false
})
```

### Styling Conventions

**Design System Classes**:
- `velox-*` prefix for custom design system classes
- Tailwind utilities for spacing and layout
- CSS custom properties for colors and themes

**Responsive Design**:
```typescript
// Mobile-first responsive classes
<div className="text-sm md:text-base lg:text-lg">
  Responsive text
</div>
```

## Learning Resources

### Next.js & React
- [Next.js Documentation](https://nextjs.org/docs) - Official Next.js guide
- [React Documentation](https://react.dev/) - Modern React patterns
- [Next.js App Router](https://nextjs.org/docs/app) - App Router specific features

### TypeScript
- [TypeScript Handbook](https://www.typescriptlang.org/docs/) - Complete TypeScript guide
- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/) - React-specific TypeScript patterns

### Styling & Design
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - Utility-first CSS framework
- [shadcn/ui Documentation](https://ui.shadcn.com/) - Component library usage
- [Radix UI Primitives](https://www.radix-ui.com/primitives) - Accessible component primitives

### Animation & Interactions
- [Framer Motion Documentation](https://www.framer.com/motion/) - Animation library
- [CSS Animation Performance](https://web.dev/animations-guide/) - Performance best practices

### Backend & Database
- [Supabase Documentation](https://supabase.com/docs) - Backend as a service
- [PostgreSQL Documentation](https://www.postgresql.org/docs/) - Database concepts
- [Resend Documentation](https://resend.com/docs) - Email service API

### Performance & SEO
- [Web.dev Performance](https://web.dev/performance/) - Performance optimization
- [Next.js Performance](https://nextjs.org/docs/advanced-features/measuring-performance) - Next.js specific optimizations
- [Core Web Vitals](https://web.dev/vitals/) - Google's performance metrics

### Business Context
- [Service-as-Software Concept](https://www.mckinsey.com/capabilities/operations/our-insights/the-future-of-work-in-technology) - McKinsey insights
- [Automation Failure Rates](https://www.gartner.com/en/newsroom/press-releases/2023-08-07-gartner-survey-reveals-80-percent-of-executives-think-automation-can-be-applied-to-any-business-decision) - Gartner research
- [B2B SaaS Conversion Optimization](https://blog.hubspot.com/marketing/conversion-rate-optimization-examples) - HubSpot best practices

This documentation provides a comprehensive foundation for understanding and working with the Veloxforce codebase. Each section includes practical examples and links to relevant resources for deeper learning.
