import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

interface EmailRequest {
  email: string
  name?: string
  companyName?: string
  auditResults: {
    processName: string
    calculatedScore: number
    resultCategory: string
    estimatedSavings: {
      timePerWeek: number
      costPerWeek: number
      annualSavings: number
    }
    recommendations: string[]
    nextSteps: string[]
  }
}

export async function POST(request: NextRequest) {
  try {
    const body: EmailRequest = await request.json()

    if (!body.email || !body.auditResults) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const { email, name, companyName, auditResults } = body

    // Create email content
    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Your Business Automation ROI Analysis</title>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #1A365D; color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
            .content { background: #f8f9fa; padding: 30px; border-radius: 0 0 8px 8px; }
            .metric { background: white; padding: 20px; margin: 15px 0; border-radius: 8px; border-left: 4px solid #0D9488; }
            .metric h3 { margin: 0 0 10px 0; color: #1A365D; }
            .metric .value { font-size: 24px; font-weight: bold; color: #0D9488; }
            .recommendations { background: white; padding: 20px; margin: 15px 0; border-radius: 8px; }
            .recommendations ul { margin: 10px 0; padding-left: 20px; }
            .cta { background: #0D9488; color: white; padding: 20px; text-align: center; border-radius: 8px; margin: 20px 0; }
            .cta a { color: white; text-decoration: none; font-weight: bold; }
            .footer { text-align: center; margin-top: 30px; color: #666; font-size: 14px; }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>Your Business Automation ROI Analysis</h1>
            <p>Process: ${auditResults.processName}</p>
          </div>

          <div class="content">
            ${name ? `<p>Hi ${name},</p>` : '<p>Hello,</p>'}

            <p>Thank you for completing our Business Automation Audit. Based on your responses, we've analyzed your <strong>${auditResults.processName}</strong> process and identified significant opportunities for improvement.</p>

            <div class="metric">
              <h3>Automation Readiness Score</h3>
              <div class="value">${auditResults.calculatedScore}/12</div>
              <p>Category: <strong>${auditResults.resultCategory}</strong></p>
            </div>

            <div class="metric">
              <h3>Estimated Weekly Time Savings</h3>
              <div class="value">${auditResults.estimatedSavings.timePerWeek} hours</div>
              <p>Time you could redirect to strategic activities</p>
            </div>

            <div class="metric">
              <h3>Estimated Weekly Cost Savings</h3>
              <div class="value">$${auditResults.estimatedSavings.costPerWeek.toLocaleString()}</div>
              <p>Based on operational efficiency improvements</p>
            </div>

            <div class="metric">
              <h3>Projected Annual Savings</h3>
              <div class="value">$${auditResults.estimatedSavings.annualSavings.toLocaleString()}</div>
              <p>Total potential savings from automation</p>
            </div>

            <div class="recommendations">
              <h3>Key Recommendations</h3>
              <ul>
                ${auditResults.recommendations.map(rec => `<li>${rec}</li>`).join('')}
              </ul>
            </div>

            <div class="recommendations">
              <h3>Suggested Next Steps</h3>
              <ul>
                ${auditResults.nextSteps.map(step => `<li>${step}</li>`).join('')}
              </ul>
            </div>

            <div class="cta">
              <h3>Ready to Transform Your Operations?</h3>
              <p>Let's discuss how Veloxforce can help you achieve these savings and more.</p>
              <a href="https://veloxforce.ai/contact" style="background: white; color: #0D9488; padding: 12px 24px; border-radius: 6px; text-decoration: none; display: inline-block; margin-top: 10px;">Schedule a Free Consultation</a>
            </div>

            <p>This analysis is based on your specific inputs and industry benchmarks. Actual results may vary depending on implementation approach and business factors.</p>
          </div>

          <div class="footer">
            <p>© 2024 Veloxforce. All rights reserved.</p>
            <p>You received this email because you completed our Business Automation Audit.</p>
          </div>
        </body>
      </html>
    `

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Veloxforce <noreply@notifications.veloxforce.ai>',
      to: [email],
      subject: `Your Business Automation ROI Analysis - ${auditResults.processName}`,
      html: emailHtml,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { success: false, error: 'Failed to send email' },
        { status: 500 }
      )
    }

    return NextResponse.json({
      success: true,
      emailId: data?.id,
      message: 'Audit results sent successfully'
    })

  } catch (error) {
    console.error('Email API error:', error)
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    )
  }
}
