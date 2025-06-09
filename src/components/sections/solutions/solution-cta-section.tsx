"use client"

import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface CtaButton {
  label: string
  href: string
}

interface SolutionCtaSectionProps {
  title: string
  description: string
  primaryCta: CtaButton
  secondaryCta: CtaButton
}

export function SolutionCtaSection({ title, description, primaryCta, secondaryCta }: SolutionCtaSectionProps) {
  return (
    <Section padding="xl" background="primary">
      <Container className="max-w-4xl">
        <div className="text-center space-y-8">
          <div className="space-y-6">
            <Heading level="2" className="text-3xl md:text-4xl font-bold text-white">
              {title}
            </Heading>
            
            <Text className="text-xl text-primary-foreground/90 leading-relaxed">
              {description}
            </Text>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 text-lg font-semibold px-8 py-4 h-auto rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              asChild
            >
              <Link href={primaryCta.href}>
                {primaryCta.label}
              </Link>
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="text-lg font-semibold px-8 py-4 h-auto rounded-xl border-2 border-white text-white hover:bg-white hover:text-blue-600 transition-all duration-300"
              asChild
            >
              <Link href={secondaryCta.href}>
                {secondaryCta.label}
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  )
}
