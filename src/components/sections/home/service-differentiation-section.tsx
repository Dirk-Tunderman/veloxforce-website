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
            The Market Hasn't Caught Up to This Reality Yet
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


        {/* Enhanced Comparison Table */}
        <div className="mb-20 animate-on-scroll" data-animation="fadeInUp" style={{animationDelay: '0.5s'}}>
          <div className="card-elevated p-8 overflow-x-auto">
            <h3 className="text-2xl font-bold text-center text-blue-800 mb-8">The Complete Comparison</h3>
            <div className="min-w-[800px]">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-blue-200">
                    <th className="text-left py-4 px-3 font-bold text-gray-800">What You Need</th>
                    <th className="text-center py-4 px-3 font-bold text-gray-600">Buy Software</th>
                    <th className="text-center py-4 px-3 font-bold text-gray-600">Hire Team</th>
                    <th className="text-center py-4 px-3 font-bold text-gray-600">Use Consultants</th>
                    <th className="text-center py-4 px-3 font-bold text-blue-800 bg-blue-50 rounded-t-lg">Service-as-Software</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="border-b border-gray-200">
                    <td className="py-4 px-3 font-semibold text-gray-800">Custom-fit solution</td>
                    <td className="py-4 px-3 text-center text-red-600">20% fit</td>
                    <td className="py-4 px-3 text-center text-emerald-600">Perfect fit</td>
                    <td className="py-4 px-3 text-center text-orange-600">Good plan</td>
                    <td className="py-4 px-3 text-center font-bold text-blue-800 bg-blue-50">Perfect execution</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 px-3 font-semibold text-gray-800">Operational burden</td>
                    <td className="py-4 px-3 text-center text-red-600">You run it</td>
                    <td className="py-4 px-3 text-center text-red-600">You manage them</td>
                    <td className="py-4 px-3 text-center text-red-600">You implement</td>
                    <td className="py-4 px-3 text-center font-bold text-blue-800 bg-blue-50">We handle it</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 px-3 font-semibold text-gray-800">Time to value</td>
                    <td className="py-4 px-3 text-center text-red-600">3-6 months</td>
                    <td className="py-4 px-3 text-center text-orange-600">Immediate but limited</td>
                    <td className="py-4 px-3 text-center text-red-600">6-12 months</td>
                    <td className="py-4 px-3 text-center font-bold text-blue-800 bg-blue-50">6-8 weeks</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 px-3 font-semibold text-gray-800">Scaling</td>
                    <td className="py-4 px-3 text-center text-red-600">Buy more licenses</td>
                    <td className="py-4 px-3 text-center text-red-600">Hire more people</td>
                    <td className="py-4 px-3 text-center text-red-600">New project</td>
                    <td className="py-4 px-3 text-center font-bold text-blue-800 bg-blue-50">Already included</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-3 font-semibold text-gray-800">True cost</td>
                    <td className="py-4 px-3 text-center text-red-600">License + team to run</td>
                    <td className="py-4 px-3 text-center text-red-600">Salary + overhead</td>
                    <td className="py-4 px-3 text-center text-red-600">Fees + your implementation</td>
                    <td className="py-4 px-3 text-center font-bold text-blue-800 bg-blue-50 rounded-b-lg">One predictable fee</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Market Reality Message */}
        <div className="mb-20 animate-on-scroll" data-animation="fadeInUp" style={{animationDelay: '0.6s'}}>
          <div className="card-elevated max-w-4xl mx-auto p-8 text-center">
            <p className="text-xl font-bold text-blue-800 mb-4">
              Why hasn't everyone switched?
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Because this wasn't possible until AI could build custom software in weeks instead of years. <span className="font-bold text-blue-600">We're 18 months ahead.</span> <span className="font-bold text-red-600">Your competitors aren't.</span>
            </p>
          </div>
        </div>

        {/* Key Message - Optimized */}
        <div className="bg-white/95 border border-blue-200 rounded-lg p-6 text-center relative overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200 animate-on-scroll" data-animation="fadeInUp" style={{animationDelay: '0.7s'}}>
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