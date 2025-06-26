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
  BarChart3,
  FileText
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"

export function ROICalculatorSection() {
  return (
    <Section padding="xl" background="transparent" className="relative overflow-hidden">
      {/* Simple Static Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-white to-blue-50/20" />
      
      <Container className="relative z-10 max-w-7xl">
        {/* Assessment-First Approach */}
        <div className="text-center mb-20 animate-on-scroll" data-animation="fadeInUp">
          <div className="card-elevated max-w-5xl mx-auto p-12">
            <h2 className="velox-text-h2 mb-8">
              Before We Quote, We Calculate Your True ROI
            </h2>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left: Assessment Process */}
              <div className="text-left">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 border border-blue-200 mb-6">
                  <Calculator className="w-4 h-4 text-blue-600" />
                  <span className="velox-text-caption font-medium text-blue-700">6-Step ROI Framework</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Every project starts with a comprehensive assessment:
                </h3>

                <div className="space-y-4">
                  {[
                    "Current state analysis (labor + hidden costs)",
                    "Process inefficiency calculation",
                    "Opportunity cost evaluation",
                    "Implementation cost projection",
                    "Expected benefit modeling",
                    "Multi-year ROI timeline"
                  ].map((step, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-blue-600 text-white text-sm font-bold flex items-center justify-center mt-0.5 flex-shrink-0">
                        {index + 1}
                      </div>
                      <span className="text-gray-700 text-lg">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Investment Philosophy */}
              <div className="bg-gradient-to-br from-blue-50 to-white border-2 border-blue-100 rounded-2xl p-8">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full mb-4">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Our Investment Philosophy</h4>
                </div>

                <div className="space-y-4 text-center">
                  <div className="bg-white rounded-lg p-4 border border-blue-200">
                    <p className="text-blue-600 font-bold text-lg mb-1">Investment scales with scope</p>
                    <p className="text-gray-600 text-sm">Complexity • Volume • Value delivered</p>
                  </div>

                  <div className="bg-white rounded-lg p-4 border border-green-200">
                    <p className="text-green-600 font-bold text-lg mb-1">Always profitable within 8 months</p>
                    <p className="text-gray-600 text-sm">Conservative projections • Guaranteed outcomes</p>
                  </div>

                  <div className="bg-white rounded-lg p-4 border border-purple-200">
                    <p className="text-purple-600 font-bold text-lg mb-1">No surprises, ever</p>
                    <p className="text-gray-600 text-sm">Fixed pricing • Clear timelines • Transparent costs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Real ROI Examples */}
        <div className="mb-24 animate-on-scroll" data-animation="fadeInUp" style={{animationDelay: '0.3s'}}>
          <div className="text-center mb-12">
            <h3 className="velox-text-h3 mb-4">
              Real ROI Results From Our Assessment Framework
            </h3>
            <p className="velox-text-lead max-w-3xl mx-auto text-gray-600">
              These are actual results from our 6-step ROI calculation process with recent clients
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                company: "FemRide",
                industry: "Ride-Hailing Startup",
                process: "AI-Powered Project Management",
                investment: "€45K",
                yearOneROI: "300%",
                payback: "3 months",
                savings: "€135K annually",
                logo: "/images/companies/femride-logo.png",
                timeReduction: "4x faster to market",
                color: "blue",
                description: "Europe's first women-only ride service launched 4x faster with AI-powered planning and execution systems"
              },
              {
                company: "Wilsch Systems",
                industry: "Technology Distribution",
                process: "Invoice Processing Automation",
                investment: "€25K",
                yearOneROI: "200%",
                payback: "5 months",
                savings: "€50K annually",
                logo: "/images/companies/wilsch-logo.png",
                timeReduction: "50% processing time saved",
                color: "green",
                description: "60-year-old IBM systems distributor transformed remote invoice processing with AI-powered automation"
              },
              {
                company: "WPH Partners",
                industry: "Professional Services",
                process: "AI Proposal & Quotation System",
                investment: "€35K",
                yearOneROI: "257%",
                payback: "4 months",
                savings: "€90K annually",
                logo: "/images/companies/wph-logo.svg",
                timeReduction: "75% faster proposals",
                color: "purple",
                description: "Professional services firm automated complex proposal generation, reducing preparation time from days to hours"
              }
            ].map((example, idx) => (
              <div
                key={idx}
                className="card-elevated group hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                {/* Header with Company Logo */}
                <div className={`bg-gradient-to-r from-${example.color}-500 to-${example.color}-600 text-white p-6`}>
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center p-2">
                      <img
                        src={example.logo}
                        alt={`${example.company} logo`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-lg">{example.company}</h4>
                      <p className="text-sm opacity-90">{example.industry}</p>
                    </div>
                  </div>
                  <p className="text-sm opacity-95 leading-relaxed">{example.description}</p>
                </div>

                {/* Metrics */}
                <div className="p-6 space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">{example.yearOneROI}</div>
                      <p className="text-sm text-gray-600">Year 1 ROI</p>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">{example.payback}</div>
                      <p className="text-sm text-gray-600">Payback Period</p>
                    </div>
                  </div>

                  <div className="border-t pt-4 space-y-3">
                    <div className="text-center">
                      <div className="text-lg font-bold text-green-600">{example.savings}</div>
                      <p className="text-sm text-gray-600">Annual Savings</p>
                    </div>

                    <div className="text-center">
                      <div className="text-lg font-bold text-blue-600">{example.timeReduction}</div>
                      <p className="text-sm text-gray-600">Efficiency Gain</p>
                    </div>

                    <div className="text-center">
                      <div className="text-sm font-medium text-gray-700">Investment: {example.investment}</div>
                      <p className="text-xs text-gray-500">{example.process}</p>
                    </div>
                  </div>

                  {/* Read More Button */}
                  <div className="px-6 pb-6">
                    <Button
                      asChild
                      variant="outline"
                      className="w-full border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-200"
                    >
                      <Link href={
                        example.company === 'FemRide' ? '/blog/femride-startup-case-study' :
                        example.company === 'Wilsch Systems' ? '/blog/wilsch-systems-case-study' :
                        '/blog'
                      }>
                        Read Full Case Study
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Assessment CTA */}
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-br from-blue-50 to-white border-2 border-blue-100 rounded-2xl p-8 max-w-4xl mx-auto">
              <h4 className="text-xl font-bold text-gray-900 mb-4">
                Want Your Custom ROI Calculation?
              </h4>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                We'll analyze your specific process using our 6-step framework and show you exactly what's possible.
                <strong> No generic estimates - just your real numbers.</strong>
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-lg font-semibold px-8 py-4 h-auto rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Get My ROI Assessment
              </Button>
            </div>
          </div>
        </div>



      </Container>
    </Section>
  )
}