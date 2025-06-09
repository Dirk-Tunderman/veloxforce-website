"use client"

import React from "react"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Crown, Cog, Target, Shield, TrendingUp, Settings, Sparkles, Users, Zap, Building } from "lucide-react"
import { motion } from "framer-motion"

export function PartnershipModel() {
  return (
    <Section padding="xl" background="transparent" className="relative overflow-hidden">
      {/* Performance-Optimized Background */}
      <div className="absolute inset-0 bg-gradient-simple" />
      <div className="absolute inset-0 bg-mesh-static opacity-30" />
      
      <Container className="relative z-10 max-w-6xl">
        {/* Premium Section Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h2 
            className="velox-text-h1-premium mb-8"
            data-text="The Perfect Partnership"
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            The Perfect Partnership
          </motion.h2>
          <motion.p 
            className="velox-text-lead max-w-4xl mx-auto text-blue-800"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Clear division of responsibilities for maximum effectiveness. 
            <span className="font-semibold"> You lead, we execute.</span>
          </motion.p>
        </motion.div>

        {/* Interactive Gear Visualization */}
        <motion.div 
          className="partnership-visualization mb-20"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="relative max-w-md mx-auto h-64">
            {/* Strategic Gear (Left) */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2">
              <div className="gear-strategic w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 shadow-blue-lg flex items-center justify-center">
                <Crown className="w-12 h-12 text-white" />
              </div>
            </div>
            
            {/* Execution Gear (Right) */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2">
              <div className="gear-execution w-32 h-32 rounded-full bg-gradient-to-br from-gray-600 to-gray-800 shadow-lg flex items-center justify-center">
                <Cog className="w-12 h-12 text-white" />
              </div>
            </div>
            
            {/* Connection Point */}
            <motion.div 
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-400 to-gray-500 shadow-xl flex items-center justify-center">
                <Zap className="w-8 h-8 text-white" />
              </div>
            </motion.div>
            
            {/* Animated Connection Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              <motion.path
                d="M 80 128 Q 128 128 176 128"
                stroke="url(#partnership-gradient)"
                strokeWidth="2"
                fill="none"
                strokeDasharray="5 5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <defs>
                <linearGradient id="partnership-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#2563EB" />
                  <stop offset="50%" stopColor="#60A5FA" />
                  <stop offset="100%" stopColor="#6B7280" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </motion.div>

        {/* Premium Two-Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {/* What You Own (Strategic Layer) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="card-solution h-full">
              <div className="flex items-center gap-4 mb-8">
                <div className="icon-container">
                  <Crown className="w-6 h-6 icon-accent" />
                </div>
                <div>
                  <h3 className="velox-text-h3 text-blue-900 mb-2">
                    What You Own
                  </h3>
                  <p className="text-blue-700 font-medium flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-blue-600" />
                    Strategic Layer
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                {[
                  {
                    icon: Target,
                    title: "Your business knowledge and expertise",
                    description: "You understand your customers and market"
                  },
                  {
                    icon: TrendingUp,
                    title: "Process improvement decisions",
                    description: "You decide what should be optimized"
                  },
                  {
                    icon: Shield,
                    title: "Quality standards and requirements",
                    description: "You set the bar for excellence"
                  },
                  {
                    icon: Building,
                    title: "Continuous optimization of what works",
                    description: "You guide strategic improvements"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-lg hover:bg-blue-50/50 transition-colors duration-200"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="icon-container bg-blue-100">
                      <item.icon className="w-5 h-5 icon-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-blue-900 mb-1">{item.title}</p>
                      <p className="velox-text-body text-blue-700">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* What We Own (Execution Layer) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="card-base h-full">
              <div className="flex items-center gap-4 mb-8">
                <div className="icon-container">
                  <Cog className="w-6 h-6 icon-primary" />
                </div>
                <div>
                  <h3 className="velox-text-h3 text-gray-900 mb-2">
                    What We Own
                  </h3>
                  <p className="text-gray-700 font-medium flex items-center gap-2">
                    <Zap className="w-4 h-4 text-gray-600" />
                    Execution Layer
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                {[
                  {
                    icon: Settings,
                    title: "All technical complexity and decisions",
                    description: "We handle the technical implementation"
                  },
                  {
                    icon: Shield,
                    title: "Ensuring processes run perfectly 24/7",
                    description: "We guarantee operational excellence"
                  },
                  {
                    icon: TrendingUp,
                    title: "Scaling to any volume you need",
                    description: "We handle capacity and performance"
                  },
                  {
                    icon: Users,
                    title: "Adapting when technology changes",
                    description: "We stay current with tech evolution"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="icon-container bg-gray-100">
                      <item.icon className="w-5 h-5 icon-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900 mb-1">{item.title}</p>
                      <p className="velox-text-body text-gray-600">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Message */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="card-solution max-w-4xl mx-auto">
            <motion.div
              initial={{ scale: 0.95 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <p className="velox-text-h3 text-blue-900 mb-6 font-bold">
                You're the architect. We're the construction crew that builds it perfectly every time.
              </p>
            </motion.div>

            <p className="velox-text-lead text-blue-800 mb-8">
              This clear division of responsibilities ensures you stay focused on what only you can do:
              growing your business and serving your customers.
            </p>

            {/* Visual separator */}
            <motion.div
              className="flex items-center justify-center gap-4 mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <div className="w-16 h-[2px] bg-blue-300" />
              <div className="w-3 h-3 rounded-full bg-blue-500" />
              <div className="w-16 h-[2px] bg-blue-300" />
            </motion.div>

            {/* Partnership benefits */}
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { value: "100%", label: "Focus on Strategy" },
                { value: "24/7", label: "Execution Excellence" },
                { value: "∞", label: "Scalability" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  <div className="text-2xl font-bold text-blue-600 mb-1">{stat.value}</div>
                  <div className="velox-text-body text-blue-700">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  )
}