import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"
import { ArrowRight, AlertTriangle, Zap, Users } from "lucide-react"

// Helper function to render text with bold formatting
const renderTextWithBold = (text: string) => {
  if (!text.includes('**')) return text

  return text.split('**').map((part, i) =>
    i % 2 === 1 ? <strong key={i} className="font-bold">{part}</strong> : part
  )
}

const opportunities = [
  {
    title: "The Old Reality",
    subtitle: "Buy Software or Hire People",
    icon: AlertTriangle,
    type: "traditional",
    items: [
      "**Force your process** into rigid tools",
      "**Pay monthly forever**",
      "**Manage everything yourself**",
      "**One-size-fits-all** solutions"
    ]
  },
  {
    title: "The New Capability",
    subtitle: "AI Makes Custom Development **10x Faster**",
    icon: Zap,
    type: "advantage",
    items: [
      "Build software for **YOUR exact process**",
      "What traditionally takes **months to years**, we accomplish in **weeks**",
      "Costs **80% less** than traditional development",
      "But requires **deep expertise** to implement"
    ]
  },
  {
    title: "The Missing Bridge",
    subtitle: "The Expertise Gap Nobody Talks About",
    icon: Users,
    type: "traditional",
    items: [
      "Building with AI requires **deep process understanding**",
      "Integration complexity hasn't disappeared—**it's shifted**",
      "**Continuous optimization** separates success from expensive failures",
      "This expertise gap is why **80% of automation projects fail**"
    ]
  }
]

export function OpportunitySection() {
  return (
    <Section padding="xl" background="light-blue" className="bg-gray-50">
      <Container className="max-w-7xl">
        {/* Section Header */}
        <div className="text-center mx-auto mb-16">
          <div className="text-center mx-auto max-w-none">
            <Heading level="2" className="velox-text-h2 mb-6 text-center">
              {renderTextWithBold("**Everything Just Changed.** Most Businesses Haven't Realized How to Use It Yet.")}
            </Heading>
            <div className="text-center mx-auto max-w-4xl">
              <Text className="velox-text-body text-xl text-gray-700 text-center leading-relaxed">
                {renderTextWithBold("The **opportunity window is open**. Early adopters are gaining **massive advantages** while others struggle with old approaches.")}
              </Text>
            </div>
          </div>
        </div>

        {/* Three Opportunity Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          {opportunities.map((opportunity, index) => {
            const IconComponent = opportunity.icon
            const isAdvantage = opportunity.type === "advantage"

            return (
              <div key={index} className="lg:col-span-4 relative group">
                {/* Properly aligned arrow between cards */}
                {index < opportunities.length - 1 && (
                  <div className="hidden lg:block absolute -right-6 top-1/2 transform -translate-y-1/2 z-10">
                    <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-md border border-gray-200">
                      <ArrowRight className="w-5 h-5 text-blue-600 transition-all duration-300 hover:text-blue-700" />
                    </div>
                  </div>
                )}

                <div className={`
                  ${isAdvantage
                    ? 'velox-card-advantage-enhanced transform lg:scale-105 hover:scale-110'
                    : 'velox-card-traditional hover:-translate-y-2'
                  }
                  p-8 h-full transition-all duration-500 hover:shadow-xl
                `}>
                  {/* Icon and Title */}
                  <div className="text-center mx-auto mb-6">
                    <div className={`
                      w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center transition-all duration-300
                      ${isAdvantage
                        ? 'bg-gradient-to-br from-blue-600 to-blue-700 shadow-lg hover:shadow-xl hover:scale-110'
                        : 'bg-gray-200 hover:bg-gray-300'
                      }
                    `}>
                      <IconComponent className={`
                        w-8 h-8 transition-all duration-300
                        ${isAdvantage
                          ? 'text-white'
                          : 'text-gray-700'
                        }
                      `} />
                    </div>

                    <div className="text-center mx-auto">
                      <Heading level="3" className={`
                        text-xl font-bold mb-2 text-center
                        ${isAdvantage ? 'text-blue-900' : 'text-gray-900'}
                      `}>
                        {opportunity.title}
                      </Heading>

                      <div className="text-center mx-auto">
                        <Text className={`
                          text-sm font-medium text-center
                          ${isAdvantage ? 'text-blue-700' : 'text-gray-600'}
                        `}>
                          {renderTextWithBold(opportunity.subtitle)}
                        </Text>
                      </div>
                    </div>
                  </div>

                  {/* Items List */}
                  <ul className="space-y-3 text-center">
                    {opportunity.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3 text-left">
                        <div className={`
                          w-2 h-2 rounded-full mt-2 flex-shrink-0
                          ${isAdvantage ? 'bg-blue-600' : 'bg-gray-500'}
                        `} />
                        <Text className={`
                          text-sm leading-relaxed
                          ${isAdvantage ? 'text-blue-800' : 'text-gray-700'}
                        `}>
                          {renderTextWithBold(item)}
                        </Text>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>

        {/* Impossible Choice Message - Changed from red to gray */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 border border-gray-300 rounded-2xl p-8 w-full max-w-4xl hover:bg-gray-200 transition-all duration-300">
            <div className="flex justify-center">
              <div className="text-center max-w-none">
                <Text className="text-lg text-gray-800 leading-relaxed font-medium text-center">
                  {renderTextWithBold("Most businesses face an **impossible choice**: Become **technical experts** or remain **stuck in manual operations**.")}
                </Text>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Message */}
        <div className="flex justify-center">
          <div className="velox-card-advantage-enhanced p-8 w-full max-w-4xl">
            <div className="flex flex-col items-center justify-center text-center">
              <div className="text-center max-w-none mb-4">
                <Text className="text-lg font-bold text-blue-900 text-center">
                  {renderTextWithBold("**That's where we come in.**")}
                </Text>
              </div>
              <div className="text-center max-w-none">
                <Text className="text-blue-800 leading-relaxed text-center">
                  {renderTextWithBold("We're the **expertise layer** that makes Service-as-Software possible. We **build it with AI**. We **run it with intelligence**. You just get **results**.")}
                </Text>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
