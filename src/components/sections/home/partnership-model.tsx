"use client"

import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"
import { Crown, Cog, Target, Shield, TrendingUp, Settings } from "lucide-react"

export function PartnershipModel() {
  return (
    <Section padding="xl" background="light-to-white">
      <Container className="max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Heading level="2" className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            The Perfect Partnership
          </Heading>
          <Text className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
            Clear division of responsibilities for maximum effectiveness
          </Text>
        </div>

        {/* Two-Column Layout */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* What You Own (Strategic Layer) */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center">
                <Crown className="w-8 h-8 text-white" />
              </div>
              <div>
                <Heading level="3" className="text-2xl font-bold text-blue-900 mb-2">
                  What You Own
                </Heading>
                <Text className="text-blue-700 font-medium">Strategic Layer</Text>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="w-5 h-5 text-white" />
                </div>
                <div>
                  <Text className="font-semibold text-gray-900 mb-1">Your business knowledge and expertise</Text>
                  <Text className="text-sm text-gray-600">You understand your customers and market</Text>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <div>
                  <Text className="font-semibold text-gray-900 mb-1">Process improvement decisions</Text>
                  <Text className="text-sm text-gray-600">You decide what should be optimized</Text>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <div>
                  <Text className="font-semibold text-gray-900 mb-1">Quality standards and requirements</Text>
                  <Text className="text-sm text-gray-600">You set the bar for excellence</Text>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="w-5 h-5 text-white" />
                </div>
                <div>
                  <Text className="font-semibold text-gray-900 mb-1">Continuous optimization of what works</Text>
                  <Text className="text-sm text-gray-600">You guide strategic improvements</Text>
                </div>
              </div>
            </div>
          </div>

          {/* What We Own (Execution Layer) */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border border-gray-200">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-gray-600 to-gray-700 rounded-full flex items-center justify-center">
                <Cog className="w-8 h-8 text-white" />
              </div>
              <div>
                <Heading level="3" className="text-2xl font-bold text-gray-900 mb-2">
                  What We Own
                </Heading>
                <Text className="text-gray-700 font-medium">Execution Layer</Text>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-gray-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Settings className="w-5 h-5 text-white" />
                </div>
                <div>
                  <Text className="font-semibold text-gray-900 mb-1">All technical complexity and decisions</Text>
                  <Text className="text-sm text-gray-600">We handle the technical implementation</Text>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-gray-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <div>
                  <Text className="font-semibold text-gray-900 mb-1">Ensuring processes run perfectly 24/7</Text>
                  <Text className="text-sm text-gray-600">We guarantee operational excellence</Text>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-gray-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <div>
                  <Text className="font-semibold text-gray-900 mb-1">Scaling to any volume you need</Text>
                  <Text className="text-sm text-gray-600">We handle capacity and performance</Text>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-gray-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Cog className="w-5 h-5 text-white" />
                </div>
                <div>
                  <Text className="font-semibold text-gray-900 mb-1">Adapting when technology changes</Text>
                  <Text className="text-sm text-gray-600">We stay current with tech evolution</Text>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Message */}
        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg max-w-4xl mx-auto">
            <Text className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
              You're the architect. We're the construction crew that builds it perfectly every time.
            </Text>
            <Text className="text-gray-600 leading-relaxed">
              This clear division of responsibilities ensures you stay focused on what only you can do: 
              growing your business and serving your customers.
            </Text>
          </div>
        </div>
      </Container>
    </Section>
  )
}
