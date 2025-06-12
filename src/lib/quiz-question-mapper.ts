import { 
  SERVICE_QUIZ_PHASES,
  SALES_ROUTE_PHASES, 
  FINANCE_ROUTE_PHASES, 
  CUSTOMER_SERVICE_ROUTE_PHASES, 
  OPERATIONS_ROUTE_PHASES, 
  MARKETING_ROUTE_PHASES, 
  HR_ROUTE_PHASES, 
  FINAL_QUESTIONS 
} from '@/config/service-quiz'
import { Question, QuizPhase } from '@/types/audit-tool'

/**
 * Maps question IDs to their full question text and metadata
 * Supports all department routes and common questions
 */
export class QuizQuestionMapper {
  private questionMap: Map<string, { text: string; department?: string; phase?: string }> = new Map()

  constructor() {
    this.buildQuestionMap()
  }

  /**
   * Builds a comprehensive map of all questions across all routes
   */
  private buildQuestionMap(): void {
    // Opening phase questions (common to all routes) - first 5 questions from SERVICE_QUIZ_PHASES
    this.addPhaseQuestions(SERVICE_QUIZ_PHASES.slice(0, 1), 'common', 'opening')

    // Department-specific questions
    this.addPhaseQuestions(SALES_ROUTE_PHASES, 'sales')
    this.addPhaseQuestions(FINANCE_ROUTE_PHASES, 'finance') 
    this.addPhaseQuestions(CUSTOMER_SERVICE_ROUTE_PHASES, 'customer_service')
    this.addPhaseQuestions(OPERATIONS_ROUTE_PHASES, 'operations')
    this.addPhaseQuestions(MARKETING_ROUTE_PHASES, 'marketing')
    this.addPhaseQuestions(HR_ROUTE_PHASES, 'hr')

    // Final questions (common to all routes)
    this.addPhaseQuestions(FINAL_QUESTIONS, 'common', 'final')
  }

  /**
   * Adds questions from a set of phases to the question map
   */
  private addPhaseQuestions(phases: QuizPhase[], department: string, phaseType?: string): void {
    phases.forEach(phase => {
      if (phase.questions) {
        phase.questions.forEach(question => {
          this.questionMap.set(question.id, {
            text: question.title,
            department,
            phase: phaseType || phase.id
          })
        })
      }
    })
  }

  /**
   * Gets the full question text for a given question ID
   */
  getQuestionText(questionId: string): string | null {
    const questionData = this.questionMap.get(questionId)
    return questionData?.text || null
  }

  /**
   * Gets complete question metadata for a given question ID
   */
  getQuestionMetadata(questionId: string): { text: string; department?: string; phase?: string } | null {
    return this.questionMap.get(questionId) || null
  }

  /**
   * Gets all question mappings (useful for debugging)
   */
  getAllQuestions(): Map<string, { text: string; department?: string; phase?: string }> {
    return this.questionMap
  }

  /**
   * Validates that a question ID exists in the mapping
   */
  isValidQuestionId(questionId: string): boolean {
    return this.questionMap.has(questionId)
  }

  /**
   * Gets questions by department
   */
  getQuestionsByDepartment(department: string): Array<{ id: string; text: string; phase?: string }> {
    const questions: Array<{ id: string; text: string; phase?: string }> = []
    
    for (const [id, data] of this.questionMap.entries()) {
      if (data.department === department) {
        questions.push({
          id,
          text: data.text,
          phase: data.phase
        })
      }
    }
    
    return questions
  }

  /**
   * Gets the total number of questions mapped
   */
  getTotalQuestionCount(): number {
    return this.questionMap.size
  }

  /**
   * Transforms answers object to include question text
   */
  enrichAnswersWithQuestionText(answers: Record<string, any>): Record<string, any> {
    const enrichedAnswers: Record<string, any> = {}

    for (const [questionId, answerValue] of Object.entries(answers)) {
      const questionData = this.getQuestionMetadata(questionId)
      
      if (questionData) {
        enrichedAnswers[questionId] = {
          question_id: questionId,
          question_text: questionData.text,
          answer: answerValue,
          department: questionData.department,
          phase: questionData.phase
        }
      } else {
        // Fallback for unknown question IDs (shouldn't happen but good to handle)
        enrichedAnswers[questionId] = {
          question_id: questionId,
          question_text: `Unknown question: ${questionId}`,
          answer: answerValue,
          department: 'unknown',
          phase: 'unknown'
        }
      }
    }

    return enrichedAnswers
  }
}

// Create singleton instance for reuse
export const questionMapper = new QuizQuestionMapper()

// Export utility functions for direct use
export function getQuestionText(questionId: string): string | null {
  return questionMapper.getQuestionText(questionId)
}

export function enrichAnswers(answers: Record<string, any>): Record<string, any> {
  return questionMapper.enrichAnswersWithQuestionText(answers)
}

export function validateQuestionId(questionId: string): boolean {
  return questionMapper.isValidQuestionId(questionId)
}