import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"
import { Calculator, AlertTriangle, CheckCircle, Clock, Shield } from "lucide-react"

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

export function SkepticsGuideSection() {
  return (
    <Section padding="xl" background="white">
      <Container className="max-w-7xl">
        <div className="text-center mb-16">
          <Heading level="2" className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {renderTextWithBold('"But How Do I Know This Will Work for **MY** Business?"')}
          </Heading>
          <Text className="text-xl text-gray-600 max-w-3xl mx-auto">
            {renderTextWithBold("Fair question. Here's our **answer**:")}
          </Text>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column */}
          <div className="space-y-8">
            {/* We Start With Math */}
            <div className="bg-blue-50 rounded-2xl p-8 border border-blue-200 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center">
                  <Calculator className="w-7 h-7 text-white" />
                </div>
                <Heading level="3" className="text-xl font-bold text-blue-900">
                  {renderTextWithBold("We Start With **Math**, Not Promises")}
                </Heading>
              </div>

              <Text className="text-blue-800 mb-6 font-medium">
                {renderTextWithBold("Before we build **anything**, we analyze:")}
              </Text>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                  <Text className="text-blue-700">
                    {renderTextWithBold("Your current process costs (**time + money**)")}
                  </Text>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                  <Text className="text-blue-700">
                    {renderTextWithBold("Realistic automation potential (usually **60-80%**, not 100%)")}
                  </Text>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                  <Text className="text-blue-700">Development investment required</Text>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                  <Text className="text-blue-700">Monthly service cost</Text>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                  <Text className="text-blue-700">
                    {renderTextWithBold("Your **break-even point**")}
                  </Text>
                </li>
              </ul>
            </div>

            {/* If Numbers Don't Work */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gray-600 rounded-full flex items-center justify-center">
                  <AlertTriangle className="w-7 h-7 text-white" />
                </div>
                <Heading level="3" className="text-xl font-bold text-gray-900">
                  {renderTextWithBold("If the Numbers **Don't Work**, We Don't Proceed")}
                </Heading>
              </div>

              <Text className="text-gray-800 mb-6 font-medium">
                {renderTextWithBold("We've **turned down** businesses where:")}
              </Text>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0" />
                  <Text className="text-gray-700">
                    {renderTextWithBold("Process volumes were **too low**")}
                  </Text>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0" />
                  <Text className="text-gray-700">
                    {renderTextWithBold("Complexity **exceeded ROI potential**")}
                  </Text>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0" />
                  <Text className="text-gray-700">
                    {renderTextWithBold("Human judgment was **irreplaceable**")}
                  </Text>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0" />
                  <Text className="text-gray-700">Better solutions already existed</Text>
                </li>
              </ul>

              <div className="mt-6 pt-6 border-t border-gray-300">
                <Text className="text-gray-900 font-semibold">
                  {renderTextWithBold("This selectivity is why our success rate is **95%**")}
                </Text>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* When It DOES Work */}
            <div className="bg-green-50 rounded-2xl p-8 border border-green-200 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-green-600 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-7 h-7 text-white" />
                </div>
                <Heading level="3" className="text-xl font-bold text-green-900">
                  {renderTextWithBold("When It **DOES** Work, the Results Speak")}
                </Heading>
              </div>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <Text className="text-green-700">
                    {renderTextWithBold("Development pays for itself in **2-6 months** (varies by process)")}
                  </Text>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <Text className="text-green-700">
                    {renderTextWithBold("Ongoing savings of **60-70%** vs traditional staffing")}
                  </Text>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <Text className="text-green-700">
                    {renderTextWithBold("**Immediate time liberation** for strategic work")}
                  </Text>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <Text className="text-green-700">
                    {renderTextWithBold("Scalability **without proportional cost increases**")}
                  </Text>
                </li>
              </ul>

              <div className="mt-6 pt-6 border-t border-green-200">
                <Text className="text-green-900 font-semibold italic">
                  {renderTextWithBold('"We only win when you get **sustained value**. That alignment drives everything we do."')}
                </Text>
              </div>
            </div>

            {/* The Fundamental Test */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gray-600 rounded-full flex items-center justify-center">
                  <Shield className="w-7 h-7 text-white" />
                </div>
                <Heading level="3" className="text-xl font-bold text-gray-900">
                  {renderTextWithBold("The **Fundamental Test**")}
                </Heading>
              </div>

              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 border border-gray-300">
                  <Text className="font-semibold text-gray-900 mb-3">
                    {renderTextWithBold("Ask **any automation agency**:")}
                  </Text>
                  <Text className="text-gray-700 mb-3 italic">
                    {renderTextWithBold('"What happens when it breaks at **2 AM**?"')}
                  </Text>
                  <Text className="text-gray-600 font-medium">
                    {renderTextWithBold('Their answer: "**You fix it**" (or pay emergency rates)')}
                  </Text>
                </div>

                <div className="bg-blue-50 rounded-xl p-6 border border-blue-300">
                  <Text className="font-semibold text-blue-900 mb-3">
                    {renderTextWithBold("Ask **us** the same question:")}
                  </Text>
                  <Text className="text-blue-700 mb-3 italic">
                    {renderTextWithBold('"What happens when it breaks at **2 AM**?"')}
                  </Text>
                  <Text className="text-green-700 font-medium">
                    {renderTextWithBold('Our answer: "**You\'ll never know it broke. We handle it.**"')}
                  </Text>
                </div>

                <div className="text-center pt-4">
                  <Text className="text-lg font-bold text-gray-900">
                    {renderTextWithBold("That's **delegation** vs. **automation**.")}
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
