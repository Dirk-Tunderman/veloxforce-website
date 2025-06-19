import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"
import { Play, Mail, Zap, TrendingUp } from "lucide-react"
import Image from "next/image"

export function SeamlessHandoffSection() {
  return (
    <Section padding="xl" background="light-blue">
      <Container className="max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
              Phase 3: Smooth Transition to Partnership
            </span>
          </h2>
          <Text className="text-xl text-gray-600 max-w-3xl mx-auto text-center">
            <span className="font-bold">Your team maintains full visibility and control</span> while we handle the operational execution
          </Text>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Process Steps */}
          <div className="h-[520px] flex flex-col justify-between">
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

          {/* Right: Visual Representation */}
          <div className="relative h-[520px]">
            <Image
              src="/3d-rendering-abstract-black-white.jpg"
              alt="Seamless integration - abstract geometric forms representing the smooth transition and integration of systems"
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
