"use client"

import React from "react"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Settings, Shield, Eye, BarChart3, AlertTriangle, CheckCircle, Users } from "lucide-react"

export function AIRealityCheckSection() {
  return (
    <Section padding="xl" background="transparent" className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/30 via-white to-gray-50/20" />
      
      <Container className="relative z-10 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll" data-animation="fadeInUp">
          <h2 className="velox-text-h2 text-center mb-8">
            The AI Reality Check
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
            What Service-as-Software Actually Means
          </h3>
        </div>

        {/* It's Not Magic Section */}
        <div className="mb-16 animate-on-scroll" data-animation="fadeInUp" style={{animationDelay: '0.1s'}}>
          <div className="card-elevated max-w-4xl mx-auto p-12">
            <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">
              It's Not Magic. It's Engineering.
            </h3>
            <p className="text-xl text-gray-700 leading-relaxed text-center mb-8">
              We don't give you ChatGPT and call it automation. We build production-grade systems:
            </p>
            
            {/* Production-Grade Features */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="icon-container bg-blue-100">
                  <Settings className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Custom AI trained on your processes</h4>
                  <p className="text-gray-600 text-sm">Not generic, but purpose-built for your exact workflow</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="icon-container bg-emerald-100">
                  <Shield className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Error handling for every edge case</h4>
                  <p className="text-gray-600 text-sm">Robust systems that handle exceptions gracefully</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="icon-container bg-purple-100">
                  <Eye className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Human oversight where judgment matters</h4>
                  <p className="text-gray-600 text-sm">AI + humans working together for perfect outcomes</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="icon-container bg-orange-100">
                  <BarChart3 className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">24/7 monitoring and optimization</h4>
                  <p className="text-gray-600 text-sm">Continuous improvement and performance tracking</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* The Truth About AI */}
        <div className="mb-16 animate-on-scroll" data-animation="fadeInUp" style={{animationDelay: '0.2s'}}>
          <div className="card-elevated max-w-5xl mx-auto p-10">
            <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">
              The Truth About AI
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Raw AI */}
              <div className="card-challenge p-6">
                <div className="flex items-center gap-3 mb-4">
                  <AlertTriangle className="w-6 h-6 text-red-500" />
                  <h4 className="text-lg font-bold text-red-600">Raw AI</h4>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li>• Hallucinates and makes errors</li>
                  <li>• Breaks under edge cases</li>
                  <li>• Disappoints in production</li>
                  <li>• Requires constant babysitting</li>
                </ul>
              </div>
              
              {/* Production AI */}
              <div className="card-solution p-6">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle className="w-6 h-6 text-emerald-500" />
                  <h4 className="text-lg font-bold text-emerald-600">Production AI</h4>
                </div>
                <ul className="space-y-2 text-blue-700">
                  <li>• Properly engineered systems</li>
                  <li>• Monitored and managed 24/7</li>
                  <li>• Transforms businesses reliably</li>
                  <li>• Delivers consistent outcomes</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Your Choice */}
        <div className="animate-on-scroll" data-animation="fadeInUp" style={{animationDelay: '0.3s'}}>
          <div className="card-elevated max-w-5xl mx-auto p-10">
            <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">
              Your Choice
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {/* Option 1 */}
              <div className="card-challenge p-6 text-center">
                <div className="icon-container bg-red-100 mx-auto mb-4">
                  <AlertTriangle className="w-8 h-8 text-red-600" />
                </div>
                <h4 className="font-bold text-gray-800 mb-2">Experiment Yourself</h4>
                <p className="text-sm text-gray-600 mb-4">Try AI tools and hope for the best</p>
                <div className="bg-red-50 p-3 rounded-lg border border-red-200">
                  <p className="text-xs font-bold text-red-600">73% fail in production</p>
                </div>
              </div>
              
              {/* Option 2 */}
              <div className="card-challenge p-6 text-center">
                <div className="icon-container bg-orange-100 mx-auto mb-4">
                  <Users className="w-8 h-8 text-orange-600" />
                </div>
                <h4 className="font-bold text-gray-800 mb-2">Hire Consultants</h4>
                <p className="text-sm text-gray-600 mb-4">Build it for you, leave you to run it</p>
                <div className="bg-orange-50 p-3 rounded-lg border border-orange-200">
                  <p className="text-xs font-bold text-orange-600">You still have to operate it</p>
                </div>
              </div>
              
              {/* Option 3 */}
              <div className="card-solution p-6 text-center">
                <div className="icon-container-gradient mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 icon-accent" />
                </div>
                <h4 className="font-bold text-blue-800 mb-2">Service-as-Software</h4>
                <p className="text-sm text-blue-600 mb-4">We build it, run it, optimize it forever</p>
                <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
                  <p className="text-xs font-bold text-blue-600">Guaranteed outcomes</p>
                </div>
              </div>
            </div>
            
            {/* Bottom Message */}
            <div className="text-center bg-gray-50 rounded-lg p-6 border border-gray-200">
              <p className="text-lg font-semibold text-gray-700">
                Most choose #1, waste €100K, then call us for #3.
              </p>
              <p className="text-sm text-gray-600 mt-2">
                Skip the expensive learning curve.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}