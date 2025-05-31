import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
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

    // Send email to the user's actual email address
    // NOTE: This requires domain verification in Resend
    const { data, error } = await resend.emails.send({
      from: 'Veloxforce <noreply@notifications.veloxforce.ai>',
      to: [email], // Send to the user's email address
      subject: 'Your Business Automation Analysis Results',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h1 style="color: #1A365D;">Your Business Automation Analysis is Ready!</h1>
          <p>Thank you for completing our Business Automation Audit.</p>
          <p>We've analyzed your business process and identified significant opportunities for automation and efficiency improvements.</p>

          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1A365D; margin: 0 0 10px 0;">What's Next?</h3>
            <p style="margin: 0;">Your detailed ROI analysis and automation recommendations are being prepared. Our team will reach out within 24 hours with your personalized report.</p>
          </div>

          <p>In the meantime, feel free to <a href="https://veloxforce.ai/contact" style="color: #0D9488;">schedule a consultation</a> to discuss your automation opportunities.</p>

          <hr style="margin: 20px 0;">
          <p style="color: #666; font-size: 14px;">© 2024 Veloxforce. All rights reserved.</p>
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
