import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"
import { Button } from "@/components/ui/button"
import { CheckCircle, AlertTriangle, Handshake } from "lucide-react"

const automationCategories = [
  {
    title: "Perfect for Digital Employees",
    icon: CheckCircle,
    color: "green",
    items: [
      "Happens repeatedly (10+ times monthly)",
      "Has clear steps (even with exceptions)",
      "Currently done on computer",
      "Takes 30+ minutes per occurrence",
      "Follows business rules (even complex ones)"
    ]
  },
  {
    title: "Needs Human Touch",
    icon: AlertTriangle,
    color: "orange",
    items: [
      "Requires creative problem-solving",
      "Involves sensitive relationships",
      "Needs physical presence",
      "Completely unique each time",
      "Requires subjective judgment"
    ]
  },
  {
    title: "Hybrid Approach Works",
    icon: Handshake,
    color: "blue",
    items: [
      "Digital employee prepares, human finalizes",
      "Routine handled, exceptions escalated",
      "Data processed, insights human-generated",
      "Standard responses drafted, personality added"
    ]
  }
]

const getColorClasses = (color: string) => {
  switch (color) {
    case "green":
      return {
        bg: "bg-green-50",
        border: "border-green-200",
        icon: "text-green-600",
        bullet: "bg-green-500"
      }
    case "orange":
      return {
        bg: "bg-orange-50",
        border: "border-orange-200",
        icon: "text-orange-600",
        bullet: "bg-orange-500"
      }
    case "blue":
      return {
        bg: "bg-blue-50",
        border: "border-blue-200",
        icon: "text-blue-600",
        bullet: "bg-blue-500"
      }
    default:
      return {
        bg: "bg-gray-50",
        border: "border-gray-200",
        icon: "text-gray-600",
        bullet: "bg-gray-500"
      }
  }
}

export function AutomationCandidates() {
  return (
    <Section padding="xl" background="white">
      <Container className="max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Heading level="2" className="velox-text-h2 mb-4">
            What Makes Good Automation Candidates?
          </Heading>
          <Text className="velox-text-body text-lg text-gray-700">
            Quick Check: Can We Automate Your Task?
          </Text>
        </div>

        {/* Three Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {automationCategories.map((category, index) => {
            const IconComponent = category.icon
            const colors = getColorClasses(category.color)
            
            return (
              <div
                key={index}
                className={`${colors.bg} ${colors.border} border-2 rounded-lg p-6 h-full`}
              >
                {/* Header */}
                <div className="flex items-center mb-6">
                  <IconComponent className={`w-6 h-6 ${colors.icon} mr-3`} />
                  <Heading level="3" className="text-lg font-semibold text-gray-900">
                    {category.title}
                  </Heading>
                </div>

                {/* Items List */}
                <ul className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-sm text-gray-700 flex items-start">
                      <span className={`w-2 h-2 ${colors.bullet} rounded-full mt-2 mr-3 flex-shrink-0`}></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-gray-50 rounded-lg p-8">
          <Text className="text-gray-700 mb-6 text-lg">
            Not sure? We'll analyze your specific task.
          </Text>
          <Button className="velox-cta-primary">
            Analyze My Task - 2 minutes
          </Button>
        </div>
      </Container>
    </Section>
  )
}
