import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"
import { FileText, Bot, CheckCircle, ArrowRight } from "lucide-react"

export function BusinessLogicIntelligence() {
  return (
    <Section padding="xl" background="white">
      <Container className="max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Heading level="2" className="velox-text-h2 mb-4">
            What Makes This Possible
          </Heading>
          <Text className="velox-text-body text-xl text-gray-700 mb-8">
            Your Business Logic Becomes Their Intelligence
          </Text>
          
          <div className="max-w-4xl mx-auto">
            <Text className="velox-text-body text-lg text-gray-700 mb-6">
              We don't build generic automation. We create digital employees trained on YOUR:
            </Text>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <ul className="space-y-3 text-left">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <Text className="text-gray-700">Specific processes and workflows</Text>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <Text className="text-gray-700">Business rules and exceptions</Text>
                </li>
              </ul>
              <ul className="space-y-3 text-left">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <Text className="text-gray-700">Quality standards and preferences</Text>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <Text className="text-gray-700">Systems and tools</Text>
                </li>
              </ul>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-6">
              <Text className="text-blue-800 font-semibold text-lg">
                Result: Digital employees that work exactly like your best people, just faster and 24/7.
              </Text>
            </div>
          </div>
        </div>

        {/* Transformation Visual */}
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Step 1: Your SOP */}
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <Heading level="3" className="text-lg font-semibold text-gray-900 mb-2">
                Your SOP
              </Heading>
              <Text className="text-gray-700 text-sm">
                Your exact processes, rules, and standards
              </Text>
            </div>

            {/* Arrow */}
            <div className="hidden md:flex justify-center">
              <ArrowRight className="w-8 h-8 text-blue-600" />
            </div>

            {/* Step 2: Digital Employee Training */}
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Bot className="w-8 h-8 text-white" />
              </div>
              <Heading level="3" className="text-lg font-semibold text-gray-900 mb-2">
                Digital Employee Training
              </Heading>
              <Text className="text-gray-700 text-sm">
                AI learns your specific way of working
              </Text>
            </div>

            {/* Arrow */}
            <div className="hidden md:flex justify-center">
              <ArrowRight className="w-8 h-8 text-blue-600" />
            </div>

            {/* Step 3: Perfect Execution */}
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <Heading level="3" className="text-lg font-semibold text-gray-900 mb-2">
                Perfect Execution
              </Heading>
              <Text className="text-gray-700 text-sm">
                Consistent results following your standards
              </Text>
            </div>
          </div>
        </div>

        {/* Mobile Arrow Layout */}
        <div className="md:hidden flex flex-col items-center space-y-4 mt-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <FileText className="w-8 h-8 text-white" />
            </div>
            <Heading level="3" className="text-lg font-semibold text-gray-900 mb-2">
              Your SOP
            </Heading>
            <Text className="text-gray-700 text-sm">
              Your exact processes, rules, and standards
            </Text>
          </div>
          
          <ArrowRight className="w-6 h-6 text-blue-600 rotate-90" />
          
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Bot className="w-8 h-8 text-white" />
            </div>
            <Heading level="3" className="text-lg font-semibold text-gray-900 mb-2">
              Digital Employee Training
            </Heading>
            <Text className="text-gray-700 text-sm">
              AI learns your specific way of working
            </Text>
          </div>
          
          <ArrowRight className="w-6 h-6 text-blue-600 rotate-90" />
          
          <div className="text-center">
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <Heading level="3" className="text-lg font-semibold text-gray-900 mb-2">
              Perfect Execution
            </Heading>
            <Text className="text-gray-700 text-sm">
              Consistent results following your standards
            </Text>
          </div>
        </div>
      </Container>
    </Section>
  )
}
