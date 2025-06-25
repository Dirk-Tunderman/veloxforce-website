"use client"

import React from "react"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Hammer, FileText, Home, ArrowRight } from "lucide-react"

export function ServiceAsSoftwareRevolutionSection() {
  return (
    <Section padding="xl" background="transparent" className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-white to-blue-50/20" />
      
      <Container className="relative z-10 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll" data-animation="fadeInUp">
          <h2 className="velox-text-h2 text-center mb-8">
            The Service-as-Software Revolution
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold text-blue-800 mb-6">
            Everyone Else Sells You Tools. We Deliver Outcomes.
          </h3>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto mb-16 animate-on-scroll" data-animation="fadeInUp" style={{animationDelay: '0.1s'}}>
          <div className="card-elevated p-8 md:p-12">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
              For 20 years, SaaS meant renting software you still had to operate. The revolution? AI can now build perfect software for your exact process in weeks, not years. But here's what vendors won't tell you: <span className="font-bold text-blue-800">Building it is only 20% of the solution</span>. Running it, optimizing it, scaling it - that's the 80% that actually matters.
            </p>
          </div>
        </div>

        {/* Three Approaches Comparison */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Traditional SaaS */}
          <div className="card-challenge text-center p-8 animate-on-scroll" data-animation="fadeInLeft" style={{animationDelay: '0.2s'}}>
            <div className="icon-container-gradient w-16 h-16 mx-auto mb-6 bg-gray-100">
              <Hammer className="w-8 h-8 text-gray-600" />
            </div>
            <h4 className="velox-text-h3 text-gray-800 mb-4 font-bold">Traditional SaaS</h4>
            <p className="velox-text-body text-gray-700 leading-relaxed">
              You rent hammers and hope you can build
            </p>
          </div>

          {/* Consultants */}
          <div className="card-challenge text-center p-8 animate-on-scroll" data-animation="fadeInUp" style={{animationDelay: '0.3s'}}>
            <div className="icon-container-gradient w-16 h-16 mx-auto mb-6 bg-orange-100">
              <FileText className="w-8 h-8 text-orange-600" />
            </div>
            <h4 className="velox-text-h3 text-gray-800 mb-4 font-bold">Consultants</h4>
            <p className="velox-text-body text-gray-700 leading-relaxed">
              They draw blueprints and leave you to build
            </p>
          </div>

          {/* Service-as-Software */}
          <div className="card-solution text-center p-8 animate-on-scroll" data-animation="fadeInRight" style={{animationDelay: '0.4s'}}>
            <div className="icon-container-gradient w-16 h-16 mx-auto mb-6">
              <Home className="w-8 h-8 icon-accent" />
            </div>
            <h4 className="velox-text-h3 text-blue-800 mb-4 font-bold">Service-as-Software</h4>
            <p className="velox-text-body text-blue-700 leading-relaxed font-medium">
              We build your house and maintain it forever
            </p>
          </div>
        </div>

        {/* Bottom Message */}
        <div className="text-center animate-on-scroll" data-animation="fadeInUp" style={{animationDelay: '0.5s'}}>
          <div className="card-elevated max-w-3xl mx-auto p-8">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="text-2xl md:text-3xl font-bold text-blue-800">You describe the outcome.</div>
              <ArrowRight className="w-6 h-6 text-blue-600" />
              <div className="text-2xl md:text-3xl font-bold text-blue-800">We handle everything else.</div>
            </div>
            <p className="text-lg text-gray-700 font-medium">
              That's the Service-as-Software difference.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  )
}