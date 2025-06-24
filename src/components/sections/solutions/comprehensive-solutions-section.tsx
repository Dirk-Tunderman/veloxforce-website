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
  ArrowRight,
  Sparkles,
  Clock,
  TrendingUp,
  Shield,
  ShoppingCart,
  Monitor,
  Briefcase,
  Factory,
  Zap,
  Target,
  CheckCircle
} from "lucide-react"

const operations = [
  {
    id: "financial",
    title: "Financial Operations",
    subtitle: "Hours lost to invoicing & reporting",
    icon: BarChart3,
    color: "bg-blue-600",
    currentState: "Your team spends 15+ hours/week on manual financial tasks",
    transformation: "We handle all data entry, reporting, and reconciliation",
    timeReclaimed: "20+ hours/week",
    errorReduction: "95%",
    costSavings: "40-60%",
    industries: [
      {
        name: "E-commerce",
        icon: ShoppingCart,
        examples: ["Order processing & reconciliation", "Refund management & tracking", "Multi-channel financial reporting", "Tax compliance automation"]
      },
      {
        name: "SaaS",
        icon: Monitor,
        examples: ["Subscription billing automation", "Usage tracking & invoicing", "Revenue recognition", "Churn analysis reporting"]
      },
      {
        name: "Professional Services",
        icon: Briefcase,
        examples: ["Time-based billing automation", "Project expense tracking", "Client invoice generation", "Profitability analysis"]
      },
      {
        name: "Manufacturing",
        icon: Factory,
        examples: ["Purchase order processing", "Vendor payment automation", "Cost accounting", "Inventory financial tracking"]
      }
    ],
    timeline: [
      { phase: "Analysis & Setup", duration: "1-2 weeks", description: "Process mapping & system integration" },
      { phase: "Automation Implementation", duration: "2-3 weeks", description: "AI-powered workflow creation" },
      { phase: "Full Operation", duration: "Week 4+", description: "Complete hands-off financial operations" }
    ]
  },
  {
    id: "customer",
    title: "Customer Operations",
    subtitle: "Drowning in support tickets",
    icon: MessageCircle,
    color: "bg-purple-600",
    currentState: "Your team handles 100+ routine inquiries daily",
    transformation: "We manage all first-line support and ticket routing",
    timeReclaimed: "30+ hours/week",
    errorReduction: "90%",
    costSavings: "50-70%",
    industries: [
      {
        name: "E-commerce",
        icon: ShoppingCart,
        examples: ["Order status inquiries", "Shipping & delivery questions", "Return & refund processing", "Product information requests"]
      },
      {
        name: "SaaS",
        icon: Monitor,
        examples: ["Account setup & onboarding", "Feature usage guidance", "Billing inquiries", "Technical troubleshooting"]
      },
      {
        name: "Professional Services",
        icon: Briefcase,
        examples: ["Appointment scheduling", "Project status updates", "Service inquiries", "Client communication"]
      },
      {
        name: "Manufacturing",
        icon: Factory,
        examples: ["Product specifications", "Warranty claim processing", "Technical support", "Order tracking"]
      }
    ],
    timeline: [
      { phase: "Support Setup", duration: "1-2 weeks", description: "Knowledge base & response templates" },
      { phase: "AI Training", duration: "2-3 weeks", description: "Custom AI agent development" },
      { phase: "24/7 Operation", duration: "Week 4+", description: "Full customer support automation" }
    ]
  },
  {
    id: "administrative",
    title: "Administrative Operations",
    subtitle: "Endless paperwork & filing",
    icon: FileText,
    color: "bg-indigo-600",
    currentState: "Documents scattered across systems and formats",
    transformation: "We digitize, organize, and manage all documentation",
    timeReclaimed: "15+ hours/week",
    errorReduction: "98%",
    costSavings: "35-50%",
    industries: [
      {
        name: "E-commerce",
        icon: ShoppingCart,
        examples: ["Vendor contract management", "Compliance documentation", "Inventory records", "Supplier communication"]
      },
      {
        name: "SaaS",
        icon: Monitor,
        examples: ["User data management", "Compliance reporting", "Contract processing", "Legal document filing"]
      },
      {
        name: "Professional Services",
        icon: Briefcase,
        examples: ["Client file management", "Proposal generation", "Contract administration", "Regulatory compliance"]
      },
      {
        name: "Manufacturing",
        icon: Factory,
        examples: ["Quality documentation", "Safety compliance records", "Supplier paperwork", "Regulatory filings"]
      }
    ],
    timeline: [
      { phase: "Document Audit", duration: "1-2 weeks", description: "Current system analysis & digitization plan" },
      { phase: "System Migration", duration: "2-4 weeks", description: "Document digitization & organization" },
      { phase: "Automated Management", duration: "Week 5+", description: "Ongoing document processing & filing" }
    ]
  },
  {
    id: "revenue",
    title: "Revenue Operations",
    subtitle: "Manual billing nightmares",
    icon: DollarSign,
    color: "bg-green-600",
    currentState: "Invoicing delays impact cash flow and growth",
    transformation: "We automate your entire revenue cycle",
    timeReclaimed: "25+ hours/week",
    errorReduction: "99%",
    costSavings: "45-65%",
    industries: [
      {
        name: "E-commerce",
        icon: ShoppingCart,
        examples: ["Automated order invoicing", "Payment processing", "Marketplace reconciliation", "Revenue analytics"]
      },
      {
        name: "SaaS",
        icon: Monitor,
        examples: ["Subscription management", "Usage-based billing", "Proration calculations", "Revenue recognition"]
      },
      {
        name: "Professional Services",
        icon: Briefcase,
        examples: ["Time & materials billing", "Project milestone invoicing", "Retainer management", "Client payment tracking"]
      },
      {
        name: "Manufacturing",
        icon: Factory,
        examples: ["Quote generation", "Order-to-cash automation", "Contract billing", "Payment collection"]
      }
    ],
    timeline: [
      { phase: "Revenue Analysis", duration: "1-2 weeks", description: "Current billing process mapping" },
      { phase: "Automation Setup", duration: "2-3 weeks", description: "Payment & invoicing system integration" },
      { phase: "Full Revenue Cycle", duration: "Week 4+", description: "Complete automated revenue operations" }
    ]
  },
  {
    id: "sales",
    title: "Sales Operations",
    subtitle: "CRM chaos & follow-up failures",
    icon: Users,
    color: "bg-orange-500",
    currentState: "Sales data entry takes time from selling",
    transformation: "We maintain your CRM and execute follow-ups",
    timeReclaimed: "20+ hours/week",
    errorReduction: "95%",
    costSavings: "40-55%",
    industries: [
      {
        name: "E-commerce",
        icon: ShoppingCart,
        examples: ["Lead scoring & qualification", "Customer journey tracking", "Abandoned cart recovery", "Upsell automation"]
      },
      {
        name: "SaaS",
        icon: Monitor,
        examples: ["Trial-to-paid conversion", "Feature adoption tracking", "Expansion opportunity identification", "Renewal management"]
      },
      {
        name: "Professional Services",
        icon: Briefcase,
        examples: ["Proposal tracking", "Client relationship management", "Referral program automation", "Pipeline reporting"]
      },
      {
        name: "Manufacturing",
        icon: Factory,
        examples: ["Distributor relationship management", "Quote follow-up automation", "Territory management", "Sales forecasting"]
      }
    ],
    timeline: [
      { phase: "CRM Optimization", duration: "1-2 weeks", description: "Data cleanup & process standardization" },
      { phase: "Automation Implementation", duration: "2-3 weeks", description: "Follow-up sequences & lead scoring" },
      { phase: "Full Sales Support", duration: "Week 4+", description: "Complete sales operations automation" }
    ]
  }
]

export function ComprehensiveSolutionsSection() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)
  const [selectedCard, setSelectedCard] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState<string>("industries")

  return (
    <Section padding="xl" background="white">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-white to-gray-50/20" />

      <Container className="relative z-10 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll" data-animation="fadeInUp">
          <Heading level="2" className="velox-text-h2 mb-6" style={{ lineHeight: '1.2' }}>
            Which Time-Drain Is{" "}
            <span className="text-gradient">Killing Your Growth?</span>
          </Heading>
          <Text className="velox-text-lead max-w-3xl mx-auto text-gray-600">
            Every hour spent on these operations is an hour stolen from strategy. 
            See how we transform time-drains into competitive advantages.
          </Text>
        </div>

        {/* Operation Cards Grid - 2x3 on desktop, 1 column on mobile */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {operations.map((operation, index) => {
            const IconComponent = operation.icon
            const isHovered = hoveredCard === operation.id
            const isSelected = selectedCard === operation.id
            
            return (
              <div
                key={operation.id}
                className="animate-on-scroll"
                data-animation="fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div 
                  className={`card-elevated group cursor-pointer transition-all duration-300 ${
                    isHovered ? 'transform -translate-y-1' : ''
                  } ${isSelected ? 'ring-2 ring-blue-500' : ''}`}
                  onMouseEnter={() => setHoveredCard(operation.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  onClick={() => {
                    setSelectedCard(selectedCard === operation.id ? null : operation.id)
                    setActiveTab("industries")
                  }}
                >
                  {/* Card Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 ${operation.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <Heading level="4" className="text-xl font-semibold text-gray-900 mb-1">
                          {operation.title}
                        </Heading>
                        <Text className="text-sm text-gray-500">
                          {operation.subtitle}
                        </Text>
                      </div>
                    </div>
                    <div className={`transition-all duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
                      <Sparkles className="w-5 h-5 text-blue-500" />
                    </div>
                  </div>

                  {/* Current State - Always visible */}
                  <div className="mb-4">
                    <Text className="text-gray-700 font-medium">
                      {operation.currentState}
                    </Text>
                  </div>

                  {/* Hover Preview - Shows transformation and metrics */}
                  <div className={`transition-all duration-300 ${
                    isHovered || isSelected ? 'opacity-100 max-h-32' : 'opacity-0 max-h-0'
                  } overflow-hidden`}>
                    <div className="pt-4 border-t border-gray-200">
                      <div className="flex items-center gap-2 mb-3">
                        <ArrowRight className="w-4 h-4 text-blue-500" />
                        <Text className="text-blue-700 font-semibold">
                          After Transformation:
                        </Text>
                      </div>
                      <Text className="text-gray-600 mb-3 text-sm">
                        {operation.transformation}
                      </Text>
                      
                      {/* Quick Metrics */}
                      <div className="grid grid-cols-3 gap-3 text-center">
                        <div className="bg-blue-50 rounded-lg p-2">
                          <div className="text-blue-600 font-bold text-sm">{operation.timeReclaimed}</div>
                          <div className="text-xs text-gray-600">Time Saved</div>
                        </div>
                        <div className="bg-green-50 rounded-lg p-2">
                          <div className="text-green-600 font-bold text-sm">{operation.errorReduction}</div>
                          <div className="text-xs text-gray-600">Error Reduction</div>
                        </div>
                        <div className="bg-purple-50 rounded-lg p-2">
                          <div className="text-purple-600 font-bold text-sm">{operation.costSavings}</div>
                          <div className="text-xs text-gray-600">Cost Savings</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Selected State - Shows full details with tabs */}
                  <div className={`transition-all duration-500 ${
                    isSelected ? 'opacity-100 max-h-[600px] mt-6' : 'opacity-0 max-h-0'
                  } overflow-hidden`}>
                    <div className="pt-6 border-t-2 border-blue-200">
                      {/* Tab Navigation */}
                      <div className="flex gap-2 mb-6">
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            setActiveTab("industries")
                          }}
                          className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                            activeTab === "industries" 
                              ? "bg-blue-100 text-blue-700" 
                              : "text-gray-600 hover:text-gray-800"
                          }`}
                        >
                          Industry Examples
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            setActiveTab("timeline")
                          }}
                          className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                            activeTab === "timeline" 
                              ? "bg-blue-100 text-blue-700" 
                              : "text-gray-600 hover:text-gray-800"
                          }`}
                        >
                          Implementation
                        </button>
                      </div>

                      {/* Tab Content */}
                      {activeTab === "industries" && (
                        <div className="space-y-4 mb-6">
                          {operation.industries.map((industry, i) => {
                            const IndustryIcon = industry.icon
                            return (
                              <div key={i} className="border border-gray-200 rounded-lg p-4">
                                <div className="flex items-center gap-3 mb-3">
                                  <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                                    <IndustryIcon className="w-5 h-5 text-gray-600" />
                                  </div>
                                  <Text className="font-semibold text-gray-900">
                                    {industry.name}
                                  </Text>
                                </div>
                                <ul className="space-y-1">
                                  {industry.examples.map((example, j) => (
                                    <li key={j} className="flex items-start gap-2">
                                      <CheckCircle className="w-3 h-3 text-green-500 mt-1 flex-shrink-0" />
                                      <Text className="text-sm text-gray-700">
                                        {example}
                                      </Text>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )
                          })}
                        </div>
                      )}

                      {activeTab === "timeline" && (
                        <div className="space-y-4 mb-6">
                          {operation.timeline.map((phase, i) => (
                            <div key={i} className="flex gap-4 items-start">
                              <div className={`w-8 h-8 ${operation.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                                <Text className="text-white font-bold text-sm">{i + 1}</Text>
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-1">
                                  <Text className="font-semibold text-gray-900">
                                    {phase.phase}
                                  </Text>
                                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${operation.color} bg-opacity-20 text-gray-700`}>
                                    {phase.duration}
                                  </span>
                                </div>
                                <Text className="text-sm text-gray-600">
                                  {phase.description}
                                </Text>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                      
                      <Button
                        size="sm"
                        className={`w-full text-white ${operation.color} hover:opacity-90 transition-opacity`}
                        asChild
                      >
                        <Link href="/tools/business-audit">
                          Calculate Your ROI
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA - Enhanced */}
        <div className="text-center animate-on-scroll" data-animation="fadeInUp">
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border border-blue-100">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Target className="w-6 h-6 text-blue-600" />
              <Heading level="3" className="text-2xl font-bold text-gray-900">
                Ready to Reclaim Your Time?
              </Heading>
            </div>
            <Text className="velox-text-body mb-6 max-w-2xl mx-auto text-gray-600">
              Most companies save 100+ hours per week across their operations. 
              Find out exactly how much time you could reclaim.
            </Text>
            
            {/* Quick stats */}
            <div className="grid md:grid-cols-3 gap-6 mb-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-1">110+</div>
                <p className="text-sm text-gray-600">Hours Saved Weekly</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-1">96%</div>
                <p className="text-sm text-gray-600">Average Error Reduction</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-1">55%</div>
                <p className="text-sm text-gray-600">Average Cost Savings</p>
              </div>
            </div>
            
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl transition-all duration-300"
              asChild
            >
              <Link href="/tools/business-audit">
                Get Your Personalized Time Analysis
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  )
}