"use client"

import React from "react"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Button } from "@/components/ui/button"
import { Brain, Settings, AlertCircle, TrendingUp, ArrowRight, Zap, Shield, Gauge, Network, CheckCircle } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

// Enhanced Decision Transformation Visualization
function BrainNetworkVisualization() {
  // Multi-stage transformation layout: Complex inputs → Processing → Streamlined output
  const nodes = [
    // Stage 1: Complex decision inputs (left side - multiple scattered sources)
    { id: 1, x: 5, y: 10, type: 'complex', label: 'Tech Decisions' },
    { id: 2, x: 8, y: 25, type: 'complex', label: 'Architecture' },
    { id: 3, x: 12, y: 40, type: 'complex', label: 'Security' },
    { id: 4, x: 6, y: 55, type: 'complex', label: 'Scaling' },
    { id: 5, x: 10, y: 70, type: 'complex', label: 'Compliance' },
    { id: 6, x: 4, y: 85, type: 'complex', label: 'Integration' },
    { id: 7, x: 15, y: 90, type: 'complex', label: 'Performance' },
    
    // Stage 2: Processing layer (center-left - consolidation)
    { id: 8, x: 30, y: 20, type: 'processing', label: 'Analysis' },
    { id: 9, x: 35, y: 40, type: 'processing', label: 'Integration' },
    { id: 10, x: 32, y: 60, type: 'processing', label: 'Optimization' },
    { id: 11, x: 38, y: 80, type: 'processing', label: 'Validation' },
    
    // Stage 3: Unified processor (center)
    { id: 12, x: 55, y: 50, type: 'processor', label: 'VeloxForce' },
    
    // Stage 4: Streamlined output (right side - single clean flow)
    { id: 13, x: 85, y: 20, type: 'output', label: 'Automated' },
    { id: 14, x: 85, y: 40, type: 'output', label: 'Streamlined' },
    { id: 15, x: 85, y: 60, type: 'output', label: 'Optimized' },
    { id: 16, x: 85, y: 80, type: 'output', label: 'Compliant' },
  ]
  
  // Multi-stage transformation connections
  const connections = [
    // Stage 1 → Stage 2: Complex decisions to processing
    { from: 1, to: 8, type: 'input' },
    { from: 2, to: 8, type: 'input' },
    { from: 2, to: 9, type: 'input' },
    { from: 3, to: 9, type: 'input' },
    { from: 3, to: 10, type: 'input' },
    { from: 4, to: 10, type: 'input' },
    { from: 5, to: 10, type: 'input' },
    { from: 5, to: 11, type: 'input' },
    { from: 6, to: 9, type: 'input' },
    { from: 6, to: 11, type: 'input' },
    { from: 7, to: 11, type: 'input' },
    
    // Stage 2 → Stage 3: Processing to unified processor
    { from: 8, to: 12, type: 'processing' },
    { from: 9, to: 12, type: 'processing' },
    { from: 10, to: 12, type: 'processing' },
    { from: 11, to: 12, type: 'processing' },
    
    // Stage 3 → Stage 4: Processor to streamlined outputs
    { from: 12, to: 13, type: 'output' },
    { from: 12, to: 14, type: 'output' },
    { from: 12, to: 15, type: 'output' },
    { from: 12, to: 16, type: 'output' },
  ]
  
  return (
    <div className="relative w-full h-80 mx-auto max-w-4xl">
      <svg className="absolute inset-0 w-full h-full">
        <defs>
          {/* Gradient for processed connections */}
          <linearGradient id="processed-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#EF4444" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#2563EB" stopOpacity="0.8" />
          </linearGradient>
        </defs>
        
        {/* Connection lines - staged transformation flow */}
        {connections.map((conn, index) => {
          const fromNode = nodes.find(n => n.id === conn.from)!
          const toNode = nodes.find(n => n.id === conn.to)!
          
          // Different visual styles for each transformation stage
          const getConnectionStyle = (type: string) => {
            switch(type) {
              case 'input':
                return { stroke: '#EF4444', strokeWidth: '2', opacity: 0.6, dashArray: '8 4' }
              case 'processing':
                return { stroke: '#F59E0B', strokeWidth: '3', opacity: 0.7, dashArray: 'none' }
              case 'output':
                return { stroke: '#10B981', strokeWidth: '4', opacity: 0.8, dashArray: 'none' }
              default:
                return { stroke: '#6B7280', strokeWidth: '2', opacity: 0.4, dashArray: 'none' }
            }
          }
          
          const style = getConnectionStyle(conn.type)
          
          return (
            <motion.line
              key={index}
              x1={`${fromNode.x}%`}
              y1={`${fromNode.y}%`}
              x2={`${toNode.x}%`}
              y2={`${toNode.y}%`}
              stroke={style.stroke}
              strokeWidth={style.strokeWidth}
              strokeDasharray={style.dashArray}
              opacity={style.opacity}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: style.opacity }}
              transition={{ 
                duration: 1.5, 
                delay: conn.type === 'input' ? index * 0.1 : 
                       conn.type === 'processing' ? 0.8 + index * 0.1 : 
                       1.6 + index * 0.2 
              }}
            />
          )
        })}
      </svg>
      
      {/* Multi-stage transformation nodes */}
      {nodes.map((node, index) => {
        // Different sizes and styles for each stage
        const getNodeStyle = (type: string) => {
          switch(type) {
            case 'complex':
              return { 
                size: 'w-12 h-12', 
                bg: 'bg-red-500 hover:bg-red-600', 
                icon: AlertCircle, 
                iconSize: 'w-6 h-6',
                offset: '24px'
              }
            case 'processing':
              return { 
                size: 'w-11 h-11', 
                bg: 'bg-amber-500 hover:bg-amber-600', 
                icon: Settings, 
                iconSize: 'w-5 h-5',
                offset: '22px'
              }
            case 'processor':
              return { 
                size: 'w-16 h-16', 
                bg: 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800', 
                icon: Zap, 
                iconSize: 'w-8 h-8',
                offset: '32px'
              }
            case 'output':
              return { 
                size: 'w-10 h-10', 
                bg: 'bg-emerald-500 hover:bg-emerald-600', 
                icon: CheckCircle, 
                iconSize: 'w-5 h-5',
                offset: '20px'
              }
            default:
              return { 
                size: 'w-8 h-8', 
                bg: 'bg-gray-500', 
                icon: Settings, 
                iconSize: 'w-4 h-4',
                offset: '16px'
              }
          }
        }
        
        const nodeStyle = getNodeStyle(node.type)
        const IconComponent = nodeStyle.icon
        
        return (
          <motion.div
            key={node.id}
            className={`absolute rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 shadow-lg
              ${nodeStyle.size} ${nodeStyle.bg}`}
            style={{ 
              left: `calc(${node.x}% - ${nodeStyle.offset})`, 
              top: `calc(${node.y}% - ${nodeStyle.offset})` 
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: node.type === 'processor' ? [1, 1.05, 1] : 1, 
              opacity: 1 
            }}
            transition={{ 
              duration: node.type === 'processor' ? 2 : 0.6, 
              delay: node.type === 'complex' ? index * 0.08 : 
                     node.type === 'processing' ? 0.6 + index * 0.08 : 
                     node.type === 'processor' ? 1.2 : 
                     1.4 + index * 0.08,
              repeat: node.type === 'processor' ? Infinity : 0,
              repeatType: 'loop'
            }}
            whileHover={{ scale: node.type === 'processor' ? 1.15 : 1.1 }}
          >
            <IconComponent className={`${nodeStyle.iconSize} text-white`} />
            {node.type === 'processor' && (
              <motion.div
                className="absolute inset-0 rounded-full bg-white opacity-20"
                animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            )}
          </motion.div>
        )
      })}
      
      {/* Enhanced transformation flow indicators */}
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 text-xs text-gray-600">
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 rounded-full bg-red-500"></div>
          <span>Complex</span>
        </div>
        <ArrowRight className="w-3 h-3 text-gray-400" />
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 rounded-full bg-amber-500"></div>
          <span>Processing</span>
        </div>
        <ArrowRight className="w-3 h-3 text-gray-400" />
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 rounded-full bg-blue-600"></div>
          <span>VeloxForce</span>
        </div>
        <ArrowRight className="w-3 h-3 text-gray-400" />
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
          <span>Automated</span>
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
            Every 'if this, then that' in your business becomes intelligent software
          </motion.p>
          <motion.p 
            className="velox-text-body max-w-3xl mx-auto text-gray-600 mt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
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
          
          <div className="card-base max-w-4xl mx-auto">
            <BrainNetworkVisualization />
            
            {/* Explanation text */}
            <div className="mt-8 pt-6 border-t border-blue-200 text-center">
              <p className="velox-text-body text-gray-700 font-medium">
                How it works: Your decisions → Our AI → Your custom software
              </p>
            </div>
            
            {/* Decision metrics */}
            <div className="grid grid-cols-3 gap-4 mt-6">
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
