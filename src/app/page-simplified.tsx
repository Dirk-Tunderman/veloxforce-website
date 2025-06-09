// LANDING PAGE - 6 SECTION FLOW
// According to CLAUDE.md specifications

import { Metadata } from "next"

import { MainLayout } from "@/components/layout/main-layout"
import { HeroTransformationSection } from "@/components/sections/home/hero-transformation-section"
import { ServiceDifferentiationSection } from "@/components/sections/home/service-differentiation-section"
import { AhaMomentSection } from "@/components/sections/home/aha-moment-section"
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
      {/* Section 1: Hero - Value proposition with transformation visual */}
      <HeroTransformationSection />

      {/* Section 2: Service Differentiation - 3-column comparison (automation vs service vs Service-as-Software) */}
      <ServiceDifferentiationSection />

      {/* Section 3: Aha Moment - Uber analogy with process examples */}
      <AhaMomentSection />

      {/* Section 4: Proof - Industry validation and early adopters */}
      <ProofSection />

      {/* Section 5: ROI Calculator - Economics explanation (NO specific pricing) */}
      <ROICalculatorSection />

      {/* Section 6: Path Selection - Two CTA paths (audit vs learn more) */}
      <PathSelectionSection />
    </MainLayout>
  )
}