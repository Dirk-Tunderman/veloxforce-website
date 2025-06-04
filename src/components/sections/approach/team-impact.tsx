"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Users, TrendingDown, TrendingUp, ArrowRight, Calculator, Heart, Lightbulb } from "lucide-react"

import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"

const transformations = [
  {
    role: "Accountants",
    from: "Data entry",
    to: "Financial strategy",
    icon: Calculator,
    color: "blue"
  },
  {
    role: "Service reps",
    from: "Troubleshooting software",
    to: "Relationship managers",
    icon: Heart,
    color: "green"
  },
  {
    role: "Operations staff",
    from: "Manual processing",
    to: "Process innovators",
    icon: Lightbulb,
    color: "purple"
  }
]

const beforeAfterComparison = {
  before: {
    title: "Before: Traditional Automation",
    problems: [
      "Employees end up with harder jobs",
      "Troubleshooting software instead of helping customers",
      "Morale drops as work becomes less meaningful",
      "Good people leave for better opportunities"
    ],
    icon: TrendingDown,
    color: "red"
  },
  after: {
    title: "After: Hybrid Intelligence",
    benefits: [
      "Boring work disappears completely",
      "Focus shifts to interesting, skilled work",
      "Employees feel more valued and engaged",
      "Team thanks you for the upgrade"
    ],
    icon: TrendingUp,
    color: "green"
  }
}

export function TeamImpactSection() {
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
              What This Means for Your Team
            </Heading>
            <Text className="text-lg text-gray-600 max-w-2xl mx-auto">
              Let's talk about <span className="font-semibold text-gray-800">the human side</span>.
            </Text>
          </motion.div>

          {/* Problem with Traditional Automation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <div className="w-full flex justify-center mb-8">
              <div className="max-w-3xl px-4">
                <Text className="text-base text-gray-700 leading-relaxed text-center">
                  When businesses try automation alone, employees often end up with harder jobs - troubleshooting software instead of helping customers. Morale drops. Good people leave.
                </Text>
              </div>
            </div>

            <div className="w-full flex justify-center mb-8">
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 border border-blue-300 rounded-xl p-8 max-w-4xl mx-4 shadow-md">
                <Text className="text-xl font-bold text-blue-900 mb-4 text-center">
                  Our approach is different.
                </Text>
                <Text className="text-lg text-gray-700 leading-relaxed text-center">
                  The <span className="font-semibold text-blue-800">boring work disappears</span>. Data entry, report generation, routine processing - <span className="font-bold text-purple-800">gone</span>. What remains is the <span className="font-semibold text-blue-800">interesting work</span> that uses their real skills.
                </Text>
              </div>
            </div>
          </motion.div>

          {/* Before/After Comparison */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
          >
            {/* Before */}
            <div className="bg-gradient-to-br from-red-50 to-red-100 border border-red-300 rounded-xl p-8 shadow-sm">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center mr-4 shadow-md">
                  <beforeAfterComparison.before.icon className="w-8 h-8 text-white" />
                </div>
                <Heading level="3" className="text-xl font-bold text-red-900">
                  {beforeAfterComparison.before.title}
                </Heading>
              </div>
              <ul className="space-y-4">
                {beforeAfterComparison.before.problems.map((problem, index) => (
                  <motion.li
                    key={problem}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    className="flex items-start"
                  >
                    <div className="w-3 h-3 bg-red-600 rounded-full mt-1.5 mr-4 flex-shrink-0 shadow-sm"></div>
                    <Text className="text-base text-gray-700 leading-relaxed">{problem}</Text>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* After */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 border border-green-300 rounded-xl p-8 shadow-sm">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-700 rounded-xl flex items-center justify-center mr-4 shadow-md">
                  <beforeAfterComparison.after.icon className="w-8 h-8 text-white" />
                </div>
                <Heading level="3" className="text-xl font-bold text-green-900">
                  {beforeAfterComparison.after.title}
                </Heading>
              </div>
              <ul className="space-y-4">
                {beforeAfterComparison.after.benefits.map((benefit, index) => (
                  <motion.li
                    key={benefit}
                    initial={{ opacity: 0, x: 10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 10 }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    className="flex items-start"
                  >
                    <div className="w-3 h-3 bg-green-600 rounded-full mt-1.5 mr-4 flex-shrink-0 shadow-sm"></div>
                    <Text className="text-base text-gray-700 leading-relaxed">{benefit}</Text>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Role Transformations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mb-16"
          >
            <Heading level="3" className="text-2xl font-bold text-center mb-12 text-gray-900">
              We've seen:
            </Heading>

            <div className="space-y-8">
              {transformations.map((transformation, index) => (
                <motion.div
                  key={transformation.role}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 1.0 + index * 0.1 }}
                  className="grid grid-cols-1 md:grid-cols-5 gap-6 items-center bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-all duration-200"
                >
                  {/* Role */}
                  <div className="text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start mb-2">
                      <div className={`w-12 h-12 bg-gradient-to-br ${transformation.color === 'purple' ? 'from-purple-600 to-purple-700' : `from-${transformation.color}-600 to-${transformation.color}-700`} rounded-lg flex items-center justify-center mr-3 shadow-md`}>
                        <transformation.icon className="w-6 h-6 text-white" />
                      </div>
                      <Text className="font-bold text-gray-900 text-lg">{transformation.role}</Text>
                    </div>
                  </div>

                  {/* From */}
                  <div className="bg-gradient-to-br from-red-50 to-red-100 border border-red-300 rounded-lg p-4 text-center">
                    <Text className="text-sm text-gray-600 mb-1 font-medium">From:</Text>
                    <Text className="font-semibold text-red-800">{transformation.from}</Text>
                  </div>

                  {/* Arrow */}
                  <div className="flex justify-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-md">
                      <ArrowRight className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* To */}
                  <div className="bg-gradient-to-br from-green-50 to-green-100 border border-green-300 rounded-lg p-4 text-center">
                    <Text className="text-sm text-gray-600 mb-1 font-medium">To:</Text>
                    <Text className="font-semibold text-green-800">{transformation.to}</Text>
                  </div>

                  {/* Impact */}
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-700 rounded-lg flex items-center justify-center mx-auto shadow-md">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Conclusion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="text-center"
          >
            <div className="bg-gradient-to-br from-green-100 to-blue-100 border border-green-300 rounded-xl p-10 shadow-lg">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-blue-600 rounded-xl flex items-center justify-center mr-4 shadow-md">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <Heading level="3" className="text-2xl font-bold text-green-900">
                  Your team gets <span className="text-blue-900">elevated</span>, not replaced.
                </Heading>
              </div>
              <Text className="text-xl text-green-800 font-semibold leading-relaxed text-center">
                They'll <span className="font-bold text-blue-900">thank you</span> for it.
              </Text>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}
