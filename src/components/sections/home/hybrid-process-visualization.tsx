"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  FileText,
  Zap,
  RotateCcw,
  Users,
  CheckCircle,
  ArrowRight,
  Clock,
  TrendingUp,
  AlertTriangle
} from "lucide-react"

import { Container } from "@/components/layout/container"
import { Heading, Text } from "@/components/ui/typography"

interface ProcessStep {
  id: string
  title: string
  description: string
  icon: React.ComponentType<any>
  color: string
  delay: number
}

const processSteps: ProcessStep[] = [
  {
    id: "input",
    title: "Document Enters",
    description: "Invoice, order, or any business document",
    icon: FileText,
    color: "gray",
    delay: 0
  },
  {
    id: "ai",
    title: "AI Processes",
    description: "Extracts data, validates format, checks rules",
    icon: Zap,
    color: "blue",
    delay: 0.5
  },
  {
    id: "router",
    title: "Smart Router",
    description: "Evaluates complexity and routes intelligently",
    icon: RotateCcw,
    color: "purple",
    delay: 1.0
  },
  {
    id: "human",
    title: "Human Expert",
    description: "Handles exceptions and complex decisions",
    icon: Users,
    color: "green",
    delay: 1.5
  },
  {
    id: "output",
    title: "Perfect Output",
    description: "Guaranteed accuracy, delivered on time",
    icon: CheckCircle,
    color: "blue",
    delay: 2.0
  }
]

const timeRecoveryData = [
  { task: "Invoice Processing", before: "40 hrs/week", after: "2 hrs/week", savings: "38 hrs" },
  { task: "Customer Onboarding", before: "15 hrs/week", after: "3 hrs/week", savings: "12 hrs" },
  { task: "Order Management", before: "25 hrs/week", after: "5 hrs/week", savings: "20 hrs" },
]

export function HybridProcessVisualization() {
  const [activeStep, setActiveStep] = useState(0)
  const [previousStep, setPreviousStep] = useState(-1)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true)
      setPreviousStep(activeStep)
      setActiveStep((prev) => (prev + 1) % processSteps.length)

      // Clear previous step after a delay to allow smooth exit
      setTimeout(() => {
        setPreviousStep(-1)
        setIsAnimating(false)
      }, 1200)
    }, 4000)

    return () => clearInterval(interval)
  }, [activeStep])

  const getStepColor = (step: ProcessStep, isActive: boolean) => {
    if (isActive) {
      switch (step.color) {
        case "blue": return "from-blue-500 to-blue-600"
        case "purple": return "from-purple-500 to-purple-600"
        case "green": return "from-green-500 to-green-600"
        default: return "from-gray-500 to-gray-600"
      }
    }
    return "from-gray-300 to-gray-400"
  }

  return (
    <div className="space-y-16">
      {/* Main Process Flow */}
      <div className="text-center mb-12 max-w-4xl mx-auto">
        <Heading level="3" className="text-3xl font-bold text-deep-blue mb-4">
          Watch Your Process Transform in Real-Time
        </Heading>
        <Text className="text-lg text-gray-600 mx-auto">
          See exactly how documents flow through our hybrid intelligence system
        </Text>
      </div>

      {/* Animated Process Steps */}
      <div className="relative">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-4">
          {processSteps.map((step, index) => (
            <React.Fragment key={step.id}>
              <motion.div
                className="flex flex-col items-center text-center max-w-xs"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: step.delay }}
              >
                {/* Step Icon */}
                <motion.div
                  className={`w-20 h-20 rounded-full flex items-center justify-center mb-4 bg-gradient-to-br ${getStepColor(step, activeStep === index)} relative`}
                  animate={{
                    scale: activeStep === index ? [1, 1.15, 1] : 1,
                    boxShadow: activeStep === index
                      ? ["0 10px 25px rgba(59, 130, 246, 0.3)", "0 20px 40px rgba(59, 130, 246, 0.5)", "0 10px 25px rgba(59, 130, 246, 0.3)"]
                      : "0 5px 15px rgba(0, 0, 0, 0.1)"
                  }}
                  transition={{
                    scale: {
                      duration: activeStep === index ? 1.5 : (previousStep === index ? 1.0 : 0.8),
                      ease: activeStep === index ? "easeInOut" : "easeOut",
                      repeat: activeStep === index ? Infinity : 0,
                      repeatType: "loop",
                      delay: previousStep === index ? 0.3 : 0
                    },
                    boxShadow: {
                      duration: activeStep === index ? 1.2 : (previousStep === index ? 0.8 : 0.6),
                      ease: "easeInOut",
                      delay: previousStep === index ? 0.2 : 0
                    },
                    backgroundColor: {
                      duration: 0.8,
                      ease: "easeInOut",
                      delay: previousStep === index ? 0.2 : 0
                    }
                  }}
                >
                  <step.icon className="h-8 w-8 text-white" />
                </motion.div>

                {/* Step Content */}
                <Heading level="4" className="text-lg font-semibold text-deep-blue mb-2">
                  {step.title}
                </Heading>
                <Text className="text-sm text-gray-600">
                  {step.description}
                </Text>

                {/* Active Step Indicator with Metrics */}
                <AnimatePresence>
                  {activeStep === index && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.8, y: -10 }}
                      transition={{
                        duration: 0.6,
                        ease: "easeOut",
                        type: "spring",
                        stiffness: 300,
                        damping: 25
                      }}
                      className="mt-3 px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full"
                    >
                      {step.id === "ai" && "Processing (1000+ docs/hour)"}
                      {step.id === "output" && "Perfect Output (99.8% accuracy)"}
                      {step.id !== "ai" && step.id !== "output" && "Processing..."}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Arrow between steps */}
              {index < processSteps.length - 1 && (
                <motion.div
                  className="hidden lg:block"
                  animate={{
                    x: activeStep === index ? [0, 15, 0] : 0,
                    opacity: activeStep === index ? [0.4, 1, 0.4] : 0.3,
                    scale: activeStep === index ? [1, 1.1, 1] : 1
                  }}
                  transition={{
                    x: {
                      duration: activeStep === index ? 1.5 : 0.7,
                      ease: activeStep === index ? "easeInOut" : "easeOut",
                      repeat: activeStep === index ? Infinity : 0,
                      repeatType: "loop"
                    },
                    opacity: {
                      duration: activeStep === index ? 1.2 : 0.5,
                      ease: "easeInOut"
                    },
                    scale: {
                      duration: activeStep === index ? 1.5 : 0.6,
                      ease: activeStep === index ? "easeInOut" : "easeOut",
                      repeat: activeStep === index ? Infinity : 0,
                      repeatType: "loop"
                    }
                  }}
                >
                  <ArrowRight className="h-6 w-6 text-blue-500" />
                </motion.div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Time Recovery Visualization */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
        <div className="text-center mb-8 max-w-4xl mx-auto">
          <Heading level="4" className="text-2xl font-bold text-deep-blue mb-4">
            Time Recovery in Action
          </Heading>
          <Text className="text-gray-600 mx-auto">
            See how automation reclaims your strategic hours
          </Text>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {timeRecoveryData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-xl p-6 shadow-sm"
            >
              <Text className="font-semibold text-gray-800 mb-4 text-center">
                {item.task}
              </Text>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Text className="text-sm text-red-600">Before:</Text>
                  <Text className="font-medium text-red-600">{item.before}</Text>
                </div>

                <div className="flex items-center justify-between">
                  <Text className="text-sm text-green-600">After:</Text>
                  <Text className="font-medium text-green-600">{item.after}</Text>
                </div>

                <div className="border-t pt-3">
                  <div className="flex items-center justify-between">
                    <Text className="text-sm font-medium text-blue-800">Saved:</Text>
                    <Text className="font-bold text-blue-800">{item.savings}</Text>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-8 max-w-3xl mx-auto">
          <Text className="text-lg font-bold text-blue-800 mb-2">
            Total Weekly Recovery: 70+ Strategic Hours
          </Text>
          <Text className="text-gray-600 mx-auto">
            That's nearly 2 full workdays back for growth initiatives
          </Text>
        </div>
      </div>
    </div>
  )
}
