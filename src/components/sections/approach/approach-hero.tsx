"use client"

import { motion } from "framer-motion"
import { Bot, Users, Zap } from "lucide-react"

import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"

export function ApproachHeroSection() {
  return (
    <Section padding="lg" background="primary">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Heading level="1" className="text-white mb-6">
              Why This Approach Delivers Certainty
            </Heading>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Text variant="lead" className="text-primary-foreground/90 mb-8">
              The hybrid AI-human model represents a fundamental breakthrough in operational transformation—combining the scale and consistency of intelligent automation with the judgment and adaptability of human expertise.
            </Text>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="flex justify-center mb-4">
                <div className="bg-white/20 p-3 rounded-full">
                  <Bot className="h-6 w-6 text-white" />
                </div>
              </div>
              <Text className="font-medium text-white">AI Precision</Text>
              <Text className="text-sm text-primary-foreground/80">
                Intelligent automation handles high-volume, rule-based tasks with perfect consistency and tireless execution.
              </Text>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="flex justify-center mb-4">
                <div className="bg-white/20 p-3 rounded-full">
                  <Users className="h-6 w-6 text-white" />
                </div>
              </div>
              <Text className="font-medium text-white">Human Expertise</Text>
              <Text className="text-sm text-primary-foreground/80">
                Skilled specialists provide judgment, handle exceptions, and ensure quality in complex situations.
              </Text>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="flex justify-center mb-4">
                <div className="bg-white/20 p-3 rounded-full">
                  <Zap className="h-6 w-6 text-white" />
                </div>
              </div>
              <Text className="font-medium text-white">Operational Certainty</Text>
              <Text className="text-sm text-primary-foreground/80">
                The combination delivers predictable, high-quality outcomes that neither AI nor humans could achieve alone.
              </Text>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}
