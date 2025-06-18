"use client"

import { useEffect } from "react"

export function AnimationProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Ensure immediate visibility for critical elements
    const animatedElements = document.querySelectorAll('.animate-fadeIn')
    animatedElements.forEach(el => {
      el.classList.add('animated')
    })
    
    // Only import and initialize animation observer on client side
    import("@/lib/animation-observer").then(() => {
      // Animation observer will auto-initialize
      console.log("Animation observer loaded")
    })
  }, [])

  return <>{children}</>
}