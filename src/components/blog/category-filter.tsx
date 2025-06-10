"use client"

import { BlogCategory } from "@/types/blog"
import { blogCategories } from "@/config/blog"
import { Button } from "@/components/ui/button"
import { Text } from "@/components/ui/typography"
import { BookOpen, TrendingUp, Lightbulb, Users, Grid3X3 } from "lucide-react"
import { cn } from "@/lib/utils"

interface CategoryFilterProps {
  activeCategory: BlogCategory | 'all'
  onCategoryChange: (category: BlogCategory | 'all') => void
  className?: string
}

const iconMap = {
  'BookOpen': BookOpen,
  'TrendingUp': TrendingUp,
  'Lightbulb': Lightbulb,
  'Users': Users,
}

export function CategoryFilter({ activeCategory, onCategoryChange, className }: CategoryFilterProps) {
  return (
    <div className={cn("flex flex-wrap gap-3 justify-center", className)}>
      {/* All Posts Button */}
      <Button
        variant={activeCategory === 'all' ? 'default' : 'outline'}
        className={cn(
          "h-auto py-3 px-6 rounded-xl transition-all duration-300",
          activeCategory === 'all' 
            ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-md" 
            : "hover:border-blue-300 hover:shadow-sm"
        )}
        onClick={() => onCategoryChange('all')}
      >
        <div className="flex items-center gap-3">
          <div className={cn(
            "w-8 h-8 rounded-lg flex items-center justify-center",
            activeCategory === 'all' ? "bg-white/20" : "bg-gray-100"
          )}>
            <Grid3X3 className={cn(
              "w-4 h-4",
              activeCategory === 'all' ? "text-white" : "text-gray-600"
            )} />
          </div>
          <div className="text-left">
            <Text className={cn(
              "font-semibold text-sm",
              activeCategory === 'all' ? "text-white" : "text-gray-900"
            )}>
              All Posts
            </Text>
            <Text className={cn(
              "text-xs",
              activeCategory === 'all' ? "text-white/80" : "text-gray-500"
            )}>
              View all articles
            </Text>
          </div>
        </div>
      </Button>

      {/* Category Buttons */}
      {blogCategories.map((category) => {
        const isActive = activeCategory === category.id
        const IconComponent = iconMap[category.icon as keyof typeof iconMap]

        return (
          <Button
            key={category.id}
            variant={isActive ? 'default' : 'outline'}
            className={cn(
              "h-auto py-3 px-6 rounded-xl transition-all duration-300",
              isActive 
                ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-md" 
                : "hover:border-blue-300 hover:shadow-sm"
            )}
            onClick={() => onCategoryChange(category.id)}
          >
            <div className="flex items-center gap-3">
              <div className={cn(
                "w-8 h-8 rounded-lg flex items-center justify-center",
                isActive ? "bg-white/20" : category.bgColor
              )}>
                <IconComponent className={cn(
                  "w-4 h-4",
                  isActive ? "text-white" : category.color
                )} />
              </div>
              <div className="text-left">
                <Text className={cn(
                  "font-semibold text-sm",
                  isActive ? "text-white" : "text-gray-900"
                )}>
                  {category.name}
                </Text>
                <Text className={cn(
                  "text-xs",
                  isActive ? "text-white/80" : "text-gray-500"
                )}>
                  {category.description}
                </Text>
              </div>
            </div>
          </Button>
        )
      })}
    </div>
  )
}