"use client"

import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { ArrowRight, HelpCircle } from "lucide-react"
import Link from "next/link"

export function ServiceAsSoftwareEducation() {
  return (
    <Section padding="sm" className="velox-section-light-blue">
      <Container className="max-w-4xl">
        <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6">
          <div className="flex items-start gap-3">
            <HelpCircle className="h-6 w-6 text-gray-700 flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <p className="text-sm text-blue-700 font-medium mb-2">New to Service-as-Software?</p>
              <p className="text-gray-700 mb-4">
                Unlike automation tools you manage, we build custom software for YOUR exact process, 
                then run it completely. You delegate work, we deliver outcomes.
              </p>
              <Link 
                href="/our-approach" 
                className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
              >
                See How Service-as-Software Works
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}