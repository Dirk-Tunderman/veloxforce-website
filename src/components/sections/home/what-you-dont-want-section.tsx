"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import {
  Settings,
  Users,
  AlertTriangle,
  HelpCircle,
  CheckCircle,
  Shield,
  Zap,
  Target,
  ArrowRight
} from "lucide-react"

import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"

const transformationData = {
  traditionalChallenges: [
    {
      title: "Complex Software to Master",
      description: "Multiple dashboards, constant updates, features that require extensive training. Your team spends months learning instead of doing. Software licenses: €500-2,000+ monthly",
      icon: "Settings",
    },
    {
      title: "Technical Teams to Hire",
      description: "€60k+ developers, ongoing training costs. Retention challenges in competitive tech market. Total cost: €10-120k+ annually per developer",
      icon: "Users",
    },
    {
      title: "Integration Nightmares",
      description: "Systems that don't communicate. Data silos and endless technical roadblocks. Integration projects: €15-50k+ per connection",
      icon: "AlertTriangle",
    },
    {
      title: "Uncertain Outcomes",
      description: "\"It should work\" promises. Variable results with no guarantees. 80% failure rate on AI projects industry-wide",
      icon: "HelpCircle",
    },
  ],
  veloxforceAdvantages: [
    {
      title: "Zero Technology Burden - Ever",
      description: "Complete automation delivered as a service. No software to learn, update, or manage. Save €500-2,000+ monthly on software costs",
      icon: "CheckCircle",
    },
    {
      title: "15+ Years Experience Included",
      description: "Our specialists handle everything permanently. No hiring, training, or retention concerns. Save €40-120k+ annual developer costs",
      icon: "Shield",
    },
    {
      title: "Integration Headaches Eliminated",
      description: "We make your systems work together flawlessly. Data flows seamlessly between all platforms. Save €15-50k+ per integration project",
      icon: "Zap",
    },
    {
      title: "Specific Metrics, Written Guarantees",
      description: "Precise performance targets documented. Clear ROI projections based on your data. If we don't deliver, you don't pay",
      icon: "Target",
    },
  ],
}

// Helper function to get icon components
const getIcon = (iconName: string) => {
  const icons = {
    Settings,
    Users,
    AlertTriangle,
    HelpCircle,
    CheckCircle,
    Shield,
    Zap,
    Target,
  }
  return icons[iconName as keyof typeof icons] || Settings
}

export function WhatYouDontWantSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <Section padding="lg" background="light-to-white">
      <Container>
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <Heading level="2" className="velox-text-h1 mb-6">
            Why Traditional Automation Creates More Work
          </Heading>
          <Text className="velox-text-lead max-w-3xl mx-auto mb-6">
            And why our operational partnership model actually delivers freedom
          </Text>
          <Text className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            See the stark difference between traditional automation headaches and our service-based approach that actually works.
          </Text>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-7xl mx-auto items-start"
        >
          {/* Traditional Challenges - Left Side (40% emphasis) */}
          <div className="lg:col-span-5">
            <div className="mb-10 relative">
              <div className="absolute -left-6 top-0 w-2 h-20 bg-gradient-to-b from-gray-300 to-gray-100 rounded-full opacity-60"></div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                <Heading level="3" className="text-2xl font-bold text-gray-700">
                  Traditional Automation Challenges
                </Heading>
              </div>
              <Text className="text-lg text-gray-600 ml-7 font-medium">
                Why conventional approaches fail business owners
              </Text>
            </div>

            <div className="space-y-6">
              {transformationData.traditionalChallenges.map((challenge, index) => {
                const IconComponent = getIcon(challenge.icon)
                return (
                  <div
                    key={index}
                    className={`group velox-card-traditional p-6 transition-all duration-700 hover:shadow-lg hover:-translate-y-1 hover:border-gray-300 ${
                      isInView
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-8"
                    }`}
                    style={{ transitionDelay: `${index * 150}ms` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center group-hover:bg-gray-200 transition-colors duration-300">
                          <IconComponent className="w-6 h-6 text-gray-600 group-hover:text-gray-700 transition-colors duration-300" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <Heading level="4" className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-gray-900 transition-colors duration-300">
                          {challenge.title}
                        </Heading>
                        <Text className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                          {challenge.description}
                        </Text>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Transformation Arrow - Center */}
          <div className="lg:col-span-2 flex items-center justify-center my-12 lg:my-0">
            <div
              className={`transition-all duration-1000 delay-700 ${
                isInView
                  ? "opacity-100 scale-100 rotate-0"
                  : "opacity-0 scale-75 rotate-12"
              }`}
            >
              <div className="relative flex flex-col items-center">
                {/* Animated Arrow Container */}
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 group">
                    <ArrowRight className="w-10 h-10 text-white transform lg:rotate-0 rotate-90 group-hover:translate-x-1 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
                  </div>
                  {/* Subtle glow effect */}
                  <div className="absolute -inset-2 bg-gradient-to-r from-blue-600/20 to-blue-800/20 rounded-full blur-lg opacity-40"></div>
                </div>

                {/* Label */}
                <div className="mt-6 text-center">
                  <Text className="text-sm font-bold text-blue-700 tracking-wider uppercase bg-blue-50 px-4 py-2 rounded-full border border-blue-200">
                    TRANSFORMATION
                  </Text>
                </div>
              </div>
            </div>
          </div>

          {/* Veloxforce Advantages - Right Side (60% emphasis) */}
          <div className="lg:col-span-5">
            <div className="mb-10 relative">
              <div className="absolute -left-6 top-0 w-2 h-20 bg-gradient-to-b from-blue-500 to-blue-300 rounded-full"></div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                <Heading level="3" className="text-2xl font-bold text-blue-900">
                  The Veloxforce Advantage
                </Heading>
              </div>
              <Text className="text-lg text-blue-700 ml-7 font-semibold">
                Systematic solutions that guarantee success
              </Text>
            </div>

            <div className="space-y-6">
              {transformationData.veloxforceAdvantages.map((advantage, index) => {
                const IconComponent = getIcon(advantage.icon)
                return (
                  <div
                    key={index}
                    className={`group velox-card-advantage p-6 transition-all duration-700 hover:shadow-2xl hover:-translate-y-2 hover:scale-105 ${
                      isInView
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 translate-x-8"
                    }`}
                    style={{ transitionDelay: `${index * 150 + 400}ms` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                          <IconComponent className="w-7 h-7 text-white" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <Heading level="4" className="text-xl font-bold text-blue-900 mb-3 group-hover:text-blue-800 transition-colors duration-300">
                          {advantage.title}
                        </Heading>
                        <Text className="text-blue-800 leading-relaxed font-medium group-hover:text-blue-700 transition-colors duration-300">
                          {advantage.description}
                        </Text>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Future Pacing Conclusion - Enhanced */}
        <div
          className={`text-center mt-20 max-w-5xl mx-auto transition-all duration-700 delay-1000 ${
            isInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div className="mb-8">
            <Heading level="3" className="text-3xl font-bold text-blue-900 mb-6">
              The Choice Is Clear
            </Heading>
            <Text className="text-xl text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed">
              Traditional automation approaches create more problems than they solve. Our service-based model eliminates every headache while delivering guaranteed results.
            </Text>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8 border border-blue-200 shadow-lg max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="text-center">
              <Text className="text-2xl font-bold text-blue-900 mb-4 leading-tight">
                Your competitors will ask how you're scaling so efficiently while they're still managing technical teams.
              </Text>
              <Text className="text-lg text-blue-700 font-medium">
                The difference? You chose delegation over complication.
              </Text>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
