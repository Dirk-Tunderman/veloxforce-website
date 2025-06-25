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
            Two Paths. One Outcome. Your Timeline.
          </h2>
          <p className="velox-text-lead max-w-3xl mx-auto text-gray-700">
            The only question is which path matches your decision-making style:
          </p>
        </div>

        {/* Two Path Options */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* For Leaders Who Know */}
          <div className="group relative">
            <div className="card-premium relative h-full min-h-[400px] flex flex-col p-8 text-center">
              <div className="inline-block px-4 py-2 bg-blue-100 text-blue-800 text-sm font-bold rounded-full mb-6">
                For Leaders Who Know
              </div>
              
              <div className="icon-container-gradient w-20 h-20 mx-auto mb-8 bg-gradient-to-br from-blue-500 to-indigo-600">
                <Calculator className="w-10 h-10 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-blue-900 mb-6">
                Calculate My Exact ROI
              </h3>
              
              <p className="velox-text-body text-gray-600 mb-8 flex-1 leading-relaxed">
                15-minute analysis. 48-hour detailed report. Know your numbers before you decide.
              </p>

              <Link
                href="/tools/business-audit"
                className="relative bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-lg font-semibold px-8 py-4 h-auto rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 overflow-hidden group inline-flex items-center gap-3 justify-center"
              >
                <span className="relative z-10">Calculate My Exact ROI</span>
                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </Link>
            </div>
          </div>

          {/* For Leaders Who Need Proof */}
          <div className="group relative">
            <div className="card-elevated relative h-full min-h-[400px] flex flex-col p-8 text-center">
              <div className="inline-block px-4 py-2 bg-emerald-100 text-emerald-800 text-sm font-bold rounded-full mb-6">
                For Leaders Who Need Proof
              </div>
              
              <div className="icon-container w-20 h-20 mx-auto mb-8 bg-gradient-to-br from-emerald-100 to-emerald-200">
                <Download className="w-10 h-10 text-emerald-600" />
              </div>
              
              <h3 className="text-2xl font-bold text-emerald-800 mb-6">
                Show Me Real Client Results
              </h3>
              
              <p className="velox-text-body text-gray-600 mb-8 flex-1 leading-relaxed">
                See exactly how we transformed similar operations. No theory, just evidence.
              </p>

              <Link
                href="/is-this-right-for-me"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-white border-2 border-emerald-600 text-emerald-600 font-bold text-lg hover:bg-emerald-600 hover:text-white transition-all duration-300 hover:scale-105"
              >
                <span>Show Me Real Client Results</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* The Opportunity Cost Clock */}
        <div className="text-center animate-on-scroll" data-animation="fadeInUp" style={{animationDelay: '0.3s'}}>
          <div className="card-elevated max-w-4xl mx-auto p-10">
            <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-lg p-8 border border-orange-200 mb-8">
              <h3 className="text-xl font-bold text-red-600 mb-4">
                The Opportunity Cost Clock
              </h3>
              <p className="text-lg font-semibold text-gray-800 mb-2">
                Every week = €3,500-8,500 in lost efficiency.
              </p>
              <p className="text-xl font-bold text-red-600">
                Make a decision.
              </p>
            </div>
            
            <p className="velox-text-lead text-gray-700 mb-6">
              Questions? We're here to help.
            </p>
            <div className="flex items-center justify-center">
              <div className="flex items-center gap-2 text-blue-600">
                <Mail className="w-5 h-5" />
                <span className="font-semibold">Email: team@veloxforce.ai</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}