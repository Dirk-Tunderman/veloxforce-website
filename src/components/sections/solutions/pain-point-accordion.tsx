"use client"

import { useState } from "react"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"
import { ChevronDown, ChevronUp } from "lucide-react"

const painPoints = [
  {
    emoji: "😤",
    title: "Proposals Take Hours Every Day",
    digitalTasks: [
      "Pull client information from CRM/files",
      "Populate your proposal templates",
      "Calculate pricing based on your rules",
      "Apply your formatting standards",
      "Track opens and engagement",
      "Send follow-up reminders",
      "Update opportunity status"
    ],
    humanTasks: "Strategy, customization, and final approval",
    metric: "Time saved: 75% on each proposal"
  },
  {
    emoji: "😤",
    title: "Drowning in Invoices",
    digitalTasks: [
      "Retrieve invoices from emails/portals",
      "Extract all relevant data",
      "Match against purchase orders",
      "Apply your coding structure",
      "Route through approval workflow",
      "Flag exceptions for review",
      "Prepare payment batches"
    ],
    humanTasks: "Exception approval and vendor relationships",
    metric: "Accuracy: 99.9% with full audit trail"
  },
  {
    emoji: "😤",
    title: "CRM is Always Outdated",
    digitalTasks: [
      "Email interactions → CRM activities",
      "Meeting outcomes → Opportunity updates",
      "Contact changes → Database updates",
      "Task completion → Status changes",
      "Document uploads → Right records",
      "Pipeline stage movements",
      "Data quality maintenance"
    ],
    humanTasks: "Strategic account planning",
    metric: "Result: CRM becomes reliable decision tool"
  },
  {
    emoji: "😤",
    title: "Month-End is a Multi-Day Marathon",
    digitalTasks: [
      "Pull reports from all systems",
      "Consolidate data into your templates",
      "Run standard calculations",
      "Generate variance explanations",
      "Format for different stakeholders",
      "Distribute to recipient lists",
      "Archive for compliance"
    ],
    humanTasks: "Analysis and strategic decisions",
    metric: "Timeline: Days become hours"
  },
  {
    emoji: "😤",
    title: "Email Avalanche Every Morning",
    digitalTasks: [
      "Sort by priority and type",
      "Draft responses to routine queries",
      "Handle meeting requests",
      "Flag urgent items",
      "Route to appropriate team members",
      "Track response times",
      "Manage follow-ups"
    ],
    humanTasks: "Strategic communications only",
    metric: "Morning routine: 2 hours → 20 minutes"
  },
  {
    emoji: "😤",
    title: "Reports Consume Entire Days",
    digitalTasks: [
      "Gather data from multiple sources",
      "Run calculations and comparisons",
      "Generate charts and visualizations",
      "Apply your formatting standards",
      "Write standard commentary",
      "Distribute to stakeholders",
      "Maintain version control"
    ],
    humanTasks: "Insights and decision-making",
    metric: "Frequency: From weekly struggle to daily ease"
  }
]

export function PainPointAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <Section padding="xl" background="light-blue" className="bg-gray-50">
      <Container className="max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Heading level="2" className="velox-text-h2 mb-4">
            Find Your Specific Pain Point
          </Heading>
          <Text className="velox-text-body text-lg text-gray-700">
            Click Your Biggest Time Drain
          </Text>
        </div>

        {/* Pain Point Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {painPoints.map((painPoint, index) => (
            <div
              key={index}
              className={`bg-white border-l-4 rounded-lg shadow-sm transition-all duration-300 cursor-pointer hover:shadow-md hover:scale-[1.02] ${
                openIndex === index 
                  ? 'border-blue-600 bg-blue-50' 
                  : 'border-blue-600 hover:border-blue-700'
              }`}
              onClick={() => toggleAccordion(index)}
            >
              {/* Closed State */}
              <div className="p-6 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <span className="text-3xl">{painPoint.emoji}</span>
                  <Heading level="3" className="text-lg font-semibold text-gray-900">
                    {painPoint.title}
                  </Heading>
                </div>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-blue-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                )}
              </div>

              {/* Open State */}
              {openIndex === index && (
                <div className="px-6 pb-6 animate-in slide-in-from-top-2 duration-300">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-blue-200">
                    {/* Digital Tasks */}
                    <div>
                      <Text className="font-semibold text-gray-700 mb-3">
                        What digital employees handle:
                      </Text>
                      <ul className="space-y-2">
                        {painPoint.digitalTasks.map((task, taskIndex) => (
                          <li key={taskIndex} className="text-sm text-gray-600 flex items-start">
                            <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {task}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Human Tasks */}
                    <div>
                      <Text className="font-semibold text-blue-600 mb-3">
                        You handle:
                      </Text>
                      <Text className="text-sm text-blue-700 mb-4">
                        {painPoint.humanTasks}
                      </Text>
                      
                      {/* Metric */}
                      <div className="bg-blue-100 rounded-lg p-3 mt-4">
                        <Text className="text-sm font-medium text-blue-800">
                          {painPoint.metric}
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
