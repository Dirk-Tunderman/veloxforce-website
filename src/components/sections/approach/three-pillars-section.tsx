import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"
import { Users, Brain, Target, CheckCircle, Clock, Shield } from "lucide-react"

const pillars = [
  {
    number: "1",
    title: "Digital Workforce Creation",
    subtitle: "We build digital employees for your exact processes",
    icon: Users,
    color: "gray",
    features: [
      "Not generic software adapted to you",
      "Custom-built to follow YOUR specific rules",
      "Handles all your exceptions and edge cases",
      "Implementation measured in weeks, not quarters"
    ]
  },
  {
    number: "2",
    title: "Intelligent Management Layer",
    subtitle: "Expert humans ensure perfect execution",
    icon: Brain,
    color: "gray",
    features: [
      "Quality control on every output",
      "Handle complex decisions",
      "Continuous optimization",
      "Catch what digital workers miss"
    ]
  },
  {
    number: "3",
    title: "Outcome Delivery System",
    subtitle: "You delegate, we deliver - forever",
    icon: Target,
    color: "gray",
    features: [
      "No software for you to operate",
      "No digital workers to manage",
      "Just send work, receive results",
      "Guaranteed performance metrics"
    ]
  }
]

export function ThreePillarsSection() {
  return (
    <Section padding="xl" background="white">
      <Container className="max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Heading level="2" className="velox-text-h2 mb-6">
            The Three Pillars That Make Service-as-Software Possible
          </Heading>
          <Text className="velox-text-body text-xl text-gray-700 max-w-4xl mx-auto">
            Each pillar is essential. Together, they create the complete Service-as-Software experience.
          </Text>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {pillars.map((pillar, index) => {
            const IconComponent = pillar.icon

            return (
              <div key={index} className="relative">
                {/* Pillar Card */}
                <div className="bg-gray-50 border border-gray-200 p-8 h-full rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  {/* Pillar Number */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-white rounded-full border-4 border-gray-100 flex items-center justify-center shadow-lg">
                    <span className="text-xl font-bold text-gray-700">
                      {pillar.number}
                    </span>
                  </div>

                  {/* Icon and Title */}
                  <div className="text-center mb-6 pt-4">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center bg-gray-700">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>

                    <Heading level="3" className="text-xl font-bold mb-3 text-gray-900">
                      {pillar.title}
                    </Heading>

                    <Text className="font-semibold text-gray-700">
                      {pillar.subtitle}
                    </Text>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-3">
                    {pillar.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0 bg-gray-700" />
                        <Text className="text-sm leading-relaxed text-gray-800">
                          {feature}
                        </Text>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>

        {/* Integration Message */}
        <div className="text-center">
          <div className="velox-card-advantage-enhanced p-8 max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="flex items-center justify-center gap-2">
                <Users className="w-6 h-6 text-gray-700" />
                <Text className="font-semibold text-blue-900">Custom Built</Text>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Brain className="w-6 h-6 text-gray-700" />
                <Text className="font-semibold text-blue-900">Expertly Managed</Text>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Target className="w-6 h-6 text-gray-700" />
                <Text className="font-semibold text-blue-900">Outcome Guaranteed</Text>
              </div>
            </div>

            <Text className="text-lg text-blue-800 leading-relaxed">
              These three pillars work together seamlessly. You experience only the results -
              we handle all the complexity behind the scenes.
            </Text>
          </div>
        </div>
      </Container>
    </Section>
  )
}
