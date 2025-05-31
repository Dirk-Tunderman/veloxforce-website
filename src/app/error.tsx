"use client"

import { useEffect } from "react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <Section padding="xl">
      <Container>
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl font-bold text-primary">Something went wrong</h1>
          <p className="mt-4 text-muted-foreground max-w-md">
            We apologize for the inconvenience. Please try again or contact support if the problem persists.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button onClick={reset}>Try Again</Button>
            <Button variant="outline" asChild>
              <Link href="/">Return Home</Link>
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  )
}
