"use client"

import { useState } from "react"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"
import { Checkbox } from "@/components/ui/checkbox"
import { Cog, Target, Users } from "lucide-react"

interface ChecklistCategory {
  title: string
  icon: any
  items: string[]
  color: string
}

const checklistCategories: ChecklistCategory[] = [
  {
    title: "Operational Readiness",
    icon: Cog,
    items: [
      "We have at least one process taking 5+ hours weekly",
      "This process follows consistent rules (even if complex)",
      "We can document how it currently works",
      "Quality and accuracy matter for this process"
    ],
    color: "blue"
  },
  {
    title: "Strategic Readiness",
    icon: Target,
    items: [
      "We have growth plans requiring more capacity",
      "Our team has higher-value work waiting",
      "We're willing to delegate execution to focus on strategy",
      "We value outcomes over control of process"
    ],
    color: "gray"
  },
  {
    title: "Cultural Readiness",
    icon: Users,
    items: [
      "We already outsource non-core functions (accounting, IT, etc.)",
      "We believe in focusing on what we do best",
      "We're ready to trust a partner with operational execution",
      "We measure success by outcomes, not activity"
    ],
    color: "gray"
  }
]

export function ReadinessChecklistSection() {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({})
  
  const handleCheckChange = (itemKey: string, checked: boolean) => {
    setCheckedItems(prev => ({
      ...prev,
      [itemKey]: checked
    }))
  }

  const totalItems = checklistCategories.reduce((sum, category) => sum + category.items.length, 0)
  const checkedCount = Object.values(checkedItems).filter(Boolean).length

  const getFitLevel = (count: number) => {
    if (count >= 10) return { text: "Strong fit for Service-as-Software", color: "green" }
    if (count >= 6) return { text: "Potential fit, worth exploring", color: "yellow" }
    return { text: "Build more foundation first", color: "red" }
  }

  const fitLevel = getFitLevel(checkedCount)

  return (
    <Section padding="xl" background="white-to-light">
      <Container className="max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="velox-text-h1-premium mb-4">
            Final Checklist: Are You Ready?
          </h2>
          <Text className="text-xl text-gray-600 max-w-3xl mx-auto">
            Check all statements that apply to your business
          </Text>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {checklistCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon
            const checkedItemsInCategory = category.items.filter((_, itemIndex) => 
              checkedItems[`${categoryIndex}-${itemIndex}`]
            ).length
            const progressPercentage = (checkedItemsInCategory / category.items.length) * 100
            
            return (
              <div key={categoryIndex} className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                {/* Progress accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gray-200">
                  <div 
                    className={`h-full transition-all duration-500 ${
                      category.color === 'blue' ? 'bg-gradient-to-r from-blue-500 to-blue-600' : 'bg-gradient-to-r from-gray-500 to-gray-600'
                    }`}
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                </div>
                
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-14 h-14 ${
                    category.color === 'blue' 
                      ? 'bg-gradient-to-br from-blue-600 to-blue-700' 
                      : 'bg-gradient-to-br from-gray-600 to-gray-700'
                  } rounded-xl flex items-center justify-center shadow-md`}>
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <Heading level="3" className="text-lg font-bold text-gray-900 mb-1">
                      {category.title}
                    </Heading>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-600">
                        {checkedItemsInCategory}/{category.items.length} completed
                      </span>
                      <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className={`h-full transition-all duration-500 ${
                            category.color === 'blue' ? 'bg-blue-500' : 'bg-gray-500'
                          }`}
                          style={{ width: `${progressPercentage}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {category.items.map((item, itemIndex) => {
                    const itemKey = `${categoryIndex}-${itemIndex}`
                    const isChecked = checkedItems[itemKey] || false
                    return (
                      <div key={itemIndex} className={`flex items-start gap-3 p-3 rounded-lg transition-all duration-200 ${
                        isChecked ? 'bg-green-50 border border-green-200' : 'bg-gray-50 hover:bg-gray-100'
                      }`}>
                        <Checkbox
                          id={itemKey}
                          checked={isChecked}
                          onCheckedChange={(checked) => handleCheckChange(itemKey, checked as boolean)}
                          className="mt-1 data-[state=checked]:bg-green-500 data-[state=checked]:border-green-500"
                        />
                        <label htmlFor={itemKey} className={`text-sm cursor-pointer leading-relaxed transition-colors ${
                          isChecked ? 'text-green-800 font-medium' : 'text-gray-700'
                        }`}>
                          {item}
                        </label>
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>

        {/* Score Display */}
        <div className="text-center mb-8">
          <div className="inline-block bg-white rounded-2xl p-8 border-2 border-blue-100 shadow-lg relative overflow-hidden max-w-md">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-blue-700"></div>
            <div className="mb-4">
              <Text className="text-lg text-gray-700 mb-3">
                Your readiness score:
              </Text>
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="text-4xl font-bold text-blue-600">{checkedCount}</div>
                <div className="text-2xl text-gray-400">/</div>
                <div className="text-2xl text-gray-600">{totalItems}</div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
                <div 
                  className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full transition-all duration-500"
                  style={{ width: `${(checkedCount / totalItems) * 100}%` }}
                ></div>
              </div>
            </div>
            <div className={`inline-block px-6 py-3 rounded-xl text-sm font-semibold border-2 ${
              fitLevel.color === 'green' ? 'bg-green-50 text-green-800 border-green-200' :
              fitLevel.color === 'yellow' ? 'bg-yellow-50 text-yellow-800 border-yellow-200' :
              'bg-red-50 text-red-800 border-red-200'
            }`}>
              {fitLevel.text}
            </div>
          </div>
        </div>

        {/* Scoring Guide */}
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 border border-gray-200 shadow-lg">
          <div className="text-center mb-6">
            <Heading level="3" className="text-xl font-bold text-gray-900 mb-2">
              Scoring Guide
            </Heading>
            <Text className="text-gray-600">Understand what your score means</Text>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-6 bg-white rounded-xl border-2 border-green-200 shadow-sm hover:shadow-md transition-all duration-200">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <Text className="font-bold text-green-900">10+ boxes</Text>
              </div>
              <Text className="text-sm text-green-700 leading-relaxed">
                Strong fit for Service-as-Software. You're ready to delegate and scale.
              </Text>
            </div>
            <div className="p-6 bg-white rounded-xl border-2 border-yellow-200 shadow-sm hover:shadow-md transition-all duration-200">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">?</span>
                </div>
                <Text className="font-bold text-yellow-900">6-9 boxes</Text>
              </div>
              <Text className="text-sm text-yellow-700 leading-relaxed">
                Potential fit, worth exploring. Let's discuss your specific situation.
              </Text>
            </div>
            <div className="p-6 bg-white rounded-xl border-2 border-red-200 shadow-sm hover:shadow-md transition-all duration-200">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">!</span>
                </div>
                <Text className="font-bold text-red-900">&lt;6 boxes</Text>
              </div>
              <Text className="text-sm text-red-700 leading-relaxed">
                Build more foundation first. Focus on process standardization.
              </Text>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}