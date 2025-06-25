"use client"

import React from "react"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  Target,
  Calculator,
  AlertTriangle
} from "lucide-react"
import Link from "next/link"

export function HeroTransformationSection() {
  return (
    <div>
      <Section
        padding="xl"
        background="white-to-light"
        className="relative min-h-[90vh] flex items-center overflow-hidden"
      >
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover brightness-75 contrast-95"
          >
            <source
              src="/images/illustrations/0_Hi_tech_Round_3840x2160.mp4"
              type="video/mp4"
            />
          </video>
          {/* Balanced dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-black/55" />
          {/* Smart radial gradient focused on text area */}
          <div className="absolute inset-0 bg-radial-gradient from-black/20 via-black/10 to-transparent" />
          {/* Localized darkening behind main content only */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-2/3 bg-radial-gradient from-black/60 via-black/30 to-transparent" />
        </div>

        <Container className="relative z-20 max-w-6xl">
          <div className="text-center space-y-12 relative z-30">
            {/* Main Content Block */}
            <div className="space-y-6 max-w-5xl mx-auto animate-fadeIn">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent [text-shadow:_0_2px_8px_rgb(255_255_255_/_80%),_0_1px_3px_rgb(255_255_255_/_60%)]">
                Stop Buying Software.
                <span className="block">
                   Start Receiving Outcomes.
                </span>
              </h1>

              <p className="velox-text-lead text-center max-w-4xl mx-auto">
                <span className="block text-xl md:text-2xl font-semibold text-blue-800 [text-shadow:_0_2px_6px_rgb(255_255_255_/_70%),_0_1px_2px_rgb(255_255_255_/_50%)]">AI builds your perfect system. We run it 24/7. You receive finished work.</span>
              </p>
              
              <div className="max-w-4xl mx-auto">
                <p className="text-lg md:text-xl text-white/90 [text-shadow:_0_2px_4px_rgb(0_0_0_/_60%)] leading-relaxed">
                  Traditional path: Buy software → Learn it → Manage it → Hope it works.<br />
                  Our path: Describe your need → We build it → Results flow automatically.<br />
                  <span className="font-semibold">That's Service-as-Software.</span>
                </p>
              </div>

              {/* Social Proof Bar */}
              <div className="bg-white/90 backdrop-blur-md border border-white/25 rounded-full shadow-lg px-6 py-3 inline-flex items-center gap-6 text-gray-800 text-sm">
                <span className="font-semibold">[Client Logos]</span>
                <span className="text-gray-400">|</span>
                <span className="font-medium">200+ Processes Automated</span>
                <span className="text-gray-400">|</span>
                <span className="font-medium">95% Success Rate</span>
              </div>
            </div>

            {/* Primary CTAs - Design System Compliant */}
            <div 
              className="space-y-6 text-center animate-fadeIn"
              style={{ animationDelay: '0.3s' }}
            >
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="relative bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-lg font-semibold px-10 py-5 h-auto rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 overflow-hidden group"
                  asChild
                >
                  <Link href="/tools/business-audit">
                    <span className="relative z-10 flex items-center gap-2">
                      Show Me My Hidden Costs
                      <Calculator className="w-5 h-5" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  </Link>
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="px-10 py-5 h-auto text-lg font-semibold border-2 border-white text-white hover:bg-white hover:text-blue-900 bg-white/15 backdrop-blur-md rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 shadow-lg [text-shadow:_0_2px_10px_rgb(0_0_0_/_70%)] [color:white!important]"
                  asChild
                >
                  <Link href="/is-this-right-for-me">
                    <span className="flex items-center gap-2">
                      Is This Right for Me?
                      <ArrowRight className="w-5 h-5" />
                    </span>
                  </Link>
                </Button>
              </div>

            </div>
          </div>
        </Container>
      </Section>

      {/* Transformation Section - Separate Section for Better Spacing */}
      <Section
        padding="xl"
        background="transparent"
        className="relative overflow-visible"
      >
        <Container className="relative z-10 max-w-7xl overflow-visible">
          <div className="text-center space-y-12">
            <div 
              className="space-y-6 animate-fadeIn"
              style={{ animationDelay: '0.2s' }}
            >
              <h2 className="velox-text-h2 text-center" id="transformation">
                Operational Reality Check: Your Actual Numbers
              </h2>
              <p className="velox-text-lead text-center text-gray-700 mt-4">
                Stop guessing. Start measuring what really matters.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-12 gap-8 items-stretch mt-8 overflow-visible">
              {/* Your Operations Today */}
              <div className="lg:col-span-5 animate-on-scroll overflow-visible" data-animation="fadeInLeft">
                <div className="card-challenge relative pt-12 mt-6 overflow-visible h-full flex flex-col">
                  <div className="absolute -top-3 left-8 px-4 py-2 bg-gray-600 text-white rounded-full text-sm font-semibold z-10 shadow-md">
                    Your Operations Scorecard Today
                  </div>
                  <div className="icon-container mb-6">
                    <AlertTriangle className="h-6 w-6 icon-primary" />
                  </div>
                  <h4 className="velox-text-h3 mb-6 text-gray-800">
                    Current Reality
                  </h4>
                  <div className="space-y-6 flex-1">
                    <ul className="space-y-4 text-left">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0"></div>
                        <div>
                          <span className="font-semibold text-gray-800">Manual processing time:</span>
                          <span className="block text-red-600 font-bold">12-48 hours per cycle</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0"></div>
                        <div>
                          <span className="font-semibold text-gray-800">Error rate:</span>
                          <span className="block text-red-600 font-bold">3-5% requiring rework</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0"></div>
                        <div>
                          <span className="font-semibold text-gray-800">Capacity:</span>
                          <span className="block text-red-600 font-bold">Limited by headcount</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0"></div>
                        <div>
                          <span className="font-semibold text-gray-800">Strategic time:</span>
                          <span className="block text-red-600 font-bold">&lt;20% of week</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0"></div>
                        <div>
                          <span className="font-semibold text-gray-800">Scaling cost:</span>
                          <span className="block text-red-600 font-bold">€70K per additional FTE</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Transformation Arrow */}
              <div className="lg:col-span-2 flex items-center justify-center animate-on-scroll" data-animation="scaleIn" style={{animationDelay: '0.3s'}}>
                <div className="transformation-arrow">
                  <ArrowRight className="h-8 w-8 text-white" />
                </div>
              </div>
              
              {/* With Service-as-Software */}
              <div className="lg:col-span-5 animate-on-scroll overflow-visible" data-animation="fadeInRight" style={{animationDelay: '0.2s'}}>
                <div className="card-solution relative pt-12 mt-6 overflow-visible h-full flex flex-col">
                  <div className="absolute -top-3 left-8 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full text-sm font-semibold z-10 shadow-md">
                    With Service-as-Software
                  </div>
                  <div className="icon-container-gradient mb-6">
                    <Target className="h-6 w-6 icon-accent" />
                  </div>
                  <h4 className="velox-text-h3 text-blue-800 mb-6">
                    New Reality
                  </h4>
                  <div className="space-y-6 flex-1">
                    <ul className="space-y-4 text-left">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2 flex-shrink-0"></div>
                        <div>
                          <span className="font-semibold text-blue-800">Automated processing:</span>
                          <span className="block text-emerald-600 font-bold">15-60 minutes</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2 flex-shrink-0"></div>
                        <div>
                          <span className="font-semibold text-blue-800">Error rate:</span>
                          <span className="block text-emerald-600 font-bold">&lt;0.1%</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2 flex-shrink-0"></div>
                        <div>
                          <span className="font-semibold text-blue-800">Capacity:</span>
                          <span className="block text-emerald-600 font-bold">Unlimited scaling</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2 flex-shrink-0"></div>
                        <div>
                          <span className="font-semibold text-blue-800">Strategic time:</span>
                          <span className="block text-emerald-600 font-bold">&gt;80% of week</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2 flex-shrink-0"></div>
                        <div>
                          <span className="font-semibold text-blue-800">Scaling cost:</span>
                          <span className="block text-emerald-600 font-bold">€0 (already included)</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            
            {/* Why Building Custom AI Is Now Smarter */}
            <div className="mt-20 animate-on-scroll" data-animation="fadeInUp" style={{animationDelay: '0.5s'}}>
              <div className="card-elevated max-w-6xl mx-auto p-12">
                <h3 className="text-3xl font-bold text-center text-blue-800 mb-8">
                  Why Building Custom AI Is Now Smarter Than Buying Software
                </h3>
                <p className="text-xl font-semibold text-center text-gray-700 mb-12">
                  The Economics Have Flipped
                </p>
                
                <div className="grid md:grid-cols-2 gap-12 mb-12">
                  {/* Old Model */}
                  <div className="card-challenge p-8">
                    <h4 className="text-xl font-bold text-gray-800 mb-6">Old Model (SaaS)</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">Generic features you don't need: <span className="font-bold text-red-600">80%</span></span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">Features that fit your process: <span className="font-bold text-red-600">20%</span></span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">Monthly cost: <span className="font-bold text-red-600">Forever</span></span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">Still requires <span className="font-bold text-red-600">your team to operate</span></span>
                      </li>
                    </ul>
                  </div>
                  
                  {/* New Model */}
                  <div className="card-solution p-8">
                    <h4 className="text-xl font-bold text-blue-800 mb-6">New Model (Service-as-Software)</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2 flex-shrink-0"></div>
                        <span className="text-blue-700">Built for your exact process: <span className="font-bold text-emerald-600">100%</span></span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2 flex-shrink-0"></div>
                        <span className="text-blue-700">Wasted features: <span className="font-bold text-emerald-600">0%</span></span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2 flex-shrink-0"></div>
                        <span className="text-blue-700">We operate it: <span className="font-bold text-emerald-600">24/7/365</span></span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2 flex-shrink-0"></div>
                        <span className="text-blue-700">Your team does <span className="font-bold text-emerald-600">strategic work</span></span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                
                {/* The Breakthrough */}
                <div className="text-center">
                  <p className="text-xl font-bold text-blue-800">
                    The Breakthrough: AI makes custom software cheap to build. We make it invisible to run.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>


    </div>
  )
}