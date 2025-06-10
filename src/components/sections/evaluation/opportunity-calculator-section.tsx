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

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Calculator Inputs */}
          <div className="bg-white rounded-2xl p-8 border border-blue-100 shadow-lg relative">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-blue-700 rounded-t-2xl"></div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-md">
                <Calculator className="w-7 h-7 text-white" />
              </div>
              <div>
                <Heading level="3" className="text-xl font-bold text-gray-900">
                  Process Cost Calculator
                </Heading>
                <Text className="text-sm text-gray-600">Enter your current process details</Text>
              </div>
            </div>

            <div className="space-y-6">
              {/* Hours Input */}
              <div className="bg-gray-50 rounded-xl p-4">
                <Label htmlFor="hours" className="text-sm font-semibold text-gray-700 mb-2 block">
                  Hours spent weekly on this process
                </Label>
                <div className="relative">
                  <Clock className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <Input
                    id="hours"
                    type="number"
                    value={hours}
                    onChange={(e) => setHours(Number(e.target.value))}
                    className="pl-10 border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                    min="0"
                    max="168"
                  />
                </div>
              </div>

              {/* People Input */}
              <div className="bg-gray-50 rounded-xl p-4">
                <Label htmlFor="people" className="text-sm font-semibold text-gray-700 mb-2 block">
                  Number of people involved
                </Label>
                <div className="relative">
                  <Users className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <Input
                    id="people"
                    type="number"
                    value={people}
                    onChange={(e) => setPeople(Number(e.target.value))}
                    className="pl-10 border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                    min="1"
                    max="100"
                  />
                </div>
              </div>

              {/* Hourly Value Input */}
              <div className="bg-gray-50 rounded-xl p-4">
                <Label htmlFor="hourlyValue" className="text-sm font-semibold text-gray-700 mb-2 block">
                  Average hourly value of those people ($)
                </Label>
                <div className="relative">
                  <span className="absolute left-3 top-3 text-gray-400 font-medium">$</span>
                  <Input
                    id="hourlyValue"
                    type="number"
                    value={hourlyValue}
                    onChange={(e) => setHourlyValue(Number(e.target.value))}
                    className="pl-8 border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                    min="0"
                    max="500"
                  />
                </div>
              </div>

              {/* Error Rate Input */}
              <div className="bg-gray-50 rounded-xl p-4">
                <Label htmlFor="errorRate" className="text-sm font-semibold text-gray-700 mb-2 block">
                  Error rate requiring rework (%)
                </Label>
                <div className="relative">
                  <span className="absolute right-3 top-3 text-gray-400 font-medium">%</span>
                  <Input
                    id="errorRate"
                    type="number"
                    value={errorRate}
                    onChange={(e) => setErrorRate(Number(e.target.value))}
                    className="pr-8 border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
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
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-8 border border-red-200 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-red-200 rounded-full opacity-20 -translate-y-6 translate-x-6"></div>
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <Heading level="3" className="text-xl font-bold text-red-900">
                    Your Current Cost
                  </Heading>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-white/60 rounded-lg">
                    <Text className="text-gray-700 font-medium">Weekly Cost:</Text>
                    <Text className="text-xl font-bold text-red-600">
                      ${weeklyDirectCost.toLocaleString()}
                    </Text>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white/80 rounded-lg border border-red-200">
                    <Text className="text-gray-800 font-semibold">Annual Cost:</Text>
                    <Text className="text-3xl font-bold text-red-700">
                      ${totalAnnualCost.toLocaleString()}
                    </Text>
                  </div>
                </div>
              </div>
            </div>

            {/* Real Question */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border border-blue-200 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-200 rounded-full opacity-20 -translate-y-8 translate-x-8"></div>
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  <Heading level="3" className="text-xl font-bold text-blue-900">
                    But the Real Question:
                  </Heading>
                </div>
                <div className="bg-white/60 rounded-lg p-4 mb-6">
                  <Text className="text-lg text-blue-800 font-medium">
                    What would those <span className="font-bold">{people} people</span> accomplish with{" "}
                    <span className="font-bold">{hours * people} hours</span> back each week?
                  </Text>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center gap-2 p-3 bg-white/60 rounded-lg">
                    <TrendingUp className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <Text className="text-sm text-blue-800">New products</Text>
                  </div>
                  <div className="flex items-center gap-2 p-3 bg-white/60 rounded-lg">
                    <TrendingUp className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <Text className="text-sm text-blue-800">Customer growth</Text>
                  </div>
                  <div className="flex items-center gap-2 p-3 bg-white/60 rounded-lg">
                    <TrendingUp className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <Text className="text-sm text-blue-800">Innovation</Text>
                  </div>
                  <div className="flex items-center gap-2 p-3 bg-white/60 rounded-lg">
                    <TrendingUp className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <Text className="text-sm text-blue-800">Market expansion</Text>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-blue-600 rounded-lg text-center">
                  <Text className="text-lg font-bold text-white">
                    That's your true opportunity cost.
                  </Text>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <Button
                size="lg"
                className="relative bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-lg font-semibold px-10 py-5 h-auto rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 overflow-hidden group"
                asChild
              >
                <a href="/tools/business-audit">
                  <span className="relative z-10">See Full Analysis</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}