"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"
import { Button } from "@/components/ui/button"
import { Calculator, Clock, AlertTriangle, DollarSign, CheckCircle, ArrowRight } from "lucide-react"

const qualificationCriteria = [
  {
    icon: Clock,
    title: "Meaningful time investment (5+ hours weekly)",
    description: "Enough volume to justify transformation",
    color: "gray" // 90% of icons should be gray-700
  },
  {
    icon: CheckCircle,
    title: "Consistent patterns (even with complex rules)",
    description: "Rules we can codify and perfect",
    color: "blue" // 10% of icons for success/completion
  },
  {
    icon: AlertTriangle,
    title: "Quality matters (errors create real impact)",
    description: "Where precision drives value",
    color: "gray" // 90% of icons should be gray-700
  },
  {
    icon: DollarSign,
    title: "Strategic work waiting (clear opportunity cost)",
    description: "Better uses for your team's expertise",
    color: "gray" // 90% of icons should be gray-700
  }
]

export function ROIQualificationSection() {
  return (
    <Section padding="xl" background="white">
      {/* Performance-Optimized Background */}
      <div className="absolute inset-0 bg-gradient-simple" />
      <div className="absolute inset-0 bg-mesh-static opacity-30" />

      <Container className="relative z-10 max-w-6xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Heading level="2" className="velox-text-h2 mb-6">
            <span className="text-gradient">
              First:
            </span>{" "}
            Ensuring Mutual Success
          </Heading>
          <Text className="velox-text-lead max-w-4xl mx-auto">
            Service-as-Software works best when these align:
          </Text>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {qualificationCriteria.map((criteria, index) => {
            const IconComponent = criteria.icon
            return (
              <motion.div
                key={index}
                className="group card-base"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-start gap-4">
                  <div className="icon-container flex-shrink-0">
                    <IconComponent className={`w-6 h-6 ${
                      criteria.color === 'blue' ? 'icon-accent' : 'icon-primary'
                    }`} />
                  </div>
                  <div className="flex-1">
                    <Heading level="3" className="velox-text-h3 mb-3 group-hover:text-blue-700 transition-colors duration-300">
                      {criteria.title}
                    </Heading>
                    <Text className="velox-text-body">
                      {criteria.description}
                    </Text>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Results Section */}
        <motion.div
          className="card-solution mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="text-center">
            <Heading level="3" className="velox-text-h3 text-blue-900 mb-8">
              When these conditions exist, transformation begins in{" "}
              <span className="text-gradient">
                weeks, not months
              </span>.
            </Heading>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <motion.div
                className="card-base text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="text-4xl font-bold text-gradient mb-2">60-70%</div>
                <Text className="text-blue-800 font-semibold text-lg mb-1">Cost Reduction</Text>
                <Text className="text-sm text-blue-600">vs traditional staffing</Text>
              </motion.div>

              <motion.div
                className="card-base text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="text-4xl font-bold text-gradient mb-2">2-6</div>
                <Text className="text-blue-800 font-semibold text-lg mb-1">Months to ROI</Text>
                <Text className="text-sm text-blue-600">varies by process complexity</Text>
              </motion.div>

              <motion.div
                className="card-base text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <div className="text-4xl font-bold text-gradient mb-2">24/7</div>
                <Text className="text-blue-800 font-semibold text-lg mb-1">Processing</Text>
                <Text className="text-sm text-blue-600">no breaks, no sick days</Text>
              </motion.div>
            </div>
          </div>
        </motion.div>


        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button
            size="lg"
            className="relative bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-lg font-semibold px-8 py-4 h-auto rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 overflow-hidden group"
            asChild
          >
            <Link href="/tools/business-audit">
              <div className="relative z-10 flex items-center gap-3">
                <Calculator className="w-5 h-5" />
                <span>Check if my process qualifies</span>
                <ArrowRight className="w-5 h-5" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </Link>
          </Button>

          <Text className="text-sm text-gray-600 mt-4">
            Free assessment • 8 minutes • Honest analysis
          </Text>
        </motion.div>
      </Container>
    </Section>
  )
}
