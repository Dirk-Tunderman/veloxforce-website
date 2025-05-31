"use client"

import Link from "next/link"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"
import { FadeIn, SlideUp, StaggeredChildren } from "@/components/ui/animated-element"
import { SectionTracker } from "@/components/analytics/section-tracker"

export function HeroSection() {
  return (
    <SectionTracker sectionName="Hero" sectionPosition={1}>
      <Section padding="xl" background="white-to-light" className="relative overflow-hidden">

        <Container>
          <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
            <SlideUp delay={0.1} duration={0.7}>
              <Heading level="1" className="mb-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                <span className="block">STOP MANAGING YOUR BUSINESS.</span>
                <span className="block">START BUILDING IT.</span>
              </Heading>
              <Text
                variant="lead"
                className="mt-6 text-muted-foreground"
              >
                How SME Leaders Free Resources - Time OR Money - to Focus on Growth Instead of Operations
              </Text>
            </SlideUp>

            <FadeIn delay={0.5} duration={0.7} className="mt-8 max-w-2xl">
              <div className="bg-muted rounded-xl overflow-hidden shadow-sm">
                {/* VSL Placeholder */}
                <div className="aspect-video bg-muted-foreground/10 flex items-center justify-center">
                  <div className="text-center p-8">
                    <Heading level="3" className="mb-4">Video Sales Letter</Heading>
                    <Text className="text-muted-foreground">
                      Watch how forward-thinking SMEs reclaim 20+ hours weekly through intelligent automation.
                    </Text>
                    {/* Replace with actual video component when available */}
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.7} duration={0.7} className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="flex flex-col items-center">
                  <Text className="font-bold text-lg text-primary">95%</Text>
                  <Text className="text-sm text-muted-foreground">Implementation Success Rate</Text>
                </div>
                <div className="flex flex-col items-center">
                  <Text className="font-bold text-lg text-primary">52%</Text>
                  <Text className="text-sm text-muted-foreground">Average Cost Reduction</Text>
                </div>
                <div className="flex flex-col items-center">
                  <Text className="font-bold text-lg text-primary">Zero</Text>
                  <Text className="text-sm text-muted-foreground">Failed Projects in 12 Months</Text>
                </div>
              </div>
            </FadeIn>

            <SlideUp delay={0.9} duration={0.7} className="mt-10 flex justify-center max-w-xl mx-auto">
              <Button
                size="lg"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-900 hover:from-blue-700 hover:to-blue-950 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                asChild
                trackingLabel="Get My Process Savings"
                trackingLocation="Hero Section"
              >
                <Link href="/tools/business-audit">
                  <div className="flex flex-col items-center py-2">
                    <span className="text-base sm:text-lg">Stop Managing, Start Building</span>
                    <span className="text-xs font-normal opacity-90">€350 value • 8 minutes • Free</span>
                  </div>
                </Link>
              </Button>
            </SlideUp>


          </div>
        </Container>
      </Section>
    </SectionTracker>
  )
}
