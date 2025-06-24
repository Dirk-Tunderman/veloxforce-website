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
    <div className={cn("flex flex-wrap gap-2 justify-center", className)}>
      {/* All Posts Button */}
      <Button
        variant={activeCategory === 'all' ? 'default' : 'outline'}
        className={cn(
          "h-auto py-2 px-4 rounded-lg transition-all duration-200 border",
          activeCategory === 'all' 
            ? "bg-blue-600 text-white border-blue-600 shadow-sm hover:bg-blue-700" 
            : "bg-white border-gray-200 hover:border-gray-300 hover:bg-gray-50"
        )}
        onClick={() => onCategoryChange('all')}
      >
        <div className="flex items-center gap-2">
          <Grid3X3 className={cn(
            "w-4 h-4",
            activeCategory === 'all' ? "text-white" : "text-gray-700"
          )} />
          <Text className={cn(
            "font-medium text-sm",
            activeCategory === 'all' ? "text-white" : "text-gray-700"
          )}>
            All Posts
          </Text>
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
              "h-auto py-2 px-4 rounded-lg transition-all duration-200 border",
              isActive 
                ? "bg-blue-600 text-white border-blue-600 shadow-sm hover:bg-blue-700" 
                : "bg-white border-gray-200 hover:border-gray-300 hover:bg-gray-50"
            )}
            onClick={() => onCategoryChange(category.id)}
          >
            <div className="flex items-center gap-2">
              <IconComponent className={cn(
                "w-4 h-4",
                isActive ? "text-white" : "text-gray-700"
              )} />
              <Text className={cn(
                "font-medium text-sm",
                isActive ? "text-white" : "text-gray-700"
              )}>
                {category.name}
              </Text>
            </div>
          </Button>
        )
      })}
    </div>
  )
}