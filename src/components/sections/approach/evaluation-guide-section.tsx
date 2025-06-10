"use client"

import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"
import { Button } from "@/components/ui/button"
import { Calculator, TrendingUp, AlertTriangle, ArrowRight, Target, CheckCircle, X } from "lucide-react"
import Link from "next/link"

export function EvaluationGuideSection() {
  return (
    <div>
      {/* Clean Hero Section - Matching Landing/Solutions Pattern */}
      <Section
        padding="xl"
        background="white-to-light"
        className="relative min-h-[90vh] flex items-center overflow-hidden"
      >
        {/* Clean Background - Simplified */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-white to-blue-50/20" />

        <Container className="relative z-10 max-w-6xl">
          <div className="text-center space-y-12">
            {/* Main Content Block */}
            <div className="space-y-6 max-w-5xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                  Every Business Has
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                  Untapped Potential
                </span>
              </h1>

              <Text className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
                <strong>Four proven phases from operational overwhelm to strategic freedom.</strong> Each designed to unlock your business's hidden capacity without disruption.
              </Text>

              <Text className="text-lg text-gray-600 max-w-3xl mx-auto text-center">
                The Service-as-Software Method transforms routine work into strategic advantage.
              </Text>
            </div>

            {/* Value Proposition Cards */}
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Target className="w-6 h-6 text-gray-700" />
                </div>
                <Text className="font-semibold text-gray-900 mb-2 text-center">
                  Partnership Focus
                </Text>
                <Text className="text-sm text-gray-600 text-center">
                  You focus on strategy while we handle execution
                </Text>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-6 h-6 text-gray-700" />
                </div>
                <Text className="font-semibold text-gray-900 mb-2 text-center">
                  Proven Results
                </Text>
                <Text className="text-sm text-gray-600 text-center">
                  ROI-first approach with transparent outcomes
                </Text>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Calculator className="w-6 h-6 text-blue-600" />
                </div>
                <Text className="font-semibold text-gray-900 mb-2 text-center">
                  Clear Economics
                </Text>
                <Text className="text-sm text-gray-600 text-center">
                  Investment scales with complexity and value
                </Text>
              </div>
            </div>

            {/* Primary CTAs */}
            <div className="space-y-6 text-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="relative bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-lg font-semibold px-10 py-5 h-auto rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 overflow-hidden group"
                  asChild
                >
                  <Link href="/tools/business-audit">
                    <span className="relative z-10 flex items-center gap-2">
                      Discover My Potential
                      <Calculator className="w-5 h-5" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  </Link>
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="px-10 py-5 h-auto text-lg font-semibold border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
                  asChild
                >
                  <Link href="#cost-reality">
                    <span className="flex items-center gap-2">
                      See How It Works
                      <ArrowRight className="w-5 h-5" />
                    </span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Clean Cost Analysis Section */}
      <Section padding="xl" background="transparent" id="cost-reality">
        <Container className="max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                The Hidden Cost Reality
              </span>
            </h2>
            <Text className="text-xl text-gray-600 max-w-3xl mx-auto">
              Most businesses only see the tip of their operational cost iceberg. 
              Understanding the full picture changes everything.
            </Text>
          </div>

          {/* Four Cost Categories - Clean Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 text-center hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Calculator className="w-6 h-6 text-gray-700" />
              </div>
              <Text className="text-sm text-gray-600 mb-2">Time spent × hourly rate</Text>
              <Text className="text-lg font-bold text-gray-900">Direct Labor Cost</Text>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 text-center hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="w-6 h-6 text-gray-700" />
              </div>
              <Text className="text-sm text-gray-600 mb-2">Mistakes and rework</Text>
              <Text className="text-lg font-bold text-gray-900">Error Costs</Text>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 text-center hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-6 h-6 text-gray-700" />
              </div>
              <Text className="text-sm text-gray-600 mb-2">Supervision and coordination</Text>
              <Text className="text-lg font-bold text-gray-900">Management Overhead</Text>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 text-center hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <ArrowRight className="w-6 h-6 text-blue-600" />
              </div>
              <Text className="text-sm text-gray-600 mb-2">Strategic work not done</Text>
              <Text className="text-lg font-bold text-gray-900">Opportunity Cost</Text>
            </div>
          </div>

          <div className="text-center mb-16">
            <div className="max-w-3xl mx-auto">
              <Text className="text-xl font-bold text-gray-900 mb-4">
                Most clients discover their manual process costs 3-5x what they thought.
              </Text>
              <Text className="text-lg text-gray-600">
                Once you understand the real cost, Service-as-Software makes perfect sense.
              </Text>
            </div>
          </div>

          {/* Real Example - Professional Two-Column Layout */}
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8 mb-16">
            {/* Top Section: Icon + Title and Calculations */}
            <div className="grid md:grid-cols-2 gap-8 items-start mb-6">
              {/* Left: Icon + Title */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Calculator className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-blue-900">
                  Real Example: The Invoice Processing Reality
                </h3>
              </div>
              
              {/* Right: Calculations */}
              <div className="space-y-2">
                <Text className="text-lg text-blue-800">
                  <span className="font-bold">10 hours weekly</span> on invoicing
                </Text>
                <Text className="text-lg text-blue-800">
                  = <span className="font-bold">520 hours annually</span>
                </Text>
                <Text className="text-lg text-blue-800">
                  = <span className="font-bold">13 weeks of strategic work lost</span>
                </Text>
              </div>
            </div>
            
            {/* Bottom Section: Conclusion */}
            <div className="pt-6 border-t border-blue-200 text-center">
              <div className="bg-blue-600 text-white px-6 py-3 rounded-lg inline-block">
                <Text className="font-semibold">Service-as-Software reverses this equation.</Text>
              </div>
            </div>
          </div>

          {/* Think Differently Section - Clean Design */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-center mb-8">
              <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                Think Differently About Automation
              </span>
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                <h4 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <div className="w-6 h-6 bg-gray-600 rounded-full flex items-center justify-center">
                    <X className="w-4 h-4 text-white" />
                  </div>
                  Stop Asking:
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 flex-shrink-0" />
                    <Text className="text-gray-700">"What software should we buy?"</Text>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 flex-shrink-0" />
                    <Text className="text-gray-700">"How do we manage this tool?"</Text>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 flex-shrink-0" />
                    <Text className="text-gray-700">"What are the features?"</Text>
                  </li>
                </ul>
              </div>
              
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <h4 className="text-lg font-bold text-blue-800 mb-4 flex items-center gap-2">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  Start Asking:
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                    <Text className="text-blue-800">"What outcomes do we need?"</Text>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                    <Text className="text-blue-800">"Who handles this for us?"</Text>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                    <Text className="text-blue-800">"What's the real ROI?"</Text>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <div className="max-w-md mx-auto">
                <Text className="text-lg font-semibold text-blue-600">
                  This shift changes everything.
                </Text>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center mt-16">
            <Button
              size="lg"
              className="relative bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-lg font-semibold px-12 py-6 h-auto rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 overflow-hidden group"
              asChild
            >
              <Link href="/tools/business-audit">
                <div className="relative z-10 flex flex-col items-center py-2 text-center">
                  <span className="text-lg">Calculate My Real Process Cost</span>
                  <span className="text-sm font-normal opacity-90 text-center">
                    Free assessment • 8 minutes • Honest analysis
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </Link>
            </Button>
          </div>
        </Container>
      </Section>
    </div>
  )
}