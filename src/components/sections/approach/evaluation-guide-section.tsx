"use client"

import React from "react"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"
import { Button } from "@/components/ui/button"
import { Calculator, TrendingUp, AlertTriangle, ArrowRight, Target, CheckCircle, X, Clock, DollarSign, Users } from "lucide-react"
import Link from "next/link"

export function EvaluationGuideSection() {
  return (
    <div>
      {/* New Hero Section - Direct and Results-Focused */}
      <Section
        padding="xl"
        background="white-to-light"
        className="relative min-h-[90vh] flex items-center overflow-hidden"
      >
        {/* Clean Background - Simplified */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-white to-blue-50/20" />

        <Container className="relative z-10 max-w-6xl">
          <div className="text-center space-y-12">
            {/* Main Content Block */}
            <div className="space-y-6 max-w-5xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                  Here's Exactly How We Turn Your
                </span>
                <br />
                <span className="text-gray-900">
                  Manual Processes Into Automated Operations
                </span>
              </h1>
              
              <Text className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                No guesswork. No generic solutions. Just a proven system that transforms your specific processes into reliable, scalable automation.
              </Text>
            </div>

            {/* Key Promise */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-blue-100 shadow-lg max-w-4xl mx-auto">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <Text className="text-2xl font-bold text-gray-900">
                  Discovery through deep interviews and observation. Implementation timeline depends on complexity - we'll tell you exactly after discovery.
                </Text>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Process Section */}
      <Section padding="xl" background="white" className="relative">
        <Container className="max-w-7xl">
          <div className="text-center mb-16">
            <Heading level={2} className="text-4xl font-bold text-gray-900 mb-6">
              How We Build Your Automated Operations
            </Heading>
            <Text className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discovery through deep interviews and observation. Implementation timeline depends on complexity - we'll tell you exactly after discovery.
            </Text>
          </div>

          {/* 4-Phase Process - Horizontal Flow with Animations */}
          <div className="relative mb-20">
            {/* Process Flow Container */}
            <div className="grid lg:grid-cols-4 gap-6 lg:gap-8 relative">
              
              {/* Phase 1: Discovery */}
              <div className="relative z-10 group">
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-500 hover:-translate-y-3 group-hover:border-blue-300 h-full flex flex-col">
                  {/* Icon with Animation */}
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Users className="w-10 h-10 text-white group-hover:animate-pulse" />
                  </div>

                  {/* Phase Number */}
                  <div className="text-center mb-4">
                    <span className="inline-flex items-center justify-center w-10 h-10 bg-blue-100 text-blue-600 rounded-full text-lg font-bold shadow-sm">1</span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center leading-tight">Discovery Through Deep Interviews</h3>

                  {/* Key Points with Icons */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                        <div className="w-2.5 h-2.5 bg-blue-500 rounded-full" />
                      </div>
                      <Text className="text-sm text-gray-700 leading-relaxed">Interview every person touching your processes</Text>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                        <div className="w-2.5 h-2.5 bg-blue-500 rounded-full" />
                      </div>
                      <Text className="text-sm text-gray-700 leading-relaxed">Shadow your team for 2 days</Text>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                        <div className="w-2.5 h-2.5 bg-blue-500 rounded-full" />
                      </div>
                      <Text className="text-sm text-gray-700 leading-relaxed">Document reality, not theory</Text>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                        <CheckCircle className="w-3.5 h-3.5 text-blue-500" />
                      </div>
                      <Text className="text-sm text-gray-700 leading-relaxed font-medium">Identify immediate quick wins</Text>
                    </div>
                  </div>

                  {/* Timeline Badge */}
                  <div className="mt-auto bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-xl p-4 text-center">
                    <Text className="text-sm font-bold text-blue-800 mb-1">2-3 weeks</Text>
                    <Text className="text-xs text-blue-600">Can't rush understanding</Text>
                  </div>
                </div>
              </div>

              {/* Phase 2: Analysis + Quick Wins */}
              <div className="relative z-10 group">
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-500 hover:-translate-y-3 group-hover:border-purple-300 h-full flex flex-col">
                  {/* Icon with Animation */}
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Calculator className="w-10 h-10 text-white group-hover:animate-pulse" />
                  </div>

                  {/* Phase Number */}
                  <div className="text-center mb-4">
                    <span className="inline-flex items-center justify-center w-10 h-10 bg-purple-100 text-purple-600 rounded-full text-lg font-bold shadow-sm">2</span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center leading-tight">Analysis + Quick Wins</h3>

                  {/* Key Points with Icons */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                        <DollarSign className="w-3.5 h-3.5 text-purple-500" />
                      </div>
                      <Text className="text-sm text-gray-700 leading-relaxed">Calculate visible + hidden costs</Text>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                        <Target className="w-3.5 h-3.5 text-purple-500" />
                      </div>
                      <Text className="text-sm text-gray-700 leading-relaxed">Project realistic ROI timeline</Text>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                        <CheckCircle className="w-3.5 h-3.5 text-purple-500" />
                      </div>
                      <Text className="text-sm text-gray-700 leading-relaxed font-medium">Deploy ready-made SOPs</Text>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                        <TrendingUp className="w-3.5 h-3.5 text-purple-500" />
                      </div>
                      <Text className="text-sm text-gray-700 leading-relaxed font-medium">Implement proven quick fixes</Text>
                    </div>
                  </div>

                  {/* Decision Badge */}
                  <div className="mt-auto bg-gradient-to-r from-purple-50 to-purple-100 border border-purple-200 rounded-xl p-4 text-center">
                    <Text className="text-sm font-bold text-purple-800 mb-1">Go/No-Go Decision</Text>
                    <Text className="text-xs text-purple-600">Numbers must guarantee success</Text>
                  </div>
                </div>
              </div>

              {/* Phase 3: Implementation */}
              <div className="relative z-10 group">
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-500 hover:-translate-y-3 group-hover:border-green-300 h-full flex flex-col">
                  {/* Icon with Animation */}
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <CheckCircle className="w-10 h-10 text-white group-hover:animate-bounce" />
                  </div>

                  {/* Phase Number */}
                  <div className="text-center mb-4">
                    <span className="inline-flex items-center justify-center w-10 h-10 bg-green-100 text-green-600 rounded-full text-lg font-bold shadow-sm">3</span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center leading-tight">Smart Implementation</h3>

                  {/* Key Points with Icons */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                        <Clock className="w-3.5 h-3.5 text-green-500" />
                      </div>
                      <Text className="text-sm text-gray-700 leading-relaxed">Value delivery in weeks</Text>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                        <Target className="w-3.5 h-3.5 text-green-500" />
                      </div>
                      <Text className="text-sm text-gray-700 leading-relaxed">Build complete system</Text>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                        <TrendingUp className="w-3.5 h-3.5 text-green-500" />
                      </div>
                      <Text className="text-sm text-gray-700 leading-relaxed">Timeline varies by complexity</Text>
                    </div>
                  </div>

                  {/* Timeline Options */}
                  <div className="mt-auto bg-gradient-to-r from-green-50 to-green-100 border border-green-200 rounded-xl p-4">
                    <Text className="text-sm text-green-700 mb-3 text-center font-bold">Implementation Timeline:</Text>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-green-700 font-medium">Simple:</span>
                        <span className="text-green-800 font-bold">4-8 weeks</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-green-700 font-medium">Standard:</span>
                        <span className="text-green-800 font-bold">2-4 months</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-green-700 font-medium">Complex:</span>
                        <span className="text-green-800 font-bold">4-6 months</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phase 4: Rollout */}
              <div className="relative z-10 group">
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-500 hover:-translate-y-3 group-hover:border-orange-300 h-full flex flex-col">
                  {/* Icon with Animation */}
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <TrendingUp className="w-10 h-10 text-white group-hover:animate-pulse" />
                  </div>

                  {/* Phase Number */}
                  <div className="text-center mb-4">
                    <span className="inline-flex items-center justify-center w-10 h-10 bg-orange-100 text-orange-600 rounded-full text-lg font-bold shadow-sm">4</span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center leading-tight">Systematic Rollout</h3>

                  {/* Key Points with Icons */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                        <CheckCircle className="w-3.5 h-3.5 text-orange-500" />
                      </div>
                      <Text className="text-sm text-gray-700 leading-relaxed">Parallel running systems</Text>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                        <TrendingUp className="w-3.5 h-3.5 text-orange-500" />
                      </div>
                      <Text className="text-sm text-gray-700 leading-relaxed">Measure real results</Text>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                        <Users className="w-3.5 h-3.5 text-orange-500" />
                      </div>
                      <Text className="text-sm text-gray-700 leading-relaxed">Gradual team adaptation</Text>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                        <Target className="w-3.5 h-3.5 text-orange-500" />
                      </div>
                      <Text className="text-sm text-gray-700 leading-relaxed">Zero disruption guarantee</Text>
                    </div>
                  </div>

                  {/* ROI Badge */}
                  <div className="mt-auto bg-gradient-to-r from-orange-50 to-orange-100 border border-orange-200 rounded-xl p-4 text-center">
                    <Text className="text-sm font-bold text-orange-800 mb-1">ROI Achievement</Text>
                    <Text className="text-xs text-orange-600">6-8 months after go-live</Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Realistic Timeline Expectations - Animated Flow */}
      <Section padding="xl" background="gray-light" className="relative overflow-hidden">
        <Container className="max-w-6xl">
          {/* Background Animation Elements */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500 rounded-full animate-pulse" />
            <div className="absolute bottom-10 right-10 w-24 h-24 bg-green-500 rounded-full animate-pulse delay-1000" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-purple-500 rounded-full animate-pulse delay-500" />
          </div>

          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Realistic Timeline Expectations</h3>

            {/* Timeline Flow */}
            <div className="relative">
              {/* Timeline Line */}
              <div className="hidden md:block absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-blue-300 via-green-300 to-purple-300 rounded-full" />

              <div className="grid md:grid-cols-3 gap-8 relative">
                {/* Discovery Phase */}
                <div className="text-center group">
                  <div className="relative">
                    {/* Icon without circle */}
                    <div className="flex items-center justify-center mx-auto mb-4">
                      <Clock className="w-16 h-16 text-blue-600 group-hover:scale-110 transition-all duration-300 group-hover:animate-spin" />
                    </div>
                    {/* Timeline Dot */}
                    <div className="hidden md:block absolute top-6 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow-md" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Discovery Phase</h4>
                  <div className="bg-blue-100 rounded-lg p-3 mb-3 group-hover:bg-blue-200 transition-colors duration-300">
                    <Text className="text-blue-700 font-bold text-lg">2-3 weeks</Text>
                  </div>
                  <Text className="text-sm text-gray-600">
                    Deep interviews + observation. Can't rush understanding your business.
                  </Text>

                  {/* Arrow */}
                  <div className="hidden md:block absolute top-16 -right-4 z-20">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md border border-gray-200">
                      <ArrowRight className="w-4 h-4 text-gray-400 animate-pulse" />
                    </div>
                  </div>
                </div>

                {/* Implementation */}
                <div className="text-center group">
                  <div className="relative">
                    {/* Icon without circle */}
                    <div className="flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-16 h-16 text-green-600 group-hover:scale-110 transition-all duration-300 group-hover:animate-bounce" />
                    </div>
                    {/* Timeline Dot */}
                    <div className="hidden md:block absolute top-6 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-500 rounded-full border-4 border-white shadow-md" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Implementation</h4>
                  <div className="bg-green-100 rounded-lg p-3 mb-3 group-hover:bg-green-200 transition-colors duration-300">
                    <Text className="text-green-700 font-bold text-lg">Varies by Complexity</Text>
                  </div>
                  <Text className="text-sm text-gray-600">
                    We'll give you exact timelines after discovery, not before.
                  </Text>

                  {/* Arrow */}
                  <div className="hidden md:block absolute top-16 -right-4 z-20">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md border border-gray-200">
                      <ArrowRight className="w-4 h-4 text-gray-400 animate-pulse delay-300" />
                    </div>
                  </div>
                </div>

                {/* Value Delivery */}
                <div className="text-center group">
                  <div className="relative">
                    {/* Icon without circle */}
                    <div className="flex items-center justify-center mx-auto mb-4">
                      <TrendingUp className="w-16 h-16 text-purple-600 group-hover:scale-110 transition-all duration-300 group-hover:animate-pulse" />
                    </div>
                    {/* Timeline Dot */}
                    <div className="hidden md:block absolute top-6 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-500 rounded-full border-4 border-white shadow-md" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Value Delivery</h4>
                  <div className="bg-purple-100 rounded-lg p-3 mb-3 group-hover:bg-purple-200 transition-colors duration-300">
                    <Text className="text-purple-700 font-bold text-sm">Quick wins: Within weeks</Text>
                    <Text className="text-purple-700 font-bold text-sm">Full ROI: 6-8 months</Text>
                  </div>
                  <Text className="text-sm text-gray-600">
                    See value immediately, achieve full transformation systematically.
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>


    </div>
  )
}
