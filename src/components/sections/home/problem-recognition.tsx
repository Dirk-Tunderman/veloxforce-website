"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { AlertCircle, Clock, DollarSign, FileWarning } from "lucide-react"

import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const problems = [
  {
    icon: Clock,
    title: "High-Volume Repetitive Task Overload",
    description: "Drowning in data entry, order processing, or report generation? These manual tasks drain resources and invite errors, directly hitting your bottom line.",
  },
  {
    icon: DollarSign,
    title: "Complex Workflow Bottlenecks",
    description: "Are cumbersome approvals, endless email chains, and inconsistent exception handling slowing your critical workflows to a crawl?",
  },
  {
    icon: AlertCircle,
    title: "Operational Drag & Strategic Time Drain",
    description: "As a leader, is your day consumed by operational details and firefighting, leaving no room for strategy or innovation?",
  },
  {
    icon: FileWarning,
    title: "Scaling Limitations",
    description: "The difference between businesses that break through and those that get stuck is a system for turning operational friction into fuel.",
  },
]

export function ProblemRecognitionSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <Section padding="lg" background="muted">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Your Path from Operational Drag to Strategic Dominance
          </h2>
          <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
            Every growing business hits operational friction. The difference between those that break through and those that get stuck is a system for turning that friction into fuel. Here, you'll find that proven system, designed to tackle the core challenges that hold SMEs back.
          </p>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <problem.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{problem.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{problem.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
