"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { DollarSign, Clock, TrendingUp, Zap, Users, Calculator } from "lucide-react"

import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"

const traditionalEmployee = {
  title: "Traditional Operations Employee",
  items: [
    { label: "Salary", value: "€60,000 minimum", icon: DollarSign },
    { label: "Total cost", value: "€78,000+ with overhead", icon: Calculator },
    { label: "Capacity", value: "40 hours/week", icon: Clock },
    { label: "Scaling", value: "Hire another person", icon: Users }
  ],
  color: "red"
}

const hybridService = {
  title: "Hybrid Intelligence Service",
  items: [
    { label: "Monthly", value: "€2,000-3,000", icon: DollarSign },
    { label: "Setup", value: "€3,000-6,000 (once)", icon: Calculator },
    { label: "Capacity", value: "Unlimited", icon: Zap },
    { label: "Scaling", value: "Instant", icon: TrendingUp }
  ],
  color: "green"
}

const growthScenarios = [
  {
    title: "Take on more clients",
    description: "Handle 2-3x current volume without hiring",
    impact: "€100,000+ additional revenue"
  },
  {
    title: "Enter new markets",
    description: "Expand services without operational burden",
    impact: "€150,000+ new opportunities"
  },
  {
    title: "Launch delayed projects",
    description: "Finally execute that strategic initiative",
    impact: "€200,000+ competitive advantage"
  }
]

export function NumbersSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <Section padding="lg" background="white-to-light">
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
              The Numbers Make Sense
            </Heading>
            <div className="w-full flex justify-center">
              <div className="max-w-2xl px-4">
                <Text className="text-lg text-gray-600 leading-relaxed text-center">
                  Let's be <span className="font-semibold text-gray-800">practical about costs</span>.
                </Text>
              </div>
            </div>
          </motion.div>

          {/* Cost Comparison */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
          >
            {/* Traditional Employee */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-md transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mr-4">
                  <Users className="w-6 h-6 text-gray-700" />
                </div>
                <Heading level="3" className="velox-text-h3 text-gray-800">
                  {traditionalEmployee.title}
                </Heading>
              </div>

              <div className="space-y-4">
                {traditionalEmployee.items.map((item, index) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200"
                  >
                    <div className="flex items-center">
                      <item.icon className="w-4 h-4 text-gray-600 mr-3" />
                      <Text className="font-medium text-gray-800">{item.label}:</Text>
                    </div>
                    <Text className="font-semibold text-gray-700">{item.value}</Text>
                  </div>
                ))}
              </div>
            </div>

            {/* Hybrid Service */}
            <div className="velox-card-advantage p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <Zap className="w-6 h-6 text-blue-600" />
                </div>
                <Heading level="3" className="velox-text-h3 text-blue-800">
                  {hybridService.title}
                </Heading>
              </div>

              <div className="space-y-4">
                {hybridService.items.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 10 }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    className="flex items-center justify-between p-3 bg-blue-50 rounded-lg border border-blue-200"
                  >
                    <div className="flex items-center">
                      <item.icon className="w-4 h-4 text-blue-600 mr-3" />
                      <Text className="font-medium text-gray-800">{item.label}:</Text>
                    </div>
                    <Text className="font-semibold text-blue-700">{item.value}</Text>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Annual Savings */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mb-16"
          >
            <div className="velox-card-advantage p-8">
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <Calculator className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <Text className="text-sm text-gray-600 mb-1">Annual difference:</Text>
                  <Heading level="2" className="text-4xl font-bold text-blue-800">
                    €40,000-50,000 saved
                  </Heading>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Real Value */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="mb-16"
          >
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 mb-8 max-w-3xl mx-auto text-center">
              <Text className="text-lg font-semibold text-blue-800 mb-4">
                But the real value isn't the savings.
              </Text>
              <Text className="text-base text-blue-700 leading-relaxed">
                It's what you can do with <span className="font-semibold text-gray-800">unlimited capacity</span>. Take on more clients. Enter new markets. Launch that project you've been delaying. The <span className="font-semibold text-blue-800">growth potential</span> is worth more than the cost savings.
              </Text>
            </div>

            {/* Growth Scenarios */}
            <Heading level="3" className="velox-text-h3 text-center mb-8">
              Growth Opportunities Unlocked
            </Heading>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {growthScenarios.map((scenario, index) => (
                <motion.div
                  key={scenario.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                  className="bg-white border border-gray-200 rounded-lg p-6 text-center hover:shadow-md transition-shadow duration-300"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-6 h-6 text-blue-600" />
                  </div>
                  <Heading level="4" className="font-semibold text-gray-900 mb-3">
                    {scenario.title}
                  </Heading>
                  <Text className="text-base text-gray-600 mb-4 leading-relaxed">
                    {scenario.description}
                  </Text>
                  <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
                    <Text className="font-semibold text-blue-800">
                      {scenario.impact}
                    </Text>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ROI Calculator CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 1.6 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-8 text-white">
              <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mx-auto mb-4">
                <Calculator className="w-8 h-8 text-blue-600" />
              </div>
              <Heading level="3" className="text-2xl font-bold mb-4">
                Calculate Your Specific ROI
              </Heading>
              <Text className="text-blue-100 mb-6 max-w-2xl mx-auto">
                See exactly how much you could save and grow with your current volumes and processes.
              </Text>
              <button className="velox-cta-secondary bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300">
                Get Your ROI Analysis
              </button>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}
