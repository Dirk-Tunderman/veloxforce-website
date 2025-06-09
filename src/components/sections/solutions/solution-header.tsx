"use client"

import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

interface BreadcrumbItem {
  label: string
  href: string
  isCurrent?: boolean
}

interface SolutionHeaderProps {
  title: string
  subtitle: string
  breadcrumbItems: BreadcrumbItem[]
}

export function SolutionHeader({ title, subtitle, breadcrumbItems }: SolutionHeaderProps) {
  return (
    <Section padding="xl" background="white-to-light" className="min-h-[80vh] flex items-center">
      <Container className="max-w-6xl">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          {breadcrumbItems.map((item, index) => (
            <div key={item.href} className="flex items-center">
              {index > 0 && <ChevronRight className="w-4 h-4 mx-2" />}
              {item.isCurrent ? (
                <span className="text-blue-600 font-medium">{item.label}</span>
              ) : (
                <Link href={item.href} className="hover:text-blue-600 transition-colors">
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </nav>

        <div className="text-center space-y-8">
          <div className="space-y-6">
            <Heading level="1" className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              {title}
            </Heading>
            
            <Text className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
              {subtitle}
            </Text>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="velox-cta-primary text-lg font-semibold px-8 py-4 h-auto rounded-xl"
              asChild
            >
              <Link href="/tools/business-audit">
                Free Process Audit
              </Link>
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="text-lg font-semibold px-8 py-4 h-auto rounded-xl border-2 border-blue-600 text-blue-600 hover:bg-blue-50"
              asChild
            >
              <Link href="/contact">
                Schedule Consultation
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  )
}
