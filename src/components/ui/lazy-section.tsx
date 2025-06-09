"use client"

import React, { useRef, useEffect, useState } from "react"

interface LazySectionProps {
  children: React.ReactNode
  threshold?: number
  minHeight?: string
}

export function LazySection({ 
  children, 
  threshold = 0.1, 
  minHeight = "400px" 
}: LazySectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [threshold])

  return (
    <div ref={ref}>
      {isVisible ? children : <div style={{ minHeight }} />}
    </div>
  )
}