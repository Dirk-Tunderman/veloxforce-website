import { Metadata } from "next"

import { MainLayout } from "@/components/layout/main-layout"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"
import { constructMetadata } from "@/components/seo"
import { SolutionTabs } from "@/components/sections/solutions/solution-tabs"

export const metadata: Metadata = constructMetadata({
  title: "Every System. Automated. Guaranteed. | Veloxforce Solutions",
  description: "See exactly how we transform each part of your business into an efficient, automated operation. Complete system automation across Operations, Marketing, Sales, Finance, and Customer Success.",
  keywords: ["business automation solutions", "system automation", "operations automation", "marketing automation", "sales automation", "finance automation", "customer success automation"],
  pathname: "/solutions",
})



export default function SolutionsPage() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <Section padding="lg" background="primary">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <Heading level="1" className="velox-text-h1 text-white mb-6">
              Every System. Automated. Guaranteed.
            </Heading>
            <Text className="velox-text-body text-white/90 text-xl">
              See exactly how we transform each part of your business into an efficient, automated operation.
            </Text>
          </div>
        </Container>
      </Section>

      {/* Opening Statement */}
      <Section padding="md">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <Text className="velox-text-body text-lg text-gray-700">
              Every successful business runs on systems, not chaos. See exactly how we transform each of your critical systems into automated operations that work perfectly without your constant oversight.
            </Text>
          </div>
        </Container>
      </Section>

      {/* System Selector Tabs */}
      <SolutionTabs />
    </MainLayout>
  )
}
