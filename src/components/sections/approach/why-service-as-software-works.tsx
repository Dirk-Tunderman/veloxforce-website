"use client"

import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"
import { Button } from "@/components/ui/button"
import { Check, ArrowRight, Target, Shield, Zap, Crown } from "lucide-react"
import Link from "next/link"

export function WhyServiceAsSoftwareWorks() {
  return (
    <Section padding="xl" background="white-to-light">
      <Container className="max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
              Why Service-as-Software Works
            </span>
          </h2>
          <Text className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
            The fundamental advantages that make this model superior to traditional approaches
          </Text>
        </div>

        {/* Key Principles Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center">
                <Target className="w-8 h-8 text-white" />
              </div>
              <Heading level="3" className="text-xl font-bold text-blue-900">
                You delegate the entire process (not just parts)
              </Heading>
            </div>
            <Text className="text-blue-800 leading-relaxed">
              Unlike partial automation that leaves you managing the gaps, you hand over the complete process 
              and receive complete results. No coordination overhead.
            </Text>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-200">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <Heading level="3" className="text-xl font-bold text-green-900">
                We guarantee the outcomes (not just the tools)
              </Heading>
            </div>
            <Text className="text-green-800 leading-relaxed">
              You're not buying software that might work. You're buying guaranteed results. 
              If the outcomes aren't perfect, that's our problem to solve, not yours.
            </Text>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl p-8 border border-purple-200">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-violet-600 rounded-full flex items-center justify-center">
                <Check className="w-8 h-8 text-white" />
              </div>
              <Heading level="3" className="text-xl font-bold text-purple-900">
                You receive results (not systems to manage)
              </Heading>
            </div>
            <Text className="text-purple-800 leading-relaxed">
              No learning curves, no maintenance, no troubleshooting. You send inputs, 
              you receive outputs. The technology is invisible to you.
            </Text>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-8 border border-orange-200">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-amber-600 rounded-full flex items-center justify-center">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <Heading level="3" className="text-xl font-bold text-orange-900">
                We handle all complexity (technical decisions, maintenance, scaling)
              </Heading>
            </div>
            <Text className="text-orange-800 leading-relaxed">
              Technology choices, updates, scaling decisions, troubleshooting—all handled by us. 
              You never have to become a technology expert.
            </Text>
          </div>
        </div>

        {/* Perfect Partnership */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-2xl p-8 text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <Crown className="w-8 h-8 text-white" />
            <Heading level="3" className="text-2xl md:text-3xl font-bold">
              Perfect partnership: You focus on strategy, we handle execution
            </Heading>
            <Crown className="w-8 h-8 text-white" />
          </div>
          <Text className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            This clear division of responsibilities ensures you can focus on what only you can do: 
            growing your business and serving your customers.
          </Text>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg max-w-4xl mx-auto">
            <Heading level="3" className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Experience Service-as-Software?
            </Heading>
            <Text className="text-gray-600 leading-relaxed mb-8">
              See how this model can transform your most time-consuming processes into delegated outcomes.
            </Text>
            
            <Button
              size="lg"
              className="velox-cta-primary text-lg font-semibold px-8 py-4 h-auto rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              asChild
            >
              <Link href="/tools/business-audit">
                Check What I Can Delegate
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  )
}
