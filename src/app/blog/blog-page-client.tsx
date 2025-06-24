"use client"

import { useState } from "react"
import { BlogCategory } from "@/types/blog"
import { sampleBlogPosts, getBlogPostsByCategory } from "@/config/blog"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { CategoryFilter } from "@/components/blog/category-filter"
import { BlogGrid } from "@/components/blog/blog-grid"

export function BlogPageClient() {
  const [activeCategory, setActiveCategory] = useState<BlogCategory | 'all'>('all')
  const filteredPosts = getBlogPostsByCategory(activeCategory)

  return (
    <Section padding="md" background="white" className="pb-20">
      <Container className="max-w-6xl">
        {/* Category Filter */}
        <CategoryFilter 
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          className="mb-8"
        />
        
        {/* Subtle divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-10" />
        
        {/* Blog Posts Grid */}
        <BlogGrid posts={filteredPosts} />
      </Container>
    </Section>
  )
}