# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
```bash
npm run dev      # Start development server on http://localhost:3000
npm run build    # Build production application
npm run start    # Start production server
npm run lint     # Run ESLint with Next.js config
```

### Testing & API Verification
```bash
# API and Integration Testing
node scripts/test-api-integration.js         # Test quiz submission API with sample data
node scripts/test-report-generation.js       # Test AI report generation
node scripts/test-end-to-end-report.js      # Full end-to-end report testing
node scripts/test-direct-report-only.js     # Test report generation in isolation
node scripts/test-question-mapper.js        # Test quiz question mapping logic
node scripts/test-pdf.js                    # Test PDF generation

# Verification Scripts
node scripts/verify-speed-insights.js       # Verify Vercel Speed Insights integration
```

### Design Analysis & Tools
```bash
node scripts/design-analysis.js                   # Run Puppeteer design analysis and take screenshots
node scripts/screenshot.js <page>                 # Take screenshots of specific pages
node scripts/capture-all-pages.js                 # Screenshot all pages
node scripts/analyze-solutions-page.js            # Analyze solutions page specifically
node scripts/puppeteer-screenshot-workflow.js     # Complete screenshot workflow
node scripts/verify-revisions.js                  # Verify design revisions
node scripts/extract-pages-to-xml.js              # Extract page structure to XML
node scripts/split-landing-screenshot.js          # Split landing page screenshots
node scripts/split-screenshots-compressed.js      # Compress and split screenshots
```

### Debug & Testing Tools
```bash
node scripts/test-debug-logging.js                # Test debug logging system for quiz/report flow
```

### Debug Logging System

The application includes a comprehensive debug logging system that captures all inputs and outputs during the quiz submission and report generation process.

#### Debug Directory Structure
```
debug-logs/
├── 2024-12-20_14-30-15_CompanyName/
│   ├── 1_input_quiz_data.json          # Quiz answers, contact details, department route
│   ├── 2_input_website_data.json       # Scraped website content, sitemap analysis
│   ├── 3_ai_prompts.json               # Exact prompts sent to AI models
│   ├── 4_ai_responses.json             # Raw responses from Gemini & Sonnet
│   ├── 5_business_analysis.json        # Business report content (text/markdown)
│   ├── 6_pdf_report_data.json          # Data used for PDF generation
│   ├── 7_email_data.json               # Email content and metadata
│   └── debug_log.txt                   # Timing summary and session overview
```

#### Usage
- Debug logging is automatically enabled for all quiz submissions
- Each submission creates a timestamped folder with company name
- All sensitive data is automatically added to `.gitignore`
- Console output includes real-time progress with timing information
- Use the test script to verify functionality: `node scripts/test-debug-logging.js`

### Environment Setup
```bash
# Required Environment Variables
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
RESEND_API_KEY=your_resend_api_key
OPENROUTER_API_KEY=your_openrouter_api_key

# Optional Configuration
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_GA_TRACKING_ID=your_ga_tracking_id
```

## Architecture Overview

This is a Next.js 14.1.0 application using the App Router with a comprehensive design system for VeloxForce, a business automation consultancy offering "Service-as-Software" solutions.

### Core Technology Stack
- **Next.js 14.1.0** with App Router (Node.js 18.x)
- **TypeScript 5.x** with strict mode
- **Tailwind CSS 3.4.17** with custom design tokens
- **shadcn/ui** components based on Radix UI
- **Supabase 2.49.8** for database and authentication
- **Resend 4.5.1** for transactional emails
- **Framer Motion 12.12.1** for animations
- **Lucide React 0.511.0** for icons
- **React Hook Form 7.56.4** + **Zod 3.25.7** for forms
- **date-fns 4.1.0** for date handling
- **Vercel Speed Insights** for performance monitoring

### Database Schema

Three main tables in Supabase with Row Level Security (RLS):
- `audit_clients`: Customer information with contact details
- `audit_quiz_submissions`: Quiz tracking with AI analysis status
- `audit_quiz_answers`: Individual responses with enriched question text

Database migrations are located in `/supabase/migrations/` and should be run through Supabase Dashboard or CLI.

### Design System Implementation

The design system principles are implemented throughout the codebase and define:

1. **Color System**: Centralized CSS custom properties in `globals.css`
   - Primary: Deep Blue (#0A2A4F, #002547)
   - Accent: Electric Blue (#2563EB, #18A0FB)
   - NO red, yellow, amber, or other "cheap" colors
   - Gradient system with subtle blue transitions

2. **Icon System**: Exclusively use Lucide React icons
   - **90/10 color rule**: 90% gray-700, 10% blue-600 for strategic emphasis
   - Import from `lucide-react` package only
   - Never use emoji icons - replace with proper Lucide components
   - Target ratio: ~10-15% blue icons, rest gray

3. **Typography**: Font hierarchy using `next/font/local`
   - Heading: GeneralSans
   - Body: SupremeLLWeb
   - Code: Newsreader
   - Strategic font weight emphasis: Use `font-semibold` and `font-bold` sparingly for key concepts

4. **Component Patterns**:
   - All UI components in `/src/components/ui/` follow shadcn/ui patterns
   - Use `cn()` utility for className merging
   - Implement variants with `class-variance-authority`

### Key Architectural Decisions

1. **Path Aliases**: Use `@/` for imports from `src/` directory

2. **API Routes**: Located in `/src/app/api/`
   - `submit-quiz`: Handles audit tool submissions with debug logging
   - `send-audit-email`: Sends customized ROI analysis emails
   - `generate-report`: AI-powered report generation using Gemini and Claude
   - `test-email`: Development endpoint for testing email functionality
   - `test-pdf`: PDF generation testing endpoint

3. **Common Utilities** (`/src/lib/utils.ts`):
   - `cn()`: Class name merging with Tailwind
   - `formatDate()`, `formatCurrency()`, `formatPercentage()`: Formatting utilities
   - `calculateROI()`: ROI calculation logic
   - `debounce()`: Function debouncing
   - `truncateText()`, `isExternalLink()`: Text and link utilities

4. **Custom Hooks**:
   - `useAnalytics()`: Event tracking and analytics
   - `useIntersectionObserver()`: Intersection observer wrapper

5. **Configuration Files**:
   - `/src/config/audit-quiz.ts`: Main quiz configuration
   - `/src/config/service-quiz.ts`: Service selection quiz
   - `/src/config/navigation.ts`: Site navigation structure
   - `/src/config/site.ts`: Site metadata and SEO
   - `/src/config/blog.ts`: Blog configuration

6. **Form Handling Pattern**:
   ```typescript
   // Standard pattern using React Hook Form + Zod
   const form = useForm<FormData>({
     resolver: zodResolver(formSchema),
     defaultValues: { /* ... */ }
   })
   ```

7. **Animation Guidelines**:
   - Maximum 5 animations per viewport
   - Use `tailwindcss-animate` for simple transitions
   - Use Framer Motion for complex animations
   - Keep animations under 300ms

### Current Page Structure

#### Landing Page (`/src/app/page.tsx`) - 6 Section Flow:
1. **HeroTransformationSection** - Value proposition with transformation visual
2. **ServiceDifferentiationSection** - 3-column comparison (automation vs service vs Service-as-Software)
3. **AhaMomentSection** - Uber analogy with process examples
4. **ProofSection** - Industry validation and early adopters
5. **ROICalculatorSection** - Economics explanation (NO specific pricing)
6. **PathSelectionSection** - Two CTA paths (audit vs learn more)

#### How It Works Page (`/src/app/our-approach/page.tsx`) - 4 Phase Process:
1. **HeroSectionV2** - "Every Business Has Untapped Potential" 
2. **ROIAnalysisSection** - Phase 1: Financial analysis first
3. **CustomDevelopmentSection** - Phase 2: AI-accelerated development
4. **OngoingExcellenceSection** - Phase 4: Continuous operations

### Content Guidelines

#### Pricing Strategy:
- **NEVER** use specific prices (€5,000, €10K, etc.)
- **ALWAYS** use value-focused language:
  - "Investment scales with complexity"
  - "Pricing aligned with your savings" 
  - "Savings typically exceed investment within months"
  - "ROI timeline depends on process complexity"

#### Language Tone:
- **Respectful**: Acknowledge current success ("Your process has gotten you this far")
- **Forward-looking**: Focus on growth potential, not problems
- **Industry-validated**: Use MIT, Harvard Business Review data confidently
- **Partnership**: "When you grow, we grow. When you save, we succeed."

#### Forbidden Terms:
- ❌ "Your messy process" → ✅ "Your current process"
- ❌ "Your inefficient workflow" → ✅ "Your established workflow"  
- ❌ "We run it forever" → ✅ "We handle the ongoing operations"
- ❌ "Your broken systems" → ✅ "Your existing systems"

#### Approved Industry Claims:
- ✅ "MIT Technology Review reports AI makes custom development 10x faster"
- ✅ "Harvard Business Review shows 70-90% cost reduction with AI"
- ✅ "What took years now takes months. What took months now takes weeks."
- ✅ "AI capabilities double every year"

### Deployment & Performance

#### Vercel Configuration:
- Build command: `npm run build`
- API route timeouts: 30 seconds for quiz/email endpoints
- Automatic HTTPS and edge caching
- Speed Insights enabled for Core Web Vitals monitoring

#### Performance Guidelines:
- Implement proper loading states with Suspense boundaries
- Use dynamic imports for heavy components
- Optimize images with WebP/AVIF formats
- Lazy load below-the-fold content

### Security & Best Practices

1. **Type Safety**: TypeScript strict mode is enabled
   - Define proper types for all props and state
   - Use type inference where appropriate
   - Avoid `any` type

2. **Security**:
   - All database tables have Row Level Security (RLS) enabled
   - API routes include Zod validation
   - Environment variables properly segregated
   - No sensitive data in client-side code

3. **SEO & Metadata**:
   - Sitemap generation at `/sitemap.ts`
   - Schema.org structured data support
   - Open Graph and Twitter card metadata
   - Automatic page view tracking with analytics

### Design Analysis Tools

Multiple Puppeteer-based scripts for design validation and analysis:

- `design-analysis.js`: Comprehensive design system compliance checking
  - Icon color compliance (90/10 rule)
  - Problematic color identification (red, yellow, amber)
  - Spacing and alignment validation
  - Design system adherence tracking

- `capture-all-pages.js`: Full website screenshot automation
- `screenshot.js`: Individual page screenshots
- `analyze-solutions-page.js`: Solutions page specific analysis
- `verify-revisions.js`: Design revision validation
- `extract-pages-to-xml.js`: Page structure extraction
- `split-landing-screenshot.js`: Landing page section analysis
- `puppeteer-screenshot-workflow.js`: Complete automated workflow

All scripts use Puppeteer for browser automation and provide detailed reports on design compliance and visual consistency.