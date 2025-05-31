import { Metadata } from "next"

import { MainLayout } from "@/components/layout/main-layout"
import { ApproachHeroSection } from "@/components/sections/approach/approach-hero"
import { DetailedPillarsSection } from "@/components/sections/approach/detailed-pillars"
import { ProcessDeepDiveSection } from "@/components/sections/approach/process-deep-dive"
import { ServiceModelsSection } from "@/components/sections/approach/service-models"
import { CtaSection } from "@/components/sections/home/cta-section"

export const metadata: Metadata = {
  title: "Our Approach | Veloxforce",
  description: "Discover Veloxforce's unique hybrid AI-human automation methodology that delivers certainty of outcomes for your business.",
}

export default function OurApproachPage() {
  return (
    <MainLayout>
      <ApproachHeroSection />
      <DetailedPillarsSection />
      <ProcessDeepDiveSection />
      <ServiceModelsSection />
      <CtaSection />
    </MainLayout>
  )
}
