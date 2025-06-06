import { Metadata } from "next"

import { MainLayout } from "@/components/layout/main-layout"
import { DecisionTreeSection } from "@/components/sections/evaluation/decision-tree-section"
import { StrategicLeadershipSection } from "@/components/sections/evaluation/strategic-leadership-section"
import { TeamPotentialSection } from "@/components/sections/evaluation/team-potential-section"
import { NextStepsSection } from "@/components/sections/evaluation/next-steps-section"
import { constructMetadata } from "@/components/seo"

export const metadata: Metadata = constructMetadata({
  title: "Is Service-as-Software Right for Your Business? | Decision Guide | Veloxforce",
  description: "Follow our 4-step decision tree to know if your process is ready for Service-as-Software. Learn why successful CEOs delegate operations to focus on strategy.",
  keywords: ["service as software evaluation", "process delegation decision", "business process assessment", "strategic delegation", "CEO time management"],
  pathname: "/is-this-right-for-me",
})

export default function IsThisRightForMePage() {
  return (
    <MainLayout>
      {/* 1. Decision Tree Section */}
      <DecisionTreeSection />

      {/* 2. Strategic Leadership Section */}
      <StrategicLeadershipSection />

      {/* 3. Team Potential Section */}
      <TeamPotentialSection />

      {/* 4. Next Steps Section */}
      <NextStepsSection />
    </MainLayout>
  )
}
