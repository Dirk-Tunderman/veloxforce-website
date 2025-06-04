"use client"

import {
  CheckCircle,
  FileText,
  Shield,
  Search,
  AlertTriangle,
  DollarSign,
  UserCheck,
  GitBranch,
  Handshake,
  Brain,
  Users,
  TrendingUp
} from "lucide-react"

import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"

const delegationSteps = [
  {
    title: "You delegate to AI, which:",
    items: [
      { icon: FileText, text: "Reads and extracts all data instantly" },
      { icon: Shield, text: "Checks against your specific business rules" },
      { icon: Search, text: "Matches to purchase orders using your criteria" },
      { icon: AlertTriangle, text: "Identifies anything unusual based on your parameters" }
    ]
  },
  {
    title: "AI recognizes and escalates when:",
    items: [
      { icon: DollarSign, text: "The amount exceeds your defined threshold" },
      { icon: UserCheck, text: "The vendor is new or flagged" },
      { icon: GitBranch, text: "Something doesn't match your patterns" },
      { icon: Handshake, text: "The decision could impact relationships" }
    ]
  },
  {
    title: "Humans focus on:",
    items: [
      { icon: Brain, text: "Making judgment calls on exceptions" },
      { icon: Handshake, text: "Maintaining important relationships" },
      { icon: CheckCircle, text: "Approving critical decisions" },
      { icon: TrendingUp, text: "Improving the process over time" }
    ]
  }
]



export function HybridApproachSection() {

  return (
    <Section padding="lg" background="white-to-light">
      <Container>
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Heading level="2" className="velox-text-h2 mb-6">
              The Hybrid Intelligence Approach
            </Heading>
            <Text className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Think of it as building your ideal digital team.
            </Text>
            <div className="w-full flex justify-center mb-6">
              <div className="max-w-4xl px-4">
                <Text className="text-lg text-gray-700 leading-relaxed text-center">
                  You have AI handling <span className="font-semibold text-blue-700">high-volume work</span> with its <span className="font-semibold text-gray-900">infinite capacity and knowledge</span>. It processes instantly, works 24/7, and scales effortlessly. But - and this is crucial - it knows when to <span className="font-bold text-blue-700">tap a human on the shoulder</span> and say "I need your expertise here."
                </Text>
              </div>
            </div>
            <div className="w-full flex justify-center">
              <div className="max-w-4xl px-4">
                <Text className="text-lg text-gray-700 leading-relaxed text-center">
                  This isn't about <span className="font-semibold text-gray-900">replacing people</span>. It's about creating the <span className="font-bold text-blue-700">perfect partnership</span> where each side does what they do best.
                </Text>
              </div>
            </div>
          </div>

          {/* Workflow Visualization */}
          <div className="mb-16">
            <div className="bg-gradient-to-br from-blue-50 to-white border border-blue-200 rounded-xl p-8">
              <Heading level="3" className="velox-text-h3 text-center mb-8 text-blue-900">
                How Delegation Actually Works
              </Heading>
              <div className="w-full flex justify-center mb-12">
                <div className="max-w-3xl px-4">
                  <Text className="text-lg text-gray-700 leading-relaxed text-center font-medium">
                    Let's say you need to <span className="font-semibold text-blue-700">process an invoice</span>:
                  </Text>
                </div>
              </div>

              {/* Delegation Flow */}
              <div className="space-y-8 mb-10">
                {delegationSteps.map((step, index) => {
                  const colors = [
                    {
                      bg: "bg-gradient-to-r from-blue-50 to-blue-100",
                      border: "border-blue-300",
                      title: "text-blue-900",
                      iconBg: "bg-gradient-to-br from-blue-600 to-blue-700",
                      iconText: "text-white"
                    },
                    {
                      bg: "bg-gradient-to-r from-orange-50 to-orange-100",
                      border: "border-orange-300",
                      title: "text-orange-900",
                      iconBg: "bg-gradient-to-br from-orange-600 to-orange-700",
                      iconText: "text-white"
                    },
                    {
                      bg: "bg-gradient-to-r from-green-50 to-green-100",
                      border: "border-green-300",
                      title: "text-green-900",
                      iconBg: "bg-gradient-to-br from-green-600 to-green-700",
                      iconText: "text-white"
                    }
                  ]
                  const colorScheme = colors[index] || colors[0]

                  return (
                    <div
                      key={step.title}
                      className={`${colorScheme.bg} border ${colorScheme.border} rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-200`}
                    >
                      <Heading level="4" className={`font-bold ${colorScheme.title} mb-6 text-xl text-center`}>{step.title}</Heading>

                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {step.items.map((item, itemIndex) => (
                          <div key={itemIndex} className="text-center">
                            <div className={`w-16 h-16 ${colorScheme.iconBg} rounded-xl flex items-center justify-center mx-auto mb-4 shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-1`}>
                              <item.icon className={`w-8 h-8 ${colorScheme.iconText}`} />
                            </div>
                            <Text className="text-sm text-gray-700 leading-relaxed font-medium">
                              {item.text}
                            </Text>
                          </div>
                        ))}
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Key Message */}
              <div className="text-center">
                <div className="w-full flex justify-center">
                  <div className="bg-gradient-to-br from-blue-100 to-blue-200 border border-blue-300 rounded-xl p-8 max-w-4xl mx-4 shadow-md">
                    <Text className="text-xl font-bold text-blue-900 mb-4 text-center">
                      The beautiful part?
                    </Text>
                    <Text className="text-lg text-blue-800 leading-relaxed text-center">
                      Once AI understands your business context, <span className="font-bold text-blue-900">delegation becomes natural</span>. You're not managing technology - you're <span className="font-semibold text-blue-900">delegating to a digital team member</span> who <span className="font-bold text-blue-900">never forgets your instructions</span>.
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>
      </Container>
    </Section>
  )
}
