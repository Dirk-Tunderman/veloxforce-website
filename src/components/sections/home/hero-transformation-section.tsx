"use client"

import React from "react"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  Calculator
} from "lucide-react"
import Link from "next/link"

export function HeroTransformationSection() {
  return (
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
                <span className="block text-xl md:text-2xl font-semibold text-blue-800 [text-shadow:_0_2px_6px_rgb(255_255_255_/_70%),_0_1px_2px_rgb(255_255_255_/_50%)]">AI builds you're perfect system. We run it 24/7. You receive finished work.</span>
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
  )
}