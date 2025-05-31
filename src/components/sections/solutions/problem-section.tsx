"use client"

import { AlertTriangle } from "lucide-react"

import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"
import { FadeIn, SlideUp, StaggeredChildren } from "@/components/ui/animated-element"
import { IconByName } from "@/lib/icon-resolver"

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

export function ProblemSection({ title, description, painPoints }: ProblemSectionProps) {
  return (
    <Section padding="lg">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <SlideUp delay={0.1} duration={0.6}>
            <div className="bg-destructive/10 rounded-lg p-6 border border-destructive/20 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-destructive/20">
                  <AlertTriangle className="h-5 w-5 text-gray-700" />
                </div>
                <Heading level="2" className="text-destructive">
                  {title}
                </Heading>
              </div>
              <div className="space-y-4 text-muted-foreground">
                {typeof description === "string" ? (
                  <Text>{description}</Text>
                ) : (
                  description
                )}
              </div>
            </div>
          </SlideUp>

          <div className="space-y-6">
            {painPoints.map((point, index) => (
              <SlideUp
                key={index}
                delay={0.3 + index * 0.15}
                duration={0.5}
              >
                <div className="bg-background rounded-lg p-6 border border-border shadow-sm hover:shadow-md hover:border-border/80 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-destructive/10">
                      <IconByName name={point.icon} className="h-5 w-5 text-gray-700" />
                    </div>
                    <div>
                      <Heading level="3" className="text-lg mb-2">
                        {point.title}
                      </Heading>
                      <Text className="text-muted-foreground">
                        {point.description}
                      </Text>
                    </div>
                  </div>
                </div>
              </SlideUp>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}
