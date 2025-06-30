import { promises as fs } from 'fs'
import path from 'path'

export interface DebugSession {
  sessionId: string
  timestamp: string
  companyName: string
  email: string
  debugPath: string
}

export interface TimingData {
  step: string
  startTime: number
  endTime?: number
  duration?: number
  status: 'started' | 'completed' | 'failed'
  error?: string
}

export class DebugLogger {
  private session: DebugSession | null = null
  private timings: TimingData[] = []
  private debugLogsDir: string
  private isServerless: boolean

  constructor() {
    // Detect serverless environment (Vercel, Netlify, etc.)
    this.isServerless = !!(process.env.VERCEL || process.env.NETLIFY || process.env.AWS_LAMBDA_FUNCTION_NAME)

    // Use appropriate directory based on environment
    if (this.isServerless) {
      // In serverless environments, use /tmp which is writable
      this.debugLogsDir = path.join('/tmp', 'debug-logs')
    } else {
      // In local development, use project directory
      this.debugLogsDir = path.join(process.cwd(), 'debug-logs')
    }
  }

  /**
   * Safe file write that handles serverless environment limitations
   */
  private async safeWriteFile(filepath: string, content: string, logMessage: string): Promise<void> {
    try {
      await fs.writeFile(filepath, content)
      console.log(logMessage)
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error'
      console.warn(`⚠️  Failed to write file (${this.isServerless ? 'serverless environment' : 'filesystem error'}):`, errorMessage)
      // In serverless environments, we can still log the operation success
      if (this.isServerless) {
        console.log(logMessage.replace('saved:', 'processed:').replace('logged:', 'processed:'))
      }
    }
  }

  /**
   * Initialize a new debug session
   */
  async initSession(contactDetails: { company_name: string; business_email: string }): Promise<DebugSession> {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19)
    const sessionId = `${timestamp}_${contactDetails.company_name.replace(/[^a-zA-Z0-9]/g, '_')}`
    
    const debugPath = path.join(this.debugLogsDir, sessionId)
    
    this.session = {
      sessionId,
      timestamp: new Date().toISOString(),
      companyName: contactDetails.company_name,
      email: contactDetails.business_email,
      debugPath
    }

    // Create debug directory (only if filesystem is writable)
    try {
      await fs.mkdir(debugPath, { recursive: true })
      console.log(`🚀 Debug session started: ${sessionId}`)
      console.log(`📁 Debug files will be saved to: ${debugPath}`)
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error'
      console.warn(`⚠️  Debug directory creation failed (${this.isServerless ? 'serverless environment' : 'filesystem error'}):`, errorMessage)
      console.log(`🚀 Debug session started: ${sessionId} (console logging only)`)
    }

    // Start timing
    this.startTiming('session_initialization')
    this.endTiming('session_initialization')

    return this.session
  }

  /**
   * Start timing for a specific step
   */
  startTiming(step: string): void {
    console.log(`⏱️  Starting: ${step}`)
    this.timings.push({
      step,
      startTime: Date.now(),
      status: 'started'
    })
  }

  /**
   * End timing for a specific step
   */
  endTiming(step: string, error?: string): void {
    const timing = this.timings.find(t => t.step === step && t.status === 'started')
    if (timing) {
      timing.endTime = Date.now()
      timing.duration = timing.endTime - timing.startTime
      timing.status = error ? 'failed' : 'completed'
      if (error) timing.error = error

      const status = error ? '❌' : '✅'
      const duration = `${timing.duration}ms`
      console.log(`${status} ${step} completed in ${duration}${error ? ` - Error: ${error}` : ''}`)
    }
  }

  /**
   * Log quiz input data
   */
  async logQuizInput(data: {
    quizAnswers: Record<string, any>
    contactDetails: any
    departmentRoute: string
  }): Promise<void> {
    if (!this.session) {
      console.warn('No debug session active - skipping quiz input logging')
      return
    }

    try {
      const filepath = path.join(this.session.debugPath, '1_input_quiz_data.json')
      const logData = {
        timestamp: new Date().toISOString(),
        sessionId: this.session.sessionId,
        data: {
          quizAnswers: data.quizAnswers,
          contactDetails: data.contactDetails,
          departmentRoute: data.departmentRoute
        },
        metadata: {
          totalQuestions: Object.keys(data.quizAnswers).length,
          answerTypes: this.analyzeAnswerTypes(data.quizAnswers)
        }
      }

      await this.safeWriteFile(
        filepath,
        JSON.stringify(logData, null, 2),
        `📝 Quiz input data logged: ${Object.keys(data.quizAnswers).length} questions`
      )
    } catch (error) {
      console.error('Failed to log quiz input:', error)
    }
  }

  /**
   * Log website scraping data
   */
  async logWebsiteData(data: {
    landingPage: any
    sitemapAnalysis: any
    keyPages: any
    additionalPages: any[]
    allContent: any[]
  }): Promise<void> {
    if (!this.session) {
      console.warn('No debug session active - skipping website data logging')
      return
    }

    try {
      const filepath = path.join(this.session.debugPath, '2_input_website_data.json')
      const logData = {
        timestamp: new Date().toISOString(),
        sessionId: this.session.sessionId,
        data,
        metadata: {
          landingPageSize: data.landingPage.content?.length || 0,
          totalSitemapPages: data.sitemapAnalysis.totalPages || 0,
          keyPagesFound: data.keyPages.foundPages?.length || 0,
          additionalPagesScraped: data.additionalPages.length,
          totalContentLength: data.allContent.reduce((sum, page) => sum + (page.content?.length || 0), 0)
        }
      }

      await this.safeWriteFile(
        filepath,
        JSON.stringify(logData, null, 2),
        `🕷️  Website data logged: ${data.allContent.length} pages, ${logData.metadata.totalContentLength} chars`
      )
    } catch (error) {
      console.error('Failed to log website data:', error)
    }
  }

  /**
   * Log AI prompts sent to models
   */
  async logAIPrompts(data: {
    sitemapPrompt?: string
    businessAnalysisPrompt?: string
    model: 'gemini-flash' | 'sonnet-4'
    step: string
  }): Promise<void> {
    if (!this.session) {
      console.warn('No debug session active - skipping AI prompts logging')
      return
    }

    try {
      const filepath = path.join(this.session.debugPath, '3_ai_prompts.json')
      
      // Read existing data or create new
      let existingData: any = { prompts: [] }
      try {
        const existing = await fs.readFile(filepath, 'utf8')
        existingData = JSON.parse(existing)
      } catch (error) {
        // File doesn't exist yet
      }

      const promptEntry = {
        timestamp: new Date().toISOString(),
        sessionId: this.session.sessionId,
        step: data.step,
        model: data.model,
        prompts: {
          sitemapPrompt: data.sitemapPrompt,
          businessAnalysisPrompt: data.businessAnalysisPrompt
        },
        metadata: {
          promptLength: (data.sitemapPrompt?.length || 0) + (data.businessAnalysisPrompt?.length || 0)
        }
      }

      existingData.prompts.push(promptEntry)
      await this.safeWriteFile(
        filepath,
        JSON.stringify(existingData, null, 2),
        `🧠 AI prompt logged for ${data.model}: ${promptEntry.metadata.promptLength} chars`
      )
    } catch (error) {
      console.error('Failed to log AI prompts:', error)
    }
  }

  /**
   * Log AI responses from models
   */
  async logAIResponse(data: {
    response: any
    model: 'gemini-flash' | 'sonnet-4'
    step: string
    success: boolean
    error?: string
  }): Promise<void> {
    if (!this.session) {
      console.warn('No debug session active - skipping AI response logging')
      return
    }

    try {
      const filepath = path.join(this.session.debugPath, '4_ai_responses.json')
      
      // Read existing data or create new
      let existingData: any = { responses: [] }
      try {
        const existing = await fs.readFile(filepath, 'utf8')
        existingData = JSON.parse(existing)
      } catch (error) {
        // File doesn't exist yet
      }

      const responseEntry = {
        timestamp: new Date().toISOString(),
        sessionId: this.session.sessionId,
        step: data.step,
        model: data.model,
        success: data.success,
        response: data.response,
        error: data.error,
        metadata: {
          responseSize: JSON.stringify(data.response).length
        }
      }

      existingData.responses.push(responseEntry)
      const status = data.success ? '✅' : '❌'
      await this.safeWriteFile(
        filepath,
        JSON.stringify(existingData, null, 2),
        `${status} AI response from ${data.model}: ${responseEntry.metadata.responseSize} chars`
      )
    } catch (error) {
      console.error('Failed to log AI response:', error)
    }
  }

  /**
   * Log business analysis results
   */
  async logBusinessAnalysis(data: any): Promise<void> {
    if (!this.session) {
      console.warn('No debug session active - skipping business analysis logging')
      return
    }

    try {
      const filepath = path.join(this.session.debugPath, '5_business_analysis.json')
      
      // Extract metadata from markdown content if available
      let metadata = {
        reportLength: 0,
        hasExecutiveSummary: false,
        hasAutomationOpportunities: false,
        hasROIProjections: false,
        hasRoadmap: false
      }
      
      if (data.reportContent) {
        const content = data.reportContent.toString()
        metadata.reportLength = content.length
        metadata.hasExecutiveSummary = content.includes('# Executive Summary')
        metadata.hasAutomationOpportunities = content.includes('# Automation Opportunities')
        metadata.hasROIProjections = content.includes('# ROI Projections')
        metadata.hasRoadmap = content.includes('# Implementation Roadmap')
      }
      
      const logData = {
        timestamp: new Date().toISOString(),
        sessionId: this.session.sessionId,
        businessAnalysis: data,
        metadata
      }

      await this.safeWriteFile(
        filepath,
        JSON.stringify(logData, null, 2),
        `📊 Business analysis logged: ${metadata.reportLength} chars, Sections: ${Object.entries(metadata).filter(([k, v]) => k.startsWith('has') && v).length}`
      )
    } catch (error) {
      console.error('Failed to log business analysis:', error)
    }
  }

  /**
   * Log PDF report data
   */
  async logPDFReportData(reportData: any): Promise<void> {
    if (!this.session) {
      console.warn('No debug session active - skipping PDF report data logging')
      return
    }

    try {
      const filepath = path.join(this.session.debugPath, '6_pdf_report_data.json')
      const logData = {
        timestamp: new Date().toISOString(),
        sessionId: this.session.sessionId,
        reportData,
        metadata: {
          reportSize: JSON.stringify(reportData).length
        }
      }

      await this.safeWriteFile(
        filepath,
        JSON.stringify(logData, null, 2),
        `📄 PDF report data logged: ${logData.metadata.reportSize} chars`
      )
    } catch (error) {
      console.error('Failed to log PDF report data:', error)
    }
  }

  /**
   * Log email data
   */
  async logEmailData(emailData: any): Promise<void> {
    if (!this.session) {
      console.warn('No debug session active - skipping email data logging')
      return
    }

    try {
      const filepath = path.join(this.session.debugPath, '7_email_data.json')
      const logData = {
        timestamp: new Date().toISOString(),
        sessionId: this.session.sessionId,
        emailData,
        metadata: {
          emailDataSize: JSON.stringify(emailData).length,
          hasPDFAttachment: !!emailData.pdfBuffer
        }
      }

      await this.safeWriteFile(
        filepath,
        JSON.stringify(logData, null, 2),
        `📧 Email data logged: ${logData.metadata.emailDataSize} chars, PDF: ${logData.metadata.hasPDFAttachment}`
      )
    } catch (error) {
      console.error('Failed to log email data:', error)
    }
  }

  /**
   * Save debug log summary
   */
  async saveDebugSummary(): Promise<void> {
    if (!this.session) {
      console.warn('No debug session active - skipping debug summary')
      return
    }

    const summary = [
      `Debug Session Summary`,
      `====================`,
      `Session ID: ${this.session.sessionId}`,
      `Company: ${this.session.companyName}`,
      `Email: ${this.session.email}`,
      `Timestamp: ${this.session.timestamp}`,
      `Debug Path: ${this.session.debugPath}`,
      ``,
      `Timing Information:`,
      `------------------`
    ]

    for (const timing of this.timings) {
      const status = timing.status === 'completed' ? '✅' : timing.status === 'failed' ? '❌' : '⏱️ '
      const duration = timing.duration ? `${timing.duration}ms` : 'N/A'
      const error = timing.error ? ` - Error: ${timing.error}` : ''
      summary.push(`${status} ${timing.step}: ${duration}${error}`)
    }

    summary.push('')
    summary.push(`Total session duration: ${this.getTotalDuration()}ms`)
    summary.push(`Files generated: ${await this.getGeneratedFiles()}`)

    try {
      const filepath = path.join(this.session.debugPath, 'debug_log.txt')
      await this.safeWriteFile(
        filepath,
        summary.join('\n'),
        `📋 Debug summary saved: ${filepath}`
      )
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error'
      console.warn(`⚠️  Failed to save debug summary (${this.isServerless ? 'serverless environment' : 'filesystem error'}):`, errorMessage)
      // In serverless environments, just log the summary to console
      if (this.isServerless) {
        console.log('📋 Debug Summary (Console Only):')
        console.log(summary.join('\n'))
      }
    }
  }

  /**
   * Analyze answer types for metadata
   */
  private analyzeAnswerTypes(answers: Record<string, any>): Record<string, number> {
    const types: Record<string, number> = {}
    
    for (const value of Object.values(answers)) {
      const type = Array.isArray(value) ? 'array' : typeof value
      types[type] = (types[type] || 0) + 1
    }
    
    return types
  }

  /**
   * Get total session duration
   */
  private getTotalDuration(): number {
    const startTime = Math.min(...this.timings.map(t => t.startTime))
    const endTime = Math.max(...this.timings.map(t => t.endTime || t.startTime))
    return endTime - startTime
  }

  /**
   * Get list of generated files
   */
  private async getGeneratedFiles(): Promise<string[]> {
    if (!this.session) return []

    try {
      const files = await fs.readdir(this.session.debugPath)
      return files.filter(file => file.endsWith('.json') || file.endsWith('.txt'))
    } catch (error) {
      // In serverless environments, we can't read the directory
      if (this.isServerless) {
        return ['console-logs-only']
      }
      return []
    }
  }

  /**
   * Get current session info
   */
  getCurrentSession(): DebugSession | null {
    return this.session
  }
}

// Export singleton instance
export const debugLogger = new DebugLogger()