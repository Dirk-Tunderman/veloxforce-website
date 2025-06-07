"use client"

import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"
import { Clock, FileText, DollarSign, ArrowRight } from "lucide-react"

interface AssessmentQuestion {
  surface: string
  deeper: string
  indicators: string[]
  icon: any
  color: string
}

const assessmentQuestions: AssessmentQuestion[] = [
  {
    surface: "Does this take 5+ hours weekly?",
    deeper: "What strategic work isn't happening because of this?",
    indicators: [
      "We can't analyze trends because we're entering data",
      "New initiatives die because no one has bandwidth",
      "Our best people are doing work interns could do"
    ],
    icon: Clock,
    color: "blue"
  },
  {
    surface: "Does it follow rules?",
    deeper: "Could you train someone to do it in 2 weeks?",
    indicators: [
      "Yes, but it requires attention to detail",
      "The process is clear but has many steps",
      "We have SOPs but people still make mistakes"
    ],
    icon: FileText,
    color: "gray"
  },
  {
    surface: "Would it save money?",
    deeper: "What's the compound cost of not changing?",
    indicators: [
      "We're losing customers due to slow response",
      "Growth plans are on hold until we hire more",
      "Competitors move faster with smaller teams"
    ],
    icon: DollarSign,
    color: "gray"
  }
]

export function DepthAssessmentSection() {
  return (
    <Section padding="xl" background="white-to-light">
      <Container className="max-w-6xl">
        <div className="text-center mb-12">
          <Heading level="2" className="text-3xl md:text-4xl font-bold mb-4">
            Beyond Basic Questions: The Real Indicators
          </Heading>
          <Text className="text-xl text-gray-600 max-w-3xl mx-auto">
            Surface-level questions miss the real opportunity. Here's what actually matters:
          </Text>
        </div>

        <div className="space-y-8">
          {assessmentQuestions.map((question, index) => {
            const IconComponent = question.icon
            return (
              <div key={index} className="bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden">
                <div className="grid lg:grid-cols-2">
                  {/* Surface Question */}
                  <div className="p-8 bg-gray-50 border-r border-gray-200">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-10 h-10 ${question.color === 'blue' ? 'bg-blue-600' : 'bg-gray-700'} rounded-full flex items-center justify-center`}>
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                      <Text className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                        Surface Question
                      </Text>
                    </div>
                    <Heading level="3" className="text-xl font-bold text-gray-900 mb-2">
                      {question.surface}
                    </Heading>
                  </div>

                  {/* Deeper Question */}
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <ArrowRight className="w-6 h-6 text-blue-600" />
                      <Text className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
                        Deeper Question
                      </Text>
                    </div>
                    <Heading level="3" className="text-xl font-bold text-gray-900 mb-4">
                      {question.deeper}
                    </Heading>
                    
                    <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                      <Text className="text-sm font-semibold text-green-900 mb-2">
                        If your answer includes:
                      </Text>
                      <ul className="space-y-2">
                        {question.indicators.map((indicator, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-1.5 flex-shrink-0" />
                            <Text className="text-sm text-green-800">{indicator}</Text>
                          </li>
                        ))}
                      </ul>
                      <Text className="text-sm font-bold text-green-900 mt-3">
                        → Strong fit indicator
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-12 bg-blue-50 rounded-2xl p-8 border border-blue-200 text-center">
          <Heading level="3" className="text-2xl font-bold text-blue-900 mb-4">
            The Pattern That Matters
          </Heading>
          <Text className="text-lg text-blue-800 max-w-3xl mx-auto">
            If you found yourself nodding to the deeper questions, you're experiencing the hidden cost of operational drag. 
            <span className="font-bold"> That's exactly what Service-as-Software solves.</span>
          </Text>
        </div>
      </Container>
    </Section>
  )
}