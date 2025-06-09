"use client"

import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"
import { FileText, MessageCircle, Users, ArrowRight, Clock, X, Check } from "lucide-react"

export function WhatYoullReceiveSection() {
  return (
    <Section padding="xl" background="light-to-white">
      <Container className="max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Heading level="2" className="velox-text-h2 mb-6">
            Before You Decide: See Exactly What You'll Receive
          </Heading>
          <Text className="velox-text-lead max-w-4xl mx-auto">
            Unlike software demos, you can't "try" Service-as-Software. But you can see exactly what you'll receive:
          </Text>
        </div>

        {/* Examples Grid */}
        <div className="space-y-12 mb-16">
          {/* Invoice Processing Example */}
          <div className="card-base">
            <div className="flex items-center gap-4 mb-6">
              <div className="icon-container">
                <FileText className="w-6 h-6 icon-primary" />
              </div>
              <Heading level="3" className="velox-text-h3">
                Invoice Processing Example:
              </Heading>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="card-challenge">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                    <X className="w-5 h-5 text-red-600" />
                  </div>
                  <Text className="font-semibold text-red-900">What you send us:</Text>
                </div>
                <Text className="velox-text-body text-red-800">
                  PDF invoices via email, vendor portals, paper invoices
                </Text>
              </div>

              <div className="card-solution">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <Check className="w-5 h-5 text-green-600" />
                  </div>
                  <Text className="font-semibold text-green-900">What you receive:</Text>
                </div>
                <Text className="velox-text-body text-green-800">
                  Organized spreadsheet with GL codes, approval status, payment schedule - delivered within 4 hours
                </Text>
              </div>
            </div>
          </div>

          {/* Customer Service Example */}
          <div className="card-base">
            <div className="flex items-center gap-4 mb-6">
              <div className="icon-container">
                <MessageCircle className="w-6 h-6 icon-primary" />
              </div>
              <Heading level="3" className="velox-text-h3">
                Customer Service Example:
              </Heading>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="card-challenge">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                    <X className="w-5 h-5 text-red-600" />
                  </div>
                  <Text className="font-semibold text-red-900">What you delegate:</Text>
                </div>
                <Text className="velox-text-body text-red-800">
                  Customer inquiry management from multiple channels
                </Text>
              </div>

              <div className="card-solution">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <Check className="w-5 h-5 text-green-600" />
                  </div>
                  <Text className="font-semibold text-green-900">What you receive:</Text>
                </div>
                <Text className="velox-text-body text-green-800">
                  Responses sent, complex cases escalated with full context, weekly summary report
                </Text>
              </div>
            </div>
          </div>

          {/* Sales Follow-up Example */}
          <div className="card-base">
            <div className="flex items-center gap-4 mb-6">
              <div className="icon-container">
                <Users className="w-6 h-6 icon-accent" />
              </div>
              <Heading level="3" className="velox-text-h3">
                Sales Follow-up Example:
              </Heading>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="card-challenge">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                    <X className="w-5 h-5 text-red-600" />
                  </div>
                  <Text className="font-semibold text-red-900">What you delegate:</Text>
                </div>
                <Text className="velox-text-body text-red-800">
                  Lead nurturing and pipeline management
                </Text>
              </div>

              <div className="card-solution">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <Check className="w-5 h-5 text-green-600" />
                  </div>
                  <Text className="font-semibold text-green-900">What you receive:</Text>
                </div>
                <Text className="velox-text-body text-green-800">
                  Warm leads ready for your calls, all touchpoints logged, pipeline updated
                </Text>
              </div>
            </div>
          </div>
        </div>

        {/* Key Message */}
        <div className="card-solution text-center">
          <Heading level="3" className="velox-text-h3 text-blue-900 mb-4">
            The Key: You never touch the technology. You just receive perfect results.
          </Heading>
          <Text className="velox-text-body text-blue-800 max-w-3xl mx-auto">
            This is the fundamental difference between Service-as-Software and traditional automation.
            You delegate the entire process and receive the outcomes you need.
          </Text>
        </div>
      </Container>
    </Section>
  )
}
