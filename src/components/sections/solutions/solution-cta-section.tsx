"use client"

import { useRef } from "react"
import Link from "next/link"
import { useInView } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"

interface SolutionCtaSectionProps {
  title: string
  description: React.ReactNode
  primaryCta: {
    label: string
    href: string
  }
  secondaryCta?: {
    label: string
    href: string
  }
}

export function SolutionCtaSection({
  title,
  description,
  primaryCta,
  secondaryCta
}: SolutionCtaSectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <Section padding="lg" background="primary">
      <Container>
        <div
          ref={ref}
          className={`flex flex-col items-center text-center max-w-3xl mx-auto transition-all duration-700 ${
            isInView ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <Heading level="2" className="mb-6 text-white">
            {title}
          </Heading>
          <Text variant="lead" className="mb-8 text-primary-foreground/90">
            {description}
          </Text>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" variant="secondary" asChild>
              <Link href={primaryCta.href}>{primaryCta.label}</Link>
            </Button>
            {secondaryCta && (
              <Button
                size="lg"
                className={secondaryCta.href.includes('/tools/business-audit')
                  ? "bg-gradient-to-r from-blue-600 to-blue-900 hover:from-blue-700 hover:to-blue-950 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  : "bg-transparent text-white border-white hover:bg-white/10"
                }
                variant={secondaryCta.href.includes('/tools/business-audit') ? undefined : "outline"}
                asChild
              >
                <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
              </Button>
            )}
          </div>
          <Text className="mt-8 text-primary-foreground/80 text-sm">
            No obligation. Discover exactly how much time and money your business could reclaim.
          </Text>
        </div>
      </Container>
    </Section>
  )
}
