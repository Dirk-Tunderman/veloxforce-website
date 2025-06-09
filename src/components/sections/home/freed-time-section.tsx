'use client'

import React from 'react'
import { motion } from 'framer-motion'
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
  gradient?: string
  delay?: number
}

const ActivityCard: React.FC<ActivityCardProps> = ({ 
  icon, 
  title, 
  description, 
  stats,
  gradient = 'var(--velox-gradient-subtle)',
  delay = 0 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="group relative"
    >
      {/* Simple Card */}
      <div className={cn(
        "relative h-full rounded-2xl p-8",
        "bg-gradient-to-br from-blue-50/95 via-white to-blue-50/95",
        "border border-blue-100/50",
        "shadow-sm",
        "transition-all duration-300",
        "group-hover:shadow-[0_20px_48px_rgba(37,99,235,0.15)]",
        "group-hover:border-blue-200/60",
        "overflow-hidden"
      )}>
        {/* Animated Background Gradient */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: gradient,
            filter: 'blur(40px)',
          }}
        />
        
        {/* Noise Texture */}
        <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'1\'/%3E%3C/svg%3E")',
          }}
        />
        
        {/* Content */}
        <div className="relative z-10">
          {/* Icon Container with Gradient Background */}
          <div className={cn(
            "w-14 h-14 rounded-2xl mb-6",
            "bg-gradient-to-br from-blue-100/80 to-blue-200/60",
            "backdrop-blur-sm",
            "flex items-center justify-center",
            "transition-all duration-300",
            "group-hover:scale-110 group-hover:rotate-3",
            "shadow-[0_4px_16px_rgba(37,99,235,0.15)]",
            "group-hover:shadow-[0_8px_24px_rgba(37,99,235,0.25)]"
          )}>
            {React.cloneElement(icon as React.ReactElement, {
              className: "w-7 h-7 text-blue-600 transition-transform duration-300 group-hover:scale-110"
            })}
          </div>
          
          <h3 className="text-xl font-semibold text-gray-900 mb-3 transition-colors duration-300 group-hover:text-blue-900">
            {title}
          </h3>
          
          <p className="text-gray-600 leading-relaxed mb-4">
            {description}
          </p>
          
          {stats && (
            <div className="pt-4 border-t border-gray-100/50">
              <p className="text-sm font-medium text-blue-600 transition-all duration-300 group-hover:text-blue-700">
                {stats}
              </p>
            </div>
          )}
        </div>
        
        {/* Hover Glow Effect */}
        <div className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(37, 99, 235, 0.06), transparent 40%)',
          }}
        />
      </div>
    </motion.div>
  )
}

export function FreedTimeSection() {
  const activities = [
    {
      icon: <TrendingUp />,
      title: "Focus on Strategic Growth",
      description: "CEOs spend 40% more time on market expansion and innovation instead of operational firefighting.",
      stats: "40% more strategic time",
      gradient: "radial-gradient(at top left, rgba(37, 99, 235, 0.15), transparent 50%)"
    },
    {
      icon: <Users />,
      title: "Develop Their Teams",
      description: "Leaders invest in mentoring and upskilling their workforce, building stronger organizational capabilities.",
      stats: "3x more team development",
      gradient: "radial-gradient(at top right, rgba(99, 102, 241, 0.15), transparent 50%)"
    },
    {
      icon: <Target />,
      title: "Pursue New Opportunities",
      description: "Explore partnerships, acquisitions, and new revenue streams previously impossible due to time constraints.",
      stats: "65% faster decision making",
      gradient: "radial-gradient(at bottom left, rgba(79, 70, 229, 0.15), transparent 50%)"
    },
    {
      icon: <Lightbulb />,
      title: "Drive Innovation",
      description: "Launch new products and services, staying ahead of market trends rather than playing catch-up.",
      stats: "2.5x more innovations launched",
      gradient: "radial-gradient(at bottom right, rgba(37, 99, 235, 0.15), transparent 50%)"
    },
    {
      icon: <ChartLine />,
      title: "Improve Customer Experience",
      description: "Design and implement superior customer journeys that create lasting competitive advantages.",
      stats: "85% customer satisfaction",
      gradient: "radial-gradient(at center, rgba(99, 102, 241, 0.15), transparent 50%)"
    },
    {
      icon: <HandshakeIcon />,
      title: "Build Key Relationships",
      description: "Network with industry leaders, attend conferences, and strengthen partnerships that drive growth.",
      stats: "5x more strategic meetings",
      gradient: "radial-gradient(at top center, rgba(79, 70, 229, 0.15), transparent 50%)"
    }
  ]
  
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Premium Background with Gradient Mesh */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 via-white to-blue-50/30" />
      
      {/* Animated Gradient Orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl animate-pulse" 
        style={{ animationDelay: '2s' }} 
      />
      
      {/* Dot Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: 'radial-gradient(circle, #2563EB 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />
      
      <Container className="relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* Premium Badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50/80 backdrop-blur-sm border border-blue-100/50 mb-6"
          >
            <SparklesIcon className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-700">The Freedom to Lead</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent">
              What Our Clients Do With Their Freed Time
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            When routine operations run themselves, leaders transform from managers to visionaries. 
            Here's how our clients invest their recovered 20+ hours per week.
          </p>
        </motion.div>
        
        {/* Activity Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {activities.map((activity, index) => (
            <ActivityCard
              key={index}
              {...activity}
              delay={index * 0.1}
            />
          ))}
        </div>
        
        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-gradient-to-r from-blue-50/80 to-indigo-50/80 backdrop-blur-sm border border-blue-100/50">
            <RocketIcon className="w-5 h-5 text-blue-600" />
            <p className="text-gray-700">
              <span className="font-semibold text-gray-900">Join 150+ leaders</span> who've reclaimed their time for what matters most
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}