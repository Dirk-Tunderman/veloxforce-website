import { Metadata } from "next"
import { Bot, Cog, LineChart, Zap } from "lucide-react"

import { MainLayout } from "@/components/layout/main-layout"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Heading, Text } from "@/components/ui/typography"
import { OptimizedImage } from "@/components/ui/optimized-image"
import { constructMetadata } from "@/components/seo"

export const metadata: Metadata = constructMetadata({
  title: "Component Test",
  description: "Testing page for Veloxforce components",
  keywords: ["components", "design system", "UI"],
  pathname: "/test-components",
})

const pillars = [
  {
    icon: Bot,
    title: "The Hybrid Advantage",
    description: "90% AI Efficiency, 10% Human Excellence. Intelligent automation handles the bulk of work with speed and precision, while human experts ensure adaptability and unerring accuracy.",
  },
  {
    icon: Cog,
    title: "Service as Software",
    description: "The Outcome, Not Just The Tool. This model delivers guaranteed results without businesses needing to become technology managers.",
  },
  {
    icon: Zap,
    title: "Business Transformation",
    description: "From Operational to Strategic. Shifting from operational firefighting to strategic growth by automating routine processes and freeing your team for high-value activities.",
  },
  {
    icon: LineChart,
    title: "ROI Certainty",
    description: "Measurable Returns, Guaranteed Results. A clear path to ROI with typical outcomes of 50% cost reduction and 3x faster execution within 6-12 weeks.",
  },
]

export default function TestComponentsPage() {
  return (
    <MainLayout>
      <Section padding="lg">
        <Container>
          <div className="space-y-12">
            <div>
              <Heading level="1">Typography Components</Heading>
              <div className="mt-8 space-y-6">
                <div>
                  <Heading level="1">Heading Level 1</Heading>
                  <Heading level="2">Heading Level 2</Heading>
                  <Heading level="3">Heading Level 3</Heading>
                  <Heading level="4">Heading Level 4</Heading>
                  <Heading level="5">Heading Level 5</Heading>
                  <Heading level="6">Heading Level 6</Heading>
                </div>
                <div>
                  <Text variant="default">Default text style for body content.</Text>
                  <Text variant="lead">Lead text for important paragraphs.</Text>
                  <Text variant="large">Large text for emphasis.</Text>
                  <Text variant="small">Small text for less important content.</Text>
                  <Text variant="muted">Muted text for secondary information.</Text>
                </div>
              </div>
            </div>

            <div>
              <Heading level="2">Button Components</Heading>
              <div className="mt-6 flex flex-wrap gap-4">
                <Button variant="default">Default Button</Button>
                <Button variant="secondary">Secondary Button</Button>
                <Button variant="outline">Outline Button</Button>
                <Button variant="ghost">Ghost Button</Button>
                <Button variant="link">Link Button</Button>
                <Button variant="destructive">Destructive Button</Button>
              </div>
            </div>

            <div>
              <Heading level="2">Card Components</Heading>
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                {pillars.map((pillar, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                          <pillar.icon className="h-6 w-6 text-primary" />
                        </div>
                        <CardTitle>{pillar.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>{pillar.description}</CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <Heading level="2">Section Backgrounds</Heading>
              <div className="mt-6 space-y-6">
                <Section padding="md" background="default" className="border rounded-lg">
                  <Text className="text-center">Default Background</Text>
                </Section>
                <Section padding="md" background="muted" className="rounded-lg">
                  <Text className="text-center">Muted Background</Text>
                </Section>
                <Section padding="md" background="primary" className="rounded-lg">
                  <Text className="text-center">Primary Background</Text>
                </Section>
                <Section padding="md" background="secondary" className="rounded-lg">
                  <Text className="text-center">Secondary Background</Text>
                </Section>
                <Section padding="md" background="accent" className="rounded-lg">
                  <Text className="text-center">Accent Background</Text>
                </Section>
              </div>
            </div>

            <div>
              <Heading level="2">Optimized Images</Heading>
              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <Text variant="muted" className="mb-2">Square (1:1)</Text>
                  <OptimizedImage
                    src="/veloxforcelogo-main.svg"
                    alt="Veloxforce Logo"
                    width={300}
                    height={300}
                    aspectRatio="square"
                    className="bg-muted"
                  />
                </div>
                <div>
                  <Text variant="muted" className="mb-2">Video (16:9)</Text>
                  <OptimizedImage
                    src="/veloxforcelogo-main.svg"
                    alt="Veloxforce Logo"
                    width={300}
                    height={169}
                    aspectRatio="video"
                    className="bg-muted"
                  />
                </div>
                <div>
                  <Text variant="muted" className="mb-2">Portrait (3:4)</Text>
                  <OptimizedImage
                    src="/veloxforcelogo-main.svg"
                    alt="Veloxforce Logo"
                    width={300}
                    height={400}
                    aspectRatio="portrait"
                    className="bg-muted"
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </MainLayout>
  )
}
