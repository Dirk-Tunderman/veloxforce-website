"use client"

import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"
import { CheckCircle, XCircle, Briefcase, Rocket, Store, Building2 } from "lucide-react"

interface Scenario {
  title: string
  description: string
  fit: boolean
  reason: string
  icon: any
}

const scenarios: Scenario[] = [
  {
    title: "The Growing Marketing Agency",
    description: "We have 3 account managers spending 50% of time on reporting instead of strategy.",
    fit: true,
    reason: "Perfect fit - clear process, high-value people, strategic impact",
    icon: Briefcase
  },
  {
    title: "The Early Startup",
    description: "Our processes change daily as we figure out what works.",
    fit: false,
    reason: "Not yet - stabilize first, automate later",
    icon: Rocket
  },
  {
    title: "The Professional Services Firm",
    description: "Client onboarding takes 2 days of coordinator time per client.",
    fit: true,
    reason: "Perfect fit - repeatable process, scaling bottleneck",
    icon: Building2
  },
  {
    title: "The Retail Business",
    description: "Customer service emails are overwhelming our small team.",
    fit: true,
    reason: "Perfect fit - clear patterns, team needed elsewhere",
    icon: Store
  }
]

export function CommonScenariosSection() {
  return (
    <Section padding="xl" background="light-to-white">
      <Container className="max-w-6xl">
        <div className="text-center mb-12">
          <Heading level="2" className="text-3xl md:text-4xl font-bold mb-4">
            "Is This You?" Real Scenarios
          </Heading>
          <Text className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how businesses like yours evaluate Service-as-Software fit
          </Text>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {scenarios.map((scenario, index) => {
            const IconComponent = scenario.icon
            return (
              <div 
                key={index} 
                className={`bg-white rounded-2xl p-8 border-2 ${
                  scenario.fit ? 'border-green-300' : 'border-red-300'
                } shadow-lg`}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 ${
                      scenario.fit ? 'bg-green-100' : 'bg-red-100'
                    } rounded-full flex items-center justify-center`}>
                      <IconComponent className={`w-6 h-6 ${
                        scenario.fit ? 'text-green-600' : 'text-red-600'
                      }`} />
                    </div>
                    <Heading level="3" className="text-lg font-bold text-gray-900">
                      Scenario {index + 1}: {scenario.title}
                    </Heading>
                  </div>
                  {scenario.fit ? (
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                  ) : (
                    <XCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
                  )}
                </div>

                {/* Description */}
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <Text className="text-gray-700 italic">
                    "{scenario.description}"
                  </Text>
                </div>

                {/* Verdict */}
                <div className={`rounded-lg p-4 ${
                  scenario.fit ? 'bg-green-50' : 'bg-red-50'
                }`}>
                  <Text className={`font-semibold ${
                    scenario.fit ? 'text-green-900' : 'text-red-900'
                  }`}>
                    {scenario.fit ? '✓' : '✗'} {scenario.reason}
                  </Text>
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Text className="text-lg text-gray-700 mb-4">
            Want to see more scenarios specific to your industry?
          </Text>
          <a 
            href="/solutions" 
            className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
          >
            See more scenarios in your industry →
          </a>
        </div>
      </Container>
    </Section>
  )
}