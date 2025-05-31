"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { CheckCircle, ClipboardList, Cog } from "lucide-react"

import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const steps = [
  {
    icon: ClipboardList,
    title: "1. Process DNA Mapping",
    description: "Every effective process has a unique DNA—the critical decision points, exception handling patterns, and quality controls that make it work. We meticulously map this DNA to preserve what makes your processes effective while identifying opportunities for enhancement.",
    details: [
      "Comprehensive process mapping and analysis",
      "Identification of decision points and business rules",
      "Exception pattern recognition and classification",
      "Quality control mechanism documentation",
      "Automation opportunity assessment",
    ],
    outcomes: [
      "Complete understanding of your process ecosystem",
      "Clear identification of automation opportunities",
      "Preservation of critical business logic",
      "Detailed ROI projections for each process",
      "Prioritized transformation roadmap"
    ]
  },
  {
    icon: Cog,
    title: "2. Intelligent Automation Design",
    description: "Using the process DNA map, we design an automation architecture that preserves the essential elements while eliminating inefficiencies. This includes identifying which components are best handled by AI and which require human expertise.",
    details: [
      "AI component selection and configuration",
      "Human touchpoint design and integration",
      "Exception routing and handling mechanisms",
      "Quality assurance checkpoint implementation",
      "Performance monitoring and analytics setup",
    ],
    outcomes: [
      "Optimized workflow with clear AI/human division",
      "Seamless handoffs between automated and human components",
      "Robust exception handling mechanisms",
      "Built-in quality controls and verification",
      "Complete visibility into process performance"
    ]
  },
  {
    icon: CheckCircle,
    title: "3. Human-AI Integration",
    description: "We create seamless handoffs between automated components and human specialists, ensuring that each handles the work they're best suited for. This includes designing exception routing, approval workflows, and quality assurance mechanisms.",
    details: [
      "Human specialist training and onboarding",
      "AI-to-human handoff protocol implementation",
      "Exception management dashboard deployment",
      "Quality control and verification processes",
      "Continuous feedback loop establishment",
    ],
    outcomes: [
      "Optimal resource allocation (AI vs. human)",
      "Consistent handling of all process scenarios",
      "Rapid resolution of exceptions and edge cases",
      "Continuous system improvement over time",
      "Scalable capacity without quality compromise"
    ]
  },
  {
    icon: CheckCircle,
    title: "4. Continuous Optimization",
    description: "The system continuously learns and improves through both AI adaptation and human feedback loops. This creates a virtuous cycle where the automation becomes increasingly effective while human experts focus on increasingly sophisticated challenges.",
    details: [
      "Performance analytics and KPI tracking",
      "Pattern identification in exceptions and edge cases",
      "AI model refinement and enhancement",
      "Process adjustment based on operational data",
      "Regular business impact assessment",
    ],
    outcomes: [
      "Increasing automation coverage over time",
      "Continuous efficiency and quality improvements",
      "Adaptation to changing business conditions",
      "Ongoing ROI enhancement",
      "Strategic insights from operational patterns"
    ]
  }
]

export function ProcessDeepDiveSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <Section padding="lg" background="muted">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Our Process Deep Dive
          </h2>
          <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
            A systematic approach to transforming your business operations
          </p>
        </div>

        <div ref={ref}>
          <Tabs defaultValue="step1" className="w-full">
            <TabsList className="grid grid-cols-4 mb-8">
              <TabsTrigger value="step1">Step 1</TabsTrigger>
              <TabsTrigger value="step2">Step 2</TabsTrigger>
              <TabsTrigger value="step3">Step 3</TabsTrigger>
              <TabsTrigger value="step4">Step 4</TabsTrigger>
            </TabsList>
            {steps.map((step, index) => (
              <TabsContent key={`step${index + 1}`} value={`step${index + 1}`}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5 }}
                  className="bg-background rounded-lg p-6 shadow-sm"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-primary p-2 rounded-full text-primary-foreground mt-1">
                      <step.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-2xl font-bold">{step.title}</h3>
                  </div>
                  <p className="text-muted-foreground mb-6">{step.description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="border-t pt-4">
                      <h4 className="font-medium mb-2">Key Activities:</h4>
                      <ul className="space-y-2">
                        {step.details.map((detail, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                            <span className="text-sm">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="border-t pt-4">
                      <h4 className="font-medium mb-2">Key Outcomes:</h4>
                      <ul className="space-y-2">
                        {step.outcomes.map((outcome, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-secondary mt-1 flex-shrink-0" />
                            <span className="text-sm">{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </Container>
    </Section>
  )
}
