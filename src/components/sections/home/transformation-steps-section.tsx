"use client"

import { useRef } from "react"
import Link from "next/link"
import { useInView } from "framer-motion"
import { ArrowRight, ClipboardList, Cog, CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"

// 3-step transformation process data
const transformationSteps = [
  {
    icon: ClipboardList,
    title: "We Map Your Reality",
    iconText: "We Document Your Time & Money Leaks",
    description: "Every click, every process, every bottleneck. Calculate your true operational costs. Identify exactly where you're losing time and money.",
    timeline: "One focused week",
  },
  {
    icon: Cog,
    title: "We Build Your Solution",
    iconText: "We Create Your Custom Operations System",
    description: "Design workflows that match your business perfectly. Handle all the technical complexity. Test with your real processes.",
    timeline: "2-3 weeks typically",
  },
  {
    icon: CheckCircle,
    title: "We Deliver Results",
    iconText: "You Delegate, We Execute",
    description: "Hand off your repetitive work completely. Monitor quality without managing technology. Save thousands monthly while operations run smoother.",
    timeline: "Ongoing partnership",
  },
]

export function TransformationStepsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <Section padding="xl" background="white-to-light">
      <Container>
        {/* Header Section */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <Heading level="2" className="velox-text-h1 mb-6">
            Here's Exactly What Happens When We Start
          </Heading>
          <Text className="velox-text-lead max-w-3xl mx-auto">
            A transparent process designed for business owners who value their time
          </Text>
        </div>

        {/* Transformation Steps - Equal Height Layout */}
        <div className="relative">
          {/* Desktop process flow with connecting lines */}
          <div className="hidden lg:block absolute top-20 left-1/2 w-[calc(100%-200px)] h-0.5 bg-blue-200 -translate-x-1/2" />

          <div
            ref={ref}
            className="flex flex-col lg:flex-row gap-8 relative"
          >
            {transformationSteps.map((step, index) => (
              <div
                key={index}
                className={`flex-1 group transition-all duration-700 ${
                  isInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="velox-card-traditional p-8 h-full flex flex-col items-center text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-blue-200 relative">
                  {/* Step Number Badge - Top Right Corner */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>

                  {/* Icon Container - Better Centered */}
                  <div className="relative mb-6 mt-4">
                    <div className="w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center group-hover:bg-blue-100 transition-colors duration-300">
                      <step.icon className="w-10 h-10 text-blue-600" />
                    </div>
                  </div>

                  <Heading level="3" className="velox-text-h3 mb-2 group-hover:text-blue-700 transition-colors duration-300">
                    {step.title}
                  </Heading>

                  <Text className="text-sm font-semibold text-blue-600 mb-4 group-hover:text-blue-700 transition-colors duration-300">
                    {step.iconText}
                  </Text>

                  <div className="flex-grow flex flex-col justify-center">
                    <Text className="velox-text-body mb-6 text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                      {step.description}
                    </Text>
                  </div>

                  <div className="mt-auto pt-4 border-t border-gray-100 w-full">
                    <Text className="velox-text-small font-semibold text-blue-600 group-hover:text-blue-700 transition-colors duration-300">
                      Timeline: {step.timeline}
                    </Text>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-16">
          <Button
            size="lg"
            className="btn-primary"
            asChild
            trackingLabel="Start My Transformation Analysis"
            trackingLocation="Transformation Steps Section"
          >
            <Link href="/tools/business-audit" className="flex items-center gap-2">
              Start My Transformation Analysis
              <ArrowRight className="velox-icon-sm velox-icon-light" />
            </Link>
          </Button>
        </div>
      </Container>
    </Section>
  )
}
