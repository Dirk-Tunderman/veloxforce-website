"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"
import { Button } from "@/components/ui/button"
import { Calculator, Target, TrendingUp } from "lucide-react"

export function HeroSectionV2() {
  return (
    <Section
      padding="xl"
      background="white-to-light"
      className="relative min-h-[90vh] flex items-center overflow-hidden"
    >
      {/* Performance-Optimized Background */}
      <div className="absolute inset-0 bg-gradient-simple" />
      <div className="absolute inset-0 bg-mesh-static opacity-30" />

      <Container className="relative z-10 max-w-6xl">
        <motion.div
          className="text-center space-y-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Main Headline - Premium Typography */}
          <div className="space-y-6 max-w-5xl mx-auto">
            <Heading
              level="1"
              className="velox-text-h1-premium"
            >
              Every Process You Hate Doing
              <span className="relative">
                <div className="absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-red-200 to-red-300 opacity-60 rounded-full transform -rotate-1"></div>
              </span>{" "}
              Can Become a Process You{" "}
              <span className="text-gradient">
                Love Delegating
              </span>
            </Heading>

            <Text className="velox-text-lead text-center max-w-4xl mx-auto">
              <strong>Elevate your team from operators to innovators.</strong> Transform routine work into strategic advantage.
            </Text>

            <Text className="velox-text-body max-w-4xl mx-auto text-center">
              Your talented people deserve better than data entry and status updates. See how we free your team to do the work that only they can do.
            </Text>
          </div>

          {/* Value Proposition Cards */}
          <motion.div
            className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="card-base">
              <div className="icon-container mx-auto mb-4">
                <Target className="w-6 h-6 icon-primary" />
              </div>
              <Text className="font-semibold text-gray-900 mb-2 text-center">
                Strategic Focus
              </Text>
              <Text className="text-sm text-gray-600 text-center">
                Your team works on growth, not routine tasks
              </Text>
            </div>

            <div className="card-base">
              <div className="icon-container mx-auto mb-4">
                <TrendingUp className="w-6 h-6 icon-primary" />
              </div>
              <Text className="font-semibold text-gray-900 mb-2 text-center">
                Guaranteed Results
              </Text>
              <Text className="text-sm text-gray-600 text-center">
                Perfect execution, every time, without supervision
              </Text>
            </div>

            <div className="card-base">
              <div className="icon-container mx-auto mb-4">
                <Calculator className="w-6 h-6 icon-accent" />
              </div>
              <Text className="font-semibold text-gray-900 mb-2 text-center">
                Clear ROI
              </Text>
              <Text className="text-sm text-gray-600 text-center">
                Savings typically exceed investment within months
              </Text>
            </div>
          </motion.div>

          {/* Primary CTA - Premium Design */}
          <motion.div
            className="space-y-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Button
              size="lg"
              className="relative bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-lg font-semibold px-12 py-6 h-auto rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 mx-auto overflow-hidden group"
              asChild
            >
              <Link href="/tools/business-audit">
                <div className="relative z-10 flex flex-col items-center py-2 text-center">
                  <span className="text-lg">Check What I Can Delegate</span>
                  <span className="text-sm font-normal opacity-90 text-center">Free assessment • 8 minutes • Honest analysis</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </Link>
            </Button>

            <Text className="text-center text-gray-600 max-w-2xl mx-auto">
              <strong>Don't see your specific operation?</strong><br />
              These are just examples. We've transformed over 200 unique processes across every industry.<br />
              If it's repetitive and follows rules, we can automate it.
            </Text>
          </motion.div>

        </motion.div>
      </Container>

      {/* Flowing Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-20 text-white" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="currentColor" />
        </svg>
      </div>
    </Section>
  )
}
