"use client"

import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"
import { Button } from "@/components/ui/button"
import { CheckCircle, AlertTriangle, XCircle, ArrowRight, Download, Calendar } from "lucide-react"
import Link from "next/link"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"

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
  const { ref: titleRef, isVisible: titleVisible } = useIntersectionObserver({ threshold: 0.3 })

  return (
    <Section padding="xl" background="light-to-white">
      <Container className="max-w-6xl">
        <div 
          ref={titleRef as any}
          className={`text-center mb-12 transition-all duration-800 ease-out ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="velox-text-h1-premium mb-4">
            Your Personalized Path Forward
          </h2>
          <p className="velox-text-lead max-w-3xl mx-auto">
            Based on your readiness level, here's your recommended next step
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {pathOptions.map((option, index) => {
            const IconComponent = option.icon
            const { ref: cardRef, isVisible: cardVisible } = useIntersectionObserver({ threshold: 0.2 })
            
            // Determine card styling based on option
            const isStrongFit = option.color === 'green'
            const cardClass = isStrongFit ? 'card-solution' : 'card-elevated'
            const iconClass = isStrongFit ? 'icon-container-gradient' : 'icon-container'
            const iconColor = isStrongFit ? 'text-blue-600' : 'text-gray-700'
            const titleColor = isStrongFit ? 'text-blue-800' : 'text-gray-900'
            const ctaType = isStrongFit ? 'primary' : 'secondary'
            
            return (
              <div 
                key={index} 
                ref={cardRef as any}
                className={`${cardClass} transition-all duration-1000 ease-out ${
                  cardVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={iconClass}>
                    <IconComponent className={`w-6 h-6 ${iconColor}`} />
                  </div>
                  <h3 className={`velox-text-h3 ${titleColor}`}>
                    If You're a {option.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-lg font-semibold text-gray-900 mb-2">
                  {option.subtitle}
                </p>
                <p className="velox-text-body mb-6">
                  {option.description}
                </p>

                {/* Includes */}
                <div className="mb-6">
                  <p className="text-sm font-semibold text-gray-900 mb-3">
                    Includes:
                  </p>
                  <ul className="space-y-2">
                    {option.includes.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-gray-600 rounded-full mt-1.5 flex-shrink-0" />
                        <p className="text-sm text-gray-700">{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                {ctaType === 'primary' ? (
                  <Button
                    className="w-full relative bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 overflow-hidden group"
                    asChild
                  >
                    <Link href={option.href}>
                      <span className="relative z-10">{option.cta}</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    </Link>
                  </Button>
                ) : (
                  <Button
                    className="w-full bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-3 rounded-xl transition-all duration-300 transform hover:-translate-y-1"
                    asChild
                  >
                    <Link href={option.href}>
                      {option.cta}
                    </Link>
                  </Button>
                )}
              </div>
            )
          })}
        </div>

        {/* Bottom Message */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4 text-white">
            No matter where you are, we'll give you honest guidance.
          </h3>
          
          {/* Timing Section */}
          <div className="max-w-4xl mx-auto">
            <h4 className="text-xl font-semibold mb-4 text-white">
              The Truth About Timing
            </h4>
            
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div>
                <p className="font-semibold text-blue-300 mb-2">Better Times:</p>
                <ul className="space-y-1 text-blue-100">
                  <li>• Before you're drowning (proactive vs. reactive)</li>
                  <li>• When growth is accelerating (scale efficiently)</li>
                  <li>• Before hiring for routine roles (avoid commitment)</li>
                  <li>• When team morale needs a boost (remove drudgery)</li>
                </ul>
              </div>
              
              <div>
                <p className="font-semibold text-gray-300 mb-2">Worse Times:</p>
                <ul className="space-y-1 text-gray-300">
                  <li>• During major pivot or restructuring</li>
                  <li>• When processes are still experimental</li>
                  <li>• If cash flow is unpredictable</li>
                  <li>• Before product-market fit</li>
                </ul>
              </div>
            </div>
            
            <p className="text-xl font-semibold mt-6 text-center text-white">
              The Question: Are you ready to lead differently?
            </p>
          </div>
        </div>
      </Container>
    </Section>
  )
}