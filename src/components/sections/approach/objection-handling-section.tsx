"use client"

import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Text } from "@/components/ui/typography"
import { Users, Shield, TrendingUp, Phone } from "lucide-react"

export function ObjectionHandlingSection() {
  return (
    <Section padding="xl" background="light-to-white">
      <Container className="max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
              Let's Address Your Concerns
            </span>
          </h2>
          <Text className="text-xl text-gray-600 max-w-3xl mx-auto">
            The questions every business leader asks. Here are the honest answers.
          </Text>
        </div>

        <div className="space-y-8">
          {/* How long will this really take? */}
          <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  "How long will this really take?"
                </h3>
                <Text className="text-lg text-gray-700 mb-4">
                  Depends on your complexity. Discovery tells us. Quick wins start fast, full implementation varies. We're honest about timelines after we understand your business.
                </Text>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <Text className="font-semibold text-blue-800">
                    Result: Realistic expectations based on YOUR specific situation.
                  </Text>
                </div>
              </div>
            </div>
          </div>

          {/* When will I see ROI? */}
          <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  "When will I see ROI?"
                </h3>
                <Text className="text-lg text-gray-700 mb-4">
                  Quick wins within weeks. Full payback typically 6-12 months. We calculate this during discovery based on YOUR actual operations.
                </Text>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <Text className="font-semibold text-green-800">
                    Result: ROI projections based on real data, not generic promises.
                  </Text>
                </div>
              </div>
            </div>
          </div>

          {/* How do you know our true costs? */}
          <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-8 h-8 text-purple-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  "How do you know our true costs?"
                </h3>
                <Text className="text-lg text-gray-700 mb-4">
                  We don't guess. We interview everyone involved, shadow the work, document everything. Your team tells us where the waste is.
                </Text>
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                  <Text className="font-semibold text-purple-800">
                    Result: Accurate cost analysis based on observation, not assumptions.
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What We DON'T Do Section */}
        <div className="mt-16 bg-gray-50 border border-gray-200 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">
            What We DON'T Do (Building Trust Through Boundaries)
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center">
              <h4 className="text-lg font-bold text-gray-800 mb-4">We Don't:</h4>
              <ul className="space-y-3">
                <li className="flex items-center justify-center gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0" />
                  <Text className="text-gray-700">Promise overnight transformations</Text>
                </li>
                <li className="flex items-center justify-center gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0" />
                  <Text className="text-gray-700">Use generic, one-size-fits-all solutions</Text>
                </li>
                <li className="flex items-center justify-center gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0" />
                  <Text className="text-gray-700">Proceed without clear ROI justification</Text>
                </li>
                <li className="flex items-center justify-center gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0" />
                  <Text className="text-gray-700">Leave you to manage technical complexity</Text>
                </li>
              </ul>
            </div>

            <div className="text-center">
              <h4 className="text-lg font-bold text-gray-800 mb-4">We Do:</h4>
              <ul className="space-y-3">
                <li className="flex items-center justify-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0" />
                  <Text className="text-gray-700">Follow our proven 8-week methodology</Text>
                </li>
                <li className="flex items-center justify-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0" />
                  <Text className="text-gray-700">Build systems your team can trust and build upon</Text>
                </li>
                <li className="flex items-center justify-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0" />
                  <Text className="text-gray-700">Only proceed when numbers guarantee success</Text>
                </li>
                <li className="flex items-center justify-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0" />
                  <Text className="text-gray-700">Handle all ongoing technical management</Text>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
