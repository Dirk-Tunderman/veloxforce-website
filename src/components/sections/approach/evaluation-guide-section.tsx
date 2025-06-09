"use client"

import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"
import { Button } from "@/components/ui/button"
import { X, Check, Calculator, TrendingUp, AlertTriangle, ArrowRight } from "lucide-react"
import Link from "next/link"

export function EvaluationGuideSection() {
  return (
    <Section padding="xl" background="white-to-light">
      <Container className="max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Heading level="1" className="velox-text-h1-premium mb-6">
            The Service-as-Software Method
          </Heading>
          <Text className="velox-text-lead max-w-4xl mx-auto">
            Four phases from overwhelm to operational freedom. Each designed to ensure success without disruption.
          </Text>
        </div>

        {/* Partnership Foundation */}
        <div className="card-base bg-blue-50 border border-blue-200 mb-16">
          <div className="text-center">
            <Heading level="3" className="velox-text-h3 text-blue-900 mb-4">
              Built on Partnership, Not Products
            </Heading>
            <Text className="velox-text-body text-blue-800 max-w-3xl mx-auto">
              Service-as-Software isn't about selling you tools to manage. It's about forming a partnership where
              <span className="font-semibold"> you focus on strategy while we handle execution</span>.
              Every phase is designed to ensure mutual success and seamless collaboration.
            </Text>
          </div>
        </div>

        {/* Hidden Cost Reality */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl p-8 mb-16">
          <div className="text-center mb-8">
            <Heading level="2" className="velox-text-h2 text-white mb-4">
              The Hidden Cost Reality:
            </Heading>
            <Text className="velox-text-lead text-blue-100 max-w-4xl mx-auto">
              Your current "cheap" manual process actually costs:
            </Text>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white/10 rounded-lg p-4 text-center">
              <div className="icon-container bg-white/20 mx-auto mb-3">
                <Calculator className="w-6 h-6 text-white" />
              </div>
              <Text className="text-sm text-blue-100 mb-1">Time spent × hourly rate</Text>
              <Text className="text-lg font-bold text-white">Direct Labor Cost</Text>
            </div>
            <div className="bg-white/10 rounded-lg p-4 text-center">
              <div className="icon-container bg-white/20 mx-auto mb-3">
                <AlertTriangle className="w-6 h-6 text-white" />
              </div>
              <Text className="text-sm text-blue-100 mb-1">Mistakes and rework</Text>
              <Text className="text-lg font-bold text-white">Error Costs</Text>
            </div>
            <div className="bg-white/10 rounded-lg p-4 text-center">
              <div className="icon-container bg-white/20 mx-auto mb-3">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <Text className="text-sm text-blue-100 mb-1">Supervision and coordination</Text>
              <Text className="text-lg font-bold text-white">Management Overhead</Text>
            </div>
            <div className="bg-white/10 rounded-lg p-4 text-center">
              <div className="icon-container bg-white/20 mx-auto mb-3">
                <ArrowRight className="w-6 h-6 text-white" />
              </div>
              <Text className="text-sm text-blue-100 mb-1">Strategic work not done</Text>
              <Text className="text-lg font-bold text-white">Opportunity Cost</Text>
            </div>
          </div>

          <div className="text-center">
            <Text className="velox-text-lead font-bold text-white mb-4">
              Most clients discover their manual process costs 3-5x what they thought.
            </Text>
            <Text className="velox-text-body text-blue-100">
              Once you understand the real cost, Service-as-Software makes perfect sense.
            </Text>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            size="lg"
            className="relative bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-lg font-semibold px-8 py-4 h-auto rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 overflow-hidden group"
            asChild
          >
            <Link href="/tools/business-audit">
              <span className="relative z-10">
                Calculate My Real Process Cost
                <ArrowRight className="ml-2 h-5 w-5" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </Link>
          </Button>
        </div>
      </Container>
    </Section>
  )
}
