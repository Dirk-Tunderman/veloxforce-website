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
      className="min-h-[80vh] flex items-center"
    >
      <Container className="max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-7 space-y-8">
            {/* Main Headline */}
            <div className="space-y-6 text-center mx-auto">
              <Heading
                level="1"
                className="velox-text-h1 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-center mx-auto max-w-none"
              >
                Turn Work You{" "}
                <span className="text-gray-600 relative">
                  <strong>Dread</strong>
                  <TrendingDown className="w-8 h-8 absolute -top-2 -right-10 text-gray-500 transform rotate-12" />
                </span>{" "}
                Into Work That's{" "}
                <span className="gradient-text-blue">
                  <strong>Done</strong>
                </span>
              </Heading>

              <div className="text-center mx-auto max-w-2xl">
                <Text className="velox-text-body text-xl md:text-2xl text-gray-700 leading-relaxed text-center mx-auto max-w-none">
                  From <strong>overwhelming task lists</strong> to <strong>confident delegation</strong>—discover which of your operations can run without you.
                </Text>
              </div>

              <div className="text-center mx-auto max-w-xl">
                <Text className="text-lg text-gray-600 leading-relaxed text-center mx-auto max-w-none">
                  Stop wondering <strong>"Could this work for me?"</strong> See exactly how we transform processes just like yours.
                </Text>
              </div>
            </div>

            {/* Primary CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="velox-cta-primary text-lg font-semibold px-8 py-4 h-auto rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                asChild
              >
                <Link href="#problem-recognition">
                  <div className="flex items-center gap-2">
                    <span><strong>Find My Biggest Time-Drain</strong></span>
                    <ArrowRight className="w-5 h-5 text-white" />
                  </div>
                </Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="text-lg font-semibold px-8 py-4 h-auto rounded-xl border-2 border-blue-600 text-blue-600 hover:bg-blue-50 transition-all duration-300"
                asChild
              >
                <Link href="/tools/business-audit">
                  <div className="flex items-center gap-2">
                    <Target className="w-5 h-5 text-gray-700" />
                    <span><strong>Assess My Process</strong></span>
                  </div>
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Column - Visual Elements */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Main Visual Card */}
              <div className="velox-card-advantage-enhanced p-8 space-y-6">
                <div className="text-center mx-auto">
                  <Heading level="3" className="text-2xl font-bold text-blue-900 mb-4 text-center mx-auto max-w-none">
                    <strong>Process Transformation</strong>
                  </Heading>
                  <div className="text-center mx-auto">
                    <Text className="text-blue-800 mb-6 text-center mx-auto max-w-none">
                      From <strong>operational burden</strong> to <strong>delegated outcomes</strong>
                    </Text>
                  </div>
                </div>

                {/* Before/After Flow */}
                <div className="space-y-6">
                  {/* Before */}
                  <div className="bg-gray-50 border border-gray-300 rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center">
                        <TrendingDown className="w-4 h-4 text-white" />
                      </div>
                      <Text className="font-semibold text-gray-700"><strong>Before</strong></Text>
                    </div>
                    <div className="text-center mx-auto">
                      <Text className="text-sm text-gray-600 text-center mx-auto max-w-none">
                        <strong>"I hate doing this but it has to be done..."</strong>
                      </Text>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="flex justify-center">
                    <ArrowRight className="w-8 h-8 text-blue-600" />
                  </div>

                  {/* After */}
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                        <Target className="w-4 h-4 text-white" />
                      </div>
                      <Text className="font-semibold text-blue-900"><strong>After</strong></Text>
                    </div>
                    <div className="text-center mx-auto">
                      <Text className="text-sm text-blue-800 text-center mx-auto max-w-none">
                        <strong>"I love that this just gets done perfectly..."</strong>
                      </Text>
                    </div>
                  </div>
                </div>

                {/* Bottom Stats */}
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-blue-200">
                  <div className="text-center mx-auto">
                    <div className="text-2xl font-bold text-blue-600 mb-1"><strong>200+</strong></div>
                    <Text className="text-xs text-blue-800 text-center mx-auto max-w-none"><strong>Processes Transformed</strong></Text>
                  </div>
                  <div className="text-center mx-auto">
                    <div className="text-2xl font-bold text-blue-600 mb-1"><strong>80%</strong></div>
                    <Text className="text-xs text-blue-800 text-center mx-auto max-w-none"><strong>Time Savings</strong></Text>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                <Target className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
