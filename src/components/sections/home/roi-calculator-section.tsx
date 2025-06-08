"use client"

import { useState } from "react"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Calculator, TrendingDown, AlertTriangle, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

export function ROICalculatorSection() {
  const [timelineMonth, setTimelineMonth] = useState(6)
  
  // Calculate compound costs
  const monthlyCost = 5500
  const totalLost = monthlyCost * timelineMonth
  const competitorAdvantage = timelineMonth >= 12 ? "23% market share to competitors" : "Competitors pulling ahead"

  return (
    <Section padding="xl" background="transparent">
      <Container className="max-w-7xl">
        {/* Section Title */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="velox-text-h2 mb-6">
            How Service-as-Software Economics Work
          </h2>
          <p className="velox-text-lead max-w-3xl mx-auto">
            <span className="font-bold">Investment scales with complexity.</span> Pricing aligned with your savings. 
            <span className="font-semibold text-gray-900">Each solution custom-priced for ROI.</span>
          </p>
        </motion.div>

        {/* Value Methodology */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Cost Discovery Process */}
          <motion.div 
            className="card-neumorphic"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="icon-container-gradient">
                <TrendingDown className="h-8 w-8 icon-primary" />
              </div>
              <h3 className="velox-text-h2 text-gray-900">We Analyze Your Hidden Costs</h3>
            </div>
            
            <div className="space-y-6 mb-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="icon-container-glass mt-1">
                    <span className="text-sm font-bold text-gray-700">1</span>
                  </div>
                  <div>
                    <p className="velox-text-body font-semibold text-gray-900">Operational inefficiency assessment</p>
                    <p className="velox-text-body text-gray-600">Map current time, errors, and manual work</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="icon-container-glass mt-1">
                    <span className="text-sm font-bold text-gray-700">2</span>
                  </div>
                  <div>
                    <p className="velox-text-body font-semibold text-gray-900">Opportunity cost calculation</p>
                    <p className="velox-text-body text-gray-600">What your team could focus on instead</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="icon-container-glass mt-1">
                    <span className="text-sm font-bold text-gray-700">3</span>
                  </div>
                  <div>
                    <p className="velox-text-body font-semibold text-gray-900">Error and rework costs</p>
                    <p className="velox-text-body text-gray-600">Hidden costs of manual processes</p>
                  </div>
                </div>
              </div>
              
              <div className="pt-6 border-t border-gray-200 text-center">
                <p className="velox-text-lead font-semibold text-gray-900 mb-2">Free ROI Analysis Shows</p>
                <p className="text-2xl font-bold text-blue-600">Your Specific Numbers</p>
              </div>
            </div>
          </motion.div>

          {/* Value-Based Investment */}
          <motion.div 
            className="card-glass-blue"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="icon-container-gradient">
                <Calculator className="h-8 w-8 icon-accent" />
              </div>
              <h3 className="velox-text-h2 text-gray-900">Investment Philosophy</h3>
            </div>
            
            <div className="space-y-6 mb-8">
              <div className="glass-blue rounded-xl p-6">
                <h4 className="velox-text-h3 text-blue-900 mb-4">Our Pricing Principle:</h4>
                <p className="velox-text-lead text-blue-800 text-center font-medium">
                  <span className="font-bold">"Savings typically exceed investment within months"</span>
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="icon-container-glass mt-1">
                    <span className="text-sm font-bold text-blue-700">✓</span>
                  </div>
                  <div>
                    <p className="velox-text-body font-semibold text-gray-900">Investment scales with complexity</p>
                    <p className="velox-text-body text-gray-600">More complex processes = higher value created</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="icon-container-glass mt-1">
                    <span className="text-sm font-bold text-blue-700">✓</span>
                  </div>
                  <div>
                    <p className="velox-text-body font-semibold text-gray-900">Pricing aligned with your savings</p>
                    <p className="velox-text-body text-gray-600">We only succeed when you save money</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="icon-container-glass mt-1">
                    <span className="text-sm font-bold text-blue-700">✓</span>
                  </div>
                  <div>
                    <p className="velox-text-body font-semibold text-gray-900">Faster than any alternative</p>
                    <p className="velox-text-body text-gray-600">Implementation speed varies by scope</p>
                  </div>
                </div>
              </div>
              
              <div className="pt-6 border-t border-blue-200 text-center">
                <p className="velox-text-lead font-semibold text-gray-900 mb-2">Timeline Philosophy:</p>
                <p className="text-xl font-bold text-blue-600">Paced to Your Needs</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* The Opportunity Cost of Delay */}
        <motion.div 
          className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-2xl p-8 md:p-12 mb-20 elevation-3"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="velox-text-h2 mb-8 text-center text-white">Why Timing Matters</h3>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="icon-container-glass mx-auto mb-6 w-20 h-20">
                <span className="text-2xl font-bold text-gray-700">1</span>
              </div>
              <h4 className="velox-text-h3 text-white mb-3">Every Month You Wait</h4>
              <p className="velox-text-body text-gray-300">
                <span className="font-semibold">Inefficiencies compound</span> while competitors gain ground
              </p>
            </div>
            
            <div className="text-center">
              <div className="icon-container-glass mx-auto mb-6 w-20 h-20">
                <span className="text-2xl font-bold text-gray-700">2</span>
              </div>
              <h4 className="velox-text-h3 text-white mb-3">Early Adopters Win</h4>
              <p className="velox-text-body text-gray-300">
                <span className="font-semibold">First-mover advantage</span> in operational efficiency
              </p>
            </div>
            
            <div className="text-center">
              <div className="icon-container-gradient mx-auto mb-6 w-20 h-20">
                <span className="text-2xl font-bold text-white">✓</span>
              </div>
              <h4 className="velox-text-h3 text-white mb-3">Start Smart</h4>
              <p className="velox-text-body text-gray-300">
                <span className="font-semibold">Free analysis</span> shows your exact opportunity
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <p className="velox-text-lead text-gray-300 mb-4">
              The question isn't whether to automate - it's <span className="font-bold text-white">when</span> and <span className="font-bold text-white">how</span>.
            </p>
            <p className="velox-text-lead text-blue-300 font-semibold">
              Let's calculate your specific opportunity cost.
            </p>
          </div>
        </motion.div>

        {/* Competitor Advantage Warning */}
        <motion.div 
          className="card-aurora text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex justify-center mb-6">
            <div className="icon-container-gradient">
              <AlertTriangle className="h-6 w-6 icon-warning" />
            </div>
          </div>
          <div className="max-w-2xl mx-auto">
            <p className="velox-text-lead font-semibold text-gray-900 mb-4">
              <span className="font-bold">MIT research</span> shows early Service-as-Software adopters gain <span className="font-bold">23% market share</span> from laggards within 24 months.
            </p>
            <p className="velox-text-body text-gray-600">
              Every month you wait, your competitors get <span className="font-semibold">stronger</span> while your costs <span className="font-semibold">compound</span>.
            </p>
          </div>
        </motion.div>


      </Container>
    </Section>
  )
}