"use client"

import { Clock, TrendingDown, AlertTriangle, Users, DollarSign, ArrowRight, MapPin } from "lucide-react"

import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"

const traditionalOptions = [
  {
    icon: Clock,
    title: "Push through with longer hours",
    description: "Some owners try to handle growth by working harder. It works for a while, but everyone has limits.",
    color: "gray"
  },
  {
    icon: Users,
    title: "Build an operations team",
    description: "Hiring good operations people is expensive - senior salaries, benefits, training. And when you need to scale further? More hiring, more managing.",
    color: "gray"
  },
  {
    icon: TrendingDown,
    title: "Bring in automation help",
    description: "There are excellent consultants and agencies out there. Some deliver great results. But we've also seen many charge substantial fees, implement complex systems, then leave businesses struggling to manage new technology.",
    color: "gray"
  },
  {
    icon: DollarSign,
    title: "Outsource operations",
    description: "Offshoring can work well for some. For others, it brings quality concerns and communication challenges that create new headaches.",
    color: "gray"
  }
]

export function TwoCostsHeroSection() {

  return (
    <Section padding="lg" background="white-to-light">
      <Container>
        <div className="max-w-4xl mx-auto">
          {/* Main Headline */}
          <div className="text-center mb-16">
            <Heading level="1" className="velox-text-h1 mb-6">
              The Two Costs Many Growing Businesses Face
            </Heading>
            <Text className="velox-text-lead text-gray-600 max-w-2xl mx-auto">
              If you're running a successful business, you might recognize this situation.
            </Text>
          </div>

          {/* Reality Check */}
          <div className="mb-16">
            <div className="w-full flex justify-center mb-8">
              <div className="max-w-3xl px-4">
                <Text className="text-base text-gray-700 leading-relaxed text-center">
                  From the outside, things look great. Customers are happy, revenue is growing, and the business is thriving. But behind the scenes, there might be a different story.
                </Text>
              </div>
            </div>

            {/* Two Costs Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {/* Personal Cost */}
              <div className="velox-card-traditional p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mr-4">
                    <Clock className="w-6 h-6 text-gray-700" />
                  </div>
                  <Heading level="3" className="velox-text-h3">The Personal Cost</Heading>
                </div>
                <Text className="velox-text-body mb-4">
                  Many business owners find themselves working late to keep up with operations. Weekends that should be for family become catch-up time for admin work.
                </Text>
                <Text className="velox-text-body">
                  If this sounds familiar, you're not alone. The business that was supposed to create freedom somehow becomes all-consuming.
                </Text>
              </div>

              {/* Business Cost */}
              <div className="velox-card-traditional p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mr-4">
                    <TrendingDown className="w-6 h-6 text-gray-700" />
                  </div>
                  <Heading level="3" className="velox-text-h3">The Business Cost</Heading>
                </div>
                <Text className="velox-text-body mb-4">
                  Often there's another challenge - growth limitations. New opportunities come in, but taking them on might mean drowning in operational work.
                </Text>
                <Text className="velox-text-body">
                  It's frustrating to turn down good business, but sometimes it feels like the only option.
                </Text>
              </div>
            </div>

            <div className="w-full flex justify-center mb-12">
              <div className="max-w-3xl px-4">
                <Text className="text-base text-gray-600 leading-relaxed italic text-center">
                  This is a common crossroads - successful enough to have real volume, but perhaps not quite at the scale for enterprise solutions.
                </Text>
              </div>
            </div>
          </div>



            <div className="text-center">
              <div className="w-full flex justify-center mb-8">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 max-w-3xl mx-4">
                  <Text className="text-base text-blue-800 font-medium leading-relaxed text-center">
                    Every approach has trade-offs. What works brilliantly for one business might create problems for another.
                  </Text>
                </div>
              </div>

              <div className="w-full flex justify-center mb-8">
                <div className="max-w-3xl px-4">
                  <Text className="text-xl text-gray-700 font-medium leading-relaxed text-center">
                    But what if there was a way to keep what's working while solving what isn't?
                  </Text>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center shadow-lg">
                  <ArrowRight className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
