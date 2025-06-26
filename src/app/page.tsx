// RESTRUCTURED LANDING PAGE - 5 SECTION FLOW
// Problem → Solution → Proof → ROI → Action journey
// Based on industry research from Gartner, McKinsey, MIT, HBR, and Forrester

import { Metadata } from "next"

import { MainLayout } from "@/components/layout/main-layout"
import { HeroTransformationSection } from "@/components/sections/home/hero-transformation-section"
import { ServiceDifferentiationSection } from "@/components/sections/home/service-differentiation-section"
import { RealExamplesSection } from "@/components/sections/home/real-examples-section"
import { AIRealityCheckSection } from "@/components/sections/home/ai-reality-check-section"
import { JourneyTimelineSection } from "@/components/sections/home/journey-timeline-section"
import { ProcessFitCriteriaSection } from "@/components/sections/home/process-fit-criteria-section"
import { ROICalculatorSection } from "@/components/sections/home/roi-calculator-section"
import { ReadyToReclaimSection } from "@/components/sections/home/ready-to-reclaim-section"
import { constructMetadata } from "@/components/seo"

export const metadata: Metadata = constructMetadata({
  title: "Stop Buying Software. Start Receiving Outcomes | Veloxforce Service-as-Software",
  description: "AI builds your perfect system. We run it 24/7. You receive finished work. Traditional path: Buy software → Learn it → Manage it → Hope it works. Our path: Describe your need → We build it → Results flow automatically.",
  keywords: ["service as software", "custom ai software", "business automation", "outcome-based services", "ai development", "process automation"],
})

export default function HomePage() {
  return (
    <MainLayout>
      {/* Section 1: Hero - AI can build custom software for YOUR exact process */}
      <HeroTransformationSection />

      {/* Section 2: Problem/Solution Comparison - Generic vs AI-built software */}
      <ServiceDifferentiationSection />

      {/* Section 3: How It Actually Works - Concrete process timeline */}
      <JourneyTimelineSection />

      {/* Section 4: Real Client Examples - Specific processes with hard numbers */}
      <RealExamplesSection />

      {/* Section 5: Why This is Possible Now - Technical reality without jargon */}
      <AIRealityCheckSection />

      {/* Section 6: Process Fit Criteria - Which processes this works for */}
      <ProcessFitCriteriaSection />

      {/* Section 7: Investment Model - 80% less than traditional development */}
      <ROICalculatorSection />

      {/* Section 8: Call to Action - Three concrete next steps */}
      <ReadyToReclaimSection />
    </MainLayout>
  )
}