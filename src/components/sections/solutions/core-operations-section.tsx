import Link from "next/link"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"
import { Button } from "@/components/ui/button"
import { BarChart3, MessageCircle, FileText, DollarSign, Users, CheckCircle } from "lucide-react"

const operations = [
  {
    id: "financial",
    emoji: "📊",
    title: "Financial Operations",
    icon: BarChart3,
    color: "blue",
    struggles: [
      "Invoice processing that never ends",
      "Payment tracking across multiple systems", 
      "Financial reports that take hours",
      "Pricing calculations prone to errors",
      "Expense management chaos"
    ],
    transformation: [
      "Send invoices → Receive organized data",
      "Automatic payment follow-up until collected",
      "Reports generated and delivered on schedule",
      "Perfect pricing based on your rules",
      "Expenses captured, categorized, reported"
    ],
    realityHandled: [
      "Complex approval workflows? Built in.",
      "Multiple currencies? No problem.",
      "Legacy accounting system? We integrate.",
      "Compliance requirements? Followed perfectly."
    ],
    cta: "Transform Financial Operations"
  },
  {
    id: "customer",
    emoji: "📧",
    title: "Customer Operations", 
    icon: MessageCircle,
    color: "green",
    struggles: [
      "Answering the same questions repeatedly",
      "Customer data scattered everywhere",
      "Response delays hurting satisfaction",
      "Tracking issues across channels",
      "Follow-up balls getting dropped"
    ],
    transformation: [
      "Common queries handled instantly",
      "All interactions captured in one place",
      "24/7 response capability",
      "Unified view across all channels",
      "Nothing falls through cracks"
    ],
    realityHandled: [
      "Multiple support channels? Unified.",
      "Complex product questions? Scripted.",
      "Escalation rules? Followed.",
      "Different customer tiers? Recognized."
    ],
    cta: "Transform Customer Operations"
  },
  {
    id: "administrative",
    emoji: "📄",
    title: "Administrative Operations",
    icon: FileText,
    color: "purple",
    struggles: [
      "Document processing nightmares",
      "Data entry between systems",
      "Filing and organization chaos", 
      "Compliance documentation burden",
      "Manual report generation"
    ],
    transformation: [
      "Documents → Structured data automatically",
      "Systems stay synchronized",
      "Everything filed and findable",
      "Compliance handled consistently",
      "Reports created while you sleep"
    ],
    realityHandled: [
      "Paper documents? Digitized.",
      "Multiple formats? Standardized.",
      "Regulatory requirements? Met.",
      "Audit trails? Complete."
    ],
    cta: "Transform Administrative Operations"
  },
  {
    id: "revenue",
    emoji: "💰",
    title: "Revenue Operations",
    icon: DollarSign,
    color: "orange",
    struggles: [
      "Delayed invoicing hurting cash flow",
      "Pricing inconsistencies losing money",
      "Quote creation taking forever",
      "Payment reconciliation headaches",
      "Revenue reporting blindness"
    ],
    transformation: [
      "Service delivered → Invoice sent",
      "Consistent pricing every time",
      "Complex quotes in minutes",
      "Payments tracked automatically",
      "Real-time revenue visibility"
    ],
    realityHandled: [
      "Complex pricing rules? Programmed.",
      "Multiple payment methods? Tracked.",
      "Subscription billing? Automated.",
      "International complexity? Managed."
    ],
    cta: "Transform Revenue Operations"
  },
  {
    id: "sales",
    emoji: "🔄",
    title: "Sales Operations",
    icon: Users,
    color: "red",
    struggles: [
      "Lead follow-up inconsistency",
      "CRM data entry burden",
      "Pipeline visibility issues",
      "Proposal creation delays",
      "Activity tracking overhead"
    ],
    transformation: [
      "Every lead nurtured perfectly",
      "CRM updated automatically",
      "Pipeline always current",
      "Proposals generated quickly",
      "Activities logged without effort"
    ],
    realityHandled: [
      "Multiple lead sources? Consolidated.",
      "Complex sales process? Followed.",
      "Team coordination? Seamless.",
      "Reporting needs? Satisfied."
    ],
    cta: "Transform Sales Operations"
  }
]

export function CoreOperationsSection() {
  return (
    <Section padding="xl" background="light-blue" className="bg-gray-50">
      <Container className="max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Heading level="2" className="velox-text-h2 mb-6">
            Transform Any Repetitive Process Into Delegated Outcomes
          </Heading>
          <Text className="velox-text-body text-xl text-gray-700 max-w-4xl mx-auto">
            See how Service-as-Software transforms the most common business operations
          </Text>
        </div>

        {/* Operations Grid */}
        <div className="space-y-16">
          {operations.map((operation, index) => {
            const IconComponent = operation.icon
            
            return (
              <div key={operation.id} className="bg-white rounded-2xl shadow-lg p-8">
                {/* Operation Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="text-4xl">{operation.emoji}</div>
                  <div>
                    <Heading level="3" className="text-2xl font-bold text-gray-900 mb-2">
                      {operation.title}
                    </Heading>
                  </div>
                </div>

                {/* Three Columns */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* What Everyone Struggles With */}
                  <div className="space-y-4">
                    <Heading level="4" className="text-lg font-bold text-red-900 mb-4">
                      What Everyone Struggles With:
                    </Heading>
                    <ul className="space-y-3">
                      {operation.struggles.map((struggle, struggleIndex) => (
                        <li key={struggleIndex} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                          <Text className="text-sm text-gray-700 leading-relaxed">
                            {struggle}
                          </Text>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* How Service-as-Software Transforms It */}
                  <div className="space-y-4">
                    <Heading level="4" className="text-lg font-bold text-blue-900 mb-4">
                      How Service-as-Software Transforms It:
                    </Heading>
                    <ul className="space-y-3">
                      {operation.transformation.map((transform, transformIndex) => (
                        <li key={transformIndex} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                          <Text className="text-sm text-blue-800 leading-relaxed font-medium">
                            {transform}
                          </Text>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Your Reality Handled */}
                  <div className="space-y-4">
                    <Heading level="4" className="text-lg font-bold text-green-900 mb-4">
                      Your Reality Handled:
                    </Heading>
                    <ul className="space-y-3">
                      {operation.realityHandled.map((reality, realityIndex) => (
                        <li key={realityIndex} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <Text className="text-sm text-green-800 leading-relaxed">
                            {reality}
                          </Text>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* CTA */}
                <div className="text-center mt-8 pt-8 border-t border-gray-200">
                  <Button
                    className="velox-cta-secondary font-semibold px-6 py-3 rounded-lg"
                    asChild
                  >
                    <Link href="/tools/business-audit">
                      {operation.cta}
                    </Link>
                  </Button>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom Message */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200 max-w-4xl mx-auto">
            <Text className="text-lg font-semibold text-blue-900 mb-4">
              Don't see your specific operation?
            </Text>
            <Text className="text-blue-800 mb-6">
              These are just examples. We've transformed over 200 unique processes across every industry. 
              If it's repetitive and follows rules, we can automate it.
            </Text>
            
            <Button
              size="lg"
              className="velox-cta-primary text-lg font-semibold px-8 py-4 h-auto rounded-xl"
              asChild
            >
              <Link href="/tools/business-audit">
                Assess My Specific Process
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  )
}
