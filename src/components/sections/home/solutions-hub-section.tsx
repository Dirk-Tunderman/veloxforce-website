"use client"

import { useRef } from "react"
import Link from "next/link"
import { useInView } from "framer-motion"
import { ArrowRight, Briefcase, Building2, Truck, BarChart3, RefreshCw, TrendingUp, DollarSign } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const challenges = [
  {
    icon: BarChart3,
    title: "My team drowns in invoice processing",
    reality: "30+ hours weekly on invoices, payment delays, manual errors",
    fix: "Invoice processing drops to 2 minutes per document. One client handles 2,000 monthly invoices with 99.8% accuracy, saving 120+ hours monthly.",
    href: "/solutions/task-overload",
  },
  {
    icon: RefreshCw,
    title: "Customer onboarding is a bottleneck",
    reality: "2-week onboarding, dropped balls, inconsistent experience",
    fix: "Compressed to 48 hours with 95% automation. Smart document collection saves 12+ hours per customer. 40% faster than competitors.",
    href: "/solutions/workflow-bottlenecks",
  },
  {
    icon: TrendingUp,
    title: "I'm flying blind without real-time data",
    reality: "Asking for reports, waiting for updates, outdated information",
    fix: "Live dashboards updating every 15 minutes. Cash position, pipeline, operations - 99.9% accuracy. Decisions made 5x faster.",
    href: "/solutions/strategic-time-drain",
  },
  {
    icon: DollarSign,
    title: "Order processing eats our profits",
    reality: "Manual order entry, inventory errors, shipping delays",
    fix: "Orders flow automatically in under 3 minutes. Inventory updates in real-time. Shipping triggers within 1 hour. Margins improve 18% average.",
    href: "/solutions/task-overload",
  },
]

export function SolutionsHubSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <Section padding="lg">
      <Container>
        <div className="text-center mb-16">
          <div className="mb-6 p-4 bg-green-50 rounded-lg border border-green-200 max-w-3xl mx-auto">
            <Text className="text-lg font-medium text-green-800 mx-auto">
              Sound familiar? This is exactly why we created our different approach...
            </Text>
          </div>
          <Heading level="2" className="velox-heading-lg mb-4">
            Find Your Exact Situation Below
          </Heading>
          <Text variant="lead" className="velox-text-lead max-w-3xl mx-auto">
            See how businesses just like yours transformed their biggest operational headaches into competitive advantages.
          </Text>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {challenges.map((challenge, index) => (
            <div
              key={index}
              className={`velox-card transition-all duration-700 hover:shadow-lg hover:border-blue-300 ${
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150 + 100}ms` }}
            >
              <div className="p-6">
                <div className="flex items-start gap-4 mb-6">
                  <div className="velox-icon-bg-primary w-12 h-12">
                    <challenge.icon className="velox-icon-md" />
                  </div>
                  <div className="flex-1">
                    <Heading level="3" className="velox-heading-sm mb-3">
                      {challenge.title}
                    </Heading>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="velox-card-problem p-4">
                    <Text className="velox-error font-semibold mb-2">The Reality:</Text>
                    <Text className="velox-text-body">{challenge.reality}</Text>
                  </div>

                  <div className="velox-card-solution p-4">
                    <Text className="velox-success font-semibold mb-2">The Fix:</Text>
                    <Text className="velox-text-body">{challenge.fix}</Text>
                  </div>
                </div>

                <div className="mt-6">
                  <Button className="velox-btn-primary group w-full" asChild>
                    <Link href={challenge.href} className="flex items-center justify-center gap-2">
                      See My Automation Options
                      <ArrowRight className="velox-icon-sm velox-icon-light transition-all duration-200 group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="velox-btn-secondary" asChild>
            <Link href="/solutions">See My Complete Solution Options</Link>
          </Button>
        </div>
      </Container>
    </Section>
  )
}
