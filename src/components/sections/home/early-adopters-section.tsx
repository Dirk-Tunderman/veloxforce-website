'use client'

import React, { useEffect, useRef, useState } from 'react'
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
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ 
  industry, 
  company, 
  quote, 
  metrics, 
  highlight,
  delay = 0
}) => {
  const [isVisible, setIsVisible] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => observer.disconnect()
  }, [])
  
  return (
    <div
      ref={cardRef}
      className={cn(
        "group relative h-full opacity-0",
        isVisible && "animate-fadeInUp"
      )}
      style={{
        animationDelay: `${delay * 150}ms`,
        animationFillMode: 'forwards'
      }}
    >
      {/* Design System Compliant Card */}
      <div className="card-elevated h-full overflow-hidden">
        {/* Gradient Accent Line - Design System Colors */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-blue-700" />
        
        {/* Content */}
        <div className="relative z-10">
          {/* Industry Badge - Design System Compliant */}
          <div className="flex items-center justify-between mb-6">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-gray-200 shadow-sm">
              <Activity className="w-3 h-3 icon-accent" />
              <span className="velox-text-caption font-semibold text-blue-700 uppercase tracking-wider">
                {industry}
              </span>
            </span>
            <ArrowUpRight className="w-4 h-4 icon-primary group-hover:icon-accent transition-colors" />
          </div>
          
          {/* Company */}
          <p className="velox-text-caption font-medium mb-3">{company}</p>

          {/* Quote */}
          <blockquote className="relative mb-8">
            <div className="absolute -top-2 -left-2 text-4xl text-blue-100 font-serif">"</div>
            <p className="velox-text-body font-medium relative z-10 italic">
              {quote}
            </p>
          </blockquote>
          
          {/* Metrics */}
          <div className="space-y-4 mb-8">
            {metrics.map((metric, idx) => (
              <div 
                key={idx}
                className="flex items-center gap-3"
              >
                <div className="icon-container-gradient">
                  {React.cloneElement(metric.icon as React.ReactElement, {
                    className: "w-5 h-5 icon-accent"
                  })}
                </div>
                <div className="flex-1">
                  <span className="velox-text-caption">{metric.label}:</span>
                  <span className="ml-2 font-semibold velox-text-body">{metric.value}</span>
                  {metric.trend && (
                    <span className="ml-2 velox-text-caption font-medium text-emerald-600">
                      {metric.trend}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          {/* Highlight */}
          <div className="pt-6 border-t border-gray-100">
            <AnimatedNumber value={highlight} />
          </div>
        </div>
      </div>
    </div>
  )
}

const AnimatedNumber: React.FC<{ value: string }> = ({ value }) => {
  const [displayValue, setDisplayValue] = useState('0')
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [isVisible])
  
  useEffect(() => {
    if (!isVisible) return
    
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
  }, [isVisible, value])
  
  return (
    <div ref={ref} className="text-3xl font-bold text-gradient">
      {displayValue}
    </div>
  )
}

export function EarlyAdoptersSection() {
  const [headerVisible, setHeaderVisible] = useState(false)
  const [adoptionVisible, setAdoptionVisible] = useState(false)
  const [trustVisible, setTrustVisible] = useState(false)
  const [validationVisible, setValidationVisible] = useState(false)
  
  const headerRef = useRef<HTMLDivElement>(null)
  const adoptionRef = useRef<HTMLDivElement>(null)
  const trustRef = useRef<HTMLDivElement>(null)
  const validationRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observers = [
      {
        ref: headerRef,
        setter: setHeaderVisible
      },
      {
        ref: adoptionRef,
        setter: setAdoptionVisible
      },
      {
        ref: trustRef,
        setter: setTrustVisible
      },
      {
        ref: validationRef,
        setter: setValidationVisible
      }
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
      highlight: "85% cost reduction"
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
      highlight: "3x faster delivery"
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
      highlight: "Zero new hires needed"
    }
  ]
  
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Performance-Optimized Background */}
      <div className="absolute inset-0">
        {/* Base Gradient */}
        <div className="absolute inset-0 bg-gradient-simple" />

        {/* Static Mesh Pattern */}
        <div className="absolute inset-0 bg-mesh-static opacity-30" />
      </div>
      
      <Container className="relative z-10">
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={cn(
            "text-center mb-20 opacity-0",
            headerVisible && "animate-fadeIn"
          )}
        >
          {/* Innovation Badge - Design System Compliant */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm mb-6">
            <Zap className="w-4 h-4 icon-accent" />
            <span className="velox-text-caption font-medium text-blue-700">The Innovation Window</span>
          </div>

          <h2 className="velox-text-h2 mb-6 text-center">
            Early Adopters Are Already Winning
          </h2>

          <p className="velox-text-lead max-w-3xl mx-auto text-center">
            The innovation window is closing. While others debate,
            <span className="font-semibold text-gray-900"> leaders are transforming their operations</span> with AI-powered delegation.
          </p>
          
          {/* Adoption Curve Visualization */}
          <div 
            ref={adoptionRef}
            className={cn(
              "mt-12 max-w-2xl mx-auto opacity-0",
              adoptionVisible && "animate-fadeIn"
            )}
            style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
          >
            <div className="relative h-24 bg-gradient-to-r from-gray-100 via-blue-100 to-blue-200 rounded-full overflow-hidden">
              <div 
                className={cn(
                  "absolute left-0 top-0 bottom-0 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full transition-all duration-2000 ease-out",
                  adoptionVisible ? "w-[35%]" : "w-0"
                )}
                style={{ transitionDelay: '0.5s' }}
              >
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-lg" />
              </div>
              <div className="absolute inset-0 flex items-center justify-between px-8 velox-text-caption font-medium">
                <span className="text-white relative z-10">Early Adopters (You)</span>
                <span className="text-gray-600">Early Majority</span>
                <span className="text-gray-500">Late Majority</span>
              </div>
            </div>
          </div>
        </div>
        
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
        <div
          ref={trustRef}
          className={cn(
            "relative mb-24 opacity-0",
            trustVisible && "animate-fadeIn"
          )}
          style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}
        >
          {/* Design System Compliant Card */}
          <div className="card-elevated p-12 overflow-hidden">
            {/* Simplified Background Pattern */}
            <div className="absolute inset-0 bg-mesh-static opacity-20" />
            
            {/* Content */}
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="icon-container-gradient w-16 h-16">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="velox-text-h3">
                  Why We're Different: The Alignment Test
                </h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  {[
                    "We analyze ROI before starting (free)",
                    "We've rejected 23% of opportunities where math didn't work"
                  ].map((text, idx) => (
                    <div 
                      key={idx}
                      className="flex items-start gap-4 group cursor-pointer"
                    >
                      <div className="icon-container">
                        <CheckCircle className="w-5 h-5 icon-success" />
                      </div>
                      <p className="velox-text-body group-hover:text-gray-900 transition-colors">
                        <span className="font-semibold">{text.split(' (')[0]}</span>
                        {text.includes('(') && <span className="text-gray-600"> ({text.split(' (')[1]}</span>}
                      </p>
                    </div>
                  ))}
                </div>
                
                <div className="space-y-6">
                  {[
                    "We only succeed when you save money long-term",
                    "No lock-in contracts - prove value monthly"
                  ].map((text, idx) => (
                    <div 
                      key={idx}
                      className="flex items-start gap-4 group cursor-pointer"
                    >
                      <div className="icon-container">
                        <CheckCircle className="w-5 h-5 icon-success" />
                      </div>
                      <p className="velox-text-body group-hover:text-gray-900 transition-colors">
                        <span className="font-semibold">{text}</span>
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Partnership Badge - Design System Compliant */}
              <div className="mt-8 inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg">
                <Award className="w-5 h-5" />
                <span className="font-semibold">True Partnership Model</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Industry Validation */}
        <div 
          ref={validationRef}
          className={cn(
            "mt-20 text-center opacity-0",
            validationVisible && "animate-fadeIn"
          )}
          style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}
        >
          <blockquote className="relative max-w-4xl mx-auto">
            {/* Design System Compliant Container */}
            <div className="card-elevated p-10">
              {/* Floating Quote Marks */}
              <div className="absolute -top-4 -left-4 text-6xl text-blue-200 font-serif">"</div>
              <div className="absolute -bottom-4 -right-4 text-6xl text-blue-200 font-serif rotate-180">"</div>

              <p className="velox-text-lead font-medium italic relative z-10 text-center">
                By 2025, AI-powered automation will handle 50% of repetitive tasks.
                The winners will be companies that implement without complexity.
              </p>

              <cite className="block mt-6 velox-text-body font-semibold text-gray-600 text-center">
                — Forrester Research
              </cite>
            </div>
          </blockquote>
        </div>
      </Container>
    </section>
  )
}