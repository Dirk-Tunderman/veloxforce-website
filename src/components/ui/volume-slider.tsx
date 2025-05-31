"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { Text } from "@/components/ui/typography"
import { SliderConfig } from "@/types/audit-tool"

interface VolumeSliderProps {
  config: SliderConfig
  value: { amount: number; timeframe: string }
  onChange: (value: { amount: number; timeframe: string }) => void
  unitLabel?: string
}

export function VolumeSlider({ config, value, onChange, unitLabel = "units" }: VolumeSliderProps) {
  const [selectedTimeframe, setSelectedTimeframe] = useState(value.timeframe || 'monthly')
  const [sliderValue, setSliderValue] = useState([value.amount || 50])

  const currentRange = config.ranges?.[selectedTimeframe as keyof typeof config.ranges]
  if (!currentRange) return null

  const handleTimeframeChange = (timeframe: string) => {
    setSelectedTimeframe(timeframe)
    // Convert current value to new timeframe
    const convertedValue = convertBetweenTimeframes(sliderValue[0], value.timeframe, timeframe)
    setSliderValue([convertedValue])
    onChange({ amount: convertedValue, timeframe })
  }

  const handleSliderChange = (newValue: number[]) => {
    setSliderValue(newValue)
    onChange({ amount: newValue[0], timeframe: selectedTimeframe })
  }

  const convertBetweenTimeframes = (amount: number, from: string, to: string): number => {
    // Convert to daily first
    let dailyAmount = amount
    if (from === 'weekly') dailyAmount = amount / 7
    if (from === 'monthly') dailyAmount = amount / 30

    // Convert from daily to target
    if (to === 'daily') return Math.round(dailyAmount)
    if (to === 'weekly') return Math.round(dailyAmount * 7)
    if (to === 'monthly') return Math.round(dailyAmount * 30)
    
    return amount
  }

  const getVolumeColor = (amount: number, timeframe: string): string => {
    const monthlyEquivalent = convertBetweenTimeframes(amount, timeframe, 'monthly')
    if (monthlyEquivalent < 50) return config.colors?.low || '#EF4444'
    if (monthlyEquivalent < 100) return config.colors?.medium || '#F59E0B'
    return config.colors?.high || '#10B981'
  }

  const getVolumeLabel = (amount: number, timeframe: string): string => {
    const monthlyEquivalent = convertBetweenTimeframes(amount, timeframe, 'monthly')
    if (monthlyEquivalent < 50) return 'Low Volume'
    if (monthlyEquivalent < 100) return 'Medium Volume'
    return 'High Volume - Great for Automation!'
  }

  return (
    <div className="space-y-6">
      {/* Timeframe Selection */}
      <div className="flex justify-center">
        <div className="flex bg-muted rounded-lg p-1">
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
        <div className="flex justify-between text-xs text-muted-foreground">
          {currentRange.markers.map((marker) => (
            <span key={marker}>{marker}</span>
          ))}
        </div>
      </div>

      {/* Current Value Display */}
      <motion.div
        className="text-center p-4 rounded-lg border"
        style={{ 
          borderColor: getVolumeColor(sliderValue[0], selectedTimeframe),
          backgroundColor: `${getVolumeColor(sliderValue[0], selectedTimeframe)}10`
        }}
        layout
      >
        <div className="text-2xl font-bold" style={{ color: getVolumeColor(sliderValue[0], selectedTimeframe) }}>
          {sliderValue[0]} {unitLabel} per {selectedTimeframe.slice(0, -2)}
        </div>
        <Text className="text-sm text-muted-foreground mt-1">
          {getVolumeLabel(sliderValue[0], selectedTimeframe)}
        </Text>
      </motion.div>

      {/* Real-time Calculation */}
      <div className="text-center text-sm text-muted-foreground">
        Monthly equivalent: ~{convertBetweenTimeframes(sliderValue[0], selectedTimeframe, 'monthly')} {unitLabel}
      </div>
    </div>
  )
}

function convertToDaily(amount: number, timeframe: string): number {
  switch (timeframe) {
    case 'daily': return amount
    case 'weekly': return amount / 7
    case 'monthly': return amount / 30
    default: return amount
  }
}

function convertFromDaily(dailyAmount: number, timeframe: string): number {
  switch (timeframe) {
    case 'daily': return dailyAmount
    case 'weekly': return dailyAmount * 7
    case 'monthly': return dailyAmount * 30
    default: return dailyAmount
  }
}
