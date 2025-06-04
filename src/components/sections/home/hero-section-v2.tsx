"use client"

import Link from "next/link"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"
import { Button } from "@/components/ui/button"
import { VideoPlaceholder } from "@/components/ui/video-placeholder"

export function HeroSectionV2() {
  return (
    <Section
      padding="xl"
      background="white-to-light"
      className="min-h-[90vh] flex items-center"
    >
      <Container className="max-w-7xl">
        {/* Centered Layout */}
        <div className="text-center space-y-12">
          {/* Main Headline - Centered */}
          <div className="space-y-6 max-w-5xl mx-auto">
            <Heading
              level="1"
              className="velox-text-h1 text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
            >
              Stop Managing Tools.{" "}
              <span className="gradient-text-blue">
                Start Delegating Work.
              </span>
            </Heading>

            <Text className="velox-text-body text-xl md:text-2xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
              There's a reason 80% of automation projects fail: They give you more tools to manage.
              We do something different. We handle the work itself.
            </Text>

            <Text className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
              No software to learn. No systems to babysit. Just outcomes delivered.
            </Text>

            <Text className="text-lg font-semibold text-blue-600 max-w-2xl mx-auto">
              This is Service-as-Software. And once you see it, you can't unsee it.
            </Text>
          </div>

          {/* Video Placeholder - Centered */}
          <div className="max-w-4xl mx-auto">
            <VideoPlaceholder
              title="Watch Sarah's 3-minute transformation story"
              description="From working weekends to home for dinner • Real delegation in action"
              badge="See Real Results"
              aspectRatio="video"
              // videoUrl="https://your-video-url-here" // Uncomment and add URL when video is ready
            />
          </div>

          {/* Stats Bar - Centered */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text-blue mb-2">€2,400</div>
              <Text className="text-sm text-gray-600 font-medium">Average Monthly Savings</Text>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text-blue mb-2">70%</div>
              <Text className="text-sm text-gray-600 font-medium">Less Than Traditional Staff</Text>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text-blue mb-2">Zero</div>
              <Text className="text-sm text-gray-600 font-medium">Technology for You to Manage</Text>
            </div>
          </div>

          {/* Primary CTA - Centered */}
          <div className="space-y-4">
            <Button
              size="lg"
              className="velox-cta-primary text-lg font-semibold px-12 py-6 h-auto rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 mx-auto"
              asChild
            >
              <Link href="/tools/business-audit">
                <div className="flex flex-col items-center py-2">
                  <span className="text-lg">Find My Biggest Time Drain</span>
                  <span className="text-sm font-normal opacity-90">Free assessment • 8 minutes • No sales pressure</span>
                </div>
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  )
}
