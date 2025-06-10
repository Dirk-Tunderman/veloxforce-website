"use client"

import React from "react"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  Target,
  TrendingUp,
  ArrowDown,
  Calculator,
  CheckCircle,
  AlertTriangle,
  BarChart3,
  Zap
} from "lucide-react"
import Link from "next/link"

export function HeroTransformationSection() {
  return (
    <div>
      <Section
        padding="xl"
        background="white-to-light"
        className="relative min-h-[90vh] flex items-center overflow-hidden"
      >
        {/* Simplified Background - matching solutions page */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-white to-blue-50/20" />

        <Container className="relative z-10 max-w-6xl">
          <div className="text-center space-y-12">
            {/* Main Content Block - Properly Structured */}
            <div className="space-y-6 max-w-5xl mx-auto animate-fadeIn">
              <h1 className="velox-text-h1-premium">
                Stop Managing Processes.
                <span className="block">
                  Start Receiving Results.
                </span>
              </h1>

              <p className="velox-text-lead text-center max-w-4xl mx-auto">
                <strong>You delegate operations once. We deliver outcomes forever.</strong>
                <span className="block mt-2 font-semibold text-gradient">Your team leads. Technology serves. Business grows.</span>
              </p>

              <p className="velox-text-body max-w-3xl mx-auto text-center">
                No software to learn. No systems to manage. Just perfect results delivered to your inbox.
              </p>
            </div>

            {/* Primary CTAs - Design System Compliant */}
            <div 
              className="space-y-6 text-center animate-fadeIn"
              style={{ animationDelay: '0.3s' }}
            >
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="relative bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-lg font-semibold px-10 py-5 h-auto rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 overflow-hidden group"
                  asChild
                >
                  <Link href="/tools/business-audit">
                    <span className="relative z-10 flex items-center gap-2">
                      Calculate My Savings
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
                  <Link href="/our-approach">
                    <span className="flex items-center gap-2">
                      How It Works
                      <ArrowRight className="w-5 h-5" />
                    </span>
                  </Link>
                </Button>
              </div>

              {/* Social Proof Banner */}
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-full shadow-sm">
                <span className="velox-text-caption">
                  Most automation projects fail because <span className="font-bold text-gray-700">you're left managing complex tools</span>.
                </span>
                <Link
                  href="#transformation"
                  className="velox-text-caption font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1 transition-colors duration-200"
                >
                  See the difference
                  <ArrowDown className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Transformation Section - Separate Section for Better Spacing */}
      <Section
        padding="xl"
        background="transparent"
        className="relative overflow-visible"
      >
        <Container className="relative z-10 max-w-7xl overflow-visible">
          <div className="text-center space-y-16">
            <div 
              className="space-y-6 animate-fadeIn"
              style={{ animationDelay: '0.2s' }}
            >
              <h2 className="velox-text-h2 text-center" id="transformation">
                From Operational Overwhelm to Strategic Leadership
              </h2>
            </div>
            
            <div className="grid lg:grid-cols-12 gap-8 items-center mt-12 overflow-visible">
              {/* Challenge Card */}
              <div className="lg:col-span-5 animate-on-scroll overflow-visible" data-animation="fadeInLeft">
                <div className="card-challenge relative pt-12 mt-6 overflow-visible">
                  <div className="absolute -top-3 left-8 px-4 py-2 bg-gray-600 text-white rounded-full text-sm font-semibold z-10 shadow-md">
                    Before Service-as-Software
                  </div>
                  <div className="icon-container mb-6">
                    <AlertTriangle className="h-6 w-6 icon-primary" />
                  </div>
                  <h4 className="velox-text-h3 mb-6">
                    Your Team Today
                  </h4>
                  <div className="space-y-6">
                    <div className="text-center px-4">
                      <p className="text-xl font-bold text-gray-800 mb-3 leading-tight">Drowning in operational tasks</p>
                      <p className="text-lg text-gray-600 font-semibold">No time for strategic work</p>
                    </div>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 rounded-full bg-gray-400 mt-2 flex-shrink-0" />
                        <span className="velox-text-body">Opens laptop to 47 unprocessed requests</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 rounded-full bg-gray-400 mt-2 flex-shrink-0" />
                        <span className="velox-text-body">Three systems need manual updates (again)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 rounded-full bg-gray-400 mt-2 flex-shrink-0" />
                        <span className="velox-text-body">Two hours copying data between platforms</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 rounded-full bg-gray-400 mt-2 flex-shrink-0" />
                        <span className="velox-text-body">Strategic planning meeting? Cancelled (again)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 rounded-full bg-gray-400 mt-2 flex-shrink-0" />
                        <span className="velox-text-body">Leaves at 7 PM, further behind than morning</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Transformation Arrow */}
              <div className="lg:col-span-2 flex justify-center animate-on-scroll" data-animation="scaleIn" style={{animationDelay: '0.3s'}}>
                <div className="transformation-arrow">
                  <ArrowRight className="h-8 w-8 text-white" />
                </div>
              </div>
              
              {/* Solution Card */}
              <div className="lg:col-span-5 animate-on-scroll overflow-visible" data-animation="fadeInRight" style={{animationDelay: '0.2s'}}>
                <div className="card-solution relative pt-12 mt-6 overflow-visible">
                  <div className="absolute -top-3 left-8 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full text-sm font-semibold z-10 shadow-md">
                    With Service-as-Software
                  </div>
                  <div className="icon-container-gradient mb-6">
                    <Target className="h-6 w-6 icon-accent" />
                  </div>
                  <h4 className="velox-text-h3 text-blue-800 mb-6">
                    Your Team Tomorrow
                  </h4>
                  <div className="space-y-6">
                    <div className="text-center px-4">
                      <p className="text-xl font-bold text-blue-800 mb-3 leading-tight">Focuses on strategic work</p>
                      <p className="text-lg text-blue-600 font-semibold">Receives processed results and analyzes trends</p>
                    </div>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <span className="velox-text-body">Opens laptop to completed work awaiting review</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <span className="velox-text-body">Reviews three exceptions needing her expertise</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <span className="velox-text-body">Leads strategic session on market expansion</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <span className="velox-text-body">Mentors junior team member on analysis</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <span className="velox-text-body">Leaves at 4 PM for daughter's recital</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Value Proposition Section */}
      <Section
        padding="xl"
        background="transparent"
        className="relative"
      >
        <Container className="relative z-10 max-w-6xl">
          <div className="text-center space-y-12">
            <div 
              className="space-y-6 animate-fadeIn"
              style={{ animationDelay: '0.1s' }}
            >
              <h2 className="velox-text-h2 text-center">
                Why Service-as-Software Works
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="card-base text-center animate-on-scroll group hover:scale-105 transition-all duration-300 h-full flex flex-col" data-animation="fadeInUp" style={{animationDelay: '0.1s'}}>
                <div className="icon-container-gradient mx-auto mb-6">
                  <BarChart3 className="w-6 h-6 icon-accent" />
                </div>
                <h4 className="velox-text-h3 text-blue-800 mb-4 text-center">
                  Scales with You
                </h4>
                <div className="flex-1 flex flex-col justify-between">
                  <p className="velox-text-body text-gray-700 mb-6 font-medium">Investment proportional to value created</p>
                  <p className="velox-text-caption font-semibold text-blue-600 bg-blue-50 px-3 py-2 rounded-lg mt-auto">Pricing aligned with your savings</p>
                </div>
              </div>

              <div className="card-elevated text-center animate-on-scroll group hover:scale-105 transition-all duration-300 h-full flex flex-col" data-animation="scaleIn" style={{animationDelay: '0.2s'}}>
                <div className="icon-container-gradient mx-auto mb-6 bg-gradient-to-br from-emerald-500 to-emerald-600">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h4 className="velox-text-h3 text-blue-800 mb-4 text-center">
                  Fast Results
                </h4>
                <div className="flex-1 flex flex-col justify-between">
                  <p className="velox-text-body text-gray-700 mb-6 font-medium">Most clients see positive ROI quickly</p>
                  <p className="velox-text-caption font-semibold text-emerald-600 bg-emerald-50 px-3 py-2 rounded-lg mt-auto">ROI timeline depends on process complexity</p>
                </div>
              </div>

              <div className="card-solution text-center animate-on-scroll group hover:scale-105 transition-all duration-300 h-full flex flex-col" data-animation="fadeInLeft" style={{animationDelay: '0.3s'}}>
                <div className="icon-container-gradient mx-auto mb-6">
                  <Zap className="w-6 h-6 icon-accent" />
                </div>
                <h4 className="velox-text-h3 text-blue-800 mb-4 text-center">
                  Custom Built
                </h4>
                <div className="flex-1 flex flex-col justify-between">
                  <p className="velox-text-body text-blue-700 mb-6 font-medium">Faster than any alternative</p>
                  <p className="velox-text-caption font-semibold text-blue-600 bg-blue-50 px-3 py-2 rounded-lg mt-auto">Implementation speed varies by scope</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Final CTA Section */}
      <Section
        padding="xl"
        background="transparent"
        className="relative"
      >
        <Container className="relative z-10 max-w-4xl">
          <div 
            className="text-center animate-fadeIn"
            style={{ animationDelay: '0.2s' }}
          >
            <div className="p-12 bg-gradient-to-br from-blue-900 to-blue-800 text-white rounded-3xl relative overflow-hidden">
              {/* Simplified Background Pattern */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-transparent" />
              </div>

              <div className="relative z-10 space-y-8">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold text-white">Ready to Transform Your Operations?</h2>
                  <p className="text-lg text-blue-100 max-w-2xl mx-auto">
                    Start with our free business audit to see your specific savings potential
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="relative bg-white text-blue-900 text-lg font-semibold px-12 py-6 h-auto rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 overflow-hidden group"
                    asChild
                  >
                    <Link href="/tools/business-audit">
                      <span className="relative z-10 flex items-center gap-2">
                        Get Your Free ROI Analysis
                        <Calculator className="w-5 h-5" />
                      </span>
                    </Link>
                  </Button>

                  <Button
                    size="lg"
                    variant="outline"
                    className="text-white border-2 border-white hover:bg-white hover:text-blue-900 px-12 py-6 h-auto text-lg font-semibold transition-all duration-300"
                    asChild
                  >
                    <Link href="/our-approach">
                      <span className="flex items-center gap-2">
                        Learn Our Process
                        <ArrowRight className="w-5 h-5" />
                      </span>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Credibility Reference */}
            <div className="mt-8">
              <p className="velox-text-caption max-w-md mx-auto">
                Based on research from McKinsey, MIT Technology Review, and Harvard Business Review
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  )
}