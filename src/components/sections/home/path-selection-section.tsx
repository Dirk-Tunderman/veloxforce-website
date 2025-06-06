"use client"

import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Button } from "@/components/ui/button"
import { Text } from "@/components/ui/typography"
import { Calculator, Download, ArrowRight, Clock, CheckCircle } from "lucide-react"
import Link from "next/link"

export function PathSelectionSection() {
  return (
    <Section padding="xl" background="accent-to-white">
      <Container className="max-w-6xl">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="velox-text-h2 mb-6">
            Ready to Stop Managing and Start Delegating?
          </h2>
          <p className="velox-text-body-lg max-w-2xl mx-auto text-gray-600">
            Two ways to explore Service-as-Software
          </p>
        </div>

        {/* Two Path Options */}
        <div className="grid md:grid-cols-2 gap-10 mb-20">
          {/* Primary Path - ROI Analysis */}
          <div className="relative bg-white border-2 border-blue-600 rounded-2xl p-8 shadow-lg">
            {/* Recommended Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
              Recommended
            </div>
            
            <div className="text-center pt-4">
              <div className="bg-blue-50 rounded-full p-4 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <Calculator className="h-10 w-10 text-blue-600" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Primary Option:
              </h3>
              <h4 className="text-xl font-semibold text-blue-600 mb-4">
                Calculate My Delegation Savings
              </h4>

              <div className="flex justify-center mb-6">
                <Link
                  href="/tools/business-audit"
                  className="inline-flex items-center justify-center gap-2 w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-6 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl min-h-[56px]"
                >
                  Calculate My Delegation Savings
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>

              <Text className="text-sm text-gray-600 mb-4 text-center">
                For businesses ready to see specific ROI numbers
              </Text>

              <div className="space-y-3 text-left">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-sm text-gray-600">8-minute assessment</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-sm text-gray-600">See exact savings for YOUR volumes</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-sm text-gray-600">No sales pressure</span>
                </div>
              </div>
            </div>
          </div>

          {/* Secondary Path - Download Guide */}
          <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-gray-300 transition-colors">
            <div className="text-center">
              <div className="bg-gray-100 rounded-full p-4 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <Download className="h-10 w-10 text-gray-600" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Secondary Option:
              </h3>
              <h4 className="text-xl font-semibold text-gray-600 mb-4">
                Get Free Process Audit
              </h4>

              <div className="flex justify-center mb-6">
                <Link
                  href="/tools/business-audit"
                  className="inline-flex items-center justify-center gap-2 w-full bg-white border-2 border-blue-600 text-blue-600 px-6 py-6 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-all duration-200 min-h-[56px]"
                >
                  Get Free Process Audit
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>

              <Text className="text-sm text-gray-600 mb-4 text-center">
                Not sure yet? Get valuable insights with no sales pressure
              </Text>

              <div className="space-y-3 text-left">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-gray-400" />
                  <span className="text-sm text-gray-600">Instant clarity on timing</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-gray-400" />
                  <span className="text-sm text-gray-600">Real company examples</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-gray-400" />
                  <span className="text-sm text-gray-600">Self-assessment checklist</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Final Urgency */}
        <div className="bg-gradient-to-r from-blue-50 to-gray-50 border-2 border-blue-200 rounded-2xl p-8">
          <div className="flex items-start gap-4">
            <Clock className="h-6 w-6 text-gray-700 flex-shrink-0 mt-1" />
            <div className="text-center flex-1">
              <p className="text-lg text-gray-800 mb-2">
                Every week you wait costs approximately <span className="font-bold text-blue-700">€1,375</span> in lost efficiency.
              </p>
              <p className="text-gray-700">
                But rushed decisions are worse. Choose the path that matches your readiness - just choose soon.
              </p>
            </div>
          </div>
        </div>

        {/* Trust Signals Footer */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm text-gray-600">
            <div>
              <p className="font-semibold text-gray-900">[Portfolio data coming soon]</p>
              <p>Successful implementations</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900">[Metrics being compiled]</p>
              <p>Average client retention</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900">ISO 27001</p>
              <p>Security compliance framework</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900">Service-as-Software</p>
              <p>Model guarantee</p>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-xs text-gray-500 max-w-2xl mx-auto">
              Service-as-Software is a new model. Portfolio data and client metrics are being compiled for transparency. 
              Security framework follows ISO 27001 standards. Results vary by process complexity.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  )
}