"use client"

import React from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"
import { Button } from "@/components/ui/button"
import { CTATracker } from "@/components/analytics/cta-tracker"
import { HybridProcessVisualization } from "@/components/sections/home/hybrid-process-visualization"

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <Container className="py-16">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <Heading level="1" className="velox-text-h1 mb-6">
            How It Works
          </Heading>
          <Text className="velox-text-lead max-w-2xl mx-auto">
            Watch your business processes transform through our hybrid AI-human system
          </Text>
        </motion.div>

        {/* Main Visual Process Flow */}
        <Section padding="xl" background="white">
          <HybridProcessVisualization />
        </Section>

        {/* Key Benefits Section */}
        <Section padding="lg" background="muted">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mb-16"
          >
            <Heading level="2" className="velox-text-h2 mb-6">
              The Result: Your Time Back
            </Heading>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="bg-white rounded-xl p-8 shadow-lg"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Text className="text-2xl font-bold text-blue-600">20+</Text>
                </div>
                <Heading level="4" className="text-xl font-semibold text-gray-900 mb-2">
                  Hours Weekly
                </Heading>
                <Text className="text-gray-600">
                  Reclaimed for strategic thinking and growth initiatives
                </Text>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="bg-white rounded-xl p-8 shadow-lg"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Text className="text-2xl font-bold text-green-600">60%</Text>
                </div>
                <Heading level="4" className="text-xl font-semibold text-gray-900 mb-2">
                  Cost Reduction
                </Heading>
                <Text className="text-gray-600">
                  Money freed for business investment and expansion
                </Text>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.1 }}
                className="bg-white rounded-xl p-8 shadow-lg"
              >
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Text className="text-2xl font-bold text-purple-600">3x</Text>
                </div>
                <Heading level="4" className="text-xl font-semibold text-gray-900 mb-2">
                  Processing Power
                </Heading>
                <Text className="text-gray-600">
                  Handle more volume with the same team size
                </Text>
              </motion.div>
            </div>
          </motion.div>
        </Section>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-xl p-8 max-w-2xl mx-auto">
            <Heading level="3" className="text-2xl font-bold text-blue-900 mb-4">
              Ready to See This in Action?
            </Heading>

            <Text className="text-blue-800 mb-6">
              Most business owners are surprised how much of their daily work can flow through this system.
            </Text>

            <CTATracker
              eventName="how_it_works_page_cta_clicked"
              eventData={{
                section: "how_it_works_page",
                cta_text: "Get Your Process Analysis",
                position: "bottom"
              }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                asChild
              >
                <Link href="/tools/business-audit">
                  Get Your Process Analysis
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </CTATracker>

            <Text className="text-sm text-gray-600 mt-4">
              See exactly which of your processes could work this way
            </Text>
          </div>
        </motion.div>
      </Container>
    </div>
  )
}