"use client"

import { useRef, useState, useEffect } from "react"
import { useInView } from "framer-motion"
import { ArrowUpRight, Users, Zap, LineChart } from "lucide-react"

import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"
import { IconByName } from "@/lib/icon-resolver"

interface Metric {
  icon: string
  value: string
  label: string
  description: string
}

interface TransformationArea {
  title: string
  description: string
}

interface TransformationSectionProps {
  title: string
  description: React.ReactNode
  metrics: Metric[]
  transformationAreas: TransformationArea[]
}

export function TransformationSection({
  title,
  description,
  metrics,
  transformationAreas
}: TransformationSectionProps) {
  const ref = useRef(null)
  const metricsRef = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const metricsInView = useInView(metricsRef, { once: true, amount: 0.1 })

  // For animated counting effect
  const [counts, setCounts] = useState<string[]>(metrics.map(() => "0"))

  useEffect(() => {
    if (metricsInView) {
      metrics.forEach((metric, index) => {
        const targetValue = parseInt(metric.value.replace(/[^0-9]/g, ""))
        const duration = 2000 // ms
        const frameDuration = 1000 / 60 // 60fps
        const totalFrames = Math.round(duration / frameDuration)
        let frame = 0

        const counter = setInterval(() => {
          frame++
          const progress = frame / totalFrames
          const currentCount = Math.round(targetValue * progress)

          setCounts(prev => {
            const newCounts = [...prev]
            newCounts[index] = currentCount + (metric.value.includes("%") ? "%" : "")
            return newCounts
          })

          if (frame === totalFrames) {
            clearInterval(counter)
            setCounts(prev => {
              const newCounts = [...prev]
              newCounts[index] = metric.value
              return newCounts
            })
          }
        }, frameDuration)

        return () => clearInterval(counter)
      })
    }
  }, [metricsInView, metrics])

  return (
    <Section padding="lg" background="muted">
      <Container>
        <div
          ref={ref}
          className={`text-center mb-12 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <Heading level="2" className="mb-4">
            {title}
          </Heading>
          <Text variant="lead" className="max-w-3xl mx-auto text-muted-foreground">
            {description}
          </Text>
        </div>

        <div
          ref={metricsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
        >
          {metrics.map((metric, index) => (
            <div
              key={index}
              className={`bg-background rounded-lg p-6 border border-border shadow-sm text-center transition-all duration-700 ${
                metricsInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150 + 100}ms` }}
            >
              <div className="flex justify-center mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <IconByName name={metric.icon} className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              <Heading level="3" className="text-4xl font-bold mb-2">
                {counts[index]}
              </Heading>
              <Text className="font-medium text-lg mb-2">
                {metric.label}
              </Text>
              <Text className="text-muted-foreground">
                {metric.description}
              </Text>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {transformationAreas.map((area, index) => (
            <div
              key={index}
              className={`bg-background rounded-lg p-6 border border-border shadow-sm transition-all duration-700 ${
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150 + 500}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary/10">
                  <ArrowUpRight className="h-5 w-5 text-gray-700" />
                </div>
                <div>
                  <Heading level="3" className="text-xl mb-2">
                    {area.title}
                  </Heading>
                  <Text className="text-muted-foreground">
                    {area.description}
                  </Text>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
