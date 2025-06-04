"use client"

import React from "react"
import { motion } from "framer-motion"
import { Clock, Euro, TrendingUp } from "lucide-react"

import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"
import { SectionTracker } from "@/components/analytics/section-tracker"

export function BuyingIdentitySection() {
  return (
    <SectionTracker sectionName="Buying Identity" sectionPosition={2}>
      <Section padding="lg" background="white-to-light">
        <Container>
          <div className="max-w-6xl mx-auto">
            {/* Header Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <Heading level="2" className="velox-text-h1 mb-6">
                What You Actually Get Back
              </Heading>
              <Text className="velox-text-lead max-w-3xl mx-auto">
                Real returns from real clients. Every month, consistently.
              </Text>
            </motion.div>

            {/* Three Return Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1 - Your Life Outside Work */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="velox-card-advantage p-8 text-center h-full flex flex-col"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <Heading level="3" className="velox-text-h3 text-blue-900 mb-2">
                  Your Life Outside Work
                </Heading>
                <Text className="text-2xl font-bold text-blue-800 mb-4">
                  20+ Hours Weekly
                </Text>
                <Text className="velox-text-body text-blue-700 mb-4 flex-grow">
                  Home by 6 PM. Weekends free. Energy for what matters most beyond business.
                </Text>
                <Text className="text-sm font-semibold text-blue-600 mt-auto">
                  Focus on what matters most
                </Text>
              </motion.div>

              {/* Card 2 - Money for Growth */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="velox-card-advantage p-8 text-center h-full flex flex-col"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Euro className="h-8 w-8 text-white" />
                </div>
                <Heading level="3" className="velox-text-h3 text-blue-900 mb-2">
                  Money for Growth
                </Heading>
                <Text className="text-2xl font-bold text-blue-800 mb-4">
                  60% Cost Reduction
                </Text>
                <Text className="velox-text-body text-blue-700 mb-4 flex-grow">
                  Save €2,400 monthly compared to traditional staffing. Reinvest in marketing, product development, or pure profit.
                </Text>
                <Text className="text-sm font-semibold text-blue-600 mt-auto">
                  Reinvest in growth
                </Text>
              </motion.div>

              {/* Card 3 - Room to Scale */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="velox-card-advantage p-8 text-center h-full flex flex-col"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <Heading level="3" className="velox-text-h3 text-blue-900 mb-2">
                  Room to Scale
                </Heading>
                <Text className="text-2xl font-bold text-blue-800 mb-4">
                  3x Processing Power
                </Text>
                <Text className="velox-text-body text-blue-700 mb-4 flex-grow">
                  Handle triple the volume without hiring. Your team focuses on high-value work while operations run automatically.
                </Text>
                <Text className="text-sm font-semibold text-blue-600 mt-auto">
                  Scale without limits
                </Text>
              </motion.div>
            </div>
          </div>
        </Container>
      </Section>
    </SectionTracker>
  )
}
