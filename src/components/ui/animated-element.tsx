"use client"

import React, { useRef, useEffect, useState } from "react"
import { motion, useInView, Variant } from "framer-motion"
import { cn } from "@/lib/utils"

type AnimationType =
  | "fade-in"
  | "slide-up"
  | "slide-down"
  | "slide-left"
  | "slide-right"
  | "scale-up"
  | "scale-down"
  | "rotate"
  | "bounce"
  | "pulse"
  | "none"

interface AnimatedElementProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: AnimationType
  delay?: number
  duration?: number
  amount?: number
  once?: boolean
  threshold?: number
  as?: React.ElementType
  children: React.ReactNode
}

const getVariants = (type: AnimationType) => ({
  hidden: {
    opacity: 0,
    y: type === "slide-up" ? 20 : type === "slide-down" ? -20 : 0,
    x: type === "slide-left" ? 20 : type === "slide-right" ? -20 : 0,
    scale: type === "scale-up" ? 0.8 : type === "scale-down" ? 1.2 : 1,
    rotate: type === "rotate" ? -5 : 0,
  },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
    rotate: 0,
  },
  bounce: {
    y: [0, -10, 0],
    transition: {
      repeat: Infinity,
      repeatType: "loop" as const,
      duration: 1.5,
    },
  },
  pulse: {
    scale: [1, 1.05, 1],
    transition: {
      repeat: Infinity,
      repeatType: "loop" as const,
      duration: 2,
    },
  },
})

export function AnimatedElement({
  type = "fade-in",
  delay = 0,
  duration = 0.5,
  amount = 50,
  once = true,
  threshold = 0.2,
  as: Component = "div",
  className,
  children,
  ...props
}: AnimatedElementProps) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const [animationCount, setAnimationCount] = useState(0)
  const MAX_ANIMATIONS = 5
  
  // Use intersection observer for better performance
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && animationCount < MAX_ANIMATIONS) {
          setIsVisible(true)
          setAnimationCount(prev => prev + 1)
          if (once) {
            observer.unobserve(entry.target)
          }
        }
      },
      { threshold }
    )
    
    if (ref.current) {
      observer.observe(ref.current)
    }
    
    return () => observer.disconnect()
  }, [threshold, once, animationCount])

  // For continuous animations like bounce and pulse
  if (type === "bounce" || type === "pulse") {
    return (
      <motion.div
        ref={ref}
        animate={type}
        variants={getVariants(type)}
        className={className}
        {...(props as any)}
      >
        {children}
      </motion.div>
    )
  }

  // For no animation
  if (type === "none") {
    return (
      <Component className={className} {...props}>
        {children}
      </Component>
    )
  }

  // For standard animations
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={getVariants(type)}
      custom={amount}
      transition={{
        duration,
        delay,
        ease: "easeOut"
      }}
      className={cn(className, isVisible && "animation-done")}
      onAnimationComplete={() => {
        if (ref.current && 'style' in ref.current) {
          (ref.current as HTMLElement).style.willChange = 'auto'
        }
      }}
      {...(props as any)}
    >
      {children}
    </motion.div>
  )
}

// Specialized animation components for common use cases
export function FadeIn({
  delay = 0,
  duration = 0.5,
  once = true,
  className,
  children,
  ...props
}: Omit<AnimatedElementProps, "type" | "amount">) {
  return (
    <AnimatedElement
      type="fade-in"
      delay={delay}
      duration={duration}
      once={once}
      className={className}
      {...(props as any)}
    >
      {children}
    </AnimatedElement>
  )
}

export function SlideUp({
  delay = 0,
  duration = 0.5,
  amount = 50,
  once = true,
  className,
  children,
  ...props
}: Omit<AnimatedElementProps, "type">) {
  return (
    <AnimatedElement
      type="slide-up"
      delay={delay}
      duration={duration}
      amount={amount}
      once={once}
      className={className}
      {...(props as any)}
    >
      {children}
    </AnimatedElement>
  )
}

export function SlideIn({
  delay = 0,
  duration = 0.5,
  amount = 50,
  once = true,
  className,
  children,
  ...props
}: Omit<AnimatedElementProps, "type">) {
  return (
    <AnimatedElement
      type="slide-left"
      delay={delay}
      duration={duration}
      amount={amount}
      once={once}
      className={className}
      {...(props as any)}
    >
      {children}
    </AnimatedElement>
  )
}

export function StaggeredChildren({
  staggerDelay = 0.1,
  baseDelay = 0,
  type = "slide-up",
  amount = 30,
  duration = 0.5,
  once = true,
  className,
  children,
  ...props
}: Omit<AnimatedElementProps, "delay"> & { staggerDelay?: number; baseDelay?: number }) {
  return (
    <div className={className} {...props}>
      {React.Children.map(children, (child, index) => {
        if (!React.isValidElement(child)) return child;

        return (
          <AnimatedElement
            type={type}
            amount={amount}
            duration={duration}
            once={once}
            delay={baseDelay + index * staggerDelay}
            className={cn(child.props.className)}
          >
            {child}
          </AnimatedElement>
        );
      })}
    </div>
  );
}
