import { Metadata } from "next"

import { MainLayout } from "@/components/layout/main-layout"
import { HeroSection } from "@/components/sections/home/hero-section"
import { BuyingIdentitySection } from "@/components/sections/home/buying-identity-section"
import { ChallengeCardsSection } from "@/components/sections/home/challenge-cards-section"
import { AutomationParadoxSection } from "@/components/sections/home/automation-paradox-section"
import { AiSelfAuditSpotlightSection } from "@/components/sections/home/ai-self-audit-spotlight-section"
import { WhatYouDontWantSection } from "@/components/sections/home/what-you-dont-want-section"

import { ClientTransformationsSection } from "@/components/sections/home/client-transformations-section"
import { CtaSection } from "@/components/sections/home/cta-section"
import { constructMetadata } from "@/components/seo"

export const metadata: Metadata = constructMetadata({
  title: "Your Business Runs You. Time to Flip the Script.",
  description: "Once you automate with Veloxforce, you'll stop drowning in operations and start leading with vision. Working processes delivered, not software to figure out.",
  keywords: ["business automation", "operational efficiency", "process automation", "hybrid AI-human automation", "business transformation", "operational freedom"],
})

export default function HomePage() {
  return (
    <MainLayout>
      {/* 1. "STOP MANAGING YOUR BUSINESS. START BUILDING IT." (Hero) - Keep as is */}
      <HeroSection />

      {/* 2. "Real Transformations, Measurable Results" (Case Studies) - Move this section up from bottom of page */}
      <ClientTransformationsSection />

      {/* 3. NEW MERGED SECTION: "From Your Current Chaos to Complete Control" */}
      {/* Merge: "The Reality Most Business Leaders Face" + "From Chaos to Control in 3 Clear Steps" */}
      <ChallengeCardsSection />

      {/* 4. "WHAT YOU GET BACK" - Keep as is */}
      <BuyingIdentitySection />

      {/* 5. NEW MERGED SECTION: "How Our Hybrid Intelligence System Works" */}
      {/* Merge: "HOW OUR HYBRID MODEL WORKS" + "EVERY TASK FOLLOWS OUR PROVEN FRAMEWORK" */}
      <AutomationParadoxSection />

      {/* 6. "WHY TRADITIONAL AUTOMATION CREATES MORE WORK" - Keep as is */}
      <WhatYouDontWantSection />

      {/* 7. "AI Self Audit Tool" - Keep as is */}
      <AiSelfAuditSpotlightSection />

      {/* 8. "Your Next Move Determines Your Next Year" - Keep as is */}
      <CtaSection />
    </MainLayout>
  )
}
