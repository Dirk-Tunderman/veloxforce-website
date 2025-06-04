import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"
import { ClipboardList, Bot, Users } from "lucide-react"

const timelineSteps = [
  {
    week: "Week 1",
    title: "We Learn YOUR Way",
    icon: ClipboardList,
    tasks: [
      "Document your current processes exactly",
      "Understand your specific rules and exceptions",
      "Map your tools and systems",
      "Identify your quality standards",
      "Capture your business logic"
    ],
    outcome: "This becomes your digital team's playbook"
  },
  {
    week: "Week 2-3",
    title: "We Build YOUR Digital Workforce",
    icon: Bot,
    tasks: [
      "Your processes → Their programming",
      "Your rules → Their decision logic",
      "Your exceptions → Their escalation triggers",
      "Your standards → Their quality metrics",
      "Your tools → Their workspace"
    ],
    outcome: "They're trained specifically for YOUR business"
  },
  {
    week: "Ongoing",
    title: "Perfect Partnership",
    icon: Users,
    tasks: [
      "Digital employees handle routine with your rules",
      "Human experts ensure quality and relationships",
      "You maintain strategic oversight",
      "Continuous improvement based on your feedback"
    ],
    outcome: "One-size-fits-all fails. Your-size-exactly succeeds."
  }
]

export function UniqueBusiness() {
  return (
    <Section padding="xl" background="white" className="relative">
      {/* Subtle background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-100 rounded-full opacity-20"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-blue-200 rounded-full opacity-30"></div>
      </div>
      
      <Container className="max-w-6xl relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Text className="text-blue-600 font-semibold mb-2">
            "But Our Business is Different..."
          </Text>
          <Heading level="2" className="velox-text-h2 mb-4">
            Every Business Says That. Every Business is Right. Here's How We Adapt.
          </Heading>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line - Hidden on mobile, visible on desktop */}
          <div className="hidden md:block absolute top-16 left-0 right-0 h-0.5 bg-blue-200">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 opacity-60"></div>
          </div>

          {/* Timeline Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {timelineSteps.map((step, index) => {
              const IconComponent = step.icon
              return (
                <div key={index} className="relative">
                  {/* Timeline Node */}
                  <div className="flex flex-col items-center md:items-center mb-6">
                    <div className="relative">
                      {/* Animated pulse circle */}
                      <div className="absolute inset-0 bg-blue-600 rounded-full animate-pulse opacity-20"></div>
                      <div className="relative w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg z-10">
                        {index + 1}
                      </div>
                    </div>
                    <Text className="text-blue-600 font-semibold mt-2 text-center">
                      {step.week}
                    </Text>
                  </div>

                  {/* Content Card */}
                  <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                    {/* Icon */}
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-blue-600" />
                    </div>

                    {/* Title */}
                    <Heading level="3" className="text-xl font-semibold text-gray-900 mb-4">
                      {step.title}
                    </Heading>

                    {/* Tasks */}
                    <ul className="space-y-2 mb-6">
                      {step.tasks.map((task, taskIndex) => (
                        <li key={taskIndex} className="text-sm text-gray-600 flex items-start">
                          <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {task}
                        </li>
                      ))}
                    </ul>

                    {/* Outcome */}
                    <div className="bg-blue-50 rounded-lg p-4">
                      <Text className="text-blue-800 font-medium text-sm">
                        {step.outcome}
                      </Text>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </Container>
    </Section>
  )
}
