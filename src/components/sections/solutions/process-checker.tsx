"use client"

import { useState } from "react"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle, AlertTriangle, X } from "lucide-react"

const checklistItems = [
  {
    id: "frequency",
    text: "Happens regularly (10+ times/month)",
    weight: 1
  },
  {
    id: "computer",
    text: "Done on computer currently",
    weight: 1
  },
  {
    id: "patterns",
    text: "Has patterns (even with exceptions)",
    weight: 1
  },
  {
    id: "duration",
    text: "Takes 30+ minutes each time",
    weight: 1
  },
  {
    id: "rules",
    text: "Follows business rules",
    weight: 1
  }
]

const getScoreResult = (score: number) => {
  if (score >= 4) {
    return {
      icon: CheckCircle,
      color: "green",
      title: "Perfect candidate",
      description: "This task is ideal for digital employee automation"
    }
  } else if (score >= 2) {
    return {
      icon: AlertTriangle,
      color: "orange",
      title: "Possible with adjustments",
      description: "This task could work with some modifications to the process"
    }
  } else {
    return {
      icon: X,
      color: "red",
      title: "Better left to humans",
      description: "This task requires too much human judgment for automation"
    }
  }
}

export function ProcessChecker() {
  const [checkedItems, setCheckedItems] = useState<string[]>([])
  const [taskDescription, setTaskDescription] = useState("")
  const [showResult, setShowResult] = useState(false)

  const handleItemToggle = (itemId: string) => {
    setCheckedItems(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    )
    setShowResult(true)
  }

  const score = checkedItems.length
  const result = getScoreResult(score)
  const ResultIcon = result.icon

  const getColorClasses = (color: string) => {
    switch (color) {
      case "green":
        return {
          bg: "bg-green-50",
          border: "border-green-200",
          text: "text-green-800",
          icon: "text-green-600"
        }
      case "orange":
        return {
          bg: "bg-orange-50",
          border: "border-orange-200",
          text: "text-orange-800",
          icon: "text-orange-600"
        }
      case "red":
        return {
          bg: "bg-red-50",
          border: "border-red-200",
          text: "text-red-800",
          icon: "text-red-600"
        }
      default:
        return {
          bg: "bg-gray-50",
          border: "border-gray-200",
          text: "text-gray-800",
          icon: "text-gray-600"
        }
    }
  }

  const colors = getColorClasses(result.color)

  return (
    <Section padding="xl" background="white">
      <Container className="max-w-4xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Heading level="2" className="velox-text-h2 mb-4">
            Quick Process Checker
          </Heading>
          <Text className="velox-text-body text-lg text-gray-700">
            Can This Task Become a Digital Employee?
          </Text>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Interactive Checklist */}
          <div>
            <Heading level="3" className="text-xl font-semibold text-gray-900 mb-6">
              Interactive Checklist
            </Heading>
            
            <div className="space-y-4 mb-8">
              {checklistItems.map((item) => (
                <label
                  key={item.id}
                  className="flex items-start space-x-3 cursor-pointer group"
                >
                  <div className="relative">
                    <input
                      type="checkbox"
                      checked={checkedItems.includes(item.id)}
                      onChange={() => handleItemToggle(item.id)}
                      className="sr-only"
                    />
                    <div className={`w-6 h-6 border-2 rounded-md flex items-center justify-center transition-all duration-200 ${
                      checkedItems.includes(item.id)
                        ? 'bg-blue-600 border-blue-600'
                        : 'border-gray-300 group-hover:border-blue-400'
                    }`}>
                      {checkedItems.includes(item.id) && (
                        <CheckCircle className="w-4 h-4 text-white" />
                      )}
                    </div>
                  </div>
                  <Text className="text-gray-700 group-hover:text-gray-900 transition-colors">
                    {item.text}
                  </Text>
                </label>
              ))}
            </div>

            {/* Score Display */}
            {showResult && (
              <div className={`${colors.bg} ${colors.border} border-2 rounded-lg p-6`}>
                <div className="flex items-center mb-3">
                  <ResultIcon className={`w-6 h-6 ${colors.icon} mr-3`} />
                  <Text className={`font-semibold ${colors.text}`}>
                    Score: {score}/5 - {result.title}
                  </Text>
                </div>
                <Text className={`${colors.text}`}>
                  {result.description}
                </Text>
              </div>
            )}
          </div>

          {/* Task Description */}
          <div>
            <Heading level="3" className="text-xl font-semibold text-gray-900 mb-6">
              Describe Your Task
            </Heading>
            
            <div className="space-y-4">
              <Textarea
                placeholder="Describe the specific task you want to automate. Include details about frequency, steps involved, and any exceptions..."
                value={taskDescription}
                onChange={(e) => setTaskDescription(e.target.value)}
                className="min-h-[120px] resize-none"
              />
              
              <Button 
                className="velox-cta-primary w-full"
                disabled={!taskDescription.trim()}
              >
                Try Your Task - Get Instant Assessment
              </Button>
            </div>

            {/* Quick Reference */}
            <div className="mt-8 bg-gray-50 rounded-lg p-6">
              <Heading level="4" className="text-lg font-semibold text-gray-900 mb-4">
                Quick Reference
              </Heading>
              
              <div className="space-y-3 text-sm">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                  <Text className="text-gray-700">4-5 checks: Perfect candidate</Text>
                </div>
                <div className="flex items-center">
                  <AlertTriangle className="w-4 h-4 text-orange-600 mr-2" />
                  <Text className="text-gray-700">2-3 checks: Possible with adjustments</Text>
                </div>
                <div className="flex items-center">
                  <X className="w-4 h-4 text-red-600 mr-2" />
                  <Text className="text-gray-700">0-1 checks: Better left to humans</Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
