"use client"

import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Calculator, Download, ArrowRight, Clock, CheckCircle } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

export function PathSelectionSection() {
  return (
    <Section padding="xl" background="transparent">
      <Container className="max-w-6xl">
        {/* Section Title */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="velox-text-h2 mb-6">
            Ready to Stop Managing and Start Delegating?
          </h2>
          <p className="velox-text-lead max-w-2xl mx-auto">
            Two ways to explore Service-as-Software
          </p>
        </motion.div>

        {/* Two Path Options */}
        <div className="grid md:grid-cols-2 gap-10 mb-20">
          {/* Primary Path - ROI Analysis */}
          <motion.div 
            className="card-solution card-floating relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Recommended Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 rounded-full text-sm font-semibold elevation-2">
              Recommended
            </div>
            
            <div className="text-center pt-4">
              <div className="icon-container-gradient mx-auto mb-6 w-20 h-20">
                <Calculator className="h-10 w-10 icon-accent" />
              </div>
              
              <h3 className="velox-text-h2 text-gray-900 mb-2">
                Primary Option:
              </h3>
              <h4 className="velox-text-h3 text-blue-600 mb-6">
                Calculate My Delegation Savings
              </h4>

              <div className="flex justify-center mb-6">
                <Link
                  href="/tools/business-audit"
                  className="cta-magnetic w-full inline-flex items-center justify-center gap-2 min-h-[56px]"
                >
                  Calculate My Delegation Savings
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>

              <p className="velox-text-body text-gray-600 mb-6 text-center">
                For businesses ready to see specific ROI numbers
              </p>

              <div className="space-y-4 text-left">
                <div className="flex items-center gap-3">
                  <div className="icon-container-glass">
                    <CheckCircle className="h-4 w-4 icon-success" />
                  </div>
                  <span className="velox-text-body text-gray-600">8-minute assessment</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="icon-container-glass">
                    <CheckCircle className="h-4 w-4 icon-success" />
                  </div>
                  <span className="velox-text-body text-gray-600">See exact savings for YOUR volumes</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="icon-container-glass">
                    <CheckCircle className="h-4 w-4 icon-success" />
                  </div>
                  <span className="velox-text-body text-gray-600">No sales pressure</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Secondary Path - Download Guide */}
          <motion.div 
            className="card-elevated"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="text-center">
              <div className="icon-container-glass mx-auto mb-6 w-20 h-20">
                <Download className="h-10 w-10 icon-primary" />
              </div>
              
              <h3 className="velox-text-h2 text-gray-900 mb-2">
                Secondary Option:
              </h3>
              <h4 className="velox-text-h3 text-gray-600 mb-6">
                Get Free Process Audit
              </h4>

              <div className="flex justify-center mb-6">
                <Link
                  href="/tools/business-audit"
                  className="cta-secondary-glass w-full inline-flex items-center justify-center gap-2 min-h-[56px]"
                >
                  Get Free Process Audit
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>

              <p className="velox-text-body text-gray-600 mb-6 text-center">
                Not sure yet? Get valuable insights with no sales pressure
              </p>

              <div className="space-y-4 text-left">
                <div className="flex items-center gap-3">
                  <div className="icon-container-glass">
                    <CheckCircle className="h-4 w-4 icon-primary" />
                  </div>
                  <span className="velox-text-body text-gray-600">Instant clarity on timing</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="icon-container-glass">
                    <CheckCircle className="h-4 w-4 icon-primary" />
                  </div>
                  <span className="velox-text-body text-gray-600">Real company examples</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="icon-container-glass">
                    <CheckCircle className="h-4 w-4 icon-primary" />
                  </div>
                  <span className="velox-text-body text-gray-600">Self-assessment checklist</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Final Urgency */}
        <motion.div 
          className="glass-blue rounded-2xl p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex items-start gap-4">
            <div className="icon-container-gradient mt-1">
              <Clock className="h-6 w-6 icon-warning" />
            </div>
            <div className="text-center flex-1">
              <p className="velox-text-lead text-gray-800 mb-3">
                Every week you wait costs approximately <span className="font-bold text-blue-700">€1,375</span> in lost efficiency.
              </p>
              <p className="velox-text-body text-gray-700">
                But rushed decisions are worse. Choose the path that matches your readiness - just choose soon.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Trust Signals Footer */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="card-elevated p-4">
              <p className="velox-text-body font-semibold text-gray-900 mb-2">[Portfolio data coming soon]</p>
              <p className="velox-text-body text-gray-600">Successful implementations</p>
            </div>
            <div className="card-elevated p-4">
              <p className="velox-text-body font-semibold text-gray-900 mb-2">[Metrics being compiled]</p>
              <p className="velox-text-body text-gray-600">Average client retention</p>
            </div>
            <div className="card-elevated p-4">
              <p className="velox-text-body font-semibold text-gray-900 mb-2">ISO 27001</p>
              <p className="velox-text-body text-gray-600">Security compliance framework</p>
            </div>
            <div className="card-elevated p-4">
              <p className="velox-text-body font-semibold text-gray-900 mb-2">Service-as-Software</p>
              <p className="velox-text-body text-gray-600">Model guarantee</p>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="velox-text-body text-gray-500 max-w-2xl mx-auto">
              Service-as-Software is a new model. Portfolio data and client metrics are being compiled for transparency. 
              Security framework follows ISO 27001 standards. Results vary by process complexity.
            </p>
          </div>
        </motion.div>
      </Container>
    </Section>
  )
}