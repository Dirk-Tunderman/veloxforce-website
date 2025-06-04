"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import { ArrowRight, AlertTriangle, CheckCircle, X } from "lucide-react"

import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"

export function ChallengeCardsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <Section padding="lg" background="light-to-white">
      <Container>
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <Heading level="2" className="velox-text-h1 mb-6">
            What Actually Changes When You Delegate Operations
          </Heading>
          <Text className="velox-text-lead max-w-3xl mx-auto">
            The realistic transformation our clients experience (timelines vary, relief is consistent)
          </Text>
        </div>

        {/* Left-Right Comparison Layout */}
        <div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
        >
          {/* Left Column - "Where You Are Now" (40% visual weight) */}
          <div className="lg:col-span-5">
            <div
              className={`velox-card-traditional p-8 transition-all duration-700 ${
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <div className="velox-icon-container-traditional mb-4">
                <AlertTriangle className="velox-icon-primary-md" />
              </div>
              <Heading level="3" className="velox-text-h3 mb-4">
                Your Day Disappears Into Operations
              </Heading>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <X className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <Text className="velox-text-body">
                    You spend 60% of your time on repetitive tasks instead of growth strategy
                  </Text>
                </div>
                <div className="flex items-start gap-3">
                  <X className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <Text className="velox-text-body">
                    That's 24+ hours weekly lost to admin work
                  </Text>
                </div>
                <div className="flex items-start gap-3">
                  <X className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <Text className="velox-text-body">
                    You're managing expensive staff who manage processes
                  </Text>
                </div>
                <div className="flex items-start gap-3">
                  <X className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <Text className="velox-text-body">
                    Growth stalls because you're stuck in the day-to-day
                  </Text>
                </div>
              </div>
            </div>
          </div>

          {/* Transformation Arrow (Central focus) */}
          <div className="lg:col-span-2 flex flex-col items-center justify-center py-8">
            <div className="velox-transformation-arrow mb-2">
              <ArrowRight className="w-8 h-8 text-white" />
            </div>
            <Text className="text-sm font-semibold text-blue-600 tracking-wide uppercase text-center">
              CHOOSE DELEGATION
            </Text>
          </div>

          {/* Right Column - "Where You Could Be" (60% visual weight) */}
          <div className="lg:col-span-5">
            <div
              className={`velox-card-advantage p-8 transition-all duration-700 delay-200 ${
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <div className="velox-icon-container-advantage mb-4">
                <CheckCircle className="w-5 h-5 text-white" />
              </div>
              <Heading level="3" className="velox-text-h3 mb-4 text-blue-900">
                Your Business Runs Without You
              </Heading>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <Text className="velox-text-body text-blue-800">
                    Operations happen while you focus on what matters
                  </Text>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <Text className="velox-text-body text-blue-800">
                    20+ hours reclaimed for strategic work
                  </Text>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <Text className="velox-text-body text-blue-800">
                    Save 70% compared to traditional staffing costs
                  </Text>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <Text className="velox-text-body text-blue-800">
                    Finally work ON your business, not IN it
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
