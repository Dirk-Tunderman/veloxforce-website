"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Info, CheckCircle } from "lucide-react"
import { Question, PREDEFINED_PROCESSES } from "@/types/audit-tool"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Heading, Text } from "@/components/ui/typography"
import { VolumeSlider } from "@/components/ui/volume-slider"
import { TimeSlider } from "@/components/ui/time-slider"

interface QuestionRendererProps {
  question: Question
  value: any
  onChange: (value: any) => void
  processName?: string
  error?: string
  // New props for enhanced functionality
  allAnswers?: Record<string, any>
  onRealTimeCalculation?: (calculation: any) => void
}

export function QuestionRenderer({
  question,
  value,
  onChange,
  processName,
  error,
  allAnswers,
  onRealTimeCalculation
}: QuestionRendererProps) {
  const [showPredefinedOptions, setShowPredefinedOptions] = useState(false)
  const [showFollowUp, setShowFollowUp] = useState(false)
  const [followUpText, setFollowUpText] = useState('')

  // Replace placeholders in title with actual values
  const title = processName
    ? question.title
        .replace(/\[PROCESS_NAME\]/g, processName)
        .replace(/\[PROCESS NAME\]/g, processName)
        .replace(/\[SELECTED_UNIT\]/g, allAnswers?.q2_processUnit || 'units')
    : question.title

  const subtitle = processName
    ? question.subtitle
        ?.replace(/\[PROCESS_NAME\]/g, processName)
        ?.replace(/\[PROCESS NAME\]/g, processName)
        ?.replace(/\[SELECTED_UNIT\]/g, allAnswers?.q2_processUnit || 'units')
    : question.subtitle

  const handleTextInputChange = (inputValue: string) => {
    onChange(inputValue)

    // Check for conditional logic on Q1
    if (question.id === 'q1_processDescription') {
      const lowerValue = inputValue.toLowerCase()
      if (lowerValue.includes('not sure') || lowerValue.includes('need help')) {
        setShowPredefinedOptions(true)
      } else {
        setShowPredefinedOptions(false)
      }
    }
  }

  const handlePredefinedSelection = (selectedProcess: string) => {
    onChange(selectedProcess)
    setShowPredefinedOptions(false)
  }

  const handleCheckboxChange = (optionValue: string, checked: boolean) => {
    const currentValues = Array.isArray(value) ? value : []

    if (checked) {
      // Check max selections limit
      if (question.maxSelections && currentValues.length >= question.maxSelections) {
        return // Don't add if at max
      }
      onChange([...currentValues, optionValue])
    } else {
      onChange(currentValues.filter((v: string) => v !== optionValue))
    }
  }

  return (
    <div className="space-y-8">
      <div className="space-y-6 text-center">
        <div className="flex items-start justify-center gap-3">
          <div className="flex-1 max-w-4xl">
            <Heading level="3" className="velox-text-h2 text-center text-blue-900 leading-relaxed">
              {title}
            </Heading>
          </div>
          {question.tooltip && (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-8 w-8 shrink-0 hover:bg-blue-50">
                    <Info className="h-5 w-5 text-gray-700 transition-all duration-200 hover:scale-110" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <Text className="velox-text-body max-w-xs">
                    {question.tooltip}
                  </Text>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}
        </div>

        {subtitle && (
          <Text className="velox-text-body text-center font-medium text-gray-700 max-w-3xl mx-auto">
            {subtitle}
          </Text>
        )}

        {question.description && (
          <Text className="velox-text-body text-center text-gray-600 max-w-3xl mx-auto">
            {question.description}
          </Text>
        )}

        {question.helpText && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 max-w-3xl mx-auto text-center">
            <Text className="velox-text-body text-blue-800 font-medium">
              {question.helpText}
            </Text>
          </div>
        )}

        {question.examples && (
          <div className="bg-gray-50 rounded-lg p-6 max-w-3xl mx-auto">
            <Text className="velox-text-body font-medium text-gray-800 mb-4 text-center">Examples:</Text>
            <div className="space-y-3">
              {question.examples.map((example, index) => (
                <div key={index} className="flex items-center justify-center gap-3">
                  <CheckCircle className="h-4 w-4 text-blue-600 transition-all duration-200 flex-shrink-0" />
                  <Text className="velox-text-body text-gray-700">{example}</Text>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Enhanced Input Section */}
      <div className="max-w-3xl mx-auto">
        {question.type === 'text' && (
          <div className="space-y-4">
            {/* Use textarea for first question to allow longer answers */}
            {question.id === 'q1_processDescription' || question.id === 'q1_processName' ? (
              <Textarea
                value={value || ''}
                onChange={(e) => handleTextInputChange(e.target.value)}
                placeholder={question.placeholder || "Describe your business process in detail..."}
                maxLength={question.maxLength}
                className={`min-h-[140px] text-base p-4 border-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 ${error ? 'border-red-500' : 'border-gray-300'}`}
                rows={6}
              />
            ) : (
              <Input
                value={value || ''}
                onChange={(e) => handleTextInputChange(e.target.value)}
                placeholder={question.placeholder || "Enter your answer..."}
                maxLength={question.maxLength}
                className={`text-base p-4 h-12 border-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 ${error ? 'border-red-500' : 'border-gray-300'}`}
              />
            )}

            {question.maxLength && (
              <Text className="velox-text-body text-sm text-gray-500 text-right">
                {(value || '').length}/{question.maxLength} characters
              </Text>
            )}

          {/* Follow-up text field */}
          <AnimatePresence>
            {question.followUpText && value && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="space-y-2"
              >
                <Label className="text-sm font-medium">
                  {question.followUpPrompt || 'Tell us more (optional):'}
                </Label>
                <Textarea
                  value={followUpText}
                  onChange={(e) => setFollowUpText(e.target.value)}
                  placeholder="Additional details..."
                  maxLength={question.followUpMaxLength || 200}
                  rows={3}
                />
                {question.followUpMaxLength && (
                  <Text className="text-xs text-muted-foreground text-right">
                    {followUpText.length}/{question.followUpMaxLength} characters
                  </Text>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Conditional predefined options for Q1 */}
          {question.id === 'q1_processDescription' && showPredefinedOptions && (
            <div className="space-y-3">
              <Text className="font-medium">Or choose from common processes:</Text>
              <div className="grid grid-cols-1 gap-2">
                {PREDEFINED_PROCESSES.map((process) => (
                  <Button
                    key={process}
                    variant="outline"
                    className="justify-start h-auto p-3 text-left"
                    onClick={() => handlePredefinedSelection(process)}
                  >
                    {process}
                  </Button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

        {question.type === 'radio' && question.options && (
          <RadioGroup value={value || ''} onValueChange={onChange}>
            <div className="space-y-4">
              {question.options.map((option) => (
                <div
                  key={option.value}
                  className={`flex items-center space-x-4 p-4 border-2 rounded-lg transition-all duration-200 cursor-pointer ${
                    value === option.value
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50/50'
                  }`}
                  onClick={() => onChange(option.value)}
                >
                  <RadioGroupItem value={option.value} id={option.value} className="w-5 h-5 pointer-events-none" />
                  <Label
                    htmlFor={option.value}
                    className="velox-text-body font-medium flex-1 pointer-events-none"
                  >
                    {option.label}
                  </Label>
                </div>
              ))}
            </div>
          </RadioGroup>
        )}

        {question.type === 'checkbox' && question.options && (
          <div className="space-y-4">
            {question.maxSelections && (
              <div className="text-center">
                <Text className="velox-text-body text-blue-700 font-medium bg-blue-50 px-4 py-2 rounded-lg inline-block">
                  Select up to {question.maxSelections} options
                </Text>
              </div>
            )}
            {question.options.map((option) => {
              const currentValues = Array.isArray(value) ? value : []
              const isChecked = currentValues.includes(option.value)
              const isDisabled = question.maxSelections &&
                currentValues.length >= question.maxSelections &&
                !isChecked

              return (
                <div
                  key={option.value}
                  className={`flex items-center space-x-4 p-4 border-2 rounded-lg transition-all duration-200 cursor-pointer ${
                    isChecked
                      ? 'border-blue-500 bg-blue-50'
                      : isDisabled
                      ? 'border-gray-200 bg-gray-50 cursor-not-allowed'
                      : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50/50'
                  }`}
                  onClick={() => {
                    if (!isDisabled) {
                      handleCheckboxChange(option.value, !isChecked)
                    }
                  }}
                >
                  <Checkbox
                    id={option.value}
                    checked={isChecked}
                    disabled={isDisabled}
                    onCheckedChange={(checked) =>
                      handleCheckboxChange(option.value, checked as boolean)
                    }
                    className="w-5 h-5 !rounded-none pointer-events-none"
                  />
                  <Label
                    htmlFor={option.value}
                    className={`velox-text-body font-medium flex-1 pointer-events-none ${
                      isDisabled ? 'text-gray-400' : ''
                    }`}
                  >
                    {option.label}
                  </Label>
                </div>
              )
            })}
          </div>
        )}

      {/* New Slider Question Types */}
      {question.type === 'slider' && question.sliderConfig && (
        <div className="space-y-4">
          {question.id === 'q2_volume' && question.sliderConfig.timeframes ? (
            <VolumeSlider
              config={question.sliderConfig}
              value={value || { amount: 50, timeframe: 'monthly' }}
              onChange={onChange}
              unitLabel={allAnswers?.q2_processUnit || 'units'}
            />
          ) : (
            <TimeSlider
              config={question.sliderConfig}
              value={value || 0}
              onChange={onChange}
              showCalculation={question.identityTransformation}
              executiveHourlyRate={100}
            />
          )}

          {/* Conditional Message */}
          {question.conditionalMessage && value > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-orange-50 border border-orange-200 rounded-lg p-4"
            >
              <Text className="text-sm text-orange-800">
                {question.conditionalMessage.message
                  .replace('[X]', value.toString())
                  .replace('[Amount]', `€${(value * 4.33 * 100).toLocaleString()}`)}
              </Text>
            </motion.div>
          )}
        </div>
      )}

      {/* Real-time Calculation Display */}
      {question.realTimeCalculation && question.calculationMessage && value && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center"
        >
          <Text className="text-blue-800 font-medium">
            {question.calculationMessage
              .replace('[X]', allAnswers?.q3_timeInvestment || '0')
              .replace('[Amount]', '€2,500')} {/* This would be calculated based on actual values */}
          </Text>
        </motion.div>
      )}

      {/* Dynamic Message for Multiple Selections */}
      {question.dynamicMessage && Array.isArray(value) && value.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-center"
        >
          <Text className="text-yellow-800">
            {question.dynamicMessage
              .replace('[X]', value.length.toString())
              .replace('[Y]', Math.ceil(value.length * 0.8).toString())}
          </Text>
        </motion.div>
      )}

        {error && (
          <div className="text-center mt-4">
            <Text className="velox-text-body text-red-600 font-medium bg-red-50 px-4 py-2 rounded-lg inline-block">
              {error}
            </Text>
          </div>
        )}
      </div>
    </div>
  )
}
