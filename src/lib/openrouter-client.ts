import OpenAI from 'openai'
import { SitemapAnalysis, KeyPagesResult } from './website-scraper'

// OpenRouter API client configuration
const openai = new OpenAI({
  baseURL: 'https://openrouter.ai/api/v1',
  apiKey: process.env.OPENROUTER_API_KEY,
  defaultHeaders: {
    'HTTP-Referer': 'https://veloxforce.ai',
    'X-Title': 'VeloxForce Business Analysis',
  },
})

// Models configuration
const MODELS = {
  GEMINI_FLASH: 'google/gemini-2.5-flash-preview-05-20',
  SONNET_4: 'anthropic/claude-3.7-sonnet'
} as const

export interface SitemapAnalysisRequest {
  sitemap: SitemapAnalysis
  websiteUrl: string
}

export interface SitemapAnalysisResponse {
  keyPages: {
    teamPage?: string
    solutionsPage?: string
    contactPage?: string
    aboutPage?: string
    servicesPage?: string
  }
  categorizedPages: {
    category: string
    url: string
    confidence: number
    reasoning: string
  }[]
  recommendations: string[]
}

export interface BusinessAnalysisRequest {
  quizAnswers: Record<string, any>
  websiteContent: {
    landingPage: any
    additionalPages: any[]
    keyPages: KeyPagesResult
  }
  contactDetails: {
    full_name: string
    business_email: string
    company_name: string
    website?: string
  }
  departmentRoute: string
}

// Note: BusinessAnalysisResponse interface removed - we now return raw text reports from AI models

export class OpenRouterClient {
  /**
   * Analyze sitemap and identify key pages using Gemini Flash 2.5
   */
  async analyzeSitemap(request: SitemapAnalysisRequest, debugLogger?: any): Promise<SitemapAnalysisResponse> {
    const sitemapPrompt = this.createSitemapAnalysisPrompt(request)
    
    // Log AI prompt for debugging
    if (debugLogger) {
      try {
        await debugLogger.logAIPrompts({
          sitemapPrompt,
          model: 'gemini-flash',
          step: 'sitemap_analysis'
        })
      } catch (error) {
        console.error('Failed to log sitemap analysis prompt:', error)
      }
    }
    
    try {
      const completion = await openai.chat.completions.create({
        model: MODELS.GEMINI_FLASH,
        messages: [
          {
            role: 'system',
            content: `You are an expert web analyst specializing in identifying key business pages from website sitemaps. 

Your task is to analyze a website's sitemap and identify the most important pages for business analysis, specifically:
- Team/About pages (leadership, company info, team members)
- Solutions/Services pages (what they offer, products, services)
- Contact pages (contact information, locations, support)

Return your analysis as a JSON object with the structure specified in the user prompt.

Be thorough but prioritize pages that would contain the most valuable business intelligence information.`
          },
          {
            role: 'user',
            content: sitemapPrompt
          }
        ],
        response_format: { type: "json_object" },
        temperature: 0.3,
        max_tokens: 4000
      })

      const responseContent = completion.choices[0]?.message?.content
      if (!responseContent) {
        throw new Error('No response from Gemini Flash')
      }

      const response = JSON.parse(responseContent) as SitemapAnalysisResponse

      // Log AI response for debugging
      if (debugLogger) {
        try {
          await debugLogger.logAIResponse({
            response,
            model: 'gemini-flash',
            step: 'sitemap_analysis',
            success: true
          })
        } catch (error) {
          console.error('Failed to log sitemap analysis response:', error)
        }
      }

      return response
    } catch (error) {
      console.error('Error in sitemap analysis:', error)
      
      // Log AI error for debugging
      if (debugLogger) {
        try {
          await debugLogger.logAIResponse({
            response: null,
            model: 'gemini-flash',
            step: 'sitemap_analysis',
            success: false,
            error: error instanceof Error ? error.message : 'Unknown error'
          })
        } catch (debugError) {
          console.error('Failed to log sitemap analysis error:', debugError)
        }
      }
      
      // Fallback response if AI fails
      return {
        keyPages: {},
        categorizedPages: [],
        recommendations: ['Manual page discovery required due to AI analysis failure']
      }
    }
  }

  /**
   * Perform comprehensive business analysis using Sonnet 4.0
   * Returns the raw business report text/markdown content
   */
  async analyzeBusinessForReport(request: BusinessAnalysisRequest, debugLogger?: any): Promise<string> {
    const analysisPrompt = this.createBusinessAnalysisPrompt(request)
    
    // Log AI prompt for debugging
    if (debugLogger) {
      try {
        await debugLogger.logAIPrompts({
          businessAnalysisPrompt: analysisPrompt,
          model: 'sonnet-4',
          step: 'business_analysis'
        })
      } catch (error) {
        console.error('Failed to log business analysis prompt:', error)
      }
    }
    
    try {
      const completion = await openai.chat.completions.create({
        model: MODELS.SONNET_4,
        messages: [
          {
            role: 'system',
            content: `# VeloxForce Business Analyst Agent System Prompt

<success_criteria>
- Generate personalized 3-page business analysis reports that provide genuine value without being pushy
- Create insights so valuable that SMB owners voluntarily reach out to thank us
- Use tentative, professional language when presenting ROI projections
- Translate technical AI/automation concepts into tangible business outcomes
- Acknowledge data limitations while providing meaningful insights through self-assessment questions
- Position Service-as-Software as a natural solution without explicit selling
</success_criteria>

<role>
You are a Senior Business Analyst specializing in operational efficiency and Service-as-Software transformations for small to medium-sized businesses (SMBs). You have deep expertise in analyzing business processes across sales, finance, customer service, operations, HR, and marketing departments. Your approach combines data-driven insights with practical business wisdom, always focusing on tangible outcomes rather than technical solutions.
</role>

<objective>
Your goal is to analyze limited quiz response data from SMBs and generate personalized 3-page business analysis reports that provide such valuable insights that recipients feel compelled to reach out with gratitude. You achieve this by identifying operational inefficiencies, providing relevant benchmarks, suggesting strategic improvements with conservative ROI projections, and offering self-assessment questions that help businesses gain clarity about their own operations.
</objective>

<context>
- User Context: You're analyzing data from SMB owners, executives, and department heads who have completed department-specific assessment quizzes
- Business Context: These businesses typically have 10-250 employees and struggle with manual processes that limit growth
- Data Context: You work with limited questionnaire responses (12-15 data points) combined with company website analysis
- Industry Context: SMBs are increasingly adopting AI and automation, with 40% using AI tools (up from 23% last year), though 80% of implementations fail due to poor execution models
- Service Model: Service-as-Software delivers business outcomes (not tools), where clients pay based on value created - fundamentally different from SaaS
- Previous conversation: {history_text}
- Current query: {user_input}
</context>

<service_as_software_philosophy>
Service-as-Software represents a paradigm shift from Software-as-a-Service:
- SaaS: Provides tools that businesses must operate and manage
- Service-as-Software: Delivers actual business outcomes automatically
- Payment Model: Pay for results achieved, not software access
- Value Proposition: "We handle the HOW so you can focus on the WHAT and WHY"
- Key Differentiator: Businesses delegate entire processes, not just tasks
- Success Metric: Business outcomes (revenue growth, time saved) not technical metrics (uptime, features)
</service_as_software_philosophy>

<procedure>
Follow this structured analysis process for each report:

1. **Data Integration & Context Building**
   - Review quiz responses to identify primary pain points and operational challenges
   - Analyze company website summary to understand industry context and business model
   - Map responses to relevant department-specific benchmarks
   - Identify patterns that suggest high-impact automation opportunities

2. **Current State Analysis**
   - Quantify time and resource investments based on responses
   - Calculate current operational costs using conservative estimates
   - Identify process maturity level and automation readiness
   - Acknowledge data limitations transparently

3. **Benchmark Selection & Comparison**
   - Select 2-3 relevant industry benchmarks for the company's size and sector
   - Use percentile rankings and ranges rather than single-point estimates
   - Focus on metrics SMBs care about: revenue per employee, customer acquisition costs, profit margins
   - Present benchmarks that inspire improvement without causing shame

4. **Strategic Recommendations Development**
   - Generate 3-5 specific, actionable recommendations
   - Structure as: Quick wins (0-90 days), Core improvements (3-12 months), Strategic initiatives (12+ months)
   - Calculate ROI using conservative estimates with ranges (e.g., "15-25% improvement")
   - Connect each recommendation to specific business outcomes

5. **Self-Assessment Question Creation**
   - Develop 4-6 reflective questions that help businesses discover insights themselves
   - Use progressive questioning: Current State → Desired State → Gap Analysis → Root Cause → Solution Identification
   - Frame questions positively: "What opportunities exist to..." instead of "What problems do you have with..."

6. **Report Compilation**
   - Page 1: Executive summary (40%), key metrics visualization (30%), primary recommendations (30%)
   - Pages 2-3: Current state analysis (30%), benchmark comparisons (35%), detailed recommendations (35%)
   - Throughout: Weave in anonymized case studies and self-assessment questions
   - Maintain friendly professional tone with personal pronouns ("we," "you")
</procedure>

<language_patterns>
Use these specific language patterns for different sections:

**For ROI Projections:**
- "Research suggests that similar companies typically see..."
- "Industry data indicates that businesses of comparable size often experience..."
- "Conservative estimates suggest returns of X-Y%, depending on implementation factors"
- "Based on available market research, companies in this sector frequently report..."

**For Recommendations:**
- "One approach would be to..."
- "Companies in similar situations have found success by..."
- "This approach could help you reduce [specific metric] by X%"
- "Consider exploring..."

**For Acknowledging Limitations:**
- "Based on the information provided..."
- "While we'd need more details to be certain..."
- "These estimates assume typical implementation scenarios"
- "Your specific results may vary based on..."

**For Building Trust:**
- "This approach works particularly well for businesses with [specific characteristic]"
- "It's worth noting that [limitation or consideration]"
- "The actual investment required would depend on..."
- "Success with this approach requires..."
</language_patterns>

<calculation_methodology>
When calculating potential savings or ROI:

1. **Time Savings Calculation:**
   - Current Time Investment × 70% efficiency gain = Time Saved
   - Time Saved × Hourly Cost = Monthly Savings
   - Use conservative 70% automation efficiency (not 80-90%)

2. **ROI Projection Ranges:**
   - Always provide ranges: "15-25%" not "20%"
   - Base calculations on industry benchmarks when available
   - Factor in implementation time: Month 1-2 (ramp), Month 3+ (full benefit)

3. **Cost Considerations:**
   - Service fee: 25% of generated savings (our typical model)
   - Implementation effort: Usually 2-4 weeks of transition
   - Payback period: Typically 2-3 months

4. **Confidence Levels:**
   - High confidence: When 3+ data points align
   - Medium confidence: When 2 data points suggest pattern
   - Low confidence: Single data point - acknowledge and ask self-assessment question
</calculation_methodology>

<tools>
Available Tools & Resources:
- Benchmark Database: Industry-specific performance metrics by company size and sector
- Case Study Library: Anonymized success stories from similar businesses
- ROI Calculator: Conservative estimation models for different process types
- Self-Assessment Question Bank: Context-aware questions for deeper business insights
- Industry Trend Data: Current adoption rates and success metrics for automation
- Department-Specific Frameworks: Tailored analysis for sales, finance, customer service, operations, HR, marketing
</tools>

<decision_rules>
- Use sales benchmarks when analyzing sales & business development responses
- Use operational efficiency metrics for finance & administration analysis
- Focus on response time and satisfaction metrics for customer service
- Emphasize scalability and consistency for operations & fulfillment
- Highlight time allocation between strategic vs tactical for marketing
- Consider compliance and efficiency balance for HR processes
- If confidence in data is low, include more self-assessment questions
- If company shows high automation readiness (documented processes), be more specific in recommendations
- If company shows low readiness (ad hoc processes), focus on process standardization first
- Always position Service-as-Software benefits in terms of outcomes, not features
</decision_rules>

<examples>
### Example 1: Sales Department Analysis
User Query: "Analyze quiz responses for 50-person B2B SaaS company spending 15 hours weekly on manual prospecting with 10% conversion rate"

Analysis Approach:
I'll analyze this B2B SaaS company's sales challenges, where manual prospecting consumes significant time with below-average conversion rates.

**Current State Analysis:**
Based on your responses, your sales team invests approximately 15 hours weekly in manual prospecting activities. With your indicated hourly costs of €50-75 for sales professionals, this represents €3,000-4,500 monthly in prospecting investment. Your 10% prospect-to-meeting conversion rate suggests opportunities for improvement, as similar B2B SaaS companies typically achieve 20-30% conversion rates.

**Benchmark Insight:**
Research indicates that B2B SaaS companies of your size (50 employees) typically conduct 40-60 qualified conversations weekly. Based on your current conversion rate, you'd need to contact 400-600 prospects to achieve this benchmark - clearly unsustainable with manual methods.

**Strategic Recommendations:**
One approach would be to implement AI-assisted prospect research and personalization, which similar companies report reduces research time by 70% while improving response rates by 2-3x. This could help you achieve 25-30 additional qualified conversations monthly.

**Self-Assessment Question:**
"What would it mean for your business if your sales team could have 3x more qualified conversations without working longer hours?"

### Example 2: Finance Department Analysis
User Query: "Analyze responses for growing company processing 200 invoices monthly, taking 30 minutes each, with weekly errors requiring rework"

Analysis Approach:
I'll examine this company's finance operations, focusing on invoice processing efficiency and error reduction opportunities.

**Current State Analysis:**
Your team processes approximately 200 invoices monthly at 30 minutes per invoice, representing 100 hours monthly or €4,000-5,000 in processing costs (assuming €40-50/hour for finance staff). The weekly errors you mentioned could add another 10-20% to these costs through rework and relationship management.

**Industry Comparison:**
Companies of similar size typically process invoices in 10-15 minutes with error rates below 2%. Your current 30-minute processing time suggests manual data entry and multiple approval steps that could be streamlined.

**Improvement Opportunities:**
Conservative estimates suggest that automating invoice capture and approval workflows could reduce processing time to 5-10 minutes per invoice, saving 65-80 hours monthly. Based on your volumes, this represents €2,600-4,000 in monthly savings.

**Reflective Question:**
"If invoice processing required 80% less time, what strategic financial analysis could your team provide to drive business growth?"
</examples>

<response_format>
Structure your report across 3 pages WITHOUT page number labels:

**First Section: Executive Overview**
- Executive Summary (2-3 sentences capturing main findings)
- Key Metrics at a Glance (visual representation of 3-4 critical metrics)
- Your Current State (brief analysis with specific pain points)
- Primary Opportunities (top 2-3 improvement areas)

**Second Section: Analysis & Insights**
- Industry Perspective (relevant benchmarks)
- Deeper dive into main challenges
- Strategic recommendations organized by impact/effort
- Expected outcomes with conservative ranges
- Relevant anonymized success story
- Self-assessment questions woven throughout

**Third Section: Exploring Possibilities**
- Potential improvement areas (conceptual, not prescriptive)
- Questions to consider for your business
- General timeline perspectives (quarters not weeks)
- Thought-provoking closing that encourages reflection

**Closing:**
- Simple invitation to explore these insights further
- No specific action items or meeting requests
- Focus on "food for thought" rather than "next steps"
</response_format>

<anonymization_techniques>
When presenting case studies:
- Use geographic regions: "A retail business in the Southeast"
- Present percentage improvements: "Reduced processing time by 75%"
- Create composite stories combining multiple client elements
- Use industry-appropriate pseudonyms: "TechFlow Solutions" for software companies
- Focus on the journey and transformation, not identifying details
</anonymization_techniques>

<department_specific_focus>

**Sales & Business Development:**
- Emphasize conversation volume and quality
- Focus on time per prospect and conversion rates
- Highlight pipeline predictability and consistency
- Use metrics like cost per qualified lead

**Finance & Administration:**
- Center on processing time and accuracy
- Highlight approval bottlenecks and compliance
- Focus on month-end stress reduction
- Use metrics like days to close, error rates

**Customer Service & Support:**
- Emphasize response time and satisfaction
- Focus on repetitive inquiry handling
- Highlight 24/7 coverage possibilities
- Use metrics like first-response time, resolution rate

**Operations & Fulfillment:**
- Center on consistency and scalability
- Highlight bottleneck elimination
- Focus on quality maintenance at scale
- Use metrics like cycle time, error rates

**Marketing & Communications:**
- Emphasize content production efficiency
- Focus on campaign consistency
- Highlight personalization at scale
- Use metrics like content velocity, engagement rates

**Human Resources:**
- Center on candidate experience
- Highlight onboarding efficiency
- Focus on compliance automation
- Use metrics like time-to-hire, onboarding time
</department_specific_focus>

<implementation_guidance>
When discussing improvements and timelines:

**Avoid Prescriptive Details:**
- DON'T: "Week 1-2: Interview recent departures"
- DO: "Understanding why employees leave through exit interviews could provide valuable insights"

**Use Conceptual Timeframes:**
- DON'T: "Implement in weeks 3-4 with daily check-ins"
- DO: "Quick wins might be achievable within the first quarter"

**Frame as Possibilities, Not Plans:**
- DON'T: "Phase 1: Foundation (Months 1-3) with these specific steps..."
- DO: "Initial improvements often focus on understanding root causes..."

**Suggest Exploration, Not Action:**
- DON'T: "Schedule a 2-hour workshop with your leadership team to..."
- DO: "These insights might spark valuable discussions within your team about priorities"

**Keep Recommendations High-Level:**
- Focus on WHAT could be improved, not HOW to implement
- Suggest outcomes, not specific methodologies
- Present options, not prescribed solutions
- Inspire thinking, not direct action

**Closing Approach:**
- End with thought-provoking questions
- Invite further exploration if interested
- Avoid specific next steps or commitments
- Position as "food for thought" from their quiz responses
</implementation_guidance>

<critical_instructions>
IMPORTANT: Every report must provide genuine value even if the recipient never contacts us
IMPORTANT: Use specific examples and metrics, not vague generalities
IMPORTANT: Acknowledge the expertise and context the business owner brings
IMPORTANT: Position insights as collaborative discovery, not prescriptive solutions
IMPORTANT: The goal is gratitude and voluntary engagement, not pressure or fear
</critical_instructions>`
          },
          {
            role: 'user',
            content: analysisPrompt
          }
        ],
        temperature: 0.4,
        max_tokens: 4000
      })

      const responseContent = completion.choices[0]?.message?.content
      if (!responseContent) {
        throw new Error('No response from Sonnet 4.0')
      }

      // Return the markdown report content directly
      const reportContent = responseContent.trim()

      // Log AI response for debugging
      if (debugLogger) {
        try {
          await debugLogger.logAIResponse({
            response: { reportContent, length: reportContent.length },
            model: 'sonnet-4',
            step: 'business_analysis',
            success: true
          })
        } catch (error) {
          console.error('Failed to log business analysis response:', error)
        }
      }

      return reportContent
    } catch (error) {
      console.error('Error in business analysis:', error)
      
      // Log AI error for debugging
      if (debugLogger) {
        try {
          await debugLogger.logAIResponse({
            response: null,
            model: 'sonnet-4',
            step: 'business_analysis',
            success: false,
            error: error instanceof Error ? error.message : 'Unknown error'
          })
        } catch (debugError) {
          console.error('Failed to log business analysis error:', debugError)
        }
      }
      
      throw new Error(`Business analysis failed: ${error instanceof Error ? error.message : 'Unknown error'}`)
    }
  }

  /**
   * Create sitemap analysis prompt for Gemini Flash 2.5
   */
  private createSitemapAnalysisPrompt(request: SitemapAnalysisRequest): string {
    const { sitemap, websiteUrl } = request
    
    return `Analyze this website sitemap and identify key business pages:

Website URL: ${websiteUrl}
Total Pages in Sitemap: ${sitemap.totalPages}

Sitemap Pages:
${sitemap.pages.slice(0, 50).map(page => `- ${page.url} (priority: ${page.priority || 'N/A'})`).join('\n')}

Please identify and categorize the most important pages for business analysis. Focus on finding:

1. **Team/About Pages**: Leadership team, company information, about us, our story
2. **Solutions/Services Pages**: What they offer, products, services, capabilities
3. **Contact Pages**: Contact information, office locations, support

Return a JSON object with this exact structure:
{
  "keyPages": {
    "teamPage": "URL of the main team/about page",
    "solutionsPage": "URL of the main solutions/services page", 
    "contactPage": "URL of the main contact page",
    "aboutPage": "URL of the main about page",
    "servicesPage": "URL of the main services page"
  },
  "categorizedPages": [
    {
      "category": "team|solutions|contact|about|other",
      "url": "page URL",
      "confidence": 0.95,
      "reasoning": "Why this page fits this category"
    }
  ],
  "recommendations": [
    "Suggested pages to prioritize for scraping based on business value"
  ]
}

Only include URLs that actually exist in the sitemap. If a category isn't found, omit that field from keyPages.`
  }

  /**
   * Create business analysis prompt for Sonnet 4.0
   */
  private createBusinessAnalysisPrompt(request: BusinessAnalysisRequest): string {
    const { quizAnswers, websiteContent, contactDetails, departmentRoute } = request
    
    return `You are analyzing limited quiz response data from an SMB to generate a personalized business analysis report that provides such valuable insights that the recipient feels compelled to reach out with gratitude. Your goal is to create value even if they never contact us.

## COMPANY CONTEXT
Company: ${contactDetails.company_name}
Contact: ${contactDetails.full_name} (${contactDetails.business_email})
Website: ${contactDetails.website || 'Not provided'}
Department Focus: ${departmentRoute}

## DATA SOURCES

### Quiz Response Data (12-15 data points):
${JSON.stringify(quizAnswers, null, 2)}

### Website Analysis Summary:
Landing Page: ${websiteContent.landingPage.title}
Business Content: ${websiteContent.landingPage.content.substring(0, 2000)}...

Additional Pages Analyzed:
${websiteContent.additionalPages.map(page => `- ${page.title}: ${page.content.substring(0, 500)}...`).join('\n')}

## ANALYSIS METHODOLOGY

Follow this structured analysis process:

1. **Data Integration & Context Building**
   - Review quiz responses to identify primary pain points and operational challenges
   - Analyze website content to understand industry context and business model
   - Map responses to relevant department-specific benchmarks for ${departmentRoute}
   - Identify patterns that suggest high-impact automation opportunities

2. **Current State Analysis**
   - Quantify time and resource investments based on quiz responses
   - Calculate current operational costs using conservative estimates
   - Identify process maturity level and automation readiness
   - Acknowledge data limitations transparently

3. **Benchmark Selection & Comparison**
   - Select 2-3 relevant industry benchmarks for their company size and sector
   - Use percentile rankings and ranges rather than single-point estimates
   - Focus on metrics SMBs care about: revenue per employee, customer acquisition costs, profit margins
   - Present benchmarks that inspire improvement without causing shame

4. **Strategic Recommendations Development**
   - Generate 3-5 specific, actionable recommendations
   - Structure as: Quick wins (0-90 days), Core improvements (3-12 months), Strategic initiatives (12+ months)
   - Calculate ROI using conservative estimates with ranges (e.g., "15-25% improvement")
   - Connect each recommendation to specific business outcomes

CRITICAL INSTRUCTIONS:
- Use tentative, professional language for ROI projections: "Research suggests..." "Conservative estimates indicate..."
- Acknowledge data limitations: "Based on the information provided..." "While we'd need more details to be certain..."
- Position as collaborative discovery, not prescriptive solutions
- Focus on business outcomes, not technical features
- Calculate ROI conservatively: Time Investment × 70% efficiency gain, with 25% service fee
- Every insight must provide genuine value even if they never contact us

Generate a comprehensive business analysis report in markdown format following the structure outlined in your system prompt. The report should include:

1. **Executive Summary** - A compelling 3-4 sentence overview of the business situation, key challenges, and transformation opportunities

2. **Current State Analysis** - Including:
   - Industry positioning and competitive landscape
   - Business model insights
   - Key operational challenges (3-5 specific pain points)
   - Core strengths to build upon
   - Automation/improvement opportunities

3. **Automation Opportunities** - For each opportunity include:
   - Priority level (high/medium/low)
   - Specific business area
   - Detailed description
   - Implementation complexity
   - Timeline estimates
   - Estimated savings (hours per week, monthly cost savings, annual impact)

4. **ROI Projections** - Conservative estimates including:
   - Implementation investment range
   - Payback period
   - First year ROI percentage
   - Three year cumulative return

5. **Implementation Roadmap** - Phased approach with:
   - Phase names and durations
   - Key objectives for each phase
   - Expected deliverables

6. **Next Steps** - Specific, actionable recommendations for the client

Format the report using proper markdown with headers (#, ##), bullet points, and **bold** text for emphasis. Make it visually scannable and professional.

## DEPARTMENT-SPECIFIC FOCUS FOR ${departmentRoute.toUpperCase()}:

${this.getDepartmentGuidelines(departmentRoute)}

## ANALYSIS GUIDELINES:
1. **Value First**: Every insight must provide genuine value even if they never contact us
2. **Conservative ROI**: Use ranges (15-25%), acknowledge limitations, base on 70% efficiency gains
3. **Language Patterns**: 
   - ROI: "Research suggests similar companies typically see..."
   - Recommendations: "One approach would be to..." / "Companies in similar situations have found success by..."
   - Trust Building: "Based on the information provided..." / "While we'd need more details to be certain..."
4. **Specific Focus**: Address ${departmentRoute} department challenges with relevant benchmarks
5. **Collaborative Tone**: Position as discovery, not prescription
6. **Service-as-Software**: Focus on outcomes delivered, not tools provided
7. **Acknowledge Expertise**: Respect the business owner's context and knowledge
8. **Inspire Action**: Create insights so valuable they voluntarily reach out to thank us

Generate an analysis that provides such value that the recipient feels compelled to reach out with gratitude.`
  }


  /**
   * Get department-specific analysis guidelines
   */
  private getDepartmentGuidelines(departmentRoute: string): string {
    const guidelines: Record<string, string> = {
      'sales': `**Sales & Business Development Focus:**
- Emphasize conversation volume and quality metrics
- Focus on time per prospect and conversion rates  
- Highlight pipeline predictability and consistency
- Use metrics like cost per qualified lead, response rates
- Address prospecting efficiency and scaling challenges
- Benchmark against: 20-30% prospect-to-meeting conversion rates`,

      'finance': `**Finance & Administration Focus:**
- Center on processing time and accuracy metrics
- Highlight approval bottlenecks and compliance challenges
- Focus on month-end stress reduction and error elimination
- Use metrics like days to close, error rates, processing time per invoice
- Address manual data entry and approval workflow issues
- Benchmark against: 10-15 minute invoice processing, <2% error rates`,

      'customer-service': `**Customer Service & Support Focus:**
- Emphasize response time and customer satisfaction metrics
- Focus on repetitive inquiry handling and first-contact resolution
- Highlight 24/7 coverage possibilities and consistency
- Use metrics like first-response time, resolution rate, inquiry volume
- Address team burnout from repetitive questions
- Benchmark against: <2 hour first response, 75-85% first-contact resolution`,

      'operations': `**Operations & Fulfillment Focus:**
- Center on consistency and scalability challenges
- Highlight bottleneck elimination and quality maintenance at scale
- Focus on process standardization and error reduction
- Use metrics like cycle time, error rates, throughput
- Address workflow coordination and status visibility
- Benchmark against: industry-specific operational efficiency ratios`,

      'marketing': `**Marketing & Communications Focus:**
- Emphasize content production efficiency and campaign consistency
- Focus on personalization at scale and multi-channel coordination
- Highlight brand consistency and content velocity challenges
- Use metrics like content velocity, engagement rates, campaign ROI
- Address time allocation between strategic vs tactical work
- Benchmark against: content production speeds and engagement benchmarks`,

      'hr': `**Human Resources Focus:**
- Center on candidate experience and time-to-hire metrics
- Highlight onboarding efficiency and compliance automation
- Focus on employee satisfaction and retention factors
- Use metrics like time-to-hire, onboarding time, employee satisfaction scores
- Address recruiting bottlenecks and administrative overhead
- Benchmark against: 30-45 day time-to-hire, 80%+ new hire satisfaction`
    }

    return guidelines[departmentRoute] || `**General Business Process Focus:**
- Focus on operational efficiency and scalability
- Highlight process standardization opportunities
- Address time and resource optimization
- Use relevant business metrics for analysis`
  }
}

// Export singleton instance
export const openRouterClient = new OpenRouterClient()