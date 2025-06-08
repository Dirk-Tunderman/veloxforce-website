import { Metadata } from "next"

import { MainLayout } from "@/components/layout/main-layout"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"
import { Button } from "@/components/ui/button"
import { constructMetadata } from "@/components/seo"
import { BookOpen, TrendingUp, Lightbulb, Users } from "lucide-react"
import Link from "next/link"

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
      <Section padding="xl" background="white-to-light" className="min-h-[80vh] flex items-center">
        <Container className="max-w-6xl">
          <div className="text-center space-y-8">
            <div className="space-y-6">
              <Heading level="1" className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Insights on{" "}
                <span className="text-gradient">
                  Business Transformation
                </span>
              </Heading>

              <Text className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
                Discover the latest trends in business automation, AI integration, and Service-as-Software innovation.
              </Text>
            </div>

            {/* Content Categories Preview */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <BookOpen className="w-6 h-6 text-blue-600" />
                </div>
                <Heading level="4" className="text-lg font-semibold text-gray-900 mb-2 text-center">
                  Case Studies
                </Heading>
                <Text className="text-sm text-gray-600 text-center">
                  Real transformation stories and results
                </Text>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                </div>
                <Heading level="4" className="text-lg font-semibold text-gray-900 mb-2 text-center">
                  Industry Trends
                </Heading>
                <Text className="text-sm text-gray-600 text-center">
                  Latest developments in automation
                </Text>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Lightbulb className="w-6 h-6 text-purple-600" />
                </div>
                <Heading level="4" className="text-lg font-semibold text-gray-900 mb-2 text-center">
                  Best Practices
                </Heading>
                <Text className="text-sm text-gray-600 text-center">
                  Expert tips and methodologies
                </Text>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Users className="w-6 h-6 text-orange-600" />
                </div>
                <Heading level="4" className="text-lg font-semibold text-gray-900 mb-2 text-center">
                  Team Insights
                </Heading>
                <Text className="text-sm text-gray-600 text-center">
                  Behind-the-scenes perspectives
                </Text>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Coming Soon Section */}
      <Section padding="xl" background="light-blue">
        <Container className="max-w-4xl">
          <div className="bg-white rounded-2xl p-12 text-center border border-gray-200 shadow-lg">
            <Heading level="2" className="text-3xl font-bold text-gray-900 mb-6">
              Content Coming Soon
            </Heading>
            <Text className="text-lg text-gray-700 mb-8 leading-relaxed">
              We're preparing valuable insights and case studies about Service-as-Software transformations.
              Check back soon for expert articles on business automation and process optimization.
            </Text>

            <div className="space-y-4">
              <Button
                size="lg"
                className="velox-cta-primary text-lg font-semibold px-8 py-4 h-auto rounded-xl"
                asChild
              >
                <Link href="/tools/business-audit">
                  Explore Our Solutions Instead
                </Link>
              </Button>

              <Text className="text-sm text-gray-600">
                Or learn more about <Link href="/our-approach" className="font-semibold text-blue-600 hover:underline">our approach</Link>
              </Text>
            </div>
          </div>
        </Container>
      </Section>
    </MainLayout>
  )
}
