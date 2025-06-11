"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { Text } from "@/components/ui/typography"
import { TrendingUp, Clock, Users, Target } from "lucide-react"
import { SliderConfig } from "@/types/audit-tool"

interface CustomerServiceVolumeSliderProps {
  config: SliderConfig
  value: { amount: number; timeframe: string }
  onChange: (value: { amount: number; timeframe: string }) => void
  unitLabel?: string
}

export function CustomerServiceVolumeSlider({ 
  config, 
  value, 
  onChange, 
  unitLabel = "inquiries" 
}: CustomerServiceVolumeSliderProps) {
  const [selectedTimeframe, setSelectedTimeframe] = useState(value.timeframe || 'monthly')
  const [sliderValue, setSliderValue] = useState([value.amount || 50])

  const currentRange = config.ranges?.[selectedTimeframe as keyof typeof config.ranges]
  if (!currentRange) return null

  const handleTimeframeChange = (timeframe: string) => {
    setSelectedTimeframe(timeframe)
    const convertedValue = convertBetweenTimeframes(sliderValue[0], value.timeframe, timeframe)
    setSliderValue([convertedValue])
    onChange({ amount: convertedValue, timeframe })
  }

  const handleSliderChange = (newValue: number[]) => {
    setSliderValue(newValue)
    onChange({ amount: newValue[0], timeframe: selectedTimeframe })
  }

  const convertBetweenTimeframes = (amount: number, from: string, to: string): number => {
    let dailyAmount = amount
    if (from === 'weekly') dailyAmount = amount / 7
    if (from === 'monthly') dailyAmount = amount / 30

    if (to === 'daily') return Math.round(dailyAmount)
    if (to === 'weekly') return Math.round(dailyAmount * 7)
    if (to === 'monthly') return Math.round(dailyAmount * 30)
    
    return amount
  }

  const getVolumeInsights = (amount: number, timeframe: string) => {
    const monthlyEquivalent = convertBetweenTimeframes(amount, timeframe, 'monthly')
    const avgResponseTime = 20 // Assume 20 minutes average
    const monthlyHours = (monthlyEquivalent * avgResponseTime) / 60
    const monthlyCost = monthlyHours * 60 // €60/hour customer service rate

    if (monthlyEquivalent < 50) {
      return {
        level: 'Low Volume',
        color: '#1E40AF', // Blue
        insight: 'Consider part-time support or shared resources',
        automationPotential: 'Limited ROI for automation',
        staffingNeed: '0.1-0.3 FTE',
        costImpact: monthlyCost
      }
    } else if (monthlyEquivalent < 200) {
      return {
        level: 'Medium Volume',
        color: '#1D4ED8', // Darker blue  
        insight: 'Moderate automation opportunities available',
        automationPotential: 'Good ROI for FAQ automation',
        staffingNeed: '0.5-1.0 FTE',
        costImpact: monthlyCost
      }
    } else {
      return {
        level: 'High Volume',
        color: '#2563EB', // Blue emphasis
        insight: 'Excellent automation candidate with strong ROI',
        automationPotential: 'High ROI for comprehensive automation',
        staffingNeed: '1.5+ FTE',
        costImpact: monthlyCost
      }
    }
  }

  const insights = getVolumeInsights(sliderValue[0], selectedTimeframe)
  const monthlyEquivalent = convertBetweenTimeframes(sliderValue[0], selectedTimeframe, 'monthly')

  return (
    <div className="space-y-6">
      {/* Timeframe Selection */}
      <div className="flex justify-center">
        <div className="flex bg-gray-50 rounded-lg p-1">
          {config.timeframes?.map((timeframe) => (
            <Button
              key={timeframe}
              variant={selectedTimeframe === timeframe ? "default" : "ghost"}
              size="sm"
              onClick={() => handleTimeframeChange(timeframe)}
              className="capitalize"
            >
              {timeframe}
            </Button>
          ))}
        </div>
      </div>

      {/* Slider */}
      <div className="space-y-4">
        <Slider
          value={sliderValue}
          onValueChange={handleSliderChange}
          max={currentRange.max}
          min={currentRange.min}
          step={1}
          className="w-full"
        />

        {/* Markers */}
        <div className="flex justify-between text-xs text-gray-600">
          {currentRange.markers.map((marker) => (
            <span key={marker}>{marker}</span>
          ))}
        </div>
      </div>

      {/* Current Value Display */}
      <motion.div
        className="text-center p-6 rounded-lg border-2"
        style={{ 
          borderColor: insights.color,
          backgroundColor: `${insights.color}10`
        }}
        layout
        animate={{ borderColor: insights.color }}
        transition={{ duration: 0.3 }}
      >
        <motion.div 
          className="text-3xl font-bold mb-2" 
          style={{ color: insights.color }}
          animate={{ color: insights.color }}
        >
          {sliderValue[0]} {unitLabel} per {selectedTimeframe.slice(0, -2)}
        </motion.div>
        <Text className="text-lg font-medium text-gray-800 mb-1">
          {insights.level}
        </Text>
        <Text className="text-sm text-gray-600">
          Monthly equivalent: ~{monthlyEquivalent} {unitLabel}
        </Text>
      </motion.div>

      {/* Insights Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Staffing Analysis */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-blue-50 border border-blue-200 rounded-lg p-4"
        >
          <div className="flex items-center gap-2 mb-2">
            <Users className="h-5 w-5 text-blue-600" />
            <Text className="font-medium text-blue-800">Staffing Need</Text>
          </div>
          <Text className="text-sm text-blue-700">
            {insights.staffingNeed}
          </Text>
          <Text className="text-xs text-blue-600 mt-1">
            ~€{Math.round(insights.costImpact).toLocaleString()}/month cost
          </Text>
        </motion.div>

        {/* Automation Potential */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-blue-50 border border-blue-200 rounded-lg p-4"
        >
          <div className="flex items-center gap-2 mb-2">
            <Target className="h-5 w-5 text-blue-600" />
            <Text className="font-medium text-blue-800">Automation ROI</Text>
          </div>
          <Text className="text-sm text-blue-700">
            {insights.automationPotential}
          </Text>
        </motion.div>
      </div>

      {/* Strategic Insight */}
      {monthlyEquivalent > 100 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-blue-50 border border-blue-200 rounded-lg p-4"
        >
          <div className="flex items-start gap-2">
            <TrendingUp className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
            <div className="text-sm text-blue-800">
              <strong>Strategic Opportunity:</strong> {insights.insight}. 
              Automation could handle 60-80% of routine inquiries, reducing costs by 
              €{Math.round(insights.costImpact * 0.7).toLocaleString()}/month.
            </div>
          </div>
        </motion.div>
      )}

      {/* Efficiency Benchmark */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center"
      >
        <div className="flex items-center justify-center gap-2 mb-2">
          <Clock className="h-4 w-4 text-gray-700" />
          <Text className="text-sm font-medium text-gray-800">
            Efficiency Benchmark
          </Text>
        </div>
        <Text className="text-xs text-gray-600">
          Industry average: 15-25 minutes per inquiry | Your target: &lt;20 minutes
        </Text>
      </motion.div>
    </div>
  )
}