import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"
import { CheckCircle, ArrowRight, Users, Cog, Target, Workflow, Zap, Building2, Factory, ShoppingCart, Heart, Home, Briefcase } from "lucide-react"

const industries = [
  { name: "Manufacturing", icon: Factory },
  { name: "Professional Services", icon: Briefcase },
  { name: "E-commerce", icon: ShoppingCart },
  { name: "Healthcare", icon: Heart },
  { name: "Real Estate", icon: Home },
  { name: "Non-profits", icon: Users },
  { name: "Tech Startups", icon: Zap },
  { name: "Traditional Businesses", icon: Building2 }
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
    <Section padding="xl" background="light-blue">
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

        {/* Core Truth - Enhanced Visual Design */}
        <div className="mb-20">
          <div className="max-w-7xl mx-auto">
            {/* Main Visual Flow */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-center">

              {/* Left: Business Processes */}
              <div className="lg:col-span-2">
                <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 border-2 border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 w-20 h-20 bg-gray-200/50 rounded-full blur-xl"></div>
                  <div className="absolute bottom-4 left-4 w-16 h-16 bg-gray-300/30 rounded-full blur-lg"></div>

                  <div className="relative z-10">
                    <div className="w-20 h-20 bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <Workflow className="w-10 h-10 text-gray-700" />
                    </div>
                    <Heading level="3" className="text-2xl font-bold text-gray-900 mb-4 text-center">
                      Every Business Process
                    </Heading>
                    <Text className="text-gray-700 mb-6 text-center leading-relaxed">
                      Whether simple or complex, they all follow rules
                    </Text>
                    <div className="space-y-3">
                      <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
                        <Text className="text-sm font-medium text-gray-800">"Enter invoice data"</Text>
                      </div>
                      <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
                        <Text className="text-sm font-medium text-gray-800">"Calculate pricing based on 47 variables"</Text>
                      </div>
                      <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
                        <Text className="text-sm font-medium text-gray-800">"Check inventory across 3 systems"</Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Center: Enhanced Arrow and Connection */}
              <div className="lg:col-span-1 flex flex-col items-center justify-center py-8">
                <div className="relative">
                  {/* Animated pulse background */}
                  <div className="absolute inset-0 bg-blue-400 rounded-full animate-pulse opacity-20"></div>

                  {/* Main arrow container */}
                  <div className="relative w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
                    <div className="hidden lg:block">
                      <ArrowRight className="w-8 h-8 text-white" />
                    </div>
                    <div className="lg:hidden">
                      <ArrowRight className="w-8 h-8 text-white rotate-90" />
                    </div>
                  </div>
                </div>

                <div className="mt-4 px-4 py-2 bg-blue-100 rounded-full border border-blue-200">
                  <Text className="text-blue-700 font-bold text-sm text-center whitespace-nowrap">
                    Perfect Match
                  </Text>
                </div>
              </div>

              {/* Right: Digital Workforce */}
              <div className="lg:col-span-2">
                <div className="relative bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl p-8 border-2 border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300">
                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 w-20 h-20 bg-blue-300/30 rounded-full blur-xl"></div>
                  <div className="absolute bottom-4 left-4 w-16 h-16 bg-indigo-300/20 rounded-full blur-lg"></div>

                  <div className="relative z-10">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <Cog className="w-10 h-10 text-white animate-spin-slow" />
                    </div>
                    <Heading level="3" className="text-2xl font-bold text-blue-900 mb-4 text-center">
                      Digital Workforces
                    </Heading>
                    <Text className="text-blue-800 mb-6 text-center leading-relaxed">
                      Excel at following rules perfectly, every time
                    </Text>
                    <div className="bg-gradient-to-r from-blue-100 to-indigo-100 border-2 border-blue-300 rounded-2xl p-6 shadow-inner">
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                          <Text className="text-blue-900 font-semibold">Never miss a step</Text>
                        </div>
                        <div className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                          <Text className="text-blue-900 font-semibold">Never make errors</Text>
                        </div>
                        <div className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                          <Text className="text-blue-900 font-semibold">Never need breaks</Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Bottom Conclusion */}
            <div className="mt-16 text-center">
              <div className="relative bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl p-10 text-white max-w-5xl mx-auto shadow-2xl overflow-hidden">
                {/* Decorative background elements */}
                <div className="absolute top-0 left-0 w-40 h-40 bg-white/10 rounded-full blur-3xl -translate-x-20 -translate-y-20"></div>
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl translate-x-16 translate-y-16"></div>

                <div className="relative z-10">
                  <div className="flex items-center justify-center gap-4 mb-6">
                    <Target className="w-10 h-10 text-white" />
                    <Heading level="3" className="text-3xl font-bold">
                      The Universal Truth
                    </Heading>
                    <Target className="w-10 h-10 text-white" />
                  </div>
                  <Text className="text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
                    If your process has rules, we can automate it.
                    <span className="font-bold text-white block mt-2 text-2xl"> Your industry doesn't matter.</span>
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Industries Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <Heading level="3" className="text-2xl font-bold text-gray-900 mb-4">
              Works Across Every Industry
            </Heading>
            <Text className="text-gray-600 max-w-2xl mx-auto">
              From manufacturing to healthcare, the pattern is always the same: rules-based processes become automated outcomes.
            </Text>
          </div>

          {/* Industries Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {industries.map((industry, index) => {
              const IconComponent = industry.icon
              return (
                <div
                  key={index}
                  className="group bg-white border border-gray-200 rounded-xl p-6 text-center hover:border-blue-300 hover:shadow-lg hover:bg-blue-50/30 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-blue-100 transition-colors duration-300">
                    <IconComponent className="w-6 h-6 text-gray-700 group-hover:text-blue-600 transition-colors duration-300" />
                  </div>
                  <Text className="text-sm font-medium text-gray-700 group-hover:text-blue-900 transition-colors duration-300">
                    {industry.name}
                  </Text>
                </div>
              )
            })}
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
                    <div className="hidden md:block absolute -right-2 lg:-right-4 top-1/2 transform -translate-y-1/2 z-10">
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
                    p-4 sm:p-6 md:p-8 h-full rounded-lg text-center transition-all duration-300 hover:shadow-lg
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
