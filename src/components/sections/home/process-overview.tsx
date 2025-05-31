"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { CheckCircle, ClipboardList, Cog } from "lucide-react"

import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"

const steps = [
  {
    icon: ClipboardList,
    title: "1. Mapping Your Chaos & Architecting Success",
    description: "The first step involves meticulously analyzing and documenting your current process, pinpointing every inefficiency, bottleneck, and point of failure. This isn't just understanding; it's creating the strategic blueprint for guaranteed automation success.",
  },
  {
    icon: Cog,
    title: "2. Automating with Intelligent Precision",
    description: "Next, advanced AI gets to work, handling up to 90% of the core workload with speed and accuracy that manual efforts simply can't match. This is where significant efficiency gains and cost reductions are unlocked.",
  },
  {
    icon: CheckCircle,
    title: "3. Perfecting with Human Expertise",
    description: "This is the critical difference. Dedicated human experts provide the ultimate quality control, manage all nuances and exceptions, and continuously refine the system. This integrated layer of human intelligence ensures the adaptability and unerring accuracy.",
  },
]

export function ProcessOverviewSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <Section padding="lg" background="muted">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            The 3-Step Method to Flawless, Human-Perfected Automation
          </h2>
          <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
            The Outcome, Not the Obstacles. Once This System is Deployed, It's Handled.
          </p>
        </div>

        <div
          ref={ref}
          className="relative"
        >
          {/* Process steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="bg-primary p-4 rounded-full mb-4 text-primary-foreground">
                  <step.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Connecting line (visible on md screens and up) */}
          <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-primary/30 z-0" />
        </div>
      </Container>
    </Section>
  )
}
