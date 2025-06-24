"use client"

import { useState } from "react"
import Link from "next/link"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"
import { Button } from "@/components/ui/button"
import { 
  CheckCircle, 
  X, 
  HelpCircle, 
  Target, 
  Clock, 
  Zap, 
  Shield, 
  ArrowRight, 
  Trophy,
  TrendingUp,
  BarChart3,
  Circle
} from "lucide-react"

const questions = [
  {
    id: "explainable",
    question: "Can you train someone to do this process?",
    description: "If you can explain it step-by-step, we can automate it perfectly.",
    icon: HelpCircle,
    color: "bg-blue-600",
    lightColor: "bg-blue-50",
    textColor: "text-blue-700"
  },
  {
    id: "regular",
    question: "Does this happen at least weekly?",
    description: "Regular, predictable work is ideal for Service-as-Software.",
    icon: Clock,
    color: "bg-purple-600",
    lightColor: "bg-purple-50",
    textColor: "text-purple-700"
  },
  {
    id: "rules",
    question: "Does it follow consistent steps or rules?",
    description: "Even complex rules work - we just need consistency.",
    icon: Target,
    color: "bg-indigo-600",
    lightColor: "bg-indigo-50",
    textColor: "text-indigo-700"
  },
  {
    id: "time",
    question: "Is your team spending 5+ hours per week on this?",
    description: "Enough volume to generate meaningful time savings.",
    icon: Zap,
    color: "bg-green-600",
    lightColor: "bg-green-50",
    textColor: "text-green-700"
  },
  {
    id: "impact",
    question: "Would automating this free your team for strategic work?",
    description: "The best automations unlock your team's highest-value activities.",
    icon: Shield,
    color: "bg-orange-500",
    lightColor: "bg-orange-50",
    textColor: "text-orange-700"
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

  const answeredCount = Object.keys(answers).length
  const allAnswered = answeredCount === questions.length
  const score = getScore()

  const getScoreMessage = () => {
    if (score >= 4) return { message: "Excellent Automation Candidate", color: "green", icon: Trophy }
    if (score === 3) return { message: "Good Potential with Refinement", color: "blue", icon: TrendingUp }
    return { message: "Needs More Structure", color: "yellow", icon: Target }
  }

  return (
    <Section 
      padding="xl" 
      background="white"
      className="relative overflow-hidden"
    >
      {/* Clean Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-white to-gray-50/20" />
      
      <Container className="relative z-10 max-w-4xl">
        {/* Section Header */}
        <div className="text-center mb-12 animate-on-scroll" data-animation="fadeInUp">
          <Heading level="2" className="velox-text-h2 mb-6" style={{ lineHeight: '1.2' }}>
            Not Sure What to Delegate First?{" "}
            <span className="text-gradient">Let's Find Out.</span>
          </Heading>
          <Text className="velox-text-lead max-w-3xl mx-auto text-gray-600 mb-8">
            The 5-Question Automation Readiness Assessment
          </Text>
          
          {/* Enhanced Progress Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="flex items-center justify-between mb-3">
              <Text className="text-sm font-semibold text-gray-700">
                Progress
              </Text>
              <Text className="text-sm font-semibold text-blue-600">
                {answeredCount}/5 Complete
              </Text>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4 shadow-inner">
              <div 
                className="bg-gradient-to-r from-blue-500 to-blue-600 h-4 rounded-full transition-all duration-700 ease-out shadow-sm"
                style={{ width: `${(answeredCount / questions.length) * 100}%` }}
              />
            </div>
          </div>
        </div>

        {/* Single Column Question Cards */}
        <div className="space-y-6 mb-12">
          {questions.map((question, index) => {
            const IconComponent = question.icon
            const answer = answers[question.id]
            const isAnswered = answer !== undefined
            
            return (
              <div
                key={question.id}
                className={`card-elevated transition-all duration-300 ${
                  isAnswered ? 'ring-2 ring-blue-200 bg-blue-50/30' : 'hover:transform hover:-translate-y-1'
                } animate-on-scroll`}
                data-animation="fadeInUp"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="p-8">
                  {/* Question Header */}
                  <div className="flex items-start gap-6 mb-8">
                    <div className={`w-16 h-16 ${question.color} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <Heading level="3" className="text-2xl font-bold text-gray-900">
                          {question.question}
                        </Heading>
                        <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm font-semibold rounded-full">
                          {index + 1}/5
                        </span>
                      </div>
                      <Text className="text-lg text-gray-600 leading-relaxed">
                        {question.description}
                      </Text>
                    </div>
                  </div>
                  
                  {/* Premium Toggle Buttons */}
                  <div className="flex gap-4 max-w-md">
                    <button
                      onClick={() => handleAnswer(question.id, true)}
                      className={`flex-1 flex items-center justify-center gap-3 py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 ${
                        answer === true
                          ? 'bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg transform -translate-y-1 scale-105'
                          : 'border-3 border-gray-300 text-gray-700 hover:border-green-400 hover:bg-green-50 hover:text-green-700 hover:transform hover:-translate-y-0.5'
                      }`}
                    >
                      <CheckCircle className="w-6 h-6" />
                      Yes
                    </button>
                    
                    <button
                      onClick={() => handleAnswer(question.id, false)}
                      className={`flex-1 flex items-center justify-center gap-3 py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 ${
                        answer === false
                          ? 'bg-gradient-to-r from-gray-500 to-gray-600 text-white shadow-lg transform -translate-y-1 scale-105'
                          : 'border-3 border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50 hover:text-gray-800 hover:transform hover:-translate-y-0.5'
                      }`}
                    >
                      <X className="w-6 h-6" />
                      No
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Results Section */}
        {answeredCount > 0 && (
          <div className="text-center animate-on-scroll" data-animation="fadeInUp">
            <div className="card-elevated bg-gradient-to-br from-blue-50 to-white border-2 border-blue-100 p-8 max-w-2xl mx-auto">
              {/* Live Score Display */}
              <div className="mb-8">
                <div className="text-5xl font-bold text-blue-600 mb-2">{score}/5</div>
                <Text className="text-xl font-semibold text-gray-700 mb-4">
                  Current Automation Readiness Score
                </Text>
                
                {/* Score Visualization */}
                <div className="flex justify-center gap-2 mb-6">
                  {Array.from({ length: 5 }, (_, i) => (
                    <div
                      key={i}
                      className={`w-4 h-4 rounded-full transition-all duration-300 ${
                        i < score 
                          ? 'bg-blue-500 shadow-md' 
                          : 'bg-gray-200'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Results Message */}
              {allAnswered && (
                <div className={`p-6 rounded-xl border-2 text-center mb-8 ${
                  score >= 4 ? 'bg-green-50 border-green-200' :
                  score === 3 ? 'bg-blue-50 border-blue-200' :
                  'bg-yellow-50 border-yellow-200'
                }`}>
                  <div className="flex items-center justify-center mb-4">
                    {score >= 4 && <Trophy className="w-8 h-8 text-green-600 mr-3" />}
                    {score === 3 && <TrendingUp className="w-8 h-8 text-blue-600 mr-3" />}
                    {score <= 2 && <Target className="w-8 h-8 text-yellow-600 mr-3" />}
                    <Heading level="3" className={`text-2xl font-bold ${
                      score >= 4 ? 'text-green-800' :
                      score === 3 ? 'text-blue-800' :
                      'text-yellow-800'
                    }`}>
                      {getScoreMessage().message}
                    </Heading>
                  </div>
                  <Text className={`text-lg ${
                    score >= 4 ? 'text-green-700' :
                    score === 3 ? 'text-blue-700' :
                    'text-yellow-700'
                  }`}>
                    {score >= 4 && "This process is ideal for Service-as-Software. You're likely to see significant ROI within months."}
                    {score === 3 && "This process shows strong potential. A few adjustments could make it perfect for automation."}
                    {score <= 2 && "This process needs more structure before automation. Let's explore other opportunities in your business."}
                  </Text>
                </div>
              )}

              {/* CTA Button */}
              {allAnswered ? (
                <Button
                  size="lg"
                  className={`text-white shadow-xl hover:shadow-2xl transition-all duration-300 px-12 py-4 text-lg font-bold ${
                    score >= 4 ? 'bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800' :
                    score === 3 ? 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800' :
                    'bg-gradient-to-r from-yellow-600 to-yellow-700 hover:from-yellow-700 hover:to-yellow-800'
                  }`}
                  asChild
                >
                  <Link href="/tools/business-audit">
                    {score >= 4 && "Get Your Detailed ROI Analysis"}
                    {score === 3 && "Explore Your Automation Options"}
                    {score <= 2 && "Find Better Opportunities"}
                    <ArrowRight className="w-6 h-6 ml-3" />
                  </Link>
                </Button>
              ) : (
                <div className="text-center">
                  <div className="flex items-center justify-center mb-4">
                    <BarChart3 className="w-8 h-8 text-blue-600 mr-3" />
                    <Heading level="3" className="text-2xl font-bold text-blue-800">
                      Keep Going!
                    </Heading>
                  </div>
                  <Text className="text-lg text-blue-700 mb-6">
                    Answer all questions to see your complete automation readiness score
                  </Text>
                  <div className="flex justify-center gap-2">
                    {questions.map((_, index) => (
                      <Circle 
                        key={index} 
                        className={`w-3 h-3 ${
                          index < answeredCount ? 'text-blue-500 fill-current' : 'text-gray-300'
                        }`} 
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </Container>
    </Section>
  )
}