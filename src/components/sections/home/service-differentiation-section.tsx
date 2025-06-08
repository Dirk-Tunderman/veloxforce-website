"use client"

import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Check, X, ArrowRight, Zap, Users, Cog } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export function ServiceDifferentiationSection() {
  return (
    <Section 
      padding="xl" 
      background="transparent" 
      className="relative overflow-hidden"
    >
      <Container className="max-w-7xl relative z-10" style={{ overflow: 'visible' }}>
        {/* Premium Section Title */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="velox-text-h1-premium mb-6" data-text="This Isn't Automation. It Isn't Consulting. It's Something New.">
            This Isn't Automation. It Isn't Consulting. <span className="text-gradient">It's Something New</span>.
          </h2>
          <p className="velox-text-lead max-w-3xl mx-auto">
            <span className="font-bold">AI made custom software affordable.</span> We made it accessible by <span className="font-bold">running it for you</span>. 
            <span className="font-semibold" style={{ color: 'var(--velox-gray-900)' }}> That's the <span className="font-bold">Service-as-Software revolution</span>.</span>
          </p>
        </motion.div>

        {/* Premium Three-Column Comparison */}
        <div className="grid lg:grid-cols-7 gap-8 mb-16 pt-8">
          {/* Automation Agencies */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="card-challenge h-full relative flex flex-col">
              <div className="absolute -top-2 left-6 px-3 py-1 rounded-full text-sm font-medium text-white z-10" style={{ backgroundColor: 'var(--velox-gray-600)' }}>
                Automation Agencies
              </div>

              <div className="pt-6 flex-1 flex flex-col">
                <div className="icon-container-glass mx-auto mb-4">
                  <Cog className="h-5 w-5 icon-primary" />
                </div>
                <h3 className="velox-text-h3 text-center mb-4">Give you tools to manage</h3>

                <div className="space-y-3 mb-6 flex-1">
                  <div className="flex items-start gap-2">
                    <X className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: 'var(--velox-gray-500)' }} />
                    <span className="text-sm" style={{ color: 'var(--velox-gray-700)' }}>You handle when it breaks</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <X className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: 'var(--velox-gray-500)' }} />
                    <span className="text-sm" style={{ color: 'var(--velox-gray-700)' }}>You operate the complexity</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <X className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: 'var(--velox-gray-500)' }} />
                    <span className="text-sm" style={{ color: 'var(--velox-gray-700)' }}>Tool-Focused</span>
                  </div>
                </div>

                <div className="text-center">
                  <p className="font-medium" style={{ color: 'var(--velox-gray-600)' }}>Tool Management</p>
                  <p className="text-xs" style={{ color: 'var(--velox-gray-500)' }}>You manage the complexity</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Service Businesses */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="card-challenge h-full relative flex flex-col">
              <div className="absolute -top-2 left-6 px-3 py-1 rounded-full text-sm font-medium text-white z-10" style={{ backgroundColor: 'var(--velox-gray-600)' }}>
                Service Businesses
              </div>

              <div className="pt-6 flex-1 flex flex-col">
                <div className="icon-container-glass mx-auto mb-4">
                  <Users className="h-5 w-5 icon-primary" />
                </div>
                <h3 className="velox-text-h3 text-center mb-4">People you pay hourly</h3>

                <div className="space-y-3 mb-6 flex-1">
                  <div className="flex items-start gap-2">
                    <X className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: 'var(--velox-gray-500)' }} />
                    <span className="text-sm" style={{ color: 'var(--velox-gray-700)' }}>Limited by human capacity</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <X className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: 'var(--velox-gray-500)' }} />
                    <span className="text-sm" style={{ color: 'var(--velox-gray-700)' }}>Quality varies by person</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <X className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: 'var(--velox-gray-500)' }} />
                    <span className="text-sm" style={{ color: 'var(--velox-gray-700)' }}>People-Focused</span>
                  </div>
                </div>

                <div className="text-center">
                  <p className="font-medium" style={{ color: 'var(--velox-gray-600)' }}>Human Scaling</p>
                  <p className="text-xs" style={{ color: 'var(--velox-gray-500)' }}>Double volume = Double costs</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Service-as-Software Premium Card */}
          <motion.div 
            className="lg:col-span-3"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="card-aurora card-floating h-full relative flex flex-col">
              {/* RECOMMENDED Badge */}
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-6 py-2 rounded-full text-xs font-bold letter-spacing-wide text-white z-20" style={{ background: 'var(--velox-gradient-primary)', boxShadow: 'var(--velox-shadow-blue-md)' }}>
                RECOMMENDED
              </div>
              
              <div className="pt-8 flex-1 flex flex-col">
                <div className="icon-container-gradient mx-auto mb-6">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <h3 className="velox-text-h2 text-center mb-6" style={{ color: 'var(--velox-blue-900)' }}>
                  Outcomes You Receive
                </h3>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 mt-0.5 flex-shrink-0" style={{ color: 'var(--velox-accent)' }} />
                    <span className="font-medium" style={{ color: 'var(--velox-gray-800)' }}>Outcomes you receive</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 mt-0.5 flex-shrink-0" style={{ color: 'var(--velox-accent)' }} />
                    <span className="font-medium" style={{ color: 'var(--velox-gray-800)' }}>We handle all complexity</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 mt-0.5 flex-shrink-0" style={{ color: 'var(--velox-accent)' }} />
                    <span className="font-medium" style={{ color: 'var(--velox-gray-800)' }}>Guaranteed results delivered</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 mt-0.5 flex-shrink-0" style={{ color: 'var(--velox-accent)' }} />
                    <span className="font-medium" style={{ color: 'var(--velox-gray-800)' }}>Outcome-Focused</span>
                  </div>
                </div>
                
                <div className="glass-light rounded-xl p-4 text-center mb-6">
                  <p className="font-bold text-lg" style={{ color: 'var(--velox-blue-900)' }}>Exponential Efficiency</p>
                  <p className="text-sm" style={{ color: 'var(--velox-gray-600)' }}>Double volume = Same cost</p>
                </div>
                
                <div className="text-center">
                  <Link 
                    href="/our-approach"
                    className="cta-magnetic inline-flex items-center gap-2 text-base"
                  >
                    <span className="relative z-10">See How This Works</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Premium Key Insight */}
        <motion.div 
          className="card-elevated text-center relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0" style={{ background: 'var(--velox-gradient-aurora)' }}></div>
          <div className="relative z-10">
            <h3 
              className="velox-text-h1-premium mb-4" 
              data-text="The Revolution: We Don't Sell You Tools to Manage"
            >
              The Revolution: We Don't Sell You Tools to Manage
            </h3>
            <p className="velox-text-lead mb-2 font-semibold" style={{ color: 'var(--velox-gray-900)' }}>
              We deliver a department that runs itself.
            </p>
            <p className="velox-text-body text-center" style={{ color: 'var(--velox-gray-600)' }}>
              AI made custom software affordable. We made it accessible by running it forever. That's the Service-as-Software revolution.
            </p>
          </div>
        </motion.div>
      </Container>
    </Section>
  )
}