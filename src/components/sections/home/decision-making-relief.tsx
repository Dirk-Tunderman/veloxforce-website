"use client"

import React from "react"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Button } from "@/components/ui/button"
import { Brain, Settings, AlertCircle, TrendingUp, ArrowRight, Zap, Shield, Gauge, Network } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

// Improved Decision Flow Visualization
function BrainNetworkVisualization() {
  // Organized node layout: complex decisions around the perimeter, simple solutions flowing to center
  const nodes = [
    // Complex decision nodes (scattered around perimeter)
    { id: 1, x: 15, y: 20, type: 'complex', label: 'Tech Stack' },
    { id: 2, x: 85, y: 25, type: 'complex', label: 'Architecture' },
    { id: 3, x: 10, y: 75, type: 'complex', label: 'Scaling' },
    { id: 4, x: 90, y: 80, type: 'complex', label: 'Security' },
    // Solution nodes (organized flow toward center)
    { id: 5, x: 35, y: 35, type: 'solution', label: 'Analysis' },
    { id: 6, x: 65, y: 35, type: 'solution', label: 'Strategy' },
    { id: 7, x: 35, y: 65, type: 'solution', label: 'Implementation' },
    { id: 8, x: 65, y: 65, type: 'solution', label: 'Optimization' },
  ]
  
  // Logical connections: complex decisions → solution nodes → central processor
  const connections = [
    // Complex decisions to solution nodes
    { from: 1, to: 5, type: 'input' },
    { from: 2, to: 6, type: 'input' },
    { from: 3, to: 7, type: 'input' },
    { from: 4, to: 8, type: 'input' },
    // Solution nodes to center (processed flow)
    { from: 5, to: 'center', type: 'processed' },
    { from: 6, to: 'center', type: 'processed' },
    { from: 7, to: 'center', type: 'processed' },
    { from: 8, to: 'center', type: 'processed' },
  ]
  
  const centerPoint = { x: 50, y: 50 }
  
  return (
    <div className="relative w-full h-80 mx-auto max-w-lg">
      <svg className="absolute inset-0 w-full h-full">
        <defs>
          {/* Gradient for processed connections */}
          <linearGradient id="processed-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#EF4444" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#2563EB" stopOpacity="0.8" />
          </linearGradient>
        </defs>
        
        {/* Connection lines */}
        {connections.map((conn, index) => {
          const fromNode = conn.from === 'center' ? centerPoint : nodes.find(n => n.id === conn.from)!
          const toNode = conn.to === 'center' ? centerPoint : nodes.find(n => n.id === conn.to)!
          
          return (
            <motion.line
              key={index}
              x1={`${fromNode.x}%`}
              y1={`${fromNode.y}%`}
              x2={`${toNode.x}%`}
              y2={`${toNode.y}%`}
              stroke={conn.type === 'processed' ? '#2563EB' : '#EF4444'}
              strokeWidth={conn.type === 'processed' ? '3' : '2'}
              strokeDasharray={conn.type === 'input' ? '8 4' : 'none'}
              opacity={conn.type === 'processed' ? '0.8' : '0.4'}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: conn.type === 'processed' ? 0.8 : 0.4 }}
              transition={{ duration: 2, delay: index * 0.3 }}
            />
          )
        })}
      </svg>
      
      {/* Decision and solution nodes */}
      {nodes.map((node, index) => (
        <motion.div
          key={node.id}
          className={`absolute rounded-full flex items-center justify-center cursor-pointer transition-all duration-300
            ${node.type === 'complex' 
              ? 'w-10 h-10 bg-red-500 hover:bg-red-600 shadow-lg' 
              : 'w-8 h-8 bg-blue-500 hover:bg-blue-600 shadow-md'
            }`}
          style={{ 
            left: `calc(${node.x}% - ${node.type === 'complex' ? '20px' : '16px'})`, 
            top: `calc(${node.y}% - ${node.type === 'complex' ? '20px' : '16px'})` 
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ scale: 1.1 }}
        >
          {node.type === 'complex' ? (
            <AlertCircle className="w-5 h-5 text-white" />
          ) : (
            <Settings className="w-4 h-4 text-white" />
          )}
        </motion.div>
      ))}
      
      {/* Central Veloxforce processor */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <motion.div
          className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 flex items-center justify-center shadow-xl border-4 border-white"
          animate={{ 
            boxShadow: [
              '0 0 20px rgba(37, 99, 235, 0.3)',
              '0 0 40px rgba(37, 99, 235, 0.6)',
              '0 0 20px rgba(37, 99, 235, 0.3)'
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Zap className="w-8 h-8 text-white" />
        </motion.div>
      </motion.div>
      
      {/* Flow indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-4 text-xs text-gray-600">
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 rounded-full bg-red-500"></div>
          <span>Complex Decisions</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 rounded-full bg-blue-500"></div>
          <span>Streamlined Process</span>
        </div>
      </div>
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
