import Link from "next/link"

import { Button } from "@/components/ui/button"
import { MainLayout } from "@/components/layout/main-layout"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"

export default function NotFound() {
  return (
    <MainLayout>
      <Section padding="xl">
        <Container>
          <div className="flex flex-col items-center justify-center text-center">
            <h1 className="text-6xl font-bold text-primary">404</h1>
            <h2 className="mt-4 text-2xl font-bold">Page Not Found</h2>
            <p className="mt-4 text-muted-foreground max-w-md">
              Sorry, we couldn't find the page you're looking for. It might have been moved or deleted.
            </p>
            <div className="mt-8">
              <Button asChild>
                <Link href="/">Return Home</Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </MainLayout>
  )
}
