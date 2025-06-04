"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Factory, Users, ShoppingCart, Clock, TrendingUp, CheckCircle } from "lucide-react"

import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"

const examples = [
  {
    icon: Factory,
    industry: "Manufacturing",
    process: "Quote Generation",
    before: {
      time: "3 hours daily on quotes",
      limitation: "Limited quote volume, slower response times"
    },
    after: {
      time: "20 minutes reviewing AI drafts",
      impact: "Handling 2x quote volume, winning more deals"
    },
    color: "blue"
  },
  {
    icon: Users,
    industry: "Services",
    process: "Client Onboarding",
    before: {
      time: "2 days per new client",
      limitation: "Bottleneck limiting new client capacity"
    },
    after: {
      time: "2 hours per new client",
      impact: "5x capacity, happier clients with faster starts"
    },
    color: "green"
  },
  {
    icon: ShoppingCart,
    industry: "E-commerce",
    process: "Order Processing",
    before: {
      time: "Manual entry limiting growth",
      limitation: "Peak season overwhelm, errors under pressure"
    },
    after: {
      time: "Automatic processing with exception handling",
      impact: "Peak season volume handled year-round"
    },
    color: "purple"
  }
]

const metrics = [
  { label: "Average Time Savings", value: "85%", icon: Clock },
  { label: "Capacity Increase", value: "3-5x", icon: TrendingUp },
  { label: "Error Reduction", value: "95%", icon: CheckCircle }
]

export function RealExamplesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <Section padding="lg" background="white-to-light">
      <Container>
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Heading level="2" className="velox-text-h2 mb-6">
              Real Examples from Recent Implementations
            </Heading>
            <div className="w-full flex justify-center">
              <div className="max-w-3xl px-4">
                <Text className="text-lg text-gray-600 leading-relaxed text-center">
                  See how businesses like yours transformed their operations
                </Text>
              </div>
            </div>
          </motion.div>

          {/* Examples Grid */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16"
          >
            {examples.map((example, index) => (
              <motion.div
                key={example.industry}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.2 }}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
              >
                {/* Header */}
                <div className="flex items-center mb-6">
                  <div className={`velox-icon-bg-${example.color === 'purple' ? 'warning' : example.color === 'green' ? 'success' : 'primary'} mr-4`}>
                    <example.icon className="velox-icon-lg" />
                  </div>
                  <div>
                    <Heading level="4" className="font-semibold text-gray-900 mb-1">
                      {example.industry}
                    </Heading>
                    <Text className="velox-text-small text-gray-600">
                      {example.process}
                    </Text>
                  </div>
                </div>

                {/* Before */}
                <div className="mb-6">
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <Text className="font-semibold text-red-800 mb-2">Before:</Text>
                    <Text className="velox-text-small text-red-700 mb-2">
                      {example.before.time}
                    </Text>
                    <Text className="velox-text-small text-red-600 italic">
                      {example.before.limitation}
                    </Text>
                  </div>
                </div>

                {/* After */}
                <div className="mb-6">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <Text className="font-semibold text-green-800 mb-2">After:</Text>
                    <Text className="velox-text-small text-green-700 mb-2">
                      {example.after.time}
                    </Text>
                    <Text className="velox-text-small text-green-600 italic">
                      {example.after.impact}
                    </Text>
                  </div>
                </div>

                {/* Impact Badge */}
                <div className="text-center">
                  <div className={`bg-${example.color === 'purple' ? 'purple' : example.color}-100 border border-${example.color === 'purple' ? 'purple' : example.color}-300 rounded-full px-4 py-2 inline-block`}>
                    <Text className={`font-semibold text-${example.color === 'purple' ? 'purple' : example.color}-800 velox-text-small`}>
                      ✓ Transformation Complete
                    </Text>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Metrics Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="mb-16"
          >
            <div className="bg-gradient-to-r from-blue-50 to-green-50 border border-blue-200 rounded-xl p-8">
              <Heading level="3" className="velox-text-h3 text-center mb-8 text-gray-800">
                Consistent Results Across Industries
              </Heading>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {metrics.map((metric, index) => (
                  <motion.div
                    key={metric.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                    className="text-center bg-white rounded-lg p-6 shadow-sm"
                  >
                    <div className="velox-icon-bg-primary mx-auto mb-4">
                      <metric.icon className="velox-icon-lg" />
                    </div>
                    <div className="text-3xl font-bold text-blue-600 mb-2">
                      {metric.value}
                    </div>
                    <Text className="font-medium text-gray-700">
                      {metric.label}
                    </Text>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Interactive Demo CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 1.6 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-xl p-8 text-white">
              <Heading level="3" className="text-2xl font-bold mb-4">
                See Your Process Transformation
              </Heading>
              <Text className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Get a detailed analysis of how your specific processes could be transformed with our hybrid approach.
              </Text>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300">
                  Analyze My Process
                </button>
                <button className="bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors duration-300 border border-blue-500">
                  View More Case Studies
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}
