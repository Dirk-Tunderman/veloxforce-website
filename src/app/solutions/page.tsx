// NEW A/B TEST SOLUTIONS PAGE - PRIMARY VERSION
// This implements the new process-focused copywriting strategy
// Original page preserved in page-original.tsx

import { Metadata } from "next"

import { MainLayout } from "@/components/layout/main-layout"
import { constructMetadata } from "@/components/seo"
import { HeroSectionV2 } from "@/components/sections/solutions/hero-section-v2"
import { ROIQualificationSection } from "@/components/sections/solutions/roi-qualification-section"
import { ComprehensiveSolutionsSection } from "@/components/sections/solutions/comprehensive-solutions-section"
import { UniversalTruthSection } from "@/components/sections/solutions/universal-truth-section"
import { ProcessEvaluationSection } from "@/components/sections/solutions/process-evaluation-section"
import { DigitalWorkforceCTA } from "@/components/sections/solutions/digital-workforce-cta"

export const metadata: Metadata = constructMetadata({
  title: "Every Process You Hate Doing Can Become a Process You Love Delegating | Veloxforce Solutions",
  description: "Discover which of your daily operations can be transformed into delegated outcomes. Stop wondering 'Could this work for me?' See exactly how we transform processes just like yours.",
  keywords: ["process delegation", "service as software", "business operations", "delegate processes", "operational efficiency", "process transformation"],
  pathname: "/solutions",
})

export default function SolutionsPage() {
  return (
    <MainLayout>
      {/* 1. NEW HERO: "Every Process You Hate Doing Can Become a Process You Love Delegating" */}
      <HeroSectionV2 />

      {/* 2. NEW: "But First: Does This Make Financial Sense?" - ROI Qualification */}
      <ROIQualificationSection />

      {/* 3. MERGED: "Which Time-Drain Is Killing Your Growth?" - Comprehensive Solutions (merged Problem Recognition + Core Operations) */}
      <ComprehensiveSolutionsSection />

      {/* 4. NEW: "Your Process Matters. Your Industry Doesn't." - Universal Truth */}
      <UniversalTruthSection />

      {/* 5. NEW: "Not Sure What to Delegate First? Let's Find Out." - Process Evaluation Tool */}
      <ProcessEvaluationSection />

      {/* 6. PRESERVED: Bottom CTA Section */}
      <DigitalWorkforceCTA />
    </MainLayout>
  )
}
