"use client"

import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"
import { CheckCircle, Clock, AlertTriangle, XCircle } from "lucide-react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"

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
  const { ref: titleRef, isVisible: titleVisible } = useIntersectionObserver({ threshold: 0.3 })
  const { ref: matrixRef, isVisible: matrixVisible } = useIntersectionObserver({ threshold: 0.2 })

  return (
    <Section id="readiness-matrix" padding="xl" background="light-to-white">
      <Container className="max-w-6xl">
        <div 
          ref={titleRef as any}
          className={`text-center mb-12 transition-all duration-800 ease-out ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="velox-text-h1-premium mb-4">
            Where Does Your Business Fit?
          </h2>
          <p className="velox-text-lead max-w-3xl mx-auto">
            Find your position on the readiness matrix to understand your next best step
          </p>
        </div>

        {/* Matrix Visualization */}
        <div
          ref={matrixRef as any}
          className={`relative card-elevated mb-8 transition-all duration-1000 ease-out ${
            matrixVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          {/* Desktop Grid Container */}
          <div className="hidden lg:grid grid-cols-2 gap-6 h-[600px]">
            {/* Top Left - Prepare First */}
            <div className="card-base hover:elevation-2 transition-all duration-300 flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="icon-container">
                  <Clock className="w-6 h-6 text-gray-700" />
                </div>
                <div>
                  <h3 className="velox-text-h3 text-lg">
                    {quadrants[1].title}
                  </h3>
                  <p className="text-sm text-gray-600 font-medium">
                    {quadrants[1].subtitle}
                  </p>
                </div>
              </div>
              <p className="velox-text-body text-sm flex-1">
                {quadrants[1].description}
              </p>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="text-xs text-gray-600 font-medium">
                  Low Process Maturity + High Strategic Pressure
                </p>
              </div>
            </div>

            {/* Top Right - Perfect Fit */}
            <div className="card-solution flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="icon-container-gradient">
                  <CheckCircle className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="velox-text-h3 text-lg text-blue-800">
                    {quadrants[0].title}
                  </h3>
                  <p className="text-sm text-blue-700 font-medium">
                    {quadrants[0].subtitle}
                  </p>
                </div>
              </div>
              <p className="text-blue-800 text-sm flex-1 font-medium">
                {quadrants[0].description}
              </p>
              <div className="mt-4 pt-4 border-t border-blue-300">
                <p className="text-xs text-blue-700 font-medium">
                  High Process Maturity + High Strategic Pressure
                </p>
              </div>
            </div>

            {/* Bottom Left - Not Yet */}
            <div className="card-base hover:elevation-2 transition-all duration-300 flex flex-col opacity-90">
              <div className="flex items-center gap-3 mb-4">
                <div className="icon-container">
                  <XCircle className="w-6 h-6 text-gray-700" />
                </div>
                <div>
                  <h3 className="velox-text-h3 text-lg">
                    {quadrants[3].title}
                  </h3>
                  <p className="text-sm text-gray-600 font-medium">
                    {quadrants[3].subtitle}
                  </p>
                </div>
              </div>
              <p className="velox-text-body text-sm flex-1">
                {quadrants[3].description}
              </p>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="text-xs text-gray-600 font-medium">
                  Low Process Maturity + Low Strategic Pressure
                </p>
              </div>
            </div>

            {/* Bottom Right - Future Opportunity */}
            <div className="card-base hover:elevation-2 transition-all duration-300 flex flex-col border-blue-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="icon-container">
                  <AlertTriangle className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="velox-text-h3 text-lg">
                    {quadrants[2].title}
                  </h3>
                  <p className="text-sm text-blue-700 font-medium">
                    {quadrants[2].subtitle}
                  </p>
                </div>
              </div>
              <p className="velox-text-body text-sm flex-1">
                {quadrants[2].description}
              </p>
              <div className="mt-4 pt-4 border-t border-blue-200">
                <p className="text-xs text-blue-700 font-medium">
                  High Process Maturity + Low Strategic Pressure
                </p>
              </div>
            </div>
          </div>

          {/* Mobile Stack Layout */}
          <div className="lg:hidden space-y-6">
            {/* Perfect Fit - Featured First on Mobile */}
            <div className="card-solution">
              <div className="flex items-center gap-3 mb-4">
                <div className="icon-container-gradient">
                  <CheckCircle className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-800">
                    {quadrants[0].title}
                  </h3>
                  <p className="text-sm text-blue-700 font-medium">
                    {quadrants[0].subtitle}
                  </p>
                </div>
              </div>
              <p className="text-blue-800 text-base font-medium mb-4">
                {quadrants[0].description}
              </p>
              <div className="bg-blue-100 rounded-lg p-3 border border-blue-200">
                <p className="text-sm text-blue-700 font-medium">
                  High Process Maturity + High Strategic Pressure
                </p>
              </div>
            </div>

            {/* Prepare First */}
            <div className="card-base">
              <div className="flex items-center gap-3 mb-4">
                <div className="icon-container">
                  <Clock className="w-6 h-6 text-gray-700" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {quadrants[1].title}
                  </h3>
                  <p className="text-sm text-gray-600 font-medium">
                    {quadrants[1].subtitle}
                  </p>
                </div>
              </div>
              <p className="text-gray-700 text-base mb-4">
                {quadrants[1].description}
              </p>
              <div className="bg-gray-100 rounded-lg p-3 border border-gray-200">
                <p className="text-sm text-gray-600 font-medium">
                  Low Process Maturity + High Strategic Pressure
                </p>
              </div>
            </div>

            {/* Future Opportunity */}
            <div className="card-base border-blue-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="icon-container">
                  <AlertTriangle className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {quadrants[2].title}
                  </h3>
                  <p className="text-sm text-blue-700 font-medium">
                    {quadrants[2].subtitle}
                  </p>
                </div>
              </div>
              <p className="text-gray-700 text-base mb-4">
                {quadrants[2].description}
              </p>
              <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
                <p className="text-sm text-blue-700 font-medium">
                  High Process Maturity + Low Strategic Pressure
                </p>
              </div>
            </div>

            {/* Not Yet */}
            <div className="card-base opacity-90">
              <div className="flex items-center gap-3 mb-4">
                <div className="icon-container">
                  <XCircle className="w-6 h-6 text-gray-700" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {quadrants[3].title}
                  </h3>
                  <p className="text-sm text-gray-600 font-medium">
                    {quadrants[3].subtitle}
                  </p>
                </div>
              </div>
              <p className="text-gray-700 text-base mb-4">
                {quadrants[3].description}
              </p>
              <div className="bg-gray-100 rounded-lg p-3 border border-gray-200">
                <p className="text-sm text-gray-600 font-medium">
                  Low Process Maturity + Low Strategic Pressure
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Guidance */}
        <div className="lg:hidden card-base bg-blue-50 border-blue-200">
          <h3 className="text-lg font-bold text-blue-900 mb-3">
            How to Use This Assessment
          </h3>
          <div className="space-y-3 text-sm text-blue-800">
            <p>
              <span className="font-semibold">Process Maturity:</span> How well-documented and standardized your processes are
            </p>
            <p>
              <span className="font-semibold">Strategic Pressure:</span> How much operational tasks prevent strategic work
            </p>
            <p className="text-blue-900 font-medium pt-2 border-t border-blue-200">
              💡 The "Perfect Fit" quadrant indicates you're ready for Service-as-Software transformation
            </p>
          </div>
        </div>
      </Container>
    </Section>
  )
}