import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY || '')

export async function POST(request: NextRequest) {
  try {
    // Check if environment variables are available
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { success: false, error: 'Email service configuration missing' },
        { status: 500 }
      )
    }

    const { email } = await request.json()

    if (!email) {
      return NextResponse.json(
        { success: false, error: 'Email is required' },
        { status: 400 }
      )
    }

    console.log('Sending test email to:', email)
    console.log('Resend API Key exists:', !!process.env.RESEND_API_KEY)
    console.log('Resend API Key length:', process.env.RESEND_API_KEY?.length)

    // Test multiple email configurations to identify the issue
    console.log('Testing email delivery with different configurations...')

    // Test 1: Try with Resend's default domain first
    console.log('Test 1: Using Resend default domain...')
    let testResult = await resend.emails.send({
      from: 'onboarding@resend.dev', // Resend's verified domain
      to: [email],
      subject: 'VeloxForce Email Test #1 - Default Domain',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h1 style="color: #1A365D;">Email Delivery Test #1</h1>
          <p><strong>Test:</strong> Using Resend's default domain (onboarding@resend.dev)</p>
          <p><strong>Time:</strong> ${new Date().toISOString()}</p>
          <p>If you receive this email, the basic Resend functionality is working.</p>
        </div>
      `,
    })

    if (testResult.error) {
      console.error('Test 1 failed:', testResult.error)
    } else {
      console.log('Test 1 success:', testResult.data?.id)
    }

    // Test 2: Try with custom domain
    console.log('Test 2: Using custom domain...')
    const { data, error } = await resend.emails.send({
      from: 'Veloxforce <noreply@notifications.veloxforce.ai>',
      to: [email],
      subject: 'VeloxForce Email Test #2 - Custom Domain',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h1 style="color: #1A365D;">Email Delivery Test #2</h1>
          <p><strong>Test:</strong> Using custom domain (notifications.veloxforce.ai)</p>
          <p><strong>Time:</strong> ${new Date().toISOString()}</p>
          <p>If you receive this email, the custom domain is properly configured.</p>

          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1A365D; margin: 0 0 10px 0;">Domain Status Check</h3>
            <p style="margin: 0;">This test helps verify if the custom domain is properly verified in Resend.</p>
          </div>

          <p>If you only receive Test #1 but not this one, the custom domain needs verification.</p>
        </div>
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { success: false, error: 'Failed to send email', details: error },
        { status: 500 }
      )
    }

    console.log('Email sent successfully:', data)

    return NextResponse.json({
      success: true,
      emailId: data?.id,
      message: 'Test email sent successfully'
    })

  } catch (error) {
    console.error('Test email API error:', error)
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    )
  }
}
