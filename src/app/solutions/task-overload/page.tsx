import { Metadata } from "next"

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
  title: "Drowning in Data Entry & Repetitive Tasks? Certain Relief & Unleashed Team Potential Awaits",
  description: "Once Your High-Volume Manual Workflows Are Automated by This Hybrid AI-Human Model, Expect a 90% Reduction in Tedious Labor, Tripled Throughput, and a Newfound Focus on Strategic Growth.",
  keywords: ["data entry automation", "repetitive tasks", "workflow automation", "task overload", "operational efficiency"],
  pathname: "/solutions/task-overload",
})

export default function TaskOverloadPage() {
  const breadcrumbItems = [
    { label: "Solutions", href: "/solutions" },
    { label: "Task Overload", href: "/solutions/task-overload", isCurrent: true },
  ]

  const painPoints = [
    {
      icon: "Clock",
      title: "Skilled Employees Chained to Mind-Numbing Tasks",
      description: "Your valuable team members spend hours on data entry, order processing, and repetitive report generation instead of using their expertise for higher-value work.",
    },
    {
      icon: "AlertTriangle",
      title: "Rising Error Rates as Fatigue Sets In",
      description: "As manual task volume increases, so do mistakes. Each error creates costly ripple effects throughout your operations.",
    },
    {
      icon: "DollarSign",
      title: "Ballooning Overtime Costs Just to Keep Pace",
      description: "Your team works longer hours just to maintain the status quo, driving up labor costs while morale plummets.",
    },
  ]

  const solutionPoints = [
    {
      title: "Meticulously Mapping Every Step",
      description: "The model first requires understanding the DNA of your current workflow – every input, decision point, and output for tasks like invoice data capture, customer data entry, and inventory updates.",
    },
    {
      title: "Deploying Targeted AI",
      description: "Intelligent automation then takes over the relentless, rule-based execution, processing thousands of transactions with unwavering accuracy and speed.",
    },
    {
      title: "Ensuring Human-Perfected Quality",
      description: "For the critical 10% – the anomalies, the final checks, the nuanced data interpretations – dedicated human experts are seamlessly integrated. This guarantees the reliability that pure AI struggles with and prevents costly errors before they happen.",
    },
  ]

  const caseExamples = [
    {
      icon: "Truck",
      industry: "Logistics Company",
      challenge: "Swamped with manual freight documentation, leading to delays and errors.",
      solution: "Implemented hybrid automation for document processing with human verification for exceptions.",
      results: [
        "Processing time cut by 85%",
        "Error rates reduced by over 90%",
        "Handled 2x increase in shipment volume without adding staff"
      ]
    },
    {
      icon: "Building2",
      industry: "E-commerce Business",
      challenge: "Struggled with daily reconciliation of thousands of transactions.",
      solution: "Automated system with human verification for exceptions and edge cases.",
      results: [
        "Reconciliation completed in under an hour",
        "Finance team freed by 15 hours weekly",
        "Improved cash flow visibility and forecasting"
      ]
    },
    {
      icon: "Briefcase",
      industry: "Professional Services",
      challenge: "Consultants spending 25% of time on repetitive pre-client data compilation.",
      solution: "Automated data gathering and report generation with human quality control.",
      results: [
        "Increased billable hours by 20%",
        "Improved report consistency and quality",
        "Faster client response times"
      ]
    },
  ]

  const metrics = [
    {
      icon: "Clock",
      value: "90%",
      label: "Reduction in Manual Tasks",
      description: "Typical reduction in time spent on repetitive data entry and processing tasks.",
    },
    {
      icon: "Zap",
      value: "3x",
      label: "Faster Processing",
      description: "Average increase in throughput speed for automated workflows.",
    },
    {
      icon: "BarChart3",
      value: "40%",
      label: "Cost Reduction",
      description: "Typical operational cost savings for high-volume repetitive processes.",
    },
  ]

  const transformationAreas = [
    {
      title: "Your Team: From Data Processors to Strategic Contributors",
      description: "Team members shift from repetitive data entry to higher-value work that leverages their expertise, boosting morale and innovation.",
    },
    {
      title: "Your Operations: Lean, Agile, and Scalable",
      description: "Operations become capable of handling immense growth without proportional increases in headcount or stress.",
    },
    {
      title: "You, The Leader: From Process Manager to Growth Architect",
      description: "You transition from managing bottlenecks to orchestrating a high-performance engine, with freedom and data-driven insights to focus on strategic growth.",
    },
    {
      title: "Your Business: Built for Scale and Opportunity",
      description: "Your business transforms from being constrained by manual processes to being empowered by efficient, scalable operations ready to seize new opportunities.",
    },
  ]

  const relatedChallenges = [
    {
      icon: "RefreshCw",
      title: "Complex Workflow Bottlenecks",
      description: "Are cumbersome approvals, endless email chains, and inconsistent exception handling slowing your critical workflows to a crawl?",
      href: "/solutions/workflow-bottlenecks",
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
        title="Drowning in Data Entry & Repetitive Tasks? Certain Relief & Unleashed Team Potential Awaits."
        subtitle="Once Your High-Volume Manual Workflows Are Automated by This Hybrid AI-Human Model, Expect a 90% Reduction in Tedious Labor, Tripled Throughput, and a Newfound Focus on Strategic Growth."
        breadcrumbItems={breadcrumbItems}
      />

      <ProblemSection
        title="The Crushing Weight of Repetitive Task Overload"
        description={
          <>
            <Text className="mb-4">
              Is your team buried under an avalanche of daily data entry, order processing, client record updates, or repetitive report generation? You see the signs: skilled employees chained to mind-numbing tasks, rising error rates as fatigue sets in, overtime costs ballooning just to keep pace, and crucial strategic projects continually pushed aside.
            </Text>
            <Text>
              This isn't just 'the cost of doing business'; it's a silent killer of productivity, morale, and your company's ability to scale. You don't want to keep throwing more people at the problem, only to see inefficiencies multiply. You don't want to sacrifice quality for speed, or vice-versa. And as a leader, you certainly don't want your days consumed by managing the fallout from these overwhelmed processes.
            </Text>
          </>
        }
        painPoints={painPoints}
      />

      <SolutionSection
        title="The Breakthrough: A Model for Certainty Over Task Overload"
        description={
          <>
            <Text className="mb-4">
              Imagine a reality where 90% of this high-volume, repetitive work vanishes from your team's plate, executed flawlessly and at triple the speed. This isn't a far-off dream; it's the standard outcome delivered through this specialized Hybrid AI-Human automation model.
            </Text>
            <Text>
              'Task Overload' is conquered by a systematic approach that combines intelligent automation with human expertise, delivering guaranteed results without requiring any technical know-how on your part.
            </Text>
          </>
        }
        solutionPoints={solutionPoints}
      />

      <ProofSection
        title="Proof: This Model Delivers Relief & Results"
        description="This systematic approach to conquering task overload isn't confined to one type of business; it's about solving a pattern of inefficiency. Here's how it's transformed operations across different industries:"
        caseExamples={caseExamples}
      />

      <TransformationSection
        title="The Transformation: From Buried in Tasks to Built for Scale"
        description="Eliminating high-volume task overload does more than just save money—though a typical outcome is a direct operational cost reduction of 40-60% for these processes. It fundamentally transforms your business:"
        metrics={metrics}
        transformationAreas={transformationAreas}
      />

      <RelatedChallengesSection
        title="Related Operational Challenges"
        description="Task overload often appears alongside these related operational challenges. Explore how the same hybrid model can address these connected issues:"
        challenges={relatedChallenges}
      />

      <SolutionCtaSection
        title="Your Next Step: A Clear Path to Ending Task Overload with Certainty"
        description="Ready to stop the drain of repetitive tasks and unlock your business's true capacity?"
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
