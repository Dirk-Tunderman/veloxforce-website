"use client"

import { Button } from "@/components/ui/button"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"
import { ArrowRight, Clock, Target, TrendingUp, ArrowDown } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

export function HeroTransformationSection() {
  return (
    <Section padding="xl" background="white-to-light" className="relative overflow-hidden">
      <Container className="relative max-w-7xl">
        <div className="text-center">
          {/* Main Headline */}
          <Heading
            level="1"
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 max-w-4xl mx-auto"
          >
            Stop Managing Processes. Start{" "}
            <span className="gradient-text-blue">
              Receiving Results
            </span>.
          </Heading>

          {/* Subheadline */}
          <Text className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-4 max-w-3xl mx-auto">
            You delegate operations once. We deliver outcomes forever.
            <span className="font-semibold text-blue-600"> Your team leads. Technology serves. Business grows.</span>
          </Text>

          {/* Supporting Text */}
          <Text className="text-lg text-gray-600 leading-relaxed mb-8 max-w-2xl mx-auto">
            No software to learn. No systems to manage. Just results delivered to your inbox.
          </Text>

          {/* Proof Banner */}
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-blue-50 border border-blue-200 rounded-full mb-12">
            <span className="text-sm text-gray-700">
              Most automation projects fail because <span className="font-bold">you're left managing complex tools</span>. Service-as-Software succeeds because <span className="font-bold text-blue-700">we handle the complexity for you</span>.
            </span>
            <Link href="#proof" className="text-sm font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1">
              Here's why
              <ArrowDown className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Team Transformation Visual */}
        <div className="mb-20">
          <Heading level="3" className="text-center text-2xl md:text-3xl font-bold mb-8 text-gray-900">
            From Operational Overwhelm to Strategic Leadership
          </Heading>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Before */}
            <div className="relative bg-gray-100 rounded-2xl p-8">
              <div className="absolute -top-4 left-8 bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-semibold">
                Before Service-as-Software
              </div>
              <Heading level="4" className="text-xl font-bold text-gray-900 mb-4">Your Team Today</Heading>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-gray-500 mt-0.5" />
                  <div>
                    <Text className="font-semibold text-gray-900">Drowning in operational tasks</Text>
                    <Text className="text-sm text-gray-600">No time for strategic work</Text>
                  </div>
                </div>
                <ul className="ml-8 space-y-2 text-sm text-gray-600">
                  <li>• Opens laptop to 47 unprocessed requests</li>
                  <li>• Three systems need manual updates (again)</li>
                  <li>• Two hours copying data between platforms</li>
                  <li>• Strategic planning meeting? Cancelled (again)</li>
                  <li>• Leaves at 7 PM, further behind than morning</li>
                </ul>
              </div>
            </div>

            {/* Transformation Arrow */}
            <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="bg-blue-600 text-white rounded-full p-3">
                <ArrowRight className="h-6 w-6" />
              </div>
            </div>

            {/* After */}
            <div className="relative bg-gradient-to-br from-blue-50 to-white border-2 border-blue-200 rounded-2xl p-8">
              <div className="absolute -top-4 left-8 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                With Service-as-Software
              </div>
              <Heading level="4" className="text-xl font-bold text-gray-900 mb-4">Your Team Tomorrow</Heading>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Target className="h-5 w-5 text-blue-600 mt-0.5" />
                  <div>
                    <Text className="font-semibold text-gray-900">Focuses on strategic work</Text>
                    <Text className="text-sm text-gray-600">Receives processed results and analyzes trends</Text>
                  </div>
                </div>
                <ul className="ml-8 space-y-2 text-sm text-gray-600">
                  <li>• Opens laptop to completed work awaiting review</li>
                  <li>• Reviews three exceptions needing her expertise</li>
                  <li>• Leads strategic session on market expansion</li>
                  <li>• Mentors junior team member on analysis</li>
                  <li>• Leaves at 4 PM for daughter's recital</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Value Proposition Row */}
        <div className="grid md:grid-cols-3 gap-8 mb-16 max-w-5xl mx-auto">
          <div className="text-center">
            <Text className="text-3xl font-bold text-blue-600 mb-2">Savings Scale</Text>
            <Text className="text-sm text-gray-600 font-medium">Investment proportional to value created</Text>
            <Text className="text-xs text-gray-500">Pricing aligned with your savings</Text>
          </div>
          <div className="text-center">
            <Text className="text-3xl font-bold text-blue-600 mb-2">Fast ROI</Text>
            <Text className="text-sm text-gray-600 font-medium">Most clients see positive ROI quickly</Text>
            <Text className="text-xs text-gray-500">ROI timeline depends on process complexity</Text>
          </div>
          <div className="text-center">
            <Text className="text-3xl font-bold text-blue-600 mb-2">Custom Fit</Text>
            <Text className="text-sm text-gray-600 font-medium">Faster than any alternative</Text>
            <Text className="text-xs text-gray-500">Implementation speed varies by scope</Text>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="velox-cta-primary text-lg font-semibold px-8 py-4 h-auto rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            asChild
          >
            <Link href="/tools/business-audit">
              Calculate My Delegation Savings
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          
          <Button
            size="lg"
            variant="outline"
            className="text-lg font-semibold px-8 py-4 h-auto rounded-xl border-2 border-blue-600 text-blue-600 hover:bg-blue-50 transition-all duration-300"
            asChild
          >
            <Link href="/our-approach">
              How Service-as-Software Works
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>

        {/* Credibility Reference */}
        <Text className="text-xs text-gray-500 text-center mt-12 max-w-md mx-auto">
          Based on McKinsey's 2024 report: 'The State of AI in Business'
        </Text>
      </Container>
    </Section>
  )
}