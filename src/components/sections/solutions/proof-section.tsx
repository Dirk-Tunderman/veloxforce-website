"use client"

import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"
import { Building2, Briefcase, Users, CheckCircle2 } from "lucide-react"

interface CaseExample {
  icon: string
  industry: string
  challenge: string
  solution: string
  results: string[]
}

interface ProofSectionProps {
  title: string
  description: string
  caseExamples: CaseExample[]
}

const iconMap = {
  Building2,
  Briefcase,
  Users,
}

export function ProofSection({ title, description, caseExamples }: ProofSectionProps) {
  return (
    <Section padding="xl" background="light-blue">
      <Container className="max-w-6xl">
        <div className="text-center mb-16">
          <Heading level="2" className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {title}
          </Heading>
          <Text className="text-lg text-gray-700 max-w-4xl mx-auto">
            {description}
          </Text>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseExamples.map((example, index) => {
            const IconComponent = iconMap[example.icon as keyof typeof iconMap] || Building2
            
            return (
              <div key={index} className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                    <IconComponent className="w-6 h-6 text-green-600" />
                  </div>
                  <Heading level="3" className="text-lg font-semibold text-gray-900">
                    {example.industry}
                  </Heading>
                </div>

                <div className="space-y-4">
                  <div>
                    <Text className="font-medium text-gray-900 mb-2">Challenge:</Text>
                    <Text className="text-gray-600 text-sm">
                      {example.challenge}
                    </Text>
                  </div>

                  <div>
                    <Text className="font-medium text-gray-900 mb-2">Solution:</Text>
                    <Text className="text-gray-600 text-sm">
                      {example.solution}
                    </Text>
                  </div>

                  <div>
                    <Text className="font-medium text-gray-900 mb-3">Results:</Text>
                    <ul className="space-y-2">
                      {example.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-start">
                          <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                          <Text className="text-gray-600 text-sm">
                            {result}
                          </Text>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}
