"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { CheckCircle, TrendingUp, Clock, DollarSign } from "lucide-react"
import { Text } from "@/components/ui/typography"

interface PulseIndicatorProps {
  children: React.ReactNode
  isActive?: boolean
  color?: 'blue' | 'green' | 'orange' | 'red'
  className?: string
}

export function PulseIndicator({ children, isActive = true, color = 'blue', className = '' }: PulseIndicatorProps) {
  const colorClasses = {
    blue: 'bg-blue-500',
    green: 'bg-green-500',
    orange: 'bg-orange-500',
    red: 'bg-red-500'
  }

  return (
    <div className={`relative ${className}`}>
      {children}
      {isActive && (
        <motion.div
          className={`absolute -top-1 -right-1 w-3 h-3 ${colorClasses[color]} rounded-full`}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [1, 0.7, 1]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      )}
    </div>
  )
}

interface CountUpProps {
  end: number
  duration?: number
  prefix?: string
  suffix?: string
  className?: string
}

export function CountUp({ end, duration = 2, prefix = '', suffix = '', className = '' }: CountUpProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number
    let animationFrame: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)

      setCount(Math.floor(progress * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration])

  return (
    <span className={className}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  )
}

interface ProgressiveRevealProps {
  children: React.ReactNode[]
  delay?: number
  className?: string
}

export function ProgressiveReveal({ children, delay = 0.2, className = '' }: ProgressiveRevealProps) {
  return (
    <div className={className}>
      {children.map((child, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * delay }}
        >
          {child}
        </motion.div>
      ))}
    </div>
  )
}

interface FloatingElementProps {
  children: React.ReactNode
  direction?: 'up' | 'down' | 'left' | 'right'
  intensity?: number
  duration?: number
  className?: string
}

export function FloatingElement({
  children,
  direction = 'up',
  intensity = 10,
  duration = 3,
  className = ''
}: FloatingElementProps) {
  const getAnimation = () => {
    switch (direction) {
      case 'up':
        return { y: [-intensity, intensity, -intensity] }
      case 'down':
        return { y: [intensity, -intensity, intensity] }
      case 'left':
        return { x: [-intensity, intensity, -intensity] }
      case 'right':
        return { x: [intensity, -intensity, intensity] }
      default:
        return { y: [-intensity, intensity, -intensity] }
    }
  }

  return (
    <motion.div
      className={className}
      animate={getAnimation()}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {children}
    </motion.div>
  )
}

interface TypewriterProps {
  text: string
  speed?: number
  className?: string
  onComplete?: () => void
}

export function Typewriter({ text, speed = 50, className = '', onComplete }: TypewriterProps) {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, speed)

      return () => clearTimeout(timeout)
    } else if (onComplete) {
      onComplete()
    }
  }, [currentIndex, text, speed, onComplete])

  return (
    <span className={className}>
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="inline-block w-0.5 h-5 bg-current ml-1"
      />
    </span>
  )
}

interface RealTimeUpdateProps {
  value: number
  previousValue?: number
  label: string
  icon?: React.ReactNode
  trend?: 'up' | 'down' | 'neutral'
  className?: string
}

export function RealTimeUpdate({
  value,
  previousValue,
  label,
  icon,
  trend = 'neutral',
  className = ''
}: RealTimeUpdateProps) {
  const [isUpdating, setIsUpdating] = useState(false)

  useEffect(() => {
    if (previousValue !== undefined && previousValue !== value) {
      setIsUpdating(true)
      const timeout = setTimeout(() => setIsUpdating(false), 1000)
      return () => clearTimeout(timeout)
    }
  }, [value, previousValue])

  const trendColors = {
    up: 'text-green-600',
    down: 'text-red-600',
    neutral: 'text-gray-600'
  }

  return (
    <motion.div
      className={`relative ${className}`}
      animate={isUpdating ? { scale: [1, 1.05, 1] } : {}}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center gap-2">
        {icon && <div className={trendColors[trend]}>{icon}</div>}
        <div>
          <motion.div
            key={value}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-semibold"
          >
            <CountUp end={value} duration={0.8} />
          </motion.div>
          <Text className="text-sm text-muted-foreground">{label}</Text>
        </div>
      </div>

      {isUpdating && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="absolute -top-2 -right-2"
        >
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
        </motion.div>
      )}
    </motion.div>
  )
}

interface SuccessAnimationProps {
  isVisible: boolean
  message: string
  className?: string
}

export function SuccessAnimation({ isVisible, message, className = '' }: SuccessAnimationProps) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: -20 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className={`flex items-center gap-2 bg-green-50 border border-green-200 rounded-lg p-3 ${className}`}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            <CheckCircle className="h-5 w-5 text-blue-600 transition-all duration-200" />
          </motion.div>
          <Text className="text-green-800 font-medium">{message}</Text>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

interface LoadingDotsProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

export function LoadingDots({ className = '', size = 'md' }: LoadingDotsProps) {
  const sizeClasses = {
    sm: 'w-1 h-1',
    md: 'w-2 h-2',
    lg: 'w-3 h-3'
  }

  return (
    <div className={`flex items-center gap-1 ${className}`}>
      {[0, 1, 2].map((index) => (
        <motion.div
          key={index}
          className={`${sizeClasses[size]} bg-current rounded-full`}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.7, 1, 0.7]
          }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            delay: index * 0.2
          }}
        />
      ))}
    </div>
  )
}
