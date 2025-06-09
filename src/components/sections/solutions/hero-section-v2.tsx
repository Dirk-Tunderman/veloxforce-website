"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calculator, Target, TrendingUp } from "lucide-react"

export function HeroSectionV2() {
  return (
    <Section
      padding="xl"
      background="white-to-light"
      className="relative min-h-[90vh] flex items-center overflow-hidden"
    >
      {/* Premium Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-indigo-50/30" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-100/20 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-indigo-100/15 via-transparent to-transparent" />

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
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            >
              Every Process You{" "}
              <span className="relative">
                <span className="text-gray-700 font-bold">
                  Hate Doing
                </span>
                <div className="absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-red-200 to-red-300 opacity-60 rounded-full transform -rotate-1"></div>
              </span>{" "}
              Can Become a Process You{" "}
              <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent font-bold">
                Love Delegating
              </span>
            </Heading>

            <Text className="text-xl md:text-2xl text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
              <strong>Elevate your team from operators to innovators.</strong> Transform routine work into strategic advantage.
            </Text>

            <Text className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto text-center">
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
            <div className="bg-white/80 backdrop-blur-sm border border-blue-100 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Target className="w-6 h-6 text-white" />
              </div>
              <Text className="font-semibold text-gray-900 mb-2 text-center">
                Strategic Focus
              </Text>
              <Text className="text-sm text-gray-600 text-center">
                Your team works on growth, not routine tasks
              </Text>
            </div>

            <div className="bg-white/80 backdrop-blur-sm border border-blue-100 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <Text className="font-semibold text-gray-900 mb-2 text-center">
                Guaranteed Results
              </Text>
              <Text className="text-sm text-gray-600 text-center">
                Perfect execution, every time, without supervision
              </Text>
            </div>

            <div className="bg-white/80 backdrop-blur-sm border border-blue-100 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Calculator className="w-6 h-6 text-white" />
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
