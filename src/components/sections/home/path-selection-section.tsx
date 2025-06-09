"use client"

import React, { useRef, useState, useEffect } from "react"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Calculator, Download, ArrowRight, Clock, CheckCircle, Zap, Shield, Award } from "lucide-react"
import { cn } from "@/lib/utils"
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
  const [headerVisible, setHeaderVisible] = useState(false)
  const [cardsVisible, setCardsVisible] = useState(false)
  const [urgencyVisible, setUrgencyVisible] = useState(false)
  const [trustVisible, setTrustVisible] = useState(false)
  
  const headerRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)
  const urgencyRef = useRef<HTMLDivElement>(null)
  const trustRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observers = [
      { ref: headerRef, setter: setHeaderVisible },
      { ref: cardsRef, setter: setCardsVisible },
      { ref: urgencyRef, setter: setUrgencyVisible },
      { ref: trustRef, setter: setTrustVisible }
    ]

    const observerInstances = observers.map(({ ref, setter }) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setter(true)
            observer.disconnect()
          }
        },
        { threshold: 0.1, rootMargin: '50px' }
      )

      if (ref.current) {
        observer.observe(ref.current)
      }

      return observer
    })

    return () => {
      observerInstances.forEach(observer => observer.disconnect())
    }
  }, [])
  
  return (
    <Section padding="xl" background="transparent" className="relative overflow-hidden">
      {/* Performance-Optimized Background */}
      <div className="absolute inset-0 bg-gradient-simple" />
      
      {/* Static Grid Pattern */}
      <div className="absolute inset-0 bg-grid opacity-10" />
      
      <Container className="relative z-10 max-w-6xl">
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={cn(
            "text-center mb-20 opacity-0",
            headerVisible && "animate-fadeIn"
          )}
        >
          {/* Design System Badge */}
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-gray-200 shadow-sm mb-8">
            <Zap className="w-5 h-5 icon-accent" />
            <span className="velox-text-caption font-semibold text-blue-700">Choose Your Journey</span>
          </div>
          
          <h2 className="velox-text-h2 mb-8">
            Ready to Stop Managing and Start Delegating?
          </h2>
          
          <p className="velox-text-lead max-w-3xl mx-auto">
            Two pathways to Service-as-Software transformation. Choose the journey that matches your readiness.
          </p>
        </div>

        {/* Enhanced Two Path Options */}
        <div 
          ref={cardsRef}
          className={cn(
            "grid lg:grid-cols-2 gap-12 mb-24 opacity-0",
            cardsVisible && "animate-fadeIn"
          )}
        >
          {/* Primary Path - ROI Analysis */}
          <div className="group relative">
            <div className="card-premium relative h-full overflow-hidden">
              
              {/* Recommended Badge */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                <div className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold text-sm shadow-lg">
                  RECOMMENDED
                </div>
              </div>
              
              <div className="relative z-10 text-center pt-6">
                {/* Enhanced Icon */}
                <div className="icon-container-gradient w-24 h-24 mx-auto mb-8 bg-gradient-to-br from-blue-500 to-indigo-600">
                  <Calculator className="w-12 h-12 text-white" />
                </div>
                
                <h3 className="velox-text-h3 mb-2">
                  Primary Path:
                </h3>
                
                <h4 className="text-3xl font-bold text-gradient mb-8">
                  Calculate My Delegation Savings
                </h4>

                {/* Design System CTA Button */}
                <div className="mb-8">
                  <Link
                    href="/tools/business-audit"
                    className="relative bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-lg font-semibold px-12 py-6 h-auto rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 overflow-hidden group inline-flex items-center gap-3"
                  >
                    <span className="relative z-10">Calculate My Savings</span>
                    <ArrowRight className="w-6 h-6 relative z-10 group-hover:translate-x-1 transition-transform" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  </Link>
                </div>

                <p className="velox-text-body font-medium mb-8">
                  For businesses ready to see specific ROI numbers
                </p>

                {/* Feature List */}
                <div className="space-y-6 text-left">
                  {[
                    "8-minute comprehensive assessment",
                    "See exact savings for YOUR volumes",
                    "No sales pressure, pure insights"
                  ].map((text, idx) => (
                    <div 
                      key={idx}
                      className="flex items-center gap-4"
                    >
                      <div className="icon-container">
                        <CheckCircle className="w-6 h-6 icon-success" />
                      </div>
                      <span className="velox-text-body font-medium">{text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Secondary Path - Free Audit */}
          <div className="group relative">
            <div className="card-elevated relative h-full">
              
              <div className="relative z-10 text-center">
                {/* Icon Container */}
                <div className="icon-container w-24 h-24 mx-auto mb-8 bg-gradient-to-br from-gray-100 to-gray-200">
                  <Download className="w-12 h-12 text-gray-600" />
                </div>
                
                <h3 className="velox-text-h3 mb-2">
                  Alternative Path:
                </h3>
                
                <h4 className="text-3xl font-bold text-gray-700 mb-8">
                  Get Free Process Audit
                </h4>

                {/* Secondary CTA */}
                <div className="mb-8">
                  <Link
                    href="/tools/business-audit"
                    className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-xl bg-white border-2 border-blue-600 text-blue-600 font-bold text-lg hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-105"
                  >
                    <span>Get Free Audit</span>
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

                <p className="velox-text-body text-gray-600 mb-8">
                  Not sure yet? Get valuable insights with no pressure
                </p>

                {/* Feature List */}
                <div className="space-y-6 text-left">
                  {[
                    "Instant clarity on timing",
                    "Real company examples",
                    "Self-assessment checklist"
                  ].map((text, idx) => (
                    <div 
                      key={idx}
                      className="flex items-center gap-4"
                    >
                      <div className="icon-container">
                        <CheckCircle className="w-6 h-6 icon-accent" />
                      </div>
                      <span className="velox-text-body font-medium">{text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Urgency Section */}
        <div 
          ref={urgencyRef}
          className={cn(
            "relative mb-24 opacity-0",
            urgencyVisible && "animate-fadeIn"
          )}
          style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
        >
          <div className="card-elevated relative rounded-3xl p-12 bg-gradient-to-br from-orange-50/80 via-white/90 to-red-50/80 overflow-hidden">
            {/* Static Background Pattern */}
            <div className="absolute inset-0 bg-dots opacity-10" />
            
            <div className="relative z-10 flex items-center gap-6">
              <div className="icon-container-gradient w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500">
                <Clock className="w-10 h-10 text-white" />
              </div>
              
              <div className="flex-1 text-center">
                <p className="velox-text-lead font-bold text-gray-900 mb-3">
                  Every week you wait costs approximately 
                  <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent"> €1,375</span> in lost efficiency.
                </p>
                <p className="velox-text-body text-gray-700">
                  But rushed decisions are worse. Choose the path that matches your readiness - just choose soon.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Trust Signals */}
        <div 
          ref={trustRef}
          className={cn(
            "opacity-0",
            trustVisible && "animate-fadeIn"
          )}
          style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { 
                value: "150+", 
                label: "Analyses Completed", 
                icon: <Calculator className="w-8 h-8" />
              },
              { 
                value: "98%", 
                label: "Client Satisfaction", 
                icon: <Award className="w-8 h-8" />
              },
              { 
                value: "ISO 27001", 
                label: "Security Standard", 
                icon: <Shield className="w-8 h-8" />
              },
              { 
                value: "Service-as-Software", 
                label: "Model Guarantee", 
                icon: <Zap className="w-8 h-8" />
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className="card-elevated text-center group"
              >
                <div className="icon-container-gradient w-16 h-16 mx-auto mb-4">
                  {React.cloneElement(item.icon, { className: "w-8 h-8 icon-accent" })}
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
                <p className="velox-text-body font-medium text-gray-600">{item.label}</p>
              </div>
            ))}
          </div>
          
          {/* Disclaimer */}
          <div className="pt-8 border-t border-gray-200 text-center">
            <p className="velox-text-body text-gray-500 max-w-3xl mx-auto leading-relaxed">
              Service-as-Software is an emerging model. Metrics reflect current implementations and industry standards. 
              Security framework follows ISO 27001 principles. Results vary by process complexity and business context.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  )
}