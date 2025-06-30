"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { CheckCircle, TrendingUp, Clock, Euro, Target, ArrowRight, Download } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Heading, Text } from "@/components/ui/typography"
import { ResultsData } from "@/types/audit-tool"

interface ResultsDisplayProps {
  results: ResultsData
}

export function ResultsDisplay({ results }: ResultsDisplayProps) {
  const [animatedValues, setAnimatedValues] = useState({
    cost: 0,
    savings: 0,
    netGain: 0,
    hours: 0
  })

  // Animate numbers on mount
  useEffect(() => {
    const duration = 2000 // 2 seconds
    const steps = 60
    const stepDuration = duration / steps

    let currentStep = 0
    const interval = setInterval(() => {
      currentStep++
      const progress = currentStep / steps

      setAnimatedValues({
        cost: Math.round((results.estimatedMonthlyCost || 0) * progress),
        savings: Math.round((results.potentialSavings || 0) * progress),
        netGain: Math.round((results.netGain || 0) * progress),
        hours: Math.round((results.hoursFreed || 0) * progress)
      })

      if (currentStep >= steps) {
        clearInterval(interval)
      }
    }, stepDuration)

    return () => clearInterval(interval)
  }, [results])

  const renderHighlyQualified = () => (
    <div className="space-y-6">
      <div className="text-center space-y-4">
        <div className="flex justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-success/10">
            <CheckCircle className="h-8 w-8 text-blue-600" />
          </div>
        </div>

        <div>
          <Heading level="2" className="text-2xl text-success mb-2">
            Perfect Fit for Automation
          </Heading>
          <Text className="text-lg font-medium">
            Your {results.processName} Automation Analysis:
          </Text>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-muted rounded-lg p-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Euro className="h-5 w-5 text-gray-700 transition-all duration-200" />
            <Text className="font-medium">Current Monthly Cost</Text>
          </div>
          <Text className="text-2xl font-bold">
            €{animatedValues.cost.toLocaleString()}
          </Text>
        </div>

        <div className="bg-success/5 border border-success/20 rounded-lg p-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <TrendingUp className="h-5 w-5 text-blue-600 transition-all duration-200" />
            <Text className="font-medium">Potential Monthly Savings</Text>
          </div>
          <Text className="text-2xl font-bold text-success">
            €{animatedValues.savings.toLocaleString()}
          </Text>
        </div>

        <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Clock className="h-5 w-5 text-gray-700 transition-all duration-200" />
            <Text className="font-medium">Payback Period</Text>
          </div>
          <Text className="text-2xl font-bold text-primary">
            {results.paybackWeeks} weeks
          </Text>
        </div>

        <div className="bg-accent/5 border border-accent/20 rounded-lg p-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Target className="h-5 w-5 text-blue-600" />
            <Text className="font-medium">Your Net Gain</Text>
          </div>
          <Text className="text-2xl font-bold text-accent">
            €{animatedValues.netGain.toLocaleString()}/month
          </Text>
        </div>
      </div>

      <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
        <Text className="text-center mb-4">
          <strong>Based on your responses</strong>, your current {results.processName} process costs approximately €{animatedValues.cost.toLocaleString()} monthly.
          Automation could free up <strong>{animatedValues.hours} hours weekly</strong> for strategic growth.
        </Text>
        <Text className="text-center font-bold text-primary text-lg">
          Ready to explore automation opportunities?
        </Text>
      </div>

      <div className="text-center space-y-4">
        <Button size="lg" asChild>
          <Link href="/contact" className="flex items-center gap-2">
            Schedule Process Discovery - €1,500
            <ArrowRight className="h-4 w-4 text-blue-600 transition-colors duration-200 hover:text-blue-700" />
          </Link>
        </Button>
        <Text className="text-sm text-muted-foreground">
          *100% credited toward implementation
        </Text>
      </div>
    </div>
  )

  const renderQualified = () => (
    <div className="space-y-6">
      <div className="text-center space-y-4">
        <div className="flex justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <TrendingUp className="h-8 w-8 text-blue-600 transition-all duration-200" />
          </div>
        </div>

        <div>
          <Heading level="2" className="text-2xl text-primary mb-2">
            Strong Automation Potential
          </Heading>
          <Text className="text-lg">
            Your {results.processName} shows promising opportunities:
          </Text>
        </div>
      </div>

      <div className="space-y-4">
        <div className="bg-muted rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <Euro className="h-5 w-5 text-gray-700" />
            <Text className="font-medium">Current inefficiency cost:</Text>
          </div>
          <Text className="text-xl font-bold">
            €{animatedValues.cost.toLocaleString()} - €{Math.round(animatedValues.cost * 1.5).toLocaleString()} monthly
          </Text>
        </div>

        <div className="bg-success/5 border border-success/20 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="h-5 w-5 text-blue-600" />
            <Text className="font-medium">Potential savings:</Text>
          </div>
          <Text className="text-xl font-bold text-success">
            €{animatedValues.savings.toLocaleString()} - €{Math.round(animatedValues.savings * 1.3).toLocaleString()} monthly
          </Text>
        </div>

        <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <Clock className="h-5 w-5 text-gray-700" />
            <Text className="font-medium">Time freed up:</Text>
          </div>
          <Text className="text-xl font-bold text-primary">
            {animatedValues.hours} hours weekly
          </Text>
        </div>
      </div>

      <div className="bg-muted rounded-lg p-6 text-center">
        <Text className="mb-4">
          A few factors need clarification to calculate exact ROI. Let's discuss your specific situation.
        </Text>
      </div>

      <div className="text-center">
        <Button size="lg" asChild>
          <Link href="/contact" className="flex items-center gap-2">
            Book Free Consultation
            <ArrowRight className="h-4 w-4 text-blue-600 transition-colors duration-200 hover:text-blue-700" />
          </Link>
        </Button>
      </div>
    </div>
  )

  const renderNotReady = () => (
    <div className="space-y-6">
      <div className="text-center space-y-4">
        <div className="flex justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-warning/10">
            <Clock className="h-8 w-8 text-gray-700" />
          </div>
        </div>

        <div>
          <Heading level="2" className="text-2xl text-warning mb-2">
            Not Quite Ready Yet
          </Heading>
          <Text>
            Based on your responses, automation may not deliver sufficient ROI yet.
          </Text>
        </div>
      </div>

      <div className="bg-muted rounded-lg p-6">
        <Text className="font-medium mb-4">Automation works best when:</Text>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-blue-600" />
            <Text>Process occurs 100+ times monthly</Text>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-blue-600" />
            <Text>Takes 20+ team hours weekly</Text>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-blue-600" />
            <Text>Follows consistent steps</Text>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-blue-600" />
            <Text>Causes real business pain</Text>
          </div>
        </div>
      </div>

      <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
        <Text className="font-medium mb-3">Your next steps:</Text>
        <div className="space-y-2">
          <Text>1. Document your process</Text>
          <Text>2. Track time and volume for 30 days</Text>
          <Text>3. Identify consistency patterns</Text>
        </div>
      </div>

      <div className="text-center space-y-4">
        <Button size="lg" variant="outline" asChild>
          <Link href="/resources/process-optimization-guide" className="flex items-center gap-2">
            <Download className="h-4 w-4 text-gray-700" />
            Download Process Optimization Guide
          </Link>
        </Button>
        <Text className="text-sm text-muted-foreground">
          We'll check back in 3 months to reassess.
        </Text>
      </div>
    </div>
  )

  return (
    <div className="max-w-2xl mx-auto">
      {results.category === 'Highly Qualified' && renderHighlyQualified()}
      {results.category === 'Qualified' && renderQualified()}
      {results.category === 'Not Yet Ready' && renderNotReady()}
    </div>
  )
}
