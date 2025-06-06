import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"
import { Play, Mail, Globe, Zap, TrendingUp } from "lucide-react"

export function SeamlessHandoffSection() {
  return (
    <Section padding="xl" background="light-blue">
      <Container className="max-w-6xl">
        <div className="text-center mb-16">
          <Heading level="2" className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Phase 3: Seamless Handoff
          </Heading>
          <Text className="text-xl text-gray-600 max-w-3xl mx-auto text-center">
            From development to delegation without disruption
          </Text>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Process Steps */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                <Play className="w-6 h-6 text-white" />
              </div>
              <div>
                <Heading level="3" className="text-lg font-bold text-gray-900 mb-2">
                  You start receiving results without changing how you work
                </Heading>
                <Text className="text-gray-700">
                  <span className="font-semibold">We integrate with your current systems</span> so you don't have to change anything
                </Text>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <Heading level="3" className="text-lg font-bold text-gray-900 mb-2">
                  Choose your preferred delegation method
                </Heading>
                <Text className="text-gray-700">
                  Email, portal, or API—<span className="font-semibold">whatever works best for your team's current habits</span>
                </Text>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <Heading level="3" className="text-lg font-bold text-gray-900 mb-2">
                  We start small to ensure you receive perfect results from day one
                </Heading>
                <Text className="text-gray-700">
                  <span className="font-semibold">Test with small batches</span> before full deployment to validate outcome quality
                </Text>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <Heading level="3" className="text-lg font-bold text-gray-900 mb-2">
                  Scale up as confidence and comfort grows
                </Heading>
                <Text className="text-gray-700">
                  <span className="font-semibold">Continuous optimization</span> and performance monitoring included
                </Text>
              </div>
            </div>
          </div>

          {/* Right: Delegation Interface Examples */}
          <div className="bg-blue-50 rounded-2xl p-8 border border-blue-200">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Play className="w-8 h-8 text-white" />
              </div>
              <Text className="text-lg font-semibold text-blue-900 mb-4">
                Three Ways to Delegate
              </Text>
            </div>
            
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 border border-blue-300">
                <div className="flex items-center gap-3 mb-2">
                  <Mail className="w-5 h-5 text-blue-600" />
                  <Text className="font-semibold text-blue-900">Email Delegation</Text>
                </div>
                <Text className="text-sm text-blue-700">
                  invoices@yourcompany.veloxforce.ai → Results in your inbox
                </Text>
              </div>

              <div className="bg-white rounded-lg p-4 border border-blue-300">
                <div className="flex items-center gap-3 mb-2">
                  <Globe className="w-5 h-5 text-blue-600" />
                  <Text className="font-semibold text-blue-900">Portal Interface</Text>
                </div>
                <Text className="text-sm text-blue-700">
                  Web dashboard for batch uploads and real-time tracking
                </Text>
              </div>

              <div className="bg-white rounded-lg p-4 border border-blue-300">
                <div className="flex items-center gap-3 mb-2">
                  <Zap className="w-5 h-5 text-blue-600" />
                  <Text className="font-semibold text-blue-900">API Integration</Text>
                </div>
                <Text className="text-sm text-blue-700">
                  Direct system-to-system automation triggers
                </Text>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-blue-200">
              <Text className="text-center text-base text-blue-700 italic">
                "Choose what works best for your workflow - <span className="font-semibold">we adapt to you</span>."
              </Text>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
