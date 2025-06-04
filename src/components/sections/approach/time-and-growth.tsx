"use client"

import { TrendingUp, Users, Zap, Heart, BarChart3 } from "lucide-react"

import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"

const benefits = [
  {
    icon: Heart,
    title: "Personal Freedom",
    description: "Those late evenings might become family time again. Weekend work could become the exception, not the rule. Your digital team handles operations while you focus on what matters most.",
    color: "green"
  },
  {
    icon: TrendingUp,
    title: "Business Growth",
    description: "With operational constraints removed, you can say yes to more opportunities. Customer responses happen faster. Order capacity expands instantly. Busy seasons become manageable without scrambling for temporary help.",
    color: "blue"
  }
]

const competitiveAdvantages = [
  {
    icon: Zap,
    title: "Customer inquiry",
    traditional: "Answered in days",
    velox: "Answered in hours"
  },
  {
    icon: BarChart3,
    title: "Big order comes in",
    traditional: "Scramble to handle",
    velox: "System handles instantly"
  },
  {
    icon: Users,
    title: "Busy season",
    traditional: "Hire temps or turn down business",
    velox: "AI doesn't need overtime"
  }
]

export function TimeAndGrowthSection() {

  return (
    <Section padding="lg" background="light-to-white">
      <Container>
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Heading level="2" className="velox-text-h2 mb-6">
              How This Could Transform Your Business
            </Heading>
            <Text className="text-lg text-gray-600">
              When you can delegate operations like this, two things typically happen.
            </Text>
          </div>

          {/* Main Benefits */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className={`${benefit.color === 'green' ? 'bg-green-50 border-green-200' : 'bg-blue-50 border-blue-200'} border rounded-lg p-8 hover:shadow-md transition-shadow duration-200`}
              >
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 ${benefit.color === 'green' ? 'bg-green-100' : 'bg-blue-100'} rounded-lg flex items-center justify-center mr-4`}>
                    <benefit.icon className={`w-6 h-6 ${benefit.color === 'green' ? 'text-green-600' : 'text-blue-600'}`} />
                  </div>
                  <Heading level="3" className="velox-text-h3">
                    {benefit.title}:
                  </Heading>
                </div>
                <Text className="velox-text-body text-gray-700">
                  {benefit.description}
                </Text>
              </div>
            ))}
          </div>

          {/* Key Message */}
          <div className="text-center mb-16">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 max-w-2xl mx-auto">
              <Text className="text-lg font-semibold text-blue-800 mb-4">
                The key is that you're delegating outcomes, not managing tools.
              </Text>
              <Text className="velox-text-body text-blue-700">
                You say "handle these invoices" not "run this software." That's a fundamental difference.
              </Text>
            </div>
          </div>


        </div>
      </Container>
    </Section>
  )
}
