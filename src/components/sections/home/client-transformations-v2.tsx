import Link from "next/link"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"
import { Button } from "@/components/ui/button"
import { Clock, TrendingUp, Users, ArrowRight } from "lucide-react"

const transformations = [
  {
    company: "Wilsch Manufacturing",
    industry: "Manufacturing",
    employees: "45 employees",
    mainMetric: "15 hours weekly saved",
    challenge: "Instead of hiring 2 assistants at €72,000/year...",
    quote: "My assistant was drowning in manual documentation instead of strategic work.",
    results: [
      { label: "15+ Hours Saved Weekly", icon: Clock },
      { label: "€120 Daily Value Created", icon: TrendingUp },
      { label: "Strategic Focus Regained", icon: Users },
      { label: "Automated Documentation Flow", icon: ArrowRight }
    ],
    transformation: "[Process-Bound Manager] → [Strategic Leader]",
    testimonial: "My team now focuses on growth instead of paperwork.",
    cta: "Get My Time Recovery Process",
    style: "velox-case-study-startup"
  },
  {
    company: "WPH Professional Services", 
    industry: "Professional Services",
    employees: "25 employees",
    mainMetric: "€450K revenue increase",
    challenge: "Instead of buying pricing software for €2,000/month...",
    quote: "We were guessing at pricing and leaving money on the table daily.",
    results: [
      { label: "€450K Additional Revenue", icon: TrendingUp },
      { label: "35% Profit Increase", icon: TrendingUp },
      { label: "Accurate Pricing System", icon: ArrowRight },
      { label: "Strategic Revenue Control", icon: Users }
    ],
    transformation: "[Pricing Guesser] → [Revenue Optimizer]",
    testimonial: "Every sale now maximizes profit instead of leaving money behind.",
    cta: "Get My Revenue Growth Process",
    style: "velox-case-study-established"
  },
  {
    company: "Femride Transportation Tech",
    industry: "Early-stage startup", 
    employees: "20 hours weekly saved",
    mainMetric: "100% Technical Burden Lifted",
    challenge: "Instead of hiring a €100K technical director...",
    quote: "I was drowning in technical decisions I didn't understand while trying to scale.",
    results: [
      { label: "100% Technical Burden Lifted", icon: Users },
      { label: "85% Cost Reduction", icon: TrendingUp },
      { label: "Professional Foundation Created", icon: ArrowRight },
      { label: "Scalable Documentation", icon: Clock }
    ],
    transformation: "[Overwhelmed Founder] → [Confident CEO]",
    testimonial: "Now I focus on vision and growth instead of technical firefighting.",
    cta: "Get My Team Liberation Process",
    style: "velox-case-study-revenue"
  }
]

export function ClientTransformationsV2() {
  return (
    <Section padding="xl" background="white">
      <Container className="max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Heading level="2" className="velox-text-h2 mb-6">
            The First Businesses to Discover Service-as-Software
          </Heading>
          <Text className="velox-text-body text-xl text-gray-700 max-w-4xl mx-auto">
            They could have bought software or hired people. Here's what happened instead.
          </Text>
        </div>

        {/* Transformation Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {transformations.map((transformation, index) => {
            return (
              <div key={index} className={`${transformation.style} p-8 rounded-2xl relative`}>
                {/* Company Header */}
                <div className="mb-6">
                  <Heading level="3" className="text-xl font-bold text-gray-900 mb-2">
                    {transformation.company}
                  </Heading>
                  <div className="flex flex-wrap gap-2 text-sm text-gray-600 mb-4">
                    <span>{transformation.industry}</span>
                    <span>•</span>
                    <span>{transformation.employees}</span>
                    <span>•</span>
                    <span className="font-semibold text-blue-600">{transformation.mainMetric}</span>
                  </div>
                </div>

                {/* Challenge */}
                <div className="mb-6">
                  <Text className="text-sm font-medium text-gray-700 mb-2">
                    {transformation.challenge}
                  </Text>
                  <Text className="text-gray-600 italic">
                    "{transformation.quote}"
                  </Text>
                </div>

                {/* Results Grid */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {transformation.results.map((result, resultIndex) => {
                    const IconComponent = result.icon
                    return (
                      <div key={resultIndex} className="bg-white/80 rounded-lg p-3 text-center">
                        <IconComponent className="w-5 h-5 text-blue-600 mx-auto mb-2" />
                        <Text className="text-xs font-medium text-gray-800">
                          {result.label}
                        </Text>
                      </div>
                    )
                  })}
                </div>

                {/* Transformation */}
                <div className="mb-6">
                  <Text className="text-sm font-bold text-center text-blue-900 bg-white/90 rounded-lg py-2 px-3">
                    {transformation.transformation}
                  </Text>
                </div>

                {/* Testimonial */}
                <div className="mb-6">
                  <Text className="text-gray-800 font-medium italic text-center">
                    "{transformation.testimonial}"
                  </Text>
                </div>

                {/* CTA */}
                <div className="text-center">
                  <Button
                    size="sm"
                    className="velox-cta-secondary text-sm font-semibold px-4 py-2 rounded-lg"
                    asChild
                  >
                    <Link href="/tools/business-audit">
                      {transformation.cta}
                    </Link>
                  </Button>
                </div>
              </div>
            )
          })}
        </div>

        {/* Market Statistics Bar */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div className="text-3xl font-bold mb-2">200+</div>
              <Text className="text-blue-100 text-sm">Processes Automated</Text>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">€2.4M+</div>
              <Text className="text-blue-100 text-sm">Annual Savings Delivered</Text>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">95%</div>
              <Text className="text-blue-100 text-sm">Client Retention Rate</Text>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">340%</div>
              <Text className="text-blue-100 text-sm">Average First-Year ROI</Text>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
