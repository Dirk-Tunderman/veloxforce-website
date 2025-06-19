import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"
import { Shield, Clock, TrendingUp, BarChart3 } from "lucide-react"
import Image from "next/image"

export function OngoingExcellenceSection() {
  return (
    <Section padding="xl" background="light-to-accent">
      <Container className="max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
              Phase 4: Continuous Partnership Excellence
            </span>
          </h2>
          <Text className="text-xl text-gray-600 max-w-3xl mx-auto text-center">
            <span className="font-bold">Our partnership grows stronger over time.</span> We continuously optimize and evolve together, ensuring your operations scale seamlessly with your business.
          </Text>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Service Features */}
          <div className="h-[520px] flex flex-col justify-between">
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

          {/* Right: Visual Representation */}
          <div className="relative h-[520px]">
            <Image
              src="/abstract-front-view-black-white-prism-rainbow-light.jpg"
              alt="Continuous excellence - prism refracting light representing the transformation and refinement of business processes"
              width={600}
              height={800}
              className="w-full h-full object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </Container>
    </Section>
  )
}
