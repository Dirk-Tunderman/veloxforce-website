"use client"

import { useState } from "react"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"

const departments = [
  {
    id: "sales",
    label: "Sales Department",
    daily: [
      "Lead assignment based on your rules",
      "Activity logging from emails/calls",
      "Pipeline updates after each interaction",
      "Follow-up scheduling and execution",
      "Quote generation and tracking"
    ],
    weekly: [
      "Pipeline reports for sales meetings",
      "Activity summaries by rep",
      "Win/loss analysis documentation",
      "Commission calculation prep",
      "Territory performance tracking"
    ],
    monthly: [
      "Forecast roll-ups and submission",
      "Performance dashboards",
      "Quota attainment tracking",
      "Sales cycle analysis",
      "Customer acquisition cost reports"
    ],
    result: "Sales team sells instead of administrating"
  },
  {
    id: "finance",
    label: "Finance/Accounting",
    daily: [
      "Invoice processing and coding",
      "Payment run preparation",
      "Bank transaction categorization",
      "Expense report processing",
      "Cash position updates"
    ],
    weekly: [
      "Accounts receivable aging",
      "Accounts payable runs",
      "Budget vs actual tracking",
      "Department expense summaries",
      "Cash flow projections"
    ],
    monthly: [
      "Financial statement preparation",
      "Reconciliation documentation",
      "Variance analysis reports",
      "Department budget reports",
      "Audit trail maintenance"
    ],
    result: "Finance focuses on strategy, not data entry"
  },
  {
    id: "operations",
    label: "Operations Team",
    daily: [
      "Order processing and tracking",
      "Inventory level monitoring",
      "Shipping coordination",
      "Quality documentation",
      "Vendor communication logs"
    ],
    weekly: [
      "Capacity utilization reports",
      "Quality metrics compilation",
      "Supplier performance tracking",
      "Process efficiency analysis",
      "Cost per unit calculations"
    ],
    monthly: [
      "Operational dashboards",
      "Process improvement tracking",
      "Vendor scorecards",
      "Inventory analysis",
      "Productivity reports"
    ],
    result: "Operations improves instead of just processing"
  },
  {
    id: "marketing",
    label: "Marketing Team",
    daily: [
      "Lead routing and scoring",
      "Campaign tracking updates",
      "Social media posting",
      "Email blast preparation",
      "Website analytics compilation"
    ],
    weekly: [
      "Campaign performance reports",
      "Lead source analysis",
      "Content distribution tracking",
      "Budget utilization updates",
      "Competitor monitoring logs"
    ],
    monthly: [
      "Marketing ROI analysis",
      "Channel performance reports",
      "Lead conversion tracking",
      "Budget reconciliation",
      "Strategic metric dashboards"
    ],
    result: "Marketing creates instead of counting"
  },
  {
    id: "hr",
    label: "HR/People Operations",
    daily: [
      "Application screening and routing",
      "Employee data updates",
      "Time-off request processing",
      "Benefits inquiry responses",
      "Onboarding task tracking"
    ],
    weekly: [
      "Recruitment pipeline reports",
      "Time and attendance summaries",
      "Training completion tracking",
      "Employee change reports",
      "Compliance checklist updates"
    ],
    monthly: [
      "HR metrics dashboards",
      "Turnover analysis reports",
      "Benefits utilization summaries",
      "Compliance audit prep",
      "Workforce planning data"
    ],
    result: "HR develops people instead of pushing paper"
  },
  {
    id: "customer-service",
    label: "Customer Service",
    daily: [
      "Ticket categorization and routing",
      "Response template application",
      "Escalation tracking",
      "SLA monitoring",
      "Knowledge base updates"
    ],
    weekly: [
      "Service level reporting",
      "Team performance metrics",
      "Issue trend analysis",
      "Customer satisfaction compilation",
      "Training need identification"
    ],
    monthly: [
      "Service quality reports",
      "Customer health scores",
      "Churn risk analysis",
      "Process improvement tracking",
      "Strategic service metrics"
    ],
    result: "Service builds relationships instead of just responding"
  }
]

export function DepartmentSolutions() {
  const [activeTab, setActiveTab] = useState("sales")

  const activeDepartment = departments.find(dept => dept.id === activeTab)

  return (
    <Section padding="xl" background="white">
      <Container className="max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Heading level="2" className="velox-text-h2 mb-4">
            Solutions by Your Department
          </Heading>
          <Text className="velox-text-body text-lg text-gray-700">
            Your Department's Transformation Roadmap
          </Text>
        </div>

        {/* Tab Navigation */}
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-2 border-b border-gray-200">
            {departments.map((dept) => (
              <button
                key={dept.id}
                onClick={() => setActiveTab(dept.id)}
                className={`px-4 py-3 text-sm md:text-base font-medium transition-all duration-200 border-b-3 ${
                  activeTab === dept.id
                    ? 'text-blue-600 border-blue-600 bg-white'
                    : 'text-gray-700 border-transparent hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                {dept.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        {activeDepartment && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Daily Tasks */}
            <div className="bg-blue-600 rounded-lg overflow-hidden">
              <div className="bg-blue-600 text-white p-4">
                <Heading level="3" className="text-lg font-semibold">
                  Daily Tasks We Handle
                </Heading>
              </div>
              <div className="bg-white p-4">
                <ul className="space-y-2">
                  {activeDepartment.daily.map((task, index) => (
                    <li key={index} className="text-sm text-gray-700 flex items-start">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Weekly Tasks */}
            <div className="bg-blue-600 rounded-lg overflow-hidden">
              <div className="bg-blue-600 text-white p-4">
                <Heading level="3" className="text-lg font-semibold">
                  Weekly Tasks We Handle
                </Heading>
              </div>
              <div className="bg-white p-4">
                <ul className="space-y-2">
                  {activeDepartment.weekly.map((task, index) => (
                    <li key={index} className="text-sm text-gray-700 flex items-start">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Monthly Tasks */}
            <div className="bg-blue-600 rounded-lg overflow-hidden">
              <div className="bg-blue-600 text-white p-4">
                <Heading level="3" className="text-lg font-semibold">
                  Monthly Tasks We Handle
                </Heading>
              </div>
              <div className="bg-white p-4">
                <ul className="space-y-2">
                  {activeDepartment.monthly.map((task, index) => (
                    <li key={index} className="text-sm text-gray-700 flex items-start">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Result Statement */}
        {activeDepartment && (
          <div className="mt-8 bg-blue-100 rounded-lg p-6 text-center">
            <Text className="text-blue-800 font-semibold text-lg">
              ✓ {activeDepartment.result}
            </Text>
          </div>
        )}
      </Container>
    </Section>
  )
}
