import Link from "next/link"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"
import { Button } from "@/components/ui/button"
import { AlertTriangle, TrendingUp, Calculator, CheckCircle } from "lucide-react"

// Helper function to render text with bold formatting
const renderTextWithBold = (text: string) => {
  const parts = text.split(/(\*\*.*?\*\*)/)
  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={index}>{part.slice(2, -2)}</strong>
    }
    return part
  })
}

const hiddenCosts = [
  {
    label: "**Lost revenue** from inefficiency",
    amount: "€5,000/month",
    icon: AlertTriangle,
    color: "gray"
  },
  {
    label: "**Time waste** (20 hours @ €100/hour)",
    amount: "€2,000/month",
    icon: AlertTriangle,
    color: "gray"
  },
  {
    label: "**Staff doing repetitive work**",
    amount: "€3,000/month",
    icon: AlertTriangle,
    color: "gray"
  }
]

const serviceInvestment = [
  {
    label: "One-time setup",
    amount: "€3,000",
    description: "**build your digital workforce**",
    icon: CheckCircle,
    type: "setup"
  },
  {
    label: "Monthly service",
    amount: "€1,500",
    description: "**we manage everything**",
    icon: CheckCircle,
    type: "monthly"
  }
]

export function ROIBreakdownSection() {
  return (
    <Section padding="xl" background="light-blue" className="bg-gray-50">
      <Container className="max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Heading level="2" className="velox-text-h2 mb-6">
            Your Investment Math Is Simple
          </Heading>
          <Text className="velox-text-body text-xl text-gray-700 max-w-3xl mx-auto">
            See exactly where your money goes and what comes back
          </Text>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12 max-w-6xl mx-auto">
          {/* Current Hidden Costs */}
          <div className="space-y-6">
            <div className="text-center mb-8">
              <Heading level="3" className="text-2xl font-bold text-gray-900 mb-4">
                Your Current Hidden Costs:
              </Heading>
            </div>

            <div className="space-y-4">
              {hiddenCosts.map((cost, index) => {
                const IconComponent = cost.icon
                return (
                  <div key={index} className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                          <IconComponent className="w-5 h-5 text-gray-600" />
                        </div>
                        <Text className="text-gray-800 font-medium">
                          {renderTextWithBold(cost.label)}
                        </Text>
                      </div>
                      <Text className="text-lg font-bold text-gray-700">
                        {cost.amount}
                      </Text>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Total Hidden Cost */}
            <div className="bg-gray-100 border-2 border-gray-300 rounded-lg p-6">
              <div className="flex items-center justify-between">
                <Text className="text-xl font-bold text-gray-900">
                  Total Hidden Cost:
                </Text>
                <Text className="text-2xl font-bold text-gray-700">
                  €10,000/month
                </Text>
              </div>
            </div>
          </div>

          {/* Service-as-Software Investment */}
          <div className="space-y-6">
            <div className="text-center mb-8">
              <Heading level="3" className="text-2xl font-bold text-blue-900 mb-4">
                Service-as-Software Investment:
              </Heading>
            </div>

            <div className="space-y-4">
              {serviceInvestment.map((investment, index) => {
                const IconComponent = investment.icon
                return (
                  <div key={index} className="velox-card-advantage-enhanced p-6">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                          <IconComponent className="w-5 h-5 text-white" />
                        </div>
                        <Text className="text-blue-900 font-medium">
                          {investment.label}
                        </Text>
                      </div>
                      <Text className="text-lg font-bold text-blue-600">
                        {investment.amount}
                      </Text>
                    </div>
                    <Text className="text-sm text-blue-700 ml-13">
                      {renderTextWithBold(investment.description)}
                    </Text>
                  </div>
                )
              })}
            </div>

            {/* Results */}
            <div className="space-y-4">
              <div className="bg-green-50 border-2 border-green-300 rounded-lg p-6">
                <div className="flex items-center justify-between">
                  <Text className="text-xl font-bold text-green-900">
                    You Keep:
                  </Text>
                  <Text className="text-2xl font-bold text-green-600">
                    €8,500/month
                  </Text>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-lg p-6 text-white text-center">
                <Text className="text-lg font-semibold mb-2">
                  First Year ROI:
                </Text>
                <Text className="text-4xl font-bold">
                  340%
                </Text>
              </div>
            </div>
          </div>
        </div>

        {/* Quote and CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200 max-w-4xl mx-auto mb-8">
            <Text className="text-xl font-semibold text-blue-900 italic mb-6">
              "You don't pay for tools. You pay for outcomes delivered."
            </Text>

            <Button
              size="lg"
              className="velox-cta-primary text-lg font-semibold px-8 py-4 h-auto rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              asChild
            >
              <Link href="/tools/business-audit">
                <div className="flex flex-col items-center py-2">
                  <span className="text-lg">Calculate My Exact ROI</span>
                  <span className="text-sm font-normal opacity-90">Based on my specific numbers</span>
                </div>
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  )
}
