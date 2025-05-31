"use client"

import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import {
  ArrowDown,
  CheckCircle,
  Settings,
  Search
} from "lucide-react"

import { Container } from "@/components/layout/container"
import { Heading, Text } from "@/components/ui/typography"
import { Button } from "@/components/ui/button"
import { CTATracker } from "@/components/analytics/cta-tracker"

export function HybridApproachSection() {
  const [isVisible, setIsVisible] = useState(false)

  // Intersection observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('workflow-mechanism-section')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <div id="workflow-mechanism-section" className="py-20 bg-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23374151' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <Container className="relative z-10">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <Heading level="2" className="text-4xl md:text-5xl font-bold text-deep-blue mb-3">
            How It Actually Works
          </Heading>
          <Text className="text-xl text-gray-600">
            The simple truth about what we do
          </Text>
        </motion.div>

        {/* Three Approaches Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <Heading level="3" className="text-2xl font-bold text-deep-blue mb-2">
              Three Ways to Handle Business Work
            </Heading>
            <Text className="text-gray-600">Most businesses use one of these approaches</Text>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* All Human Approach */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-amber-50 border border-amber-300 rounded-2xl p-6"
            >
              <div className="text-center mb-4">
                <div className="text-3xl mb-2">👥</div>
                <Text className="font-bold text-amber-900">All Human Team</Text>
                <Text className="text-sm text-amber-700">Traditional approach</Text>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-amber-600">⚠️</span>
                  <Text className="text-sm text-amber-800">Expensive to scale</Text>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-amber-600">⚠️</span>
                  <Text className="text-sm text-amber-800">Slow on routine work</Text>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-500">✅</span>
                  <Text className="text-sm text-amber-800">Good at complex decisions</Text>
                </div>
              </div>
            </motion.div>

            {/* Conventional AI Approach */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-gray-50 border border-gray-300 rounded-2xl p-6"
            >
              <div className="text-center mb-4">
                <div className="text-3xl mb-2">🤖</div>
                <Text className="font-bold text-gray-800">Conventional AI Automation</Text>
                <Text className="text-sm text-gray-600">Robot does everything</Text>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-red-500">❌</span>
                  <Text className="text-sm text-gray-700">Breaks when confused</Text>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-red-500">❌</span>
                  <Text className="text-sm text-gray-700">Makes expensive mistakes</Text>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-500">✅</span>
                  <Text className="text-sm text-gray-700">Fast on easy tasks</Text>
                </div>
              </div>
            </motion.div>

            {/* Veloxforce Hybrid */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-400 rounded-2xl p-6 relative"
            >
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                  BEST OF BOTH
                </div>
              </div>

              <div className="text-center mb-4">
                <div className="text-3xl mb-2">🤖👤</div>
                <Text className="font-bold text-blue-900">Veloxforce Hybrid</Text>
                <Text className="text-sm text-blue-700">Digital Employee + Human team</Text>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-green-500">✅</span>
                  <Text className="text-sm text-blue-800">Fast on easy work</Text>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-500">✅</span>
                  <Text className="text-sm text-blue-800">Smart on hard decisions</Text>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-500">✅</span>
                  <Text className="text-sm text-blue-800">Perfect teamwork</Text>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Flow Arrow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex justify-center mb-16"
        >
          <div className="w-16 h-16 bg-gradient-to-b from-gray-300 to-blue-300 rounded-full flex items-center justify-center">
            <ArrowDown className="h-8 w-8 text-white" />
          </div>
        </motion.div>

        {/* Simplified Process Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <Heading level="3" className="text-2xl font-bold text-deep-blue mb-2">
              How We Handle Your Work From Start to Finish
            </Heading>
            <Text className="text-gray-600">Every task follows our proven quality framework</Text>
          </div>

          <div className="bg-gradient-to-r from-gray-50 to-blue-50 border border-gray-200 rounded-2xl p-8">
            {/* Simple 3-Step Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {/* Step 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 1.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="h-8 w-8 text-gray-600" />
                </div>
                <Text className="font-bold text-gray-900 mb-2">We Understand</Text>
                <Text className="text-sm text-gray-600">Every task gets the right approach from the start</Text>
              </motion.div>

              {/* Step 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 1.3 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="h-8 w-8 text-blue-600" />
                </div>
                <Text className="font-bold text-blue-900 mb-2">AI + Human Intelligence</Text>
                <Text className="text-sm text-blue-700">Smart routing ensures perfect execution every time</Text>
              </motion.div>

              {/* Step 3 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 1.4 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <Text className="font-bold text-green-900 mb-2">Delivered Perfectly</Text>
                <Text className="text-sm text-green-700">99.9% accuracy with human-verified excellence</Text>
              </motion.div>
            </div>

            {/* Key Benefits */}
            <div className="bg-white rounded-xl p-6 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-green-600 mb-1">85%</div>
                  <Text className="text-sm text-gray-600">Tasks completed automatically in 2-5 minutes</Text>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600 mb-1">99.9%</div>
                  <Text className="text-sm text-gray-600">Accuracy with our quality framework</Text>
                </div>
                <div>
                  <div className="text-2xl font-bold text-orange-600 mb-1">24/7</div>
                  <Text className="text-sm text-gray-600">Available with human oversight when needed</Text>
                </div>
              </div>
            </div>

            {/* CTA to Learn More */}
            <div className="text-center">
              <Text className="text-gray-700 mb-6">
                Want to see exactly how this works for different types of business tasks?
              </Text>
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                onClick={() => window.location.href = '/how-it-works'}
              >
                See The Complete Process Framework
                <ArrowDown className="ml-2 h-5 w-5 rotate-90" />
              </Button>
              <Text className="text-sm text-gray-500 mt-3">
                Detailed breakdown of our 3-flow system and quality assurance
              </Text>
            </div>
          </div>
        </motion.div>

        {/* Simple Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.8 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-br from-blue-50 to-green-50 border-2 border-blue-300 rounded-2xl p-8">
            <div className="text-center mb-8">
              <Heading level="3" className="text-2xl font-bold text-deep-blue mb-4">
                The Result: Perfect Business Operations
              </Heading>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center bg-white rounded-xl p-6 border border-blue-200">
                <div className="text-3xl mb-3">⚡</div>
                <Text className="font-bold text-blue-900 mb-2">Fast Automation</Text>
                <Text className="text-sm text-blue-700">Easy work happens instantly</Text>
              </div>

              <div className="text-center bg-white rounded-xl p-6 border border-blue-200">
                <div className="text-3xl mb-3">🎯</div>
                <Text className="font-bold text-blue-900 mb-2">Smart Decisions</Text>
                <Text className="text-sm text-blue-700">Important choices get human attention</Text>
              </div>

              <div className="text-center bg-white rounded-xl p-6 border border-blue-200">
                <div className="text-3xl mb-3">📈</div>
                <Text className="font-bold text-blue-900 mb-2">Nothing Missed</Text>
                <Text className="text-sm text-blue-700">Every task gets handled properly</Text>
              </div>
            </div>

            {/* Learn More Button */}
            <div className="text-center">
              <Text className="text-blue-700 mb-4">Want to see exactly how this works in detail?</Text>
              <Button
                variant="outline"
                size="lg"
                className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300"
                onClick={() => window.open('/how-it-works', '_blank')}
              >
                See The Complete Process
                <ArrowDown className="ml-2 h-4 w-4 rotate-90" />
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 2.0 }}
          className="text-center"
        >
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-xl p-8 max-w-2xl mx-auto">
            <Heading level="3" className="text-2xl font-bold text-blue-900 mb-4">
              See How This Works For Your Business
            </Heading>

            <Text className="text-blue-800 mb-6">
              Most business owners are surprised how much of their daily work can flow through this system.
            </Text>

            <CTATracker
              eventName="how_it_works_cta_clicked"
              eventData={{
                section: "how_it_works",
                cta_text: "Discover What You're Losing Daily",
                position: "bottom"
              }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                Discover What You're Losing Daily
                <ArrowDown className="ml-2 h-5 w-5 rotate-90" />
              </Button>
            </CTATracker>

            <Text className="text-sm text-gray-600 mt-4">
              See exactly which of your processes could work this way
            </Text>
          </div>
        </motion.div>
      </Container>
    </div>
  )
}