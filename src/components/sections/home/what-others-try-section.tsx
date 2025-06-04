import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"
import { Clock, Users, Settings, Globe, Zap } from "lucide-react"

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

const options = [
  {
    title: "Option 1: **Push through with longer hours**",
    description: "Some owners try to handle growth by **working harder**. It works for a while, but **everyone has limits**.",
    icon: Clock,
    color: "gray",
    result: "Burnout inevitable"
  },
  {
    title: "Option 2: **Build an operations team**",
    description: "Hiring good operations people is **expensive** - senior salaries, benefits, training. And when you need to scale further? **More hiring, more managing**.",
    icon: Users,
    color: "gray",
    result: "Expensive & complex"
  },
  {
    title: "Option 3: **Bring in automation help**",
    description: "There are excellent consultants and agencies out there. Some deliver great results. But we've also seen many **charge substantial fees**, implement complex systems, then **leave businesses struggling** to manage new technology.",
    icon: Settings,
    color: "gray",
    result: "Often abandoned"
  },
  {
    title: "Option 4: **Outsource operations**",
    description: "Offshoring can work well for some. For others, it brings **quality concerns** and **communication challenges** that create new headaches.",
    icon: Globe,
    color: "gray",
    result: "Quality concerns"
  },
  {
    title: "Option 5: **Service-as-Software** (What Actually Works)",
    description: "Get **custom software built** for your exact process, but **never touch it**. We design it, build it, run it, and **guarantee it works**. You just **delegate and get results**. This wasn't possible until AI reached the point where custom software could be built in **weeks, not months**.",
    icon: Zap,
    color: "blue",
    result: "Proven success"
  }
]

export function WhatOthersTrySection() {
  return (
    <Section padding="xl" background="white">
      <Container className="max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Heading level="2" className="velox-text-h2 mb-6">
            What We've Seen Businesses Try:
          </Heading>
          <Text className="velox-text-body text-xl text-gray-700 max-w-4xl mx-auto">
            Every business faces the same scaling challenge. Here are the five most common approaches and their real outcomes.
          </Text>
        </div>

        {/* Traditional Options - First 4 */}
        <div className="space-y-4 mb-8">
          {options.slice(0, 4).map((option, index) => {
            const IconComponent = option.icon

            return (
              <div key={index} className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:shadow-md transition-all duration-200 relative">
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <IconComponent className="w-5 h-5 text-gray-600" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <Heading level="4" className="font-bold text-gray-900 mb-2 text-lg">
                      {renderTextWithBold(option.title)}
                    </Heading>
                    <Text className="text-gray-700 leading-relaxed">
                      {renderTextWithBold(option.description)}
                    </Text>
                  </div>

                  {/* Result Badge */}
                  <div className="flex-shrink-0">
                    <div className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium border border-gray-300">
                      {option.result}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Service-as-Software Option - Highlighted */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-300 rounded-2xl p-8 shadow-lg relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-200 rounded-full opacity-20 transform translate-x-16 -translate-y-16"></div>

          <div className="relative">
            <div className="flex items-start gap-6">
              {/* Icon */}
              <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                <Zap className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <Heading level="3" className="font-bold text-blue-900 text-xl">
                    {renderTextWithBold(options[4].title)}
                  </Heading>
                  <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                    {options[4].result}
                  </div>
                </div>
                <Text className="text-blue-800 leading-relaxed text-lg mb-4">
                  {renderTextWithBold(options[4].description)}
                </Text>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Message */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8 border border-gray-200 max-w-5xl mx-auto">
            <Heading level="3" className="text-2xl font-bold text-gray-900 mb-4">
              {renderTextWithBold("**Why Service-as-Software Works Now**")}
            </Heading>
            <Text className="text-gray-700 leading-relaxed text-lg mb-6">
              {renderTextWithBold("This wasn't possible until AI reached the point where custom software could be built in **weeks, not months**. The **technology breakthrough happened**. The expertise to implement it properly is **still rare**.")}
            </Text>
            <div className="bg-blue-600 text-white px-6 py-3 rounded-xl inline-block font-semibold">
              {renderTextWithBold("**Ready to see how this applies to your business?**")}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
