import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"


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
  title: "Workflow Bottlenecks | Streamline Complex Processes with Certainty",
  description: "Eliminate cumbersome approvals, endless email chains, and inconsistent exception handling that slow your critical workflows to a crawl.",
  keywords: ["workflow bottlenecks", "process automation", "approval workflows", "business efficiency", "workflow optimization"],
  pathname: "/solutions/workflow-bottlenecks",
})

export default function WorkflowBottlenecksPage() {
  const breadcrumbItems = [
    { label: "Solutions", href: "/solutions" },
    { label: "Workflow Bottlenecks", href: "/solutions/workflow-bottlenecks", isCurrent: true },
  ]

  const painPoints = [
    {
      icon: "Clock",
      title: "Approval Delays Paralyzing Progress",
      description: "Multi-step approval processes that take days or weeks, creating bottlenecks that delay critical business operations and frustrate both employees and customers.",
    },
    {
      icon: "RefreshCw",
      title: "Inconsistent Exception Handling",
      description: "When processes encounter exceptions, they often require manual intervention with no standardized approach, leading to inconsistent outcomes and further delays.",
    },
    {
      icon: "AlertTriangle",
      title: "Information Silos and Communication Gaps",
      description: "Critical information trapped in email chains, chat threads, or individual knowledge, making it inaccessible to those who need it to move workflows forward.",
    },
  ]

  const solutionPoints = [
    {
      title: "Intelligent Workflow Mapping",
      description: "The first step involves documenting your current workflows in detail, identifying every decision point, approval step, and exception scenario to create a comprehensive map of your process ecosystem.",
    },
    {
      title: "Strategic Automation Implementation",
      description: "Next, intelligent automation is applied to the appropriate workflow segments, with particular focus on approval routing, status tracking, and exception flagging for human attention.",
    },
    {
      title: "Human-Guided Exception Management",
      description: "For complex decisions and exceptions that require judgment, human experts provide oversight and intervention, ensuring that automation doesn't create new bottlenecks when unusual situations arise.",
    },
  ]

  const caseExamples = [
    {
      icon: "Building2",
      industry: "Financial Services",
      challenge: "A 12-step approval process for client onboarding was taking 3+ weeks, causing client frustration and lost business.",
      solution: "Implemented intelligent workflow automation with human oversight for complex compliance decisions.",
      results: [
        "Reduced onboarding time from 3 weeks to 3 days",
        "Improved compliance accuracy by 35%",
        "Increased new client capacity by 60%"
      ]
    },
    {
      icon: "Briefcase",
      industry: "Legal Services",
      challenge: "Document review and approval workflows were creating significant bottlenecks in case preparation.",
      solution: "Created automated routing and review system with human expert final verification.",
      results: [
        "Reduced document processing time by 70%",
        "Eliminated email-based approval chains",
        "Improved case preparation timeline accuracy"
      ]
    },
    {
      icon: "Users",
      industry: "Healthcare Administration",
      challenge: "Insurance verification and prior authorization processes were delaying patient care and creating administrative backlogs.",
      solution: "Implemented hybrid workflow system that automated standard cases and flagged exceptions for specialist review.",
      results: [
        "Reduced authorization wait times by 65%",
        "Decreased administrative staff workload by 40%",
        "Improved patient satisfaction scores by 28%"
      ]
    },
  ]

  const metrics = [
    {
      icon: "Clock",
      value: "75%",
      label: "Faster Approvals",
      description: "Average reduction in approval cycle times across complex workflows.",
    },
    {
      icon: "Zap",
      value: "90%",
      label: "Exception Resolution",
      description: "Percentage of workflow exceptions that are properly identified and resolved.",
    },
    {
      icon: "BarChart3",
      value: "45%",
      label: "Operational Cost Reduction",
      description: "Typical cost savings from streamlined workflow management.",
    },
  ]

  const transformationAreas = [
    {
      title: "From Friction to Flow",
      description: "Workflows that once created frustration and delays become smooth, predictable processes that stakeholders can trust to deliver consistent results.",
    },
    {
      title: "From Opacity to Visibility",
      description: "Replace black-box processes with transparent workflows where status, bottlenecks, and progress are visible to all stakeholders in real-time.",
    },
    {
      title: "From Rigidity to Adaptability",
      description: "Transform brittle workflows that break under pressure into flexible systems that can adapt to changing conditions while maintaining efficiency.",
    },
    {
      title: "From Reactive to Proactive Management",
      description: "Shift from constantly fighting workflow fires to proactively optimizing processes based on performance data and predictive insights.",
    },
  ]

  const relatedChallenges = [
    {
      icon: "Clock",
      title: "High-Volume Repetitive Task Overload",
      description: "Drowning in data entry, order processing, or report generation? These manual tasks drain resources and invite errors, directly hitting your bottom line.",
      href: "/solutions/task-overload",
    },
    {
      icon: "AlertTriangle",
      title: "Operational Drag & Strategic Time Drain",
      description: "As a leader, is your day consumed by operational details and firefighting, leaving no room for strategy or innovation?",
      href: "/solutions/strategic-time-drain",
    },
  ]

  return (
    <MainLayout>
      <SolutionHeader
        title="Cumbersome Workflows Slowing You Down? Streamline Complex Processes with Certainty."
        subtitle="Once Your Complex Approval Chains and Exception-Handling Processes Are Transformed by This Hybrid AI-Human Model, Expect 75% Faster Cycle Times, 90% Reduction in Bottlenecks, and a New Level of Operational Clarity."
        breadcrumbItems={breadcrumbItems}
      />

      <ProblemSection
        title="The Paralyzing Impact of Workflow Bottlenecks"
        description={
          <>
            <Text className="mb-4">
              Is your business struggling with approval processes that take days instead of hours? Do exceptions to standard procedures create confusion and delays? Are critical decisions trapped in email chains or dependent on specific individuals who become bottlenecks themselves?
            </Text>
            <Text>
              These workflow bottlenecks aren't just frustrating—they're actively undermining your business performance. They create unpredictable timelines, inconsistent outcomes, and a culture of workarounds that further degrades process integrity. The cost isn't just in delayed outcomes, but in diminished trust, both internally and with customers who experience the effects of your bottlenecked operations.
            </Text>
          </>
        }
        painPoints={painPoints}
      />

      <SolutionSection
        title="The Breakthrough: Intelligent Workflow Optimization"
        description={
          <>
            <Text className="mb-4">
              Imagine your most complex workflows running smoothly, with approvals happening in hours instead of days, exceptions handled consistently, and complete visibility into process status at every step. This isn't a fantasy—it's the standard outcome delivered through this specialized Hybrid AI-Human workflow optimization model.
            </Text>
            <Text>
              Workflow bottlenecks are eliminated through a systematic approach that combines intelligent process automation with human expertise at critical decision points, delivering predictable outcomes without sacrificing quality or compliance.
            </Text>
          </>
        }
        solutionPoints={solutionPoints}
      />

      <ProofSection
        title="Proof: This Model Transforms Complex Workflows"
        description="This approach to conquering workflow bottlenecks has been successfully applied across industries where complex processes and approval chains were creating significant operational drag:"
        caseExamples={caseExamples}
      />

      <TransformationSection
        title="The Transformation: From Bottlenecked to Breakthrough Performance"
        description="Eliminating workflow bottlenecks does more than just speed up processes—it fundamentally transforms how your organization operates:"
        metrics={metrics}
        transformationAreas={transformationAreas}
      />

      <RelatedChallengesSection
        title="Related Operational Challenges"
        description="Workflow bottlenecks often appear alongside these related operational challenges. Explore how the same hybrid model can address these connected issues:"
        challenges={relatedChallenges}
      />

      <SolutionCtaSection
        title="Your Next Step: A Clear Path to Eliminating Workflow Bottlenecks"
        description="Ready to transform your complex workflows into streamlined, efficient processes?"
        primaryCta={{
          label: "Schedule My Certainty Audit",
          href: "/contact",
        }}
        secondaryCta={{
          label: "Free Process Audit",
          href: "/tools/business-audit",
        }}
      />
    </MainLayout>
  )
}
