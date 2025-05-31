import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle, FileText, Upload, Bot, CheckCircle2 } from "lucide-react"

import { MainLayout } from "@/components/layout/main-layout"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"
import { Button } from "@/components/ui/button"
import { Breadcrumb } from "@/components/ui/breadcrumb"
import { VideoPlayer } from "@/components/ui/video-player"
import { constructMetadata } from "@/components/seo"

export const metadata: Metadata = constructMetadata({
  title: "SOP Automator | Transform Manual Processes with Certainty",
  description: "Upload your Standard Operating Procedures and receive a detailed analysis of automation potential with specific recommendations for implementation.",
  keywords: ["SOP automation", "process automation", "standard operating procedures", "business efficiency", "workflow automation"],
  pathname: "/tools/sop-automator",
})

const steps = [
  {
    icon: Upload,
    title: "Upload Your SOPs",
    description: "Simply upload your Standard Operating Procedures in any common format (PDF, Word, etc.). The system accepts multiple documents at once."
  },
  {
    icon: Bot,
    title: "AI Analysis",
    description: "Our advanced AI analyzes your SOPs to identify patterns, repetitive tasks, decision points, and automation opportunities."
  },
  {
    icon: CheckCircle,
    title: "Human Expert Review",
    description: "Automation specialists review the AI analysis to ensure recommendations are practical, accurate, and tailored to your specific business context."
  },
  {
    icon: FileText,
    title: "Receive Detailed Report",
    description: "Within 48 hours, receive a comprehensive report detailing automation opportunities, implementation approaches, and expected ROI."
  }
]

const benefits = [
  "Identify which SOPs are prime candidates for automation",
  "Understand exactly which parts of each process can be automated",
  "Receive specific technology recommendations for implementation",
  "Get clear ROI projections before investing in automation",
  "Prioritize automation initiatives based on impact and complexity",
  "Avoid costly mistakes by knowing what NOT to automate"
]

export default function SopAutomatorPage() {
  const breadcrumbItems = [
    { label: "Tools", href: "/tools" },
    { label: "SOP Automator", href: "/tools/sop-automator", isCurrent: true },
  ]

  // Link to the redirect page
  const redirectLink = "/tools/sop-automator/redirect"

  return (
    <MainLayout>
      <Section padding="lg" background="primary">
        <Container>
          <div className="mb-6 text-primary-foreground/80">
            <Breadcrumb items={breadcrumbItems} />
          </div>

          <div className="max-w-3xl">
            <Heading level="1" className="text-white mb-6">
              Transform Your Manual Processes into Automated Workflows with Certainty
            </Heading>
            <Text variant="lead" className="text-primary-foreground/90 mb-8">
              The SOP Automator analyzes your Standard Operating Procedures to identify automation opportunities, providing a detailed roadmap for implementation with guaranteed outcomes.
            </Text>
            <Button size="lg" variant="secondary" asChild>
              <Link href={redirectLink}>
                Start Your SOP Analysis
              </Link>
            </Button>
          </div>
        </Container>
      </Section>

      <Section padding="lg">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Heading level="2" className="mb-6">
                What the SOP Automator Does
              </Heading>
              <Text className="text-muted-foreground mb-6">
                The SOP Automator is a powerful tool that analyzes your existing Standard Operating Procedures to identify automation opportunities. It combines advanced AI analysis with human expert review to provide you with a detailed breakdown of automation possibilities, specific implementation recommendations, and expected ROI.
              </Text>
              <Text className="text-muted-foreground mb-6">
                Unlike generic automation assessments, the SOP Automator provides specific, actionable insights tailored to your unique business processes. This ensures you have complete certainty before investing in automation initiatives.
              </Text>
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                    <Text className="text-muted-foreground">
                      {benefit}
                    </Text>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-muted rounded-xl overflow-hidden shadow-sm">
              {/* Video placeholder - replace with actual video component when available */}
              <div className="aspect-video bg-muted-foreground/10 flex items-center justify-center">
                <div className="text-center p-8">
                  <Heading level="3" className="mb-4">SOP Automator Demo</Heading>
                  <Text className="text-muted-foreground">
                    Watch this demonstration of how the SOP Automator works and the insights it provides.
                  </Text>
                  {/* Uncomment and update when video is available */}
                  {/* <VideoPlayer
                    src="/videos/sop-automator-demo.mp4"
                    poster="/images/sop-automator-poster.jpg"
                    title="SOP Automator Demonstration"
                  /> */}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section padding="lg" background="muted">
        <Container>
          <div className="text-center mb-12">
            <Heading level="2">
              How the SOP Automator Works
            </Heading>
            <Text variant="lead" className="text-muted-foreground mt-4 max-w-3xl mx-auto">
              A simple four-step process that delivers powerful insights with minimal effort on your part.
            </Text>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div key={index} className="bg-background rounded-lg p-6 border border-border/50 shadow-sm">
                <div className="flex flex-col items-center text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                    <step.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="absolute -mt-2 ml-10 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white font-bold text-sm">
                    {index + 1}
                  </div>
                  <Heading level="3" className="text-xl mb-2">
                    {step.title}
                  </Heading>
                  <Text className="text-muted-foreground">
                    {step.description}
                  </Text>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section padding="lg">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-muted rounded-xl overflow-hidden shadow-sm order-2 lg:order-1">
              {/* Example output image - replace with actual image */}
              <div className="aspect-[4/3] bg-muted-foreground/10 flex items-center justify-center">
                <div className="text-center p-8">
                  <Heading level="3" className="mb-4">Sample SOP Analysis</Heading>
                  <Text className="text-muted-foreground">
                    This is a redacted example of the detailed analysis you'll receive.
                  </Text>
                  {/* Replace with actual image when available */}
                  {/* <Image
                    src="/images/sop-analysis-example.jpg"
                    alt="Sample SOP Analysis Report"
                    width={600}
                    height={450}
                    className="rounded-lg shadow-sm"
                  /> */}
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <Heading level="2" className="mb-6">
                What You'll Receive
              </Heading>
              <Text className="text-muted-foreground mb-6">
                Within 48 hours of uploading your SOPs, you'll receive a comprehensive report that includes:
              </Text>
              <div className="space-y-4">
                <div className="bg-background rounded-lg p-4 border border-border/50">
                  <Heading level="3" className="text-lg mb-2">
                    Automation Opportunity Map
                  </Heading>
                  <Text className="text-muted-foreground">
                    A detailed breakdown of which parts of your SOPs can be automated, with color-coding to indicate automation potential (high, medium, low).
                  </Text>
                </div>
                <div className="bg-background rounded-lg p-4 border border-border/50">
                  <Heading level="3" className="text-lg mb-2">
                    Technology Recommendations
                  </Heading>
                  <Text className="text-muted-foreground">
                    Specific tools and technologies recommended for each automation opportunity, with pros and cons of each approach.
                  </Text>
                </div>
                <div className="bg-background rounded-lg p-4 border border-border/50">
                  <Heading level="3" className="text-lg mb-2">
                    Implementation Roadmap
                  </Heading>
                  <Text className="text-muted-foreground">
                    A prioritized plan for implementing automation, with estimated timelines and resource requirements.
                  </Text>
                </div>
                <div className="bg-background rounded-lg p-4 border border-border/50">
                  <Heading level="3" className="text-lg mb-2">
                    ROI Projections
                  </Heading>
                  <Text className="text-muted-foreground">
                    Detailed cost-benefit analysis for each automation opportunity, including expected time savings, error reduction, and financial impact.
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section padding="lg" background="primary">
        <Container>
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <Heading level="2" className="text-white mb-6">
              Ready to Transform Your Manual Processes?
            </Heading>
            <Text variant="lead" className="text-primary-foreground/90 mb-8">
              Get a detailed analysis of your automation potential and a clear roadmap for implementation—with certainty of outcomes.
            </Text>
            <Button size="lg" variant="secondary" asChild>
              <Link href={redirectLink}>
                Start Your SOP Analysis
              </Link>
            </Button>
            <Text className="mt-4 text-primary-foreground/80 text-sm">
              No obligation. Discover exactly how much time and money your business could reclaim.
            </Text>
          </div>
        </Container>
      </Section>
    </MainLayout>
  )
}
