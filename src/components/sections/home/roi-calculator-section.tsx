"use client"

import React from "react"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { 
  Calculator, 
  TrendingDown, 
  AlertTriangle, 
  ArrowRight, 
  DollarSign,
  Clock,
  Target,
  TrendingUp,
  Zap,
  CheckCircle,
  BarChart3
} from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"

export function ROICalculatorSection() {
  return (
    <Section padding="xl" background="transparent" className="relative overflow-hidden">
      {/* Simple Static Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-white to-blue-50/20" />
      
      <Container className="relative z-10 max-w-7xl">
        {/* Unit Economics Section */}
        <div className="text-center mb-20 animate-on-scroll" data-animation="fadeInUp">
          <div className="card-elevated max-w-6xl mx-auto p-12">
            <h2 className="velox-text-h2 mb-8">
              The Unit Economics of Intelligence
            </h2>
            
            {/* Cost Structure Formulas */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Current Cost Structure */}
              <div className="card-challenge p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-6">Your Current Cost Structure</h3>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-4">
                  <p className="text-sm font-mono text-gray-700 leading-relaxed">
                    <span className="font-bold">Process Outcome = </span><br />
                    (Human Hours × €75) +<br />
                    (Error Rate × Rework Cost) +<br />
                    (Delay × Opportunity Cost)
                  </p>
                </div>
                <p className="text-sm text-gray-600">Complex, variable, compounds with scale</p>
              </div>
              
              {/* Service-as-Software Structure */}
              <div className="card-solution p-6">
                <h3 className="text-xl font-bold text-blue-800 mb-6">Service-as-Software Structure</h3>
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mb-4">
                  <p className="text-sm font-mono text-blue-700 leading-relaxed">
                    <span className="font-bold">Same Outcome = </span><br />
                    Fixed Monthly Fee<br />
                    (typically 20-30% of current cost)
                  </p>
                </div>
                <p className="text-sm text-blue-600">Simple, predictable, scales infinitely</p>
              </div>
            </div>
            
            {/* Real Examples */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-blue-800 mb-6">Real Examples (Anonymized)</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {/* Simple Process */}
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-200">
                  <h4 className="font-bold text-blue-800 mb-4">Simple Process (Invoice Processing)</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-700">Current: 2 FTEs</span>
                      <span className="font-bold text-red-600">€140K/year</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Service-as-Software:</span>
                      <span className="font-bold text-emerald-600">€35K/year</span>
                    </div>
                    <div className="border-t border-blue-200 pt-2">
                      <div className="flex justify-between">
                        <span className="text-blue-800 font-semibold">Payback:</span>
                        <span className="font-bold text-blue-800">11 weeks</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Complex Process */}
                <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-lg p-6 border border-emerald-200">
                  <h4 className="font-bold text-emerald-800 mb-4">Complex Process (Customer Onboarding)</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-700">Current: 6 FTEs + systems</span>
                      <span className="font-bold text-red-600">€450K/year</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Service-as-Software:</span>
                      <span className="font-bold text-emerald-600">€135K/year</span>
                    </div>
                    <div className="border-t border-emerald-200 pt-2">
                      <div className="flex justify-between">
                        <span className="text-emerald-800 font-semibold">Payback:</span>
                        <span className="font-bold text-emerald-800">14 weeks</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* The Scaling Secret */}
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-8 border border-orange-200">
              <h3 className="text-xl font-bold text-orange-800 mb-4 text-center">The Scaling Secret</h3>
              <p className="text-lg text-gray-700 text-center mb-4">
                <span className="font-bold text-red-600">Traditional costs multiply.</span> 
                <span className="font-bold text-emerald-600"> Our costs don't.</span>
              </p>
              <p className="text-lg text-orange-800 font-bold text-center">
                At 10x volume, you pay the same.
              </p>
            </div>
          </div>
        </div>

        {/* ROI Metrics Showcase - CSS Only */}
        <div className="mb-24 animate-on-scroll" data-animation="fadeInUp" style={{animationDelay: '0.3s'}}>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { label: "ROI Varies by Scope", value: "Custom", suffix: "", icon: <Clock className="w-8 h-8" /> },
              { label: "Cost Reduction", value: "70", suffix: "%", icon: <TrendingDown className="w-8 h-8" /> },
              { label: "Implementation Speed", value: "10", suffix: "x faster", icon: <Zap className="w-8 h-8" /> },
              { label: "Success Rate", value: "98", suffix: "%", icon: <CheckCircle className="w-8 h-8" /> }
            ].map((metric, idx) => (
              <div
                key={idx}
                className="card-elevated text-center group hover:scale-105 transition-transform duration-200 h-full flex flex-col items-center justify-center py-8"
              >
                <div className="icon-container-gradient w-16 h-16 mx-auto mb-6 group-hover:scale-110 transition-transform">
                  {React.cloneElement(metric.icon, { className: "w-8 h-8 icon-accent" })}
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-3">
                  {metric.value}{metric.suffix}
                </div>
                <p className="velox-text-body font-medium text-gray-600 text-center">{metric.label}</p>
              </div>
            ))}
          </div>
          
          {/* Disclaimer */}
          <div className="mt-8 text-center">
            <p className="velox-text-caption text-gray-500 max-w-3xl mx-auto">
              *Results based on single-process implementations. Full transformation timelines vary.
            </p>
          </div>
        </div>

        {/* Why Timing Matters - Premium Redesign */}
        <div className="relative mb-24 animate-on-scroll" data-animation="fadeInUp" style={{animationDelay: '0.4s'}}>
          <div className="card-premium relative rounded-3xl p-12 md:p-16 bg-gradient-to-br from-white via-blue-50/30 to-white overflow-hidden border border-blue-100/50 shadow-xl">
            {/* Subtle Background Pattern */}
            <div className="absolute inset-0 bg-mesh-static opacity-20" />
            
            <div className="relative z-10">
              {/* Section Header */}
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 border border-blue-200 shadow-sm mb-6">
                  <Clock className="w-4 h-4 text-blue-600" />
                  <span className="velox-text-caption font-semibold text-blue-700">Strategic Timing</span>
                </div>
                
                <h3 className="velox-text-h2 text-center mb-6 bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                  Why Timing Matters
                </h3>
                
                <p className="velox-text-lead text-gray-600 max-w-3xl mx-auto">
                  The sooner you start transforming processes into software, the faster you gain competitive advantage.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                {[
                  {
                    icon: <AlertTriangle className="w-6 h-6" />,
                    title: "Delayed Action",
                    desc: "Inefficiencies compound while competitors gain ground",
                    color: "text-red-600",
                    bgColor: "bg-red-50",
                    borderColor: "border-red-200"
                  },
                  {
                    icon: <TrendingUp className="w-6 h-6" />,
                    title: "Early Adopters Win", 
                    desc: "First-mover advantage in operational efficiency",
                    color: "text-blue-600",
                    bgColor: "bg-blue-50",
                    borderColor: "border-blue-200"
                  },
                  {
                    icon: <CheckCircle className="w-6 h-6" />,
                    title: "Start Smart",
                    desc: "Free analysis shows your exact opportunity",
                    color: "text-emerald-600",
                    bgColor: "bg-emerald-50",
                    borderColor: "border-emerald-200"
                  }
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="card-elevated group hover:scale-105 transition-all duration-300 text-center p-8"
                  >
                    <div className={`icon-container-gradient w-16 h-16 mx-auto mb-6 ${item.bgColor} border ${item.borderColor}`}>
                      {React.cloneElement(item.icon, { className: `w-6 h-6 ${item.color}` })}
                    </div>
                    <h4 className="velox-text-h3 text-gray-900 mb-4">{item.title}</h4>
                    <p className="velox-text-body text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
              
              <div className="text-center bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
                <p className="velox-text-lead text-gray-700 mb-4">
                  The question isn't whether to automate—it's <span className="font-bold text-blue-600">when</span> and <span className="font-bold text-blue-600">how</span>.
                </p>
                <p className="velox-text-body text-blue-700 font-semibold">
                  Let's calculate your specific opportunity cost.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Competitive Advantage Warning */}
        <div className="text-center animate-on-scroll" data-animation="fadeInUp" style={{animationDelay: '0.5s'}}>
          <div className="card-elevated relative rounded-3xl p-12 bg-gradient-to-br from-orange-50/80 via-white/90 to-red-50/80 overflow-hidden">
            {/* Simple Warning Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 to-red-400/20" />
            </div>
            
            <div className="relative z-10">
              <div className="flex justify-center mb-8">
                <div className="icon-container-gradient w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500">
                  <AlertTriangle className="w-10 h-10 text-white" />
                </div>
              </div>
              
              <div className="max-w-4xl mx-auto">
                <p className="velox-text-lead font-bold text-gray-900 mb-6 leading-relaxed">
                  <span className="text-blue-600">MIT research</span> shows early Service-as-Software adopters gain 
                  <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent font-black"> 23% market share</span> from laggards within 24 months.
                </p>
                <p className="velox-text-body text-gray-700 leading-relaxed">
                  Every month you wait, your competitors get <span className="font-bold text-gray-900">stronger</span> while your costs <span className="font-bold text-gray-900">compound</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}