"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { CheckCircle, XCircle, BarChart3, Settings, TrendingUp, DollarSign } from "lucide-react"

import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"

const goodFitCriteria = [
  {
    icon: BarChart3,
    title: "At least 100 monthly repetitive tasks",
    description: "Enough volume to see meaningful impact"
  },
  {
    icon: Settings,
    title: "Established processes (even if inefficient)",
    description: "We can optimize what exists"
  },
  {
    icon: TrendingUp,
    title: "Growth ambitions beyond daily operations",
    description: "Ready to scale beyond current limitations"
  },
  {
    icon: CheckCircle,
    title: "Comfort delegating to experts",
    description: "Trust professionals to handle your operations"
  }
]

const notGoodFitCriteria = [
  {
    icon: XCircle,
    title: "You process fewer than 50 items monthly",
    description: "Volume too low for meaningful automation"
  },
  {
    icon: XCircle,
    title: "Your processes need complete rebuilding",
    description: "Better to establish workflows first"
  },
  {
    icon: XCircle,
    title: "You prefer hands-on control of everything",
    description: "Delegation is essential for this to work"
  },
  {
    icon: XCircle,
    title: "You're only shopping for the cheapest option",
    description: "Quality and results require proper investment"
  }
]

export function BusinessFitSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <Section padding="lg" background="light-to-white">
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
              Is This Right for Your Business?
            </Heading>
            <div className="max-w-2xl mx-auto text-center">
              <Text className="text-lg text-gray-600">
                We work best with businesses that have <span className="font-semibold text-gray-800">these characteristics</span>:
              </Text>
            </div>
          </motion.div>

          {/* Good Fit Criteria */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <div className="velox-card-advantage p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <CheckCircle className="w-6 h-6 text-blue-600" />
                </div>
                <Heading level="3" className="velox-text-h3 text-blue-800">
                  Great Fit Indicators
                </Heading>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {goodFitCriteria.map((criteria, index) => (
                  <motion.div
                    key={criteria.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg"
                  >
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <criteria.icon className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <Text className="font-semibold text-blue-800 mb-2">
                        ✓ {criteria.title}
                      </Text>
                      <Text className="text-sm text-blue-700">
                        {criteria.description}
                      </Text>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Not Good Fit Criteria */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mb-16"
          >
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 hover:shadow-md transition-shadow duration-200">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mr-4">
                  <XCircle className="w-6 h-6 text-gray-700" />
                </div>
                <Heading level="3" className="velox-text-h3 text-gray-800">
                  We're probably not the right fit if:
                </Heading>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {notGoodFitCriteria.map((criteria, index) => (
                  <div
                    key={criteria.title}
                    className="flex items-start gap-4 p-4 bg-gray-100 rounded-lg"
                  >
                    <div className="w-8 h-8 bg-gray-200 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <criteria.icon className="w-4 h-4 text-gray-600" />
                    </div>
                    <div>
                      <Text className="font-semibold text-gray-800 mb-2">
                        ✗ {criteria.title}
                      </Text>
                      <Text className="text-sm text-gray-700">
                        {criteria.description}
                      </Text>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Success Pattern */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-xl p-8">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <TrendingUp className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <Heading level="3" className="velox-text-h3 text-blue-800 mb-2">
                    The pattern is clear:
                  </Heading>
                  <Text className="text-lg text-blue-700 font-medium leading-relaxed text-center">
                    Businesses ready to scale thrive with this approach.
                  </Text>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="text-3xl font-bold text-blue-600 mb-2">100+</div>
                    <Text className="text-sm text-gray-600">Monthly tasks</Text>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="text-3xl font-bold text-blue-600 mb-2">3x</div>
                    <Text className="text-sm text-gray-600">Growth potential</Text>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="text-3xl font-bold text-blue-600 mb-2">90%</div>
                    <Text className="text-sm text-gray-600">Time savings</Text>
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
