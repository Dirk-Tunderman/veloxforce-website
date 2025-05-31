"use client"

import { MainLayout } from "@/components/layout/main-layout"
import { TransitionScreen } from "@/components/whop/transition-screen"

export default function BusinessAuditRedirectPage() {
  // Placeholder for Whop link - replace with actual link
  const whopLink = "https://whop.com/veloxforce/business-audit"
  
  return (
    <MainLayout hideFooter>
      <TransitionScreen 
        destination={whopLink}
        toolType="business-audit"
        redirectDelay={5000}
      />
    </MainLayout>
  )
}
