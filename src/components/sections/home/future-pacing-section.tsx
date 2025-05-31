"use client"

import React from "react"
import { motion } from "framer-motion"
import { Calendar, TrendingUp, Users, Target, CheckCircle } from "lucide-react"

import { Container } from "@/components/layout/container"
import { Heading, Text } from "@/components/ui/typography"

const timelineScenarios = [
  {
    timeframe: "30 Days From Now",
    icon: Calendar,
    scenario: "Your First Process is Running Flawlessly",
    details: [
      "You're no longer checking if invoices were processed correctly",
      "You've reclaimed 8 hours weekly for strategic thinking"
    ],
    emotion: "Relief and confidence replace daily operational anxiety",
    color: "blue"
  },
  {
    timeframe: "90 Days From Now",
    icon: TrendingUp,
    scenario: "Multiple Processes Are Automated",
    details: [
      "Customer onboarding happens while you sleep",
      "Your profit margins improve as operational costs drop"
    ],
    emotion: "You feel like you're finally running the business, not the other way around",
    color: "green"
  },
  {
    timeframe: "6 Months From Now",
    icon: Target,
    scenario: "You're the Leader You Always Wanted to Be",
    details: [
      "Competitors wonder how you scaled so efficiently",
      "You're home for dinner, planning growth instead of fighting fires"
    ],
    emotion: "You wonder why you waited so long to make this transformation",
    color: "purple"
  }
]

const transformationMoments = [
  {
    moment: "The first week",
    realization: "when you realize you haven't thought about that process all day"
  },
  {
    moment: "The first month",
    realization: "when your team starts asking for more challenging work"
  },
  {
    moment: "The third month",
    realization: "when you see your profit margins improving without raising prices"
  },
  {
    moment: "The sixth month",
    realization: "when competitors start asking how you're scaling so fast"
  }
]

export function FuturePacingSection() {
  return (
    <div className="space-y-12">
      {/* Main Timeline */}
      <div className="text-center mb-12 max-w-4xl mx-auto">
        <Heading level="3" className="text-3xl font-bold text-deep-blue mb-4">
          Picture This: Your Business 6 Months From Now
        </Heading>
        <Text className="text-lg text-gray-600 mx-auto">
          Here's exactly what leaders experience after implementing our hybrid automation
        </Text>
      </div>

      <div className="space-y-8">
        {timelineScenarios.map((scenario, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            className={`relative ${
              scenario.color === 'blue' ? 'bg-gradient-to-r from-blue-50 to-blue-100' :
              scenario.color === 'green' ? 'bg-gradient-to-r from-green-50 to-green-100' :
              'bg-gradient-to-r from-purple-50 to-purple-100'
            } rounded-2xl p-8 border-2 ${
              scenario.color === 'blue' ? 'border-blue-200' :
              scenario.color === 'green' ? 'border-green-200' : 'border-purple-200'
            }`}
          >
            {/* Timeline Indicator */}
            <div className="flex items-center gap-4 mb-6">
              <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
                scenario.color === 'blue' ? 'bg-blue-600' :
                scenario.color === 'green' ? 'bg-green-600' : 'bg-purple-600'
              }`}>
                <scenario.icon className="h-8 w-8 text-white" />
              </div>
              <div>
                <Text className={`text-sm font-medium ${
                  scenario.color === 'blue' ? 'text-blue-700' :
                  scenario.color === 'green' ? 'text-green-700' : 'text-purple-700'
                }`}>
                  {scenario.timeframe}
                </Text>
                <Heading level="4" className={`text-xl font-bold ${
                  scenario.color === 'blue' ? 'text-blue-900' :
                  scenario.color === 'green' ? 'text-green-900' : 'text-purple-900'
                }`}>
                  {scenario.scenario}
                </Heading>
              </div>
            </div>

            {/* Scenario Details */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <Text className="font-semibold text-gray-800 mb-3">What You'll Experience:</Text>
                <ul className="space-y-2">
                  {scenario.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start gap-3">
                      <CheckCircle className={`h-5 w-5 mt-0.5 ${
                        scenario.color === 'blue' ? 'text-blue-600' :
                        scenario.color === 'green' ? 'text-green-600' : 'text-purple-600'
                      }`} />
                      <Text className="text-gray-700">{detail}</Text>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <Text className="font-semibold text-gray-800 mb-2">How You'll Feel:</Text>
                <Text className="italic text-gray-700">"{scenario.emotion}"</Text>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Transformation Moments */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8 border border-blue-200"
      >
        <div className="text-center mb-8 max-w-4xl mx-auto">
          <Heading level="4" className="text-2xl font-bold text-deep-blue mb-4">
            The Moments That Will Surprise You
          </Heading>
          <Text className="text-gray-600 mx-auto">
            Our clients consistently tell us about these unexpected realizations
          </Text>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {transformationMoments.map((moment, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-4 border border-blue-200"
            >
              <Text className="font-semibold text-blue-800 mb-2">{moment.moment}</Text>
              <Text className="text-gray-700 italic">"{moment.realization}"</Text>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-8 p-6 bg-blue-100 rounded-lg border border-blue-300 max-w-4xl mx-auto">
          <Text className="text-lg font-bold text-blue-900 mb-2">
            Six months from now, you'll wonder why you waited so long.
          </Text>
          <Text className="text-blue-800 mb-4">
            Your competitors will ask how you're scaling so efficiently. You'll have the time freedom you started your business for.
          </Text>
          <Text className="text-sm font-medium text-blue-700">
            The only question is: will you be looking back with satisfaction, or still looking forward with frustration?
          </Text>
        </div>
      </motion.div>
    </div>
  )
}
