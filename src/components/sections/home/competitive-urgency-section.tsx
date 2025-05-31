"use client"

import React from "react"
import { motion } from "framer-motion"
import { TrendingUp, Clock, AlertTriangle, Target } from "lucide-react"

import { Container } from "@/components/layout/container"
import { Heading, Text } from "@/components/ui/typography"

const competitorAdvantages = [
  {
    timeframe: "3 months ago",
    advantage: "Started automating invoice processing",
    impact: "Now processing 3x more orders with same team",
    icon: TrendingUp,
    color: "blue"
  },
  {
    timeframe: "2 months ago",
    advantage: "Implemented customer onboarding automation",
    impact: "Reduced onboarding time from 2 weeks to 48 hours",
    icon: Clock,
    color: "green"
  },
  {
    timeframe: "Today",
    advantage: "Scaling without hiring operational staff",
    impact: "Growing 40% faster while you manage manual processes",
    icon: Target,
    color: "purple"
  }
]

const urgencyStats = [
  { metric: "€2,400+", label: "Average weekly cost of delayed automation", period: "per process" },
  { metric: "3 months", label: "Typical competitive gap creation", period: "industry average" },
  { metric: "3x", label: "Speed advantage automated competitors gain", period: "documented" }
]

export function CompetitiveUrgencySection() {
  return (
    <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-8 border border-red-200">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-3 mb-4">
          <AlertTriangle className="h-8 w-8 text-red-600" />
          <Heading level="3" className="text-2xl font-bold text-red-800">
            While You Wait, Competitors Pull Ahead
          </Heading>
        </div>
        <Text className="text-red-700 font-medium">
          Every week costs €2,400+ in lost efficiency plus competitive positioning. The automation gap widens daily.
        </Text>
      </div>

      {/* Competitor Timeline */}
      <div className="space-y-6 mb-8">
        {competitorAdvantages.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="flex items-start gap-4 bg-white rounded-lg p-4 border border-red-200"
          >
            <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
              item.color === 'blue' ? 'bg-blue-100' :
              item.color === 'green' ? 'bg-green-100' : 'bg-purple-100'
            }`}>
              <item.icon className={`h-6 w-6 ${
                item.color === 'blue' ? 'text-blue-600' :
                item.color === 'green' ? 'text-green-600' : 'text-purple-600'
              }`} />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <Text className="font-bold text-gray-800">{item.timeframe}</Text>
                <div className="h-1 w-1 bg-gray-400 rounded-full"></div>
                <Text className="text-sm text-gray-600">{item.advantage}</Text>
              </div>
              <Text className="text-red-700 font-medium">{item.impact}</Text>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Urgency Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {urgencyStats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="text-center bg-white rounded-lg p-4 border border-red-200"
          >
            <Text className="text-2xl font-bold text-red-800 mb-1">{stat.metric}</Text>
            <Text className="text-sm font-medium text-gray-800 mb-1">{stat.label}</Text>
            <Text className="text-xs text-gray-600">{stat.period}</Text>
          </motion.div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center bg-white rounded-lg p-6 border border-red-200">
        <Text className="text-lg font-bold text-red-800 mb-2">
          The Gap Widens Every Day You Wait
        </Text>
        <Text className="text-gray-700 mb-4">
          Competitors who automated 6 months ago are scaling 40% faster without hiring. They're processing 3x more volume with the same team size.
        </Text>
        <Text className="text-sm font-medium text-red-700">
          Every week of delay costs €2,400+ and widens their competitive advantage. Don't let another quarter pass.
        </Text>
      </div>
    </div>
  )
}
