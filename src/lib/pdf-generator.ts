import jsPDF from 'jspdf'

export interface ReportData {
  companyName: string
  contactName: string
  contactEmail: string
  website?: string
  departmentFocus: string
  analysisDate: string
  businessReportContent: string
}

export class PDFReportGenerator {
  private doc: jsPDF
  private pageWidth: number
  private pageHeight: number
  private margin: number
  private bottomMargin: number
  private currentY: number
  private pageNumber: number
  private logoBase64: string = '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'

  constructor() {
    this.doc = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4'
    })
    this.pageWidth = this.doc.internal.pageSize.getWidth()
    this.pageHeight = this.doc.internal.pageSize.getHeight()
    this.margin = 20
    this.bottomMargin = 50 // Increased from 40 to reduce sentence splitting
    this.currentY = this.margin
    this.pageNumber = 1
  }

  /**
   * Generate the complete business analysis report from text content
   */
  async generateReport(reportData: ReportData): Promise<Buffer> {
    // Cover page
    this.addCoverPage(reportData)
    
    // Add the business report content
    this.addNewPage()
    this.addBusinessReportContent(reportData.businessReportContent)
    
    // Footer on all pages
    this.addFootersToAllPages()
    
    // Convert to buffer
    const pdfBuffer = Buffer.from(this.doc.output('arraybuffer'))
    return pdfBuffer
  }

  /**
   * Add cover page
   */
  private addCoverPage(reportData: ReportData): void {
    // VeloxForce branding - increased size and adjusted position
    this.doc.setFontSize(30)
    this.doc.setFont('helvetica', 'bold')
    this.doc.setTextColor(30, 58, 95) // #1E3A5F - deeper blue for better hierarchy
    this.addText('VeloxForce', this.margin, 45)
    
    // Increased spacing after VeloxForce
    this.doc.setFontSize(14)
    this.doc.setFont('helvetica', 'normal')
    this.doc.setTextColor(100, 100, 100)
    this.addText('Service-as-Software Solutions', this.margin, 53) // 8pt spacing
    
    // Report title - increased size and weight with better spacing
    this.doc.setFontSize(18) // Increased from 16pt
    this.doc.setFont('helvetica', 'bold')
    this.doc.setTextColor(44, 44, 44) // #2C2C2C - dark charcoal instead of pure black
    this.addText('Business Automation', this.margin, 90, 0.2) // Added letter spacing for professional look
    this.addText('Analysis Report', this.margin, 104, 0.2) // 14pt line spacing for 18pt font
    
    // Company information - adjusted position and size
    this.doc.setFontSize(14) // Increased from 13pt
    this.doc.setFont('helvetica', 'bold')
    this.doc.setTextColor(30, 58, 95) // Consistent deep blue
    this.addText(`Prepared for: ${reportData.companyName}`, this.margin, 140) // 36pt spacing after title
    
    // Contact details with improved line spacing
    this.doc.setFontSize(11)
    this.doc.setFont('helvetica', 'normal')
    this.doc.setTextColor(64, 64, 64) // #404040 - medium gray for body text
    
    let currentY = 154 // Start position for contact info
    const lineHeight = 14 // 1.4x line height for 11pt font
    
    this.addText(`Contact: ${reportData.contactName}`, this.margin, currentY)
    currentY += lineHeight
    this.addText(`Email: ${reportData.contactEmail}`, this.margin, currentY)
    if (reportData.website) {
      currentY += lineHeight
      this.addText(`Website: ${reportData.website}`, this.margin, currentY)
    }
    currentY += lineHeight
    this.addText(`Department Focus: ${reportData.departmentFocus}`, this.margin, currentY)
    currentY += lineHeight
    this.addText(`Analysis Date: ${reportData.analysisDate}`, this.margin, currentY)
    
    // Decorative elements - adjusted position with proper spacing
    this.doc.setDrawColor(30, 58, 95) // Consistent deep blue
    this.doc.setLineWidth(2)
    this.doc.line(this.margin, 220, this.pageWidth - this.margin, 220) // Moved to 220pt
    
    // Confidential notice - adjusted position
    this.doc.setFontSize(10)
    this.doc.setFont('helvetica', 'italic')
    this.doc.setTextColor(150, 150, 150)
    const footerY = this.pageHeight - 40 // 40pt from bottom
    this.addText('This report contains confidential business analysis and recommendations.', this.margin, footerY)
    this.addText('Generated by VeloxForce AI-powered business intelligence platform.', this.margin, footerY + 10)
  }

  /**
   * Add business report content (text/markdown)
   */
  private addBusinessReportContent(reportContent: string): void {
    this.addSectionHeader('Business Analysis Report')
    this.currentY += 10
    
    // Split the content into paragraphs and sections
    const lines = reportContent.split('\n')
    
    this.doc.setFontSize(11)
    this.doc.setFont('helvetica', 'normal')
    this.doc.setTextColor(64, 64, 64) // #404040 - consistent medium gray
    
    for (const line of lines) {
      const trimmedLine = line.trim()
      
      if (!trimmedLine) {
        // Empty line - add some space
        this.currentY += 5
        continue
      }
      
      // Check if we need a new page
      if (this.currentY > this.pageHeight - this.bottomMargin) {
        this.addNewPage()
      }
      
      if (trimmedLine.startsWith('#')) {
        // This is a heading - determine the level
        const headingMatch = trimmedLine.match(/^(#+)\s*(.*)/)
        if (headingMatch) {
          const level = headingMatch[1].length
          const headingText = headingMatch[2]
          this.addHeading(headingText, level)
        }
      } else if (trimmedLine.startsWith('**') && trimmedLine.endsWith('**')) {
        // This is bold text
        this.addBoldText(trimmedLine.replace(/\*\*/g, ''))
      } else {
        // Regular paragraph text
        this.addParagraph(trimmedLine)
      }
    }
  }

  /**
   * Add heading text with widow/orphan protection
   */
  private addHeading(text: string, level: number = 1): void {
    // Calculate required space based on heading level
    // Level 1 (#): Need space for heading + 8 lines (approx 48mm)
    // Level 2 (##): Need space for heading + 5 lines (approx 30mm)
    // Level 3+ (###): Need space for heading + 3 lines (approx 18mm)
    let requiredSpace: number
    let fontSize: number
    let spaceBefore: number
    let spaceAfter: number
    
    if (level === 1) {
      requiredSpace = 48
      fontSize = 16
      spaceBefore = 8
      spaceAfter = 10
    } else if (level === 2) {
      requiredSpace = 30
      fontSize = 14
      spaceBefore = 6
      spaceAfter = 8
    } else {
      requiredSpace = 18
      fontSize = 12
      spaceBefore = 4
      spaceAfter = 6
    }
    
    // Check if we have enough space on current page
    const spaceRemaining = this.pageHeight - this.currentY - this.bottomMargin
    if (spaceRemaining < requiredSpace) {
      // Not enough space, move to next page
      this.addNewPage()
    }
    
    // Add space before heading
    this.currentY += spaceBefore
    
    // Set heading style with proper font weight
    this.doc.setFontSize(fontSize)
    this.doc.setFont('helvetica', 'bold')
    this.doc.setTextColor(30, 58, 95) // Consistent deep blue #1E3A5F
    this.addText(text, this.margin, this.currentY, 0.1) // Subtle letter spacing for headings
    this.currentY += spaceAfter
    
    // Reset to normal text with improved readability
    this.doc.setFontSize(11)
    this.doc.setFont('helvetica', 'normal')
    this.doc.setTextColor(64, 64, 64) // #404040 - medium gray for better readability
  }

  /**
   * Add bold text with widow protection
   */
  private addBoldText(text: string): void {
    // Check if we have enough space for bold text + 3 lines (approx 18mm)
    const requiredSpace = 18
    const spaceRemaining = this.pageHeight - this.currentY - this.bottomMargin
    
    if (spaceRemaining < requiredSpace) {
      // Not enough space, move to next page
      this.addNewPage()
    }
    
    this.doc.setFont('helvetica', 'bold')
    this.addText(text, this.margin, this.currentY)
    this.currentY += 7
    
    // Reset to normal text
    this.doc.setFont('helvetica', 'normal')
  }

  /**
   * Add paragraph text with word wrapping
   */
  private addParagraph(text: string): void {
    const maxWidth = this.pageWidth - (this.margin * 2)
    const words = text.split(' ')
    let currentLine = ''
    const lineHeight = 7 // Improved line height for better readability
    
    for (const word of words) {
      const testLine = currentLine ? `${currentLine} ${word}` : word
      const textWidth = this.doc.getTextWidth(testLine)
      
      if (textWidth > maxWidth && currentLine) {
        // Current line is full, print it and start a new line
        this.addText(currentLine, this.margin, this.currentY)
        this.currentY += lineHeight
        currentLine = word
        
        // Check if we need a new page
        if (this.currentY > this.pageHeight - this.bottomMargin) {
          this.addNewPage()
        }
      } else {
        currentLine = testLine
      }
    }
    
    // Print the last line
    if (currentLine) {
      this.addText(currentLine, this.margin, this.currentY)
      this.currentY += lineHeight
    }
    
    this.currentY += 4 // More space after paragraph for better separation
  }

  // Note: Removed old methods that handled structured BusinessAnalysisResponse data
  // The system now uses addBusinessReportContent() to handle text/markdown reports

  /**
   * Helper methods
   */
  private addNewPage(): void {
    this.doc.addPage()
    this.pageNumber++
    // Increased top margin for content pages to avoid logo overlap
    this.currentY = this.margin + 25 // Additional 25mm to clear the logo area
  }

  private addSectionHeader(title: string): void {
    // Check if we have enough space for section header + content (approx 48mm)
    const requiredSpace = 48
    const spaceRemaining = this.pageHeight - this.currentY - this.bottomMargin
    
    if (spaceRemaining < requiredSpace) {
      // Not enough space, move to next page
      this.addNewPage()
    }
    
    this.doc.setFontSize(18) // Increased for better hierarchy
    this.doc.setFont('helvetica', 'bold')
    this.doc.setTextColor(30, 58, 95) // Consistent deep blue #1E3A5F
    this.addText(title, this.margin, this.currentY)
    this.currentY += 10
    
    // Underline with consistent color
    this.doc.setDrawColor(30, 58, 95)
    this.doc.setLineWidth(0.5)
    this.doc.line(this.margin, this.currentY, this.margin + 70, this.currentY) // Slightly longer line
    this.currentY += 8 // More space after underline
  }

  private addText(text: string, x: number, y: number, letterSpacing: number = 0): void {
    if (letterSpacing > 0) {
      // Apply letter spacing by rendering each character individually
      let currentX = x
      for (let i = 0; i < text.length; i++) {
        this.doc.text(text[i], currentX, y)
        currentX += this.doc.getTextWidth(text[i]) + letterSpacing
      }
    } else {
      this.doc.text(text, x, y)
    }
  }

  private addFootersToAllPages(): void {
    const totalPages = this.doc.getNumberOfPages()
    
    for (let i = 1; i <= totalPages; i++) {
      this.doc.setPage(i)
      
      // Add logo to top right of each page (except cover page)
      if (i > 1 && this.logoBase64) {
        try {
          // Logo dimensions: 20mm wide, maintain aspect ratio
          const logoWidth = 20
          const logoHeight = 20 // Square logo based on the PNG
          const logoX = this.pageWidth - this.margin - logoWidth
          const logoY = 10
          
          this.doc.addImage(this.logoBase64, 'PNG', logoX, logoY, logoWidth, logoHeight)
        } catch (error) {
          console.warn('Failed to add logo to page:', error)
        }
      }
      
      // Page number
      this.doc.setFontSize(9)
      this.doc.setFont('helvetica', 'normal')
      this.doc.setTextColor(150, 150, 150)
      this.doc.text(
        `Page ${i} of ${totalPages}`,
        this.pageWidth - this.margin - 20,
        this.pageHeight - 10
      )
      
      // VeloxForce footer
      this.doc.text(
        'VeloxForce - Service-as-Software Solutions',
        this.margin,
        this.pageHeight - 10
      )
    }
  }
}

// Export function for easy use
export async function generateBusinessReport(reportData: ReportData): Promise<Buffer> {
  const generator = new PDFReportGenerator()
  return await generator.generateReport(reportData)
}