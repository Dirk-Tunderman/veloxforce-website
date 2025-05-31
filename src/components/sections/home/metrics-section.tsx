"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"

const metrics = [
  {
    value: "50%",
    label: "Cost Reduction",
    description: "Average operational cost savings achieved through this automation model",
  },
  {
    value: "3x",
    label: "Faster Execution",
    description: "Increase in process execution speed after implementation",
  },
  {
    value: "99.8%",
    label: "Accuracy Rate",
    description: "Error reduction through the Human-Perfected automation approach",
  },
  {
    value: "6-12",
    label: "Weeks to ROI",
    description: "Typical timeframe to achieve positive return on investment",
  },
]

export function MetricsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <Section padding="lg">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Proof: This Model Delivers Relief & Results
          </h2>
          <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
            This systematic approach to conquering operational inefficiency delivers measurable business impact
          </p>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {metric.value}
              </div>
              <h3 className="text-xl font-semibold mb-2">{metric.label}</h3>
              <p className="text-muted-foreground">{metric.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
