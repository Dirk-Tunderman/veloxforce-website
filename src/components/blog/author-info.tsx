import { Text } from "@/components/ui/typography"
import { cn } from "@/lib/utils"

interface AuthorInfoProps {
  author: {
    name: string
    role: string
    avatar?: string
  }
  publishedDate: string
  className?: string
}

export function AuthorInfo({ author, publishedDate, className }: AuthorInfoProps) {
  return (
    <div className={cn("flex items-center gap-4 py-6 border-t border-gray-200", className)}>
      {/* Avatar */}
      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
        <Text className="text-sm font-semibold text-blue-600">
          {author.name.split(' ').map(n => n[0]).join('')}
        </Text>
      </div>

      {/* Author Details */}
      <div className="flex-1">
        <Text className="font-semibold text-gray-900">
          {author.name}
        </Text>
        <Text className="text-sm text-gray-600">
          {author.role}
        </Text>
      </div>

      {/* Published Date */}
      <div className="text-right">
        <Text className="text-sm text-gray-500">
          Published
        </Text>
        <Text className="text-sm font-medium text-gray-700">
          {publishedDate}
        </Text>
      </div>
    </div>
  )
}