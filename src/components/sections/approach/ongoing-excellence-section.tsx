import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"
import { Shield, Clock, TrendingUp, BarChart3, CheckCircle } from "lucide-react"

export function OngoingExcellenceSection() {
  return (
    <Section padding="xl" background="light-to-accent">
      <Container className="max-w-6xl">
        <div className="text-center mb-16">
          <Heading level="2" className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Phase 4: Continuous Partnership Excellence
          </Heading>
          <Text className="text-xl text-gray-600 max-w-3xl mx-auto text-center">
            <span className="font-bold">Our partnership grows stronger over time.</span> We continuously optimize and evolve together, ensuring your operations scale seamlessly with your business.
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
                  Continuous operational support and maintenance
                </Heading>
                <Text className="text-gray-700">
                  <span className="font-semibold">We handle the ongoing operations</span> so you don't have to manage technical complexity
                </Text>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <Heading level="3" className="text-lg font-bold text-gray-900 mb-2">
                  Human oversight ensures consistent excellence
                </Heading>
                <Text className="text-gray-700">
                  <span className="font-semibold">Humans add excellence</span> and quality refinement to every output and edge case
                </Text>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <Heading level="3" className="text-lg font-bold text-gray-900 mb-2">
                  Instant scaling when business demands change
                </Heading>
                <Text className="text-gray-700">
                  <span className="font-semibold">Handle 10x volume spikes</span> without hiring delays or capacity constraints
                </Text>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center flex-shrink-0">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <div>
                <Heading level="3" className="text-lg font-bold text-gray-900 mb-2">
                  Monthly performance reviews and optimization
                </Heading>
                <Text className="text-gray-700">
                  <span className="font-semibold">ROI tracking</span> and continuous improvement based on real performance data
                </Text>
              </div>
            </div>
          </div>

          {/* Right: Results Card */}
          <div className="bg-white rounded-2xl p-8 border border-blue-200 shadow-lg">
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
                <Text className="font-semibold text-blue-900 mb-1">Investment Recovery:</Text>
                <Text className="text-sm text-blue-700">Most clients see positive ROI quickly - timeline depends on process complexity</Text>
              </div>

              <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                <Text className="font-semibold text-green-900 mb-1">Operational Excellence:</Text>
                <Text className="text-sm text-green-700">Savings typically exceed investment within months</Text>
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

            <div className="mt-6 pt-6 border-t border-blue-200">
              <Text className="text-center text-base text-gray-700 italic">
                "<span className="font-semibold">The Partnership Model:</span> We invest in building your solution because we believe in its long-term value. When you grow, we grow. When you save, we succeed."
              </Text>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
