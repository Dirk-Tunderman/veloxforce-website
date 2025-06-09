"use client"

import React from "react"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import {
  ArrowRight,
  Target,
  TrendingUp,
  ArrowDown,
  Calculator,
  CheckCircle,
  AlertTriangle,
  BarChart3,
  Zap
} from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export function HeroTransformationSection() {
  return (
    <div>
      <Section
        padding="xl"
        background="transparent"
        className="relative overflow-hidden"
      >
        {/* Performance-Optimized Background */}
        <div className="absolute inset-0 bg-gradient-simple" />
        <div className="absolute inset-0 bg-mesh-static opacity-30" />

        {/* Hero Content */}
        <Container className="relative z-10">
          <div className="min-h-screen flex items-center justify-center">
            <div className="w-full text-center py-20">
            {/* Main Headline with Design System Typography */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="velox-text-h1-premium mb-6 max-w-5xl mx-auto">
                Stop Managing Processes.
                <span className="block">
                  Start Receiving Results.
                </span>
              </h1>
            </motion.div>

            {/* Enhanced Subheadline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <p className="velox-text-lead mb-6 max-w-4xl mx-auto text-center">
                You delegate operations once. We deliver outcomes forever.
                <span className="block mt-2 font-semibold text-gradient">Your team leads. Technology serves. Business grows.</span>
              </p>
            </motion.div>

            {/* Supporting Text with CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="mb-12"
            >
              <p className="velox-text-body mb-8 max-w-3xl mx-auto text-center">
                No software to learn. No systems to manage. Just perfect results delivered to your inbox.
              </p>
              
              {/* Primary CTAs - Design System Compliant */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link href="/tools/business-audit">
                  <button className="relative bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-lg font-semibold px-12 py-6 h-auto rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 overflow-hidden group">
                    <span className="relative z-10 flex items-center gap-2">
                      Calculate My Savings
                      <Calculator className="w-5 h-5" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  </button>
                </Link>

                <Link href="/our-approach">
                  <button className="cta-secondary px-8 py-4 bg-white text-blue-600 text-lg font-semibold rounded-xl border-2 border-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2">
                    How It Works
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </Link>
              </div>
            </motion.div>

            {/* Social Proof Banner - Design System Compliant */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-full shadow-sm mb-16"
            >
              <span className="velox-text-caption">
                Most automation projects fail because <span className="font-bold text-gray-700">you're left managing complex tools</span>.
              </span>
              <Link
                href="#transformation"
                className="velox-text-caption font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1 transition-colors duration-200"
              >
                See the difference
                <ArrowDown className="h-4 w-4" />
              </Link>
            </motion.div>
            </div>
          </div>
        </Container>


        
        {/* Classic Transformation Visual - Enhanced */}
        <Container id="transformation" className="relative z-10 max-w-7xl">
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="velox-text-h2 text-center mb-16">
              From Operational Overwhelm to Strategic Leadership
            </h2>
            
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              {/* Challenge Card - Design System Compliant */}
              <motion.div
                className="lg:col-span-5"
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -50 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="card-challenge relative">
                  <div className="absolute -top-4 left-8 px-4 py-2 bg-gray-600 text-white rounded-full text-sm font-semibold">
                    Before Service-as-Software
                  </div>
                  <div className="icon-container mb-6">
                    <AlertTriangle className="h-6 w-6 icon-primary" />
                  </div>
                  <h4 className="velox-text-h3 mb-4">
                    Your Team Today
                  </h4>
                  <div className="space-y-4">
                    <div>
                      <p className="velox-text-body font-semibold mb-2">Drowning in operational tasks</p>
                      <p className="velox-text-body">No time for strategic work</p>
                    </div>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 rounded-full bg-gray-400 mt-2 flex-shrink-0" />
                        <span className="velox-text-body">Opens laptop to 47 unprocessed requests</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 rounded-full bg-gray-400 mt-2 flex-shrink-0" />
                        <span className="velox-text-body">Three systems need manual updates (again)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 rounded-full bg-gray-400 mt-2 flex-shrink-0" />
                        <span className="velox-text-body">Two hours copying data between platforms</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 rounded-full bg-gray-400 mt-2 flex-shrink-0" />
                        <span className="velox-text-body">Strategic planning meeting? Cancelled (again)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 rounded-full bg-gray-400 mt-2 flex-shrink-0" />
                        <span className="velox-text-body">Leaves at 7 PM, further behind than morning</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
              
              {/* Transformation Arrow - Design System Compliant */}
              <motion.div
                className="lg:col-span-2 flex justify-center"
                whileInView={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0, scale: 0.5 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <div className="transformation-arrow">
                  <ArrowRight className="h-8 w-8 text-white" />
                </div>
              </motion.div>
              
              {/* Solution Card - Design System Compliant */}
              <motion.div
                className="lg:col-span-5"
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 50 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="card-solution relative">
                  <div className="absolute -top-4 left-8 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full text-sm font-semibold">
                    With Service-as-Software
                  </div>
                  <div className="icon-container-gradient mb-6">
                    <Target className="h-6 w-6 icon-accent" />
                  </div>
                  <h4 className="velox-text-h3 text-blue-800 mb-4">
                    Your Team Tomorrow
                  </h4>
                  <div className="space-y-4">
                    <div>
                      <p className="velox-text-body font-semibold mb-2">Focuses on strategic work</p>
                      <p className="velox-text-body">Receives processed results and analyzes trends</p>
                    </div>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <span className="velox-text-body">Opens laptop to completed work awaiting review</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <span className="velox-text-body">Reviews three exceptions needing her expertise</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <span className="velox-text-body">Leads strategic session on market expansion</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <span className="velox-text-body">Mentors junior team member on analysis</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <span className="velox-text-body">Leaves at 4 PM for daughter's recital</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </Container>

        {/* Enhanced Value Proposition Row */}
        <Container className="relative z-10 max-w-6xl">
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="velox-text-h2 text-center mb-12">
              Why Service-as-Software Works
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                className="card-elevated text-center"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="icon-container-gradient mx-auto mb-6">
                  <BarChart3 className="w-6 h-6 icon-accent" />
                </div>
                <h4 className="velox-text-h3 mb-4">Scales with You</h4>
                <p className="velox-text-body mb-3">Investment proportional to value created</p>
                <p className="velox-text-caption font-medium text-blue-600">Pricing aligned with your savings</p>
              </motion.div>

              <motion.div
                className="card-elevated text-center"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="icon-container-gradient mx-auto mb-6">
                  <TrendingUp className="w-6 h-6 icon-success" />
                </div>
                <h4 className="velox-text-h3 mb-4">Fast Results</h4>
                <p className="velox-text-body mb-3">Most clients see positive ROI quickly</p>
                <p className="velox-text-caption font-medium text-emerald-600">ROI timeline depends on process complexity</p>
              </motion.div>

              <motion.div
                className="card-elevated text-center"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="icon-container-gradient mx-auto mb-6">
                  <Zap className="w-6 h-6 icon-primary" />
                </div>
                <h4 className="velox-text-h3 mb-4">Custom Built</h4>
                <p className="velox-text-body mb-3">Faster than any alternative</p>
                <p className="velox-text-caption font-medium text-gray-600">Implementation speed varies by scope</p>
              </motion.div>
            </div>
          </motion.div>
        </Container>

        {/* Enhanced Final CTAs - Design System Compliant */}
        <Container className="relative z-10 text-center">
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="p-12 bg-gradient-to-br from-blue-900 to-blue-800 text-white rounded-3xl relative overflow-hidden">
              {/* Simplified Background Pattern */}
              <div className="absolute inset-0 bg-mesh-static opacity-20" />

              <div className="relative z-10">
                <h2 className="velox-text-h2 text-white mb-6">Ready to Transform Your Operations?</h2>
                <p className="velox-text-lead text-blue-100 mb-8 max-w-3xl mx-auto">
                  Start with our free business audit to see your specific savings potential
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/tools/business-audit">
                    <button className="relative bg-white text-blue-900 text-lg font-semibold px-12 py-6 h-auto rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 overflow-hidden group">
                      <span className="relative z-10 flex items-center gap-2">
                        Get Your Free ROI Analysis
                        <Calculator className="w-5 h-5" />
                      </span>
                    </button>
                  </Link>

                  <Link href="/our-approach">
                    <button className="cta-ghost text-white border-2 border-white hover:bg-white hover:text-blue-900 px-10 py-4 rounded-xl text-lg font-semibold transition-all duration-300 flex items-center gap-2">
                      Learn Our Process
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </Container>

        {/* Credibility Reference - Design System Compliant */}
        <Container className="relative z-10 text-center">
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="velox-text-caption max-w-md mx-auto">
              Based on research from McKinsey, MIT Technology Review, and Harvard Business Review
            </p>
          </motion.div>
        </Container>
      </Section>
    </div>
  )
}