import { Metadata } from "next"

import { MainLayout } from "@/components/layout/main-layout"
import { HeroQualificationSection } from "@/components/sections/evaluation/hero-qualification-section"
import { ReadinessMatrixSection } from "@/components/sections/evaluation/readiness-matrix-section"
import { DepthAssessmentSection } from "@/components/sections/evaluation/depth-assessment-section"
import { IdealPartnerProfileSection } from "@/components/sections/evaluation/ideal-partner-profile-section"
import { CommonScenariosSection } from "@/components/sections/evaluation/common-scenarios-section"
import { ReadinessChecklistSection } from "@/components/sections/evaluation/readiness-checklist-section"
import { PersonalizedNextStepsSection } from "@/components/sections/evaluation/personalized-next-steps-section"
import { constructMetadata } from "@/components/seo"

export const metadata: Metadata = constructMetadata({
  title: "The Honest Guide to Service-as-Software Fit | Veloxforce",
  description: "Use our readiness matrix and assessment tools to determine if Service-as-Software is right for your business. Honest evaluation with personalized next steps.",
  keywords: ["service as software readiness", "business readiness assessment", "process delegation evaluation", "strategic readiness matrix", "automation readiness"],
  pathname: "/is-this-right-for-me",
})

export default function IsThisRightForMePage() {
  return (
    <MainLayout>
      {/* 1. Hero: Honest Qualification Guide */}
      <HeroQualificationSection />

      {/* 2. Interactive Readiness Matrix */}
      <ReadinessMatrixSection />

      {/* 3. Depth Assessment (replaces 4-step test) */}
      <DepthAssessmentSection />

      {/* 4. Ideal Partner Profile */}
      <IdealPartnerProfileSection />


      {/* 6. Common Scenarios */}
      <CommonScenariosSection />

      {/* 7. Partnership Readiness Checklist */}
      <ReadinessChecklistSection />

      {/* 8. Personalized Next Steps */}
      <PersonalizedNextStepsSection />
    </MainLayout>
  )
}
