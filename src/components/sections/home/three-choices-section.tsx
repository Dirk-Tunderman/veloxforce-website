import Link from "next/link"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"
import { Button } from "@/components/ui/button"
import { Settings, Users, Zap, X, Check, Globe, AlertTriangle } from "lucide-react"

// Helper function to render text with bold formatting
const renderTextWithBold = (text: string) => {
  const parts = text.split(/(\*\*.*?\*\*)/)
  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={index}>{part.slice(2, -2)}</strong>
    }
    return part
  })
}

const comparisonData = [
  {
    category: "You Get",
    software: "**Generic tools**",
    people: "**Human workers**",
    outsourcing: "**Offshore teams**",
    service: "**Custom automation**"
  },
  {
    category: "You Must",
    software: "Learn, manage, **integrate**",
    people: "Train, manage, **replace**",
    outsourcing: "**Coordinate**, manage quality",
    service: "Just **delegate**"
  },
  {
    category: "Monthly Cost",
    software: "€500-2000 + **your time**",
    people: "€3000-6000 **per person**",
    outsourcing: "€1500-3000 + **overhead**",
    service: "€500-1500 **all-in**"
  },
  {
    category: "Setup Time",
    software: "**Weeks to months**",
    people: "**Months** of hiring",
    outsourcing: "**Months** to find partners",
    service: "**Weeks** to results"
  },
  {
    category: "When It Breaks",
    software: "**Your problem**",
    people: "**Sick days**, turnover",
    outsourcing: "**Communication gaps**",
    service: "**We fix it**"
  },
  {
    category: "Scalability",
    software: "Buy **more licenses**",
    people: "Hire **more people**",
    outsourcing: "Find **more vendors**",
    service: "**Instant**, no extra cost"
  },
  {
    category: "ROI Timeline",
    software: "**Hope it helps**",
    people: "**6-12 months**",
    outsourcing: "**Variable** quality",
    service: "**Faster** with AI economics"
  },
  {
    category: "Payment Model",
    software: "Pay **regardless**",
    people: "Pay **salaries regardless**",
    outsourcing: "Pay **hourly regardless**",
    service: "Pay for **outcomes only**"
  }
]

const options = [
  {
    title: "Option 1: Buy Software",
    icon: Settings,
    color: "gray",
    highlight: false
  },
  {
    title: "Option 2: Hire People",
    icon: Users,
    color: "gray",
    highlight: false
  },
  {
    title: "Option 3: Traditional Outsourcing",
    icon: Globe,
    color: "gray",
    highlight: false
  },
  {
    title: "Option 4: Service-as-Software",
    icon: Zap,
    color: "blue",
    highlight: true
  }
]

export function ThreeChoicesSection() {
  return (
    <Section padding="xl" background="light-blue" className="bg-gray-50">
      <Container className="max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Heading level="2" className="velox-text-h2 mb-6">
            Every Business Owner Faces the Same Decision
          </Heading>
          <Text className="velox-text-body text-xl text-gray-700 max-w-3xl mx-auto">
            Four paths forward. Only one gives you the freedom you started your business for.
          </Text>
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 mb-12 max-w-6xl mx-auto">
          {/* Header Row */}
          <div className="grid grid-cols-5 bg-gray-50 border-b border-gray-200">
            <div className="p-4 lg:p-6">
              <Text className="font-semibold text-gray-900">Compare Options</Text>
            </div>
            {options.map((option, index) => {
              const IconComponent = option.icon
              return (
                <div key={index} className={`
                  p-3 lg:p-4 text-center border-l border-gray-200
                  ${option.highlight ? 'bg-blue-50 border-blue-200' : ''}
                `}>
                  <div className={`
                    w-10 h-10 lg:w-12 lg:h-12 mx-auto mb-2 lg:mb-3 rounded-full flex items-center justify-center
                    ${option.highlight ? 'bg-blue-600' : 'bg-gray-100'}
                  `}>
                    <IconComponent className={`
                      w-5 h-5 lg:w-6 lg:h-6
                      ${option.highlight ? 'text-white' : 'text-gray-600'}
                    `} />
                  </div>
                  <Text className={`
                    text-xs lg:text-sm font-semibold
                    ${option.highlight ? 'text-blue-900' : 'text-gray-900'}
                  `}>
                    {option.title}
                  </Text>
                </div>
              )
            })}
          </div>

          {/* Comparison Rows */}
          {comparisonData.map((row, rowIndex) => (
            <div key={rowIndex} className={`
              grid grid-cols-5 border-b border-gray-100 last:border-b-0
              ${rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-25'}
            `}>
              {/* Category */}
              <div className="p-4 lg:p-6 font-medium text-gray-900 bg-gray-50 border-r border-gray-200">
                {row.category}
              </div>

              {/* Software Option */}
              <div className="p-3 lg:p-4 border-r border-gray-200">
                <div className="flex items-start gap-2">
                  <X className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
                  <Text className="text-xs lg:text-sm text-gray-700">
                    {renderTextWithBold(row.software)}
                  </Text>
                </div>
              </div>

              {/* People Option */}
              <div className="p-3 lg:p-4 border-r border-gray-200">
                <div className="flex items-start gap-2">
                  <X className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
                  <Text className="text-xs lg:text-sm text-gray-700">
                    {renderTextWithBold(row.people)}
                  </Text>
                </div>
              </div>

              {/* Outsourcing Option */}
              <div className="p-3 lg:p-4 border-r border-gray-200">
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
                  <Text className="text-xs lg:text-sm text-gray-700">
                    {renderTextWithBold(row.outsourcing)}
                  </Text>
                </div>
              </div>

              {/* Service Option */}
              <div className="p-3 lg:p-4 bg-blue-25">
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <Text className="text-xs lg:text-sm text-blue-800 font-medium">
                    {renderTextWithBold(row.service)}
                  </Text>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            size="lg"
            className="velox-cta-primary text-lg font-semibold px-8 py-4 h-auto rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            asChild
          >
            <Link href="/tools/business-audit">
              Calculate My Service-as-Software ROI →
            </Link>
          </Button>
        </div>
      </Container>
    </Section>
  )
}
