"use client"

import React, { useState, useRef, useEffect } from "react"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { 
  Calculator, 
  TrendingDown, 
  AlertTriangle, 
  ArrowRight, 
  DollarSign,
  Clock,
  Target,
  TrendingUp,
  Zap,
  CheckCircle,
  BarChart3
} from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"

// Animated Counter Component
function AnimatedCounter({ end, duration = 2000, suffix = "", prefix = "" }: { 
  end: number; 
  duration?: number; 
  suffix?: string;
  prefix?: string;
}) {
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

  return <span ref={counterRef}>{prefix}{count}{suffix}</span>
}

export function ROICalculatorSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])
  const particleOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.1, 0.3, 0.1])
  
  return (
    <div ref={sectionRef}>
      <Section padding="xl" background="transparent" className="relative overflow-hidden">
        {/* Premium Background Effects */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-b from-blue-50/30 via-white to-indigo-50/20"
          style={{ y: backgroundY }}
        />
        <motion.div 
          className="absolute inset-0"
          style={{ opacity: particleOpacity }}
        >
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-72 h-72 bg-indigo-200/20 rounded-full blur-3xl animate-pulse" 
            style={{ animationDelay: '3s' }} 
          />
        </motion.div>
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: 'linear-gradient(#2563EB 1px, transparent 1px), linear-gradient(90deg, #2563EB 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        
        <Container className="relative z-10 max-w-7xl">
          {/* Section Header */}
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Premium Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 backdrop-blur-sm border border-blue-100/50 mb-6"
            >
              <Calculator className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-700">Economics Explained</span>
            </motion.div>
            
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent">
                How Service-as-Software Economics Work
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              <span className="font-bold">Investment scales with complexity.</span> Pricing aligned with your savings. 
              <span className="font-semibold text-gray-900"> Each solution custom-priced for guaranteed ROI.</span>
            </p>
          </motion.div>

          {/* Core Value Methodology - Enhanced Cards */}
          <div className="grid lg:grid-cols-2 gap-12 mb-24">
            {/* Cost Discovery Process - Left Card */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="group relative"
            >
              <div className="relative h-full rounded-3xl p-10 bg-white/95 backdrop-blur-xl border border-gray-100/50 shadow-[0_20px_40px_-12px_rgba(0,0,0,0.08)] group-hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.12)] transition-all duration-300">
                {/* Gradient Accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-t-3xl" />
                
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-50 to-orange-50 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <TrendingDown className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">We Analyze Your Hidden Costs</h3>
                </div>
                
                <div className="space-y-8 mb-10">
                  {[
                    {
                      step: "1",
                      title: "Operational inefficiency assessment",
                      desc: "Map current time, errors, and manual work",
                      delay: 0.1
                    },
                    {
                      step: "2", 
                      title: "Opportunity cost calculation",
                      desc: "What your team could focus on instead",
                      delay: 0.2
                    },
                    {
                      step: "3",
                      title: "Error and rework costs",
                      desc: "Hidden costs of manual processes", 
                      delay: 0.3
                    }
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: item.delay }}
                      className="flex items-start gap-4"
                    >
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center flex-shrink-0">
                        <span className="text-lg font-bold text-blue-600">{item.step}</span>
                      </div>
                      <div>
                        <p className="text-lg font-semibold text-gray-900 mb-1">{item.title}</p>
                        <p className="text-gray-600">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                <div className="pt-8 border-t border-gray-100 text-center">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <p className="text-xl font-semibold text-gray-900 mb-2">Free ROI Analysis Shows</p>
                    <p className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                      Your Specific Numbers
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Investment Philosophy - Right Card */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="group relative"
            >
              <div className="relative h-full rounded-3xl p-10 bg-gradient-to-br from-blue-50/80 via-white/90 to-indigo-50/80 backdrop-blur-xl border border-blue-100/50 shadow-[0_20px_40px_-12px_rgba(37,99,235,0.08)] group-hover:shadow-[0_30px_60px_-15px_rgba(37,99,235,0.15)] transition-all duration-300">
                {/* Gradient Accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-t-3xl" />
                
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-blue-500/25">
                    <Calculator className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">Investment Philosophy</h3>
                </div>
                
                {/* Core Principle Box */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="rounded-2xl p-8 mb-10 bg-gradient-to-br from-blue-100/80 to-indigo-100/60 backdrop-blur-sm border border-blue-200/50"
                >
                  <h4 className="text-2xl font-bold text-blue-900 mb-4">Our Pricing Principle:</h4>
                  <p className="text-xl text-blue-800 text-center font-semibold italic">
                    "Savings typically exceed investment within months"
                  </p>
                </motion.div>
                
                <div className="space-y-8 mb-10">
                  {[
                    {
                      title: "Investment scales with complexity",
                      desc: "More complex processes = higher value created",
                      icon: <BarChart3 className="w-5 h-5 text-blue-600" />,
                      delay: 0.3
                    },
                    {
                      title: "Pricing aligned with your savings",
                      desc: "We only succeed when you save money",
                      icon: <Target className="w-5 h-5 text-blue-600" />,
                      delay: 0.4
                    },
                    {
                      title: "Faster than any alternative",
                      desc: "Implementation speed varies by scope",
                      icon: <Zap className="w-5 h-5 text-blue-600" />,
                      delay: 0.5
                    }
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: item.delay }}
                      className="flex items-start gap-4"
                    >
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center flex-shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-lg font-semibold text-gray-900 mb-1">{item.title}</p>
                        <p className="text-gray-600">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                <div className="pt-8 border-t border-blue-200/50 text-center">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    <p className="text-xl font-semibold text-gray-900 mb-2">Timeline Philosophy:</p>
                    <p className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                      Paced to Your Needs
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* ROI Metrics Showcase */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-24"
          >
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { label: "Average ROI Timeline", value: 3, suffix: " months", icon: <Clock className="w-8 h-8" /> },
                { label: "Cost Reduction", value: 70, suffix: "%", icon: <TrendingDown className="w-8 h-8" /> },
                { label: "Implementation Speed", value: 10, suffix: "x faster", icon: <Zap className="w-8 h-8" /> },
                { label: "Success Rate", value: 98, suffix: "%", icon: <CheckCircle className="w-8 h-8" /> }
              ].map((metric, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 + idx * 0.1 }}
                  className="text-center p-8 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-100/50 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {React.cloneElement(metric.icon, { className: "w-8 h-8 text-blue-600" })}
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">
                    <AnimatedCounter end={metric.value} suffix={metric.suffix} />
                  </div>
                  <p className="text-gray-600 font-medium">{metric.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Why Timing Matters - Dark Premium Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative mb-24"
          >
            <div className="relative rounded-3xl p-12 md:p-16 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white overflow-hidden">
              {/* Animated Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute -top-20 -left-20 w-60 h-60 bg-blue-400 rounded-full blur-3xl animate-pulse" />
                <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-indigo-400 rounded-full blur-3xl animate-pulse" 
                  style={{ animationDelay: '2s' }} 
                />
              </div>
              
              <div className="relative z-10">
                <h3 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
                  Why Timing Matters
                </h3>
                
                <div className="grid md:grid-cols-3 gap-12 mb-12">
                  {[
                    {
                      step: "1",
                      title: "Every Month You Wait",
                      desc: "Inefficiencies compound while competitors gain ground",
                      gradient: "from-red-500 to-orange-500"
                    },
                    {
                      step: "2",
                      title: "Early Adopters Win", 
                      desc: "First-mover advantage in operational efficiency",
                      gradient: "from-blue-500 to-indigo-500"
                    },
                    {
                      step: "✓",
                      title: "Start Smart",
                      desc: "Free analysis shows your exact opportunity",
                      gradient: "from-emerald-500 to-green-500"
                    }
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.5 + idx * 0.1 }}
                      className="text-center group"
                    >
                      <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform`}>
                        <span className="text-3xl font-bold text-white">{item.step}</span>
                      </div>
                      <h4 className="text-2xl font-bold text-white mb-4">{item.title}</h4>
                      <p className="text-gray-300 text-lg leading-relaxed">{item.desc}</p>
                    </motion.div>
                  ))}
                </div>
                
                <div className="text-center">
                  <motion.p 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="text-2xl text-gray-300 mb-4"
                  >
                    The question isn't whether to automate - it's <span className="font-bold text-white">when</span> and <span className="font-bold text-white">how</span>.
                  </motion.p>
                  <motion.p 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 1 }}
                    className="text-2xl text-blue-300 font-semibold"
                  >
                    Let's calculate your specific opportunity cost.
                  </motion.p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Competitive Advantage Warning */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center"
          >
            <div className="relative rounded-3xl p-12 bg-gradient-to-br from-orange-50/80 via-white/90 to-red-50/80 backdrop-blur-xl border border-orange-100/50 overflow-hidden">
              {/* Warning Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-10 left-10 w-40 h-40 bg-orange-400 rounded-full blur-2xl" />
                <div className="absolute bottom-10 right-10 w-40 h-40 bg-red-400 rounded-full blur-2xl" />
              </div>
              
              <div className="relative z-10">
                <div className="flex justify-center mb-8">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center shadow-xl">
                    <AlertTriangle className="w-10 h-10 text-white" />
                  </div>
                </div>
                
                <div className="max-w-4xl mx-auto">
                  <p className="text-2xl font-bold text-gray-900 mb-6 leading-relaxed">
                    <span className="text-blue-600">MIT research</span> shows early Service-as-Software adopters gain 
                    <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent font-black"> 23% market share</span> from laggards within 24 months.
                  </p>
                  <p className="text-xl text-gray-700 leading-relaxed">
                    Every month you wait, your competitors get <span className="font-bold text-gray-900">stronger</span> while your costs <span className="font-bold text-gray-900">compound</span>.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </Container>
      </Section>
    </div>
  )
}