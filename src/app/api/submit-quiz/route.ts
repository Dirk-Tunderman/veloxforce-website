import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { QuizSubmission, ServiceQuizSubmission } from '@/types/audit-tool'

// Initialize Supabase client
const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_KEY!
)

export async function POST(request: NextRequest) {
  try {
    const submission: QuizSubmission | ServiceQuizSubmission = await request.json()
    
    // Determine if this is the new service quiz or legacy quiz
    const isServiceQuiz = 'departmentRoute' in submission

    // Validate required fields based on quiz type
    if (isServiceQuiz) {
      const serviceSubmission = submission as ServiceQuizSubmission
      if (!serviceSubmission.contactDetails.work_email || !serviceSubmission.departmentRoute) {
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
        email: serviceSubmission.contactDetails.work_email,
        phone_number: serviceSubmission.contactDetails.phone,
        name: `${serviceSubmission.contactDetails.first_name} ${serviceSubmission.contactDetails.last_name}`,
        company_name: serviceSubmission.contactDetails.company_name,
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

    // Create quiz answers
    const answersToInsert = Object.entries(submission.quizAnswers).map(([questionId, answerValue]) => ({
      submission_id: quizSubmission.id,
      question_id: questionId,
      answer_value: Array.isArray(answerValue) ? JSON.stringify(answerValue) : String(answerValue)
    }))

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

    return NextResponse.json({
      success: true,
      submissionId: quizSubmission.id
    })

  } catch (error) {
    console.error('Quiz submission error:', error)
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    )
  }
}
