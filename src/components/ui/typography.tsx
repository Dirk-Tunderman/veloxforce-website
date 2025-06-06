import { cn } from "@/lib/utils"

interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  variant?: "default" | "lead" | "large" | "small" | "muted" | "subtle" | "primary" | "secondary" | "accent"
  as?: React.ElementType
  weight?: "light" | "normal" | "medium" | "semibold" | "bold"
  size?: "xs" | "sm" | "md" | "lg" | "xl"
  highlight?: boolean
}

export function Text({
  variant = "default",
  weight,
  size,
  as: Component = "p",
  highlight = false,
  className,
  ...props
}: TextProps) {
  return (
    <Component
      className={cn(
        // Only apply max-w-prose if not centered
        !className?.includes("text-center") && "max-w-prose",
        {
          // Font weights
          "font-light": weight === "light",
          "font-normal": weight === "normal" || (!weight && variant === "default"),
          "font-medium": weight === "medium" || (!weight && (variant === "lead" || variant === "primary" || variant === "secondary" || variant === "accent")),
          "font-semibold": weight === "semibold",
          "font-bold": weight === "bold",

          // Sizes (if specified, override the variant size)
          "text-xs leading-5": size === "xs",
          "text-sm leading-6": size === "sm",
          "text-base leading-7": size === "md",
          "text-lg leading-8": size === "lg",
          "text-xl leading-9": size === "xl",

          // Variants with improved line heights and mobile optimization
          "text-base leading-7 md:leading-relaxed": variant === "default" && !size,
          "text-lg md:text-xl leading-8 md:leading-9": variant === "lead" && !size,
          "text-lg leading-7 md:leading-relaxed": variant === "large" && !size,
          "text-sm leading-6 text-foreground": variant === "small" && !size,
          "text-sm text-muted-foreground leading-relaxed": variant === "muted" && !size,
          "text-base text-foreground/80 leading-relaxed": variant === "subtle" && !size,
          "text-base text-primary leading-7": variant === "primary" && !size,
          "text-base text-secondary leading-7": variant === "secondary" && !size,
          "text-base text-accent leading-7": variant === "accent" && !size,

          // Highlight effect
          "bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent": highlight,
        },
        className
      )}
      {...props}
    />
  )
}

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: "1" | "2" | "3" | "4" | "5" | "6"
  as?: React.ElementType
  weight?: "medium" | "semibold" | "bold"
  highlight?: boolean
  gradient?: "primary" | "secondary" | "accent" | "primary-secondary" | "primary-accent" | "secondary-accent"
  align?: "left" | "center" | "right"
}

export function Heading({
  level = "1",
  as,
  weight,
  highlight = false,
  gradient,
  align,
  className,
  ...props
}: HeadingProps) {
  const Component = as || `h${level}`

  return (
    <Component
      className={cn(
        "tracking-tight scroll-m-20",
        {
          // Font weights (if not specified, use the default for each level)
          "font-medium": weight === "medium",
          "font-semibold": weight === "semibold" ||
            (!weight && (level === "2" || level === "3" || level === "4" || level === "5" || level === "6")),
          "font-bold": weight === "bold" || (!weight && level === "1"),

          // Text alignment
          "text-left": align === "left",
          "text-center": align === "center",
          "text-right": align === "right",

          // Highlight and gradient effects
          "bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent": highlight && !gradient,
          "bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent": gradient === "primary-secondary",
          "bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent": gradient === "primary-accent",
          "bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent": gradient === "secondary-accent",
          "bg-gradient-to-r from-primary/90 to-primary/60 bg-clip-text text-transparent": gradient === "primary",
          "bg-gradient-to-r from-secondary to-secondary/80 bg-clip-text text-transparent": gradient === "secondary",
          "bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent": gradient === "accent",

          // Responsive sizes with improved line heights and mobile optimization
          "text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight": level === "1",
          "text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight": level === "2",
          "text-xl sm:text-2xl md:text-3xl leading-snug": level === "3",
          "text-lg sm:text-xl md:text-2xl leading-snug": level === "4",
          "text-base sm:text-lg md:text-xl leading-normal": level === "5",
          "text-sm sm:text-base md:text-lg leading-normal": level === "6",
        },
        className
      )}
      {...props}
    />
  )
}
