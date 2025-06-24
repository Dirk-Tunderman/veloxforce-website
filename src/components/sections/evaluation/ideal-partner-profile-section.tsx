"use client"

import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"
import { Building2, Users, Clock, CheckCircle } from "lucide-react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"

interface ProfileCategory {
  title: string
  icon: any
  items: string[]
  color: string
}

const profileCategories: ProfileCategory[] = [
  {
    title: "Business Characteristics",
    icon: Building2,
    items: [
      "10-200 employees with established operations",
      "Proven processes that need scaling",
      "Growth ambitions beyond current capacity",
      "Leadership ready to delegate operations"
    ],
    color: "blue"
  },
  {
    title: "Cultural Indicators",
    icon: Users,
    items: [
      "Values strategic thinking over busy work",
      "Invests in tools that multiply capability",
      "Believes in focusing on core competencies",
      "Ready to trust partners with execution"
    ],
    color: "gray"
  },
  {
    title: "Timing\nSignals",
    icon: Clock,
    items: [
      "Considering hiring for repetitive roles",
      "Team mentions burnout from routine tasks",
      "Strategic initiatives consistently delayed",
      "Quality suffering due to volume"
    ],
    color: "gray"
  }
]

export function IdealPartnerProfileSection() {
  const { ref: titleRef, isVisible: titleVisible } = useIntersectionObserver({ threshold: 0.3 })

  return (
    <Section padding="xl" background="light-to-white">
      <Container className="max-w-6xl">
        <div 
          ref={titleRef as any}
          className={`text-center mb-12 transition-all duration-800 ease-out ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="velox-text-h1-premium mb-4">
            Who Thrives with Service-as-Software
          </h2>
          <p className="velox-text-lead max-w-3xl mx-auto">
            Success patterns we've observed across 200+ implementations
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {profileCategories.map((category, index) => {
            const IconComponent = category.icon
            const { ref: cardRef, isVisible: cardVisible } = useIntersectionObserver({ threshold: 0.2 })
            const isBlue = category.color === 'blue'
            
            return (
              <div 
                key={index} 
                ref={cardRef as any}
                className={`card-elevated h-full flex flex-col transition-all duration-1000 ease-out ${
                  cardVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="flex items-start gap-3 mb-6">
                  <div className={`flex-shrink-0 ${isBlue ? 'icon-container-gradient' : 'icon-container'}`}>
                    <IconComponent className={`w-6 h-6 ${isBlue ? 'text-blue-600' : 'text-gray-700'}`} />
                  </div>
                  <h3 className="velox-text-h3 pt-1">
                    {category.title.split('\n').map((line, lineIndex) => (
                      <span key={lineIndex}>
                        {line}
                        {lineIndex < category.title.split('\n').length - 1 && <br />}
                      </span>
                    ))}
                  </h3>
                </div>
                
                <ul className="space-y-3">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                      <p className="velox-text-body leading-relaxed">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        {/* Success Story Callout */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl p-8">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4 text-white">
              The Common Thread
            </h3>
            <p className="text-lg text-blue-100 leading-relaxed">
              Every successful Service-as-Software partnership shares one trait:{" "}
              <span className="font-bold text-white">
                Leadership that values strategic work over operational control.
              </span>{" "}
              They understand that true growth comes from delegation, not micromanagement.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  )
}