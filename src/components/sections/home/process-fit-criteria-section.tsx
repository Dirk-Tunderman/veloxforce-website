"use client"

import React from "react"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Button } from "@/components/ui/button"
import { Check, FileText, Users, BarChart3, Package, Calendar, Shield, ArrowRight, Target, Zap, Clock, Repeat } from "lucide-react"
import Link from "next/link"

export function ProcessFitCriteriaSection() {
  return (
    <Section padding="xl" background="white-to-light" className="relative">
      <Container className="relative z-10 max-w-6xl">
        {/* Enhanced Header */}
        <div className="text-center mb-16 animate-on-scroll" data-animation="fadeInUp">
          {/* Design System Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm mb-6">
            <Target className="w-4 h-4 icon-accent" />
            <span className="velox-text-caption font-medium text-blue-700">Process Qualification</span>
          </div>

          <h2 className="velox-text-h2 mb-6">
            Which Processes Work Best With AI?
          </h2>

          <p className="velox-text-lead max-w-3xl mx-auto">
            Clear qualification criteria to know if this is right for your business
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-20">
          {/* Enhanced Process Requirements */}
          <div className="animate-on-scroll" data-animation="fadeInLeft">
            <div className="card-elevated p-8 h-full">
              {/* Header with Icon */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="velox-text-h3 text-center mb-2">
                  Process Requirements
                </h3>
                <p className="velox-text-body text-gray-600">
                  What makes a process perfect for AI automation
                </p>
              </div>

              {/* Enhanced Requirements List */}
              <div className="space-y-6">
                {[
                  {
                    icon: Target,
                    title: "Has clear rules",
                    description: "(even complex ones with multiple conditions)",
                    color: "blue"
                  },
                  {
                    icon: Repeat,
                    title: "Happens repeatedly",
                    description: "(daily, weekly, or monthly cycles)",
                    color: "emerald"
                  },
                  {
                    icon: Clock,
                    title: "Takes significant time",
                    description: "(2+ hours per cycle worth automating)",
                    color: "purple"
                  },
                  {
                    icon: Check,
                    title: "Follows patterns",
                    description: "(with defined exceptions we can encode)",
                    color: "orange"
                  }
                ].map((requirement, index) => {
                  const IconComponent = requirement.icon
                  return (
                    <div key={index} className="group p-4 rounded-xl bg-gradient-to-r from-gray-50 to-white border border-gray-100 hover:shadow-md transition-all duration-300">
                      <div className="flex items-start gap-4">
                        <div className={`icon-container bg-${requirement.color}-100 group-hover:bg-${requirement.color}-200 transition-colors`}>
                          <IconComponent className={`w-5 h-5 text-${requirement.color}-600`} />
                        </div>
                        <div className="flex-1">
                          <h4 className="velox-text-h4 mb-1">{requirement.title}</h4>
                          <p className="velox-text-caption text-gray-600">{requirement.description}</p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Enhanced Common Process Types */}
          <div className="animate-on-scroll" data-animation="fadeInRight">
            <div className="card-elevated p-8 h-full">
              {/* Header with Icon */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl mb-4">
                  <Package className="w-8 h-8 text-white" />
                </div>
                <h3 className="velox-text-h3 text-center mb-2">
                  Common Process Types
                </h3>
                <p className="velox-text-body text-gray-600">
                  Real examples from businesses we've transformed
                </p>
              </div>

              {/* Enhanced Process Types Grid */}
              <div className="space-y-3">
                {[
                  {
                    icon: FileText,
                    text: "Invoice processing",
                    detail: "(any format, any rules)"
                  },
                  {
                    icon: Users,
                    text: "Customer communication",
                    detail: "(your tone, your policies)"
                  },
                  {
                    icon: BarChart3,
                    text: "Data transformation",
                    detail: "(your systems, your requirements)"
                  },
                  {
                    icon: Package,
                    text: "Order management",
                    detail: "(your workflows, your integrations)"
                  },
                  {
                    icon: Calendar,
                    text: "Report generation",
                    detail: "(your formats, your schedules)"
                  },
                  {
                    icon: Package,
                    text: "Inventory tracking",
                    detail: ""
                  },
                  {
                    icon: Shield,
                    text: "Quality control checks",
                    detail: ""
                  }
                ].map((process, index) => {
                  const IconComponent = process.icon
                  return (
                    <div key={index} className="group p-4 rounded-lg bg-gradient-to-r from-white to-gray-50 border border-gray-100 hover:shadow-sm transition-all duration-200">
                      <div className="flex items-center gap-3">
                        <div className="icon-container bg-gray-100 group-hover:bg-blue-100 transition-colors">
                          <IconComponent className="w-4 h-4 icon-primary group-hover:text-blue-600 transition-colors" />
                        </div>
                        <div className="flex-1">
                          <span className="velox-text-body font-medium text-gray-800">
                            {process.text}
                          </span>
                          {process.detail && (
                            <span className="velox-text-caption text-gray-600 ml-2">
                              {process.detail}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Simple Qualification CTA */}
        <div className="animate-on-scroll" data-animation="fadeInUp">
          <div className="relative max-w-4xl mx-auto">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white rounded-2xl opacity-80"></div>

            <div className="relative card-elevated p-8 md:p-12 text-center border-2 border-blue-100">
              {/* Icon Header */}
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full mb-6">
                <Target className="w-10 h-10 text-white" />
              </div>

              <h3 className="velox-text-h3 mb-6">
                Simple Qualification Question
              </h3>

              <div className="max-w-2xl mx-auto mb-8">
                <p className="velox-text-lead mb-4">
                  Does your process have clear rules and happen regularly?
                </p>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full">
                  <Check className="w-5 h-5 text-blue-600" />
                  <span className="velox-text-body font-bold text-blue-800">
                    Then AI can probably automate it.
                  </span>
                </div>
              </div>

              {/* Enhanced CTA Button */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-lg font-semibold px-8 py-4 h-auto rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
                  asChild
                >
                  <Link href="/tools/business-audit">
                    <span className="flex items-center gap-2">
                      Assess My Process
                      <ArrowRight className="w-5 h-5" />
                    </span>
                  </Link>
                </Button>

                <p className="velox-text-caption text-gray-600">
                  Free • 5 minutes • Instant results
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}