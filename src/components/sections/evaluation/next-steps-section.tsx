"use client"

import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"
import { Button } from "@/components/ui/button"
import { Calculator, FileSearch, BookOpen, ArrowRight } from "lucide-react"
import Link from "next/link"

export function NextStepsSection() {
  return (
    <Section padding="xl" background="white-to-light">
      <Container className="max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Heading level="2" className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Take the Next Step?
          </Heading>
          <Text className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
            Choose the path that matches where you are in your evaluation process
          </Text>
        </div>

        {/* CTA Options */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Primary CTA */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border-2 border-blue-300 text-center shadow-lg">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Calculator className="w-8 h-8 text-white" />
            </div>
            <Heading level="3" className="text-xl font-bold text-blue-900 mb-4">
              If your process passed the 4-step test:
            </Heading>
            <Text className="text-blue-800 mb-6 leading-relaxed">
              Get specific ROI numbers for your exact situation
            </Text>
            <Button
              size="lg"
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 text-lg font-semibold px-6 py-4 h-auto rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              asChild
            >
              <Link href="/tools/business-audit">
                Calculate My Delegation Savings
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          {/* Secondary CTA */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-200 text-center shadow-lg">
            <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <FileSearch className="w-8 h-8 text-white" />
            </div>
            <Heading level="3" className="text-xl font-bold text-green-900 mb-4">
              Need more information first:
            </Heading>
            <Text className="text-green-800 mb-6 leading-relaxed">
              Get valuable insights with no sales pressure
            </Text>
            <Button
              size="lg"
              className="w-full bg-white border-2 border-green-600 text-green-600 hover:bg-green-50 text-lg font-semibold px-6 py-4 h-auto rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              asChild
            >
              <Link href="/tools/business-audit">
                Get Free Process Audit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          {/* Tertiary CTA */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border border-gray-200 text-center shadow-lg">
            <div className="w-16 h-16 bg-gradient-to-r from-gray-600 to-gray-700 rounded-full flex items-center justify-center mx-auto mb-6">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <Heading level="3" className="text-xl font-bold text-gray-900 mb-4">
              Still evaluating:
            </Heading>
            <Text className="text-gray-700 mb-6 leading-relaxed">
              Learn more about our proven methodology
            </Text>
            <Button
              size="lg"
              className="w-full bg-white border-2 border-gray-600 text-gray-600 hover:bg-gray-50 text-lg font-semibold px-6 py-4 h-auto rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              asChild
            >
              <Link href="/our-approach">
                See How It Works
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Bottom Message */}
        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg max-w-4xl mx-auto">
            <Text className="text-lg text-gray-600 leading-relaxed">
              <span className="font-semibold text-gray-900">Remember:</span> The goal isn't to delegate everything.
              The goal is to delegate routine work so your team can focus on what only they can do:
              analysis, optimization, and strategic execution.
            </Text>
          </div>
        </div>
      </Container>
    </Section>
  )
}
