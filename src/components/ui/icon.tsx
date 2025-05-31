import { cn } from "@/lib/utils"
import { LucideIcon } from "lucide-react"

interface IconProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: LucideIcon
  size?: "sm" | "md" | "lg"
  variant?: "primary" | "accent" | "light"
  interactive?: boolean
  cta?: boolean
}

export function Icon({
  icon: IconComponent,
  size = "md",
  variant = "primary",
  interactive = false,
  cta = false,
  className,
  ...props
}: IconProps) {
  return (
    <div
      className={cn(
        // Base styles
        "inline-flex items-center justify-center",
        
        // Size variants
        {
          "w-4 h-4": size === "sm",
          "w-6 h-6": size === "md", 
          "w-8 h-8": size === "lg",
        },
        
        // Color variants
        {
          "text-gray-700": variant === "primary",
          "text-blue-600": variant === "accent",
          "text-gray-50": variant === "light",
        },
        
        // Interactive states
        {
          "transition-all duration-200 ease-in-out hover:scale-110 hover:opacity-80 cursor-pointer": interactive,
          "transition-colors duration-200 hover:text-blue-700": cta,
        },
        
        className
      )}
      {...props}
    >
      <IconComponent className="w-full h-full" />
    </div>
  )
}

// Utility classes for direct use
export const iconClasses = {
  // Colors
  primary: "text-gray-700",
  accent: "text-blue-600", 
  light: "text-gray-50",
  
  // Sizes
  sm: "w-4 h-4",
  md: "w-6 h-6",
  lg: "w-8 h-8",
  
  // Interactive states
  hover: "transition-all duration-200 ease-in-out hover:scale-110 hover:opacity-80 cursor-pointer",
  cta: "transition-colors duration-200 hover:text-blue-700",
}
