"use client"

import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"
import { Clock, FileText, DollarSign, ArrowRight } from "lucide-react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"

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
  const { ref: titleRef, isVisible: titleVisible } = useIntersectionObserver({ threshold: 0.3 })

  return (
    <Section padding="xl" background="white-to-light">
      <Container className="max-w-6xl">
        <div 
          ref={titleRef as any}
          className={`text-center mb-12 transition-all duration-800 ease-out ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="velox-text-h1-premium mb-4">
            Beyond Basic Questions: The Real Indicators
          </h2>
          <p className="velox-text-lead max-w-3xl mx-auto">
            Surface-level questions miss the real opportunity. Here's what actually matters:
          </p>
        </div>

        <div className="space-y-8">
          {assessmentQuestions.map((question, index) => {
            const IconComponent = question.icon
            const { ref: questionRef, isVisible: questionVisible } = useIntersectionObserver({ threshold: 0.2 })
            
            return (
              <div 
                key={index} 
                ref={questionRef as any}
                className={`transition-all duration-1000 ease-out ${
                  questionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Desktop Layout */}
                <div className="hidden lg:grid lg:grid-cols-12 gap-8 items-center">
                  {/* Challenge Card */}
                  <div className="lg:col-span-5">
                    <div className="card-base opacity-90">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="icon-container">
                          <IconComponent className="w-5 h-5 text-gray-700" />
                        </div>
                        <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                          Surface Question
                        </p>
                      </div>
                      <h3 className="velox-text-h3 mb-2">
                        {question.surface}
                      </h3>
                    </div>
                  </div>

                  {/* Transformation Arrow */}
                  <div className="lg:col-span-2 flex justify-center">
                    <div className="transformation-arrow">
                      <ArrowRight className="h-8 w-8 text-white" />
                    </div>
                  </div>

                  {/* Solution Card */}
                  <div className="lg:col-span-5">
                    <div className="card-solution">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="icon-container-gradient">
                          <IconComponent className="w-5 h-5 text-blue-600" />
                        </div>
                        <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
                          Deeper Question
                        </p>
                      </div>
                      <h3 className="velox-text-h3 text-blue-800 mb-4">
                        {question.deeper}
                      </h3>

                      <div className="bg-blue-100 rounded-lg p-4 border border-blue-200">
                        <p className="text-sm font-semibold text-blue-900 mb-2">
                          If your answer includes:
                        </p>
                        <ul className="space-y-2">
                          {question.indicators.map((indicator, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5 flex-shrink-0" />
                              <p className="text-sm text-blue-800">{indicator}</p>
                            </li>
                          ))}
                        </ul>
                        <p className="text-sm font-bold text-blue-900 mt-3">
                          → Strong fit indicator
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mobile Layout */}
                <div className="lg:hidden space-y-6">
                  {/* Surface Question */}
                  <div className="card-base opacity-90">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="icon-container">
                        <IconComponent className="w-5 h-5 text-gray-700" />
                      </div>
                      <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                        Surface Question
                      </p>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {question.surface}
                    </h3>
                  </div>

                  {/* Mobile Transformation Indicator */}
                  <div className="flex justify-center">
                    <div className="flex items-center gap-3 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      <span>But the real question is</span>
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>

                  {/* Deeper Question */}
                  <div className="card-solution">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="icon-container-gradient">
                        <IconComponent className="w-5 h-5 text-blue-600" />
                      </div>
                      <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
                        Deeper Question
                      </p>
                    </div>
                    <h3 className="text-xl font-bold text-blue-800 mb-4">
                      {question.deeper}
                    </h3>

                    <div className="bg-blue-100 rounded-lg p-4 border border-blue-200">
                      <p className="text-sm font-semibold text-blue-900 mb-3">
                        If your answer includes:
                      </p>
                      <ul className="space-y-3">
                        {question.indicators.map((indicator, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                            <p className="text-sm text-blue-800 leading-relaxed">{indicator}</p>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-4 pt-3 border-t border-blue-200">
                        <p className="text-base font-bold text-blue-900">
                          → Strong fit indicator
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-12 card-elevated text-center">
          <h3 className="velox-text-h3 text-blue-900 mb-4">
            The Pattern That Matters
          </h3>
          <p className="velox-text-lead text-blue-800 max-w-3xl mx-auto">
            If you found yourself nodding to the deeper questions, you're experiencing the hidden cost of operational drag. 
            <span className="font-bold"> That's exactly what Service-as-Software solves.</span>
          </p>
        </div>
      </Container>
    </Section>
  )
}