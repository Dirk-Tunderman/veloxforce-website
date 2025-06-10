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
    <>
      {/* Category Filter Section */}
      <Section padding="lg" background="white">
        <Container className="max-w-6xl">
          <CategoryFilter 
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
            className="mb-12"
          />
        </Container>
      </Section>

      {/* Blog Posts Grid */}
      <Section padding="xl" background="light-blue">
        <Container className="max-w-6xl">
          <BlogGrid posts={filteredPosts} />
        </Container>
      </Section>
    </>
  )
}