import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { sendGAEvent, GA_EVENTS, GA_PARAMETERS } from "@/lib/analytics"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive active:scale-[0.97] touch-manipulation",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 hover:shadow-md hover:translate-y-[-1px]",
        destructive:
          "bg-destructive text-white shadow-sm hover:bg-destructive/90 hover:shadow-md hover:translate-y-[-1px] focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground hover:border-accent hover:shadow-md hover:translate-y-[-1px] dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 hover:shadow-md hover:translate-y-[-1px]",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link:
          "text-primary underline-offset-4 hover:underline",
        gradient:
          "bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow-sm hover:shadow-md hover:translate-y-[-1px] hover:opacity-90 relative overflow-hidden",
        subtle:
          "bg-primary/10 text-primary hover:bg-primary/20 shadow-none hover:shadow-sm hover:translate-y-[-1px]",
        accent:
          "bg-accent text-accent-foreground shadow-sm hover:bg-accent/90 hover:shadow-md hover:translate-y-[-1px]",
      },
      size: {
        default: "h-10 px-4 py-2 has-[>svg]:px-3",
        sm: "h-9 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-12 rounded-md px-6 has-[>svg]:px-5 text-base",
        xl: "h-14 rounded-md px-8 has-[>svg]:px-6 text-lg",
        "2xl": "h-16 rounded-md px-10 has-[>svg]:px-8 text-xl",
        icon: "size-10",
        "icon-sm": "size-8",
        "icon-lg": "size-12",
      },
      fullWidth: {
        true: "w-full",
      },
      rounded: {
        true: "rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      fullWidth: false,
      rounded: false,
    },
  }
)

interface ButtonProps extends React.ComponentProps<"button">,
  VariantProps<typeof buttonVariants> {
    asChild?: boolean
    fullWidth?: boolean
    rounded?: boolean
    loading?: boolean
    // Analytics props
    trackingLabel?: string
    trackingLocation?: string
  }

function Button({
  className,
  variant,
  size,
  fullWidth,
  rounded,
  asChild = false,
  loading = false,
  disabled,
  children,
  trackingLabel,
  trackingLocation,
  onClick,
  ...props
}: ButtonProps) {
  const isDisabled = disabled || loading

  // Handle click with analytics tracking
  const handleClick = React.useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      // Track CTA click if tracking props are provided
      if (trackingLabel && trackingLocation) {
        const destination = (props as any).href || '';
        sendGAEvent(GA_EVENTS.CTA_CLICK, {
          [GA_PARAMETERS.CTA_LABEL]: trackingLabel,
          [GA_PARAMETERS.CTA_LOCATION]: trackingLocation,
          [GA_PARAMETERS.CTA_DESTINATION]: destination,
        });
      }

      // Call the original onClick handler if provided
      if (onClick) {
        (onClick as any)(e);
      }
    },
    [trackingLabel, trackingLocation, onClick, props]
  );

  if (asChild) {
    // For asChild, we need to ensure we're passing exactly one child
    // We'll clone the child and pass our props to it
    const child = React.Children.only(children) as React.ReactElement

    return React.cloneElement(child, {
      className: cn(
        buttonVariants({ variant, size, fullWidth, rounded, className }),
        child.props.className
      ),
      disabled: isDisabled || child.props.disabled,
      onClick: trackingLabel ? handleClick : child.props.onClick || onClick,
      ...props,
    })
  }

  // For regular buttons
  return (
    <button
      className={cn(buttonVariants({ variant, size, fullWidth, rounded, className }))}
      disabled={isDisabled}
      onClick={trackingLabel ? handleClick : onClick}
      {...props}
    >
      {loading && (
        <span className="size-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
      )}
      {children}
      {variant === 'gradient' && !loading && (
        <span className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 hover:opacity-20 transition-opacity duration-300" />
      )}
    </button>
  )
}

export { Button, buttonVariants }
