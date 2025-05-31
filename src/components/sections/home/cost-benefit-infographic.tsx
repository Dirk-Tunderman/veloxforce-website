"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  AlertTriangle,
  CheckCircle
} from "lucide-react"

import { Heading, Text } from "@/components/ui/typography"

interface TimelinePoint {
  month: number
  withAutomation: number
  withoutAutomation: number
  label: string
  highlight?: boolean
}

const timelineData: TimelinePoint[] = [
  { month: 0, withAutomation: -15000, withoutAutomation: 0, label: "Start" },
  { month: 1, withAutomation: -10000, withoutAutomation: -2400, label: "Month 1" },
  { month: 2, withAutomation: -5000, withoutAutomation: -4800, label: "Month 2" },
  { month: 3, withAutomation: 0, withoutAutomation: -7200, label: "Break Even", highlight: true },
  { month: 6, withAutomation: 15000, withoutAutomation: -14400, label: "6 Months" },
  { month: 12, withAutomation: 45000, withoutAutomation: -28800, label: "1 Year", highlight: true },
  { month: 24, withAutomation: 105000, withoutAutomation: -57600, label: "2 Years" },
  { month: 36, withAutomation: 165000, withoutAutomation: -86400, label: "3 Years", highlight: true }
]



export function CostBenefitInfographic() {
  const [activePoint, setActivePoint] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    const element = document.getElementById('cost-benefit-section')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const interval = setInterval(() => {
      setActivePoint((prev) => (prev + 1) % timelineData.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [isVisible])

  const formatCurrency = (amount: number) => {
    const abs = Math.abs(amount)
    if (abs >= 1000) {
      return `${amount < 0 ? '-' : '+'}€${(abs / 1000).toFixed(0)}k`
    }
    return `${amount < 0 ? '-' : '+'}€${abs.toLocaleString()}`
  }

  const currentPoint = timelineData[activePoint]

  return (
    <div id="cost-benefit-section" className="space-y-16">
      {/* Header */}
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <Heading level="3" className="text-3xl font-bold text-deep-blue mb-4">
            The Cost of Waiting vs. Acting Now
          </Heading>
          <Text className="text-lg text-gray-600 max-w-3xl mx-auto">
            Every day you delay automation, competitors gain ground. See the real financial impact of action vs. inaction.
          </Text>
        </motion.div>
      </div>

      {/* Main Infographic */}
      <div className="relative rounded-2xl p-6 lg:p-10 xl:p-12 mx-auto max-w-5xl overflow-hidden">
        {/* Elegant gradient background */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-slate-50 via-blue-50/80 to-indigo-50/60"></div>

        {/* Subtle overlay for depth */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-white/20 via-transparent to-white/10"></div>

        {/* Content wrapper */}
        <div className="relative z-10">



        {/* Split Comparison */}
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* VS Separator */}
          <div className="hidden lg:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="bg-white/90 backdrop-blur-sm border-2 border-gray-200 rounded-full w-12 h-12 flex items-center justify-center shadow-sm">
              <Text className="font-semibold text-gray-500 text-sm">vs</Text>
            </div>
          </div>

          {/* With Automation Path */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-white/50 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                <CheckCircle className="h-5 w-5 text-emerald-600" />
              </div>
              <div>
                <Heading level="4" className="text-lg font-semibold text-gray-900">
                  With Veloxforce
                </Heading>
                <Text className="text-sm text-emerald-600 font-medium">Strategic Investment</Text>
              </div>
            </div>

            <div className="text-center mb-6">
              <motion.div
                key={`with-${activePoint}`}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className={`text-3xl lg:text-4xl font-bold mb-1 ${
                  currentPoint.withAutomation >= 0 ? 'text-emerald-600' : 'text-orange-600'
                }`}
              >
                {formatCurrency(currentPoint.withAutomation)}
              </motion.div>
              <Text className="text-sm text-gray-600 font-medium">Net Position</Text>
            </div>

            {currentPoint.month === 0 && (
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <Text className="text-sm text-gray-600">Initial Investment:</Text>
                  <Text className="font-medium text-orange-600">€15,000</Text>
                </div>
                <div className="flex justify-between items-center">
                  <Text className="text-sm text-gray-600">Setup & Training:</Text>
                  <Text className="font-medium text-gray-700">Included</Text>
                </div>
              </div>
            )}

            {currentPoint.month >= 3 && (
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <Text className="text-sm text-gray-600">Monthly Savings:</Text>
                  <Text className="font-semibold text-emerald-600">€5,000</Text>
                </div>
                <div className="flex justify-between items-center">
                  <Text className="text-sm text-gray-600">Efficiency Gain:</Text>
                  <Text className="font-semibold text-blue-600">300%</Text>
                </div>
              </div>
            )}
          </motion.div>

          {/* Without Automation Path */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-white/50 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                <AlertTriangle className="h-5 w-5 text-red-600" />
              </div>
              <div>
                <Heading level="4" className="text-lg font-semibold text-gray-900">
                  Without Action
                </Heading>
                <Text className="text-sm text-red-600 font-medium">Operational Drain Cost</Text>
              </div>
            </div>

            <div className="text-center mb-6">
              <motion.div
                key={`without-${activePoint}`}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-3xl lg:text-4xl font-bold text-red-600 mb-1"
              >
                {formatCurrency(currentPoint.withoutAutomation)}
              </motion.div>
              <Text className="text-sm text-gray-600 font-medium">Cumulative Loss</Text>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <Text className="text-sm text-gray-600">Monthly Inefficiency:</Text>
                <Text className="font-semibold text-red-600">€2,400</Text>
              </div>
              <div className="flex justify-between items-center">
                <Text className="text-sm text-gray-600">Opportunity Cost:</Text>
                <Text className="font-semibold text-orange-600">Growing</Text>
              </div>
              {currentPoint.month >= 12 && (
                <div className="flex justify-between items-center">
                  <Text className="text-sm text-gray-600">Competitor Gap:</Text>
                  <Text className="font-semibold text-red-600">Widening</Text>
                </div>
              )}
            </div>
          </motion.div>
        </div>

        {/* Timeline Visualization */}
        <div className="relative">
          <div className="flex justify-between items-end mb-8">
            {timelineData.map((point, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className={`w-3 h-3 rounded-full mb-2 transition-all duration-500 ${
                  activePoint === index
                    ? 'bg-blue-600 scale-150 shadow-lg'
                    : point.highlight
                      ? 'bg-green-500'
                      : 'bg-gray-300'
                }`} />
                <Text className={`text-xs text-center transition-all duration-300 ${
                  activePoint === index ? 'font-bold text-blue-600' : 'text-gray-500'
                }`}>
                  {point.label}
                </Text>
              </motion.div>
            ))}
          </div>

          {/* Timeline Line */}
          <div className="absolute top-1.5 left-0 right-0 h-0.5 bg-gray-200">
            <motion.div
              className="h-full bg-gradient-to-r from-blue-500 to-green-500"
              initial={{ width: "0%" }}
              animate={isVisible ? { width: `${(activePoint / (timelineData.length - 1)) * 100}%` } : {}}
              transition={{ duration: 0.8 }}
            />
          </div>
        </div>
        </div> {/* Close content wrapper */}
      </div> {/* Close main infographic */}

    </div>
  )
}
