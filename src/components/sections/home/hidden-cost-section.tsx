"use client"

import React from "react"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Clock, DollarSign, TrendingUp, Home, AlertTriangle } from "lucide-react"

export function HiddenCostSection() {
  return (
    <Section padding="xl" background="transparent" className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-50/30 via-white to-orange-50/20" />
      
      <Container className="relative z-10 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll" data-animation="fadeInUp">
          <h2 className="velox-text-h2 text-center mb-8">
            The Hidden Cost of "Business as Usual"
          </h2>
          <p className="velox-text-lead max-w-3xl mx-auto text-gray-700">
            Every week, operational chaos steals what matters most:
          </p>
        </div>

        {/* Cost Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            {
              icon: Clock,
              title: "Your Time",
              cost: "20+ hours on repetitive tasks",
              iconColor: "text-red-600",
              bgColor: "bg-red-50",
              borderColor: "border-red-200"
            },
            {
              icon: DollarSign,
              title: "Your Money", 
              cost: "€50-100K in hidden inefficiency costs",
              iconColor: "text-orange-600",
              bgColor: "bg-orange-50",
              borderColor: "border-orange-200"
            },
            {
              icon: TrendingUp,
              title: "Your Growth",
              cost: "Strategic initiatives on permanent hold",
              iconColor: "text-yellow-600",
              bgColor: "bg-yellow-50",
              borderColor: "border-yellow-200"
            },
            {
              icon: Home,
              title: "Your Life",
              cost: "Another weekend at the office",
              iconColor: "text-purple-600",
              bgColor: "bg-purple-50",
              borderColor: "border-purple-200"
            }
          ].map((item, index) => (
            <div
              key={index}
              className={`card-base text-center p-6 animate-on-scroll group hover:scale-105 transition-all duration-300 border ${item.borderColor}`}
              data-animation="fadeInUp"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className={`icon-container-gradient w-16 h-16 mx-auto mb-6 ${item.bgColor} border ${item.borderColor}`}>
                <item.icon className={`w-8 h-8 ${item.iconColor}`} />
              </div>
              <h3 className="velox-text-h3 text-gray-900 mb-4">{item.title}:</h3>
              <p className="velox-text-body text-gray-700 font-medium leading-relaxed">{item.cost}</p>
            </div>
          ))}
        </div>

        {/* Revelation Section */}
        <div className="text-center mb-16 animate-on-scroll" data-animation="fadeInUp" style={{animationDelay: '0.4s'}}>
          <div className="card-elevated max-w-4xl mx-auto p-8">
            <p className="velox-text-lead text-gray-700 mb-6 leading-relaxed">
              But here's what nobody tells you about automation...
            </p>
            <div className="flex items-center justify-center gap-3 mb-6">
              <AlertTriangle className="w-6 h-6 text-red-500" />
              <p className="text-xl font-bold text-red-600">
                Most solutions just create new problems to manage.
              </p>
            </div>
            <p className="velox-text-body text-gray-600">
              Traditional automation leaves you with complex tools, broken workflows, and even more headaches than before.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  )
}