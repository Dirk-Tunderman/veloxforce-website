"use client"

import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"
import { Building2, Users, Clock, CheckCircle } from "lucide-react"

interface ProfileCategory {
  title: string
  icon: any
  items: string[]
  color: string
}

const profileCategories: ProfileCategory[] = [
  {
    title: "Business Characteristics",
    icon: Building2,
    items: [
      "10-200 employees with established operations",
      "Proven processes that need scaling",
      "Growth ambitions beyond current capacity",
      "Leadership ready to delegate operations"
    ],
    color: "blue"
  },
  {
    title: "Cultural Indicators",
    icon: Users,
    items: [
      "Values strategic thinking over busy work",
      "Invests in tools that multiply capability",
      "Believes in focusing on core competencies",
      "Ready to trust partners with execution"
    ],
    color: "gray"
  },
  {
    title: "Timing Signals",
    icon: Clock,
    items: [
      "Considering hiring for repetitive roles",
      "Team mentions burnout from routine tasks",
      "Strategic initiatives consistently delayed",
      "Quality suffering due to volume"
    ],
    color: "gray"
  }
]

export function IdealPartnerProfileSection() {
  return (
    <Section padding="xl" background="light-to-white">
      <Container className="max-w-6xl">
        <div className="text-center mb-12">
          <Heading level="2" className="text-3xl md:text-4xl font-bold mb-4">
            Who Thrives with Service-as-Software
          </Heading>
          <Text className="text-xl text-gray-600 max-w-3xl mx-auto">
            Success patterns we've observed across 200+ implementations
          </Text>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {profileCategories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <div key={index} className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-12 h-12 ${category.color === 'blue' ? 'bg-blue-600' : 'bg-gray-700'} rounded-full flex items-center justify-center`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <Heading level="3" className="text-lg font-bold text-gray-900">
                    {category.title}
                  </Heading>
                </div>
                
                <ul className="space-y-3">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <Text className="text-gray-700">{item}</Text>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        {/* Success Story Callout */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl p-8">
          <div className="max-w-4xl mx-auto text-center">
            <Heading level="3" className="text-2xl font-bold mb-4">
              The Common Thread
            </Heading>
            <Text className="text-lg text-blue-100 leading-relaxed">
              Every successful Service-as-Software partnership shares one trait:{" "}
              <span className="font-bold text-white">
                Leadership that values strategic work over operational control.
              </span>{" "}
              They understand that true growth comes from delegation, not micromanagement.
            </Text>
          </div>
        </div>
      </Container>
    </Section>
  )
}