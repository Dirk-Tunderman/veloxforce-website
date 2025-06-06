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
            Stop Buying Software. Start{" "}
            <span className="gradient-text-blue">
              Receiving Outcomes
            </span>.
          </Heading>
          
          {/* Subheadline */}
          <Text className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-4 max-w-3xl mx-auto">
            Service-as-Software: We build custom solutions for YOUR exact process, then run them forever.
            <span className="font-semibold text-blue-600"> You delegate work, we deliver outcomes.</span>
          </Text>
          
          {/* Supporting Text */}
          <Text className="text-lg text-gray-600 leading-relaxed mb-8 max-w-2xl mx-auto">
            No software to learn. No systems to manage. Just work that disappears from your plate.
          </Text>
          
          {/* Proof Banner */}
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-blue-50 border border-blue-200 rounded-full mb-12">
            <span className="text-sm text-gray-700">
              Gartner reports <span className="font-bold">80% of automation projects fail</span>. Ours succeed <span className="font-bold text-blue-700">95% of the time</span>.
            </span>
            <Link href="#proof" className="text-sm font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1">
              Here's why
              <ArrowDown className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Sarah's Transformation Visual */}
        <div className="mb-20">
          <Heading level="3" className="text-center text-2xl md:text-3xl font-bold mb-8 text-gray-900">
            The Transformation in Practice
          </Heading>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Before */}
            <div className="relative bg-gray-100 rounded-2xl p-8">
              <div className="absolute -top-4 left-8 bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-semibold">
                Before VeloxForce
              </div>
              <Heading level="4" className="text-xl font-bold text-gray-900 mb-4">Sarah's Tuesday</Heading>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-gray-500 mt-0.5" />
                  <div>
                    <Text className="font-semibold text-gray-900">6:30 AM - 9:00 PM</Text>
                    <Text className="text-sm text-gray-600">Drowning in operational tasks</Text>
                  </div>
                </div>
                <ul className="ml-8 space-y-2 text-sm text-gray-600">
                  <li>• Processing 47 customer requests manually</li>
                  <li>• Updating 3 different systems</li>
                  <li>• Fixing errors from rushed work</li>
                  <li>• Missing family dinner again</li>
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
                With VeloxForce
              </div>
              <Heading level="4" className="text-xl font-bold text-gray-900 mb-4">Sarah's Tuesday</Heading>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Target className="h-5 w-5 text-blue-600 mt-0.5" />
                  <div>
                    <Text className="font-semibold text-gray-900">Strategic work done by 5:30 PM</Text>
                    <Text className="text-sm text-gray-600">Leading instead of managing</Text>
                  </div>
                </div>
                <ul className="ml-8 space-y-2 text-sm text-gray-600">
                  <li>• All 47 requests processed automatically</li>
                  <li>• Systems sync seamlessly</li>
                  <li>• 99.7% accuracy (better than manual)</li>
                  <li>• Home for dinner with energy to spare</li>
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
              Calculate My Service-as-Software ROI
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