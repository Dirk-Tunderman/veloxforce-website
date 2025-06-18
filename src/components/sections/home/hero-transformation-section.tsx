"use client"

import React from "react"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  Target,
  TrendingUp,
  ArrowDown,
  Calculator,
  CheckCircle,
  AlertTriangle,
  BarChart3,
  Zap
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
            poster="/images/hero/freepik__hero-section-promptabstract-visualization-of-autom__60674.png"
          >
            <source
              src="/images/illustrations/freepik__slow-push-in-laptop-displaying-holographic-data-in__53646.mp4"
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
            {/* Main Content Block - Elegant Glass Morphism */}
            <div className="space-y-6 max-w-5xl mx-auto animate-fadeIn p-10 rounded-3xl bg-black/40 backdrop-blur-xl shadow-2xl border border-white/15">
              <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight [text-shadow:_0_4px_30px_rgb(0_0_0_/_90%),_0_2px_12px_rgb(0_0_0_/_80%),_0_1px_4px_rgb(0_0_0_/_70%)] [color:white!important] [background:none!important] [-webkit-text-fill-color:white!important]">
                Once You Delegate Your Most Painful Manual Processes,
                <span className="block">
                   You'll Transform From Overwhelmed Operator to Strategic Leader
                </span>
              </h1>

              <p className="velox-text-lead text-center max-w-4xl mx-auto">
                <span className="block text-xl md:text-2xl font-semibold text-white [text-shadow:_0_3px_20px_rgb(0_0_0_/_85%),_0_2px_8px_rgb(0_0_0_/_75%),_0_1px_3px_rgb(0_0_0_/_65%)] [color:white!important]">AI creates custom software for your exact processes. We run it perfectly. You get outcomes, not tools to manage.</span>
              </p>

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
                      See My Transformation Potential
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
                From Operational Overwhelm to Strategic Leadership
              </h2>
              <p className="velox-text-lead text-center text-gray-700 mt-4">
                The transformation is real. The timeline depends on your scope.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-12 gap-8 items-center mt-8 overflow-visible">
              {/* Challenge Card */}
              <div className="lg:col-span-5 animate-on-scroll overflow-visible" data-animation="fadeInLeft">
                <div className="card-challenge relative pt-12 mt-6 overflow-visible">
                  <div className="absolute -top-3 left-8 px-4 py-2 bg-gray-600 text-white rounded-full text-sm font-semibold z-10 shadow-md">
                    Your Team Today
                  </div>
                  <div className="icon-container mb-6">
                    <AlertTriangle className="h-6 w-6 icon-primary" />
                  </div>
                  <h4 className="velox-text-h3 mb-6">
                    Your Team Today
                  </h4>
                  <div className="space-y-6">
                    <div className="text-center px-4">
                      <p className="text-xl font-bold text-gray-800 mb-3 leading-tight">😓 Drowning in manual processes</p>
                      <p className="text-lg text-gray-600 font-semibold">❌ Strategic meetings cancelled (again)</p>
                    </div>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 rounded-full bg-gray-400 mt-2 flex-shrink-0" />
                        <span className="velox-text-body">Sarah: Opens laptop to 47 invoices to process</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 rounded-full bg-gray-400 mt-2 flex-shrink-0" />
                        <span className="velox-text-body">Tom: Three hours answering "where's my order?"</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 rounded-full bg-gray-400 mt-2 flex-shrink-0" />
                        <span className="velox-text-body">Maria: Two hours copying between systems</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 rounded-full bg-gray-400 mt-2 flex-shrink-0" />
                        <span className="velox-text-body">You: Strategic planning cancelled (again)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 rounded-full bg-gray-400 mt-2 flex-shrink-0" />
                        <span className="velox-text-body">Everyone: Leaves at 7 PM, further behind</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Transformation Arrow */}
              <div className="lg:col-span-2 flex justify-center animate-on-scroll" data-animation="scaleIn" style={{animationDelay: '0.3s'}}>
                <div className="transformation-arrow">
                  <ArrowRight className="h-8 w-8 text-white" />
                </div>
              </div>
              
              {/* Solution Card */}
              <div className="lg:col-span-5 animate-on-scroll overflow-visible" data-animation="fadeInRight" style={{animationDelay: '0.2s'}}>
                <div className="card-solution relative pt-12 mt-6 overflow-visible">
                  <div className="absolute -top-3 left-8 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full text-sm font-semibold z-10 shadow-md">
                    With Service-as-Software
                  </div>
                  <div className="icon-container-gradient mb-6">
                    <Target className="h-6 w-6 icon-accent" />
                  </div>
                  <h4 className="velox-text-h3 text-blue-800 mb-6">
                    Your Team Tomorrow
                  </h4>
                  <div className="space-y-6">
                    <div className="text-center px-4">
                      <p className="text-xl font-bold text-blue-800 mb-3 leading-tight">Focuses on strategic work</p>
                      <p className="text-lg text-blue-600 font-semibold">Receives processed results and analyzes trends</p>
                    </div>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <span className="velox-text-body">Opens laptop to completed work awaiting review</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <span className="velox-text-body">Reviews three exceptions needing her expertise</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <span className="velox-text-body">Leads strategic session on market expansion</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <span className="velox-text-body">Mentors junior team member on analysis</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <span className="velox-text-body">Leaves at 4 PM for daughter's recital</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Industry Quote */}
            <div className="text-center mt-16 animate-on-scroll" data-animation="fadeInUp" style={{animationDelay: '0.4s'}}>
              <div className="card-base max-w-4xl mx-auto p-8">
                <p className="text-xl italic text-gray-700 mb-4 leading-relaxed">
                  "We're entering a service as software era... customers will no longer buy software, they'll just make their own."
                </p>
                <p className="text-sm font-semibold text-gray-600">
                  — Industry Executive, BestPin Global
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Value Proposition Section */}
      <Section
        padding="xl"
        background="transparent"
        className="relative"
      >
        <Container className="relative z-10 max-w-6xl">
          <div className="text-center space-y-12">
            <div 
              className="space-y-6 animate-fadeIn"
              style={{ animationDelay: '0.1s' }}
            >
              <h2 className="velox-text-h2 text-center">
                The Service-as-Software Revolution
              </h2>
            </div>
            
            <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <div className="card-base text-center animate-on-scroll group hover:scale-105 transition-all duration-300 h-full flex flex-col" data-animation="fadeInUp" style={{animationDelay: '0.1s'}}>
                <div className="icon-container-gradient mx-auto mb-6">
                  <BarChart3 className="w-6 h-6 icon-accent" />
                </div>
                <h4 className="velox-text-h3 text-blue-800 mb-4 text-center">
                  You Describe
                </h4>
                <div className="flex-1 flex flex-col justify-between">
                  <p className="velox-text-body text-gray-700 mb-6 font-medium">Your exact process</p>
                  <p className="velox-text-caption font-semibold text-blue-600 bg-blue-50 px-3 py-2 rounded-lg mt-auto">Tell us how you work today</p>
                </div>
              </div>

              <div className="card-elevated text-center animate-on-scroll group hover:scale-105 transition-all duration-300 h-full flex flex-col" data-animation="scaleIn" style={{animationDelay: '0.2s'}}>
                <div className="icon-container-gradient mx-auto mb-6 bg-gradient-to-br from-emerald-500 to-emerald-600">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h4 className="velox-text-h3 text-blue-800 mb-4 text-center">
                  AI Creates
                </h4>
                <div className="flex-1 flex flex-col justify-between">
                  <p className="velox-text-body text-gray-700 mb-6 font-medium">Custom software in weeks</p>
                  <p className="velox-text-caption font-semibold text-emerald-600 bg-emerald-50 px-3 py-2 rounded-lg mt-auto">AI builds it specifically for you</p>
                </div>
              </div>

              <div className="card-elevated text-center animate-on-scroll group hover:scale-105 transition-all duration-300 h-full flex flex-col" data-animation="fadeInLeft" style={{animationDelay: '0.3s'}}>
                <div className="icon-container-gradient mx-auto mb-6">
                  <Zap className="w-6 h-6 icon-accent" />
                </div>
                <h4 className="velox-text-h3 text-blue-800 mb-4 text-center">
                  We Perfect
                </h4>
                <div className="flex-1 flex flex-col justify-between">
                  <p className="velox-text-body text-blue-700 mb-6 font-medium">Human oversight on every output</p>
                  <p className="velox-text-caption font-semibold text-blue-600 bg-blue-50 px-3 py-2 rounded-lg mt-auto">We ensure quality and accuracy</p>
                </div>
              </div>

              <div className="card-solution text-center animate-on-scroll group hover:scale-105 transition-all duration-300 h-full flex flex-col" data-animation="fadeInRight" style={{animationDelay: '0.4s'}}>
                <div className="icon-container-gradient mx-auto mb-6 bg-gradient-to-br from-green-500 to-green-600">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h4 className="velox-text-h3 text-blue-800 mb-4 text-center">
                  You Receive
                </h4>
                <div className="flex-1 flex flex-col justify-between">
                  <p className="velox-text-body text-blue-700 mb-6 font-medium">Guaranteed outcomes</p>
                  <p className="velox-text-caption font-semibold text-blue-600 bg-blue-50 px-3 py-2 rounded-lg mt-auto">Results, not tools to manage</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

    </div>
  )
}