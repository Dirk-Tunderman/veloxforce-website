"use client"

import { Play, PlayCircle } from "lucide-react"
import { Text } from "@/components/ui/typography"

interface VideoPlaceholderProps {
  title: string
  description: string
  badge?: string
  videoUrl?: string
  className?: string
  aspectRatio?: "video" | "square" | "wide"
}

export function VideoPlaceholder({
  title,
  description,
  badge = "Watch Video",
  videoUrl,
  className = "",
  aspectRatio = "video"
}: VideoPlaceholderProps) {
  const aspectClasses = {
    video: "aspect-video",
    square: "aspect-square", 
    wide: "aspect-[21/9]"
  }

  return (
    <div className={`relative bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 rounded-2xl overflow-hidden shadow-2xl ${aspectClasses[aspectRatio]} group cursor-pointer ${className}`}>
      {/* Video Placeholder Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-purple-900/20 to-indigo-900/30"></div>
      
      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px]"></div>
      </div>

      {/* Video Placeholder Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center space-y-6 px-8">
          {/* Play Button */}
          <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto hover:bg-white/30 transition-all duration-300 group-hover:scale-110 shadow-lg">
            <PlayCircle className="w-14 h-14 text-white group-hover:scale-110 transition-transform" />
          </div>
          
          {/* Video Description */}
          <div className="text-white space-y-2">
            <Text className="font-semibold text-xl mb-2 leading-tight">
              {title}
            </Text>
            <Text className="text-base text-white/90 font-medium">
              {description}
            </Text>
          </div>
          
          {/* Video Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
            <Play className="w-4 h-4 text-white" />
            <Text className="text-sm text-white font-medium">{badge}</Text>
          </div>
        </div>
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      {/* Future Video Embed Container */}
      {videoUrl && (
        <div className="absolute inset-0">
          <iframe 
            src={videoUrl}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={title}
          />
        </div>
      )}
      
      {/* Placeholder for future video when videoUrl is not provided */}
      {!videoUrl && (
        <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300">
          {/* 
            Replace this div with actual video embed when ready:
            <iframe 
              src="your-video-url" 
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={title}
            />
          */}
        </div>
      )}
    </div>
  )
}
