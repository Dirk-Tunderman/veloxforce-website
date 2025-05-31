"use client"

import { useRef } from "react"
import Link from "next/link"
import { useInView } from "framer-motion"
import { ClipboardList, Cog, CheckCircle, ArrowRight } from "lucide-react"

import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"
import { Button } from "@/components/ui/button"
import { FuturePacingSection } from "./future-pacing-section"
import { TimeRecoveryProof } from "./integrated-social-proof"

const steps = [
  {
    icon: ClipboardList,
    title: "We Map Your Reality",
    description: "We document exactly how your process works today. Every click, every approval, every bottleneck. You get professional SOPs worth €2,000+ - yours to keep regardless.",
    timeline: "Days, not weeks",
  },
  {
    icon: Cog,
    title: "We Build Your Solution",
    description: "Our hybrid AI-human system takes shape. AI handles volume. Humans ensure quality. You see progress updates. No black box.",
    timeline: "Focused and efficient",
  },
  {
    icon: CheckCircle,
    title: "We Deliver Results",
    description: "Go live with confidence. We measure against agreed metrics. Performance guaranteed or we make it right.",
    timeline: "Faster than you'd expect",
  },
]

export function ProcessSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <Section padding="lg" background="muted">
      <Container>
        <div className="text-center mb-16">
          <Heading level="2" className="velox-heading-lg mb-4">
            From Chaos to Control in 3 Clear Steps
          </Heading>
          <Text variant="lead" className="velox-text-lead max-w-3xl mx-auto">
            A proven methodology that transforms your operations with complete transparency and guaranteed outcomes.
          </Text>
        </div>

        <div
          ref={ref}
          className="relative"
        >
          {/* Desktop process flow with connecting lines */}
          <div className="hidden lg:block absolute top-20 left-1/2 w-[calc(100%-200px)] h-0.5 bg-blue-200 -translate-x-1/2" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`velox-step-card transition-all duration-700 ${
                  isInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 150 + 100}ms` }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-6">
                    <div className="velox-icon-bg-primary w-16 h-16">
                      <step.icon className="velox-icon-lg" />
                    </div>
                    <div className="velox-step-number absolute -top-2 -right-2">
                      {index + 1}
                    </div>
                  </div>
                  <Heading level="3" className="velox-heading-sm mb-4">
                    {step.title}
                  </Heading>
                  <Text className="velox-text-body mb-4">
                    {step.description}
                  </Text>
                  <Text className="velox-primary font-semibold text-sm">
                    Timeline: {step.timeline}
                  </Text>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Integrated Social Proof */}
        <div className="mt-16 mb-12">
          <TimeRecoveryProof type="callout" />
        </div>

        {/* Future Pacing Section */}
        <div className="mt-20">
          <FuturePacingSection />
        </div>

        <div className="text-center mt-16">
          <Button size="lg" className="velox-btn-primary" asChild>
            <Link href="/tools/business-audit" className="flex items-center gap-2">
              Start My Transformation Analysis
              <ArrowRight className="velox-icon-sm velox-icon-light" />
            </Link>
          </Button>
        </div>
      </Container>
    </Section>
  )
}
