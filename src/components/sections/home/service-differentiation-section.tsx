"use client"

import React from "react"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Check, X, Zap, Users, Cog, Shield, ThumbsUp, ThumbsDown, ArrowRight, Brain, Server, Cloud, Sparkles } from "lucide-react"
import Link from "next/link"

export function ServiceDifferentiationSection() {
  return (
    <Section padding="xl" background="transparent" className="relative overflow-hidden">
      {/* Simple static background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-white to-blue-50/20" />

      <Container className="relative z-10 max-w-7xl">
        {/* Premium Section Header */}
        <div className="text-center mb-20 animate-on-scroll" data-animation="fadeInUp">
          <h2 className="velox-text-h1-premium mb-8">
            The Evolution Nobody Saw Coming
          </h2>
          <p className="velox-text-lead max-w-4xl mx-auto text-blue-800">
            <span className="font-bold">Three decades of business software evolution</span> led to this breakthrough moment.
            <span className="font-semibold"> Service-as-Software changes everything.</span>
          </p>
        </div>

        {/* Evolution Timeline */}
        <div className="mb-20 animate-on-scroll" data-animation="fadeInUp" style={{animationDelay: '0.1s'}}>
          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {/* Before 2000s */}
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-gray-100 rounded-2xl flex items-center justify-center">
                <Server className="w-10 h-10 text-gray-600" />
              </div>
              <h3 className="velox-text-h3 mb-4 text-gray-700">Before 2000s</h3>
              <div className="space-y-3 min-h-[80px] flex flex-col justify-center">
                <p className="text-base font-bold text-gray-700 leading-relaxed mx-auto max-w-[280px]">
                  Buy servers, install software, hire IT teams
                </p>
                <p className="text-sm text-gray-600 leading-relaxed mx-auto max-w-[280px]">
                  Massive upfront costs, months of setup
                </p>
              </div>
            </div>

            {/* 2000s-2020s */}
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-blue-100 rounded-2xl flex items-center justify-center">
                <Cloud className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="velox-text-h3 mb-4 text-blue-700">2000s-2020s</h3>
              <div className="space-y-3 min-h-[80px] flex flex-col justify-center">
                <p className="text-base font-bold text-blue-700 leading-relaxed mx-auto max-w-[280px]">
                  Rent software (SaaS), but still operate it yourself
                </p>
                <p className="text-sm text-blue-600 leading-relaxed mx-auto max-w-[280px]">
                  Lower costs, but you still manage everything
                </p>
              </div>
            </div>

            {/* 2024+ */}
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center shadow-lg">
                <Sparkles className="w-10 h-10 text-white" />
              </div>
              <h3 className="velox-text-h3 mb-4 text-blue-800">2024+</h3>
              <div className="space-y-3 min-h-[80px] flex flex-col justify-center">
                <p className="text-base font-bold text-blue-800 leading-relaxed mx-auto max-w-[280px]">
                  Define outcomes, receive results (Service-as-Software)
                </p>
                <p className="text-sm text-blue-700 leading-relaxed mx-auto max-w-[280px]">
                  AI builds it, we run it, you receive finished work
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Three-Column Comparison - Original Layout */}
        <div className="grid lg:grid-cols-12 gap-8 items-center mb-20">
          {/* Traditional Approaches (Left Side) - Subdued */}
          <div className="lg:col-span-5 space-y-4">
            {/* Traditional Automation */}
            <div className="card-challenge relative group animate-on-scroll" data-animation="fadeInLeft">
              <div className="flex items-start gap-4">
                <div className="icon-container">
                  <Cog className="w-5 h-5 icon-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="velox-text-h3 mb-4 text-gray-800 font-bold">Traditional Automation</h3>
                  <div className="grid grid-cols-2 gap-6">
                    {/* What Works */}
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <ThumbsUp className="w-4 h-4 text-emerald-600" />
                        <span className="text-sm font-bold text-emerald-700">What Works</span>
                      </div>
                      <div className="space-y-2 text-sm text-gray-700">
                        <p className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                          <span className="font-medium">Works 24/7</span>
                        </p>
                        <p className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                          <span className="font-medium">Scales infinitely</span>
                        </p>
                      </div>
                    </div>
                    {/* The Reality */}
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <ThumbsDown className="w-4 h-4 text-red-600" />
                        <span className="text-sm font-bold text-red-700">The Reality</span>
                      </div>
                      <div className="space-y-2 text-sm text-gray-700">
                        <p className="flex items-start gap-2">
                          <X className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                          <span className="font-medium">You manage tools</span>
                        </p>
                        <p className="flex items-start gap-2">
                          <X className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                          <span className="font-medium">Breaks easily</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Human Teams */}
            <div className="card-challenge relative group animate-on-scroll" data-animation="fadeInLeft" style={{animationDelay: '0.1s'}}>
              <div className="flex items-start gap-4">
                <div className="icon-container">
                  <Users className="w-5 h-5 icon-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="velox-text-h3 mb-4 text-gray-800 font-bold">Human Teams</h3>
                  <div className="grid grid-cols-2 gap-6">
                    {/* What Works */}
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <ThumbsUp className="w-4 h-4 text-emerald-600" />
                        <span className="text-sm font-bold text-emerald-700">What Works</span>
                      </div>
                      <div className="space-y-2 text-sm text-gray-700">
                        <p className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                          <span className="font-medium">Human judgment</span>
                        </p>
                        <p className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                          <span className="font-medium">Handles exceptions</span>
                        </p>
                      </div>
                    </div>
                    {/* The Reality */}
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <ThumbsDown className="w-4 h-4 text-red-600" />
                        <span className="text-sm font-bold text-red-700">The Reality</span>
                      </div>
                      <div className="space-y-2 text-sm text-gray-700">
                        <p className="flex items-start gap-2">
                          <X className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                          <span className="font-medium">High costs</span>
                        </p>
                        <p className="flex items-start gap-2">
                          <X className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                          <span className="font-medium">Limited hours</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* AI Solutions */}
            <div className="card-challenge relative group animate-on-scroll" data-animation="fadeInLeft" style={{animationDelay: '0.2s'}}>
              <div className="flex items-start gap-4">
                <div className="icon-container">
                  <Brain className="w-5 h-5 icon-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="velox-text-h3 mb-4 text-gray-800 font-bold">AI Solutions</h3>
                  <div className="grid grid-cols-2 gap-6">
                    {/* What Works */}
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <ThumbsUp className="w-4 h-4 text-emerald-600" />
                        <span className="text-sm font-bold text-emerald-700">What Works</span>
                      </div>
                      <div className="space-y-2 text-sm text-gray-700">
                        <p className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                          <span className="font-medium">Learns & adapts</span>
                        </p>
                        <p className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                          <span className="font-medium">Processes data</span>
                        </p>
                      </div>
                    </div>
                    {/* The Reality */}
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <ThumbsDown className="w-4 h-4 text-red-600" />
                        <span className="text-sm font-bold text-red-700">The Reality</span>
                      </div>
                      <div className="space-y-2 text-sm text-gray-700">
                        <p className="flex items-start gap-2">
                          <X className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                          <span className="font-medium">Needs oversight</span>
                        </p>
                        <p className="flex items-start gap-2">
                          <X className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                          <span className="font-medium">Can hallucinate</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Transformation Arrow */}
          <div className="lg:col-span-2 flex justify-center items-center relative">
            <div className="transformation-arrow animate-on-scroll" data-animation="scaleIn" style={{animationDelay: '0.3s'}}>
              <ArrowRight className="h-8 w-8 text-white" />
            </div>
          </div>

          {/* Service-as-Software (Right Side) - Premium Elevated */}
          <div className="lg:col-span-5 animate-on-scroll" data-animation="fadeInRight" style={{animationDelay: '0.4s'}}>
            <div className="card-solution relative min-h-[400px] flex flex-col">
              <div className="icon-container-gradient mb-6 mx-auto">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="velox-text-h2 text-blue-800 text-center mb-8 font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                Service-as-Software
              </h3>

              <div className="space-y-6 flex-1">
                {/* Revolutionary Approach */}
                <div className="animate-on-scroll" data-animation="fadeInUp" style={{animationDelay: '0.5s'}}>
                  <div className="space-y-4 text-base text-blue-800 font-medium text-center">
                    <p className="flex items-center gap-3 justify-center">
                      <Check className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <span className="font-bold">AI builds YOUR software, not templates</span>
                    </p>
                    <p className="flex items-center gap-3 justify-center">
                      <Check className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <span className="font-bold">We operate complex tool orchestrations you never see</span>
                    </p>
                    <p className="flex items-center gap-3 justify-center">
                      <Check className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <span className="font-bold">Guaranteed outcomes at 80% less than custom development</span>
                    </p>
                    <p className="flex items-center gap-3 justify-center">
                      <Check className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <span className="font-bold">ROI positive in 3-4 months, not years</span>
                    </p>
                  </div>
                </div>

                {/* Value Proposition */}
                <div className="animate-on-scroll" data-animation="fadeInUp" style={{animationDelay: '0.6s'}}>
                  <div className="bg-blue-50 rounded-lg p-6 text-center">
                    <div className="flex items-center gap-3 mb-4 justify-center">
                      <Shield className="w-5 h-5 text-blue-600" />
                      <span className="text-lg font-bold text-blue-800">The Complete Solution</span>
                    </div>
                    <p className="text-blue-700 font-medium">
                      You describe what you need. We build the AI system. We run it 24/7.
                      <span className="font-bold"> You receive finished work.</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full animate-on-scroll" data-animation="fadeInUp" style={{animationDelay: '0.7s'}}>
                  <Sparkles className="w-4 h-4" />
                  <span className="text-sm font-semibold">
                    Outcomes, Not Software
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>



        {/* Key Message - Evolution Complete */}
        <div className="bg-gradient-to-r from-blue-50 to-white border border-blue-200 rounded-lg p-8 text-center relative overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200 animate-on-scroll" data-animation="fadeInUp" style={{animationDelay: '0.8s'}}>
          <div className="relative z-10">
            <h3 className="velox-text-h2 text-blue-900 mb-4">
              The Evolution Is Complete. The Future Is Here.
            </h3>
            <p className="velox-text-lead text-blue-800 mb-8">
              <span className="font-bold">Stop buying software. Start receiving outcomes.</span>
            </p>

            {/* Evolution Benefits */}
            <div className="grid md:grid-cols-4 gap-6 mb-8 max-w-4xl mx-auto">
              <div className="text-center hover:scale-105 transition-transform duration-200">
                <div className="text-3xl font-bold text-blue-600 mb-1">80%</div>
                <p className="text-sm text-gray-600">Less Than Custom Development</p>
              </div>
              <div className="text-center hover:scale-105 transition-transform duration-200">
                <div className="text-3xl font-bold text-blue-600 mb-1">3-4</div>
                <p className="text-sm text-gray-600">Months avarage to ROI Positive</p>
              </div>
              <div className="text-center hover:scale-105 transition-transform duration-200">
                <div className="text-3xl font-bold text-blue-600 mb-1">24/7</div>
                <p className="text-sm text-gray-600">AI Operations</p>
              </div>
              <div className="text-center hover:scale-105 transition-transform duration-200">
                <div className="text-3xl font-bold text-blue-600 mb-1">100%</div>
                <p className="text-sm text-gray-600">Custom Built for You</p>
              </div>
            </div>

            <Link
              href="/our-approach"
              className="inline-flex items-center gap-2 group hover:scale-[1.02] transition-transform duration-200 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg font-semibold"
            >
              <span>See How This Revolution Works</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  )
}