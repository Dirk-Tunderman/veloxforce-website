"use client"

import React from "react"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { FileText, Users, BarChart3 } from "lucide-react"

export function RealExamplesSection() {
  return (
    <Section padding="xl" background="transparent" className="relative">
      <Container className="relative z-10 max-w-6xl">
        <div className="text-center mb-16 animate-on-scroll" data-animation="fadeInUp">
          <h2 className="velox-text-h2 text-center mb-8">
            See It In Action: Real Examples
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Invoice Processing */}
          <div className="card-elevated text-center animate-on-scroll group hover:scale-105 transition-all duration-300 h-full flex flex-col" data-animation="fadeInUp" style={{animationDelay: '0.1s'}}>
            <div className="icon-container-gradient mx-auto mb-6">
              <FileText className="w-6 h-6 icon-accent" />
            </div>
            <h4 className="velox-text-h3 text-blue-800 mb-6 text-center">
              Invoice Processing
            </h4>
            <div className="flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-4 text-left">
                <p className="velox-text-body text-gray-700 font-medium">
                  <span className="font-semibold text-blue-900">Your Process:</span> Check PO → Verify amounts → Get approvals → Enter in system
                </p>
                <p className="velox-text-body text-gray-700 font-medium">
                  <span className="font-semibold text-blue-900">AI Creates:</span> Custom software that handles all steps automatically
                </p>
              </div>
              <div className="mt-auto">
                <p className="velox-text-caption font-semibold text-emerald-600 bg-emerald-50 px-3 py-2 rounded-lg">
                  <span className="font-bold">Result:</span> 3 hours → 5 minutes daily
                </p>
              </div>
            </div>
          </div>

          {/* Customer Service */}
          <div className="card-elevated text-center animate-on-scroll group hover:scale-105 transition-all duration-300 h-full flex flex-col" data-animation="scaleIn" style={{animationDelay: '0.2s'}}>
            <div className="icon-container-gradient mx-auto mb-6 bg-gradient-to-br from-emerald-500 to-emerald-600">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h4 className="velox-text-h3 text-blue-800 mb-6 text-center">
              Customer Service
            </h4>
            <div className="flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-4 text-left">
                <p className="velox-text-body text-gray-700 font-medium">
                  <span className="font-semibold text-blue-900">Your Process:</span> Read inquiry → Check order system → Draft response → Send
                </p>
                <p className="velox-text-body text-gray-700 font-medium">
                  <span className="font-semibold text-blue-900">AI Creates:</span> Intelligent agent using your tone and rules
                </p>
              </div>
              <div className="mt-auto">
                <p className="velox-text-caption font-semibold text-emerald-600 bg-emerald-50 px-3 py-2 rounded-lg">
                  <span className="font-bold">Result:</span> 50 emails → 3 strategic conversations
                </p>
              </div>
            </div>
          </div>

          {/* Data Management */}
          <div className="card-solution text-center animate-on-scroll group hover:scale-105 transition-all duration-300 h-full flex flex-col" data-animation="fadeInLeft" style={{animationDelay: '0.3s'}}>
            <div className="icon-container-gradient mx-auto mb-6">
              <BarChart3 className="w-6 h-6 icon-accent" />
            </div>
            <h4 className="velox-text-h3 text-blue-800 mb-6 text-center">
              Data Management
            </h4>
            <div className="flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-4 text-left">
                <p className="velox-text-body text-blue-700 font-medium">
                  <span className="font-semibold text-blue-900">Your Process:</span> Download reports → Clean data → Create analysis → Share
                </p>
                <p className="velox-text-body text-blue-700 font-medium">
                  <span className="font-semibold text-blue-900">AI Creates:</span> Automated pipeline with your exact requirements
                </p>
              </div>
              <div className="mt-auto">
                <p className="velox-text-caption font-semibold text-blue-600 bg-blue-50 px-3 py-2 rounded-lg">
                  <span className="font-bold">Result:</span> Manual Excel work → Real-time dashboards
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}