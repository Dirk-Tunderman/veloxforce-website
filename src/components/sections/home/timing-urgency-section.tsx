"use client"

import React from "react"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Clock, TrendingUp, Shield, Users, AlertTriangle, Target } from "lucide-react"

export function TimingUrgencySection() {
  return (
    <Section padding="xl" background="transparent" className="relative overflow-hidden">
      {/* Background with urgency theme */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50/30 via-white to-red-50/20" />
      
      <Container className="relative z-10 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll" data-animation="fadeInUp">
          <h2 className="velox-text-h2 text-center mb-8 text-orange-800">
            The 18-Month Window
          </h2>
          <p className="text-xl font-bold text-gray-700 mb-4">
            Market Reality: AI advantage has an expiration date.
          </p>
        </div>

        {/* Market Timeline */}
        <div className="mb-16 animate-on-scroll" data-animation="fadeInUp" style={{animationDelay: '0.1s'}}>
          <div className="card-elevated p-10">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Today</h3>
                <p className="text-3xl font-bold text-blue-600 mb-2">15%</p>
                <p className="text-sm text-gray-600">of SMEs have production AI</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">12 Months</h3>
                <p className="text-3xl font-bold text-orange-600 mb-2">40%</p>
                <p className="text-sm text-gray-600">will have it</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <AlertTriangle className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">18 Months</h3>
                <p className="text-3xl font-bold text-red-600 mb-2">Table Stakes</p>
                <p className="text-sm text-gray-600">No competitive advantage</p>
              </div>
            </div>
          </div>
        </div>

        {/* Early Adopter Advantages */}
        <div className="mb-16 animate-on-scroll" data-animation="fadeInUp" style={{animationDelay: '0.2s'}}>
          <div className="card-elevated p-10">
            <h3 className="text-2xl font-bold text-center text-emerald-800 mb-8">
              Early Adopter Advantage
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Lower costs</p>
                    <p className="text-sm text-gray-600">AI gets more expensive as demand grows</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Competitive moat</p>
                    <p className="text-sm text-gray-600">Harder to catch up later</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Learning curve</p>
                    <p className="text-sm text-gray-600">Your team adapts while competitors struggle</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Market share</p>
                    <p className="text-sm text-gray-600">MIT: 23% shift to early adopters</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* Capacity Constraint */}
        <div className="text-center animate-on-scroll" data-animation="fadeInUp" style={{animationDelay: '0.4s'}}>
          <div className="card-elevated max-w-3xl mx-auto p-10">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8 border border-blue-200">
              <p className="text-xl font-bold text-blue-800 mb-4">
                We can only handle 12-15 new clients quarterly.
              </p>
              <p className="text-lg text-gray-700 font-semibold">
                The math is yours to do.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}