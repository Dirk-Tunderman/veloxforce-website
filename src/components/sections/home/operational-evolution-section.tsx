"use client"

import React from "react"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { 
  TrendingUp, 
  Users, 
  ArrowRight, 
  CheckCircle, 
  AlertTriangle,
  Target,
  Zap,
  Building2,
  BarChart3
} from "lucide-react"

export function OperationalEvolutionSection() {
  return (
    <Section padding="xl" background="transparent" className="relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 via-white to-blue-50/10" />

      <Container className="relative z-10 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-20 animate-on-scroll" data-animation="fadeInUp">
          <h2 className="velox-text-h1-premium mb-8">
            When Organizations Outgrow Their Operating Models
          </h2>
          <p className="velox-text-lead max-w-4xl mx-auto text-blue-800">
            <span className="font-bold">The Natural Evolution of Business Complexity</span>
          </p>
        </div>

        {/* Enhanced Complexity Chart Visual */}
        <div className="mb-24 animate-on-scroll" data-animation="fadeInUp" style={{animationDelay: '0.1s'}}>
          <div className="bg-white/95 backdrop-blur-sm border border-blue-200/60 rounded-3xl p-10 shadow-xl max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <h3 className="velox-text-h2 text-blue-800">Operational Complexity vs. Company Size</h3>
              </div>
            </div>

            {/* Enhanced Visual Chart Representation */}
            <div className="grid lg:grid-cols-3 gap-10 items-center">
              {/* Chart Bars */}
              <div className="lg:col-span-2 space-y-6">
                <div className="grid grid-cols-1 gap-5">
                  {/* 10 Employees */}
                  <div className="bg-gray-50/80 rounded-2xl p-6 transition-all duration-300 hover:shadow-md">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                          <Users className="w-4 h-4 text-blue-600" />
                        </div>
                        <span className="font-semibold text-gray-800">10 Employees</span>
                      </div>
                      <span className="text-sm font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">Low Complexity</span>
                    </div>
                    <div className="bg-gray-200 rounded-full h-4 overflow-hidden">
                      <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-4 rounded-full transition-all duration-1000 ease-out" style={{width: '25%'}}></div>
                    </div>
                  </div>

                  {/* 50 Employees */}
                  <div className="bg-gray-50/80 rounded-2xl p-6 transition-all duration-300 hover:shadow-md">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center">
                          <Users className="w-4 h-4 text-amber-600" />
                        </div>
                        <span className="font-semibold text-gray-800">50 Employees</span>
                      </div>
                      <span className="text-sm font-bold text-amber-600 bg-amber-50 px-3 py-1 rounded-full">Medium Complexity</span>
                    </div>
                    <div className="bg-gray-200 rounded-full h-4 overflow-hidden">
                      <div className="bg-gradient-to-r from-amber-500 to-amber-600 h-4 rounded-full transition-all duration-1000 ease-out" style={{width: '65%'}}></div>
                    </div>
                  </div>

                  {/* 100+ Employees */}
                  <div className="bg-gray-50/80 rounded-2xl p-6 transition-all duration-300 hover:shadow-md">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                          <Users className="w-4 h-4 text-red-600" />
                        </div>
                        <span className="font-semibold text-gray-800">100+ Employees</span>
                      </div>
                      <span className="text-sm font-bold text-red-600 bg-red-50 px-3 py-1 rounded-full">High Complexity</span>
                    </div>
                    <div className="bg-gray-200 rounded-full h-4 overflow-hidden">
                      <div className="bg-gradient-to-r from-red-500 to-red-600 h-4 rounded-full transition-all duration-1000 ease-out" style={{width: '95%'}}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Insight Panel */}
              <div className="lg:col-span-1">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl p-8 h-full flex flex-col justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <TrendingUp className="w-8 h-8 text-white" />
                    </div>
                    <p className="velox-text-body text-blue-800 font-medium leading-relaxed mb-4">
                      As companies grow from 10 to 100 employees, operational demands scale
                      <span className="font-bold text-blue-900 bg-blue-200/50 px-1 rounded"> exponentially</span> while management bandwidth scales
                      <span className="font-bold text-blue-900 bg-blue-200/50 px-1 rounded"> linearly</span>.
                    </p>
                    <div className="bg-white/80 rounded-xl p-4 mt-4">
                      <p className="text-sm text-blue-700 font-bold">
                        This creates predictable pressure points.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Operational Patterns Comparison */}
        <div className="mb-24">
          <div className="text-center mb-16 animate-on-scroll" data-animation="fadeInUp" style={{animationDelay: '0.2s'}}>
            <h3 className="velox-text-h2 mb-6">Common Operational Patterns</h3>
            <p className="velox-text-lead text-blue-700 max-w-3xl mx-auto">
              The difference between where most organizations are and where they need to be
            </p>
          </div>

          {/* Enhanced Comparison Grid */}
          <div className="grid lg:grid-cols-12 gap-10 items-stretch">
            {/* Typical State - Enhanced */}
            <div className="lg:col-span-5 animate-on-scroll" data-animation="fadeInLeft" style={{animationDelay: '0.3s'}}>
              <div className="bg-gray-50/80 border border-gray-200/60 rounded-3xl p-8 h-full transition-all duration-300 hover:shadow-lg hover:border-gray-300/60">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 bg-red-100 rounded-2xl flex items-center justify-center">
                    <AlertTriangle className="w-7 h-7 text-red-600" />
                  </div>
                  <div>
                    <h4 className="velox-text-h3 text-gray-800 font-bold mb-1">Typical State</h4>
                    <p className="text-sm text-gray-600">Where most organizations are</p>
                  </div>
                </div>

                <div className="space-y-5">
                  <div className="flex items-start gap-4 p-4 bg-white/60 rounded-xl">
                    <div className="w-3 h-3 bg-red-400 rounded-full mt-1.5 flex-shrink-0"></div>
                    <div>
                      <p className="velox-text-body text-gray-800 font-semibold mb-1">
                        Processes developed organically
                      </p>
                      <p className="text-sm text-gray-600">Ad-hoc solutions built over time</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-white/60 rounded-xl">
                    <div className="w-3 h-3 bg-red-400 rounded-full mt-1.5 flex-shrink-0"></div>
                    <div>
                      <p className="velox-text-body text-gray-800 font-semibold mb-1">
                        Knowledge distributed unevenly
                      </p>
                      <p className="text-sm text-gray-600">Critical information trapped in silos</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-white/60 rounded-xl">
                    <div className="w-3 h-3 bg-red-400 rounded-full mt-1.5 flex-shrink-0"></div>
                    <div>
                      <p className="velox-text-body text-gray-800 font-semibold mb-1">
                        Coordination requires overhead
                      </p>
                      <p className="text-sm text-gray-600">Constant meetings and check-ins</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-white/60 rounded-xl">
                    <div className="w-3 h-3 bg-red-400 rounded-full mt-1.5 flex-shrink-0"></div>
                    <div>
                      <p className="velox-text-body text-gray-800 font-semibold mb-1">
                        Exceptions consume resources
                      </p>
                      <p className="text-sm text-gray-600">Edge cases break the system</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Transformation Arrow */}
            <div className="lg:col-span-2 flex justify-center items-center">
              <div className="relative">
                <div className="transformation-arrow animate-on-scroll" data-animation="scaleIn" style={{animationDelay: '0.4s'}}>
                  <ArrowRight className="h-8 w-8 text-white" />
                </div>
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full whitespace-nowrap">
                  Transform
                </div>
              </div>
            </div>

            {/* Optimal State - Enhanced */}
            <div className="lg:col-span-5 animate-on-scroll" data-animation="fadeInRight" style={{animationDelay: '0.5s'}}>
              <div className="bg-gradient-to-br from-blue-50/80 to-blue-100/40 border-2 border-blue-200/60 rounded-3xl p-8 h-full transition-all duration-300 hover:shadow-xl hover:border-blue-300/60 relative overflow-hidden">
                {/* Subtle background pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent"></div>

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center shadow-lg">
                      <Target className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h4 className="velox-text-h3 text-blue-800 font-bold mb-1">Optimal State</h4>
                      <p className="text-sm text-blue-600">Where organizations need to be</p>
                    </div>
                  </div>

                  <div className="space-y-5">
                    <div className="flex items-start gap-4 p-4 bg-white/80 rounded-xl shadow-sm">
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="velox-text-body text-blue-800 font-semibold mb-1">
                          Processes systematized
                        </p>
                        <p className="text-sm text-blue-600">Documented, repeatable workflows</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 bg-white/80 rounded-xl shadow-sm">
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="velox-text-body text-blue-800 font-semibold mb-1">
                          Knowledge accessible
                        </p>
                        <p className="text-sm text-blue-600">Information available when needed</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 bg-white/80 rounded-xl shadow-sm">
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="velox-text-body text-blue-800 font-semibold mb-1">
                          Coordination happens automatically
                        </p>
                        <p className="text-sm text-blue-600">Systems orchestrate workflows</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 bg-white/80 rounded-xl shadow-sm">
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="velox-text-body text-blue-800 font-semibold mb-1">
                          Exceptions handled within frameworks
                        </p>
                        <p className="text-sm text-blue-600">Edge cases become routine</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Transformation Gap */}
        <div className="animate-on-scroll" data-animation="fadeInUp" style={{animationDelay: '0.6s'}}>
          <div className="bg-gradient-to-br from-blue-50 via-white to-blue-50/30 border-2 border-blue-200/60 rounded-3xl p-12 text-center relative overflow-hidden shadow-xl">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-transparent to-blue-600/3"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-blue-100/30 to-transparent rounded-full -translate-y-32 translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-blue-100/20 to-transparent rounded-full translate-y-24 -translate-x-24"></div>

            <div className="relative z-10">
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center shadow-lg">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="velox-text-h2 text-blue-900">The Transformation Gap</h3>
              </div>

              <div className="max-w-5xl mx-auto space-y-8">
                <div className="grid md:grid-cols-2 gap-8 mb-10">
                  <div className="bg-white/90 rounded-2xl p-6 shadow-sm">
                    <p className="velox-text-lead text-blue-800 font-medium">
                      The difference between typical and optimal isn't about
                      <span className="font-bold text-gray-700"> people</span> or
                      <span className="font-bold text-gray-700"> effort</span>.
                    </p>
                  </div>
                  <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-6 shadow-lg">
                    <p className="velox-text-lead text-white font-bold">
                      It's about operational infrastructure.
                    </p>
                  </div>
                </div>

                <div className="bg-white/95 rounded-2xl p-8 shadow-lg border border-blue-100">
                  <div className="flex items-center justify-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center">
                      <Building2 className="w-6 h-6 text-white" />
                    </div>
                    <span className="velox-text-h3 text-blue-800">The Key Insight</span>
                  </div>

                  <div className="space-y-6">
                    <p className="velox-text-body text-blue-800 font-medium leading-relaxed">
                      Organizations that successfully scale have discovered methods to build operations that scale
                      <span className="font-bold text-blue-900 bg-blue-100/60 px-2 py-1 rounded-lg"> ahead of growth</span> rather than
                      <span className="font-bold text-red-600 bg-red-100/60 px-2 py-1 rounded-lg"> behind it</span>.
                    </p>

                    <div className="bg-gradient-to-r from-blue-50 to-blue-100/50 rounded-xl p-6">
                      <p className="velox-text-body text-blue-800 font-bold">
                        This represents a fundamental shift in how work gets accomplished.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
