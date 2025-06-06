import { Metadata } from "next"
import { Mail, Clock, Calendar, MessageSquare } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { MainLayout } from "@/components/layout/main-layout"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"
import { ContactForm } from "@/components/forms/contact-form"
import { BookingForm } from "@/components/forms/booking-form"
import { siteConfig } from "@/config/site"
import { constructMetadata } from "@/components/seo"

export const metadata: Metadata = constructMetadata({
  title: "Contact Us | Get in Touch with Veloxforce",
  description: "Contact Veloxforce to discuss your business automation needs or book a consultation with our experts.",
  keywords: ["contact", "business automation", "consultation booking", "process optimization", "get in touch"],
  pathname: "/contact",
})

export default function ContactPage() {
  return (
    <MainLayout>
      <Section padding="lg" background="primary">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <Heading level="1" className="text-white mb-6">
              Get in Touch
            </Heading>
            <Text variant="lead" className="text-primary-foreground/90">
              Have questions about how our hybrid AI-human approach can transform your business operations?
              Reach out to our team or book a consultation to discuss your specific needs.
            </Text>
          </div>
        </Container>
      </Section>

      <Section padding="lg">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <Tabs defaultValue="contact" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-8">
                  <TabsTrigger value="contact" className="text-base">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Send a Message
                  </TabsTrigger>
                  <TabsTrigger value="booking" className="text-base">
                    <Calendar className="h-4 w-4 mr-2" />
                    Book a Consultation
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="contact">
                  <div className="bg-muted/30 rounded-lg p-6 mb-6">
                    <Heading level="2" className="text-2xl mb-4">
                      Send Us a Message
                    </Heading>
                    <Text className="text-muted-foreground mb-6">
                      Fill out the form below and our team will get back to you within one business day.
                      We're here to answer any questions you have about our services and how we can help your business.
                    </Text>
                    <ContactForm />
                  </div>
                </TabsContent>
                <TabsContent value="booking">
                  <div className="bg-muted/30 rounded-lg p-6 mb-6">
                    <Heading level="2" className="text-2xl mb-4">
                      Book a Consultation
                    </Heading>
                    <Text className="text-muted-foreground mb-6">
                      Schedule a personalized consultation with one of our automation experts.
                      We'll discuss your specific business challenges and explore how our hybrid AI-human approach can help.
                    </Text>
                    <BookingForm />
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            <div>
              <div className="bg-muted rounded-lg p-6 mb-6">
                <Heading level="2" className="text-2xl mb-4">
                  Contact Information
                </Heading>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <Text className="font-medium">Email</Text>
                      <Text className="text-muted-foreground">
                        {siteConfig.contact.email}
                      </Text>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <Text className="font-medium">Business Hours</Text>
                      <Text className="text-muted-foreground">
                        Monday - Friday: 9:00 AM - 5:00 PM PST<br />
                        Saturday - Sunday: Closed
                      </Text>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-primary/10 rounded-lg p-6">
                <Heading level="3" className="text-xl mb-4">
                  What Happens Next?
                </Heading>
                <ol className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-white font-medium text-sm">
                      1
                    </div>
                    <Text className="text-muted-foreground">
                      <span className="font-medium text-foreground">Initial Response</span><br />
                      We'll respond to your inquiry within one business day.
                    </Text>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-white font-medium text-sm">
                      2
                    </div>
                    <Text className="text-muted-foreground">
                      <span className="font-medium text-foreground">Discovery Call</span><br />
                      We'll schedule a call to understand your specific needs and challenges.
                    </Text>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-white font-medium text-sm">
                      3
                    </div>
                    <Text className="text-muted-foreground">
                      <span className="font-medium text-foreground">Custom Proposal</span><br />
                      We'll provide a tailored solution proposal with clear ROI projections.
                    </Text>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-white font-medium text-sm">
                      4
                    </div>
                    <Text className="text-muted-foreground">
                      <span className="font-medium text-foreground">Implementation</span><br />
                      Once approved, we'll begin the transformation process with a clear timeline.
                    </Text>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section padding="lg" background="muted">
        <Container>
          <div className="text-center mb-12">
            <Heading level="2">
              Frequently Asked Questions
            </Heading>
            <Text variant="lead" className="text-muted-foreground mt-4 max-w-3xl mx-auto">
              Quick answers to common questions about working with us
            </Text>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-background rounded-lg p-6 border border-border/50 shadow-sm">
              <Heading level="3" className="text-xl mb-2">
                How quickly can you implement a solution?
              </Heading>
              <Text className="text-muted-foreground">
                Implementation timelines vary based on complexity, but most solutions begin delivering value within 4-6 weeks. Our phased approach ensures you see ROI at each step rather than waiting for a complete transformation.
              </Text>
            </div>
            <div className="bg-background rounded-lg p-6 border border-border/50 shadow-sm">
              <Heading level="3" className="text-xl mb-2">
                Do we need technical expertise on our team?
              </Heading>
              <Text className="text-muted-foreground">
                No. Our hybrid AI-human approach is designed to eliminate the need for technical expertise on your side. We handle all implementation, management, and optimization, providing you with regular reports and performance updates.
              </Text>
            </div>
            <div className="bg-background rounded-lg p-6 border border-border/50 shadow-sm">
              <Heading level="3" className="text-xl mb-2">
                How do you ensure quality and accuracy?
              </Heading>
              <Text className="text-muted-foreground">
                Our hybrid model combines AI efficiency with human oversight. While AI handles the bulk of processing, human experts review critical decisions and exceptions, ensuring accuracy rates of 99.8% or higher across all processes.
              </Text>
            </div>
            <div className="bg-background rounded-lg p-6 border border-border/50 shadow-sm">
              <Heading level="3" className="text-xl mb-2">
                What kind of ROI can we expect?
              </Heading>
              <Text className="text-muted-foreground">
                Most clients see 40-60% cost reduction in automated processes, with 3x faster execution times. Typical payback periods range from 3-6 months, with ongoing improvements as the system optimizes over time.
              </Text>
            </div>
          </div>
        </Container>
      </Section>
    </MainLayout>
  )
}
