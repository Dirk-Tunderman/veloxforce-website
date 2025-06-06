// RESTRUCTURED LANDING PAGE - 5 SECTION FLOW
// Problem → Solution → Proof → ROI → Action journey
// Based on industry research from Gartner, McKinsey, MIT, HBR, and Forrester

import { Metadata } from "next"

import { MainLayout } from "@/components/layout/main-layout"
import { HeroTransformationSection } from "@/components/sections/home/hero-transformation-section"
import { ServiceDifferentiationSection } from "@/components/sections/home/service-differentiation-section"
import { AhaMomentSection } from "@/components/sections/home/aha-moment-section"
import { ServiceAsSoftwareEducation } from "@/components/sections/home/service-as-software-education"
import { ProblemSolutionSection } from "@/components/sections/home/problem-solution-section"
import { ProofSection } from "@/components/sections/home/proof-section"
import { ROICalculatorSection } from "@/components/sections/home/roi-calculator-section"
import { PathSelectionSection } from "@/components/sections/home/path-selection-section"
import { constructMetadata } from "@/components/seo"

export const metadata: Metadata = constructMetadata({
  title: "Stop Buying Software. Start Receiving Outcomes | Veloxforce Service-as-Software",
  description: "Service-as-Software: We build custom solutions for YOUR exact process, then run them forever. You delegate work, we deliver outcomes. No software to learn.",
  keywords: ["service as software", "custom software solutions", "business process delegation", "outcome-based services", "software as a service alternative"],
})

export default function HomePage() {
  return (
    <MainLayout>
      {/* Section 1: Hero + Immediate Transformation */}
      <HeroTransformationSection />

      {/* Section 2: Clear Differentiation - What Makes This Different */}
      <ServiceDifferentiationSection />

      {/* Section 3: The "Aha Moment" - Understanding Through Analogy */}
      <AhaMomentSection />

      {/* Section 4: Industry Proof & Evidence */}
      <ProofSection />

      {/* Section 5: Your Economics & ROI */}
      <ROICalculatorSection />

      {/* Section 6: Clear Next Step */}
      <PathSelectionSection />
    </MainLayout>
  )
}