import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"
import { Settings, AlertTriangle, CheckCircle } from "lucide-react"

const approaches = [
  {
    title: "Traditional Software",
    icon: Settings,
    color: "gray",
    items: [
      "You adapt to it",
      "Generic workflows",
      "Constant management"
    ]
  },
  {
    title: "Traditional Automation",
    icon: AlertTriangle,
    color: "orange",
    items: [
      "Complex setup",
      "Breaks with exceptions",
      "You fix problems"
    ]
  },
  {
    title: "Veloxforce Services",
    icon: CheckCircle,
    color: "blue",
    items: [
      "Adapts to you",
      "Your exact process",
      "We handle everything"
    ]
  }
]

const getColorClasses = (color: string) => {
  switch (color) {
    case "gray":
      return {
        bg: "bg-gray-50",
        border: "border-gray-200",
        icon: "text-gray-600",
        title: "text-gray-900"
      }
    case "orange":
      return {
        bg: "bg-orange-50",
        border: "border-orange-200",
        icon: "text-orange-600",
        title: "text-orange-900"
      }
    case "blue":
      return {
        bg: "bg-blue-50",
        border: "border-blue-200",
        icon: "text-blue-600",
        title: "text-blue-900"
      }
    default:
      return {
        bg: "bg-gray-50",
        border: "border-gray-200",
        icon: "text-gray-600",
        title: "text-gray-900"
      }
  }
}

export function ServiceAsSoftware() {
  return (
    <Section padding="xl" background="white">
      <Container className="max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Heading level="2" className="velox-text-h2 mb-4">
            The Power of Service as Software
          </Heading>
          <Text className="velox-text-body text-xl text-gray-700 mb-8 max-w-4xl mx-auto">
            Your Processes Become Intelligent Services
          </Text>
          
          <div className="max-w-4xl mx-auto">
            <Text className="velox-text-body text-lg text-gray-700 mb-4">
              Traditional automation forces you into rigid software. We do the opposite.
            </Text>
            <Text className="velox-text-body text-lg text-gray-700 mb-4">
              Your exact workflows become intelligent digital employees that work precisely how YOU work.
            </Text>
            <Text className="velox-text-body text-lg font-semibold text-blue-600">
              No software to learn. No tools to manage. Just outcomes delivered.
            </Text>
          </div>
        </div>

        {/* Three Approach Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {approaches.map((approach, index) => {
            const IconComponent = approach.icon
            const colors = getColorClasses(approach.color)
            
            return (
              <div
                key={index}
                className={`${colors.bg} ${colors.border} border-2 rounded-lg p-6 text-center transition-all duration-300 hover:shadow-lg ${
                  approach.color === 'blue' ? 'transform hover:scale-105' : ''
                }`}
              >
                {/* Icon */}
                <div className="flex justify-center mb-4">
                  <div className={`w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm`}>
                    <IconComponent className={`w-8 h-8 ${colors.icon}`} />
                  </div>
                </div>

                {/* Title */}
                <Heading level="3" className={`text-xl font-semibold ${colors.title} mb-6`}>
                  {approach.title}
                </Heading>

                {/* Items */}
                <ul className="space-y-3">
                  {approach.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-gray-700 font-medium">
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Special highlight for Veloxforce */}
                {approach.color === 'blue' && (
                  <div className="mt-6 bg-blue-100 rounded-lg p-3">
                    <Text className="text-blue-800 font-semibold text-sm">
                      ✓ The Service as Software Advantage
                    </Text>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}
