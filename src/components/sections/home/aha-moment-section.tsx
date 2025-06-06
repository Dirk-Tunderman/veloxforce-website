"use client"

import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"
import { Car, Smartphone, Lightbulb, ArrowRight, Mail, FileText, BarChart3, Cloud, Handshake } from "lucide-react"
import Link from "next/link"

export function AhaMomentSection() {
  return (
    <Section padding="xl" background="white-to-light">
      <Container className="max-w-6xl">
        {/* Section Title */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-2 mb-4">
            <Lightbulb className="h-5 w-5 text-gray-700" />
            <span className="text-sm font-medium text-blue-700">The "Aha" Moment</span>
          </div>
          <Heading level="2" className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Think of It Like This...
          </Heading>
        </div>

        {/* Uber Analogy */}
        <div className="bg-gradient-to-br from-blue-50 to-white border-2 border-blue-200 rounded-2xl p-8 mb-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Car className="h-8 w-8 text-gray-700" />
                <Heading level="3" className="text-2xl md:text-3xl font-bold text-gray-900">Like Having a Custom-Built Uber</Heading>
              </div>
              <div className="space-y-4">
                <Text className="text-gray-700">
                  <span className="font-bold">You don't buy Uber's software.</span> You don't manage their drivers. 
                  You don't maintain their cars.
                </Text>
                <Text className="text-gray-700">
                  <span className="font-bold text-blue-700">You just get rides.</span>
                </Text>
                <div className="border-l-4 border-blue-300 pl-4 bg-blue-50 py-3 rounded">
                  <Text className="text-gray-800 font-medium">
                    <span className="font-bold">Service-as-Software</span> is like having a <span className="font-bold">custom-built Uber</span> just for your business processes.
                  </Text>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-white rounded-xl p-4 border border-gray-200">
                <Heading level="4" className="font-semibold text-gray-900 mb-2">Traditional Way:</Heading>
                <Text className="text-sm text-gray-600"><span className="font-semibold">Buy software</span> → <span className="font-semibold">Learn it</span> → <span className="font-semibold">Manage it</span> → <span className="font-semibold">Fix it</span></Text>
              </div>
              <div className="bg-gradient-to-r from-blue-100 to-blue-50 rounded-xl p-4 border border-blue-300">
                <Heading level="4" className="font-semibold text-blue-900 mb-2">Service-as-Software:</Heading>
                <Text className="text-sm text-blue-800"><span className="font-bold">Delegate work</span> → <span className="font-bold">Receive outcomes</span></Text>
              </div>
            </div>
          </div>
        </div>

        {/* Process Examples */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6 bg-gray-50 rounded-xl">
            <div className="bg-gray-100 rounded-full p-3 w-12 h-12 mx-auto mb-4 flex items-center justify-center">
              <Mail className="h-6 w-6 text-gray-700" />
            </div>
            <Heading level="4" className="font-semibold text-gray-900 mb-2">You don't buy email software</Heading>
            <Text className="text-sm text-gray-600">You just get processed emails</Text>
          </div>
          
          <div className="text-center p-6 bg-gray-50 rounded-xl">
            <div className="bg-gray-100 rounded-full p-3 w-12 h-12 mx-auto mb-4 flex items-center justify-center">
              <FileText className="h-6 w-6 text-gray-700" />
            </div>
            <Heading level="4" className="font-semibold text-gray-900 mb-2">You don't buy invoice software</Heading>
            <Text className="text-sm text-gray-600">You just get processed invoices</Text>
          </div>
          
          <div className="text-center p-6 bg-gray-50 rounded-xl">
            <div className="bg-gray-100 rounded-full p-3 w-12 h-12 mx-auto mb-4 flex items-center justify-center">
              <BarChart3 className="h-6 w-6 text-gray-700" />
            </div>
            <Heading level="4" className="font-semibold text-gray-900 mb-2">You don't buy report software</Heading>
            <Text className="text-sm text-gray-600">You just get generated reports</Text>
          </div>
        </div>

        {/* Why Now Section */}
        <div className="bg-gradient-to-r from-gray-900 to-blue-900 text-white rounded-2xl p-8 md:p-12">
          <Heading level="3" className="text-2xl md:text-3xl font-bold mb-8 text-center">Why Is This Suddenly Possible?</Heading>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 rounded-full p-3 w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <Smartphone className="h-6 w-6 text-white" />
              </div>
              <Heading level="4" className="font-semibold mb-2">AI Revolution</Heading>
              <Text className="text-sm text-gray-300">
                <span className="font-semibold">Custom development became affordable</span> and faster than any alternative
              </Text>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 rounded-full p-3 w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <Cloud className="h-6 w-6 text-white" />
              </div>
              <Heading level="4" className="font-semibold mb-2">Cloud Infrastructure</Heading>
              <Text className="text-sm text-gray-300">
                Running software at scale became affordable for everyone
              </Text>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 rounded-full p-3 w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <Handshake className="h-6 w-6 text-white" />
              </div>
              <Heading level="4" className="font-semibold mb-2">Service Model</Heading>
              <Text className="text-sm text-gray-300">
                Someone finally willing to own the operations forever
              </Text>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Link 
              href="/our-approach"
              className="inline-flex items-center gap-2 bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              Understand the Full Model
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  )
}