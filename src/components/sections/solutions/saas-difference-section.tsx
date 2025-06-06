import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"
import { Settings, Users, Target, ArrowRight } from "lucide-react"

const comparisons = [
  {
    category: "Software Says:",
    message: "\"Here's a tool, figure it out\"",
    response: "We Say:",
    ourMessage: "\"Tell us the outcome you need\"",
    icon: Settings,
    color: "red"
  },
  {
    category: "Consultants Say:",
    message: "\"We'll set it up and leave\"", 
    response: "We Say:",
    ourMessage: "\"We'll run it forever\"",
    icon: Users,
    color: "orange"
  },
  {
    category: "Agencies Say:",
    message: "\"Pay us to try\"",
    response: "We Say:", 
    ourMessage: "\"Pay for results delivered\"",
    icon: Target,
    color: "yellow"
  }
]

export function SaaSDifferenceSection() {
  return (
    <Section padding="xl" background="light-blue" className="bg-gray-50">
      <Container className="max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Heading level="2" className="velox-text-h2 mb-6">
            The Service-as-Software Difference
          </Heading>
          <Text className="velox-text-body text-xl text-gray-700 max-w-4xl mx-auto">
            Why This Works Where Other Solutions Fail
          </Text>
        </div>

        {/* Comparisons */}
        <div className="space-y-8 mb-16">
          {comparisons.map((comparison, index) => {
            const IconComponent = comparison.icon
            
            return (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 md:p-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 md:gap-8 items-center">
                  {/* Their Approach */}
                  <div className="lg:col-span-5">
                    <div className={`
                      ${comparison.color === 'red' ? 'bg-red-50 border border-red-200' :
                        comparison.color === 'orange' ? 'bg-orange-50 border border-orange-200' :
                        'bg-yellow-50 border border-yellow-200'
                      } 
                      rounded-lg p-6
                    `}>
                      <div className="flex items-center gap-3 mb-3">
                        <IconComponent className={`
                          w-6 h-6 
                          ${comparison.color === 'red' ? 'text-red-600' :
                            comparison.color === 'orange' ? 'text-orange-600' :
                            'text-yellow-600'
                          }
                        `} />
                        <Text className={`
                          font-bold
                          ${comparison.color === 'red' ? 'text-red-900' :
                            comparison.color === 'orange' ? 'text-orange-900' :
                            'text-yellow-900'
                          }
                        `}>
                          {comparison.category}
                        </Text>
                      </div>
                      <Text className={`
                        text-lg italic
                        ${comparison.color === 'red' ? 'text-red-800' :
                          comparison.color === 'orange' ? 'text-orange-800' :
                          'text-yellow-800'
                        }
                      `}>
                        {comparison.message}
                      </Text>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="lg:col-span-2 flex justify-center">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                      <ArrowRight className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Our Approach */}
                  <div className="lg:col-span-5">
                    <div className="velox-card-advantage-enhanced p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <Target className="w-6 h-6 text-blue-600" />
                        <Text className="font-bold text-blue-900">
                          {comparison.response}
                        </Text>
                      </div>
                      <Text className="text-lg font-semibold text-blue-800">
                        {comparison.ourMessage}
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom Message */}
        <div className="text-center">
          <div className="velox-card-advantage-enhanced p-4 sm:p-6 md:p-8 max-w-5xl mx-auto">
            <Heading level="3" className="text-2xl font-bold text-blue-900 mb-6">
              The Fundamental Difference
            </Heading>
            <Text className="text-xl text-blue-800 leading-relaxed mb-6">
              Your process doesn't need to fit our solution. 
              We build the solution to fit your process.
            </Text>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white text-2xl">🎯</span>
                </div>
                <Text className="font-semibold text-blue-900">Custom Built</Text>
                <Text className="text-sm text-blue-700">For your exact process</Text>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white text-2xl">🔄</span>
                </div>
                <Text className="font-semibold text-blue-900">Fully Managed</Text>
                <Text className="text-sm text-blue-700">We run it forever</Text>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white text-2xl">✅</span>
                </div>
                <Text className="font-semibold text-blue-900">Outcome Guaranteed</Text>
                <Text className="text-sm text-blue-700">Pay for results only</Text>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
