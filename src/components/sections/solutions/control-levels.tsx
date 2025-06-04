import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"
import { Search, Scale, Rocket } from "lucide-react"

const controlLevels = [
  {
    icon: Search,
    title: "Maximum Oversight",
    subtitle: "We review before anything goes out",
    description: [
      "Digital employees prepare everything",
      "You approve before execution",
      "Perfect for regulated industries",
      "Full audit trail maintained"
    ],
    bestFor: "Financial services, healthcare, legal",
    color: "blue"
  },
  {
    icon: Scale,
    title: "Intelligent Balance",
    subtitle: "We review exceptions and samples",
    description: [
      "Digital employees handle routine confidently",
      "Unusual items flagged for review",
      "Random quality checks",
      "Most popular approach"
    ],
    bestFor: "Most growing businesses",
    color: "green"
  },
  {
    icon: Rocket,
    title: "Maximum Efficiency",
    subtitle: "Just flag real problems",
    description: [
      "Digital employees run autonomously",
      "Only critical exceptions escalated",
      "Periodic quality audits",
      "For mature, stable processes"
    ],
    bestFor: "High-volume, well-defined processes",
    color: "purple"
  }
]

const getColorClasses = (color: string) => {
  switch (color) {
    case "blue":
      return {
        bg: "bg-blue-50",
        icon: "text-blue-600",
        tag: "bg-blue-100 text-blue-800"
      }
    case "green":
      return {
        bg: "bg-green-50",
        icon: "text-green-600",
        tag: "bg-green-100 text-green-800"
      }
    case "purple":
      return {
        bg: "bg-purple-50",
        icon: "text-purple-600",
        tag: "bg-purple-100 text-purple-800"
      }
    default:
      return {
        bg: "bg-gray-50",
        icon: "text-gray-600",
        tag: "bg-gray-100 text-gray-800"
      }
  }
}

export function ControlLevels() {
  return (
    <Section padding="xl" background="light-blue" className="bg-gray-50">
      <Container className="max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Heading level="2" className="velox-text-h2 mb-4">
            Control Levels - YOU Choose
          </Heading>
          <Text className="velox-text-body text-lg text-gray-700">
            Your Business, Your Comfort Level
          </Text>
        </div>

        {/* Control Level Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {controlLevels.map((level, index) => {
            const IconComponent = level.icon
            const colors = getColorClasses(level.color)
            
            return (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer h-full flex flex-col"
              >
                {/* Icon */}
                <div className={`w-16 h-16 ${colors.bg} rounded-lg flex items-center justify-center mb-6 mx-auto`}>
                  <IconComponent className={`w-8 h-8 ${colors.icon}`} />
                </div>

                {/* Title */}
                <Heading level="3" className="text-xl font-semibold text-gray-900 text-center mb-2">
                  {level.title}
                </Heading>

                {/* Subtitle */}
                <Text className="text-gray-600 text-center mb-6 italic">
                  "{level.subtitle}"
                </Text>

                {/* Description */}
                <ul className="space-y-3 mb-6 flex-grow">
                  {level.description.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-sm text-gray-600 flex items-start">
                      <span className={`w-1.5 h-1.5 ${colors.icon.replace('text-', 'bg-')} rounded-full mt-2 mr-3 flex-shrink-0`}></span>
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Best For Tag */}
                <div className="mt-auto">
                  <div className={`${colors.tag} rounded-full px-4 py-2 text-center`}>
                    <Text className="text-sm font-medium">
                      Best for: {level.bestFor}
                    </Text>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-12">
          <Text className="text-blue-600 font-semibold text-lg">
            Adjust anytime as confidence grows
          </Text>
        </div>
      </Container>
    </Section>
  )
}
