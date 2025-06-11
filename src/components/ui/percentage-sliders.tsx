"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Slider } from "@/components/ui/slider"
import { Text } from "@/components/ui/typography"
import { CheckCircle2, AlertTriangle } from "lucide-react"

interface Category {
  id: string
  label: string
  description?: string
}

interface PercentageSlidersProps {
  categories: Category[]
  value: Record<string, number>
  onChange: (value: Record<string, number>) => void
  mustTotal100?: boolean
  realTimeCalculation?: boolean
  calculationMessage?: string
}

export function PercentageSliders({
  categories,
  value,
  onChange,
  mustTotal100 = true,
  realTimeCalculation = false,
  calculationMessage
}: PercentageSlidersProps) {
  const [percentages, setPercentages] = useState<Record<string, number>>(
    categories.reduce((acc, cat) => ({
      ...acc,
      [cat.id]: value[cat.id] || Math.floor(100 / categories.length)
    }), {})
  )

  const total = Object.values(percentages).reduce((sum, val) => sum + val, 0)
  const isValid = !mustTotal100 || Math.abs(total - 100) < 1

  // Find the top category for calculation message
  const topCategory = categories.reduce((top, cat) => 
    percentages[cat.id] > percentages[top.id] ? cat : top
  )
  const topPercentage = percentages[topCategory.id]

  useEffect(() => {
    if (JSON.stringify(percentages) !== JSON.stringify(value)) {
      onChange(percentages)
    }
  }, [percentages, onChange, value])

  const handleSliderChange = (categoryId: string, newValue: number[]) => {
    const newPercentages = { ...percentages, [categoryId]: newValue[0] }
    setPercentages(newPercentages)
  }

  const formatCalculationMessage = (message: string, topCat: Category, topPct: number): string => {
    return message
      .replace('[TOP_CATEGORY]', topCat.label)
      .replace('[TOP_PERCENTAGE]', topPct.toString())
  }

  return (
    <div className="space-y-6">
      <div className="space-y-6">
        {categories.map((category) => (
          <motion.div 
            key={category.id} 
            className="space-y-3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: categories.indexOf(category) * 0.1 }}
          >
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <Text className="font-medium text-gray-800">{category.label}</Text>
                {category.description && (
                  <Text className="text-sm text-gray-600 mt-1">{category.description}</Text>
                )}
              </div>
              <motion.div 
                className="ml-4 text-right"
                animate={{ 
                  scale: percentages[category.id] === topPercentage ? 1.1 : 1,
                  color: percentages[category.id] === topPercentage ? '#2563EB' : '#374151'
                }}
                transition={{ duration: 0.2 }}
              >
                <Text className="text-lg font-bold">
                  {percentages[category.id]}%
                </Text>
              </motion.div>
            </div>
            
            <Slider
              value={[percentages[category.id]]}
              onValueChange={(value) => handleSliderChange(category.id, value)}
              max={100}
              min={0}
              step={1}
              className="w-full"
            />
            
            {/* Visual bar indicator */}
            <div className="w-full bg-gray-200 rounded-full h-2">
              <motion.div
                className="bg-blue-600 h-2 rounded-full"
                style={{ width: `${percentages[category.id]}%` }}
                animate={{ width: `${percentages[category.id]}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Total Validation */}
      <motion.div
        className={`p-4 rounded-lg border text-center transition-all duration-300 ${
          isValid 
            ? 'border-blue-200 bg-blue-50' 
            : 'border-blue-300 bg-blue-100'
        }`}
        animate={{ 
          scale: isValid ? 1 : 1.02,
          borderColor: isValid ? '#DBEAFE' : '#93C5FD'
        }}
        transition={{ duration: 0.2 }}
      >
        <div className="flex items-center justify-center gap-2">
          {isValid ? (
            <CheckCircle2 className="h-5 w-5 text-blue-600 transition-all duration-200" />
          ) : (
            <AlertTriangle className="h-5 w-5 text-gray-700 transition-all duration-200" />
          )}
          <Text className={`font-medium ${
            isValid ? 'text-blue-800' : 'text-blue-900'
          }`}>
            Total: {total.toFixed(0)}%
            {mustTotal100 && !isValid && ' (Must equal 100%)'}
            {isValid && mustTotal100 && ' ✓'}
          </Text>
        </div>
      </motion.div>

      {/* Real-time Calculation Display */}
      {realTimeCalculation && calculationMessage && isValid && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-blue-50 border border-blue-200 rounded-lg p-4"
        >
          <div className="flex items-center gap-2 justify-center">
            <CheckCircle2 className="h-5 w-5 text-blue-600 transition-all duration-200" />
            <Text className="text-blue-800 font-medium text-center">
              {formatCalculationMessage(calculationMessage, topCategory, topPercentage)}
            </Text>
          </div>
        </motion.div>
      )}

      {/* Strategic Insight for High Concentration */}
      {isValid && topPercentage > 60 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-blue-50 border border-blue-200 rounded-lg p-4"
        >
          <div className="flex items-start gap-2">
            <CheckCircle2 className="h-4 w-4 text-blue-600 transition-all duration-200 flex-shrink-0 mt-0.5" />
            <div className="text-sm text-blue-800">
              <strong>Automation Opportunity:</strong> {topPercentage}% concentration in {topCategory.label.toLowerCase()} 
              suggests high automation potential with significant ROI.
            </div>
          </div>
        </motion.div>
      )}
    </div>
  )
}