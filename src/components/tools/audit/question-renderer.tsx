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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {question.visualOptions.map((option) => {
                const IconComponent = getIconComponent(option.icon || 'Info')
                const currentValues = Array.isArray(value) ? value : []
                const isSelected = question.multiple 
                  ? currentValues.includes(option.value)
                  : value === option.value
                
                const canSelect = question.multiple && question.maxSelections 
                  ? currentValues.length < question.maxSelections || isSelected
                  : true
                
                const handleClick = () => {
                  if (!canSelect && !isSelected) return
                  
                  if (question.multiple) {
                    if (isSelected) {
                      onChange(currentValues.filter((v: string) => v !== option.value))
                    } else {
                      onChange([...currentValues, option.value])
                    }
                  } else {
                    onChange(option.value)
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
          </div>
        )}

        {/* Slider Questions - Universal numeric input interface */}
        {question.type === 'slider' && question.sliderConfig && (
          <div className="space-y-6">
            {/* Determine slider type and render appropriately */}
            {question.sliderConfig.timeframes ? (
              /* Volume slider with timeframe switching */
              <VolumeSlider
                config={question.sliderConfig}
                value={value || { amount: 50, timeframe: 'monthly' }}
                onChange={onChange}
                unitLabel={question.unitLabel || 'units'}
              />
            ) : question.sliderConfig.unit === 'minutes' || question.sliderConfig.unit === 'hours' ? (
              /* Time-based slider */
              <TimeSlider
                config={question.sliderConfig}
                value={value || question.sliderConfig.min || 0}
                onChange={onChange}
                showCalculation={question.realTimeCalculation}
                executiveHourlyRate={question.hourlyRate || 100}
              />
            ) : (
              /* Basic numeric slider */
              <div className="space-y-4">
                <div className="px-4">
                  <input
                    type="range"
                    min={question.sliderConfig.min}
                    max={question.sliderConfig.max}
                    step={question.sliderConfig.step || 1}
                    value={value || question.sliderConfig.min || 0}
                    onChange={(e) => onChange(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-2">
                    <span>{question.sliderConfig.min}</span>
                    <span className="font-bold text-blue-600">
                      {value || question.sliderConfig.min || 0}
                      {question.sliderConfig.unit && ` ${question.sliderConfig.unit}`}
                    </span>
                    <span>{question.sliderConfig.max}</span>
                  </div>
                </div>
                
                {/* Show markers if available */}
                {question.sliderConfig.markers && (
                  <div className="flex justify-between text-xs text-gray-400 px-4">
                    {question.sliderConfig.markers.map((marker, index) => (
                      <span key={index}>{marker}</span>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Show subtext if available */}
            {question.subtext && (
              <div className="text-center">
                <Text className="text-sm text-gray-600 italic">
                  {question.subtext.replace('X', (value || 0).toString())}
                </Text>
              </div>
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
