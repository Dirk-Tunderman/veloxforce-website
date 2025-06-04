"use client"

import { useState } from "react"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"
import { Search, Scale, Rocket } from "lucide-react"

const oversightLevels = [
  {
    id: "maximum-control",
    icon: Search,
    title: "Review Everything",
    description: "Every output reviewed before execution",
    perfectFor: "Regulated industries, new processes",
    position: 20
  },
  {
    id: "intelligent-balance",
    icon: Scale,
    title: "Review Exceptions",
    description: "AI flags unusual items for your review",
    perfectFor: "Most businesses after initial comfort",
    position: 50
  },
  {
    id: "maximum-efficiency",
    icon: Rocket,
    title: "Review Periodically",
    description: "Spot checks and quality audits only",
    perfectFor: "Mature, stable processes",
    position: 80
  }
]

export function OversightLevels() {
  const [selectedLevel, setSelectedLevel] = useState("intelligent-balance")

  const activeLevel = oversightLevels.find(level => level.id === selectedLevel)

  return (
    <Section padding="xl" background="light-blue" className="bg-gray-50">
      <Container className="max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Heading level="2" className="velox-text-h2 mb-4">
            Choose Your Oversight Level
          </Heading>
          <Text className="velox-text-body text-lg text-gray-700">
            You Control How Much You Review
          </Text>
        </div>

        {/* Slider Visualization */}
        <div className="bg-white rounded-xl p-8 shadow-lg mb-12">
          {/* Slider Labels */}
          <div className="flex justify-between items-center mb-8">
            <Text className="text-sm font-medium text-gray-600">
              Maximum Control
            </Text>
            <Text className="text-sm font-medium text-gray-600">
              Maximum Efficiency
            </Text>
          </div>

          {/* Slider Track */}
          <div className="relative mb-12">
            {/* Track */}
            <div className="w-full h-2 bg-gray-200 rounded-full relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"></div>
            </div>

            {/* Level Markers */}
            {oversightLevels.map((level) => {
              const IconComponent = level.icon
              const isActive = selectedLevel === level.id
              
              return (
                <button
                  key={level.id}
                  onClick={() => setSelectedLevel(level.id)}
                  className={`absolute top-1/2 transform -translate-y-1/2 -translate-x-1/2 transition-all duration-300 ${
                    isActive ? 'scale-125' : 'hover:scale-110'
                  }`}
                  style={{ left: `${level.position}%` }}
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
                    isActive 
                      ? 'bg-blue-600 text-white ring-4 ring-blue-200' 
                      : 'bg-white text-blue-600 hover:bg-blue-50'
                  }`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                </button>
              )
            })}
          </div>

          {/* Active Level Details */}
          {activeLevel && (
            <div className="text-center">
              <Heading level="3" className="text-2xl font-semibold text-gray-900 mb-3">
                {activeLevel.title}
              </Heading>
              <Text className="text-lg text-gray-700 mb-4">
                {activeLevel.description}
              </Text>
              <div className="bg-blue-50 rounded-lg p-4 inline-block">
                <Text className="text-blue-800 font-medium">
                  Perfect for: {activeLevel.perfectFor}
                </Text>
              </div>
            </div>
          )}
        </div>

        {/* Three Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {oversightLevels.map((level) => {
            const IconComponent = level.icon
            const isActive = selectedLevel === level.id
            
            return (
              <button
                key={level.id}
                onClick={() => setSelectedLevel(level.id)}
                className={`p-6 rounded-lg border-2 transition-all duration-300 text-left ${
                  isActive 
                    ? 'border-blue-600 bg-blue-50 shadow-lg' 
                    : 'border-gray-200 bg-white hover:border-blue-300 hover:shadow-md'
                }`}
              >
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                  isActive ? 'bg-blue-600' : 'bg-blue-100'
                }`}>
                  <IconComponent className={`w-6 h-6 ${isActive ? 'text-white' : 'text-blue-600'}`} />
                </div>
                
                <Heading level="4" className={`text-lg font-semibold mb-2 ${
                  isActive ? 'text-blue-900' : 'text-gray-900'
                }`}>
                  {level.title}
                </Heading>
                
                <Text className={`text-sm mb-3 ${isActive ? 'text-blue-700' : 'text-gray-600'}`}>
                  {level.description}
                </Text>
                
                <Text className={`text-xs font-medium ${isActive ? 'text-blue-800' : 'text-gray-500'}`}>
                  Perfect for: {level.perfectFor}
                </Text>
              </button>
            )
          })}
        </div>

        {/* Bottom Note */}
        <div className="text-center">
          <Text className="text-blue-600 font-semibold text-lg">
            Adjust your comfort level anytime
          </Text>
        </div>
      </Container>
    </Section>
  )
}
