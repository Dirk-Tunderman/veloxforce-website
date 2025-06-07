"use client"

import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"
import { DollarSign, Clock, AlertTriangle, TrendingDown, Calculator } from "lucide-react"

export function TrueCostSection() {
  return (
    <Section padding="xl" background="white-to-light">
      <Container className="max-w-6xl">
        <div className="text-center mb-16">
          <Heading level="2" className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Your Current Process: The Hidden Invoice
          </Heading>
          <Text className="text-xl text-gray-600 max-w-3xl mx-auto">
            Most businesses only see the tip of their operational cost iceberg. The real cost runs much deeper.
          </Text>
        </div>

        {/* Cost Comparison Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Direct Costs */}
          <div className="bg-gray-100 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <Heading level="3" className="text-xl font-bold text-gray-900">
                Direct Costs You See:
              </Heading>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 flex-shrink-0" />
                <Text className="text-gray-700">Salaries for processing work</Text>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 flex-shrink-0" />
                <Text className="text-gray-700">Software subscriptions</Text>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 flex-shrink-0" />
                <Text className="text-gray-700">Error corrections</Text>
              </li>
            </ul>
          </div>

          {/* Hidden Costs */}
          <div className="bg-red-50 border border-red-200 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-white" />
              </div>
              <Heading level="3" className="text-xl font-bold text-red-900">
                Hidden Costs You Don't:
              </Heading>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                <Text className="text-red-800">Strategic work not done</Text>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                <Text className="text-red-800">Growth opportunities missed</Text>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                <Text className="text-red-800">Team talent underutilized</Text>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                <Text className="text-red-800">Innovation postponed</Text>
              </li>
            </ul>
          </div>
        </div>

        {/* Real Example Callout */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl p-8 mb-16">
          <div className="flex items-start gap-6">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
              <Calculator className="w-8 h-8 text-white" />
            </div>
            <div>
              <Heading level="3" className="text-2xl font-bold mb-4">
                Real Example: The Invoice Processing Reality
              </Heading>
              <div className="space-y-2">
                <Text className="text-lg">
                  <span className="font-bold">10 hours weekly</span> on invoicing
                </Text>
                <Text className="text-lg">
                  = <span className="font-bold">520 hours annually</span>
                </Text>
                <Text className="text-lg">
                  = <span className="font-bold">13 weeks of strategic work lost</span>
                </Text>
                <Text className="text-xl font-bold mt-4 text-yellow-300">
                  Service-as-Software reverses this equation.
                </Text>
              </div>
            </div>
          </div>
        </div>

        {/* Think Differently Section */}
        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
          <Heading level="3" className="text-2xl font-bold text-center mb-8">
            Think Differently About Automation
          </Heading>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <Heading level="4" className="text-lg font-bold text-red-600 mb-4">
                Stop Asking:
              </Heading>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <TrendingDown className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <Text className="text-gray-700">"What software should we buy?"</Text>
                </li>
                <li className="flex items-start gap-3">
                  <TrendingDown className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <Text className="text-gray-700">"How do we manage this tool?"</Text>
                </li>
                <li className="flex items-start gap-3">
                  <TrendingDown className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <Text className="text-gray-700">"What are the features?"</Text>
                </li>
              </ul>
            </div>
            
            <div>
              <Heading level="4" className="text-lg font-bold text-green-600 mb-4">
                Start Asking:
              </Heading>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <Text className="text-gray-700">"What outcomes do we need?"</Text>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <Text className="text-gray-700">"Who handles this for us?"</Text>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <Text className="text-gray-700">"What's the real ROI?"</Text>
                </li>
              </ul>
            </div>
          </div>
          
          <Text className="text-center text-lg font-semibold text-blue-600 mt-8">
            This shift changes everything.
          </Text>
        </div>
      </Container>
    </Section>
  )
}