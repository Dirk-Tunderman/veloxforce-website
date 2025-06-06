import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"
import { Zap, Code, Clock, DollarSign, ArrowRight } from "lucide-react"

export function CustomDevelopmentSection() {
  return (
    <Section padding="xl" background="white-to-light">
      <Container className="max-w-6xl">
        <div className="text-center mb-16">
          <Heading level="2" className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Phase 2: Custom Solution Development
          </Heading>
          <Text className="text-xl text-gray-600 max-w-3xl mx-auto text-center">
            <span className="font-bold">We build the systems needed to deliver your outcomes reliably.</span> Thanks to AI acceleration, what once took years now happens in weeks to months.
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
                  Systems configured exactly for your process and standards
                </Heading>
                <Text className="text-gray-700">
                  We handle all the technical complexity of making this work with your current systems
                </Text>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div>
                <Heading level="3" className="text-lg font-bold text-gray-900 mb-2">
                  AI-powered development timeline
                </Heading>
                <Text className="text-gray-700">
                  <span className="font-semibold">What took years now takes months. What took months now takes weeks.</span> Implementation speed varies by scope.
                </Text>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <div>
                <Heading level="3" className="text-lg font-bold text-gray-900 mb-2">
                  Investment proportional to value created
                </Heading>
                <Text className="text-gray-700">
                  <span className="font-semibold">Harvard Business Review</span> reports <span className="font-bold">70-90% cost reduction</span> with AI-accelerated development
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
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <Text className="font-semibold text-gray-900 mb-2">Traditional timeline:</Text>
                <Text className="text-sm text-gray-700">Years to months for custom development</Text>
              </div>

              <div className="flex justify-center">
                <ArrowRight className="w-8 h-8 text-blue-400" />
              </div>

              <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                <Text className="font-semibold text-blue-900 mb-2">With AI acceleration:</Text>
                <Text className="text-sm text-blue-700"><span className="font-bold">Weeks to months</span> - and getting faster every year</Text>
              </div>

              <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                <Text className="font-semibold text-green-900 mb-2">The breakthrough:</Text>
                <Text className="text-sm text-green-700">Custom solutions now <span className="font-bold">make financial sense</span></Text>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
