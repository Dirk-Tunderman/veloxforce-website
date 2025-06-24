import { Metadata } from "next"

import { MainLayout } from "@/components/layout/main-layout"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"
import { constructMetadata } from "@/components/seo"
import { BlogPageClient } from "./blog-page-client"

export const metadata: Metadata = constructMetadata({
  title: "Blog | Insights on Business Automation & AI | Veloxforce",
  description: "Discover the latest insights on business automation, AI integration, and process optimization. Learn how Service-as-Software is transforming businesses.",
  keywords: ["business automation blog", "AI insights", "process optimization", "service as software", "automation trends"],
  pathname: "/blog",
})

export default function BlogPage() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <Section padding="lg" background="white" className="pt-16 pb-8">
        <Container className="max-w-6xl">
          <div className="text-center space-y-4">
            <Heading level="1" className="text-4xl md:text-5xl font-bold leading-tight">
              Insights on{" "}
              <span className="text-gradient">
                Business Transformation
              </span>
            </Heading>

            <Text className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Discover the latest trends in business automation, AI integration, and Service-as-Software innovation.
            </Text>
          </div>
        </Container>
      </Section>

      {/* Blog Content */}
      <BlogPageClient />
    </MainLayout>
  )
}
