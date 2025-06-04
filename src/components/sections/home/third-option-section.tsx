import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"
import { Settings, Users, CheckCircle, Mail, Globe, AlertCircle } from "lucide-react"

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

export function ThirdOptionSection() {
  return (
    <Section padding="xl" background="white">
      <Container className="max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Heading level="2" className="velox-text-h2 mb-6">
            The Choice Every Business Owner Faces
          </Heading>
          <Text className="velox-text-body text-xl text-gray-700 max-w-3xl mx-auto">
            (And the Option They Don't Know Exists)
          </Text>
        </div>

        {/* Four Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {/* Option 1: Buy More Software */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Settings className="w-8 h-8 text-gray-600" />
              </div>
              <Heading level="3" className="text-xl font-bold text-gray-900 mb-2">
                Option 1: Buy More Software
              </Heading>
            </div>

            <div className="space-y-6 text-center">
              <div>
                <Text className="font-semibold text-gray-900 mb-2 block">You get:</Text>
                <Text className="text-gray-700">Another tool to manage</Text>
              </div>
              <div>
                <Text className="font-semibold text-gray-900 mb-2 block">Reality:</Text>
                <Text className="text-gray-700">2 hours daily in "dashboard hell"</Text>
              </div>
              <div>
                <Text className="font-semibold text-gray-900 mb-2 block">Result:</Text>
                <Text className="text-gray-700">Expensive digital hamster wheel</Text>
              </div>
            </div>
          </div>

          {/* Option 2: Hire More People */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-orange-600" />
              </div>
              <Heading level="3" className="text-xl font-bold text-gray-900 mb-2">
                Option 2: Hire More People
              </Heading>
            </div>

            <div className="space-y-6 text-center">
              <div>
                <Text className="font-semibold text-gray-900 mb-2 block">You get:</Text>
                <Text className="text-gray-700">Humans doing robotic work</Text>
              </div>
              <div>
                <Text className="font-semibold text-gray-900 mb-2 block">Reality:</Text>
                <Text className="text-gray-700">Talented people wasted on repetition</Text>
              </div>
              <div>
                <Text className="font-semibold text-gray-900 mb-2 block">Result:</Text>
                <Text className="text-gray-700">High costs, unhappy teams</Text>
              </div>
            </div>
          </div>

          {/* Option 3: Traditional Outsourcing */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-orange-600" />
              </div>
              <Heading level="3" className="text-xl font-bold text-gray-900 mb-2">
                Option 3: Traditional Outsourcing
              </Heading>
            </div>

            <div className="space-y-6 text-center">
              <div>
                <Text className="font-semibold text-gray-900 mb-2 block">You get:</Text>
                <Text className="text-gray-700">Cheaper labor costs</Text>
              </div>
              <div>
                <Text className="font-semibold text-gray-900 mb-2 block">Reality:</Text>
                <Text className="text-gray-700">Communication gaps, quality issues</Text>
              </div>
              <div>
                <Text className="font-semibold text-gray-900 mb-2 block">Result:</Text>
                <Text className="text-gray-700">You become the quality controller</Text>
              </div>
            </div>
          </div>

          {/* Option 4: Service-as-Software */}
          <div className="velox-card-advantage-enhanced p-8 transform lg:scale-105 hover:scale-110 transition-all duration-300">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <Heading level="3" className="text-xl font-bold text-blue-900 mb-2">
                Option 4: Service-as-Software
              </Heading>
              <Text className="text-blue-700 font-medium">(What Actually Works)</Text>
            </div>

            <div className="space-y-6 text-center">
              <div>
                <Text className="font-semibold text-blue-900 mb-2 block">You get:</Text>
                <Text className="text-blue-800">{renderTextWithBold("Work disappears from your plate")}</Text>
              </div>
              <div>
                <Text className="font-semibold text-blue-900 mb-2 block">Reality:</Text>
                <Text className="text-blue-800">{renderTextWithBold("Delegate like email—**it just works**")}</Text>
              </div>
              <div>
                <Text className="font-semibold text-blue-900 mb-2 block">Result:</Text>
                <Text className="text-blue-800">{renderTextWithBold("Do what you're **brilliant** at")}</Text>
              </div>
            </div>
          </div>
        </div>

        {/* Real Example */}
        <div className="bg-blue-50 rounded-2xl p-8 border border-blue-200">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <AlertCircle className="w-6 h-6 text-blue-600" />
              <Text className="text-lg font-semibold text-blue-900">
                {renderTextWithBold("Not sure this is real? Here's **Maria's Wednesday morning inbox**:")}
              </Text>
            </div>

            <div className="bg-white rounded-xl p-6 border border-blue-300 mb-6 max-w-md mx-auto">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Mail className="w-5 h-5 text-blue-600" />
                <Text className="font-medium text-gray-900">Inbox Summary</Text>
              </div>
              <div className="space-y-2">
                <Text className="text-gray-700">✓ 47 processed invoices</Text>
                <div className="flex items-center justify-center gap-2">
                  <AlertCircle className="w-4 h-4 text-orange-500" />
                  <Text className="text-gray-700">2 exceptions for review</Text>
                </div>
              </div>
            </div>

            <div className="max-w-2xl mx-auto">
              <Text className="text-lg text-blue-800 italic mb-2">
                {renderTextWithBold('"I used to spend **3 hours** on this. Now I spend **10 minutes** on what matters."')}
              </Text>
              <Text className="text-blue-700 font-medium">— Maria, CFO</Text>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
