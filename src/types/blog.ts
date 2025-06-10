export type BlogCategory = 'case-studies' | 'industry-trends' | 'best-practices' | 'team-insights'

export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  category: BlogCategory
  author: {
    name: string
    role: string
    avatar?: string
  }
  publishedAt: string
  updatedAt?: string
  readingTime: number
  featuredImage: string
  tags: string[]
  featured?: boolean
}

export interface BlogCategoryInfo {
  id: BlogCategory
  name: string
  description: string
  icon: string
  color: string
  bgColor: string
}

export interface BlogFilterState {
  category: BlogCategory | 'all'
  searchTerm?: string
}