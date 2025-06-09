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
          {/* Axis Labels */}
          <div className="absolute -left-24 top-1/2 -translate-y-1/2 -rotate-90 hidden lg:block">
            <p className="text-sm font-semibold text-gray-700">Process Maturity →</p>
          </div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-8 hidden lg:block">
            <p className="text-sm font-semibold text-gray-700">Strategic Pressure →</p>
          </div>

          {/* Grid Container */}
          <div className="grid grid-cols-2 gap-6 h-[600px]">
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

          {/* Axis Descriptions */}
          <div className="absolute -top-12 left-0 right-0 flex justify-between px-4 text-sm text-gray-600">
            <p>Low: "Still figuring out how things work"</p>
            <p className="font-semibold">Process Maturity</p>
            <p>High: "Documented and consistent"</p>
          </div>
          <div className="absolute top-4 bottom-4 -right-48 flex flex-col justify-between text-sm text-gray-600 hidden xl:block">
            <p>High: "Growth constrained by capacity"</p>
            <p className="font-semibold">Strategic Pressure</p>
            <p>Low: "Have bandwidth for volume"</p>
          </div>
        </div>

        {/* Mobile Legend */}
        <div className="block lg:hidden space-y-2 text-sm text-gray-600">
          <p><span className="font-semibold">Y-Axis (Process Maturity):</span> Low = Still figuring out | High = Documented & consistent</p>
          <p><span className="font-semibold">X-Axis (Strategic Pressure):</span> Low = Have bandwidth | High = Growth constrained</p>
        </div>
      </Container>
    </Section>
  )
}