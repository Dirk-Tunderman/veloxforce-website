"use client"

import { motion } from "framer-motion"
import { BarChart3, Target, Lightbulb } from "lucide-react"
import { Slider } from "@/components/ui/slider"
import { Text } from "@/components/ui/typography"
import { SliderConfig } from "@/types/audit-tool"

interface TimeSliderProps {
  config: SliderConfig
  value: number
  onChange: (value: number) => void
  showCalculation?: boolean
  executiveHourlyRate?: number
}

export function TimeSlider({
  config,
  value,
  onChange,
  showCalculation = false,
  executiveHourlyRate = 100
}: TimeSliderProps) {
  const handleSliderChange = (newValue: number[]) => {
    onChange(newValue[0])
  }

  const getTimeLabel = (hours: number): string => {
    if (hours === 0) return '0 hours'
    if (hours <= 2) return `${hours} hour${hours === 1 ? '' : 's'}`
    if (hours <= 5) return `${hours} hours`
    if (hours <= 10) return `${hours} hours`
    return `${hours}+ hours`
  }

  const getImpactColor = (hours: number): string => {
    if (hours === 0) return '#2563EB' // Blue - excellent
    if (hours <= 2) return '#1D4ED8' // Dark blue - good
    if (hours <= 5) return '#1E40AF' // Darker blue - concerning
    return '#1E3A8A' // Darkest blue - critical
  }

  const getImpactMessage = (hours: number): string => {
    if (hours === 0) return 'No time spent on repetitive tasks'
    if (hours <= 2) return 'Minimal time on operational tasks'
    if (hours <= 5) return 'Moderate time investment'
    if (hours <= 10) return 'Significant time investment'
    return 'High time investment in operations'
  }

  const calculateMonthlyCost = (hours: number): number => {
    return Math.round(hours * 4.33 * executiveHourlyRate) // 4.33 weeks per month
  }

  return (
    <div className="space-y-6">
      {/* Slider */}
      <div className="space-y-4">
        <Slider
          value={[value]}
          onValueChange={handleSliderChange}
          max={config.max || 20}
          min={config.min || 0}
          step={config.step || 1}
          className="w-full"
        />

        {/* Markers */}
        {config.markers && (
          <div className="flex justify-between text-xs text-muted-foreground">
            {config.markers.map((marker, index) => (
              <span key={marker}>
                {config.labels?.[index] || marker}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Current Value Display */}
      <motion.div
        className="text-center p-4 rounded-lg border mx-auto max-w-md"
        style={{
          borderColor: getImpactColor(value),
          backgroundColor: `${getImpactColor(value)}10`
        }}
        layout
      >
        <div className="text-2xl font-bold" style={{ color: getImpactColor(value) }}>
          {getTimeLabel(value)} per week
        </div>
        <Text className="text-sm text-muted-foreground mt-1">
          {getImpactMessage(value)}
        </Text>
      </motion.div>

      {/* Real-time Calculation */}
      {showCalculation && value > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-blue-50 border border-blue-200 rounded-lg p-4"
        >
          <div className="flex items-center gap-2 justify-center mb-2">
            <BarChart3 className="h-5 w-5 text-gray-700 transition-all duration-200" />
            <div className="text-lg font-semibold text-blue-800">
              That's {value} hours of strategic time worth €{calculateMonthlyCost(value).toLocaleString()}/month
            </div>
          </div>
          <div className="flex items-center gap-2 justify-center">
            <Target className="h-4 w-4 text-blue-600 transition-all duration-200" />
            <div className="text-sm text-blue-600">
              Time you could spend on growth initiatives instead
            </div>
          </div>
        </motion.div>
      )}

      {/* Identity Transformation Message */}
      {value > 5 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-blue-50 border border-blue-200 rounded-lg p-4"
        >
          <div className="flex items-start gap-2">
            <Lightbulb className="h-4 w-4 text-gray-700 transition-all duration-200 flex-shrink-0 mt-0.5" />
            <div className="text-sm text-blue-800">
              <strong>Strategic Insight:</strong> Successful leaders focus on growth, not operations.
              Automation could free up this time for strategic initiatives.
            </div>
          </div>
        </motion.div>
      )}
    </div>
  )
}
