"use client"

import { useState } from "react"
import Link from "next/link"
import {
  ArrowRight,
  FileText,
  Package,
  Database,
  BarChart3,
  Megaphone,
  Users,
  Target,
  Share2,
  UserCheck,
  CreditCard,
  TrendingUp,
  Receipt,
  Calculator,
  Heart,
  Headphones,
  Activity,
  RefreshCw
} from "lucide-react"

import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"
import { Button } from "@/components/ui/button"
import { CTATracker } from "@/components/analytics/cta-tracker"

// System tabs configuration
const systemTabs = [
  { id: 'operations', label: 'OPERATIONS', isDefault: true },
  { id: 'marketing', label: 'MARKETING', isDefault: false },
  { id: 'sales', label: 'SALES', isDefault: false },
  { id: 'finance', label: 'FINANCE', isDefault: false },
  { id: 'customer-success', label: 'CUSTOMER SUCCESS', isDefault: false },
]

// System solutions data
const systemSolutions = {
  operations: [
    {
      icon: FileText,
      title: "Invoice Processing & AP",
      description: "Process 500+ invoices monthly with 99.8% accuracy. No manual data entry.",
      benefit: "Reduce processing time from 45 minutes to 2 minutes per invoice",
      cta: "See Invoice Solutions",
      href: "/solutions/operations/invoice-processing"
    },
    {
      icon: Package,
      title: "Order Management & Fulfillment",
      description: "Automate from order receipt to customer delivery confirmation.",
      benefit: "Cut order processing time by 80%. Zero shipping errors.",
      cta: "See Order Solutions",
      href: "/solutions/operations/order-management"
    },
    {
      icon: Database,
      title: "Data Entry & Management",
      description: "Eliminate manual data entry across all your systems and databases.",
      benefit: "Save 15+ hours weekly on data tasks. Perfect accuracy guaranteed.",
      cta: "See Data Solutions",
      href: "/solutions/operations/data-management"
    },
    {
      icon: BarChart3,
      title: "Reporting & Analytics",
      description: "Automated reports delivered to your inbox. Real-time business insights.",
      benefit: "Get daily insights in 5 minutes instead of 5 hours monthly.",
      cta: "See Reporting Solutions",
      href: "/solutions/operations/reporting"
    }
  ],
  marketing: [
    {
      icon: Megaphone,
      title: "Content Creation & Distribution",
      description: "Generate and distribute content across all channels automatically.",
      benefit: "Produce 10x more content with consistent brand voice.",
      cta: "See Content Solutions",
      href: "/solutions/marketing/content-creation"
    },
    {
      icon: Target,
      title: "Lead Generation & Nurturing",
      description: "Capture, qualify, and nurture leads without manual intervention.",
      benefit: "Convert 40% more leads with personalized automation.",
      cta: "See Lead Solutions",
      href: "/solutions/marketing/lead-generation"
    },
    {
      icon: BarChart3,
      title: "Campaign Management & Analysis",
      description: "Launch, monitor, and optimize campaigns across all platforms.",
      benefit: "Improve ROI by 60% through intelligent campaign optimization.",
      cta: "See Campaign Solutions",
      href: "/solutions/marketing/campaign-management"
    },
    {
      icon: Share2,
      title: "Social Media & Community",
      description: "Maintain active presence across platforms with authentic engagement.",
      benefit: "Grow followers 5x faster while reducing management time 90%.",
      cta: "See Social Solutions",
      href: "/solutions/marketing/social-media"
    }
  ],
  sales: [
    {
      icon: UserCheck,
      title: "Lead Qualification & Scoring",
      description: "Automatically qualify and prioritize leads based on behavior and fit.",
      benefit: "Focus on qualified leads. Increase close rate by 45%.",
      cta: "See Qualification Solutions",
      href: "/solutions/sales/lead-qualification"
    },
    {
      icon: Users,
      title: "CRM Management & Updates",
      description: "Keep CRM perfectly updated with zero manual data entry required.",
      benefit: "Save 10+ hours weekly on CRM maintenance. Never miss follow-ups.",
      cta: "See CRM Solutions",
      href: "/solutions/sales/crm-management"
    },
    {
      icon: FileText,
      title: "Proposal & Contract Generation",
      description: "Generate customized proposals and contracts in minutes, not hours.",
      benefit: "Respond to opportunities 10x faster. Win more deals.",
      cta: "See Proposal Solutions",
      href: "/solutions/sales/proposal-generation"
    },
    {
      icon: TrendingUp,
      title: "Follow-up & Pipeline Management",
      description: "Automated follow-ups and pipeline progression based on prospect behavior.",
      benefit: "Never lose a deal to poor follow-up. Predictable revenue.",
      cta: "See Pipeline Solutions",
      href: "/solutions/sales/pipeline-management"
    }
  ],
  finance: [
    {
      icon: CreditCard,
      title: "Accounts Payable & Receivable",
      description: "Automate entire A/P and A/R processes from invoice to payment.",
      benefit: "Reduce days sales outstanding by 50%. Eliminate late payments.",
      cta: "See Finance Solutions",
      href: "/solutions/finance/accounts-payable-receivable"
    },
    {
      icon: BarChart3,
      title: "Financial Reporting & Analysis",
      description: "Real-time financial insights and automated monthly/quarterly reports.",
      benefit: "Make decisions with up-to-date data. Save 20+ hours monthly.",
      cta: "See Reporting Solutions",
      href: "/solutions/finance/financial-reporting"
    },
    {
      icon: Receipt,
      title: "Expense Management & Approval",
      description: "Streamline expense submission, approval, and reimbursement processes.",
      benefit: "Reduce expense processing time by 85%. Full compliance guaranteed.",
      cta: "See Expense Solutions",
      href: "/solutions/finance/expense-management"
    },
    {
      icon: Calculator,
      title: "Budget Planning & Forecasting",
      description: "Automated budget tracking and intelligent forecasting based on real data.",
      benefit: "Accurate forecasts every month. Stay on budget automatically.",
      cta: "See Planning Solutions",
      href: "/solutions/finance/budget-planning"
    }
  ],
  'customer-success': [
    {
      icon: Heart,
      title: "Onboarding & Welcome Sequences",
      description: "Perfect customer onboarding experience delivered automatically.",
      benefit: "Reduce time-to-value by 70%. 95% customer satisfaction rate.",
      cta: "See Onboarding Solutions",
      href: "/solutions/customer-success/onboarding"
    },
    {
      icon: Headphones,
      title: "Support Ticket Management",
      description: "Intelligent routing and automated responses for common issues.",
      benefit: "Resolve 80% of tickets automatically. Instant customer satisfaction.",
      cta: "See Support Solutions",
      href: "/solutions/customer-success/support-management"
    },
    {
      icon: Activity,
      title: "Customer Health Monitoring",
      description: "Proactive identification of at-risk accounts with automated interventions.",
      benefit: "Reduce churn by 60%. Identify upsell opportunities automatically.",
      cta: "See Monitoring Solutions",
      href: "/solutions/customer-success/health-monitoring"
    },
    {
      icon: RefreshCw,
      title: "Renewal & Expansion Management",
      description: "Automated renewal processes and expansion opportunity identification.",
      benefit: "Increase renewal rate to 95%. Grow existing accounts 40% faster.",
      cta: "See Renewal Solutions",
      href: "/solutions/customer-success/renewal-management"
    }
  ]
}

export function SolutionTabs() {
  const [activeTab, setActiveTab] = useState('operations')

  return (
    <Section padding="lg">
      <Container>
        <div className="max-w-6xl mx-auto">
          {/* Tab Navigation */}
          <div className="mb-12">
            <div className="text-center mb-8">
              <Text className="velox-text-body text-lg text-gray-700">
                As a strategic leader, you understand that true efficiency comes from systematic automation across every department. Choose the system you want to see transformed first.
              </Text>
            </div>
            
            <div className="flex flex-wrap justify-center gap-2 md:gap-4">
              {systemTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-lg font-semibold text-sm md:text-base transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg'
                      : 'bg-white text-gray-700 border border-gray-200 hover:bg-blue-50 hover:border-blue-200'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Solution Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {systemSolutions[activeTab as keyof typeof systemSolutions]?.map((solution, index) => {
              const IconComponent = solution.icon
              return (
                <div
                  key={index}
                  className="velox-solution-card group"
                >
                  {/* Icon and Visual */}
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-4">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="mb-6">
                    <Heading level="3" className="velox-text-h3 text-blue-900 mb-3">
                      {solution.title}
                    </Heading>
                    <Text className="velox-text-body text-gray-700 mb-4">
                      {solution.description}
                    </Text>
                    <Text className="font-semibold text-blue-600 mb-6">
                      {solution.benefit}
                    </Text>
                  </div>

                  {/* CTA */}
                  <CTATracker
                    eventName="solution_card_clicked"
                    eventData={{
                      section: "solutions_page",
                      system: activeTab,
                      solution: solution.title,
                      cta_text: solution.cta
                    }}
                  >
                    <Button
                      className="velox-cta-primary velox-hover-button w-full group"
                      asChild
                    >
                      <Link href={solution.href} className="flex items-center justify-center gap-2">
                        {solution.cta}
                        <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </CTATracker>
                </div>
              )
            })}
          </div>
        </div>
      </Container>
    </Section>
  )
}
