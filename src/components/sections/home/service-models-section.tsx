"use client"

import { useRef } from "react"
import Link from "next/link"
import { useInView } from "framer-motion"
import { Zap, TrendingUp, Crown, AlertCircle, CheckCircle, XCircle, ArrowRight } from "lucide-react"

import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"
import { Button } from "@/components/ui/button"

const currentStateProblems = [
  "Drowning in operational fires instead of strategic planning",
  "Team capacity maxed but revenue growth stalled",
  "Competitors moving faster despite similar resources",
  "Working IN the business instead of ON the business"
]

const qualificationStatements = [
  "Spending 20+ hours weekly managing operations",
  "Growth opportunities missed due to process bottlenecks",
  "Team at capacity but revenue growth stalled",
  "Competitors gaining speed advantages"
]

const transformationOptions = [
  {
    icon: Zap,
    name: "Rapid Relief",
    forWho: "Leaders drowning in operational chaos",
    identityTransformation: "From Crisis Manager to Confident Leader",
    benefits: [
      "Single critical process transformation (8-15 hours saved weekly)",
      "Immediate operational breathing room (ROI within 60 days)",
      "Quick wins within 30 days (€1,200+ monthly savings typical)",
      "Foundation for future automation (3x faster subsequent implementations)"
    ],
    avoidance: "No more weekend work fixing operational emergencies",
    ctaText: "See My Relief Timeline",
    ctaStyle: "secondary",
    cardStyle: "traditional",
    emphasis: 40,
  },
  {
    icon: TrendingUp,
    name: "Strategic Evolution",
    forWho: "Growth-ready leaders scaling systematically",
    identityTransformation: "From Busy Manager to Strategic CEO",
    benefits: [
      "Multiple process optimization sequence (20-35 hours saved weekly)",
      "Compound operational efficiency gains (250-400% ROI typical)",
      "Competitive positioning advantage (40% faster than industry average)",
      "Scalable growth infrastructure (handle 3x volume without hiring)"
    ],
    avoidance: "No more losing market opportunities to faster competitors",
    ctaText: "Calculate My Growth ROI",
    ctaStyle: "primary",
    cardStyle: "advantage",
    emphasis: 60,
    popular: true,
  },
  {
    icon: Crown,
    name: "Market Leadership",
    forWho: "Visionary leaders building industry dominance",
    identityTransformation: "From Industry Player to Market Leader",
    benefits: [
      "Department-wide operational transformation (50+ hours saved weekly)",
      "Systematic competitive advantage creation (500%+ ROI documented)",
      "Industry benchmark performance standards (top 5% efficiency)",
      "Market leadership positioning tools (5x faster than competitors)"
    ],
    avoidance: "No more watching competitors gain systematic advantages",
    ctaText: "See My Leadership Transformation",
    ctaStyle: "premium",
    cardStyle: "advantage",
    emphasis: 60,
  },
]

export function ServiceModelsSection() {
  const ref = useRef(null)
  const qualificationRef = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const qualificationInView = useInView(qualificationRef, { once: true, amount: 0.1 })

  return (
    <Section padding="lg" background="white">
      <Container>
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="mb-6 p-4 bg-purple-50 rounded-lg border border-purple-200">
            <Text className="text-lg font-medium text-purple-800">
              Ready to transform? Here's how fast we can get you there...
            </Text>
          </div>
          <Heading level="1" className="velox-heading-xl mb-6 text-center">
            Choose Your Transformation Speed
          </Heading>
          <Text className="velox-text-lead max-w-2xl mx-auto text-center">
            Three proven paths from operational chaos to strategic control, each designed for different business readiness and urgency levels.
          </Text>
        </div>

        {/* Qualification Section */}
        <div
          ref={qualificationRef}
          className="mb-16"
        >
          <Heading level="3" className="velox-heading-md text-center mb-8">
            Find Your Current Reality Below
          </Heading>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {qualificationStatements.map((statement, index) => (
              <div
                key={index}
                className={`bg-gray-50 border border-gray-200 rounded-lg p-4 text-center velox-hover-lift transition-all duration-700 ${
                  qualificationInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-center mb-3">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                </div>
                <Text className="velox-text-small text-gray-700 leading-relaxed">
                  {statement}
                </Text>
              </div>
            ))}
          </div>
        </div>

        {/* Main Transformation Section */}
        <div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
        >
          {/* Current State Recognition - Left Side (3 columns) */}
          <div className="lg:col-span-3">
            <div className="mb-6">
              <Heading level="3" className="velox-heading-sm mb-4 text-left">
                Where Most Leaders Are Today
              </Heading>
            </div>

            <div className="velox-card-traditional p-5">
              <div className="flex items-start gap-3 mb-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="velox-icon-container-traditional">
                    <AlertCircle className="velox-icon-standard text-gray-500" />
                  </div>
                </div>
                <div>
                  <Heading level="4" className="text-lg font-medium text-gray-700 mb-3">
                    Current Reality
                  </Heading>
                </div>
              </div>

              <div className="space-y-3">
                {currentStateProblems.map((problem, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-gray-700 shrink-0 mt-1" />
                    <Text className="velox-text-small text-gray-600 leading-relaxed">
                      {problem}
                    </Text>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Transformation Arrow - Center (2 columns) */}
          <div className="lg:col-span-2 flex items-center justify-center my-8 lg:my-0">
            <div
              className={`transition-all duration-1000 delay-500 ${
                isInView
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-75"
              }`}
            >
              <div className="velox-transformation-arrow">
                <ArrowRight className="w-8 h-8 text-white transform lg:rotate-0 rotate-90" />
              </div>
              <Text className="text-center mt-4 text-sm font-semibold text-blue-600 tracking-wide">
                TRANSFORMATION
              </Text>
            </div>
          </div>

          {/* Three Transformation Options - Right Side (7 columns) */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {transformationOptions.map((option, index) => (
                <div
                  key={index}
                  className={`relative transition-all duration-700 ${
                    option.cardStyle === 'advantage' ? 'velox-card-advantage' : 'velox-card-traditional'
                  } ${
                    option.popular ? 'scale-105' : ''
                  } ${
                    isInView
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${index * 150 + 300}ms` }}
                >
                  {/* Most Popular Badge */}
                  {option.popular && (
                    <div className="absolute -top-3 -right-3 z-10">
                      <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg transform rotate-12">
                        MOST POPULAR
                      </div>
                    </div>
                  )}

                  <div className="p-6">
                    {/* Header */}
                    <div className="text-center mb-6">
                      <div className="flex justify-center mb-4">
                        <div className={
                          option.cardStyle === 'advantage'
                            ? 'velox-icon-container-advantage'
                            : 'velox-icon-container-traditional'
                        }>
                          <option.icon className={`velox-icon-standard ${
                            option.cardStyle === 'advantage' ? 'text-white' : 'text-gray-500'
                          }`} />
                        </div>
                      </div>

                      <Heading level="4" className={`text-xl font-semibold mb-2 ${
                        option.popular ? 'text-2xl' : ''
                      } ${
                        option.cardStyle === 'advantage' ? 'text-blue-900' : 'text-gray-700'
                      }`}>
                        {option.name}
                      </Heading>

                      <Text className="text-sm italic mb-4 text-gray-600">
                        For: {option.forWho}
                      </Text>

                      {/* Identity Transformation Hook */}
                      <div className={`rounded-lg p-3 mb-4 ${
                        option.cardStyle === 'advantage'
                          ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white'
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        <Text className={`font-medium text-sm ${
                          option.popular ? 'text-base' : ''
                        }`}>
                          {option.identityTransformation}
                        </Text>
                      </div>
                    </div>

                    {/* Benefits List */}
                    <div className="space-y-3 mb-6">
                      {option.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-start gap-3">
                          <CheckCircle className="h-4 w-4 text-blue-600 shrink-0 mt-1" />
                          <Text className={`text-sm leading-relaxed ${
                            option.cardStyle === 'advantage' ? 'text-blue-800 font-medium' : 'text-gray-700'
                          }`}>
                            {benefit}
                          </Text>
                        </div>
                      ))}
                    </div>

                    {/* What You Avoid Section */}
                    <div className={`rounded-lg p-3 mb-6 ${
                      option.cardStyle === 'advantage' ? 'bg-blue-50' : 'bg-gray-50'
                    }`}>
                      <div className="flex items-start gap-3">
                        <XCircle className="h-4 w-4 text-gray-700 shrink-0 mt-1" />
                        <Text className="text-sm text-gray-600">
                          {option.avoidance}
                        </Text>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <Button
                      className={`w-full h-12 ${
                        option.ctaStyle === 'primary'
                          ? 'bg-gradient-to-r from-blue-800 to-blue-900 hover:from-blue-900 hover:to-blue-950 text-white shadow-lg'
                          : option.ctaStyle === 'premium'
                          ? 'bg-gradient-to-r from-blue-700 to-blue-800 hover:from-blue-800 hover:to-blue-900 text-white shadow-xl'
                          : 'bg-blue-600 hover:bg-blue-700 text-white'
                      }`}
                      asChild
                    >
                      <Link href="/contact">
                        {option.ctaText}
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-16">
          <Text className="velox-text-small text-gray-600 mb-6 italic">
            <strong>Note:</strong> All transformation paths include outcome guarantee and continuous optimization.
          </Text>
          <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50" asChild>
            <Link href="/our-approach">
              See My Complete Service Options
            </Link>
          </Button>
          <div className="mt-4">
            <Text className="velox-text-small text-gray-500">
              Join 200+ leaders who transformed their operations
            </Text>
          </div>
        </div>
      </Container>
    </Section>
  )
}
