"use client"

import { useRef } from "react"
import Link from "next/link"
import { useInView } from "framer-motion"
import { Calculator, TrendingUp, ArrowRight } from "lucide-react"

import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"
import { Button } from "@/components/ui/button"

export function RoiCertaintySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <Section padding="lg" background="muted" id="roi-calculator">
      <Container>
        <div className="text-center mb-12">
          <Heading level="2" className="mb-4">
            Your Investment Math. Crystal Clear.
          </Heading>
          <Text variant="lead" className="max-w-3xl mx-auto text-muted-foreground">
            See exactly how much you'll save and when you'll see returns.
          </Text>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* ROI Calculator Preview */}
          <div
            className={`transition-all duration-700 ${
              isInView
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="bg-background rounded-xl shadow-sm border border-border/50 p-8">
              <div className="flex items-center gap-3 mb-6">
                <Calculator className="h-8 w-8 text-primary" />
                <Heading level="3" className="text-xl">
                  Interactive Calculator Preview
                </Heading>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-border/50">
                  <Text className="font-medium">Current Process Cost:</Text>
                  <Text className="font-bold text-lg">€10,000/month</Text>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border/50">
                  <Text className="font-medium">After Automation:</Text>
                  <Text className="font-bold text-lg">€3,000/month</Text>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border/50">
                  <Text className="font-medium">Your Savings:</Text>
                  <Text className="font-bold text-lg text-success">€7,000/month</Text>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border/50">
                  <Text className="font-medium">Our Fee:</Text>
                  <Text className="font-bold text-lg">€1,750/month</Text>
                </div>
                <div className="flex justify-between items-center py-3 bg-primary/5 rounded-lg px-4">
                  <Text className="font-bold text-primary">Your Net Gain:</Text>
                  <Text className="font-bold text-xl text-primary">€5,250/month</Text>
                </div>
              </div>

              <div className="mt-6 p-4 bg-accent/5 rounded-lg">
                <Text className="font-medium text-accent mb-2">Typical ROI Timeline:</Text>
                <Text className="text-muted-foreground">
                  Positive returns start quickly, compound monthly
                </Text>
              </div>
            </div>
          </div>

          {/* Trust Builder and CTA */}
          <div
            className={`transition-all duration-700 delay-300 ${
              isInView
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
          >
            <div className="space-y-6">
              <div className="bg-background rounded-xl shadow-sm border border-primary/20 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <TrendingUp className="h-6 w-6 text-primary" />
                  <Heading level="3" className="text-lg text-primary">
                    Trust Builder
                  </Heading>
                </div>
                <Text className="italic text-muted-foreground">
                  "We only succeed when you save money. Our incentives are perfectly aligned."
                </Text>
              </div>

              <div className="text-center">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-blue-900 hover:from-blue-700 hover:to-blue-950 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 mb-4" asChild>
                  <Link href="/tools/business-audit" className="flex items-center gap-2">
                    Find Your Process Profit Leaks
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Text className="text-sm text-muted-foreground">
                  Get a personalized ROI analysis in 5 minutes
                </Text>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
