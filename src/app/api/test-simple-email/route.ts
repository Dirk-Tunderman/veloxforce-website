import { NextRequest, NextResponse } from 'next/server'
import { emailService } from '@/lib/email-service'

export async function POST(request: NextRequest) {
  try {
    const { email, companyName } = await request.json()

    if (!email) {
      return NextResponse.json(
        { success: false, error: 'Email is required' },
        { status: 400 }
      )
    }

    console.log('Testing simple email delivery to:', email)
    console.log('Company name:', companyName || 'Test Company')

    // Test simple email without attachment
    const result = await emailService.sendSimpleTestEmail(
      email, 
      companyName || 'Test Company'
    )

    if (!result.success) {
      console.error('Simple email test failed:', result.error)
      return NextResponse.json(
        { success: false, error: result.error },
        { status: 500 }
      )
    }

    console.log('Simple email sent successfully:', result.emailId)

    return NextResponse.json({
      success: true,
      emailId: result.emailId,
      message: 'Simple test email sent successfully'
    })

  } catch (error) {
    console.error('Simple email test API error:', error)
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    )
  }
}
