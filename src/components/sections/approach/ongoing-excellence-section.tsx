import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"
import { Shield, Clock, TrendingUp, BarChart3, CheckCircle } from "lucide-react"

export function OngoingExcellenceSection() {
  return (
    <Section padding="xl" background="light-blue">
      <Container className="max-w-6xl">
        <div className="text-center mb-16">
          <Heading level="2" className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Phase 4: Ongoing Excellence
          </Heading>
          <Text className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pay for outcomes, not promises
          </Text>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Service Features */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div>
                <Heading level="3" className="text-lg font-bold text-gray-900 mb-2">
                  24/7 processing capability
                </Heading>
                <Text className="text-gray-700">
                  Your digital workforce never sleeps, takes breaks, or calls in sick
                </Text>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <Heading level="3" className="text-lg font-bold text-gray-900 mb-2">
                  Consistent quality maintained
                </Heading>
                <Text className="text-gray-700">
                  Human oversight ensures every output meets your standards
                </Text>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <Heading level="3" className="text-lg font-bold text-gray-900 mb-2">
                  Instant scaling when needed
                </Heading>
                <Text className="text-gray-700">
                  Handle 10x volume spikes without hiring or training delays
                </Text>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center flex-shrink-0">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <div>
                <Heading level="3" className="text-lg font-bold text-gray-900 mb-2">
                  Monthly performance reviews
                </Heading>
                <Text className="text-gray-700">
                  ROI tracking and validation with continuous improvement
                </Text>
              </div>
            </div>
          </div>

          {/* Right: Results Card */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <Heading level="3" className="text-xl font-bold text-gray-900 mb-4">
                When It DOES Work, the Results Speak
              </Heading>
            </div>
            
            <div className="space-y-4">
              <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                <Text className="font-semibold text-blue-900 mb-1">Development ROI:</Text>
                <Text className="text-sm text-blue-700">Pays for itself in 2-6 months (varies by process)</Text>
              </div>

              <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                <Text className="font-semibold text-green-900 mb-1">Ongoing Savings:</Text>
                <Text className="text-sm text-green-700">60-70% vs traditional staffing</Text>
              </div>

              <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                <Text className="font-semibold text-purple-900 mb-1">Time Liberation:</Text>
                <Text className="text-sm text-purple-700">Immediate focus shift to strategic work</Text>
              </div>

              <div className="bg-indigo-50 rounded-lg p-4 border border-indigo-200">
                <Text className="font-semibold text-indigo-900 mb-1">Scalability:</Text>
                <Text className="text-sm text-indigo-700">Growth without proportional cost increases</Text>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <Text className="text-center text-base text-gray-700 italic">
                "We only win when you get sustained value. That alignment drives everything we do."
              </Text>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
