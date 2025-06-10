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
          <h2 className="velox-text-h1-premium mb-4">
            "Is This You?" Real Scenarios
          </h2>
          <Text className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how businesses like yours evaluate Service-as-Software fit
          </Text>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {scenarios.map((scenario, index) => {
            const IconComponent = scenario.icon
            return (
              <div 
                key={index} 
                className={`bg-white rounded-2xl p-8 shadow-lg transition-all duration-300 hover:shadow-xl relative overflow-hidden ${
                  scenario.fit 
                    ? 'border-2 border-green-200 hover:border-green-300' 
                    : 'border-2 border-red-200 hover:border-red-300'
                }`}
              >
                {/* Header Accent */}
                <div className={`absolute top-0 left-0 right-0 h-1 ${
                  scenario.fit ? 'bg-gradient-to-r from-green-500 to-emerald-500' : 'bg-gradient-to-r from-red-500 to-rose-500'
                }`}></div>
                
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-start gap-4">
                    <div className={`w-14 h-14 ${
                      scenario.fit 
                        ? 'bg-gradient-to-br from-green-50 to-green-100 border border-green-200' 
                        : 'bg-gradient-to-br from-red-50 to-red-100 border border-red-200'
                    } rounded-xl flex items-center justify-center shadow-sm`}>
                      <IconComponent className={`w-7 h-7 ${
                        scenario.fit ? 'text-green-600' : 'text-red-600'
                      }`} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`text-xs font-bold px-2 py-1 rounded-full ${
                          scenario.fit 
                            ? 'bg-green-100 text-green-700' 
                            : 'bg-red-100 text-red-700'
                        }`}>
                          Scenario {index + 1}
                        </span>
                      </div>
                      <Heading level="3" className="text-lg font-bold text-gray-900 leading-tight">
                        {scenario.title}
                      </Heading>
                    </div>
                  </div>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    scenario.fit ? 'bg-green-100' : 'bg-red-100'
                  }`}>
                    {scenario.fit ? (
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    ) : (
                      <XCircle className="w-5 h-5 text-red-600" />
                    )}
                  </div>
                </div>

                {/* Description */}
                <div className="bg-gray-50 rounded-xl p-4 mb-6">
                  <Text className="text-gray-700 italic leading-relaxed">
                    "{scenario.description}"
                  </Text>
                </div>

                {/* Verdict */}
                <div className={`rounded-xl p-4 border ${
                  scenario.fit 
                    ? 'bg-gradient-to-r from-green-50 to-emerald-50 border-green-200' 
                    : 'bg-gradient-to-r from-red-50 to-rose-50 border-red-200'
                }`}>
                  <div className="flex items-center gap-3">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                      scenario.fit ? 'bg-green-500' : 'bg-red-500'
                    }`}>
                      <span className="text-white text-sm font-bold">
                        {scenario.fit ? '✓' : '✗'}
                      </span>
                    </div>
                    <Text className={`font-semibold ${
                      scenario.fit ? 'text-green-900' : 'text-red-900'
                    }`}>
                      {scenario.reason}
                    </Text>
                  </div>
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