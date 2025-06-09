"use client"

import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"
import { Clock, Zap, BarChart3, TrendingUp } from "lucide-react"

interface Metric {
  icon: string
  value: string
  label: string
  description: string
}

interface TransformationArea {
  title: string
  description: string
}

interface TransformationSectionProps {
  title: string
  description: string
  metrics: Metric[]
  transformationAreas: TransformationArea[]
}

const iconMap = {
  Clock,
  Zap,
  BarChart3,
  TrendingUp,
}

export function TransformationSection({ title, description, metrics, transformationAreas }: TransformationSectionProps) {
  return (
    <Section padding="xl" background="white">
      <Container className="max-w-6xl">
        <div className="text-center mb-16">
          <Heading level="2" className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {title}
          </Heading>
          <Text className="text-lg text-gray-700 max-w-4xl mx-auto">
            {description}
          </Text>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {metrics.map((metric, index) => {
            const IconComponent = iconMap[metric.icon as keyof typeof iconMap] || TrendingUp
            
            return (
              <div key={index} className="text-center bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-200">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  {metric.value}
                </div>
                <Heading level="3" className="text-lg font-semibold text-gray-900 mb-2">
                  {metric.label}
                </Heading>
                <Text className="text-gray-600 text-sm">
                  {metric.description}
                </Text>
              </div>
            )
          })}
        </div>

        {/* Transformation Areas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {transformationAreas.map((area, index) => (
            <div key={index} className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8 border border-green-200">
              <Heading level="3" className="text-xl font-semibold text-gray-900 mb-4">
                {area.title}
              </Heading>
              <Text className="text-gray-700 leading-relaxed">
                {area.description}
              </Text>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
