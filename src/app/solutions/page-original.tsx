// ORIGINAL SOLUTIONS PAGE - PRESERVED FOR A/B TESTING
// This is the original Solutions page implementation
// The new A/B test version is now in the main page.tsx

import { Metadata } from "next"

import { MainLayout } from "@/components/layout/main-layout"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"
import { constructMetadata } from "@/components/seo"
import { DigitalWorkforceHero } from "@/components/sections/solutions/digital-workforce-hero"
import { ServiceAsSoftware } from "@/components/sections/solutions/service-as-software"
import { DigitalWorkforceCatalog } from "@/components/sections/solutions/digital-workforce-catalog"
import { BusinessLogicIntelligence } from "@/components/sections/solutions/business-logic-intelligence"
import { OversightLevels } from "@/components/sections/solutions/oversight-levels"
import { ProcessChecker } from "@/components/sections/solutions/process-checker"
import { DigitalWorkforceCTA } from "@/components/sections/solutions/digital-workforce-cta"

export const metadata: Metadata = constructMetadata({
  title: "Your Complete Digital Workforce Catalog | Veloxforce Solutions",
  description: "See exactly which tasks become automated services. Browse by department or search specific processes.",
  keywords: ["digital workforce", "service as software", "digital employees", "automated services", "business process automation"],
  pathname: "/solutions",
})

export default function OriginalSolutionsPage() {
  return (
    <MainLayout>
      {/* Hero Section with Search */}
      <DigitalWorkforceHero />

      {/* Section 1: Service as Software Concept */}
      <ServiceAsSoftware />

      {/* Section 2: Digital Workforce Catalog */}
      <DigitalWorkforceCatalog />

      {/* Section 3: Business Logic Intelligence */}
      <BusinessLogicIntelligence />

      {/* Section 4: Oversight Levels */}
      <OversightLevels />

      {/* Section 5: Process Checker */}
      <ProcessChecker />

      {/* Bottom CTA Section */}
      <DigitalWorkforceCTA />
    </MainLayout>
  )
}
