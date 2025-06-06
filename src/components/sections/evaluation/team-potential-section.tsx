"use client"

import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"
import { ArrowRight, Calculator, MessageCircle, Settings, Users } from "lucide-react"

export function TeamPotentialSection() {
  return (
    <Section padding="xl" background="white-to-light">
      <Container className="max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Heading level="2" className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            What Your Team Could Be Doing Instead
          </Heading>
        </div>

        {/* Team Potential Examples */}
        <div className="space-y-8 mb-16">
          {/* Accounting Team */}
          <div className="bg-white rounded-2xl p-8 border border-blue-200 shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <Calculator className="w-6 h-6 text-blue-600" />
              </div>
              <div className="flex-1">
                <div className="grid md:grid-cols-2 gap-4 items-center">
                  <div>
                    <Text className="text-gray-600 mb-2">Instead of manual invoice processing:</Text>
                  </div>
                  <div className="flex items-center gap-3">
                    <ArrowRight className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <Text className="font-semibold text-blue-900">
                      Your accounting people analyze financial trends and optimize cash flow
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Service Team */}
          <div className="bg-white rounded-2xl p-8 border border-green-200 shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-green-600" />
              </div>
              <div className="flex-1">
                <div className="grid md:grid-cols-2 gap-4 items-center">
                  <div>
                    <Text className="text-gray-600 mb-2">Instead of routine customer inquiries:</Text>
                  </div>
                  <div className="flex items-center gap-3">
                    <ArrowRight className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <Text className="font-semibold text-green-900">
                      Your service team builds relationships and handles complex problem-solving
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Operations Team */}
          <div className="bg-white rounded-2xl p-8 border border-purple-200 shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <Settings className="w-6 h-6 text-purple-600" />
              </div>
              <div className="flex-1">
                <div className="grid md:grid-cols-2 gap-4 items-center">
                  <div>
                    <Text className="text-gray-600 mb-2">Instead of data entry between systems:</Text>
                  </div>
                  <div className="flex items-center gap-3">
                    <ArrowRight className="w-5 h-5 text-purple-600 flex-shrink-0" />
                    <Text className="font-semibold text-purple-900">
                      Your operations people optimize workflows and improve processes
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sales Team */}
          <div className="bg-white rounded-2xl p-8 border border-orange-200 shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                <Users className="w-6 h-6 text-orange-600" />
              </div>
              <div className="flex-1">
                <div className="grid md:grid-cols-2 gap-4 items-center">
                  <div>
                    <Text className="text-gray-600 mb-2">Instead of manual sales follow-up:</Text>
                  </div>
                  <div className="flex items-center gap-3">
                    <ArrowRight className="w-5 h-5 text-orange-600 flex-shrink-0" />
                    <Text className="font-semibold text-orange-900">
                      Your sales team focuses on closing deals and building partnerships
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Question */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl p-8 text-center">
          <Heading level="3" className="text-2xl md:text-3xl font-bold mb-4">
            The Question:
          </Heading>
          <Text className="text-lg md:text-xl text-blue-100 leading-relaxed max-w-4xl mx-auto">
            Would you rather hire more people to handle growing volume, or free your current team to be more strategic?
          </Text>
        </div>
      </Container>
    </Section>
  )
}
