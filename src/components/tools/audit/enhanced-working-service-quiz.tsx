"use client"

import { useState, useEffect } from "react"
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
  Minus
} from "lucide-react"
import { SERVICE_QUIZ_PHASES, SALES_ROUTE_PHASES, FINANCE_ROUTE_PHASES, CUSTOMER_SERVICE_ROUTE_PHASES, FINAL_QUESTIONS } from "@/config/service-quiz"
import { Question, QuizPhase } from "@/types/audit-tool"

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

const DEPARTMENT_ROUTES = {
  sales: SALES_ROUTE_PHASES,
  finance: FINANCE_ROUTE_PHASES,
  customer_service: CUSTOMER_SERVICE_ROUTE_PHASES,
  operations: [], // TODO: Implement
  marketing: [], // TODO: Implement
  hr: [] // TODO: Implement
}

interface QuestionRendererProps {
  question: Question
  value: any
  onChange: (value: any) => void
  onNext?: () => void
}

// Helper function to determine if question should use visual grid
const shouldUseVisualGrid = (question: Question) => {
  return question.id === 'company_size' ||
         question.id === 'user_role' ||
         question.id === 'business_model' ||
         question.type === 'visual_grid'
}

// Helper function to get icon for question option
const getIconForOption = (questionId: string, optionValue: string) => {
  switch (questionId) {
    case 'company_size':
      return COMPANY_SIZE_ICONS[optionValue as keyof typeof COMPANY_SIZE_ICONS] || Building2
    case 'user_role':
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
            <div key={option.value} className="relative">
              <button
                type="button"
                onClick={() => handleMethodToggle(option.value)}
                className={`
                  w-full p-6 rounded-xl border-2 transition-all duration-300 text-left group relative overflow-hidden
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

                <div className="relative flex items-start space-x-4">
                  <div className={`
                    p-3 rounded-lg flex items-center justify-center transition-all duration-300
                    ${isSelected
                      ? `bg-gradient-to-br ${colorClass} text-white shadow-md`
                      : 'bg-gray-100 text-gray-700 group-hover:bg-blue-100 group-hover:text-blue-600'
                    }
                  `}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className={`font-semibold transition-colors duration-300 ${
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

// Interactive Team Structure Builder Component
function TeamStructureBuilder({ question, value, onChange }: { question: Question, value: any, onChange: (value: any) => void }) {
  const teamData = value || {}

  const updateTeamValue = (inputId: string, newValue: string | number) => {
    onChange({
      ...teamData,
      [inputId]: newValue
    })
  }

  const incrementValue = (inputId: string, max: number) => {
    const currentValue = parseInt(teamData[inputId] || '0')
    if (currentValue < max) {
      updateTeamValue(inputId, currentValue + 1)
    }
  }

  const decrementValue = (inputId: string) => {
    const currentValue = parseInt(teamData[inputId] || '0')
    if (currentValue > 0) {
      updateTeamValue(inputId, currentValue - 1)
    }
  }

  const getTotalTeamSize = () => {
    return question.teamInputs?.reduce((total, input) => {
      const value = parseInt(teamData[input.id] || '0')
      return total + (input.id !== 'weekly_hours' ? value : 0) // Don't count hours in team size
    }, 0) || 0
  }

  const getTeamCostEstimate = () => {
    const fullTime = parseInt(teamData['full_time_sales'] || '0')
    const partTime = parseInt(teamData['part_time_support'] || '0')
    const yourHours = parseInt(teamData['weekly_hours'] || '0')
    const marketing = parseInt(teamData['marketing_support'] || '0')

    // Rough cost estimates (€/week)
    const fullTimeCost = fullTime * 1000 // €1000/week per full-time
    const partTimeCost = partTime * 400   // €400/week per part-time
    const yourCost = yourHours * 25       // €25/hour for your time
    const marketingCost = marketing * 600 // €600/week per marketing support

    return fullTimeCost + partTimeCost + yourCost + marketingCost
  }

  return (
    <div className="space-y-8">
      {/* Team Builder Interface */}
      <div className="grid gap-6">
        {question.teamInputs?.map((input) => {
          const currentValue = parseInt(teamData[input.id] || '0')
          const isHours = input.id === 'weekly_hours'
          const maxValue = input.max || 50

          const getValueColor = (value: number, max: number) => {
            const percentage = value / max
            if (percentage < 0.3) return '#10B981' // Green
            if (percentage < 0.6) return '#3B82F6' // Blue
            if (percentage < 0.8) return '#F59E0B' // Orange
            return '#EF4444' // Red
          }

          return (
            <div key={input.id} className="bg-white rounded-xl border-2 border-gray-200 p-6 hover:border-blue-300 transition-all duration-300">
              <div className="space-y-6">
                {/* Header */}
                <div className="text-center">
                  <Label className="text-lg font-semibold text-gray-900">{input.label}</Label>
                  <div className="text-sm text-gray-600 mt-1">
                    {isHours ? 'Hours per week' : 'Number of people'}
                  </div>
                </div>

                {/* Value Display */}
                <div className="text-center">
                  <div
                    className="text-5xl font-bold transition-all duration-300"
                    style={{ color: getValueColor(currentValue, maxValue) }}
                  >
                    {currentValue}
                  </div>
                  <div className="text-sm text-gray-500 mt-1">
                    {isHours ? 'hours/week' : currentValue === 1 ? 'person' : 'people'}
                  </div>
                </div>

                {/* Interactive Slider */}
                <div className="relative px-2">
                  <div className="relative h-6 bg-gray-200 rounded-full overflow-hidden">
                    {/* Progress Fill */}
                    <div
                      className="absolute h-full rounded-full transition-all duration-300 ease-out"
                      style={{
                        width: `${(currentValue / maxValue) * 100}%`,
                        backgroundColor: getValueColor(currentValue, maxValue)
                      }}
                    />

                    {/* Slider Handle */}
                    <div
                      className="absolute top-1/2 w-5 h-5 bg-white rounded-full shadow-lg border-2 transform -translate-y-1/2 cursor-pointer transition-all duration-200 hover:scale-110"
                      style={{
                        left: `calc(${(currentValue / maxValue) * 100}% - 10px)`,
                        borderColor: getValueColor(currentValue, maxValue)
                      }}
                    />
                  </div>

                  {/* Hidden Range Input */}
                  <input
                    type="range"
                    min="0"
                    max={maxValue}
                    value={currentValue}
                    onChange={(e) => updateTeamValue(input.id, parseInt(e.target.value))}
                    className="absolute inset-0 w-full h-6 opacity-0 cursor-pointer"
                  />
                </div>

                {/* Scale Markers */}
                <div className="flex justify-between text-xs text-gray-500 px-2">
                  <span>0</span>
                  <span>{Math.floor(maxValue / 4)}</span>
                  <span>{Math.floor(maxValue / 2)}</span>
                  <span>{Math.floor((maxValue * 3) / 4)}</span>
                  <span>{maxValue}</span>
                </div>

                {/* Quick Action Buttons */}
                <div className="flex justify-center space-x-2">
                  <button
                    type="button"
                    onClick={() => updateTeamValue(input.id, Math.max(0, currentValue - 1))}
                    disabled={currentValue <= 0}
                    className="w-8 h-8 rounded-full bg-gray-100 hover:bg-red-100 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center transition-all duration-200 hover:scale-110"
                  >
                    <Minus className="w-4 h-4 text-gray-600 hover:text-red-600" />
                  </button>

                  <button
                    type="button"
                    onClick={() => updateTeamValue(input.id, Math.min(maxValue, currentValue + 1))}
                    disabled={currentValue >= maxValue}
                    className="w-8 h-8 rounded-full bg-gray-100 hover:bg-green-100 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center transition-all duration-200 hover:scale-110"
                  >
                    <Plus className="w-4 h-4 text-gray-600 hover:text-green-600" />
                  </button>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Team Summary */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Users2 className="w-6 h-6 text-blue-600 mr-2" />
              <span className="text-lg font-semibold text-blue-900">Team Size</span>
            </div>
            <div className="text-3xl font-bold text-blue-600">{getTotalTeamSize()}</div>
            <div className="text-sm text-blue-700">people involved</div>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <DollarSign className="w-6 h-6 text-green-600 mr-2" />
              <span className="text-lg font-semibold text-green-900">Weekly Cost</span>
            </div>
            <div className="text-3xl font-bold text-green-600">€{getTeamCostEstimate().toLocaleString()}</div>
            <div className="text-sm text-green-700">estimated weekly cost</div>
          </div>
        </div>
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
                onCheckedChange={(checked) => updateTeamValue(input.id, checked)}
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

// Interactive Conversion Rate Gauge Component
function ConversionRateGauge({ question, value, onChange }: { question: Question, value: any, onChange: (value: any) => void }) {
  const conversionRates = [
    { value: 'poor', label: 'Under 10%', description: 'Less than 10% book meetings', rate: 5, color: 'from-blue-400 to-blue-500', textColor: 'text-blue-600' },
    { value: 'below-average', label: '10-15%', description: '10-15% book meetings', rate: 12.5, color: 'from-blue-400 to-blue-500', textColor: 'text-blue-600' },
    { value: 'average', label: '15-20%', description: '15-20% book meetings', rate: 17.5, color: 'from-blue-500 to-blue-600', textColor: 'text-blue-600' },
    { value: 'good', label: '20-30%', description: '20-30% book meetings', rate: 25, color: 'from-blue-500 to-blue-600', textColor: 'text-blue-600' },
    { value: 'strong', label: '30-40%', description: '30-40% book meetings', rate: 35, color: 'from-blue-600 to-blue-700', textColor: 'text-blue-700' },
    { value: 'excellent', label: '40%+', description: '40%+ book meetings', rate: 45, color: 'from-blue-600 to-blue-700', textColor: 'text-blue-700' },
    { value: 'wrong-people', label: 'Different Focus', description: 'Not reaching the right people', rate: 0, color: 'from-gray-500 to-gray-600', textColor: 'text-gray-600' }
  ]

  const selectedRate = conversionRates.find(r => r.value === value)
  const selectedIndex = conversionRates.findIndex(r => r.value === value)

  // Calculate gauge rotation (0-180 degrees)
  const getGaugeRotation = (rate: number) => {
    if (rate === 0) return 0 // Special case for "wrong people"
    return Math.min((rate / 50) * 180, 180) // Max 50% = 180 degrees
  }

  return (
    <div className="space-y-8">
      {/* Gauge Visualization */}
      <div className="relative max-w-md mx-auto">
        <div className="relative w-80 h-40 mx-auto">
          {/* Gauge Background */}
          <div className="absolute inset-0">
            <svg viewBox="0 0 200 100" className="w-full h-full">
              {/* Background Arc */}
              <path
                d="M 20 80 A 80 80 0 0 1 180 80"
                fill="none"
                stroke="#E5E7EB"
                strokeWidth="12"
                strokeLinecap="round"
              />

              {/* Neutral Background Zones */}
              <path d="M 20 80 A 80 80 0 0 1 180 80" fill="none" stroke="#E5E7EB" strokeWidth="8" strokeLinecap="round" opacity="0.5" />

              {/* Active Arc */}
              {selectedRate && selectedRate.rate > 0 && (
                <path
                  d={`M 20 80 A 80 80 0 0 1 ${20 + (getGaugeRotation(selectedRate.rate) / 180) * 160} ${80 - Math.sin((getGaugeRotation(selectedRate.rate) * Math.PI) / 180) * 80}`}
                  fill="none"
                  stroke="url(#gaugeGradient)"
                  strokeWidth="12"
                  strokeLinecap="round"
                  className="transition-all duration-1000 ease-out"
                />
              )}

              {/* Gradient Definition */}
              <defs>
                <linearGradient id="gaugeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3B82F6" />
                  <stop offset="50%" stopColor="#2563EB" />
                  <stop offset="100%" stopColor="#1D4ED8" />
                </linearGradient>
              </defs>

              {/* Needle */}
              {selectedRate && (
                <g className="transition-all duration-1000 ease-out" transform={`rotate(${getGaugeRotation(selectedRate.rate)} 100 80)`}>
                  <line x1="100" y1="80" x2="100" y2="30" stroke="#374151" strokeWidth="3" strokeLinecap="round" />
                  <circle cx="100" cy="80" r="6" fill="#374151" />
                </g>
              )}
            </svg>
          </div>

          {/* Center Display */}
          <div className="absolute inset-x-0 bottom-0 text-center">
            {selectedRate && (
              <div className="space-y-1">
                <div className={`text-3xl font-bold ${selectedRate.textColor}`}>
                  {selectedRate.rate === 0 ? '?' : `${selectedRate.rate}%`}
                </div>
                <div className="text-sm text-gray-600">{selectedRate.label}</div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Performance Level Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {conversionRates.map((rate) => {
          const isSelected = value === rate.value

          return (
            <button
              key={rate.value}
              type="button"
              onClick={() => onChange(rate.value)}
              className={`
                relative p-5 rounded-xl border-2 transition-all duration-300 text-left group overflow-hidden
                ${isSelected
                  ? 'border-blue-600 bg-white shadow-lg transform scale-105'
                  : 'border-gray-200 bg-white hover:border-blue-300 hover:shadow-md hover:transform hover:scale-102'
                }
              `}
            >
              {/* Background Gradient */}
              {isSelected && (
                <div className={`absolute inset-0 bg-gradient-to-br ${rate.color} opacity-5`} />
              )}

              <div className="relative space-y-3">
                {/* Performance Indicator */}
                <div className="flex items-center justify-between">
                  <div className={`
                    px-3 py-1 rounded-full text-sm font-semibold transition-all duration-300
                    ${isSelected
                      ? `bg-gradient-to-r ${rate.color} text-white`
                      : 'bg-gray-100 text-gray-700 group-hover:bg-blue-100 group-hover:text-blue-700'
                    }
                  `}>
                    {rate.rate === 0 ? 'N/A' : `${rate.rate}%`}
                  </div>
                  {isSelected && (
                    <CheckCircle2 className="w-5 h-5 text-blue-600" />
                  )}
                </div>

                {/* Label and Description */}
                <div className="space-y-1">
                  <div className={`font-semibold transition-colors duration-300 ${
                    isSelected ? 'text-blue-900' : 'text-gray-900 group-hover:text-blue-800'
                  }`}>
                    {rate.label}
                  </div>
                  <div className={`text-sm transition-colors duration-300 ${
                    isSelected ? 'text-blue-700' : 'text-gray-600 group-hover:text-blue-600'
                  }`}>
                    {rate.description}
                  </div>
                </div>
              </div>
            </button>
          )
        })}
      </div>

      {/* Conversion Context */}
      {selectedRate && selectedRate.rate > 0 && (
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
          <div className="text-center">
            <h4 className="font-semibold text-blue-900 mb-2">Conversion Context</h4>
            <div className="text-sm text-blue-700">
              With 100 prospects: <span className="font-semibold">{selectedRate.rate} meetings</span>
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

// Interactive Priority Ranking Component for Scaling Obstacles
function PriorityRankingSelector({ question, value, onChange }: { question: Question, value: any, onChange: (value: any) => void }) {
  const selectedObstacles = value || []
  const maxSelections = question.maxSelections || 3

  const obstacleIcons = {
    'not-enough-hours': Clock,
    'finding-prospects': Target,
    'contact-info': Database,
    'personalization-time': Timer,
    'crm-maintenance': Settings,
    'inconsistent-followup': Calendar,
    'poor-data-quality': Shield,
    'team-burnout': Users2
  }

  const obstacleColors = {
    'not-enough-hours': 'from-red-500 to-red-600',
    'finding-prospects': 'from-blue-500 to-blue-600',
    'contact-info': 'from-green-500 to-green-600',
    'personalization-time': 'from-yellow-500 to-yellow-600',
    'crm-maintenance': 'from-purple-500 to-purple-600',
    'inconsistent-followup': 'from-pink-500 to-pink-600',
    'poor-data-quality': 'from-indigo-500 to-indigo-600',
    'team-burnout': 'from-orange-500 to-orange-600'
  }

  const handleObstacleToggle = (obstacleValue: string) => {
    if (selectedObstacles.includes(obstacleValue)) {
      // Remove obstacle
      const newSelection = selectedObstacles.filter((o: string) => o !== obstacleValue)
      onChange(newSelection)
    } else if (selectedObstacles.length < maxSelections) {
      // Add obstacle
      const newSelection = [...selectedObstacles, obstacleValue]
      onChange(newSelection)
    }
  }

  const getObstaclePriority = (obstacleValue: string) => {
    const index = selectedObstacles.indexOf(obstacleValue)
    return index >= 0 ? index + 1 : null
  }

  return (
    <div className="space-y-8">
      {/* Selection Progress */}
      <div className="text-center">
        <div className="text-sm text-gray-600 mb-2">Select your top {maxSelections} scaling obstacles</div>
        <div className="flex justify-center space-x-2">
          {Array.from({ length: maxSelections }, (_, i) => (
            <div
              key={i}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                i < selectedObstacles.length
                  ? 'bg-blue-600 scale-110'
                  : 'bg-gray-200'
              }`}
            />
          ))}
        </div>
        <div className="text-xs text-gray-500 mt-1">
          {selectedObstacles.length}/{maxSelections} selected
        </div>
      </div>

      {/* Obstacle Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {question.options?.map((option) => {
          const IconComponent = obstacleIcons[option.value as keyof typeof obstacleIcons] || Settings
          const isSelected = selectedObstacles.includes(option.value)
          const priority = getObstaclePriority(option.value)
          const colorClass = obstacleColors[option.value as keyof typeof obstacleColors] || 'from-gray-500 to-gray-600'
          const canSelect = !isSelected && selectedObstacles.length < maxSelections

          return (
            <button
              key={option.value}
              type="button"
              onClick={() => handleObstacleToggle(option.value)}
              disabled={!isSelected && selectedObstacles.length >= maxSelections}
              className={`
                relative p-6 rounded-xl border-2 transition-all duration-300 text-left group overflow-hidden
                ${isSelected
                  ? 'border-blue-600 bg-white shadow-lg transform scale-105'
                  : canSelect
                    ? 'border-gray-200 bg-white hover:border-blue-300 hover:shadow-md hover:transform hover:scale-102'
                    : 'border-gray-200 bg-gray-50 opacity-60 cursor-not-allowed'
                }
              `}
            >
              {/* Background Gradient */}
              {isSelected && (
                <div className={`absolute inset-0 bg-gradient-to-br ${colorClass} opacity-5`} />
              )}

              {/* Priority Badge */}
              {isSelected && priority && (
                <div className="absolute top-3 left-3">
                  <div className={`
                    w-8 h-8 rounded-full bg-gradient-to-br ${colorClass} text-white
                    flex items-center justify-center text-sm font-bold shadow-lg
                  `}>
                    {priority}
                  </div>
                </div>
              )}

              <div className="relative flex items-start space-x-4">
                <div className={`
                  p-3 rounded-lg flex items-center justify-center transition-all duration-300 mt-1
                  ${isSelected
                    ? `bg-gradient-to-br ${colorClass} text-white shadow-md`
                    : canSelect
                      ? 'bg-gray-100 text-gray-700 group-hover:bg-blue-100 group-hover:text-blue-600'
                      : 'bg-gray-200 text-gray-500'
                  }
                `}>
                  <IconComponent className="w-6 h-6" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className={`font-semibold transition-colors duration-300 ${
                    isSelected
                      ? 'text-blue-900'
                      : canSelect
                        ? 'text-gray-900 group-hover:text-blue-800'
                        : 'text-gray-500'
                  }`}>
                    {option.label}
                  </div>
                  {isSelected && (
                    <div className="text-sm text-blue-600 mt-1 font-medium">
                      Priority #{priority}
                    </div>
                  )}
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

      {/* Selected Obstacles Summary */}
      {selectedObstacles.length > 0 && (
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
          <h4 className="font-semibold text-blue-900 mb-4">Your Top Scaling Obstacles</h4>
          <div className="space-y-2">
            {selectedObstacles.map((obstacleValue: string, index: number) => {
              const option = question.options?.find(o => o.value === obstacleValue)
              const IconComponent = obstacleIcons[obstacleValue as keyof typeof obstacleIcons] || Settings
              const colorClass = obstacleColors[obstacleValue as keyof typeof obstacleColors] || 'from-gray-500 to-gray-600'

              return (
                <div key={obstacleValue} className="flex items-center space-x-3">
                  <div className={`
                    w-8 h-8 rounded-full bg-gradient-to-br ${colorClass} text-white
                    flex items-center justify-center text-sm font-bold
                  `}>
                    {index + 1}
                  </div>
                  <div className={`
                    p-2 rounded-lg bg-gradient-to-br ${colorClass} text-white
                  `}>
                    <IconComponent className="w-4 h-4" />
                  </div>
                  <div className="text-blue-800 font-medium">{option?.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}

// Interactive Tech Stack Builder Component
function TechStackBuilder({ question, value, onChange }: { question: Question, value: any, onChange: (value: any) => void }) {
  const selectedTools = value || []

  const toolCategories = {
    'crm': { category: 'CRM & Pipeline', icon: Database, color: 'from-blue-500 to-blue-600' },
    'linkedin-sales-nav': { category: 'Prospecting', icon: Linkedin, color: 'from-blue-400 to-blue-500' },
    'email-automation': { category: 'Outreach', icon: Mail, color: 'from-green-500 to-green-600' },
    'data-providers': { category: 'Data & Intelligence', icon: Target, color: 'from-purple-500 to-purple-600' },
    'calendar-scheduling': { category: 'Scheduling', icon: Calendar, color: 'from-orange-500 to-orange-600' },
    'call-recording': { category: 'Communication', icon: Phone, color: 'from-red-500 to-red-600' },
    'proposal-software': { category: 'Closing', icon: FileText, color: 'from-indigo-500 to-indigo-600' },
    'spreadsheets-email': { category: 'Basic Tools', icon: Settings, color: 'from-gray-500 to-gray-600' }
  }

  const handleToolToggle = (toolValue: string) => {
    const newSelection = selectedTools.includes(toolValue)
      ? selectedTools.filter((t: string) => t !== toolValue)
      : [...selectedTools, toolValue]
    onChange(newSelection)
  }

  const getStackComplexity = () => {
    if (selectedTools.length === 0) return { level: 'None', description: 'No tools selected', color: 'text-gray-600' }
    if (selectedTools.length <= 2) return { level: 'Minimal', description: 'Focused setup', color: 'text-blue-600' }
    if (selectedTools.length <= 4) return { level: 'Moderate', description: 'Balanced stack', color: 'text-blue-600' }
    if (selectedTools.length <= 6) return { level: 'Comprehensive', description: 'Full-featured setup', color: 'text-blue-700' }
    return { level: 'Extensive', description: 'Multi-platform approach', color: 'text-blue-800' }
  }

  const complexity = getStackComplexity()

  return (
    <div className="space-y-8">
      {/* Stack Overview */}
      <div className="text-center">
        <div className="text-sm text-gray-600 mb-4">Build your current sales tech stack</div>
        <div className="inline-flex items-center space-x-4 bg-white rounded-xl border-2 border-gray-200 px-6 py-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900">{selectedTools.length}</div>
            <div className="text-xs text-gray-600">Tools</div>
          </div>
          <div className="w-px h-8 bg-gray-300" />
          <div className="text-center">
            <div className={`text-lg font-semibold ${complexity.color}`}>{complexity.level}</div>
            <div className="text-xs text-gray-600">{complexity.description}</div>
          </div>
        </div>
      </div>

      {/* Tool Selection Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {question.options?.map((option) => {
          const toolInfo = toolCategories[option.value as keyof typeof toolCategories]
          const IconComponent = toolInfo?.icon || Settings
          const isSelected = selectedTools.includes(option.value)
          const colorClass = toolInfo?.color || 'from-gray-500 to-gray-600'

          return (
            <button
              key={option.value}
              type="button"
              onClick={() => handleToolToggle(option.value)}
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
                {/* Tool Icon and Category */}
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

                {/* Tool Details */}
                <div className="space-y-2">
                  <div className={`text-xs font-medium uppercase tracking-wide transition-colors duration-300 ${
                    isSelected ? 'text-blue-600' : 'text-gray-500 group-hover:text-blue-500'
                  }`}>
                    {toolInfo?.category || 'Tool'}
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

      {/* Tech Stack Visualization */}
      {selectedTools.length > 0 && (
        <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-6 border border-gray-200">
          <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
            <Settings className="w-5 h-5 mr-2 text-blue-600" />
            Your Current Tech Stack
          </h4>

          {/* Stack Flow Visualization */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {selectedTools.map((toolValue: string, index: number) => {
              const option = question.options?.find(o => o.value === toolValue)
              const toolInfo = toolCategories[toolValue as keyof typeof toolCategories]
              const IconComponent = toolInfo?.icon || Settings
              const colorClass = toolInfo?.color || 'from-gray-500 to-gray-600'

              return (
                <div key={toolValue} className="text-center">
                  <div className={`
                    w-12 h-12 mx-auto rounded-lg bg-gradient-to-br ${colorClass}
                    flex items-center justify-center text-white shadow-md mb-2
                  `}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div className="text-xs text-gray-700 font-medium">{toolInfo?.category}</div>
                </div>
              )
            })}
          </div>

          {/* Integration Complexity Indicator */}
          <div className="mt-6 pt-4 border-t border-gray-200">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Integration Complexity:</span>
              <span className={`font-semibold ${complexity.color}`}>
                {complexity.level} ({selectedTools.length} tools)
              </span>
            </div>
            <div className="mt-2 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-500"
                style={{ width: `${Math.min((selectedTools.length / 8) * 100, 100)}%` }}
              />
            </div>
          </div>
        </div>
      )}
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
  if (question.id === 'lead_generation_methods') {
    return <LeadGenerationMethodsSelector question={question} value={value} onChange={onChange} />
  }

  if (question.id === 'weekly_conversations') {
    return <ConversationVolumeSlider question={question} value={value} onChange={onChange} />
  }

  if (question.id === 'sales_team_structure') {
    return <TeamStructureBuilder question={question} value={value} onChange={onChange} />
  }

  if (question.id === 'hourly_cost_sales') {
    return <SalaryRangeSlider question={question} value={value} onChange={onChange} />
  }

  if (question.id === 'prospect_outcomes') {
    return <ConversionRateGauge question={question} value={value} onChange={onChange} />
  }

  if (question.id === 'scaling_obstacles') {
    return <PriorityRankingSelector question={question} value={value} onChange={onChange} />
  }

  if (question.id === 'current_sales_tools') {
    return <TechStackBuilder question={question} value={value} onChange={onChange} />
  }

  if (question.id === 'transformation_priorities') {
    return <PriorityRankingSelector question={question} value={value} onChange={onChange} />
  }

  if (question.id === 'time_breakdown_per_prospect') {
    return <TimeBreakdownSlider question={question} value={value} onChange={onChange} />
  }

  switch (question.type) {
    case 'multi_time_breakdown':
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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
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
          {question.realTimeCalculation && question.calculationText && (
            <div className="mt-6 p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-green-100 rounded-full">
                  <Calculator className="w-5 h-5 text-green-600" />
                </div>
                <Text className="text-sm text-green-700 font-medium">💡 {question.calculationText}</Text>
              </div>
            </div>
          )}
        </div>
      )

    case 'radio':
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

    case 'checkbox':
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

    case 'visual_grid':
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

    case 'multi_time_breakdown':
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

    case 'team_structure':
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

    case 'transaction_volumes':
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

    case 'approval_analysis':
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

    case 'percentage_sliders':
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
      setCurrentStep('results')
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

  const canProceed = () => {
    if (!currentQuestion) return false
    const answer = answers[currentQuestion.id]
    
    if (currentQuestion.required) {
      if (currentQuestion.type === 'checkbox') {
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
            <CheckCircle2 className="w-16 h-16 text-green-600 mx-auto mb-6" />
            <Heading level="1" className="mb-4 text-4xl font-bold">
              Assessment Complete!
            </Heading>
            <Text className="text-lg text-gray-600 mb-8">
              Thank you for completing the assessment. Your personalized automation 
              roadmap will be sent to your email shortly.
            </Text>
            <div className="bg-gray-50 rounded-lg p-6 text-left">
              <h3 className="font-semibold mb-2">Your Responses:</h3>
              <pre className="text-sm text-gray-600 whitespace-pre-wrap">
                {JSON.stringify(answers, null, 2)}
              </pre>
            </div>
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
    <div className="py-20 bg-white">
      <Container>
        <div className="max-w-3xl mx-auto">
          {/* Progress Bar */}
          <div className="mb-8 text-center">
            <div className="flex justify-between items-center mb-2">
              <Text className="text-sm text-gray-600">
                Question {getCurrentQuestionNumber()} of {getTotalQuestions()}
              </Text>
              <Text className="text-sm text-gray-600">
                {Math.round(progress)}% complete
              </Text>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          {/* Phase Info */}
          {currentPhase && (
            <div className="mb-6 text-center">
              <Text className="text-sm text-blue-600 font-medium">
                {currentPhase.title}
              </Text>
              {currentPhase.description && (
                <Text className="text-sm text-gray-500 mt-1">
                  {currentPhase.description}
                </Text>
              )}
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