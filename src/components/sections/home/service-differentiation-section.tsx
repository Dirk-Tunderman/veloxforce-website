"use client"

import React from "react"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Check, ArrowRight, Zap, Users, Cog, TrendingUp, Shield } from "lucide-react"
import Link from "next/link"

export function ServiceDifferentiationSection() {
  return (
    <Section padding="xl" background="transparent" className="relative overflow-hidden">
      {/* Simple static background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-white to-blue-50/20" />
      
      <Container className="relative z-10 max-w-6xl">
        {/* Premium Section Header */}
        <div className="text-center mb-20 animate-on-scroll" data-animation="fadeInUp">
          <h2 className="velox-text-h1-premium mb-8">
            This Isn't Automation. It Isn't Consulting. <span className="text-gradient">It's Something New</span>.
          </h2>
          <p className="velox-text-lead max-w-4xl mx-auto text-blue-800">
            <span className="font-bold">AI made custom software affordable.</span> We made it accessible by <span className="font-bold">running it for you</span>. 
            <span className="font-semibold"> That's the Service-as-Software revolution.</span>
          </p>
        </div>

        {/* Enhanced Three-Column Comparison - Optimized */}
        <div className="grid lg:grid-cols-12 gap-8 items-center mb-20">
          {/* Traditional Approach + Human Services (Old Ways) - Subdued */}
          <div className="lg:col-span-5 space-y-6">
            <div className="card-challenge relative group animate-on-scroll" data-animation="fadeInLeft">
              <div className="icon-container mx-auto mb-6">
                <Cog className="w-6 h-6 icon-primary" />
              </div>
              <h3 className="velox-text-h3 text-center mb-4 text-gray-700">Traditional Approach</h3>
              <div className="space-y-3 velox-text-body text-center text-gray-600">
                <p className="hover:translate-x-1 transition-transform duration-200">• You buy tools</p>
                <p className="hover:translate-x-1 transition-transform duration-200">• You operate them</p>
                <p className="hover:translate-x-1 transition-transform duration-200">• You handle complexity</p>
              </div>
              <div className="mt-4 text-center">
                <span className="text-sm text-gray-500">Average efficiency: 20-30%</span>
              </div>
            </div>
            
            <div className="card-challenge relative group animate-on-scroll" data-animation="fadeInLeft" style={{animationDelay: '0.1s'}}>
              <div className="icon-container mx-auto mb-6">
                <Users className="w-6 h-6 icon-primary" />
              </div>
              <h3 className="velox-text-h3 text-center mb-4 text-gray-700">Human Services</h3>
              <div className="space-y-3 velox-text-body text-center text-gray-600">
                <p className="hover:translate-x-1 transition-transform duration-200">• You hire people/consultants</p>
                <p className="hover:translate-x-1 transition-transform duration-200">• Limited by human capacity</p>
                <p className="hover:translate-x-1 transition-transform duration-200">• Quality varies by person</p>
              </div>
              <div className="mt-4 text-center">
                <span className="text-sm text-gray-500">Average efficiency: 30-40%</span>
              </div>
            </div>
          </div>

          {/* Simple Transformation Arrow */}
          <div className="lg:col-span-2 flex justify-center relative">
            <div className="transformation-arrow animate-on-scroll" data-animation="scaleIn" style={{animationDelay: '0.2s'}}>
              <ArrowRight className="h-8 w-8 text-white" />
            </div>
          </div>

          {/* Service-as-Software (New Way) - Premium Elevated */}
          <div className="lg:col-span-5 animate-on-scroll" data-animation="fadeInRight" style={{animationDelay: '0.3s'}}>
            <div className="card-solution relative">
              <div className="icon-container-gradient mb-6 mx-auto">
                <Check className="w-8 h-8 icon-accent" />
              </div>
              <h3 className="velox-text-h3 text-blue-800 text-center mb-4 font-bold">
                Service-as-Software
              </h3>
              <div className="space-y-3 velox-text-body text-blue-800 text-center font-medium">
                <p className="flex items-center justify-center gap-2 hover:translate-x-1 transition-transform duration-200">
                  <Zap className="w-4 h-4 text-blue-600" />
                  You delegate process
                </p>
                <p className="flex items-center justify-center gap-2 hover:translate-x-1 transition-transform duration-200">
                  <Shield className="w-4 h-4 text-blue-600" />
                  We deliver guaranteed results
                </p>
                <p className="flex items-center justify-center gap-2 hover:translate-x-1 transition-transform duration-200">
                  <TrendingUp className="w-4 h-4 text-blue-600" />
                  We handle complexity for you
                </p>
              </div>
              <div className="mt-6 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full animate-on-scroll" data-animation="fadeInUp" style={{animationDelay: '0.5s'}}>
                  <span className="text-sm font-semibold text-blue-800">
                    Efficiency: 95%
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