"use client"

import React from "react"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Search, Cpu, CheckCircle, TrendingUp, ArrowRight } from "lucide-react"

export function JourneyTimelineSection() {
  return (
    <Section padding="xl" background="transparent" className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-white to-blue-50/20" />
      
      <Container className="relative z-10 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll" data-animation="fadeInUp">
          <h2 className="velox-text-h2 text-center mb-8">
            Your Journey to Strategic Freedom
          </h2>
          <p className="velox-text-lead max-w-3xl mx-auto text-gray-700">
            From operational overwhelm to strategic leadership in weeks, not years
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Steps */}
          <div className="grid lg:grid-cols-4 gap-8 items-stretch">
            {[
              {
                week: "Week 1-2",
                title: "Discovery",
                description: "We map your process, calculate ROI, show exactly what's possible",
                icon: Search,
                iconColor: "text-blue-600",
                bgColor: "bg-blue-50",
                borderColor: "border-blue-200",
                delay: "0.1s"
              },
              {
                week: "Week 3-6", 
                title: "AI Builds Your Solution",
                description: "Custom software created for your exact workflow",
                icon: Cpu,
                iconColor: "text-blue-600",
                bgColor: "bg-blue-50",
                borderColor: "border-blue-200", 
                delay: "0.2s"
              },
              {
                week: "Week 7-8",
                title: "Perfect Handoff", 
                description: "Start small, validate quality, scale with confidence",
                icon: CheckCircle,
                iconColor: "text-emerald-600",
                bgColor: "bg-emerald-50",
                borderColor: "border-emerald-200",
                delay: "0.3s"
              },
              {
                week: "Week 9+",
                title: "Strategic Liberation",
                description: "You focus on growth while we deliver perfect outcomes",
                icon: TrendingUp,
                iconColor: "text-emerald-600", 
                bgColor: "bg-emerald-50",
                borderColor: "border-emerald-200",
                delay: "0.4s"
              }
            ].map((step, index) => (
              <div
                key={index}
                className="relative animate-on-scroll"
                data-animation="fadeInUp"
                style={{animationDelay: step.delay}}
              >
                
                {/* Card */}
                <div className={`card-base text-center p-8 group hover:scale-105 transition-all duration-300 border ${step.borderColor} lg:mt-8 h-[26rem] relative z-20`}>
                  {/* Icon */}
                  <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
                    <div className={`icon-container-gradient w-20 h-20 ${step.bgColor} border-2 ${step.borderColor} shadow-lg`}>
                      <step.icon className={`w-10 h-10 ${step.iconColor}`} />
                    </div>
                  </div>
                  
                  {/* Week Badge */}
                  <div className="absolute top-28 left-1/2 transform -translate-x-1/2">
                    <span className={`inline-block px-4 py-2 ${index >= 2 ? 'bg-emerald-600' : 'bg-blue-600'} text-white rounded-full text-sm font-bold tracking-wide shadow-md`}>
                      {step.week}
                    </span>
                  </div>
                  
                  {/* Title */}
                  <div className="absolute top-40 left-4 right-4 h-20 flex items-start justify-center">
                    <h3 className="velox-text-h3 text-gray-900 font-bold leading-tight text-center">{step.title}</h3>
                  </div>
                  
                  {/* Description */}
                  <div className="absolute top-72 left-4 right-4 h-24 flex items-start justify-center">
                    <p className="velox-text-body text-gray-600 leading-relaxed text-center">{step.description}</p>
                  </div>
                </div>

                {/* Arrow (Mobile) */}
                {index < 3 && (
                  <div className="flex justify-center mt-4 lg:hidden">
                    <ArrowRight className="w-6 h-6 text-blue-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {/* Timeline Line */}
          <div className="w-full h-1 bg-gradient-to-r from-blue-500 via-blue-600 to-emerald-600 rounded-full shadow-md mt-12 ml-0 mr-2 hidden lg:block opacity-80"></div>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-32 animate-on-scroll" data-animation="fadeInUp" style={{animationDelay: '0.5s'}}>
          <div className="card-base max-w-3xl mx-auto p-6 bg-gray-50">
            <p className="velox-text-body text-gray-700 font-medium">
              <span className="font-bold">Timeline varies by complexity.</span> Results guaranteed.
            </p>
            <p className="velox-text-caption text-gray-600 mt-2">
              Simple processes can be live in 2-3 weeks. Complex workflows may take 8-10 weeks to perfect.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  )
}