import Link from "next/link"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"
import { Button } from "@/components/ui/button"
import { AlertTriangle, CheckCircle, ArrowRight } from "lucide-react"

const approaches = [
  {
    title: "What AI Automation Agencies Do:",
    items: [
      "Give you AI tools to manage",
      "Train your team for weeks",
      "Charge €15-50K upfront",
      "Leave you to figure it out",
      "80% failure rate"
    ],
    promise: "AI will save you time",
    reality: "You trade manual work for AI babysitting",
    icon: AlertTriangle,
    color: "gray"
  },
  {
    title: "What Veloxforce Actually Does:",
    items: [
      "Build custom software for you",
      "Run it completely forever",
      "Pay only for results",
      "Zero training needed",
      "95% success rate"
    ],
    promise: "Delegate and forget",
    reality: "Work disappears from your plate",
    icon: CheckCircle,
    color: "blue"
  }
]

export function VeloxforceDifferenceSection() {
  return (
    <Section padding="xl" background="light-blue" className="bg-gray-50">
      <Container className="max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Heading level="2" className="velox-text-h2 mb-6">
            We're Not Another AI Automation Agency. Here's Why That Matters.
          </Heading>
          <Text className="velox-text-body text-xl text-gray-700 max-w-4xl mx-auto">
            Most agencies sell you tools to manage. We sell you outcomes to enjoy.
          </Text>
        </div>

        {/* Comparison Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          {approaches.map((approach, index) => {
            const IconComponent = approach.icon
            const isVeloxforce = approach.color === 'blue'

            return (
              <div key={index} className="lg:col-span-6 relative">
                {/* Arrow between cards */}
                {index === 0 && (
                  <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                      <ArrowRight className="w-5 h-5 text-white" />
                    </div>
                  </div>
                )}

                <div className={`
                  ${isVeloxforce
                    ? 'velox-card-advantage-enhanced transform lg:scale-105'
                    : 'bg-gray-50 border border-gray-300'
                  }
                  p-8 h-full rounded-lg transition-all duration-300 hover:shadow-lg
                `}>
                  {/* Header */}
                  <div className="text-center mb-6">
                    <div className={`
                      w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center
                      ${isVeloxforce ? 'bg-blue-600' : 'bg-gray-200'}
                    `}>
                      <IconComponent className={`
                        w-8 h-8
                        ${isVeloxforce ? 'text-white' : 'text-gray-600'}
                      `} />
                    </div>

                    <Heading level="3" className={`
                      text-xl font-bold mb-4
                      ${isVeloxforce ? 'text-blue-900' : 'text-gray-800'}
                    `}>
                      {approach.title}
                    </Heading>
                  </div>

                  {/* Items List */}
                  <ul className="space-y-3 mb-6">
                    {approach.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3">
                        <div className={`
                          w-2 h-2 rounded-full mt-2 flex-shrink-0
                          ${isVeloxforce ? 'bg-blue-600' : 'bg-gray-500'}
                        `} />
                        <Text className={`
                          text-sm leading-relaxed
                          ${isVeloxforce ? 'text-blue-800' : 'text-gray-700'}
                        `}>
                          {item}
                        </Text>
                      </li>
                    ))}
                  </ul>

                  {/* Promise vs Reality */}
                  <div className="space-y-4">
                    <div className={`
                      p-4 rounded-lg border-l-4
                      ${isVeloxforce
                        ? 'bg-blue-100 border-blue-600'
                        : 'bg-gray-100 border-gray-500'
                      }
                    `}>
                      <Text className={`
                        text-sm font-semibold mb-1
                        ${isVeloxforce ? 'text-blue-900' : 'text-gray-800'}
                      `}>
                        Their promise:
                      </Text>
                      <Text className={`
                        text-sm italic
                        ${isVeloxforce ? 'text-blue-800' : 'text-gray-700'}
                      `}>
                        "{approach.promise}"
                      </Text>
                    </div>

                    <div className={`
                      p-4 rounded-lg border-l-4
                      ${isVeloxforce
                        ? 'bg-green-50 border-green-500'
                        : 'bg-gray-200 border-gray-600'
                      }
                    `}>
                      <Text className={`
                        text-sm font-semibold mb-1
                        ${isVeloxforce ? 'text-green-900' : 'text-gray-800'}
                      `}>
                        Reality:
                      </Text>
                      <Text className={`
                        text-sm font-medium
                        ${isVeloxforce ? 'text-green-800' : 'text-gray-700'}
                      `}>
                        {approach.reality}
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* The Fundamental Difference */}
        <div className="text-center mb-12">
          <div className="velox-card-advantage-enhanced p-8 max-w-5xl mx-auto">
            <Heading level="3" className="text-2xl font-bold text-blue-900 mb-6">
              The Fundamental Difference:
            </Heading>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* They Sell */}
              <div className="bg-gray-50 border border-gray-300 rounded-lg p-6">
                <Heading level="4" className="text-lg font-bold text-gray-800 mb-3">
                  They sell you capability:
                </Heading>
                <Text className="text-gray-700 italic mb-4">
                  "Here's what you COULD do with our tools/expertise"
                </Text>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Learning curve required</li>
                  <li>• Management burden on you</li>
                  <li>• Hoping it works</li>
                  <li>• Your responsibility to make it successful</li>
                </ul>
              </div>

              {/* We Sell */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <Heading level="4" className="text-lg font-bold text-blue-900 mb-3">
                  We sell you completion:
                </Heading>
                <Text className="text-blue-800 italic mb-4">
                  "Here's what we DID for you today"
                </Text>
                <ul className="space-y-2 text-sm text-blue-700">
                  <li>• No learning curve</li>
                  <li>• No management burden</li>
                  <li>• No hoping it works</li>
                  <li>• Just outcomes delivered daily</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="text-center">
          <div className="velox-card-advantage-enhanced p-8 max-w-5xl mx-auto mb-8">
            <Heading level="3" className="text-2xl font-bold text-blue-900 mb-4">
              The Bottom Line:
            </Heading>
            <Text className="text-lg text-blue-800 leading-relaxed mb-6">
              If you want to become an AI expert, hire an AI agency. If you want to run a successful
              business while operations handle themselves, choose Service-as-Software.
            </Text>

            <Button
              className="velox-cta-secondary font-semibold px-6 py-3 rounded-lg"
              asChild
            >
              <Link href="/our-approach">
                Learn More: How Our Approach Works →
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  )
}
