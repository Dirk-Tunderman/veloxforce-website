"use client"

import { useState } from "react"
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
  ArrowRight,
  ChevronDown,
  ChevronUp
} from "lucide-react"

const operations = [
  {
    id: "financial",
    title: "Financial Operations",
    subtitle: "I'm drowning in data entry and reporting",
    icon: BarChart3,
    color: "blue",
    struggles: [
      "Your accounting people spend hours on invoice processing instead of financial analysis",
      "Team tracks payments manually instead of analyzing cash flow trends",
      "Financial reports take hours instead of strategic planning time",
      "Pricing calculations prone to errors instead of optimization",
      "Expense management chaos instead of budget analysis"
    ],
    transformation: [
      "You send invoices → We deliver organized financial data",
      "You request reports → We deliver them on schedule",
      "You set pricing rules → We apply them perfectly",
      "You submit expenses → We categorize and report them",
      "You delegate the process → We handle all complexity"
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
    subtitle: "Customer service is eating all our time",
    icon: MessageCircle,
    color: "green",
    struggles: [
      "Your service team answers routine questions instead of building relationships",
      "Customer data scattered instead of strategic analysis",
      "Response delays instead of proactive service improvements",
      "Tracking issues manually instead of optimizing customer experience",
      "Follow-up tasks instead of complex problem-solving"
    ],
    transformation: [
      "You forward customer inquiries → We deliver responses",
      "You receive escalated complex cases → We handle routine ones",
      "You set response standards → We meet them 24/7",
      "You define service levels → We deliver consistently",
      "You delegate customer operations → We ensure nothing falls through cracks"
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
    subtitle: "Documents and paperwork never end",
    icon: FileText,
    color: "purple",
    struggles: [
      "Your team drowns in document processing instead of workflow optimization",
      "Data entry between systems instead of process improvement",
      "Filing chaos instead of efficiency analysis",
      "Compliance documentation burden instead of strategic compliance planning",
      "Manual report generation instead of insights analysis"
    ],
    transformation: [
      "You send documents → We deliver structured data",
      "You request filing → We organize and store everything",
      "You need compliance → We handle all requirements",
      "You want reports → We create them automatically",
      "You delegate admin work → We deliver organized results"
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
    subtitle: "Our invoicing and billing is a mess",
    icon: DollarSign,
    color: "orange",
    struggles: [
      "Your finance people manage invoicing manually instead of analyzing revenue trends",
      "Pricing inconsistencies instead of strategic pricing optimization",
      "Quote creation delays instead of growth opportunity analysis",
      "Payment reconciliation headaches instead of cash flow planning",
      "Revenue reporting delays instead of growth strategy development"
    ],
    transformation: [
      "You deliver service → We send invoices automatically",
      "You set pricing rules → We apply them consistently",
      "You need quotes → We generate them in minutes",
      "You track payments → We handle all reconciliation",
      "You delegate revenue ops → We deliver real-time visibility"
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
    subtitle: "Sales follow-up falls through the cracks",
    icon: Users,
    color: "indigo",
    struggles: [
      "Your team does manual data entry instead of building relationships",
      "Lead scoring manually instead of strategic outreach planning",
      "Follow-up reminders instead of creative campaign development",
      "Data entry between platforms instead of analyzing pipeline trends",
      "Routine qualification tasks instead of closing deals"
    ],
    transformation: [
      "You talk to prospects → We log everything",
      "You close deals → We handle the paperwork",
      "You set follow-up rules → We execute them perfectly",
      "You focus on strategy → We ensure nothing drops",
      "You delegate sales ops → We deliver organized pipeline"
    ],
    realityHandled: [
      "CRM data entry? Handled.",
      "Lead distribution? Optimized.",
      "Follow-up sequences? Executed.",
      "Sales reporting? Real-time."
    ],
    cta: "Transform Sales Operations"
  }
]

export function ComprehensiveSolutionsSection() {
  const [expandedCard, setExpandedCard] = useState<string | null>(null)

  const toggleExpand = (id: string) => {
    setExpandedCard(expandedCard === id ? null : id)
  }

  return (
    <Section padding="xl" background="white">
      {/* Simplified Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/70 via-white to-gray-50/50" />

      <Container className="relative z-10 max-w-7xl">
        <div className="text-center mb-16 animate-on-scroll" data-animation="fadeInUp">
          <Heading level="2" className="velox-text-h2 mb-6">
            Which Time-Drain Is{" "}
            <span className="text-gradient">Killing Your Growth?</span>
          </Heading>
          <Text className="velox-text-lead max-w-4xl mx-auto">
            Every operation below steals strategic time from your best people. Click any to see your transformation path.
          </Text>
        </div>

        {/* Operation Cards Grid - Simplified without heavy animations */}
        <div className="grid gap-6 mb-16">
          {operations.map((operation, index) => {
            const IconComponent = operation.icon
            const isExpanded = expandedCard === operation.id
            
            return (
              <div
                key={operation.id}
                className="animate-on-scroll"
                data-animation="fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`card-base cursor-pointer transition-all duration-300 ${
                  isExpanded ? 'shadow-xl' : 'hover:shadow-lg'
                }`}>
                  <button
                    onClick={() => toggleExpand(operation.id)}
                    className="w-full text-left"
                  >
                    <div className="flex items-center justify-between p-6">
                      <div className="flex items-center gap-4">
                        <div className="icon-container-gradient">
                          <IconComponent className="w-6 h-6 icon-accent" />
                        </div>
                        <div>
                          <Heading level="3" className="velox-text-h3">
                            {operation.title}
                          </Heading>
                          <Text className="velox-text-body text-gray-600">
                            {operation.subtitle}
                          </Text>
                        </div>
                      </div>
                      {isExpanded ? (
                        <ChevronUp className="w-5 h-5 text-gray-500" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-500" />
                      )}
                    </div>
                  </button>

                  {/* Expanded Content - CSS transitions instead of Framer Motion */}
                  <div 
                    className={`overflow-hidden transition-all duration-500 ${
                      isExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-6 pb-6 space-y-8">
                      {/* Three Column Layout */}
                      <div className="grid md:grid-cols-3 gap-8">
                        {/* Current Reality */}
                        <div className="space-y-4">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                              <Text className="text-red-600 font-bold">1</Text>
                            </div>
                            <Heading level="4" className="velox-text-h4 text-red-700">
                              Your Reality Today
                            </Heading>
                          </div>
                          <ul className="space-y-3">
                            {operation.struggles.map((struggle, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                                <Text className="velox-text-body text-sm">
                                  {struggle}
                                </Text>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* The Transformation */}
                        <div className="space-y-4">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                              <Text className="text-blue-600 font-bold">2</Text>
                            </div>
                            <Heading level="4" className="velox-text-h4 text-blue-700">
                              The Transformation
                            </Heading>
                          </div>
                          <ul className="space-y-3">
                            {operation.transformation.map((item, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <ArrowRight className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                                <Text className="velox-text-body text-sm">
                                  {item}
                                </Text>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Reality Handled */}
                        <div className="space-y-4">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                              <Text className="text-green-600 font-bold">3</Text>
                            </div>
                            <Heading level="4" className="velox-text-h4 text-green-700">
                              Reality Handled
                            </Heading>
                          </div>
                          <ul className="space-y-3">
                            {operation.realityHandled.map((item, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                <Text className="velox-text-body text-sm">
                                  {item}
                                </Text>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* CTA Button */}
                      <div className="text-center pt-6">
                        <Button
                          className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                          asChild
                        >
                          <Link href="/tools/business-audit">
                            {operation.cta}
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center animate-on-scroll" data-animation="fadeInUp">
          <div className="card-solution p-8">
            <Heading level="3" className="velox-text-h3 mb-4 text-blue-800">
              Multiple Operations Need Help?
            </Heading>
            <Text className="velox-text-body mb-6 max-w-2xl mx-auto">
              Most companies transform 3-5 operations in their first year, creating compound efficiency gains across their entire organization.
            </Text>
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-10 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              asChild
            >
              <Link href="/tools/business-audit">
                See Your Full Transformation Potential
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  )
}