"use client"

import { useRef } from "react"
import Link from "next/link"
import { useInView } from "framer-motion"
import { ArrowRight, AlertTriangle, TrendingUp, ClipboardList, Cog, CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"

// 3-step transformation process data
const transformationSteps = [
  {
    icon: ClipboardList,
    title: "We Map Your Reality",
    description: "We document exactly how your process works today. Every click, every approval, every bottleneck. You get professional SOPs worth €2,000+ - yours to keep regardless.",
    timeline: "Days, not weeks",
  },
  {
    icon: Cog,
    title: "We Build Your Solution",
    description: "Our hybrid AI-human system takes shape. AI handles volume. Humans ensure quality. You see progress updates. No black box.",
    timeline: "Focused and efficient",
  },
  {
    icon: CheckCircle,
    title: "We Deliver Results",
    description: "Go live with confidence. We measure against agreed metrics. Performance guaranteed or we make it right.",
    timeline: "Faster than you'd expect",
  },
]

export function ChallengeCardsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <Section padding="lg" background="light-to-white">
      <Container>
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <Heading level="2" className="velox-text-h1 mb-6">
            From Your Current Chaos to Complete Control
          </Heading>
          <Text className="velox-text-lead max-w-3xl mx-auto">
            See how we transform operational chaos into strategic control through our proven methodology
          </Text>
        </div>

        {/* Challenge Cards - Enhanced with Hover Effects */}
        <div
          ref={ref}
          className="flex flex-col lg:flex-row gap-8"
        >
          {/* Challenge 1: Time Drain */}
          <div
            className={`flex-1 group transition-all duration-700 ${
              isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="velox-card-traditional p-8 h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-orange-200">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-100 transition-colors duration-300">
                  <AlertTriangle className="h-8 w-8 text-orange-600 group-hover:text-orange-700 transition-colors duration-300" />
                </div>
                <Heading level="4" className="velox-text-h4 text-gray-800 mb-4 group-hover:text-gray-900 transition-colors duration-300">
                  Your Day Disappears Into Operations
                </Heading>
              </div>
              <div className="flex-grow flex items-center justify-center">
                <Text className="velox-text-body text-gray-700 text-center leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                  You spend 60% of your time on operations instead of growth strategy. That's 24+ hours weekly lost to administrative tasks.
                </Text>
              </div>
            </div>
          </div>

          {/* Challenge 2: Error Cycles */}
          <div
            className={`flex-1 group transition-all duration-700 delay-200 ${
              isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="velox-card-traditional p-8 h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-red-200">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-100 transition-colors duration-300">
                  <AlertTriangle className="h-8 w-8 text-red-600 group-hover:text-red-700 transition-colors duration-300" />
                </div>
                <Heading level="4" className="velox-text-h4 text-gray-800 mb-4 group-hover:text-gray-900 transition-colors duration-300">
                  Same Mistakes Keep Happening
                </Heading>
              </div>
              <div className="flex-grow flex items-center justify-center">
                <Text className="velox-text-body text-gray-700 text-center leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                  The same mistakes happen weekly because processes depend on human memory. Each error costs 2-4 hours to fix and damages client trust.
                </Text>
              </div>
            </div>
          </div>

          {/* Challenge 3: Scaling Bottlenecks */}
          <div
            className={`flex-1 group transition-all duration-700 delay-400 ${
              isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="velox-card-traditional p-8 h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-amber-200">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-100 transition-colors duration-300">
                  <AlertTriangle className="h-8 w-8 text-amber-600 group-hover:text-amber-700 transition-colors duration-300" />
                </div>
                <Heading level="4" className="velox-text-h4 text-gray-800 mb-4 group-hover:text-gray-900 transition-colors duration-300">
                  Growth Hits a Wall
                </Heading>
              </div>
              <div className="flex-grow flex items-center justify-center">
                <Text className="velox-text-body text-gray-700 text-center leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                  Growth means hiring more people to handle the same manual processes. Each new hire costs €45K+ annually just to maintain current operations.
                </Text>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`text-center mt-16 transition-all duration-700 delay-600 max-w-6xl mx-auto ${
            isInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <Text className="text-lg font-medium text-blue-800 mb-8 mx-auto">
            Sound familiar?
          </Text>

          {/* Client Quotes - Enhanced with Animations */}
          <div className="flex flex-col lg:flex-row gap-8 mb-12">
            {/* Quote 1 - Operations Time Drain */}
            <div className="flex-1 group">
              <div className="velox-card-traditional p-8 h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-blue-200">
                <div className="flex-grow mb-6">
                  <div className="mb-4">
                    <div className="w-8 h-8 text-blue-600 mb-4 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                      </svg>
                    </div>
                  </div>
                  <Text className="velox-text-body text-gray-700 italic leading-relaxed text-lg">
                    "I was spending 30+ hours every single week just managing invoices, follow-ups, and administrative chaos. I started this business to grow it strategically, not to become its most overworked administrator. The operational burden was consuming my entire focus and preventing any real business development."
                  </Text>
                </div>
                <div className="text-left mt-auto pt-4 border-t border-gray-100">
                  <Text className="velox-text-body font-semibold text-gray-800">Sarah Mitchell</Text>
                  <Text className="velox-text-small text-gray-600">CEO, Mitchell Logistics</Text>
                </div>
              </div>
            </div>

            {/* Quote 2 - Error Cycles */}
            <div className="flex-1 group">
              <div className="velox-card-traditional p-8 h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-blue-200">
                <div className="flex-grow mb-6">
                  <div className="mb-4">
                    <div className="w-8 h-8 text-blue-600 mb-4 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                      </svg>
                    </div>
                  </div>
                  <Text className="velox-text-body text-gray-700 italic leading-relaxed text-lg">
                    "Every single week we'd encounter the same data entry mistakes and process failures. Client onboarding consistently took 2 weeks because someone always forgot a critical step or missed important documentation. It was embarrassing and damaging our professional reputation with new clients."
                  </Text>
                </div>
                <div className="text-left mt-auto pt-4 border-t border-gray-100">
                  <Text className="velox-text-body font-semibold text-gray-800">Marcus Weber</Text>
                  <Text className="velox-text-small text-gray-600">Operations Director, Weber Financial</Text>
                </div>
              </div>
            </div>

            {/* Quote 3 - Scaling Bottlenecks */}
            <div className="flex-1 group">
              <div className="velox-card-traditional p-8 h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-blue-200">
                <div className="flex-grow mb-6">
                  <div className="mb-4">
                    <div className="w-8 h-8 text-blue-600 mb-4 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                      </svg>
                    </div>
                  </div>
                  <Text className="velox-text-body text-gray-700 italic leading-relaxed text-lg">
                    "We couldn't grow past €2M revenue because every new client meant hiring another person just to handle the same manual processes. The economics didn't work - we were scaling our problems, not our profits. Growth was becoming more expensive instead of more profitable."
                  </Text>
                </div>
                <div className="text-left mt-auto pt-4 border-t border-gray-100">
                  <Text className="velox-text-body font-semibold text-gray-800">Elena Rodriguez</Text>
                  <Text className="velox-text-small text-gray-600">Founder, Rodriguez Consulting</Text>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Simple Transformation Indicator */}
        <div className="text-center my-16">
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
              <ArrowRight className="w-6 h-6 text-white transform rotate-90" />
            </div>
            <Text className="text-sm font-semibold text-blue-600 tracking-wide uppercase">
              Transformation
            </Text>
          </div>
        </div>

        {/* 3-Step Transformation Process */}
        <div className="text-center mb-16">
          <Heading level="2" className="velox-text-h1 mb-6">
            From Chaos to Control in 3 Clear Steps
          </Heading>
          <Text className="velox-text-lead max-w-3xl mx-auto">
            A proven methodology that transforms your operations with complete transparency and guaranteed outcomes.
          </Text>
        </div>

        {/* Transformation Steps - Equal Height Layout */}
        <div className="relative">
          {/* Desktop process flow with connecting lines */}
          <div className="hidden lg:block absolute top-20 left-1/2 w-[calc(100%-200px)] h-0.5 bg-blue-200 -translate-x-1/2" />

          <div className="flex flex-col lg:flex-row gap-8 relative">
            {transformationSteps.map((step, index) => (
              <div
                key={index}
                className={`flex-1 group transition-all duration-700 ${
                  isInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 150 + 700}ms` }}
              >
                <div className="velox-card-traditional p-8 h-full flex flex-col items-center text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-blue-200">
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

                  <Heading level="3" className="velox-text-h3 mb-4 group-hover:text-blue-700 transition-colors duration-300">
                    {step.title}
                  </Heading>

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
          <Button size="lg" className="velox-btn-primary" asChild>
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
