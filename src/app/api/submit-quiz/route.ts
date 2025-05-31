import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { QuizSubmission } from '@/types/audit-tool'

// Initialize Supabase client
const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_KEY!
)

export async function POST(request: NextRequest) {
  try {
    const submission: QuizSubmission = await request.json()

    // Validate required fields
    if (!submission.contactDetails.email || !submission.quizAnswers.q1_processDescription) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Start transaction
    const { data: client, error: clientError } = await supabase
      .from('audit_clients')
      .upsert({
        email: submission.contactDetails.email,
        phone_number: submission.contactDetails.phoneNumber,
        name: submission.contactDetails.name,
        company_name: submission.contactDetails.companyName,
        updated_at: new Date().toISOString()
      }, {
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

    // Create quiz submission
    const { data: quizSubmission, error: submissionError } = await supabase
      .from('audit_quiz_submissions')
      .insert({
        client_id: client.id,
        process_name_input: submission.quizAnswers.q1_processDescription,
        selected_process_type: submission.quizAnswers.q1_selectedProcess,
        calculated_score: submission.summary.calculatedScore,
        result_category: submission.summary.resultCategory,
        ai_analysis_status: 'pending'
      })
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
