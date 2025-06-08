"use client"

import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Button } from "@/components/ui/button"
import { Brain, Settings, AlertCircle, TrendingUp, ArrowRight, Zap, Shield, Gauge, Network } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useState } from "react"
import Link from "next/link"

// Brain Network Animation Component
function BrainNetworkVisualization() {
  const [activeNode, setActiveNode] = useState<number | null>(null)
  
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
        {/* Animated connections */}
        {connections.map((conn, index) => {
          const fromNode = nodes.find(n => n.id === conn.from)!
          const toNode = nodes.find(n => n.id === conn.to)!
          return (
            <motion.line
              key={index}
              x1={`${fromNode.x}%`}
              y1={`${fromNode.y}%`}
              x2={`${toNode.x}%`}
              y2={`${toNode.y}%`}
              stroke="url(#brain-gradient)"
              strokeWidth="2"
              strokeDasharray="5 5"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.6 }}
              transition={{ 
                duration: 2, 
                delay: index * 0.2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
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
        <motion.div
          key={node.id}
          className={`absolute w-8 h-8 rounded-full flex items-center justify-center cursor-pointer
            ${node.type === 'complex' ? 'bg-red-500' : 'bg-blue-500'}`}
          style={{ 
            left: `calc(${node.x}% - 16px)`, 
            top: `calc(${node.y}% - 16px)` 
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: index * 0.15, type: "spring" }}
          whileHover={{ scale: 1.3 }}
          onHoverStart={() => setActiveNode(node.id)}
          onHoverEnd={() => setActiveNode(null)}
        >
          {node.type === 'complex' ? (
            <AlertCircle className="w-4 h-4 text-white" />
          ) : (
            <Brain className="w-4 h-4 text-white" />
          )}
        </motion.div>
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
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const particleOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.2, 0.5, 0.2])
  
  return (
    <div ref={sectionRef}>
      <Section padding="xl" background="transparent" className="relative overflow-hidden">
        {/* Premium Background Effects */}
        <motion.div 
          className="absolute inset-0 bg-gradient-mesh"
          style={{ y: backgroundY }}
        />
        <motion.div 
          className="absolute inset-0 bg-particles"
          style={{ opacity: particleOpacity }}
        />
        <div className="absolute inset-0 noise-overlay" />
        
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
            
            <div className="card-glass-blue max-w-lg mx-auto p-8">
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

        {/* Premium Decision Categories Grid */}
        <div className="grid lg:grid-cols-2 gap-6 mb-20">
          {[
            {
              icon: Settings,
              title: "Which technology works best for your process",
              description: "No more researching tools, comparing features, or worrying about compatibility. We choose the right technology stack for your specific needs.",
              gradient: "from-blue-500 to-indigo-600",
              bgClass: "card-aurora"
            },
            {
              icon: Shield,
              title: "How to handle exceptions and edge cases", 
              description: "We design robust systems that handle the unexpected. When edge cases arise, we solve them without disrupting your business.",
              gradient: "from-blue-600 to-blue-800",
              bgClass: "card-glass-blue"
            },
            {
              icon: TrendingUp,
              title: "When to scale up or optimize performance",
              description: "We monitor performance and proactively scale your systems. You'll never have to worry about capacity or speed issues.",
              gradient: "from-indigo-500 to-purple-600",
              bgClass: "card-aurora"
            },
            {
              icon: Network,
              title: "What to do when systems need updates",
              description: "Technology evolves constantly. We handle all updates, migrations, and improvements so your processes keep running smoothly.",
              gradient: "from-blue-700 to-indigo-700",
              bgClass: "card-glass-blue"
            }
          ].map((decision, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, rotateY: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
            >
              <div className={`${decision.bgClass} card-floating magnetic-hover relative group h-full`}>
                {/* Animated gradient overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-premium rounded-2xl opacity-10" />
                </div>
                
                <div className="relative z-10">
                  <div className="flex items-start gap-4 mb-6">
                    <motion.div 
                      className="icon-container-gradient group-hover:scale-110 transition-transform duration-300"
                      whileHover={{ rotate: 5 }}
                    >
                      <decision.icon className="w-6 h-6 icon-accent" />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="velox-text-h3 text-blue-900 mb-3 text-lg font-bold leading-tight">
                        {decision.title}
                      </h3>
                    </div>
                  </div>
                  
                  <p className="velox-text-body text-blue-800/90 leading-relaxed">
                    {decision.description}
                  </p>
                  
                  {/* Complexity reduction indicator */}
                  <motion.div 
                    className="mt-6 pt-4 border-t border-blue-200/50"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
                      <span className="text-gray-600">Complex Decision</span>
                      <ArrowRight className="w-3 h-3 text-gray-400 mx-1" />
                      <div className="w-2 h-2 rounded-full bg-blue-500" />
                      <span className="text-blue-700 font-medium">Automated</span>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Premium Key Message & CTA */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="card-elevated relative overflow-hidden max-w-4xl mx-auto">
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-premium opacity-10 animate-gradient-shift" />
            
            <div className="relative z-10">
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
              
              <p className="velox-text-lead text-gray-700 mb-8 max-w-3xl mx-auto">
                This clear separation lets you focus on strategy, growth, and customer relationships 
                while we handle all the technical complexity behind the scenes.
              </p>
              
              {/* Decision Relief Statistics */}
              <div className="grid md:grid-cols-4 gap-6 mb-8">
                {[
                  { value: "500+", label: "Technical Decisions Monthly", icon: Settings },
                  { value: "0", label: "Hours You Spend", icon: Gauge },
                  { value: "90%", label: "Reduced Decision Fatigue", icon: Brain },
                  { value: "24/7", label: "Automated Resolution", icon: Zap }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                      <stat.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="text-2xl font-bold text-blue-600 mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link 
                  href="/tools/business-audit"
                  className="cta-magnetic inline-flex items-center gap-2 group"
                >
                  <span>See What I Can Delegate</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
    </div>
  )
}
