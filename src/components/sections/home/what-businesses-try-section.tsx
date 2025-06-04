"use client"

import { Clock, Users, TrendingDown, DollarSign, ArrowRight } from "lucide-react"

import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"

const traditionalOptions = [
  {
    icon: Clock,
    title: "Push through with longer hours",
    description: "Some owners try to handle growth by working harder. It works for a while, but everyone has limits.",
    color: "gray"
  },
  {
    icon: Users,
    title: "Build an operations team",
    description: "Hiring good operations people is expensive - senior salaries, benefits, training. And when you need to scale further? More hiring, more managing.",
    color: "gray"
  },
  {
    icon: TrendingDown,
    title: "Bring in automation help",
    description: "There are excellent consultants and agencies out there. Some deliver great results. But we've also seen many charge substantial fees, implement complex systems, then leave businesses struggling to manage new technology.",
    color: "gray"
  },
  {
    icon: DollarSign,
    title: "Outsource operations",
    description: "Offshoring can work well for some. For others, it brings quality concerns and communication challenges that create new headaches.",
    color: "gray"
  }
]

export function WhatBusinessesTrySection() {
  return (
    <Section padding="lg" background="white-to-light">
      <Container>
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <Heading level="2" className="velox-text-h2 mb-4">
              What we've seen businesses try:
            </Heading>
          </div>

          {/* Traditional Options Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {traditionalOptions.map((option, index) => (
              <div
                key={option.title}
                className="bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 rounded-xl p-6 hover:shadow-md transition-all duration-200"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-700 rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                    <option.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <Heading level="4" className="font-bold text-gray-900 mb-2 text-lg">
                      Option {index + 1}: {option.title}
                    </Heading>
                    <Text className="text-base text-gray-700 leading-relaxed">
                      {option.description}
                    </Text>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Conclusion Messages */}
          <div className="text-center">
            <div className="w-full flex justify-center mb-8">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 max-w-3xl mx-4">
                <Text className="text-base text-blue-800 font-medium leading-relaxed text-center">
                  Every approach has trade-offs. What works brilliantly for one business might create problems for another.
                </Text>
              </div>
            </div>

            <div className="w-full flex justify-center mb-8">
              <div className="max-w-3xl px-4">
                <Text className="text-xl text-gray-700 font-medium leading-relaxed text-center">
                  But what if there was a way to keep what's working while solving what isn't?
                </Text>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center shadow-lg">
                <ArrowRight className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
