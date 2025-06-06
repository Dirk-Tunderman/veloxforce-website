"use client"

import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"
import { Clock, FileText, TrendingUp, Target, ArrowDown, CheckCircle, XCircle } from "lucide-react"

export function DecisionTreeSection() {
  return (
    <Section padding="xl" background="white-to-light">
      <Container className="max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Heading level="1" className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Is Service-as-Software Right for Your Business?
          </Heading>
          <Text className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
            Follow this 4-step process to know if your process is ready for Service-as-Software
          </Text>
        </div>

        {/* Decision Tree */}
        <div className="space-y-12 mb-16">
          {/* Step 1: Time Test */}
          <div className="bg-white rounded-2xl p-8 border border-blue-200 shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <div>
                <Heading level="3" className="text-2xl font-bold text-gray-900">
                  Step 1: Time Test
                </Heading>
                <Text className="text-lg text-gray-600">
                  Does this process take 5+ hours weekly?
                </Text>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 rounded-lg p-6 border border-green-200">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <Text className="font-semibold text-green-900">Yes = Continue to Step 2</Text>
                </div>
                <Text className="text-green-800 text-sm">
                  Enough volume to justify service investment
                </Text>
              </div>
              
              <div className="bg-red-50 rounded-lg p-6 border border-red-200">
                <div className="flex items-center gap-2 mb-2">
                  <XCircle className="w-5 h-5 text-red-600" />
                  <Text className="font-semibold text-red-900">No = Focus on bigger processes first</Text>
                </div>
                <Text className="text-red-800 text-sm">
                  Start with higher-volume processes for better ROI
                </Text>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <ArrowDown className="w-8 h-8 text-blue-400" />
          </div>

          {/* Step 2: Rules Test */}
          <div className="bg-white rounded-2xl p-8 border border-green-200 shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <FileText className="w-8 h-8 text-green-600" />
              </div>
              <div>
                <Heading level="3" className="text-2xl font-bold text-gray-900">
                  Step 2: Rules Test
                </Heading>
                <Text className="text-lg text-gray-600">
                  Does it follow consistent steps each time?
                </Text>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 rounded-lg p-6 border border-green-200">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <Text className="font-semibold text-green-900">Yes = Continue to Step 3</Text>
                </div>
                <Text className="text-green-800 text-sm">
                  Predictable processes can be delegated effectively
                </Text>
              </div>
              
              <div className="bg-red-50 rounded-lg p-6 border border-red-200">
                <div className="flex items-center gap-2 mb-2">
                  <XCircle className="w-5 h-5 text-red-600" />
                  <Text className="font-semibold text-red-900">No = Document the process first</Text>
                </div>
                <Text className="text-red-800 text-sm">
                  Standardize before delegating for best results
                </Text>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <ArrowDown className="w-8 h-8 text-blue-400" />
          </div>

          {/* Step 3: Value Test */}
          <div className="bg-white rounded-2xl p-8 border border-purple-200 shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-purple-600" />
              </div>
              <div>
                <Heading level="3" className="text-2xl font-bold text-gray-900">
                  Step 3: Value Test
                </Heading>
                <Text className="text-lg text-gray-600">
                  Would perfect execution save 2x the service cost?
                </Text>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 rounded-lg p-6 border border-green-200">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <Text className="font-semibold text-green-900">Yes = Continue to Step 4</Text>
                </div>
                <Text className="text-green-800 text-sm">
                  Clear financial benefit justifies investment
                </Text>
              </div>
              
              <div className="bg-red-50 rounded-lg p-6 border border-red-200">
                <div className="flex items-center gap-2 mb-2">
                  <XCircle className="w-5 h-5 text-red-600" />
                  <Text className="font-semibold text-red-900">No = Focus on higher-value processes first</Text>
                </div>
                <Text className="text-red-800 text-sm">
                  Start with processes that offer better ROI
                </Text>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <ArrowDown className="w-8 h-8 text-blue-400" />
          </div>

          {/* Step 4: Strategic Test */}
          <div className="bg-white rounded-2xl p-8 border border-orange-200 shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                <Target className="w-8 h-8 text-orange-600" />
              </div>
              <div>
                <Heading level="3" className="text-2xl font-bold text-gray-900">
                  Step 4: Strategic Test
                </Heading>
                <Text className="text-lg text-gray-600">
                  Would delegating this free your team for higher-value work?
                </Text>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 rounded-lg p-6 border border-green-200">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <Text className="font-semibold text-green-900">Yes = Perfect for Service-as-Software</Text>
                </div>
                <Text className="text-green-800 text-sm">
                  Your team can focus on strategic work that drives growth
                </Text>
              </div>
              
              <div className="bg-red-50 rounded-lg p-6 border border-red-200">
                <div className="flex items-center gap-2 mb-2">
                  <XCircle className="w-5 h-5 text-red-600" />
                  <Text className="font-semibold text-red-900">No = Keep this process internal</Text>
                </div>
                <Text className="text-red-800 text-sm">
                  Some processes are better kept in-house
                </Text>
              </div>
            </div>
          </div>
        </div>

        {/* Conclusion */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 text-white rounded-2xl p-8 text-center">
          <Heading level="2" className="text-3xl md:text-4xl font-bold mb-4">
            If you passed all 4 tests, this process is ready to delegate.
          </Heading>
          <Text className="text-lg text-green-100 leading-relaxed max-w-3xl mx-auto">
            You've identified a process that meets all criteria for successful Service-as-Software implementation.
          </Text>
        </div>
      </Container>
    </Section>
  )
}
