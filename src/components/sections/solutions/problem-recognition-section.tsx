"use client"

import { useState } from "react"
import Link from "next/link"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"
import { Button } from "@/components/ui/button"
import { BarChart3, MessageCircle, FileText, DollarSign, Users, TrendingUp, ChevronDown, ChevronUp, Calculator, Headphones, ClipboardList, CreditCard, Phone, Building } from "lucide-react"

const timeDrains = [
  {
    id: "data-entry",
    title: "I'm drowning in data entry and reporting",
    category: "Financial Operations Solutions",
    icon: Calculator,
    color: "gray", // 90% of icons should be gray-700
    problems: [
      "Manual invoice processing that never ends",
      "Financial reports that take hours to compile",
      "Data scattered across multiple systems",
      "Errors in calculations and data entry"
    ],
    solution: "Transform into automated financial operations where data flows seamlessly between systems, reports generate automatically, and accuracy is guaranteed.",
    cta: "Transform Financial Operations"
  },
  {
    id: "customer-service",
    title: "Customer service is eating all our time",
    category: "Customer Operations Solutions",
    icon: Headphones,
    color: "blue", // 10% of icons for success/completion states
    problems: [
      "Answering the same questions repeatedly",
      "Customer data scattered everywhere",
      "Response delays hurting satisfaction",
      "Follow-up balls getting dropped"
    ],
    solution: "Create a unified customer operations system where common queries are handled instantly, all interactions are tracked, and nothing falls through the cracks.",
    cta: "Transform Customer Operations"
  },
  {
    id: "documents",
    title: "Documents and paperwork never end",
    category: "Administrative Solutions",
    icon: ClipboardList,
    color: "gray", // 90% of icons should be gray-700
    problems: [
      "Document processing nightmares",
      "Data entry between systems",
      "Filing and organization chaos",
      "Compliance documentation burden"
    ],
    solution: "Convert documents into structured data automatically, keep systems synchronized, and ensure compliance is handled consistently.",
    cta: "Transform Administrative Operations"
  },
  {
    id: "invoicing",
    title: "Our invoicing and billing is a mess",
    category: "Revenue Operations Solutions",
    icon: CreditCard,
    color: "gray", // 90% of icons should be gray-700
    problems: [
      "Delayed invoicing hurting cash flow",
      "Pricing inconsistencies losing money",
      "Quote creation taking forever",
      "Payment reconciliation headaches"
    ],
    solution: "Automate the entire revenue cycle from service delivery to payment collection, with consistent pricing and real-time visibility.",
    cta: "Transform Revenue Operations"
  },
  {
    id: "sales-followup",
    title: "Sales follow-up falls through the cracks",
    category: "Sales Operations Solutions",
    icon: Phone,
    color: "gray", // 90% of icons should be gray-700
    problems: [
      "Lead follow-up inconsistency",
      "CRM data entry burden",
      "Pipeline visibility issues",
      "Proposal creation delays"
    ],
    solution: "Ensure every lead is nurtured perfectly, CRM stays updated automatically, and proposals are generated quickly with full pipeline visibility.",
    cta: "Transform Sales Operations"
  },
  {
    id: "scaling",
    title: "I can't scale without hiring more people",
    category: "Scaling Solutions",
    icon: Building,
    color: "gray", // 90% of icons should be gray-700
    problems: [
      "Operations don't scale with growth",
      "Quality drops when volume increases",
      "Hiring costs eating into profits",
      "Training new staff takes forever"
    ],
    solution: "Build scalable operations that handle 10x volume without 10x costs, maintaining quality while growing rapidly.",
    cta: "Transform Scaling Operations"
  }
]

export function ProblemRecognitionSection() {
  const [expandedCard, setExpandedCard] = useState<string | null>(null)

  const toggleCard = (id: string) => {
    setExpandedCard(expandedCard === id ? null : id)
  }

  return (
    <Section padding="xl" background="light-to-white" id="problem-recognition">
      <Container className="max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Heading level="2" className="velox-text-h2 mb-6">
            Which Time-Drain Is Killing Your Growth?
          </Heading>
          <Text className="velox-text-body text-xl text-gray-700 max-w-3xl mx-auto">
            Click your biggest operational headache to see the transformation
          </Text>
        </div>

        {/* Interactive Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {timeDrains.map((drain) => {
            const IconComponent = drain.icon
            const isExpanded = expandedCard === drain.id
            
            return (
              <div key={drain.id} className="relative">
                {/* Card */}
                <div
                  className={`
                    cursor-pointer transition-all duration-300 rounded-xl border-2 p-4 sm:p-6 group
                    ${isExpanded
                      ? 'velox-card-advantage-enhanced border-blue-300 shadow-lg transform scale-[1.02]'
                      : 'bg-white border-gray-200 hover:border-blue-200 hover:shadow-md hover:bg-blue-50/20 hover:transform hover:scale-[1.01]'
                    }
                  `}
                  onClick={() => toggleCard(drain.id)}
                >
                  {/* Card Header */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`
                      w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0
                      ${isExpanded
                        ? 'bg-blue-100 border border-blue-200'
                        : 'bg-gray-100 border border-gray-200'
                      }
                    `}>
                      <IconComponent className={`
                        w-6 h-6 transition-colors duration-200
                        ${drain.color === 'blue' && isExpanded
                          ? 'text-blue-600'
                          : drain.color === 'blue'
                            ? 'text-blue-600'
                            : isExpanded
                              ? 'text-blue-600'
                              : 'text-gray-700'
                        }
                      `} />
                    </div>
                    <div className="flex-1">
                      <Text className={`
                        font-semibold leading-tight
                        ${isExpanded ? 'text-blue-900' : 'text-gray-900'}
                      `}>
                        {drain.title}
                      </Text>
                      <Text className={`
                        text-sm mt-1
                        ${isExpanded ? 'text-blue-700' : 'text-gray-600'}
                      `}>
                        → {drain.category}
                      </Text>
                    </div>
                    <div className="flex-shrink-0">
                      {isExpanded ? (
                        <ChevronUp className="w-5 h-5 text-blue-600" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-400" />
                      )}
                    </div>
                  </div>

                  {/* Expanded Content */}
                  {isExpanded && (
                    <div className="space-y-6 mt-6 pt-6 border-t border-blue-200">
                      {/* Problems */}
                      <div>
                        <Text className="font-semibold text-blue-900 mb-3">
                          What Everyone Struggles With:
                        </Text>
                        <ul className="space-y-2">
                          {drain.problems.map((problem, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                              <Text className="text-sm text-blue-800">{problem}</Text>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Solution */}
                      <div>
                        <Text className="font-semibold text-blue-900 mb-3">
                          How Service-as-Software Transforms It:
                        </Text>
                        <Text className="text-sm text-blue-800 leading-relaxed">
                          {drain.solution}
                        </Text>
                      </div>

                      {/* CTA */}
                      <div className="pt-4">
                        <Button
                          size="sm"
                          className="velox-cta-secondary w-full text-sm font-semibold py-2 rounded-lg"
                          asChild
                        >
                          <Link href="/tools/business-audit">
                            {drain.cta}
                          </Link>
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-4 sm:p-6 md:p-8 border border-blue-200 max-w-4xl mx-auto">
            <Text className="text-lg font-semibold text-blue-900 mb-4">
              Don't see your specific challenge?
            </Text>
            <Text className="text-blue-800 mb-6">
              We've transformed over 200 unique processes. If it follows rules and takes time, we can automate it.
            </Text>
            
            <Button
              size="lg"
              className="velox-cta-primary text-base md:text-lg font-semibold px-4 sm:px-6 md:px-8 py-3 md:py-4 h-auto rounded-xl"
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
