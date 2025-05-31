"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { ArrowRight, CheckCircle, Users, Workflow } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const serviceModels = [
  {
    icon: Workflow,
    title: "Fully Managed Automation Service",
    description: "We handle everything from implementation to ongoing management and optimization of your automated processes.",
    benefits: [
      "Zero technical expertise required from your team",
      "Complete end-to-end management of automated processes",
      "Continuous optimization and improvement",
      "Regular reporting and performance reviews",
      "Dedicated support and rapid issue resolution",
    ],
    details: "This model is ideal for organizations that want to focus entirely on their core business while we handle all aspects of the automation solution. Our team takes complete responsibility for implementation, management, monitoring, and optimization, providing you with regular reports and performance updates. You get all the benefits of advanced automation without any of the technical complexity or management overhead.",
    idealFor: [
      "Organizations with limited technical resources",
      "Businesses seeking rapid implementation",
      "Companies focused on core business priorities",
      "Situations requiring maximum operational certainty",
      "Processes with high complexity or compliance requirements"
    ]
  },
  {
    icon: Users,
    title: "Empowered Team Integration",
    description: "We implement the automation solution and train your team to manage day-to-day operations with our ongoing support.",
    benefits: [
      "Knowledge transfer and team empowerment",
      "Collaborative implementation approach",
      "Comprehensive training and documentation",
      "Ongoing technical support and guidance",
      "Regular optimization recommendations",
    ],
    details: "This model combines our expertise with your team's capabilities, creating a collaborative approach to automation. We implement the solution and provide comprehensive training and documentation, empowering your team to handle day-to-day operations. Our experts remain available for ongoing support, troubleshooting, and optimization recommendations, ensuring your team has the resources they need to succeed.",
    idealFor: [
      "Organizations with existing technical capabilities",
      "Businesses seeking to build internal expertise",
      "Companies with a culture of continuous improvement",
      "Situations requiring deep integration with existing teams",
      "Processes that benefit from internal ownership"
    ]
  },
]

export function ServiceModelsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <Section padding="lg">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Service Models
          </h2>
          <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
            Flexible engagement options to suit your business needs
          </p>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {serviceModels.map((model, index) => (
            <motion.div
              key={model.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col">
                <CardHeader>
                  <div className="bg-primary/10 p-2 rounded-full w-fit mb-4">
                    <model.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{model.title}</CardTitle>
                  <CardDescription className="text-base">
                    {model.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground mb-4">
                    {model.details}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium mb-2">Key Benefits:</h4>
                      <ul className="space-y-2">
                        {model.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                            <span className="text-sm">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Ideal For:</h4>
                      <ul className="space-y-2">
                        {model.idealFor.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <ArrowRight className="h-4 w-4 text-secondary mt-1 flex-shrink-0" />
                            <span className="text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="pt-4">
                  <Button variant="outline" asChild className="w-full">
                    <Link href="/contact" className="flex items-center justify-center gap-2">
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
