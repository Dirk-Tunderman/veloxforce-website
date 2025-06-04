import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"
import { ArrowRight, Clock, Home } from "lucide-react"

export function IdentityTransformationSection() {
  return (
    <Section padding="xl" background="white-to-light">
      <Container className="max-w-7xl">
        <div className="text-center">
          <div className="max-w-6xl mx-auto">
            {/* Sarah's Real Tuesday */}
            <div className="mb-16">
              <Heading level="2" className="velox-text-h2 mb-6">
                <span className="text-gray-900">Sarah's</span>{" "}
                <span className="gradient-text-blue font-bold">Real Tuesday</span>
              </Heading>
              <Text className="velox-text-body text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                See what changes when you stop <span className="font-semibold text-gray-900">managing operations</span> and start{" "}
                <span className="font-bold text-blue-600">delegating outcomes</span>
              </Text>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Before Service-as-Software */}
              <div className="lg:col-span-5 group">
                <div className="velox-card-traditional bg-gray-50 rounded-2xl p-8 border border-gray-300 hover:shadow-lg transition-all duration-500 hover:-translate-y-1">
                  <div className="flex items-center gap-4 mb-8 justify-center lg:justify-start">
                    <div className="w-14 h-14 bg-gray-200 rounded-full flex items-center justify-center group-hover:bg-gray-300 transition-colors duration-300">
                      <Clock className="w-7 h-7 text-gray-600" />
                    </div>
                    <div className="text-center lg:text-left">
                      <Text className="font-bold text-gray-900 text-lg">Before Service-as-Software</Text>
                      <Text className="text-sm text-gray-600 font-medium">Sarah's overwhelming Tuesday</Text>
                    </div>
                  </div>

                  <div className="space-y-5">
                    <div className="flex items-start gap-4 justify-center lg:justify-start">
                      <Text className="text-sm font-bold text-gray-800 min-w-[70px] text-center lg:text-left">6:30 AM</Text>
                      <Text className="text-sm text-gray-700 text-center lg:text-left">
                        <span className="font-semibold">Already processing</span> invoices
                      </Text>
                    </div>
                    <div className="flex items-start gap-4 justify-center lg:justify-start">
                      <Text className="text-sm font-bold text-gray-800 min-w-[70px] text-center lg:text-left">10:00 AM</Text>
                      <Text className="text-sm text-gray-700 text-center lg:text-left">
                        <span className="font-semibold">Still entering</span> customer data
                      </Text>
                    </div>
                    <div className="flex items-start gap-4 justify-center lg:justify-start">
                      <Text className="text-sm font-bold text-gray-800 min-w-[70px] text-center lg:text-left">2:00 PM</Text>
                      <Text className="text-sm text-gray-700 text-center lg:text-left">
                        <span className="font-semibold">Chasing</span> payment reminders
                      </Text>
                    </div>
                    <div className="flex items-start gap-4 justify-center lg:justify-start">
                      <Text className="text-sm font-bold text-gray-800 min-w-[70px] text-center lg:text-left">6:00 PM</Text>
                      <Text className="text-sm text-gray-700 italic text-center lg:text-left">
                        "<span className="font-semibold">Sorry kids</span>, daddy needs to finish up"
                      </Text>
                    </div>
                    <div className="flex items-start gap-4 justify-center lg:justify-start">
                      <Text className="text-sm font-bold text-gray-800 min-w-[70px] text-center lg:text-left">9:00 PM</Text>
                      <Text className="text-sm text-gray-700 text-center lg:text-left">
                        <span className="font-semibold">Finally reviewing</span> tomorrow's strategy
                      </Text>
                    </div>
                  </div>
                </div>
              </div>

              {/* Arrow */}
              <div className="lg:col-span-2 flex justify-center my-8 lg:my-0">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-110 group">
                  <ArrowRight className="w-9 h-9 text-white group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>

              {/* With Service-as-Software */}
              <div className="lg:col-span-5 group">
                <div className="velox-card-advantage-enhanced rounded-2xl p-8 border border-blue-300 hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                  <div className="flex items-center gap-4 mb-8 justify-center lg:justify-start">
                    <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-300">
                      <Home className="w-7 h-7 text-blue-600" />
                    </div>
                    <div className="text-center lg:text-left">
                      <Text className="font-bold text-blue-900 text-lg">With Service-as-Software</Text>
                      <Text className="text-sm text-blue-700 font-medium">Sarah's liberated Tuesday after intelligent delegation</Text>
                    </div>
                  </div>

                  <div className="space-y-5">
                    <div className="flex items-start gap-4 justify-center lg:justify-start">
                      <Text className="text-sm font-bold text-blue-800 min-w-[70px] text-center lg:text-left">9:00 AM</Text>
                      <Text className="text-sm text-blue-700 text-center lg:text-left">
                        <span className="font-semibold">Reviews completed</span> overnight work
                      </Text>
                    </div>
                    <div className="flex items-start gap-4 justify-center lg:justify-start">
                      <Text className="text-sm font-bold text-blue-800 min-w-[70px] text-center lg:text-left">9:30 AM</Text>
                      <Text className="text-sm text-blue-700 text-center lg:text-left">
                        <span className="font-semibold">Strategic planning</span> session
                      </Text>
                    </div>
                    <div className="flex items-start gap-4 justify-center lg:justify-start">
                      <Text className="text-sm font-bold text-blue-800 min-w-[70px] text-center lg:text-left">12:00 PM</Text>
                      <Text className="text-sm text-blue-700 text-center lg:text-left">
                        <span className="font-semibold">Lunch with</span> key client
                      </Text>
                    </div>
                    <div className="flex items-start gap-4 justify-center lg:justify-start">
                      <Text className="text-sm font-bold text-blue-800 min-w-[70px] text-center lg:text-left">3:00 PM</Text>
                      <Text className="text-sm text-blue-700 text-center lg:text-left">
                        <span className="font-semibold">Team development</span> meeting
                      </Text>
                    </div>
                    <div className="flex items-start gap-4 justify-center lg:justify-start">
                      <Text className="text-sm font-bold text-blue-800 min-w-[70px] text-center lg:text-left">5:30 PM</Text>
                      <Text className="text-sm text-blue-700 italic text-center lg:text-left">
                        "<span className="font-semibold">Who wants to help</span> with dinner?"
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Message */}
            <div className="mt-16 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-10 border border-blue-200 max-w-5xl mx-auto text-center">
              <div className="text-xl text-blue-900 leading-relaxed mb-6 font-medium text-center mx-auto">
                The transformation isn't about <span className="font-bold">technology</span>. It's about{" "}
                <span className="font-bold text-blue-700">delegation</span>.
                <br />
                Sarah didn't learn new software—she learned to{" "}
                <span className="font-bold">delegate outcomes</span> and focus on{" "}
                <span className="font-bold text-blue-700">what only she can do</span>.
              </div>
              <div className="text-lg text-blue-800 leading-relaxed text-center mx-auto">
                The transformation happened <span className="font-semibold">faster than traditional development</span> because{" "}
                <span className="font-bold">AI makes custom solutions possible</span> in a fraction of the time.
                <br />
                Your timeline depends on your specific needs—what matters is{" "}
                <span className="font-bold text-blue-700">the ROI makes sense</span>.
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
