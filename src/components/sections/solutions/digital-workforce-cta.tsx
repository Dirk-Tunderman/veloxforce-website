"use client"

import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"
import { Button } from "@/components/ui/button"
import { Target, Calculator, MessageCircle } from "lucide-react"

const ctaOptions = [
  {
    icon: Target,
    title: "Start With Your Biggest Time Drain",
    description: "Tell us which task hurts your operations the most",
    buttonText: "Check What I Can Delegate",
    href: "/tools/business-audit"
  },
  {
    icon: Calculator,
    title: "See ROI for Your Volumes",
    description: "Calculate savings based on your specific numbers",
    buttonText: "Calculate My Impact",
    href: "/tools/business-audit"
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
    <Section 
      padding="xl" 
      background="light-blue"
      className="relative overflow-hidden"
    >
      {/* Simplified Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-blue-100/60 to-blue-50/40" />
      
      <Container className="relative z-10 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll" data-animation="fadeInUp">
          <Heading level="2" className="velox-text-h2 mb-6" style={{ lineHeight: '1.3' }}>
            Start Delegating Your{" "}
            <span className="text-gradient">
              Processes Today
            </span>
          </Heading>
          <Text className="velox-text-lead max-w-3xl mx-auto text-gray-700">
            Choose your preferred way to discover what you can delegate
          </Text>
        </div>

        {/* CTA Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ctaOptions.map((option, index) => {
            const IconComponent = option.icon
            return (
              <div
                key={index}
                className="card-base bg-white/95 backdrop-blur rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 group animate-on-scroll"
                data-animation="fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className="icon-container-gradient w-20 h-20 mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-10 h-10 text-blue-600" />
                </div>

                {/* Content */}
                <Heading level="3" className="velox-text-h3 text-blue-900 mb-4 group-hover:text-blue-700 transition-colors duration-300">
                  {option.title}
                </Heading>
                
                <Text className="velox-text-body text-blue-800 mb-8 leading-relaxed">
                  {option.description}
                </Text>

                {/* CTA Button */}
                <Button 
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white w-full text-lg font-semibold px-6 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                  asChild
                >
                  <a href={option.href} className="block text-center">
                    {option.buttonText}
                  </a>
                </Button>
              </div>
            )
          })}
        </div>

        {/* Bottom Message */}
        <div className="mt-20 text-center animate-on-scroll" data-animation="fadeInUp">
          <div className="card-base bg-white/95 backdrop-blur rounded-2xl p-8 max-w-4xl mx-auto shadow-lg">
            <Text className="velox-text-lead text-blue-900 font-semibold text-center">
              Ready to transform your business operations through strategic delegation?
            </Text>
            <Text className="velox-text-body text-blue-800 mt-4 text-center">
              Join hundreds of businesses that have reclaimed their time and scaled their impact.
            </Text>
          </div>
        </div>
      </Container>
    </Section>
  )
}