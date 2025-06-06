"use client"

import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"
import { Check, X, ArrowRight, Zap, Users, Cog } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

export function ServiceDifferentiationSection() {
  return (
    <Section padding="xl" background="light-to-white">
      <Container className="max-w-7xl">
        {/* Section Title */}
        <div className="text-center mb-16">
          <Heading level="2" className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            This Isn't Automation. It Isn't Consulting. It's Something New.
          </Heading>
          <Text className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            <span className="font-bold">AI made custom software affordable.</span> We made it accessible by <span className="font-bold">running it for you</span>. 
            <span className="font-semibold text-gray-900"> That's the <span className="font-bold">Service-as-Software revolution</span>.</span>
          </Text>
        </div>

        {/* Three-Column Comparison */}
        <div className="grid lg:grid-cols-7 gap-8 mb-16">
          {/* Automation Agencies (20% weight) */}
          <div className="lg:col-span-2">
            <div className="bg-gray-100 rounded-2xl p-8 h-full relative flex flex-col">
              <div className="absolute -top-3 left-6 bg-gray-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                Automation Agencies
              </div>
              
              <div className="pt-4 flex-1 flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <Cog className="h-6 w-6 text-gray-700" />
                  <Heading level="3" className="text-lg font-semibold text-gray-900">Tools You Manage</Heading>
                </div>
                
                <div className="space-y-3 mb-6 flex-1">
                  <div className="flex items-start gap-2">
                    <X className="h-4 w-4 text-gray-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Give you automation tools</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <X className="h-4 w-4 text-gray-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">You manage the maintenance</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <X className="h-4 w-4 text-gray-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">You handle when it breaks</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <X className="h-4 w-4 text-gray-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Still your responsibility</span>
                  </div>
                </div>
                
                <div className="text-center">
                  <Text className="text-gray-600 font-medium">Linear Growth</Text>
                  <Text className="text-xs text-gray-500">More complexity = More management</Text>
                </div>
              </div>
            </div>
          </div>

          {/* Service Businesses (20% weight) */}
          <div className="lg:col-span-2">
            <div className="bg-gray-100 rounded-2xl p-8 h-full relative flex flex-col">
              <div className="absolute -top-3 left-6 bg-gray-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                Service Businesses
              </div>
              
              <div className="pt-4 flex-1 flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="h-6 w-6 text-gray-700" />
                  <Heading level="3" className="text-lg font-semibold text-gray-900">People You Pay</Heading>
                </div>
                
                <div className="space-y-3 mb-6 flex-1">
                  <div className="flex items-start gap-2">
                    <X className="h-4 w-4 text-gray-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Scale with more people</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <X className="h-4 w-4 text-gray-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Linear cost increases</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <X className="h-4 w-4 text-gray-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Quality varies by person</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <X className="h-4 w-4 text-gray-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Human limitations</span>
                  </div>
                </div>
                
                <div className="text-center">
                  <Text className="text-gray-600 font-medium">Human Scaling</Text>
                  <Text className="text-xs text-gray-500">Double volume = Double costs</Text>
                </div>
              </div>
            </div>
          </div>

          {/* Service-as-Software (60% weight - Enhanced) */}
          <div className="lg:col-span-3">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-300 rounded-2xl p-8 h-full relative shadow-lg flex flex-col">
              <div className="absolute -top-3 left-8 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-md">
                Service-as-Software
              </div>
              
              <div className="pt-4 flex-1 flex flex-col">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-blue-600 rounded-full p-2">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <Heading level="3" className="text-xl font-bold text-blue-900">Outcomes You Receive</Heading>
                </div>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-800 font-medium">We build custom software for YOUR process</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-800 font-medium">We run it forever - you never touch it</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-800 font-medium">Scales with software, not people</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-800 font-medium">You delegate work, receive outcomes</span>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-4 text-center mb-6">
                  <Text className="text-blue-900 font-bold text-lg">Exponential Efficiency</Text>
                  <Text className="text-sm text-gray-600">Double volume = Same cost</Text>
                </div>
                
                <div className="text-center">
                  <Link 
                    href="/our-approach"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-md hover:shadow-lg"
                  >
                    See How This Works
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Insight */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl p-8 text-center">
          <Heading level="3" className="text-2xl md:text-3xl font-bold mb-4">The Revolutionary Insight</Heading>
          <Text className="text-lg md:text-xl mb-2 text-center">
            AI made custom development affordable. We made it accessible by running it forever.
          </Text>
          <Text className="text-blue-100 text-center">
            That's what makes this Service-as-Software, not just cheaper custom development.
          </Text>
        </div>
      </Container>
    </Section>
  )
}