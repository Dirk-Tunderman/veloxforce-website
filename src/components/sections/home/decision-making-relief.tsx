"use client"

import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"
import { Button } from "@/components/ui/button"
import { Brain, Settings, AlertTriangle, TrendingUp, ArrowRight } from "lucide-react"
import Link from "next/link"

export function DecisionMakingRelief() {
  return (
    <Section padding="xl" background="white-to-light">
      <Container className="max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Heading level="2" className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            We Handle All The Complex Decisions You Hate
          </Heading>
          <Text className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
            Stop wrestling with technical complexity. Focus on what only you can do.
          </Text>
        </div>

        {/* Decision Categories Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                <Settings className="w-6 h-6 text-red-600" />
              </div>
              <Heading level="3" className="text-xl font-bold text-gray-900">
                Which technology works best for your process
              </Heading>
            </div>
            <Text className="text-gray-600 leading-relaxed">
              No more researching tools, comparing features, or worrying about compatibility. 
              We choose the right technology stack for your specific needs.
            </Text>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-orange-600" />
              </div>
              <Heading level="3" className="text-xl font-bold text-gray-900">
                How to handle exceptions and edge cases
              </Heading>
            </div>
            <Text className="text-gray-600 leading-relaxed">
              We design robust systems that handle the unexpected. When edge cases arise, 
              we solve them without disrupting your business.
            </Text>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-blue-600" />
              </div>
              <Heading level="3" className="text-xl font-bold text-gray-900">
                When to scale up or optimize performance
              </Heading>
            </div>
            <Text className="text-gray-600 leading-relaxed">
              We monitor performance and proactively scale your systems. 
              You'll never have to worry about capacity or speed issues.
            </Text>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Brain className="w-6 h-6 text-green-600" />
              </div>
              <Heading level="3" className="text-xl font-bold text-gray-900">
                What to do when systems need updates
              </Heading>
            </div>
            <Text className="text-gray-600 leading-relaxed">
              Technology evolves constantly. We handle all updates, migrations, 
              and improvements so your processes keep running smoothly.
            </Text>
          </div>
        </div>

        {/* Key Message */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl p-8 text-center">
          <Heading level="3" className="text-2xl md:text-3xl font-bold mb-4">
            You make business decisions. We make technical decisions.
          </Heading>
          <Text className="text-lg md:text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            This clear separation lets you focus on strategy, growth, and customer relationships 
            while we handle all the technical complexity behind the scenes.
          </Text>
          
          <Button
            size="lg"
            className="bg-white text-blue-600 hover:bg-blue-50 text-lg font-semibold px-8 py-4 h-auto rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            asChild
          >
            <Link href="/tools/business-audit">
              See What I Can Delegate
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </Container>
    </Section>
  )
}
