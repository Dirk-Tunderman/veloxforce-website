"use client"

import { useRef } from "react"
import Link from "next/link"
import { useInView } from "framer-motion"
import { Clock, TrendingUp, ArrowRight, CheckCircle, AlertTriangle, Target } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"
import { SectionTracker } from "@/components/analytics/section-tracker"
import { CTATracker } from "@/components/analytics/cta-tracker"

export function CtaSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <SectionTracker sectionName="Final CTA" sectionPosition={8}>
      <Section padding="xl" background="light-to-white" className="relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <Container>
          <div
            ref={ref}
            className={`relative z-10 max-w-6xl mx-auto transition-all duration-700 ${
              isInView ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            {/* Main Headline */}
            <div className="text-center mb-16">
              <Heading level="2" className="velox-text-h1 mb-6">
                Your Next Decision Shapes Your Next Year
              </Heading>
              <Text className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                While your competitors struggle with manual processes, you could be scaling effortlessly.
              </Text>
            </div>

            {/* The Choice - Design System Compliant (40/60 Visual Weight) */}
            <div className="mb-20">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                {/* Traditional Path - Left Side (40% emphasis) */}
                <div className="lg:col-span-5">
                  <div className="velox-card-traditional p-8 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 h-full flex flex-col justify-center">
                    <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <AlertTriangle className="w-8 h-8 text-gray-600" />
                    </div>
                    <Heading level="4" className="text-xl font-bold text-gray-800 mb-4">
                      Keep Fighting Fires
                    </Heading>
                    <Text className="text-gray-600 leading-relaxed">
                      Stay overwhelmed by manual tasks while competitors gain efficiency advantages
                    </Text>
                  </div>
                </div>

                {/* Transformation Arrow - Center */}
                <div className="lg:col-span-2 flex items-center justify-center py-8">
                  <div className="relative flex flex-col items-center">
                    <div className="velox-transformation-arrow">
                      <ArrowRight className="w-8 h-8 text-white transform lg:rotate-0 rotate-90" />
                    </div>
                    <div className="mt-4 text-center">
                      <Text className="text-sm font-bold text-blue-700 tracking-wider uppercase bg-blue-50 px-4 py-2 rounded-full border border-blue-200">
                        CHOOSE
                      </Text>
                    </div>
                  </div>
                </div>

                {/* Veloxforce Path - Right Side (60% emphasis) */}
                <div className="lg:col-span-5">
                  <div className="velox-card-advantage p-8 text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:scale-105 h-full flex flex-col justify-center">
                    <div className="velox-icon-container-advantage mb-6 mx-auto">
                      <Target className="w-8 h-8 text-white" />
                    </div>
                    <Heading level="4" className="text-xl font-bold text-blue-900 mb-4">
                      Lead From The Front
                    </Heading>
                    <Text className="text-blue-800 leading-relaxed font-medium">
                      Transform operations and gain competitive advantages while others struggle
                    </Text>
                  </div>
                </div>
              </div>
            </div>

            {/* Two Clear Paths */}
            <div className="text-center mb-16">
              <Heading level="3" className="velox-text-h2 mb-10">
                Choose Your Path Forward
              </Heading>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-stretch max-w-4xl mx-auto">
                {/* Strategic Call Button - Green */}
                <div className="flex-1">
                  <CTATracker
                    eventName="strategic_call_cta_clicked"
                    eventData={{
                      section: "final_cta",
                      cta_text: "Schedule Strategic Call",
                      position: "left"
                    }}
                  >
                    <Button
                      size="lg"
                      className="w-full h-16 text-lg font-semibold group bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                      asChild
                    >
                      <Link href="/contact" className="flex flex-col items-center justify-center py-2">
                        <span className="group-hover:translate-x-1 transition-transform duration-300">
                          Schedule Strategic Call
                        </span>
                        <span className="text-sm font-normal opacity-90 mt-1">
                          Ready to transform now
                        </span>
                      </Link>
                    </Button>
                  </CTATracker>
                </div>

                {/* Audit Tool Button */}
                <div className="flex-1">
                  <CTATracker
                    eventName="audit_tool_cta_clicked"
                    eventData={{
                      section: "final_cta",
                      cta_text: "Find My Process Profit Leaks",
                      position: "right"
                    }}
                  >
                    <Button
                      size="lg"
                      className="velox-cta-primary w-full h-16 text-lg font-semibold group relative overflow-hidden"
                      asChild
                    >
                      <Link href="/tools/business-audit" className="flex flex-col items-center justify-center py-2 relative z-10">
                        <span className="group-hover:translate-x-1 transition-transform duration-300">
                          Find My Process Profit Leaks
                        </span>
                        <span className="text-sm font-normal opacity-90 mt-1">
                          Show me the opportunity first
                        </span>
                        {/* Animated background effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </Link>
                    </Button>
                  </CTATracker>
                </div>
              </div>
            </div>

            {/* Urgency & Trust */}
            <div className="space-y-12 text-center">
              <div className="max-w-3xl mx-auto">
                <Text className="text-gray-600 text-lg mb-6">
                  Every week of delay costs real money. But rushed decisions create bigger problems.
                </Text>
                <Text className="text-gray-900 font-semibold text-xl">
                  Choose the path that matches your readiness.
                </Text>
              </div>

              {/* Future Pacing - Design System Compliant */}
              <div className="velox-card-advantage p-10 max-w-4xl mx-auto text-center">
                <div className="flex items-center justify-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                    <CheckCircle className="w-7 h-7 text-white" />
                  </div>
                  <Heading level="4" className="text-2xl font-bold text-blue-900">
                    Six Months From Now
                  </Heading>
                </div>
                <Text className="text-xl font-semibold text-blue-800 leading-relaxed mb-8 max-w-2xl mx-auto">
                  You'll have the time freedom you started your business for.
                </Text>
                <div className="pt-6 border-t border-blue-200 max-w-3xl mx-auto">
                  <Text className="text-lg text-blue-700 font-medium leading-relaxed">
                    While your competitors are still drowning in operations, you'll be focused on strategic growth.
                  </Text>
                </div>
              </div>

              {/* Trust Reinforcement */}
              <div className="max-w-2xl mx-auto">
                <Text className="text-gray-600 italic text-lg leading-relaxed">
                  "No pushy sales. No complex contracts. Just clarity on your path forward."
                </Text>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </SectionTracker>
  )
}
