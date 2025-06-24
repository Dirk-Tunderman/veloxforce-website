"use client"

import { useState, useEffect } from "react"
import { BlogPost, BlogCategory } from "@/types/blog"
import { BlogCard } from "./blog-card"
import { cn } from "@/lib/utils"
import { Text } from "@/components/ui/typography"

interface BlogGridProps {
  posts: BlogPost[]
  className?: string
}

export function BlogGrid({ posts, className }: BlogGridProps) {
  const [visiblePosts, setVisiblePosts] = useState<BlogPost[]>([])
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setVisiblePosts(posts)
    setIsVisible(true)
  }, [posts])

  if (posts.length === 0) {
    return (
      <div className="text-center py-16">
        <Text className="text-gray-500 text-lg">
          No articles found in this category yet.
        </Text>
        <Text className="text-gray-400 text-sm mt-2">
          Check back soon for new content!
        </Text>
      </div>
    )
  }

  return (
    <div 
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-opacity duration-500",
        isVisible ? "opacity-100" : "opacity-0",
        className
      )}
    >
      {visiblePosts.map((post, index) => (
        <div
          key={post.id}
          className="animate-fadeIn"
          style={{ 
            animationDelay: `${index * 0.1}s`,
            animationFillMode: 'both'
          }}
        >
          <BlogCard post={post} />
        </div>
      ))}
    </div>
  )
}