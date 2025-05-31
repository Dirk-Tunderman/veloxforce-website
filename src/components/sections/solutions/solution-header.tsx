"use client"

import { motion } from "framer-motion"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Breadcrumb } from "@/components/ui/breadcrumb"
import { Heading, Text } from "@/components/ui/typography"
import { FadeIn, SlideUp } from "@/components/ui/animated-element"

interface SolutionHeaderProps {
  title: string
  subtitle: string
  breadcrumbItems: Array<{ label: string; href: string; isCurrent?: boolean }>
}

export function SolutionHeader({ title, subtitle, breadcrumbItems }: SolutionHeaderProps) {
  return (
    <Section padding="lg" background="primary" className="relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
      </div>

      {/* Animated gradient overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 opacity-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1.5 }}
      />

      {/* Animated dots */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-white/20"
            initial={{
              x: `${Math.random() * 100}%`,
              y: `${Math.random() * 100}%`,
              opacity: 0.1 + Math.random() * 0.3
            }}
            animate={{
              x: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
              y: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
            }}
            transition={{
              duration: 15 + Math.random() * 20,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear"
            }}
          />
        ))}
      </div>

      <Container className="relative z-10">
        <FadeIn delay={0.1} className="mb-6 text-primary-foreground/80">
          <Breadcrumb items={breadcrumbItems} />
        </FadeIn>

        <div className="max-w-4xl">
          <SlideUp delay={0.2} duration={0.6}>
            <Heading level="1" className="text-white mb-6" highlight>
              {title}
            </Heading>
          </SlideUp>

          <SlideUp delay={0.4} duration={0.6}>
            <Text variant="lead" className="text-primary-foreground/90">
              {subtitle}
            </Text>
          </SlideUp>
        </div>
      </Container>
    </Section>
  )
}
