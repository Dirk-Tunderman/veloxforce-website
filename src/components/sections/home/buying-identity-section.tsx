"use client"

import React from "react"
import { motion } from "framer-motion"
import { Target, TrendingUp, Users } from "lucide-react"

import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"
import { SectionTracker } from "@/components/analytics/section-tracker"
import { CostBenefitInfographic } from "./cost-benefit-infographic"

export function BuyingIdentitySection() {
  return (
    <SectionTracker sectionName="Buying Identity" sectionPosition={2}>
      <Section padding="lg" background="white-to-light">
        <Container>
          <div className="max-w-4xl mx-auto">
            {/* Identity Lock Statement */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <Heading level="2" className="text-3xl md:text-4xl font-bold text-deep-blue mb-6">
                If you started your business to build something meaningful, not to become its busiest employee, you're exactly where you need to be.
              </Heading>


            </motion.div>

            {/* Three Identity Markers */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <Heading level="4" className="text-xl font-semibold text-deep-blue mb-3">
                  You Think Strategically
                </Heading>
                <Text className="text-gray-600">
                  You know your time belongs on vision and growth, not managing daily operations.
                </Text>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <Heading level="4" className="text-xl font-semibold text-deep-blue mb-3">
                  You Demand Results
                </Heading>
                <Text className="text-gray-600">
                  You've tried solutions before. This time, you want certainty, not promises.
                </Text>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <Heading level="4" className="text-xl font-semibold text-deep-blue mb-3">
                  You Value Excellence
                </Heading>
                <Text className="text-gray-600">
                  You understand that cutting corners on operations means cutting corners on outcomes.
                </Text>
              </motion.div>
            </div>



            {/* Cost-Benefit Infographic */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <CostBenefitInfographic />
            </motion.div>
          </div>
        </Container>
      </Section>
    </SectionTracker>
  )
}
