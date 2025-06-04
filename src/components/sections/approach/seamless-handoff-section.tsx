import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"
import { Play, Mail, Globe, Zap, TrendingUp } from "lucide-react"

export function SeamlessHandoffSection() {
  return (
    <Section padding="xl" background="white">
      <Container className="max-w-6xl">
        <div className="text-center mb-16">
          <Heading level="2" className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Phase 3: Seamless Handoff
          </Heading>
          <Text className="text-xl text-gray-600 max-w-3xl mx-auto">
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
                  Your digital workforce goes live
                </Heading>
                <Text className="text-gray-700">
                  Seamless integration with your existing workflow
                </Text>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <Heading level="3" className="text-lg font-bold text-gray-900 mb-2">
                  Simple delegation interface
                </Heading>
                <Text className="text-gray-700">
                  Email, portal, or API—whatever works best for you
                </Text>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <Heading level="3" className="text-lg font-bold text-gray-900 mb-2">
                  Start with pilot volume to ensure perfection
                </Heading>
                <Text className="text-gray-700">
                  Test with small batches before full-scale deployment
                </Text>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <Heading level="3" className="text-lg font-bold text-gray-900 mb-2">
                  Scale up as comfort grows
                </Heading>
                <Text className="text-gray-700">
                  Continuous optimization included throughout
                </Text>
              </div>
            </div>
          </div>

          {/* Right: Delegation Interface Examples */}
          <div className="space-y-6">
            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
              <div className="flex items-center gap-3 mb-4">
                <Mail className="w-6 h-6 text-blue-600" />
                <Heading level="3" className="text-lg font-bold text-blue-900">
                  Email Delegation
                </Heading>
              </div>
              <div className="bg-white rounded-lg p-4 border border-blue-300">
                <Text className="text-sm text-gray-700 mb-2">
                  <strong>To:</strong> invoices@yourcompany.veloxforce.ai
                </Text>
                <Text className="text-sm text-gray-700 mb-2">
                  <strong>Subject:</strong> Process attached invoices
                </Text>
                <Text className="text-sm text-gray-700">
                  <strong>Body:</strong> [Attach files] → Results delivered to your inbox
                </Text>
              </div>
            </div>

            <div className="bg-green-50 rounded-2xl p-6 border border-green-200">
              <div className="flex items-center gap-3 mb-4">
                <Globe className="w-6 h-6 text-green-600" />
                <Heading level="3" className="text-lg font-bold text-green-900">
                  Portal Delegation
                </Heading>
              </div>
              <div className="bg-white rounded-lg p-4 border border-green-300">
                <Text className="text-sm text-gray-700 mb-2">
                  Simple web interface for batch uploads
                </Text>
                <Text className="text-sm text-gray-700">
                  Real-time status tracking and results download
                </Text>
              </div>
            </div>

            <div className="bg-purple-50 rounded-2xl p-6 border border-purple-200">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-6 h-6 text-purple-600" />
                <Heading level="3" className="text-lg font-bold text-purple-900">
                  API Integration
                </Heading>
              </div>
              <div className="bg-white rounded-lg p-4 border border-purple-300">
                <Text className="text-sm text-gray-700 mb-2">
                  Direct system-to-system integration
                </Text>
                <Text className="text-sm text-gray-700">
                  Fully automated workflow triggers
                </Text>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
