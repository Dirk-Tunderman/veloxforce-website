"use client"

import { useState } from "react"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export function DigitalWorkforceHero() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <Section
      padding="lg"
      className="bg-gradient-to-br from-blue-50 to-white min-h-[40vh] flex items-center"
    >
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <Heading
            level="1"
            className="velox-text-h1 mb-6 text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900"
          >
            Your Complete Digital Workforce Catalog
          </Heading>
          <Text className="velox-text-body text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            See exactly which tasks become automated services. Browse by department or search specific processes.
          </Text>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Type any repetitive task..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-4 text-lg border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 w-full"
              />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
