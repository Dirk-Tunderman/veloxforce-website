"use client"

import { RefreshCw, Sparkles, CheckCircle } from "lucide-react"

import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"

const approaches = [
  {
    id: 1,
    icon: RefreshCw,
    title: "Enhance Your Current Systems",
    subtitle: "If your processes work well but take too much time, why change everything? We can often enhance what you have:",
    benefits: [
      "Teach AI your existing workflows",
      "Keep the tools your team knows",
      "Add intelligence behind the scenes",
      "Maintain familiar outputs"
    ],
    example: {
      title: "Example:",
      description: "We worked with a manufacturer who loved their 20-year-old invoicing system. Instead of replacing it, we taught AI to understand their process. Now AI handles data entry while preserving their exact workflow. The team delegates to AI just like they would to an assistant."
    },
    color: "blue"
  },
  {
    id: 2,
    icon: Sparkles,
    title: "Implement Fresh Solutions",
    subtitle: "Sometimes starting fresh makes sense. When it does, we can:",
    benefits: [
      "Design optimal workflows from scratch",
      "Select tools that work together seamlessly",
      "Build clear delegation frameworks",
      "Handle ongoing management"
    ],
    example: {
      title: "Example:",
      description: "A services firm was juggling five different systems. We created a unified workflow where they delegate entire processes to AI. Their capacity tripled without adding staff."
    },
    color: "green"
  }
]

export function TwoWaysSection() {

  return (
    <Section padding="lg" background="white-to-light">
      <Container>
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Heading level="2" className="velox-text-h2 mb-6">
              Two Approaches We've Found Effective
            </Heading>
            <Text className="text-lg text-gray-600 max-w-3xl mx-auto">
              Since every business has <span className="font-semibold text-gray-800">unique needs</span>, we don't believe in <span className="font-semibold text-gray-800">one-size-fits-all solutions</span>.
            </Text>
          </div>

          {/* Two Approaches */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {approaches.map((approach, index) => (
              <div
                key={approach.id}
                className={`${approach.color === 'blue' ? 'bg-gradient-to-br from-blue-50 to-blue-100 border-blue-300' : 'bg-gradient-to-br from-green-50 to-green-100 border-green-300'} border rounded-xl p-8 h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
              >
                {/* Header */}
                <div className="flex items-start mb-6">
                  <div className={`w-16 h-16 ${approach.color === 'blue' ? 'bg-gradient-to-br from-blue-600 to-blue-700' : 'bg-gradient-to-br from-green-600 to-green-700'} rounded-xl flex items-center justify-center mr-4 shadow-md`}>
                    <approach.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <Heading level="3" className={`text-xl font-bold mb-2 ${approach.color === 'blue' ? 'text-blue-900' : 'text-green-900'}`}>
                      Approach {approach.id}: {approach.title}
                    </Heading>
                  </div>
                </div>

                {/* Subtitle */}
                <Text className="text-lg text-gray-700 mb-6 leading-relaxed">
                  {approach.subtitle}
                </Text>

                {/* Benefits */}
                <div className="mb-8">
                  <ul className="space-y-4">
                    {approach.benefits.map((benefit, benefitIndex) => (
                      <li
                        key={benefit}
                        className="flex items-start"
                      >
                        <div className={`w-3 h-3 ${approach.color === 'blue' ? 'bg-blue-600' : 'bg-green-600'} rounded-full mt-1.5 mr-4 flex-shrink-0 shadow-sm`}></div>
                        <Text className="text-base text-gray-700 leading-relaxed">{benefit}</Text>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Example */}
                <div className={`${approach.color === 'blue' ? 'bg-gradient-to-r from-blue-100 to-blue-200 border-blue-400' : 'bg-gradient-to-r from-green-100 to-green-200 border-green-400'} border rounded-xl p-6 shadow-sm`}>
                  <Text className={`font-bold text-lg ${approach.color === 'blue' ? 'text-blue-900' : 'text-green-900'} mb-3`}>
                    {approach.example.title}
                  </Text>
                  <Text className="text-base text-gray-700 leading-relaxed">
                    {approach.example.description}
                  </Text>
                </div>
              </div>
            ))}
          </div>

          {/* Conclusion */}
          <div className="text-center">
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 border border-blue-300 rounded-xl p-8 max-w-3xl mx-auto shadow-md">
              <Text className="text-xl font-bold text-blue-900 mb-2">
                The right approach depends entirely on <span className="text-purple-800">your situation</span>.
              </Text>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
