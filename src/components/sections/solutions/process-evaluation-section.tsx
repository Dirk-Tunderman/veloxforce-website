"use client"

import { useState } from "react"
import Link from "next/link"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"
import { Button } from "@/components/ui/button"
import { CheckCircle, X, HelpCircle, Target, Clock, Zap, Shield, ArrowRight, Trophy } from "lucide-react"

const questions = [
  {
    id: "explainable",
    question: "Can you train someone to do this process?",
    description: "If you can explain it step-by-step, we can automate it perfectly.",
    icon: HelpCircle,
    color: "blue"
  },
  {
    id: "regular",
    question: "Does this happen at least weekly?",
    description: "Regular, predictable work is ideal for Service-as-Software.",
    icon: Clock,
    color: "blue"
  },
  {
    id: "rules",
    question: "Does it follow consistent steps or rules?",
    description: "Even complex rules work - we just need consistency.",
    icon: Target,
    color: "blue"
  },
  {
    id: "time",
    question: "Is your team spending 5+ hours per week on this?",
    description: "Enough volume to generate meaningful time savings.",
    icon: Zap,
    color: "blue"
  },
  {
    id: "impact",
    question: "Would automating this free your team for strategic work?",
    description: "The best automations unlock your team's highest-value activities.",
    icon: Shield,
    color: "blue"
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
    <Section 
      padding="xl" 
      background="light-blue"
      className="relative overflow-hidden"
    >
      {/* Simplified Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-blue-100/60 to-blue-50/40" />
      
      <Container className="relative z-10 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll" data-animation="fadeInUp">
          <Heading level="2" className="velox-text-h2 mb-6" style={{ lineHeight: '1.3' }}>
            Not Sure What to Delegate First?{" "}
            <span className="text-gradient">
              Let's Find Out.
            </span>
          </Heading>
          <Text className="velox-text-lead max-w-3xl mx-auto text-gray-700">
            The 5-Question Automation Readiness Assessment
          </Text>
        </div>

        {/* Evaluation Tool */}
        <div className="max-w-5xl mx-auto">
          {/* Questions Grid */}
          <div className="grid gap-6 mb-12">
            {questions.map((question, index) => {
              const IconComponent = question.icon
              const answer = answers[question.id]
              
              return (
                <div
                  key={question.id}
                  className="card-elevated bg-white/95 backdrop-blur animate-on-scroll"
                  data-animation="fadeInUp"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="icon-container flex-shrink-0">
                        <IconComponent className="w-6 h-6 icon-accent" />
                      </div>
                      <div className="flex-1">
                        <Heading level="3" className="velox-text-h4 mb-2">
                          {question.question}
                        </Heading>
                        <Text className="velox-text-body text-gray-600">
                          {question.description}
                        </Text>
                      </div>
                    </div>
                    
                    {/* Answer Buttons */}
                    <div className="flex gap-3 justify-end">
                      <button
                        onClick={() => handleAnswer(question.id, true)}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all duration-200 ${
                          answer === true
                            ? 'bg-green-100 text-green-800 border-2 border-green-300'
                            : 'bg-gray-100 text-gray-700 border-2 border-transparent hover:bg-green-50 hover:text-green-700'
                        }`}
                      >
                        <CheckCircle className="w-4 h-4" />
                        Yes
                      </button>
                      
                      <button
                        onClick={() => handleAnswer(question.id, false)}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all duration-200 ${
                          answer === false
                            ? 'bg-red-100 text-red-800 border-2 border-red-300'
                            : 'bg-gray-100 text-gray-700 border-2 border-transparent hover:bg-red-50 hover:text-red-700'
                        }`}
                      >
                        <X className="w-4 h-4" />
                        No
                      </button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Results Section */}
          {allAnswered && (
            <div className="text-center animate-on-scroll" data-animation="fadeInUp">
              <div className="card-solution p-8 bg-white/95 backdrop-blur">
                <div className="mb-6">
                  <div className="text-6xl font-bold text-blue-600 mb-2">
                    {score}/5
                  </div>
                  <Text className="velox-text-h4 mb-4 text-center">
                    Automation Readiness Score
                  </Text>
                </div>

                {score >= 4 && (
                  <div className="space-y-4">
                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-center">
                      <div className="flex items-center justify-center mb-2">
                        <Trophy className="w-5 h-5 text-green-600 mr-2" />
                        <Text className="font-semibold text-green-800">
                          Excellent Automation Candidate
                        </Text>
                      </div>
                      <Text className="text-green-700 text-center">
                        This process is ideal for Service-as-Software. You're likely to see significant time savings and ROI within months.
                      </Text>
                    </div>
                    <div className="flex justify-center">
                      <Button
                        size="lg"
                        className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-10 py-4 rounded-xl"
                        asChild
                      >
                        <Link href="/tools/business-audit">
                          Get Your ROI Analysis
                          <ArrowRight className="w-5 h-5 ml-2" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                )}

                {score === 3 && (
                  <div className="space-y-4">
                    <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg text-center">
                      <div className="flex items-center justify-center mb-2">
                        <Zap className="w-5 h-5 text-blue-600 mr-2" />
                        <Text className="font-semibold text-blue-800">
                          Good Potential with Refinement
                        </Text>
                      </div>
                      <Text className="text-blue-700 text-center">
                        This process shows promise. A few adjustments could make it perfect for automation.
                      </Text>
                    </div>
                    <div className="flex justify-center">
                      <Button
                        size="lg"
                        className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-10 py-4 rounded-xl"
                        asChild
                      >
                        <Link href="/tools/business-audit">
                          Explore Your Options
                          <ArrowRight className="w-5 h-5 ml-2" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                )}

                {score <= 2 && (
                  <div className="space-y-4">
                    <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg text-center">
                      <div className="flex items-center justify-center mb-2">
                        <Target className="w-5 h-5 text-yellow-600 mr-2" />
                        <Text className="font-semibold text-yellow-800">
                          Needs More Structure
                        </Text>
                      </div>
                      <Text className="text-yellow-700 text-center">
                        This process might need more definition before automation. Let's explore other opportunities in your business.
                      </Text>
                    </div>
                    <div className="flex justify-center">
                      <Button
                        size="lg"
                        className="bg-gradient-to-r from-yellow-600 to-yellow-700 hover:from-yellow-700 hover:to-yellow-800 text-white px-10 py-4 rounded-xl"
                        asChild
                      >
                        <Link href="/tools/business-audit">
                          Find Better Opportunities
                          <ArrowRight className="w-5 h-5 ml-2" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {!allAnswered && (
            <div className="text-center">
              <Text className="text-gray-600">
                Answer all questions to see your automation readiness score
              </Text>
            </div>
          )}
        </div>
      </Container>
    </Section>
  )
}