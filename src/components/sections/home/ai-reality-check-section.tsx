"use client"

import React from "react"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Settings, Shield, Eye, BarChart3, AlertTriangle, CheckCircle, Zap, Target, X, Check } from "lucide-react"

export function AIRealityCheckSection() {
  return (
    <Section padding="xl" background="transparent" className="relative">
      <Container className="relative z-10 max-w-6xl">
        {/* Section Header - Design System Compliant */}
        <div className="text-center mb-16 animate-on-scroll" data-animation="fadeInUp">
          {/* Design System Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm mb-6">
            <Target className="w-4 h-4 icon-accent" />
            <span className="velox-text-caption font-medium text-blue-700">Reality Check</span>
          </div>

          <h2 className="velox-text-h2 mb-6">
            The AI Reality Check
          </h2>

          <p className="velox-text-lead max-w-3xl mx-auto mb-4">
            What Service-as-Software Actually Means
          </p>
        </div>

        {/* Engineering Excellence Section - Enhanced Design */}
        <div className="mb-20 animate-on-scroll" data-animation="fadeInUp" style={{animationDelay: '0.1s'}}>
          <div className="card-elevated max-w-5xl mx-auto p-8 md:p-12">
            {/* Header with Icon */}
            <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="velox-text-h3 mb-4">
                It's Not Magic. It's Engineering.
              </h3>
              <p className="velox-text-lead text-center max-w-2xl mx-auto">
                We don't give you ChatGPT and call it automation. <br />
                <span className="font-bold text-blue-800">We build production-grade systems:</span>
              </p>
            </div>

            {/* Production-Grade Features - Enhanced Grid */}
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              <div className="group p-6 rounded-xl bg-gradient-to-br from-blue-50 to-white border border-blue-100 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="icon-container bg-blue-100 group-hover:bg-blue-200 transition-colors">
                    <Settings className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="velox-text-h4 mb-2">Custom AI trained on your processes</h4>
                    <p className="velox-text-body text-gray-600">Not generic, but purpose-built for your exact workflow</p>
                  </div>
                </div>
              </div>

              <div className="group p-6 rounded-xl bg-gradient-to-br from-emerald-50 to-white border border-emerald-100 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="icon-container bg-emerald-100 group-hover:bg-emerald-200 transition-colors">
                    <Shield className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="velox-text-h4 mb-2">Error handling for every edge case</h4>
                    <p className="velox-text-body text-gray-600">Robust systems that handle exceptions gracefully</p>
                  </div>
                </div>
              </div>

              <div className="group p-6 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="icon-container bg-gray-100 group-hover:bg-gray-200 transition-colors">
                    <Eye className="w-6 h-6 icon-primary" />
                  </div>
                  <div>
                    <h4 className="velox-text-h4 mb-2">Human oversight where judgment matters</h4>
                    <p className="velox-text-body text-gray-600">AI + humans working together for perfect outcomes</p>
                  </div>
                </div>
              </div>

              <div className="group p-6 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="icon-container bg-gray-100 group-hover:bg-gray-200 transition-colors">
                    <BarChart3 className="w-6 h-6 icon-primary" />
                  </div>
                  <div>
                    <h4 className="velox-text-h4 mb-2">24/7 monitoring and optimization</h4>
                    <p className="velox-text-body text-gray-600">Continuous improvement and performance tracking</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* The Truth About AI - Dramatic Comparison */}
        <div className="animate-on-scroll" data-animation="fadeInUp" style={{animationDelay: '0.2s'}}>
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-12">
              <h3 className="velox-text-h3 mb-4">
                The Truth About AI
              </h3>
              <p className="velox-text-lead text-gray-600 max-w-2xl mx-auto">
                There's a massive difference between raw AI and production-ready systems
              </p>
            </div>

            {/* Enhanced Comparison Cards */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Raw AI - Problem Side */}
              <div className="relative">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl opacity-60"></div>

                <div className="relative card-elevated p-8 border-l-4 border-red-400">
                  <div className="text-center mb-6">
                    <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <AlertTriangle className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h4 className="velox-text-h4 text-red-700">Raw AI</h4>
                      <p className="velox-text-caption text-red-600">What most vendors give you</p>
                    </div>
                  </div>

                  <div className="space-y-4 text-center">
                    {[
                      "Hallucinates and makes errors",
                      "Breaks under edge cases",
                      "Disappoints in production",
                      "Requires constant babysitting"
                    ].map((item, index) => (
                      <div key={index} className="flex items-center justify-center gap-3">
                        <div className="w-2 h-2 bg-red-400 rounded-full flex-shrink-0"></div>
                        <p className="velox-text-body text-gray-700">{item}</p>
                      </div>
                    ))}
                  </div>

                  {/* Bottom accent */}
                  <div className="mt-6 pt-4 border-t border-red-200">
                    <div className="flex items-center justify-center gap-2">
                      <X className="w-4 h-4 text-red-600" />
                      <p className="velox-text-caption text-red-600 font-medium">
                        Creates more problems than it solves
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Production AI - Solution Side */}
              <div className="relative">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-emerald-50 rounded-2xl opacity-60"></div>

                <div className="relative card-elevated p-8 border-l-4 border-blue-500">
                  <div className="text-center mb-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <CheckCircle className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="velox-text-h4 text-blue-700">Production AI</h4>
                      <p className="velox-text-caption text-blue-600">What we deliver</p>
                    </div>
                  </div>

                  <div className="space-y-4 text-center">
                    {[
                      "Properly engineered systems",
                      "Monitored and managed 24/7",
                      "Transforms businesses reliably",
                      "Delivers consistent outcomes"
                    ].map((item, index) => (
                      <div key={index} className="flex items-center justify-center gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                        <p className="velox-text-body text-gray-700">{item}</p>
                      </div>
                    ))}
                  </div>

                  {/* Bottom accent */}
                  <div className="mt-6 pt-4 border-t border-blue-200">
                    <div className="flex items-center justify-center gap-2">
                      <Check className="w-4 h-4 text-blue-600" />
                      <p className="velox-text-caption text-blue-600 font-medium">
                        Transforms your business operations
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="text-center mt-12">
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl shadow-lg">
                <Target className="w-5 h-5" />
                <span className="font-semibold">The difference? Engineering excellence.</span>
              </div>
            </div>
          </div>
        </div>

      </Container>
    </Section>
  )
}