"use client"

import { useState } from "react"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"
import { 
  Mail, 
  DollarSign, 
  BarChart3, 
  Users, 
  Settings, 
  Headphones,
  FileText,
  Calculator,
  Database,
  Phone,
  ShoppingCart,
  Megaphone
} from "lucide-react"

const departments = [
  { id: "all", label: "All" },
  { id: "sales", label: "Sales" },
  { id: "finance", label: "Finance" },
  { id: "operations", label: "Operations" },
  { id: "marketing", label: "Marketing" },
  { id: "hr", label: "HR" },
  { id: "customer-service", label: "Customer Service" }
]

const digitalEmployees = [
  {
    id: "sales-assistant",
    department: "sales",
    icon: Mail,
    title: "Sales Operations Service",
    handles: "Lead entry, CRM updates, follow-up sequences, proposal drafts",
    never: "Loses a lead, forgets follow-up, misses data"
  },
  {
    id: "ap-specialist",
    department: "finance",
    icon: DollarSign,
    title: "Financial Processing Service",
    handles: "Invoice processing, PO matching, payment prep, vendor communication",
    never: "Misses early payment discounts, loses invoices, delays payments"
  },
  {
    id: "data-analyst",
    department: "operations",
    icon: BarChart3,
    title: "Data Analysis Service",
    handles: "Report generation, data consolidation, dashboard updates, trend analysis",
    never: "Makes calculation errors, misses deadlines, formats incorrectly"
  },
  {
    id: "hr-coordinator",
    department: "hr",
    icon: Users,
    title: "Digital HR Coordinator",
    handles: "Application screening, employee data updates, time-off processing, benefits inquiries",
    never: "Loses applications, delays approvals, misses compliance deadlines"
  },
  {
    id: "customer-service-agent",
    department: "customer-service",
    icon: Headphones,
    title: "Digital Customer Service Agent",
    handles: "Ticket routing, response drafting, SLA monitoring, knowledge base updates",
    never: "Misses SLAs, provides inconsistent responses, loses tickets"
  },
  {
    id: "marketing-coordinator",
    department: "marketing",
    icon: Megaphone,
    title: "Digital Marketing Coordinator",
    handles: "Campaign tracking, lead scoring, content distribution, analytics compilation",
    never: "Misses campaign deadlines, loses lead data, forgets follow-ups"
  },
  {
    id: "document-processor",
    department: "operations",
    icon: FileText,
    title: "Digital Document Processor",
    handles: "Contract extraction, form processing, compliance documentation, filing",
    never: "Misfiles documents, misses key terms, delays processing"
  },
  {
    id: "financial-analyst",
    department: "finance",
    icon: Calculator,
    title: "Digital Financial Analyst",
    handles: "Budget tracking, variance reports, reconciliation, month-end tasks",
    never: "Makes calculation errors, misses reconciliation items, delays reports"
  },
  {
    id: "crm-manager",
    department: "sales",
    icon: Database,
    title: "Digital CRM Manager",
    handles: "Data entry, contact updates, pipeline management, activity logging",
    never: "Loses contact changes, misses pipeline updates, duplicates records"
  },
  {
    id: "appointment-scheduler",
    department: "sales",
    icon: Phone,
    title: "Digital Appointment Scheduler",
    handles: "Meeting coordination, calendar management, reminder sending, rescheduling",
    never: "Double-books meetings, forgets reminders, loses scheduling requests"
  },
  {
    id: "order-processor",
    department: "operations",
    icon: ShoppingCart,
    title: "Digital Order Processor",
    handles: "Order entry, inventory checks, shipping coordination, tracking updates",
    never: "Loses orders, ships wrong items, misses inventory alerts"
  },
  {
    id: "compliance-officer",
    department: "hr",
    icon: Settings,
    title: "Digital Compliance Officer",
    handles: "Policy tracking, training completion, audit preparation, documentation",
    never: "Misses compliance deadlines, loses training records, skips audits"
  }
]

export function DigitalWorkforceCatalog() {
  const [activeFilter, setActiveFilter] = useState("all")

  const filteredEmployees = activeFilter === "all" 
    ? digitalEmployees 
    : digitalEmployees.filter(emp => emp.department === activeFilter)

  return (
    <Section padding="xl" background="light-blue" className="bg-gray-50">
      <Container className="max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Heading level="2" className="velox-text-h2 mb-4">
            Browse Service-as-Software Solutions
          </Heading>
          <Text className="velox-text-body text-lg text-gray-700">
            Which Processes Can You Delegate?
          </Text>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {departments.map((dept) => (
            <button
              key={dept.id}
              onClick={() => setActiveFilter(dept.id)}
              className={`px-6 py-3 rounded-lg font-medium text-sm transition-all duration-200 ${
                activeFilter === dept.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 border border-gray-200 hover:bg-blue-50 hover:border-blue-200'
              }`}
            >
              {dept.label}
            </button>
          ))}
        </div>

        {/* Digital Employee Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEmployees.map((employee) => {
            const IconComponent = employee.icon
            return (
              <div
                key={employee.id}
                className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-lg hover:border-blue-300 transition-all duration-300 group"
              >
                {/* Icon and Title */}
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-blue-200 transition-colors">
                    <IconComponent className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <Heading level="3" className="text-lg font-semibold text-gray-900 mb-2">
                      {employee.title}
                    </Heading>
                  </div>
                </div>

                {/* Handles */}
                <div className="mb-4">
                  <Text className="text-sm font-medium text-gray-700 mb-2">
                    Handles:
                  </Text>
                  <Text className="text-sm text-gray-600">
                    {employee.handles}
                  </Text>
                </div>

                {/* Never */}
                <div className="bg-green-50 rounded-lg p-3">
                  <Text className="text-sm font-medium text-green-800 mb-1">
                    Never:
                  </Text>
                  <Text className="text-sm text-green-700">
                    {employee.never}
                  </Text>
                </div>
              </div>
            )
          })}
        </div>

        {/* Show count */}
        <div className="text-center mt-8">
          <Text className="text-gray-600">
            Showing {filteredEmployees.length} digital employees
            {activeFilter !== "all" && ` in ${departments.find(d => d.id === activeFilter)?.label}`}
          </Text>
        </div>
      </Container>
    </Section>
  )
}
