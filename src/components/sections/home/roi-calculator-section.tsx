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
        {/* Section Header */}
        <div className="text-center mb-20 animate-on-scroll" data-animation="fadeInUp">
          {/* Design System Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm mb-6">
            <Calculator className="w-4 h-4 icon-accent" />
            <span className="velox-text-caption font-medium text-blue-700">Economics Explained</span>
          </div>
          
          <h2 className="velox-text-h2 mb-6">
            How Service-as-Software Economics Work
          </h2>
          
          <p className="velox-text-lead max-w-4xl mx-auto">
            <span className="font-bold">Investment scales with complexity.</span> Pricing aligned with your savings. 
            <span className="font-semibold text-gray-900"> Each solution custom-priced for guaranteed ROI.</span>
          </p>
        </div>

        {/* Core Value Methodology - Enhanced Cards */}
        <div className="grid lg:grid-cols-2 gap-12 mb-24 items-stretch">
          {/* Cost Discovery Process - Left Card */}
          <div className="group relative animate-on-scroll" data-animation="fadeInLeft">
            <div className="card-elevated relative h-full flex flex-col">
              {/* Gradient Accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-blue-700 rounded-t-3xl" />
              
              <div className="flex items-center gap-4 mb-10">
                <div className="icon-container-gradient w-16 h-16">
                  <TrendingDown className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="velox-text-h3">We Analyze Your Hidden Costs</h3>
              </div>
              
              <div className="space-y-8 mb-10 flex-1">
                {[
                  {
                    step: "1",
                    title: "Operational inefficiency assessment",
                    desc: "Map current time, errors, and manual work"
                  },
                  {
                    step: "2", 
                    title: "Opportunity cost calculation",
                    desc: "What your team could focus on instead"
                  },
                  {
                    step: "3",
                    title: "Error and rework costs",
                    desc: "Hidden costs of manual processes"
                  }
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-4"
                  >
                    <div className="icon-container flex-shrink-0">
                      <span className="text-lg font-bold text-blue-600">{item.step}</span>
                    </div>
                    <div className="flex-1">
                      <p className="velox-text-body font-semibold text-gray-900 mb-2">{item.title}</p>
                      <p className="velox-text-body text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="pt-8 border-t border-gray-100 text-center">
                <p className="velox-text-body font-semibold text-gray-900 mb-2">Free ROI Analysis Shows</p>
                <p className="text-3xl font-bold text-gradient">
                  Your Specific Numbers
                </p>
              </div>
            </div>
          </div>

          {/* Investment Philosophy - Right Card */}
          <div className="group relative animate-on-scroll" data-animation="fadeInRight">
            <div className="card-premium relative h-full flex flex-col">
              {/* Gradient Accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-blue-700 rounded-t-3xl" />
              
              <div className="flex items-center gap-4 mb-10">
                <div className="icon-container-gradient w-16 h-16">
                  <Calculator className="w-8 h-8 text-white" />
                </div>
                <h3 className="velox-text-h3">Investment Philosophy</h3>
              </div>
              
              {/* Core Principle Box */}
              <div className="card-elevated p-8 mb-10 bg-gradient-to-br from-blue-100/80 to-indigo-100/60">
                <h4 className="text-2xl font-bold text-blue-900 mb-4">Our Pricing Principle:</h4>
                <p className="velox-text-lead text-blue-800 text-center font-semibold italic">
                  "Savings typically exceed investment within months"
                </p>
              </div>
              
              <div className="space-y-8 mb-10 flex-1">
                {[
                  {
                    title: "Investment scales with complexity",
                    desc: "More complex processes = higher value created",
                    icon: <BarChart3 className="w-5 h-5 icon-accent" />
                  },
                  {
                    title: "Pricing aligned with your savings",
                    desc: "We only succeed when you save money",
                    icon: <Target className="w-5 h-5 icon-accent" />
                  },
                  {
                    title: "Faster than any alternative",
                    desc: "Implementation speed varies by scope",
                    icon: <Zap className="w-5 h-5 icon-accent" />
                  }
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-4"
                  >
                    <div className="icon-container flex-shrink-0">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <p className="velox-text-body font-semibold text-gray-900 mb-2">{item.title}</p>
                      <p className="velox-text-body text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="pt-8 border-t border-blue-200/50 text-center">
                <p className="velox-text-body font-semibold text-gray-900 mb-2">Timeline Philosophy:</p>
                <p className="text-3xl font-bold text-gradient">
                  Paced to Your Needs
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ROI Metrics Showcase - CSS Only */}
        <div className="mb-24 animate-on-scroll" data-animation="fadeInUp" style={{animationDelay: '0.3s'}}>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { label: "Average ROI Timeline", value: "3", suffix: " months", icon: <Clock className="w-8 h-8" /> },
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
                  Market leaders don't wait for perfect conditions—they create competitive advantage through strategic action.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                {[
                  {
                    icon: <AlertTriangle className="w-6 h-6" />,
                    title: "Every Month You Wait",
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