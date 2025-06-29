"use client"

import React from "react"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Check, X, Users, Cog, Shield, ThumbsUp, ThumbsDown, ArrowRight, Brain, Sparkles, Clock, AlertTriangle, Cloud, Link2, Zap } from "lucide-react"
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
            Closing the Gap Between Capability and Capacity
          </h2>
        </div>

        {/* The Model That Changes Everything */}
        <div className="mb-20 animate-on-scroll" data-animation="fadeInUp" style={{animationDelay: '0.1s'}}>
          <div className="text-center mb-12">
            <h3 className="velox-text-h2 mb-6">The Model That Changes Everything</h3>
            <p className="velox-text-lead max-w-4xl mx-auto text-blue-800">
              The problem is clear: capable teams trapped by inefficient systems.<br />
              The solution emerging: separate strategic work from systematic work.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Keep In-House */}
            <div className="bg-gradient-to-br from-blue-50 to-white border border-blue-200 rounded-3xl p-8 shadow-lg">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h4 className="velox-text-h3 text-blue-800 font-bold">Keep In-House:</h4>
              </div>
              <div className="space-y-4 text-center">
                <div className="flex items-center justify-center gap-3">
                  <Check className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span className="velox-text-body text-blue-800">Creative problem solving</span>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <Check className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span className="velox-text-body text-blue-800">Relationship building</span>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <Check className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span className="velox-text-body text-blue-800">Strategic decisions</span>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <Check className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span className="velox-text-body text-blue-800">Innovation and vision</span>
                </div>
              </div>
            </div>

            {/* Systematize Completely */}
            <div className="bg-gradient-to-br from-green-50 to-white border border-green-200 rounded-3xl p-8 shadow-lg">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-green-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Cog className="w-8 h-8 text-white" />
                </div>
                <h4 className="velox-text-h3 text-green-800 font-bold">Systematize Completely:</h4>
              </div>
              <div className="space-y-4 text-center">
                <div className="flex items-center justify-center gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="velox-text-body text-green-800">Repetitive processes</span>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="velox-text-body text-green-800">Data movement</span>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="velox-text-body text-green-800">Routine communications</span>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="velox-text-body text-green-800">Standard procedures</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why This Wasn't Possible Before - Enhanced Visual Design */}
        <div className="mb-20 animate-on-scroll" data-animation="fadeInUp" style={{animationDelay: '0.2s'}}>
          <div className="text-center mb-16">
            <h3 className="velox-text-h2 mb-6 text-blue-800">Why This Wasn't Possible Before</h3>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left Side - Problems */}
              <div className="bg-gradient-to-br from-red-50 to-red-100/50 border-2 border-red-200 rounded-3xl p-8 shadow-xl h-full">
                {/* Header with Icon */}
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <X className="w-10 h-10 text-white" />
                  </div>
                  <div className="h-16 flex items-center justify-center">
                    <h4 className="velox-text-h3 text-red-800 font-bold">Until recently, custom automation meant:</h4>
                  </div>
                </div>

                {/* Problem List with Lucide Icons */}
                <div className="space-y-4">
                  <div className="flex items-center gap-4 bg-white/60 rounded-xl p-4 border border-red-200">
                    <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-lg">€</span>
                    </div>
                    <span className="velox-text-body text-red-800 font-semibold">€500K+ enterprise software projects</span>
                  </div>
                  <div className="flex items-center gap-4 bg-white/60 rounded-xl p-4 border border-red-200">
                    <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-white" />
                    </div>
                    <span className="velox-text-body text-red-800 font-semibold">12-18 month implementations</span>
                  </div>
                  <div className="flex items-center gap-4 bg-white/60 rounded-xl p-4 border border-red-200">
                    <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Users className="w-5 h-5 text-white" />
                    </div>
                    <span className="velox-text-body text-red-800 font-semibold">Teams of consultants</span>
                  </div>
                  <div className="flex items-center gap-4 bg-white/60 rounded-xl p-4 border border-red-200">
                    <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <AlertTriangle className="w-5 h-5 text-white" />
                    </div>
                    <span className="velox-text-body text-red-800 font-semibold">Massive disruption</span>
                  </div>
                </div>
              </div>

              {/* Right Side - Solutions */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 border-2 border-blue-200 rounded-3xl p-8 shadow-xl h-full">
                {/* Header with Icon */}
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Sparkles className="w-10 h-10 text-white" />
                  </div>
                  <div className="h-16 flex items-center justify-center">
                    <h4 className="velox-text-h3 text-blue-800 font-bold">What changed? Just four things:</h4>
                  </div>
                </div>

                {/* Solutions List with Lucide Icons */}
                <div className="space-y-4">
                  <div className="flex items-center gap-4 bg-white/60 rounded-xl p-4 border border-blue-200">
                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Brain className="w-5 h-5 text-white" />
                    </div>
                    <span className="velox-text-body text-blue-800 font-semibold">AI can now understand and handle complex business logic</span>
                  </div>
                  <div className="flex items-center gap-4 bg-white/60 rounded-xl p-4 border border-blue-200">
                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Cloud className="w-5 h-5 text-white" />
                    </div>
                    <span className="velox-text-body text-blue-800 font-semibold">Cloud infrastructure costs dropped 90%</span>
                  </div>
                  <div className="flex items-center gap-4 bg-white/60 rounded-xl p-4 border border-blue-200">
                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Link2 className="w-5 h-5 text-white" />
                    </div>
                    <span className="velox-text-body text-blue-800 font-semibold">Integration tools can connect any system</span>
                  </div>
                  <div className="flex items-center gap-4 bg-white/60 rounded-xl p-4 border border-blue-200">
                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Zap className="w-5 h-5 text-white" />
                    </div>
                    <span className="velox-text-body text-blue-800 font-semibold">Development time has speeded up massively</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section Title */}
        <div className="text-center mb-16">
          <h3 className="velox-text-h2 text-blue-800 font-bold">What Service as a Software does</h3>
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