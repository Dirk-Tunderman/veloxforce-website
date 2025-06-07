"use client"

import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"
import { Check, X, ArrowRight, Zap, Users, Cog } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

export function ServiceDifferentiationSection() {
  return (
    <Section padding="xl" background="light-to-white" className="section-transition-ultra">
      <Container className="max-w-7xl">
        {/* Section Title */}
        <div className="text-center mb-16">
          <Heading level="2" className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            This Isn't Automation. It Isn't Consulting. <span className="gradient-text-blue">It's Something New</span>.
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
            <div className="comparison-card-old h-full relative flex flex-col">
              <div className="absolute -top-3 left-6 bg-gray-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                Automation Agencies
              </div>

              <div className="pt-6 flex-1 flex flex-col">
                <div className="comparison-icon-bad mx-auto mb-4">
                  <Cog className="h-5 w-5 text-gray-600" />
                </div>
                <Heading level="3" className="text-lg font-semibold text-gray-900 text-center mb-4">Give you tools to manage</Heading>

                <div className="space-y-3 mb-6 flex-1">
                  <div className="flex items-start gap-2">
                    <X className="h-4 w-4 text-gray-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">You handle when it breaks</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <X className="h-4 w-4 text-gray-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">You operate the complexity</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <X className="h-4 w-4 text-gray-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Tool-Focused</span>
                  </div>
                </div>

                <div className="text-center">
                  <Text className="text-gray-600 font-medium">Tool Management</Text>
                  <Text className="text-xs text-gray-500">You manage the complexity</Text>
                </div>
              </div>
            </div>
          </div>

          {/* Service Businesses (20% weight) */}
          <div className="lg:col-span-2">
            <div className="comparison-card-old h-full relative flex flex-col">
              <div className="absolute -top-3 left-6 bg-gray-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                Service Businesses
              </div>

              <div className="pt-6 flex-1 flex flex-col">
                <div className="comparison-icon-bad mx-auto mb-4">
                  <Users className="h-5 w-5 text-gray-600" />
                </div>
                <Heading level="3" className="text-lg font-semibold text-gray-900 text-center mb-4">People you pay hourly</Heading>

                <div className="space-y-3 mb-6 flex-1">
                  <div className="flex items-start gap-2">
                    <X className="h-4 w-4 text-gray-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Limited by human capacity</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <X className="h-4 w-4 text-gray-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Quality varies by person</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <X className="h-4 w-4 text-gray-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">People-Focused</span>
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
            <div className="service-card-recommended-final h-full relative flex flex-col">
              
              <div className="pt-8 flex-1 flex flex-col">
                <div className="comparison-icon-good mx-auto mb-6">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <Heading level="3" className="text-xl font-bold text-blue-900 text-center mb-6">Outcomes You Receive</Heading>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-800 font-medium">Outcomes you receive</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-800 font-medium">We handle all complexity</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-800 font-medium">Guaranteed results delivered</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-800 font-medium">Outcome-Focused</span>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-4 text-center mb-6">
                  <Text className="text-blue-900 font-bold text-lg">Exponential Efficiency</Text>
                  <Text className="text-sm text-gray-600">Double volume = Same cost</Text>
                </div>
                
                <div className="text-center">
                  <Link 
                    href="/our-approach"
                    className="velox-btn-ultra-premium inline-flex items-center gap-2 px-6 py-3 rounded-lg text-base"
                  >
                    <span className="relative z-10">See How This Works</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Insight */}
        <div className="stat-card-ultra text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-blue-700/10"></div>
          <div className="relative z-10">
            <Heading level="3" className="text-2xl md:text-3xl font-bold mb-4 hero-headline-enhanced" data-text="The Revolution: We Don't Sell You Tools to Manage">The Revolution: We Don't Sell You Tools to Manage</Heading>
            <Text className="text-lg md:text-xl mb-2 text-center font-semibold text-gray-900">
              We deliver a department that runs itself.
            </Text>
            <Text className="text-gray-600 text-center">
              AI made custom software affordable. We made it accessible by running it forever. That's the Service-as-Software revolution.
            </Text>
          </div>
        </div>
      </Container>
    </Section>
  )
}