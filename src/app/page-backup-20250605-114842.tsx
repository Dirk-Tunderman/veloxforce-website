// NEW A/B TEST LANDING PAGE - PRIMARY VERSION
// This implements the new copywriting strategy for A/B testing
// Original landing page preserved in page-original.tsx

import { Metadata } from "next"

import { MainLayout } from "@/components/layout/main-layout"
import { HeroSectionV2 } from "@/components/sections/home/hero-section-v2"
import { IdentityTransformationSection } from "@/components/sections/home/identity-transformation-section"
import { OpportunitySection } from "@/components/sections/home/opportunity-section"
import { ThirdOptionSection } from "@/components/sections/home/third-option-section"
import { SkepticsGuideSection } from "@/components/sections/home/skeptics-guide-section"
import { GmailAnalogySection } from "@/components/sections/home/gmail-analogy-section"
import { ClientTransformationsV2 } from "@/components/sections/home/client-transformations-v2"
import { ThreeChoicesSection } from "@/components/sections/home/three-choices-section"
import { ChallengeSelectorSection } from "@/components/sections/home/challenge-selector-section"
import { VeloxforceDifferenceSection } from "@/components/sections/home/veloxforce-difference-section"
import { WhatOthersTrySection } from "@/components/sections/home/what-others-try-section"
import { ROIBreakdownSection } from "@/components/sections/home/roi-breakdown-section"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { CostBenefitInfographic } from "@/components/sections/home/cost-benefit-infographic"
import { OutcomeGuaranteeSection } from "@/components/sections/home/outcome-guarantee-section"
import { AiSelfAuditSpotlightSection } from "@/components/sections/home/ai-self-audit-spotlight-section"
import { CtaSection } from "@/components/sections/home/cta-section"
import { constructMetadata } from "@/components/seo"

export const metadata: Metadata = constructMetadata({
  title: "Your Competitors Buy Software. You're About to Create It.",
  description: "We use AI to build custom software for your exact processes—in weeks, not years. Then we run it for you. No complexity. No management. Just outcomes.",
  keywords: ["service as software", "custom automation", "AI development", "business process automation", "hybrid AI-human", "operational efficiency"],
})

export default function HomePage() {
  return (
    <MainLayout>
      {/* 1. NEW HERO: "Your Competitors Buy Software. You're About to Create It." */}
      <HeroSectionV2 />

      {/* 2. NEW: Identity Transformation Statement */}
      <IdentityTransformationSection />

      {/* 3. NEW: "Everything Just Changed" - The Opportunity */}
      <OpportunitySection />

      {/* 4. NEW: "The Third Option" */}
      <ThirdOptionSection />

      {/* 5. NEW: "But How Do I Know This Will Work for MY Business?" - Skeptic's Guide */}
      <SkepticsGuideSection />

      {/* 6. NEW: "You Already Delegate Successfully Every Day" - Gmail Analogy */}
      <GmailAnalogySection />

      {/* 7. UPDATED: "The First Businesses to Discover Service-as-Software" */}
      <ClientTransformationsV2 />

      {/* 8. NEW: "Every Business Owner Faces the Same Decision" */}
      <ThreeChoicesSection />

      {/* 9. NEW: "Your Investment Math Is Simple" - ROI Breakdown */}
      <ROIBreakdownSection />

      {/* 10. NEW: "What We've Seen Businesses Try" */}
      <WhatOthersTrySection />

      {/* 11. PRESERVED: "Which Challenge Is Stealing Your Success?" */}
      <ChallengeSelectorSection />

      {/* 12. NEW: "We're Not Another AI Automation Agency" */}
      <VeloxforceDifferenceSection />

      {/* 13. NEW: "The Cost of Waiting vs. Acting Now" - Cost Benefit Analysis */}
      <Section padding="xl" background="light-blue" className="bg-gray-50">
        <Container className="max-w-7xl">
          <CostBenefitInfographic />
        </Container>
      </Section>

      {/* 14. NEW: "We Take The Risk, You Get The Results" - Outcome Guarantee */}
      <OutcomeGuaranteeSection />

      {/* 15. PRESERVED: "AI Self Audit Tool" - Keep as requested */}
      <AiSelfAuditSpotlightSection />

      {/* 16. PRESERVED: Final CTA Section */}
      <CtaSection />
    </MainLayout>
  )
}
