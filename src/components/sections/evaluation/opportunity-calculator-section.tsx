"use client"

import { useState } from "react"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Calculator, TrendingUp, Users, Clock } from "lucide-react"

export function OpportunityCalculatorSection() {
  const [hours, setHours] = useState<number>(10)
  const [people, setPeople] = useState<number>(2)
  const [hourlyValue, setHourlyValue] = useState<number>(75)
  const [errorRate, setErrorRate] = useState<number>(5)

  // Calculate costs
  const weeklyDirectCost = hours * people * hourlyValue
  const annualDirectCost = weeklyDirectCost * 52
  const errorCost = annualDirectCost * (errorRate / 100)
  const totalAnnualCost = annualDirectCost + errorCost

  return (
    <Section padding="xl" background="white-to-light">
      <Container className="max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="velox-text-h1-premium mb-4">
            Calculate Your Strategic Opportunity
          </h2>
          <Text className="text-xl text-gray-600 max-w-3xl mx-auto">
            See the true cost of your current process - and what your team could achieve instead
          </Text>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Calculator Inputs */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                <Calculator className="w-6 h-6 text-white" />
              </div>
              <Heading level="3" className="text-xl font-bold text-gray-900">
                Process Cost Calculator
              </Heading>
            </div>

            <div className="space-y-6">
              {/* Hours Input */}
              <div>
                <Label htmlFor="hours" className="text-sm font-semibold text-gray-700">
                  Hours spent weekly on this process
                </Label>
                <div className="mt-2 relative">
                  <Clock className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <Input
                    id="hours"
                    type="number"
                    value={hours}
                    onChange={(e) => setHours(Number(e.target.value))}
                    className="pl-10"
                    min="0"
                    max="168"
                  />
                </div>
              </div>

              {/* People Input */}
              <div>
                <Label htmlFor="people" className="text-sm font-semibold text-gray-700">
                  Number of people involved
                </Label>
                <div className="mt-2 relative">
                  <Users className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <Input
                    id="people"
                    type="number"
                    value={people}
                    onChange={(e) => setPeople(Number(e.target.value))}
                    className="pl-10"
                    min="1"
                    max="100"
                  />
                </div>
              </div>

              {/* Hourly Value Input */}
              <div>
                <Label htmlFor="hourlyValue" className="text-sm font-semibold text-gray-700">
                  Average hourly value of those people ($)
                </Label>
                <div className="mt-2 relative">
                  <span className="absolute left-3 top-3 text-gray-400">$</span>
                  <Input
                    id="hourlyValue"
                    type="number"
                    value={hourlyValue}
                    onChange={(e) => setHourlyValue(Number(e.target.value))}
                    className="pl-8"
                    min="0"
                    max="500"
                  />
                </div>
              </div>

              {/* Error Rate Input */}
              <div>
                <Label htmlFor="errorRate" className="text-sm font-semibold text-gray-700">
                  Error rate requiring rework (%)
                </Label>
                <div className="mt-2 relative">
                  <span className="absolute right-3 top-3 text-gray-400">%</span>
                  <Input
                    id="errorRate"
                    type="number"
                    value={errorRate}
                    onChange={(e) => setErrorRate(Number(e.target.value))}
                    className="pr-8"
                    min="0"
                    max="100"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Results Display */}
          <div className="space-y-6">
            {/* Current Cost Display */}
            <div className="bg-red-50 rounded-2xl p-8 border border-red-200">
              <Heading level="3" className="text-xl font-bold text-red-900 mb-4">
                Your Current Cost
              </Heading>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <Text className="text-gray-700">Weekly Cost:</Text>
                  <Text className="text-xl font-bold text-red-600">
                    ${weeklyDirectCost.toLocaleString()}
                  </Text>
                </div>
                <div className="flex justify-between items-center">
                  <Text className="text-gray-700">Annual Cost:</Text>
                  <Text className="text-2xl font-bold text-red-700">
                    ${totalAnnualCost.toLocaleString()}
                  </Text>
                </div>
              </div>
            </div>

            {/* Real Question */}
            <div className="bg-blue-50 rounded-2xl p-8 border border-blue-200">
              <Heading level="3" className="text-xl font-bold text-blue-900 mb-4">
                But the Real Question:
              </Heading>
              <Text className="text-lg text-blue-800 mb-4">
                What would those {people} people accomplish with {hours * people} hours back each week?
              </Text>
              
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <TrendingUp className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <Text className="text-blue-800">New product development?</Text>
                </li>
                <li className="flex items-start gap-3">
                  <TrendingUp className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <Text className="text-blue-800">Customer relationship deepening?</Text>
                </li>
                <li className="flex items-start gap-3">
                  <TrendingUp className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <Text className="text-blue-800">Process innovation?</Text>
                </li>
                <li className="flex items-start gap-3">
                  <TrendingUp className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <Text className="text-blue-800">Market expansion?</Text>
                </li>
              </ul>
              
              <Text className="text-lg font-bold text-blue-900 mt-6">
                That's your true opportunity cost.
              </Text>
            </div>

            {/* CTA */}
            <div className="text-center">
              <Button
                size="lg"
                className="velox-cta-primary text-lg font-semibold px-8 py-4 h-auto rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                asChild
              >
                <a href="/tools/business-audit">
                  See Full Analysis
                </a>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}