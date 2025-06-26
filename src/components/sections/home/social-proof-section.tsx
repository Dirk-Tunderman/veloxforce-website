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
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-center max-w-5xl mx-auto">
            {/* FemRide Logo */}
            <div className="flex items-center justify-center">
              <div className="w-32 h-20 flex items-center justify-center p-3 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
                <img
                  src="/images/companies/femride-logo.png"
                  alt="FemRide"
                  width={120}
                  height={48}
                  className="w-full h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>

            {/* Wilsch Logo */}
            <div className="flex items-center justify-center">
              <div className="w-32 h-20 flex items-center justify-center p-3 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
                <img
                  src="/images/companies/wilsch-logo.png"
                  alt="Wilsch"
                  width={120}
                  height={48}
                  className="w-full h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>

            {/* WPH Logo */}
            <div className="flex items-center justify-center">
              <div className="w-32 h-20 flex items-center justify-center p-3 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
                <img
                  src="/images/companies/wph-logo.svg"
                  alt="WPH"
                  width={120}
                  height={48}
                  className="w-full h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>

            {/* IITR Logo */}
            <div className="flex items-center justify-center">
              <div className="w-32 h-20 flex items-center justify-center p-3 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
                <img
                  src="/images/companies/iitr-logo.svg"
                  alt="IITR Datenschutz"
                  width={120}
                  height={48}
                  className="w-full h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>

            {/* BruceBEM Logo */}
            <div className="flex items-center justify-center">
              <div className="w-32 h-20 flex items-center justify-center p-3 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
                <img
                  src="/images/companies/brucebem-logo.png"
                  alt="BruceBEM"
                  width={120}
                  height={48}
                  className="w-full h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>

            {/* Prellus Logo */}
            <div className="flex items-center justify-center">
              <div className="w-32 h-20 flex items-center justify-center p-3 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
                <img
                  src="/images/companies/prellus-logo.svg"
                  alt="Prellus"
                  width={120}
                  height={48}
                  className="w-full h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>
          </div>
        </div>

        {/* New Testimonials with Metrics */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Tech Services Testimonial */}
          <div className="card-elevated animate-on-scroll group hover:scale-[1.02] transition-all duration-300" data-animation="fadeInLeft" style={{animationDelay: '0.2s'}}>
            <div className="p-6">
              <div className="text-center mb-4">
                <div className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-bold rounded-full mb-2">
                  Tech Services - 67 Employees
                </div>
              </div>
              <div className="icon-container bg-blue-100 mx-auto mb-4">
                <Quote className="w-6 h-6 icon-primary" />
              </div>
              <p className="text-gray-700 leading-relaxed mb-6 italic text-center">
                "Invoicing: 47 hours/week → 3 hours/week. Same team now handles 5x volume. Implementation: 7 weeks. Monthly savings: €18K. This wasn't a decision - it was obvious."
              </p>
              <div className="border-t border-gray-200 pt-4 text-center">
                <p className="font-semibold text-gray-900">Martin Schneider</p>
                <p className="text-sm text-gray-600">CFO - TechFlow Solutions</p>
              </div>
            </div>
          </div>

          {/* Logistics Testimonial */}
          <div className="card-elevated animate-on-scroll group hover:scale-[1.02] transition-all duration-300" data-animation="fadeInUp" style={{animationDelay: '0.3s'}}>
            <div className="p-6">
              <div className="text-center mb-4">
                <div className="inline-block px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-full mb-2">
                  Logistics - 134 Employees
                </div>
              </div>
              <div className="icon-container bg-emerald-100 mx-auto mb-4">
                <Quote className="w-6 h-6 text-emerald-600" />
              </div>
              <p className="text-gray-700 leading-relaxed mb-6 italic text-center">
                "Route optimization across 5 systems. Manual: 6 people. With Veloxforce: 0.5 people. Accuracy went from 91% to 99.7%. ROI hit in week 9."
              </p>
              <div className="border-t border-gray-200 pt-4 text-center">
                <p className="font-semibold text-gray-900">Erik Johansson</p>
                <p className="text-sm text-gray-600">COO - Nordic Logistics Group</p>
              </div>
            </div>
          </div>

          {/* Professional Services Testimonial */}
          <div className="card-elevated animate-on-scroll group hover:scale-[1.02] transition-all duration-300" data-animation="fadeInRight" style={{animationDelay: '0.4s'}}>
            <div className="p-6">
              <div className="text-center mb-4">
                <div className="inline-block px-3 py-1 bg-purple-100 text-purple-800 text-xs font-bold rounded-full mb-2">
                  Professional Services - 89 Employees
                </div>
              </div>
              <div className="icon-container bg-purple-100 mx-auto mb-4">
                <Quote className="w-6 h-6 text-purple-600" />
              </div>
              <p className="text-gray-700 leading-relaxed mb-6 italic text-center">
                "They built our exact client onboarding process in AI. What took 2 days now takes 2 hours. No software to manage. Just results. Saved €380K in year one."
              </p>
              <div className="border-t border-gray-200 pt-4 text-center">
                <p className="font-semibold text-gray-900">Sarah Mitchell</p>
                <p className="text-sm text-gray-600">Managing Partner - Apex Consulting</p>
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