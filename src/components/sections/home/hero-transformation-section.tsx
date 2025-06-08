"use client"

import { Button } from "@/components/ui/button"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"
import { ArrowRight, Clock, Target, TrendingUp, ArrowDown } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

export function HeroTransformationSection() {
  return (
    <Section 
      padding="xl" 
      background="transparent" 
      className="relative overflow-hidden"
    >
      {/* Unified Background */}
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
              className="velox-text-h1-premium mb-6 max-w-4xl mx-auto"
              data-text="Stop Managing Processes. Start Receiving Results."
            >
              Stop Managing Processes. Start Receiving Results.
            </h1>
          </motion.div>

          {/* Subheadline with Premium Typography */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <p className="velox-text-lead mb-4 max-w-3xl mx-auto">
              You delegate operations once. We deliver outcomes forever.
              <span className="font-semibold" style={{ color: 'var(--velox-accent)' }}> Your team leads. Technology serves. Business grows.</span>
            </p>
          </motion.div>

          {/* Supporting Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <p className="velox-text-body mb-8 max-w-2xl mx-auto">
              No software to learn. No systems to manage. Just results delivered to your inbox.
            </p>
          </motion.div>

          {/* Premium Proof Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="glass-blue inline-flex items-center gap-2 px-6 py-3 rounded-full mb-12"
          >
            <span className="text-sm" style={{ color: 'var(--velox-gray-700)' }}>
              Most automation projects fail because <span className="font-bold">you're left managing complex tools</span>. Service-as-Software succeeds because <span className="font-bold" style={{ color: 'var(--velox-blue-700)' }}>we handle the complexity for you</span>.
            </span>
            <Link 
              href="#proof" 
              className="text-sm font-semibold inline-flex items-center gap-1 transition-colors duration-200"
              style={{ color: 'var(--velox-accent)' }}
            >
              Here's why
              <ArrowDown className="h-4 w-4" />
            </Link>
          </motion.div>
          </div>
        </div>
      </Container>

      {/* Premium Transformation Visual - Now separate section */}
      <Container className="relative z-10 max-w-7xl">
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h3 className="velox-text-h2 text-center mb-12 relative z-10">
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
              <div className="card-challenge hover-lift">
                <div className="absolute -top-4 left-8 px-4 py-2 rounded-full text-sm font-semibold text-white" style={{ backgroundColor: 'var(--velox-gray-900)' }}>
                  Before Service-as-Software
                </div>
                <div className="icon-container-glass mb-6">
                  <Clock className="h-6 w-6 icon-primary" />
                </div>
                <h4 className="velox-text-h3 mb-3">
                  Your Team Today
                </h4>
                <div className="space-y-4">
                  <div>
                    <p className="velox-text-body font-semibold mb-1">Drowning in operational tasks</p>
                    <p className="text-sm" style={{ color: 'var(--velox-gray-600)' }}>No time for strategic work</p>
                  </div>
                  <ul className="space-y-2 text-sm" style={{ color: 'var(--velox-gray-600)' }}>
                    <li>• Opens laptop to 47 unprocessed requests</li>
                    <li>• Three systems need manual updates (again)</li>
                    <li>• Two hours copying data between platforms</li>
                    <li>• Strategic planning meeting? Cancelled (again)</li>
                    <li>• Leaves at 7 PM, further behind than morning</li>
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
              <div className="transformation-arrow-premium">
                <ArrowRight className="h-8 w-8 text-white" />
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
              <div className="card-solution card-floating">
                <div className="absolute -top-4 left-8 px-4 py-2 rounded-full text-sm font-semibold text-white" style={{ backgroundColor: 'var(--velox-accent)' }}>
                  With Service-as-Software
                </div>
                <div className="icon-container-gradient mb-6">
                  <Target className="h-6 w-6 icon-accent" />
                </div>
                <h4 className="velox-text-h3 mb-3" style={{ color: 'var(--velox-blue-800)' }}>
                  Your Team Tomorrow
                </h4>
                <div className="space-y-4">
                  <div>
                    <p className="velox-text-body font-semibold mb-1" style={{ color: 'var(--velox-gray-700)' }}>Focuses on strategic work</p>
                    <p className="text-sm" style={{ color: 'var(--velox-gray-600)' }}>Receives processed results and analyzes trends</p>
                  </div>
                  <ul className="space-y-2 text-sm" style={{ color: 'var(--velox-gray-600)' }}>
                    <li>• Opens laptop to completed work awaiting review</li>
                    <li>• Reviews three exceptions needing her expertise</li>
                    <li>• Leads strategic session on market expansion</li>
                    <li>• Mentors junior team member on analysis</li>
                    <li>• Leaves at 4 PM for daughter's recital</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </Container>

      {/* Value Proposition Row */}
      <Container className="relative z-10 max-w-5xl">
        <motion.div 
          className="grid md:grid-cols-3 gap-8 mb-16 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="value-prop-card-final">
            <div className="value-prop-title-final">Scale</div>
            <Text className="text-sm text-gray-600 font-medium mb-2">Investment proportional to value created</Text>
            <Text className="text-xs text-gray-500">Pricing aligned with your savings</Text>
          </div>
          <div className="value-prop-card-final">
            <div className="value-prop-title-final">Fast</div>
            <Text className="text-sm text-gray-600 font-medium mb-2">Most clients see positive ROI quickly</Text>
            <Text className="text-xs text-gray-500">ROI timeline depends on process complexity</Text>
          </div>
          <div className="value-prop-card-final">
            <div className="value-prop-title-final">Custom</div>
            <Text className="text-sm text-gray-600 font-medium mb-2">Faster than any alternative</Text>
            <Text className="text-xs text-gray-500">Implementation speed varies by scope</Text>
          </div>
        </motion.div>
      </Container>

      {/* Premium CTAs */}
      <Container className="relative z-10 text-center">
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          viewport={{ once: true }}
        >
          <Link href="/tools/business-audit">
            <button className="cta-magnetic text-lg">
              <span className="relative z-10">Calculate My Delegation Savings</span>
              <ArrowRight className="inline-block ml-2 h-5 w-5" />
            </button>
          </Link>
          
          <Link href="/our-approach">
            <button className="cta-secondary-glass text-lg">
              How Service-as-Software Works
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </Link>
        </motion.div>
      </Container>

      {/* Credibility Reference */}
      <Container className="relative z-10 text-center">
        <motion.p 
          className="text-xs text-center mt-12 max-w-md mx-auto"
          style={{ color: 'var(--velox-gray-500)' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          viewport={{ once: true }}
        >
          Based on McKinsey's 2024 report: 'The State of AI in Business'
        </motion.p>
      </Container>
    </Section>
  )
}