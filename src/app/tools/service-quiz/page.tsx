import { Metadata } from "next"

import { MainLayout } from "@/components/layout/main-layout"
import { constructMetadata } from "@/components/seo"
import ServiceQuizClient from "./service-quiz-client"

export const metadata: Metadata = constructMetadata({
  title: "Service-as-Software Department Quiz - Discover Your Automation Potential in 12 Minutes",
  description: "Join 500+ businesses who've identified 20-40 hours of weekly time savings through our personalized assessment. Get precise visibility into your automation potential.",
  keywords: ["department automation", "service-as-software quiz", "process automation", "business efficiency", "ROI calculator", "time savings", "cost reduction"],
  pathname: "/tools/service-quiz",
})

// QuizIntroduction moved to service-quiz-client.tsx

export default function ServiceQuizPage() {
  return (
    <MainLayout>
      <ServiceQuizClient />
    </MainLayout>
  )
}