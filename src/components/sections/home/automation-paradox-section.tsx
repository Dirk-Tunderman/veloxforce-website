"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import { Users, Bot, CheckCircle, X } from "lucide-react"

import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"

export function AutomationParadoxSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <Section padding="lg" background="light-blue">
      <Container>
        {/* Main Section Header */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <Heading level="2" className="velox-text-h1 mb-6">
            How We Make Work Disappear (Without You Managing Technology)
          </Heading>
          <Text className="velox-text-lead max-w-3xl mx-auto">
            A unique approach that combines AI efficiency with human reliability
          </Text>
        </div>

        {/* Column Headers */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8 max-w-6xl mx-auto">
          <div className="text-center">
            <Heading level="3" className="velox-text-h3 text-gray-700">
              What Most Do
            </Heading>
          </div>
          <div className="text-center">
            <Heading level="3" className="velox-text-h3 text-gray-700">
              What Tech Promises
            </Heading>
          </div>
          <div className="text-center">
            <Heading level="3" className="velox-text-h3 text-blue-900">
              What Actually Works
            </Heading>
          </div>
        </div>

        {/* Three Approaches Comparison */}
        <div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20 max-w-6xl mx-auto"
        >
          {/* Left Column - All Human Team */}
          <div
            className={`group transition-all duration-700 ${
              isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="velox-card-traditional p-8 h-full flex flex-col hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-gray-200 transition-colors duration-300">
                  <Users className="h-8 w-8 text-gray-600" />
                </div>
                <Heading level="4" className="text-xl font-bold text-gray-800 mb-2">
                  All Human Team
                </Heading>
              </div>

              <div className="space-y-4 flex-grow">
                <div className="flex items-start gap-3">
                  <X className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <Text className="velox-text-body text-gray-700">
                    Expensive to scale - each new client requires more staff
                  </Text>
                </div>
                <div className="flex items-start gap-3">
                  <X className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <Text className="velox-text-body text-gray-700">
                    Slow on routine work - manual processes take hours
                  </Text>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <Text className="velox-text-body text-gray-700">
                    Good at complex decisions when properly trained
                  </Text>
                </div>
              </div>
            </div>
          </div>

          {/* Middle Column - Pure AI Automation */}
          <div
            className={`group transition-all duration-700 delay-200 ${
              isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="velox-card-traditional p-8 h-full flex flex-col hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-gray-200 transition-colors duration-300">
                  <Bot className="h-8 w-8 text-gray-600" />
                </div>
                <Heading level="4" className="text-xl font-bold text-gray-800 mb-2">
                  Pure AI Automation
                </Heading>
              </div>

              <div className="space-y-4 flex-grow">
                <div className="flex items-start gap-3">
                  <X className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <Text className="velox-text-body text-gray-700">
                    Breaks when confused - can't handle exceptions
                  </Text>
                </div>
                <div className="flex items-start gap-3">
                  <X className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <Text className="velox-text-body text-gray-700">
                    Makes expensive mistakes without human oversight
                  </Text>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <Text className="velox-text-body text-gray-700">
                    Fast on easy tasks with clear parameters
                  </Text>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Veloxforce Hybrid */}
          <div
            className={`group transition-all duration-700 delay-400 ${
              isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="velox-card-advantage p-8 h-full flex flex-col hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <div className="flex items-center justify-center space-x-1">
                    <Bot className="h-4 w-4 text-white" />
                    <Users className="h-4 w-4 text-white" />
                  </div>
                </div>
                <Heading level="4" className="text-xl font-bold text-blue-900 mb-2 group-hover:text-blue-800 transition-colors duration-300">
                  Veloxforce Hybrid
                </Heading>
              </div>

              <div className="space-y-4 flex-grow">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <Text className="velox-text-body text-blue-800">
                    AI speeds up routine work - instant processing
                  </Text>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <Text className="velox-text-body text-blue-800">
                    Human judgment on complex decisions - expert oversight
                  </Text>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <Text className="velox-text-body text-blue-800">
                    Perfect quality guaranteed - best of both worlds
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>


      </Container>
    </Section>
  )
}
