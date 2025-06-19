import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"
import { Calculator, TrendingUp, DollarSign, Target } from "lucide-react"
import Image from "next/image"

export function ROIAnalysisSection() {
  return (
    <Section id="roi-analysis" padding="xl" background="light-to-white">
      <Container className="max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
              Phase 1: Partnership Validation
            </span>
          </h2>
          <Text className="text-xl text-gray-600 max-w-3xl mx-auto text-center">
            We evaluate mutual fit and value creation - <span className="font-bold">ensuring this partnership benefits both organizations</span>
          </Text>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Process Steps */}
          <div className="h-[520px] flex flex-col justify-between">
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

          {/* Right: Visual Representation */}
          <div className="relative h-[520px]">
            <Image
              src="/beautiful-black-white-minimal-design.jpg"
              alt="Partnership validation - elegant black and white design representing precision and clarity in business analysis"
              width={600}
              height={800}
              className="w-full h-full object-cover rounded-2xl shadow-lg"
              priority
            />
          </div>
        </div>
      </Container>
    </Section>
  )
}
