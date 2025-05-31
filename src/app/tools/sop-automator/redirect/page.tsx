"use client"

import { MainLayout } from "@/components/layout/main-layout"
import { TransitionScreen } from "@/components/whop/transition-screen"

export default function SopAutomatorRedirectPage() {
  // Placeholder for Whop link - replace with actual link
  const whopLink = "https://whop.com/veloxforce/sop-automator"
  
  return (
    <MainLayout hideFooter>
      <TransitionScreen 
        destination={whopLink}
        toolType="sop-automator"
        redirectDelay={5000}
      />
    </MainLayout>
  )
}
