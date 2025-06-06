"use client"

import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"
import { Button } from "@/components/ui/button"
import { Check, ArrowRight, Shield } from "lucide-react"
import Link from "next/link"

export function ServicePromise() {
  return (
    <Section padding="xl" background="white-to-light">
      <Container className="max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Heading level="2" className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Our Service-as-Software Guarantee
          </Heading>
          <Text className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
            Simple, clear promises that define our partnership
          </Text>
        </div>

        {/* Promise Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-2xl p-8 border border-blue-200 shadow-lg text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-8 h-8 text-blue-600" />
            </div>
            <Heading level="3" className="text-lg font-bold text-gray-900 mb-4">
              You delegate a process
            </Heading>
            <Text className="text-gray-600 leading-relaxed">
              Hand over any repetitive process that follows clear rules and consumes your time.
            </Text>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-green-200 shadow-lg text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-8 h-8 text-green-600" />
            </div>
            <Heading level="3" className="text-lg font-bold text-gray-900 mb-4">
              We deliver perfect results
            </Heading>
            <Text className="text-gray-600 leading-relaxed">
              Receive outcomes that meet or exceed your quality standards, delivered consistently.
            </Text>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-purple-200 shadow-lg text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-8 h-8 text-purple-600" />
            </div>
            <Heading level="3" className="text-lg font-bold text-gray-900 mb-4">
              You never touch the technology
            </Heading>
            <Text className="text-gray-600 leading-relaxed">
              No software to learn, no systems to manage, no technical decisions to make.
            </Text>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-orange-200 shadow-lg text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-8 h-8 text-orange-600" />
            </div>
            <Heading level="3" className="text-lg font-bold text-gray-900 mb-4">
              We handle all complexity forever
            </Heading>
            <Text className="text-gray-600 leading-relaxed">
              Maintenance, updates, scaling, troubleshooting—we own all technical complexity.
            </Text>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-teal-200 shadow-lg text-center lg:col-span-2">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-8 h-8 text-teal-600" />
            </div>
            <Heading level="3" className="text-lg font-bold text-gray-900 mb-4">
              You focus on what only you can do: strategy and growth
            </Heading>
            <Text className="text-gray-600 leading-relaxed">
              With operations handled, you can focus on the high-value activities that drive business success.
            </Text>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl p-8 text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <Shield className="w-8 h-8 text-white" />
            <Heading level="3" className="text-2xl md:text-3xl font-bold">
              This Is Our Promise To You
            </Heading>
            <Shield className="w-8 h-8 text-white" />
          </div>
          
          <Text className="text-lg md:text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Service-as-Software means you get the outcomes without the operational burden. 
            That's not just our business model—it's our commitment.
          </Text>
          
          <Button
            size="lg"
            className="bg-white text-blue-600 hover:bg-blue-50 text-lg font-semibold px-8 py-4 h-auto rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            asChild
          >
            <Link href="/tools/business-audit">
              Delegate Your First Process
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </Container>
    </Section>
  )
}
