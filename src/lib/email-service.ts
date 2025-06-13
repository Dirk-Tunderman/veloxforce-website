import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export interface EmailReportData {
  companyName: string
  contactName: string
  contactEmail: string
  website?: string
  departmentFocus: string
  businessReportContent: string
  pdfBuffer: Buffer
}

export class EmailService {
  /**
   * Send business analysis report via email with PDF attachment
   */
  async sendBusinessAnalysisReport(reportData: EmailReportData): Promise<{ success: boolean; emailId?: string; error?: string }> {
    try {
      // Create professional email template
      const emailTemplate = this.createBusinessReportEmailTemplate(reportData)
      
      // Send email with PDF attachment
      const { data, error } = await resend.emails.send({
        from: 'VeloxForce Business Intelligence <reports@notifications.veloxforce.ai>',
        to: [reportData.contactEmail],
        subject: `Your Business Automation Analysis Report - ${reportData.companyName}`,
        html: emailTemplate,
        attachments: [
          {
            content: reportData.pdfBuffer.toString('base64'),
            filename: `${this.sanitizeFilename(reportData.companyName)}-Business-Analysis-Report.pdf`
          }
        ],
        headers: {
          'X-Priority': '1',
          'X-MSMail-Priority': 'High'
        }
      })

      if (error) {
        console.error('Resend email error:', error)
        return {
          success: false,
          error: error.message || 'Failed to send email'
        }
      }

      return {
        success: true,
        emailId: data?.id
      }

    } catch (error) {
      console.error('Email service error:', error)
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown email error'
      }
    }
  }

  /**
   * Send follow-up email for report generation errors
   */
  async sendErrorNotification(contactEmail: string, companyName: string, errorDetails: string): Promise<void> {
    try {
      await resend.emails.send({
        from: 'VeloxForce Support <support@notifications.veloxforce.ai>',
        to: [contactEmail],
        subject: `Report Generation Issue - ${companyName}`,
        html: this.createErrorNotificationTemplate(companyName, errorDetails),
        headers: {
          'X-Priority': '3'
        }
      })
    } catch (error) {
      console.error('Error sending error notification:', error)
    }
  }

  /**
   * Create the main business report email template
   */
  private createBusinessReportEmailTemplate(reportData: EmailReportData): string {
    const { companyName, contactName, departmentFocus, businessReportContent } = reportData
    
    // Extract preview from the report content (first few sentences)
    const reportPreview = businessReportContent.substring(0, 500) + '...'

    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Business Analysis Report</title>
    <style>
        body {
            font-family: 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
        }
        .header {
            background: linear-gradient(135deg, #0A2A4F 0%, #2563EB 100%);
            color: white;
            padding: 30px;
            text-align: center;
            border-radius: 8px 8px 0 0;
        }
        .header h1 {
            margin: 0;
            font-size: 28px;
            font-weight: 300;
        }
        .header .tagline {
            margin: 10px 0 0 0;
            font-size: 14px;
            opacity: 0.9;
        }
        .content {
            background: #ffffff;
            padding: 30px;
            border: 1px solid #e1e5e9;
            border-top: none;
        }
        .greeting {
            font-size: 18px;
            margin-bottom: 20px;
            color: #0A2A4F;
        }
        .highlight-box {
            background: #f8f9fa;
            border-left: 4px solid #2563EB;
            padding: 20px;
            margin: 20px 0;
            border-radius: 0 4px 4px 0;
        }
        .insight {
            background: #e3f2fd;
            padding: 15px;
            border-radius: 6px;
            margin: 15px 0;
        }
        .insight-title {
            font-weight: bold;
            color: #0A2A4F;
            margin-bottom: 8px;
        }
        .savings-highlight {
            background: linear-gradient(135deg, #4caf50 0%, #45a049 100%);
            color: white;
            padding: 20px;
            text-align: center;
            border-radius: 6px;
            margin: 20px 0;
        }
        .savings-amount {
            font-size: 32px;
            font-weight: bold;
            margin: 10px 0;
        }
        .cta-button {
            display: inline-block;
            background: #2563EB;
            color: white;
            padding: 15px 30px;
            text-decoration: none;
            border-radius: 6px;
            font-weight: bold;
            margin: 20px 0;
            text-align: center;
        }
        .footer {
            background: #0A2A4F;
            color: white;
            padding: 20px 30px;
            text-align: center;
            border-radius: 0 0 8px 8px;
            font-size: 14px;
        }
        .footer a {
            color: #18A0FB;
            text-decoration: none;
        }
        .attachment-notice {
            background: #fff3cd;
            border: 1px solid #ffeaa7;
            padding: 15px;
            border-radius: 6px;
            margin: 20px 0;
            text-align: center;
        }
        .attachment-icon {
            font-size: 24px;
            margin-bottom: 10px;
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>VeloxForce</h1>
        <p class="tagline">Service-as-Software Solutions</p>
    </div>
    
    <div class="content">
        <div class="greeting">
            Hello ${contactName},
        </div>
        
        <p>Thank you for completing our business automation assessment. We've analyzed ${companyName}'s operations and identified significant opportunities to optimize your ${departmentFocus} processes.</p>
        
        <div class="attachment-notice">
            <div class="attachment-icon">📄</div>
            <strong>Your detailed analysis report is attached as a PDF</strong><br>
            This comprehensive report contains our complete findings and recommendations.
        </div>
        
        <div class="highlight-box">
            <h3 style="color: #0A2A4F; margin-top: 0;">Report Preview</h3>
            <p>${reportPreview}</p>
        </div>
        
        <div class="savings-highlight">
            <div>Your Personalized Business Analysis</div>
            <div class="savings-amount">${Math.round(businessReportContent.length / 1000)}K</div>
            <div>Characters of detailed analysis and recommendations</div>
        </div>
        
        <h3 style="color: #0A2A4F;">What's Inside Your Report:</h3>
        <ul>
            <li><strong>Executive Summary</strong> - Overview of findings and recommendations</li>
            <li><strong>Current State Analysis</strong> - Assessment of your business model and challenges</li>
            <li><strong>Automation Opportunities</strong> - Specific areas for process improvement</li>
            <li><strong>ROI Projections</strong> - Financial impact and investment analysis</li>
            <li><strong>Implementation Roadmap</strong> - Step-by-step transformation plan</li>
            <li><strong>Next Steps</strong> - Actionable recommendations to get started</li>
        </ul>
        
        <div style="text-align: center; margin: 30px 0;">
            <a href="https://veloxforce.ai/contact" class="cta-button">Schedule Your Strategy Session</a>
        </div>
        
        <p>Our team is ready to discuss these findings with you and explore how VeloxForce can help implement these automation solutions. We specialize in "Service-as-Software" - meaning we don't just build and hand over solutions, we operate them for you ongoing.</p>
        
        <p><strong>Ready to discuss your automation roadmap?</strong><br>
        Reply to this email or schedule a call at your convenience.</p>
        
        <p>Best regards,<br>
        <strong>The VeloxForce Team</strong><br>
        Business Automation Specialists</p>
    </div>
    
    <div class="footer">
        <p><strong>VeloxForce</strong> | Service-as-Software Solutions</p>
        <p>
            <a href="https://veloxforce.ai">veloxforce.ai</a> | 
            <a href="mailto:hello@veloxforce.ai">hello@veloxforce.ai</a>
        </p>
        <p style="font-size: 12px; opacity: 0.8; margin-top: 15px;">
            This analysis was generated using our AI-powered business intelligence platform.<br>
            The recommendations are based on industry best practices and your specific business context.
        </p>
    </div>
</body>
</html>
    `.trim()
  }

  /**
   * Create error notification email template
   */
  private createErrorNotificationTemplate(companyName: string, errorDetails: string): string {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Report Generation Update</title>
    <style>
        body {
            font-family: 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
        }
        .header {
            background: #0A2A4F;
            color: white;
            padding: 20px;
            text-align: center;
            border-radius: 8px 8px 0 0;
        }
        .content {
            background: #ffffff;
            padding: 30px;
            border: 1px solid #e1e5e9;
            border-top: none;
            border-bottom: none;
        }
        .footer {
            background: #f8f9fa;
            padding: 20px;
            text-align: center;
            border: 1px solid #e1e5e9;
            border-radius: 0 0 8px 8px;
            font-size: 14px;
        }
        .notice-box {
            background: #fff3cd;
            border: 1px solid #ffeaa7;
            padding: 20px;
            border-radius: 6px;
            margin: 20px 0;
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>VeloxForce</h1>
        <p>Service-as-Software Solutions</p>
    </div>
    
    <div class="content">
        <h2>Report Generation Update</h2>
        <p>Hello,</p>
        
        <div class="notice-box">
            <p><strong>We encountered an issue generating your business analysis report for ${companyName}.</strong></p>
            <p>Our technical team has been notified and is working to resolve this issue. We'll send your complete analysis report within the next 24 hours.</p>
        </div>
        
        <p>In the meantime, if you have any questions about our automation solutions or would like to schedule a consultation, please don't hesitate to reach out.</p>
        
        <p>We apologize for any inconvenience and appreciate your patience.</p>
        
        <p>Best regards,<br>
        <strong>The VeloxForce Team</strong></p>
    </div>
    
    <div class="footer">
        <p><strong>VeloxForce</strong> | <a href="https://veloxforce.ai">veloxforce.ai</a> | <a href="mailto:hello@veloxforce.ai">hello@veloxforce.ai</a></p>
    </div>
</body>
</html>
    `.trim()
  }

  /**
   * Sanitize filename for attachment
   */
  private sanitizeFilename(filename: string): string {
    return filename
      .replace(/[^a-zA-Z0-9-_]/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '')
      .substring(0, 50)
  }
}

// Export singleton instance
export const emailService = new EmailService()

// Helper function for easy use
export async function sendBusinessReport(reportData: EmailReportData) {
  return await emailService.sendBusinessAnalysisReport(reportData)
}