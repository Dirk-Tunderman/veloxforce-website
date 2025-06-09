"use client"

import React, { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"
import { Slider } from "@/components/ui/slider"
import { 
  ArrowRight, 
  Clock, 
  Target, 
  TrendingUp, 
  ArrowDown,
  Calculator,
  Play,
  Pause,
  DollarSign,
  Users,
  Zap,
  CheckCircle,
  AlertTriangle,
  TrendingDown,
  BarChart3,
  Lightbulb,
  Building2,
  Award,
  Handshake
} from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"

// Timeline Data
const timelineData = [
  {
    month: 0,
    title: "Today",
    description: "Manual processes consuming your team",
    businessValue: "Current State",
    teamFocus: "Operational Tasks",
    costSavings: 0,
    timeFreed: 0,
    status: "baseline"
  },
  {
    month: 1,
    title: "Month 1",
    description: "Process analysis & AI development begins",
    businessValue: "Foundation",
    teamFocus: "Collaboration & Documentation",
    costSavings: 0,
    timeFreed: 5,
    status: "development"
  },
  {
    month: 3,
    title: "Month 3",
    description: "First processes automated & delivering results",
    businessValue: "Early Results",
    teamFocus: "Strategic Oversight",
    costSavings: 15000,
    timeFreed: 25,
    status: "early-results"
  },
  {
    month: 6,
    title: "Month 6",
    description: "Full automation suite operational",
    businessValue: "Full Impact",
    teamFocus: "Growth Initiatives",
    costSavings: 45000,
    timeFreed: 60,
    status: "full-impact"
  },
  {
    month: 12,
    title: "Year 1",
    description: "Continuous optimization & scaling",
    businessValue: "Competitive Advantage",
    teamFocus: "Strategic Leadership",
    costSavings: 120000,
    timeFreed: 80,
    status: "optimization"
  }
]

// Cost Calculator Component
function CostCalculator() {
  const [teamSize, setTeamSize] = useState([5])
  const [avgSalary, setAvgSalary] = useState([75000])
  const [timeSpent, setTimeSpent] = useState([30])
  const [processComplexity, setProcessComplexity] = useState([3])
  
  const calculateSavings = () => {
    const hourlyRate = avgSalary[0] / 2080 // Annual salary to hourly
    const hoursPerWeek = (timeSpent[0] / 100) * 40 // Percentage of 40-hour week
    const weeklySavings = teamSize[0] * hourlyRate * hoursPerWeek
    const monthlySavings = weeklySavings * 4.33
    const annualSavings = monthlySavings * 12
    
    const complexityMultiplier = 1 + (processComplexity[0] - 1) * 0.3
    
    return {
      monthly: Math.round(monthlySavings * complexityMultiplier),
      annual: Math.round(annualSavings * complexityMultiplier),
      weekly: Math.round(weeklySavings * complexityMultiplier)
    }
  }
  
  const savings = calculateSavings()
  
  return (
    <div className="bg-white/90 backdrop-blur-xl border border-blue-100/50 rounded-3xl p-8 shadow-[0_20px_40px_-12px_rgba(37,99,235,0.15)]">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
          <Calculator className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900">Your Savings Calculator</h3>
      </div>
      
      <div className="space-y-6">
        {/* Team Size */}
        <div>
          <div className="flex justify-between items-center mb-3">
            <label className="text-sm font-medium text-gray-700">Team Size</label>
            <span className="text-lg font-semibold text-blue-600">{teamSize[0]} people</span>
          </div>
          <Slider
            value={teamSize}
            onValueChange={setTeamSize}
            max={50}
            min={1}
            step={1}
            className="w-full"
          />
        </div>
        
        {/* Average Salary */}
        <div>
          <div className="flex justify-between items-center mb-3">
            <label className="text-sm font-medium text-gray-700">Average Salary</label>
            <span className="text-lg font-semibold text-blue-600">€{avgSalary[0].toLocaleString()}</span>
          </div>
          <Slider
            value={avgSalary}
            onValueChange={setAvgSalary}
            max={150000}
            min={30000}
            step={5000}
            className="w-full"
          />
        </div>
        
        {/* Time Spent on Manual Processes */}
        <div>
          <div className="flex justify-between items-center mb-3">
            <label className="text-sm font-medium text-gray-700">Time on Manual Processes</label>
            <span className="text-lg font-semibold text-blue-600">{timeSpent[0]}%</span>
          </div>
          <Slider
            value={timeSpent}
            onValueChange={setTimeSpent}
            max={80}
            min={10}
            step={5}
            className="w-full"
          />
        </div>
        
        {/* Process Complexity */}
        <div>
          <div className="flex justify-between items-center mb-3">
            <label className="text-sm font-medium text-gray-700">Process Complexity</label>
            <span className="text-lg font-semibold text-blue-600">
              {processComplexity[0] === 1 ? 'Simple' : processComplexity[0] === 2 ? 'Moderate' : processComplexity[0] === 3 ? 'Complex' : processComplexity[0] === 4 ? 'Very Complex' : 'Enterprise'}
            </span>
          </div>
          <Slider
            value={processComplexity}
            onValueChange={setProcessComplexity}
            max={5}
            min={1}
            step={1}
            className="w-full"
          />
        </div>
        
        {/* Results */}
        <div className="mt-8 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-200/50">
          <h4 className="text-lg font-semibold text-gray-900 mb-4">Potential Savings with Service-as-Software</h4>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">€{savings.weekly.toLocaleString()}</div>
              <div className="text-sm text-gray-600">per week</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">€{savings.monthly.toLocaleString()}</div>
              <div className="text-sm text-gray-600">per month</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">€{savings.annual.toLocaleString()}</div>
              <div className="text-sm text-gray-600">per year</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Interactive Timeline Component
function InteractiveTimeline() {
  const [activeMonth, setActiveMonth] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  
  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setActiveMonth(prev => {
          if (prev >= timelineData.length - 1) {
            setIsPlaying(false)
            return 0
          }
          return prev + 1
        })
      }, 2000)
      return () => clearInterval(interval)
    }
  }, [isPlaying])
  
  const currentData = timelineData[activeMonth]
  
  return (
    <div className="bg-white/90 backdrop-blur-xl border border-blue-100/50 rounded-3xl p-8 shadow-[0_20px_40px_-12px_rgba(37,99,235,0.15)]">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
            <Clock className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900">Service-as-Software Timeline</h3>
        </div>
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          {isPlaying ? 'Pause' : 'Play'}
        </button>
      </div>
      
      {/* Timeline Progress */}
      <div className="relative mb-8">
        <div className="h-2 bg-gray-200 rounded-full">
          <div 
            className="h-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full transition-all duration-1000 ease-out"
            style={{ width: `${(activeMonth / (timelineData.length - 1)) * 100}%` }}
          />
        </div>
        <div className="flex justify-between mt-2">
          {timelineData.map((item, index) => (
            <button
              key={index}
              onClick={() => setActiveMonth(index)}
              className={cn(
                "w-6 h-6 rounded-full border-2 transition-all duration-300",
                index <= activeMonth 
                  ? "bg-blue-600 border-blue-600" 
                  : "bg-white border-gray-300"
              )}
            />
          ))}
        </div>
        <div className="flex justify-between mt-1">
          {timelineData.map((item, index) => (
            <span key={index} className="text-xs text-gray-600">{item.title}</span>
          ))}
        </div>
      </div>
      
      {/* Current State Display */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeMonth}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div className="text-center">
            <h4 className="text-3xl font-bold text-gray-900 mb-2">{currentData.title}</h4>
            <p className="text-lg text-gray-600">{currentData.description}</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Business Value */}
            <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl">
              <div className="flex items-center gap-2 mb-3">
                <Target className="w-5 h-5 text-blue-600" />
                <span className="text-sm font-medium text-gray-700">Business Value</span>
              </div>
              <div className="text-xl font-semibold text-gray-900">{currentData.businessValue}</div>
              <div className="text-sm text-gray-600 mt-1">{currentData.teamFocus}</div>
            </div>
            
            {/* Metrics */}
            <div className="p-6 bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl">
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp className="w-5 h-5 text-emerald-600" />
                <span className="text-sm font-medium text-gray-700">Impact</span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Time Freed:</span>
                  <span className="font-semibold text-emerald-600">{currentData.timeFreed}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Cost Savings:</span>
                  <span className="font-semibold text-emerald-600">
                    {currentData.costSavings > 0 ? `€${currentData.costSavings.toLocaleString()}` : 'Building'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

// Partnership Value Visualization
function PartnershipVisualization() {
  const [activeTab, setActiveTab] = useState('outcomes')
  
  const tabs = [
    { id: 'outcomes', label: 'Guaranteed Outcomes', icon: CheckCircle },
    { id: 'partnership', label: 'True Partnership', icon: Handshake },
    { id: 'growth', label: 'Mutual Growth', icon: TrendingUp }
  ]
  
  const content = {
    outcomes: {
      title: "Results You Can Count On",
      items: [
        { label: "Processes run perfectly", description: "Or we fix them at no cost", icon: CheckCircle, color: "emerald" },
        { label: "ROI within 6 months", description: "Typically 3-4x return on investment", icon: TrendingUp, color: "blue" },
        { label: "Zero learning curve", description: "We handle all technical complexity", icon: Zap, color: "purple" }
      ]
    },
    partnership: {
      title: "How True Partnership Works",
      items: [
        { label: "You own the strategy", description: "Focus on what matters to your business", icon: Target, color: "blue" },
        { label: "We own the execution", description: "Handle all operational details", icon: Building2, color: "indigo" },
        { label: "Shared success metrics", description: "We only succeed when you do", icon: Award, color: "emerald" }
      ]
    },
    growth: {
      title: "Built for Scalable Growth",
      items: [
        { label: "Processes scale with you", description: "From startup to enterprise capacity", icon: BarChart3, color: "blue" },
        { label: "Continuous optimization", description: "Always improving efficiency", icon: Lightbulb, color: "amber" },
        { label: "Future-proof technology", description: "Latest AI advances automatically applied", icon: Zap, color: "purple" }
      ]
    }
  }
  
  const getColorClasses = (color: string) => {
    const colors = {
      emerald: "text-emerald-600 bg-emerald-50",
      blue: "text-blue-600 bg-blue-50",
      purple: "text-purple-600 bg-purple-50",
      indigo: "text-indigo-600 bg-indigo-50",
      amber: "text-amber-600 bg-amber-50"
    }
    return colors[color as keyof typeof colors] || colors.blue
  }
  
  return (
    <div className="bg-white/90 backdrop-blur-xl border border-blue-100/50 rounded-3xl p-8 shadow-[0_20px_40px_-12px_rgba(37,99,235,0.15)]">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
          <Handshake className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900">The VeloxForce Partnership</h3>
      </div>
      
      {/* Tab Navigation */}
      <div className="flex space-x-1 mb-8 bg-gray-100 rounded-xl p-1">
        {tabs.map((tab) => {
          const Icon = tab.icon
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "flex items-center gap-2 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200",
                activeTab === tab.id
                  ? "bg-white text-blue-600 shadow-sm"
                  : "text-gray-600 hover:text-gray-900"
              )}
            >
              <Icon className="w-4 h-4" />
              {tab.label}
            </button>
          )
        })}
      </div>
      
      {/* Tab Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <h4 className="text-xl font-semibold text-gray-900 mb-6">{content[activeTab as keyof typeof content].title}</h4>
          <div className="space-y-4">
            {content[activeTab as keyof typeof content].items.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50/50 transition-colors"
                >
                  <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0", getColorClasses(item.color))}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900">{item.label}</h5>
                    <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export function HeroTransformationSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const particleOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.1, 0.3, 0.1])
  
  return (
    <div ref={sectionRef}>
      <Section 
        padding="xl" 
        background="transparent" 
        className="relative overflow-hidden"
      >
        {/* Enhanced Background with Parallax */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-white to-blue-50/20"
          style={{ y: backgroundY }}
        />
        
        {/* Dynamic Particle Effects */}
        <motion.div 
          className="absolute inset-0"
          style={{ opacity: particleOpacity }}
        >
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-72 h-72 bg-indigo-200/20 rounded-full blur-3xl animate-pulse" 
            style={{ animationDelay: '3s' }} 
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-200/10 rounded-full blur-3xl animate-pulse" 
            style={{ animationDelay: '6s' }} 
          />
        </motion.div>
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: 'linear-gradient(#2563EB 1px, transparent 1px), linear-gradient(90deg, #2563EB 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        
        {/* Hero Content */}
        <Container className="relative z-10">
          <div className="min-h-screen flex items-center justify-center">
            <div className="w-full text-center py-20">
            {/* Main Headline with Premium Typography */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 
                className="text-5xl md:text-7xl font-bold mb-6 max-w-5xl mx-auto leading-tight"
                style={{ color: 'var(--velox-gray-900)' }}
              >
                Stop Managing Processes.
                <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">
                  Start Receiving Results.
                </span>
              </h1>
            </motion.div>

            {/* Enhanced Subheadline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <p className="text-xl md:text-2xl mb-6 max-w-4xl mx-auto leading-relaxed text-gray-700">
                You delegate operations once. We deliver outcomes forever.
                <span className="block mt-2 font-semibold text-blue-600">Your team leads. Technology serves. Business grows.</span>
              </p>
            </motion.div>

            {/* Supporting Text with CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="mb-12"
            >
              <p className="text-lg mb-8 max-w-3xl mx-auto text-gray-600">
                No software to learn. No systems to manage. Just perfect results delivered to your inbox.
              </p>
              
              {/* Primary CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link href="/tools/business-audit">
                  <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-lg font-semibold rounded-2xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-2">
                    Calculate My Savings
                    <Calculator className="w-5 h-5" />
                  </button>
                </Link>
                
                <Link href="/our-approach">
                  <button className="px-8 py-4 bg-white/80 backdrop-blur-sm text-blue-600 text-lg font-semibold rounded-2xl border-2 border-blue-200 hover:bg-blue-50 transition-all duration-300 flex items-center gap-2">
                    How It Works
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </Link>
              </div>
            </motion.div>

            {/* Social Proof Banner */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/60 backdrop-blur-sm rounded-full border border-blue-100/50 mb-16"
            >
              <span className="text-sm text-gray-700">
                Most automation projects fail because <span className="font-bold">you're left managing complex tools</span>.
              </span>
              <Link 
                href="#interactive-demo" 
                className="text-sm font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1 transition-colors duration-200"
              >
                See the difference
                <ArrowDown className="h-4 w-4" />
              </Link>
            </motion.div>
            </div>
          </div>
        </Container>

        {/* Interactive Demo Section */}
        <Container id="interactive-demo" className="relative z-10 max-w-7xl">
          <motion.div 
            className="mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                See Your Service-as-Software Journey
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore how we transform your operations with interactive tools and real-time calculations
              </p>
            </div>
            
            {/* Interactive Components Grid */}
            <div className="grid lg:grid-cols-2 gap-8 mb-16">
              {/* Timeline Visualization */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <InteractiveTimeline />
              </motion.div>
              
              {/* Cost Calculator */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <CostCalculator />
              </motion.div>
            </div>
            
            {/* Partnership Visualization - Full Width */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <PartnershipVisualization />
            </motion.div>
          </motion.div>
        </Container>
        
        {/* Classic Transformation Visual - Enhanced */}
        <Container className="relative z-10 max-w-7xl">
          <motion.div 
            className="mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
              From Operational Overwhelm to Strategic Leadership
            </h3>
            
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              {/* Challenge Card */}
              <motion.div 
                className="lg:col-span-5"
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -50 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="relative p-8 bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl border border-red-100/50 shadow-lg">
                  <div className="absolute -top-4 left-8 px-4 py-2 bg-red-600 text-white rounded-full text-sm font-semibold">
                    Before Service-as-Software
                  </div>
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-100 to-orange-100 flex items-center justify-center mb-6">
                    <AlertTriangle className="h-8 w-8 text-red-600" />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">
                    Your Team Today
                  </h4>
                  <div className="space-y-4">
                    <div>
                      <p className="text-lg font-semibold text-gray-800 mb-2">Drowning in operational tasks</p>
                      <p className="text-gray-600">No time for strategic work</p>
                    </div>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                        Opens laptop to 47 unprocessed requests
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                        Three systems need manual updates (again)
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                        Two hours copying data between platforms
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                        Strategic planning meeting? Cancelled (again)
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                        Leaves at 7 PM, further behind than morning
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
              
              {/* Transformation Arrow */}
              <motion.div 
                className="lg:col-span-2 flex justify-center"
                whileInView={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0, scale: 0.5 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  <ArrowRight className="h-10 w-10 text-white" />
                </div>
              </motion.div>
              
              {/* Solution Card */}
              <motion.div 
                className="lg:col-span-5"
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 50 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="relative p-8 bg-gradient-to-br from-blue-50 via-white to-indigo-50 rounded-3xl border border-blue-100/50 shadow-xl">
                  <div className="absolute -top-4 left-8 px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full text-sm font-semibold">
                    With Service-as-Software
                  </div>
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-6 shadow-lg shadow-blue-500/25">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">
                    Your Team Tomorrow
                  </h4>
                  <div className="space-y-4">
                    <div>
                      <p className="text-lg font-semibold text-gray-800 mb-2">Focuses on strategic work</p>
                      <p className="text-gray-600">Receives processed results and analyzes trends</p>
                    </div>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                        Opens laptop to completed work awaiting review
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                        Reviews three exceptions needing her expertise
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                        Leads strategic session on market expansion
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                        Mentors junior team member on analysis
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                        Leaves at 4 PM for daughter's recital
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </Container>

        {/* Enhanced Value Proposition Row */}
        <Container className="relative z-10 max-w-6xl">
          <motion.div 
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
              Why Service-as-Software Works
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div 
                className="text-center p-8 bg-white/80 backdrop-blur-sm rounded-3xl border border-blue-100/50 shadow-lg hover:shadow-xl transition-all duration-300 group"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-blue-500/25">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">Scales with You</h4>
                <p className="text-gray-600 mb-3">Investment proportional to value created</p>
                <p className="text-sm text-blue-600 font-medium">Pricing aligned with your savings</p>
              </motion.div>
              
              <motion.div 
                className="text-center p-8 bg-white/80 backdrop-blur-sm rounded-3xl border border-blue-100/50 shadow-lg hover:shadow-xl transition-all duration-300 group"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-emerald-500/25">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">Fast Results</h4>
                <p className="text-gray-600 mb-3">Most clients see positive ROI quickly</p>
                <p className="text-sm text-emerald-600 font-medium">ROI timeline depends on process complexity</p>
              </motion.div>
              
              <motion.div 
                className="text-center p-8 bg-white/80 backdrop-blur-sm rounded-3xl border border-blue-100/50 shadow-lg hover:shadow-xl transition-all duration-300 group"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-purple-500/25">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">Custom Built</h4>
                <p className="text-gray-600 mb-3">Faster than any alternative</p>
                <p className="text-sm text-purple-600 font-medium">Implementation speed varies by scope</p>
              </motion.div>
            </div>
          </motion.div>
        </Container>

        {/* Enhanced Final CTAs */}
        <Container className="relative z-10 text-center">
          <motion.div 
            className="mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="p-12 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white rounded-3xl relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute -top-20 -left-20 w-60 h-60 bg-blue-400 rounded-full blur-3xl animate-pulse" />
                <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-indigo-400 rounded-full blur-3xl animate-pulse" 
                  style={{ animationDelay: '2s' }} 
                />
              </div>
              
              <div className="relative z-10">
                <h3 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Operations?</h3>
                <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                  Start with our free business audit to see your specific savings potential
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/tools/business-audit">
                    <button className="px-10 py-4 bg-white text-gray-900 text-lg font-semibold rounded-2xl hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center gap-2">
                      Get Your Free ROI Analysis
                      <Calculator className="w-5 h-5" />
                    </button>
                  </Link>
                  
                  <Link href="/our-approach">
                    <button className="px-10 py-4 bg-transparent border-2 border-white text-white text-lg font-semibold rounded-2xl hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center gap-2">
                      Learn Our Process
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </Container>

        {/* Credibility Reference */}
        <Container className="relative z-10 text-center">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-sm text-gray-500 max-w-md mx-auto">
              Based on research from McKinsey, MIT Technology Review, and Harvard Business Review
            </p>
          </motion.div>
        </Container>
      </Section>
    </div>
  )
}