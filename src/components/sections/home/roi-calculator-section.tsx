"use client"

import { useState } from "react"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Button } from "@/components/ui/button"
import { Calculator, TrendingDown, AlertTriangle, ArrowRight } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

export function ROICalculatorSection() {
  const [timelineMonth, setTimelineMonth] = useState(6)
  
  // Calculate compound costs
  const monthlyCost = 5500
  const totalLost = monthlyCost * timelineMonth
  const competitorAdvantage = timelineMonth >= 12 ? "23% market share to competitors" : "Competitors pulling ahead"

  return (
    <Section padding="xl" background="light-to-accent">
      <Container className="max-w-7xl">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="velox-text-h2 mb-6">
            How Service-as-Software Economics Work
          </h2>
          <p className="velox-text-body-lg max-w-3xl mx-auto text-gray-600">
            <span className="font-bold">Investment scales with complexity.</span> Pricing aligned with your savings. 
            <span className="font-semibold text-gray-900">Each solution custom-priced for ROI.</span>
          </p>
        </div>

        {/* Value Methodology */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Cost Discovery Process */}
          <div className="bg-gray-50 rounded-2xl p-8 border-2 border-gray-300">
            <div className="flex items-center gap-3 mb-8">
              <TrendingDown className="h-8 w-8 text-gray-700" />
              <h3 className="text-2xl font-bold text-gray-900">We Analyze Your Hidden Costs</h3>
            </div>
            
            <div className="space-y-6 mb-8">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-gray-200 rounded-full p-1 mt-1">
                    <span className="text-xs font-bold text-gray-700">1</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Operational inefficiency assessment</p>
                    <p className="text-sm text-gray-600">Map current time, errors, and manual work</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-gray-200 rounded-full p-1 mt-1">
                    <span className="text-xs font-bold text-gray-700">2</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Opportunity cost calculation</p>
                    <p className="text-sm text-gray-600">What your team could focus on instead</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-gray-200 rounded-full p-1 mt-1">
                    <span className="text-xs font-bold text-gray-700">3</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Error and rework costs</p>
                    <p className="text-sm text-gray-600">Hidden costs of manual processes</p>
                  </div>
                </div>
              </div>
              
              <div className="pt-6 border-t-2 border-gray-300 text-center">
                <p className="text-lg font-semibold text-gray-900 mb-2">Free ROI Analysis Shows</p>
                <p className="text-2xl font-bold text-blue-600">Your Specific Numbers</p>
              </div>
            </div>
          </div>

          {/* Value-Based Investment */}
          <div className="bg-blue-50 rounded-2xl p-8 border-2 border-blue-200">
            <div className="flex items-center gap-3 mb-8">
              <Calculator className="h-8 w-8 text-gray-700" />
              <h3 className="text-2xl font-bold text-gray-900">Investment Philosophy</h3>
            </div>
            
            <div className="space-y-6 mb-8">
              <div className="bg-blue-100 rounded-xl p-6">
                <h4 className="font-bold text-blue-900 mb-4 text-lg">Our Pricing Principle:</h4>
                <p className="text-blue-800 text-center text-lg font-medium">
                  <span className="font-bold">"Savings typically exceed investment within months"</span>
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-blue-200 rounded-full p-1 mt-1">
                    <span className="text-xs font-bold text-blue-700">✓</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Investment scales with complexity</p>
                    <p className="text-sm text-gray-600">More complex processes = higher value created</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-blue-200 rounded-full p-1 mt-1">
                    <span className="text-xs font-bold text-blue-700">✓</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Pricing aligned with your savings</p>
                    <p className="text-sm text-gray-600">We only succeed when you save money</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-blue-200 rounded-full p-1 mt-1">
                    <span className="text-xs font-bold text-blue-700">✓</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Faster than any alternative</p>
                    <p className="text-sm text-gray-600">Implementation speed varies by scope</p>
                  </div>
                </div>
              </div>
              
              <div className="pt-6 border-t-2 border-blue-200 text-center">
                <p className="text-lg font-semibold text-gray-900 mb-2">Timeline Philosophy:</p>
                <p className="text-xl font-bold text-blue-600">Paced to Your Needs</p>
              </div>
            </div>
          </div>
        </div>

        {/* The Opportunity Cost of Delay */}
        <div className="bg-gray-900 text-white rounded-2xl p-8 md:p-12 mb-20">
          <h3 className="text-2xl font-bold mb-8 text-center">Why Timing Matters</h3>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="bg-gray-700 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h4 className="font-bold mb-2">Every Month You Wait</h4>
              <p className="text-sm text-gray-300">
                <span className="font-semibold">Inefficiencies compound</span> while competitors gain ground
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-gray-700 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h4 className="font-bold mb-2">Early Adopters Win</h4>
              <p className="text-sm text-gray-300">
                <span className="font-semibold">First-mover advantage</span> in operational efficiency
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold">✓</span>
              </div>
              <h4 className="font-bold mb-2">Start Smart</h4>
              <p className="text-sm text-gray-300">
                <span className="font-semibold">Free analysis</span> shows your exact opportunity
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-lg text-gray-300 mb-4">
              The question isn't whether to automate - it's <span className="font-bold text-white">when</span> and <span className="font-bold text-white">how</span>.
            </p>
            <p className="text-blue-300 font-semibold">
              Let's calculate your specific opportunity cost.
            </p>
          </div>
        </div>

        {/* Competitor Advantage Warning */}
        <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-8 mb-16 text-center">
          <div className="flex justify-center mb-4">
            <AlertTriangle className="h-6 w-6 text-gray-700" />
          </div>
          <div className="max-w-2xl mx-auto">
            <p className="font-semibold text-gray-900 mb-3">
              <span className="font-bold">MIT research</span> shows early automation adopters gain <span className="font-bold">23% market share</span> from laggards within 24 months.
            </p>
            <p className="text-sm text-gray-600">
              Every month you wait, your competitors get <span className="font-semibold">stronger</span> while your costs <span className="font-semibold">compound</span>.
            </p>
          </div>
        </div>

        {/* Risk Reversal */}
        <div className="bg-gradient-to-br from-blue-50 to-white border-2 border-blue-200 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Start with a pilot
          </h3>
          <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
            We'll automate your most painful process first. 
            <span className="font-semibold text-gray-900"> If it doesn't save you money in 60 days, we'll refund everything.</span>
          </p>
          <Button size="lg" className="text-lg px-8 py-6" asChild>
            <Link href="/tools/business-audit">
              Calculate My Exact Savings
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </Container>
    </Section>
  )
}