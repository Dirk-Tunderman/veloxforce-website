import Link from "next/link"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"
import { Button } from "@/components/ui/button"
import {
  BarChart3,
  MessageCircle,
  FileText,
  DollarSign,
  Users,
  CheckCircle,
  XCircle,
  Shield,
  ArrowRight,
  Zap
} from "lucide-react"

const operations = [
  {
    id: "financial",
    title: "Financial Operations",
    icon: BarChart3,
    color: "blue",
    gradient: "from-blue-500 to-indigo-600",
    bgGradient: "from-blue-50 to-indigo-50",
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
    title: "Customer Operations",
    icon: MessageCircle,
    color: "green",
    gradient: "from-green-500 to-emerald-600",
    bgGradient: "from-green-50 to-emerald-50",
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
    title: "Administrative Operations",
    icon: FileText,
    color: "purple",
    gradient: "from-purple-500 to-violet-600",
    bgGradient: "from-purple-50 to-violet-50",
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
    title: "Revenue Operations",
    icon: DollarSign,
    color: "orange",
    gradient: "from-orange-500 to-amber-600",
    bgGradient: "from-orange-50 to-amber-50",
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
    title: "Sales Operations",
    icon: Users,
    color: "teal",
    gradient: "from-teal-500 to-cyan-600",
    bgGradient: "from-teal-50 to-cyan-50",
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
    <Section padding="xl" background="light-to-accent">
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
        <div className="space-y-12">
          {operations.map((operation, index) => {
            const IconComponent = operation.icon

            return (
              <div key={operation.id} className={`relative bg-gradient-to-br ${operation.bgGradient} rounded-3xl shadow-xl p-6 sm:p-8 md:p-10 border border-white/50 overflow-hidden`}>
                {/* Decorative background elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full blur-2xl -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full blur-xl translate-y-12 -translate-x-12"></div>

                {/* Operation Header */}
                <div className="relative z-10 flex items-center gap-6 mb-10">
                  <div className={`w-16 h-16 bg-gradient-to-br ${operation.gradient} rounded-2xl flex items-center justify-center shadow-lg`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <Heading level="3" className="text-3xl font-bold text-gray-900 mb-2">
                      {operation.title}
                    </Heading>
                  </div>
                </div>

                {/* Three Columns */}
                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
                  {/* What Everyone Struggles With */}
                  <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 shadow-lg">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                        <XCircle className="w-5 h-5 text-red-600" />
                      </div>
                      <Heading level="4" className="text-lg font-bold text-red-900">
                        What Everyone Struggles With:
                      </Heading>
                    </div>
                    <ul className="space-y-4">
                      {operation.struggles.map((struggle, struggleIndex) => (
                        <li key={struggleIndex} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                          <Text className="text-sm text-gray-700 leading-relaxed">
                            {struggle}
                          </Text>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* How Service-as-Software Transforms It */}
                  <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 shadow-lg">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Zap className="w-5 h-5 text-blue-600" />
                      </div>
                      <Heading level="4" className="text-lg font-bold text-blue-900">
                        How Service-as-Software Transforms It:
                      </Heading>
                    </div>
                    <ul className="space-y-4">
                      {operation.transformation.map((transform, transformIndex) => (
                        <li key={transformIndex} className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <ArrowRight className="w-3 h-3 text-blue-600" />
                          </div>
                          <Text className="text-sm text-blue-800 leading-relaxed font-medium">
                            {transform}
                          </Text>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Your Reality Handled */}
                  <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 shadow-lg">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                        <Shield className="w-5 h-5 text-green-600" />
                      </div>
                      <Heading level="4" className="text-lg font-bold text-green-900">
                        Your Reality Handled:
                      </Heading>
                    </div>
                    <ul className="space-y-4">
                      {operation.realityHandled.map((reality, realityIndex) => (
                        <li key={realityIndex} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <Text className="text-sm text-green-800 leading-relaxed font-medium">
                            {reality}
                          </Text>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* CTA */}
                <div className="relative z-10 text-center mt-10 pt-8 border-t border-white/30">
                  <Button
                    className={`bg-gradient-to-r ${operation.gradient} hover:shadow-lg text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105`}
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
        <div className="text-center mt-20">
          <div className="relative bg-[#1A365D] rounded-3xl p-8 sm:p-10 md:p-12 text-white max-w-5xl mx-auto shadow-2xl overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 left-0 w-40 h-40 bg-white/10 rounded-full blur-3xl -translate-x-20 -translate-y-20"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl translate-x-16 translate-y-16"></div>

            <div className="relative z-10">
              <div className="flex items-center justify-center gap-4 mb-6">
                <Zap className="w-8 h-8 text-white" />
                <Text className="text-2xl font-bold text-white">
                  Don't see your specific operation?
                </Text>
                <Zap className="w-8 h-8 text-white" />
              </div>
              <Text className="text-xl text-blue-100 mb-8 leading-relaxed max-w-3xl mx-auto">
                These are just examples. We've transformed over 200 unique processes across every industry.
                <span className="font-semibold text-white block mt-2">If it's repetitive and follows rules, we can automate it.</span>
              </Text>

              <Button
                size="lg"
                className="bg-white text-[#1A365D] hover:bg-blue-50 text-lg font-bold px-8 py-4 h-auto rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                asChild
              >
                <Link href="/tools/business-audit">
                  Assess My Specific Process
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
