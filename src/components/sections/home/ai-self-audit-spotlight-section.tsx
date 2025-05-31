"use client"

import Link from "next/link"
import { Brain, CheckCircle, BarChart3, Target, Euro } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"
import { FadeIn, SlideUp } from "@/components/ui/animated-element"
import { SectionTracker } from "@/components/analytics/section-tracker"

export function AiSelfAuditSpotlightSection() {
  return (
    <SectionTracker sectionName="AI Self Audit Tool Spotlight" sectionPosition={3}>
      <Section padding="xl" background="white-to-light" className="relative">
        {/* Subtle tech pattern background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <Container>
          {/* Header Section - Enhanced */}
          <div className="text-center mb-20 max-w-4xl mx-auto">
            <FadeIn delay={0.1}>
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-100 to-blue-50 rounded-full text-blue-800 text-sm font-semibold mb-6 border border-blue-200 shadow-sm">
                <Brain className="h-5 w-5 mr-3 text-blue-600" />
                AI-Powered Professional Analysis
              </div>
              <Heading level="2" className="velox-text-h1 mb-6">
                AI Self Audit Tool
              </Heading>
              <Text className="velox-text-lead max-w-3xl mx-auto mb-6">
                Professional process analysis worth €350 - get yours free in 8 minutes
              </Text>
              <Text className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Discover exactly where your business is losing money and get a personalized roadmap to fix it.
              </Text>
            </FadeIn>
          </div>

          {/* Main Content Grid */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Benefits & Value */}
            <div className="space-y-10">
              <FadeIn delay={0.2}>
                {/* Key Benefits - Enhanced */}
                <div className="space-y-6">
                  <Heading level="3" className="text-2xl font-bold text-gray-900 mb-8">
                    What You'll Discover
                  </Heading>
                  <div className="space-y-5">
                    <div className="group flex items-start space-x-4 p-4 rounded-xl hover:bg-blue-50 transition-all duration-300">
                      <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <CheckCircle className="h-5 w-5 text-white" />
                      </div>
                      <Text className="text-gray-800 font-semibold text-lg group-hover:text-blue-900 transition-colors duration-300">
                        Identify specific inefficiencies costing you money
                      </Text>
                    </div>
                    <div className="group flex items-start space-x-4 p-4 rounded-xl hover:bg-blue-50 transition-all duration-300">
                      <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <CheckCircle className="h-5 w-5 text-white" />
                      </div>
                      <Text className="text-gray-800 font-semibold text-lg group-hover:text-blue-900 transition-colors duration-300">
                        Calculate realistic ROI potential from automation
                      </Text>
                    </div>
                    <div className="group flex items-start space-x-4 p-4 rounded-xl hover:bg-blue-50 transition-all duration-300">
                      <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <CheckCircle className="h-5 w-5 text-white" />
                      </div>
                      <Text className="text-gray-800 font-semibold text-lg group-hover:text-blue-900 transition-colors duration-300">
                        Assess your process's automation readiness
                      </Text>
                    </div>
                    <div className="group flex items-start space-x-4 p-4 rounded-xl hover:bg-blue-50 transition-all duration-300">
                      <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <CheckCircle className="h-5 w-5 text-white" />
                      </div>
                      <Text className="text-gray-800 font-semibold text-lg group-hover:text-blue-900 transition-colors duration-300">
                        Compare your performance against industry peers
                      </Text>
                    </div>
                    <div className="group flex items-start space-x-4 p-4 rounded-xl hover:bg-blue-50 transition-all duration-300">
                      <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <CheckCircle className="h-5 w-5 text-white" />
                      </div>
                      <Text className="text-gray-800 font-semibold text-lg group-hover:text-blue-900 transition-colors duration-300">
                        Receive professional-grade recommendations
                      </Text>
                    </div>
                  </div>
                </div>
              </FadeIn>

              {/* Professional Value Justification - Enhanced */}
              <SlideUp delay={0.3}>
                <div className="bg-gradient-to-br from-white to-blue-50 rounded-2xl p-8 border border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                      <Euro className="h-5 w-5 text-white" />
                    </div>
                    <Heading level="3" className="text-xl font-bold text-gray-900">
                      What would normally require:
                    </Heading>
                  </div>
                  <div className="space-y-5">
                    <div className="flex justify-between items-center p-4 bg-white rounded-lg border border-gray-100">
                      <span className="text-gray-700 font-medium">1.5 hours consultant analysis</span>
                      <span className="font-bold text-gray-900 text-lg">€225</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-white rounded-lg border border-gray-100">
                      <span className="text-gray-700 font-medium">45 minutes report writing</span>
                      <span className="font-bold text-gray-900 text-lg">€125</span>
                    </div>
                    <div className="border-t-2 border-blue-200 pt-6">
                      <div className="flex justify-between items-center p-4 bg-blue-600 rounded-xl text-white">
                        <span className="font-bold text-lg">Total Equivalent:</span>
                        <span className="text-3xl font-bold">€350</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 text-center">
                    <Text className="text-blue-700 font-semibold">
                      Yours FREE in 8 minutes
                    </Text>
                  </div>
                </div>
              </SlideUp>
            </div>

            {/* Right side - Process Preview - Enhanced */}
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-500">
              <SlideUp delay={0.4}>
                <div className="mb-10">
                  <div className="flex items-center justify-between mb-6">
                    <Heading level="3" className="text-xl font-bold text-gray-900">
                      AI-Generated Professional Analysis
                    </Heading>
                    <div className="px-4 py-2 bg-gradient-to-r from-green-100 to-green-50 text-green-800 text-sm font-bold rounded-full border border-green-200">
                      Sample Report
                    </div>
                  </div>

                  {/* Mock Report Preview - Enhanced */}
                  <div className="space-y-6">
                    <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                          <BarChart3 className="h-5 w-5 text-blue-600" />
                        </div>
                        <span className="font-bold text-gray-900 text-lg">Cost Analysis</span>
                      </div>
                      <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full w-3/4 animate-pulse"></div>
                      </div>
                    </div>

                    <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                          <Target className="h-5 w-5 text-green-600" />
                        </div>
                        <span className="font-bold text-gray-900 text-lg">ROI Projection</span>
                      </div>
                      <div className="text-4xl font-bold text-green-600">245%</div>
                    </div>
                  </div>
                </div>

                {/* Process Steps - Enhanced */}
                <div className="mb-10">
                  <Heading level="4" className="font-bold text-gray-900 mb-6 text-lg">4-Phase Assessment Process</Heading>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4 p-3 rounded-lg hover:bg-blue-50 transition-all duration-300 group">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-xl flex items-center justify-center text-sm font-bold group-hover:scale-110 transition-transform duration-300">
                        1
                      </div>
                      <span className="text-gray-800 font-semibold group-hover:text-blue-900 transition-colors duration-300">Problem Identification</span>
                    </div>
                    <div className="flex items-center space-x-4 p-3 rounded-lg hover:bg-blue-50 transition-all duration-300 group">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-xl flex items-center justify-center text-sm font-bold group-hover:scale-110 transition-transform duration-300">
                        2
                      </div>
                      <span className="text-gray-800 font-semibold group-hover:text-blue-900 transition-colors duration-300">Impact Quantification</span>
                    </div>
                    <div className="flex items-center space-x-4 p-3 rounded-lg hover:bg-blue-50 transition-all duration-300 group">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-xl flex items-center justify-center text-sm font-bold group-hover:scale-110 transition-transform duration-300">
                        3
                      </div>
                      <span className="text-gray-800 font-semibold group-hover:text-blue-900 transition-colors duration-300">Readiness Assessment</span>
                    </div>
                    <div className="flex items-center space-x-4 p-3 rounded-lg hover:bg-blue-50 transition-all duration-300 group">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-xl flex items-center justify-center text-sm font-bold group-hover:scale-110 transition-transform duration-300">
                        4
                      </div>
                      <span className="text-gray-800 font-semibold group-hover:text-blue-900 transition-colors duration-300">Solution Alignment</span>
                    </div>
                  </div>
                </div>

                {/* CTA - Enhanced */}
                <div className="relative">
                  <Button
                    size="lg"
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-900 hover:from-blue-700 hover:to-blue-950 text-white font-bold shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 group relative overflow-hidden"
                    asChild
                    trackingLabel="See My Automation Certainty Score"
                    trackingLocation="AI Self Audit Tool Spotlight"
                  >
                    <Link href="/tools/business-audit">
                      <div className="flex items-center justify-center py-4 relative z-10">
                        <span className="text-lg font-bold group-hover:translate-x-1 transition-transform duration-300">
                          See My Automation Certainty Score →
                        </span>
                      </div>
                      {/* Animated background effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </Link>
                  </Button>
                  {/* Glow effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/50 to-blue-900/50 rounded-lg blur opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>

                  {/* Descriptive text moved outside */}
                  <div className="text-center mt-3">
                    <span className="text-sm font-medium text-gray-600">
                      Free • 8 minutes • Professional insights
                    </span>
                  </div>
                </div>
              </SlideUp>
            </div>
          </div>
        </Container>
      </Section>
    </SectionTracker>
  )
}