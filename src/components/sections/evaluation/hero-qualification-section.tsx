"use client"

import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"
import { Button } from "@/components/ui/button"
import { ArrowDown, Shield } from "lucide-react"
import Link from "next/link"

export function HeroQualificationSection() {
  return (
    <Section padding="xl" background="white-to-light">
      <Container className="max-w-6xl">
        {/* Hero Content */}
        <div className="text-center mb-16">
          <Heading level="1" className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            The Honest Guide to Service-as-Software Fit
          </Heading>
          <Text className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-4xl mx-auto mb-8">
            Not every business is ready for Service-as-Software.{" "}
            <span className="font-semibold">Use this framework to determine if you are.</span>
          </Text>
          
          <Button
            size="lg"
            className="velox-cta-primary text-lg font-semibold px-8 py-4 h-auto rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            asChild
          >
            <Link href="#readiness-matrix">
              Skip to Self-Assessment Tool
              <ArrowDown className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>

        {/* Trust Building Section */}
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8 max-w-4xl mx-auto">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <Heading level="3" className="text-xl font-bold text-gray-900 mb-2">
                Before You Read Further
              </Heading>
              <Text className="text-gray-700 mb-4">
                We've turned away <span className="font-bold text-blue-600">23% of potential clients</span> because the fit wasn't right.
                This guide helps you determine - honestly - if Service-as-Software makes sense for you.
              </Text>
              <div className="space-y-2">
                <Text className="text-gray-700">
                  <span className="font-semibold">If it doesn't,</span> we'll tell you what to do instead.
                </Text>
                <Text className="text-gray-700">
                  <span className="font-semibold">If it does,</span> you'll know exactly why and what to expect.
                </Text>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}