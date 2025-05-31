"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import Link from "next/link"
import {
  Clock,
  DollarSign,
  TrendingUp,
  Users,
  Bot,
  CheckCircle,
  ArrowRight,
  X,
  Zap,
  Search,
  Target,
  Shield
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"
import { CTATracker } from "@/components/analytics/cta-tracker"

export function AutomationParadoxSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <Section padding="lg" background="light-blue">
      <Container>
        {/* Section 1: OUTCOME FIRST - What You Get Back */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <Heading level="2" className="velox-text-h1 mb-6">
            WHAT YOU GET BACK
          </Heading>
          <Text className="velox-text-lead max-w-3xl mx-auto mb-6">
            20+ Hours Weekly for Strategic Growth
          </Text>
          <Text className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Stop spending your most valuable resource on routine operations. Focus on what actually builds your business and drives real growth.
          </Text>
        </div>

        {/* Three Outcome Cards - Enhanced Layout */}
        <div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20 max-w-6xl mx-auto"
        >
          {/* Card 1: Time Freedom */}
          <div
            className={`group transition-all duration-700 ${
              isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="velox-card-advantage-gradient p-10 h-full flex flex-col text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:scale-105">
              <div className="velox-icon-container-advantage mb-8 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Clock className="h-10 w-10 text-white" />
              </div>
              <Heading level="4" className="text-3xl font-bold text-blue-900 mb-4 group-hover:text-blue-800 transition-colors duration-300">
                20+ Hours Weekly
              </Heading>
              <Text className="text-lg text-blue-800 leading-relaxed group-hover:text-blue-700 transition-colors duration-300">
                Time reclaimed for strategic thinking, business development, and growth initiatives
              </Text>
              <div className="mt-6 pt-6 border-t border-blue-200">
                <Text className="text-sm font-semibold text-blue-600">
                  Focus on what matters most
                </Text>
              </div>
            </div>
          </div>

          {/* Card 2: Growth Capital */}
          <div
            className={`group transition-all duration-700 delay-200 ${
              isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="velox-card-advantage-gradient p-10 h-full flex flex-col text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:scale-105">
              <div className="velox-icon-container-advantage mb-8 mx-auto group-hover:scale-110 transition-transform duration-300">
                <DollarSign className="h-10 w-10 text-white" />
              </div>
              <Heading level="4" className="text-3xl font-bold text-blue-900 mb-4 group-hover:text-blue-800 transition-colors duration-300">
                60% Cost Reduction
              </Heading>
              <Text className="text-lg text-blue-800 leading-relaxed group-hover:text-blue-700 transition-colors duration-300">
                Money freed for business investment, expansion, and strategic initiatives
              </Text>
              <div className="mt-6 pt-6 border-t border-blue-200">
                <Text className="text-sm font-semibold text-blue-600">
                  Reinvest in growth
                </Text>
              </div>
            </div>
          </div>

          {/* Card 3: Scale Capacity */}
          <div
            className={`group transition-all duration-700 delay-400 ${
              isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="velox-card-advantage-gradient p-10 h-full flex flex-col text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:scale-105">
              <div className="velox-icon-container-advantage mb-8 mx-auto group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="h-10 w-10 text-white" />
              </div>
              <Heading level="4" className="text-3xl font-bold text-blue-900 mb-4 group-hover:text-blue-800 transition-colors duration-300">
                3x Processing Power
              </Heading>
              <Text className="text-lg text-blue-800 leading-relaxed group-hover:text-blue-700 transition-colors duration-300">
                Handle more volume with the same team size, enabling exponential growth
              </Text>
              <div className="mt-6 pt-6 border-t border-blue-200">
                <Text className="text-sm font-semibold text-blue-600">
                  Scale without limits
                </Text>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: HOW OUR HYBRID INTELLIGENCE SYSTEM WORKS */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <Heading level="2" className="velox-text-h1 mb-6">
            How Our Hybrid Intelligence System Works
          </Heading>
          <Text className="velox-text-lead max-w-3xl mx-auto mb-6">
            How AI and Human Intelligence Work Together
          </Text>
          <Text className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Every task gets the perfect approach from the start - no guesswork, no trial and error
          </Text>
        </div>

        {/* Three Approaches Comparison - Enhanced Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20 max-w-7xl mx-auto">
          {/* All Human Team */}
          <div
            className={`group transition-all duration-700 ${
              isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="bg-gray-50 border-2 border-gray-200 rounded-2xl p-8 h-full flex flex-col hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gray-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-gray-300 transition-colors duration-300">
                  <Users className="h-10 w-10 text-gray-500" />
                </div>
                <Heading level="4" className="text-xl font-bold text-gray-800 mb-3">
                  All Human Team
                </Heading>
                <Text className="text-sm text-gray-600 mb-6 font-medium">
                  Traditional Approach
                </Text>
              </div>

              <div className="mt-auto space-y-4">
                <div className="flex items-start gap-3">
                  <X className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <Text className="text-sm text-gray-700 leading-relaxed">Expensive to scale - each new client requires more staff</Text>
                </div>
                <div className="flex items-start gap-3">
                  <X className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <Text className="text-sm text-gray-700 leading-relaxed">Slow on routine work - manual processes take hours</Text>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <Text className="text-sm text-gray-700 leading-relaxed">Good at complex decisions when properly trained</Text>
                </div>
              </div>
            </div>
          </div>

          {/* Pure AI Automation */}
          <div
            className={`group transition-all duration-700 delay-200 ${
              isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="bg-gray-50 border-2 border-gray-200 rounded-2xl p-8 h-full flex flex-col hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gray-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-gray-300 transition-colors duration-300">
                  <Bot className="h-10 w-10 text-gray-500" />
                </div>
                <Heading level="4" className="text-xl font-bold text-gray-800 mb-3">
                  Pure AI Automation
                </Heading>
                <Text className="text-sm text-gray-600 mb-6 font-medium">
                  Robot Does Everything
                </Text>
              </div>

              <div className="mt-auto space-y-4">
                <div className="flex items-start gap-3">
                  <X className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <Text className="text-sm text-gray-700 leading-relaxed">Breaks when confused - can't handle exceptions</Text>
                </div>
                <div className="flex items-start gap-3">
                  <X className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <Text className="text-sm text-gray-700 leading-relaxed">Makes expensive mistakes without human oversight</Text>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <Text className="text-sm text-gray-700 leading-relaxed">Fast on easy tasks with clear parameters</Text>
                </div>
              </div>
            </div>
          </div>

          {/* Veloxforce Hybrid - BEST OF BOTH */}
          <div
            className={`group transition-all duration-700 delay-400 ${
              isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="velox-card-advantage p-8 h-full flex flex-col hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 relative">
              {/* Best Choice Badge */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                  BEST OF BOTH
                </div>
              </div>

              <div className="text-center mb-8 mt-6">
                <div className="velox-icon-container-advantage mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <div className="flex items-center justify-center space-x-2">
                    <Bot className="h-6 w-6 text-white" />
                    <div className="w-1 h-6 bg-white/50 rounded-full"></div>
                    <Users className="h-6 w-6 text-white" />
                  </div>
                </div>
                <Heading level="4" className="text-xl font-bold text-blue-900 mb-3 group-hover:text-blue-800 transition-colors duration-300">
                  Veloxforce Hybrid
                </Heading>
                <Text className="text-sm text-blue-700 mb-6 font-medium">
                  Digital Employee + Human Expert
                </Text>
              </div>

              <div className="mt-auto space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <Text className="text-sm text-blue-800 leading-relaxed">AI speed on routine work - instant processing</Text>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <Text className="text-sm text-blue-800 leading-relaxed">Human judgment on complex decisions - expert oversight</Text>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <Text className="text-sm text-blue-800 leading-relaxed">Perfect quality guaranteed - best of both worlds</Text>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Why Others Fail */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <Heading level="2" className="velox-text-h1 mb-6">
            WHY TRADITIONAL AUTOMATION CREATES MORE WORK
          </Heading>
          <Text className="velox-text-lead max-w-3xl mx-auto">
            (And Our Approach That Actually Reduces It)
          </Text>
        </div>

        {/* Comparison Cards - Enhanced Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 max-w-6xl mx-auto">
          {/* What Others Sell */}
          <div
            className={`group transition-all duration-700 delay-1000 ${
              isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="bg-gray-50 border-2 border-gray-200 rounded-2xl p-8 h-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <X className="h-8 w-8 text-red-600" />
                </div>
                <Heading level="4" className="text-2xl font-bold text-gray-800 mb-2">
                  What Others Sell
                </Heading>
                <Text className="text-gray-600 font-medium">
                  Traditional automation approaches
                </Text>
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <X className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                  <div>
                    <Text className="text-gray-800 font-medium mb-1">"New tools to learn and manage"</Text>
                    <Text className="text-sm text-gray-600">More complexity, not less</Text>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <X className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                  <div>
                    <Text className="text-gray-800 font-medium mb-1">70% failure rate</Text>
                    <Text className="text-sm text-gray-600">Industry standard disappointment</Text>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <X className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                  <div>
                    <Text className="text-gray-800 font-medium mb-1">Your team manages AI</Text>
                    <Text className="text-sm text-gray-600">Adding work, not removing it</Text>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <X className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                  <div>
                    <Text className="text-gray-800 font-medium mb-1">Errors become your problem</Text>
                    <Text className="text-sm text-gray-600">No accountability or guarantees</Text>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* What We Deliver */}
          <div
            className={`group transition-all duration-700 delay-1100 ${
              isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="velox-card-advantage p-8 h-full hover:shadow-2xl hover:-translate-y-2 hover:scale-105 transition-all duration-300">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <Heading level="4" className="text-2xl font-bold text-blue-900 mb-2 group-hover:text-blue-800 transition-colors duration-300">
                  What We Deliver
                </Heading>
                <Text className="text-blue-700 font-medium">
                  Service-based automation that works
                </Text>
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <Text className="text-blue-800 font-medium mb-1">"Delegate work, receive results"</Text>
                    <Text className="text-sm text-blue-600">True simplification</Text>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <Text className="text-blue-800 font-medium mb-1">95% success rate</Text>
                    <Text className="text-sm text-blue-600">Proven track record</Text>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <Text className="text-blue-800 font-medium mb-1">We manage everything</Text>
                    <Text className="text-sm text-blue-600">Complete delegation</Text>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <Text className="text-blue-800 font-medium mb-1">Results guaranteed</Text>
                    <Text className="text-sm text-blue-600">Written accountability</Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Line - Enhanced */}
        <div
          className={`text-center mb-16 transition-all duration-700 delay-1200 ${
            isInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8 max-w-4xl mx-auto border border-blue-200 shadow-lg">
            <div className="mb-6">
              <Text className="text-2xl font-bold text-blue-900 mb-2">
                Traditional automation: You manage tools.
              </Text>
              <Text className="text-2xl font-bold text-blue-900 mb-4">
                Our approach: You manage growth.
              </Text>
            </div>
            <div className="border-t border-blue-200 pt-6">
              <Text className="text-xl text-gray-700 font-semibold">
                The difference? Complete delegation, not tool adoption.
              </Text>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div
          className={`text-center transition-all duration-700 delay-1300 ${
            isInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <CTATracker
            eventName="automation_paradox_cta_clicked"
            eventData={{
              section: "automation_paradox",
              cta_text: "Find My Process Profit Leaks",
              position: "bottom"
            }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-blue-900 hover:from-blue-700 hover:to-blue-950 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              asChild
            >
              <Link href="/how-it-works">
                Find My Process Profit Leaks
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </CTATracker>
        </div>
      </Container>
    </Section>
  )
}
