'use client'

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"
import { TrendingUp, DollarSign, Clock, CheckCircle } from "lucide-react"

import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"

const challenges = [
  {
    id: "scaling",
    icon: TrendingUp,
    title: "I Can't Scale",
    description: "Turning away business because taking more means drowning",
    anchor: "scaling-solutions",
    ctaText: "See Scaling Solutions"
  },
  {
    id: "costs",
    icon: DollarSign,
    title: "Bleeding Money",
    description: "Paying fortune for routine work that should cost pennies",
    anchor: "cost-solutions",
    ctaText: "See Cost Solutions"
  },
  {
    id: "time",
    icon: Clock,
    title: "No Life Outside Work",
    description: "Started for freedom, became prisoner to operations",
    anchor: "time-solutions",
    ctaText: "See Time Solutions"
  },
  {
    id: "quality",
    icon: CheckCircle,
    title: "Quality Concerns",
    description: "Losing sleep over what might fall through cracks",
    anchor: "reliability-solutions",
    ctaText: "See Reliability Solutions"
  }
]

export function ChallengeSelectorSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <Section padding="lg" background="white-to-light">
      <Container>
        <div ref={ref} className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <Heading level="2" className="velox-text-h2 mb-4">
              Which Challenge Is <span className="text-blue-600">Stealing Your Success</span>?
            </Heading>
            <Text className="text-lg text-gray-600 max-w-2xl mx-auto">
              Every business has a primary bottleneck. <span className="font-semibold text-gray-800">Fix yours first</span>.
            </Text>
          </motion.div>

          {/* Challenge Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {challenges.map((challenge, index) => (
              <motion.div
                key={challenge.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <Link
                  href={`/solutions#${challenge.anchor}`}
                  className="block group"
                >
                  <div className="bg-white border border-gray-200 rounded-lg p-6 h-full hover:shadow-md hover:border-blue-300 transition-all duration-300 group-hover:-translate-y-1">
                    {/* Icon */}
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors duration-300">
                      <challenge.icon className="w-6 h-6 text-gray-700 group-hover:text-blue-600 transition-colors duration-300" />
                    </div>

                    {/* Title */}
                    <Heading level="4" className="font-semibold text-gray-900 mb-3 group-hover:text-blue-800 transition-colors duration-300">
                      {challenge.title}
                    </Heading>

                    {/* Description */}
                    <Text className="text-sm text-gray-600 mb-4 leading-relaxed italic">
                      "{challenge.description}"
                    </Text>

                    {/* CTA */}
                    <div className="flex items-center text-blue-600 group-hover:text-blue-700 transition-colors duration-300">
                      <Text className="text-sm font-medium">
                        → {challenge.ctaText}
                      </Text>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}
