"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Calculator, Search, Phone, Clock, TrendingUp, AlertTriangle } from "lucide-react"

import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"

const nextSteps = [
  {
    icon: Calculator,
    title: "Calculate Your ROI",
    description: "See real numbers based on your volumes. Takes 8 minutes.",
    cta: "Calculate Savings →",
    color: "gray",
    timeframe: "8 minutes"
  },
  {
    icon: Search,
    title: "Analyze Your Process",
    description: "We'll map one workflow and show the transformation possible.",
    cta: "Get Process Analysis →",
    color: "gray",
    timeframe: "15 minutes"
  },
  {
    icon: Phone,
    title: "Talk It Through",
    description: "Sometimes a conversation clarifies everything. No pressure.",
    cta: "Schedule Call →",
    color: "gray",
    timeframe: "30 minutes"
  }
]

const urgencyFactors = [
  {
    icon: Clock,
    title: "Time Cost",
    description: "Every month you wait costs you in money, opportunities, and quality of life"
  },
  {
    icon: TrendingUp,
    title: "Competitive Advantage",
    description: "While you're working late, competitors might be having dinner with their families"
  },
  {
    icon: AlertTriangle,
    title: "Wrong Solution Risk",
    description: "Jumping into the wrong solution creates bigger problems"
  }
]

export function NextStepSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <Section padding="lg" background="accent-to-white">
      <Container>
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Heading level="2" className="velox-text-h2 mb-6">
              Your Next Step
            </Heading>
            <div className="w-full flex justify-center mb-4">
              <div className="max-w-3xl px-4">
                <Text className="text-base text-gray-700 leading-relaxed text-center">
                  You understand the problem. You see how Hybrid Intelligence solves it.
                </Text>
              </div>
            </div>
            <div className="w-full flex justify-center">
              <div className="max-w-3xl px-4">
                <Text className="text-lg font-semibold text-gray-800 leading-relaxed text-center">
                  The question is when you make the change.
                </Text>
              </div>
            </div>
          </motion.div>

          {/* Three Ways Forward */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <Heading level="3" className="velox-text-h3 text-center mb-8">
              Three ways to explore what this means for your business:
            </Heading>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {nextSteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.2 }}
                  className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 text-center flex flex-col h-full"
                >
                  <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>

                  <Heading level="4" className="font-semibold text-gray-900 mb-3">
                    {step.title}
                  </Heading>

                  <Text className="velox-text-body text-gray-600 mb-4 flex-grow">
                    {step.description}
                  </Text>

                  <div className="mb-6">
                    <div className="bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 inline-block">
                      <Text className="velox-text-small font-medium text-gray-700">
                        {step.timeframe}
                      </Text>
                    </div>
                  </div>

                  <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 mt-auto">
                    {step.cta}
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Urgency Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="mb-16"
          >
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 border border-gray-200 rounded-xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {urgencyFactors.map((factor, index) => (
                  <motion.div
                    key={factor.title}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ duration: 0.4, delay: 1.2 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-3">
                      <factor.icon className="w-6 h-6 text-gray-600" />
                    </div>
                    <Text className="font-semibold text-gray-800 mb-2">
                      {factor.title}
                    </Text>
                    <Text className="velox-text-small text-gray-600">
                      {factor.description}
                    </Text>
                  </motion.div>
                ))}
              </div>

              <div className="w-full flex justify-center">
                <div className="max-w-3xl px-4">
                  <Text className="text-base font-semibold text-gray-800 leading-relaxed text-center">
                    Choose the next step that fits where you are today. Just choose soon.
                  </Text>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Final Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 1.6 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-xl p-8 text-white">
              <div className="w-full flex justify-center mb-4">
                <div className="max-w-4xl px-4">
                  <Text className="text-xl font-semibold leading-relaxed text-center">
                    The business that learns to delegate intelligently today leads the market tomorrow.
                  </Text>
                </div>
              </div>

              <div className="border-t border-blue-600 pt-6 mt-6">
                <div className="w-full flex justify-center">
                  <div className="max-w-3xl px-4">
                    <Text className="text-blue-200 text-lg font-medium leading-relaxed text-center">
                      The business that learns to delegate intelligently today leads the market tomorrow.
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}
