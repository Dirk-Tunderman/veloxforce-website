import Link from "next/link"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calculator, TrendingUp, Shield } from "lucide-react"

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
              Every Business Has{" "}
              <span className="gradient-text-blue">
                Untapped Potential
              </span>
            </Heading>

            <Text className="velox-text-body text-xl md:text-2xl text-gray-700 leading-relaxed text-center">
              <span className="font-bold">Your processes work</span> - they got you this far. But imagine if they could run without consuming your time.
            </Text>

            <Text className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto text-center">
              <span className="font-semibold">That's the Service-as-Software transformation.</span> Thanks to the AI revolution, what once took years now happens in <span className="font-bold">weeks to months</span> - and this is just the beginning.
            </Text>

            <div className="bg-blue-100 rounded-lg p-4 max-w-3xl mx-auto">
              <Text className="text-base font-semibold text-blue-900 mb-2 text-center">
                The AI Revolution in Custom Software:
              </Text>
              <Text className="text-sm text-blue-800 text-center">
                <span className="font-bold">MIT Technology Review</span> reports AI makes custom development <span className="font-bold">10x faster</span>. <span className="font-bold">Harvard Business Review</span> shows <span className="font-bold">70-90% cost reduction</span>. The best part? AI capabilities double every year.
              </Text>
            </div>
          </div>

          {/* ROI-First Process Preview */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200 max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center shadow-lg bg-blue-600">
                  <Calculator className="w-8 h-8 text-white" />
                </div>
                <Text className="font-bold text-gray-900 text-base mb-2">
                  Phase 1
                </Text>
                <Text className="text-sm text-gray-700 font-medium mb-1">
                  ROI Analysis First
                </Text>
                <Text className="text-xs text-gray-600 leading-tight">
                  We analyze if transformation makes financial sense
                </Text>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center shadow-lg bg-purple-600">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <Text className="font-bold text-gray-900 text-base mb-2">
                  Phase 2
                </Text>
                <Text className="text-sm text-gray-700 font-medium mb-1">
                  Rapid Development
                </Text>
                <Text className="text-xs text-gray-600 leading-tight">
                  AI acceleration: what took years now takes weeks
                </Text>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center shadow-lg bg-green-600">
                  <ArrowRight className="w-8 h-8 text-white" />
                </div>
                <Text className="font-bold text-gray-900 text-base mb-2">
                  Phase 3
                </Text>
                <Text className="text-sm text-gray-700 font-medium mb-1">
                  Seamless Handoff
                </Text>
                <Text className="text-xs text-gray-600 leading-tight">
                  From development to delegation without disruption
                </Text>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center shadow-lg bg-indigo-600">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <Text className="font-bold text-gray-900 text-base mb-2">
                  Phase 4
                </Text>
                <Text className="text-sm text-gray-700 font-medium mb-1">
                  Continuous Operation
                </Text>
                <Text className="text-xs text-gray-600 leading-tight">
                  We handle the ongoing operations
                </Text>
              </div>
            </div>
          </div>

          {/* Primary CTAs - Centered */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="velox-cta-primary text-lg font-semibold px-8 py-4 h-auto rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              asChild
            >
              <Link href="/tools/business-audit">
                <div className="flex items-center gap-2">
                  <Calculator className="w-5 h-5" />
                  <span>Check If ROI Makes Sense</span>
                </div>
              </Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="text-lg font-semibold px-8 py-4 h-auto rounded-xl border-2 border-blue-600 text-blue-600 hover:bg-blue-50 transition-all duration-300"
              asChild
            >
              <Link href="#roi-analysis">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  <span>See ROI-First Process</span>
                </div>
              </Link>
            </Button>
          </div>

          {/* Transform When ROI Makes Sense */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-blue-50 rounded-2xl p-8 border border-blue-200">
              <div className="text-center">
                <Heading level="3" className="text-2xl font-bold text-blue-900 mb-4">
                  Transform Strength into Competitive Advantage
                </Heading>
                <Text className="text-lg text-blue-800 mb-6 text-center">
                  <span className="font-bold">Your process has gotten you this far.</span> Now it's time to scale without constraints - when the ROI makes sense.
                </Text>

                <div className="bg-white rounded-lg p-6 border border-blue-300">
                  <Text className="text-base text-gray-700 italic text-center">
                    "We've turned down opportunities that didn't make financial sense.
                    That's how you know when we move forward, <span className="font-semibold">it's the right decision for your growth</span>."
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
