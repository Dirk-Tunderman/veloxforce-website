"use client"

import { useState } from "react"
import Link from "next/link"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"
import { Button } from "@/components/ui/button"
import { CheckCircle, X, HelpCircle, Target } from "lucide-react"

const questions = [
  {
    id: "explainable",
    question: "Can you explain it to a new employee?",
    description: "If yes, we can build a digital workforce for it.",
    icon: HelpCircle
  },
  {
    id: "regular",
    question: "Does it happen regularly?",
    description: "Daily, weekly, or monthly processes are ideal.",
    icon: CheckCircle
  },
  {
    id: "rules",
    question: "Does it follow rules (even complex ones)?",
    description: "If there's a \"way\" to do it, we can replicate it.",
    icon: Target
  },
  {
    id: "time",
    question: "Is it taking significant time from your team?",
    description: "If it's over 5 hours per week, it's worth delegating.",
    icon: CheckCircle
  }
]

export function ProcessEvaluationSection() {
  const [answers, setAnswers] = useState<Record<string, boolean | null>>({})
  
  const handleAnswer = (questionId: string, answer: boolean) => {
    setAnswers(prev => ({ ...prev, [questionId]: answer }))
  }

  const getScore = () => {
    const yesCount = Object.values(answers).filter(answer => answer === true).length
    return yesCount
  }

  const allAnswered = Object.keys(answers).length === questions.length
  const score = getScore()

  return (
    <Section padding="xl" background="accent-blue">
      <Container className="max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Heading level="2" className="velox-text-h2 mb-6">
            Not Sure What to Delegate First? Let's Find Out.
          </Heading>
          <Text className="velox-text-body text-xl text-gray-700 max-w-3xl mx-auto">
            The 4-Question Process Test
          </Text>
        </div>

        {/* Evaluation Tool */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-4 sm:p-6 md:p-8">
            {/* Questions */}
            <div className="space-y-8 mb-8">
              {questions.map((question, index) => {
                const IconComponent = question.icon
                const answer = answers[question.id]
                
                return (
                  <div key={question.id} className="space-y-4">
                    {/* Question */}
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-5 h-5 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <Heading level="4" className="text-lg font-semibold text-gray-900 mb-2">
                          {index + 1}. {question.question}
                        </Heading>
                        <Text className="text-gray-600 text-sm">
                          {question.description}
                        </Text>
                      </div>
                    </div>

                    {/* Answer Buttons */}
                    <div className="flex gap-4 ml-14">
                      <button
                        onClick={() => handleAnswer(question.id, true)}
                        className={`
                          flex items-center gap-2 px-6 py-3 rounded-lg border-2 transition-all duration-300
                          ${answer === true 
                            ? 'bg-green-50 border-green-500 text-green-800' 
                            : 'bg-gray-50 border-gray-200 text-gray-700 hover:border-green-300'
                          }
                        `}
                      >
                        <CheckCircle className={`w-5 h-5 ${answer === true ? 'text-green-600' : 'text-gray-400'}`} />
                        <span className="font-medium">Yes</span>
                      </button>
                      
                      <button
                        onClick={() => handleAnswer(question.id, false)}
                        className={`
                          flex items-center gap-2 px-6 py-3 rounded-lg border-2 transition-all duration-300
                          ${answer === false 
                            ? 'bg-red-50 border-red-500 text-red-800' 
                            : 'bg-gray-50 border-gray-200 text-gray-700 hover:border-red-300'
                          }
                        `}
                      >
                        <X className={`w-5 h-5 ${answer === false ? 'text-red-600' : 'text-gray-400'}`} />
                        <span className="font-medium">No</span>
                      </button>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Results */}
            {allAnswered && (
              <div className="pt-8 border-t border-gray-200">
                <div className="text-center">
                  {/* Score Display */}
                  <div className="mb-6">
                    <div className={`
                      inline-flex items-center justify-center w-20 h-20 rounded-full text-3xl font-bold mb-4
                      ${score >= 3 ? 'bg-green-100 text-green-600' : 'bg-orange-100 text-orange-600'}
                    `}>
                      {score}/4
                    </div>
                    <Text className="text-lg font-semibold text-gray-900">
                      Your Process Score
                    </Text>
                  </div>

                  {/* Score Interpretation */}
                  {score >= 3 ? (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
                      <Heading level="4" className="text-xl font-bold text-green-900 mb-3">
                        🎉 Perfect for Service-as-Software!
                      </Heading>
                      <Text className="text-green-800 mb-4">
                        Score 3-4 "Yes" answers? Your process is perfect for Service-as-Software. 
                        You could see significant time savings and cost reductions.
                      </Text>
                      <Button
                        size="lg"
                        className="velox-cta-primary text-base md:text-lg font-semibold px-4 sm:px-6 md:px-8 py-3 md:py-4 h-auto rounded-xl"
                        asChild
                      >
                        <Link href="/tools/business-audit">
                          Evaluate My Process Now
                        </Link>
                      </Button>
                    </div>
                  ) : (
                    <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 mb-6">
                      <Heading level="4" className="text-xl font-bold text-orange-900 mb-3">
                        Might Need Some Adjustments
                      </Heading>
                      <Text className="text-orange-800 mb-4">
                        Your process might benefit from some refinement before automation. 
                        Let's discuss how to optimize it for better results.
                      </Text>
                      <Button
                        size="lg"
                        className="velox-cta-secondary text-base md:text-lg font-semibold px-4 sm:px-6 md:px-8 py-3 md:py-4 h-auto rounded-xl"
                        asChild
                      >
                        <Link href="/tools/business-audit">
                          Discuss My Process
                        </Link>
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Message */}
        <div className="text-center mt-12">
          <Text className="text-gray-600 max-w-2xl mx-auto">
            This is just a quick assessment. Even if your process doesn't score perfectly, 
            we often find ways to optimize and automate parts of it for significant value.
          </Text>
        </div>
      </Container>
    </Section>
  )
}
