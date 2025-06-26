"use client"

import React from "react"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Button } from "@/components/ui/button"
import { FileText, Users, BarChart3, TrendingUp, MessageSquare, Calculator, ArrowRight, Zap } from "lucide-react"
import Link from "next/link"

export function RealExamplesSection() {
  return (
    <Section padding="xl" background="white-to-light" className="relative">
      <Container className="relative z-10 max-w-6xl">
        {/* Enhanced Header */}
        <div className="text-center mb-16 animate-on-scroll" data-animation="fadeInUp">
          {/* Design System Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm mb-6">
            <Zap className="w-4 h-4 icon-accent" />
            <span className="velox-text-caption font-medium text-blue-700">Process Automation</span>
          </div>

          <h2 className="velox-text-h2 text-center mb-6">
            Which Process Is Stealing Your Business Time?
          </h2>

          <p className="velox-text-lead max-w-3xl mx-auto">
            We automate the processes that drain your team's energy and time,
            freeing you to focus on what actually grows your business.
          </p>
        </div>

        {/* Process Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {[
            {
              icon: TrendingUp,
              title: "Sales Operations",
              description: "Lead qualification, proposal generation, follow-up sequences",
              color: "blue"
            },
            {
              icon: Users,
              title: "Customer Inquiries",
              description: "Support tickets, order status, account management",
              color: "emerald"
            },
            {
              icon: FileText,
              title: "Financial Processing",
              description: "Invoice processing, expense management, financial reporting",
              color: "purple"
            },
            {
              icon: BarChart3,
              title: "Data Analytics",
              description: "Report generation, data transformation, dashboard creation",
              color: "orange"
            },
            {
              icon: MessageSquare,
              title: "Marketing Operations",
              description: "Campaign management, content distribution, lead nurturing",
              color: "pink"
            },
            {
              icon: Calculator,
              title: "General Operations",
              description: "Workflow management, compliance checks, quality control",
              color: "indigo"
            }
          ].map((process, index) => {
            const IconComponent = process.icon
            return (
              <div
                key={index}
                className="animate-on-scroll group"
                data-animation="fadeInUp"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="card-elevated p-6 h-full hover:shadow-xl transition-all duration-300 text-center">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-${process.color}-500 to-${process.color}-600 rounded-xl mb-4`}>
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>

                  {/* Title */}
                  <h4 className="velox-text-h4 mb-3">
                    {process.title}
                  </h4>

                  {/* Description */}
                  <p className="velox-text-body text-gray-600">
                    {process.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>


        {/* Strong CTA Section */}
        <div className="text-center animate-on-scroll" data-animation="fadeInUp">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-white border-2 border-blue-100 rounded-2xl p-8 md:p-12">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full mb-6">
                <Zap className="w-10 h-10 text-white" />
              </div>

              <h3 className="velox-text-h3 mb-4">
                Ready to See What's Possible?
              </h3>

              <p className="velox-text-lead mb-8 max-w-3xl mx-auto">
                These are just examples. We automate any process that follows rules and happens regularly.
                <strong> See detailed examples and ROI calculations for your specific industry.</strong>
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-lg font-semibold px-8 py-4 h-auto rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
                  asChild
                >
                  <Link href="/solutions">
                    <span className="flex items-center gap-2">
                      Explore All Solutions
                      <ArrowRight className="w-5 h-5" />
                    </span>
                  </Link>
                </Button>

                <p className="velox-text-caption text-gray-600">
                  Detailed examples • ROI calculators • Industry-specific solutions
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}