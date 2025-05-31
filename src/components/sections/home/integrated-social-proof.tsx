"use client"

import React from "react"
import { motion } from "framer-motion"
import { Quote, Star, CheckCircle } from "lucide-react"

import { Text } from "@/components/ui/typography"

interface SocialProofProps {
  type: "inline" | "sidebar" | "callout"
  variant: "time" | "revenue" | "team" | "process"
  size?: "sm" | "md" | "lg"
}

const proofData = {
  time: {
    quote: "Like Sarah from Femride, you'll reclaim 20+ hours weekly for strategic thinking.",
    author: "Sarah M., CEO Femride",
    metric: "20+ hours",
    context: "saved weekly",
    fullQuote: "I went from working 70-hour weeks managing operations to focusing purely on growth strategy. The transformation happened faster than I expected."
  },
  revenue: {
    quote: "Like Marcus from WPH, you'll see revenue increases within 90 days.",
    author: "Marcus K., Director WPH", 
    metric: "€450K",
    context: "additional revenue",
    fullQuote: "We were leaving money on the table with every sale. Now our pricing is optimized and every deal maximizes profit."
  },
  team: {
    quote: "Like Jennifer from Wilsch, your team will focus on growth instead of paperwork.",
    author: "Jennifer L., Operations Manager Wilsch",
    metric: "15+ hours",
    context: "team time saved weekly",
    fullQuote: "My assistant went from drowning in documentation to leading strategic projects. The whole team dynamic changed."
  },
  process: {
    quote: "Like David from LogiFlow, you'll process 3x more orders with the same team.",
    author: "David R., Founder LogiFlow",
    metric: "3x faster",
    context: "order processing",
    fullQuote: "We handle triple the volume without hiring anyone. Our competitors can't figure out how we're scaling so efficiently."
  }
}

export function IntegratedSocialProof({ type, variant, size = "md" }: SocialProofProps) {
  const proof = proofData[variant]
  
  if (type === "inline") {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="inline-flex items-center gap-2 text-blue-700 font-medium"
      >
        <Text className={size === "sm" ? "text-sm" : "text-base"}>
          {proof.quote}
        </Text>
      </motion.div>
    )
  }

  if (type === "sidebar") {
    return (
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg"
      >
        <div className="flex items-start gap-3">
          <Quote className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
          <div>
            <Text className="text-sm italic text-blue-800 mb-2">
              "{proof.fullQuote}"
            </Text>
            <div className="flex items-center gap-2">
              <Text className="text-xs font-medium text-blue-700">
                {proof.author}
              </Text>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    )
  }

  if (type === "callout") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 border border-green-200"
      >
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
            <CheckCircle className="h-6 w-6 text-green-600" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              <Text className="text-2xl font-bold text-green-800">{proof.metric}</Text>
              <Text className="text-sm text-green-700">{proof.context}</Text>
            </div>
            <Text className="italic text-gray-700 mb-3">
              "{proof.fullQuote}"
            </Text>
            <Text className="text-sm font-medium text-gray-600">
              — {proof.author}
            </Text>
          </div>
        </div>
      </motion.div>
    )
  }

  return null
}

// Pre-configured proof components for easy use
export function TimeRecoveryProof({ type = "inline", size = "md" }: { type?: SocialProofProps["type"], size?: SocialProofProps["size"] }) {
  return <IntegratedSocialProof type={type} variant="time" size={size} />
}

export function RevenueGrowthProof({ type = "inline", size = "md" }: { type?: SocialProofProps["type"], size?: SocialProofProps["size"] }) {
  return <IntegratedSocialProof type={type} variant="revenue" size={size} />
}

export function TeamLiberationProof({ type = "inline", size = "md" }: { type?: SocialProofProps["type"], size?: SocialProofProps["size"] }) {
  return <IntegratedSocialProof type={type} variant="team" size={size} />
}

export function ProcessOptimizationProof({ type = "inline", size = "md" }: { type?: SocialProofProps["type"], size?: SocialProofProps["size"] }) {
  return <IntegratedSocialProof type={type} variant="process" size={size} />
}
