"use client"

import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Check, X, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"

export function ProblemSolutionSection() {
  return (
    <Section id="problem-solution" padding="xl" className="bg-white">
      <Container className="max-w-7xl">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="velox-text-h2 mb-6">
            A New Model That Makes Software Disappear
          </h2>
          <p className="velox-text-body-lg max-w-3xl mx-auto text-gray-600">
            Not automation tools. Not consultants. Something entirely different. 
            <span className="font-semibold text-gray-900">MIT Sloan reports businesses waste $4.3 trillion globally</span> on 
            inefficient operations. You're trying to solve this with...
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto mb-16">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="text-left py-4 px-6 font-semibold text-gray-900">Option</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-900">Promise</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-900">Reality</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-900">Hidden Cost</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                <td className="py-6 px-6 font-medium text-gray-900">Buy More Software</td>
                <td className="py-6 px-6 text-gray-600">"Automate everything"</td>
                <td className="py-6 px-6 text-gray-600">You manage the automation</td>
                <td className="py-6 px-6 text-blue-700 font-semibold">€2k/month + 20 hrs/week</td>
              </tr>
              <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                <td className="py-6 px-6 font-medium text-gray-900">Hire More People</td>
                <td className="py-6 px-6 text-gray-600">"Human intelligence"</td>
                <td className="py-6 px-6 text-gray-600">Humans doing robotic work</td>
                <td className="py-6 px-6 text-blue-700 font-semibold">€4k/month + management overhead</td>
              </tr>
              <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                <td className="py-6 px-6 font-medium text-gray-900">Traditional Outsourcing</td>
                <td className="py-6 px-6 text-gray-600">"Cheaper labor"</td>
                <td className="py-6 px-6 text-gray-600">Quality control nightmare</td>
                <td className="py-6 px-6 text-blue-700 font-semibold">Trust erosion + rework time</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* New Option Reveal */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t-2 border-gray-200"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-white px-6 py-2 text-lg font-semibold text-blue-600">
              There's a 4th Option
            </span>
          </div>
        </div>

        {/* Service-as-Software Explanation */}
        <div className="mt-12 bg-gradient-to-br from-blue-50 to-white border-2 border-blue-200 rounded-2xl p-8 md:p-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-blue-600 text-white rounded-full p-3">
              <Sparkles className="h-6 w-6" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900">Service-as-Software</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Check className="h-6 w-6 text-green-600 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900">We build custom software for YOUR process</p>
                  <p className="text-sm text-gray-600 mt-1">Using AI, takes weeks not months</p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Check className="h-6 w-6 text-green-600 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900">We run it forever</p>
                  <p className="text-sm text-gray-600 mt-1">You never touch it</p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Check className="h-6 w-6 text-green-600 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900">You pay for outcomes, not tools or time</p>
                  <p className="text-sm text-gray-600 mt-1">Aligned incentives</p>
                </div>
              </div>
            </div>
          </div>

          {/* Skepticism Handler */}
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <p className="text-lg text-gray-700 mb-2">
              <span className="font-semibold text-gray-900">"Too good to be true?"</span> That's what these CEOs thought...
            </p>
            <p className="text-sm text-gray-600">
              Scroll down to see the math behind 95% success rate →
            </p>
          </div>
        </div>
      </Container>
    </Section>
  )
}