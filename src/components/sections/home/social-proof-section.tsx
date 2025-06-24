"use client"

import React from "react"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Shield, Award, BarChart3, Quote } from "lucide-react"

export function SocialProofSection() {
  return (
    <Section padding="xl" background="transparent" className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-white to-blue-50/20" />
      
      <Container className="relative z-10 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll" data-animation="fadeInUp">
          <h2 className="velox-text-h2 text-center mb-8">
            Leaders Are Already Making the Shift
          </h2>
        </div>

        {/* Client Logos Grid */}
        <div className="mb-16 animate-on-scroll" data-animation="fadeInUp" style={{animationDelay: '0.1s'}}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center justify-center max-w-2xl mx-auto">
            {/* FemRide Logo */}
            <div className="flex items-center justify-center">
              <div className="w-32 h-20 flex items-center justify-center p-4 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
                <img
                  src="/images/companies/femride-logo.png"
                  alt="FemRide"
                  className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>
            
            {/* Wilsch Logo */}
            <div className="flex items-center justify-center">
              <div className="w-32 h-20 flex items-center justify-center p-4 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
                <img
                  src="/images/companies/wilsch-logo.png"
                  alt="Wilsch"
                  className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>
            
            {/* WPH Logo */}
            <div className="flex items-center justify-center">
              <div className="w-32 h-20 flex items-center justify-center p-4 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
                <img
                  src="/images/companies/wph-logo.svg"
                  alt="WPH"
                  className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Testimonial 1 */}
          <div className="card-elevated animate-on-scroll group hover:scale-[1.02] transition-all duration-300" data-animation="fadeInLeft" style={{animationDelay: '0.2s'}}>
            <div className="flex items-start gap-4 mb-6">
              <div className="icon-container bg-blue-100">
                <Quote className="w-6 h-6 icon-primary" />
              </div>
              <div className="flex-1">
                <p className="velox-text-body text-gray-700 leading-relaxed mb-6 italic">
                  "We expect that accounting will no longer need 10 hours per week for daily business, but perhaps half."
                </p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-semibold text-gray-900">Ulrich Wilsch</p>
                  <p className="text-sm text-gray-600">CEO, Wilsch GmbH</p>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="card-elevated animate-on-scroll group hover:scale-[1.02] transition-all duration-300" data-animation="fadeInRight" style={{animationDelay: '0.3s'}}>
            <div className="flex items-start gap-4 mb-6">
              <div className="icon-container bg-emerald-100">
                <Quote className="w-6 h-6 text-emerald-600" />
              </div>
              <div className="flex-1">
                <p className="velox-text-body text-gray-700 leading-relaxed mb-6 italic">
                  "I would say at least 50% - the time has been cut in half. And only 50% in our case because I was able to delegate so much."
                </p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-semibold text-gray-900">Aykut Atli</p>
                  <p className="text-sm text-gray-600">Founder, FemRide</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Bar */}
        <div className="text-center animate-on-scroll" data-animation="fadeInUp" style={{animationDelay: '0.4s'}}>
          <div className="card-base max-w-4xl mx-auto p-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex items-center justify-center gap-3">
                <div className="icon-container bg-blue-100">
                  <Shield className="w-6 h-6 icon-primary" />
                </div>
                <div className="text-left">
                  <p className="font-bold text-gray-900">ISO 27001</p>
                  <p className="text-sm text-gray-600">Certified</p>
                </div>
              </div>
              
              <div className="flex items-center justify-center gap-3">
                <div className="icon-container bg-emerald-100">
                  <Award className="w-6 h-6 text-emerald-600" />
                </div>
                <div className="text-left">
                  <p className="font-bold text-gray-900">95%</p>
                  <p className="text-sm text-gray-600">Success Rate</p>
                </div>
              </div>
              
              <div className="flex items-center justify-center gap-3">
                <div className="icon-container bg-blue-100">
                  <BarChart3 className="w-6 h-6 icon-primary" />
                </div>
                <div className="text-left">
                  <p className="font-bold text-gray-900">200+</p>
                  <p className="text-sm text-gray-600">Processes Automated</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}