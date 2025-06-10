"use client"

import Link from "next/link"
import { BlogPost } from "@/types/blog"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Text, Heading } from "@/components/ui/typography"
import { Calendar, Clock, Tag } from "lucide-react"
import { cn } from "@/lib/utils"

interface BlogCardProps {
  post: BlogPost
  className?: string
}

export function BlogCard({ post, className }: BlogCardProps) {
  const formattedDate = new Date(post.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return (
    <Card className={cn(
      "group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-gray-200 overflow-hidden",
      className
    )}>
      <Link href={`/blog/${post.slug}`} className="block">
        {/* Featured Image */}
        <div className="aspect-video bg-gradient-to-br from-blue-50 to-blue-100 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10" />
          <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
            <Text className="text-xs font-medium text-gray-700 capitalize">
              {post.category.replace('-', ' ')}
            </Text>
          </div>
        </div>

        <CardHeader className="pb-4">
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <Text className="text-xs">{formattedDate}</Text>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <Text className="text-xs">{post.readingTime} min read</Text>
            </div>
          </div>
          
          <Heading 
            level="3" 
            className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2"
          >
            {post.title}
          </Heading>
        </CardHeader>

        <CardContent className="pt-0">
          <Text className="text-gray-600 line-clamp-3 mb-4">
            {post.excerpt}
          </Text>

          {/* Author */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
              <Text className="text-xs font-semibold text-blue-600">
                {post.author.name.split(' ').map(n => n[0]).join('')}
              </Text>
            </div>
            <div>
              <Text className="text-sm font-medium text-gray-900">
                {post.author.name}
              </Text>
              <Text className="text-xs text-gray-500">
                {post.author.role}
              </Text>
            </div>
          </div>

          {/* Tags */}
          {post.tags.length > 0 && (
            <div className="flex items-center gap-2 flex-wrap">
              <Tag className="w-3 h-3 text-gray-400" />
              {post.tags.slice(0, 3).map((tag, index) => (
                <span
                  key={index}
                  className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </CardContent>
      </Link>
    </Card>
  )
}