"use client"

import { motion } from "framer-motion"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"
import { CheckCircle, ArrowRight, Users, Cog, Target, Workflow, Zap, Building2, Factory, ShoppingCart, Heart, Home, Briefcase } from "lucide-react"

const industries = [
  { name: "Manufacturing", icon: Factory },
  { name: "Professional Services", icon: Briefcase },
  { name: "E-commerce", icon: ShoppingCart },
  { name: "Healthcare", icon: Heart },
  { name: "Real Estate", icon: Home },
  { name: "Non-profits", icon: Users },
  { name: "Tech Startups", icon: Zap },
  { name: "Traditional Businesses", icon: Building2 }
]

export function UniversalTruthSection() {
  return (
    <Section 
      padding="xl" 
      background="light-blue"
      className="relative overflow-hidden"
    >
      {/* Premium Background Effects */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-40" />
      <div className="absolute inset-0 noise-overlay" />
      
      <Container className="relative z-10 max-w-7xl">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Heading level="2" className="velox-text-h2 mb-6">
            Your Process Matters.{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Your Industry Doesn't.
            </span>
          </Heading>
          <Text className="velox-text-lead max-w-4xl mx-auto">
            Here's why Service-as-Software works for everyone
          </Text>
        </motion.div>

        {/* Core Truth - Enhanced Visual Design */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="max-w-7xl mx-auto">
            {/* Main Visual Flow */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-center">

              {/* Left: Business Processes */}
              <motion.div 
                className="lg:col-span-2"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="card-challenge relative rounded-3xl p-8 elevation-2 hover:elevation-3 transition-all duration-300">
                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 w-20 h-20 bg-gray-200/50 rounded-full blur-xl"></div>
                  <div className="absolute bottom-4 left-4 w-16 h-16 bg-gray-300/30 rounded-full blur-lg"></div>

                  <div className="relative z-10">
                    <div className="w-20 h-20 bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <Workflow className="w-10 h-10 text-gray-700" />
                    </div>
                    <Heading level="3" className="text-2xl font-bold text-gray-900 mb-4 text-center">
                      Every Business Process
                    </Heading>
                    <Text className="text-gray-700 mb-6 text-center leading-relaxed">
                      Whether simple or complex, they all follow rules
                    </Text>
                    <div className="space-y-3">
                      <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
                        <Text className="text-sm font-medium text-gray-800">"Enter invoice data"</Text>
                      </div>
                      <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
                        <Text className="text-sm font-medium text-gray-800">"Calculate pricing based on 47 variables"</Text>
                      </div>
                      <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
                        <Text className="text-sm font-medium text-gray-800">"Check inventory across 3 systems"</Text>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Center: Enhanced Arrow and Connection */}
              <motion.div 
                className="lg:col-span-1 flex flex-col items-center justify-center py-8"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <div className="relative">
                  {/* Main arrow container */}
                  <div className="transformation-arrow-premium">
                    <div className="hidden lg:block">
                      <ArrowRight className="w-8 h-8 text-white" />
                    </div>
                    <div className="lg:hidden">
                      <ArrowRight className="w-8 h-8 text-white rotate-90" />
                    </div>
                  </div>
                </div>

                <div className="mt-4 px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full border border-blue-200 elevation-1">
                  <Text className="text-blue-700 font-bold text-sm text-center whitespace-nowrap">
                    Perfect Match
                  </Text>
                </div>
              </motion.div>

              {/* Right: Digital Workforce */}
              <motion.div 
                className="lg:col-span-2"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="card-solution relative rounded-3xl p-8 elevation-3 hover:elevation-4 transition-all duration-300">
                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 w-20 h-20 bg-blue-300/30 rounded-full blur-xl"></div>
                  <div className="absolute bottom-4 left-4 w-16 h-16 bg-indigo-300/20 rounded-full blur-lg"></div>

                  <div className="relative z-10">
                    <div className="icon-container-gradient w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 elevation-2">
                      <Cog className="w-10 h-10 text-white animate-spin-slow" />
                    </div>
                    <Heading level="3" className="text-2xl font-bold text-blue-900 mb-4 text-center">
                      Digital Workforces
                    </Heading>
                    <Text className="text-blue-800 mb-6 text-center leading-relaxed">
                      Excel at following rules perfectly, every time
                    </Text>
                    <div className="bg-gradient-to-r from-blue-100 to-indigo-100 border-2 border-blue-300 rounded-2xl p-6 shadow-inner">
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                          <Text className="text-blue-900 font-semibold">Never miss a step</Text>
                        </div>
                        <div className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                          <Text className="text-blue-900 font-semibold">Never make errors</Text>
                        </div>
                        <div className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                          <Text className="text-blue-900 font-semibold">Never need breaks</Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Integrated Industries - Compact */}
            <motion.div 
              className="mt-16 mb-16 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Text className="velox-text-body text-gray-600 mb-8">
                Proven across industries:
              </Text>
              
              {/* Compact Industries Grid */}
              <div className="grid grid-cols-4 md:grid-cols-8 gap-3 max-w-4xl mx-auto">
                {industries.map((industry, index) => {
                  const IconComponent = industry.icon
                  return (
                    <motion.div
                      key={index}
                      className="card-aurora group rounded-lg p-3 text-center hover:elevation-2 transition-all duration-300"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.7 + index * 0.05 }}
                    >
                      <div className="icon-container-glass w-8 h-8 mx-auto mb-2 group-hover:elevation-1">
                        <IconComponent className="w-4 h-4 icon-primary group-hover:icon-accent transition-colors duration-300" />
                      </div>
                      <Text className="text-xs font-medium text-gray-700 group-hover:text-blue-900 transition-colors duration-300">
                        {industry.name}
                      </Text>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>

            {/* Enhanced Bottom Conclusion */}
            <motion.div 
              className="mt-16 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="relative bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl p-10 text-white max-w-5xl mx-auto shadow-2xl overflow-hidden">
                {/* Decorative background elements */}
                <div className="absolute top-0 left-0 w-40 h-40 bg-white/10 rounded-full blur-3xl -translate-x-20 -translate-y-20"></div>
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl translate-x-16 translate-y-16"></div>

                <div className="relative z-10">
                  <div className="flex items-center justify-center gap-4 mb-6">
                    <Target className="w-10 h-10 text-white" />
                    <Heading level="3" className="text-3xl font-bold">
                      The Universal Truth
                    </Heading>
                    <Target className="w-10 h-10 text-white" />
                  </div>
                  <Text className="text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
                    If your process has rules, we can automate it.
                    <span className="font-bold text-white block mt-2 text-2xl"> Your industry doesn't matter.</span>
                  </Text>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Universal Formula */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <div className="card-aurora rounded-3xl p-8 border border-blue-200 max-w-4xl mx-auto elevation-2">
            <div className="flex items-center justify-center gap-3 mb-4">
              <CheckCircle className="w-8 h-8 text-blue-600" />
              <Heading level="3" className="velox-text-h3 text-blue-900">
                The Universal Formula
              </Heading>
            </div>
            <Text className="velox-text-lead text-blue-800">
              Your business knowledge + Our automation expertise = Guaranteed results
            </Text>
          </div>
        </motion.div>
      </Container>
    </Section>
  )
}