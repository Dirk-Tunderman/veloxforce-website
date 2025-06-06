"use client"

import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"
import { Check, Shield, TrendingUp, Calendar, Unlock, Target } from "lucide-react"

export function ServiceGuarantee() {
  return (
    <Section padding="xl" background="light-to-white">
      <Container className="max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Heading level="2" className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Our Service-as-Software Guarantee
          </Heading>
          <Text className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
            Clear commitments that protect your investment and ensure your success
          </Text>
        </div>

        {/* Guarantee Items Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-2xl p-8 border border-blue-200 shadow-lg text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Target className="w-8 h-8 text-blue-600" />
            </div>
            <Heading level="3" className="text-xl font-bold text-gray-900 mb-4">
              ✓ Start Small
            </Heading>
            <Text className="text-gray-600 leading-relaxed">
              We begin with pilot volume to prove results before full deployment
            </Text>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-green-200 shadow-lg text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <TrendingUp className="w-8 h-8 text-green-600" />
            </div>
            <Heading level="3" className="text-xl font-bold text-gray-900 mb-4">
              ✓ Transparent Pricing
            </Heading>
            <Text className="text-gray-600 leading-relaxed">
              You know exactly what you pay before we start - no hidden costs
            </Text>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-purple-200 shadow-lg text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Calendar className="w-8 h-8 text-purple-600" />
            </div>
            <Heading level="3" className="text-xl font-bold text-gray-900 mb-4">
              ✓ Monthly Check-ins
            </Heading>
            <Text className="text-gray-600 leading-relaxed">
              Review results and optimize continuously based on real performance
            </Text>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-orange-200 shadow-lg text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Unlock className="w-8 h-8 text-orange-600" />
            </div>
            <Heading level="3" className="text-xl font-bold text-gray-900 mb-4">
              ✓ No Lock-in
            </Heading>
            <Text className="text-gray-600 leading-relaxed">
              Month-to-month service - we earn your business daily
            </Text>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-teal-200 shadow-lg text-center lg:col-span-2">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-teal-600" />
            </div>
            <Heading level="3" className="text-xl font-bold text-gray-900 mb-4">
              ✓ ROI Guarantee
            </Heading>
            <Text className="text-gray-600 leading-relaxed">
              If you don't save more than you invest in first 90 days, we'll refund the difference
            </Text>
          </div>
        </div>

        {/* Bottom Message */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl p-8 max-w-4xl mx-auto">
            <Heading level="3" className="text-2xl md:text-3xl font-bold mb-4">
              We only succeed when you receive sustained value.
            </Heading>
            <Text className="text-lg text-blue-100 leading-relaxed">
              Our business model aligns with your success - we're invested in delivering results that matter to your growth.
            </Text>
          </div>
        </div>
      </Container>
    </Section>
  )
}
