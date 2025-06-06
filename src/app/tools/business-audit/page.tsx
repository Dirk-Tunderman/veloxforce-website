import { Metadata } from "next"

import { MainLayout } from "@/components/layout/main-layout"
import { AuditQuiz } from "@/components/tools/audit/audit-quiz"
import { EnhancedWorkingServiceQuiz } from "@/components/tools/audit/enhanced-working-service-quiz"
import { constructMetadata } from "@/components/seo"

export const metadata: Metadata = constructMetadata({
  title: "AI Self Audit Tool - €350 Professional Analysis in 8 Minutes",
  description: "Get professional-grade process analysis worth €350 - completely free in 8 minutes. AI-powered insights equivalent to 2+ hours of professional consulting.",
  keywords: ["AI self audit tool", "process analysis", "€350 value", "professional consulting", "automation assessment", "business efficiency", "AI-powered analysis"],
  pathname: "/tools/business-audit",
})

export default function BusinessAuditPage() {
  // Use the new Service Quiz instead of the old audit quiz
  const useNewServiceQuiz = true
  
  return (
    <MainLayout>
      {useNewServiceQuiz ? <EnhancedWorkingServiceQuiz /> : <AuditQuiz />}
    </MainLayout>
  )
}
