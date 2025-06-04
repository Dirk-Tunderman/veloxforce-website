import Link from "next/link"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"
import { Button } from "@/components/ui/button"
import { Mail, Server, ArrowRight, CheckCircle, Users, Settings, AlertTriangle } from "lucide-react"

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

export function GmailAnalogySection() {
  return (
    <Section padding="xl" background="light-blue">
      <Container className="max-w-7xl">
        <div className="text-center mb-16">
          <Heading level="2" className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {renderTextWithBold("You Already **Delegate Successfully** Every Day")}
          </Heading>
          <Text className="text-xl text-gray-600 max-w-3xl mx-auto">
            {renderTextWithBold("Think about **email**...")}
          </Text>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16">
          {/* Left: 2004 Email Reality */}
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-gray-600 rounded-full flex items-center justify-center">
                <Server className="w-7 h-7 text-white" />
              </div>
              <div>
                <Text className="font-bold text-gray-900 text-xl">
                  {renderTextWithBold("**2004**")}
                </Text>
                <Text className="text-gray-700 font-medium">
                  {renderTextWithBold("Companies **managed email servers**")}
                </Text>
              </div>
            </div>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0" />
                <Text className="text-gray-700">
                  {renderTextWithBold("**Hired IT teams**")}
                </Text>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0" />
                <Text className="text-gray-700">
                  {renderTextWithBold("Worried about **uptime**")}
                </Text>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0" />
                <Text className="text-gray-700">
                  {renderTextWithBold("Managed **servers and security**")}
                </Text>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0" />
                <Text className="text-gray-700">
                  {renderTextWithBold("**Constant technical headaches**")}
                </Text>
              </li>
            </ul>
          </div>

          {/* Right: Today's Gmail Reality */}
          <div className="bg-green-50 rounded-2xl p-8 border border-green-200 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-green-600 rounded-full flex items-center justify-center">
                <Mail className="w-7 h-7 text-white" />
              </div>
              <div>
                <Text className="font-bold text-green-900 text-xl">
                  {renderTextWithBold("**Today**")}
                </Text>
                <Text className="text-green-700 font-medium">
                  {renderTextWithBold("You use Gmail. Email **just works**.")}
                </Text>
              </div>
            </div>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <Text className="text-green-700">
                  {renderTextWithBold("**No servers** to manage")}
                </Text>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <Text className="text-green-700">
                  {renderTextWithBold("**No IT team** needed")}
                </Text>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <Text className="text-green-700">
                  {renderTextWithBold("**99.9% uptime** guaranteed")}
                </Text>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <Text className="text-green-700">
                  {renderTextWithBold("Just **outcomes delivered**")}
                </Text>
              </li>
            </ul>
          </div>
        </div>

        {/* The Same Transformation */}
        <div className="bg-blue-50 rounded-2xl p-8 border border-blue-200 mb-12 hover:shadow-lg transition-all duration-300">
          <div className="text-center">
            <Heading level="3" className="text-2xl font-bold text-blue-900 mb-6">
              {renderTextWithBold("The **Same Transformation** Is Now Available for Your Operations")}
            </Heading>

            <Text className="text-lg text-blue-800 mb-8 max-w-4xl mx-auto leading-relaxed">
              {renderTextWithBold("**Invoice processing**, **customer service**, **data entry**, **report generation**—any repetitive process can become as **simple as email**.")}
            </Text>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="bg-white rounded-xl p-6 border border-gray-300 hover:shadow-md transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <AlertTriangle className="w-6 h-6 text-gray-600" />
                  <Text className="font-semibold text-gray-900">
                    {renderTextWithBold('Not "**easier to manage**"')}
                  </Text>
                </div>
                <Text className="text-gray-700">
                  {renderTextWithBold("Still requires **your time and attention**")}
                </Text>
              </div>

              <div className="bg-white rounded-xl p-6 border border-blue-300 hover:shadow-md transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <Text className="font-semibold text-gray-900">
                    {renderTextWithBold("**Actually managed** for you")}
                  </Text>
                </div>
                <Text className="text-gray-700">
                  {renderTextWithBold("Work **disappears from your plate entirely**")}
                </Text>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            size="lg"
            className="velox-cta-secondary text-lg font-semibold px-8 py-4 h-auto rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            asChild
          >
            <Link href="/solutions">
              <div className="flex items-center gap-3">
                <span>{renderTextWithBold("Which operation should **disappear from your plate first**?")}</span>
                <ArrowRight className="w-5 h-5" />
              </div>
            </Link>
          </Button>
        </div>
      </Container>
    </Section>
  )
}
