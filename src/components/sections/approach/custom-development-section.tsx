import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"
import { Zap, Code, Clock, DollarSign, ArrowRight } from "lucide-react"

export function CustomDevelopmentSection() {
  return (
    <Section padding="xl" background="light-blue">
      <Container className="max-w-6xl">
        <div className="text-center mb-16">
          <Heading level="2" className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Phase 2: Custom Solution Development
          </Heading>
          <Text className="text-xl text-gray-600 max-w-3xl mx-auto">
            AI makes this 10x faster than traditional approaches
          </Text>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: The Process */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                <Code className="w-6 h-6 text-white" />
              </div>
              <div>
                <Heading level="3" className="text-lg font-bold text-gray-900 mb-2">
                  Build your digital workforce for your exact process
                </Heading>
                <Text className="text-gray-700">
                  Custom-built to match your specific rules, exceptions, and workflow
                </Text>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div>
                <Heading level="3" className="text-lg font-bold text-gray-900 mb-2">
                  Development time varies by complexity
                </Heading>
                <Text className="text-gray-700">
                  What took months now takes significantly less time
                </Text>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <div>
                <Heading level="3" className="text-lg font-bold text-gray-900 mb-2">
                  Lower development cost = better ROI for you
                </Heading>
                <Text className="text-gray-700">
                  AI acceleration makes custom solutions finally affordable
                </Text>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center flex-shrink-0">
                <ArrowRight className="w-6 h-6 text-white" />
              </div>
              <div>
                <Heading level="3" className="text-lg font-bold text-gray-900 mb-2">
                  You're involved only when needed
                </Heading>
                <Text className="text-gray-700">
                  We handle the complexity while keeping you informed
                </Text>
              </div>
            </div>
          </div>

          {/* Right: Why This Matters */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <Heading level="3" className="text-xl font-bold text-gray-900 mb-4">
                Why This Matters
              </Heading>
            </div>
            
            <div className="space-y-6">
              <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                <Text className="font-semibold text-red-900 mb-2">Traditional custom development:</Text>
                <Text className="text-sm text-red-700">6-12 months, €100k+</Text>
              </div>

              <div className="flex justify-center">
                <ArrowRight className="w-8 h-8 text-gray-400" />
              </div>

              <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                <Text className="font-semibold text-green-900 mb-2">Our AI-accelerated approach:</Text>
                <Text className="text-sm text-green-700">Fraction of time and cost</Text>
              </div>

              <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                <Text className="font-semibold text-blue-900 mb-2">Your benefit:</Text>
                <Text className="text-sm text-blue-700">Custom solutions are finally affordable</Text>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
