"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"
import { Button } from "@/components/ui/button"
import { CheckCircle, X, HelpCircle, Target, Clock, Zap, Shield } from "lucide-react"

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
      background="accent-blue"
      className="relative overflow-hidden"
    >
      {/* Premium Background Effects */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
      <div className="absolute inset-0 noise-overlay" />
      
      <Container className="relative z-10 max-w-7xl">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Heading level="2" className="velox-text-h2 mb-6">
            Not Sure What to Delegate First?{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Let's Find Out.
            </span>
          </Heading>
          <Text className="velox-text-lead max-w-3xl mx-auto">
            The 5-Question Automation Readiness Assessment
          </Text>
        </motion.div>

        {/* Evaluation Tool */}
        <motion.div 
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="card-aurora rounded-3xl p-8 elevation-3">
            {/* Questions */}
            <div className="space-y-8 mb-8">
              {questions.map((question, index) => {
                const IconComponent = question.icon
                const answer = answers[question.id]
                
                return (
                  <motion.div 
                    key={question.id} 
                    className="space-y-6"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  >
                    {/* Question */}
                    <div className="flex items-start gap-6">
                      <div className="icon-container-gradient">
                        <IconComponent className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <Heading level="4" className="velox-text-h3 mb-3">
                          {index + 1}. {question.question}
                        </Heading>
                        <Text className="velox-text-body text-gray-600 leading-relaxed">
                          {question.description}
                        </Text>
                      </div>
                    </div>

                    {/* Answer Buttons */}
                    <div className="flex gap-4 ml-20">
                      <motion.button
                        onClick={() => handleAnswer(question.id, true)}
                        className={`
                          flex items-center gap-3 px-8 py-4 rounded-xl border-2 transition-all duration-300 font-semibold
                          ${answer === true 
                            ? 'card-solution text-blue-900 border-blue-300 elevation-2' 
                            : 'card-challenge text-gray-700 border-gray-200 hover:border-blue-300 hover:elevation-1'
                          }
                        `}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <CheckCircle className={`w-6 h-6 ${answer === true ? 'text-blue-600' : 'text-gray-400'}`} />
                        <span>Yes</span>
                      </motion.button>
                      
                      <motion.button
                        onClick={() => handleAnswer(question.id, false)}
                        className={`
                          flex items-center gap-3 px-8 py-4 rounded-xl border-2 transition-all duration-300 font-semibold
                          ${answer === false 
                            ? 'bg-red-50 border-red-300 text-red-800 elevation-1' 
                            : 'card-challenge text-gray-700 border-gray-200 hover:border-red-300 hover:elevation-1'
                          }
                        `}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <X className={`w-6 h-6 ${answer === false ? 'text-red-600' : 'text-gray-400'}`} />
                        <span>No</span>
                      </motion.button>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Results */}
            {allAnswered && (
              <motion.div 
                className="pt-8 border-t border-blue-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <div className="text-center">
                  {/* Score Display */}
                  <motion.div 
                    className="mb-8"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <div className={`
                      inline-flex items-center justify-center w-24 h-24 rounded-full text-4xl font-bold mb-4 elevation-3
                      ${score >= 4 ? 'bg-gradient-to-br from-green-400 to-emerald-500 text-white' : 
                        score >= 3 ? 'bg-gradient-to-br from-blue-400 to-blue-500 text-white' :
                        'bg-gradient-to-br from-orange-400 to-amber-500 text-white'}
                    `}>
                      {score}/5
                    </div>
                    <Text className="velox-text-lead font-semibold text-gray-900">
                      Your Automation Readiness Score
                    </Text>
                  </motion.div>

                  {/* Score Interpretation */}
                  {score >= 4 ? (
                    <motion.div 
                      className="card-solution rounded-2xl p-8 mb-8 elevation-2"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    >
                      <Heading level="4" className="velox-text-h3 text-blue-900 mb-4">
                        🎉 Excellent Automation Candidate!
                      </Heading>
                      <Text className="velox-text-body text-blue-800 mb-6 leading-relaxed">
                        Score 4-5 "Yes" answers? Your process is ideal for Service-as-Software. 
                        You could see 60-80% time savings and significant cost reductions within months.
                      </Text>
                      <Button
                        className="cta-magnetic text-lg font-semibold px-8 py-4 rounded-xl"
                        asChild
                      >
                        <Link href="/tools/business-audit">
                          Get My Custom Analysis
                        </Link>
                      </Button>
                    </motion.div>
                  ) : score >= 3 ? (
                    <motion.div 
                      className="card-aurora rounded-2xl p-8 mb-8 elevation-2"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    >
                      <Heading level="4" className="velox-text-h3 text-blue-900 mb-4">
                        ✅ Good Automation Potential
                      </Heading>
                      <Text className="velox-text-body text-blue-800 mb-6 leading-relaxed">
                        Score 3 "Yes" answers? Your process has solid automation potential. 
                        With some optimization, you could achieve meaningful time and cost savings.
                      </Text>
                      <Button
                        className="cta-magnetic text-lg font-semibold px-8 py-4 rounded-xl"
                        asChild
                      >
                        <Link href="/tools/business-audit">
                          Optimize My Process
                        </Link>
                      </Button>
                    </motion.div>
                  ) : (
                    <motion.div 
                      className="card-challenge rounded-2xl p-8 mb-8 elevation-1"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    >
                      <Heading level="4" className="velox-text-h3 text-gray-900 mb-4">
                        🔧 Let's Refine Your Process
                      </Heading>
                      <Text className="velox-text-body text-gray-700 mb-6 leading-relaxed">
                        Your process might benefit from some refinement before automation.
                        Let's discuss how to optimize it for maximum efficiency and value.
                      </Text>
                      <Button
                        className="bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white font-semibold px-8 py-4 rounded-xl elevation-1 hover:elevation-2 transition-all duration-300"
                        asChild
                      >
                        <Link href="/tools/business-audit">
                          Discuss My Process
                        </Link>
                      </Button>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Enhanced Bottom Message */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="card-aurora rounded-2xl p-8 max-w-4xl mx-auto elevation-2">
            <Text className="velox-text-body text-gray-700 mb-6 leading-relaxed">
              This is just a quick assessment. Even if your process doesn't score perfectly, 
              we often find ways to optimize and automate parts of it for significant value.
            </Text>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                variant="outline"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300"
                asChild
              >
                <Link href="/tools/service-quiz">
                  <HelpCircle className="w-5 h-5 mr-2" />
                  Take Full Service Quiz
                </Link>
              </Button>
              <Text className="text-sm text-gray-500">
                Or explore our complete evaluation process
              </Text>
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  )
}
