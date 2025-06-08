"use client"

import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"
import { Check, X, ArrowRight } from "lucide-react"
import Link from "next/link"

export function ServiceAsSoftwareRevolution() {
  return (
    <Section padding="xl" background="transparent">
      <Container className="max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Heading level="2" className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            The Service-as-Software Revolution
          </Heading>
          <Text className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
            A fundamental shift in how businesses handle complexity
          </Text>
        </div>

        {/* Three-Column Comparison */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Traditional */}
          <div className="bg-gray-100 rounded-2xl p-8 text-center">
            <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <X className="w-8 h-8 text-white" />
            </div>
            <Heading level="3" className="text-xl font-bold text-gray-900 mb-4">Traditional</Heading>
            <div className="space-y-3 text-sm text-gray-700">
              <Text>You buy tools</Text>
              <Text>You operate them</Text>
              <Text>You handle complexity</Text>
            </div>
          </div>

          {/* SaaS */}
          <div className="bg-gray-100 rounded-2xl p-8 text-center">
            <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <X className="w-8 h-8 text-white" />
            </div>
            <Heading level="3" className="text-xl font-bold text-gray-900 mb-4">SaaS</Heading>
            <div className="space-y-3 text-sm text-gray-700">
              <Text>You rent tools</Text>
              <Text>You still operate them</Text>
              <Text>You still handle complexity</Text>
            </div>
          </div>

          {/* Service-as-Software */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-300 rounded-2xl p-8 text-center shadow-lg">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-8 h-8 text-white" />
            </div>
            <Heading level="3" className="text-xl font-bold text-blue-900 mb-4">Service-as-Software</Heading>
            <div className="space-y-3 text-sm text-blue-800 font-medium">
              <Text>You delegate process</Text>
              <Text>We deliver guaranteed results</Text>
              <Text>We handle the complexity for you</Text>
            </div>
          </div>
        </div>

        {/* Key Message */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl p-8 text-center">
          <Heading level="3" className="text-2xl md:text-3xl font-bold mb-4">
            You own the strategy. We own the execution.
          </Heading>
          <Text className="text-lg md:text-xl mb-6 text-blue-100">
            The perfect partnership for business growth
          </Text>
          <Link 
            href="/our-approach"
            className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-200 shadow-md hover:shadow-lg"
          >
            See How This Works
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Container>
    </Section>
  )
}
