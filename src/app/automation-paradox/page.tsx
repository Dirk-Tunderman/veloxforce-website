"use client"

import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import {
  AlertTriangle,
  TrendingDown,
  Users,
  DollarSign,
  Clock,
  Shield,
  CheckCircle,
  ArrowRight,
  BarChart3,
  Zap
} from "lucide-react"

import { Container } from "@/components/layout/container"
import { Heading, Text } from "@/components/ui/typography"
import { Button } from "@/components/ui/button"
import { CTATracker } from "@/components/analytics/cta-tracker"

export default function AutomationParadoxPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Container className="py-16">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 max-w-2xl mx-auto">
            <Text className="text-red-800 font-medium">
              ⚠️ The Automation Paradox Crushing SME Businesses in 2025
            </Text>
          </div>
          <Heading level="1" className="text-4xl font-bold text-deep-blue mb-4">
            Why 67% of SMEs Are Fighting for Survival
          </Heading>
          <Text className="text-xl text-gray-600 max-w-4xl mx-auto">
            SME businesses lose an average of $2.5 million annually from manual inefficiencies, face 70% failure rates with conventional automation software, and experience 80%+ failure rates with AI implementations—creating a triple threat.
          </Text>
        </motion.div>

        {/* The Triple Threat */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <Heading level="2" className="text-3xl font-bold text-deep-blue mb-4">
              The Triple Threat Facing SMEs
            </Heading>
            <Text className="text-lg text-gray-600">
              Whether you stay manual, try conventional automation, or experiment with AI—you face devastating challenges
            </Text>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Manual Processes */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-red-50 border-2 border-red-200 rounded-xl p-6"
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-red-600" />
                </div>
                <Heading level="3" className="text-xl font-bold text-red-900 mb-2">
                  Manual Processes
                </Heading>
                <Text className="text-red-700 font-medium">40% of work week lost</Text>
              </div>

              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 border border-red-200">
                  <div className="flex items-center gap-3 mb-2">
                    <DollarSign className="h-5 w-5 text-red-600" />
                    <Text className="font-bold text-red-900">$2.5M Annual Loss</Text>
                  </div>
                  <Text className="text-sm text-red-700">Average SME loses 20-30% of revenue to inefficient processes</Text>
                </div>

                <div className="bg-white rounded-lg p-4 border border-red-200">
                  <div className="flex items-center gap-3 mb-2">
                    <AlertTriangle className="h-5 w-5 text-red-600" />
                    <Text className="font-bold text-red-900">20% Error Rate</Text>
                  </div>
                  <Text className="text-sm text-red-700">Manual data entry creates 1% errors per step, compounding rapidly</Text>
                </div>

                <div className="bg-white rounded-lg p-4 border border-red-200">
                  <div className="flex items-center gap-3 mb-2">
                    <Users className="h-5 w-5 text-red-600" />
                    <Text className="font-bold text-red-900">82% Burnout Rate</Text>
                  </div>
                  <Text className="text-sm text-red-700">Employees work 4+ hours unpaid overtime weekly</Text>
                </div>
              </div>
            </motion.div>

            {/* Conventional Software */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-orange-50 border-2 border-orange-200 rounded-xl p-6"
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="h-8 w-8 text-orange-600" />
                </div>
                <Heading level="3" className="text-xl font-bold text-orange-900 mb-2">
                  Conventional Software
                </Heading>
                <Text className="text-orange-700 font-medium">70% failure rate</Text>
              </div>

              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 border border-orange-200">
                  <div className="flex items-center gap-3 mb-2">
                    <TrendingDown className="h-5 w-5 text-orange-600" />
                    <Text className="font-bold text-orange-900">58% Regret Rate</Text>
                  </div>
                  <Text className="text-sm text-orange-700">US businesses regret software purchases in past 12-18 months</Text>
                </div>

                <div className="bg-white rounded-lg p-4 border border-orange-200">
                  <div className="flex items-center gap-3 mb-2">
                    <Clock className="h-5 w-5 text-orange-600" />
                    <Text className="font-bold text-orange-900">33.5 Hours Training</Text>
                  </div>
                  <Text className="text-sm text-orange-700">Per employee with 6-month learning curve before proficiency</Text>
                </div>

                <div className="bg-white rounded-lg p-4 border border-orange-200">
                  <div className="flex items-center gap-3 mb-2">
                    <DollarSign className="h-5 w-5 text-orange-600" />
                    <Text className="font-bold text-orange-900">200% Cost Overrun</Text>
                  </div>
                  <Text className="text-sm text-orange-700">1 in 6 IT projects faces massive budget overruns</Text>
                </div>
              </div>
            </motion.div>

            {/* AI Tools */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="bg-purple-50 border-2 border-purple-200 rounded-xl p-6"
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-purple-600" />
                </div>
                <Heading level="3" className="text-xl font-bold text-purple-900 mb-2">
                  AI Tools
                </Heading>
                <Text className="text-purple-700 font-medium">80% failure rate</Text>
              </div>

              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 border border-purple-200">
                  <div className="flex items-center gap-3 mb-2">
                    <AlertTriangle className="h-5 w-5 text-purple-600" />
                    <Text className="font-bold text-purple-900">48% Hallucination</Text>
                  </div>
                  <Text className="text-sm text-purple-700">OpenAI's latest model hallucinates nearly half the time</Text>
                </div>

                <div className="bg-white rounded-lg p-4 border border-purple-200">
                  <div className="flex items-center gap-3 mb-2">
                    <Shield className="h-5 w-5 text-purple-600" />
                    <Text className="font-bold text-purple-900">93% Penetrable</Text>
                  </div>
                  <Text className="text-sm text-purple-700">Company networks can be reliably breached by cybercriminals</Text>
                </div>

                <div className="bg-white rounded-lg p-4 border border-purple-200">
                  <div className="flex items-center gap-3 mb-2">
                    <Users className="h-5 w-5 text-purple-600" />
                    <Text className="font-bold text-purple-900">90% Don't Know How</Text>
                  </div>
                  <Text className="text-sm text-purple-700">SME owners don't know how to use AI for work-related tasks</Text>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* The Veloxforce Solution */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-br from-blue-50 to-green-50 border-2 border-blue-300 rounded-2xl p-8">
            <div className="text-center mb-8">
              <Heading level="2" className="text-3xl font-bold text-deep-blue mb-4">
                The Veloxforce Difference
              </Heading>
              <Text className="text-lg text-gray-700">
                We eliminate the paradox by handling everything for you
              </Text>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <Text className="font-bold text-gray-900 mb-1">No Software to Learn</Text>
                    <Text className="text-gray-600">You delegate work, we handle the technology</Text>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <Text className="font-bold text-gray-900 mb-1">99.9% Accuracy Guaranteed</Text>
                    <Text className="text-gray-600">Human oversight eliminates AI hallucinations</Text>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <Text className="font-bold text-gray-900 mb-1">Zero Implementation Risk</Text>
                    <Text className="text-gray-600">We manage the entire process from start to finish</Text>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <Text className="font-bold text-gray-900 mb-1">Immediate Results</Text>
                    <Text className="text-gray-600">85% of tasks automated within 2-5 minutes</Text>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <Text className="font-bold text-gray-900 mb-1">Complete Security</Text>
                    <Text className="text-gray-600">Enterprise-grade security without the complexity</Text>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <Text className="font-bold text-gray-900 mb-1">20+ Hours Weekly Saved</Text>
                    <Text className="text-gray-600">Focus on growth instead of operations</Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-center"
        >
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-xl p-8 max-w-2xl mx-auto">
            <Heading level="3" className="text-2xl font-bold text-blue-900 mb-4">
              Escape the Automation Paradox
            </Heading>

            <Text className="text-blue-800 mb-6">
              Don't become another statistic. See exactly how much the automation paradox is costing your business.
            </Text>

            <CTATracker
              eventName="automation_paradox_page_cta_clicked"
              eventData={{
                section: "automation_paradox_page",
                cta_text: "Discover What You're Losing Daily",
                position: "bottom"
              }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                asChild
              >
                <Link href="/tools/business-audit">
                  Discover What You're Losing Daily
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </CTATracker>

            <Text className="text-sm text-gray-600 mt-4">
              Free assessment - see your specific automation opportunities
            </Text>
          </div>
        </motion.div>
      </Container>
    </div>
  )
}
