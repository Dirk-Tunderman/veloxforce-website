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
import { cn } from "@/lib/utils"
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
  const [headerVisible, setHeaderVisible] = useState(false)
  const [cardsVisible, setCardsVisible] = useState(false)
  const [metricsVisible, setMetricsVisible] = useState(false)
  const [timingVisible, setTimingVisible] = useState(false)
  const [warningVisible, setWarningVisible] = useState(false)
  
  const headerRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)
  const metricsRef = useRef<HTMLDivElement>(null)
  const timingRef = useRef<HTMLDivElement>(null)
  const warningRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observers = [
      { ref: headerRef, setter: setHeaderVisible },
      { ref: cardsRef, setter: setCardsVisible },
      { ref: metricsRef, setter: setMetricsVisible },
      { ref: timingRef, setter: setTimingVisible },
      { ref: warningRef, setter: setWarningVisible }
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
      <div className="absolute inset-0 bg-grid opacity-20" />
      
      <Container className="relative z-10 max-w-7xl">
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={cn(
            "text-center mb-20 opacity-0",
            headerVisible && "animate-fadeIn"
          )}
        >
          {/* Design System Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm mb-6">
            <Calculator className="w-4 h-4 icon-accent" />
            <span className="velox-text-caption font-medium text-blue-700">Economics Explained</span>
          </div>
          
          <h2 className="velox-text-h2 mb-6">
            How Service-as-Software Economics Work
          </h2>
          
          <p className="velox-text-lead max-w-4xl mx-auto">
            <span className="font-bold">Investment scales with complexity.</span> Pricing aligned with your savings. 
            <span className="font-semibold text-gray-900"> Each solution custom-priced for guaranteed ROI.</span>
          </p>
        </div>

        {/* Core Value Methodology - Enhanced Cards */}
        <div 
          ref={cardsRef}
          className={cn(
            "grid lg:grid-cols-2 gap-12 mb-24 opacity-0",
            cardsVisible && "animate-fadeIn"
          )}
        >
          {/* Cost Discovery Process - Left Card */}
          <div className="group relative">
            <div className="card-elevated relative h-full">
              {/* Gradient Accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-blue-700 rounded-t-3xl" />
              
              <div className="flex items-center gap-4 mb-10">
                <div className="icon-container-gradient w-16 h-16">
                  <TrendingDown className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="velox-text-h3">We Analyze Your Hidden Costs</h3>
              </div>
              
              <div className="space-y-8 mb-10">
                {[
                  {
                    step: "1",
                    title: "Operational inefficiency assessment",
                    desc: "Map current time, errors, and manual work"
                  },
                  {
                    step: "2", 
                    title: "Opportunity cost calculation",
                    desc: "What your team could focus on instead"
                  },
                  {
                    step: "3",
                    title: "Error and rework costs",
                    desc: "Hidden costs of manual processes"
                  }
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-4"
                  >
                    <div className="icon-container flex-shrink-0">
                      <span className="text-lg font-bold text-blue-600">{item.step}</span>
                    </div>
                    <div>
                      <p className="velox-text-body font-semibold text-gray-900 mb-1">{item.title}</p>
                      <p className="velox-text-body text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="pt-8 border-t border-gray-100 text-center">
                <p className="velox-text-body font-semibold text-gray-900 mb-2">Free ROI Analysis Shows</p>
                <p className="text-3xl font-bold text-gradient">
                  Your Specific Numbers
                </p>
              </div>
            </div>
          </div>

          {/* Investment Philosophy - Right Card */}
          <div className="group relative">
            <div className="card-premium relative h-full">
              {/* Gradient Accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-blue-700 rounded-t-3xl" />
              
              <div className="flex items-center gap-4 mb-10">
                <div className="icon-container-gradient w-16 h-16">
                  <Calculator className="w-8 h-8 text-white" />
                </div>
                <h3 className="velox-text-h3">Investment Philosophy</h3>
              </div>
              
              {/* Core Principle Box */}
              <div className="card-elevated p-8 mb-10 bg-gradient-to-br from-blue-100/80 to-indigo-100/60">
                <h4 className="text-2xl font-bold text-blue-900 mb-4">Our Pricing Principle:</h4>
                <p className="velox-text-lead text-blue-800 text-center font-semibold italic">
                  "Savings typically exceed investment within months"
                </p>
              </div>
              
              <div className="space-y-8 mb-10">
                {[
                  {
                    title: "Investment scales with complexity",
                    desc: "More complex processes = higher value created",
                    icon: <BarChart3 className="w-5 h-5 icon-accent" />
                  },
                  {
                    title: "Pricing aligned with your savings",
                    desc: "We only succeed when you save money",
                    icon: <Target className="w-5 h-5 icon-accent" />
                  },
                  {
                    title: "Faster than any alternative",
                    desc: "Implementation speed varies by scope",
                    icon: <Zap className="w-5 h-5 icon-accent" />
                  }
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-4"
                  >
                    <div className="icon-container flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <p className="velox-text-body font-semibold text-gray-900 mb-1">{item.title}</p>
                      <p className="velox-text-body text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="pt-8 border-t border-blue-200/50 text-center">
                <p className="velox-text-body font-semibold text-gray-900 mb-2">Timeline Philosophy:</p>
                <p className="text-3xl font-bold text-gradient">
                  Paced to Your Needs
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ROI Metrics Showcase */}
        <div 
          ref={metricsRef}
          className={cn(
            "mb-24 opacity-0",
            metricsVisible && "animate-fadeIn"
          )}
          style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
        >
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { label: "Average ROI Timeline", value: 3, suffix: " months", icon: <Clock className="w-8 h-8" /> },
              { label: "Cost Reduction", value: 70, suffix: "%", icon: <TrendingDown className="w-8 h-8" /> },
              { label: "Implementation Speed", value: 10, suffix: "x faster", icon: <Zap className="w-8 h-8" /> },
              { label: "Success Rate", value: 98, suffix: "%", icon: <CheckCircle className="w-8 h-8" /> }
            ].map((metric, idx) => (
              <div
                key={idx}
                className="card-elevated text-center group"
              >
                <div className="icon-container-gradient w-16 h-16 mx-auto mb-4">
                  {React.cloneElement(metric.icon, { className: "w-8 h-8 icon-accent" })}
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  <AnimatedCounter end={metric.value} suffix={metric.suffix} />
                </div>
                <p className="velox-text-body font-medium text-gray-600">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Timing Matters - Dark Premium Card */}
        <div 
          ref={timingRef}
          className={cn(
            "relative mb-24 opacity-0",
            timingVisible && "animate-fadeIn"
          )}
          style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
        >
          <div className="relative rounded-3xl p-12 md:p-16 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white overflow-hidden">
            {/* Static Background Pattern */}
            <div className="absolute inset-0 bg-mesh-static opacity-10" />
            
            <div className="relative z-10">
              <h3 className="velox-text-h2 text-center mb-16 text-white">
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
                  <div
                    key={idx}
                    className="text-center group"
                  >
                    <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform`}>
                      <span className="text-3xl font-bold text-white">{item.step}</span>
                    </div>
                    <h4 className="velox-text-h3 text-white mb-4">{item.title}</h4>
                    <p className="velox-text-body text-gray-300 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
              
              <div className="text-center">
                <p className="velox-text-lead text-gray-300 mb-4">
                  The question isn't whether to automate - it's <span className="font-bold text-white">when</span> and <span className="font-bold text-white">how</span>.
                </p>
                <p className="velox-text-lead text-blue-300 font-semibold">
                  Let's calculate your specific opportunity cost.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Competitive Advantage Warning */}
        <div 
          ref={warningRef}
          className={cn(
            "text-center opacity-0",
            warningVisible && "animate-fadeIn"
          )}
          style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}
        >
          <div className="card-elevated relative rounded-3xl p-12 bg-gradient-to-br from-orange-50/80 via-white/90 to-red-50/80 overflow-hidden">
            {/* Static Warning Pattern */}
            <div className="absolute inset-0 bg-dots opacity-10" />
            
            <div className="relative z-10">
              <div className="flex justify-center mb-8">
                <div className="icon-container-gradient w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500">
                  <AlertTriangle className="w-10 h-10 text-white" />
                </div>
              </div>
              
              <div className="max-w-4xl mx-auto">
                <p className="velox-text-lead font-bold text-gray-900 mb-6 leading-relaxed">
                  <span className="text-blue-600">MIT research</span> shows early Service-as-Software adopters gain 
                  <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent font-black"> 23% market share</span> from laggards within 24 months.
                </p>
                <p className="velox-text-body text-gray-700 leading-relaxed">
                  Every month you wait, your competitors get <span className="font-bold text-gray-900">stronger</span> while your costs <span className="font-bold text-gray-900">compound</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}