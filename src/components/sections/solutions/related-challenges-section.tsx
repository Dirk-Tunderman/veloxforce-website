"use client"

import { useRef } from "react"
import Link from "next/link"
import { useInView } from "framer-motion"
import { ArrowRight } from "lucide-react"

import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"
import { Button } from "@/components/ui/button"
import { IconByName } from "@/lib/icon-resolver"

interface RelatedChallenge {
  title: string
  description: string
  href: string
  icon: string
}

interface RelatedChallengesSectionProps {
  title: string
  description: React.ReactNode
  challenges: RelatedChallenge[]
}

export function RelatedChallengesSection({
  title,
  description,
  challenges
}: RelatedChallengesSectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <Section padding="lg">
      <Container>
        <div className="text-center mb-12">
          <Heading level="2" className="mb-4">
            {title}
          </Heading>
          <Text variant="lead" className="max-w-3xl mx-auto text-muted-foreground">
            {description}
          </Text>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {challenges.map((challenge, index) => (
            <div
              key={index}
              className={`bg-background rounded-lg border border-border shadow-sm overflow-hidden transition-all duration-700 hover:shadow-md hover:border-primary/20 ${
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150 + 100}ms` }}
            >
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <IconByName name={challenge.icon} className="h-6 w-6 text-gray-700" />
                  </div>
                  <Heading level="3" className="text-xl">
                    {challenge.title}
                  </Heading>
                </div>
                <Text className="text-muted-foreground mb-6">
                  {challenge.description}
                </Text>
                <Button variant="ghost" className="group" asChild>
                  <Link href={challenge.href} className="flex items-center gap-2">
                    Explore the Solution
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
