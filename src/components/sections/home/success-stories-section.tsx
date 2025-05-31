"use client"

import { useRef } from "react"
import Link from "next/link"
import { useInView } from "framer-motion"
import { Quote, ArrowRight, TrendingUp, Clock, Users } from "lucide-react"

import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"
import { Button } from "@/components/ui/button"

const featuredStory = {
  quote: "I went from 60-hour weeks to 25-hour weeks. My stress is gone. My family has me back. Revenue is up 40% because I can finally focus on growth.",
  author: "Sarah Chen",
  title: "Logistics CEO",
  results: [
    { label: "Before", value: "60 hours/week managing operations" },
    { label: "After", value: "25 hours/week driving strategy" },
    { label: "Monthly Savings", value: "€12,000" },
    { label: "Team Morale", value: "\"Best decision ever\"" },
    { label: "Business Impact", value: "40% revenue growth" },
  ]
}

const additionalStories = [
  {
    quote: "What took 3 people now takes 0.5. We redeployed talent to innovation.",
    author: "Manufacturing Director",
    icon: Users,
  },
  {
    quote: "Client onboarding went from my biggest headache to our competitive advantage.",
    author: "Service Company Owner",
    icon: TrendingUp,
  },
  {
    quote: "Month-end close dropped from 10 days to 2. My team actually goes home on time.",
    author: "Finance Leader",
    icon: Clock,
  },
]

export function SuccessStoriesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <Section padding="lg" background="muted">
      <Container>
        <div className="text-center mb-16">
          <Heading level="2" className="velox-heading-lg mb-4">
            From Overwhelmed to Overachieving
          </Heading>
          <Text variant="lead" className="velox-text-lead max-w-3xl mx-auto">
            Real leaders who escaped operational prison and reclaimed their strategic focus.
          </Text>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
        >
          {/* Featured Success Story */}
          <div
            className={`transition-all duration-700 ${
              isInView
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="velox-card-elevated p-8">
              <div className="flex items-start gap-4 mb-6">
                <Quote className="velox-icon-lg velox-primary shrink-0 mt-1" />
                <div>
                  <Text className="text-lg italic velox-text-body mb-4">
                    "{featuredStory.quote}"
                  </Text>
                  <div className="flex items-center gap-2">
                    <Text className="font-bold velox-neutral">{featuredStory.author}</Text>
                    <Text className="velox-neutral-light">- {featuredStory.title}</Text>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <Heading level="3" className="velox-heading-sm mb-4">Results Snapshot:</Heading>
                {featuredStory.results.map((result, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-gray-200 last:border-b-0">
                    <Text className="velox-text-body font-medium">{result.label}:</Text>
                    <Text className="velox-primary font-semibold">{result.value}</Text>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Additional Transformations */}
          <div
            className={`transition-all duration-700 delay-300 ${
              isInView
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
          >
            <Heading level="3" className="velox-heading-sm mb-6">
              More Transformations:
            </Heading>
            <div className="space-y-6">
              {additionalStories.map((story, index) => (
                <div key={index} className="velox-card p-6">
                  <div className="flex items-start gap-4">
                    <div className="velox-icon-bg-primary w-10 h-10 shrink-0">
                      <story.icon className="velox-icon-sm" />
                    </div>
                    <div>
                      <Text className="italic velox-text-body mb-2">
                        "{story.quote}"
                      </Text>
                      <Text className="velox-text-small font-medium">
                        - {story.author}
                      </Text>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Button size="lg" className="velox-btn-primary w-full" asChild>
                <Link href="/case-studies" className="flex items-center justify-center gap-2">
                  See All Case Studies
                  <ArrowRight className="velox-icon-sm velox-icon-light" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
