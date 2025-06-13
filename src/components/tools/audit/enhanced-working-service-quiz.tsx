"use client"

import { useState, useEffect, useRef } from "react"
import { Container } from "@/components/layout/container"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea"
import { Heading, Text } from "@/components/ui/typography"
import { Progress } from "@/components/ui/progress"
import { Card } from "@/components/ui/card"
import {
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  TrendingUp,
  Calculator,
  Headphones,
  Settings,
  Megaphone,
  Users,
  Clock,
  Building2,
  User,
  Crown,
  Briefcase,
  UserCheck,
  Building,
  Store,
  Globe,
  Heart,
  ArrowRight,
  // New icons for interactive components
  Linkedin,
  Mail,
  Phone,
  Calendar,
  Target,
  Zap,
  BarChart3,
  PieChart,
  Gauge,
  Star,
  Award,
  Lightbulb,
  Rocket,
  Shield,
  Database,
  MessageSquare,
  FileText,
  DollarSign,
  Timer,
  Users2,
  Plus,
  Minus,
  TrendingDown,
  AlertTriangle,
  CreditCard,
  Share2,
  MessageCircle,
  BarChart,
  Shuffle
} from "lucide-react"
import { SERVICE_QUIZ_PHASES, SALES_ROUTE_PHASES, FINANCE_ROUTE_PHASES, CUSTOMER_SERVICE_ROUTE_PHASES, OPERATIONS_ROUTE_PHASES, MARKETING_ROUTE_PHASES, HR_ROUTE_PHASES, FINAL_QUESTIONS, DEPARTMENT_ROUTES } from "@/config/service-quiz"
import { Question, QuizPhase } from "@/types/audit-tool"
import { ServiceTeamEfficiencyBuilder } from "@/components/ui/service-team-efficiency-builder"
import { QuestionRenderer as ExternalQuestionRenderer } from './question-renderer'

type QuizStep = 'intro' | 'opening' | 'department' | 'route' | 'final' | 'results'

const DEPARTMENT_ICONS = {
  'sales': TrendingUp,
  'finance': Calculator,
  'customer_service': Headphones,
  'operations': Settings,
  'marketing': Megaphone,
  'hr': Users
}

const COMPANY_SIZE_ICONS = {
  'solo': User,
  '2-10': Users,
  '11-25': Building2,
  '26-50': Building,
  '51-100': Store,
  '101-200': Globe,
  '200+': Building2
}

const ROLE_ICONS = {
  'owner-ceo': Crown,
  'c-suite': Briefcase,
  'department-head': UserCheck,
  'operations-manager': Settings,
  'team-lead': Users,
  'other': User
}

const BUSINESS_MODEL_ICONS = {
  'b2b': Briefcase,
  'b2c': Store,
  'b2b2c': Globe,
  'marketplace': Building,
  'nonprofit': Heart
}

// Use the imported DEPARTMENT_ROUTES which now has complete implementations
// const DEPARTMENT_ROUTES already imported from config

interface QuestionRendererProps {
  question: Question
  value: any
  onChange: (value: any) => void
  onNext?: () => void
}

// Helper function to determine if question should use visual grid
const shouldUseVisualGrid = (question: Question) => {
  return question.id === 'company_size' ||
         question.id === 'role' ||
         question.id === 'business_model' ||
         question.id === 'primary_challenge' ||
         question.type === 'visual_grid'
}

// Helper function to get icon for question option
const getIconForOption = (questionId: string, optionValue: string, iconName?: string) => {
  // First check if a specific icon name is provided (for visual_grid questions)
  if (iconName) {
    const iconMap: Record<string, any> = {
      Mail, Phone, MessageSquare, FileText, Share2, MessageCircle, Users, Building,
      Gauge, BarChart3, TrendingUp, BarChart, Zap, Clock, Timer, Calendar, 
      AlertTriangle, Target, PieChart, TrendingDown, Shuffle, Lightbulb
    }
    return iconMap[iconName] || Settings
  }

  // Fall back to hardcoded mappings for legacy questions
  switch (questionId) {
    case 'company_size':
      return COMPANY_SIZE_ICONS[optionValue as keyof typeof COMPANY_SIZE_ICONS] || Building2
    case 'role':
      return ROLE_ICONS[optionValue as keyof typeof ROLE_ICONS] || User
    case 'business_model':
      return BUSINESS_MODEL_ICONS[optionValue as keyof typeof BUSINESS_MODEL_ICONS] || Briefcase
    case 'department_focus':
      return DEPARTMENT_ICONS[optionValue as keyof typeof DEPARTMENT_ICONS] || Settings
    default:
      return Settings
  }
}

// Interactive Lead Generation Methods Component
function LeadGenerationMethodsSelector({ question, value, onChange }: { question: Question, value: any, onChange: (value: any) => void }) {
  const methodIcons = {
    'linkedin-outreach': Linkedin,
    'cold-email': Mail,
    'cold-calling': Phone,
    'networking-events': Users2,
    'referral-programs': Star,
    'inbound-marketing': Target,
    'paid-advertising': Zap,
    'channel-partners': Building,
    'other': Settings
  }

  const methodColors = {
    'linkedin-outreach': 'from-blue-500 to-blue-600',
    'cold-email': 'from-green-500 to-green-600',
    'cold-calling': 'from-purple-500 to-purple-600',
    'networking-events': 'from-orange-500 to-orange-600',
    'referral-programs': 'from-yellow-500 to-yellow-600',
    'inbound-marketing': 'from-pink-500 to-pink-600',
    'paid-advertising': 'from-red-500 to-red-600',
    'channel-partners': 'from-indigo-500 to-indigo-600',
    'other': 'from-gray-500 to-gray-600'
  }

  const selectedMethods = value || []

  const handleMethodToggle = (methodValue: string) => {
    const newSelection = selectedMethods.includes(methodValue)
      ? selectedMethods.filter((m: string) => m !== methodValue)
      : [...selectedMethods, methodValue]
    onChange(newSelection)
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {question.options?.map((option) => {
          const IconComponent = methodIcons[option.value as keyof typeof methodIcons] || Settings
          const isSelected = selectedMethods.includes(option.value)
          const colorClass = methodColors[option.value as keyof typeof methodColors] || 'from-gray-500 to-gray-600'

          return (
            <div key={option.value} className="relative h-full">
              <button
                type="button"
                onClick={() => handleMethodToggle(option.value)}
                className={`
                  w-full h-full min-h-[120px] p-6 rounded-xl border-2 transition-all duration-300 text-left group relative overflow-hidden flex flex-col justify-between
                  ${isSelected
                    ? 'border-blue-600 bg-white shadow-lg transform scale-105'
                    : 'border-gray-200 bg-white hover:border-blue-300 hover:shadow-md hover:transform hover:scale-102'
                  }
                `}
              >
                {/* Background Gradient (only when selected) */}
                {isSelected && (
                  <div className={`absolute inset-0 bg-gradient-to-br ${colorClass} opacity-5`} />
                )}

                <div className="relative flex items-start space-x-4 flex-1">
                  <div className={`
                    p-3 rounded-lg flex items-center justify-center transition-all duration-300 flex-shrink-0
                    ${isSelected
                      ? `bg-gradient-to-br ${colorClass} text-white shadow-md`
                      : 'bg-gray-100 text-gray-700 group-hover:bg-blue-100 group-hover:text-blue-600'
                    }
                  `}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div className="flex-1 min-w-0 flex items-center">
                    <div className={`font-semibold transition-colors duration-300 leading-tight ${
                      isSelected ? 'text-blue-900' : 'text-gray-900 group-hover:text-blue-800'
                    }`}>
                      {option.label}
                    </div>
                  </div>
                </div>

                {isSelected && (
                  <div className="absolute top-3 right-3">
                    <div className="bg-blue-600 rounded-full p-1">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                  </div>
                )}
              </button>

              {/* Custom input for "Other" option */}
              {option.allowCustom && isSelected && (
                <div className="mt-3">
                  <Input
                    placeholder="Please specify..."
                    value={value?.[`${option.value}_custom`] || ""}
                    onChange={(e) => {
                      onChange({
                        ...value,
                        [`${option.value}_custom`]: e.target.value
                      })
                    }}
                    className="p-3 border-2 border-blue-200 rounded-lg focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
                  />
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* Selection Summary */}
      <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-blue-100 rounded-full">
            <BarChart3 className="w-5 h-5 text-blue-600" />
          </div>
          <Text className="text-sm text-blue-700 font-medium">
            {selectedMethods.length} method{selectedMethods.length !== 1 ? 's' : ''} selected
            {selectedMethods.length > 0 && (
              <span className="ml-2 text-blue-600">
                • {selectedMethods.length >= 3 ? 'Diversified approach' : 'Consider adding more channels'}
              </span>
            )}
          </Text>
        </div>
      </div>
    </div>
  )
}

// Interactive Conversation Volume Slider Component
function ConversationVolumeSlider({ question, value, onChange }: { question: Question, value: any, onChange: (value: any) => void }) {
  const ranges = [
    { value: 'fewer-than-10', label: '0-9', position: 0 },
    { value: '10-25', label: '10-25', position: 1 },
    { value: '26-50', label: '26-50', position: 2 },
    { value: '51-75', label: '51-75', position: 3 },
    { value: '76-100', label: '76-100', position: 4 },
    { value: '101-150', label: '101-150', position: 5 },
    { value: 'more-than-150', label: '150+', position: 6 }
  ]

  const currentRangeIndex = ranges.findIndex(r => r.value === value)
  const validIndex = currentRangeIndex >= 0 ? currentRangeIndex : 0
  const currentRange = ranges[validIndex]

  // Set default value to first range if no value is provided
  useEffect(() => {
    if (!value) {
      onChange(ranges[0].value)
    }
  }, [value, onChange])

  // Handle range selection
  const handleRangeSelect = (rangeIndex: number) => {
    const selectedRange = ranges[rangeIndex]
    onChange(selectedRange.value)
  }

  // Check if range is in benchmark (40-60 is roughly ranges 2-3)
  const isInBenchmark = (index: number) => index >= 2 && index <= 3

  return (
    <div className="space-y-8 text-center">
      {/* Main Value Display */}
      <div className="space-y-3">
        <div className="text-6xl font-bold text-blue-600">
          {currentRange?.label || 'Select Range'}
        </div>
        <div className="text-lg text-gray-600">conversations per week</div>
      </div>

      {/* Range Selector */}
      <div className="space-y-6">
        {/* Interactive Range Slider */}
        <div className="relative px-4">
          {/* Track Background */}
          <div className="relative h-3 bg-gray-200 rounded-full">
            {/* Progress Fill - Fixed to not overflow */}
            <div
              className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-200"
              style={{ width: `${(validIndex / (ranges.length - 1)) * 100}%` }}
            />

            {/* Draggable Slider Handle */}
            <div
              className="absolute top-1/2 w-6 h-6 bg-white rounded-full shadow-lg border-2 border-blue-600 transform -translate-y-1/2 cursor-pointer transition-all duration-200 hover:scale-110 hover:shadow-xl"
              style={{
                left: `calc(${(validIndex / (ranges.length - 1)) * 100}% - 12px)`
              }}
            />
          </div>

          {/* Hidden Range Input for Dragging */}
          <input
            type="range"
            min="0"
            max={ranges.length - 1}
            value={validIndex}
            onChange={(e) => handleRangeSelect(parseInt(e.target.value))}
            className="absolute inset-0 w-full h-6 opacity-0 cursor-pointer"
            style={{ margin: 0 }}
            aria-label="Select conversation volume range"
          />
        </div>
      </div>



      {/* Benchmark Info */}
      {question.benchmark && (
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 border border-green-200">
          <div className="flex items-center space-x-3">
            <Target className="w-5 h-5 text-green-600" />
            <span className="text-sm text-green-700 font-medium">💡 {question.benchmark}</span>
          </div>
        </div>
      )}
    </div>
  )
}

// Simplified Team Structure Builder Component
function TeamStructureBuilder({ question, value, onChange }: { question: Question, value: any, onChange: (value: any) => void }) {
  const teamData = value || {}

  const updateTeamValue = (inputId: string, newValue: string | number) => {
    onChange({
      ...teamData,
      [inputId]: newValue
    })
  }

  const getTotalTeamSize = () => {
    return question.teamInputs?.reduce((total, input) => {
      const value = parseInt(teamData[input.id] || '0')
      return total + (input.id !== 'weekly_hours' ? value : 0) // Don't count hours in team size
    }, 0) || 0
  }

  return (
    <div className="space-y-8">
      {/* Simplified Team Builder Interface */}
      <div className="grid gap-6 md:grid-cols-2">
        {question.teamInputs?.map((input) => {
          const currentValue = parseInt(teamData[input.id] || '0')
          const isHours = input.id === 'weekly_hours'
          const maxValue = input.max || 50

          return (
            <div key={input.id} className="bg-white rounded-xl border-2 border-gray-200 p-6 hover:border-blue-300 transition-all duration-300">
              <div className="space-y-4">
                {/* Header */}
                <div className="text-center">
                  <Label className="text-lg font-semibold text-gray-900">{input.label}</Label>
                  <div className="text-sm text-gray-600 mt-1">
                    {isHours ? 'Hours per week' : 'Number of people'}
                  </div>
                </div>

                {/* Value Display */}
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600">
                    {currentValue}
                  </div>
                  <div className="text-sm text-gray-500 mt-1">
                    {isHours ? 'hours/week' : currentValue === 1 ? 'person' : 'people'}
                  </div>
                </div>

                {/* Simple Slider */}
                <div className="relative px-2">
                  <div className="relative h-3 bg-gray-200 rounded-full">
                    {/* Progress Fill */}
                    <div
                      className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-200"
                      style={{ width: `${(currentValue / maxValue) * 100}%` }}
                    />

                    {/* Slider Handle */}
                    <div
                      className="absolute top-1/2 w-5 h-5 bg-white rounded-full shadow-lg border-2 border-blue-600 transform -translate-y-1/2 cursor-pointer transition-all duration-200 hover:scale-110"
                      style={{ left: `calc(${(currentValue / maxValue) * 100}% - 10px)` }}
                    />
                  </div>

                  {/* Hidden Range Input */}
                  <input
                    type="range"
                    min="0"
                    max={maxValue}
                    value={currentValue}
                    onChange={(e) => updateTeamValue(input.id, parseInt(e.target.value))}
                    className="absolute inset-0 w-full h-5 opacity-0 cursor-pointer"
                    aria-label={`Select ${input.label}`}
                  />
                </div>

                {/* Range Labels */}
                <div className="flex justify-between text-xs text-gray-500 px-2">
                  <span>0</span>
                  <span>{maxValue}</span>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Team Summary */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200 text-center">
        <div className="flex items-center justify-center mb-2">
          <Users2 className="w-6 h-6 text-blue-600 mr-2" />
          <span className="text-lg font-semibold text-blue-900">Total Team Size</span>
        </div>
        <div className="text-4xl font-bold text-blue-600">{getTotalTeamSize()}</div>
        <div className="text-sm text-blue-700">people involved in sales</div>
      </div>

      {/* Boolean Inputs */}
      {question.booleanInputs?.map((input) => {
        const isChecked = teamData[input.id] || false
        return (
          <div
            key={input.id}
            className={`
              relative p-4 rounded-lg border-2 transition-all duration-300 cursor-pointer group
              ${isChecked
                ? 'border-blue-600 bg-gradient-to-r from-blue-50 to-blue-100 shadow-md'
                : 'border-gray-200 bg-white hover:border-blue-300 hover:bg-blue-50/50 hover:shadow-sm'
              }
            `}
          >
            <div className="flex items-center space-x-4">
              <Checkbox
                id={input.id}
                checked={isChecked}
                onCheckedChange={(checked) => updateTeamValue(input.id, checked ? 1 : 0)}
                className="data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600 w-5 h-5"
              />
              <Label
                htmlFor={input.id}
                className={`cursor-pointer font-medium transition-colors duration-300 flex-1 ${
                  isChecked ? 'text-blue-900' : 'text-gray-900 group-hover:text-blue-800'
                }`}
              >
                {input.label}
              </Label>
            </div>
            {isChecked && (
              <div className="absolute top-3 right-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600" />
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

// Interactive Salary Range Slider Component
function SalaryRangeSlider({ question, value, onChange }: { question: Question, value: any, onChange: (value: any) => void }) {
  const salaryRanges = [
    { value: '20-35', label: '€20-35/hour', description: 'Entry level', min: 20, max: 35, color: 'from-green-400 to-green-500' },
    { value: '35-50', label: '€35-50/hour', description: 'Mid-level', min: 35, max: 50, color: 'from-blue-400 to-blue-500' },
    { value: '50-75', label: '€50-75/hour', description: 'Senior', min: 50, max: 75, color: 'from-purple-400 to-purple-500' },
    { value: '75-100', label: '€75-100/hour', description: 'Leadership', min: 75, max: 100, color: 'from-orange-400 to-orange-500' },
    { value: '100+', label: '€100+/hour', description: 'Executive', min: 100, max: 150, color: 'from-red-400 to-red-500' }
  ]

  const selectedRange = salaryRanges.find(r => r.value === value)
  const selectedIndex = salaryRanges.findIndex(r => r.value === value)

  return (
    <div className="space-y-8">
      {/* Visual Salary Scale */}
      <div className="relative">
        <div className="text-center mb-6">
          <div className="text-sm text-gray-600 mb-2">Average Hourly Cost</div>
          {selectedRange && (
            <div className="space-y-2">
              <div className="text-4xl font-bold text-gray-900">{selectedRange.label}</div>
              <div className="text-lg text-gray-600">{selectedRange.description}</div>
            </div>
          )}
        </div>

        {/* Salary Range Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {salaryRanges.map((range, index) => {
            const isSelected = value === range.value

            return (
              <button
                key={range.value}
                type="button"
                onClick={() => onChange(range.value)}
                className={`
                  relative p-6 rounded-xl border-2 transition-all duration-300 text-center group overflow-hidden
                  ${isSelected
                    ? 'border-blue-600 bg-white shadow-xl transform scale-105'
                    : 'border-gray-200 bg-white hover:border-blue-300 hover:shadow-lg hover:transform hover:scale-102'
                  }
                `}
              >
                {/* Background Gradient */}
                <div className={`
                  absolute inset-0 bg-gradient-to-br ${range.color} transition-opacity duration-300
                  ${isSelected ? 'opacity-10' : 'opacity-0 group-hover:opacity-5'}
                `} />

                <div className="relative space-y-3">
                  {/* Salary Icon */}
                  <div className={`
                    w-12 h-12 mx-auto rounded-full flex items-center justify-center transition-all duration-300
                    ${isSelected
                      ? `bg-gradient-to-br ${range.color} text-white shadow-lg`
                      : 'bg-gray-100 text-gray-600 group-hover:bg-blue-100 group-hover:text-blue-600'
                    }
                  `}>
                    <DollarSign className="w-6 h-6" />
                  </div>

                  {/* Range Display */}
                  <div className="space-y-1">
                    <div className={`font-bold text-lg transition-colors duration-300 ${
                      isSelected ? 'text-blue-900' : 'text-gray-900 group-hover:text-blue-800'
                    }`}>
                      {range.value === '100+' ? '€100+' : `€${range.min}-${range.max}`}
                    </div>
                    <div className={`text-sm transition-colors duration-300 ${
                      isSelected ? 'text-blue-700' : 'text-gray-600 group-hover:text-blue-600'
                    }`}>
                      {range.description}
                    </div>
                  </div>

                  {/* Level Indicator */}
                  <div className="flex justify-center space-x-1">
                    {Array.from({ length: 5 }, (_, i) => (
                      <div
                        key={i}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          i <= index
                            ? isSelected
                              ? 'bg-blue-600'
                              : 'bg-gray-400 group-hover:bg-blue-400'
                            : 'bg-gray-200'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {isSelected && (
                  <div className="absolute top-3 right-3">
                    <div className="bg-blue-600 rounded-full p-1">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                  </div>
                )}
              </button>
            )
          })}
        </div>
      </div>

      {/* Cost Impact Visualization */}
      {selectedRange && (
        <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-6 border border-gray-200">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-gray-900">€{selectedRange.min * 40}</div>
              <div className="text-sm text-gray-600">Weekly cost (40h)</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">€{selectedRange.min * 160}</div>
              <div className="text-sm text-gray-600">Monthly cost (160h)</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">€{selectedRange.min * 2000}</div>
              <div className="text-sm text-gray-600">Annual cost (2000h)</div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}


// Interactive Time Breakdown Slider Component
function TimeBreakdownSlider({ question, value, onChange }: { question: Question, value: any, onChange: (value: any) => void }) {
  const timeRanges = [
    { value: 'less-than-2', label: '< 2h', hours: 1 },
    { value: '2-5', label: '2-5h', hours: 3.5 },
    { value: '5-10', label: '5-10h', hours: 7.5 },
    { value: '10-15', label: '10-15h', hours: 12.5 },
    { value: 'more-than-15', label: '15h+', hours: 18 }
  ]

  // Set default values for all categories if not provided
  useEffect(() => {
    if (!value || Object.keys(value).length === 0) {
      const defaultValues: any = {}
      question.timeBreakdowns?.forEach(breakdown => {
        defaultValues[breakdown.category] = timeRanges[0].value
      })
      onChange(defaultValues)
    }
  }, [value, onChange])

  const getTimeRangeIndex = (categoryValue: string) => {
    const index = timeRanges.findIndex(r => r.value === categoryValue)
    return index >= 0 ? index : 0
  }

  const getTotalHours = () => {
    let total = 0
    question.timeBreakdowns?.forEach(breakdown => {
      const categoryValue = value?.[breakdown.category]
      const range = timeRanges.find(r => r.value === categoryValue)
      if (range) total += range.hours
    })
    return total
  }

  const getTotalCost = () => {
    const totalHours = getTotalHours()
    const hourlyRate = 50 // Average hourly rate
    return totalHours * hourlyRate
  }

  return (
    <div className="space-y-8">
      {/* Time Breakdown Categories */}
      {question.timeBreakdowns?.map((breakdown, index) => {
        const categoryValue = value?.[breakdown.category] || timeRanges[0].value
        const selectedIndex = getTimeRangeIndex(categoryValue)
        const selectedRange = timeRanges[selectedIndex]

        return (
          <div key={index} className="space-y-4">
            <div className="text-center">
              <h4 className="font-semibold text-lg text-gray-900 mb-2">{breakdown.category}</h4>
              <div className="text-3xl font-bold text-blue-600 mb-1">{selectedRange.label}</div>
              <div className="text-sm text-gray-600">per 10 prospects</div>
            </div>

            {/* Interactive Slider */}
            <div className="relative px-4">
              <div className="relative h-3 bg-gray-200 rounded-full">
                {/* Progress Fill */}
                <div
                  className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-200"
                  style={{ width: `${(selectedIndex / (timeRanges.length - 1)) * 100}%` }}
                />

                {/* Slider Handle */}
                <div
                  className="absolute top-1/2 w-6 h-6 bg-white rounded-full shadow-lg border-2 border-blue-600 transform -translate-y-1/2 cursor-pointer transition-all duration-200 hover:scale-110 hover:shadow-xl"
                  style={{
                    left: `calc(${(selectedIndex / (timeRanges.length - 1)) * 100}% - 12px)`
                  }}
                />
              </div>

              {/* Hidden Range Input */}
              <input
                type="range"
                min="0"
                max={timeRanges.length - 1}
                value={selectedIndex}
                onChange={(e) => {
                  const newIndex = parseInt(e.target.value)
                  const newRange = timeRanges[newIndex]
                  onChange({
                    ...value,
                    [breakdown.category]: newRange.value
                  })
                }}
                className="absolute inset-0 w-full h-6 opacity-0 cursor-pointer"
                style={{ margin: 0 }}
                aria-label={`Select time range for ${breakdown.category}`}
              />
            </div>

            {/* Time Range Labels */}
            <div className="flex justify-between text-xs text-gray-500 px-4">
              {timeRanges.map((range, i) => (
                <span key={i} className={selectedIndex === i ? 'text-blue-600 font-medium' : ''}>
                  {range.label}
                </span>
              ))}
            </div>
          </div>
        )
      })}

      {/* Total Calculation */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
        <div className="text-center">
          <h4 className="font-semibold text-blue-900 mb-4">Total Investment per 10 Prospects</h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <div className="text-3xl font-bold text-blue-900">{getTotalHours()}h</div>
              <div className="text-sm text-blue-700">Total time investment</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-900">€{getTotalCost()}</div>
              <div className="text-sm text-blue-700">Estimated cost</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


// Business Impact Assessment Component
function BusinessImpactSelector({ question, value, onChange }: { question: Question, value: any, onChange: (value: any) => void }) {
  const selectedImpacts = value || []

  const impactCategories = {
    'limiting-growth': {
      category: 'Growth Impact',
      icon: TrendingDown,
      color: 'from-red-500 to-red-600',
      severity: 'high'
    },
    'increasing-costs': {
      category: 'Financial Impact',
      icon: DollarSign,
      color: 'from-orange-500 to-orange-600',
      severity: 'high'
    },
    'affecting-satisfaction': {
      category: 'Customer Impact',
      icon: Users,
      color: 'from-blue-500 to-blue-600',
      severity: 'medium'
    },
    'employee-frustration': {
      category: 'Team Impact',
      icon: Users2,
      color: 'from-purple-500 to-purple-600',
      severity: 'medium'
    },
    'missing-opportunities': {
      category: 'Market Impact',
      icon: Target,
      color: 'from-green-500 to-green-600',
      severity: 'medium'
    },
    'losing-advantage': {
      category: 'Competitive Impact',
      icon: Zap,
      color: 'from-yellow-500 to-yellow-600',
      severity: 'high'
    },
    'preventing-initiatives': {
      category: 'Strategic Impact',
      icon: Lightbulb,
      color: 'from-indigo-500 to-indigo-600',
      severity: 'medium'
    },
    'compliance-risks': {
      category: 'Risk Impact',
      icon: Shield,
      color: 'from-gray-500 to-gray-600',
      severity: 'high'
    }
  }

  const handleImpactToggle = (impactValue: string) => {
    const newSelection = selectedImpacts.includes(impactValue)
      ? selectedImpacts.filter((i: string) => i !== impactValue)
      : [...selectedImpacts, impactValue]
    onChange(newSelection)
  }

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'text-red-600'
      case 'medium': return 'text-blue-600'
      default: return 'text-gray-600'
    }
  }

  return (
    <div className="space-y-8">
      {/* Impact Overview */}
      <div className="text-center">
        <div className="text-sm text-gray-600 mb-4">Select all business impacts you're experiencing</div>
        <div className="inline-flex items-center space-x-4 bg-white rounded-xl border-2 border-gray-200 px-6 py-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900">{selectedImpacts.length}</div>
            <div className="text-xs text-gray-600">Impacts</div>
          </div>
          <div className="w-px h-8 bg-gray-300" />
          <div className="text-center">
            <div className="text-lg font-semibold text-blue-600">
              {selectedImpacts.length === 0 ? 'None' :
               selectedImpacts.length <= 2 ? 'Focused' :
               selectedImpacts.length <= 4 ? 'Multiple' : 'Widespread'}
            </div>
            <div className="text-xs text-gray-600">Impact Level</div>
          </div>
        </div>
      </div>

      {/* Impact Selection Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {question.options?.map((option) => {
          const impactInfo = impactCategories[option.value as keyof typeof impactCategories]
          const IconComponent = impactInfo?.icon || AlertTriangle
          const isSelected = selectedImpacts.includes(option.value)
          const colorClass = impactInfo?.color || 'from-gray-500 to-gray-600'

          return (
            <button
              key={option.value}
              type="button"
              onClick={() => handleImpactToggle(option.value)}
              className={`
                relative p-6 rounded-xl border-2 transition-all duration-300 text-left group overflow-hidden
                ${isSelected
                  ? 'border-blue-600 bg-white shadow-lg transform scale-105'
                  : 'border-gray-200 bg-white hover:border-blue-300 hover:shadow-md hover:transform hover:scale-102'
                }
              `}
            >
              {/* Background Gradient */}
              {isSelected && (
                <div className={`absolute inset-0 bg-gradient-to-br ${colorClass} opacity-5`} />
              )}

              <div className="relative space-y-4">
                {/* Impact Icon and Category */}
                <div className="flex items-center justify-between">
                  <div className={`
                    p-3 rounded-lg flex items-center justify-center transition-all duration-300
                    ${isSelected
                      ? `bg-gradient-to-br ${colorClass} text-white shadow-md`
                      : 'bg-gray-100 text-gray-700 group-hover:bg-blue-100 group-hover:text-blue-600'
                    }
                  `}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  {isSelected && (
                    <div className="bg-blue-600 rounded-full p-1">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                  )}
                </div>

                {/* Impact Details */}
                <div className="space-y-2">
                  <div className={`text-xs font-medium uppercase tracking-wide transition-colors duration-300 ${
                    isSelected ? 'text-blue-600' : 'text-gray-500 group-hover:text-blue-500'
                  }`}>
                    {impactInfo?.category || 'Business Impact'}
                  </div>
                  <div className={`font-semibold transition-colors duration-300 ${
                    isSelected ? 'text-blue-900' : 'text-gray-900 group-hover:text-blue-800'
                  }`}>
                    {option.label}
                  </div>
                </div>
              </div>
            </button>
          )
        })}
      </div>

      {/* Selected Impacts Summary */}
      {selectedImpacts.length > 0 && (
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
          <h4 className="font-semibold text-blue-900 mb-4">Selected Business Impacts</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {selectedImpacts.map((impactValue: string) => {
              const option = question.options?.find(o => o.value === impactValue)
              const impactInfo = impactCategories[impactValue as keyof typeof impactCategories]
              const IconComponent = impactInfo?.icon || AlertTriangle
              const colorClass = impactInfo?.color || 'from-gray-500 to-gray-600'

              return (
                <div key={impactValue} className="flex items-center space-x-3 bg-white rounded-lg p-3 border border-blue-200">
                  <div className={`
                    w-8 h-8 rounded-lg bg-gradient-to-br ${colorClass} text-white
                    flex items-center justify-center
                  `}>
                    <IconComponent className="w-4 h-4" />
                  </div>
                  <div className="text-blue-800 font-medium text-sm">{option?.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}

// Timeline Urgency Selector Component
function TimelineUrgencySelector({ question, value, onChange }: { question: Question, value: any, onChange: (value: any) => void }) {
  const urgencyLevels = {
    'immediate': {
      label: 'Immediate priority (this month)',
      icon: AlertTriangle,
      color: 'from-red-500 to-red-600',
      urgency: 'critical',
      description: 'Critical business need'
    },
    'this-quarter': {
      label: 'This quarter (next 3 months)',
      icon: Clock,
      color: 'from-orange-500 to-orange-600',
      urgency: 'high',
      description: 'High priority initiative'
    },
    'next-6-months': {
      label: 'Next 6 months',
      icon: Calendar,
      color: 'from-blue-500 to-blue-600',
      urgency: 'medium',
      description: 'Planned improvement'
    },
    'within-year': {
      label: 'Within the year',
      icon: Target,
      color: 'from-green-500 to-green-600',
      urgency: 'medium',
      description: 'Strategic planning'
    },
    'next-year': {
      label: 'Next year planning',
      icon: Lightbulb,
      color: 'from-purple-500 to-purple-600',
      urgency: 'low',
      description: 'Future consideration'
    },
    'exploring': {
      label: 'Just exploring options',
      icon: Settings,
      color: 'from-gray-500 to-gray-600',
      urgency: 'low',
      description: 'Research phase'
    }
  }

  const selectedUrgency = urgencyLevels[value as keyof typeof urgencyLevels]

  return (
    <div className="space-y-8">
      {/* Current Selection Display */}
      {selectedUrgency && (
        <div className="text-center">
          <div className="inline-flex items-center space-x-4 bg-white rounded-xl border-2 border-gray-200 px-6 py-4">
            <div className={`
              w-12 h-12 rounded-lg bg-gradient-to-br ${selectedUrgency.color} text-white
              flex items-center justify-center
            `}>
              <selectedUrgency.icon className="w-6 h-6" />
            </div>
            <div className="text-left">
              <div className="text-lg font-semibold text-gray-900">{selectedUrgency.label}</div>
              <div className="text-sm text-gray-600">{selectedUrgency.description}</div>
            </div>
          </div>
        </div>
      )}

      {/* Timeline Options */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {question.options?.map((option) => {
          const urgencyInfo = urgencyLevels[option.value as keyof typeof urgencyLevels]
          const IconComponent = urgencyInfo?.icon || Clock
          const isSelected = value === option.value
          const colorClass = urgencyInfo?.color || 'from-gray-500 to-gray-600'

          return (
            <button
              key={option.value}
              type="button"
              onClick={() => onChange(option.value)}
              className={`
                relative p-6 rounded-xl border-2 transition-all duration-300 text-left group overflow-hidden
                ${isSelected
                  ? 'border-blue-600 bg-white shadow-lg transform scale-105'
                  : 'border-gray-200 bg-white hover:border-blue-300 hover:shadow-md hover:transform hover:scale-102'
                }
              `}
            >
              {/* Background Gradient */}
              {isSelected && (
                <div className={`absolute inset-0 bg-gradient-to-br ${colorClass} opacity-5`} />
              )}

              <div className="relative space-y-4">
                {/* Timeline Icon and Urgency */}
                <div className="flex items-center justify-between">
                  <div className={`
                    p-3 rounded-lg flex items-center justify-center transition-all duration-300
                    ${isSelected
                      ? `bg-gradient-to-br ${colorClass} text-white shadow-md`
                      : 'bg-gray-100 text-gray-700 group-hover:bg-blue-100 group-hover:text-blue-600'
                    }
                  `}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  {isSelected && (
                    <div className="bg-blue-600 rounded-full p-1">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                  )}
                </div>

                {/* Timeline Details */}
                <div className="space-y-2">
                  <div className={`text-xs font-medium uppercase tracking-wide transition-colors duration-300 ${
                    isSelected ? 'text-blue-600' : 'text-gray-500 group-hover:text-blue-500'
                  }`}>
                    {urgencyInfo?.description || 'Timeline'}
                  </div>
                  <div className={`font-semibold transition-colors duration-300 ${
                    isSelected ? 'text-blue-900' : 'text-gray-900 group-hover:text-blue-800'
                  }`}>
                    {option.label}
                  </div>
                </div>
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}


// Success Vision Component
function SuccessVisionTextarea({ question, value, onChange }: { question: Question, value: any, onChange: (value: any) => void }) {
  const [wordCount, setWordCount] = useState(0)
  const [isTyping, setIsTyping] = useState(false)

  useEffect(() => {
    const words = value ? value.trim().split(/\s+/).filter((word: string) => word.length > 0).length : 0
    setWordCount(words)
  }, [value])

  const handleChange = (newValue: string) => {
    setIsTyping(true)
    onChange(newValue)

    // Clear typing indicator after 1 second of no typing
    setTimeout(() => setIsTyping(false), 1000)
  }

  const getProgressColor = () => {
    if (wordCount < 10) return 'from-red-500 to-red-600'
    if (wordCount < 25) return 'from-orange-500 to-orange-600'
    if (wordCount < 50) return 'from-blue-500 to-blue-600'
    return 'from-green-500 to-green-600'
  }

  const getProgressMessage = () => {
    if (wordCount < 10) return 'Share more details for better insights'
    if (wordCount < 25) return 'Good start! Add more specifics'
    if (wordCount < 50) return 'Great detail! This helps us understand'
    return 'Excellent! Very comprehensive vision'
  }

  return (
    <div className="space-y-6">
      {/* Vision Prompt */}
      <div className="text-center space-y-3">
        <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
          <Lightbulb className="w-8 h-8 text-white" />
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-gray-900">Paint Your Success Picture</h3>
          <p className="text-gray-600">Describe what perfect would look like for your organization</p>
        </div>
      </div>

      {/* Interactive Textarea */}
      <div className="relative">
        <Textarea
          value={value || ""}
          onChange={(e) => handleChange(e.target.value)}
          placeholder={question.placeholder || "Describe what perfect would look like - time saved, stress reduced, growth enabled..."}
          className={`
            min-h-[150px] p-6 text-lg border-2 rounded-xl transition-all duration-300 resize-none
            ${isTyping
              ? 'border-blue-600 ring-2 ring-blue-100 shadow-lg'
              : 'border-gray-200 hover:border-blue-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100'
            }
          `}
          style={{ fontSize: '16px', lineHeight: '1.6' }}
        />

        {/* Typing Indicator */}
        {isTyping && (
          <div className="absolute top-3 right-3">
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
              <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
              <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
            </div>
          </div>
        )}
      </div>

      {/* Progress Indicator */}
      <div className="space-y-4">
        {/* Word Count and Progress */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className={`
              w-8 h-8 rounded-lg bg-gradient-to-br ${getProgressColor()} text-white
              flex items-center justify-center text-sm font-bold
            `}>
              {wordCount}
            </div>
            <div className="text-sm text-gray-600">
              words • {getProgressMessage()}
            </div>
          </div>
          <div className="text-xs text-gray-500">
            {value?.length || 0} characters
          </div>
        </div>

        {/* Visual Progress Bar */}
        <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className={`h-full bg-gradient-to-r ${getProgressColor()} transition-all duration-500 rounded-full`}
            style={{ width: `${Math.min((wordCount / 50) * 100, 100)}%` }}
          />
        </div>
      </div>

      {/* Success Inspiration Prompts */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg border border-blue-200">
          <div className="flex items-center space-x-2 mb-2">
            <Timer className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-900">Time Impact</span>
          </div>
          <p className="text-xs text-blue-700">How much time would you save? What would you do with that time?</p>
        </div>

        <div className="p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-lg border border-green-200">
          <div className="flex items-center space-x-2 mb-2">
            <TrendingUp className="w-4 h-4 text-green-600" />
            <span className="text-sm font-medium text-green-900">Growth Impact</span>
          </div>
          <p className="text-xs text-green-700">How would this enable growth? What new opportunities would open?</p>
        </div>

        <div className="p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg border border-purple-200">
          <div className="flex items-center space-x-2 mb-2">
            <Users className="w-4 h-4 text-purple-600" />
            <span className="text-sm font-medium text-purple-900">Team Impact</span>
          </div>
          <p className="text-xs text-purple-700">How would your team feel? What stress would be eliminated?</p>
        </div>
      </div>
    </div>
  )
}

// Finance Time Consumers Selector Component
function FinanceTimeConsumersSelector({ question, value, onChange }: { question: Question, value: any, onChange: (value: any) => void }) {
  const selectedProcesses = value || []

  const processCategories = {
    'vendor-invoices-ap': {
      category: 'Accounts Payable',
      icon: FileText,
      color: 'from-blue-500 to-blue-600',
      description: 'Invoice processing'
    },
    'customer-invoices-ar': {
      category: 'Accounts Receivable',
      icon: DollarSign,
      color: 'from-green-500 to-green-600',
      description: 'Revenue collection'
    },
    'expense-reports': {
      category: 'Expense Management',
      icon: Calculator,
      color: 'from-purple-500 to-purple-600',
      description: 'Employee expenses'
    },
    'payment-processing': {
      category: 'Payment Operations',
      icon: CreditCard,
      color: 'from-orange-500 to-orange-600',
      description: 'Payment approvals'
    },
    'financial-reporting': {
      category: 'Financial Analysis',
      icon: BarChart3,
      color: 'from-indigo-500 to-indigo-600',
      description: 'Reports & analysis'
    },
    'bank-reconciliation': {
      category: 'Bank Operations',
      icon: Building,
      color: 'from-teal-500 to-teal-600',
      description: 'Account reconciliation'
    },
    'budget-tracking': {
      category: 'Budget Management',
      icon: Target,
      color: 'from-pink-500 to-pink-600',
      description: 'Budget monitoring'
    },
    'month-end-closing': {
      category: 'Period Closing',
      icon: Calendar,
      color: 'from-red-500 to-red-600',
      description: 'Month-end procedures'
    }
  }

  const handleProcessToggle = (processValue: string) => {
    const newSelection = selectedProcesses.includes(processValue)
      ? selectedProcesses.filter((p: string) => p !== processValue)
      : [...selectedProcesses, processValue]

    // Respect maxSelections limit
    if (question.maxSelections && newSelection.length <= question.maxSelections) {
      onChange(newSelection)
    } else if (!question.maxSelections) {
      onChange(newSelection)
    }
  }

  return (
    <div className="space-y-8">
      {/* Selection Overview */}
      <div className="text-center">
        <div className="inline-flex items-center space-x-4 bg-white rounded-xl border-2 border-gray-200 px-6 py-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900">{selectedProcesses.length}</div>
            <div className="text-xs text-gray-600">Selected</div>
          </div>
          <div className="w-px h-8 bg-gray-300" />
          <div className="text-center">
            <div className="text-lg font-semibold text-blue-600">
              {question.maxSelections ? `${selectedProcesses.length}/${question.maxSelections}` : selectedProcesses.length}
            </div>
            <div className="text-xs text-gray-600">Time Consumers</div>
          </div>
        </div>
      </div>

      {/* Process Selection Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {question.options?.map((option) => {
          const processInfo = processCategories[option.value as keyof typeof processCategories]
          const IconComponent = processInfo?.icon || FileText
          const isSelected = selectedProcesses.includes(option.value)
          const colorClass = processInfo?.color || 'from-gray-500 to-gray-600'

          return (
            <button
              key={option.value}
              type="button"
              onClick={() => handleProcessToggle(option.value)}
              className={`
                relative h-full min-h-[140px] p-6 rounded-xl border-2 transition-all duration-300 text-left group overflow-hidden flex flex-col justify-between
                ${isSelected
                  ? 'border-blue-600 bg-white shadow-lg transform scale-105'
                  : 'border-gray-200 bg-white hover:border-blue-300 hover:shadow-md hover:transform hover:scale-102'
                }
              `}
            >
              {/* Background Gradient */}
              {isSelected && (
                <div className={`absolute inset-0 bg-gradient-to-br ${colorClass} opacity-5`} />
              )}

              <div className="relative space-y-4 flex-1">
                {/* Process Icon and Category */}
                <div className="flex items-center justify-between">
                  <div className={`
                    p-3 rounded-lg flex items-center justify-center transition-all duration-300 flex-shrink-0
                    ${isSelected
                      ? `bg-gradient-to-br ${colorClass} text-white shadow-md`
                      : 'bg-gray-100 text-gray-700 group-hover:bg-blue-100 group-hover:text-blue-600'
                    }
                  `}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  {isSelected && (
                    <div className="bg-blue-600 rounded-full p-1">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                  )}
                </div>

                {/* Process Details */}
                <div className="space-y-2 flex-1 flex flex-col justify-center">
                  <div className={`text-xs font-medium uppercase tracking-wide transition-colors duration-300 ${
                    isSelected ? 'text-blue-600' : 'text-gray-500 group-hover:text-blue-500'
                  }`}>
                    {processInfo?.category || 'Financial Process'}
                  </div>
                  <div className={`font-semibold leading-tight transition-colors duration-300 ${
                    isSelected ? 'text-blue-900' : 'text-gray-900 group-hover:text-blue-800'
                  }`}>
                    {option.label}
                  </div>
                  <div className={`text-sm transition-colors duration-300 ${
                    isSelected ? 'text-blue-700' : 'text-gray-600 group-hover:text-blue-600'
                  }`}>
                    {processInfo?.description}
                  </div>
                </div>
              </div>
            </button>
          )
        })}
      </div>

      {/* Selection Limit Warning */}
      {question.maxSelections && (
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-4 border border-amber-200">
          <div className="flex items-center space-x-3">
            <Target className="w-5 h-5 text-amber-600" />
            <span className="text-sm text-amber-700 font-medium">
              Select up to {question.maxSelections} main time consumers ({selectedProcesses.length}/{question.maxSelections} selected)
            </span>
          </div>
        </div>
      )}
    </div>
  )
}

// Invoice Processing Time Selector Component
function InvoiceProcessingTimeSelector({ question, value, onChange }: { question: Question, value: any, onChange: (value: any) => void }) {
  const timeRanges = {
    'under-5': {
      label: 'Under 5 minutes',
      description: 'Highly automated',
      efficiency: 'excellent',
      color: 'from-green-500 to-green-600',
      icon: Zap
    },
    '5-10': {
      label: '5-10 minutes',
      description: 'Very efficient',
      efficiency: 'very-good',
      color: 'from-blue-500 to-blue-600',
      icon: Timer
    },
    '10-20': {
      label: '10-20 minutes',
      description: 'Good efficiency',
      efficiency: 'good',
      color: 'from-purple-500 to-purple-600',
      icon: Clock
    },
    '20-30': {
      label: '20-30 minutes',
      description: 'Average processing',
      efficiency: 'average',
      color: 'from-orange-500 to-orange-600',
      icon: Clock
    },
    '30-45': {
      label: '30-45 minutes',
      description: 'Below average',
      efficiency: 'below-average',
      color: 'from-red-500 to-red-600',
      icon: AlertTriangle
    },
    '45-60': {
      label: '45-60 minutes',
      description: 'Needs improvement',
      efficiency: 'poor',
      color: 'from-red-600 to-red-700',
      icon: AlertTriangle
    },
    '1-2-hours': {
      label: '1-2 hours',
      description: 'Significant delays',
      efficiency: 'very-poor',
      color: 'from-red-700 to-red-800',
      icon: AlertTriangle
    },
    'more-than-2': {
      label: 'More than 2 hours',
      description: 'Critical inefficiency',
      efficiency: 'critical',
      color: 'from-red-800 to-red-900',
      icon: AlertTriangle
    }
  }

  const selectedTime = timeRanges[value as keyof typeof timeRanges]

  return (
    <div className="space-y-8">
      {/* Current Selection Display */}
      {selectedTime && (
        <div className="text-center">
          <div className="space-y-3">
            <div className="text-5xl font-bold text-blue-600">{selectedTime.label}</div>
            <div className="text-lg text-gray-600">{selectedTime.description}</div>
          </div>
        </div>
      )}

      {/* Time Range Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {question.options?.map((option) => {
          const timeInfo = timeRanges[option.value as keyof typeof timeRanges]
          const IconComponent = timeInfo?.icon || Clock
          const isSelected = value === option.value
          const colorClass = timeInfo?.color || 'from-gray-500 to-gray-600'

          return (
            <button
              key={option.value}
              type="button"
              onClick={() => onChange(option.value)}
              className={`
                relative p-6 rounded-xl border-2 transition-all duration-300 text-center group overflow-hidden
                ${isSelected
                  ? 'border-blue-600 bg-white shadow-lg transform scale-105'
                  : 'border-gray-200 bg-white hover:border-blue-300 hover:shadow-md hover:transform hover:scale-102'
                }
              `}
            >
              {/* Background Gradient */}
              {isSelected && (
                <div className={`absolute inset-0 bg-gradient-to-br ${colorClass} opacity-5`} />
              )}

              <div className="relative space-y-4">
                {/* Time Icon */}
                <div className={`
                  w-12 h-12 mx-auto rounded-lg flex items-center justify-center transition-all duration-300
                  ${isSelected
                    ? `bg-gradient-to-br ${colorClass} text-white shadow-md`
                    : 'bg-gray-100 text-gray-700 group-hover:bg-blue-100 group-hover:text-blue-600'
                  }
                `}>
                  <IconComponent className="w-6 h-6" />
                </div>

                {/* Time Details */}
                <div className="space-y-2">
                  <div className={`font-semibold transition-colors duration-300 ${
                    isSelected ? 'text-blue-900' : 'text-gray-900 group-hover:text-blue-800'
                  }`}>
                    {timeInfo?.label || option.label}
                  </div>
                  <div className={`text-xs transition-colors duration-300 ${
                    isSelected ? 'text-blue-700' : 'text-gray-600 group-hover:text-blue-600'
                  }`}>
                    {timeInfo?.description}
                  </div>
                </div>

                {isSelected && (
                  <div className="absolute top-3 right-3">
                    <div className="bg-blue-600 rounded-full p-1">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                  </div>
                )}
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}

// Error Frequency Selector Component
function ErrorFrequencySelector({ question, value, onChange }: { question: Question, value: any, onChange: (value: any) => void }) {
  const frequencyLevels = {
    'multiple-daily': {
      label: 'Multiple times daily',
      severity: 'critical',
      color: 'from-red-600 to-red-700',
      icon: AlertTriangle,
      impact: 'Critical impact'
    },
    'daily': {
      label: 'Daily',
      severity: 'high',
      color: 'from-red-500 to-red-600',
      icon: AlertTriangle,
      impact: 'High impact'
    },
    'few-times-week': {
      label: 'Few times per week',
      severity: 'medium-high',
      color: 'from-orange-500 to-orange-600',
      icon: AlertTriangle,
      impact: 'Medium-high impact'
    },
    'weekly': {
      label: 'Weekly',
      severity: 'medium',
      color: 'from-yellow-500 to-yellow-600',
      icon: Clock,
      impact: 'Medium impact'
    },
    'few-times-month': {
      label: 'Few times per month',
      severity: 'low-medium',
      color: 'from-blue-500 to-blue-600',
      icon: Clock,
      impact: 'Low-medium impact'
    },
    'monthly': {
      label: 'Monthly',
      severity: 'low',
      color: 'from-green-500 to-green-600',
      icon: CheckCircle2,
      impact: 'Low impact'
    },
    'rarely': {
      label: 'Rarely',
      severity: 'minimal',
      color: 'from-green-600 to-green-700',
      icon: CheckCircle2,
      impact: 'Minimal impact'
    }
  }

  const selectedFrequency = frequencyLevels[value as keyof typeof frequencyLevels]

  return (
    <div className="space-y-8">
      {/* Current Selection Display */}
      {selectedFrequency && (
        <div className="text-center">
          <div className="inline-flex items-center space-x-4 bg-white rounded-xl border-2 border-gray-200 px-6 py-4">
            <div className={`
              w-12 h-12 rounded-lg bg-gradient-to-br ${selectedFrequency.color} text-white
              flex items-center justify-center
            `}>
              <selectedFrequency.icon className="w-6 h-6" />
            </div>
            <div className="text-left">
              <div className="text-lg font-semibold text-gray-900">{selectedFrequency.label}</div>
              <div className="text-sm text-gray-600">{selectedFrequency.impact}</div>
            </div>
          </div>
        </div>
      )}

      {/* Frequency Options */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {question.options?.map((option) => {
          const freqInfo = frequencyLevels[option.value as keyof typeof frequencyLevels]
          const IconComponent = freqInfo?.icon || Clock
          const isSelected = value === option.value
          const colorClass = freqInfo?.color || 'from-gray-500 to-gray-600'

          return (
            <button
              key={option.value}
              type="button"
              onClick={() => onChange(option.value)}
              className={`
                relative p-6 rounded-xl border-2 transition-all duration-300 text-left group overflow-hidden
                ${isSelected
                  ? 'border-blue-600 bg-white shadow-lg transform scale-105'
                  : 'border-gray-200 bg-white hover:border-blue-300 hover:shadow-md hover:transform hover:scale-102'
                }
              `}
            >
              {/* Background Gradient */}
              {isSelected && (
                <div className={`absolute inset-0 bg-gradient-to-br ${colorClass} opacity-5`} />
              )}

              <div className="relative space-y-4">
                {/* Frequency Icon */}
                <div className="flex items-center justify-between">
                  <div className={`
                    p-3 rounded-lg flex items-center justify-center transition-all duration-300
                    ${isSelected
                      ? `bg-gradient-to-br ${colorClass} text-white shadow-md`
                      : 'bg-gray-100 text-gray-700 group-hover:bg-blue-100 group-hover:text-blue-600'
                    }
                  `}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  {isSelected && (
                    <div className="bg-blue-600 rounded-full p-1">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                  )}
                </div>

                {/* Frequency Details */}
                <div className="space-y-2">
                  <div className={`font-semibold transition-colors duration-300 ${
                    isSelected ? 'text-blue-900' : 'text-gray-900 group-hover:text-blue-800'
                  }`}>
                    {option.label}
                  </div>
                  <div className={`text-sm transition-colors duration-300 ${
                    isSelected ? 'text-blue-700' : 'text-gray-600 group-hover:text-blue-600'
                  }`}>
                    {freqInfo?.impact}
                  </div>
                </div>
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}

// Systems Count Selector Component
function SystemsCountSelector({ question, value, onChange }: { question: Question, value: any, onChange: (value: any) => void }) {
  const systemRanges = {
    '1-2': {
      label: '1-2 systems',
      description: 'Highly integrated',
      complexity: 'simple',
      color: 'from-green-500 to-green-600',
      icon: CheckCircle2
    },
    '3-4': {
      label: '3-4 systems',
      description: 'Well managed',
      complexity: 'manageable',
      color: 'from-blue-500 to-blue-600',
      icon: Settings
    },
    '5-6': {
      label: '5-6 systems',
      description: 'Getting complex',
      complexity: 'moderate',
      color: 'from-purple-500 to-purple-600',
      icon: Database
    },
    '7-8': {
      label: '7-8 systems',
      description: 'Complex integration',
      complexity: 'complex',
      color: 'from-orange-500 to-orange-600',
      icon: AlertTriangle
    },
    '9-10': {
      label: '9-10 systems',
      description: 'Very complex',
      complexity: 'very-complex',
      color: 'from-red-500 to-red-600',
      icon: AlertTriangle
    },
    'more-than-10': {
      label: 'More than 10 systems',
      description: 'Extremely complex',
      complexity: 'extreme',
      color: 'from-red-600 to-red-700',
      icon: AlertTriangle
    }
  }

  const selectedRange = systemRanges[value as keyof typeof systemRanges]

  return (
    <div className="space-y-8">
      {/* Current Selection Display */}
      {selectedRange && (
        <div className="text-center">
          <div className="space-y-3">
            <div className="text-5xl font-bold text-blue-600">{selectedRange.label.split(' ')[0]}</div>
            <div className="text-lg text-gray-600">{selectedRange.description}</div>
          </div>
        </div>
      )}

      {/* System Range Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {question.options?.map((option) => {
          const systemInfo = systemRanges[option.value as keyof typeof systemRanges]
          const IconComponent = systemInfo?.icon || Database
          const isSelected = value === option.value
          const colorClass = systemInfo?.color || 'from-gray-500 to-gray-600'

          return (
            <button
              key={option.value}
              type="button"
              onClick={() => onChange(option.value)}
              className={`
                relative p-6 rounded-xl border-2 transition-all duration-300 text-center group overflow-hidden
                ${isSelected
                  ? 'border-blue-600 bg-white shadow-lg transform scale-105'
                  : 'border-gray-200 bg-white hover:border-blue-300 hover:shadow-md hover:transform hover:scale-102'
                }
              `}
            >
              {/* Background Gradient */}
              {isSelected && (
                <div className={`absolute inset-0 bg-gradient-to-br ${colorClass} opacity-5`} />
              )}

              <div className="relative space-y-4">
                {/* System Icon */}
                <div className={`
                  w-12 h-12 mx-auto rounded-lg flex items-center justify-center transition-all duration-300
                  ${isSelected
                    ? `bg-gradient-to-br ${colorClass} text-white shadow-md`
                    : 'bg-gray-100 text-gray-700 group-hover:bg-blue-100 group-hover:text-blue-600'
                  }
                `}>
                  <IconComponent className="w-6 h-6" />
                </div>

                {/* System Details */}
                <div className="space-y-2">
                  <div className={`font-semibold transition-colors duration-300 ${
                    isSelected ? 'text-blue-900' : 'text-gray-900 group-hover:text-blue-800'
                  }`}>
                    {systemInfo?.label || option.label}
                  </div>
                  <div className={`text-sm transition-colors duration-300 ${
                    isSelected ? 'text-blue-700' : 'text-gray-600 group-hover:text-blue-600'
                  }`}>
                    {systemInfo?.description}
                  </div>
                </div>

                {isSelected && (
                  <div className="absolute top-3 right-3">
                    <div className="bg-blue-600 rounded-full p-1">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                  </div>
                )}
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}

// Finance Transformation Priorities Selector Component
function FinanceTransformationSelector({ question, value, onChange }: { question: Question, value: any, onChange: (value: any) => void }) {
  const selectedPriorities = value || []

  const transformationCategories = {
    'automated-invoice-processing': {
      category: 'Process Automation',
      icon: Zap,
      color: 'from-blue-500 to-blue-600',
      impact: 'High efficiency gain'
    },
    'real-time-visibility': {
      category: 'Financial Intelligence',
      icon: BarChart3,
      color: 'from-green-500 to-green-600',
      impact: 'Better decision making'
    },
    'eliminate-data-entry': {
      category: 'Manual Work Reduction',
      icon: Target,
      color: 'from-purple-500 to-purple-600',
      impact: 'Time savings'
    },
    'faster-approvals': {
      category: 'Workflow Optimization',
      icon: CheckCircle2,
      color: 'from-orange-500 to-orange-600',
      impact: 'Speed improvement'
    },
    'error-free-processing': {
      category: 'Quality Assurance',
      icon: Shield,
      color: 'from-teal-500 to-teal-600',
      impact: 'Accuracy improvement'
    },
    'better-compliance': {
      category: 'Risk Management',
      icon: FileText,
      color: 'from-indigo-500 to-indigo-600',
      impact: 'Compliance assurance'
    },
    'strategic-analysis': {
      category: 'Strategic Focus',
      icon: Lightbulb,
      color: 'from-pink-500 to-pink-600',
      impact: 'Value-added work'
    },
    'reduced-month-end': {
      category: 'Stress Reduction',
      icon: Calendar,
      color: 'from-red-500 to-red-600',
      impact: 'Work-life balance'
    }
  }

  const handlePriorityToggle = (priorityValue: string) => {
    const newSelection = selectedPriorities.includes(priorityValue)
      ? selectedPriorities.filter((p: string) => p !== priorityValue)
      : [...selectedPriorities, priorityValue]

    // Respect maxSelections limit
    if (question.maxSelections && newSelection.length <= question.maxSelections) {
      onChange(newSelection)
    } else if (!question.maxSelections) {
      onChange(newSelection)
    }
  }

  return (
    <div className="space-y-8">
      {/* Selection Overview */}
      <div className="text-center">
        <div className="inline-flex items-center space-x-4 bg-white rounded-xl border-2 border-gray-200 px-6 py-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900">{selectedPriorities.length}</div>
            <div className="text-xs text-gray-600">Selected</div>
          </div>
          <div className="w-px h-8 bg-gray-300" />
          <div className="text-center">
            <div className="text-lg font-semibold text-blue-600">
              {question.maxSelections ? `${selectedPriorities.length}/${question.maxSelections}` : selectedPriorities.length}
            </div>
            <div className="text-xs text-gray-600">Priorities</div>
          </div>
        </div>
      </div>

      {/* Transformation Priorities Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {question.options?.map((option) => {
          const priorityInfo = transformationCategories[option.value as keyof typeof transformationCategories]
          const IconComponent = priorityInfo?.icon || Target
          const isSelected = selectedPriorities.includes(option.value)
          const colorClass = priorityInfo?.color || 'from-gray-500 to-gray-600'

          return (
            <button
              key={option.value}
              type="button"
              onClick={() => handlePriorityToggle(option.value)}
              className={`
                relative h-full min-h-[140px] p-6 rounded-xl border-2 transition-all duration-300 text-left group overflow-hidden flex flex-col justify-between
                ${isSelected
                  ? 'border-blue-600 bg-white shadow-lg transform scale-105'
                  : 'border-gray-200 bg-white hover:border-blue-300 hover:shadow-md hover:transform hover:scale-102'
                }
              `}
            >
              {/* Background Gradient */}
              {isSelected && (
                <div className={`absolute inset-0 bg-gradient-to-br ${colorClass} opacity-5`} />
              )}

              <div className="relative space-y-4 flex-1">
                {/* Priority Icon and Category */}
                <div className="flex items-center justify-between">
                  <div className={`
                    p-3 rounded-lg flex items-center justify-center transition-all duration-300 flex-shrink-0
                    ${isSelected
                      ? `bg-gradient-to-br ${colorClass} text-white shadow-md`
                      : 'bg-gray-100 text-gray-700 group-hover:bg-blue-100 group-hover:text-blue-600'
                    }
                  `}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  {isSelected && (
                    <div className="bg-blue-600 rounded-full p-1">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                  )}
                </div>

                {/* Priority Details */}
                <div className="space-y-2 flex-1 flex flex-col justify-center">
                  <div className={`text-xs font-medium uppercase tracking-wide transition-colors duration-300 ${
                    isSelected ? 'text-blue-600' : 'text-gray-500 group-hover:text-blue-500'
                  }`}>
                    {priorityInfo?.category || 'Transformation'}
                  </div>
                  <div className={`font-semibold leading-tight transition-colors duration-300 ${
                    isSelected ? 'text-blue-900' : 'text-gray-900 group-hover:text-blue-800'
                  }`}>
                    {option.label}
                  </div>
                  <div className={`text-sm transition-colors duration-300 ${
                    isSelected ? 'text-blue-700' : 'text-gray-600 group-hover:text-blue-600'
                  }`}>
                    {priorityInfo?.impact}
                  </div>
                </div>
              </div>
            </button>
          )
        })}
      </div>

      {/* Selection Limit Warning */}
      {question.maxSelections && (
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-200">
          <div className="flex items-center space-x-3">
            <Target className="w-5 h-5 text-blue-600" />
            <span className="text-sm text-blue-700 font-medium">
              Select your top {question.maxSelections} transformation priorities ({selectedPriorities.length}/{question.maxSelections} selected)
            </span>
          </div>
        </div>
      )}
    </div>
  )
}

// System Types Selector Component
function SystemTypesSelector({ question, value, onChange }: { question: Question, value: any, onChange: (value: any) => void }) {
  const selectedTypes = value || []

  const systemCategories = {
    'erp-system': {
      category: 'Enterprise System',
      icon: Building,
      color: 'from-blue-500 to-blue-600',
      description: 'Integrated business suite'
    },
    'accounting-software': {
      category: 'Financial Software',
      icon: Calculator,
      color: 'from-green-500 to-green-600',
      description: 'Dedicated accounting'
    },
    'bank-portals': {
      category: 'Banking Interface',
      icon: CreditCard,
      color: 'from-purple-500 to-purple-600',
      description: 'Online banking'
    },
    'expense-management': {
      category: 'Expense Tools',
      icon: FileText,
      color: 'from-orange-500 to-orange-600',
      description: 'Expense tracking'
    },
    'payment-platforms': {
      category: 'Payment Systems',
      icon: DollarSign,
      color: 'from-teal-500 to-teal-600',
      description: 'Payment processing'
    },
    'spreadsheets': {
      category: 'Manual Tools',
      icon: BarChart3,
      color: 'from-yellow-500 to-yellow-600',
      description: 'Excel/Google Sheets'
    },
    'paper-based': {
      category: 'Traditional Process',
      icon: FileText,
      color: 'from-gray-500 to-gray-600',
      description: 'Physical documents'
    }
  }

  const handleTypeToggle = (typeValue: string) => {
    const newSelection = selectedTypes.includes(typeValue)
      ? selectedTypes.filter((t: string) => t !== typeValue)
      : [...selectedTypes, typeValue]
    onChange(newSelection)
  }

  return (
    <div className="space-y-8">
      {/* Selection Overview */}
      <div className="text-center">
        <div className="inline-flex items-center space-x-4 bg-white rounded-xl border-2 border-gray-200 px-6 py-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900">{selectedTypes.length}</div>
            <div className="text-xs text-gray-600">System Types</div>
          </div>
          <div className="w-px h-8 bg-gray-300" />
          <div className="text-center">
            <div className="text-lg font-semibold text-blue-600">
              {selectedTypes.length === 0 ? 'None' :
               selectedTypes.length <= 2 ? 'Simple' :
               selectedTypes.length <= 4 ? 'Moderate' : 'Complex'}
            </div>
            <div className="text-xs text-gray-600">Complexity</div>
          </div>
        </div>
      </div>

      {/* System Types Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {question.options?.map((option) => {
          const typeInfo = systemCategories[option.value as keyof typeof systemCategories]
          const IconComponent = typeInfo?.icon || Database
          const isSelected = selectedTypes.includes(option.value)
          const colorClass = typeInfo?.color || 'from-gray-500 to-gray-600'

          return (
            <button
              key={option.value}
              type="button"
              onClick={() => handleTypeToggle(option.value)}
              className={`
                relative h-full min-h-[120px] p-6 rounded-xl border-2 transition-all duration-300 text-left group overflow-hidden flex flex-col justify-between
                ${isSelected
                  ? 'border-blue-600 bg-white shadow-lg transform scale-105'
                  : 'border-gray-200 bg-white hover:border-blue-300 hover:shadow-md hover:transform hover:scale-102'
                }
              `}
            >
              {/* Background Gradient */}
              {isSelected && (
                <div className={`absolute inset-0 bg-gradient-to-br ${colorClass} opacity-5`} />
              )}

              <div className="relative space-y-4 flex-1">
                {/* System Icon and Category */}
                <div className="flex items-center justify-between">
                  <div className={`
                    p-3 rounded-lg flex items-center justify-center transition-all duration-300 flex-shrink-0
                    ${isSelected
                      ? `bg-gradient-to-br ${colorClass} text-white shadow-md`
                      : 'bg-gray-100 text-gray-700 group-hover:bg-blue-100 group-hover:text-blue-600'
                    }
                  `}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  {isSelected && (
                    <div className="bg-blue-600 rounded-full p-1">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                  )}
                </div>

                {/* System Details */}
                <div className="space-y-2 flex-1 flex flex-col justify-center">
                  <div className={`text-xs font-medium uppercase tracking-wide transition-colors duration-300 ${
                    isSelected ? 'text-blue-600' : 'text-gray-500 group-hover:text-blue-500'
                  }`}>
                    {typeInfo?.category || 'System Type'}
                  </div>
                  <div className={`font-semibold leading-tight transition-colors duration-300 ${
                    isSelected ? 'text-blue-900' : 'text-gray-900 group-hover:text-blue-800'
                  }`}>
                    {option.label}
                  </div>
                  <div className={`text-sm transition-colors duration-300 ${
                    isSelected ? 'text-blue-700' : 'text-gray-600 group-hover:text-blue-600'
                  }`}>
                    {typeInfo?.description}
                  </div>
                </div>
              </div>
            </button>
          )
        })}
      </div>

      {/* Selected Systems Summary */}
      {selectedTypes.length > 0 && (
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
          <h4 className="font-semibold text-blue-900 mb-4">Selected System Types</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {selectedTypes.map((typeValue: string) => {
              const option = question.options?.find(o => o.value === typeValue)
              const typeInfo = systemCategories[typeValue as keyof typeof systemCategories]
              const IconComponent = typeInfo?.icon || Database
              const colorClass = typeInfo?.color || 'from-gray-500 to-gray-600'

              return (
                <div key={typeValue} className="flex items-center space-x-3 bg-white rounded-lg p-3 border border-blue-200">
                  <div className={`
                    w-8 h-8 rounded-lg bg-gradient-to-br ${colorClass} text-white
                    flex items-center justify-center
                  `}>
                    <IconComponent className="w-4 h-4" />
                  </div>
                  <div className="text-blue-800 font-medium text-sm">{option?.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}

// Transaction Volumes Slider Component
function TransactionVolumesSlider({ question, value, onChange }: { question: Question, value: any, onChange: (value: any) => void }) {
  const volumeData = value || {}

  const updateVolumeValue = (category: string, newValue: string) => {
    onChange({
      ...volumeData,
      [category]: newValue
    })
  }

  const getVolumeLevel = (category: string, selectedValue: string) => {
    if (!selectedValue) return 'Not selected'

    const volumeMap: { [key: string]: string } = {
      'less-than-50': 'Low Volume',
      '50-100': 'Moderate Volume',
      '101-250': 'High Volume',
      '251-500': 'Very High Volume',
      '501-1000': 'Enterprise Volume',
      'more-than-1000': 'Large Enterprise',
      'less-than-25': 'Low Volume',
      '25-50': 'Moderate Volume',
      '51-100': 'High Volume',
      '101-200': 'Very High Volume',
      'more-than-200': 'Enterprise Volume'
    }

    return volumeMap[selectedValue] || 'Unknown'
  }

  return (
    <div className="space-y-8">
      {/* Volume Overview */}
      <div className="text-center">
        <div className="text-sm text-gray-600 mb-4">Monthly Transaction Volumes</div>
        <div className="inline-flex items-center space-x-4 bg-white rounded-xl border-2 border-gray-200 px-6 py-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900">
              {Object.keys(volumeData).length}
            </div>
            <div className="text-xs text-gray-600">Categories Set</div>
          </div>
          <div className="w-px h-8 bg-gray-300" />
          <div className="text-center">
            <div className="text-lg font-semibold text-blue-600">
              {Object.keys(volumeData).length === 0 ? 'None' :
               Object.keys(volumeData).length === question.volumeInputs?.length ? 'Complete' : 'In Progress'}
            </div>
            <div className="text-xs text-gray-600">Status</div>
          </div>
        </div>
      </div>

      {/* Volume Categories */}
      <div className="space-y-8">
        {question.volumeInputs?.map((volumeInput, index) => {
          const currentValue = volumeData[volumeInput.category] || ''
          const currentIndex = volumeInput.options.findIndex(opt => opt.value === currentValue)
          const validIndex = currentIndex >= 0 ? currentIndex : 0

          return (
            <div key={index} className="bg-white rounded-xl border-2 border-gray-200 p-6 hover:border-blue-300 transition-all duration-300">
              <div className="space-y-6">
                {/* Category Header */}
                <div className="text-center">
                  <h4 className="text-lg font-semibold text-gray-900">{volumeInput.category}</h4>
                  <div className="text-sm text-gray-600 mt-1">
                    {getVolumeLevel(volumeInput.category, currentValue)}
                  </div>
                </div>

                {/* Volume Display */}
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600">
                    {currentValue ? volumeInput.options.find(opt => opt.value === currentValue)?.label : 'Select Range'}
                  </div>
                </div>

                {/* Interactive Volume Slider */}
                <div className="relative px-4">
                  {/* Track Background */}
                  <div className="relative h-3 bg-gray-200 rounded-full">
                    {/* Progress Fill */}
                    <div
                      className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-200"
                      style={{ width: `${(validIndex / (volumeInput.options.length - 1)) * 100}%` }}
                    />

                    {/* Draggable Slider Handle */}
                    <div
                      className="absolute top-1/2 w-6 h-6 bg-white rounded-full shadow-lg border-2 border-blue-600 transform -translate-y-1/2 cursor-pointer transition-all duration-200 hover:scale-110 hover:shadow-xl"
                      style={{
                        left: `calc(${(validIndex / (volumeInput.options.length - 1)) * 100}% - 12px)`
                      }}
                    />
                  </div>

                  {/* Hidden Range Input for Dragging */}
                  <input
                    type="range"
                    min="0"
                    max={volumeInput.options.length - 1}
                    value={validIndex}
                    onChange={(e) => {
                      const selectedOption = volumeInput.options[parseInt(e.target.value)]
                      updateVolumeValue(volumeInput.category, selectedOption.value)
                    }}
                    className="absolute inset-0 w-full h-6 opacity-0 cursor-pointer"
                    style={{ margin: 0 }}
                    aria-label={`Select volume for ${volumeInput.category}`}
                  />
                </div>

                {/* Range Labels */}
                <div className="flex justify-between text-xs text-gray-500 px-4">
                  <span>{volumeInput.options[0]?.label}</span>
                  <span>{volumeInput.options[volumeInput.options.length - 1]?.label}</span>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Benchmark Info */}
      {question.benchmark && (
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 border border-green-200">
          <div className="flex items-center space-x-3">
            <Target className="w-5 h-5 text-green-600" />
            <span className="text-sm text-green-700 font-medium">💡 {question.benchmark}</span>
          </div>
        </div>
      )}
    </div>
  )
}

// Approval Workflows Slider Component
function ApprovalWorkflowsSlider({ question, value, onChange }: { question: Question, value: any, onChange: (value: any) => void }) {
  const approvalData = value || {}

  const updateApprovalValue = (metric: string, newValue: string) => {
    onChange({
      ...approvalData,
      [metric]: newValue
    })
  }

  const getEfficiencyLevel = (metric: string, selectedValue: string) => {
    if (!selectedValue) return 'Not selected'

    if (metric === 'Typical approval cycle time') {
      const timeMap: { [key: string]: string } = {
        'same-day': 'Excellent',
        '1-2-days': 'Very Good',
        '3-4-days': 'Good',
        '5-7-days': 'Slow',
        'more-than-week': 'Very Slow'
      }
      return timeMap[selectedValue] || 'Unknown'
    } else {
      const approverMap: { [key: string]: string } = {
        '1-person': 'Simple',
        '2-people': 'Streamlined',
        '3-4-people': 'Moderate',
        '5-plus': 'Complex',
        'varies': 'Inconsistent'
      }
      return approverMap[selectedValue] || 'Unknown'
    }
  }

  const getMetricColor = (metric: string, selectedValue: string) => {
    if (metric === 'Typical approval cycle time') {
      const colorMap: { [key: string]: string } = {
        'same-day': 'from-green-500 to-green-600',
        '1-2-days': 'from-blue-500 to-blue-600',
        '3-4-days': 'from-yellow-500 to-yellow-600',
        '5-7-days': 'from-orange-500 to-orange-600',
        'more-than-week': 'from-red-500 to-red-600'
      }
      return colorMap[selectedValue] || 'from-gray-500 to-gray-600'
    } else {
      const colorMap: { [key: string]: string } = {
        '1-person': 'from-green-500 to-green-600',
        '2-people': 'from-blue-500 to-blue-600',
        '3-4-people': 'from-yellow-500 to-yellow-600',
        '5-plus': 'from-orange-500 to-orange-600',
        'varies': 'from-red-500 to-red-600'
      }
      return colorMap[selectedValue] || 'from-gray-500 to-gray-600'
    }
  }

  return (
    <div className="space-y-8">
      {/* Approval Overview */}
      <div className="text-center">
        <div className="text-sm text-gray-600 mb-4">Approval Workflow Analysis</div>
        <div className="inline-flex items-center space-x-4 bg-white rounded-xl border-2 border-gray-200 px-6 py-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900">
              {Object.keys(approvalData).length}
            </div>
            <div className="text-xs text-gray-600">Metrics Set</div>
          </div>
          <div className="w-px h-8 bg-gray-300" />
          <div className="text-center">
            <div className="text-lg font-semibold text-blue-600">
              {Object.keys(approvalData).length === 0 ? 'None' :
               Object.keys(approvalData).length === question.approvalMetrics?.length ? 'Complete' : 'In Progress'}
            </div>
            <div className="text-xs text-gray-600">Status</div>
          </div>
        </div>
      </div>

      {/* Approval Metrics */}
      <div className="space-y-8">
        {question.approvalMetrics?.map((approvalMetric, index) => {
          const currentValue = approvalData[approvalMetric.metric] || ''
          const currentIndex = approvalMetric.options.findIndex(opt => opt.value === currentValue)
          const validIndex = currentIndex >= 0 ? currentIndex : 0
          const colorClass = getMetricColor(approvalMetric.metric, currentValue)

          return (
            <div key={index} className="bg-white rounded-xl border-2 border-gray-200 p-6 hover:border-blue-300 transition-all duration-300">
              <div className="space-y-6">
                {/* Metric Header */}
                <div className="text-center">
                  <h4 className="text-lg font-semibold text-gray-900">{approvalMetric.metric}</h4>
                  <div className="text-sm text-gray-600 mt-1">
                    {getEfficiencyLevel(approvalMetric.metric, currentValue)}
                  </div>
                </div>

                {/* Current Value Display */}
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600">
                    {currentValue ? approvalMetric.options.find(opt => opt.value === currentValue)?.label : 'Select Option'}
                  </div>
                </div>

                {/* Interactive Approval Slider */}
                <div className="relative px-4">
                  {/* Track Background */}
                  <div className="relative h-3 bg-gray-200 rounded-full">
                    {/* Progress Fill */}
                    <div
                      className={`h-full bg-gradient-to-r ${colorClass} rounded-full transition-all duration-200`}
                      style={{ width: `${(validIndex / (approvalMetric.options.length - 1)) * 100}%` }}
                    />

                    {/* Draggable Slider Handle */}
                    <div
                      className="absolute top-1/2 w-6 h-6 bg-white rounded-full shadow-lg border-2 border-blue-600 transform -translate-y-1/2 cursor-pointer transition-all duration-200 hover:scale-110 hover:shadow-xl"
                      style={{
                        left: `calc(${(validIndex / (approvalMetric.options.length - 1)) * 100}% - 12px)`
                      }}
                    />
                  </div>

                  {/* Hidden Range Input for Dragging */}
                  <input
                    type="range"
                    min="0"
                    max={approvalMetric.options.length - 1}
                    value={validIndex}
                    onChange={(e) => {
                      const selectedOption = approvalMetric.options[parseInt(e.target.value)]
                      updateApprovalValue(approvalMetric.metric, selectedOption.value)
                    }}
                    className="absolute inset-0 w-full h-6 opacity-0 cursor-pointer"
                    style={{ margin: 0 }}
                    aria-label={`Select ${approvalMetric.metric}`}
                  />
                </div>

                {/* Range Labels */}
                <div className="flex justify-between text-xs text-gray-500 px-4">
                  <span>{approvalMetric.options[0]?.label}</span>
                  <span>{approvalMetric.options[approvalMetric.options.length - 1]?.label}</span>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

// Error Cost Slider Component
function ErrorCostSlider({ question, value, onChange }: { question: Question, value: any, onChange: (value: any) => void }) {
  const costRanges = [
    { value: 'under-500', label: 'Under €500', description: 'Minimal impact', min: 0, max: 500, color: 'from-green-400 to-green-500' },
    { value: '500-1000', label: '€500-1,000', description: 'Low impact', min: 500, max: 1000, color: 'from-blue-400 to-blue-500' },
    { value: '1000-2500', label: '€1,000-2,500', description: 'Moderate impact', min: 1000, max: 2500, color: 'from-yellow-400 to-yellow-500' },
    { value: '2500-5000', label: '€2,500-5,000', description: 'Significant impact', min: 2500, max: 5000, color: 'from-orange-400 to-orange-500' },
    { value: '5000-10000', label: '€5,000-10,000', description: 'High impact', min: 5000, max: 10000, color: 'from-red-400 to-red-500' },
    { value: 'over-10000', label: 'Over €10,000', description: 'Critical impact', min: 10000, max: 15000, color: 'from-red-500 to-red-600' }
  ]

  const selectedRange = costRanges.find(r => r.value === value)
  const selectedIndex = costRanges.findIndex(r => r.value === value)
  const validIndex = selectedIndex >= 0 ? selectedIndex : 0

  // Set default value to first range if no value is provided
  useEffect(() => {
    if (!value) {
      onChange(costRanges[0].value)
    }
  }, [value, onChange])

  const handleRangeSelect = (rangeIndex: number) => {
    const selectedRange = costRanges[rangeIndex]
    onChange(selectedRange.value)
  }

  return (
    <div className="space-y-8 text-center">
      {/* Main Cost Display */}
      <div className="space-y-3">
        <div className="text-sm text-gray-600">Estimated Monthly Error Cost</div>
        <div className="text-6xl font-bold text-blue-600">
          {selectedRange?.label || 'Select Range'}
        </div>
        <div className="text-lg text-gray-600">{selectedRange?.description || ''}</div>
      </div>

      {/* Cost Impact Visualization */}
      <div className="space-y-6">
        {/* Interactive Cost Slider */}
        <div className="relative px-4">
          {/* Track Background */}
          <div className="relative h-4 bg-gray-200 rounded-full">
            {/* Progress Fill with Dynamic Color */}
            <div
              className={`h-full bg-gradient-to-r ${selectedRange?.color || 'from-gray-400 to-gray-500'} rounded-full transition-all duration-300`}
              style={{ width: `${(validIndex / (costRanges.length - 1)) * 100}%` }}
            />

            {/* Draggable Slider Handle */}
            <div
              className="absolute top-1/2 w-7 h-7 bg-white rounded-full shadow-lg border-2 border-blue-600 transform -translate-y-1/2 cursor-pointer transition-all duration-200 hover:scale-110 hover:shadow-xl"
              style={{
                left: `calc(${(validIndex / (costRanges.length - 1)) * 100}% - 14px)`
              }}
            />
          </div>

          {/* Hidden Range Input for Dragging */}
          <input
            type="range"
            min="0"
            max={costRanges.length - 1}
            value={validIndex}
            onChange={(e) => handleRangeSelect(parseInt(e.target.value))}
            className="absolute inset-0 w-full h-7 opacity-0 cursor-pointer"
            style={{ margin: 0 }}
            aria-label="Select error cost range"
          />
        </div>

        {/* Range Labels */}
        <div className="flex justify-between text-xs text-gray-500 px-4">
          <span>€0</span>
          <span>€10,000+</span>
        </div>
      </div>

      {/* Cost Impact Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        <div className="p-4 bg-gradient-to-br from-red-50 to-red-100 rounded-lg border border-red-200">
          <div className="flex items-center space-x-2 mb-2">
            <AlertTriangle className="w-4 h-4 text-red-600" />
            <span className="text-sm font-medium text-red-900">Financial Impact</span>
          </div>
          <p className="text-xs text-red-700">Direct cost of rework, corrections, and lost productivity</p>
        </div>

        <div className="p-4 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg border border-orange-200">
          <div className="flex items-center space-x-2 mb-2">
            <Clock className="w-4 h-4 text-orange-600" />
            <span className="text-sm font-medium text-orange-900">Time Impact</span>
          </div>
          <p className="text-xs text-orange-700">Hours spent identifying and fixing errors</p>
        </div>

        <div className="p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg border border-purple-200">
          <div className="flex items-center space-x-2 mb-2">
            <Users className="w-4 h-4 text-purple-600" />
            <span className="text-sm font-medium text-purple-900">Team Impact</span>
          </div>
          <p className="text-xs text-purple-700">Stress and frustration from repeated corrections</p>
        </div>
      </div>
    </div>
  )
}

// Enhanced Finance Team Structure Builder Component
function FinanceTeamStructureBuilder({ question, value, onChange }: { question: Question, value: any, onChange: (value: any) => void }) {
  const teamData = value || {}

  const updateTeamValue = (inputId: string, newValue: string | number) => {
    onChange({
      ...teamData,
      [inputId]: newValue
    })
  }

  const getTotalTeamSize = () => {
    return question.teamInputs?.reduce((total, input) => {
      const value = parseInt(teamData[input.id] || '0')
      return total + (input.id !== 'your_involvement' ? value : 0) // Don't count hours in team size
    }, 0) || 0
  }

  const getTotalHours = () => {
    return question.teamInputs?.reduce((total, input) => {
      const value = parseInt(teamData[input.id] || '0')
      if (input.id === 'your_involvement') return total + value
      if (input.id === 'dedicated_finance') return total + (value * 40) // Assume 40 hours per person
      if (input.id === 'part_time_shared') return total + (value * 20) // Assume 20 hours per person
      return total
    }, 0) || 0
  }

  return (
    <div className="space-y-8">
      {/* Team Overview */}
      <div className="text-center">
        <div className="text-sm text-gray-600 mb-4">Finance Team Structure</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-md mx-auto">
          <div className="bg-white rounded-xl border-2 border-gray-200 px-6 py-4">
            <div className="text-2xl font-bold text-gray-900">{getTotalTeamSize()}</div>
            <div className="text-xs text-gray-600">Team Members</div>
          </div>
          <div className="bg-white rounded-xl border-2 border-gray-200 px-6 py-4">
            <div className="text-2xl font-bold text-blue-600">{getTotalHours()}</div>
            <div className="text-xs text-gray-600">Total Hours/Week</div>
          </div>
        </div>
      </div>

      {/* Team Input Sliders */}
      <div className="grid gap-6 md:grid-cols-1">
        {question.teamInputs?.map((input) => {
          const currentValue = parseInt(teamData[input.id] || '0')
          const maxValue = input.max || 50

          return (
            <div key={input.id} className="bg-white rounded-xl border-2 border-gray-200 p-6 hover:border-blue-300 transition-all duration-300">
              <div className="space-y-4">
                {/* Header */}
                <div className="text-center">
                  <Label className="text-lg font-semibold text-gray-900">{input.label}</Label>
                  <div className="text-sm text-gray-600 mt-1">
                    {input.id === 'your_involvement' ? 'Hours per week' : 'Number of people'}
                  </div>
                </div>

                {/* Value Display */}
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600">
                    {currentValue}
                  </div>
                  <div className="text-sm text-gray-500 mt-1">
                    {input.id === 'your_involvement' ? 'hours/week' : currentValue === 1 ? 'person' : 'people'}
                  </div>
                </div>

                {/* Interactive Slider */}
                <div className="relative px-2">
                  <div className="relative h-3 bg-gray-200 rounded-full">
                    {/* Progress Fill */}
                    <div
                      className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-200"
                      style={{ width: `${(currentValue / maxValue) * 100}%` }}
                    />

                    {/* Slider Handle */}
                    <div
                      className="absolute top-1/2 w-5 h-5 bg-white rounded-full shadow-lg border-2 border-blue-600 transform -translate-y-1/2 cursor-pointer transition-all duration-200 hover:scale-110"
                      style={{ left: `calc(${(currentValue / maxValue) * 100}% - 10px)` }}
                    />
                  </div>

                  {/* Hidden Range Input */}
                  <input
                    type="range"
                    min="0"
                    max={maxValue}
                    value={currentValue}
                    onChange={(e) => updateTeamValue(input.id, parseInt(e.target.value))}
                    className="absolute inset-0 w-full h-5 opacity-0 cursor-pointer"
                    aria-label={`Select ${input.label}`}
                  />
                </div>

                {/* Range Labels */}
                <div className="flex justify-between text-xs text-gray-500 px-2">
                  <span>0</span>
                  <span>{maxValue}</span>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Boolean Inputs */}
      {question.booleanInputs?.map((input) => {
        const isChecked = teamData[input.id] || false
        return (
          <div
            key={input.id}
            className={`
              relative p-4 rounded-lg border-2 transition-all duration-300 cursor-pointer group
              ${isChecked
                ? 'border-blue-600 bg-gradient-to-r from-blue-50 to-blue-100 shadow-md'
                : 'border-gray-200 bg-white hover:border-blue-300 hover:bg-blue-50/50 hover:shadow-sm'
              }
            `}
          >
            <div className="flex items-center space-x-4">
              <Checkbox
                id={input.id}
                checked={isChecked}
                onCheckedChange={(checked) => updateTeamValue(input.id, checked ? 1 : 0)}
                className="data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600 w-5 h-5"
              />
              <Label
                htmlFor={input.id}
                className={`cursor-pointer font-medium transition-colors duration-300 flex-1 ${
                  isChecked ? 'text-blue-900' : 'text-gray-900 group-hover:text-blue-800'
                }`}
              >
                {input.label}
              </Label>
            </div>
            {isChecked && (
              <div className="absolute top-3 right-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600" />
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}


function QuestionRenderer({ question, value, onChange, onNext }: QuestionRendererProps) {
  const handleChange = (newValue: any) => {
    onChange(newValue)
    // No auto-advance - user must always click Next button
  }

  // Debug logging for question rendering (simplified)
  console.log('Rendering question:', question.type, question.id)

  // Enhanced question rendering for specific sales questions
  if (question.id === 'weekly_conversations') {
    return <ConversationVolumeSlider question={question} value={value} onChange={onChange} />
  }

  if (question.id === 'sales_team_structure') {
    return <TeamStructureBuilder question={question} value={value} onChange={onChange} />
  }

  if (question.id === 'hourly_cost_sales') {
    return <SalaryRangeSlider question={question} value={value} onChange={onChange} />
  }


  if (question.id === 'time_breakdown_per_prospect') {
    return <TimeBreakdownSlider question={question} value={value} onChange={onChange} />
  }


  if (question.id === 'success_vision') {
    return <SuccessVisionTextarea question={question} value={value} onChange={onChange} />
  }

  // Finance Route Questions
  // Removed custom handler for invoice_processing_time - now uses normal slider logic

  // Removed custom handler for error_frequency - now uses normal visual_grid logic

  if (question.id === 'systems_count') {
    return <SystemsCountSelector question={question} value={value} onChange={onChange} />
  }

  if (question.id === 'finance_transformation') {
    return <FinanceTransformationSelector question={question} value={value} onChange={onChange} />
  }

  if (question.id === 'system_types') {
    return <SystemTypesSelector question={question} value={value} onChange={onChange} />
  }

  if (question.id === 'transaction_volumes') {
    return <TransactionVolumesSlider question={question} value={value} onChange={onChange} />
  }

  if (question.id === 'approval_workflows') {
    return <ApprovalWorkflowsSlider question={question} value={value} onChange={onChange} />
  }

  if (question.id === 'error_cost') {
    return <ErrorCostSlider question={question} value={value} onChange={onChange} />
  }

  if (question.id === 'finance_team_structure') {
    return <FinanceTeamStructureBuilder question={question} value={value} onChange={onChange} />
  }

  switch (question.type) {
    case 'visual_grid':
      const gridCols = question.visualOptions && question.visualOptions.length > 6 
        ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
        : 'grid-cols-1 md:grid-cols-2'

      return (
        <div className="space-y-6">
          {question.maxSelections && (
            <div className="text-center">
              <div className="velox-text-body text-blue-700 font-medium bg-blue-50 px-4 py-2 rounded-lg inline-block">
                {question.multiple ? `Select all that apply` : 'Select one option'}
              </div>
            </div>
          )}
          
          <div className={`grid ${gridCols} gap-4 max-w-5xl mx-auto`}>
            {question.visualOptions?.map((option) => {
              const IconComponent = getIconForOption(question.id, option.value, option.icon)
              const currentValues = Array.isArray(value) ? value : []
              const isSelected = question.multiple 
                ? currentValues.includes(option.value)
                : value === option.value
              
              const handleClick = () => {
                if (question.multiple) {
                  if (isSelected) {
                    handleChange(currentValues.filter((v: string) => v !== option.value))
                  } else {
                    handleChange([...currentValues, option.value])
                  }
                } else {
                  handleChange(option.value)
                }
              }

              return (
                <button
                  key={option.value}
                  type="button"
                  onClick={handleClick}
                  className={`
                    relative p-6 rounded-xl border-2 transition-all duration-300 text-left group
                    ${isSelected
                      ? 'border-blue-600 bg-gradient-to-br from-blue-50 to-blue-100 shadow-lg transform scale-105'
                      : 'border-gray-200 bg-white hover:border-blue-300 hover:bg-blue-50/50 hover:shadow-md hover:transform hover:scale-102'
                    }
                  `}
                >
                  <div className="flex flex-col items-center text-center space-y-3">
                    <IconComponent 
                      className={`h-8 w-8 transition-all duration-200 ${
                        isSelected ? 'text-blue-600' : 'text-gray-700'
                      }`} 
                    />
                    <div>
                      <div className="font-medium text-gray-800 text-sm">{option.label}</div>
                      {option.description && (
                        <div className="text-xs text-gray-600 mt-1">{option.description}</div>
                      )}
                    </div>
                  </div>
                  
                  {isSelected && (
                    <div className="absolute top-3 right-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-600" />
                    </div>
                  )}
                </button>
              )
            })}
          </div>

          {/* Selection Counter for Multiple Selection */}
          {question.multiple && Array.isArray(value) && value.length > 0 && (
            <div className="text-center bg-blue-50 border border-blue-200 rounded-lg p-3 max-w-md mx-auto">
              <div className="flex items-center justify-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-blue-600" />
                <div className="text-blue-800 font-medium text-sm">
                  {value.length} {value.length === 1 ? 'option' : 'options'} selected
                </div>
              </div>
            </div>
          )}
        </div>
      )

    // Removed obsolete case 'multi_time_breakdown' - now handled as visual_grid or slider

    // case 'radio': // Deprecated - converted to visual_grid
      // Use visual grid for specific questions
      if (shouldUseVisualGrid(question)) {
        const gridCols = question.id === 'company_size' ? 'grid-cols-2 md:grid-cols-3' : 'grid-cols-1 md:grid-cols-2'

        return (
          <div className="space-y-4">
            <div className={`grid ${gridCols} gap-4 max-w-4xl mx-auto`}>
              {question.options?.map((option) => {
                const IconComponent = getIconForOption(question.id, option.value)
                const isSelected = value === option.value

                return (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => handleChange(option.value)}
                    className={`
                      relative p-6 rounded-xl border-2 transition-all duration-300 text-left group
                      ${isSelected
                        ? 'border-blue-600 bg-gradient-to-br from-blue-50 to-blue-100 shadow-lg transform scale-105'
                        : 'border-gray-200 bg-white hover:border-blue-300 hover:bg-blue-50/50 hover:shadow-md hover:transform hover:scale-102'
                      }
                    `}
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`
                        p-3 rounded-lg flex items-center justify-center transition-all duration-300
                        ${isSelected
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-700 group-hover:bg-blue-100 group-hover:text-blue-600'
                        }
                      `}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <div className={`font-semibold transition-colors duration-300 ${
                          isSelected ? 'text-blue-900' : 'text-gray-900 group-hover:text-blue-800'
                        }`}>
                          {option.label}
                        </div>
                      </div>
                    </div>
                    {isSelected && (
                      <div className="absolute top-3 right-3">
                        <CheckCircle2 className="w-5 h-5 text-blue-600" />
                      </div>
                    )}
                  </button>
                )
              })}
            </div>
            {question.benchmark && (
              <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="flex items-start space-x-3">
                  <div className="p-1 bg-blue-100 rounded-full">
                    <CheckCircle2 className="w-4 h-4 text-blue-600" />
                  </div>
                  <Text className="text-sm text-blue-700 font-medium">💡 {question.benchmark}</Text>
                </div>
              </div>
            )}
          </div>
        )
      }

      // Standard radio layout for other questions
      return (
        <div className="space-y-4">
          <RadioGroup value={value || ""} onValueChange={handleChange}>
            {question.options?.map((option) => (
              <div key={option.value} className="flex items-center space-x-3 p-4 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50/50 transition-all duration-200">
                <RadioGroupItem value={option.value} id={option.value} />
                <Label htmlFor={option.value} className="flex-1 cursor-pointer font-medium text-gray-900">
                  {option.label}
                </Label>
              </div>
            ))}
          </RadioGroup>
          {question.benchmark && (
            <div className="mt-4 p-3 bg-blue-50 rounded-lg">
              <Text className="text-sm text-blue-700">💡 {question.benchmark}</Text>
            </div>
          )}
        </div>
      )

    // case 'checkbox': // Deprecated:
      return (
        <div className="space-y-4">
          <div className="grid gap-3">
            {question.options?.map((option) => {
              const isChecked = value?.includes(option.value) || false
              return (
                <div key={option.value}>
                  <div
                    className={`
                      relative p-4 rounded-lg border-2 transition-all duration-300 cursor-pointer group
                      ${isChecked
                        ? 'border-blue-600 bg-gradient-to-r from-blue-50 to-blue-100 shadow-md'
                        : 'border-gray-200 bg-white hover:border-blue-300 hover:bg-blue-50/50 hover:shadow-sm'
                      }
                    `}
                  >
                    <div className="flex items-center space-x-4">
                      <Checkbox
                        id={option.value}
                        checked={isChecked}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            const newValue = [...(value || []), option.value]
                            // Always allow adding if no maxSelections, or if within limit
                            if (!question.maxSelections || newValue.length <= question.maxSelections) {
                              onChange(newValue)
                            }
                          } else {
                            const newValue = (value || []).filter((v: string) => v !== option.value)
                            onChange(newValue)
                          }
                        }}
                        className="data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600 w-5 h-5"
                      />
                      <Label
                        htmlFor={option.value}
                        className={`cursor-pointer font-medium transition-colors duration-300 flex-1 ${
                          isChecked ? 'text-blue-900' : 'text-gray-900 group-hover:text-blue-800'
                        }`}
                      >
                        {option.label}
                      </Label>
                    </div>
                    {isChecked && (
                      <div className="absolute top-3 right-3">
                        <CheckCircle2 className="w-5 h-5 text-blue-600" />
                      </div>
                    )}
                  </div>

                  {/* Handle allowCustom property */}
                  {option.allowCustom && isChecked && (
                    <div className="mt-3 ml-9">
                      <Input
                        placeholder="Please specify..."
                        value={value?.[`${option.value}_custom`] || ""}
                        onChange={(e) => {
                          onChange({
                            ...value,
                            [`${option.value}_custom`]: e.target.value
                          })
                        }}
                        className="p-3 border-2 border-blue-200 rounded-lg focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
                      />
                    </div>
                  )}
                </div>
              )
            })}
          </div>
          {question.maxSelections && (
            <div className="mt-4 p-3 bg-amber-50 rounded-lg border border-amber-200">
              <Text className="text-sm text-amber-700 font-medium">
                Select up to {question.maxSelections} options ({(value || []).length}/{question.maxSelections} selected)
              </Text>
            </div>
          )}
        </div>
      )

    // case 'visual_grid': // Duplicate:
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {question.visualOptions?.map((option) => {
            const IconComponent = DEPARTMENT_ICONS[option.value as keyof typeof DEPARTMENT_ICONS] || Settings
            const isSelected = value === option.value

            return (
              <button
                key={option.value}
                type="button"
                onClick={() => handleChange(option.value)}
                className={`
                  relative p-8 rounded-xl border-2 transition-all duration-300 text-center group
                  ${isSelected
                    ? 'border-blue-600 bg-gradient-to-br from-blue-50 to-blue-100 shadow-xl transform scale-105'
                    : 'border-gray-200 bg-white hover:border-blue-300 hover:bg-blue-50/50 hover:shadow-lg hover:transform hover:scale-102'
                  }
                `}
              >
                <div className="flex flex-col items-center space-y-4">
                  <div className={`
                    w-16 h-16 rounded-xl flex items-center justify-center transition-all duration-300
                    ${isSelected
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 group-hover:bg-blue-100 group-hover:text-blue-600'
                    }
                  `}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <div className="space-y-2">
                    <h3 className={`font-bold text-lg transition-colors duration-300 ${
                      isSelected ? 'text-blue-900' : 'text-gray-900 group-hover:text-blue-800'
                    }`}>
                      {option.label}
                    </h3>
                    <p className={`text-sm transition-colors duration-300 ${
                      isSelected ? 'text-blue-700' : 'text-gray-600 group-hover:text-blue-600'
                    }`}>
                      {option.description}
                    </p>
                  </div>
                </div>
                {isSelected && (
                  <div className="absolute top-4 right-4">
                    <div className="bg-blue-600 rounded-full p-1">
                      <CheckCircle2 className="w-5 h-5 text-white" />
                    </div>
                  </div>
                )}
                {/* Subtle arrow indicator for selected state */}
                {isSelected && (
                  <div className="absolute bottom-4 right-4">
                    <ArrowRight className="w-4 h-4 text-blue-600" />
                  </div>
                )}
              </button>
            )
          })}
        </div>
      )

    // case 'multi_time_breakdown': // Duplicate:
      return (
        <div className="space-y-8">
          {question.timeBreakdowns?.map((breakdown, index) => (
            <div key={index} className="space-y-4">
              <h4 className="font-semibold text-lg text-gray-900 mb-4">{breakdown.category}:</h4>
              <RadioGroup
                value={value?.[breakdown.category] || ""}
                onValueChange={(newValue) => {
                  onChange({
                    ...value,
                    [breakdown.category]: newValue
                  })
                }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {breakdown.options.map((option) => {
                    const isSelected = value?.[breakdown.category] === option.value
                    return (
                      <div
                        key={option.value}
                        className={`
                          relative p-4 rounded-lg border-2 transition-all duration-300 cursor-pointer group
                          ${isSelected
                            ? 'border-blue-600 bg-gradient-to-r from-blue-50 to-blue-100 shadow-md'
                            : 'border-gray-200 bg-white hover:border-blue-300 hover:bg-blue-50/50 hover:shadow-sm'
                          }
                        `}
                      >
                        <div className="flex items-center space-x-3">
                          <RadioGroupItem
                            value={option.value}
                            id={`${breakdown.category}-${option.value}`}
                            className="data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
                          />
                          <Label
                            htmlFor={`${breakdown.category}-${option.value}`}
                            className={`cursor-pointer font-medium transition-colors duration-300 ${
                              isSelected ? 'text-blue-900' : 'text-gray-900 group-hover:text-blue-800'
                            }`}
                          >
                            {option.label}
                          </Label>
                        </div>
                        {isSelected && (
                          <div className="absolute top-3 right-3">
                            <CheckCircle2 className="w-5 h-5 text-blue-600" />
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </RadioGroup>
            </div>
          ))}
          {question.realTimeCalculation && (
            <div className="mt-6 p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-green-100 rounded-full">
                  <TrendingUp className="w-5 h-5 text-green-600" />
                </div>
                <Text className="text-sm text-green-700 font-medium">
                  📊 Real-time calculation will be displayed here based on your selections
                </Text>
              </div>
            </div>
          )}
        </div>
      )

    // case 'team_structure': // Deprecated:
      return (
        <div className="space-y-8">
          {question.teamInputs?.map((input) => (
            <div key={input.id} className="space-y-3">
              <Label className="text-base font-semibold text-gray-900">{input.label}:</Label>
              {input.type === 'dropdown' ? (
                <select
                  value={value?.[input.id] || "0"}
                  onChange={(e) => onChange({
                    ...value,
                    [input.id]: e.target.value
                  })}
                  className="w-full p-4 border-2 border-gray-200 rounded-lg bg-white hover:border-blue-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-300 font-medium"
                >
                  {Array.from({ length: (input.max || 10) + 1 }, (_, i) => (
                    <option key={i} value={i}>{i}{input.unit ? ` ${input.unit}` : ''}</option>
                  ))}
                </select>
              ) : (
                <Input
                  value={value?.[input.id] || ""}
                  onChange={(e) => onChange({
                    ...value,
                    [input.id]: e.target.value
                  })}
                  placeholder={input.label}
                  className="p-4 border-2 border-gray-200 rounded-lg hover:border-blue-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
                />
              )}
            </div>
          ))}
          {question.booleanInputs?.map((input) => {
            const isChecked = value?.[input.id] || false
            return (
              <div
                key={input.id}
                className={`
                  relative p-4 rounded-lg border-2 transition-all duration-300 cursor-pointer group
                  ${isChecked
                    ? 'border-blue-600 bg-gradient-to-r from-blue-50 to-blue-100 shadow-md'
                    : 'border-gray-200 bg-white hover:border-blue-300 hover:bg-blue-50/50 hover:shadow-sm'
                  }
                `}
              >
                <div className="flex items-center space-x-4">
                  <Checkbox
                    id={input.id}
                    checked={isChecked}
                    onCheckedChange={(checked) => onChange({
                      ...value,
                      [input.id]: checked
                    })}
                    className="data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600 w-5 h-5"
                  />
                  <Label
                    htmlFor={input.id}
                    className={`cursor-pointer font-medium transition-colors duration-300 flex-1 ${
                      isChecked ? 'text-blue-900' : 'text-gray-900 group-hover:text-blue-800'
                    }`}
                  >
                    {input.label}
                  </Label>
                </div>
                {isChecked && (
                  <div className="absolute top-3 right-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600" />
                  </div>
                )}
              </div>
            )
          })}
        </div>
      )

    // case 'transaction_volumes': // Deprecated:
      return (
        <div className="space-y-8">
          {question.volumeInputs?.map((volumeInput, index) => (
            <div key={index} className="space-y-4">
              <h4 className="font-semibold text-lg text-gray-900 mb-4">{volumeInput.category}:</h4>
              <RadioGroup
                value={value?.[volumeInput.category] || ""}
                onValueChange={(newValue) => {
                  onChange({
                    ...value,
                    [volumeInput.category]: newValue
                  })
                }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {volumeInput.options.map((option) => {
                    const isSelected = value?.[volumeInput.category] === option.value
                    return (
                      <div
                        key={option.value}
                        className={`
                          relative p-4 rounded-lg border-2 transition-all duration-300 cursor-pointer group
                          ${isSelected
                            ? 'border-blue-600 bg-gradient-to-r from-blue-50 to-blue-100 shadow-md'
                            : 'border-gray-200 bg-white hover:border-blue-300 hover:bg-blue-50/50 hover:shadow-sm'
                          }
                        `}
                      >
                        <div className="flex items-center space-x-3">
                          <RadioGroupItem
                            value={option.value}
                            id={`${index}-${option.value}`}
                            className="data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
                          />
                          <Label
                            htmlFor={`${index}-${option.value}`}
                            className={`cursor-pointer font-medium transition-colors duration-300 ${
                              isSelected ? 'text-blue-900' : 'text-gray-900 group-hover:text-blue-800'
                            }`}
                          >
                            {option.label}
                          </Label>
                        </div>
                        {isSelected && (
                          <div className="absolute top-3 right-3">
                            <CheckCircle2 className="w-5 h-5 text-blue-600" />
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </RadioGroup>
            </div>
          ))}
          {question.benchmark && (
            <div className="mt-6 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-100 rounded-full">
                  <CheckCircle2 className="w-5 h-5 text-blue-600" />
                </div>
                <Text className="text-sm text-blue-700 font-medium">💡 {question.benchmark}</Text>
              </div>
            </div>
          )}
        </div>
      )

    // case 'approval_analysis': // Deprecated:
      return (
        <div className="space-y-8">
          {question.approvalMetrics?.map((metric, index) => (
            <div key={index} className="space-y-4">
              <h4 className="font-semibold text-lg text-gray-900 mb-4">{metric.metric}:</h4>
              <RadioGroup
                value={value?.[metric.metric] || ""}
                onValueChange={(newValue) => {
                  onChange({
                    ...value,
                    [metric.metric]: newValue
                  })
                }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {metric.options.map((option) => {
                    const isSelected = value?.[metric.metric] === option.value
                    return (
                      <div
                        key={option.value}
                        className={`
                          relative p-4 rounded-lg border-2 transition-all duration-300 cursor-pointer group
                          ${isSelected
                            ? 'border-blue-600 bg-gradient-to-r from-blue-50 to-blue-100 shadow-md'
                            : 'border-gray-200 bg-white hover:border-blue-300 hover:bg-blue-50/50 hover:shadow-sm'
                          }
                        `}
                      >
                        <div className="flex items-center space-x-3">
                          <RadioGroupItem
                            value={option.value}
                            id={`${index}-${option.value}`}
                            className="data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
                          />
                          <Label
                            htmlFor={`${index}-${option.value}`}
                            className={`cursor-pointer font-medium transition-colors duration-300 ${
                              isSelected ? 'text-blue-900' : 'text-gray-900 group-hover:text-blue-800'
                            }`}
                          >
                            {option.label}
                          </Label>
                        </div>
                        {isSelected && (
                          <div className="absolute top-3 right-3">
                            <CheckCircle2 className="w-5 h-5 text-blue-600" />
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </RadioGroup>
            </div>
          ))}
        </div>
      )

    // case 'percentage_sliders': // Deprecated:
      return (
        <div className="space-y-6">
          {question.categories?.map((category) => {
            const currentValue = value?.[category.id] || 0
            return (
              <div key={category.id} className="space-y-3 p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-300 transition-all duration-300">
                <div className="flex justify-between items-center">
                  <Label className="text-base font-semibold text-gray-900">{category.label}</Label>
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-bold text-blue-600">{currentValue}%</span>
                  </div>
                </div>
                <div className="relative">
                  <input
                    type="range"
                    min="0"
                    max={category.max || 100}
                    value={currentValue}
                    onChange={(e) => {
                      const newValue = {
                        ...value,
                        [category.id]: parseInt(e.target.value)
                      }
                      onChange(newValue)
                    }}
                    className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                    style={{
                      background: `linear-gradient(to right, #2563EB 0%, #2563EB ${currentValue}%, #E5E7EB ${currentValue}%, #E5E7EB 100%)`
                    }}
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>0%</span>
                    <span>{category.max || 100}%</span>
                  </div>
                </div>
              </div>
            )
          })}
          {question.mustTotal && (
            <div className="mt-6 p-6 bg-gradient-to-r from-amber-50 to-yellow-50 rounded-xl border border-amber-200">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-amber-100 rounded-full">
                  <Calculator className="w-5 h-5 text-amber-600" />
                </div>
                <Text className="text-sm text-amber-700 font-medium">
                  Total: {Object.values(value || {}).reduce((sum: number, val: any) => sum + (parseInt(val) || 0), 0)}%
                  (Must total {question.mustTotal}%)
                </Text>
              </div>
            </div>
          )}
        </div>
      )

    case 'textarea':
      return (
        <div className="space-y-2">
          <Textarea
            value={value || ""}
            onChange={(e) => onChange(e.target.value)}
            placeholder={question.placeholder}
            rows={4}
            className="w-full"
          />
        </div>
      )

    case 'contact_form':
      return (
        <div className="space-y-4">
          {question.contactFields?.map((field) => (
            <div key={field.id} className="space-y-2">
              <Label>{field.label}</Label>
              <Input
                type={field.type}
                value={value?.[field.id] || ""}
                onChange={(e) => onChange({
                  ...value,
                  [field.id]: e.target.value
                })}
                required={field.required}
              />
            </div>
          ))}
          {question.preferenceField && (
            <div className="space-y-2">
              <Label>{question.preferenceField.label}</Label>
              <RadioGroup 
                value={value?.[question.preferenceField.id] || ""} 
                onValueChange={(newValue) => {
                  onChange({
                    ...value,
                    [question.preferenceField!.id]: newValue
                  })
                }}
              >
                <div className="flex space-x-6">
                  {question.preferenceField.options.map((option) => (
                    <div key={option.value} className="flex items-center space-x-2">
                      <RadioGroupItem value={option.value} id={option.value} />
                      <Label htmlFor={option.value} className="cursor-pointer">{option.label}</Label>
                    </div>
                  ))}
                </div>
              </RadioGroup>
            </div>
          )}
        </div>
      )

    case 'slider':
      return (
        <ExternalQuestionRenderer
          question={question}
          value={value}
          onChange={onChange}
        />
      )

    // case 'service_team_efficiency': // Deprecated:
      return (
        <ServiceTeamEfficiencyBuilder
          teamRoles={question.teamRoles || []}
          value={value || {}}
          onChange={onChange}
          realTimeCalculation={question.realTimeCalculation}
          calculationMessage={question.calculationMessage}
        />
      )

    default:
      return (
        <div className="text-center text-gray-500">
          Question type "{question.type}" not yet implemented
        </div>
      )
  }
}

export function EnhancedWorkingServiceQuiz() {
  const [currentStep, setCurrentStep] = useState<QuizStep>('intro')
  const [selectedDepartment, setSelectedDepartment] = useState<string>("")
  const [currentPhaseIndex, setCurrentPhaseIndex] = useState(0)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState<Record<string, any>>({})
  
  // Submission state management
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submissionSuccess, setSubmissionSuccess] = useState(false)
  const [submissionError, setSubmissionError] = useState<string | null>(null)

  // Scroll management
  const quizContainerRef = useRef<HTMLDivElement>(null)

  // Get current phases based on step and department
  const getCurrentPhases = (): QuizPhase[] => {
    switch (currentStep) {
      case 'opening':
        return SERVICE_QUIZ_PHASES
      case 'route':
        const routePhases = DEPARTMENT_ROUTES[selectedDepartment as keyof typeof DEPARTMENT_ROUTES]
        if (!routePhases) {
          console.warn(`No route phases found for department: ${selectedDepartment}`)
          return []
        }
        return routePhases
      case 'final':
        return FINAL_QUESTIONS
      default:
        return []
    }
  }

  const currentPhases = getCurrentPhases()
  const currentPhase = currentPhases[currentPhaseIndex]
  const currentQuestion = currentPhase?.questions?.[currentQuestionIndex]

  // Calculate total progress
  const getTotalQuestions = () => {
    const openingQuestions = SERVICE_QUIZ_PHASES.reduce((sum, phase) => sum + (phase.questions?.length || 0), 0)
    const routeQuestions = (DEPARTMENT_ROUTES[selectedDepartment as keyof typeof DEPARTMENT_ROUTES] || [])
      .reduce((sum, phase) => sum + (phase.questions?.length || 0), 0)
    const finalQuestions = FINAL_QUESTIONS.reduce((sum, phase) => sum + (phase.questions?.length || 0), 0)
    return openingQuestions + routeQuestions + finalQuestions
  }

  const getCurrentQuestionNumber = () => {
    let questionNumber = 0

    if (currentStep === 'opening') {
      // Count questions in completed opening phases
      for (let i = 0; i < currentPhaseIndex; i++) {
        questionNumber += SERVICE_QUIZ_PHASES[i]?.questions?.length || 0
      }
      questionNumber += currentQuestionIndex + 1
    } else if (currentStep === 'route') {
      // Add all opening questions
      questionNumber += SERVICE_QUIZ_PHASES.reduce((sum, phase) => sum + (phase.questions?.length || 0), 0)

      // Add completed route phases
      const routePhases = DEPARTMENT_ROUTES[selectedDepartment as keyof typeof DEPARTMENT_ROUTES] || []
      for (let i = 0; i < currentPhaseIndex; i++) {
        questionNumber += routePhases[i]?.questions?.length || 0
      }
      questionNumber += currentQuestionIndex + 1
    } else if (currentStep === 'final') {
      // Add all previous questions
      questionNumber += SERVICE_QUIZ_PHASES.reduce((sum, phase) => sum + (phase.questions?.length || 0), 0)
      questionNumber += (DEPARTMENT_ROUTES[selectedDepartment as keyof typeof DEPARTMENT_ROUTES] || [])
        .reduce((sum, phase) => sum + (phase.questions?.length || 0), 0)

      // Add completed final phases
      for (let i = 0; i < currentPhaseIndex; i++) {
        questionNumber += FINAL_QUESTIONS[i]?.questions?.length || 0
      }
      questionNumber += currentQuestionIndex + 1
    }

    return questionNumber
  }

  const progress = (getCurrentQuestionNumber() / getTotalQuestions()) * 100

  const handleAnswer = (value: any) => {
    if (currentQuestion) {
      setAnswers(prev => ({
        ...prev,
        [currentQuestion.id]: value
      }))
    }
  }

  // Handle quiz submission when contact form is completed
  const handleQuizSubmission = async () => {
    setIsSubmitting(true)
    setSubmissionError(null)

    try {
      // Extract contact details from the contact_details answer
      const contactDetails = answers.contact_details
      if (!contactDetails) {
        throw new Error('Contact details are required')
      }

      // Calculate basic summary based on quiz answers
      const calculateSummary = () => {
        // Extract department from answers
        const selectedDept = answers.department_focus || selectedDepartment
        
        // Basic scoring calculation (simplified)
        const totalQuestions = getTotalQuestions()
        const answeredQuestions = Object.keys(answers).length
        const calculatedScore = Math.round((answeredQuestions / totalQuestions) * 100)

        // Basic ROI estimation (this would be enhanced with actual business logic)
        const estimatedSavings = {
          timePerWeek: 15, // Conservative estimate
          costPerWeek: 900, // Based on typical hourly costs
          annualSavings: 46800 // Weekly * 52
        }

        return {
          selectedDepartment: selectedDept,
          calculatedScore,
          estimatedSavings,
          recommendations: [
            `Streamline ${selectedDept} processes`,
            "Implement automation workflows",
            "Reduce manual administrative tasks"
          ]
        }
      }

      // Prepare submission data in ServiceQuizSubmission format
      const submissionData = {
        contactDetails: {
          full_name: contactDetails.full_name,
          business_email: contactDetails.business_email,
          company_name: contactDetails.company_name,
          website: contactDetails.website,
          phone_number: contactDetails.phone_number
        },
        quizAnswers: answers,
        departmentRoute: selectedDepartment || answers.department_focus,
        summary: calculateSummary()
      }

      console.log('Submitting quiz data:', submissionData)

      // Submit to the API
      const response = await fetch('/api/submit-quiz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData)
      })

      if (!response.ok) {
        const errorData = await response.text()
        throw new Error(`Submission failed: ${errorData}`)
      }

      const result = await response.json()
      console.log('Quiz submission successful:', result)
      
      setSubmissionSuccess(true)
      setCurrentStep('results')
      
    } catch (error) {
      console.error('Quiz submission error:', error)
      setSubmissionError(error instanceof Error ? error.message : 'Submission failed')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleNext = () => {
    if (!currentPhase?.questions) {
      console.error('No current phase or questions available')
      return
    }

    // Check if there are more questions in current phase
    if (currentQuestionIndex < (currentPhase.questions.length - 1)) {
      setCurrentQuestionIndex(prev => prev + 1)
      return
    }

    // Check if there are more phases in current step
    if (currentPhaseIndex < currentPhases.length - 1) {
      setCurrentPhaseIndex(prev => prev + 1)
      setCurrentQuestionIndex(0)
      return
    }

    // Move to next step
    if (currentStep === 'opening') {
      // After opening questions, check if department has specific questions
      // Use the department answer directly instead of selectedDepartment state
      const departmentAnswer = answers.department_focus

      // Update selectedDepartment state for future use
      if (departmentAnswer && departmentAnswer !== selectedDepartment) {
        setSelectedDepartment(departmentAnswer)
      }

      const routePhases = DEPARTMENT_ROUTES[departmentAnswer as keyof typeof DEPARTMENT_ROUTES] || []

      if (routePhases.length > 0) {
        setCurrentStep('route')
        setCurrentPhaseIndex(0)
        setCurrentQuestionIndex(0)
      } else {
        // No department-specific questions, go directly to final
        setCurrentStep('final')
        setCurrentPhaseIndex(0)
        setCurrentQuestionIndex(0)
      }
    } else if (currentStep === 'route') {
      setCurrentStep('final')
      setCurrentPhaseIndex(0)
      setCurrentQuestionIndex(0)
    } else if (currentStep === 'final') {
      // Check if we just completed the contact form
      if (currentQuestion?.type === 'contact_form') {
        // Trigger quiz submission instead of just moving to results
        handleQuizSubmission()
      } else {
        setCurrentStep('results')
      }
    }
  }

  const handlePrevious = () => {
    // First, try to go back within current phase
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1)
      return
    }

    // Then, try to go back to previous phase within current step
    if (currentPhaseIndex > 0) {
      setCurrentPhaseIndex(prev => prev - 1)
      const prevPhase = currentPhases[currentPhaseIndex - 1]
      setCurrentQuestionIndex((prevPhase?.questions?.length || 1) - 1)
      return
    }

    // Finally, navigate back to previous step
    if (currentStep === 'route') {
      // Go back to last question of opening step
      setCurrentStep('opening')
      setCurrentPhaseIndex(SERVICE_QUIZ_PHASES.length - 1)
      const lastPhase = SERVICE_QUIZ_PHASES[SERVICE_QUIZ_PHASES.length - 1]
      setCurrentQuestionIndex((lastPhase?.questions?.length || 1) - 1)
    } else if (currentStep === 'final') {
      // Go back to last question of route step (if exists) or opening step
      const routePhases = DEPARTMENT_ROUTES[selectedDepartment as keyof typeof DEPARTMENT_ROUTES] || []
      if (routePhases.length > 0) {
        setCurrentStep('route')
        setCurrentPhaseIndex(routePhases.length - 1)
        const lastPhase = routePhases[routePhases.length - 1]
        setCurrentQuestionIndex((lastPhase?.questions?.length || 1) - 1)
      } else {
        // No route phases, go back to opening
        setCurrentStep('opening')
        setCurrentPhaseIndex(SERVICE_QUIZ_PHASES.length - 1)
        const lastPhase = SERVICE_QUIZ_PHASES[SERVICE_QUIZ_PHASES.length - 1]
        setCurrentQuestionIndex((lastPhase?.questions?.length || 1) - 1)
      }
    }
    // Note: We don't handle going back from 'opening' step as it should be disabled
  }

  // Track department selection
  useEffect(() => {
    if (currentQuestion?.id === 'department_focus' && answers.department_focus) {
      setSelectedDepartment(answers.department_focus)
    }
  }, [answers.department_focus, currentQuestion?.id])

  // Scroll to top when question changes
  useEffect(() => {
    if (quizContainerRef.current) {
      quizContainerRef.current.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      })
    }
  }, [currentQuestionIndex, currentPhaseIndex, currentStep])

  const canProceed = () => {
    if (!currentQuestion) return false
    const answer = answers[currentQuestion.id]
    
    if (currentQuestion.required) {
      if (currentQuestion.type === 'visual_grid' && currentQuestion.multiple) {
        return Array.isArray(answer) && answer.length > 0
      }
      if (currentQuestion.type === 'contact_form') {
        return currentQuestion.contactFields?.every(field => 
          !field.required || (answer && answer[field.id])
        )
      }
      return answer !== undefined && answer !== "" && answer !== null
    }
    return true
  }

  // Intro step - Department selection introduction
  if (currentStep === 'intro') {
    return (
      <div className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <Heading level="1" className="text-4xl font-bold text-gray-900">
                VeloxForce Service-as-Software Quiz
              </Heading>
              <Text className="text-xl text-gray-600">
                Discover your department's automation potential in 8-12 minutes
              </Text>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Clock className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Quick Assessment</h3>
                  <p className="text-gray-600 text-sm">
                    8-12 minutes to complete based on your department selection
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <TrendingUp className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Personalized Results</h3>
                  <p className="text-gray-600 text-sm">
                    Get specific ROI projections based on your actual processes
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <CheckCircle2 className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Immediate Insights</h3>
                  <p className="text-gray-600 text-sm">
                    No waiting for callbacks - get your results instantly
                  </p>
                </div>
              </div>

              <div className="text-left space-y-4 mb-8">
                <h3 className="text-lg font-semibold text-gray-900 text-center">What You'll Discover:</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                    <span className="text-gray-700">Exact time savings potential for your department</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                    <span className="text-gray-700">ROI projections based on similar businesses</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                    <span className="text-gray-700">Specific automation opportunities</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                    <span className="text-gray-700">Implementation roadmap recommendations</span>
                  </div>
                </div>
              </div>

              <Button
                onClick={() => setCurrentStep('opening')}
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold"
              >
                Start Assessment →
              </Button>
            </div>
          </div>
        </Container>
      </div>
    )
  }

  if (currentStep === 'results') {
    return (
      <div className="py-20 bg-white">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            {isSubmitting && (
              <>
                <div className="flex justify-center mb-6">
                  <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600"></div>
                </div>
                <Heading level="1" className="mb-4 text-4xl font-bold">
                  Generating Your Analysis...
                </Heading>
                <Text className="text-lg text-gray-600 mb-8">
                  We're analyzing your responses and scraping your website to create a personalized business analysis report.
                </Text>
                <div className="bg-blue-50 rounded-lg p-6 text-left">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
                      <Text className="text-sm text-blue-800">Analyzing your quiz responses...</Text>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
                      <Text className="text-sm text-blue-800">Scraping your website for business insights...</Text>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
                      <Text className="text-sm text-blue-800">Generating AI-powered analysis...</Text>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
                      <Text className="text-sm text-blue-800">Creating your PDF report...</Text>
                    </div>
                  </div>
                </div>
              </>
            )}

            {submissionError && (
              <>
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                    <AlertTriangle className="w-8 h-8 text-red-600" />
                  </div>
                </div>
                <Heading level="1" className="mb-4 text-4xl font-bold text-red-600">
                  Submission Error
                </Heading>
                <Text className="text-lg text-gray-600 mb-8">
                  We encountered an issue processing your submission. Please try again.
                </Text>
                <div className="bg-red-50 rounded-lg p-6 text-left">
                  <Text className="text-sm text-red-800">{submissionError}</Text>
                </div>
                <Button 
                  onClick={() => {
                    setSubmissionError(null)
                    setCurrentStep('final')
                    // Go back to the contact form
                    const finalQuestionIndex = FINAL_QUESTIONS.findIndex(phase => 
                      phase.questions?.some(q => q.type === 'contact_form')
                    )
                    if (finalQuestionIndex !== -1) {
                      setCurrentPhaseIndex(finalQuestionIndex)
                      const contactQuestionIndex = FINAL_QUESTIONS[finalQuestionIndex].questions?.findIndex(q => q.type === 'contact_form') || 0
                      setCurrentQuestionIndex(contactQuestionIndex)
                    }
                  }}
                  className="mt-6 bg-blue-600 hover:bg-blue-700"
                >
                  Try Again
                </Button>
              </>
            )}

            {submissionSuccess && !isSubmitting && (
              <>
                <CheckCircle2 className="w-16 h-16 text-green-600 mx-auto mb-6" />
                <Heading level="1" className="mb-4 text-4xl font-bold">
                  Analysis Complete!
                </Heading>
                <Text className="text-lg text-gray-600 mb-8">
                  Thank you for completing the assessment. Your personalized business analysis report is being generated and will be delivered to your email within the next 5-10 minutes.
                </Text>
                <div className="bg-green-50 rounded-lg p-6 text-left space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    <Text className="text-sm text-green-800 font-medium">Quiz responses analyzed and stored</Text>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    <Text className="text-sm text-green-800 font-medium">Website analysis initiated</Text>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    <Text className="text-sm text-green-800 font-medium">AI-powered business report generation started</Text>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    <Text className="text-sm text-green-800 font-medium">Email delivery scheduled</Text>
                  </div>
                </div>
                <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                  <Heading level="3" className="text-lg font-semibold text-blue-900 mb-2">
                    What's Next?
                  </Heading>
                  <Text className="text-sm text-blue-800 mb-4">
                    Your comprehensive business analysis report will include:
                  </Text>
                  <div className="text-left space-y-2">
                    <Text className="text-sm text-blue-800">• Executive summary of automation opportunities</Text>
                    <Text className="text-sm text-blue-800">• ROI projections and time savings analysis</Text>
                    <Text className="text-sm text-blue-800">• Custom recommendations for your {selectedDepartment || answers.department_focus} department</Text>
                    <Text className="text-sm text-blue-800">• Implementation roadmap and next steps</Text>
                  </div>
                </div>
                <Text className="text-sm text-gray-500 mt-6">
                  Email: {answers.contact_details?.business_email}
                </Text>
              </>
            )}
          </div>
        </Container>
      </div>
    )
  }

  if (!currentQuestion) {
    return (
      <div className="py-20 bg-white">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <div className="space-y-4">
              <Text className="text-lg text-gray-600">Loading question...</Text>
              <div className="text-sm text-gray-500">
                <p>Step: {currentStep}</p>
                <p>Phase: {currentPhaseIndex}</p>
                <p>Question: {currentQuestionIndex}</p>
                <p>Department: {selectedDepartment}</p>
                <p>Available phases: {currentPhases.length}</p>
              </div>
              {currentPhases.length === 0 && currentStep === 'route' && (
                <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                  <Text className="text-yellow-800">
                    No questions available for the selected department.
                    <Button
                      variant="link"
                      onClick={() => {
                        setCurrentStep('final')
                        setCurrentPhaseIndex(0)
                        setCurrentQuestionIndex(0)
                      }}
                      className="ml-2 text-yellow-800 underline"
                    >
                      Skip to final questions →
                    </Button>
                  </Text>
                </div>
              )}
            </div>
          </div>
        </Container>
      </div>
    )
  }

  return (
    <div ref={quizContainerRef} className="py-20 bg-white">
      <Container>
        <div className="max-w-3xl mx-auto">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-700">
                Question {getCurrentQuestionNumber()} of {getTotalQuestions()}
              </span>
              <span className="text-sm font-semibold text-blue-900">
                {Math.round(progress)}% complete
              </span>
            </div>
            <Progress value={progress} className="h-3" />
          </div>

          {/* Phase Info */}
          {currentPhase && (
            <div className="mb-8 text-center">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold text-blue-900">
                  {currentPhase.title}
                </h2>
                {currentPhase.description && (
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    {currentPhase.description}
                  </p>
                )}
              </div>
            </div>
          )}

          {/* Question */}
          <Card className="p-8 mb-8">
            <div className="space-y-6">
              <div className="text-center">
                <Heading level="2" className="mb-2 text-2xl font-semibold">
                  {currentQuestion.title}
                </Heading>
                {currentQuestion.subtitle && (
                  <Text className="text-gray-600">
                    {currentQuestion.subtitle}
                  </Text>
                )}
                {currentQuestion.subtext && (
                  <Text className="text-sm text-gray-500 italic">
                    {currentQuestion.subtext}
                  </Text>
                )}
              </div>

              <QuestionRenderer
                question={currentQuestion}
                value={answers[currentQuestion.id]}
                onChange={handleAnswer}
                onNext={undefined}
              />
            </div>
          </Card>

          {/* Navigation */}
          <div className="flex justify-between">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentStep === 'opening' && currentPhaseIndex === 0 && currentQuestionIndex === 0}
            >
              <ChevronLeft className="w-4 h-4 mr-1" />
              Previous
            </Button>

            <Button
              onClick={handleNext}
              disabled={!canProceed()}
              className="bg-blue-600 hover:bg-blue-700"
            >
              {currentStep === 'final' && currentPhaseIndex === currentPhases.length - 1 && 
               currentQuestionIndex === (currentPhase?.questions?.length || 1) - 1
                ? 'Complete Assessment'
                : 'Next'
              }
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}