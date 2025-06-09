"use client"

import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"
import { Button } from "@/components/ui/button"
import { Clock, RefreshCw, AlertTriangle, ArrowRight } from "lucide-react"
import Link from "next/link"

interface Challenge {
  icon: string
  title: string
  description: string
  href: string
}

interface RelatedChallengesSectionProps {
  title: string
  description: string
  challenges: Challenge[]
}

const iconMap = {
  Clock,
  RefreshCw,
  AlertTriangle,
}

export function RelatedChallengesSection({ title, description, challenges }: RelatedChallengesSectionProps) {
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {challenges.map((challenge, index) => {
            const IconComponent = iconMap[challenge.icon as keyof typeof iconMap] || AlertTriangle
            
            return (
              <div key={index} className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 group">
                <div className="flex items-start mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <IconComponent className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <Heading level="3" className="text-xl font-semibold text-gray-900 mb-3">
                      {challenge.title}
                    </Heading>
                    <Text className="text-gray-600 leading-relaxed mb-6">
                      {challenge.description}
                    </Text>
                    <Button
                      variant="outline"
                      className="group-hover:bg-blue-50 group-hover:border-blue-300 transition-all duration-300"
                      asChild
                    >
                      <Link href={challenge.href} className="flex items-center">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
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
