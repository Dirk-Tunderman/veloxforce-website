"use client"

import { useRef, useState, useEffect } from "react"
import { useInView } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import {
  CheckCircle,
  ArrowRight,
  TrendingUp,
  Users,
  DollarSign,
  Zap,
  Clock
} from "lucide-react"

import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"
import { Button } from "@/components/ui/button"
import { SectionTracker } from "@/components/analytics/section-tracker"

// Optimized case studies following design system principles
const transformationCases = [
  // TIME RECOVERY - Focus on strategic freedom
  {
    id: "wilsch",
    company: "Wilsch",
    industry: "Manufacturing",
    teamSize: "45 employees",
    timeSaved: "15 hours weekly",
    logo: "/images/companies/wilsch-logo.png",
    outcomeType: "time",
    challenge: "Assistant overwhelmed with documentation. Losing 15+ hours weekly.",
    quote: "My assistant was drowning in manual documentation instead of strategic work.",
    results: [
      { number: "15+", label: "Hours Saved Weekly", icon: Clock },
      { number: "€120", label: "Daily Value Created", icon: DollarSign },
      { number: "Strategic", label: "Focus Regained", icon: TrendingUp },
      { number: "Automated", label: "Documentation Flow", icon: CheckCircle }
    ],
    identityTransformation: {
      from: "Process-Bound Manager",
      to: "Strategic Leader"
    },
    finalQuote: "My team now focuses on growth instead of paperwork.",
    ctaText: "Get My Time Recovery Process",
    cardStyle: "time"
  },
  // REVENUE GROWTH - Focus on profit optimization
  {
    id: "wph",
    company: "WPH",
    industry: "Professional Services",
    teamSize: "25 employees",
    timeSaved: "12 hours weekly",
    logo: "/images/companies/wph-logo.svg",
    outcomeType: "revenue",
    challenge: "Inaccurate pricing losing revenue on every sale.",
    quote: "We were guessing at pricing and leaving money on the table daily.",
    results: [
      { number: "€450K", label: "Additional Revenue", icon: DollarSign },
      { number: "35%", label: "Profit Increase", icon: TrendingUp },
      { number: "Accurate", label: "Pricing System", icon: CheckCircle },
      { number: "Strategic", label: "Revenue Control", icon: Zap }
    ],
    identityTransformation: {
      from: "Pricing Guesser",
      to: "Revenue Optimizer"
    },
    finalQuote: "Every sale now maximizes profit instead of leaving money behind.",
    ctaText: "Get My Revenue Growth Process",
    cardStyle: "revenue"
  },
  // TEAM LIBERATION - Focus on leadership freedom
  {
    id: "femride",
    company: "Femride",
    industry: "Transportation Tech",
    teamSize: "Early-stage startup",
    timeSaved: "20 hours weekly",
    logo: "/images/companies/femride-logo.png",
    outcomeType: "team",
    challenge: "Non-technical founder overwhelmed by technical complexities.",
    quote: "I was drowning in technical decisions I didn't understand while trying to scale.",
    results: [
      { number: "100%", label: "Technical Burden", icon: Users },
      { number: "85%", label: "Cost Reduction", icon: TrendingUp },
      { number: "Professional", label: "Foundation Created", icon: CheckCircle },
      { number: "Scalable", label: "Documentation", icon: Zap }
    ],
    identityTransformation: {
      from: "Overwhelmed Founder",
      to: "Confident CEO"
    },
    finalQuote: "Now I focus on vision and growth instead of technical firefighting.",
    ctaText: "Get My Team Liberation Process",
    cardStyle: "team"
  }
]

const credibilityMetrics = [
  {
    number: "200+",
    description: "Processes Automated"
  },
  {
    number: "€2.4M+",
    description: "Annual Savings Delivered"
  },
  {
    number: "95%",
    description: "Client Retention Rate"
  },
  {
    number: "340%",
    description: "Average First-Year ROI"
  }
]

export function ClientTransformationsSection() {
  const ref = useRef(null)
  const metricsRef = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const metricsInView = useInView(metricsRef, { once: true, amount: 0.3 })

  const [counts, setCounts] = useState(credibilityMetrics.map(() => "0"))

  useEffect(() => {
    if (metricsInView) {
      credibilityMetrics.forEach((metric, index) => {
        const targetValue = parseInt(metric.number.replace(/[^0-9]/g, ""))
        const duration = 2000 // ms
        const frameDuration = 1000 / 60 // 60fps
        const totalFrames = Math.round(duration / frameDuration)
        let frame = 0

        const counter = setInterval(() => {
          frame++
          const progress = frame / totalFrames
          const currentCount = Math.round(targetValue * progress)

          setCounts(prev => {
            const newCounts = [...prev]
            newCounts[index] = currentCount + (metric.number.includes("%") ? "%" : metric.number.includes("€") ? "€" : "+")
            return newCounts
          })

          if (frame === totalFrames) {
            clearInterval(counter)
            setCounts(prev => {
              const newCounts = [...prev]
              newCounts[index] = metric.number
              return newCounts
            })
          }
        }, frameDuration)

        return () => clearInterval(counter)
      })
    }
  }, [metricsInView])

  // Design system compliant styling functions
  const getCardStyling = (cardStyle: string) => {
    switch (cardStyle) {
      case "time":
        return "velox-case-study-startup"
      case "revenue":
        return "velox-case-study-revenue"
      case "team":
        return "velox-case-study-established"
      default:
        return "velox-case-study-card"
    }
  }

  const getCtaColor = (cardStyle: string) => {
    // All CTAs use primary blue gradient for consistency
    return "velox-cta-primary"
  }

  return (
    <SectionTracker sectionName="Client Transformations" sectionPosition={2}>
      <Section id="client-transformations" padding="xl" background="light-blue">
        <Container>
          {/* Header Section - Design system compliant */}
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <Heading level="2" className="velox-text-h1 mb-6">
              From Operational Burden to Strategic Freedom
            </Heading>
            <Text className="velox-text-lead max-w-3xl mx-auto mb-6">
              Three businesses share how smart delegation transformed their daily reality
            </Text>
            <div className="velox-card-advantage p-6 rounded-xl max-w-2xl mx-auto">
              <Text className="text-lg font-semibold text-blue-900">
                Six months from now, you'll be the leader who transformed while others hesitated.
              </Text>
            </div>
          </div>

          {/* Outcome Categories - Design system compliant */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="velox-card-advantage p-8 text-center">
              <div className="velox-icon-container-advantage w-16 h-16 mx-auto mb-4">
                <Clock className="velox-icon-standard text-white" />
              </div>
              <Heading level="3" className="velox-text-h3 text-blue-900 mb-3">
                Time Recovery
              </Heading>
              <Text className="velox-text-body text-blue-800">
                Reclaim 15-25 hours weekly for strategic work
              </Text>
            </div>

            <div className="velox-card-advantage p-8 text-center">
              <div className="velox-icon-container-advantage w-16 h-16 mx-auto mb-4">
                <DollarSign className="velox-icon-standard text-white" />
              </div>
              <Heading level="3" className="velox-text-h3 text-blue-900 mb-3">
                Revenue Growth
              </Heading>
              <Text className="velox-text-body text-blue-800">
                Increase revenue through process optimization
              </Text>
            </div>

            <div className="velox-card-advantage p-8 text-center">
              <div className="velox-icon-container-advantage w-16 h-16 mx-auto mb-4">
                <Users className="velox-icon-standard text-white" />
              </div>
              <Heading level="3" className="velox-text-h3 text-blue-900 mb-3">
                Team Liberation
              </Heading>
              <Text className="velox-text-body text-blue-800">
                Free your team from operational burden
              </Text>
            </div>
          </div>

          {/* Case Studies Grid - Enhanced with design system */}
          <div
            ref={ref}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20"
          >
            {transformationCases.map((case_, index) => {
              return (
                <div
                  key={case_.id}
                  className={`${getCardStyling(case_.cardStyle)} p-6 rounded-xl hover-lift min-h-[600px] flex flex-col ${
                    isInView
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  {/* Company Context - Design system compliant */}
                  <div className="mb-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-white rounded-lg shadow-sm border border-gray-200 flex items-center justify-center p-2">
                        <Image
                          src={case_.logo}
                          alt={`${case_.company} logo`}
                          width={40}
                          height={40}
                          className="object-contain max-w-full max-h-full"
                        />
                      </div>
                      <div>
                        <Heading level="3" className="velox-text-h3 text-blue-900">
                          {case_.company}
                        </Heading>
                        <Text className="velox-text-small text-gray-600">
                          {case_.industry} • {case_.teamSize} • {case_.timeSaved}
                        </Text>
                      </div>
                    </div>
                    <div className="velox-card-traditional p-4 border-l-4 border-gray-400">
                      <Text className="velox-text-body font-medium text-gray-700">
                        Challenge: {case_.challenge}
                      </Text>
                    </div>
                  </div>

                  {/* Client Quote - Design system compliant */}
                  <div className="mb-8">
                    <div className="velox-card-traditional p-6 relative">
                      <div className="absolute top-2 left-2 text-3xl text-gray-400 font-serif opacity-60">"</div>
                      <Text className="velox-text-body italic text-gray-800 leading-relaxed font-medium px-6 py-2">
                        {case_.quote}
                      </Text>
                      <div className="absolute bottom-2 right-2 text-3xl text-gray-400 font-serif opacity-60 transform rotate-180">"</div>
                    </div>
                  </div>

                  {/* Results Grid - Design system icons */}
                  <div className="mb-8">
                    <div className="grid grid-cols-2 gap-4">
                      {case_.results.map((result, resultIndex) => {
                        const ResultIcon = result.icon
                        return (
                          <div key={resultIndex} className="velox-card-traditional p-5 text-center hover-lift group">
                            <div className="flex justify-center mb-3">
                              <div className="velox-icon-container-advantage">
                                <ResultIcon className="velox-icon-standard text-white" />
                              </div>
                            </div>
                            <div className="text-2xl font-bold text-blue-900 mb-1 group-hover:text-blue-700 transition-colors duration-200">
                              {result.number}
                            </div>
                            <Text className="velox-text-small text-gray-600 leading-tight font-medium">
                              {result.label}
                            </Text>
                          </div>
                        )
                      })}
                    </div>
                  </div>

                  {/* Identity Transformation - Design system compliant */}
                  <div className="mb-6">
                    <div className="velox-card-traditional p-5">
                      <div className="flex items-center justify-center gap-6">
                        <div className="text-center">
                          <Text className="velox-text-small text-gray-500 line-through font-medium">
                            {case_.identityTransformation.from}
                          </Text>
                        </div>
                        <div className="velox-transformation-arrow w-10 h-10">
                          <ArrowRight className="velox-icon-standard text-white" />
                        </div>
                        <div className="text-center">
                          <Text className="velox-text-body text-blue-900 font-bold">
                            {case_.identityTransformation.to}
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Final Quote - Design system compliant */}
                  <div className="mb-6 flex-grow">
                    <div className="velox-card-advantage p-6 text-center">
                      <div className="relative">
                        <div className="absolute -top-2 -left-2 text-2xl text-blue-200 opacity-60">"</div>
                        <Text className="velox-text-body font-medium leading-relaxed px-4 text-blue-900">
                          {case_.finalQuote}
                        </Text>
                        <div className="absolute -bottom-2 -right-2 text-2xl text-blue-200 opacity-60 transform rotate-180">"</div>
                      </div>
                    </div>
                  </div>

                  {/* CTA Button - Design system compliant */}
                  <div className="mt-auto">
                    <Button
                      className={`w-full h-14 ${getCtaColor(case_.cardStyle)} velox-hover-button`}
                      asChild
                    >
                      <Link href="/tools/business-audit">
                        {case_.ctaText}
                      </Link>
                    </Button>
                  </div>
              </div>
            )
          })}
        </div>

          {/* Credibility Metrics Bar - Design system compliant */}
          <div
            ref={metricsRef}
            className="velox-card-advantage p-16 rounded-2xl"
          >
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {credibilityMetrics.map((metric, index) => (
                <div
                  key={index}
                  className={`transition-all duration-700 ${
                    metricsInView
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="velox-text-h2 text-blue-900 mb-2">
                    {counts[index]}
                  </div>
                  <Text className="velox-text-small font-medium text-blue-800">
                    {metric.description}
                  </Text>
                </div>
              ))}
            </div>
          </div>

        </Container>
      </Section>
    </SectionTracker>
  )
}
