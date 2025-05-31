import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: Date | string): string {
  const d = typeof date === "string" ? new Date(date) : date
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength) + "..."
}

export function isExternalLink(url: string): boolean {
  return url.startsWith("http") || url.startsWith("mailto:") || url.startsWith("tel:")
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount)
}

export function calculateROI(
  currentCost: number,
  implementationCost: number,
  monthlySavings: number
): number {
  // Simple ROI calculation: (Total Savings - Implementation Cost) / Implementation Cost
  const annualSavings = monthlySavings * 12
  return (annualSavings - implementationCost) / implementationCost
}

export function formatPercentage(value: number): string {
  return `${(value * 100).toFixed(0)}%`
}

export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null

  return function(...args: Parameters<T>) {
    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}
