import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"
import { Button } from "@/components/ui/button"
import { Target, Calculator, MessageCircle } from "lucide-react"

const ctaOptions = [
  {
    icon: Target,
    title: "Start With Your Biggest Time Drain",
    description: "Tell us which task hurts most",
    buttonText: "Identify My First Digital Employee",
    href: "/tools/business-audit"
  },
  {
    icon: Calculator,
    title: "See ROI for Your Volumes",
    description: "Calculate savings based on your specific numbers",
    buttonText: "Calculate My Impact",
    href: "/tools/roi-calculator"
  },
  {
    icon: MessageCircle,
    title: "Ask About Your Specific Process",
    description: '"Can you handle our unique situation?"',
    buttonText: "Quick Expert Chat",
    href: "/contact"
  }
]

export function DigitalWorkforceCTA() {
  return (
    <Section padding="xl" background="primary" className="bg-blue-900">
      <Container className="max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Heading level="2" className="velox-text-h2 text-white mb-4">
            Build Your Digital Workforce
          </Heading>
        </div>

        {/* CTA Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ctaOptions.map((option, index) => {
            const IconComponent = option.icon
            return (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 text-center"
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <IconComponent className="w-8 h-8 text-blue-600" />
                </div>

                {/* Content */}
                <Heading level="3" className="text-xl font-bold text-gray-900 mb-4">
                  {option.title}
                </Heading>
                
                <Text className="text-gray-700 mb-8">
                  {option.description}
                </Text>

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

        {/* Bottom Spacing */}
        <div className="mt-16 text-center">
          <Text className="text-blue-100 text-lg">
            Ready to transform your business operations with intelligent digital employees?
          </Text>
        </div>
      </Container>
    </Section>
  )
}
