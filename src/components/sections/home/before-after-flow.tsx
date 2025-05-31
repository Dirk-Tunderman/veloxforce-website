"use client"

import React from "react"
import { motion } from "framer-motion"
import {
  AlertTriangle,
  Clock,
  Users,
  RefreshCw,
  CheckCircle,
  Zap,
  Target,
  TrendingUp,
  ArrowRight
} from "lucide-react"

import { Heading, Text } from "@/components/ui/typography"

const beforeFlow = [
  {
    step: "Document Arrives",
    icon: AlertTriangle,
    description: "Email attachment or paper form",
    issues: ["Manual download", "Lost in inbox", "Format inconsistencies"],
    time: "15 min",
    color: "red"
  },
  {
    step: "Manual Data Entry",
    icon: Users,
    description: "Employee types information",
    issues: ["Typos and errors", "Interruptions", "Fatigue mistakes"],
    time: "25 min",
    color: "red"
  },
  {
    step: "Validation & Checking",
    icon: Clock,
    description: "Someone reviews the work",
    issues: ["Human oversight", "Inconsistent standards", "Time delays"],
    time: "20 min",
    color: "red"
  },
  {
    step: "Error Correction",
    icon: RefreshCw,
    description: "Fix mistakes and re-process",
    issues: ["Rework cycles", "Frustration", "Deadline pressure"],
    time: "30 min",
    color: "red"
  }
]

const afterFlow = [
  {
    step: "Smart Intake",
    icon: Zap,
    description: "AI captures from any source",
    benefits: ["Instant processing", "Format agnostic", "Zero manual work"],
    time: "30 sec",
    color: "blue"
  },
  {
    step: "Intelligent Processing",
    icon: Target,
    description: "AI extracts and validates data",
    benefits: ["99.8% accuracy", "Consistent rules", "Lightning fast"],
    time: "45 sec",
    color: "blue"
  },
  {
    step: "Smart Routing",
    icon: CheckCircle,
    description: "Router decides next action",
    benefits: ["Perfect decisions", "Exception handling", "Quality assured"],
    time: "15 sec",
    color: "blue"
  },
  {
    step: "Seamless Output",
    icon: TrendingUp,
    description: "Perfect result delivered",
    benefits: ["Guaranteed accuracy", "Instant delivery", "Audit trail"],
    time: "30 sec",
    color: "blue"
  }
]

export function BeforeAfterFlow() {
  return (
    <div className="space-y-12">
      <div className="text-center max-w-4xl mx-auto">
        <Heading level="3" className="text-3xl font-bold text-deep-blue mb-4">
          The Transformation: Chaos to Control
        </Heading>
        <Text className="text-lg text-gray-600 mx-auto">
          See the dramatic difference in how your processes actually run
        </Text>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-8 lg:gap-12 items-start max-w-7xl mx-auto">
        {/* BEFORE: Traditional Process */}
        <div className="space-y-6">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                <AlertTriangle className="h-6 w-6 text-red-600" />
              </div>
              <Heading level="4" className="text-2xl font-bold text-red-800">
                BEFORE: Traditional Process
              </Heading>
            </div>
            <Text className="text-red-600 font-medium">
              Total Time: 90+ minutes per document
            </Text>
          </div>

          <div className="space-y-4">
            {beforeFlow.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-red-50 border border-red-200 rounded-lg p-4"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <step.icon className="h-5 w-5 text-red-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <Heading level="5" className="font-semibold text-red-800">
                        {step.step}
                      </Heading>
                      <Text className="text-sm font-medium text-red-600 bg-red-100 px-2 py-1 rounded">
                        {step.time}
                      </Text>
                    </div>
                    <Text className="text-sm text-red-700 mb-3">
                      {step.description}
                    </Text>
                    <div className="space-y-1">
                      {step.issues.map((issue, issueIndex) => (
                        <Text key={issueIndex} className="text-xs text-red-600 flex items-center gap-2">
                          <span className="w-1 h-1 bg-red-400 rounded-full"></span>
                          {issue}
                        </Text>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="bg-red-100 border border-red-300 rounded-lg p-4 text-center">
            <Text className="font-bold text-red-800 mb-1">
              Result: Frustrated team, delayed outcomes
            </Text>
            <Text className="text-sm text-red-700">
              High error rates, missed deadlines, stressed employees
            </Text>
          </div>
        </div>

        {/* Transformation Arrow */}
        <div className="hidden lg:flex items-center justify-center py-8">
          <motion.div
            animate={{
              x: [0, 10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center shadow-lg"
          >
            <ArrowRight className="h-8 w-8 text-white" />
          </motion.div>
        </div>

        {/* Mobile Transformation Indicator */}
        <div className="lg:hidden flex items-center justify-center py-6">
          <div className="flex flex-col items-center gap-2">
            <motion.div
              animate={{
                y: [0, -5, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center shadow-lg rotate-90"
            >
              <ArrowRight className="h-6 w-6 text-white" />
            </motion.div>
            <Text className="text-sm font-medium text-blue-600">TRANSFORMS TO</Text>
          </div>
        </div>

        {/* AFTER: Veloxforce Process */}
        <div className="space-y-6">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <CheckCircle className="h-6 w-6 text-blue-600" />
              </div>
              <Heading level="4" className="text-2xl font-bold text-blue-800">
                AFTER: Veloxforce Process
              </Heading>
            </div>
            <Text className="text-blue-600 font-medium">
              Total Time: 2 minutes per document
            </Text>
          </div>

          <div className="space-y-4">
            {afterFlow.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-blue-50 border border-blue-200 rounded-lg p-4"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <step.icon className="h-5 w-5 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <Heading level="5" className="font-semibold text-blue-800">
                        {step.step}
                      </Heading>
                      <Text className="text-sm font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded">
                        {step.time}
                      </Text>
                    </div>
                    <Text className="text-sm text-blue-700 mb-3">
                      {step.description}
                    </Text>
                    <div className="space-y-1">
                      {step.benefits.map((benefit, benefitIndex) => (
                        <Text key={benefitIndex} className="text-xs text-blue-600 flex items-center gap-2">
                          <CheckCircle className="w-3 h-3 text-blue-500" />
                          {benefit}
                        </Text>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="bg-green-100 border border-green-300 rounded-lg p-4 text-center">
            <Text className="font-bold text-green-800 mb-1">
              Result: Happy team, perfect outcomes
            </Text>
            <Text className="text-sm text-green-700">
              99.8% accuracy, instant delivery, strategic focus restored
            </Text>
          </div>
        </div>
      </div>

      {/* Impact Summary */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 text-center max-w-5xl mx-auto">
        <div className="bg-blue-100 rounded-lg p-6 border border-blue-300 mb-6 max-w-3xl mx-auto">
          <Text className="text-2xl font-bold text-blue-900 mb-2">
            Total Time: Before 90+ minutes → After 2 minutes
          </Text>
          <Text className="text-lg font-medium text-blue-800">
            That's 88 minutes back in your day. Every single day.
          </Text>
        </div>

        <Heading level="4" className="text-2xl font-bold text-deep-blue mb-4">
          The Impact: 45x Faster, 99.8% More Accurate
        </Heading>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div>
            <Text className="text-3xl font-bold text-blue-600 mb-2">45x</Text>
            <Text className="text-sm text-gray-600">Faster Processing</Text>
          </div>
          <div>
            <Text className="text-3xl font-bold text-green-600 mb-2">99.8%</Text>
            <Text className="text-sm text-gray-600">Accuracy Rate</Text>
          </div>
          <div>
            <Text className="text-3xl font-bold text-purple-600 mb-2">88min</Text>
            <Text className="text-sm text-gray-600">Saved Per Document</Text>
          </div>
        </div>
      </div>
    </div>
  )
}
