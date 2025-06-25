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
        {/* Simple Investment Philosophy */}
        <div className="text-center mb-20 animate-on-scroll" data-animation="fadeInUp">
          <div className="card-elevated max-w-4xl mx-auto p-12">
            <h2 className="velox-text-h2 mb-8">
              Transparent Economics That Make Sense
            </h2>
            <div className="space-y-6">
              <div className="text-center max-w-3xl mx-auto">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Investment scales with:</h3>
                <ul className="space-y-2 text-gray-700 text-lg">
                  <li className="flex items-center justify-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                    <span>Process complexity</span>
                  </li>
                  <li className="flex items-center justify-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                    <span>Volume handled</span>
                  </li>
                  <li className="flex items-center justify-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                    <span>Value delivered</span>
                  </li>
                </ul>
              </div>
              <div className="text-center">
                <p className="text-xl font-bold text-blue-600 mb-2">Always less than your current costs.</p>
                <p className="text-lg font-semibold text-gray-700">ROI positive within 3-6 months.</p>
              </div>
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