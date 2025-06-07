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
          <Heading level="2" className="text-3xl md:text-4xl font-bold mb-4">
            Final Checklist: Are You Ready?
          </Heading>
          <Text className="text-xl text-gray-600 max-w-3xl mx-auto">
            Check all statements that apply to your business
          </Text>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          {checklistCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon
            return (
              <div key={categoryIndex} className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-12 h-12 ${category.color === 'blue' ? 'bg-blue-600' : 'bg-gray-700'} rounded-full flex items-center justify-center`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <Heading level="3" className="text-lg font-bold text-gray-900">
                    {category.title}
                  </Heading>
                </div>
                
                <div className="space-y-4">
                  {category.items.map((item, itemIndex) => {
                    const itemKey = `${categoryIndex}-${itemIndex}`
                    return (
                      <div key={itemIndex} className="flex items-start gap-3">
                        <Checkbox
                          id={itemKey}
                          checked={checkedItems[itemKey] || false}
                          onCheckedChange={(checked) => handleCheckChange(itemKey, checked as boolean)}
                          className="mt-1"
                        />
                        <label htmlFor={itemKey} className="text-sm text-gray-700 cursor-pointer leading-relaxed">
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
          <div className="inline-block bg-white rounded-2xl p-6 border border-gray-200 shadow-lg">
            <Text className="text-lg text-gray-700 mb-2">
              You checked <span className="font-bold text-2xl text-blue-600">{checkedCount}</span> out of {totalItems} boxes
            </Text>
            <div className={`inline-block px-4 py-2 rounded-full text-sm font-semibold ${
              fitLevel.color === 'green' ? 'bg-green-100 text-green-800' :
              fitLevel.color === 'yellow' ? 'bg-yellow-100 text-yellow-800' :
              'bg-red-100 text-red-800'
            }`}>
              {fitLevel.text}
            </div>
          </div>
        </div>

        {/* Scoring Guide */}
        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
          <Heading level="3" className="text-lg font-bold text-gray-900 mb-4 text-center">
            Scoring Guide
          </Heading>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <Text className="font-bold text-green-900">10+ boxes checked</Text>
              <Text className="text-sm text-green-700">Strong fit for Service-as-Software</Text>
            </div>
            <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
              <Text className="font-bold text-yellow-900">6-9 boxes checked</Text>
              <Text className="text-sm text-yellow-700">Potential fit, worth exploring</Text>
            </div>
            <div className="p-4 bg-red-50 rounded-lg border border-red-200">
              <Text className="font-bold text-red-900">&lt;6 boxes checked</Text>
              <Text className="text-sm text-red-700">Build more foundation first</Text>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}