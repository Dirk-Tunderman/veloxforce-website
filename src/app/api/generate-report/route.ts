import { NextRequest, NextResponse } from 'next/server'
import { scrapeWebsiteForAnalysis } from '@/lib/website-scraper'
import { openRouterClient } from '@/lib/openrouter-client'
import { generateBusinessReport } from '@/lib/pdf-generator'
import { sendBusinessReport } from '@/lib/email-service'
import { ServiceQuizSubmission } from '@/types/audit-tool'
import { debugLogger } from '@/lib/debug-logger'

export async function POST(request: NextRequest) {
  try {
    console.log('🚀 Starting report generation process...')

    // Parse the request body
    const submission: ServiceQuizSubmission = await request.json()
    
    const { contactDetails, quizAnswers, departmentRoute } = submission
    
    // Validate required fields
    if (!contactDetails.business_email || !contactDetails.company_name || !contactDetails.website) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields: email, company name, or website' },
        { status: 400 }
      )
    }

    console.log(`📊 Generating report for: ${contactDetails.company_name}`)

    // Initialize debug session for report generation
    let debugSession = null
    try {
      debugSession = await debugLogger.initSession({
        company_name: contactDetails.company_name,
        business_email: contactDetails.business_email
      })
      console.log(`🎯 Report debug session initialized: ${debugSession.sessionId}`)
    } catch (debugError) {
      console.error('Failed to initialize debug session:', debugError)
    }

    // Step 1: Scrape website content
    console.log('🕷️ Step 1: Scraping website content...')
    debugLogger.startTiming('website_scraping')
    let websiteContent
    try {
      websiteContent = await scrapeWebsiteForAnalysis(contactDetails.website)
      console.log(`✅ Website scraped: ${websiteContent.allContent.length} pages analyzed`)
      debugLogger.endTiming('website_scraping')

      // Log website data for debugging
      if (debugSession) {
        try {
          await debugLogger.logWebsiteData(websiteContent)
        } catch (debugError) {
          console.error('Failed to log website data:', debugError)
        }
      }
    } catch (error) {
      console.error('Website scraping failed:', error)
      debugLogger.endTiming('website_scraping', error instanceof Error ? error.message : 'Unknown error')
      
      // Continue with limited analysis if scraping fails
      websiteContent = {
        landingPage: { title: 'Website analysis unavailable', content: '', url: contactDetails.website, headings: [] },
        sitemapAnalysis: { pages: [], totalPages: 0, error: 'Scraping failed' },
        keyPages: { foundPages: [] },
        additionalPages: [],
        allContent: []
      }

      // Log fallback website data
      if (debugSession) {
        try {
          await debugLogger.logWebsiteData(websiteContent)
        } catch (debugError) {
          console.error('Failed to log fallback website data:', debugError)
        }
      }
    }

    // Step 2: Analyze sitemap with Gemini Flash 2.5 (if sitemap available)
    console.log('🧠 Step 2: Analyzing sitemap with Gemini Flash 2.5...')
    debugLogger.startTiming('sitemap_ai_analysis')
    let sitemapAnalysis
    try {
      if (websiteContent.sitemapAnalysis.pages.length > 0) {
        sitemapAnalysis = await openRouterClient.analyzeSitemap({
          sitemap: websiteContent.sitemapAnalysis,
          websiteUrl: contactDetails.website
        }, debugLogger)
        console.log('✅ Sitemap analysis completed')
        debugLogger.endTiming('sitemap_ai_analysis')
      } else {
        console.log('⚠️ No sitemap found, skipping AI analysis')
        sitemapAnalysis = { keyPages: {}, categorizedPages: [], recommendations: [] }
        debugLogger.endTiming('sitemap_ai_analysis', 'No sitemap available')
      }
    } catch (error) {
      console.error('Sitemap analysis failed:', error)
      debugLogger.endTiming('sitemap_ai_analysis', error instanceof Error ? error.message : 'Unknown error')
      sitemapAnalysis = { keyPages: {}, categorizedPages: [], recommendations: [] }
    }

    // Step 3: Perform business analysis with Sonnet 4.0
    console.log('🎯 Step 3: Performing business analysis with Sonnet 4.0...')
    debugLogger.startTiming('business_ai_analysis')
    let businessReportContent
    try {
      businessReportContent = await openRouterClient.analyzeBusinessForReport({
        quizAnswers,
        websiteContent,
        contactDetails,
        departmentRoute
      }, debugLogger)
      console.log(`✅ Business analysis completed - ${businessReportContent.length} characters`)
      debugLogger.endTiming('business_ai_analysis')

      // Log business analysis for debugging
      if (debugSession) {
        try {
          await debugLogger.logBusinessAnalysis({
            reportContent: businessReportContent,
            length: businessReportContent.length,
            preview: businessReportContent.substring(0, 500) + '...'
          })
        } catch (debugError) {
          console.error('Failed to log business analysis:', debugError)
        }
      }
    } catch (error) {
      console.error('Business analysis failed:', error)
      debugLogger.endTiming('business_ai_analysis', error instanceof Error ? error.message : 'Unknown error')
      return NextResponse.json(
        { 
          success: false, 
          error: 'Failed to generate business analysis',
          details: error instanceof Error ? error.message : 'Unknown error'
        },
        { status: 500 }
      )
    }

    // Step 4: Generate PDF report
    console.log('📄 Step 4: Generating PDF report...')
    debugLogger.startTiming('pdf_generation')
    let pdfBuffer
    try {
      const reportData = {
        companyName: contactDetails.company_name,
        contactName: contactDetails.full_name,
        contactEmail: contactDetails.business_email,
        website: contactDetails.website,
        departmentFocus: departmentRoute,
        analysisDate: new Date().toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }),
        businessReportContent
      }
      
      // Log PDF report data for debugging
      if (debugSession) {
        try {
          await debugLogger.logPDFReportData(reportData)
        } catch (debugError) {
          console.error('Failed to log PDF report data:', debugError)
        }
      }
      
      pdfBuffer = await generateBusinessReport(reportData)
      console.log('✅ PDF report generated successfully')
      debugLogger.endTiming('pdf_generation')
    } catch (error) {
      console.error('PDF generation failed:', error)
      debugLogger.endTiming('pdf_generation', error instanceof Error ? error.message : 'Unknown error')
      return NextResponse.json(
        { 
          success: false, 
          error: 'Failed to generate PDF report',
          details: error instanceof Error ? error.message : 'Unknown error'
        },
        { status: 500 }
      )
    }

    // Step 5: Send email with PDF attachment
    console.log('📧 Step 5: Sending email with PDF attachment...')
    debugLogger.startTiming('email_sending')
    try {
      const emailData = {
        companyName: contactDetails.company_name,
        contactName: contactDetails.full_name,
        contactEmail: contactDetails.business_email,
        website: contactDetails.website,
        departmentFocus: departmentRoute,
        businessReportContent,
        pdfBuffer
      }

      // Log email data for debugging
      if (debugSession) {
        try {
          await debugLogger.logEmailData(emailData)
        } catch (debugError) {
          console.error('Failed to log email data:', debugError)
        }
      }

      const emailResult = await sendBusinessReport(emailData)

      if (!emailResult.success) {
        console.error('Email sending failed:', emailResult.error)
        debugLogger.endTiming('email_sending', emailResult.error)
        return NextResponse.json(
          { 
            success: false, 
            error: 'Failed to send email',
            details: emailResult.error
          },
          { status: 500 }
        )
      }

      console.log('✅ Email sent successfully:', emailResult.emailId)
      debugLogger.endTiming('email_sending')
    } catch (error) {
      console.error('Email sending failed:', error)
      debugLogger.endTiming('email_sending', error instanceof Error ? error.message : 'Unknown error')
      return NextResponse.json(
        { 
          success: false, 
          error: 'Failed to send email',
          details: error instanceof Error ? error.message : 'Unknown error'
        },
        { status: 500 }
      )
    }

    console.log('🎉 Report generation completed successfully!')

    // Save debug summary
    if (debugSession) {
      try {
        await debugLogger.saveDebugSummary()
        console.log(`📋 Report debug session completed: ${debugSession.sessionId}`)
      } catch (debugError) {
        console.error('Failed to save debug summary:', debugError)
      }
    }

    // Return success response
    return NextResponse.json({
      success: true,
      message: 'Business analysis report generated and sent successfully',
      reportSummary: {
        companyName: contactDetails.company_name,
        pagesAnalyzed: websiteContent.allContent.length,
        reportLength: businessReportContent.length,
        reportPreview: businessReportContent.substring(0, 200) + '...'
      },
      ...(process.env.NODE_ENV === 'development' && debugSession && {
        debug: {
          sessionId: debugSession.sessionId,
          debugPath: debugSession.debugPath
        }
      })
    })

  } catch (error) {
    console.error('Report generation error:', error)
    
    // Try to send error notification if we have contact details
    try {
      const errorData = await request.json()
      if (errorData.contactDetails?.business_email && errorData.contactDetails?.company_name) {
        const { emailService } = await import('@/lib/email-service')
        await emailService.sendErrorNotification(
          errorData.contactDetails.business_email,
          errorData.contactDetails.company_name,
          error instanceof Error ? error.message : 'Unknown error'
        )
      }
    } catch (notificationError) {
      console.error('Failed to send error notification:', notificationError)
    }

    return NextResponse.json(
      { 
        success: false, 
        error: 'Internal server error during report generation',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}

// GET endpoint for testing
export async function GET() {
  return NextResponse.json({
    service: 'VeloxForce Report Generation API',
    status: 'active',
    version: '1.0.0',
    capabilities: [
      'Website scraping and analysis',
      'AI-powered sitemap analysis (Gemini Flash 2.5)',
      'Business intelligence analysis (Sonnet 4.0)',
      'Professional PDF report generation',
      'Automated email delivery with attachments'
    ],
    endpoints: {
      'POST /api/generate-report': 'Generate and send business analysis report',
      'GET /api/generate-report': 'Service status and information'
    }
  })
}