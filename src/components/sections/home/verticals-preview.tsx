"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { ArrowRight, Building2, Briefcase, Truck } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"

const verticals = [
  {
    icon: Truck,
    title: "Logistics & Supply Chain",
    description: "A mid-sized logistics company was swamped with manual freight documentation, leading to delays and errors. Once this model was implemented, processing time was cut by 85%, and error rates diminished by over 90%.",
    href: "/verticals/logistics",
  },
  {
    icon: Building2,
    title: "Financial Services & Accounting",
    description: "An e-commerce business struggled with daily reconciliation of thousands of transactions. The automated system now completes this in under an hour, with human verification for exceptions, freeing their finance team by 15 hours a week.",
    href: "/verticals/financial-services",
  },
  {
    icon: Briefcase,
    title: "Professional Services",
    description: "A professional services firm found its consultants spending nearly 25% of their time on repetitive pre-client data compilation. Automation of this process boosted their billable hour capacity and improved report consistency.",
    href: "/verticals/professional-services",
  },
]

export function VerticalsPreviewSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <Section padding="lg" background="muted">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            The Transformation: From Buried in Tasks to Built for Scale
          </h2>
          <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
            This systematic approach isn't confined to one type of business; it's about solving a pattern of inefficiency across industries
          </p>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {verticals.map((vertical, index) => (
            <motion.div
              key={vertical.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col">
                <CardHeader>
                  <div className="bg-primary/10 p-2 rounded-full w-fit mb-4">
                    <vertical.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{vertical.title}</CardTitle>
                  <CardDescription className="text-base">
                    {vertical.description}
                  </CardDescription>
                </CardHeader>
                <CardFooter className="mt-auto pt-4">
                  <Button variant="outline" asChild className="w-full">
                    <Link href={vertical.href} className="flex items-center justify-center gap-2">
                      Learn More <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
