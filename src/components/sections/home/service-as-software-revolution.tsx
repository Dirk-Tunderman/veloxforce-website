"use client"

import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Check, X, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

export function ServiceAsSoftwareRevolution() {
  return (
    <Section padding="xl" background="transparent">
      <Container className="max-w-6xl">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="velox-text-h2 mb-6">
            The Service-as-Software Revolution
          </h2>
          <p className="velox-text-lead max-w-4xl mx-auto">
            A fundamental shift in how businesses handle complexity
          </p>
        </motion.div>

        {/* Three-Column Comparison with Transformation */}
        <div className="grid lg:grid-cols-12 gap-8 items-center mb-16">
          {/* Traditional + SaaS (Old Ways) */}
          <div className="lg:col-span-5 space-y-6">
            <motion.div 
              className="card-challenge"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="icon-container-glass mb-6 mx-auto">
                <X className="w-6 h-6 icon-primary" />
              </div>
              <h3 className="velox-text-h3 text-center mb-4">Traditional Approach</h3>
              <div className="space-y-3 velox-text-body text-center">
                <p>• You buy tools</p>
                <p>• You operate them</p>
                <p>• You handle complexity</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="card-challenge"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="icon-container-glass mb-6 mx-auto">
                <X className="w-6 h-6 icon-primary" />
              </div>
              <h3 className="velox-text-h3 text-center mb-4">SaaS Model</h3>
              <div className="space-y-3 velox-text-body text-center">
                <p>• You rent tools</p>
                <p>• You still operate them</p>
                <p>• You still handle complexity</p>
              </div>
            </motion.div>
          </div>

          {/* Transformation Arrow */}
          <motion.div 
            className="lg:col-span-2 flex justify-center"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="transformation-arrow-premium">
              <ArrowRight className="h-8 w-8 text-white" />
            </div>
          </motion.div>

          {/* Service-as-Software (New Way) */}
          <motion.div 
            className="lg:col-span-5"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="card-solution card-floating">
              <div className="icon-container-gradient mb-6 mx-auto">
                <Check className="w-8 h-8 icon-accent" />
              </div>
              <h3 className="velox-text-h3 text-blue-800 text-center mb-4">Service-as-Software</h3>
              <div className="space-y-3 velox-text-body text-blue-800 text-center font-medium">
                <p>• You delegate process</p>
                <p>• We deliver guaranteed results</p>
                <p>• We handle complexity for you</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Key Message with Premium Glass Design */}
        <motion.div 
          className="card-glass-blue text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="velox-text-h2 text-blue-900 mb-4">
            You own the strategy. We own the execution.
          </h3>
          <p className="velox-text-lead text-blue-800 mb-8">
            The perfect partnership for business growth
          </p>
          <Link 
            href="/our-approach"
            className="cta-magnetic inline-flex items-center gap-2"
          >
            See How This Works
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </Container>
    </Section>
  )
}
