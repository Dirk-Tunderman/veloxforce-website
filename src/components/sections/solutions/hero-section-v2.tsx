"use client"

import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"
import { AlertTriangle, Zap, Eye, CheckCircle, RotateCcw } from 'lucide-react'

export function HeroSectionV2() {
  return (
    <Section
      padding="xl"
      background="white-to-light"
      className="relative min-h-[90vh] flex items-center overflow-hidden"
    >
      {/* Simplified Background - removed mesh overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-white to-blue-50/20" />

      <Container className="relative z-10 max-w-6xl">
        <div className="text-center space-y-12">
          {/* Main Headline - CSS Animation */}
          <div className="space-y-6 max-w-5xl mx-auto animate-fadeIn">
            <Heading
              level="1"
              className="velox-text-h1-premium"
              style={{ lineHeight: '1.2' }}
            >
              Every Process You Hate Doing
              <span className="relative">
                <div className="absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-red-200 to-red-300 opacity-60 rounded-full transform -rotate-1"></div>
              </span>{" "}
              Can Become a Process You{" "}
              <span className="text-gradient">
                Love Delegating
              </span>
            </Heading>

            <Text className="velox-text-lead text-center max-w-4xl mx-auto">
              <strong>Every business is unique. Every process is unique.</strong> Now AI creates software that thinks and analyzes like your team.
            </Text>
          </div>

          {/* Visual Comparison Animation */}
          <div
            className="max-w-6xl mx-auto animate-fadeIn"
            style={{ animationDelay: '0.3s' }}
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Traditional Software Side */}
              <div className="text-center">
                <div className="bg-gray-100 rounded-2xl p-8 mb-6 relative overflow-hidden">
                  <div className="absolute top-4 left-4 text-xs font-bold text-gray-500 uppercase tracking-wide">Traditional Software</div>

                  {/* Puzzle Piece Metaphor - Business trying to fit into rigid software */}
                  <div className="mt-8 space-y-6">
                    {/* Rigid Software Shape (Square hole) */}
                    <div className="flex justify-center">
                      <div className="relative">
                        <div className="w-32 h-24 bg-gray-400 rounded-lg border-4 border-gray-600 flex items-center justify-center">
                          <div className="w-16 h-16 bg-gray-200 rounded-sm border-2 border-gray-500"></div>
                        </div>
                        <div className="absolute -top-2 -right-2 bg-gray-600 text-white text-xs px-2 py-1 rounded-full">
                          Software
                        </div>
                      </div>
                    </div>

                    {/* Struggling Animation */}
                    <div className="flex justify-center">
                      <AlertTriangle className="w-8 h-8 text-red-500 animate-bounce" />
                    </div>

                    {/* Your Business (Round peg trying to fit square hole) */}
                    <div className="flex justify-center">
                      <div className="relative">
                        <div className="w-20 h-20 bg-gradient-to-br from-red-400 to-red-600 rounded-full border-4 border-red-700 flex items-center justify-center transform animate-pulse">
                          <div className="text-white text-xs font-bold text-center">Your<br/>Business</div>
                        </div>
                        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-red-600 font-medium whitespace-nowrap">
                          Trying to fit...
                        </div>
                      </div>
                    </div>

                    <div className="text-center mt-6">
                      <div className="inline-block px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm font-medium">
                        You Adapt to Software
                      </div>
                    </div>
                  </div>
                </div>
                <Text className="text-gray-600 text-sm">
                  Rigid templates • One-size-fits-all • You change your process
                </Text>
              </div>

              {/* AI-Powered Side */}
              <div className="text-center">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 mb-6 relative overflow-hidden border border-blue-200">
                  <div className="absolute top-4 left-4 text-xs font-bold text-blue-600 uppercase tracking-wide">AI-Powered Service</div>

                  {/* Liquid/Clay Metaphor - Software molding to business shape */}
                  <div className="mt-8 space-y-6">
                    {/* Your Business (Solid, established shape) */}
                    <div className="flex justify-center">
                      <div className="relative">
                        <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full border-4 border-blue-900 flex items-center justify-center">
                          <div className="text-white text-xs font-bold text-center">Your<br/>Business</div>
                        </div>
                        <div className="absolute -top-2 -right-2 bg-blue-800 text-white text-xs px-2 py-1 rounded-full">
                          Fixed
                        </div>
                      </div>
                    </div>

                    {/* Adaptive Flow Animation */}
                    <div className="flex justify-center">
                      <Zap className="w-8 h-8 text-blue-500 animate-bounce" />
                    </div>

                    {/* AI Software (Liquid/moldable, adapting to business shape) */}
                    <div className="flex justify-center">
                      <div className="relative">
                        <div className="w-32 h-24 bg-gradient-to-br from-blue-200 to-blue-300 rounded-2xl border-4 border-blue-400 flex items-center justify-center relative overflow-hidden">
                          {/* Liquid animation effect */}
                          <div className="absolute inset-2 bg-gradient-to-br from-blue-300 to-blue-500 rounded-full animate-pulse"></div>
                          <div className="absolute inset-4 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                          <div className="relative z-10 text-blue-800 text-xs font-bold text-center">
                            AI Software<br/>
                            <span className="text-blue-600">(Adapting)</span>
                          </div>
                        </div>
                        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-blue-600 font-medium whitespace-nowrap">
                          Molding to fit perfectly
                        </div>
                      </div>
                    </div>

                    <div className="text-center mt-6">
                      <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                        Software Adapts to You
                      </div>
                    </div>
                  </div>
                </div>
                <Text className="text-gray-600 text-sm">
                  Custom-built • Thinks like your team • Learns your process
                </Text>
              </div>
            </div>
          </div>

          {/* Simple Key Benefits */}
          <div
            className="max-w-4xl mx-auto animate-fadeIn"
            style={{ animationDelay: '0.5s' }}
          >
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="group">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <Text className="font-bold text-gray-900 mb-2">Understands Context</Text>
                <Text className="text-sm text-gray-600">Reads and comprehends like a human expert</Text>
              </div>

              <div className="group">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <Text className="font-bold text-gray-900 mb-2">Makes Decisions</Text>
                <Text className="text-sm text-gray-600">Handles exceptions using your business logic</Text>
              </div>

              <div className="group">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <RotateCcw className="w-8 h-8 text-white" />
                </div>
                <Text className="font-bold text-gray-900 mb-2">Continuously Learns</Text>
                <Text className="text-sm text-gray-600">Improves based on your feedback</Text>
              </div>
            </div>
          </div>

        </div>
      </Container>

      {/* Simplified Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-20 text-white" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="currentColor" />
        </svg>
      </div>
    </Section>
  )
}