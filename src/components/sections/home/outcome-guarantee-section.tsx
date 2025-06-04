import Link from "next/link"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"
import { Button } from "@/components/ui/button"
import { Shield, FileText, Calendar, RefreshCw } from "lucide-react"

const alignmentPrinciples = [
  {
    title: "Performance-based relationships",
    description: "Success metrics defined together - we both know what winning looks like",
    icon: FileText,
    color: "blue"
  },
  {
    title: "Continuous optimization included",
    description: "Not extra billable work - ongoing improvement is part of the service",
    icon: Calendar,
    color: "green"
  },
  {
    title: "Transparent ROI tracking",
    description: "Always know your value received - clear visibility into impact",
    icon: Shield,
    color: "purple"
  },
  {
    title: "Flexible engagements",
    description: "Adapt as your business evolves - no rigid contracts that don't fit",
    icon: RefreshCw,
    color: "orange"
  }
]

export function OutcomeGuaranteeSection() {
  return (
    <Section padding="xl" background="white">
      <Container className="max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Heading level="2" className="velox-text-h2 mb-6">
            Aligned Success: We Succeed When You Succeed
          </Heading>
          <Text className="velox-text-body text-xl text-gray-700 max-w-3xl mx-auto">
            Unlike software licenses you pay for regardless of usage, or consultants who bill by the hour, our model aligns perfectly with your success.
          </Text>
        </div>

        {/* Guarantee Box */}
        <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 text-white mb-12">
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-10 h-10 text-blue-600" />
            </div>
            <Heading level="3" className="text-3xl font-bold mb-4">
              Our Alignment Principles:
            </Heading>
          </div>

          {/* Alignment Principles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {alignmentPrinciples.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <Heading level="4" className="text-lg font-bold text-white mb-2">
                        {feature.title}
                      </Heading>
                      <Text className="text-blue-100 leading-relaxed">
                        {feature.description}
                      </Text>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Quote and CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200 max-w-4xl mx-auto mb-8">
            <Text className="text-xl font-semibold text-blue-900 italic mb-6">
              "This isn't about guarantees—it's about fundamental alignment. When your operations run smoothly, we both win."
            </Text>

            <Button
              size="lg"
              className="velox-cta-primary text-lg font-semibold px-8 py-4 h-auto rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              asChild
            >
              <Link href="/tools/business-audit">
                <div className="flex flex-col items-center py-2">
                  <span className="text-lg">Explore Our Aligned Approach</span>
                  <span className="text-sm font-normal opacity-90">Performance-based relationships</span>
                </div>
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  )
}
