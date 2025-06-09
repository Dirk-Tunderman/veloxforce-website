// Performance-optimized Intersection Observer for animations
// Replaces heavy Framer Motion usage with lightweight CSS animations

export class AnimationObserver {
  private observer: IntersectionObserver | null = null
  private maxAnimations = 5
  private activeAnimations = 0
  
  constructor(maxAnimations = 5) {
    this.maxAnimations = maxAnimations
    this.init()
  }
  
  private init() {
    if (typeof window === 'undefined') return
    
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      this.showAllElements()
      return
    }
    
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && this.activeAnimations < this.maxAnimations) {
            const element = entry.target as HTMLElement
            const animation = element.dataset.animation || 'fadeInUp'
            
            // Add animation class
            element.style.animationDelay = element.style.animationDelay || '0s'
            element.classList.add('animate')
            element.style.opacity = '1'
            
            this.activeAnimations++
            this.observer?.unobserve(entry.target)
            
            // Reset counter after animation completes
            setTimeout(() => {
              this.activeAnimations = Math.max(0, this.activeAnimations - 1)
            }, 1000)
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    )
    
    this.observeElements()
  }
  
  private observeElements() {
    if (!this.observer) return
    
    const elements = document.querySelectorAll('.animate-on-scroll')
    elements.forEach((element) => {
      this.observer?.observe(element)
    })
  }
  
  private showAllElements() {
    // For users who prefer reduced motion, show all elements immediately
    const elements = document.querySelectorAll('.animate-on-scroll')
    elements.forEach((element) => {
      const htmlElement = element as HTMLElement
      htmlElement.style.opacity = '1'
      htmlElement.style.transform = 'none'
    })
  }
  
  public disconnect() {
    this.observer?.disconnect()
  }
  
  public reconnect() {
    this.disconnect()
    this.init()
  }
}

// Auto-initialize when DOM is ready
if (typeof window !== 'undefined') {
  let animationObserver: AnimationObserver | null = null
  
  function initAnimations() {
    animationObserver = new AnimationObserver(5)
  }
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAnimations)
  } else {
    initAnimations()
  }
  
  // Re-initialize on route changes (for SPA behavior)
  if ('navigation' in window) {
    // @ts-ignore - Navigation API is experimental
    window.navigation.addEventListener('navigate', () => {
      setTimeout(() => {
        animationObserver?.reconnect()
      }, 100)
    })
  }
}