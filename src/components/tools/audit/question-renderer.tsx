"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Info, 
  CheckCircle, 
  Mail, 
  Phone, 
  MessageSquare, 
  FileText, 
  Share2, 
  MessageCircle, 
  Users, 
  Building,
  Gauge,
  BarChart3,
  TrendingUp,
  BarChart,
  Zap,
  Clock,
  Timer,
  Calendar,
  AlertTriangle,
  Target,
  PieChart,
  TrendingDown,
  Shuffle,
  Lightbulb,
  Building2,
  MoreHorizontal,
  Settings,
  Megaphone,
  Headphones,
  Calculator,
  Package,
  Truck,
  Shield,
  ShoppingCart,
  Wrench,
  FileCheck,
  Search
} from "lucide-react"
import { Question, PREDEFINED_PROCESSES } from "@/types/audit-tool"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Heading, Text } from "@/components/ui/typography"
import { VolumeSlider } from "@/components/ui/volume-slider"
import { TimeSlider } from "@/components/ui/time-slider"
import { Slider } from "@/components/ui/slider"

// Icon resolver for visual grid questions
const getIconComponent = (iconName: string) => {
  const iconMap: Record<string, any> = {
    Mail,
    Phone,
    MessageSquare,
    FileText,
    Share2,
    MessageCircle,
    Users,
    Building,
    Building2,
    Gauge,
    BarChart3,
    TrendingUp,
    BarChart,
    Zap,
    Clock,
    Timer,
    Calendar,
    AlertTriangle,
    Target,
    PieChart,
    TrendingDown,
    Shuffle,
    Lightbulb,
    MoreHorizontal,
    Settings,
    Megaphone,
    Headphones,
    Calculator,
    Package,
    Truck,
    Shield,
    ShoppingCart,
    Wrench,
    FileCheck,
    Search
  }
  
  return iconMap[iconName] || Info
}

// Color system for visual grid options (90/10 rule: 90% gray, 10% blue)
const getColorClasses = (color: string, isSelected: boolean) => {
  const colorMap = {
    blue: isSelected 
      ? 'border-blue-500 bg-blue-50 shadow-lg transform scale-105' 
      : 'border-blue-200 hover:border-blue-300 hover:bg-blue-50/50',
    gray: isSelected 
      ? 'border-blue-500 bg-blue-50 shadow-lg transform scale-105' 
      : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50/50'
  }
  return colorMap[color as keyof typeof colorMap] || colorMap.gray
}

// Get icon color based on selection and 90/10 color rule
const getIconColor = (color: string, isSelected: boolean) => {
  if (isSelected) {
    return 'text-blue-600' // Always blue when selected
  }
  return color === 'blue' ? 'text-blue-600' : 'text-gray-700'
}

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

  // Validation functions for contact form fields
  const validateField = (field: any, value: string): boolean => {
    if (!field.required && !value) return true
    if (field.required && !value) return false
    
    switch (field.type) {
      case 'email':
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
      case 'tel':
        return /^[\+]?[0-9\s\-\(\)]{8,20}$/.test(value) || !value // Allow empty for optional phone
      case 'url':
        return /^https?:\/\/.+\..+/.test(value) || !value // Allow empty for optional website
      default:
        return value.length >= 2
    }
  }

  const getFieldError = (field: any, value: string): string => {
    if (field.required && !value) return `${field.label} is required`
    
    switch (field.type) {
      case 'email':
        return 'Please enter a valid email address with @ symbol'
      case 'tel':
        return 'Please enter a valid phone number'
      case 'url':
        return 'Please enter a valid website URL (starting with http:// or https://)'
      default:
        return `${field.label} must be at least 2 characters`
    }
  }

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

        {question.subtext && (
          <Text className="text-sm text-gray-500 italic text-center max-w-3xl mx-auto">
            {question.subtext}
          </Text>
        )}

        {question.benchmark && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center max-w-3xl mx-auto">
            <Text className="text-blue-800 font-medium">
              {question.benchmark}
            </Text>
          </div>
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

      {/* Main Question Input Section */}
      <div className="max-w-3xl mx-auto">
        {/* Text Input Questions */}
        {question.type === 'text' && (
          <div className="space-y-4">
            {question.id === 'q1_processDescription' || question.id === 'q1_processName' ? (
              <Textarea
                value={value || ''}
                onChange={(e) => handleTextInputChange(e.target.value)}
                placeholder={question.placeholder || "Describe your business process in detail..."}
                maxLength={question.maxLength}
                className={`min-h-[140px] text-base p-4 border-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 ${error ? 'border-blue-800' : 'border-gray-300'}`}
                rows={6}
              />
            ) : (
              <Input
                value={value || ''}
                onChange={(e) => handleTextInputChange(e.target.value)}
                placeholder={question.placeholder || "Enter your answer..."}
                maxLength={question.maxLength}
                className={`text-base p-4 h-12 border-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 ${error ? 'border-blue-800' : 'border-gray-300'}`}
              />
            )}

            {question.maxLength && (
              <Text className="velox-text-body text-sm text-gray-500 text-right">
                {(value || '').length}/{question.maxLength} characters
              </Text>
            )}

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

        {/* Textarea Questions */}
        {question.type === 'textarea' && (
          <div className="space-y-4">
            <Textarea
              value={value || ''}
              onChange={(e) => onChange(e.target.value)}
              placeholder={question.placeholder || "Enter your response..."}
              maxLength={question.maxLength}
              className="min-h-[120px] text-base p-4 border-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
              rows={6}
            />
            {question.maxLength && (
              <Text className="velox-text-body text-sm text-gray-500 text-right">
                {(value || '').length}/{question.maxLength} characters
              </Text>
            )}
          </div>
        )}

        {/* Contact Form Questions */}
        {question.type === 'contact_form' && question.contactFields && (
          <div className="space-y-6">
            {question.contactFields.map((field) => {
              const fieldValue = value?.[field.id] || ''
              const isValid = validateField(field, fieldValue)
              const showError = fieldValue !== '' && !isValid
              
              return (
                <div key={field.id} className="space-y-2">
                  <Label htmlFor={field.id} className="text-sm font-medium text-gray-800">
                    {field.label} {field.required && <span className="text-blue-600">*</span>}
                  </Label>
                  <Input
                    id={field.id}
                    type={field.type === 'url' ? 'text' : field.type}
                    value={fieldValue}
                    placeholder={field.placeholder}
                    onChange={(e) => {
                      const newValue = { ...value, [field.id]: e.target.value }
                      onChange(newValue)
                    }}
                    required={field.required}
                    className={`text-base p-4 h-12 border-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 ${
                      showError 
                        ? 'border-blue-800 bg-blue-50' 
                        : isValid && fieldValue !== ''
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-300'
                    }`}
                  />
                  {showError && (
                    <Text className="text-sm text-blue-800 font-medium">
                      {getFieldError(field, fieldValue)}
                    </Text>
                  )}
                  {isValid && fieldValue !== '' && (
                    <div className="flex items-center gap-1">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <Text className="text-sm text-blue-600 font-medium">Valid</Text>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        )}


        {/* Visual Grid Questions - Universal selection interface */}
        {question.type === 'visual_grid' && question.visualOptions && (
          <div className="space-y-6">
            {/* Selection instruction */}
            <div className="text-center">
              <Text className="velox-text-body text-blue-700 font-medium bg-blue-50 px-4 py-2 rounded-lg inline-block">
                {question.multiple
                  ? (question.maxSelections
                      ? `Select up to ${question.maxSelections} options`
                      : 'Select all that apply')
                  : 'Select one option'
                }
              </Text>
            </div>

            {/* Grid of options */}
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {question.visualOptions.map((option) => {
                const IconComponent = getIconComponent(option.icon || 'Info')
                const currentValues = Array.isArray(value) ? value : []
                
                // Handle selection state for both simple values and objects with custom input
                const isSelected = question.multiple 
                  ? currentValues.includes(option.value)
                  : (typeof value === 'object' && value?.value === option.value) || value === option.value
                
                const canSelect = question.multiple && question.maxSelections 
                  ? currentValues.length < question.maxSelections || isSelected
                  : true
                
                const handleClick = () => {
                  if (!canSelect && !isSelected) return
                  
                  console.log(`[DEBUG] Clicking option: ${option.value}, allowCustom: ${option.allowCustom}`)
                  
                  if (question.multiple) {
                    if (isSelected) {
                      onChange(currentValues.filter((v: string) => v !== option.value))
                    } else {
                      onChange([...currentValues, option.value])
                    }
                  } else {
                    // For single selection with custom input capability, preserve existing custom input
                    if (option.allowCustom) {
                      const existingCustom = typeof value === 'object' && value?.[`${option.value}_custom`] || ''
                      const newValue = {
                        value: option.value,
                        [`${option.value}_custom`]: existingCustom
                      }
                      console.log(`[DEBUG] Setting value for allowCustom option:`, newValue)
                      onChange(newValue)
                    } else {
                      console.log(`[DEBUG] Setting simple value:`, option.value)
                      onChange(option.value)
                    }
                  }
                }

                return (
                  <motion.div
                    key={option.value}
                    whileHover={{ scale: canSelect ? 1.02 : 1 }}
                    whileTap={{ scale: canSelect ? 0.98 : 1 }}
                    className={`
                      relative p-6 rounded-lg border-2 cursor-pointer transition-all duration-200
                      ${getColorClasses(option.color || 'gray', isSelected)}
                      ${!canSelect && !isSelected ? 'opacity-50 cursor-not-allowed' : ''}
                    `}
                    onClick={handleClick}
                  >
                    <div className="flex flex-col items-center text-center space-y-3">
                      <IconComponent 
                        className={`h-8 w-8 transition-all duration-200 hover:scale-110 ${
                          getIconColor(option.color || 'gray', isSelected)
                        }`} 
                      />
                      <div>
                        <Text className="font-medium text-gray-800">{option.label}</Text>
                        {option.description && (
                          <Text className="text-sm text-gray-600 mt-1">{option.description}</Text>
                        )}
                      </div>
                    </div>
                    
                    {isSelected && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="absolute top-2 right-2"
                      >
                        <CheckCircle className="h-5 w-5 text-blue-600" />
                      </motion.div>
                    )}
                  </motion.div>
                )
              })}
            </div>

            {/* Selection counter */}
            {question.multiple && Array.isArray(value) && value.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center bg-blue-50 border border-blue-200 rounded-lg p-3"
              >
                <div className="flex items-center justify-center gap-2">
                  <CheckCircle className="h-4 w-4 text-blue-600" />
                  <Text className="text-blue-800 font-medium">
                    {value.length} option{value.length === 1 ? '' : 's'} selected
                    {question.maxSelections && ` (${question.maxSelections - value.length} remaining)`}
                  </Text>
                </div>
              </motion.div>
            )}

            {/* Custom input for options with allowCustom */}
            {(() => {
              // Helper function to check if an option is selected
              const isOptionSelected = (optionValue: string) => {
                if (question.multiple) {
                  return Array.isArray(value) && value.includes(optionValue)
                } else {
                  // For single selection, check both object format and simple string format
                  if (typeof value === 'object' && value !== null) {
                    return value.value === optionValue
                  }
                  return value === optionValue
                }
              }

              // Find options that have allowCustom and are currently selected
              const selectedCustomOptions = question.visualOptions?.filter(option => 
                option.allowCustom && isOptionSelected(option.value)
              ) || []

              console.log(`[DEBUG] Selected custom options:`, selectedCustomOptions.map(o => o.value))
              console.log(`[DEBUG] Current value:`, value, typeof value)

              return selectedCustomOptions.length > 0 ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-4"
                >
                  {selectedCustomOptions.map(option => (
                    <div key={`${option.value}_custom`} className="max-w-md mx-auto">
                      <Label className="text-sm font-medium text-gray-700 mb-2 block">
                        Please specify your {option.label.toLowerCase()}:
                      </Label>
                      <Input
                        placeholder="Please specify..."
                        value={typeof value === 'object' && value?.[`${option.value}_custom`] || ''}
                        onChange={(e) => {
                          console.log(`[DEBUG] Custom input changed:`, e.target.value)
                          if (question.multiple) {
                            // For multiple selection, maintain array structure
                            onChange({
                              ...value,
                              [`${option.value}_custom`]: e.target.value
                            })
                          } else {
                            // For single selection, create object with both value and custom input
                            onChange({
                              value: option.value,
                              [`${option.value}_custom`]: e.target.value
                            })
                          }
                        }}
                        className="p-3 border-2 border-blue-200 rounded-lg focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
                      />
                    </div>
                  ))}
                </motion.div>
              ) : null
            })()}
          </div>
        )}

        {/* Range Slider Questions */}
        {question.type === 'range_slider' && question.ranges && (
          <div className="space-y-6">
            {/* Benchmark */}
            {question.benchmark && (
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
                <Text className="text-blue-800 font-medium">
                  {question.benchmark}
                </Text>
              </div>
            )}

            {/* Range Slider */}
            <div className="space-y-4">
              <Slider
                value={[question.ranges.findIndex(r => r.value === value) || 0]}
                onValueChange={(newValue) => {
                  const selectedRange = question.ranges![newValue[0]]
                  if (selectedRange) {
                    onChange(selectedRange.value)
                  }
                }}
                max={question.ranges.length - 1}
                min={0}
                step={1}
                className="w-full"
              />

              {/* Range Labels */}
              <div className="flex justify-between text-xs text-muted-foreground">
                {question.ranges.map((range, index) => (
                  <span key={range.value} className={index % 2 === 0 ? '' : 'hidden sm:block'}>
                    {range.label}
                  </span>
                ))}
              </div>
            </div>

            {/* Current Range Display */}
            <div className="text-center p-4 rounded-lg border border-blue-200 bg-blue-50 mx-auto max-w-md">
              <div className="text-2xl font-bold text-blue-600">
                {question.ranges.find(r => r.value === value)?.displayValue || question.ranges[0]?.displayValue}
              </div>
            </div>

            {/* Real-time Calculation */}
            {question.realTimeCalculation && question.calculationMessage && value && (
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
                <Text className="text-blue-800 font-medium">
                  {question.calculationMessage.replace('[X]',
                    (question.ranges.find(r => r.value === value)?.numericValue || 0).toString()
                  )}
                </Text>
              </div>
            )}
          </div>
        )}

        {/* Slider Questions - Simple, working approach */}
        {question.type === 'slider' && question.sliderConfig && (
          <div className="space-y-6">
            {question.sliderConfig.timeframes ? (
              /* Volume slider with timeframe switching */
              <VolumeSlider
                config={question.sliderConfig}
                value={value || { amount: question.sliderConfig.ranges?.monthly?.min || 50, timeframe: 'monthly' }}
                onChange={onChange}
                unitLabel={question.unitLabel || 'units'}
              />
            ) : question.sliderConfig.unit === 'hours' && question.id !== 'first_response_time' ? (
              /* Time-based slider for weekly hours (not response time) */
              <TimeSlider
                config={question.sliderConfig}
                value={value !== undefined ? value : (question.sliderConfig.min || 0)}
                onChange={onChange}
                showCalculation={question.realTimeCalculation}
                executiveHourlyRate={question.hourlyRate || 100}
              />
            ) : (
              /* Range-based slider - reliable and user-friendly */
              (() => {
                const markers = question.sliderConfig.markers || []

                // Generate ranges from markers
                const generateRanges = (markers: number[], unit: string) => {
                  if (markers.length === 0) return []

                  const ranges = []

                  // First range: "Under X"
                  if (markers[0] > 0) {
                    ranges.push({
                      value: `0-${markers[0]}`,
                      label: `Under ${markers[0]}`,
                      displayValue: `< ${markers[0]} ${unit}`,
                      numericValue: markers[0] / 2 // Use midpoint for calculations
                    })
                  }

                  // Middle ranges: "X - Y"
                  for (let i = 0; i < markers.length - 1; i++) {
                    const start = markers[i]
                    const end = markers[i + 1]
                    ranges.push({
                      value: `${start}-${end}`,
                      label: `${start} - ${end}`,
                      displayValue: `${start}-${end} ${unit}`,
                      numericValue: (start + end) / 2 // Use midpoint for calculations
                    })
                  }

                  // Last range: "X+"
                  const lastMarker = markers[markers.length - 1]
                  ranges.push({
                    value: `${lastMarker}+`,
                    label: `${lastMarker}+`,
                    displayValue: `${lastMarker}+ ${unit}`,
                    numericValue: lastMarker * 1.5 // Use 150% for calculations
                  })

                  return ranges
                }

                const ranges = generateRanges(markers, question.sliderConfig.unit || '')
                const currentValue = value !== undefined ? value : ranges[0]?.value
                const currentRange = ranges.find(r => r.value === currentValue) || ranges[0]
                const currentIndex = ranges.findIndex(r => r.value === currentValue)

                const handleSliderChange = (newValue: number[]) => {
                  const selectedRange = ranges[newValue[0]]
                  if (selectedRange) {
                    onChange(selectedRange.value)
                  }
                }

                return (
                  <div className="space-y-6">
                    {/* Benchmark */}
                    {question.benchmark && (
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
                        <Text className="text-blue-800 font-medium">
                          {question.benchmark}
                        </Text>
                      </div>
                    )}

                    {/* Range Slider */}
                    <div className="space-y-4">
                      <Slider
                        value={[currentIndex >= 0 ? currentIndex : 0]}
                        onValueChange={handleSliderChange}
                        max={ranges.length - 1}
                        min={0}
                        step={1}
                        className="w-full"
                      />

                      {/* Range Labels */}
                      <div className="flex justify-between text-xs text-muted-foreground">
                        {ranges.map((range, index) => (
                          <span key={range.value} className={index % 2 === 0 ? '' : 'hidden sm:block'}>
                            {range.label}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Current Range Display */}
                    <div className="text-center p-4 rounded-lg border border-blue-200 bg-blue-50 mx-auto max-w-md">
                      <div className="text-2xl font-bold text-blue-600">
                        {currentRange?.displayValue || 'Select range'}
                      </div>
                    </div>

                    {/* Real-time Calculation */}
                    {question.realTimeCalculation && question.calculationMessage && currentRange && (
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
                        <Text className="text-blue-800 font-medium">
                          {question.calculationMessage.replace('[X]', currentRange.numericValue.toString())}
                        </Text>
                      </div>
                    )}
                  </div>
                )
              })()
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
            <div className="flex items-center gap-2 justify-center">
              <BarChart3 className="h-5 w-5 text-gray-700" />
              <Text className="text-blue-800 font-medium">
                {question.calculationMessage
                  .replace('[X]', value.toString())
                  .replace('[MONTHLY]', (value * 4.33).toString())
                  .replace('[COST]', `€${Math.round(value * 100)}`)
                }
              </Text>
            </div>
          </motion.div>
        )}

        {/* Benchmark Display */}
        {question.benchmark && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
            <Text className="text-blue-800 font-medium">
              {question.benchmark}
            </Text>
          </div>
        )}

        {/* Error Display */}
        {error && (
          <div className="text-center mt-4">
            <Text className="velox-text-body text-blue-800 font-medium bg-blue-50 px-4 py-2 rounded-lg inline-block">
              {error}
            </Text>
          </div>
        )}
      </div>
    </div>
  )
}
