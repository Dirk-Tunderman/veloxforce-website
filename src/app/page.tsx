// RESTRUCTURED LANDING PAGE - 5 SECTION FLOW
// Problem → Solution → Proof → ROI → Action journey
// Based on industry research from Gartner, McKinsey, MIT, HBR, and Forrester

import { Metadata } from "next"

import { MainLayout } from "@/components/layout/main-layout"
import { HeroTransformationSection } from "@/components/sections/home/hero-transformation-section"
import { ServiceDifferentiationSection } from "@/components/sections/home/service-differentiation-section"
import { PartnershipModel } from "@/components/sections/home/partnership-model"
import { DecisionMakingRelief } from "@/components/sections/home/decision-making-relief"
import { WhyImpossibleSection } from "@/components/sections/home/why-impossible-section"
import { RealExamplesSection } from "@/components/sections/home/real-examples-section"
import { ROICalculatorSection } from "@/components/sections/home/roi-calculator-section"
import { PathSelectionSection } from "@/components/sections/home/path-selection-section"
import { constructMetadata } from "@/components/seo"

export const metadata: Metadata = constructMetadata({
  title: "Other people buy Software, your about to Create it| Veloxforce Service-as-Software",
  description: "Service-as-Software: You delegate your process, we deliver perfect results forever. You own the strategy. We own the execution. No software to learn.",
  keywords: ["service as software", "process delegation", "business process outsourcing", "outcome-based services", "strategic delegation"],
})

export default function HomePage() {
  return (
    <MainLayout>
      {/* Section 1: Hero + Immediate Transformation */}
      <HeroTransformationSection />

      {/* Section 2: Clear Differentiation - What Makes This Different */}
      <ServiceDifferentiationSection />

      {/* Section 3: The Multiplication Effect */}
      {/* <MultiplicationEffectSection /> */}


      {/* Section 3.5: Why This Seems Impossible */}
      <WhyImpossibleSection />

      {/* Section 4.5: Real Examples */}
      <RealExamplesSection />

      {/* Section 5: Partnership Model */}
      <PartnershipModel />

      {/* Section 6: Decision-Making Relief */}
      <DecisionMakingRelief />

      {/* Section 10: Your Economics & ROI */}
      <ROICalculatorSection />

      {/* Section 11: Service Guarantee */}
      {/* <ServiceGuarantee /> */}

      {/* Section 12: Clear Next Step */}
      <PathSelectionSection />
    </MainLayout>
  )
}