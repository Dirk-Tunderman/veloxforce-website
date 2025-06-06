import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"
import { Users, Brain, Target, ArrowDown, Clock, Shield, Zap } from "lucide-react"

const serviceLayer = [
  {
    title: "Your Service Infrastructure",
    subtitle: "What we build",
    icon: Users,
    color: "blue",
    features: [
      "Custom systems designed for your specific process",
      "Work 24/7 without breaks or errors",
      "Follow your exact rules and standards", 
      "Scale instantly with demand"
    ]
  },
  {
    title: "Intelligent Oversight",
    subtitle: "How we ensure quality", 
    icon: Brain,
    color: "purple",
    features: [
      "Expert humans monitor critical decisions",
      "Quality assurance on every output",
      "Continuous learning and improvement",
      "Immediate issue resolution"
    ]
  },
  {
    title: "Outcome Delivery",
    subtitle: "What you experience",
    icon: Target,
    color: "green", 
    features: [
      "Send work, get results",
      "Guaranteed performance metrics",
      "No software to manage",
      "Pay only for outcomes delivered"
    ]
  }
]

const experienceFeatures = [
  {
    icon: Clock,
    title: "24/7 Processing",
    description: "Work never stops, results always flow"
  },
  {
    icon: Shield,
    title: "Quality Guaranteed", 
    description: "Human experts ensure perfection"
  },
  {
    icon: Zap,
    title: "Instant Scaling",
    description: "Handle 10x volume without 10x cost"
  }
]

export function MagicBehindSection() {
  return (
    <Section padding="xl" background="white">
      <Container className="max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Heading level="2" className="velox-text-h2 mb-6">
            What Makes This Different: The Service Layer
          </Heading>
          <Text className="velox-text-body text-xl text-gray-700 max-w-4xl mx-auto">
            Three integrated layers that work together to deliver guaranteed outcomes
          </Text>
        </div>

        {/* Service Layer Flow */}
        <div className="max-w-4xl mx-auto">
          {serviceLayer.map((layer, index) => {
            const IconComponent = layer.icon
            
            return (
              <div key={index} className="relative">
                {/* Layer Card */}
                <div className={`
                  ${layer.color === 'blue' ? 'velox-card-advantage-enhanced' :
                    layer.color === 'purple' ? 'bg-purple-50 border border-purple-200' :
                    'bg-green-50 border border-green-200'
                  } 
                  p-8 rounded-lg mb-8 transition-all duration-300 hover:shadow-lg
                `}>
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                    {/* Icon and Title */}
                    <div className="lg:col-span-4">
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`
                          w-16 h-16 rounded-full flex items-center justify-center
                          ${layer.color === 'blue' ? 'bg-blue-600' :
                            layer.color === 'purple' ? 'bg-purple-600' :
                            'bg-green-600'
                          }
                        `}>
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <Heading level="3" className={`
                            text-xl font-bold mb-1
                            ${layer.color === 'blue' ? 'text-blue-900' :
                              layer.color === 'purple' ? 'text-purple-900' :
                              'text-green-900'
                            }
                          `}>
                            {layer.title}
                          </Heading>
                          <Text className={`
                            text-sm font-medium
                            ${layer.color === 'blue' ? 'text-blue-700' :
                              layer.color === 'purple' ? 'text-purple-700' :
                              'text-green-700'
                            }
                          `}>
                            {layer.subtitle}
                          </Text>
                        </div>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="lg:col-span-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {layer.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start gap-2">
                            <div className={`
                              w-2 h-2 rounded-full mt-2 flex-shrink-0
                              ${layer.color === 'blue' ? 'bg-blue-600' :
                                layer.color === 'purple' ? 'bg-purple-600' :
                                'bg-green-600'
                              }
                            `} />
                            <Text className={`
                              text-sm leading-relaxed
                              ${layer.color === 'blue' ? 'text-blue-800' :
                                layer.color === 'purple' ? 'text-purple-800' :
                                'text-green-800'
                              }
                            `}>
                              {feature}
                            </Text>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Arrow between layers */}
                {index < serviceLayer.length - 1 && (
                  <div className="flex justify-center mb-8">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                      <ArrowDown className="w-6 h-6 text-white" />
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Bottom Experience Section */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <Heading level="3" className="text-2xl font-bold text-gray-900 mb-4">
              You Never See the Complexity. You Just Get Results.
            </Heading>
            <Text className="text-lg text-gray-600 max-w-3xl mx-auto">
              While sophisticated technology and expert humans work behind the scenes, 
              your experience is beautifully simple.
            </Text>
          </div>

          {/* Experience Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {experienceFeatures.map((feature, index) => {
              const IconComponent = feature.icon
              
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <Heading level="4" className="text-lg font-bold text-gray-900 mb-2">
                    {feature.title}
                  </Heading>
                  <Text className="text-gray-600">
                    {feature.description}
                  </Text>
                </div>
              )
            })}
          </div>

          {/* Final Message */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200 max-w-4xl mx-auto">
              <Text className="text-xl font-semibold text-blue-900 italic">
                "The magic isn't in the technology. It's in making the technology invisible 
                while delivering guaranteed outcomes."
              </Text>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
