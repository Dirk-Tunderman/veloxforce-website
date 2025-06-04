import Link from "next/link"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"
import { Button } from "@/components/ui/button"
import { Search, Cog, Rocket, RefreshCw, Calendar, CheckCircle } from "lucide-react"

const phases = [
  {
    phase: "Phase 1",
    title: "Discovery & Design",
    duration: "Week 1",
    subtitle: "We become experts in your process",
    icon: Search,
    color: "gray",
    days: [
      {
        period: "Day 1-2",
        title: "Process Mapping Session",
        tasks: [
          "2-hour deep dive into your current workflow",
          "Document every step, rule, and exception",
          "Identify all systems and tools involved",
          "Understand your quality standards"
        ]
      },
      {
        period: "Day 3-4",
        title: "Efficiency Analysis",
        tasks: [
          "Calculate current time and cost per task",
          "Identify automation opportunities",
          "Design optimal workflow",
          "Create ROI projections"
        ]
      },
      {
        period: "Day 5",
        title: "Solution Blueprint",
        tasks: [
          "Present your custom digital workforce design",
          "Show exactly how it will work",
          "Confirm outcomes and guarantees",
          "Get your approval to build"
        ]
      }
    ],
    yourRole: "Explain your process once",
    ourRole: "Everything else"
  },
  {
    phase: "Phase 2",
    title: "Digital Workforce Build",
    duration: "Week 2-3",
    subtitle: "We create your custom solution",
    icon: Cog,
    color: "gray",
    weeks: [
      {
        period: "Week 2",
        title: "Core Development",
        tasks: [
          "Build your digital workers using advanced technology",
          "Create exact process replication",
          "Integrate with your existing systems",
          "Set up quality checkpoints"
        ]
      },
      {
        period: "Week 3",
        title: "Testing & Refinement",
        tasks: [
          "Test with your real data",
          "Handle every edge case",
          "Optimize for speed and accuracy",
          "Ensure seamless integration"
        ]
      }
    ],
    behindScenes: [
      "Digital workers learn your rules",
      "Intelligent systems programmed",
      "Human oversight configured",
      "Performance metrics established"
    ],
    yourRole: "Provide sample data and feedback",
    ourRole: "Build, test, and perfect"
  },
  {
    phase: "Phase 3",
    title: "Launch & Handoff",
    duration: "End of Week 3",
    subtitle: "Your digital workforce goes live",
    icon: Rocket,
    color: "gray",
    launchDay: [
      "Digital workforce activated",
      "First tasks processed",
      "Results delivered to you",
      "Performance monitoring begins"
    ],
    newReality: [
      "Send work via simple interface (email, portal, or API)",
      "Digital workforce processes immediately",
      "Expert humans ensure quality",
      "You receive completed work"
    ],
    yourRole: "Start delegating",
    ourRole: "Deliver outcomes"
  },
  {
    phase: "Phase 4",
    title: "Ongoing Service Excellence",
    duration: "Week 4+",
    subtitle: "Continuous delivery and optimization",
    icon: RefreshCw,
    color: "gray",
    dailyOps: [
      "Your work gets processed 24/7",
      "Consistent quality maintained",
      "Instant scaling when needed",
      "Zero management required"
    ],
    monthlyOpt: [
      "Performance review meetings",
      "Process improvements implemented",
      "New opportunities identified",
      "ROI tracking and reporting"
    ],
    yourRole: "Delegate and forget",
    ourRole: "Deliver, optimize, guarantee"
  }
]

export function DetailedProcessSection() {
  return (
    <Section padding="xl" background="light-blue" className="bg-gray-50" id="detailed-process">
      <Container className="max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Heading level="2" className="velox-text-h2 mb-6">
            Your Journey: From Discovery to Daily Results
          </Heading>
          <Text className="velox-text-body text-xl text-gray-700 max-w-4xl mx-auto">
            Here's exactly what happens in each phase of your transformation
          </Text>
        </div>

        {/* Phases */}
        <div className="space-y-16">
          {phases.map((phase, index) => {
            const IconComponent = phase.icon

            return (
              <div key={index} className="relative">
                {/* Phase Header */}
                <div className="text-center mb-12">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center shadow-lg bg-gray-700">
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>

                  <div className="mb-4">
                    <Text className="text-sm font-bold uppercase tracking-wide mb-2 text-gray-700">
                      {phase.phase} • {phase.duration}
                    </Text>
                    <Heading level="3" className="text-3xl font-bold text-gray-900 mb-2">
                      {phase.title}
                    </Heading>
                    <Text className="text-xl text-gray-600">
                      {phase.subtitle}
                    </Text>
                  </div>
                </div>

                {/* Phase Content */}
                <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                  {/* Phase 1 - Days breakdown */}
                  {phase.days && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                      {phase.days.map((day, dayIndex) => (
                        <div key={dayIndex} className="space-y-4">
                          <div className="text-center">
                            <Text className="font-bold text-gray-700 text-sm mb-1">
                              {day.period}
                            </Text>
                            <Heading level="4" className="text-lg font-semibold text-gray-900 mb-3">
                              {day.title}
                            </Heading>
                          </div>
                          <ul className="space-y-2">
                            {day.tasks.map((task, taskIndex) => (
                              <li key={taskIndex} className="flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                                <Text className="text-sm text-gray-700">{task}</Text>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Phase 2 - Weeks breakdown */}
                  {phase.weeks && (
                    <div className="space-y-8 mb-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {phase.weeks.map((week, weekIndex) => (
                          <div key={weekIndex} className="space-y-4">
                            <div className="text-center">
                              <Text className="font-bold text-gray-700 text-sm mb-1">
                                {week.period}
                              </Text>
                              <Heading level="4" className="text-lg font-semibold text-gray-900 mb-3">
                                {week.title}
                              </Heading>
                            </div>
                            <ul className="space-y-2">
                              {week.tasks.map((task, taskIndex) => (
                                <li key={taskIndex} className="flex items-start gap-2">
                                  <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                                  <Text className="text-sm text-gray-700">{task}</Text>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>

                      {phase.behindScenes && (
                        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                          <Heading level="4" className="text-lg font-semibold text-gray-900 mb-4">
                            Behind the scenes:
                          </Heading>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {phase.behindScenes.map((item, itemIndex) => (
                              <div key={itemIndex} className="flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                                <Text className="text-sm text-gray-800">{item}</Text>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Phase 3 - Launch details */}
                  {phase.launchDay && (
                    <div className="space-y-8 mb-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                          <Heading level="4" className="text-lg font-semibold text-gray-900 mb-4">
                            Launch Day:
                          </Heading>
                          <ul className="space-y-2">
                            {phase.launchDay.map((item, itemIndex) => (
                              <li key={itemIndex} className="flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                                <Text className="text-sm text-gray-800">{item}</Text>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                          <Heading level="4" className="text-lg font-semibold text-gray-900 mb-4">
                            Your New Reality:
                          </Heading>
                          <ul className="space-y-2">
                            {phase.newReality?.map((item, itemIndex) => (
                              <li key={itemIndex} className="flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                                <Text className="text-sm text-gray-800">{item}</Text>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Phase 4 - Ongoing operations */}
                  {phase.dailyOps && (
                    <div className="space-y-8 mb-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                          <Heading level="4" className="text-lg font-semibold text-gray-900 mb-4">
                            Daily Operations:
                          </Heading>
                          <ul className="space-y-2">
                            {phase.dailyOps.map((item, itemIndex) => (
                              <li key={itemIndex} className="flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                                <Text className="text-sm text-gray-800">{item}</Text>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                          <Heading level="4" className="text-lg font-semibold text-blue-900 mb-4">
                            Monthly Optimization:
                          </Heading>
                          <ul className="space-y-2">
                            {phase.monthlyOpt?.map((item, itemIndex) => (
                              <li key={itemIndex} className="flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                                <Text className="text-sm text-blue-800">{item}</Text>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Roles Summary */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-gray-200">
                    <div className="text-center">
                      <Text className="font-semibold text-gray-900 mb-2">What you do:</Text>
                      <Text className="text-blue-600 font-medium">{phase.yourRole}</Text>
                    </div>
                    <div className="text-center">
                      <Text className="font-semibold text-gray-900 mb-2">What we do:</Text>
                      <Text className="text-green-600 font-medium">{phase.ourRole}</Text>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button
            size="lg"
            className="velox-cta-primary text-lg font-semibold px-8 py-4 h-auto rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            asChild
          >
            <Link href="/tools/business-audit">
              <div className="flex flex-col items-center py-2">
                <span className="text-lg">Start My 3-Week Transformation</span>
                <span className="text-sm font-normal opacity-90">See how this applies to my process</span>
              </div>
            </Link>
          </Button>
        </div>
      </Container>
    </Section>
  )
}
