'use client'

import React, { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Container } from '@/components/layout/container'
import { 
  TrendingUp, 
  Clock, 
  Target, 
  Shield, 
  CheckCircle,
  ArrowUpRight,
  Zap,
  Award,
  Activity,
  BarChart3
} from 'lucide-react'
import { cn } from '@/lib/utils'

interface CaseStudyCardProps {
  industry: string
  company: string
  quote: string
  metrics: {
    label: string
    value: string
    icon: React.ReactNode
    trend?: string
  }[]
  highlight: string
  delay?: number
  gradient: string
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ 
  industry, 
  company, 
  quote, 
  metrics, 
  highlight,
  delay = 0,
  gradient
}) => {
  const cardRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left - rect.width / 2) / rect.width
    const y = (e.clientY - rect.top - rect.height / 2) / rect.height
    setMousePosition({ x, y })
  }
  
  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 })
  }
  
  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative h-full"
      style={{
        transform: `perspective(1000px) rotateX(${mousePosition.y * -5}deg) rotateY(${mousePosition.x * 5}deg)`,
        transition: 'transform 0.2s ease-out',
      }}
    >
      {/* Floating Card with Premium Effects */}
      <div className={cn(
        "relative h-full rounded-2xl p-8",
        "bg-white/95 backdrop-blur-xl",
        "border border-blue-100/50",
        "shadow-[0_20px_40px_-12px_rgba(37,99,235,0.08)]",
        "transition-all duration-300",
        "group-hover:shadow-[0_30px_60px_-15px_rgba(37,99,235,0.15)]",
        "group-hover:border-blue-200/60",
        "overflow-hidden"
      )}>
        {/* Gradient Accent Line */}
        <div 
          className="absolute top-0 left-0 right-0 h-1"
          style={{ background: gradient }}
        />
        
        {/* Background Gradient on Hover */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x * 100 + 50}% ${mousePosition.y * 100 + 50}%, ${gradient.match(/rgba\([^)]+\)/g)?.[0] || 'rgba(37, 99, 235, 0.03)'}, transparent 40%)`,
          }}
        />
        
        {/* Content */}
        <div className="relative z-10">
          {/* Industry Badge */}
          <div className="flex items-center justify-between mb-6">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100/50">
              <Activity className="w-3 h-3 text-blue-600" />
              <span className="text-xs font-semibold text-blue-700 uppercase tracking-wider">
                {industry}
              </span>
            </span>
            <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
          </div>
          
          {/* Company */}
          <p className="text-sm font-medium text-gray-500 mb-3">{company}</p>
          
          {/* Quote */}
          <blockquote className="relative mb-8">
            <div className="absolute -top-2 -left-2 text-4xl text-blue-100 font-serif">"</div>
            <p className="text-lg font-medium text-gray-900 relative z-10 italic">
              {quote}
            </p>
          </blockquote>
          
          {/* Metrics */}
          <div className="space-y-4 mb-8">
            {metrics.map((metric, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: delay + 0.2 + idx * 0.1 }}
                className="flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {React.cloneElement(metric.icon as React.ReactElement, {
                    className: "w-5 h-5 text-blue-600"
                  })}
                </div>
                <div className="flex-1">
                  <span className="text-sm text-gray-600">{metric.label}:</span>
                  <span className="ml-2 font-semibold text-gray-900">{metric.value}</span>
                  {metric.trend && (
                    <span className="ml-2 text-xs font-medium text-emerald-600">
                      {metric.trend}
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Highlight */}
          <div className="pt-6 border-t border-gray-100">
            <AnimatedNumber value={highlight} />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

const AnimatedNumber: React.FC<{ value: string }> = ({ value }) => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })
  const [displayValue, setDisplayValue] = useState('0')
  
  useEffect(() => {
    if (!isInView) return
    
    const match = value.match(/(\d+)(.*)/)
    if (!match) {
      setDisplayValue(value)
      return
    }
    
    const [, number, suffix] = match
    const target = parseInt(number)
    const duration = 2000
    const steps = 60
    const increment = target / steps
    let current = 0
    
    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        current = target
        clearInterval(timer)
      }
      setDisplayValue(Math.floor(current) + suffix)
    }, duration / steps)
    
    return () => clearInterval(timer)
  }, [isInView, value])
  
  return (
    <div ref={ref} className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
      {displayValue}
    </div>
  )
}

export function EarlyAdoptersSection() {
  const caseStudies = [
    {
      industry: "Manufacturing",
      company: "Global Manufacturing Leader",
      quote: "We transformed our entire documentation process in 8 weeks, not 8 months.",
      metrics: [
        { label: "Time saved", value: "22 hours/week", icon: <Clock />, trend: "+40%" },
        { label: "ROI timeline", value: "3 months", icon: <TrendingUp /> },
        { label: "Process accuracy", value: "99.8%", icon: <Target />, trend: "+15%" }
      ],
      highlight: "85% cost reduction",
      gradient: "linear-gradient(135deg, rgba(37, 99, 235, 0.15) 0%, rgba(99, 102, 241, 0.1) 100%)"
    },
    {
      industry: "Professional Services",
      company: "Leading Consultancy",
      quote: "AI-powered delegation freed our partners to focus on client strategy.",
      metrics: [
        { label: "Partner time freed", value: "15 hrs/week", icon: <Clock /> },
        { label: "Implementation", value: "6 weeks", icon: <Zap /> },
        { label: "Client satisfaction", value: "94%", icon: <Award />, trend: "+18%" }
      ],
      highlight: "3x faster delivery",
      gradient: "linear-gradient(135deg, rgba(99, 102, 241, 0.15) 0%, rgba(79, 70, 229, 0.1) 100%)"
    },
    {
      industry: "Technology",
      company: "SaaS Unicorn",
      quote: "Service-as-Software scaled with us from 50 to 500 employees seamlessly.",
      metrics: [
        { label: "Operational cost", value: "60% lower", icon: <BarChart3 /> },
        { label: "Scale achieved", value: "10x growth", icon: <TrendingUp /> },
        { label: "Process automation", value: "95%", icon: <Activity />, trend: "+50%" }
      ],
      highlight: "Zero new hires needed",
      gradient: "linear-gradient(135deg, rgba(79, 70, 229, 0.15) 0%, rgba(37, 99, 235, 0.1) 100%)"
    }
  ]
  
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Premium Animated Background */}
      <div className="absolute inset-0">
        {/* Base Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/20 to-white" />
        
        {/* Animated Gradient Mesh */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-200/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-300/10 rounded-full blur-3xl" />
        </div>
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: 'linear-gradient(#2563EB 1px, transparent 1px), linear-gradient(90deg, #2563EB 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
      </div>
      
      <Container className="relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          {/* Innovation Badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100/50 mb-6"
          >
            <Zap className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-700">The Innovation Window</span>
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent">
              Early Adopters Are Already Winning
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            The innovation window is closing. While others debate, 
            <span className="font-semibold text-gray-900"> leaders are transforming their operations</span> with AI-powered delegation.
          </p>
          
          {/* Adoption Curve Visualization */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 max-w-2xl mx-auto"
          >
            <div className="relative h-24 bg-gradient-to-r from-gray-100 via-blue-100 to-blue-200 rounded-full overflow-hidden">
              <motion.div 
                className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"
                initial={{ width: '0%' }}
                whileInView={{ width: '35%' }}
                viewport={{ once: true }}
                transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
              >
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-lg" />
              </motion.div>
              <div className="absolute inset-0 flex items-center justify-between px-8 text-xs font-medium">
                <span className="text-white relative z-10">Early Adopters (You)</span>
                <span className="text-gray-600">Early Majority</span>
                <span className="text-gray-500">Late Majority</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Case Studies Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-24">
          {caseStudies.map((study, index) => (
            <CaseStudyCard
              key={index}
              {...study}
              delay={index * 0.15}
            />
          ))}
        </div>
        
        {/* Trust Builder Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative"
        >
          {/* Aurora Card Background */}
          <div className={cn(
            "relative rounded-3xl p-12",
            "bg-gradient-to-br from-white/80 via-blue-50/40 to-indigo-50/30",
            "border border-blue-100/50",
            "shadow-[0_20px_60px_-15px_rgba(37,99,235,0.15)]",
            "overflow-hidden"
          )}>
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-30">
              <div className="absolute -top-20 -left-20 w-60 h-60 bg-blue-200/50 rounded-full blur-3xl" />
              <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-indigo-200/50 rounded-full blur-3xl" />
            </div>
            
            {/* Content */}
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/25">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">
                  Why We're Different: The Alignment Test
                </h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <motion.div className="space-y-6">
                  {[
                    "We analyze ROI before starting (free)",
                    "We've rejected 23% of opportunities where math didn't work"
                  ].map((text, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.8 + idx * 0.1 }}
                      className="flex items-start gap-4 group cursor-pointer"
                    >
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-50 to-emerald-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <CheckCircle className="w-5 h-5 text-emerald-600" />
                      </div>
                      <p className="text-gray-700 group-hover:text-gray-900 transition-colors">
                        <span className="font-semibold">{text.split(' (')[0]}</span>
                        {text.includes('(') && <span className="text-gray-600"> ({text.split(' (')[1]}</span>}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>
                
                <motion.div className="space-y-6">
                  {[
                    "We only succeed when you save money long-term",
                    "No lock-in contracts - prove value monthly"
                  ].map((text, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 1 + idx * 0.1 }}
                      className="flex items-start gap-4 group cursor-pointer"
                    >
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-50 to-emerald-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <CheckCircle className="w-5 h-5 text-emerald-600" />
                      </div>
                      <p className="text-gray-700 group-hover:text-gray-900 transition-colors">
                        <span className="font-semibold">{text}</span>
                      </p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
              
              {/* Partnership Badge */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="mt-8 inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg shadow-blue-500/25"
              >
                <Award className="w-5 h-5" />
                <span className="font-semibold">True Partnership Model</span>
              </motion.div>
            </div>
          </div>
        </motion.div>
        
        {/* Industry Validation */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <blockquote className="relative max-w-4xl mx-auto">
            {/* Glassmorphic Container */}
            <div className={cn(
              "relative rounded-2xl p-10",
              "bg-gradient-to-br from-white/70 to-blue-50/50",
                "border border-blue-100/50",
              "shadow-[0_20px_40px_-12px_rgba(37,99,235,0.1)]"
            )}>
              {/* Floating Quote Marks */}
              <div className="absolute -top-4 -left-4 text-6xl text-blue-200 font-serif">"</div>
              <div className="absolute -bottom-4 -right-4 text-6xl text-blue-200 font-serif rotate-180">"</div>
              
              <p className="text-2xl font-medium text-gray-800 italic relative z-10">
                By 2025, AI-powered automation will handle 50% of repetitive tasks. 
                The winners will be companies that implement without complexity.
              </p>
              
              <cite className="block mt-6 text-lg font-semibold text-gray-600">
                — Forrester Research
              </cite>
            </div>
          </blockquote>
        </motion.div>
      </Container>
    </section>
  )
}