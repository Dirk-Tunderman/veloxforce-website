"use client"

import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"
import { Button } from "@/components/ui/button"
import { X, Check, Calculator, TrendingUp, AlertTriangle, ArrowRight } from "lucide-react"
import Link from "next/link"

export function EvaluationGuideSection() {
  return (
    <Section padding="xl" background="white-to-light">
      <Container className="max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Heading level="1" className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Stop Comparing Apples to Oranges: How to Evaluate Service-as-Software
          </Heading>
          <Text className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
            Most businesses struggle to evaluate Service-as-Software because they compare it to the wrong things.
          </Text>
        </div>

        {/* Wrong vs Right Questions */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Wrong Questions */}
          <div className="bg-red-50 border border-red-200 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                <X className="w-6 h-6 text-red-600" />
              </div>
              <Heading level="3" className="text-xl font-bold text-red-900">
                ❌ Wrong Questions (Tool Thinking):
              </Heading>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                <Text className="text-red-800">"How much does it cost per month?"</Text>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                <Text className="text-red-800">"What features does it include?"</Text>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                <Text className="text-red-800">"Can I try it for free?"</Text>
              </div>
            </div>
          </div>

          {/* Right Questions */}
          <div className="bg-green-50 border border-green-200 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <Check className="w-6 h-6 text-green-600" />
              </div>
              <Heading level="3" className="text-xl font-bold text-green-900">
                ✅ Right Questions (Service Thinking):
              </Heading>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                <Text className="text-green-800">"What does this process currently cost us in time + errors + management?"</Text>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                <Text className="text-green-800">"What would perfect execution be worth to our growth?"</Text>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                <Text className="text-green-800">"What's the risk of continuing to operate this manually?"</Text>
              </div>
            </div>
          </div>
        </div>

        {/* Hidden Cost Reality */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl p-8 mb-16">
          <div className="text-center mb-8">
            <Heading level="2" className="text-3xl md:text-4xl font-bold mb-4">
              The Hidden Cost Reality:
            </Heading>
            <Text className="text-lg md:text-xl text-blue-100 leading-relaxed max-w-4xl mx-auto">
              Your current "cheap" manual process actually costs:
            </Text>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white/10 rounded-lg p-4 text-center">
              <Calculator className="w-8 h-8 text-white mx-auto mb-2" />
              <Text className="text-sm text-blue-100 mb-1">Time spent × hourly rate</Text>
              <Text className="text-lg font-bold text-white">Direct Labor Cost</Text>
            </div>
            <div className="bg-white/10 rounded-lg p-4 text-center">
              <AlertTriangle className="w-8 h-8 text-white mx-auto mb-2" />
              <Text className="text-sm text-blue-100 mb-1">Mistakes and rework</Text>
              <Text className="text-lg font-bold text-white">Error Costs</Text>
            </div>
            <div className="bg-white/10 rounded-lg p-4 text-center">
              <TrendingUp className="w-8 h-8 text-white mx-auto mb-2" />
              <Text className="text-sm text-blue-100 mb-1">Supervision and coordination</Text>
              <Text className="text-lg font-bold text-white">Management Overhead</Text>
            </div>
            <div className="bg-white/10 rounded-lg p-4 text-center">
              <ArrowRight className="w-8 h-8 text-white mx-auto mb-2" />
              <Text className="text-sm text-blue-100 mb-1">Strategic work not done</Text>
              <Text className="text-lg font-bold text-white">Opportunity Cost</Text>
            </div>
          </div>

          <div className="text-center">
            <Text className="text-xl font-bold text-white mb-4">
              Most clients discover their manual process costs 3-5x what they thought.
            </Text>
            <Text className="text-lg text-blue-100">
              Once you understand the real cost, Service-as-Software makes perfect sense.
            </Text>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            size="lg"
            className="velox-cta-primary text-lg font-semibold px-8 py-4 h-auto rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            asChild
          >
            <Link href="/tools/business-audit">
              Calculate My Real Process Cost
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </Container>
    </Section>
  )
}
