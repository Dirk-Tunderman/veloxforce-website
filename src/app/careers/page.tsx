import { Metadata } from "next"

import { MainLayout } from "@/components/layout/main-layout"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"
import { Button } from "@/components/ui/button"
import { constructMetadata } from "@/components/seo"
import { Users, Rocket, Heart, Target } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = constructMetadata({
  title: "Careers | Join the Veloxforce Team",
  description: "Join Veloxforce and help transform businesses with Service-as-Software. Explore career opportunities in AI, automation, and business transformation.",
  keywords: ["careers", "jobs", "veloxforce careers", "AI jobs", "automation careers", "business transformation jobs"],
  pathname: "/careers",
})

export default function CareersPage() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <Section padding="xl" background="white-to-light" className="min-h-[80vh] flex items-center">
        <Container className="max-w-6xl">
          <div className="text-center space-y-8">
            <div className="space-y-6">
              <Heading level="1" className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Build the Future of{" "}
                <span className="gradient-text-blue">
                  Business Automation
                </span>
              </Heading>
              
              <Text className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
                Join our mission to transform how businesses operate through Service-as-Software innovation.
              </Text>
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <Heading level="4" className="text-lg font-semibold text-gray-900 mb-2 text-center">
                  Collaborative
                </Heading>
                <Text className="text-sm text-gray-600 text-center">
                  Work with brilliant minds solving complex challenges
                </Text>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Rocket className="w-6 h-6 text-green-600" />
                </div>
                <Heading level="4" className="text-lg font-semibold text-gray-900 mb-2 text-center">
                  Innovative
                </Heading>
                <Text className="text-sm text-gray-600 text-center">
                  Pioneer the next generation of business solutions
                </Text>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Heart className="w-6 h-6 text-purple-600" />
                </div>
                <Heading level="4" className="text-lg font-semibold text-gray-900 mb-2 text-center">
                  Purpose-Driven
                </Heading>
                <Text className="text-sm text-gray-600 text-center">
                  Make a real impact on businesses worldwide
                </Text>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Target className="w-6 h-6 text-orange-600" />
                </div>
                <Heading level="4" className="text-lg font-semibold text-gray-900 mb-2 text-center">
                  Results-Focused
                </Heading>
                <Text className="text-sm text-gray-600 text-center">
                  Deliver outcomes that transform businesses
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
              Opportunities Coming Soon
            </Heading>
            <Text className="text-lg text-gray-700 mb-8 leading-relaxed">
              We're building something extraordinary and will be expanding our team soon. 
              Be the first to know when positions become available.
            </Text>
            
            <div className="space-y-4">
              <Button
                size="lg"
                className="velox-cta-primary text-lg font-semibold px-8 py-4 h-auto rounded-xl"
                asChild
              >
                <Link href="/contact">
                  Get Notified About Opportunities
                </Link>
              </Button>
              
              <Text className="text-sm text-gray-600">
                Or reach out directly at <span className="font-semibold text-blue-600">team@veloxforce.ai</span>
              </Text>
            </div>
          </div>
        </Container>
      </Section>
    </MainLayout>
  )
}
