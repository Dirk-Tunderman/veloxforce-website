"use client"

import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Button } from "@/components/ui/button"
import { Target, BarChart3, Clock, CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"

export function PersonalizedNextStepsSection() {
  const { ref: titleRef, isVisible: titleVisible } = useIntersectionObserver({ threshold: 0.3 })
  const { ref: cardRef, isVisible: cardVisible } = useIntersectionObserver({ threshold: 0.2 })

  return (
    <Section padding="xl" background="light-to-white">
      <Container className="max-w-5xl">
        {/* Section Header */}
        <div 
          ref={titleRef as any}
          className={`text-center mb-16 transition-all duration-800 ease-out ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="velox-text-h1-premium mb-6">
            Discover Your Automation Readiness
          </h2>
          <p className="velox-text-lead max-w-4xl mx-auto text-gray-700">
            Whether you're just exploring automation or ready to scale, our assessment reveals exactly where you stand and what's possible for your business.
          </p>
        </div>

        {/* Main Assessment Card */}
        <div 
          ref={cardRef as any}
          className={`card-solution max-w-4xl mx-auto transition-all duration-1000 ease-out ${
            cardVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          {/* Card Header */}
          <div className="text-center mb-8">
            <div className="icon-container-gradient mx-auto mb-4">
              <Target className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="velox-text-h2 text-blue-800 mb-4">
              8-Minute Business Assessment
            </h3>
            <p className="text-xl text-blue-700 font-medium">
              Get a personalized readiness score and transformation roadmap
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-10">
            <div className="text-center">
              <div className="icon-container mx-auto mb-4">
                <BarChart3 className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Your Readiness Score</h4>
              <p className="text-sm text-gray-700">See exactly how ready your business is for automation</p>
            </div>
            
            <div className="text-center">
              <div className="icon-container mx-auto mb-4">
                <CheckCircle className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">ROI Calculation</h4>
              <p className="text-sm text-gray-700">Get estimated savings and timeline for your processes</p>
            </div>
            
            <div className="text-center">
              <div className="icon-container mx-auto mb-4">
                <Clock className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Next Steps Plan</h4>
              <p className="text-sm text-gray-700">Receive a customized roadmap for your situation</p>
            </div>
          </div>

          {/* What You'll Discover */}
          <div className="bg-blue-50 rounded-xl p-6 mb-8">
            <h4 className="font-bold text-blue-900 mb-4 text-center">What You'll Discover:</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <p className="text-blue-800 text-sm">Which processes are best suited for automation</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <p className="text-blue-800 text-sm">Potential time and cost savings for your team</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <p className="text-blue-800 text-sm">Implementation timeline and investment required</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <p className="text-blue-800 text-sm">Whether Service-as-Software is right for you</p>
              </div>
            </div>
          </div>

          {/* Main CTA */}
          <div className="text-center">
            <Button
              size="lg"
              className="relative bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-lg font-bold px-12 py-4 h-auto rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 overflow-hidden group"
              asChild
            >
              <Link href="/tools/business-audit">
                <span className="relative z-10 flex items-center gap-3">
                  Start Your Assessment
                  <ArrowRight className="w-6 h-6" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </Link>
            </Button>
            <p className="text-sm text-gray-600 mt-4">
              Takes 5 minutes • No email required • Instant results
            </p>
          </div>
        </div>

        {/* Bottom Message */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4 text-white">
            No matter where you are, we'll give you honest guidance.
          </h3>
          
          {/* Timing Section */}
          <div className="max-w-4xl mx-auto">
            <h4 className="text-xl font-semibold mb-4 text-white">
              The Truth About Timing
            </h4>
            
            <div className="grid md:grid-cols-2 gap-8 text-center">
              <div>
                <p className="font-semibold text-blue-300 mb-2">Better Times:</p>
                <ul className="space-y-1 text-blue-100">
                  <li>• Before you're drowning (proactive vs. reactive)</li>
                  <li>• When growth is accelerating (scale efficiently)</li>
                  <li>• Before hiring for routine roles (avoid commitment)</li>
                  <li>• When team morale needs a boost (remove drudgery)</li>
                </ul>
              </div>
              
              <div>
                <p className="font-semibold text-gray-300 mb-2">Worse Times:</p>
                <ul className="space-y-1 text-gray-300">
                  <li>• During major pivot or restructuring</li>
                  <li>• When processes are still experimental</li>
                  <li>• If cash flow is unpredictable</li>
                  <li>• Before product-market fit</li>
                </ul>
              </div>
            </div>
            
            <p className="text-xl font-semibold mt-6 text-center text-white">
              The Question: Are you ready to lead differently?
            </p>
          </div>
        </div>
      </Container>
    </Section>
  )
}