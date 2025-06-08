"use client"

import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { TrendingUp, Clock, Target, Shield, CheckCircle } from "lucide-react"
import { motion } from "framer-motion"
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
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="velox-text-h2 mb-6">Early Adopters Are Already Winning</h2>
          <p className="velox-text-lead max-w-3xl mx-auto">
            While we compile our client data, here's what industry research shows:
            <span className="font-bold"> Early adopters are capturing the advantage</span>.
          </p>
        </motion.div>

        {/* Case Studies */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {caseStudies.map((study, index) => (
            <motion.div 
              key={index} 
              className="card-elevated"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
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
              <p className="velox-text-lead font-semibold text-gray-900 mb-6">
                "{study.quote}"
              </p>

              {/* Metrics */}
              <div className="space-y-3 mb-6">
                {study.process && (
                  <div className="flex items-center gap-3 velox-text-body">
                    <div className="icon-container-glass">
                      <Target className="h-4 w-4 icon-primary" />
                    </div>
                    <span className="text-gray-600">Process:</span>
                    <span className="font-medium text-gray-900">{study.process}</span>
                  </div>
                )}
                
                {study.timeSaved && (
                  <div className="flex items-center gap-3 velox-text-body">
                    <div className="icon-container-glass">
                      <Clock className="h-4 w-4 icon-primary" />
                    </div>
                    <span className="text-gray-600">Time saved:</span>
                    <span className="font-medium text-gray-900">{study.timeSaved}</span>
                  </div>
                )}
                
                {study.roi && (
                  <div className="flex items-center gap-3 velox-text-body">
                    <div className="icon-container-glass">
                      <TrendingUp className="h-4 w-4 icon-accent" />
                    </div>
                    <span className="text-gray-600">ROI:</span>
                    <span className="font-medium text-gray-900">{study.roi}</span>
                  </div>
                )}
                
                {study.accuracy && (
                  <div className="flex items-center gap-3 velox-text-body">
                    <div className="icon-container-glass">
                      <CheckCircle className="h-4 w-4 icon-success" />
                    </div>
                    <span className="text-gray-600">Accuracy:</span>
                    <span className="font-medium text-gray-900">{study.accuracy}</span>
                  </div>
                )}
                
                {study.implementation && (
                  <div className="flex items-center gap-3 velox-text-body">
                    <div className="icon-container-glass">
                      <Clock className="h-4 w-4 icon-primary" />
                    </div>
                    <span className="text-gray-600">Implementation:</span>
                    <span className="font-medium text-gray-900">{study.implementation}</span>
                  </div>
                )}
                
                {study.cost && (
                  <div className="flex items-center gap-3 velox-text-body">
                    <div className="icon-container-glass">
                      <TrendingUp className="h-4 w-4 icon-accent" />
                    </div>
                    <span className="text-gray-600">Cost:</span>
                    <span className="font-medium text-gray-900">{study.cost}</span>
                  </div>
                )}
                
                {study.scale && (
                  <div className="flex items-center gap-3 velox-text-body">
                    <div className="icon-container-glass">
                      <Target className="h-4 w-4 icon-primary" />
                    </div>
                    <span className="text-gray-600">Scale:</span>
                    <span className="font-medium text-gray-900">{study.scale}</span>
                  </div>
                )}
              </div>

              {/* Highlight */}
              <div className="pt-6 border-t border-gray-100">
                <p className="text-2xl font-bold text-blue-600">{study.highlight}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Builder Box */}
        <motion.div 
          className="card-aurora"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="icon-container-gradient">
              <Shield className="h-8 w-8 icon-accent" />
            </div>
            <h3 className="velox-text-h2 text-gray-900">Why We're Different: The Alignment Test</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="icon-container-glass mt-1">
                  <CheckCircle className="h-5 w-5 icon-success" />
                </div>
                <p className="velox-text-body">
                  <span className="font-semibold text-gray-900">We analyze ROI before starting</span> (free)
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="icon-container-glass mt-1">
                  <CheckCircle className="h-5 w-5 icon-success" />
                </div>
                <p className="velox-text-body">
                  <span className="font-semibold text-gray-900">We've rejected 23% of opportunities</span> where math didn't work
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="icon-container-glass mt-1">
                  <CheckCircle className="h-5 w-5 icon-success" />
                </div>
                <p className="velox-text-body">
                  <span className="font-semibold text-gray-900">We only succeed when you save money</span> long-term
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="icon-container-glass mt-1">
                  <CheckCircle className="h-5 w-5 icon-success" />
                </div>
                <p className="velox-text-body">
                  <span className="font-semibold text-gray-900">No lock-in contracts</span> - prove value monthly
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Industry Validation */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <blockquote className="glass-light p-8 rounded-2xl relative max-w-4xl mx-auto">
            <p className="velox-text-lead italic text-gray-700">
              "By 2025, AI-powered automation will handle 50% of repetitive tasks. 
              The winners will be companies that implement without complexity."
            </p>
            <cite className="block mt-6 velox-text-body font-semibold text-gray-600">
              — Forrester Research
            </cite>
          </blockquote>
        </motion.div>
      </Container>
    </Section>
  )
}