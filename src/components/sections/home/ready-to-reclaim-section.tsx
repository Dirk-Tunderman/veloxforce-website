"use client"

import React from "react"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Calculator, Download, ArrowRight, Mail, Phone } from "lucide-react"
import Link from "next/link"

export function ReadyToReclaimSection() {
  return (
    <Section padding="xl" background="transparent" className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-white to-blue-50/20" />
      
      <Container className="relative z-10 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll" data-animation="fadeInUp">
          <h2 className="velox-text-h2 text-center mb-8">
            Ready to Reclaim Your Time?
          </h2>
          <p className="velox-text-lead max-w-3xl mx-auto text-gray-700">
            Choose your path:
          </p>
        </div>

        {/* Two Path Options */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Calculate My ROI */}
          <div className="group relative">
            <div className="card-premium relative h-full min-h-[400px] flex flex-col p-8 text-center">
              <div className="icon-container-gradient w-20 h-20 mx-auto mb-8 bg-gradient-to-br from-blue-500 to-indigo-600">
                <Calculator className="w-10 h-10 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-blue-900 mb-6">
                Calculate My ROI
              </h3>
              
              <p className="velox-text-body text-gray-600 mb-8 flex-1">
                For specific numbers
              </p>

              <Link
                href="/tools/business-audit"
                className="relative bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-lg font-semibold px-8 py-4 h-auto rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 overflow-hidden group inline-flex items-center gap-3 justify-center"
              >
                <span className="relative z-10">Get Started</span>
                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </Link>
            </div>
          </div>

          {/* Is This Right for Me */}
          <div className="group relative">
            <div className="card-elevated relative h-full min-h-[400px] flex flex-col p-8 text-center">
              <div className="icon-container w-20 h-20 mx-auto mb-8 bg-gradient-to-br from-gray-100 to-gray-200">
                <Download className="w-10 h-10 text-gray-600" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-700 mb-6">
                Is This Right for Me?
              </h3>
              
              <p className="velox-text-body text-gray-600 mb-8 flex-1">
                For honest evaluation
              </p>

              <Link
                href="/is-this-right-for-me"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-white border-2 border-blue-600 text-blue-600 font-bold text-lg hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-105"
              >
                <span>Learn More</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="text-center animate-on-scroll" data-animation="fadeInUp" style={{animationDelay: '0.3s'}}>
          <div className="card-base max-w-4xl mx-auto p-8">
            <div className="mb-8">
              <p className="text-lg font-bold text-gray-900 mb-4">
                Every week you wait costs money, opportunities, and quality of life.
              </p>
              <p className="velox-text-body text-gray-700 mb-6">
                But jumping into the wrong solution creates bigger problems.
              </p>
            </div>
            
            <p className="velox-text-lead text-gray-700 mb-6">
              Questions? We're here to help.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <div className="flex items-center gap-2 text-blue-600">
                <Phone className="w-5 h-5" />
                <span className="font-semibold">Call: +49 157 123 45678</span>
              </div>
              <div className="hidden sm:block text-gray-400">|</div>
              <div className="flex items-center gap-2 text-blue-600">
                <Mail className="w-5 h-5" />
                <span className="font-semibold">Email: transform@veloxforce.ai</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}