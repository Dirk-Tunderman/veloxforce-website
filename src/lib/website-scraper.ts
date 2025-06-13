import puppeteer, { Browser, Page } from 'puppeteer'
import { load } from 'cheerio'

export interface ScrapedContent {
  url: string
  title: string
  content: string
  metaDescription?: string
  headings: string[]
}

export interface SitemapPage {
  url: string
  priority?: number
  lastmod?: string
  changefreq?: string
}

export interface SitemapAnalysis {
  pages: SitemapPage[]
  totalPages: number
  sitemapUrl?: string
  error?: string
}

export interface KeyPagesResult {
  teamPage?: string
  solutionsPage?: string
  contactPage?: string
  aboutPage?: string
  servicesPage?: string
  foundPages: string[]
}

export class WebsiteScraper {
  private browser: Browser | null = null
  private readonly timeout = 30000 // 30 seconds
  private readonly userAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'

  /**
   * Initialize the browser for scraping
   */
  async init(): Promise<void> {
    if (!this.browser) {
      this.browser = await puppeteer.launch({
        headless: true,
        args: [
          '--no-sandbox',
          '--disable-setuid-sandbox',
          '--disable-dev-shm-usage',
          '--disable-accelerated-2d-canvas',
          '--no-first-run',
          '--no-zygote',
          '--disable-gpu'
        ]
      })
    }
  }

  /**
   * Close the browser
   */
  async close(): Promise<void> {
    if (this.browser) {
      await this.browser.close()
      this.browser = null
    }
  }

  /**
   * Normalize and validate URL
   */
  private normalizeUrl(url: string): string {
    try {
      // Add protocol if missing
      if (!/^https?:\/\//i.test(url)) {
        url = `https://${url}`
      }
      
      const urlObj = new URL(url)
      return urlObj.toString()
    } catch (error) {
      throw new Error(`Invalid URL: ${url}`)
    }
  }

  /**
   * Scrape the main landing page
   */
  async scrapeLandingPage(websiteUrl: string): Promise<ScrapedContent> {
    await this.init()
    
    const normalizedUrl = this.normalizeUrl(websiteUrl)
    let page: Page | null = null

    try {
      page = await this.browser!.newPage()
      await page.setUserAgent(this.userAgent)
      await page.setViewport({ width: 1280, height: 720 })

      // Navigate to the page
      await page.goto(normalizedUrl, {
        waitUntil: 'networkidle2',
        timeout: this.timeout
      })

      // Wait for content to load
      await new Promise(resolve => setTimeout(resolve, 2000))

      // Extract content
      const content = await page.evaluate(() => {
        // Remove script and style elements
        const scripts = document.querySelectorAll('script, style, noscript')
        scripts.forEach(el => el.remove())

        // Get title
        const title = document.title || document.querySelector('h1')?.textContent || ''

        // Get meta description
        const metaDescription = document.querySelector('meta[name="description"]')?.getAttribute('content') || ''

        // Get all headings
        const headings = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6'))
          .map(h => h.textContent?.trim())
          .filter(text => text && text.length > 0) as string[]

        // Get main content
        const bodyText = document.body.innerText || document.body.textContent || ''
        
        return {
          title: title.trim(),
          metaDescription: metaDescription.trim(),
          headings,
          content: bodyText.trim()
        }
      })

      return {
        url: normalizedUrl,
        title: content.title,
        content: this.cleanContent(content.content),
        metaDescription: content.metaDescription,
        headings: content.headings
      }

    } catch (error) {
      console.error(`Error scraping landing page ${normalizedUrl}:`, error)
      throw new Error(`Failed to scrape landing page: ${error instanceof Error ? error.message : 'Unknown error'}`)
    } finally {
      if (page) {
        await page.close()
      }
    }
  }

  /**
   * Discover and parse sitemap.xml
   */
  async discoverSitemap(websiteUrl: string): Promise<SitemapAnalysis> {
    const normalizedUrl = this.normalizeUrl(websiteUrl)
    const baseUrl = new URL(normalizedUrl).origin

    // Common sitemap locations
    const sitemapUrls = [
      `${baseUrl}/sitemap.xml`,
      `${baseUrl}/sitemap_index.xml`,
      `${baseUrl}/sitemaps.xml`,
      `${baseUrl}/sitemap/sitemap.xml`
    ]

    for (const sitemapUrl of sitemapUrls) {
      try {
        const analysis = await this.parseSitemap(sitemapUrl)
        if (analysis.pages.length > 0) {
          analysis.sitemapUrl = sitemapUrl
          return analysis
        }
      } catch (error) {
        // Continue to next sitemap URL
        continue
      }
    }

    // If no sitemap found, try to discover from robots.txt
    try {
      const robotsAnalysis = await this.discoverSitemapFromRobots(baseUrl)
      if (robotsAnalysis.pages.length > 0) {
        return robotsAnalysis
      }
    } catch (error) {
      // Continue with fallback
    }

    // Return empty analysis if no sitemap found
    return {
      pages: [],
      totalPages: 0,
      error: 'No sitemap found'
    }
  }

  /**
   * Parse sitemap.xml and extract URLs
   */
  private async parseSitemap(sitemapUrl: string): Promise<SitemapAnalysis> {
    try {
      // Use a more compatible approach for fetching
      let xmlContent: string
      
      if (typeof fetch === 'undefined') {
        // Server-side: use dynamic import
        const fetch = (await import('node-fetch')).default
        const response = await fetch(sitemapUrl, {
          headers: {
            'User-Agent': this.userAgent
          }
        })

        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`)
        }

        xmlContent = await response.text()
      } else {
        // Client-side: use built-in fetch
        const response = await fetch(sitemapUrl, {
          headers: {
            'User-Agent': this.userAgent
          }
        })

        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`)
        }

        xmlContent = await response.text()
      }

      const $ = load(xmlContent, { xmlMode: true })

      const pages: SitemapPage[] = []

      // Handle sitemap index (multiple sitemaps)
      $('sitemap').each((_, element) => {
        const loc = $(element).find('loc').text().trim()
        if (loc) {
          // Note: For simplicity, we're not recursively parsing sitemap indexes
          // This could be enhanced to handle sitemap indexes
        }
      })

      // Handle regular sitemap
      $('url').each((_, element) => {
        const loc = $(element).find('loc').text().trim()
        const priority = parseFloat($(element).find('priority').text()) || undefined
        const lastmod = $(element).find('lastmod').text().trim() || undefined
        const changefreq = $(element).find('changefreq').text().trim() || undefined

        if (loc) {
          pages.push({
            url: loc,
            priority,
            lastmod,
            changefreq
          })
        }
      })

      return {
        pages: pages.slice(0, 100), // Limit to first 100 pages
        totalPages: pages.length
      }

    } catch (error) {
      throw new Error(`Failed to parse sitemap: ${error instanceof Error ? error.message : 'Unknown error'}`)
    }
  }

  /**
   * Discover sitemap from robots.txt
   */
  private async discoverSitemapFromRobots(baseUrl: string): Promise<SitemapAnalysis> {
    try {
      const robotsUrl = `${baseUrl}/robots.txt`
      let robotsContent: string
      
      if (typeof fetch === 'undefined') {
        const fetch = (await import('node-fetch')).default
        const response = await fetch(robotsUrl)
        
        if (!response.ok) {
          throw new Error('robots.txt not found')
        }

        robotsContent = await response.text()
      } else {
        const response = await fetch(robotsUrl)
        
        if (!response.ok) {
          throw new Error('robots.txt not found')
        }

        robotsContent = await response.text()
      }
      const sitemapMatch = robotsContent.match(/Sitemap:\s*(.+)/i)
      
      if (sitemapMatch) {
        const sitemapUrl = sitemapMatch[1].trim()
        return await this.parseSitemap(sitemapUrl)
      }

      throw new Error('No sitemap in robots.txt')
    } catch (error) {
      throw new Error(`Failed to discover sitemap from robots.txt: ${error instanceof Error ? error.message : 'Unknown error'}`)
    }
  }

  /**
   * Scrape specific pages identified from sitemap analysis
   */
  async scrapePages(urls: string[]): Promise<ScrapedContent[]> {
    await this.init()
    const results: ScrapedContent[] = []

    for (const url of urls.slice(0, 5)) { // Limit to 5 pages to avoid overwhelming
      try {
        const content = await this.scrapePage(url)
        results.push(content)
        
        // Add delay between requests to be respectful
        await new Promise(resolve => setTimeout(resolve, 1000))
      } catch (error) {
        console.error(`Error scraping page ${url}:`, error)
        // Continue with other pages
      }
    }

    return results
  }

  /**
   * Scrape a single page
   */
  private async scrapePage(url: string): Promise<ScrapedContent> {
    let page: Page | null = null

    try {
      page = await this.browser!.newPage()
      await page.setUserAgent(this.userAgent)
      await page.setViewport({ width: 1280, height: 720 })

      await page.goto(url, {
        waitUntil: 'networkidle2',
        timeout: this.timeout
      })

      await new Promise(resolve => setTimeout(resolve, 1000))

      const content = await page.evaluate(() => {
        // Remove script and style elements
        const scripts = document.querySelectorAll('script, style, noscript')
        scripts.forEach(el => el.remove())

        const title = document.title || document.querySelector('h1')?.textContent || ''
        const metaDescription = document.querySelector('meta[name="description"]')?.getAttribute('content') || ''
        
        const headings = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6'))
          .map(h => h.textContent?.trim())
          .filter(text => text && text.length > 0) as string[]

        const bodyText = document.body.innerText || document.body.textContent || ''
        
        return {
          title: title.trim(),
          metaDescription: metaDescription.trim(),
          headings,
          content: bodyText.trim()
        }
      })

      return {
        url,
        title: content.title,
        content: this.cleanContent(content.content),
        metaDescription: content.metaDescription,
        headings: content.headings
      }

    } finally {
      if (page) {
        await page.close()
      }
    }
  }

  /**
   * Clean and normalize text content
   */
  private cleanContent(content: string): string {
    return content
      .replace(/\s+/g, ' ') // Replace multiple whitespace with single space
      .replace(/\n+/g, '\n') // Replace multiple newlines with single newline
      .trim()
      .substring(0, 10000) // Limit content length
  }

  /**
   * Generate fallback key pages discovery
   */
  async discoverKeyPages(websiteUrl: string, sitemapPages: SitemapPage[]): Promise<KeyPagesResult> {
    const baseUrl = this.normalizeUrl(websiteUrl)
    
    // Common patterns for key pages
    const patterns = {
      team: ['team', 'about-us', 'about', 'our-team', 'people', 'staff', 'leadership'],
      solutions: ['solutions', 'services', 'products', 'offerings', 'what-we-do'],
      contact: ['contact', 'contact-us', 'get-in-touch', 'reach-us'],
      about: ['about', 'about-us', 'who-we-are', 'company'],
      services: ['services', 'what-we-do', 'offerings', 'solutions']
    }

    const result: KeyPagesResult = {
      foundPages: []
    }

    // First, try to find pages from sitemap
    if (sitemapPages.length > 0) {
      for (const page of sitemapPages) {
        const urlPath = page.url.toLowerCase()
        
        if (!result.teamPage && patterns.team.some(pattern => urlPath.includes(pattern))) {
          result.teamPage = page.url
          result.foundPages.push(page.url)
        }
        
        if (!result.solutionsPage && patterns.solutions.some(pattern => urlPath.includes(pattern))) {
          result.solutionsPage = page.url
          result.foundPages.push(page.url)
        }
        
        if (!result.contactPage && patterns.contact.some(pattern => urlPath.includes(pattern))) {
          result.contactPage = page.url
          result.foundPages.push(page.url)
        }
        
        if (!result.aboutPage && patterns.about.some(pattern => urlPath.includes(pattern))) {
          result.aboutPage = page.url
          result.foundPages.push(page.url)
        }
      }
    }

    // Fallback: try common URL patterns
    if (result.foundPages.length === 0) {
      const commonUrls = [
        `${baseUrl}/about`,
        `${baseUrl}/about-us`,
        `${baseUrl}/team`,
        `${baseUrl}/services`,
        `${baseUrl}/solutions`,
        `${baseUrl}/contact`,
        `${baseUrl}/contact-us`
      ]

      for (const url of commonUrls) {
        try {
          let response: any
          
          if (typeof fetch === 'undefined') {
            const fetch = (await import('node-fetch')).default
            response = await fetch(url, { method: 'HEAD' })
          } else {
            response = await fetch(url, { method: 'HEAD' })
          }
          
          if (response.ok) {
            result.foundPages.push(url)
            
            const urlPath = url.toLowerCase()
            if (!result.teamPage && (urlPath.includes('team') || urlPath.includes('about'))) {
              result.teamPage = url
            }
            if (!result.contactPage && urlPath.includes('contact')) {
              result.contactPage = url
            }
            if (!result.solutionsPage && (urlPath.includes('solutions') || urlPath.includes('services'))) {
              result.solutionsPage = url
            }
          }
        } catch (error) {
          // Page doesn't exist, continue
        }
      }
    }

    return result
  }
}

// Export singleton instance
export const websiteScraper = new WebsiteScraper()

// Helper function for easy use
export async function scrapeWebsiteForAnalysis(websiteUrl: string) {
  try {
    // Scrape landing page
    const landingPage = await websiteScraper.scrapeLandingPage(websiteUrl)
    
    // Discover sitemap
    const sitemapAnalysis = await websiteScraper.discoverSitemap(websiteUrl)
    
    // Discover key pages
    const keyPages = await websiteScraper.discoverKeyPages(websiteUrl, sitemapAnalysis.pages)
    
    // Scrape key pages
    const additionalPages = await websiteScraper.scrapePages(keyPages.foundPages)
    
    return {
      landingPage,
      sitemapAnalysis,
      keyPages,
      additionalPages,
      allContent: [landingPage, ...additionalPages]
    }
  } finally {
    await websiteScraper.close()
  }
}