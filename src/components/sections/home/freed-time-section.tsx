'use client'

import React, { useEffect, useRef, useState } from 'react'
import { Container } from '@/components/layout/container'
import { 
  TrendingUp, 
  Users, 
  Target, 
  Lightbulb,
  ChartLine,
  HandshakeIcon,
  RocketIcon,
  SparklesIcon
} from 'lucide-react'
import { cn } from '@/lib/utils'

interface ActivityCardProps {
  icon: React.ReactNode
  title: string
  description: string
  stats?: string
  delay?: number
}

const ActivityCard: React.FC<ActivityCardProps> = ({ 
  icon, 
  title, 
  description, 
  stats,
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
        "group relative opacity-0",
        isVisible && "animate-fadeInUp",
        "card-elevated",
        "h-full"
      )}
      style={{
        animationDelay: `${delay * 100}ms`,
        animationFillMode: 'forwards'
      }}
    >
      {/* Content */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Icon Container - Design System Compliant */}
        <div className="icon-container-gradient mb-6">
          {React.cloneElement(icon as React.ReactElement, {
            className: "w-6 h-6 icon-accent"
          })}
        </div>
        
        <h3 className="velox-text-h3 mb-4">
          {title}
        </h3>
        
        <div className="flex-1">
          <p className="velox-text-body mb-4">
            {description}
          </p>
        </div>
        
        {stats && (
          <div className="pt-4 border-t border-gray-100 mt-auto">
            <p className="velox-text-caption font-semibold text-blue-600">
              {stats}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export function FreedTimeSection() {
  const [headerVisible, setHeaderVisible] = useState(false)
  const [ctaVisible, setCtaVisible] = useState(false)
  const headerRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const headerObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderVisible(true)
          headerObserver.disconnect()
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    )

    const ctaObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCtaVisible(true)
          ctaObserver.disconnect()
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    )

    if (headerRef.current) headerObserver.observe(headerRef.current)
    if (ctaRef.current) ctaObserver.observe(ctaRef.current)

    return () => {
      headerObserver.disconnect()
      ctaObserver.disconnect()
    }
  }, [])

  const activities = [
    {
      icon: <TrendingUp />,
      title: "Focus on Strategic Growth",
      description: "CEOs spend 40% more time on market expansion and innovation instead of operational firefighting.",
      stats: "40% more strategic time"
    },
    {
      icon: <Users />,
      title: "Develop Their Teams",
      description: "Leaders invest in mentoring and upskilling their workforce, building stronger organizational capabilities.",
      stats: "3x more team development"
    },
    {
      icon: <Target />,
      title: "Pursue New Opportunities",
      description: "Explore partnerships, acquisitions, and new revenue streams previously impossible due to time constraints.",
      stats: "65% faster decision making"
    },
    {
      icon: <Lightbulb />,
      title: "Drive Innovation",
      description: "Launch new products and services, staying ahead of market trends rather than playing catch-up.",
      stats: "2.5x more innovations launched"
    },
    {
      icon: <ChartLine />,
      title: "Improve Customer Experience",
      description: "Design and implement superior customer journeys that create lasting competitive advantages.",
      stats: "85% customer satisfaction"
    },
    {
      icon: <HandshakeIcon />,
      title: "Build Key Relationships",
      description: "Network with industry leaders, attend conferences, and strengthen partnerships that drive growth.",
      stats: "5x more strategic meetings"
    }
  ]
  
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Performance-Optimized Background */}
      <div className="absolute inset-0 bg-gradient-simple" />
      
      {/* Static Mesh Pattern */}
      <div className="absolute inset-0 bg-mesh-static opacity-30" />
      
      {/* Static Dot Pattern */}
      <div className="absolute inset-0 bg-dots opacity-20" />
      
      <Container className="relative z-10">
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={cn(
            "text-center mb-16 opacity-0",
            headerVisible && "animate-fadeIn"
          )}
        >
          {/* Design System Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm mb-6">
            <SparklesIcon className="w-4 h-4 icon-accent" />
            <span className="velox-text-caption font-medium text-blue-700">The Freedom to Lead</span>
          </div>
          
          <h2 className="velox-text-h2 mb-6">
            What Our Clients Do With Their Freed Time
          </h2>
          
          <p className="velox-text-lead max-w-3xl mx-auto">
            When routine operations run themselves, leaders transform from managers to visionaries. 
            Here's how our clients invest their recovered 20+ hours per week.
          </p>
        </div>
        
        {/* Activity Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {activities.map((activity, index) => (
            <ActivityCard
              key={index}
              {...activity}
              delay={index * 0.1}
            />
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div
          ref={ctaRef}
          className={cn(
            "mt-16 text-center opacity-0",
            ctaVisible && "animate-fadeIn"
          )}
          style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}
        >
          <div className="card-elevated inline-flex items-center gap-3 px-6 py-3">
            <RocketIcon className="w-5 h-5 icon-accent" />
            <p className="velox-text-body">
              <span className="font-semibold text-gray-900">Join 150+ leaders</span> who've reclaimed their time for what matters most
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}