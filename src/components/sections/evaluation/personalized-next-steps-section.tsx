"use client"

import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"
import { Button } from "@/components/ui/button"
import { CheckCircle, AlertTriangle, XCircle, ArrowRight, Download, Calendar } from "lucide-react"
import Link from "next/link"

interface PathOption {
  title: string
  subtitle: string
  description: string
  cta: string
  href: string
  includes: string[]
  icon: any
  color: string
}

const pathOptions: PathOption[] = [
  {
    title: "Strong Fit",
    subtitle: "See exactly how Service-as-Software would transform your specific process",
    description: "You're ready for Service-as-Software. Let's show you exactly what that transformation looks like.",
    cta: "Get Transformation Analysis →",
    href: "/tools/business-audit",
    includes: [
      "ROI calculation based on your process",
      "Implementation timeline",
      "Team impact assessment",
      "Risk mitigation plan"
    ],
    icon: CheckCircle,
    color: "green"
  },
  {
    title: "Potential Fit",
    subtitle: "Explore which processes make most sense to delegate first",
    description: "You have potential, but need clarity on priorities. Let's find your best starting point.",
    cta: "Process Prioritization Session →",
    href: "/contact",
    includes: [
      "Process audit and mapping",
      "Readiness assessment",
      "Roadmap development",
      "Foundation building steps"
    ],
    icon: AlertTriangle,
    color: "yellow"
  },
  {
    title: "Not Ready Yet",
    subtitle: "Get resources to prepare for future automation",
    description: "Build your foundation first. We'll give you the tools to prepare for when you're ready.",
    cta: "Download Readiness Guide →",
    href: "/resources/readiness-guide",
    includes: [
      "Process documentation templates",
      "Standardization best practices",
      "Timing indicators to watch for",
      "Preparation roadmap"
    ],
    icon: XCircle,
    color: "blue"
  }
]

export function PersonalizedNextStepsSection() {
  return (
    <Section padding="xl" background="light-to-white">
      <Container className="max-w-6xl">
        <div className="text-center mb-12">
          <Heading level="2" className="text-3xl md:text-4xl font-bold mb-4">
            Your Personalized Path Forward
          </Heading>
          <Text className="text-xl text-gray-600 max-w-3xl mx-auto">
            Based on your readiness level, here's your recommended next step
          </Text>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {pathOptions.map((option, index) => {
            const IconComponent = option.icon
            const colorClasses = {
              green: {
                bg: 'bg-green-50',
                border: 'border-green-200',
                icon: 'bg-green-600',
                text: 'text-green-900',
                cta: 'bg-green-600 hover:bg-green-700'
              },
              yellow: {
                bg: 'bg-yellow-50',
                border: 'border-yellow-200',
                icon: 'bg-yellow-500',
                text: 'text-yellow-900',
                cta: 'bg-yellow-500 hover:bg-yellow-600'
              },
              blue: {
                bg: 'bg-blue-50',
                border: 'border-blue-200',
                icon: 'bg-blue-600',
                text: 'text-blue-900',
                cta: 'bg-blue-600 hover:bg-blue-700'
              }
            }
            
            const colors = colorClasses[option.color as keyof typeof colorClasses]
            
            return (
              <div key={index} className={`${colors.bg} rounded-2xl p-8 border-2 ${colors.border} shadow-lg`}>
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 ${colors.icon} rounded-full flex items-center justify-center`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <Heading level="3" className={`text-xl font-bold ${colors.text}`}>
                    If You're a {option.title}
                  </Heading>
                </div>

                {/* Description */}
                <Text className="text-lg font-semibold text-gray-900 mb-2">
                  {option.subtitle}
                </Text>
                <Text className="text-gray-700 mb-6">
                  {option.description}
                </Text>

                {/* Includes */}
                <div className="mb-6">
                  <Text className="text-sm font-semibold text-gray-900 mb-3">
                    Includes:
                  </Text>
                  <ul className="space-y-2">
                    {option.includes.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-gray-600 rounded-full mt-1.5 flex-shrink-0" />
                        <Text className="text-sm text-gray-700">{item}</Text>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <Button
                  className={`w-full ${colors.cta} text-white font-semibold py-3 rounded-lg transition-colors`}
                  asChild
                >
                  <Link href={option.href}>
                    {option.cta}
                  </Link>
                </Button>
              </div>
            )
          })}
        </div>

        {/* Bottom Message */}
        <div className="bg-gradient-to-r from-gray-700 to-gray-800 text-white rounded-2xl p-8 text-center">
          <Heading level="3" className="text-2xl font-bold mb-4">
            No matter where you are, we'll give you honest guidance.
          </Heading>
          
          {/* Timing Section */}
          <div className="max-w-4xl mx-auto">
            <Heading level="4" className="text-xl font-semibold mb-4">
              The Truth About Timing
            </Heading>
            
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div>
                <Text className="font-semibold text-green-300 mb-2">Better Times:</Text>
                <ul className="space-y-1 text-gray-300">
                  <li>• Before you're drowning (proactive vs. reactive)</li>
                  <li>• When growth is accelerating (scale efficiently)</li>
                  <li>• Before hiring for routine roles (avoid commitment)</li>
                  <li>• When team morale needs a boost (remove drudgery)</li>
                </ul>
              </div>
              
              <div>
                <Text className="font-semibold text-red-300 mb-2">Worse Times:</Text>
                <ul className="space-y-1 text-gray-300">
                  <li>• During major pivot or restructuring</li>
                  <li>• When processes are still experimental</li>
                  <li>• If cash flow is unpredictable</li>
                  <li>• Before product-market fit</li>
                </ul>
              </div>
            </div>
            
            <Text className="text-xl font-semibold mt-6 text-center">
              The Question: Are you ready to lead differently?
            </Text>
          </div>
        </div>
      </Container>
    </Section>
  )
}