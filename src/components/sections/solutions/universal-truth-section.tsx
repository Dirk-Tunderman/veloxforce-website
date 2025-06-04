import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"
import { CheckCircle, ArrowRight, Users, Cog, Target } from "lucide-react"

const industries = [
  "Manufacturing", "Professional Services", "E-commerce", "Healthcare", 
  "Real Estate", "Non-profits", "Tech Startups", "Traditional Businesses"
]

const processSteps = [
  {
    step: "1",
    title: "You show us your current process",
    description: "Explain how you currently handle the work",
    icon: Users,
    color: "blue"
  },
  {
    step: "2", 
    title: "We build your digital workforce",
    description: "Create custom automation for your exact rules",
    icon: Cog,
    color: "purple"
  },
  {
    step: "3",
    title: "You delegate, we deliver",
    description: "Send work, receive perfect results",
    icon: Target,
    color: "green"
  }
]

export function UniversalTruthSection() {
  return (
    <Section padding="xl" background="white">
      <Container className="max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Heading level="2" className="velox-text-h2 mb-6">
            Your Process Matters. Your Industry Doesn't.
          </Heading>
          <Text className="velox-text-body text-xl text-gray-700 max-w-4xl mx-auto">
            Here's why Service-as-Software works for everyone
          </Text>
        </div>

        {/* Core Truth */}
        <div className="mb-16">
          <div className="velox-card-advantage-enhanced p-8 max-w-5xl mx-auto text-center">
            <Text className="text-lg text-blue-800 leading-relaxed mb-6">
              Every business process follows rules. Whether those rules are simple ("enter invoice data") 
              or complex ("calculate pricing based on 47 variables while checking inventory across 3 systems"), 
              they're still rules.
            </Text>
            <div className="bg-blue-100 border border-blue-300 rounded-lg p-6">
              <Text className="text-xl font-bold text-blue-900">
                Digital workforces excel at following rules.
              </Text>
            </div>
          </div>
        </div>

        {/* Industries Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <Heading level="3" className="text-2xl font-bold text-gray-900 mb-6">
              We've Successfully Transformed Processes For:
            </Heading>
          </div>

          {/* Industries Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center hover:bg-blue-50 hover:border-blue-200 transition-all duration-300">
                <Text className="font-medium text-gray-800">{industry}</Text>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Text className="text-lg font-semibold text-gray-700">
              And Many More
            </Text>
          </div>
        </div>

        {/* The Pattern Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <Heading level="3" className="text-2xl font-bold text-gray-900 mb-6">
              The Pattern Is Always The Same:
            </Heading>
          </div>

          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {processSteps.map((step, index) => {
              const IconComponent = step.icon
              
              return (
                <div key={index} className="relative">
                  {/* Arrow between steps */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                        <ArrowRight className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  )}

                  <div className={`
                    ${step.color === 'blue' ? 'velox-card-advantage-enhanced' :
                      step.color === 'purple' ? 'bg-purple-50 border border-purple-200' :
                      'bg-green-50 border border-green-200'
                    } 
                    p-8 h-full rounded-lg text-center transition-all duration-300 hover:shadow-lg
                  `}>
                    {/* Step Number */}
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white rounded-full border-4 border-gray-100 flex items-center justify-center shadow-lg">
                      <span className={`
                        text-xl font-bold
                        ${step.color === 'blue' ? 'text-blue-600' :
                          step.color === 'purple' ? 'text-purple-600' :
                          'text-green-600'
                        }
                      `}>
                        {step.step}
                      </span>
                    </div>

                    {/* Icon */}
                    <div className="pt-4 mb-6">
                      <div className={`
                        w-16 h-16 mx-auto rounded-full flex items-center justify-center
                        ${step.color === 'blue' ? 'bg-blue-600' :
                          step.color === 'purple' ? 'bg-purple-600' :
                          'bg-green-600'
                        }
                      `}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <Heading level="4" className={`
                      text-lg font-bold mb-3
                      ${step.color === 'blue' ? 'text-blue-900' :
                        step.color === 'purple' ? 'text-purple-900' :
                        'text-green-900'
                      }
                    `}>
                      {step.title}
                    </Heading>
                    
                    <Text className={`
                      text-sm leading-relaxed
                      ${step.color === 'blue' ? 'text-blue-800' :
                        step.color === 'purple' ? 'text-purple-800' :
                        'text-green-800'
                      }
                    `}>
                      {step.description}
                    </Text>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Bottom Message */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <CheckCircle className="w-8 h-8 text-blue-600" />
              <Heading level="3" className="text-xl font-bold text-blue-900">
                The Universal Formula
              </Heading>
            </div>
            <Text className="text-lg text-blue-800 leading-relaxed">
              Your industry expertise + Our process transformation = Perfect outcomes
            </Text>
          </div>
        </div>
      </Container>
    </Section>
  )
}
