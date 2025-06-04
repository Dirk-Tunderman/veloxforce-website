import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"
import { Button } from "@/components/ui/button"
import { MapPin, Calculator, MessageCircle, Download } from "lucide-react"

const ctaOptions = [
  {
    icon: MapPin,
    title: "Map Your Automation Opportunities",
    description: "List your repetitive tasks and see transformation potential",
    time: "15 minutes",
    outcome: "Clear automation roadmap",
    buttonText: "Start Task Mapping",
    href: "/tools/business-audit"
  },
  {
    icon: Calculator,
    title: "Calculate Your ROI",
    description: "Input your volumes and see time/cost savings",
    time: "5 minutes",
    outcome: "Specific numbers for your business",
    buttonText: "Calculate My Impact",
    href: "/tools/roi-calculator"
  },
  {
    icon: MessageCircle,
    title: "Discuss Your Specific Situation",
    description: "Talk through your unique challenges with an expert",
    time: "30 minutes",
    outcome: "Honest assessment and recommendations",
    buttonText: "Book Strategic Discussion",
    href: "/contact"
  }
]

export function SolutionsCTA() {
  return (
    <>
      {/* Main CTA Section */}
      <Section padding="xl" background="primary" className="bg-blue-900">
        <Container className="max-w-6xl">
          {/* Section Header */}
          <div className="text-center mb-12">
            <Heading level="2" className="velox-text-h2 text-white mb-4">
              Ready to Free Your Team for Growth?
            </Heading>
            <Text className="velox-text-body text-xl text-blue-100">
              Three Ways to Move Forward:
            </Text>
          </div>

          {/* CTA Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ctaOptions.map((option, index) => {
              const IconComponent = option.icon
              return (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                >
                  {/* Icon */}
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-blue-600" />
                  </div>

                  {/* Content */}
                  <Heading level="3" className="text-xl font-bold text-gray-900 mb-3">
                    {option.title}
                  </Heading>
                  
                  <Text className="text-gray-700 mb-4">
                    {option.description}
                  </Text>

                  {/* Time & Outcome */}
                  <div className="mb-6 space-y-2">
                    <Text className="text-sm text-gray-500">
                      Time: {option.time}
                    </Text>
                    <Text className="text-sm text-gray-700">
                      Outcome: {option.outcome}
                    </Text>
                  </div>

                  {/* CTA Button */}
                  <Button 
                    className="velox-cta-primary w-full"
                    asChild
                  >
                    <a href={option.href}>
                      {option.buttonText}
                    </a>
                  </Button>
                </div>
              )
            })}
          </div>
        </Container>
      </Section>

      {/* Free Guide Section */}
      <Section padding="md" background="light-blue" className="bg-gray-50">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <Text className="text-gray-700 mb-4">
              Not ready to talk?
            </Text>
            <Text className="text-lg text-gray-900 mb-6">
              Download "The SME Guide to Digital Employees" - See how businesses like yours are transforming
            </Text>
            <Button 
              variant="outline" 
              className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
              asChild
            >
              <a href="/resources/sme-guide" className="flex items-center gap-2">
                <Download className="w-4 h-4" />
                Download Free Guide
              </a>
            </Button>
          </div>
        </Container>
      </Section>
    </>
  )
}
