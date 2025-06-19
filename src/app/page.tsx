// RESTRUCTURED LANDING PAGE - 5 SECTION FLOW
// Problem → Solution → Proof → ROI → Action journey
// Based on industry research from Gartner, McKinsey, MIT, HBR, and Forrester

import { Metadata } from "next"

import { MainLayout } from "@/components/layout/main-layout"
import { HeroTransformationSection } from "@/components/sections/home/hero-transformation-section"
import { HiddenCostSection } from "@/components/sections/home/hidden-cost-section"
import { ServiceDifferentiationSection } from "@/components/sections/home/service-differentiation-section"
import { SocialProofSection } from "@/components/sections/home/social-proof-section"
import { RealExamplesSection } from "@/components/sections/home/real-examples-section"
import { JourneyTimelineSection } from "@/components/sections/home/journey-timeline-section"
import { CommonQuestionsSection } from "@/components/sections/home/common-questions-section"
import { ROICalculatorSection } from "@/components/sections/home/roi-calculator-section"
import { ReadyToReclaimSection } from "@/components/sections/home/ready-to-reclaim-section"
import { constructMetadata } from "@/components/seo"

export const metadata: Metadata = constructMetadata({
  title: "Other people buy Software, your about to Create it| Veloxforce Service-as-Software",
  description: "Service-as-Software: You delegate your process, we deliver perfect results forever. You own the strategy. We own the execution. No software to learn.",
  keywords: ["service as software", "process delegation", "business process outsourcing", "outcome-based services", "strategic delegation"],
})

export default function HomePage() {
  return (
    <MainLayout>
      {/* Section 1: Hero + Transformation + Service-as-Software Revolution */}
      <HeroTransformationSection />

      {/* Section 2: Hidden Cost of Business as Usual */}
      <HiddenCostSection />

      {/* Section 3: Why Generic Software Fails (Comparison) */}
      <ServiceDifferentiationSection />

      {/* Section 4: Social Proof - Leaders Are Making the Shift */}
      <SocialProofSection />

      {/* Section 5: Which Process Is Stealing Your Strategic Time */}
      <RealExamplesSection />

      {/* Section 6: Transparent Economics & Why Timing Matters */}
      <ROICalculatorSection />

      {/* Section 7: Your Journey to Strategic Freedom */}
      <JourneyTimelineSection />

      {/* Section 8: Common Questions, Honest Answers */}
      <CommonQuestionsSection />

      {/* Section 9: Ready to Reclaim Your Time */}
      <ReadyToReclaimSection />
    </MainLayout>
  )
}