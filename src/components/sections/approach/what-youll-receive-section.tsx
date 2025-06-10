"use client"

import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"
import { FileText, MessageCircle, Users, ArrowRight, Clock, X, Check } from "lucide-react"

export function WhatYoullReceiveSection() {
  return (
    <Section padding="xl" background="light-to-white">
      <Container className="max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
              Before You Decide: See Exactly What You'll Receive
            </span>
          </h2>
          <Text className="velox-text-lead max-w-4xl mx-auto">
            Unlike software demos, you can't "try" Service-as-Software. But you can see exactly what you'll receive:
          </Text>
        </div>

        {/* Examples Grid */}
        <div className="space-y-12 mb-16">
          {/* Invoice Processing Example */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
                <FileText className="w-6 h-6 text-gray-700" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                Invoice Processing Example:
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
                    <ArrowRight className="w-5 h-5 text-white" />
                  </div>
                  <Text className="font-semibold text-gray-900">What you send us:</Text>
                </div>
                <Text className="text-gray-700">
                  PDF invoices via email, vendor portals, paper invoices
                </Text>
              </div>

              <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <Text className="font-semibold text-blue-900">What you receive:</Text>
                </div>
                <Text className="text-blue-800">
                  Organized spreadsheet with GL codes, approval status, payment schedule - delivered within 4 hours
                </Text>
              </div>
            </div>
          </div>

          {/* Customer Service Example */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-gray-700" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                Customer Service Example:
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
                    <ArrowRight className="w-5 h-5 text-white" />
                  </div>
                  <Text className="font-semibold text-gray-900">What you delegate:</Text>
                </div>
                <Text className="text-gray-700">
                  Customer inquiry management from multiple channels
                </Text>
              </div>

              <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <Text className="font-semibold text-blue-900">What you receive:</Text>
                </div>
                <Text className="text-blue-800">
                  Responses sent, complex cases escalated with full context, weekly summary report
                </Text>
              </div>
            </div>
          </div>

          {/* Sales Follow-up Example */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                Sales Follow-up Example:
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
                    <ArrowRight className="w-5 h-5 text-white" />
                  </div>
                  <Text className="font-semibold text-gray-900">What you delegate:</Text>
                </div>
                <Text className="text-gray-700">
                  Lead nurturing and pipeline management
                </Text>
              </div>

              <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <Text className="font-semibold text-blue-900">What you receive:</Text>
                </div>
                <Text className="text-blue-800">
                  Warm leads ready for your calls, all touchpoints logged, pipeline updated
                </Text>
              </div>
            </div>
          </div>
        </div>

        {/* Key Message */}
        <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-blue-900 mb-4">
            The Key: You never touch the technology. You just receive perfect results.
          </h3>
          <Text className="text-lg text-blue-800 max-w-3xl mx-auto">
            This is the fundamental difference between Service-as-Software and traditional automation.
            You delegate the entire process and receive the outcomes you need.
          </Text>
        </div>
      </Container>
    </Section>
  )
}
