// NEW A/B TEST "HOW IT WORKS" PAGE - PRIMARY VERSION
// This implements the new Service-as-Software methodology copywriting
// Original page preserved in page-original.tsx

import { Metadata } from "next"

import { MainLayout } from "@/components/layout/main-layout"
import { EvaluationGuideSection } from "@/components/sections/approach/evaluation-guide-section"
import { ROIAnalysisSection } from "@/components/sections/approach/roi-analysis-section"
import { WhatYoullReceiveSection } from "@/components/sections/approach/what-youll-receive-section"
import { CustomDevelopmentSection } from "@/components/sections/approach/custom-development-section"
import { SeamlessHandoffSection } from "@/components/sections/approach/seamless-handoff-section"
import { OngoingExcellenceSection } from "@/components/sections/approach/ongoing-excellence-section"
import { WhyServiceAsSoftwareWorks } from "@/components/sections/approach/why-service-as-software-works"
import { NextStepSection } from "@/components/sections/approach/next-step"

export const metadata: Metadata = {
  title: "How It Works: The Service-as-Software Method | Veloxforce",
  description: "ROI-first process delegation. We only proceed when the numbers make sense for both of us. See our proven approach to Service-as-Software implementation.",
}

export default function OurApproachPage() {
  return (
    <MainLayout>
      {/* 1. NEW HERO: "Stop Comparing Apples to Oranges" */}
      <EvaluationGuideSection />

      {/* 2. NEW: "Phase 1: ROI Analysis First" */}
      <ROIAnalysisSection />

      {/* 3. NEW: "Before You Decide: See Exactly What You'll Receive" */}
      <WhatYoullReceiveSection />

      {/* 4. NEW: "Phase 2: Custom Solution Development" */}
      <CustomDevelopmentSection />

      {/* 5. NEW: "Phase 3: Seamless Handoff" */}
      <SeamlessHandoffSection />

      {/* 6. NEW: "Phase 4: Ongoing Excellence" */}
      <OngoingExcellenceSection />

      {/* 7. NEW: "Why Service-as-Software Works" */}
      <WhyServiceAsSoftwareWorks />

      {/* 8. PRESERVED: "Ready to See Your Process Transformed?" */}
      <NextStepSection />
    </MainLayout>
  )
}
