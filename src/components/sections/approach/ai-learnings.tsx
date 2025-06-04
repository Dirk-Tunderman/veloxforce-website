"use client"

import { Brain, AlertCircle, CheckCircle, TrendingUp, Zap } from "lucide-react"

import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"

const whatMakesItWork = [
  {
    icon: Brain,
    title: "Clear decision frameworks",
    description: "AI needs to know your rules and preferences"
  },
  {
    icon: TrendingUp,
    title: "Business context",
    description: "It must understand your specific operations"
  },
  {
    icon: Zap,
    title: "Smart routing",
    description: "It can recognize when something needs human attention"
  }
]

const aiPatterns = [
  {
    title: "AI excels when given clear context and decision rules",
    example: "McDonald's AI works perfectly for standard orders"
  },
  {
    title: "It struggles without proper business understanding",
    example: "But confidently added 260 nuggets without context"
  },
  {
    title: "Success requires knowing when to route to humans",
    example: "Klarna keeps humans for complex customer situations"
  },
  {
    title: "One size definitely doesn't fit all businesses",
    example: "Each business needs its own delegation framework"
  }
]

export function AiLearningsSection() {

  return (
    <Section padding="lg" background="light-to-white">
      <Container>
        <div className="max-w-4xl mx-auto">
          {/* Brief Transition */}
          <div className="text-center mb-12">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 max-w-3xl mx-auto">
              <Text className="text-base text-gray-700 leading-relaxed">
                You're here because <span className="font-semibold text-gray-900">traditional approaches to scaling operations aren't working</span>.
              </Text>
              <Text className="text-base text-gray-700 leading-relaxed mt-3">
                Let us show you what we discovered after implementing <span className="font-semibold text-blue-700">dozens of AI systems</span>...
              </Text>
            </div>
          </div>

          {/* Section Header */}
          <div className="text-center mb-16">
            <Heading level="2" className="velox-text-h2 mb-6">
              What We've Discovered Building <span className="text-blue-600">AI Systems</span>
            </Heading>
            <Text className="text-lg text-gray-600 max-w-3xl mx-auto">
              Over the past year, we've been deep in the trenches implementing AI for <span className="font-semibold text-gray-800">real business operations</span>. Not demos or prototypes - <span className="font-semibold text-blue-700">actual systems handling daily work</span>.
            </Text>
          </div>

          {/* AI Capabilities */}
          <div className="mb-16">
            <div className="w-full flex justify-center mb-8">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 max-w-3xl">
                <Text className="text-base text-gray-700 leading-relaxed text-center">
                  Here's what fascinates us about AI: It has access to <span className="font-semibold text-blue-700">virtually infinite knowledge</span>. Ask it anything, and it can provide remarkably good answers. But here's the catch - it's like having a <span className="font-semibold text-gray-800">brilliant employee who needs very clear instructions</span>.
                </Text>
              </div>
            </div>

            <div className="w-full flex justify-center mb-12">
              <div className="velox-card-advantage p-6 max-w-3xl">
                <Text className="text-base text-blue-800 leading-relaxed text-center font-medium">
                  <span className="font-semibold text-blue-700">The magic happens</span> when you provide AI with proper context. When it understands your business, your processes, your goals, and your constraints, it transforms from a smart tool into something like a <span className="font-semibold text-gray-900">digital employee</span>. You can actually <span className="font-semibold text-blue-700">delegate tasks to it</span>, just like you would to a team member.
                </Text>
              </div>
            </div>

            <Heading level="3" className="velox-text-h3 mb-6 text-center">
              What makes this work:
            </Heading>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {whatMakesItWork.map((capability, index) => (
                <div
                  key={capability.title}
                  className="bg-white border border-gray-200 rounded-lg p-6 text-center hover:shadow-md transition-shadow duration-300"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <capability.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <Heading level="4" className="font-semibold text-gray-900 mb-3">
                    {capability.title}
                  </Heading>
                  <Text className="text-sm text-gray-600 leading-relaxed">
                    {capability.description}
                  </Text>
                </div>
              ))}
            </div>
          </div>

          {/* The Critical 2% */}
          <div className="mb-16">
            <div className="w-full flex justify-center mb-12">
              <div className="max-w-3xl px-4">
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <Text className="text-base text-gray-700 leading-relaxed text-center">
                    <a href="https://www.bbc.com/news/articles/c722gne7qngo" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline font-semibold">McDonald's learned this the hard way with IBM</a>. Their AI worked beautifully most of the time because it understood routine orders. But without proper exception handling, it <span className="font-bold text-gray-900">confidently added 260 nuggets</span> to an order. <a href="https://futurism.com/klarna-openai-humans-ai-back" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline font-semibold">Klarna found similar lessons</a> - their AI handles thousands of customer queries perfectly, but they <span className="font-semibold text-blue-700">kept humans for complex situations</span>.
                  </Text>
                </div>
              </div>
            </div>

            {/* Pattern Insights */}
            <div className="mb-12">
              <Heading level="3" className="velox-text-h3 mb-6 text-center">
                The pattern we've noticed:
              </Heading>

              <div className="space-y-4">
                {aiPatterns.map((pattern, index) => (
                  <div
                    key={pattern.title}
                    className="flex items-start gap-4 p-4 bg-blue-50 border border-blue-200 rounded-lg"
                  >
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-4 h-4 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <Text className="text-base font-semibold text-gray-900 mb-2">
                        {pattern.title}
                      </Text>
                      <Text className="text-sm text-gray-600 italic">
                        {pattern.example}
                      </Text>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* The Realization */}
          <div className="text-center">
            <div className="w-full flex justify-center">
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 max-w-3xl">
                <Text className="text-base text-gray-700 leading-relaxed text-center mb-6">
                  Through trial and error, we've learned to set up AI like you'd <span className="font-bold text-blue-700">train a new employee</span> - with <span className="font-semibold text-gray-900">clear instructions, proper context, and escalation paths</span> for anything unusual.
                </Text>

                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <div className="flex items-center justify-center">
                    <div className="flex items-center gap-4 flex-wrap justify-center">
                      <div className="text-center">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                          <Brain className="w-6 h-6 text-blue-600" />
                        </div>
                        <Text className="text-xs font-semibold text-blue-700">Digital Employee</Text>
                      </div>
                      <div className="text-2xl text-gray-400 font-bold">+</div>
                      <div className="text-center">
                        <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                          <TrendingUp className="w-6 h-6 text-gray-700" />
                        </div>
                        <Text className="text-xs font-semibold text-gray-700">Business Context</Text>
                      </div>
                      <div className="text-2xl text-gray-400 font-bold">=</div>
                      <div className="text-center">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                          <CheckCircle className="w-6 h-6 text-blue-600" />
                        </div>
                        <Text className="text-xs font-semibold text-blue-700">True Delegation</Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
