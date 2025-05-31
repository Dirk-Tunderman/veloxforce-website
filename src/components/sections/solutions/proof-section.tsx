"use client"

import { CheckCircle2 } from "lucide-react"

import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"
import { FadeIn, SlideUp } from "@/components/ui/animated-element"
import { IconByName } from "@/lib/icon-resolver"

interface CaseExample {
  icon: string
  industry: string
  challenge: string
  solution: string
  results: string[]
}

interface ProofSectionProps {
  title: string
  description: React.ReactNode
  caseExamples: CaseExample[]
}

export function ProofSection({ title, description, caseExamples }: ProofSectionProps) {
  return (
    <Section padding="lg">
      <Container>
        <FadeIn delay={0.1} duration={0.6} className="text-center mb-12">
          <Heading level="2" className="mb-4" highlight>
            {title}
          </Heading>
          <Text variant="lead" className="max-w-3xl mx-auto text-muted-foreground">
            {description}
          </Text>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseExamples.map((example, index) => (
            <SlideUp
              key={index}
              delay={0.3 + index * 0.15}
              duration={0.6}
            >
              <div className="bg-background rounded-lg border border-border shadow-sm hover:shadow-md hover:border-primary/20 overflow-hidden transition-all duration-300 h-full flex flex-col">
                <div className="bg-primary/5 p-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <IconByName name={example.icon} className="h-5 w-5 text-gray-700" />
                  </div>
                  <Heading level="3" className="text-lg">
                    {example.industry}
                  </Heading>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="mb-4">
                    <Text weight="medium" className="mb-2 text-primary">Challenge:</Text>
                    <Text className="text-muted-foreground">
                      {example.challenge}
                    </Text>
                  </div>
                  <div className="mb-4">
                    <Text weight="medium" className="mb-2 text-secondary">Solution:</Text>
                    <Text className="text-muted-foreground">
                      {example.solution}
                    </Text>
                  </div>
                  <div className="mt-auto">
                    <Text weight="medium" className="mb-2 text-accent">Results:</Text>
                    <ul className="space-y-2">
                      {example.results.map((result, i) => (
                        <li key={i} className="flex items-start gap-2 group">
                          <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5 group-hover:text-primary transition-colors duration-300" />
                          <Text className="text-muted-foreground group-hover:text-foreground/90 transition-colors duration-300">
                            {result}
                          </Text>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </SlideUp>
          ))}
        </div>
      </Container>
    </Section>
  )
}
