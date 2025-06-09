// RESTRUCTURED LANDING PAGE - 5 SECTION FLOW
// Problem → Solution → Proof → ROI → Action journey
// Based on industry research from Gartner, McKinsey, MIT, HBR, and Forrester

import { Metadata } from "next"

import { MainLayout } from "@/components/layout/main-layout"
import { HeroTransformationSection } from "@/components/sections/home/hero-transformation-section"
import { ServiceDifferentiationSection } from "@/components/sections/home/service-differentiation-section"
import { PartnershipModel } from "@/components/sections/home/partnership-model"
import { DecisionMakingRelief } from "@/components/sections/home/decision-making-relief"
import { FreedTimeSection } from "@/components/sections/home/freed-time-section"
import { EarlyAdoptersSection } from "@/components/sections/home/early-adopters-section"
import { ROICalculatorSection } from "@/components/sections/home/roi-calculator-section"
import { PathSelectionSection } from "@/components/sections/home/path-selection-section"
import { constructMetadata } from "@/components/seo"

export const metadata: Metadata = constructMetadata({
  title: "Stop Managing Processes. Start Receiving Results | Veloxforce Service-as-Software",
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

      {/* Section 4: Partnership Model */}
      <PartnershipModel />

      {/* Section 5: Decision-Making Relief */}
      <DecisionMakingRelief />

      {/* Section 6: Strategic Elevation */}
      {/* <StrategicElevation /> */}

      {/* Section 7: What Our Clients Do With Their Freed Time */}
      <FreedTimeSection />

      {/* Section 8: Service Promise */}
      {/* <ServicePromise /> */}

      {/* Section 9: Early Adopters Are Already Winning */}
      <EarlyAdoptersSection />

      {/* Section 10: Your Economics & ROI */}
      <ROICalculatorSection />

      {/* Section 11: Service Guarantee */}
      {/* <ServiceGuarantee /> */}

      {/* Section 12: Clear Next Step */}
      <PathSelectionSection />
    </MainLayout>
  )
}