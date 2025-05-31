import { cn } from "@/lib/utils"

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType
  size?: "default" | "sm" | "md" | "lg" | "xl" | "full"
  fluid?: boolean
}

export function Container({
  as: Component = "div",
  size = "default",
  fluid = false,
  className,
  children,
  ...props
}: ContainerProps) {
  return (
    <Component
      className={cn(
        "mx-auto px-5 sm:px-6 md:px-8 lg:px-10",
        {
          "max-w-screen-sm": size === "sm",
          "max-w-screen-md": size === "md",
          "max-w-screen-lg": size === "lg",
          "max-w-screen-xl": size === "xl",
          "max-w-screen-2xl": size === "default",
          "max-w-none w-full": size === "full" || fluid,
          "sm:px-8 md:px-10 lg:px-12": fluid, // More padding for fluid containers
        },
        className
      )}
      {...props}
    >
      {children}
    </Component>
  )
}
