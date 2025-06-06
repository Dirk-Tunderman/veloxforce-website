// RESTRUCTURED LANDING PAGE - 5 SECTION FLOW
// Problem → Solution → Proof → ROI → Action journey
// Based on industry research from Gartner, McKinsey, MIT, HBR, and Forrester

import { Metadata } from "next"

import { MainLayout } from "@/components/layout/main-layout"
import { HeroTransformationSection } from "@/components/sections/home/hero-transformation-section"
import { ServiceDifferentiationSection } from "@/components/sections/home/service-differentiation-section"
import { ServiceAsSoftwareRevolution } from "@/components/sections/home/service-as-software-revolution"
import { PartnershipModel } from "@/components/sections/home/partnership-model"
import { DecisionMakingRelief } from "@/components/sections/home/decision-making-relief"
import { StrategicElevation } from "@/components/sections/home/strategic-elevation"
import { ServicePromise } from "@/components/sections/home/service-promise"
import { ServiceAsSoftwareEducation } from "@/components/sections/home/service-as-software-education"
import { ProblemSolutionSection } from "@/components/sections/home/problem-solution-section"
import { ProofSection } from "@/components/sections/home/proof-section"
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

      {/* Section 3: Service-as-Software Revolution */}
      <ServiceAsSoftwareRevolution />

      {/* Section 4: Partnership Model */}
      <PartnershipModel />

      {/* Section 5: Decision-Making Relief */}
      <DecisionMakingRelief />

      {/* Section 6: Strategic Elevation */}
      <StrategicElevation />

      {/* Section 7: Service Promise */}
      <ServicePromise />

      {/* Section 8: Industry Proof & Evidence */}
      <ProofSection />

      {/* Section 9: Your Economics & ROI */}
      <ROICalculatorSection />

      {/* Section 10: Clear Next Step */}
      <PathSelectionSection />
    </MainLayout>
  )
}