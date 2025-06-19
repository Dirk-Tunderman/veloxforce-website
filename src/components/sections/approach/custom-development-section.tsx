import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"
import { Code, Clock, DollarSign, ArrowRight } from "lucide-react"
import Image from "next/image"

export function CustomDevelopmentSection() {
  return (
    <Section padding="xl" background="white-to-light">
      <Container className="max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
              Phase 2: Collaborative Solution Design
            </span>
          </h2>
          <Text className="text-xl text-gray-600 max-w-3xl mx-auto text-center">
            <span className="font-bold">Together, we design systems that align with your standards and goals.</span> Your expertise guides our development, ensuring perfect fit with your operations.
          </Text>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: The Process */}
          <div className="h-[520px] flex flex-col justify-between">
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

          {/* Right: Visual Representation */}
          <div className="relative h-[520px]">
            <Image
              src="/binary-code-magic-solid-black-background-portrait-mode.jpg"
              alt="AI-powered development - binary code streams representing the technological foundation of modern automation"
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
