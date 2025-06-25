// RESTRUCTURED LANDING PAGE - 5 SECTION FLOW
// Problem → Solution → Proof → ROI → Action journey
// Based on industry research from Gartner, McKinsey, MIT, HBR, and Forrester

import { Metadata } from "next"

import { MainLayout } from "@/components/layout/main-layout"
import { HeroTransformationSection } from "@/components/sections/home/hero-transformation-section"
import { ServiceAsSoftwareRevolutionSection } from "@/components/sections/home/service-as-software-revolution-section"
import { HiddenCostSection } from "@/components/sections/home/hidden-cost-section"
import { ServiceDifferentiationSection } from "@/components/sections/home/service-differentiation-section"
import { SocialProofSection } from "@/components/sections/home/social-proof-section"
import { RealExamplesSection } from "@/components/sections/home/real-examples-section"
import { AIRealityCheckSection } from "@/components/sections/home/ai-reality-check-section"
import { JourneyTimelineSection } from "@/components/sections/home/journey-timeline-section"
import { CommonQuestionsSection } from "@/components/sections/home/common-questions-section"
import { ROICalculatorSection } from "@/components/sections/home/roi-calculator-section"
import { TimingUrgencySection } from "@/components/sections/home/timing-urgency-section"
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
      {/* Section 1: Hero + Transformation + Service-as-Software Revolution */}
      <HeroTransformationSection />

      {/* Section 2: Service-as-Software Revolution */}
      <ServiceAsSoftwareRevolutionSection />

      {/* Section 3: Hidden Cost of Business as Usual */}
      <HiddenCostSection />

      {/* Section 4: Why Generic Software Fails (Comparison) */}
      <ServiceDifferentiationSection />

      {/* Section 5: Social Proof - Leaders Are Making the Shift */}
      <SocialProofSection />

      {/* Section 6: Which Process Is Stealing Your Strategic Time */}
      <RealExamplesSection />

      {/* Section 7: AI Reality Check - What Service-as-Software Actually Means */}
      <AIRealityCheckSection />

      {/* Section 8: Transparent Economics & Why Timing Matters */}
      <ROICalculatorSection />

      {/* Section 9: The 18-Month Window - Timing & Urgency */}
      <TimingUrgencySection />

      {/* Section 10: Your Journey to Strategic Freedom */}
      <JourneyTimelineSection />

      {/* Section 11: Common Questions, Honest Answers */}
      <CommonQuestionsSection />

      {/* Section 12: Ready to Reclaim Your Time */}
      <ReadyToReclaimSection />
    </MainLayout>
  )
}