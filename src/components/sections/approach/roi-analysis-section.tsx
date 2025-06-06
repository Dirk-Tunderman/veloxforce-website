import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"
import { Calculator, TrendingUp, DollarSign, Target, CheckCircle } from "lucide-react"

export function ROIAnalysisSection() {
  return (
    <Section id="roi-analysis" padding="xl" background="light-to-white">
      <Container className="max-w-6xl">
        <div className="text-center mb-16">
          <Heading level="2" className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Phase 1: ROI Analysis First
          </Heading>
          <Text className="text-xl text-gray-600 max-w-3xl mx-auto text-center">
            We check if delegating this process creates clear value - <span className="font-bold">only proceeding when the numbers work for both of us</span>
          </Text>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Process Steps */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                <Calculator className="w-6 h-6 text-white" />
              </div>
              <div>
                <Heading level="3" className="text-lg font-bold text-gray-900 mb-2">
                  Understand your current process economics
                </Heading>
                <Text className="text-gray-700">
                  How much time this process consumes and <span className="font-semibold">what perfect execution would save</span>
                </Text>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <Heading level="3" className="text-lg font-bold text-gray-900 mb-2">
                  Identify what you can delegate to us
                </Heading>
                <Text className="text-gray-700">
                  <span className="font-semibold">Realistic delegation potential</span> - we focus on what you can confidently hand over while preserving what you should keep strategic control over
                </Text>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <div>
                <Heading level="3" className="text-lg font-bold text-gray-900 mb-2">
                  Project realistic ROI based on your scale
                </Heading>
                <Text className="text-gray-700">
                  <span className="font-semibold">Investment proportional to value created</span> - timeline depends on process complexity
                </Text>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center flex-shrink-0">
                <Target className="w-6 h-6 text-white" />
              </div>
              <div>
                <Heading level="3" className="text-lg font-bold text-gray-900 mb-2">
                  Show you the numbers transparently
                </Heading>
                <Text className="text-gray-700">
                  Only proceed if the math works for you
                </Text>
              </div>
            </div>
          </div>

          {/* Right: Quote Card */}
          <div className="bg-blue-50 rounded-2xl p-8 border border-blue-200">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <Text className="text-lg font-semibold text-blue-900 mb-4">
                Our Commitment to Honesty
              </Text>
            </div>
            
            <div className="bg-white rounded-lg p-6 border border-blue-300">
              <Text className="text-lg text-gray-700 italic mb-4">
                "We've walked away from opportunities that didn't make financial sense. 
                That's how you know when we move forward, it's the right decision."
              </Text>
              
              <div className="space-y-3 mt-6">
                <Text className="text-sm font-semibold text-gray-900">We've turned down businesses where:</Text>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                    <Text className="text-sm text-gray-700">Process volumes were too low</Text>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                    <Text className="text-sm text-gray-700">Complexity exceeded ROI potential</Text>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                    <Text className="text-sm text-gray-700">Human judgment was irreplaceable</Text>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                    <Text className="text-sm text-gray-700">Better solutions already existed</Text>
                  </li>
                </ul>
                
                <Text className="text-sm font-semibold text-blue-900 mt-4">
                  This selectivity is why our success rate is 95%
                </Text>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
