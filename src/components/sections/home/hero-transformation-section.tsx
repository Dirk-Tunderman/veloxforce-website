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
        {/* Simplified Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-white to-blue-50/20" />
        
        {/* Hero Content */}
        <Container className="relative z-10">
          <div className="min-h-screen flex items-center justify-center">
            <div className="w-full text-center py-20">
            {/* Main Headline with Premium Typography */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 
                className="text-5xl md:text-7xl font-bold mb-6 max-w-5xl mx-auto leading-tight"
                style={{ color: 'var(--velox-gray-900)' }}
              >
                Stop Managing Processes.
                <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">
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
              <p className="text-xl md:text-2xl mb-6 max-w-4xl mx-auto leading-relaxed text-gray-700">
                You delegate operations once. We deliver outcomes forever.
                <span className="block mt-2 font-semibold text-blue-600">Your team leads. Technology serves. Business grows.</span>
              </p>
            </motion.div>

            {/* Supporting Text with CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="mb-12"
            >
              <p className="text-lg mb-8 max-w-3xl mx-auto text-gray-600">
                No software to learn. No systems to manage. Just perfect results delivered to your inbox.
              </p>
              
              {/* Primary CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link href="/tools/business-audit">
                  <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-lg font-semibold rounded-2xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-2">
                    Calculate My Savings
                    <Calculator className="w-5 h-5" />
                  </button>
                </Link>
                
                <Link href="/our-approach">
                  <button className="px-8 py-4 bg-white/80 backdrop-blur-sm text-blue-600 text-lg font-semibold rounded-2xl border-2 border-blue-200 hover:bg-blue-50 transition-all duration-300 flex items-center gap-2">
                    How It Works
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </Link>
              </div>
            </motion.div>

            {/* Social Proof Banner */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/60 backdrop-blur-sm rounded-full border border-blue-100/50 mb-16"
            >
              <span className="text-sm text-gray-700">
                Most automation projects fail because <span className="font-bold">you're left managing complex tools</span>.
              </span>
              <Link
                href="#transformation"
                className="text-sm font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1 transition-colors duration-200"
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
            <h3 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
              From Operational Overwhelm to Strategic Leadership
            </h3>
            
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              {/* Challenge Card */}
              <motion.div 
                className="lg:col-span-5"
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -50 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="relative p-8 bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl border border-red-100/50 shadow-lg">
                  <div className="absolute -top-4 left-8 px-4 py-2 bg-red-600 text-white rounded-full text-sm font-semibold">
                    Before Service-as-Software
                  </div>
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-100 to-orange-100 flex items-center justify-center mb-6">
                    <AlertTriangle className="h-8 w-8 text-red-600" />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">
                    Your Team Today
                  </h4>
                  <div className="space-y-4">
                    <div>
                      <p className="text-lg font-semibold text-gray-800 mb-2">Drowning in operational tasks</p>
                      <p className="text-gray-600">No time for strategic work</p>
                    </div>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                        Opens laptop to 47 unprocessed requests
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                        Three systems need manual updates (again)
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                        Two hours copying data between platforms
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                        Strategic planning meeting? Cancelled (again)
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                        Leaves at 7 PM, further behind than morning
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
              
              {/* Transformation Arrow */}
              <motion.div 
                className="lg:col-span-2 flex justify-center"
                whileInView={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0, scale: 0.5 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  <ArrowRight className="h-10 w-10 text-white" />
                </div>
              </motion.div>
              
              {/* Solution Card */}
              <motion.div 
                className="lg:col-span-5"
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 50 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="relative p-8 bg-gradient-to-br from-blue-50 via-white to-indigo-50 rounded-3xl border border-blue-100/50 shadow-xl">
                  <div className="absolute -top-4 left-8 px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full text-sm font-semibold">
                    With Service-as-Software
                  </div>
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-6 shadow-lg shadow-blue-500/25">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">
                    Your Team Tomorrow
                  </h4>
                  <div className="space-y-4">
                    <div>
                      <p className="text-lg font-semibold text-gray-800 mb-2">Focuses on strategic work</p>
                      <p className="text-gray-600">Receives processed results and analyzes trends</p>
                    </div>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                        Opens laptop to completed work awaiting review
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                        Reviews three exceptions needing her expertise
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                        Leads strategic session on market expansion
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                        Mentors junior team member on analysis
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                        Leaves at 4 PM for daughter's recital
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
            <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
              Why Service-as-Software Works
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div 
                className="text-center p-8 bg-white/80 backdrop-blur-sm rounded-3xl border border-blue-100/50 shadow-lg hover:shadow-xl transition-all duration-300 group"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-blue-500/25">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">Scales with You</h4>
                <p className="text-gray-600 mb-3">Investment proportional to value created</p>
                <p className="text-sm text-blue-600 font-medium">Pricing aligned with your savings</p>
              </motion.div>
              
              <motion.div 
                className="text-center p-8 bg-white/80 backdrop-blur-sm rounded-3xl border border-blue-100/50 shadow-lg hover:shadow-xl transition-all duration-300 group"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-emerald-500/25">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">Fast Results</h4>
                <p className="text-gray-600 mb-3">Most clients see positive ROI quickly</p>
                <p className="text-sm text-emerald-600 font-medium">ROI timeline depends on process complexity</p>
              </motion.div>
              
              <motion.div 
                className="text-center p-8 bg-white/80 backdrop-blur-sm rounded-3xl border border-blue-100/50 shadow-lg hover:shadow-xl transition-all duration-300 group"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-purple-500/25">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">Custom Built</h4>
                <p className="text-gray-600 mb-3">Faster than any alternative</p>
                <p className="text-sm text-purple-600 font-medium">Implementation speed varies by scope</p>
              </motion.div>
            </div>
          </motion.div>
        </Container>

        {/* Enhanced Final CTAs */}
        <Container className="relative z-10 text-center">
          <motion.div 
            className="mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="p-12 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white rounded-3xl relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute -top-20 -left-20 w-60 h-60 bg-blue-400 rounded-full blur-3xl animate-pulse" />
                <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-indigo-400 rounded-full blur-3xl animate-pulse" 
                  style={{ animationDelay: '2s' }} 
                />
              </div>
              
              <div className="relative z-10">
                <h3 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Operations?</h3>
                <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                  Start with our free business audit to see your specific savings potential
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/tools/business-audit">
                    <button className="px-10 py-4 bg-white text-gray-900 text-lg font-semibold rounded-2xl hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center gap-2">
                      Get Your Free ROI Analysis
                      <Calculator className="w-5 h-5" />
                    </button>
                  </Link>
                  
                  <Link href="/our-approach">
                    <button className="px-10 py-4 bg-transparent border-2 border-white text-white text-lg font-semibold rounded-2xl hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center gap-2">
                      Learn Our Process
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </Container>

        {/* Credibility Reference */}
        <Container className="relative z-10 text-center">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-sm text-gray-500 max-w-md mx-auto">
              Based on research from McKinsey, MIT Technology Review, and Harvard Business Review
            </p>
          </motion.div>
        </Container>
      </Section>
    </div>
  )
}