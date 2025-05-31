"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Bot, CheckCircle, Cog, LineChart, Zap } from "lucide-react"

import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const pillars = [
  {
    icon: Bot,
    title: "The Hybrid Advantage",
    subtitle: "90% AI Efficiency, 10% Human Excellence",
    description: "We combine the best of AI automation with human expertise to deliver optimal results. Our AI handles the repetitive, data-intensive tasks with speed and precision, while our human experts provide oversight, handle exceptions, and ensure quality. This hybrid approach delivers the perfect balance of efficiency and excellence.",
    details: [
      "AI handles 90% of workload volume with perfect consistency",
      "Human experts focus on the critical 10% that requires judgment",
      "Exception handling built into the process, not as an afterthought",
      "Continuous learning system that improves over time",
      "Scalable capacity without proportional cost increases"
    ]
  },
  {
    icon: Cog,
    title: "Service as Software",
    subtitle: "The Outcome, Not Just The Tool",
    description: "Instead of just providing software tools, we deliver complete solutions that transform your proven processes into automated, scalable operations. We handle the technical complexity so you can focus on your core business. Our approach eliminates the need for technical expertise from your team while ensuring successful implementation and ongoing optimization.",
    details: [
      "Start with your proven processes, not generic software",
      "Preserve business logic while adding automation power",
      "No technical expertise required from your team",
      "Complete implementation and management service",
      "Continuous optimization based on performance data"
    ]
  },
  {
    icon: Zap,
    title: "Business Transformation",
    subtitle: "From Operational to Strategic",
    description: "We help you shift from operational firefighting to strategic growth. By automating routine processes, we free up your team's time and mental energy for high-value activities. This transformation allows your business to scale efficiently while maintaining quality and consistency, ultimately driving growth and competitive advantage.",
    details: [
      "Shift team focus from repetitive tasks to strategic initiatives",
      "Scale operations without proportional headcount increases",
      "Maintain consistent quality even during growth periods",
      "Reduce operational stress and improve team morale",
      "Create capacity for innovation and market expansion"
    ]
  },
  {
    icon: LineChart,
    title: "ROI Certainty",
    subtitle: "Measurable Returns, Guaranteed Results",
    description: "We deliver predictable cost savings and performance improvements with a clear path to ROI. Our solutions typically achieve 50% cost reduction and 3x faster execution, with positive returns in 6-12 weeks. We provide transparent metrics and reporting so you can track the impact on your business from day one.",
    details: [
      "Typical 50% operational cost reduction",
      "3x faster execution of key processes",
      "Positive ROI within 6-12 weeks",
      "Transparent metrics and performance tracking",
      "Predictable outcomes even in uncertain environments"
    ]
  },
]

export function DetailedPillarsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <Section padding="lg">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Our Solution Pillars
          </h2>
          <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
            The four core principles that drive our approach to automation
          </p>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 gap-8"
        >
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <CardHeader className="flex flex-row items-start gap-4">
                  <div className="bg-primary/10 p-2 rounded-full mt-1">
                    <pillar.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">{pillar.title}</CardTitle>
                    <CardDescription className="text-lg font-medium mt-1">
                      {pillar.subtitle}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{pillar.description}</p>
                  <div className="border-t pt-4">
                    <h4 className="font-medium mb-2">Key Features:</h4>
                    <ul className="space-y-2">
                      {pillar.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
