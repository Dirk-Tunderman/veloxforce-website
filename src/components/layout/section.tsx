import { cn } from "@/lib/utils"

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType
  padding?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl"
  background?: "default" | "muted" | "primary" | "secondary" | "accent" | "gradient" | "white" | "light-blue" | "accent-blue" | "off-white" | "trust" | "white-to-light" | "light-to-white" | "light-to-accent" | "accent-to-white" | "light-blue-to-accent" | "transparent"
  fullHeight?: boolean
}

export function Section({
  as: Component = "section",
  padding = "lg",
  background = "default",
  fullHeight = false,
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <Component
      className={cn(
        {
          // More granular padding control for better mobile experience
          "py-2 sm:py-3": padding === "xs",
          "py-4 sm:py-6": padding === "sm",
          "py-8 sm:py-10 md:py-12": padding === "md",
          "py-12 sm:py-16 md:py-20 lg:py-24": padding === "lg",
          "py-16 sm:py-20 md:py-28 lg:py-32": padding === "xl",
          "py-20 sm:py-24 md:py-32 lg:py-40": padding === "2xl",

          // Background options
          "bg-background": background === "default",
          "bg-muted": background === "muted",
          "bg-primary text-primary-foreground": background === "primary",
          "bg-secondary text-secondary-foreground": background === "secondary",
          "bg-accent text-accent-foreground": background === "accent",
          "bg-gradient-to-br from-primary/90 to-secondary/90 text-primary-foreground": background === "gradient",

          // New conversion-optimized backgrounds
          "velox-section-white": background === "white",
          "velox-section-light-blue": background === "light-blue",
          "velox-section-accent-blue": background === "accent-blue",
          "velox-bg-off-white": background === "off-white",
          "velox-bg-trust": background === "trust",

          // Gradual transition backgrounds
          "velox-section-white-to-light": background === "white-to-light",
          "velox-section-light-to-white": background === "light-to-white",
          "velox-section-light-to-accent": background === "light-to-accent",
          "velox-section-light-blue-to-accent": background === "light-blue-to-accent",
          "velox-section-accent-to-white": background === "accent-to-white",
          
          // Transparent background option
          "bg-transparent": background === "transparent",

          // Full height option
          "min-h-screen flex flex-col justify-center": fullHeight,
        },
        className
      )}
      {...props}
    >
      {children}
    </Component>
  )
}
