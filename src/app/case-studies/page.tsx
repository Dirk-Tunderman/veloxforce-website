import { Metadata } from "next"

import { MainLayout } from "@/components/layout/main-layout"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"
import { Button } from "@/components/ui/button"
import { constructMetadata } from "@/components/seo"
import { TrendingUp, Clock, DollarSign, Users, Target, Award, BarChart3, Zap } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = constructMetadata({
  title: "Success Stories | Real Business Transformations | Veloxforce",
  description: "Discover how businesses have transformed their operations with Veloxforce Service-as-Software. Real results, measurable ROI, and proven outcomes.",
  keywords: ["case studies", "success stories", "business transformation", "automation results", "ROI case studies", "process optimization"],
  pathname: "/case-studies",
})

export default function CaseStudiesPage() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <Section padding="xl" background="white-to-light" className="min-h-[80vh] flex items-center">
        <Container className="max-w-6xl">
          <div className="text-center space-y-8">
            <div className="space-y-6">
              <Heading level="1" className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Real Businesses,{" "}
                <span className="text-gradient">
                  Real Results
                </span>
              </Heading>
              
              <Text className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
                See how Service-as-Software has transformed operations, reduced costs, and accelerated growth for businesses like yours.
              </Text>
            </div>

            {/* Results Preview Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <DollarSign className="w-6 h-6 text-green-600" />
                </div>
                <Heading level="4" className="text-2xl font-bold text-gray-900 mb-1 text-center">
                  50%
                </Heading>
                <Text className="text-sm text-gray-600 text-center">
                  Average Cost Reduction
                </Text>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
                <Heading level="4" className="text-2xl font-bold text-gray-900 mb-1 text-center">
                  3x
                </Heading>
                <Text className="text-sm text-gray-600 text-center">
                  Faster Execution Speed
                </Text>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <TrendingUp className="w-6 h-6 text-purple-600" />
                </div>
                <Heading level="4" className="text-2xl font-bold text-gray-900 mb-1 text-center">
                  200+
                </Heading>
                <Text className="text-sm text-gray-600 text-center">
                  Processes Transformed
                </Text>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Award className="w-6 h-6 text-orange-600" />
                </div>
                <Heading level="4" className="text-2xl font-bold text-gray-900 mb-1 text-center">
                  100%
                </Heading>
                <Text className="text-sm text-gray-600 text-center">
                  Client Satisfaction
                </Text>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Industry Categories */}
      <Section padding="xl" background="light-blue">
        <Container className="max-w-6xl">
          <div className="text-center mb-12">
            <Heading level="2" className="text-3xl font-bold text-gray-900 mb-4">
              Transformations Across Industries
            </Heading>
            <Text className="text-lg text-gray-700">
              From manufacturing to professional services, see how different industries benefit
            </Text>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <BarChart3 className="w-6 h-6 text-blue-600" />
              </div>
              <Heading level="3" className="text-xl font-semibold text-gray-900 mb-3">
                Manufacturing
              </Heading>
              <Text className="text-gray-600 mb-4">
                Production planning, quality control, and supply chain optimization
              </Text>
              <div className="text-sm text-blue-600 font-medium">
                Coming Soon
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-green-600" />
              </div>
              <Heading level="3" className="text-xl font-semibold text-gray-900 mb-3">
                Professional Services
              </Heading>
              <Text className="text-gray-600 mb-4">
                Client onboarding, project management, and billing automation
              </Text>
              <div className="text-sm text-blue-600 font-medium">
                Coming Soon
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-purple-600" />
              </div>
              <Heading level="3" className="text-xl font-semibold text-gray-900 mb-3">
                Financial Services
              </Heading>
              <Text className="text-gray-600 mb-4">
                Transaction processing, compliance reporting, and risk assessment
              </Text>
              <div className="text-sm text-blue-600 font-medium">
                Coming Soon
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Coming Soon Section */}
      <Section padding="xl" background="white">
        <Container className="max-w-4xl">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-12 text-center border border-blue-200">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Zap className="w-8 h-8 text-blue-600" />
            </div>
            
            <Heading level="2" className="text-3xl font-bold text-gray-900 mb-6">
              Success Stories Coming Soon
            </Heading>
            <Text className="text-lg text-gray-700 mb-8 leading-relaxed">
              We're compiling detailed case studies showcasing real transformations and measurable results. 
              Check back soon to see how businesses like yours have achieved operational excellence.
            </Text>
            
            <div className="space-y-4">
              <Button
                size="lg"
                className="velox-cta-primary text-lg font-semibold px-8 py-4 h-auto rounded-xl"
                asChild
              >
                <Link href="/tools/business-audit">
                  Start Your Own Success Story
                </Link>
              </Button>
              
              <Text className="text-sm text-gray-600">
                Or explore our <Link href="/solutions" className="font-semibold text-blue-600 hover:underline">solutions</Link> to see what's possible
              </Text>
            </div>
          </div>
        </Container>
      </Section>
    </MainLayout>
  )
}
