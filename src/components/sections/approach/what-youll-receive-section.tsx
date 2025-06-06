"use client"

import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"
import { FileText, MessageCircle, Users, ArrowRight, Clock } from "lucide-react"

export function WhatYoullReceiveSection() {
  return (
    <Section padding="xl" background="light-to-white">
      <Container className="max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Heading level="2" className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Before You Decide: See Exactly What You'll Receive
          </Heading>
          <Text className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
            Unlike software demos, you can't "try" Service-as-Software. But you can see exactly what you'll receive:
          </Text>
        </div>

        {/* Examples Grid */}
        <div className="space-y-12 mb-16">
          {/* Invoice Processing Example */}
          <div className="bg-white rounded-2xl p-8 border border-blue-200 shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                <FileText className="w-8 h-8 text-blue-600" />
              </div>
              <Heading level="3" className="text-2xl font-bold text-gray-900">
                Invoice Processing Example:
              </Heading>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-red-50 rounded-lg p-6 border border-red-200">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-red-600 font-bold text-lg">❌</span>
                  <Text className="font-semibold text-red-900">What you send us:</Text>
                </div>
                <Text className="text-red-800 leading-relaxed">
                  PDF invoices via email, vendor portals, paper invoices
                </Text>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6 border border-green-200">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-green-600 font-bold text-lg">✅</span>
                  <Text className="font-semibold text-green-900">What you receive:</Text>
                </div>
                <Text className="text-green-800 leading-relaxed">
                  Organized spreadsheet with GL codes, approval status, payment schedule - delivered within 4 hours
                </Text>
              </div>
            </div>
          </div>

          {/* Customer Service Example */}
          <div className="bg-white rounded-2xl p-8 border border-green-200 shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <MessageCircle className="w-8 h-8 text-green-600" />
              </div>
              <Heading level="3" className="text-2xl font-bold text-gray-900">
                Customer Service Example:
              </Heading>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-red-50 rounded-lg p-6 border border-red-200">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-red-600 font-bold text-lg">❌</span>
                  <Text className="font-semibold text-red-900">What you delegate:</Text>
                </div>
                <Text className="text-red-800 leading-relaxed">
                  Customer inquiry management from multiple channels
                </Text>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6 border border-green-200">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-green-600 font-bold text-lg">✅</span>
                  <Text className="font-semibold text-green-900">What you receive:</Text>
                </div>
                <Text className="text-green-800 leading-relaxed">
                  Responses sent, complex cases escalated with full context, weekly summary report
                </Text>
              </div>
            </div>
          </div>

          {/* Sales Follow-up Example */}
          <div className="bg-white rounded-2xl p-8 border border-purple-200 shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <Heading level="3" className="text-2xl font-bold text-gray-900">
                Sales Follow-up Example:
              </Heading>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-red-50 rounded-lg p-6 border border-red-200">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-red-600 font-bold text-lg">❌</span>
                  <Text className="font-semibold text-red-900">What you delegate:</Text>
                </div>
                <Text className="text-red-800 leading-relaxed">
                  Lead nurturing and pipeline management
                </Text>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6 border border-green-200">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-green-600 font-bold text-lg">✅</span>
                  <Text className="font-semibold text-green-900">What you receive:</Text>
                </div>
                <Text className="text-green-800 leading-relaxed">
                  Warm leads ready for your calls, all touchpoints logged, pipeline updated
                </Text>
              </div>
            </div>
          </div>
        </div>

        {/* Key Message */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-2xl p-8 text-center">
          <Heading level="3" className="text-2xl md:text-3xl font-bold mb-4">
            The Key: You never touch the technology. You just receive perfect results.
          </Heading>
          <Text className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
            This is the fundamental difference between Service-as-Software and traditional automation. 
            You delegate the entire process and receive the outcomes you need.
          </Text>
        </div>
      </Container>
    </Section>
  )
}
