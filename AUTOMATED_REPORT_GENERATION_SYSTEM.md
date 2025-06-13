# Automated Business Analysis Report Generation System

## Overview

This system automatically generates comprehensive business analysis reports for quiz submissions by:

1. **Website Scraping**: Extracts content from the client's website
2. **AI Analysis**: Uses Gemini Flash 2.5 for sitemap analysis and Sonnet 4.0 for business intelligence
3. **PDF Generation**: Creates professional business reports with VeloxForce branding
4. **Email Delivery**: Sends reports with PDF attachments via Resend API

## System Architecture

```
Quiz Submission → Website Scraping → AI Analysis → PDF Generation → Email Delivery
     ↓               ↓                  ↓             ↓              ↓
Database Storage → Sitemap Parse → Business Intel → Professional → Automated
Question Capture → Content Extract → ROI Analysis → Report Design → Client Email
```

## Technical Stack

- **Website Scraping**: Puppeteer + Cheerio
- **AI Processing**: OpenRouter API (Gemini Flash 2.5 + Sonnet 4.0)
- **PDF Generation**: jsPDF with custom templates
- **Email Service**: Resend API with attachment support
- **Database**: Supabase with enhanced question tracking
- **Runtime**: Next.js API routes with async processing

## Implementation Components

### 1. Website Scraper (`/src/lib/website-scraper.ts`)

**Features:**
- Landing page content extraction
- Sitemap.xml discovery and parsing
- Key page identification (team, solutions, contact)
- Content sanitization and text-only extraction
- Fallback mechanisms for missing sitemaps
- Rate limiting and error handling

**Key Functions:**
```typescript
await scrapeWebsiteForAnalysis(websiteUrl)
// Returns: landingPage, sitemapAnalysis, keyPages, additionalPages
```

### 2. OpenRouter AI Client (`/src/lib/openrouter-client.ts`)

**Gemini Flash 2.5 - Sitemap Analysis:**
- Analyzes sitemap structure
- Identifies key business pages
- Returns structured JSON with page classifications
- Fallback for missing or invalid sitemaps

**Sonnet 4.0 - Business Analysis:**
- Comprehensive business intelligence analysis
- ROI calculations and automation opportunities
- Industry positioning and competitive analysis
- Implementation roadmap generation

**Key Functions:**
```typescript
await openRouterClient.analyzeSitemap(sitemapRequest)
await openRouterClient.analyzeBusinessForReport(businessRequest)
```

### 3. PDF Report Generator (`/src/lib/pdf-generator.ts`)

**Features:**
- Professional VeloxForce-branded templates
- Dynamic content insertion
- Multi-page reports with table of contents
- Charts and visual elements
- Responsive design for mobile compatibility

**Report Sections:**
1. Executive Summary
2. Current State Analysis
3. Automation Opportunities
4. ROI Projections
5. Implementation Roadmap
6. Next Steps

### 4. Email Service (`/src/lib/email-service.ts`)

**Features:**
- Professional HTML email templates
- PDF attachment handling (Base64 encoding)
- Personalized content based on analysis
- Error notification system
- Mobile-responsive design

**Email Types:**
- Business analysis report delivery
- Error notifications for failed generation
- Follow-up communications

### 5. API Endpoints

#### `/api/submit-quiz` (Enhanced)
- Captures quiz submissions with enhanced question text
- Triggers asynchronous report generation for service quiz
- Updates database with processing status
- Returns immediate response to user

#### `/api/generate-report` (New)
- Complete report generation pipeline
- Website scraping → AI analysis → PDF creation → Email delivery
- Comprehensive error handling and logging
- Status tracking and notifications

## Environment Variables

```bash
# Required for system operation
SUPABASE_URL=your_supabase_url
SUPABASE_KEY=your_supabase_service_key
RESEND_API_KEY=your_resend_api_key
OPENROUTER_API_KEY=sk-or-v1-your_openrouter_key

# Optional for enhanced features
NEXT_PUBLIC_BASE_URL=https://veloxforce.ai
```

## Database Schema Updates

### Enhanced `audit_quiz_answers` Table
```sql
- question_text (text) -- NEW: Full question text
- question_id (text)   -- Existing: Question identifier
- answer_value (text)  -- Existing: User's answer
```

### Enhanced `audit_quiz_submissions` Table  
```sql
- department_route (text)    -- NEW: Department selection
- ai_analysis_status (text)  -- NEW: Processing status
- process_name_input (text)  -- Existing: Process description
```

## Usage Workflow

### 1. Quiz Submission
```typescript
// User completes service quiz
const submission = {
  contactDetails: { /* contact info */ },
  quizAnswers: { /* all answers */ },
  departmentRoute: "hr",
  summary: { /* calculated metrics */ }
}

// Submit via API
await fetch('/api/submit-quiz', {
  method: 'POST',
  body: JSON.stringify(submission)
})
```

### 2. Automatic Processing
1. **Database Storage**: Quiz data saved with enhanced question text
2. **Website Analysis**: Client's website scraped and analyzed
3. **AI Processing**: Business intelligence analysis performed
4. **Report Generation**: Professional PDF created
5. **Email Delivery**: Report sent to client automatically

### 3. Report Contents
Each report includes:
- **Executive Summary**: Business overview and key findings
- **Current State Analysis**: Industry positioning and challenges
- **Automation Opportunities**: Specific areas for improvement with ROI
- **Implementation Roadmap**: Phase-by-phase transformation plan
- **Financial Projections**: Investment requirements and returns

## Error Handling

### Graceful Failures
- Website scraping failures → Continue with limited analysis
- AI API failures → Send error notification email
- PDF generation failures → Log error and notify support
- Email delivery failures → Retry with fallback options

### Monitoring & Logging
- Comprehensive console logging throughout pipeline
- Database status tracking for all submissions
- Error notifications to both client and support team
- Performance metrics for optimization

## Performance Considerations

### Asynchronous Processing
- Report generation runs independently of quiz submission response
- Prevents timeout issues for complex analyses
- Status tracking allows progress monitoring

### Resource Optimization
- Puppeteer browser instance management
- Rate limiting for respectful website scraping
- Caching strategies for repeated analyses
- Memory management for large PDF generation

## Testing & Validation

### Test Script (`/scripts/test-report-generation.js`)
```bash
# Run comprehensive test suite
node scripts/test-report-generation.js

# Tests included:
# - API endpoint accessibility
# - Environment variable validation
# - Quiz submission flow
# - Report generation pipeline
```

### Manual Testing
```bash
# 1. Start development server
npm run dev

# 2. Submit test quiz via form or API
# 3. Monitor console logs for processing status
# 4. Check email for generated report
# 5. Validate PDF content and formatting
```

## Deployment Checklist

### Production Setup
- [ ] Set all environment variables
- [ ] Configure Supabase production database
- [ ] Verify Resend API limits and domain setup
- [ ] Test OpenRouter API key with production quotas
- [ ] Configure CORS and security headers

### Monitoring Setup
- [ ] Set up error alerting for failed reports
- [ ] Monitor API usage and costs
- [ ] Track report generation success rates
- [ ] Set up performance monitoring

## Maintenance & Updates

### Regular Tasks
- Monitor AI API usage and costs
- Update business analysis prompts based on feedback
- Refresh PDF templates and branding
- Review and optimize scraping patterns

### Scaling Considerations
- Implement queue system for high volume
- Add caching layer for repeated website analyses
- Consider CDN for PDF delivery
- Implement rate limiting for API protection

## Support & Troubleshooting

### Common Issues

**1. Report Generation Fails**
- Check OpenRouter API key and credits
- Verify website is accessible for scraping
- Review AI API response format

**2. PDF Generation Errors**
- Check memory limits for large reports
- Verify jsPDF dependencies
- Review template rendering logic

**3. Email Delivery Issues**
- Confirm Resend API key and domain setup
- Check email attachment size limits
- Verify recipient email addresses

### Debug Tools
```bash
# Check API status
curl http://localhost:3000/api/generate-report

# Test environment setup
node scripts/test-report-generation.js

# Monitor database status
# Check audit_quiz_submissions.ai_analysis_status
```

## Security Considerations

### Data Protection
- Secure handling of client website content
- Proper sanitization of scraped data
- Safe PDF generation without code injection
- Encrypted API key storage

### API Security
- Rate limiting on all endpoints
- Input validation and sanitization
- Error message sanitization
- Secure database queries

## Future Enhancements

### Planned Features
- Multi-language report generation
- Custom branding for white-label partners
- Advanced analytics dashboard
- Integration with CRM systems
- Mobile app for report viewing

### Optimization Opportunities
- Machine learning for better business analysis
- Template customization based on industry
- Real-time collaboration features
- Advanced PDF interactive elements

---

## Quick Start Guide

1. **Install Dependencies**
   ```bash
   npm install puppeteer cheerio jsdom jspdf openai
   ```

2. **Configure Environment**
   ```bash
   # Add to .env file
   OPENROUTER_API_KEY=sk-or-v1-your_key_here
   ```

3. **Test System**
   ```bash
   npm run dev
   node scripts/test-report-generation.js
   ```

4. **Submit Test Quiz**
   - Visit `/tools/service-quiz`
   - Complete form with real website URL
   - Check email for generated report

The system is now ready for production use! 🚀