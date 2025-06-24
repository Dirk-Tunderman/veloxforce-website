import { Metadata } from "next"

import { MainLayout } from "@/components/layout/main-layout"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"
import { Button } from "@/components/ui/button"
import { constructMetadata } from "@/components/seo"
import { Mail, ArrowRight } from "lucide-react"

export const metadata: Metadata = constructMetadata({
  title: "Careers | Join the Veloxforce Team",
  description: "Join Veloxforce and learn skills that will make you invaluable for the next 10-20 years. We're always looking for people who take initiative and create value.",
  keywords: ["careers", "jobs", "veloxforce careers", "AI jobs", "future skills", "initiative", "value creation"],
  pathname: "/careers",
})

export default function CareersPage() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <Section padding="xl" background="white" className="min-h-[85vh] flex items-center">
        <Container className="max-w-3xl">
          <div className="text-center space-y-12">
            <div className="space-y-6">
              <Heading level="1" className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Join{" "}
                <span className="text-gradient">
                  Veloxforce
                </span>
              </Heading>
              
              <Text className="text-xl md:text-2xl text-gray-700">
                We're always looking for people who take initiative.
              </Text>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 md:p-10 space-y-8">
              <div className="space-y-4">
                <Text className="text-lg text-gray-800 font-medium">
                  Learn skills that will keep you valuable for the next 10-20 years.
                </Text>
                <Text className="text-gray-600">
                  We teach you a new way of working that ensures you'll always have a job in the future.
                </Text>
              </div>

              <div className="space-y-4">
                <Text className="font-semibold text-gray-900 text-center">
                  Send us:
                </Text>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-3 max-w-xl mx-auto pl-0 sm:pl-16">
                  <div className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <Text className="text-gray-700">Your motivation</Text>
                  </div>
                  <div className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <Text className="text-gray-700">Your CV</Text>
                  </div>
                  <div className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <Text className="text-gray-700">Projects you've worked on</Text>
                  </div>
                  <div className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <Text className="text-gray-700">Why you want to work with us</Text>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Button
                  size="lg"
                  className="velox-cta-primary text-lg font-semibold px-8 py-4 h-auto rounded-xl w-full sm:w-auto"
                  asChild
                >
                  <a href="mailto:team@veloxforce.ai?subject=Open Application">
                    <Mail className="w-5 h-5 mr-2" />
                    team@veloxforce.ai
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </MainLayout>
  )
}