import { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, FileText, BarChart3 } from "lucide-react"

import { MainLayout } from "@/components/layout/main-layout"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { constructMetadata } from "@/components/seo"
import { VideoPlayer } from "@/components/ui/video-player"

export const metadata: Metadata = constructMetadata({
  title: "Business Transformation Tools",
  description: "Access powerful tools to analyze your business processes, identify automation opportunities, and create a strategic roadmap for operational excellence.",
  keywords: ["business audit", "SOP automation", "process assessment", "operational efficiency", "business transformation"],
  pathname: "/tools",
})

const tools = [
  {
    icon: FileText,
    title: "SOP Automator",
    description: "Upload your Standard Operating Procedures and receive a detailed analysis of automation potential with specific recommendations for implementation.",
    benefits: [
      "Identify which SOPs are prime for automation",
      "Receive a detailed breakdown of automation possibilities",
      "Get expert recommendations on implementation approaches",
      "Understand potential ROI before investing"
    ],
    href: "/tools/sop-automator",
  },
  {
    icon: BarChart3,
    title: "Business Audit Tool",
    description: "Complete a comprehensive assessment of your business operations and receive a custom action plan with ROI projections for operational transformation.",
    benefits: [
      "Identify operational inefficiencies across your business",
      "Complete a 5-minute questionnaire across 4 key areas",
      "Receive a custom action plan with prioritized recommendations",
      "Get clear ROI projections for each improvement"
    ],
    href: "/tools/business-audit",
  },
]

export default function ToolsHubPage() {
  return (
    <MainLayout>
      <Section padding="lg" background="primary">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <Heading level="1" className="text-white mb-6">
              Transform Your Business Operations with Certainty
            </Heading>
            <Text variant="lead" className="text-primary-foreground/90">
              These powerful assessment tools provide clarity on your automation potential and deliver actionable insights with guaranteed outcomes—all before you make a significant investment.
            </Text>
          </div>
        </Container>
      </Section>

      <Section padding="lg">
        <Container>
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-muted rounded-xl overflow-hidden shadow-sm">
              {/* Video placeholder - replace with actual video component when available */}
              <div className="aspect-video bg-muted-foreground/10 flex items-center justify-center">
                <div className="text-center p-8">
                  <Heading level="3" className="mb-4">Explainer Video</Heading>
                  <Text className="text-muted-foreground">
                    Watch this brief overview of our business transformation tools and how they can help your organization achieve operational excellence.
                  </Text>
                  {/* Uncomment and update when video is available */}
                  {/* <VideoPlayer
                    src="/videos/tools-explainer.mp4"
                    poster="/images/tools-video-poster.jpg"
                    title="Business Transformation Tools Overview"
                  /> */}
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mb-12">
            <Heading level="2">
              Powerful Tools for Business Transformation
            </Heading>
            <Text variant="lead" className="text-muted-foreground mt-4 max-w-3xl mx-auto">
              Our hybrid AI-human approach ensures you receive accurate, actionable insights that deliver certainty of outcomes—not just algorithmic guesswork.
            </Text>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {tools.map((tool, index) => (
              <Card key={index} className="border border-border/50 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <tool.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>{tool.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-base">
                    {tool.description}
                  </CardDescription>
                  <div className="space-y-2">
                    <Text className="font-medium">Key Benefits:</Text>
                    <ul className="space-y-1">
                      {tool.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <ArrowRight className="h-4 w-4 text-primary mt-1 shrink-0" />
                          <Text className="text-muted-foreground text-sm">
                            {benefit}
                          </Text>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-4">
                    <Button className="w-full" asChild>
                      <Link href={tool.href}>
                        Access {tool.title}
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-muted rounded-xl p-8 text-center">
            <Heading level="3" className="mb-4">
              Why These Tools Deliver Certainty
            </Heading>
            <Text className="text-muted-foreground max-w-3xl mx-auto mb-6">
              Unlike purely AI-driven assessments that often miss critical context, our tools combine intelligent analysis with human expertise to ensure recommendations are practical, accurate, and tailored to your specific business needs.
            </Text>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-background rounded-lg p-6">
                <div className="text-2xl font-bold text-primary mb-2">90%</div>
                <Text className="font-medium">Accuracy Rate</Text>
                <Text className="text-sm text-muted-foreground">
                  Through our hybrid AI-human verification process
                </Text>
              </div>
              <div className="bg-background rounded-lg p-6">
                <div className="text-2xl font-bold text-primary mb-2">5 min</div>
                <Text className="font-medium">Completion Time</Text>
                <Text className="text-sm text-muted-foreground">
                  Quick assessment with comprehensive results
                </Text>
              </div>
              <div className="bg-background rounded-lg p-6">
                <div className="text-2xl font-bold text-primary mb-2">100%</div>
                <Text className="font-medium">Actionable Insights</Text>
                <Text className="text-sm text-muted-foreground">
                  Every recommendation is practical and implementable
                </Text>
              </div>
            </div>
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-blue-900 hover:from-blue-700 hover:to-blue-950 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" asChild>
              <Link href="/tools/business-audit">
                Find Your Process Profit Leaks
              </Link>
            </Button>
          </div>
        </Container>
      </Section>
    </MainLayout>
  )
}
