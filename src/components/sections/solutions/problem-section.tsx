"use client"

import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"
import { AlertTriangle, Clock, RefreshCw } from "lucide-react"

interface PainPoint {
  icon: string
  title: string
  description: string
}

interface ProblemSectionProps {
  title: string
  description: React.ReactNode
  painPoints: PainPoint[]
}

const iconMap = {
  Clock,
  RefreshCw,
  AlertTriangle,
}

export function ProblemSection({ title, description, painPoints }: ProblemSectionProps) {
  return (
    <Section padding="xl" background="light-blue">
      <Container className="max-w-6xl">
        <div className="text-center mb-16">
          <Heading level="2" className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {title}
          </Heading>
          <div className="text-lg text-gray-700 max-w-4xl mx-auto">
            {description}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {painPoints.map((point, index) => {
            const IconComponent = iconMap[point.icon as keyof typeof iconMap] || AlertTriangle
            
            return (
              <div key={index} className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                  <IconComponent className="w-6 h-6 text-red-600" />
                </div>
                <Heading level="3" className="text-xl font-semibold text-gray-900 mb-4">
                  {point.title}
                </Heading>
                <Text className="text-gray-600 leading-relaxed">
                  {point.description}
                </Text>
              </div>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}
