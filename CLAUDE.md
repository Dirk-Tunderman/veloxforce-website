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

### Design Analysis
```bash
node scripts/design-analysis.js    # Run Puppeteer design analysis and take screenshots
node scripts/screenshot.js <page>  # Take screenshots of specific pages
```

### Environment Setup
Ensure you have a `.env.local` file with:
- `NEXT_PUBLIC_SUPABASE_URL` - Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Supabase anonymous key
- `RESEND_API_KEY` - Resend API key for email functionality

## Architecture Overview

This is a Next.js 14 application using the App Router with a comprehensive design system for VeloxForce, a business automation consultancy offering "Service-as-Software" solutions.

### Core Technology Stack
- **Next.js 14.1.0** with App Router
- **TypeScript** with strict mode
- **Tailwind CSS** with custom design tokens
- **shadcn/ui** components based on Radix UI
- **Supabase** for database and authentication
- **Resend** for transactional emails
- **Puppeteer** for automated design analysis and screenshots

### Design System Implementation

The design system is documented in `/VELOXFORCE-COMPREHENSIVE-DESIGN-SYSTEM.md` (828 lines) and defines:

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
   - `submit-quiz`: Handles audit tool submissions
   - `send-audit-email`: Sends customized ROI analysis emails

3. **Database Schema**: Three main tables in Supabase
   - `clients`: Customer information
   - `quiz_submissions`: Audit tool tracking
   - `quiz_answers`: Individual responses

4. **Analytics**: Custom analytics provider wrapping Google Analytics
   - Use `useAnalytics` hook for tracking events
   - Page views tracked automatically

5. **Forms**: React Hook Form + Zod validation pattern
   - Form schemas defined with Zod
   - Use `@hookform/resolvers/zod` for integration

6. **Animations**: Prefer Tailwind CSS animations over Framer Motion
   - Use `tailwindcss-animate` for complex animations
   - Keep animations subtle and purposeful

### Development Guidelines

1. **Component Creation**: Always check existing components in `/src/components/ui/` before creating new ones

2. **Styling Approach**:
   - Use Tailwind utility classes
   - Follow the design system color tokens
   - Maintain consistent spacing using Tailwind's scale

3. **Image Optimization**: Use Next.js `Image` component with:
   - Proper width/height or fill prop
   - Appropriate loading strategy (lazy/eager)
   - Alt text for accessibility

4. **Performance Considerations**:
   - Implement proper loading states
   - Use dynamic imports for heavy components
   - Optimize images with WebP/AVIF formats

5. **Type Safety**: TypeScript strict mode is enabled
   - Define proper types for all props and state
   - Use type inference where appropriate
   - Avoid `any` type

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

### Testing Approach

Currently no test framework is configured. When implementing tests:
- Consider Jest + React Testing Library for unit tests
- Playwright for E2E testing
- Test critical user flows (quiz submission, email sending)

### Design Analysis Tools

Use `node scripts/design-analysis.js` to automatically:
- Check icon color compliance (90/10 rule)
- Identify problematic colors (red, yellow, amber)
- Validate spacing and alignment
- Generate screenshots for review
- Track design system adherence