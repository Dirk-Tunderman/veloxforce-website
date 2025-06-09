"use client"

import React, { useRef, useState, useEffect } from "react"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Calculator, Download, ArrowRight, Clock, CheckCircle, Zap, Shield, Award } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"

// Animated Counter Component
function AnimatedCounter({ end, duration = 2000, suffix = "" }: { 
  end: number; 
  duration?: number; 
  suffix?: string;
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

  return <span ref={counterRef}>{count}{suffix}</span>
}

export function PathSelectionSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"])
  const particleOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.2, 0.4, 0.2])
  
  return (
    <div ref={sectionRef}>
      <Section padding="xl" background="transparent" className="relative overflow-hidden">
        {/* Premium Background Effects */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/20 to-indigo-50/30"
          style={{ y: backgroundY }}
        />
        
        <motion.div 
          className="absolute inset-0"
          style={{ opacity: particleOpacity }}
        >
          <div className="absolute top-32 left-32 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-32 right-32 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl animate-pulse" 
            style={{ animationDelay: '2s' }} 
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-blue-300/15 rounded-full blur-3xl animate-pulse" 
            style={{ animationDelay: '4s' }} 
          />
        </motion.div>
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.01]"
          style={{
            backgroundImage: 'linear-gradient(#2563EB 1px, transparent 1px), linear-gradient(90deg, #2563EB 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
        
        <Container className="relative z-10 max-w-6xl">
          {/* Section Header */}
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {/* Premium Journey Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-50/80 to-indigo-50/80 backdrop-blur-xl border border-blue-100/50 mb-8"
            >
              <Zap className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-semibold text-blue-700">Choose Your Journey</span>
            </motion.div>
            
            <motion.h2 
              className="text-5xl md:text-6xl font-bold mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent">
                Ready to Stop Managing and Start Delegating?
              </span>
            </motion.h2>
            
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Two pathways to Service-as-Software transformation. Choose the journey that matches your readiness.
            </motion.p>
          </motion.div>

          {/* Enhanced Two Path Options */}
          <div className="grid lg:grid-cols-2 gap-12 mb-24">
            {/* Primary Path - ROI Analysis */}
            <motion.div 
              initial={{ opacity: 0, x: -60, rotateY: -5 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="group relative"
            >
              <div className="relative h-full rounded-3xl p-10 bg-gradient-to-br from-blue-50/80 via-white/95 to-indigo-50/80 backdrop-blur-xl border border-blue-100/50 shadow-[0_25px_50px_-12px_rgba(37,99,235,0.15)] group-hover:shadow-[0_35px_70px_-15px_rgba(37,99,235,0.25)] transition-all duration-500 overflow-hidden">
                
                {/* Recommended Badge with Glow */}
                <motion.div 
                  className="absolute -top-4 left-1/2 -translate-x-1/2 z-20"
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <div className="relative">
                    <div className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-sm shadow-lg shadow-blue-500/30">
                      RECOMMENDED
                    </div>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 blur-md opacity-50 animate-pulse" />
                  </div>
                </motion.div>
                
                {/* Aurora Background Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute inset-0 bg-gradient-aurora rounded-3xl" />
                </div>
                
                <div className="relative z-10 text-center pt-6">
                  {/* Enhanced Icon */}
                  <motion.div 
                    className="w-24 h-24 mx-auto mb-8 rounded-3xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-xl shadow-blue-500/30 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500"
                    whileHover={{ scale: 1.1, rotate: 3 }}
                  >
                    <Calculator className="w-12 h-12 text-white" />
                  </motion.div>
                  
                  <motion.h3 
                    className="text-2xl font-bold text-gray-900 mb-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 1 }}
                  >
                    Primary Path:
                  </motion.h3>
                  
                  <motion.h4 
                    className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                  >
                    Calculate My Delegation Savings
                  </motion.h4>

                  {/* Enhanced CTA Button */}
                  <motion.div 
                    className="mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 1.4 }}
                  >
                    <Link
                      href="/tools/business-audit"
                      className="group/btn relative inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-lg shadow-xl shadow-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105 overflow-hidden"
                    >
                      {/* Shine Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />
                      
                      <span className="relative z-10">Calculate My Savings</span>
                      <ArrowRight className="w-6 h-6 relative z-10 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </motion.div>

                  <motion.p 
                    className="text-lg text-gray-700 mb-8 font-medium"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 1.6 }}
                  >
                    For businesses ready to see specific ROI numbers
                  </motion.p>

                  {/* Enhanced Feature List */}
                  <div className="space-y-6 text-left">
                    {[
                      { text: "8-minute comprehensive assessment", delay: 1.8 },
                      { text: "See exact savings for YOUR volumes", delay: 2.0 },
                      { text: "No sales pressure, pure insights", delay: 2.2 }
                    ].map((item, idx) => (
                      <motion.div 
                        key={idx}
                        className="flex items-center gap-4"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: item.delay }}
                      >
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-50 to-emerald-100 flex items-center justify-center">
                          <CheckCircle className="w-6 h-6 text-emerald-600" />
                        </div>
                        <span className="text-gray-700 font-medium">{item.text}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Secondary Path - Free Audit */}
            <motion.div 
              initial={{ opacity: 0, x: 60, rotateY: 5 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="group relative"
            >
              <div className="relative h-full rounded-3xl p-10 bg-gradient-to-br from-white/90 via-gray-50/50 to-white/90 backdrop-blur-xl border border-gray-200/50 shadow-[0_20px_40px_-12px_rgba(0,0,0,0.08)] group-hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.12)] transition-all duration-500">
                
                {/* Glass Effect Enhancement */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-indigo-50/20 rounded-3xl" />
                </div>
                
                <div className="relative z-10 text-center">
                  {/* Icon Container */}
                  <motion.div 
                    className="w-24 h-24 mx-auto mb-8 rounded-3xl bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center group-hover:scale-105 transition-all duration-500"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Download className="w-12 h-12 text-gray-600" />
                  </motion.div>
                  
                  <motion.h3 
                    className="text-2xl font-bold text-gray-900 mb-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 1 }}
                  >
                    Alternative Path:
                  </motion.h3>
                  
                  <motion.h4 
                    className="text-3xl font-bold text-gray-700 mb-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                  >
                    Get Free Process Audit
                  </motion.h4>

                  {/* Secondary CTA */}
                  <motion.div 
                    className="mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 1.4 }}
                  >
                    <Link
                      href="/tools/business-audit"
                      className="group/btn relative inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl bg-white/80 backdrop-blur-sm border-2 border-blue-600 text-blue-600 font-bold text-lg hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-105"
                    >
                      <span>Get Free Audit</span>
                      <ArrowRight className="w-6 h-6 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </motion.div>

                  <motion.p 
                    className="text-lg text-gray-600 mb-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 1.6 }}
                  >
                    Not sure yet? Get valuable insights with no pressure
                  </motion.p>

                  {/* Feature List */}
                  <div className="space-y-6 text-left">
                    {[
                      { text: "Instant clarity on timing", delay: 1.8 },
                      { text: "Real company examples", delay: 2.0 },
                      { text: "Self-assessment checklist", delay: 2.2 }
                    ].map((item, idx) => (
                      <motion.div 
                        key={idx}
                        className="flex items-center gap-4"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: item.delay }}
                      >
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
                          <CheckCircle className="w-6 h-6 text-blue-600" />
                        </div>
                        <span className="text-gray-700 font-medium">{item.text}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Enhanced Urgency Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative mb-24"
          >
            <div className="relative rounded-3xl p-12 bg-gradient-to-br from-orange-50/80 via-white/90 to-red-50/80 backdrop-blur-xl border border-orange-100/50 overflow-hidden">
              {/* Pulsing Border Animation */}
              <div className="absolute inset-0 rounded-3xl">
                <div className="absolute inset-0 rounded-3xl border-2 border-orange-300/30 animate-pulse" />
              </div>
              
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-10 left-10 w-32 h-32 bg-orange-400 rounded-full blur-2xl" />
                <div className="absolute bottom-10 right-10 w-32 h-32 bg-red-400 rounded-full blur-2xl" />
              </div>
              
              <div className="relative z-10 flex items-center gap-6">
                <motion.div 
                  className="w-20 h-20 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center shadow-xl"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Clock className="w-10 h-10 text-white" />
                </motion.div>
                
                <div className="flex-1 text-center">
                  <p className="text-2xl font-bold text-gray-900 mb-3">
                    Every week you wait costs approximately 
                    <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent"> €1,375</span> in lost efficiency.
                  </p>
                  <p className="text-lg text-gray-700">
                    But rushed decisions are worse. Choose the path that matches your readiness - just choose soon.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Enhanced Trust Signals */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[
                { 
                  value: "150+", 
                  label: "Analyses Completed", 
                  icon: <Calculator className="w-8 h-8" />,
                  delay: 0.8 
                },
                { 
                  value: "98%", 
                  label: "Client Satisfaction", 
                  icon: <Award className="w-8 h-8" />,
                  delay: 0.9 
                },
                { 
                  value: "ISO 27001", 
                  label: "Security Standard", 
                  icon: <Shield className="w-8 h-8" />,
                  delay: 1.0 
                },
                { 
                  value: "Service-as-Software", 
                  label: "Model Guarantee", 
                  icon: <Zap className="w-8 h-8" />,
                  delay: 1.1 
                }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: item.delay }}
                  className="text-center p-8 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-100/50 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {React.cloneElement(item.icon, { className: "w-8 h-8 text-blue-600" })}
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-2">
                    {item.value.includes('%') || item.value.includes('+') ? (
                      <AnimatedCounter 
                        end={parseInt(item.value.replace(/[^0-9]/g, ''))} 
                        suffix={item.value.replace(/[0-9]/g, '')} 
                      />
                    ) : (
                      item.value
                    )}
                  </div>
                  <p className="text-gray-600 font-medium">{item.label}</p>
                </motion.div>
              ))}
            </div>
            
            {/* Disclaimer */}
            <motion.div 
              className="pt-8 border-t border-gray-200 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <p className="text-gray-500 max-w-3xl mx-auto leading-relaxed">
                Service-as-Software is an emerging model. Metrics reflect current implementations and industry standards. 
                Security framework follows ISO 27001 principles. Results vary by process complexity and business context.
              </p>
            </motion.div>
          </motion.div>
        </Container>
      </Section>
    </div>
  )
}