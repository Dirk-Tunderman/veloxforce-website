"use client"

import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"

export function HeroSection() {
  return (
    <Section padding="xl" className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-muted/30" />

      <Container>
        <div className="relative z-10 flex flex-col items-center text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            <span className="block">End Operational Chaos. Reclaim Your Growth.</span>
            <span className="block mt-2 text-primary">
              Automation Certainty Delivered—No In-House Tech Expertise Required.
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg md:text-xl text-muted-foreground">
            Once Your Toughest Manual Processes Are Transformed by This Hybrid AI-Human Model,
            Costs Typically Slash by up to 50%, Execution Speed Triples, and Your Leadership
            is Freed to Drive the Business Forward—Guaranteed.
          </p>
          <div className="mt-8 max-w-2xl text-base md:text-lg text-muted-foreground">
            <p>
              Is your business battling the daily grind of operational drag? As a leader, are you caught between
              the ambition to scale and the exhausting reality of managing manual processes, firefighting errors,
              and watching strategic time get consumed by repetitive tasks?
            </p>
          </div>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">Request Your Automation Certainty Audit</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/our-approach">Learn More</Link>
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  )
}
