"use client"

import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"
import { CheckCircle, Clock, AlertTriangle, XCircle } from "lucide-react"

interface Quadrant {
  id: number
  title: string
  subtitle: string
  description: string
  icon: any
  color: string
  position: string
}

const quadrants: Quadrant[] = [
  {
    id: 1,
    title: "Perfect Fit",
    subtitle: "Ready for Service-as-Software",
    description: "Your processes are proven, your team is maxed out. Time to delegate and scale.",
    icon: CheckCircle,
    color: "green",
    position: "top-right"
  },
  {
    id: 2,
    title: "Prepare First",
    subtitle: "Document Before Delegating",
    description: "You need help, but processes need standardizing first. Start with process documentation.",
    icon: Clock,
    color: "yellow",
    position: "top-left"
  },
  {
    id: 3,
    title: "Future Opportunity",
    subtitle: "Monitor and Prepare",
    description: "You're organized but not constrained yet. Plan for when growth demands it.",
    icon: AlertTriangle,
    color: "blue",
    position: "bottom-right"
  },
  {
    id: 4,
    title: "Not Yet",
    subtitle: "Focus on Other Priorities",
    description: "Service-as-Software isn't your current need. Build your business fundamentals first.",
    icon: XCircle,
    color: "gray",
    position: "bottom-left"
  }
]

export function ReadinessMatrixSection() {
  return (
    <Section id="readiness-matrix" padding="xl" background="light-to-white">
      <Container className="max-w-6xl">
        <div className="text-center mb-12">
          <Heading level="2" className="text-3xl md:text-4xl font-bold mb-4">
            Where Does Your Business Fit?
          </Heading>
          <Text className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find your position on the readiness matrix to understand your next best step
          </Text>
        </div>

        {/* Matrix Visualization */}
        <div className="relative bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-lg mb-8">
          {/* Axis Labels */}
          <div className="absolute -left-24 top-1/2 -translate-y-1/2 -rotate-90 hidden lg:block">
            <Text className="text-sm font-semibold text-gray-700">Process Maturity →</Text>
          </div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-8 hidden lg:block">
            <Text className="text-sm font-semibold text-gray-700">Strategic Pressure →</Text>
          </div>

          {/* Grid Container */}
          <div className="grid grid-cols-2 gap-4 h-[600px]">
            {/* Top Left - Prepare First */}
            <div className="bg-yellow-50 border-2 border-yellow-300 rounded-xl p-6 flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <Heading level="3" className="text-lg font-bold text-gray-900">
                    {quadrants[1].title}
                  </Heading>
                  <Text className="text-sm text-yellow-700 font-medium">
                    {quadrants[1].subtitle}
                  </Text>
                </div>
              </div>
              <Text className="text-gray-700 text-sm flex-1">
                {quadrants[1].description}
              </Text>
              <div className="mt-4 pt-4 border-t border-yellow-300">
                <Text className="text-xs text-yellow-700 font-medium">
                  Low Process Maturity + High Strategic Pressure
                </Text>
              </div>
            </div>

            {/* Top Right - Perfect Fit */}
            <div className="bg-green-50 border-2 border-green-300 rounded-xl p-6 flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <Heading level="3" className="text-lg font-bold text-gray-900">
                    {quadrants[0].title}
                  </Heading>
                  <Text className="text-sm text-green-700 font-medium">
                    {quadrants[0].subtitle}
                  </Text>
                </div>
              </div>
              <Text className="text-gray-700 text-sm flex-1">
                {quadrants[0].description}
              </Text>
              <div className="mt-4 pt-4 border-t border-green-300">
                <Text className="text-xs text-green-700 font-medium">
                  High Process Maturity + High Strategic Pressure
                </Text>
              </div>
            </div>

            {/* Bottom Left - Not Yet */}
            <div className="bg-gray-50 border-2 border-gray-300 rounded-xl p-6 flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center">
                  <XCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <Heading level="3" className="text-lg font-bold text-gray-900">
                    {quadrants[3].title}
                  </Heading>
                  <Text className="text-sm text-gray-700 font-medium">
                    {quadrants[3].subtitle}
                  </Text>
                </div>
              </div>
              <Text className="text-gray-700 text-sm flex-1">
                {quadrants[3].description}
              </Text>
              <div className="mt-4 pt-4 border-t border-gray-300">
                <Text className="text-xs text-gray-600 font-medium">
                  Low Process Maturity + Low Strategic Pressure
                </Text>
              </div>
            </div>

            {/* Bottom Right - Future Opportunity */}
            <div className="bg-blue-50 border-2 border-blue-300 rounded-xl p-6 flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <Heading level="3" className="text-lg font-bold text-gray-900">
                    {quadrants[2].title}
                  </Heading>
                  <Text className="text-sm text-blue-700 font-medium">
                    {quadrants[2].subtitle}
                  </Text>
                </div>
              </div>
              <Text className="text-gray-700 text-sm flex-1">
                {quadrants[2].description}
              </Text>
              <div className="mt-4 pt-4 border-t border-blue-300">
                <Text className="text-xs text-blue-700 font-medium">
                  High Process Maturity + Low Strategic Pressure
                </Text>
              </div>
            </div>
          </div>

          {/* Axis Descriptions */}
          <div className="absolute -top-12 left-0 right-0 flex justify-between px-4 text-sm text-gray-600">
            <Text>Low: "Still figuring out how things work"</Text>
            <Text className="font-semibold">Process Maturity</Text>
            <Text>High: "Documented and consistent"</Text>
          </div>
          <div className="absolute top-4 bottom-4 -right-48 flex flex-col justify-between text-sm text-gray-600 hidden xl:block">
            <Text>High: "Growth constrained by capacity"</Text>
            <Text className="font-semibold">Strategic Pressure</Text>
            <Text>Low: "Have bandwidth for volume"</Text>
          </div>
        </div>

        {/* Mobile Legend */}
        <div className="block lg:hidden space-y-2 text-sm text-gray-600">
          <Text><span className="font-semibold">Y-Axis (Process Maturity):</span> Low = Still figuring out | High = Documented & consistent</Text>
          <Text><span className="font-semibold">X-Axis (Strategic Pressure):</span> Low = Have bandwidth | High = Growth constrained</Text>
        </div>
      </Container>
    </Section>
  )
}