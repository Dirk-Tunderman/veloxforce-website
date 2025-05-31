"use client"

import { useRef } from "react"
import Image from "next/image"
import { useInView } from "framer-motion"

import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"
import { OptimizedImage } from "@/components/ui/optimized-image"

export function ApproachSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <Section padding="lg">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div
            ref={ref}
            className={`transition-all duration-700 delay-100 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <Heading level="2" className="mb-6">
              You've Tried Automation Before. It Didn't Work.
            </Heading>
            <div className="space-y-6">
              <div>
                <Heading level="3" className="text-xl mb-3 text-red-600">
                  The Brutal Truth:
                </Heading>
                <Text>
                  Software vendors sold you licenses and disappeared. Consultants built something that broke in three months. Your team spent more time managing the "solution" than doing the work.
                </Text>
                <Text className="font-medium mt-2 text-center">
                  Sound familiar?
                </Text>
              </div>

              <div>
                <Heading level="3" className="text-xl mb-3 text-amber-600">
                  The Real Problem:
                </Heading>
                <Text>
                  Traditional automation makes YOU the project manager. You don't need another tool to manage. You need your processes to actually work.
                </Text>
              </div>

              <div>
                <Heading level="3" className="text-xl mb-3 text-blue-600">
                  Our Different Approach:
                </Heading>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Text className="font-medium">•</Text>
                    <Text><strong>They sell software.</strong> We deliver working processes.</Text>
                  </div>
                  <div className="flex items-start gap-3">
                    <Text className="font-medium">•</Text>
                    <Text><strong>They hand you complexity.</strong> We hand you results.</Text>
                  </div>
                  <div className="flex items-start gap-3">
                    <Text className="font-medium">•</Text>
                    <Text><strong>They disappear after setup.</strong> We guarantee performance.</Text>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`relative transition-all duration-700 delay-300 ${
              isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="bg-blue-50 rounded-xl p-8 border border-blue-200">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4">
                  <Text className="text-2xl">💡</Text>
                </div>
                <Heading level="3" className="text-xl text-blue-600">
                  Proof
                </Heading>
              </div>
              <Text className="text-center italic text-gray-600">
                "ABC Logistics tried three automation tools before us. Now they save €8,400 monthly. The difference? We own the outcome, not just the setup."
              </Text>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
