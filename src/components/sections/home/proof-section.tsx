"use client"

import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"
import { TrendingUp, Clock, Target, Shield, CheckCircle } from "lucide-react"
import Image from "next/image"

const caseStudies = [
  {
    industry: "MANUFACTURING COMPANY",
    company: "[Client Name Pending Approval]",
    logo: null,
    quote: "[Client testimonial pending approval]",
    process: "Documentation processes",
    timeSaved: "[Results data coming soon]",
    roi: "[ROI data in collection]",
    highlight: "[Results data coming soon]"
  },
  {
    industry: "PROFESSIONAL SERVICES FIRM",
    company: "[Client Name Pending Approval]",
    logo: null,
    quote: "[Client testimonial pending approval]",
    process: "Complex pricing calculations",
    accuracy: "[Accuracy data coming soon]",
    implementation: "[Timeline data coming soon]",
    highlight: "[Results data coming soon]"
  },
  {
    industry: "TECHNOLOGY STARTUP",
    company: "[Client Name Pending Approval]",
    logo: null,
    quote: "[Client testimonial pending approval]",
    process: "Technical operations",
    cost: "[Cost comparison coming soon]",
    scale: "[Scale metrics coming soon]",
    highlight: "[Results data coming soon]"
  }
]

export function ProofSection() {
  return (
    <Section id="proof" padding="xl" background="transparent">
      <Container className="max-w-7xl">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="velox-text-h2 mb-6">Early Adopters Are Already Winning</h2>
          <p className="velox-text-body-lg max-w-3xl mx-auto text-gray-600">
            While we compile our client data, here's what industry research shows:
            <span className="font-bold">Early adopters are capturing the advantage</span>.
          </p>
        </div>

        {/* Case Studies */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {caseStudies.map((study, index) => (
            <div key={index} className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-8">
                {/* Industry & Logo */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
                    {study.industry}
                  </span>
                  {study.logo && (
                    <Image 
                      src={study.logo} 
                      alt={study.company}
                      width={80}
                      height={40}
                      className="object-contain"
                    />
                  )}
                </div>

                {/* Quote */}
                <p className="text-lg font-semibold text-gray-900 mb-6">
                  "{study.quote}"
                </p>

                {/* Metrics */}
                <div className="space-y-3 mb-6">
                  {study.process && (
                    <div className="flex items-center gap-2 text-sm">
                      <Target className="h-4 w-4 text-gray-400" />
                      <span className="text-gray-600">Process:</span>
                      <span className="font-medium text-gray-900">{study.process}</span>
                    </div>
                  )}
                  
                  {study.timeSaved && (
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4 text-gray-400" />
                      <span className="text-gray-600">Time saved:</span>
                      <span className="font-medium text-gray-900">{study.timeSaved}</span>
                    </div>
                  )}
                  
                  {study.roi && (
                    <div className="flex items-center gap-2 text-sm">
                      <TrendingUp className="h-4 w-4 text-gray-400" />
                      <span className="text-gray-600">ROI:</span>
                      <span className="font-medium text-gray-900">{study.roi}</span>
                    </div>
                  )}
                  
                  {study.accuracy && (
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-gray-400" />
                      <span className="text-gray-600">Accuracy:</span>
                      <span className="font-medium text-gray-900">{study.accuracy}</span>
                    </div>
                  )}
                  
                  {study.implementation && (
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4 text-gray-400" />
                      <span className="text-gray-600">Implementation:</span>
                      <span className="font-medium text-gray-900">{study.implementation}</span>
                    </div>
                  )}
                  
                  {study.cost && (
                    <div className="flex items-center gap-2 text-sm">
                      <TrendingUp className="h-4 w-4 text-gray-400" />
                      <span className="text-gray-600">Cost:</span>
                      <span className="font-medium text-gray-900">{study.cost}</span>
                    </div>
                  )}
                  
                  {study.scale && (
                    <div className="flex items-center gap-2 text-sm">
                      <Target className="h-4 w-4 text-gray-400" />
                      <span className="text-gray-600">Scale:</span>
                      <span className="font-medium text-gray-900">{study.scale}</span>
                    </div>
                  )}
                </div>

                {/* Highlight */}
                <div className="pt-6 border-t border-gray-100">
                  <p className="text-2xl font-bold text-blue-600">{study.highlight}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Builder Box */}
        <div className="bg-white rounded-2xl border-2 border-blue-600 p-8 md:p-12">
          <div className="flex items-center gap-3 mb-6">
            <Shield className="h-8 w-8 text-gray-700" />
            <h3 className="text-2xl font-bold text-gray-900">Why We're Different: The Alignment Test</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                <p className="text-gray-700">
                  <span className="font-semibold text-gray-900">We analyze ROI before starting</span> (free)
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                <p className="text-gray-700">
                  <span className="font-semibold text-gray-900">We've rejected 23% of opportunities</span> where math didn't work
                </p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                <p className="text-gray-700">
                  <span className="font-semibold text-gray-900">We only succeed when you save money</span> long-term
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                <p className="text-gray-700">
                  <span className="font-semibold text-gray-900">No lock-in contracts</span> - prove value monthly
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Industry Validation */}
        <div className="mt-12 text-center">
          <blockquote className="relative">
            <p className="text-lg text-gray-700 italic max-w-3xl mx-auto">
              "By 2025, AI-powered automation will handle 50% of repetitive tasks. 
              The winners will be companies that implement without complexity."
            </p>
            <cite className="block mt-4 text-sm font-semibold text-gray-600">
              — Forrester Research
            </cite>
          </blockquote>
        </div>
      </Container>
    </Section>
  )
}