"use client"

import React from "react"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Button } from "@/components/ui/button"
import { Brain, Settings, AlertCircle, TrendingUp, ArrowRight, Zap, Shield, Gauge, Network } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

// Simplified Brain Network Component
function BrainNetworkVisualization() {
  const nodes = [
    { id: 1, x: 50, y: 30, type: 'complex' },
    { id: 2, x: 20, y: 60, type: 'complex' },
    { id: 3, x: 80, y: 70, type: 'complex' },
    { id: 4, x: 35, y: 85, type: 'simple' },
    { id: 5, x: 65, y: 45, type: 'simple' },
  ]
  
  const connections = [
    { from: 1, to: 2 }, { from: 1, to: 3 }, { from: 2, to: 4 }, { from: 3, to: 5 }, { from: 1, to: 5 }
  ]
  
  return (
    <div className="relative w-full h-64 mx-auto max-w-md">
      <svg className="absolute inset-0 w-full h-full">
        {/* Static connections */}
        {connections.map((conn, index) => {
          const fromNode = nodes.find(n => n.id === conn.from)!
          const toNode = nodes.find(n => n.id === conn.to)!
          return (
            <line
              key={index}
              x1={`${fromNode.x}%`}
              y1={`${fromNode.y}%`}
              x2={`${toNode.x}%`}
              y2={`${toNode.y}%`}
              stroke="#CBD5E1"
              strokeWidth="2"
              strokeDasharray="5 5"
              opacity="0.6"
            />
          )
        })}
        
        {/* Gradient definitions */}
        <defs>
          <linearGradient id="brain-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#EF4444" />
            <stop offset="50%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#2563EB" />
          </linearGradient>
        </defs>
      </svg>
      
      {/* Decision nodes */}
      {nodes.map((node, index) => (
        <div
          key={node.id}
          className={`absolute w-8 h-8 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-200
            ${node.type === 'complex' ? 'bg-red-500' : 'bg-blue-500'}`}
          style={{ 
            left: `calc(${node.x}% - 16px)`, 
            top: `calc(${node.y}% - 16px)` 
          }}
        >
          {node.type === 'complex' ? (
            <AlertCircle className="w-4 h-4 text-white" />
          ) : (
            <Brain className="w-4 h-4 text-white" />
          )}
        </div>
      ))}
      
      {/* Central processing indicator */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.8, 1, 0.8]
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg">
          <Zap className="w-6 h-6 text-white" />
        </div>
      </motion.div>
    </div>
  )
}

export function DecisionMakingRelief() {
  return (
    <Section padding="xl" background="transparent" className="relative overflow-hidden">
      {/* Performance-Optimized Background */}
      <div className="absolute inset-0 bg-gradient-simple" />
      <div className="absolute inset-0 bg-mesh-static opacity-30" />
      
      <Container className="relative z-10 max-w-6xl">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h2 
            className="velox-text-h1-premium mb-8"
            data-text="We Handle All The Complex Decisions You Hate"
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            We Handle All The Complex Decisions You Hate
          </motion.h2>
          <motion.p 
            className="velox-text-lead max-w-4xl mx-auto text-blue-800"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Stop wrestling with technical complexity. Focus on what only you can do.
            <span className="font-semibold"> We eliminate decision fatigue.</span>
          </motion.p>
        </motion.div>

        {/* Interactive Brain Network Visualization */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="text-center mb-12">
            <h3 className="velox-text-h3 text-blue-900 mb-4">
              From Decision Overload to Clarity
            </h3>
            <p className="velox-text-body text-gray-600 max-w-2xl mx-auto">
              Watch complex decisions transform into streamlined processes
            </p>
          </div>
          
          <div className="card-base max-w-lg mx-auto">
            <BrainNetworkVisualization />
            
            {/* Decision metrics */}
            <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-blue-200">
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-2xl font-bold text-red-500 mb-1">500+</div>
                <div className="text-xs text-gray-600">Decisions Eliminated</div>
              </motion.div>
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-2xl font-bold text-blue-600 mb-1">90%</div>
                <div className="text-xs text-gray-600">Less Mental Load</div>
              </motion.div>
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-2xl font-bold text-emerald-500 mb-1">24/7</div>
                <div className="text-xs text-gray-600">Auto-Resolution</div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Decision Categories Grid */}
        <div className="grid lg:grid-cols-2 gap-6 mb-20">
          {[
            {
              icon: Settings,
              title: "Which technology works best for your process",
              description: "No more researching tools, comparing features, or worrying about compatibility. We choose the right technology stack for your specific needs.",
              iconColor: "icon-primary"
            },
            {
              icon: Shield,
              title: "How to handle exceptions and edge cases", 
              description: "We design robust systems that handle the unexpected. When edge cases arise, we solve them without disrupting your business.",
              iconColor: "icon-primary"
            },
            {
              icon: TrendingUp,
              title: "When to scale up or optimize performance",
              description: "We monitor performance and proactively scale your systems. You'll never have to worry about capacity or speed issues.",
              iconColor: "icon-primary"
            },
            {
              icon: Network,
              title: "What to do when systems need updates",
              description: "Technology evolves constantly. We handle all updates, migrations, and improvements so your processes keep running smoothly.",
              iconColor: "icon-accent"
            }
          ].map((decision, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
            >
              <div className="card-base h-full">
                <div className="flex items-start gap-4 mb-6">
                  <div className="icon-container">
                    <decision.icon className={`w-6 h-6 ${decision.iconColor}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="velox-text-h3 text-blue-900 mb-3 leading-tight">
                      {decision.title}
                    </h3>
                  </div>
                </div>

                <p className="velox-text-body text-blue-800 mb-6">
                  {decision.description}
                </p>

                {/* Complexity reduction indicator */}
                <motion.div
                  className="pt-4 border-t border-blue-200"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 rounded-full bg-red-400" />
                    <span className="text-gray-600">Complex Decision</span>
                    <ArrowRight className="w-3 h-3 text-gray-400 mx-1" />
                    <div className="w-2 h-2 rounded-full bg-blue-500" />
                    <span className="text-blue-700 font-medium">Automated</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
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
              <h3 className="velox-text-h2 text-blue-900 mb-6 font-bold">
                You make business decisions. We make technical decisions.
              </h3>
            </motion.div>

            <p className="velox-text-lead text-blue-800 mb-8 max-w-3xl mx-auto">
              This clear separation lets you focus on strategy, growth, and customer relationships
              while we handle all the technical complexity behind the scenes.
            </p>

            {/* Decision Relief Statistics */}
            <div className="grid md:grid-cols-4 gap-6 mb-8">
              {[
                { value: "500+", label: "Technical Decisions Monthly", icon: Settings, iconColor: "icon-primary" },
                { value: "0", label: "Hours You Spend", icon: Gauge, iconColor: "icon-primary" },
                { value: "90%", label: "Reduced Decision Fatigue", icon: Brain, iconColor: "icon-primary" },
                { value: "24/7", label: "Automated Resolution", icon: Zap, iconColor: "icon-accent" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  <div className="icon-container mx-auto mb-3 bg-blue-100">
                    <stat.icon className={`w-6 h-6 ${stat.iconColor}`} />
                  </div>
                  <div className="text-2xl font-bold text-blue-600 mb-1">{stat.value}</div>
                  <div className="velox-text-body text-blue-700">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <Button
              size="lg"
              className="relative bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-lg font-semibold px-8 py-4 h-auto rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 overflow-hidden group"
              asChild
            >
              <Link href="/tools/business-audit">
                <span className="relative z-10">
                  See What I Can Delegate
                  <ArrowRight className="ml-2 h-5 w-5" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </Link>
            </Button>
          </div>
        </motion.div>
      </Container>
    </Section>
  )
}
