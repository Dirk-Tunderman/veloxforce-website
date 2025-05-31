import { Metadata } from "next"
import Link from "next/link"
import { Bot, Workflow, Shield, Zap, Users, Clock, LineChart, FileText } from "lucide-react"

import { MainLayout } from "@/components/layout/main-layout"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { constructMetadata } from "@/components/seo"

export const metadata: Metadata = constructMetadata({
  title: "Frequently Asked Questions | Veloxforce",
  description: "Find answers to common questions about Veloxforce's hybrid AI-human automation services, implementation process, and business outcomes.",
  keywords: ["FAQ", "frequently asked questions", "business automation", "process optimization", "hybrid AI-human model"],
  pathname: "/faq",
})

const faqCategories = [
  {
    icon: Bot,
    title: "Our Approach",
    questions: [
      {
        question: "What is the hybrid AI-human model?",
        answer: "The hybrid AI-human model combines the efficiency and scalability of AI automation with the judgment and adaptability of human expertise. AI handles high-volume, rule-based tasks with perfect consistency, while human specialists focus on exceptions, judgment calls, and quality assurance. This creates a system that delivers both the efficiency of automation and the adaptability of human intelligence."
      },
      {
        question: "How is this different from other automation solutions?",
        answer: "Unlike pure AI solutions that struggle with exceptions and lack contextual understanding, or purely human approaches that can't scale, our hybrid model gives you the best of both worlds. We transform your proven processes into automated, scalable operations while preserving the human judgment that ensures quality and handles exceptions. This approach delivers certainty of outcomes that neither AI nor humans alone can achieve."
      },
      {
        question: "Do we need technical expertise on our team?",
        answer: "No. Our approach is specifically designed to eliminate the need for technical expertise on your side. We handle all implementation, management, and optimization, providing you with a complete solution rather than just software tools. This allows your team to focus on their core responsibilities while still benefiting from advanced automation."
      },
    ]
  },
  {
    icon: Workflow,
    title: "Implementation Process",
    questions: [
      {
        question: "How long does implementation take?",
        answer: "Implementation timelines vary based on the complexity of your processes, but most solutions begin delivering value within 4-6 weeks. We use a phased approach that allows you to see ROI at each step rather than waiting for a complete transformation. This incremental approach reduces risk and accelerates time-to-value."
      },
      {
        question: "What's involved in getting started?",
        answer: "The process begins with a comprehensive assessment of your current operations to identify automation opportunities. We then design a tailored solution, implement it in phases, and provide ongoing optimization. Throughout this process, we work closely with your team to ensure the solution meets your specific needs and delivers the expected outcomes."
      },
      {
        question: "How much of our team's time is required during implementation?",
        answer: "We've designed our implementation process to minimize the burden on your team. Typically, we need 2-4 hours per week from key stakeholders during the initial assessment and design phases, and then 1-2 hours per week during implementation. Our goal is to deliver transformation with minimal disruption to your ongoing operations."
      },
    ]
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    questions: [
      {
        question: "How do you ensure data security?",
        answer: "We implement enterprise-grade security measures at every level of our solution. This includes end-to-end encryption, secure access controls, regular security audits, and compliance with industry standards like SOC 2 and GDPR. We also provide detailed documentation of our security practices and can work with your IT team to ensure alignment with your internal security requirements."
      },
      {
        question: "Can your solutions be compliant with industry regulations?",
        answer: "Yes. Our solutions are designed to maintain compliance with relevant industry regulations. We have experience implementing compliant solutions in highly regulated industries including financial services, healthcare, and legal services. During the assessment phase, we identify all applicable compliance requirements and ensure they're built into the solution architecture."
      },
      {
        question: "Who has access to our data?",
        answer: "Access to your data is strictly limited to the specific team members working on your implementation and the human specialists involved in your process execution. All team members are bound by confidentiality agreements, and we implement role-based access controls to ensure data is only accessible to those who need it for their specific responsibilities."
      },
    ]
  },
  {
    icon: LineChart,
    title: "Results & ROI",
    questions: [
      {
        question: "What kind of ROI can we expect?",
        answer: "Most clients see 40-60% cost reduction in automated processes, with 3x faster execution times. Typical payback periods range from 3-6 months, with ongoing improvements as the system optimizes over time. Beyond direct cost savings, clients also benefit from improved quality, faster response times, and the ability to scale operations without proportional headcount increases."
      },
      {
        question: "How do you measure success?",
        answer: "We establish clear, measurable KPIs at the beginning of each engagement, tailored to your specific business objectives. These typically include operational metrics (processing time, error rates, throughput) and business outcomes (cost savings, revenue impact, customer satisfaction). We provide regular reporting on these metrics and continuously optimize the solution to improve results."
      },
      {
        question: "What happens if we don't see the expected results?",
        answer: "Our approach is designed to deliver certain outcomes, and we stand behind our results. If a solution isn't performing as expected, we'll work with you to identify the root causes and make necessary adjustments at no additional cost. This commitment to outcomes rather than just delivering software is a core part of our value proposition."
      },
    ]
  },
]

export default function FaqPage() {
  return (
    <MainLayout>
      <Section padding="lg" background="primary">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <Heading level="1" className="text-white mb-6">
              Frequently Asked Questions
            </Heading>
            <Text variant="lead" className="text-primary-foreground/90">
              Find answers to common questions about our hybrid AI-human approach, implementation process, and the results you can expect.
            </Text>
          </div>
        </Container>
      </Section>

      <Section padding="lg">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-1">
              <div className="sticky top-24 space-y-4">
                <Heading level="2" className="text-xl mb-4">
                  Categories
                </Heading>
                {faqCategories.map((category, index) => (
                  <Link 
                    key={index} 
                    href={`#${category.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="flex items-center gap-2 p-2 rounded-md hover:bg-muted transition-colors"
                  >
                    <category.icon className="h-5 w-5 text-primary" />
                    <Text>{category.title}</Text>
                  </Link>
                ))}
              </div>
            </div>
            
            <div className="md:col-span-3 space-y-12">
              {faqCategories.map((category, index) => (
                <div 
                  key={index} 
                  id={category.title.toLowerCase().replace(/\s+/g, '-')}
                  className="scroll-mt-24"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <category.icon className="h-5 w-5 text-primary" />
                    </div>
                    <Heading level="2" className="text-2xl">
                      {category.title}
                    </Heading>
                  </div>
                  
                  <Accordion type="single" collapsible className="w-full">
                    {category.questions.map((faq, faqIndex) => (
                      <AccordionItem key={faqIndex} value={`item-${index}-${faqIndex}`}>
                        <AccordionTrigger className="text-lg font-medium">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent>
                          <Text className="text-muted-foreground">
                            {faq.answer}
                          </Text>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
              
              <div className="bg-muted rounded-lg p-6 mt-12">
                <Heading level="2" className="text-xl mb-4">
                  Still Have Questions?
                </Heading>
                <Text className="text-muted-foreground mb-6">
                  If you couldn't find the answer to your question, our team is here to help. Contact us for personalized assistance.
                </Text>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild>
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/tools/business-audit">Try Our Business Audit</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </MainLayout>
  )
}
