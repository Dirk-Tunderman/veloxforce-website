import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Clock, FileWarning, Gauge, Workflow, Users, Zap, LineChart, Building2, Briefcase, CheckCircle2, BrainCircuit } from "lucide-react"

import { MainLayout } from "@/components/layout/main-layout"
import { SolutionHeader } from "@/components/sections/solutions/solution-header"
import { ProblemSection } from "@/components/sections/solutions/problem-section"
import { SolutionSection } from "@/components/sections/solutions/solution-section"
import { ProofSection } from "@/components/sections/solutions/proof-section"
import { TransformationSection } from "@/components/sections/solutions/transformation-section"
import { RelatedChallengesSection } from "@/components/sections/solutions/related-challenges-section"
import { SolutionCtaSection } from "@/components/sections/solutions/solution-cta-section"
import { constructMetadata } from "@/components/seo"
import { Text } from "@/components/ui/typography"

export const metadata: Metadata = constructMetadata({
  title: "Strategic Time Drain | Reclaim Leadership Focus with Certainty",
  description: "Free yourself from operational firefighting and reclaim the strategic time needed to drive your business forward with confidence and clarity.",
  keywords: ["strategic time drain", "leadership focus", "operational drag", "business efficiency", "executive productivity"],
  pathname: "/solutions/strategic-time-drain",
})

export default function StrategicTimeDrainPage() {
  const breadcrumbItems = [
    { label: "Solutions", href: "/solutions" },
    { label: "Strategic Time Drain", href: "/solutions/strategic-time-drain", isCurrent: true },
  ]

  const painPoints = [
    {
      icon: "⏱️",
      title: "Constant Operational Firefighting",
      description: "Your days are consumed by urgent operational issues that prevent you from focusing on strategic initiatives that would drive growth and innovation.",
    },
    {
      icon: "🔄",
      title: "Decision Bottlenecks Dependent on You",
      description: "You've become the critical path for too many decisions, creating bottlenecks when you're unavailable and preventing proper delegation and scaling.",
    },
    {
      icon: "⚠️",
      title: "Strategic Initiatives That Never Launch",
      description: "Important growth projects repeatedly get delayed or abandoned because immediate operational demands continually take precedence.",
    },
  ]

  const solutionPoints = [
    {
      title: "Leadership Dependency Mapping",
      description: "The first step involves a detailed analysis of your current time allocation, identifying exactly which operational activities are consuming your strategic capacity and why they require your involvement.",
    },
    {
      title: "Intelligent Decision Architecture",
      description: "Next, we create systems that codify your decision-making parameters, allowing routine decisions to be handled automatically while ensuring complex decisions receive appropriate attention.",
    },
    {
      title: "Strategic Capacity Liberation",
      description: "Finally, we implement a hybrid operational model where AI handles the predictable elements and trained human specialists manage exceptions, freeing your time for the strategic work only you can do.",
    },
  ]

  const caseExamples = [
    {
      icon: "🏢",
      industry: "Technology Company",
      challenge: "CEO spending 70% of time on operational issues, delaying critical product roadmap decisions and market expansion.",
      solution: "Implemented leadership dependency mapping and decision architecture with hybrid execution model.",
      results: [
        "Reduced operational involvement by 65%",
        "Accelerated strategic initiatives by 40%",
        "Launched two new market expansions in 6 months"
      ]
    },
    {
      icon: "💼",
      industry: "Professional Services",
      challenge: "Managing Partner trapped in client delivery oversight, unable to focus on firm growth and partnership development.",
      solution: "Created decision codification system with AI-assisted workflow and human specialist backup.",
      results: [
        "Reclaimed 25+ hours weekly for strategic activities",
        "Increased new business development by 35%",
        "Improved client delivery consistency"
      ]
    },
    {
      icon: "👥",
      industry: "Manufacturing",
      challenge: "Operations Director constantly pulled into production issues, preventing focus on efficiency improvements and capacity planning.",
      solution: "Developed hybrid oversight system with exception-based alerting and specialized response teams.",
      results: [
        "Reduced daily operational interventions by 80%",
        "Implemented efficiency program saving $1.2M annually",
        "Completed capacity expansion 3 months ahead of schedule"
      ]
    },
  ]

  const metrics = [
    {
      icon: "⏱️",
      value: "60%",
      label: "Strategic Time Reclaimed",
      description: "Average increase in time available for high-value strategic activities.",
    },
    {
      icon: "⚡",
      value: "85%",
      label: "Decision Acceleration",
      description: "Typical improvement in operational decision velocity.",
    },
    {
      icon: "📊",
      value: "3x",
      label: "Strategic Initiative Completion",
      description: "Average increase in successful strategic project implementation.",
    },
  ]

  const transformationAreas = [
    {
      title: "Your Role: From Operator to Strategist",
      description: "Transform from being trapped in day-to-day operations to focusing on vision, strategy, and the highest-leverage activities that drive growth.",
    },
    {
      title: "Your Team: From Dependent to Empowered",
      description: "Your team shifts from constant escalation and approval-seeking to confident execution within clear parameters, with support from the hybrid system.",
    },
    {
      title: "Your Business: From Reactive to Proactive",
      description: "The organization evolves from constantly reacting to problems to proactively pursuing opportunities and implementing strategic initiatives.",
    },
    {
      title: "Your Leadership: From Tactical to Transformational",
      description: "Your leadership impact expands from solving today's problems to creating tomorrow's breakthroughs and competitive advantages.",
    },
  ]

  const relatedChallenges = [
    {
      icon: "⏱️",
      title: "High-Volume Repetitive Task Overload",
      description: "Drowning in data entry, order processing, or report generation? These manual tasks drain resources and invite errors, directly hitting your bottom line.",
      href: "/solutions/task-overload",
    },
    {
      icon: "🔄",
      title: "Complex Workflow Bottlenecks",
      description: "Are cumbersome approvals, endless email chains, and inconsistent exception handling slowing your critical workflows to a crawl?",
      href: "/solutions/workflow-bottlenecks",
    },
  ]

  return (
    <MainLayout>
      <SolutionHeader
        title="Trapped in Operational Details? Reclaim Your Strategic Focus with Certainty."
        subtitle="Once Your Leadership Capacity is Liberated by This Hybrid AI-Human Model, Expect to Reclaim 60% of Your Time for Strategic Initiatives, Accelerate Decision-Making by 85%, and Triple Your Completion Rate for Growth Projects."
        breadcrumbItems={breadcrumbItems}
      />

      <ProblemSection
        title="The Hidden Cost of Strategic Time Drain"
        description={
          <>
            <Text className="mb-4">
              As a leader, is your day consumed by operational details and firefighting, leaving no room for strategy or innovation? Do you find yourself constantly pulled into decisions that should be handled at lower levels? Are your most important strategic initiatives perpetually delayed because urgent operational matters always take precedence?
            </Text>
            <Text>
              This strategic time drain isn't just a personal productivity issue—it's a fundamental business constraint that limits growth, innovation, and competitive advantage. When leaders are trapped in operational details, the organization can only grow to the limits of their personal capacity to manage those details. The true cost isn't measured in hours lost, but in opportunities missed and growth potential unrealized.
            </Text>
          </>
        }
        painPoints={painPoints}
      />

      <SolutionSection
        title="The Breakthrough: Leadership Capacity Liberation"
        description={
          <>
            <Text className="mb-4">
              Imagine reclaiming the majority of your time for truly strategic work—focusing on growth initiatives, innovation, and building competitive advantage rather than being trapped in operational details. This isn't just a time management approach; it's a fundamental redesign of how operational decisions flow through your organization.
            </Text>
            <Text>
              Strategic time drain is eliminated through a systematic approach that combines intelligent decision architecture with human expertise, creating an operational system that delivers certainty without requiring your constant involvement.
            </Text>
          </>
        }
        solutionPoints={solutionPoints}
      />

      <ProofSection
        title="Proof: This Model Liberates Leadership Capacity"
        description="This approach to eliminating strategic time drain has transformed the leadership effectiveness and growth trajectory for organizations across industries:"
        caseExamples={caseExamples}
      />

      <TransformationSection
        title="The Transformation: From Operational Trap to Strategic Freedom"
        description="Eliminating strategic time drain does more than just free up your calendar—it fundamentally transforms your leadership impact and organizational capability:"
        metrics={metrics}
        transformationAreas={transformationAreas}
      />

      <RelatedChallengesSection
        title="Related Operational Challenges"
        description="Strategic time drain often appears alongside these related operational challenges. Explore how the same hybrid model can address these connected issues:"
        challenges={relatedChallenges}
      />

      <SolutionCtaSection
        title="Your Next Step: A Clear Path to Reclaiming Strategic Focus"
        description="Ready to transform your leadership capacity and focus on what truly drives business growth?"
        primaryCta={{
          label: "Schedule My Certainty Audit",
          href: "/contact",
        }}
        secondaryCta={{
          label: "Free Business Audit",
          href: "/tools/business-audit",
        }}
      />
    </MainLayout>
  )
}
