"use client"

import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Check, X, ArrowRight, Zap, TrendingUp, Shield } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import { useRef, useState, useEffect } from "react"

// Animated Counter Component
function AnimatedCounter({ end, duration = 2000 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const counterRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (counterRef.current) {
      observer.observe(counterRef.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  useEffect(() => {
    if (!isVisible) return

    let startTime: number
    let animationFrame: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      
      setCount(Math.floor(progress * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration, isVisible])

  return <span ref={counterRef}>{count}</span>
}

export function ServiceAsSoftwareRevolution() {
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
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h2 
            className="velox-text-h1-premium mb-8"
            data-text="The Service-as-Software Revolution"
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            The Service-as-Software Revolution
          </motion.h2>
          <motion.p 
            className="velox-text-lead max-w-4xl mx-auto text-blue-800"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            A fundamental shift backed by MIT and Harvard Business Review research: 
            <span className="font-semibold"> 10x faster development, 90% cost reduction</span>
          </motion.p>
        </motion.div>

        {/* Enhanced Three-Column Comparison with Premium Effects */}
        <div className="grid lg:grid-cols-12 gap-8 items-center mb-20">
          {/* Traditional + SaaS (Old Ways) - Subdued */}
          <div className="lg:col-span-5 space-y-6">
            <motion.div 
              className="card-challenge magnetic-hover relative group"
              initial={{ opacity: 0, x: -60, rotateY: -10 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl" />
              </div>
              <div className="relative z-10">
                <div className="icon-container-glass mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <X className="w-6 h-6 icon-primary" />
                </div>
                <h3 className="velox-text-h3 text-center mb-4 text-gray-700">Traditional Approach</h3>
                <div className="space-y-3 velox-text-body text-center text-gray-600">
                  <motion.p whileHover={{ x: 2 }} transition={{ type: "spring" }}>• You buy tools</motion.p>
                  <motion.p whileHover={{ x: 2 }} transition={{ type: "spring" }}>• You operate them</motion.p>
                  <motion.p whileHover={{ x: 2 }} transition={{ type: "spring" }}>• You handle complexity</motion.p>
                </div>
                <div className="mt-4 text-center">
                  <span className="text-sm text-gray-500">Average efficiency: 20-30%</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="card-challenge magnetic-hover relative group"
              initial={{ opacity: 0, x: -60, rotateY: -10 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-50 to-yellow-50 rounded-2xl" />
              </div>
              <div className="relative z-10">
                <div className="icon-container-glass mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <X className="w-6 h-6 icon-primary" />
                </div>
                <h3 className="velox-text-h3 text-center mb-4 text-gray-700">SaaS Model</h3>
                <div className="space-y-3 velox-text-body text-center text-gray-600">
                  <motion.p whileHover={{ x: 2 }} transition={{ type: "spring" }}>• You rent tools</motion.p>
                  <motion.p whileHover={{ x: 2 }} transition={{ type: "spring" }}>• You still operate</motion.p>
                  <motion.p whileHover={{ x: 2 }} transition={{ type: "spring" }}>• You still handle complexity</motion.p>
                </div>
                <div className="mt-4 text-center">
                  <span className="text-sm text-gray-500">Average efficiency: 40-50%</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Enhanced Transformation Arrow with Particle Flow */}
          <motion.div 
            className="lg:col-span-2 flex justify-center relative"
            initial={{ opacity: 0, scale: 0.3 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3, type: "spring" }}
          >
            {/* Particle Flow Effect */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="particle-flow-container">
                <motion.div 
                  className="particle-flow"
                  animate={{ 
                    x: ["-100%", "100%"],
                    opacity: [0, 1, 1, 0]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
              </div>
            </div>
            
            {/* Premium Transformation Arrow */}
            <motion.div 
              className="transformation-arrow-premium relative z-10"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <ArrowRight className="h-8 w-8 text-white" />
              {/* Pulse Rings */}
              <div className="absolute inset-0 rounded-full">
                <div className="pulse-ring pulse-ring-1" />
                <div className="pulse-ring pulse-ring-2" />
                <div className="pulse-ring pulse-ring-3" />
              </div>
            </motion.div>
          </motion.div>

          {/* Service-as-Software (New Way) - Premium Elevated */}
          <motion.div 
            className="lg:col-span-5"
            initial={{ opacity: 0, x: 60, rotateY: 10 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <motion.div 
              className="card-solution card-aurora card-floating relative group"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 32px 64px -16px rgba(37, 99, 235, 0.35)"
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Animated gradient background */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-aurora rounded-2xl animate-gradient-shift" />
              </div>
              
              <div className="relative z-10">
                <div className="icon-container-gradient mb-6 mx-auto group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <Check className="w-8 h-8 icon-accent" />
                </div>
                <h3 className="velox-text-h3 text-blue-800 text-center mb-4 font-bold">
                  Service-as-Software
                </h3>
                <div className="space-y-3 velox-text-body text-blue-800 text-center font-medium">
                  <motion.p 
                    className="flex items-center justify-center gap-2"
                    whileHover={{ x: 4 }} 
                    transition={{ type: "spring" }}
                  >
                    <Zap className="w-4 h-4 text-blue-600" />
                    You delegate process
                  </motion.p>
                  <motion.p 
                    className="flex items-center justify-center gap-2"
                    whileHover={{ x: 4 }} 
                    transition={{ type: "spring" }}
                  >
                    <Shield className="w-4 h-4 text-blue-600" />
                    We deliver guaranteed results
                  </motion.p>
                  <motion.p 
                    className="flex items-center justify-center gap-2"
                    whileHover={{ x: 4 }} 
                    transition={{ type: "spring" }}
                  >
                    <TrendingUp className="w-4 h-4 text-blue-600" />
                    We handle complexity for you
                  </motion.p>
                </div>
                <div className="mt-6 text-center">
                  <motion.div 
                    className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                  >
                    <span className="text-sm font-semibold text-blue-800">
                      Efficiency: <AnimatedCounter end={95} />%
                    </span>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Industry Validation Badges */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="validation-badge">
              <span className="text-sm text-gray-600">Validated by</span>
              <div className="flex items-center gap-4 mt-2">
                <div className="px-4 py-2 bg-white/80 backdrop-blur rounded-lg border border-gray-200">
                  <span className="font-semibold text-gray-700">MIT Technology Review</span>
                </div>
                <div className="px-4 py-2 bg-white/80 backdrop-blur rounded-lg border border-gray-200">
                  <span className="font-semibold text-gray-700">Harvard Business Review</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Key Message with Premium Glass Design */}
        <motion.div 
          className="card-glass-blue text-center relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Animated background gradient */}
          <div className="absolute inset-0 bg-gradient-premium opacity-10 animate-gradient-shift" />
          
          <div className="relative z-10">
            <motion.h3 
              className="velox-text-h2 text-blue-900 mb-4"
              initial={{ scale: 0.95 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              You own the strategy. We own the execution.
            </motion.h3>
            <p className="velox-text-lead text-blue-800 mb-8">
              The perfect partnership for business growth
            </p>
            
            {/* ROI Preview Mini Widget */}
            <div className="grid md:grid-cols-3 gap-6 mb-8 max-w-2xl mx-auto">
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring" }}
              >
                <div className="text-3xl font-bold text-blue-600 mb-1">
                  <AnimatedCounter end={10} />x
                </div>
                <p className="text-sm text-gray-600">Faster Development</p>
              </motion.div>
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring" }}
              >
                <div className="text-3xl font-bold text-blue-600 mb-1">
                  <AnimatedCounter end={90} />%
                </div>
                <p className="text-sm text-gray-600">Cost Reduction</p>
              </motion.div>
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring" }}
              >
                <div className="text-3xl font-bold text-blue-600 mb-1">
                  <AnimatedCounter end={24} />/7
                </div>
                <p className="text-sm text-gray-600">Operations</p>
              </motion.div>
            </div>
            
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link 
                href="/our-approach"
                className="cta-magnetic inline-flex items-center gap-2 group"
              >
                <span>See How This Works</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </Section>
    </div>
  )
}
