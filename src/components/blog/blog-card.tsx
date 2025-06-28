"use client"

import Link from "next/link"
import Image from "next/image"
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
      "group cursor-pointer transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5 border border-gray-100 overflow-hidden bg-white",
      className
    )}>
      <Link href={`/blog/${post.slug}`} className="block">
        {/* Featured Image */}
        <div className="aspect-video relative overflow-hidden bg-gray-100">
          <Image
            src={post.featuredImage}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur px-2.5 py-1 rounded-md shadow-sm">
            <Text className="text-xs font-medium text-gray-600 capitalize">
              {post.category.replace('-', ' ')}
            </Text>
          </div>
        </div>

        <CardHeader className="pb-3 pt-4">
          <div className="flex items-center gap-3 text-sm text-gray-500 mb-2">
            <div className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              <Text className="text-xs">{formattedDate}</Text>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              <Text className="text-xs">{post.readingTime} min read</Text>
            </div>
          </div>
          
          <Heading 
            level="3" 
            className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2"
          >
            {post.title}
          </Heading>
        </CardHeader>

        <CardContent className="pt-0 pb-4">
          <Text className="text-gray-600 line-clamp-2 mb-4 text-sm">
            {post.excerpt}
          </Text>

          {/* Author and Tags Row */}
          <div className="flex items-center justify-between">
            {/* Author */}
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 bg-gray-100 rounded-full flex items-center justify-center">
                <Text className="text-xs font-semibold text-gray-600">
                  {post.author.name.split(' ').map(n => n[0]).join('')}
                </Text>
              </div>
              <div>
                <Text className="text-sm font-medium text-gray-700">
                  {post.author.name}
                </Text>
              </div>
            </div>

            {/* Primary Tag */}
            {post.tags.length > 0 && (
              <span className="text-xs text-gray-500 bg-gray-50 px-2.5 py-1 rounded-md border border-gray-100">
                {post.tags[0]}
              </span>
            )}
          </div>
        </CardContent>
      </Link>
    </Card>
  )
}