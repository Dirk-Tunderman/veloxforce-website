import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"
import { Mail, Server, Users, ArrowRight, CheckCircle, Clock, TrendingUp, Zap, Shield, Target } from "lucide-react"

const timelineSteps = [
  {
    year: "2004",
    title: "Before",
    description: "Companies bought email servers, hired IT teams, managed everything themselves",
    icon: Server,
    type: "traditional"
  },
  {
    year: "2024",
    title: "After",
    description: "Now everyone uses Gmail. Email became a service. No servers. No IT team. Just outcomes.",
    icon: Mail,
    type: "advantage"
  }
]

const businessSteps = [
  {
    title: "Your Business (Today)",
    description: "You're still buying generic software or hiring expensive teams for operations",
    icon: Users,
    type: "traditional"
  },
  {
    title: "Your Business (Tomorrow)",
    description: "Custom software built for your exact needs, run as a service. You delegate. We deliver.",
    icon: CheckCircle,
    type: "advantage"
  }
]

const processSteps = [
  "You explain your process to us (not to AI)",
  "We design the perfect automation strategy",
  "We create your digital workforce 10x faster than traditional development",
  "We test, refine, and optimize it",
  "We run it for you forever",
  "You delegate work and get results"
]

const digitalWorkforceFeatures = [
  {
    title: "Works 24/7 without breaks",
    icon: Clock,
    type: "advantage"
  },
  {
    title: "Follows your exact processes",
    icon: Target,
    type: "advantage"
  },
  {
    title: "Managed by our experts",
    icon: Shield,
    type: "advantage"
  },
  {
    title: "Delivers consistent quality",
    icon: CheckCircle,
    type: "advantage"
  },
  {
    title: "Scales instantly with demand",
    icon: TrendingUp,
    type: "advantage"
  }
]

export function SimpleExplanationSection() {
  return (
    <Section padding="xl" background="white">
      <Container className="max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-20">
          <Heading level="2" className="velox-text-h2 mb-6">
            Think Gmail for Your Business Operations
          </Heading>
          <Text className="velox-text-body text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            The same transformation that happened to email is now happening to business operations.
          </Text>
        </div>

        {/* Email Evolution Timeline - Enhanced Design */}
        <div className="mb-20">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 mb-12 max-w-6xl mx-auto">
            {timelineSteps.map((step, index) => {
              const IconComponent = step.icon
              const isAdvantage = step.type === "advantage"

              return (
                <div key={index} className="flex-1 relative max-w-md">
                  {/* Transformation Arrow */}
                  {index === 0 && (
                    <div className="hidden lg:block absolute -right-12 top-1/2 transform -translate-y-1/2 z-10">
                      <div className="velox-transformation-arrow w-12 h-12">
                        <ArrowRight className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  )}

                  <div className={`
                    ${isAdvantage ? 'velox-card-advantage-enhanced transform lg:scale-105' : 'velox-card-traditional'}
                    p-8 text-center h-full transition-all duration-300 hover:shadow-lg
                  `}>
                    {/* Year Badge */}
                    <div className="inline-flex items-center justify-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-bold mb-6">
                      {step.year}
                    </div>

                    {/* Icon */}
                    <div className={`
                      w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center shadow-lg
                      ${isAdvantage ? 'bg-blue-600' : 'bg-gray-100'}
                    `}>
                      <IconComponent className={`
                        w-10 h-10
                        ${isAdvantage ? 'text-white' : 'text-gray-700'}
                      `} />
                    </div>

                    {/* Title */}
                    <Heading level="3" className={`
                      text-2xl font-bold mb-4
                      ${isAdvantage ? 'text-blue-900' : 'text-gray-900'}
                    `}>
                      {step.title}
                    </Heading>

                    {/* Description */}
                    <Text className={`
                      text-lg leading-relaxed
                      ${isAdvantage ? 'text-blue-800' : 'text-gray-700'}
                    `}>
                      {step.description}
                    </Text>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Business Evolution - Enhanced Design */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <Heading level="3" className="velox-text-h3 mb-4 text-gray-900">
              Now Apply This Same Logic to Your Business
            </Heading>
            <Text className="text-lg text-gray-600 max-w-3xl mx-auto">
              Stop managing software. Start delegating outcomes.
            </Text>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 max-w-6xl mx-auto">
            {businessSteps.map((step, index) => {
              const IconComponent = step.icon
              const isAdvantage = step.type === "advantage"

              return (
                <div key={index} className="flex-1 relative max-w-md">
                  {/* Transformation Arrow */}
                  {index === 0 && (
                    <div className="hidden lg:block absolute -right-12 top-1/2 transform -translate-y-1/2 z-10">
                      <div className="velox-transformation-arrow w-12 h-12">
                        <ArrowRight className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  )}

                  <div className={`
                    ${isAdvantage ? 'velox-card-advantage-enhanced transform lg:scale-105' : 'velox-card-traditional'}
                    p-8 text-center h-full transition-all duration-300 hover:shadow-lg
                  `}>
                    {/* Icon */}
                    <div className={`
                      w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center shadow-lg
                      ${isAdvantage ? 'bg-blue-600' : 'bg-gray-100'}
                    `}>
                      <IconComponent className={`
                        w-10 h-10
                        ${isAdvantage ? 'text-white' : 'text-gray-700'}
                      `} />
                    </div>

                    {/* Title */}
                    <Heading level="3" className={`
                      text-2xl font-bold mb-4
                      ${isAdvantage ? 'text-blue-900' : 'text-gray-900'}
                    `}>
                      {step.title}
                    </Heading>

                    {/* Description */}
                    <Text className={`
                      text-lg leading-relaxed
                      ${isAdvantage ? 'text-blue-800' : 'text-gray-700'}
                    `}>
                      {step.description}
                    </Text>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Process Steps - Enhanced Design */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <Heading level="3" className="velox-text-h3 mb-4 text-gray-900">
              Here's What Actually Happens:
            </Heading>
            <Text className="text-lg text-gray-600 max-w-3xl mx-auto">
              A simple, proven process that transforms your operations into a digital workforce.
            </Text>
          </div>

          <div className="velox-card-advantage-enhanced p-10 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                    <span className="text-white text-lg font-bold">{index + 1}</span>
                  </div>
                  <div className="flex-1">
                    <Text className="text-blue-800 leading-relaxed font-medium">
                      {step}
                    </Text>
                  </div>
                </div>
              ))}
            </div>

            {/* The Result - Enhanced */}
            <div className="mt-12 bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-200 rounded-xl p-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <Text className="text-xl font-bold text-green-900 mb-2">
                  The Result:
                </Text>
                <Text className="text-lg text-green-800 leading-relaxed max-w-4xl mx-auto">
                  "You delegate tasks to your digital workforce. We ensure they deliver.
                  You get guaranteed outcomes, not software to manage."
                </Text>
              </div>
            </div>
          </div>
        </div>

        {/* Digital Workforce Visual - Enhanced Design */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <Heading level="3" className="velox-text-h3 mb-4 text-gray-900">
              Your Digital Workforce:
            </Heading>
            <Text className="text-lg text-gray-600 max-w-3xl mx-auto">
              Like having perfect employees who never quit, never get sick, and cost 70% less.
            </Text>
          </div>

          <div className="velox-card-advantage-enhanced p-10 mb-12">
            <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
              {digitalWorkforceFeatures.map((feature, index) => {
                const IconComponent = feature.icon
                return (
                  <div key={index} className="text-center group flex-shrink-0 w-40">
                    <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-10 h-10 text-white" />
                    </div>
                    <Text className="text-blue-800 font-semibold leading-relaxed">
                      {feature.title}
                    </Text>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Final Quote - Enhanced Design */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-50 via-indigo-50 to-blue-50 rounded-2xl p-12 border-2 border-blue-200 max-w-5xl mx-auto shadow-lg">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <Text className="text-2xl font-bold text-blue-900 mb-4">
              The Perfect Combination
            </Text>
            <Text className="text-xl text-blue-800 leading-relaxed max-w-4xl mx-auto">
              "Think of us as your technical team that happens to use AI superpowers.
              You need both: the AI for speed and cost, the humans for getting it right."
            </Text>
          </div>
        </div>
      </Container>
    </Section>
  )
}
