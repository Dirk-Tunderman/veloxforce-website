"use client"

import Link from "next/link"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"
import { Button } from "@/components/ui/button"
import { Calculator, Clock, AlertTriangle, DollarSign, CheckCircle, ArrowRight } from "lucide-react"

const qualificationCriteria = [
  {
    icon: Clock,
    title: "Meaningful time investment (5+ hours weekly)",
    description: "Enough volume to justify transformation",
    color: "gray" // 90% of icons should be gray-700
  },
  {
    icon: CheckCircle,
    title: "Consistent patterns (even with complex rules)",
    description: "Rules we can codify and perfect",
    color: "blue" // 10% of icons for success/completion
  },
  {
    icon: AlertTriangle,
    title: "Quality matters (errors create real impact)",
    description: "Where precision drives value",
    color: "gray" // 90% of icons should be gray-700
  },
  {
    icon: DollarSign,
    title: "Strategic work waiting (clear opportunity cost)",
    description: "Better uses for your team's expertise",
    color: "gray" // 90% of icons should be gray-700
  }
]

export function ROIQualificationSection() {
  return (
    <Section padding="xl" background="white">
      {/* Simplified Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 via-white to-gray-50/30" />

      <Container className="relative z-10 max-w-6xl">
        <div className="text-center mb-20 animate-on-scroll" data-animation="fadeInUp">
          <Heading level="2" className="velox-text-h2 mb-8" style={{ lineHeight: '1.3' }}>
            <span className="text-gradient">
              First:
            </span>{" "}
            Ensuring Mutual Success
          </Heading>
          <Text className="velox-text-lead max-w-4xl mx-auto">
            Service-as-Software works best when these align:
          </Text>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {qualificationCriteria.map((criteria, index) => {
            const IconComponent = criteria.icon
            return (
              <div
                key={index}
                className="group card-base animate-on-scroll"
                data-animation="fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="icon-container flex-shrink-0">
                    <IconComponent className={`w-6 h-6 ${
                      criteria.color === 'blue' ? 'icon-accent' : 'icon-primary'
                    }`} />
                  </div>
                  <div className="flex-1">
                    <Heading level="3" className="velox-text-h3 mb-3 group-hover:text-blue-700 transition-colors duration-300">
                      {criteria.title}
                    </Heading>
                    <Text className="velox-text-body">
                      {criteria.description}
                    </Text>
                  </div>
                </div>
              </div>
            )
          })}
        </div>




      </Container>
    </Section>
  )
}