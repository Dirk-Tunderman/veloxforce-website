// ORIGINAL OUR APPROACH PAGE - PRESERVED FOR A/B TESTING
// This is the original "How It Works" page implementation
// The new A/B test version is now in the main page.tsx

import { Metadata } from "next"

import { MainLayout } from "@/components/layout/main-layout"
import { AiLearningsSection } from "@/components/sections/approach/ai-learnings"
import { ServiceRevolutionSection } from "@/components/sections/approach/service-revolution"
import { HybridApproachSection } from "@/components/sections/approach/hybrid-approach"
import { TimeAndGrowthSection } from "@/components/sections/approach/time-and-growth"
import { TwoWaysSection } from "@/components/sections/approach/two-ways"
import { TeamImpactSection } from "@/components/sections/approach/team-impact"
import { NumbersSection } from "@/components/sections/approach/numbers"
import { BusinessFitSection } from "@/components/sections/approach/business-fit"
import { RealExamplesSection } from "@/components/sections/approach/real-examples"
import { NextStepSection } from "@/components/sections/approach/next-step"

export const metadata: Metadata = {
  title: "Our Approach | Veloxforce",
  description: "Discover Veloxforce's unique hybrid AI-human automation methodology that delivers certainty of outcomes for your business.",
}

export default function OriginalOurApproachPage() {
  return (
    <MainLayout>
      <AiLearningsSection />
      <ServiceRevolutionSection />
      <HybridApproachSection />
      <TimeAndGrowthSection />
      <TwoWaysSection />
      <TeamImpactSection />
      <NumbersSection />
      <BusinessFitSection />
      <RealExamplesSection />
      <NextStepSection />
    </MainLayout>
  )
}
