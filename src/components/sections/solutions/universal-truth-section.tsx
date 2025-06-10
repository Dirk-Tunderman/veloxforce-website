"use client"

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

export function UniversalTruthSection() {
  return (
    <Section 
      padding="xl" 
      background="light-blue"
      className="relative overflow-hidden"
    >
      {/* Simplified Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/60 via-white to-blue-50/40" />
      
      <Container className="relative z-10 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll" data-animation="fadeInUp">
          <Heading level="2" className="velox-text-h2 mb-6">
            Your Process Matters.{" "}
            <span className="text-gradient">
              Your Industry Doesn't.
            </span>
          </Heading>
          <Text className="velox-text-lead max-w-4xl mx-auto">
            Here's why Service-as-Software works for everyone
          </Text>
        </div>

        {/* Core Truth - Simplified Visual Design */}
        <div className="mb-20">
          <div className="max-w-7xl mx-auto">
            {/* Main Visual Flow */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-center">

              {/* Left: Business Processes */}
              <div className="lg:col-span-2 animate-on-scroll" data-animation="fadeInLeft">
                <div className="card-challenge relative rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
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

              {/* Center: Flow Arrow */}
              <div className="lg:col-span-1 flex justify-center animate-on-scroll" data-animation="scaleIn" style={{ animationDelay: "0.3s" }}>
                <div className="relative flex flex-col items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center shadow-lg">
                    <ArrowRight className="w-8 h-8 text-white" />
                  </div>
                  <Text className="text-sm font-semibold text-blue-700">Universal Solution</Text>
                </div>
              </div>

              {/* Right: Service-as-Software */}
              <div className="lg:col-span-2 animate-on-scroll" data-animation="fadeInRight" style={{ animationDelay: "0.2s" }}>
                <div className="card-solution relative rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="relative z-10">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <Target className="w-10 h-10 text-white" />
                    </div>
                    <Heading level="3" className="text-2xl font-bold text-blue-900 mb-4 text-center">
                      Service-as-Software
                    </Heading>
                    <Text className="text-blue-800 mb-6 text-center leading-relaxed">
                      One approach handles them all
                    </Text>
                    <div className="space-y-3">
                      <div className="bg-blue-50 rounded-xl p-4 border border-blue-200 shadow-sm">
                        <Text className="text-sm font-medium text-blue-800">"We study your rules"</Text>
                      </div>
                      <div className="bg-blue-50 rounded-xl p-4 border border-blue-200 shadow-sm">
                        <Text className="text-sm font-medium text-blue-800">"We build your solution"</Text>
                      </div>
                      <div className="bg-blue-50 rounded-xl p-4 border border-blue-200 shadow-sm">
                        <Text className="text-sm font-medium text-blue-800">"We run it for you"</Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Industry Examples Grid - Simplified */}
        <div className="mb-16">
          <div className="text-center mb-12 animate-on-scroll" data-animation="fadeInUp">
            <Heading level="3" className="velox-text-h3 mb-4">
              Works Across Every Industry
            </Heading>
            <Text className="velox-text-body max-w-3xl mx-auto">
              The principles are universal. The applications are limitless.
            </Text>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((industry, index) => {
              const IconComponent = industry.icon
              return (
                <div
                  key={industry.name}
                  className="card-base text-center p-6 animate-on-scroll"
                  data-animation="fadeInUp"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="icon-container mx-auto mb-4">
                    <IconComponent className="w-6 h-6 icon-primary" />
                  </div>
                  <Text className="font-semibold text-gray-900">
                    {industry.name}
                  </Text>
                </div>
              )
            })}
          </div>
        </div>

        {/* Core Promise */}
        <div className="text-center animate-on-scroll" data-animation="fadeInUp">
          <div className="card-solution p-8 max-w-4xl mx-auto">
            <Heading level="3" className="velox-text-h3 mb-6 text-blue-800">
              The Universal Truth
            </Heading>
            
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <CheckCircle className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <Text className="font-semibold text-blue-800 mb-2">If it follows rules</Text>
                <Text className="text-sm text-blue-700">We can automate it</Text>
              </div>
              <div className="text-center">
                <CheckCircle className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <Text className="font-semibold text-blue-800 mb-2">If it's repetitive</Text>
                <Text className="text-sm text-blue-700">We can perfect it</Text>
              </div>
              <div className="text-center">
                <CheckCircle className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <Text className="font-semibold text-blue-800 mb-2">If it takes time</Text>
                <Text className="text-sm text-blue-700">We can return it to you</Text>
              </div>
            </div>

            <Text className="velox-text-body text-blue-800">
              <strong>Your industry expertise stays with you.</strong> Your operational burden comes to us.
            </Text>
          </div>
        </div>
      </Container>
    </Section>
  )
}