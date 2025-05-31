"use client"

import { motion } from "framer-motion"
import { Progress } from "@/components/ui/progress"
import { Text } from "@/components/ui/typography"
import { QuizPhase } from "@/types/audit-tool"

interface ProgressTrackerProps {
  currentStep: number
  totalSteps: number
  showBonus?: boolean
  // New phase-based props
  phases?: QuizPhase[]
  currentPhase?: string
  currentPhaseStep?: number
  totalPhaseSteps?: number
}

export function ProgressTracker({
  currentStep,
  totalSteps,
  showBonus,
  phases,
  currentPhase,
  currentPhaseStep,
  totalPhaseSteps
}: ProgressTrackerProps) {
  const progress = (currentStep / totalSteps) * 100

  // If we have phase information, show phase-based progress
  if (phases && currentPhase) {
    return <PhaseBasedProgress
      phases={phases}
      currentPhase={currentPhase}
      currentPhaseStep={currentPhaseStep || 1}
      totalPhaseSteps={totalPhaseSteps || 1}
    />
  }

  // Fallback to original linear progress
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <Text className="text-sm font-medium">
          Question {currentStep} of {totalSteps}
          {showBonus && currentStep > 12 && (
            <span className="text-primary ml-1">(Bonus)</span>
          )}
        </Text>
        <Text className="text-sm text-muted-foreground">
          {Math.round(progress)}% complete
        </Text>
      </div>
      <Progress value={progress} className="h-2" />
    </div>
  )
}

interface PhaseBasedProgressProps {
  phases: QuizPhase[]
  currentPhase: string
  currentPhaseStep: number
  totalPhaseSteps: number
}

function PhaseBasedProgress({ phases, currentPhase, currentPhaseStep, totalPhaseSteps }: PhaseBasedProgressProps) {
  const currentPhaseIndex = phases.findIndex(phase => phase.id === currentPhase)
  const currentPhaseData = phases[currentPhaseIndex]

  if (!currentPhaseData) return null

  const overallProgress = ((currentPhaseIndex + (currentPhaseStep / totalPhaseSteps)) / phases.length) * 100

  return (
    <div className="space-y-6">
      {/* Enhanced Progress Header */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-4 text-center sm:text-left">
          <Text className="velox-text-h3 text-blue-900 font-bold">
            {currentPhaseData.title}
          </Text>
          <span className="text-sm font-medium text-blue-700 bg-blue-100 px-3 py-1 rounded-full">
            Step {currentPhaseStep} of {totalPhaseSteps}
          </span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 bg-blue-600 rounded-full animate-pulse" />
          <Text className="velox-text-body font-semibold text-blue-900">
            {Math.round(overallProgress)}% Complete
          </Text>
        </div>
      </div>

      {/* Enhanced Progress Bar */}
      <div className="relative h-3 bg-gray-200 rounded-full overflow-hidden shadow-inner">
        <motion.div
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-600 to-blue-800 rounded-full shadow-sm"
          initial={{ width: 0 }}
          animate={{ width: `${overallProgress}%` }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </div>

      {/* Enhanced Phase Indicators */}
      <div className="flex justify-center items-center gap-3">
        {phases.map((phase, index) => {
          const isCompleted = index < currentPhaseIndex
          const isCurrent = index === currentPhaseIndex

          return (
            <div key={phase.id} className="flex items-center">
              <motion.div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shadow-md ${
                  isCompleted
                    ? 'bg-blue-600 text-white'
                    : isCurrent
                    ? 'bg-blue-800 text-white ring-2 ring-blue-300'
                    : 'bg-gray-200 text-gray-500'
                }`}
                initial={{ scale: 0.8 }}
                animate={{ scale: isCurrent ? 1.1 : 1 }}
                transition={{ duration: 0.3 }}
              >
                {index + 1}
              </motion.div>
              {index < phases.length - 1 && (
                <div className={`w-12 h-1 mx-2 rounded-full transition-colors duration-300 ${
                  isCompleted ? 'bg-blue-600' : 'bg-gray-200'
                }`} />
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
