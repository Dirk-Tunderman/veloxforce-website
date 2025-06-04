import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"
import { 
  ShoppingBag, 
  FileText, 
  DollarSign, 
  Database, 
  Mail, 
  Settings 
} from "lucide-react"

const taskCategories = [
  {
    icon: ShoppingBag,
    title: "Sales & Marketing Operations",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    tasks: [
      "Lead entry and CRM updates",
      "Proposal generation from your templates",
      "Quote calculations with your pricing rules",
      "Follow-up sequences and tracking",
      "Pipeline reporting and forecasting",
      "Campaign performance tracking",
      "Social media scheduling and posting",
      "Email list management and segmentation",
      "Event registration and attendee management"
    ],
    focus: "Building relationships and closing deals"
  },
  {
    icon: FileText,
    title: "Documentation & Administration",
    color: "text-green-600",
    bgColor: "bg-green-50",
    tasks: [
      "Meeting notes and action item distribution",
      "Report generation and formatting",
      "Contract data extraction and filing",
      "Procedure documentation and updates",
      "Presentation preparation from data",
      "Form processing and routing",
      "Compliance documentation tracking",
      "Policy update distribution"
    ],
    focus: "Strategic decisions and leadership"
  },
  {
    icon: DollarSign,
    title: "Financial Processing",
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    tasks: [
      "Invoice processing from receipt to payment",
      "Purchase order matching and verification",
      "Expense report review and categorization",
      "Bank reconciliation preparation",
      "Financial report generation",
      "Vendor payment preparation",
      "Budget tracking and variance reports",
      "Month-end closing tasks"
    ],
    focus: "Financial strategy and growth planning"
  },
  {
    icon: Database,
    title: "Data Management",
    color: "text-orange-600",
    bgColor: "bg-orange-50",
    tasks: [
      "CRM data entry and hygiene",
      "Database synchronization across systems",
      "Contact information updates",
      "Product catalog maintenance",
      "Inventory level tracking",
      "Price list updates and distribution",
      "Customer data consolidation",
      "Report data compilation"
    ],
    focus: "Analysis and insights"
  },
  {
    icon: Mail,
    title: "Communication Coordination",
    color: "text-indigo-600",
    bgColor: "bg-indigo-50",
    tasks: [
      "Email triage and response drafting",
      "Meeting scheduling and coordination",
      "Status update compilation",
      "Follow-up tracking and reminders",
      "Customer inquiry routing",
      "Internal notification management",
      "Out-of-office coordination",
      "Newsletter preparation and distribution"
    ],
    focus: "High-value conversations"
  },
  {
    icon: Settings,
    title: "Operations Support",
    color: "text-teal-600",
    bgColor: "bg-teal-50",
    tasks: [
      "Order entry and processing",
      "Purchase requisition handling",
      "Shipping coordination and tracking",
      "Quality checklist documentation",
      "Inventory reconciliation",
      "Supplier communication (routine)",
      "Return processing and tracking",
      "Work order management"
    ],
    focus: "Process improvement and innovation"
  }
]

export function BackOfficeDirectory() {
  return (
    <Section padding="xl" background="white">
      <Container className="max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Heading level="2" className="velox-text-h2 mb-4">
            Your Complete Back-Office Task Directory
          </Heading>
          <Text className="velox-text-body text-lg text-gray-700 max-w-3xl mx-auto">
            Every Repetitive Task We Handle Through Digital Employees
          </Text>
        </div>

        {/* Task Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {taskCategories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <div
                key={index}
                className="group bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-600 hover:shadow-lg transition-all duration-300"
              >
                {/* Icon */}
                <div className={`w-12 h-12 ${category.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                  <IconComponent className={`w-6 h-6 ${category.color}`} />
                </div>

                {/* Title */}
                <Heading level="3" className="velox-text-h3 text-lg font-semibold text-gray-900 mb-4">
                  {category.title}
                </Heading>

                {/* Task List */}
                <ul className="space-y-2 mb-6">
                  {category.tasks.map((task, taskIndex) => (
                    <li key={taskIndex} className="text-sm text-gray-600 flex items-start">
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {task}
                    </li>
                  ))}
                </ul>

                {/* Focus Text */}
                <div className="pt-4 border-t border-gray-100">
                  <Text className="text-blue-600 font-medium text-sm">
                    → Your team focuses on: {category.focus}
                  </Text>
                </div>
              </div>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}
