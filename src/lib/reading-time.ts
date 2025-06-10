export function calculateReadingTime(content: string): number {
  // Remove markdown formatting for accurate word count
  const cleanContent = content
    .replace(/#{1,6}\s+/g, '') // Remove headers
    .replace(/\*\*(.*?)\*\*/g, '$1') // Remove bold formatting
    .replace(/\*(.*?)\*/g, '$1') // Remove italic formatting
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // Remove links, keep text
    .replace(/`([^`]+)`/g, '$1') // Remove inline code formatting
    .replace(/---/g, '') // Remove horizontal rules
    .replace(/\n+/g, ' ') // Convert newlines to spaces
    .trim()

  // Count words (split by whitespace and filter empty strings)
  const words = cleanContent.split(/\s+/).filter(word => word.length > 0)
  const wordCount = words.length

  // Average reading speed is 200-250 words per minute
  // Using 225 WPM as a middle ground
  const readingSpeed = 225
  const minutes = Math.ceil(wordCount / readingSpeed)

  // Minimum reading time of 1 minute
  return Math.max(1, minutes)
}

export function formatReadingTime(minutes: number): string {
  return `${minutes} min read`
}