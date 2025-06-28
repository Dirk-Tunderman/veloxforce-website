// TRANSFORMED "OUR APPROACH" PAGE - RESULTS-FOCUSED VERSION
// Implements the new direct, ROI-focused messaging with 8-week process
// Removes all fluff and focuses on concrete outcomes and objection handling

import { Metadata } from "next"

import { MainLayout } from "@/components/layout/main-layout"
import { EvaluationGuideSection } from "@/components/sections/approach/evaluation-guide-section"
import { ObjectionHandlingSection } from "@/components/sections/approach/objection-handling-section"
import { FinalCTASection } from "@/components/sections/approach/final-cta-section"

export const metadata: Metadata = {
  title: "Our Proven 8-Week Process: Turn Chaos Into Automated Efficiency | Veloxforce",
  description: "No magic, no BS - just a proven 8-week process that cuts operational costs by 70-90%. Based on 50+ successful implementations. See the exact week-by-week breakdown.",
}

export default function OurApproachPage() {
  return (
    <MainLayout>
      {/* 1. HERO: "Here's Exactly How We Turn Your Operational Chaos Into Automated Efficiency" + 8-Week Process */}
      <EvaluationGuideSection />

      {/* 2. OBJECTION HANDLING: "Let's Address the Elephant in the Room" */}
      <ObjectionHandlingSection />

      {/* 3. FINAL CTA: "Get Your Free ROI Analysis" */}
      <FinalCTASection />
    </MainLayout>
  )
}
