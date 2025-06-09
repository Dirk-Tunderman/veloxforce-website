"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
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
  Zap,
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
    gradient: "from-blue-500 to-indigo-600",
    bgGradient: "from-blue-50 to-indigo-50",
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
    gradient: "from-green-500 to-emerald-600",
    bgGradient: "from-green-50 to-emerald-50",
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
    gradient: "from-purple-500 to-violet-600",
    bgGradient: "from-purple-50 to-violet-50",
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
    gradient: "from-orange-500 to-amber-600",
    bgGradient: "from-orange-50 to-amber-50",
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
    color: "teal",
    gradient: "from-teal-500 to-cyan-600",
    bgGradient: "from-teal-50 to-cyan-50",
    struggles: [
      "Your sales team spends time on follow-up tasks instead of closing deals",
      "CRM data entry burden instead of relationship building",
      "Pipeline management instead of strategic sales planning",
      "Proposal creation delays instead of customer relationship focus",
      "Activity tracking overhead instead of partnership development"
    ],
    transformation: [
      "You generate leads → We nurture them perfectly",
      "You close deals → We update CRM automatically",
      "You need pipeline visibility → We keep it current",
      "You request proposals → We generate them quickly",
      "You delegate sales ops → We log all activities"
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

export function ComprehensiveSolutionsSection() {
  const [expandedOperation, setExpandedOperation] = useState<string | null>(null)

  const toggleOperation = (id: string) => {
    setExpandedOperation(expandedOperation === id ? null : id)
  }

  return (
    <Section
      padding="xl"
      background="light-to-white"
      className="relative overflow-hidden"
      id="comprehensive-solutions"
    >
      {/* Performance-Optimized Background */}
      <div className="absolute inset-0 bg-gradient-simple" />
      <div className="absolute inset-0 bg-mesh-static opacity-30" />
      
      <Container className="relative z-10 max-w-7xl">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Heading level="2" className="velox-text-h2 mb-6">
            Which Time-Drain Is{" "}
            <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
              Killing
            </span>{" "}
            Your Growth?
          </Heading>
          <Text className="velox-text-lead max-w-4xl mx-auto">
            Click your biggest operational headache to see the complete transformation
          </Text>
        </motion.div>

        {/* Operations Selection Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {operations.map((operation, index) => {
            const IconComponent = operation.icon
            const isExpanded = expandedOperation === operation.id
            
            return (
              <motion.div
                key={operation.id}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div
                  className={`
                    cursor-pointer transition-all duration-300 rounded-xl border-2 p-6 group hover-lift
                    ${isExpanded
                      ? 'card-solution transform scale-[1.02] elevation-3'
                      : 'card-base hover:border-blue-200 hover:elevation-2'
                    }
                  `}
                  onClick={() => toggleOperation(operation.id)}
                >
                  {/* Card Header */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="icon-container">
                      <IconComponent className={`
                        w-6 h-6 transition-colors duration-200
                        ${isExpanded ? 'icon-accent' : 'icon-primary'}
                      `} />
                    </div>
                    <div className="flex-1">
                      <Text className={`
                        font-semibold leading-tight
                        ${isExpanded ? 'text-blue-900' : 'text-gray-900'}
                      `}>
                        {operation.subtitle}
                      </Text>
                      <Text className={`
                        text-sm mt-1 font-medium
                        ${isExpanded ? 'text-blue-700' : 'text-gray-600'}
                      `}>
                        → {operation.title}
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

                  {/* Click hint for collapsed state */}
                  {!isExpanded && (
                    <div className="text-center pt-2">
                      <Text className="text-xs text-gray-500">
                        Click to see full transformation
                      </Text>
                    </div>
                  )}
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Detailed Transformation View */}
        {expandedOperation && (
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {operations
              .filter(op => op.id === expandedOperation)
              .map((operation) => {
                const IconComponent = operation.icon
                
                return (
                  <div
                    key={operation.id}
                    className="card-solution"
                  >
                    {/* Operation Header */}
                    <motion.div
                      className="flex items-center gap-6 mb-10"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="icon-container-gradient">
                        <IconComponent className="w-8 h-8 icon-accent" />
                      </div>
                      <div>
                        <Heading level="3" className="velox-text-h3 mb-2">
                          {operation.title} Transformation
                        </Heading>
                        <Text className="velox-text-body">
                          Complete operational transformation breakdown
                        </Text>
                      </div>
                    </motion.div>

                    {/* Three Columns with Enhanced Design */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      {/* Struggles Column */}
                      <motion.div
                        className="card-challenge"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                      >
                        <div className="flex items-center gap-3 mb-6">
                          <div className="icon-container">
                            <XCircle className="w-5 h-5 icon-primary" />
                          </div>
                          <Heading level="4" className="velox-text-h3 text-red-900">
                            What Everyone Struggles With:
                          </Heading>
                        </div>
                        <ul className="space-y-4">
                          {operation.struggles.map((struggle, struggleIndex) => (
                            <motion.li
                              key={struggleIndex}
                              className="flex items-start gap-3"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: 0.2 + struggleIndex * 0.05 }}
                            >
                              <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                              <Text className="velox-text-body">
                                {struggle}
                              </Text>
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>

                      {/* Transformation Column */}
                      <motion.div
                        className="card-solution"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      >
                        <div className="flex items-center gap-3 mb-6">
                          <div className="icon-container">
                            <Zap className="w-5 h-5 icon-accent" />
                          </div>
                          <Heading level="4" className="velox-text-h3 text-blue-900">
                            How Service-as-Software Transforms It:
                          </Heading>
                        </div>
                        <ul className="space-y-4">
                          {operation.transformation.map((transform, transformIndex) => (
                            <motion.li
                              key={transformIndex}
                              className="flex items-start gap-3"
                              initial={{ opacity: 0, x: 10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: 0.3 + transformIndex * 0.05 }}
                            >
                              <div className="transformation-arrow-premium w-6 h-6 !rounded-full">
                                <ArrowRight className="w-3 h-3 text-white" />
                              </div>
                              <Text className="velox-text-body text-blue-800 font-medium">
                                {transform}
                              </Text>
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>

                      {/* Reality Handled Column */}
                      <motion.div
                        className="card-base bg-gradient-to-br from-green-50 to-emerald-50"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                      >
                        <div className="flex items-center gap-3 mb-6">
                          <div className="icon-container">
                            <Shield className="w-5 h-5 icon-primary" />
                          </div>
                          <Heading level="4" className="velox-text-h3 text-green-900">
                            Your Reality Handled:
                          </Heading>
                        </div>
                        <ul className="space-y-4">
                          {operation.realityHandled.map((reality, realityIndex) => (
                            <motion.li
                              key={realityIndex}
                              className="flex items-start gap-3"
                              initial={{ opacity: 0, x: 10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: 0.4 + realityIndex * 0.05 }}
                            >
                              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                              <Text className="velox-text-body text-green-800 font-medium">
                                {reality}
                              </Text>
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    </div>

                    {/* CTA */}
                    <motion.div
                      className="text-center mt-10 pt-8 border-t border-white/30"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                    >
                      <Button
                        size="lg"
                        className="relative bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-lg font-semibold px-8 py-4 h-auto rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 overflow-hidden group"
                        asChild
                      >
                        <Link href="/tools/business-audit">
                          <span className="relative z-10">{operation.cta}</span>
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                        </Link>
                      </Button>
                    </motion.div>
                  </div>
                )
              })}
          </motion.div>
        )}

        {/* Bottom CTA - Enhanced */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="card-base rounded-3xl p-8 border border-blue-200 max-w-4xl mx-auto elevation-2">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Zap className="w-8 h-8 icon-accent" />
              <Heading level="3" className="velox-text-h3 text-blue-900">
                Don't see your specific operation?
              </Heading>
              <Zap className="w-8 h-8 icon-accent" />
            </div>
            <Text className="velox-text-lead text-blue-800 mb-8">
              These are just examples. We've transformed over 200 unique processes across every industry.
              <span className="font-semibold text-blue-900 block mt-2">
                If it's repetitive and follows rules, you can delegate it to us.
              </span>
            </Text>

            <Button
              size="lg"
              className="relative bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-lg font-semibold px-8 py-4 h-auto rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 overflow-hidden group"
              asChild
            >
              <Link href="/tools/business-audit">
                <span className="relative z-10">Assess My Specific Process</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </Link>
            </Button>
          </div>
        </motion.div>
      </Container>
    </Section>
  )
}