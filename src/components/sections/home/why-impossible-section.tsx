"use client"

import React from "react"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"

export function WhyImpossibleSection() {
  return (
    <Section padding="xl" background="transparent" className="relative">
      <Container className="relative z-10 max-w-4xl">
        <div className="text-center space-y-8 animate-on-scroll" data-animation="fadeInUp">
          <h2 className="velox-text-h2 text-center">
            Why This Seems Impossible (And Why It's Not)
          </h2>
          
          <div className="space-y-6 velox-text-lead text-gray-700 leading-relaxed">
            <p>
              For 20 years, software meant buying tools and adapting your processes to fit them. The idea that AI can now CREATE software tailored to your exact needs seems like science fiction.
            </p>
            
            <p>
              But here's what changed: AI can now code better than most developers. When you describe your process, AI transforms it into working software. Not in months or years. In weeks.
            </p>
            
            <p className="font-semibold text-gray-900">
              This isn't theoretical. It's happening now.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  )
}