"use client"

import React from "react"
import Image from "next/image"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Search, Cpu, CheckCircle, TrendingUp, Clock } from "lucide-react"

export function JourneyTimelineSection() {
  return (
    <Section padding="xl" background="transparent" className="relative">
      <Container className="relative z-10 max-w-6xl">
        {/* Section Header - Consistent with other sections */}
        <div className="text-center mb-16 animate-on-scroll" data-animation="fadeInUp">
          {/* Design System Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm mb-6">
            <Clock className="w-4 h-4 icon-accent" />
            <span className="velox-text-caption font-medium text-blue-700">Your Transformation Timeline</span>
          </div>

          <h2 className="velox-text-h2 mb-6">
            What you can Expect
          </h2>

          <p className="velox-text-lead max-w-3xl mx-auto">
            From operational overwhelm to strategic leadership in weeks, not years.
          </p>
        </div>

        {/* Timeline Steps - Redesigned */}
        <div className="grid lg:grid-cols-4 gap-8 lg:gap-6">
          {[
            {
              week: "Week 1-2",
              title: "Discovery",
              subtitle: "Process Mapping",
              description: "We map your process, calculate ROI, show exactly what's possible",
              icon: Search,
              image: "/images/Journey-discovery.jpg"
            },
            {
              week: "Week 3-6",
              title: "Developement",
              subtitle: "Custom Development",
              description: "Custom software created for your exact workflow",
              icon: Cpu,
              image: "/images/Journey%20-ai-solution.jpg"
            },
            {
              week: "Week 7-8",
              title: "Perfect Handoff",
              subtitle: "Quality Validation",
              description: "Start small, validate quality, scale with confidence",
              icon: CheckCircle,
              image: "/images/Journey-handoff.jpg"
            },
            {
              week: "Week 9+",
              title: "Strategic Liberation",
              subtitle: "Growth Focus",
              description: "You focus on growth while we deliver perfect outcomes",
              icon: TrendingUp,
              image: "/images/Journey-libaration.jpg"
            }
          ].map((step, index) => (
            <div
              key={index}
              className="relative group animate-on-scroll"
              data-animation="fadeInUp"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {/* Step Number */}
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20">
                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm shadow-lg">
                  {index + 1}
                </div>
              </div>

              {/* Main Card */}
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group-hover:scale-105 h-full">

                {/* Large Image Section */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                  {/* Week Badge on Image */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 bg-blue-600 text-white rounded-full text-xs font-bold shadow-md">
                      {step.week}
                    </span>
                  </div>

                  {/* Icon on Image */}
                  <div className="absolute top-4 right-4">
                    <div className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center shadow-md">
                      <step.icon className="w-5 h-5 text-blue-600" />
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  {/* Title & Subtitle */}
                  <div className="text-center mb-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {step.title}
                    </h3>
                    <p className="text-sm font-medium text-blue-600">
                      {step.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed text-center">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-16 text-center animate-on-scroll" data-animation="fadeInUp" style={{animationDelay: '0.5s'}}>
          <div className="card-elevated inline-flex items-center gap-3 px-6 py-3">
            <Clock className="w-5 h-5 icon-accent" />
            <p className="velox-text-body">
              <span className="font-semibold text-gray-900">Timeline varies by complexity.</span> Results guaranteed.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  )
}