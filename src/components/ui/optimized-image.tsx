import Image, { ImageProps } from "next/image"
import { cn } from "@/lib/utils"

interface OptimizedImageProps extends Omit<ImageProps, "alt"> {
  alt: string
  aspectRatio?: "auto" | "square" | "video" | "portrait" | "wide"
  className?: string
}

export function OptimizedImage({
  alt,
  aspectRatio = "auto",
  className,
  ...props
}: OptimizedImageProps) {
  return (
    <div
      className={cn(
        "overflow-hidden",
        {
          "aspect-square": aspectRatio === "square",
          "aspect-video": aspectRatio === "video",
          "aspect-[3/4]": aspectRatio === "portrait",
          "aspect-[16/9]": aspectRatio === "wide",
        },
        className
      )}
    >
      <Image
        alt={alt}
        className="h-full w-full object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        {...props}
      />
    </div>
  )
}
