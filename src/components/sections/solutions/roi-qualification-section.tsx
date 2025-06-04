import Link from "next/link"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"
import { Button } from "@/components/ui/button"
import { Calculator, Clock, AlertTriangle, DollarSign, CheckCircle, ArrowRight } from "lucide-react"

const qualificationCriteria = [
  {
    icon: Clock,
    title: "Your process takes 5+ hours weekly",
    description: "Enough volume to justify custom development",
    color: "blue"
  },
  {
    icon: CheckCircle,
    title: "It follows consistent rules (even complex ones)",
    description: "Patterns we can capture and automate",
    color: "green"
  },
  {
    icon: AlertTriangle,
    title: "The cost of mistakes or delays hurts",
    description: "Quality and speed matter to your business",
    color: "orange"
  },
  {
    icon: DollarSign,
    title: "You're currently paying premium prices for repetitive work",
    description: "Skilled people doing routine tasks",
    color: "purple"
  }
]

export function ROIQualificationSection() {
  return (
    <Section padding="xl" background="light-blue">
      <Container className="max-w-6xl">
        <div className="text-center mb-16">
          <Heading level="2" className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            But First: Does This Make Financial Sense?
          </Heading>
          <Text className="text-xl text-gray-600 max-w-4xl mx-auto">
            We only work with businesses where the math works. That means:
          </Text>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {qualificationCriteria.map((criteria, index) => {
            const IconComponent = criteria.icon
            return (
              <div key={index} className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className={`
                    w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0
                    ${criteria.color === 'blue' ? 'bg-blue-600' :
                      criteria.color === 'green' ? 'bg-green-600' :
                      criteria.color === 'orange' ? 'bg-orange-600' : 'bg-purple-600'}
                  `}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <Heading level="3" className="text-lg font-bold text-gray-900 mb-2">
                      {criteria.title}
                    </Heading>
                    <Text className="text-gray-700">
                      {criteria.description}
                    </Text>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Results Section */}
        <div className="bg-green-50 rounded-2xl p-8 border border-green-200 mb-12">
          <div className="text-center">
            <Heading level="3" className="text-2xl font-bold text-green-900 mb-6">
              If that's you, delegation typically saves 60-70% while freeing your time.
            </Heading>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white rounded-lg p-6 border border-green-300">
                <div className="text-3xl font-bold text-green-600 mb-2">60-70%</div>
                <Text className="text-green-800 font-medium">Cost Reduction</Text>
                <Text className="text-sm text-green-700">vs traditional staffing</Text>
              </div>
              
              <div className="bg-white rounded-lg p-6 border border-green-300">
                <div className="text-3xl font-bold text-green-600 mb-2">2-6</div>
                <Text className="text-green-800 font-medium">Months to ROI</Text>
                <Text className="text-sm text-green-700">varies by process complexity</Text>
              </div>
              
              <div className="bg-white rounded-lg p-6 border border-green-300">
                <div className="text-3xl font-bold text-green-600 mb-2">24/7</div>
                <Text className="text-green-800 font-medium">Processing</Text>
                <Text className="text-sm text-green-700">no breaks, no sick days</Text>
              </div>
            </div>
          </div>
        </div>

        {/* Honesty Section */}
        <div className="bg-blue-50 rounded-2xl p-8 border border-blue-200 mb-12">
          <div className="text-center">
            <Heading level="3" className="text-2xl font-bold text-blue-900 mb-6">
              If it's not, we'll tell you honestly in our free assessment.
            </Heading>
            
            <Text className="text-lg text-blue-800 mb-6 max-w-3xl mx-auto">
              Not every process is right for Service-as-Software. We've turned down businesses where the economics didn't work. 
              That's how you know when we move forward, it's the right decision.
            </Text>
            
            <div className="bg-white rounded-lg p-6 border border-blue-300 max-w-2xl mx-auto">
              <Text className="text-blue-700 italic">
                "We only win when you get sustained value. That alignment drives everything we do."
              </Text>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            size="lg"
            className="velox-cta-primary text-lg font-semibold px-8 py-4 h-auto rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            asChild
          >
            <Link href="/tools/business-audit">
              <div className="flex items-center gap-2">
                <Calculator className="w-5 h-5" />
                <span>Check if my process qualifies</span>
                <ArrowRight className="w-5 h-5" />
              </div>
            </Link>
          </Button>
          
          <Text className="text-sm text-gray-600 mt-3">
            Free assessment • 8 minutes • Honest analysis
          </Text>
        </div>
      </Container>
    </Section>
  )
}
