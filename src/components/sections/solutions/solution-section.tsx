"use client"

import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"
import { CheckCircle2 } from "lucide-react"

interface SolutionPoint {
  title: string
  description: string
}

interface SolutionSectionProps {
  title: string
  description: React.ReactNode
  solutionPoints: SolutionPoint[]
}

export function SolutionSection({ title, description, solutionPoints }: SolutionSectionProps) {
  return (
    <Section padding="xl" background="white">
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
          {solutionPoints.map((point, index) => (
            <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-200 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <CheckCircle2 className="w-6 h-6 text-blue-600" />
              </div>
              <Heading level="3" className="text-xl font-semibold text-gray-900 mb-4">
                {point.title}
              </Heading>
              <Text className="text-gray-700 leading-relaxed">
                {point.description}
              </Text>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
