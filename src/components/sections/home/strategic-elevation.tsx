"use client"

import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"
import { Button } from "@/components/ui/button"
import { Lightbulb, Users, TrendingUp, Target, ArrowRight } from "lucide-react"
import Link from "next/link"

export function StrategicElevation() {
  return (
    <Section padding="xl" background="light-to-white">
      <Container className="max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Heading level="2" className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            What Our Clients Do With Their Freed Time
          </Heading>
          <Text className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
            When operations run themselves, leaders can focus on what truly matters
          </Text>
        </div>

        {/* Activities Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <Heading level="3" className="text-xl font-bold text-blue-900">
                Develop new products and services
              </Heading>
            </div>
            <Text className="text-blue-800 leading-relaxed">
              With operational tasks handled, you can innovate and create new revenue streams 
              that differentiate your business in the market.
            </Text>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-200">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
              <Heading level="3" className="text-xl font-bold text-green-900">
                Build customer relationships
              </Heading>
            </div>
            <Text className="text-green-800 leading-relaxed">
              Spend quality time with your best customers, understand their evolving needs, 
              and create deeper partnerships that drive loyalty.
            </Text>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl p-8 border border-purple-200">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-violet-600 rounded-full flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <Heading level="3" className="text-xl font-bold text-purple-900">
                Plan expansion strategies
              </Heading>
            </div>
            <Text className="text-purple-800 leading-relaxed">
              Research new markets, plan strategic partnerships, and design growth initiatives 
              that scale your business to the next level.
            </Text>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-8 border border-orange-200">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-amber-600 rounded-full flex items-center justify-center">
                <Target className="w-8 h-8 text-white" />
              </div>
              <Heading level="3" className="text-xl font-bold text-orange-900">
                Focus on high-value activities only you can do
              </Heading>
            </div>
            <Text className="text-orange-800 leading-relaxed">
              Leadership, vision-setting, strategic decision-making, and relationship building—
              the activities that truly drive business value.
            </Text>
          </div>
        </div>

        {/* Key Message */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-2xl p-8 text-center">
          <Heading level="3" className="text-2xl md:text-3xl font-bold mb-4">
            Stop working IN your business. Start working ON your business.
          </Heading>
          <Text className="text-lg md:text-xl mb-8 text-gray-300 max-w-3xl mx-auto">
            When your processes run without you, you can focus on the strategic work 
            that only a business owner can do.
          </Text>
          
          <Button
            size="lg"
            className="bg-white text-gray-900 hover:bg-gray-100 text-lg font-semibold px-8 py-4 h-auto rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            asChild
          >
            <Link href="/tools/business-audit">
              Calculate My Strategic Time Savings
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </Container>
    </Section>
  )
}
