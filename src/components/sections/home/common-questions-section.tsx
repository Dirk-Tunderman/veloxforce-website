"use client"

import React from "react"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { HelpCircle, CheckCircle, Zap } from "lucide-react"

export function CommonQuestionsSection() {
  return (
    <Section padding="xl" background="transparent" className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-white to-blue-50/20" />
      
      <Container className="relative z-10 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll" data-animation="fadeInUp">
          <h2 className="velox-text-h2 text-center mb-8">
            Common Questions, Honest Answers
          </h2>
        </div>

        {/* FAQ Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {[
            {
              question: "How is this different from RPA?",
              answer: "RPA breaks. Our AI adapts. Plus humans ensure perfection."
            },
            {
              question: "What about edge cases?",
              answer: "AI handles 95%, humans perfect the rest."
            },
            {
              question: "Will this work with our systems?",
              answer: "Yes. We integrate with what you have."
            },
            {
              question: "How quickly can you implement?",
              answer: "Most processes are live within 4-6 weeks."
            }
          ].map((faq, index) => (
            <div
              key={index}
              className="card-base animate-on-scroll group hover:scale-[1.02] transition-all duration-300"
              data-animation="fadeInUp"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="icon-container">
                  <HelpCircle className="w-6 h-6 icon-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="velox-text-h3 text-blue-900 mb-3 leading-tight">
                    Q: "{faq.question}"
                  </h3>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="icon-container bg-blue-100">
                  <CheckCircle className="w-6 h-6 icon-success" />
                </div>
                <div className="flex-1">
                  <p className="velox-text-body text-blue-800 font-medium">
                    A: {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Message */}
        <div className="text-center animate-on-scroll" data-animation="fadeInUp" style={{animationDelay: '0.4s'}}>
          <div className="card-solution max-w-4xl mx-auto">
            <div className="icon-container-gradient w-16 h-16 mx-auto mb-6">
              <Zap className="w-8 h-8 icon-accent" />
            </div>
            <h3 className="velox-text-h2 text-blue-900 mb-6 font-bold">
              Ready to Stop Managing Tools and Start Getting Results?
            </h3>
            <p className="velox-text-lead text-blue-800 mb-8">
              Every business process can become intelligent software. 
              The question is which one will transform your business first.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  )
}