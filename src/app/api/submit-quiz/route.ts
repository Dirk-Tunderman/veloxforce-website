import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { QuizSubmission, ServiceQuizSubmission } from '@/types/audit-tool'
import { questionMapper } from '@/lib/quiz-question-mapper'

// Initialize Supabase client
const supabase = createClient(
  process.env.SUPABASE_URL || '',
  process.env.SUPABASE_KEY || ''
)

export async function POST(request: NextRequest) {
  try {
    // Check if environment variables are available
    if (!process.env.SUPABASE_URL || !process.env.SUPABASE_KEY) {
      return NextResponse.json(
        { success: false, error: 'Database configuration missing' },
        { status: 500 }
      )
    }

    // Log question mapper statistics for debugging
    console.log(`Question mapper loaded with ${questionMapper.getTotalQuestionCount()} questions`)

    const submission: QuizSubmission | ServiceQuizSubmission = await request.json()
    
    // Determine if this is the new service quiz or legacy quiz
    const isServiceQuiz = 'departmentRoute' in submission

    // Validate required fields based on quiz type
    if (isServiceQuiz) {
      const serviceSubmission = submission as ServiceQuizSubmission
      if (!serviceSubmission.contactDetails.business_email || !serviceSubmission.departmentRoute) {
        return NextResponse.json(
          { success: false, error: 'Missing required fields' },
          { status: 400 }
        )
      }
    } else {
      const legacySubmission = submission as QuizSubmission
      if (!legacySubmission.contactDetails.email || !legacySubmission.quizAnswers.q1_processDescription) {
        return NextResponse.json(
          { success: false, error: 'Missing required fields' },
          { status: 400 }
        )
      }
    }

    // Prepare client data based on quiz type
    let clientData
    if (isServiceQuiz) {
      const serviceSubmission = submission as ServiceQuizSubmission
      clientData = {
        email: serviceSubmission.contactDetails.business_email,
        phone_number: serviceSubmission.contactDetails.phone_number,
        name: serviceSubmission.contactDetails.full_name,
        company_name: serviceSubmission.contactDetails.company_name,
        website: serviceSubmission.contactDetails.website,
        updated_at: new Date().toISOString()
      }
    } else {
      const legacySubmission = submission as QuizSubmission
      clientData = {
        email: legacySubmission.contactDetails.email,
        phone_number: legacySubmission.contactDetails.phoneNumber,
        name: legacySubmission.contactDetails.fullName,
        company_name: legacySubmission.contactDetails.companyName,
        updated_at: new Date().toISOString()
      }
    }

    // Start transaction
    const { data: client, error: clientError } = await supabase
      .from('audit_clients')
      .upsert(clientData, {
        onConflict: 'email',
        ignoreDuplicates: false
      })
      .select('id')
      .single()

    if (clientError) {
      console.error('Client upsert error:', clientError)
      return NextResponse.json(
        { success: false, error: 'Failed to save client data', details: clientError.message },
        { status: 500 }
      )
    }

    // Prepare quiz submission data based on quiz type
    let submissionData
    if (isServiceQuiz) {
      const serviceSubmission = submission as ServiceQuizSubmission
      submissionData = {
        client_id: client.id,
        process_name_input: serviceSubmission.departmentRoute,
        selected_process_type: serviceSubmission.departmentRoute,
        calculated_score: serviceSubmission.summary.calculatedScore,
        result_category: 'Service Quiz',
        ai_analysis_status: 'pending',
        department_route: serviceSubmission.departmentRoute
      }
    } else {
      const legacySubmission = submission as QuizSubmission
      submissionData = {
        client_id: client.id,
        process_name_input: legacySubmission.quizAnswers.q1_processDescription,
        selected_process_type: legacySubmission.quizAnswers.q1_selectedProcess,
        calculated_score: legacySubmission.summary.calculatedScore,
        result_category: legacySubmission.summary.resultCategory,
        ai_analysis_status: 'pending'
      }
    }

    // Create quiz submission
    const { data: quizSubmission, error: submissionError } = await supabase
      .from('audit_quiz_submissions')
      .insert(submissionData)
      .select('id')
      .single()

    if (submissionError) {
      console.error('Quiz submission error:', submissionError)
      return NextResponse.json(
        { success: false, error: 'Failed to save quiz submission' },
        { status: 500 }
      )
    }

    // Create quiz answers with enhanced question text mapping
    const answersToInsert = Object.entries(submission.quizAnswers).map(([questionId, answerValue]) => {
      const questionText = questionMapper.getQuestionText(questionId)
      
      // Log mapping status for debugging
      if (!questionText) {
        console.warn(`Question text not found for ID: ${questionId}`)
      }
      
      return {
        submission_id: quizSubmission.id,
        question_id: questionId,
        question_text: questionText || `Unknown question: ${questionId}`,
        answer_value: Array.isArray(answerValue) ? JSON.stringify(answerValue) : String(answerValue)
      }
    })

    // Log submission details for debugging
    if (isServiceQuiz) {
      const serviceSubmission = submission as ServiceQuizSubmission
      console.log(`Service quiz submission for department: ${serviceSubmission.departmentRoute}`)
      console.log(`Questions being stored: ${answersToInsert.length}`)
      console.log(`Question IDs: ${answersToInsert.map(a => a.question_id).join(', ')}`)
    }

    const { error: answersError } = await supabase
      .from('audit_quiz_answers')
      .insert(answersToInsert)

    if (answersError) {
      console.error('Quiz answers error:', answersError)
      return NextResponse.json(
        { success: false, error: 'Failed to save quiz answers' },
        { status: 500 }
      )
    }

    // TODO: Trigger AI agent analysis
    // This would be implemented based on your AI agent API
    // For now, we'll just mark as processing
    await supabase
      .from('audit_quiz_submissions')
      .update({ ai_analysis_status: 'processing' })
      .eq('id', quizSubmission.id)

    // Create enriched response with question text for client-side debugging
    const enrichedAnswers = questionMapper.enrichAnswersWithQuestionText(submission.quizAnswers)

    return NextResponse.json({
      success: true,
      submissionId: quizSubmission.id,
      questionsProcessed: answersToInsert.length,
      // Include enriched answers in development mode for debugging
      ...(process.env.NODE_ENV === 'development' && { 
        enrichedAnswers,
        debug: {
          totalQuestionsInMapper: questionMapper.getTotalQuestionCount(),
          departmentRoute: isServiceQuiz ? (submission as ServiceQuizSubmission).departmentRoute : 'legacy'
        }
      })
    })

  } catch (error) {
    console.error('Quiz submission error:', error)
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    )
  }
}
