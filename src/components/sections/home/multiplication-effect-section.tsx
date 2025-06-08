"use client"

import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"
import { TrendingUp, Zap, Rocket, Target, Users, LineChart } from "lucide-react"

interface TimelineItem {
  week: string
  event: string
  icon: any
  color: string
}

const timeline: TimelineItem[] = [
  {
    week: "Week 1",
    event: "Your team notices they have time to think",
    icon: Zap,
    color: "gray" // 90% gray icons
  },
  {
    week: "Week 4",
    event: "First strategic initiative launches",
    icon: Rocket,
    color: "gray" // 90% gray icons
  },
  {
    week: "Week 8",
    event: "New service offering generates revenue",
    icon: TrendingUp,
    color: "blue" // 10% blue icons for key milestones
  },
  {
    week: "Week 12",
    event: "Competitor wonders how you're moving so fast",
    icon: Target,
    color: "gray" // 90% gray icons
  },
  {
    week: "Week 24",
    event: "You're running tomorrow's business today",
    icon: LineChart,
    color: "gray" // 90% gray icons
  }
]

export function MultiplicationEffectSection() {
  return (
    <Section padding="xl" background="transparent">
      <Container className="max-w-6xl">
        <div className="text-center mb-16">
          <Heading level="2" className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            What Happens When Operations Run Themselves
          </Heading>
          <Text className="text-xl text-gray-600 max-w-3xl mx-auto">
            The compound effect of freeing your team from routine work creates exponential business growth.
          </Text>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto mb-16">
          {/* Connection Line */}
          <div className="absolute left-8 top-12 bottom-12 w-0.5 bg-gray-300 hidden md:block" />
          
          {/* Timeline Items */}
          <div className="space-y-8 md:space-y-12">
            {timeline.map((item, index) => {
              const IconComponent = item.icon
              return (
                <div key={index} className="relative flex items-start gap-6">
                  {/* Icon */}
                  <div className={`
                    w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 z-10
                    ${item.color === 'blue' ? 'bg-blue-600' : 'bg-gray-700'}
                  `}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 pt-2">
                    <Text className="font-bold text-lg text-gray-900 mb-1">
                      {item.week}
                    </Text>
                    <Text className="text-xl text-gray-700 leading-relaxed">
                      {item.event}
                    </Text>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Bottom Message */}
        <div className="text-center">
          <div className="inline-flex items-center gap-3 bg-blue-50 border border-blue-200 rounded-full px-8 py-4">
            <Users className="w-6 h-6 text-blue-600" />
            <Text className="text-lg font-semibold text-gray-900">
              This only happens when minds are free to imagine.
            </Text>
          </div>
        </div>
      </Container>
    </Section>
  )
}