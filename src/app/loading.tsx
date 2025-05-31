import { Loader2 } from "lucide-react"

import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"

export default function Loading() {
  return (
    <Section padding="xl">
      <Container>
        <div className="flex flex-col items-center justify-center min-h-[50vh]">
          <Loader2 className="h-12 w-12 animate-spin text-primary" />
          <p className="mt-4 text-muted-foreground">Loading...</p>
        </div>
      </Container>
    </Section>
  )
}
