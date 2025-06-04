import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"
import { ArrowRight, Settings, Target, CheckCircle, BarChart3, Users, Crosshair } from "lucide-react"

const approaches = [
  {
    title: "Traditional Approach:",
    steps: [
      "Buy software",
      "Learn it",
      "Manage it",
      "Hope it helps"
    ],
    icon: Settings,
    color: "gray"
  },
  {
    title: "Service-as-Software:",
    steps: [
      "Explain your needs",
      "We build your digital workforce",
      "They handle everything",
      "You get guaranteed results"
    ],
    icon: Target,
    color: "blue"
  }
]

const analogies = [
  {
    wrong: "You don't buy accounting software.",
    right: "You get your books done.",
    icon: BarChart3
  },
  {
    wrong: "You don't buy HR software.",
    right: "You get your HR handled.",
    icon: Users
  },
  {
    wrong: "You don't manage tools.",
    right: "You delegate outcomes.",
    icon: Crosshair
  }
]

export function OpeningContextSection() {
  return (
    <Section padding="xl" background="light-blue" className="bg-gray-50">
      <Container className="max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Heading level="2" className="velox-text-h2 mb-6">
            First, Let's Clear Up What Service-as-Software Really Is
          </Heading>
          <Text className="velox-text-body text-xl text-gray-700 max-w-3xl mx-auto">
            The difference between buying tools and delegating outcomes
          </Text>
        </div>

        {/* Approach Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-16 max-w-5xl mx-auto">
          {approaches.map((approach, index) => {
            const IconComponent = approach.icon
            const isServiceAsSoftware = approach.color === 'blue'
            const isTraditional = approach.color === 'gray'

            return (
              <div key={index} className="relative">
                {/* Arrow between approaches */}
                {index === 0 && (
                  <div className="hidden lg:block absolute -right-4 top-1/2 transform translate-x-full -translate-y-1/2 z-10">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                      <ArrowRight className="w-5 h-5 text-white" />
                    </div>
                  </div>
                )}

                <div className={`
                  ${isServiceAsSoftware
                    ? 'velox-card-advantage-enhanced transform lg:scale-105'
                    : 'bg-gray-50 border border-gray-200'
                  }
                  p-8 h-full rounded-lg transition-all duration-300 hover:shadow-lg
                `}>
                  {/* Header */}
                  <div className="text-center mb-6">
                    <div className={`
                      w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center
                      ${isServiceAsSoftware ? 'bg-blue-600' : 'bg-gray-400'}
                    `}>
                      <IconComponent className={`
                        w-8 h-8
                        ${isServiceAsSoftware ? 'text-white' : 'text-white'}
                      `} />
                    </div>

                    <Heading level="3" className={`
                      text-xl font-bold mb-4
                      ${isServiceAsSoftware ? 'text-blue-900' : 'text-gray-900'}
                    `}>
                      {approach.title}
                    </Heading>
                  </div>

                  {/* Steps */}
                  <div className="space-y-4">
                    {approach.steps.map((step, stepIndex) => (
                      <div key={stepIndex} className="flex items-center gap-3">
                        <div className={`
                          w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0
                          ${isServiceAsSoftware ? 'bg-blue-600' : 'bg-gray-500'}
                        `}>
                          <span className="text-white text-sm font-bold">{stepIndex + 1}</span>
                        </div>
                        <Text className={`
                          leading-relaxed
                          ${isServiceAsSoftware ? 'text-blue-800' : 'text-gray-700'}
                        `}>
                          {step}
                        </Text>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Analogy Section */}
        <div className="text-center mb-12">
          <Heading level="3" className="text-2xl font-bold text-gray-900 mb-8">
            Think of it this way:
          </Heading>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {analogies.map((analogy, index) => {
            const IconComponent = analogy.icon

            return (
              <div key={index} className="velox-card-advantage-enhanced p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                  <IconComponent className="w-8 h-8 text-gray-700" />
                </div>

                <div className="space-y-3">
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
                    <Text className="text-sm text-gray-700 line-through">
                      {analogy.wrong}
                    </Text>
                  </div>

                  <div className="flex justify-center">
                    <ArrowRight className="w-5 h-5 text-blue-600" />
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                    <Text className="text-sm font-semibold text-blue-800">
                      {analogy.right}
                    </Text>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom Message */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <CheckCircle className="w-8 h-8 text-blue-600" />
              <Heading level="3" className="text-xl font-bold text-blue-900">
                The Key Difference
              </Heading>
            </div>
            <Text className="text-lg text-blue-800 leading-relaxed">
              You don't manage tools. You delegate outcomes. That's the Service-as-Software difference.
            </Text>
          </div>
        </div>
      </Container>
    </Section>
  )
}
