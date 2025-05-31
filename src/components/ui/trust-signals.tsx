"use client"

import { motion } from "framer-motion"
import { Shield, Users, Clock, Award, CheckCircle, Star } from "lucide-react"
import { Text } from "@/components/ui/typography"

interface TrustSignalsProps {
  variant?: 'horizontal' | 'vertical' | 'compact'
  showIcons?: boolean
  className?: string
}

export function TrustSignals({ variant = 'horizontal', showIcons = true, className = '' }: TrustSignalsProps) {
  const signals = [
    {
      icon: Users,
      text: "1,000+ assessments completed",
      color: "text-success-green"
    },
    {
      icon: Shield,
      text: "Your data stays private",
      color: "text-deep-blue"
    },
    {
      icon: Clock,
      text: "No registration required",
      color: "text-urgency-orange"
    },
    {
      icon: Award,
      text: "GDPR compliant",
      color: "text-success-green"
    }
  ]

  const containerClasses = {
    horizontal: "flex flex-wrap justify-center items-center gap-6 md:gap-8",
    vertical: "flex flex-col space-y-4",
    compact: "flex flex-wrap justify-center items-center gap-4 text-sm"
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className={`${containerClasses[variant]} ${className}`}
    >
      {signals.map((signal, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          className="flex items-center gap-2"
        >
          {showIcons && (
            <signal.icon className="h-4 w-4 text-gray-700 transition-all duration-200" />
          )}
          <Text className={`text-muted-foreground ${variant === 'compact' ? 'text-xs' : 'text-sm'}`}>
            {signal.text}
          </Text>
        </motion.div>
      ))}
    </motion.div>
  )
}

interface SocialProofProps {
  className?: string
}

export function SocialProof({ className = '' }: SocialProofProps) {
  const stats = [
    { number: "1,000+", label: "Businesses Analyzed" },
    { number: "€2.5M+", label: "Cost Savings Identified" },
    { number: "65%", label: "Average Time Reduction" },
    { number: "98%", label: "Client Satisfaction" }
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`grid grid-cols-2 md:grid-cols-4 gap-6 ${className}`}
    >
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          className="text-center"
        >
          <div className="text-2xl md:text-3xl font-bold text-deep-blue">
            {stat.number}
          </div>
          <div className="text-sm text-muted-foreground mt-1">
            {stat.label}
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}

interface TestimonialProps {
  quote: string
  author: string
  company: string
  role: string
  className?: string
}

export function Testimonial({ quote, author, company, role, className = '' }: TestimonialProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`bg-white border border-gray-200 rounded-lg p-6 shadow-sm ${className}`}
    >
      <div className="flex items-start gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400 transition-all duration-200" />
        ))}
      </div>

      <blockquote className="text-gray-700 mb-4 italic">
        "{quote}"
      </blockquote>

      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-deep-blue rounded-full flex items-center justify-center">
          <span className="text-white font-medium text-sm">
            {author.split(' ').map(n => n[0]).join('')}
          </span>
        </div>
        <div>
          <div className="font-medium text-gray-900">{author}</div>
          <div className="text-sm text-gray-600">{role}, {company}</div>
        </div>
      </div>
    </motion.div>
  )
}

interface SecurityBadgeProps {
  className?: string
}

export function SecurityBadge({ className = '' }: SecurityBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className={`inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-3 py-1 ${className}`}
    >
      <Shield className="h-4 w-4 text-gray-700 transition-all duration-200" />
      <Text className="text-xs font-medium text-green-800">
        SSL Secured & GDPR Compliant
      </Text>
    </motion.div>
  )
}

interface CompletionIndicatorProps {
  completedCount: number
  className?: string
}

export function CompletionIndicator({ completedCount, className = '' }: CompletionIndicatorProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
      className={`inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-3 py-1 ${className}`}
    >
      <CheckCircle className="h-4 w-4 text-blue-600 transition-all duration-200" />
      <Text className="text-xs font-medium text-blue-800">
        {completedCount.toLocaleString()}+ completed this week
      </Text>
    </motion.div>
  )
}
