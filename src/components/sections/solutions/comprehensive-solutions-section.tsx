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
  CheckCircle,
  Database,
  FileCheck,
  Brain,
  Settings,
  UserCheck,
  Headphones,
  AlertTriangle,
  BarChart,
  FolderOpen,
  Workflow,
  Scale,
  Layers,
  CreditCard,
  LineChart,
  Wallet,
  PieChart,
  Search,
  GitBranch,
  MessageSquare,
  Award
} from "lucide-react"

const operationCategories = [
  {
    id: "financial",
    title: "Financial Operations",
    subtitle: "Transform financial complexity into strategic advantage",
    icon: BarChart3,
    color: "bg-blue-600",
    subOperations: [
      {
        id: "data-integration",
        title: "Data Integration & Flow",
        description: "Connect all financial systems for seamless data movement and real-time visibility",
        icon: Database,
        badge: "001",
        outcomes: ["Real-time financial dashboards", "Automated data synchronization", "Zero manual reconciliation"]
      },
      {
        id: "automated-compliance",
        title: "Automated Compliance",
        description: "Real-time regulatory reporting and audit trail management across all jurisdictions",
        icon: FileCheck,
        badge: "002", 
        outcomes: ["Instant compliance reporting", "Automated audit trails", "Regulatory change tracking"]
      },
      {
        id: "intelligent-analytics",
        title: "Intelligent Analytics",
        description: "AI-powered financial insights, forecasting, and anomaly detection for strategic decisions",
        icon: Brain,
        badge: "003",
        outcomes: ["Predictive cash flow analysis", "Automated variance detection", "Strategic financial insights"]
      },
      {
        id: "process-optimization",
        title: "Process Optimization",
        description: "Continuous workflow improvement and cost analysis with intelligent automation",
        icon: Settings,
        badge: "004",
        outcomes: ["Optimized financial workflows", "Cost reduction insights", "Process efficiency gains"]
      }
    ]
  },
  {
    id: "customer",
    title: "Customer Operations", 
    subtitle: "Elevate customer experience through intelligent automation",
    icon: MessageCircle,
    color: "bg-purple-600",
    subOperations: [
      {
        id: "unified-records",
        title: "Unified Customer Records",
        description: "Complete interaction history and preference management across all touchpoints",
        icon: UserCheck,
        badge: "001",
        outcomes: ["360° customer view", "Preference-based interactions", "Seamless experience continuity"]
      },
      {
        id: "omnichannel-support",
        title: "Omnichannel Support",
        description: "Voice, chat, email, and SMS response coordination with consistent quality",
        icon: Headphones,
        badge: "002",
        outcomes: ["24/7 multi-channel coverage", "Consistent response quality", "Intelligent routing"]
      },
      {
        id: "proactive-resolution",
        title: "Proactive Issue Resolution",
        description: "AI-powered problem detection and prevention before customer impact",
        icon: AlertTriangle,
        badge: "003",
        outcomes: ["Issue prevention", "Proactive notifications", "Reduced escalations"]
      },
      {
        id: "performance-intelligence",
        title: "Performance Intelligence",
        description: "Customer satisfaction tracking and team optimization with actionable insights",
        icon: BarChart,
        badge: "004",
        outcomes: ["CSAT optimization", "Team performance insights", "Service quality metrics"]
      }
    ]
  },
  {
    id: "administrative",
    title: "Administrative Operations",
    subtitle: "Digitize and optimize administrative workflows",
    icon: FileText,
    color: "bg-indigo-600",
    subOperations: [
      {
        id: "document-intelligence",
        title: "Document Intelligence",
        description: "Smart categorization, extraction, and automated filing with AI-powered organization",
        icon: FolderOpen,
        badge: "001",
        outcomes: ["Intelligent document categorization", "Automated data extraction", "Instant retrieval systems"]
      },
      {
        id: "workflow-automation",
        title: "Workflow Automation",
        description: "End-to-end process digitization and optimization across departments",
        icon: Workflow,
        badge: "002",
        outcomes: ["Digitized approval workflows", "Cross-department coordination", "Process standardization"]
      },
      {
        id: "compliance-management",
        title: "Compliance Management",
        description: "Regulatory requirement tracking and reporting with automated updates",
        icon: Scale,
        badge: "003",
        outcomes: ["Automated compliance tracking", "Real-time regulation updates", "Risk mitigation"]
      },
      {
        id: "resource-coordination",
        title: "Resource Coordination",
        description: "Cross-departmental task and resource management with intelligent allocation",
        icon: Layers,
        badge: "004",
        outcomes: ["Optimized resource allocation", "Inter-department coordination", "Capacity planning"]
      }
    ]
  },
  {
    id: "revenue",
    title: "Revenue Operations",
    subtitle: "Accelerate revenue growth with intelligent automation",
    icon: DollarSign,
    color: "bg-green-600",
    subOperations: [
      {
        id: "billing-automation",
        title: "Billing Automation",
        description: "Complete invoice-to-payment cycle management with intelligent processing",
        icon: CreditCard,
        badge: "001",
        outcomes: ["Automated invoice generation", "Payment processing", "Collections management"]
      },
      {
        id: "revenue-intelligence",
        title: "Revenue Intelligence",
        description: "Predictive analytics and growth opportunity identification with AI insights",
        icon: LineChart,
        badge: "002",
        outcomes: ["Revenue forecasting", "Growth opportunity identification", "Churn prediction"]
      },
      {
        id: "payment-optimization",
        title: "Payment Optimization",
        description: "Multi-channel payment processing and reconciliation with fraud detection",
        icon: Wallet,
        badge: "003",
        outcomes: ["Multi-channel payment processing", "Automated reconciliation", "Fraud prevention"]
      },
      {
        id: "financial-reporting",
        title: "Financial Reporting",
        description: "Real-time revenue dashboards and insights with customizable analytics",
        icon: PieChart,
        badge: "004",
        outcomes: ["Real-time revenue dashboards", "Custom financial reports", "Performance analytics"]
      }
    ]
  },
  {
    id: "sales",
    title: "Sales Operations",
    subtitle: "Supercharge sales performance with intelligent support",
    icon: Users,
    color: "bg-orange-500",
    subOperations: [
      {
        id: "lead-intelligence",
        title: "Lead Intelligence",
        description: "Advanced scoring, tracking, and nurturing automation with behavioral analysis",
        icon: Search,
        badge: "001",
        outcomes: ["AI-powered lead scoring", "Behavioral tracking", "Automated nurturing sequences"]
      },
      {
        id: "pipeline-management",
        title: "Pipeline Management",
        description: "Complete opportunity lifecycle coordination with intelligent forecasting",
        icon: GitBranch,
        badge: "002",
        outcomes: ["Pipeline visibility", "Opportunity tracking", "Sales forecasting"]
      },
      {
        id: "relationship-automation",
        title: "Relationship Automation",
        description: "Personalized outreach and follow-up sequences with timing optimization",
        icon: MessageSquare,
        badge: "003",
        outcomes: ["Personalized outreach", "Automated follow-ups", "Relationship tracking"]
      },
      {
        id: "performance-analytics",
        title: "Performance Analytics",
        description: "Territory management and sales forecasting with actionable insights",
        icon: Award,
        badge: "004",
        outcomes: ["Sales performance insights", "Territory optimization", "Revenue forecasting"]
      }
    ]
  }
]

export function ComprehensiveSolutionsSection() {
  const [activeCategory, setActiveCategory] = useState<string>("financial")
  const [hoveredSubOperation, setHoveredSubOperation] = useState<string | null>(null)
  const [selectedSubOperation, setSelectedSubOperation] = useState<string | null>(null)

  const currentCategory = operationCategories.find(cat => cat.id === activeCategory)

  return (
    <Section padding="xl" background="white">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-white to-gray-50/20" />

      <Container className="relative z-10 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll" data-animation="fadeInUp">
          <Heading level="2" className="velox-text-h2 mb-6" style={{ lineHeight: '1.2' }}>
            Which Operations Are{" "}
            <span className="text-gradient">Stealing Your Growth?</span>
          </Heading>
          <Text className="velox-text-lead max-w-4xl mx-auto text-gray-600">
            Every operation below represents hours stolen from strategy. 
            Explore our Service-as-Software solutions and see exactly how we transform operational burden into competitive advantage.
          </Text>
        </div>

        {/* Category Tabs Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-on-scroll" data-animation="fadeInUp">
          {operationCategories.map((category) => {
            const CategoryIcon = category.icon
            const isActive = activeCategory === category.id
            
            return (
              <button
                key={category.id}
                onClick={() => {
                  setActiveCategory(category.id)
                  setSelectedSubOperation(null)
                }}
                className={`flex items-center gap-3 px-6 py-4 rounded-xl font-semibold transition-all duration-300 ${
                  isActive 
                    ? `${category.color} text-white shadow-lg transform -translate-y-0.5` 
                    : 'bg-white text-gray-700 border border-gray-200 hover:border-gray-300 hover:shadow-md'
                }`}
              >
                <CategoryIcon className="w-5 h-5" />
                <span className="hidden sm:inline">{category.title}</span>
                <span className="sm:hidden">{category.title.split(' ')[0]}</span>
              </button>
            )
          })}
        </div>

        {/* Active Category Header */}
        {currentCategory && (
          <div className="text-center mb-12 animate-on-scroll" data-animation="fadeInUp">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className={`w-12 h-12 ${currentCategory.color} rounded-full flex items-center justify-center`}>
                <currentCategory.icon className="w-6 h-6 text-white" />
              </div>
              <Heading level="3" className="text-3xl font-bold text-gray-900">
                {currentCategory.title}
              </Heading>
            </div>
            <Text className="text-lg text-gray-600 max-w-3xl mx-auto">
              {currentCategory.subtitle}
            </Text>
          </div>
        )}

        {/* Sub-Operations Grid */}
        {currentCategory && (
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {currentCategory.subOperations.map((subOp, index) => {
              const SubOpIcon = subOp.icon
              const isHovered = hoveredSubOperation === subOp.id
              const isSelected = selectedSubOperation === subOp.id
              
              return (
                <div
                  key={subOp.id}
                  className="animate-on-scroll"
                  data-animation="fadeInUp"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div 
                    className={`card-elevated group cursor-pointer transition-all duration-300 ${
                      isHovered ? 'transform -translate-y-1' : ''
                    } ${isSelected ? 'ring-2 ring-blue-500' : ''}`}
                    onMouseEnter={() => setHoveredSubOperation(subOp.id)}
                    onMouseLeave={() => setHoveredSubOperation(null)}
                    onClick={() => setSelectedSubOperation(selectedSubOperation === subOp.id ? null : subOp.id)}
                  >
                    {/* Sub-Operation Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 ${currentCategory.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                          <SubOpIcon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <Heading level="4" className="text-xl font-semibold text-gray-900">
                              {subOp.title}
                            </Heading>
                            <span className={`px-2 py-1 rounded-full text-xs font-bold ${currentCategory.color} bg-opacity-20 text-gray-700`}>
                              {subOp.badge}
                            </span>
                          </div>
                          <Text className="text-gray-600 text-sm leading-relaxed">
                            {subOp.description}
                          </Text>
                        </div>
                      </div>
                      <div className={`transition-all duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
                        <Sparkles className="w-5 h-5 text-blue-500" />
                      </div>
                    </div>

                    {/* Visual Mockup Area */}
                    <div className="mb-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-6 min-h-[120px] flex items-center justify-center border border-gray-200">
                      <div className="text-center">
                        <div className={`w-16 h-16 ${currentCategory.color} bg-opacity-20 rounded-xl flex items-center justify-center mx-auto mb-3`}>
                          <SubOpIcon className={`w-8 h-8 ${currentCategory.color.replace('bg-', 'text-')}`} />
                        </div>
                        <Text className="text-sm text-gray-500 font-medium">
                          {subOp.title} Interface
                        </Text>
                      </div>
                    </div>

                    {/* Hover State - Show outcomes */}
                    <div className={`transition-all duration-300 ${
                      isHovered || isSelected ? 'opacity-100 max-h-48' : 'opacity-0 max-h-0'
                    } overflow-hidden`}>
                      <div className="pt-4 border-t border-gray-200">
                        <div className="flex items-center gap-2 mb-3">
                          <TrendingUp className="w-4 h-4 text-blue-500" />
                          <Text className="text-blue-700 font-semibold text-sm">
                            Key Outcomes:
                          </Text>
                        </div>
                        <ul className="space-y-2">
                          {subOp.outcomes.map((outcome, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <Text className="text-gray-700 text-sm">
                                {outcome}
                              </Text>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Selected State - Detailed view */}
                    <div className={`transition-all duration-500 ${
                      isSelected ? 'opacity-100 max-h-96 mt-6' : 'opacity-0 max-h-0'
                    } overflow-hidden`}>
                      <div className="pt-6 border-t-2 border-blue-200">
                        <Text className="text-gray-600 mb-4 text-sm">
                          This operation integrates seamlessly with your existing systems while our team handles all complexity. 
                          You maintain strategic control while we ensure flawless execution.
                        </Text>
                        
                        <Button
                          size="sm"
                          className={`w-full text-white ${currentCategory.color} hover:opacity-90 transition-opacity`}
                          asChild
                        >
                          <Link href="/tools/business-audit">
                            Explore This Solution
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
        )}

        {/* Bottom CTA - Enhanced */}
        <div className="text-center animate-on-scroll" data-animation="fadeInUp">
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border border-blue-100">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Target className="w-6 h-6 text-blue-600" />
              <Heading level="3" className="text-2xl font-bold text-gray-900">
                Ready to Transform Your Operations?
              </Heading>
            </div>
            <Text className="velox-text-body mb-6 max-w-2xl mx-auto text-gray-600">
              Most companies implement 3-5 operations in their first year, creating compound efficiency gains. 
              See exactly which operations offer the highest ROI for your business.
            </Text>
            
            {/* Quick stats */}
            <div className="grid md:grid-cols-4 gap-6 mb-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-1">20</div>
                <p className="text-sm text-gray-600">Operations Available</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-1">4-6</div>
                <p className="text-sm text-gray-600">Week Implementation</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-1">95%</div>
                <p className="text-sm text-gray-600">Error Reduction</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-1">60%</div>
                <p className="text-sm text-gray-600">Cost Savings</p>
              </div>
            </div>
            
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl transition-all duration-300"
              asChild
            >
              <Link href="/tools/business-audit">
                Get Your Personalized Operations Analysis
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  )
}