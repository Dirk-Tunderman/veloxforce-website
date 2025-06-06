import Link from "next/link"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"
import { Button } from "@/components/ui/button"
import { ArrowRight, Target, TrendingDown } from "lucide-react"

export function HeroSectionV2() {
  return (
    <Section
      padding="xl"
      background="white-to-light"
      className="min-h-[90vh] flex items-center"
    >
      <Container className="max-w-6xl">
        <div className="text-center space-y-12">
          {/* Main Headline - Centered */}
          <div className="space-y-6 max-w-5xl mx-auto">
            <Heading
              level="1"
              className="velox-text-h1 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            >
              Turn Work You{" "}
              <span className="gradient-text-blue font-bold">
                Dread
              </span>{" "}
              Into Work That's{" "}
              <span className="gradient-text-blue font-bold">
                Done
              </span>
            </Heading>

            <Text className="velox-text-body text-xl md:text-2xl text-gray-700 leading-relaxed text-center">
              From <strong>overwhelming task lists</strong> to <strong>confident delegation</strong>—discover which of your operations can run without you.
            </Text>

            <Text className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto text-center">
              Stop wondering <strong>"Could this work for me?"</strong> See exactly how we transform processes just like yours into delegated outcomes.
            </Text>
          </div>

          {/* CTA Section - Centered */}
          <div className="space-y-4 text-center">
            <Button
              size="lg"
              className="velox-cta-primary text-lg font-semibold px-12 py-6 h-auto rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 mx-auto"
              asChild
            >
              <Link href="/tools/business-audit">
                <div className="flex flex-col items-center py-2 text-center">
                  <span className="text-lg">Check What I Can Delegate</span>
                  <span className="text-sm font-normal opacity-90 text-center">Free assessment • 8 minutes • Honest analysis</span>
                </div>
              </Link>
            </Button>

            <Text className="text-center text-gray-600 max-w-2xl mx-auto">
              <strong>Don't see your specific operation?</strong><br />
              These are just examples. We've transformed over 200 unique processes across every industry.<br />
              If it's repetitive and follows rules, we can automate it.
            </Text>
          </div>

        </div>
      </Container>
    </Section>
  )
}
