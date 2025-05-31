"use client"

import { Bot, CheckCircle, Lightbulb } from "lucide-react"
import { motion } from "framer-motion"

import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"
import { FadeIn, SlideUp } from "@/components/ui/animated-element"

interface SolutionPoint {
  title: string
  description: string
}

interface SolutionSectionProps {
  title: string
  description: React.ReactNode
  solutionPoints: SolutionPoint[]
}

export function SolutionSection({ title, description, solutionPoints }: SolutionSectionProps) {
  return (
    <Section padding="lg" background="muted">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <SlideUp delay={0.1} duration={0.6}>
              <div className="bg-secondary/10 rounded-lg p-6 border border-secondary/20 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary/20">
                    <Lightbulb className="h-5 w-5 text-blue-600" />
                  </div>
                  <Heading level="2" className="text-secondary">
                    {title}
                  </Heading>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  {typeof description === "string" ? (
                    <Text>{description}</Text>
                  ) : (
                    description
                  )}
                </div>
              </div>
            </SlideUp>

            {/* Visual representation of the hybrid model */}
            <SlideUp delay={0.3} duration={0.6}>
              <div className="bg-background rounded-lg p-6 border border-border shadow-sm hover:shadow-md transition-all duration-300">
                <Heading level="3" className="text-lg mb-4">
                  The Hybrid AI-Human Approach
                </Heading>
                <div className="relative h-48 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg p-2">
                  {/* AI Component */}
                  <motion.div
                    className="absolute top-4 left-4 w-1/2 h-16 bg-primary/10 rounded-lg flex items-center p-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                  >
                    <Bot className="h-6 w-6 text-gray-700 mr-3" />
                    <div>
                      <Text className="font-medium text-primary">AI Automation</Text>
                      <Text className="text-xs text-muted-foreground">90% of workload</Text>
                    </div>
                  </motion.div>

                  {/* Human Component */}
                  <motion.div
                    className="absolute bottom-4 right-4 w-1/2 h-16 bg-secondary/10 rounded-lg flex items-center p-4"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                  >
                    <CheckCircle className="h-6 w-6 text-blue-600 mr-3" />
                    <div>
                      <Text className="font-medium text-secondary">Human Expertise</Text>
                      <Text className="text-xs text-muted-foreground">10% quality control</Text>
                    </div>
                  </motion.div>

                  {/* Connection Line */}
                  <motion.div
                    className="absolute top-1/2 left-1/2 w-12 h-12 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 flex items-center justify-center"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.9, duration: 0.5 }}
                  >
                    <Text className="font-bold text-accent">+</Text>
                  </motion.div>
                </div>
              </div>
            </SlideUp>
          </div>

          <div className="space-y-6">
            {solutionPoints.map((point, index) => (
              <SlideUp
                key={index}
                delay={0.3 + index * 0.15}
                duration={0.5}
              >
                <div className="bg-background rounded-lg p-6 border border-border shadow-sm hover:shadow-md hover:border-secondary/20 transition-all duration-300">
                  <div>
                    <Heading level="3" className="text-lg mb-2 text-secondary">
                      {point.title}
                    </Heading>
                    <Text className="text-muted-foreground">
                      {point.description}
                    </Text>
                  </div>
                </div>
              </SlideUp>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}
