"use client"

import { motion } from "framer-motion"
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
    buttonText: "Check What I Can Delegate",
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
    <Section 
      padding="xl" 
      background="accent-blue"
      className="relative overflow-hidden"
    >
      {/* Premium Background Effects */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
      <div className="absolute inset-0 noise-overlay" />
      
      <Container className="relative z-10 max-w-6xl">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Heading level="2" className="velox-text-h2 mb-6">
            Start Delegating Your{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Processes Today
            </span>
          </Heading>
          <Text className="velox-text-lead max-w-3xl mx-auto">
            Choose your preferred way to discover what you can delegate
          </Text>
        </motion.div>

        {/* CTA Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ctaOptions.map((option, index) => {
            const IconComponent = option.icon
            return (
              <motion.div
                key={index}
                className="card-aurora rounded-2xl p-8 text-center hover:elevation-3 transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                {/* Enhanced Icon */}
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

                {/* Enhanced CTA Button */}
                <Button 
                  className="cta-magnetic w-full text-lg font-semibold px-6 py-4 rounded-xl"
                  asChild
                >
                  <a href={option.href}>
                    {option.buttonText}
                  </a>
                </Button>
              </motion.div>
            )
          })}
        </div>

        {/* Enhanced Bottom Message */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="card-solution rounded-2xl p-8 max-w-4xl mx-auto elevation-2">
            <Text className="velox-text-lead text-blue-900 font-semibold">
              Ready to transform your business operations through strategic delegation?
            </Text>
            <Text className="velox-text-body text-blue-800 mt-4">
              Join hundreds of businesses that have reclaimed their time and scaled their impact.
            </Text>
          </div>
        </motion.div>
      </Container>
    </Section>
  )
}
