"use client"

import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"
import { Quote, Crown, Target, TrendingUp, X, Check } from "lucide-react"

export function StrategicLeadershipSection() {
  return (
    <Section padding="xl" background="light-to-white">
      <Container className="max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Heading level="2" className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Why Successful CEOs Stop Operating and Start Delegating
          </Heading>
        </div>

        {/* Quote */}
        <div className="bg-blue-50 border-l-4 border-blue-600 rounded-r-2xl p-8 mb-16">
          <div className="flex items-start gap-4">
            <Quote className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <Text className="text-xl text-blue-900 font-medium leading-relaxed mb-4">
                "I delegate accounting to my bookkeeper, legal to my lawyer, IT to my provider.
                Why was my team still spending 15 hours weekly on manual invoice processing instead of financial analysis?"
              </Text>
              <Text className="text-blue-700 font-semibold">
                - Sarah Chen, CEO, MidCorp Manufacturing
              </Text>
            </div>
          </div>
        </div>

        {/* Strategic Leader's Mindset */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <Heading level="3" className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              The Strategic Leader's Mindset:
            </Heading>
          </div>

          <div className="space-y-8">
            {/* Mindset 1 */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-red-50 rounded-2xl p-6 border border-red-200">
                <div className="flex items-center gap-3 mb-4">
                  <X className="w-6 h-6 text-red-600" />
                  <Text className="font-bold text-red-900">Old Thinking:</Text>
                </div>
                <Text className="text-red-800 text-lg">
                  "My team needs to handle every manual task"
                </Text>
              </div>
              
              <div className="bg-green-50 rounded-2xl p-6 border border-green-200">
                <div className="flex items-center gap-3 mb-4">
                  <Check className="w-6 h-6 text-green-600" />
                  <Text className="font-bold text-green-900">New Thinking:</Text>
                </div>
                <Text className="text-green-800 text-lg">
                  "My team should focus on strategic work"
                </Text>
              </div>
            </div>

            {/* Mindset 2 */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-red-50 rounded-2xl p-6 border border-red-200">
                <div className="flex items-center gap-3 mb-4">
                  <X className="w-6 h-6 text-red-600" />
                  <Text className="font-bold text-red-900">Old Thinking:</Text>
                </div>
                <Text className="text-red-800 text-lg">
                  "Only my people can do it right"
                </Text>
              </div>
              
              <div className="bg-green-50 rounded-2xl p-6 border border-green-200">
                <div className="flex items-center gap-3 mb-4">
                  <Check className="w-6 h-6 text-green-600" />
                  <Text className="font-bold text-green-900">New Thinking:</Text>
                </div>
                <Text className="text-green-800 text-lg">
                  "My people should do what only they can do"
                </Text>
              </div>
            </div>

            {/* Mindset 3 */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-red-50 rounded-2xl p-6 border border-red-200">
                <div className="flex items-center gap-3 mb-4">
                  <X className="w-6 h-6 text-red-600" />
                  <Text className="font-bold text-red-900">Old Thinking:</Text>
                </div>
                <Text className="text-red-800 text-lg">
                  "More volume means hiring more people"
                </Text>
              </div>
              
              <div className="bg-green-50 rounded-2xl p-6 border border-green-200">
                <div className="flex items-center gap-3 mb-4">
                  <Check className="w-6 h-6 text-green-600" />
                  <Text className="font-bold text-green-900">New Thinking:</Text>
                </div>
                <Text className="text-green-800 text-lg">
                  "More volume means smarter delegation"
                </Text>
              </div>
            </div>
          </div>
        </div>

        {/* Key Message */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-2xl p-8 text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <Crown className="w-8 h-8 text-white" />
            <Heading level="3" className="text-2xl md:text-3xl font-bold">
              Your team's job isn't to process invoices perfectly.
            </Heading>
            <Crown className="w-8 h-8 text-white" />
          </div>
          <Text className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Their job is to analyze financial trends and support growth decisions.
          </Text>
        </div>
      </Container>
    </Section>
  )
}
