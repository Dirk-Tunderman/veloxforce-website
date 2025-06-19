"use client"

import React from "react"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Check, X, Zap, Users, Cog, Shield, ThumbsUp, ThumbsDown, ArrowRight, Brain } from "lucide-react"
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
            Why Generic Software Fails Most Businesses
          </h2>
          <p className="velox-text-lead max-w-4xl mx-auto text-blue-800">
            <span className="font-bold">AI made custom software affordable.</span> We made it accessible by <span className="font-bold">running it for you</span>. 
            <span className="font-semibold"> That's the Service-as-Software revolution.</span>
          </p>
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
                <Check className="w-8 h-8 icon-accent" />
              </div>
              <h3 className="velox-text-h2 text-blue-800 text-center mb-8 font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                Service-as-Software
              </h3>
              
              <div className="space-y-8 flex-1">
                {/* Best of All Worlds */}
                <div className="animate-on-scroll" data-animation="fadeInUp" style={{animationDelay: '0.5s'}}>
                  <div className="flex items-center gap-3 mb-4 justify-center">
                    <Zap className="w-5 h-5 text-blue-600" />
                    <span className="text-lg font-bold text-blue-800">Best of All Worlds</span>
                  </div>
                  <div className="space-y-3 text-base text-blue-800 font-medium">
                    <p className="flex items-center gap-3 justify-center">
                      <Check className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <span>AI's intelligence + Human oversight</span>
                    </p>
                    <p className="flex items-center gap-3 justify-center">
                      <Check className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <span>Automation's scale + Custom solutions</span>
                    </p>
                    <p className="flex items-center gap-3 justify-center">
                      <Check className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <span>24/7 operations + Strategic thinking</span>
                    </p>
                  </div>
                </div>
                
                {/* All Problems Solved */}
                <div className="animate-on-scroll" data-animation="fadeInUp" style={{animationDelay: '0.6s'}}>
                  <div className="flex items-center gap-3 mb-4 justify-center">
                    <Shield className="w-5 h-5 text-blue-600" />
                    <span className="text-lg font-bold text-blue-800">All Problems Solved</span>
                  </div>
                  <div className="space-y-3 text-base text-blue-800 font-medium">
                    <p className="flex items-center gap-3 justify-center">
                      <Check className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <span>We manage the complexity</span>
                    </p>
                    <p className="flex items-center gap-3 justify-center">
                      <Check className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <span>We ensure quality & accuracy</span>
                    </p>
                    <p className="flex items-center gap-3 justify-center">
                      <Check className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <span>We handle scaling & improvements</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full animate-on-scroll" data-animation="fadeInUp" style={{animationDelay: '0.6s'}}>
                  <span className="text-sm font-semibold text-blue-800">
                    Guaranteed Results, Not Tools
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Industry Validation Badges */}
        <div className="mb-16 animate-on-scroll" data-animation="fadeInUp" style={{animationDelay: '0.5s'}}>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="validation-badge">
              <span className="text-sm text-gray-600">Validated by</span>
              <div className="flex items-center gap-4 mt-2">
                <div className="px-4 py-2 bg-white/80 backdrop-blur rounded-lg border border-gray-200">
                  <span className="font-semibold text-gray-700">MIT Technology Review</span>
                </div>
                <div className="px-4 py-2 bg-white/80 backdrop-blur rounded-lg border border-gray-200">
                  <span className="font-semibold text-gray-700">Harvard Business Review</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Message - Optimized */}
        <div className="bg-white/95 border border-blue-200 rounded-lg p-6 text-center relative overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200 animate-on-scroll" data-animation="fadeInUp" style={{animationDelay: '0.4s'}}>
          <div className="relative z-10">
            <h3 className="velox-text-h2 text-blue-900 mb-4">
              You own the strategy. We own the execution.
            </h3>
            <p className="velox-text-lead text-blue-800 mb-8">
              The perfect partnership for business growth
            </p>
            
            {/* ROI Preview Mini Widget */}
            <div className="grid md:grid-cols-3 gap-6 mb-8 max-w-2xl mx-auto">
              <div className="text-center hover:scale-105 transition-transform duration-200">
                <div className="text-3xl font-bold text-blue-600 mb-1">10x</div>
                <p className="text-sm text-gray-600">Faster Development</p>
              </div>
              <div className="text-center hover:scale-105 transition-transform duration-200">
                <div className="text-3xl font-bold text-blue-600 mb-1">90%</div>
                <p className="text-sm text-gray-600">Cost Reduction</p>
              </div>
              <div className="text-center hover:scale-105 transition-transform duration-200">
                <div className="text-3xl font-bold text-blue-600 mb-1">24/7</div>
                <p className="text-sm text-gray-600">Operations</p>
              </div>
            </div>
            
            <Link 
              href="/our-approach"
              className="inline-flex items-center gap-2 group hover:scale-[1.02] transition-transform duration-200"
            >
              <span>See How This Works</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  )
}