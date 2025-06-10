"use client"

import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"
import { Button } from "@/components/ui/button"
import { ArrowDown, Shield } from "lucide-react"
import Link from "next/link"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"

export function HeroQualificationSection() {
  const { ref: heroRef, isVisible: heroVisible } = useIntersectionObserver({ threshold: 0.2 })

  return (
    <Section padding="xl" background="white-to-light">
      <Container className="max-w-6xl">
        {/* Hero Content */}
        <div 
          ref={heroRef as any}
          className={`text-center mb-16 transition-all duration-800 ease-out ${
            heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h1 className="velox-text-h1-premium mb-6">
            The Honest Guide to Service-as-Software Fit
          </h1>
          <Text className="velox-text-lead max-w-4xl mx-auto mb-8">
            Not every business is ready for Service-as-Software.{" "}
            <span className="font-semibold text-gray-900">Use this framework to determine if you are.</span>
          </Text>
          
          <Button
            size="lg"
            className="relative bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-lg font-semibold px-12 py-6 h-auto rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 overflow-hidden group"
            asChild
          >
            <Link href="#readiness-matrix">
              <span className="relative z-10 flex items-center">
                Skip to Self-Assessment Tool
                <ArrowDown className="ml-2 h-5 w-5" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </Link>
          </Button>
        </div>

        {/* Trust Building Section */}
        <div className="bg-white rounded-2xl p-8 border border-blue-100 shadow-lg max-w-4xl mx-auto relative">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-blue-700 rounded-t-2xl"></div>
          <div className="flex items-start gap-6">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl flex items-center justify-center border border-blue-200 shadow-sm">
              <Shield className="w-6 h-6 text-blue-600" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Before You Read Further
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We've turned away <span className="font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded">23% of potential clients</span> because the fit wasn't right.
                This guide helps you determine - honestly - if Service-as-Software makes sense for you.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <p className="text-gray-700">
                    <span className="font-semibold text-gray-900">If it doesn't,</span> we'll tell you what to do instead.
                  </p>
                </div>
                <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <p className="text-gray-700">
                    <span className="font-semibold text-gray-900">If it does,</span> you'll know exactly why and what to expect.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}