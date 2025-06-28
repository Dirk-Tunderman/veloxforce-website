import { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { getBlogPostBySlug, getRelatedPosts } from "@/config/blog"
import { MainLayout } from "@/components/layout/main-layout"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"
import { Button } from "@/components/ui/button"
import { constructMetadata } from "@/components/seo"
import { AuthorInfo } from "@/components/blog/author-info"
import { BlogCard } from "@/components/blog/blog-card"
import { ReadingProgress } from "@/components/blog/reading-progress"
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react"

function formatBlogContent(content: string): string {
  return content
    // Convert markdown headers to HTML with proper styling
    .replace(/^# (.+)$/gm, '<h1 class="text-4xl font-bold text-gradient mb-8 mt-12 first:mt-0">$1</h1>')
    .replace(/^## (.+)$/gm, '<h2 class="text-3xl font-semibold text-gray-900 mb-6 mt-10">$1</h2>')
    .replace(/^### (.+)$/gm, '<h3 class="text-2xl font-medium text-gray-900 mb-4 mt-8">$1</h3>')
    
    // Handle emphasis and formatting
    .replace(/\*\*(.+?)\*\*/g, '<strong class="font-semibold text-gray-900">$1</strong>')
    .replace(/\*(.+?)\*/g, '<em class="italic">$1</em>')
    
    // Handle quotes - enhance visual styling
    .replace(/^"(.+)"$/gm, '<blockquote class="border-l-4 border-blue-500 pl-6 py-4 my-8 bg-blue-50 rounded-r-lg"><p class="text-lg italic text-gray-700 mb-0">"$1"</p></blockquote>')
    
    // Handle CTA sections - convert markdown CTA to styled component
    .replace(/\*\*Ready to Focus on Strategy Instead of Operations\?\*\*\s*\n\n\*\*\[Start Your Strategic Acceleration →\]\*\*\s*\n\*(.+?)\*/gm, 
      '<div class="cta-section"><h3 class="text-2xl font-bold text-blue-900 mb-4">Ready to Focus on Strategy Instead of Operations?</h3><a href="/tools/business-audit" class="inline-block bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-lg font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 mb-4">Start Your Strategic Acceleration →</a><p class="text-sm text-gray-600 italic">$1</p></div>')
    
    // Handle horizontal rules as section dividers
    .replace(/^---$/gm, '<div class="border-t border-gray-200 my-12"></div>')
    
    // Handle lists
    .replace(/^(\d+)\. (.+)$/gm, '<li class="mb-2">$2</li>')
    .replace(/^- (.+)$/gm, '<li class="mb-2">$1</li>')
    
    // Convert line breaks to paragraphs
    .split('\n\n')
    .map(paragraph => {
      if (paragraph.trim() === '') return ''
      if (paragraph.includes('<h1') || paragraph.includes('<h2') || paragraph.includes('<h3') || 
          paragraph.includes('<blockquote') || paragraph.includes('<div class="border-t') ||
          paragraph.includes('<li') || paragraph.includes('<div class="cta-section"')) {
        return paragraph
      }
      return `<p class="mb-6 leading-relaxed text-gray-700">${paragraph}</p>`
    })
    .join('\n')
    
    // Enhance financial figures
    .replace(/(€[\d,]+(\+)?)/g, '<span class="font-semibold text-blue-600">$1</span>')
    .replace(/(\d+%)/g, '<span class="font-semibold text-emerald-600">$1</span>')
    .replace(/(\d+X)/g, '<span class="font-semibold text-purple-600">$1</span>')
}

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = getBlogPostBySlug(params.slug)
  
  if (!post) {
    return constructMetadata({
      title: "Post Not Found | Veloxforce Blog",
      description: "The requested blog post could not be found.",
    })
  }

  return constructMetadata({
    title: `${post.title} | Veloxforce Blog`,
    description: post.excerpt,
    keywords: [...post.tags, "business automation", "AI", "veloxforce"],
    pathname: `/blog/${post.slug}`,
  })
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPostBySlug(params.slug)
  
  if (!post) {
    notFound()
  }

  const relatedPosts = getRelatedPosts(post.id, post.category, 3)
  
  const formattedDate = new Date(post.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return (
    <MainLayout>
      <ReadingProgress />
      {/* Hero Section */}
      <Section padding="xl" background="white-to-light" className="py-20">
        <Container className="max-w-4xl">
          {/* Back Button */}
          <div className="mb-8">
            <Button variant="ghost" asChild className="p-0 h-auto hover:bg-transparent">
              <Link href="/blog" className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
                <ArrowLeft className="w-4 h-4" />
                <Text className="font-medium">Back to Blog</Text>
              </Link>
            </Button>
          </div>

          {/* Article Header */}
          <div className="space-y-6">
            {/* Category Badge */}
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium capitalize">
              {post.category.replace('-', ' ')}
            </div>

            {/* Title */}
            <Heading 
              level="1" 
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gradient"
            >
              {post.title}
            </Heading>

            {/* Meta Information */}
            <div className="flex items-center gap-6 text-gray-600">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <Text className="text-sm">{formattedDate}</Text>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <Text className="text-sm">{post.readingTime} min read</Text>
              </div>
            </div>

            {/* Excerpt */}
            <Text className="text-xl text-gray-700 leading-relaxed">
              {post.excerpt}
            </Text>

            {/* Author */}
            <AuthorInfo author={post.author} publishedDate={formattedDate} />
          </div>
        </Container>
      </Section>

      {/* Featured Image */}
      {post.featuredImage && (
        <Section padding="none" background="white">
          <Container className="max-w-6xl">
            <div className="aspect-video bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl relative overflow-hidden mb-16">
              <img
                src={post.featuredImage}
                alt={post.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10" />
            </div>
          </Container>
        </Section>
      )}

      {/* Article Content */}
      <Section padding="xl" background="white">
        <Container className="max-w-4xl">
          <article className="prose prose-lg prose-gray max-w-none">
            <div 
              className="content-formatting"
              dangerouslySetInnerHTML={{ 
                __html: formatBlogContent(post.content)
              }}
            />
          </article>

          {/* Tags */}
          {post.tags.length > 0 && (
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex items-center gap-2 flex-wrap">
                <Tag className="w-4 h-4 text-gray-400" />
                <Text className="text-sm text-gray-600 font-medium mr-2">Tags:</Text>
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-sm text-blue-600 bg-blue-50 px-3 py-1 rounded-full hover:bg-blue-100 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </Container>
      </Section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <Section padding="xl" background="light-blue">
          <Container className="max-w-6xl">
            <div className="text-center mb-12">
              <Heading level="2" className="text-3xl font-bold text-gray-900 mb-4">
                Related Articles
              </Heading>
              <Text className="text-gray-600">
                More insights on {post.category.replace('-', ' ')}
              </Text>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <BlogCard key={relatedPost.id} post={relatedPost} />
              ))}
            </div>

            <div className="text-center mt-12">
              <Button 
                variant="outline"
                size="lg"
                asChild
                className="px-8"
              >
                <Link href="/blog">
                  View All Articles
                </Link>
              </Button>
            </div>
          </Container>
        </Section>
      )}
    </MainLayout>
  )
}