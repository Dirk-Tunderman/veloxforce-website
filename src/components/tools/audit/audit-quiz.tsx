"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Container } from "@/components/layout/container"
import { Heading, Text } from "@/components/ui/typography"
import { QuestionRenderer } from "./question-renderer"
import { ProgressTracker } from "./progress-tracker"
import { EmailCaptureForm } from "./email-capture-form"
import { ResultsDisplay } from "./results-display"
import { TrustSignals, SocialProof, SecurityBadge, CompletionIndicator } from "@/components/ui/trust-signals"
import { ProgressiveReveal, FloatingElement, CountUp } from "@/components/ui/micro-interactions"
import { QUIZ_QUESTIONS, BONUS_QUESTIONS, QUIZ_PHASES } from "@/config/audit-quiz"
import { QuizAnswers, ContactDetails, QuizSubmission, QuizPhase } from "@/types/audit-tool"
import { generateResultsData } from "@/lib/audit-scoring"
import { BarChart3, Target, Euro, Calendar, Lightbulb, CheckCircle } from "lucide-react"

type QuizStep = 'intro' | 'phases' | 'email' | 'results'

export function AuditQuiz() {
  const [currentStep, setCurrentStep] = useState<QuizStep>('intro')

  // Phase-based state
  const [currentPhaseIndex, setCurrentPhaseIndex] = useState(0)
  const [currentQuestionInPhase, setCurrentQuestionInPhase] = useState(0)
  const [answers, setAnswers] = useState<Partial<QuizAnswers>>({})
  const [contactDetails, setContactDetails] = useState<ContactDetails | null>(null)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Auto-save state
  const [lastSaved, setLastSaved] = useState<Date | null>(null)

  // Get current phase and question
  const currentPhase = QUIZ_PHASES[currentPhaseIndex]
  const currentQuestion = currentPhase?.questions?.[currentQuestionInPhase]
  const isLastQuestionInPhase = currentQuestionInPhase === (currentPhase?.questions?.length || 1) - 1
  const isLastPhase = currentPhaseIndex === QUIZ_PHASES.length - 1
  const processName = answers.q1_processDescription || ""

  // Calculate total progress
  const totalQuestionsCompleted = QUIZ_PHASES.slice(0, currentPhaseIndex).reduce((acc, phase) =>
    acc + (phase.questions?.length || 0), 0) + currentQuestionInPhase
  const totalQuestions = QUIZ_PHASES.reduce((acc, phase) => acc + (phase.questions?.length || 0), 0)

  // Track quiz start
  useEffect(() => {
    if (currentStep === 'phases' && currentPhaseIndex === 0 && currentQuestionInPhase === 0) {
      // trackEvent('quiz_started', {
      //   tool: 'audit_quiz',
      //   location: 'business_audit_page'
      // })
    }
  }, [currentStep, currentPhaseIndex, currentQuestionInPhase])

  // Auto-save progress
  useEffect(() => {
    if (Object.keys(answers).length > 0) {
      const saveProgress = () => {
        localStorage.setItem('veloxforce_audit_progress', JSON.stringify({
          currentPhaseIndex,
          currentQuestionInPhase,
          answers,
          timestamp: new Date().toISOString()
        }))
        setLastSaved(new Date())
      }

      const timeoutId = setTimeout(saveProgress, 1000) // Auto-save after 1 second of inactivity
      return () => clearTimeout(timeoutId)
    }
  }, [answers, currentPhaseIndex, currentQuestionInPhase])

  // Load saved progress on mount
  useEffect(() => {
    const savedProgress = localStorage.getItem('veloxforce_audit_progress')
    if (savedProgress) {
      try {
        const { currentPhaseIndex: savedPhase, currentQuestionInPhase: savedQuestion, answers: savedAnswers, timestamp } = JSON.parse(savedProgress)

        // Only restore if saved within last 24 hours
        const savedTime = new Date(timestamp)
        const now = new Date()
        const hoursDiff = (now.getTime() - savedTime.getTime()) / (1000 * 60 * 60)

        if (hoursDiff < 24) {
          setCurrentPhaseIndex(savedPhase)
          setCurrentQuestionInPhase(savedQuestion)
          setAnswers(savedAnswers)
          setCurrentStep('phases')
        }
      } catch (error) {
        console.error('Error loading saved progress:', error)
      }
    }
  }, [])

  const validateCurrentQuestion = (): boolean => {
    if (!currentQuestion) return true

    const value = answers[currentQuestion.id as keyof QuizAnswers]

    if (currentQuestion.required && (!value || (Array.isArray(value) && value.length === 0))) {
      setErrors({ [currentQuestion.id]: 'This question is required' })
      return false
    }

    setErrors({})
    return true
  }

  const handleAnswerChange = (questionId: string, value: any) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value
    }))

    // Clear error when user provides answer
    if (errors[questionId]) {
      setErrors(prev => {
        const newErrors = { ...prev }
        delete newErrors[questionId]
        return newErrors
      })
    }
  }

  const handleNext = () => {
    if (!validateCurrentQuestion()) return

    // Track question completion
    // trackEvent('quiz_question_completed', {
    //   question_id: currentQuestion?.id,
    //   phase: currentPhase?.id,
    //   question_number: currentQuestionInPhase + 1,
    //   answer: currentQuestion ? answers[currentQuestion.id as keyof QuizAnswers] : null
    // })

    if (isLastQuestionInPhase) {
      if (isLastPhase) {
        // All phases completed, move to email capture
        setCurrentStep('email')
        // trackEvent('quiz_completed', {
        //   total_phases: QUIZ_PHASES.length,
        //   total_questions: totalQuestions
        // })
      } else {
        // Move to next phase
        setCurrentPhaseIndex(prev => prev + 1)
        setCurrentQuestionInPhase(0)

        // trackEvent('phase_completed', {
        //   phase_id: currentPhase?.id,
        //   phase_number: currentPhaseIndex + 1
        // })
      }
    } else {
      // Move to next question in current phase
      setCurrentQuestionInPhase(prev => prev + 1)
    }
  }

  const handlePrevious = () => {
    if (currentQuestionInPhase > 0) {
      // Go to previous question in current phase
      setCurrentQuestionInPhase(prev => prev - 1)
    } else if (currentPhaseIndex > 0) {
      // Go to last question of previous phase
      const previousPhase = QUIZ_PHASES[currentPhaseIndex - 1]
      setCurrentPhaseIndex(prev => prev - 1)
      setCurrentQuestionInPhase((previousPhase.questions?.length || 1) - 1)
    }
  }

  // Real-time calculation handler
  const handleRealTimeCalculation = (calculation: any) => {
    // This could be used to update a global calculation state
    // For now, we'll just log it
    console.log('Real-time calculation:', calculation)
  }

  const handleEmailSubmit = async (details: ContactDetails) => {
    setIsSubmitting(true)
    setContactDetails(details)

    try {
      // Calculate results
      const results = generateResultsData(answers as QuizAnswers)

      // Prepare submission data
      const submission: QuizSubmission = {
        contactDetails: details,
        quizAnswers: answers as QuizAnswers,
        summary: {
          processName: results.processName,
          calculatedScore: results.score.total,
          resultCategory: results.category
        }
      }

      // Submit to backend
      const response = await fetch('/api/submit-quiz', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(submission)
      })

      if (!response.ok) {
        throw new Error('Submission failed')
      }

      // Send email with audit results
      const emailResponse = await fetch('/api/send-audit-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: details.email,
          name: details.fullName,
          companyName: details.companyName,
          auditResults: {
            processName: results.processName,
            calculatedScore: results.score.total,
            resultCategory: results.category,
            estimatedSavings: {
              timePerWeek: results.hoursFreed || 0,
              costPerWeek: Math.round((results.estimatedMonthlyCost || 0) / 4.33),
              annualSavings: (results.potentialSavings || 0) * 12
            },
            recommendations: [],
            nextSteps: []
          }
        })
      })

      if (!emailResponse.ok) {
        console.error('Email sending failed, but continuing...')
      }

      // Track successful submission
      // trackEvent('quiz_submitted', {
      //   email: details.email,
      //   score: results.score.total,
      //   category: results.category,
      //   process_name: results.processName
      // })

      setCurrentStep('results')
    } catch (error) {
      console.error('Quiz submission error:', error)
      // For now, still show results even if submission fails
      setCurrentStep('results')
    } finally {
      setIsSubmitting(false)
    }
  }

  const startQuiz = () => {
    setCurrentStep('phases')
    // trackEvent('quiz_intro_completed', {
    //   location: 'business_audit_page'
    // })
  }

  const clearProgress = () => {
    localStorage.removeItem('veloxforce_audit_progress')
    setCurrentPhaseIndex(0)
    setCurrentQuestionInPhase(0)
    setAnswers({})
    setCurrentStep('intro')
  }

  const renderIntro = () => (
    <div className="text-center space-y-12 max-w-5xl mx-auto">
      {/* Hero Section with Enhanced Typography */}
      <ProgressiveReveal delay={0.3}>
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            <Heading level="1" className="velox-text-h1 text-center mx-auto max-w-4xl">
              Discover Your Process Automation Potential
            </Heading>
            <Text className="velox-text-lead text-center mx-auto max-w-3xl">
              Is your business process costing more than it should? Find out in 8 minutes.
            </Text>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap justify-center items-center gap-6"
          >
            <CompletionIndicator completedCount={1247} />
            <SecurityBadge />
          </motion.div>
        </div>

        {/* Social Proof Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="velox-card-advantage p-8"
        >
          <div className="text-center w-full flex justify-center">
            <Text className="velox-text-h3 text-blue-900 mb-6">Trusted by 1,000+ businesses</Text>
          </div>
          <SocialProof />
        </motion.div>
      </ProgressiveReveal>

      {/* Analysis Features */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-xl p-8 space-y-6"
      >
        <div className="text-center w-full flex justify-center">
          <Text className="velox-text-h3 text-blue-900">This assessment analyzes:</Text>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left max-w-3xl mx-auto">
          {[
            "Hidden costs in your current process",
            "Automation feasibility and ROI",
            "Implementation complexity",
            "Payback timeline"
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
              className="flex items-center gap-3"
            >
              <div className="w-3 h-3 bg-blue-600 rounded-full flex-shrink-0" />
              <Text className="velox-text-body font-medium text-blue-800">{item}</Text>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Benefits Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.0 }}
        className="bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-xl p-8 space-y-6"
      >
        <div className="text-center w-full flex justify-center">
          <Text className="velox-text-h3 text-green-900">You'll receive:</Text>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left max-w-3xl mx-auto">
          {[
            { icon: BarChart3, text: "Detailed cost analysis" },
            { icon: Target, text: "Custom automation roadmap" },
            { icon: Euro, text: "ROI projections" },
            { icon: Calendar, text: "Implementation timeline" }
          ].map((item, index) => {
            const IconComponent = item.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 1.1 + index * 0.1 }}
                className="flex items-center gap-4 bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <IconComponent className="h-6 w-6 text-blue-600 transition-all duration-200 flex-shrink-0" />
                <Text className="velox-text-body font-medium text-green-800">{item.text}</Text>
              </motion.div>
            )
          })}
        </div>
      </motion.div>

      {/* How it Works */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="space-y-8"
      >
        <div className="text-center w-full flex justify-center">
          <Text className="velox-text-h3 text-blue-900">How it works:</Text>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            {
              step: "1",
              title: "Answer 10-12 questions about your process",
              subtitle: "(8 min)",
              color: "bg-gray-700"
            },
            {
              step: "2",
              title: "Our AI analyzes your specific situation",
              subtitle: "Instant analysis",
              color: "bg-blue-600"
            },
            {
              step: "3",
              title: "Receive personalized report via email",
              subtitle: "No sales pitch",
              color: "bg-gray-700"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.3 + index * 0.2 }}
              className="text-center space-y-4"
            >
              <div className={`w-16 h-16 ${item.color} rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto shadow-lg`}>
                {item.step}
              </div>
              <div className="space-y-2">
                <Text className="velox-text-body font-semibold text-gray-800 leading-relaxed">{item.title}</Text>
                <Text className="text-sm text-gray-600 font-medium">{item.subtitle}</Text>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Important Notice */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1.5 }}
        className="bg-gradient-to-r from-orange-50 to-yellow-50 border border-orange-200 rounded-xl p-6 max-w-3xl mx-auto"
      >
        <div className="flex items-start gap-4 text-center">
          <Lightbulb className="h-6 w-6 text-gray-700 transition-all duration-200 mt-1 flex-shrink-0" />
          <div className="flex-1">
            <Text className="velox-text-body text-orange-800 font-medium text-center">
              <strong>Important:</strong> The quality of your analysis depends on the detail you provide.
              Specific answers = actionable insights.
            </Text>
          </div>
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.7 }}
        className="space-y-8 text-center"
      >
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Button
            size="lg"
            onClick={startQuiz}
            className="velox-cta-primary px-12 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            Start Assessment →
          </Button>
        </motion.div>

        <TrustSignals variant="compact" className="justify-center" />
      </motion.div>
    </div>
  )

  const renderPhases = () => {
    if (!currentQuestion) return null

    return (
      <div className="max-w-5xl mx-auto">
        {/* Enhanced Quiz Container */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
          {/* Progress Header with Veloxforce Styling */}
          <div className="velox-card-advantage p-6 border-b border-blue-200">
            <ProgressTracker
              currentStep={totalQuestionsCompleted + 1}
              totalSteps={totalQuestions}
              phases={QUIZ_PHASES}
              currentPhase={currentPhase?.id}
              currentPhaseStep={currentQuestionInPhase + 1}
              totalPhaseSteps={currentPhase?.questions?.length || 1}
            />
          </div>

          {/* Auto-save indicator */}
          {lastSaved && (
            <div className="bg-green-50 border-b border-green-200 px-6 py-2 text-center">
              <div className="flex items-center justify-center gap-1">
                <CheckCircle className="h-3 w-3 text-blue-600 transition-all duration-200" />
                <Text className="text-xs text-green-700">
                  Progress automatically saved {lastSaved.toLocaleTimeString()}
                </Text>
              </div>
            </div>
          )}

          {/* Question Section with Enhanced Styling */}
          <div className="px-8 py-12 md:px-12 md:py-16 bg-gradient-to-br from-white to-blue-50/30">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${currentPhaseIndex}-${currentQuestionInPhase}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="max-w-4xl mx-auto"
              >
                <QuestionRenderer
                  question={currentQuestion}
                  value={answers[currentQuestion.id as keyof QuizAnswers]}
                  onChange={(value) => handleAnswerChange(currentQuestion.id, value)}
                  processName={processName}
                  error={errors[currentQuestion.id]}
                  allAnswers={answers}
                  onRealTimeCalculation={handleRealTimeCalculation}
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Phase completion celebration */}
          {isLastQuestionInPhase && !isLastPhase && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-green-50 border-t border-green-200 px-6 py-4 text-center"
            >
              <div className="flex items-center justify-center gap-2">
                <CheckCircle className="h-5 w-5 text-blue-600 transition-all duration-200" />
                <Text className="text-green-800 font-medium">
                  {currentPhase?.title} Complete! Moving to {QUIZ_PHASES[currentPhaseIndex + 1]?.title}
                </Text>
              </div>
            </motion.div>
          )}

          {/* Enhanced Navigation Footer */}
          <div className="bg-gradient-to-r from-gray-50 to-blue-50/50 border-t border-gray-200 px-8 py-8">
            <div className="flex flex-col sm:flex-row gap-6 justify-between items-center max-w-4xl mx-auto">
              <Button
                variant="outline"
                onClick={handlePrevious}
                disabled={currentPhaseIndex === 0 && currentQuestionInPhase === 0}
                className="flex items-center gap-2 w-full sm:w-auto order-2 sm:order-1 px-6 py-3 border-2 hover:bg-gray-50 transition-all duration-200"
              >
                <ChevronLeft className="h-4 w-4 text-gray-700 transition-all duration-200" />
                Previous
              </Button>

              <div className="text-center order-1 sm:order-2">
                <Text className="velox-text-body font-medium text-gray-700">
                  Question {currentQuestionInPhase + 1} of {currentPhase?.questions?.length || 1}
                </Text>
              </div>

              <Button
                onClick={handleNext}
                className="velox-cta-primary flex items-center gap-2 w-full sm:w-auto px-8 py-3 order-3 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {isLastQuestionInPhase && isLastPhase ? 'Get My Results' : 'Continue'}
                <ChevronRight className="h-4 w-4 text-white transition-all duration-200" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const renderResults = () => {
    if (!contactDetails || !answers.q1_processDescription) return null

    const results = generateResultsData(answers as QuizAnswers)
    return <ResultsDisplay results={results} />
  }

  return (
    <Container className="py-12">
      {currentStep === 'intro' && renderIntro()}
      {currentStep === 'phases' && renderPhases()}
      {currentStep === 'email' && (
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <Heading level="2" className="text-2xl mb-4">
              Your Process Automation Analysis is Being Prepared
            </Heading>
            <Text className="text-muted-foreground">
              Based on your inputs, our AI is analyzing cost reduction opportunities,
              automation feasibility, and ROI projections specific to your situation.
            </Text>
          </div>
          <EmailCaptureForm
            onSubmit={handleEmailSubmit}
            isLoading={isSubmitting}
            quizAnswers={answers}
          />
        </div>
      )}
      {currentStep === 'results' && renderResults()}

      {/* Debug info in development */}
      {process.env.NODE_ENV === 'development' && (
        <div className="fixed bottom-4 right-4 bg-black text-white p-2 rounded text-xs">
          Phase: {currentPhaseIndex + 1}/{QUIZ_PHASES.length} |
          Question: {currentQuestionInPhase + 1}/{currentPhase?.questions?.length || 0} |
          Total: {totalQuestionsCompleted + 1}/{totalQuestions}
        </div>
      )}
    </Container>
  )
}
