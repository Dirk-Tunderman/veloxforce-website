"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Clock, Rocket, AlertTriangle, ArrowRight } from "lucide-react"
import Link from "next/link"

import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"
import { Button } from "@/components/ui/button"
import { CTATracker } from "@/components/analytics/cta-tracker"

// Statistics data
const statistics = [
  {
    icon: Clock,
    number: "70%",
    description: "of enterprises will use AI agents for operations",
    source: "Gartner Research",
    label: "By 2027"
  },
  {
    icon: Rocket,
    number: "3x",
    description: "Companies automating operations grow 3x faster",
    source: "Industry Analysis", 
    label: "Right Now"
  },
  {
    icon: AlertTriangle,
    number: "Every Month",
    description: "Competitors gain efficiency advantages",
    source: "Market Reality",
    label: "Every Month You Wait"
  }
]

// Transformation list data
const transformations = [
  { old: "Manual processes", new: "Intelligent workflows" },
  { old: "Fixed software", new: "Adaptive digital employees" },
  { old: "Operational burden", new: "Strategic freedom" }
]

// Animated counter component
function AnimatedCounter({ target, isVisible }: { target: string, isVisible: boolean }) {
  const [count, setCount] = useState(0)
  
  useEffect(() => {
    if (!isVisible) return
    
    // Handle non-numeric targets
    if (target === "Every Month") {
      setCount(1)
      return
    }
    
    const numericTarget = parseInt(target.replace(/[^0-9]/g, ''))
    if (isNaN(numericTarget)) return
    
    const duration = 2000 // 2 seconds
    const steps = 60
    const increment = numericTarget / steps
    const stepDuration = duration / steps
    
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= numericTarget) {
        setCount(numericTarget)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, stepDuration)
    
    return () => clearInterval(timer)
  }, [target, isVisible])
  
  if (target === "Every Month") {
    return <span>{target}</span>
  }
  
  const suffix = target.replace(/[0-9]/g, '')
  return <span>{count}{suffix}</span>
}

export function ServiceRevolutionSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  return (
    <Section padding="xl" className="bg-gradient-to-b from-white via-blue-50 to-white">
      <Container>
        <div className="max-w-7xl mx-auto" ref={ref}>
          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <Heading level="2" className="text-4xl md:text-5xl font-bold text-deep-blue mb-6">
              The Service Revolution Is Happening Now
            </Heading>
          </motion.div>

          {/* Intro Paragraphs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto text-center mb-12"
          >
            <Text className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
              The business world is experiencing a fundamental shift. For decades, companies adapted their 
              processes to fit software. Now, AI enables the opposite: digital employees that adapt to YOUR 
              exact business processes.
            </Text>
            <Text className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Industry analysts call it the <span className="font-semibold text-blue-600">"Service as Software"</span> era - where any business process can become 
              an intelligent, automated service.
            </Text>
          </motion.div>

          {/* Statistics Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white rounded-2xl shadow-lg p-8 md:p-12 my-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              {statistics.map((stat, index) => {
                const IconComponent = stat.icon
                return (
                  <div key={index} className="text-center relative">
                    {/* Divider line for desktop */}
                    {index < statistics.length - 1 && (
                      <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 w-px h-24 bg-blue-200" />
                    )}
                    
                    {/* Icon */}
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-blue-600" />
                    </div>
                    
                    {/* Label */}
                    <Text className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">
                      {stat.label}
                    </Text>
                    
                    {/* Animated Number */}
                    <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-2">
                      <AnimatedCounter target={stat.number} isVisible={isInView} />
                    </div>
                    
                    {/* Description */}
                    <Text className="text-lg text-gray-900 font-medium mb-2 leading-tight">
                      {stat.description}
                    </Text>
                    
                    {/* Source */}
                    <Text className="text-sm text-gray-500 italic">
                      {stat.source}
                    </Text>
                  </div>
                )
              })}
            </div>
          </motion.div>

          {/* Competitive Urgency Bar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-gradient-to-r from-blue-900 to-blue-700 rounded-xl p-6 text-center my-12"
          >
            <motion.div
              animate={{ 
                opacity: [1, 0.7, 1],
                scale: [1, 1.02, 1]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            >
              <Text className="text-xl text-white font-semibold">
                The window of competitive advantage is closing.
              </Text>
            </motion.div>
          </motion.div>

          {/* Transformation List */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="max-w-4xl mx-auto mb-12"
          >
            <Text className="text-lg text-gray-700 text-center mb-8">
              Forward-thinking businesses are already transforming:
            </Text>
            
            <div className="grid grid-cols-1 md:grid-cols-1 gap-6 max-w-2xl mx-auto">
              {transformations.map((transformation, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                  transition={{ duration: 0.6, delay: 1.0 + (index * 0.1) }}
                  className="flex items-center justify-center gap-4 text-lg"
                >
                  <span className="text-gray-600 text-right flex-1">
                    {transformation.old}
                  </span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="text-blue-600"
                  >
                    <ArrowRight className="w-6 h-6" />
                  </motion.div>
                  <span className="text-gray-900 font-semibold text-left flex-1">
                    {transformation.new}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Closing Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-center max-w-4xl mx-auto"
          >
            <Text className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
              At Veloxforce, we've made this transformation simple. No tools to learn. No agents to build. 
              Just delegate your processes and watch them run perfectly.
            </Text>

            <CTATracker
              eventName="service_revolution_cta_clicked"
              eventData={{
                section: "service_revolution",
                cta_text: "Start Your Transformation",
                position: "bottom"
              }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, delay: 1.4 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="px-8 py-4 text-lg font-semibold bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-xl hover:shadow-2xl transition-all duration-300"
                  asChild
                >
                  <Link href="/contact" className="flex items-center gap-2">
                    Start Your Transformation
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </motion.div>
            </CTATracker>
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}
