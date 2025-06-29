"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { Text } from "@/components/ui/typography"
import { SliderConfig } from "@/types/audit-tool"

interface UnifiedSliderProps {
  config: SliderConfig
  value: any
  onChange: (value: any) => void
  unitLabel?: string
  showCalculation?: boolean
  calculationMessage?: string
  benchmark?: string
}

export function UnifiedSlider({
  config,
  value,
  onChange,
  unitLabel = "units",
  showCalculation = false,
  calculationMessage,
  benchmark
}: UnifiedSliderProps) {
  // Determine if this is a volume slider with timeframes
  const isVolumeSlider = !!config.timeframes && !!config.ranges
  
  // Simple value initialization - use provided value or minimum
  const getInitialValue = () => {
    if (isVolumeSlider) {
      return {
        amount: value?.amount || config.ranges?.monthly?.min || 50,
        timeframe: value?.timeframe || 'monthly'
      }
    } else {
      return value !== undefined && value !== null ? value : (config.min || 0)
    }
  }

  const [currentValue, setCurrentValue] = useState(getInitialValue)

  // Sync with external value changes
  useEffect(() => {
    if (isVolumeSlider) {
      if (value && typeof value === 'object') {
        setCurrentValue({
          amount: value.amount || config.ranges?.monthly?.min || 50,
          timeframe: value.timeframe || 'monthly'
        })
      }
    } else {
      const newValue = value !== undefined && value !== null ? value : (config.min || 0)
      setCurrentValue(newValue)
    }
  }, [value, config, isVolumeSlider])

  // Volume slider logic
  if (isVolumeSlider && config.timeframes && config.ranges) {
    const selectedTimeframe = currentValue.timeframe || 'monthly'
    const currentRange = config.ranges[selectedTimeframe as keyof typeof config.ranges]
    
    if (!currentRange) return null

    const handleTimeframeChange = (timeframe: string) => {
      const convertedValue = convertBetweenTimeframes(currentValue.amount, currentValue.timeframe, timeframe)
      const newValue = { amount: convertedValue, timeframe }
      setCurrentValue(newValue)
      onChange(newValue)
    }

    const handleSliderChange = (newValue: number[]) => {
      const updatedValue = { ...currentValue, amount: newValue[0] }
      setCurrentValue(updatedValue)
      onChange(updatedValue)
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

    return (
      <div className="space-y-6">
        {/* Timeframe Selection */}
        <div className="flex justify-center">
          <div className="flex bg-muted rounded-lg p-1">
            {config.timeframes.map((timeframe) => (
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
            value={[currentValue.amount]}
            onValueChange={handleSliderChange}
            max={currentRange.max}
            min={currentRange.min}
            step={config.step || 1}
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
          className="text-center p-4 rounded-lg border border-blue-200 bg-blue-50"
          layout
        >
          <div className="text-2xl font-bold text-blue-600">
            {currentValue.amount} {unitLabel} per {selectedTimeframe.slice(0, -2)}
          </div>
        </motion.div>

        {/* Monthly equivalent for non-monthly timeframes */}
        {selectedTimeframe !== 'monthly' && (
          <div className="text-center text-sm text-muted-foreground">
            Monthly equivalent: ~{convertBetweenTimeframes(currentValue.amount, selectedTimeframe, 'monthly')} {unitLabel}
          </div>
        )}
      </div>
    )
  }

  // Regular slider logic
  const handleSliderChange = (newValue: number[]) => {
    setCurrentValue(newValue[0])
    onChange(newValue[0])
  }

  const getDisplayUnit = () => {
    if (config.unit === 'minutes') return 'minutes'
    if (config.unit === 'hours') return 'hours'
    if (config.unit) return config.unit
    return unitLabel
  }

  return (
    <div className="space-y-6">
      {/* Benchmark */}
      {benchmark && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
          <Text className="text-blue-800 font-medium">
            {benchmark}
          </Text>
        </div>
      )}

      {/* Slider */}
      <div className="space-y-4">
        <Slider
          value={[currentValue]}
          onValueChange={handleSliderChange}
          max={config.max || 100}
          min={config.min || 0}
          step={config.step || 1}
          className="w-full"
        />

        {/* Markers */}
        {config.markers && (
          <div className="flex justify-between text-xs text-muted-foreground">
            {config.markers.map((marker) => (
              <span key={marker}>{marker}</span>
            ))}
          </div>
        )}
      </div>

      {/* Current Value Display */}
      <motion.div
        className="text-center p-4 rounded-lg border border-blue-200 bg-blue-50 mx-auto max-w-md"
        layout
      >
        <div className="text-2xl font-bold text-blue-600">
          {currentValue} {getDisplayUnit()}
        </div>
      </motion.div>

      {/* Real-time Calculation */}
      {showCalculation && calculationMessage && currentValue > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center"
        >
          <Text className="text-blue-800 font-medium">
            {calculationMessage.replace('[X]', currentValue.toString())}
          </Text>
        </motion.div>
      )}
    </div>
  )
}
