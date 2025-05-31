import { Metadata } from "next"
import Link from "next/link"

import { MainLayout } from "@/components/layout/main-layout"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"
import { constructMetadata } from "@/components/seo"

export const metadata: Metadata = constructMetadata({
  title: "Privacy Policy | Veloxforce",
  description: "Veloxforce's privacy policy outlines how we collect, use, and protect your personal information.",
  keywords: ["privacy policy", "data protection", "personal information", "GDPR compliance", "data security"],
  pathname: "/privacy-policy",
})

export default function PrivacyPolicyPage() {
  return (
    <MainLayout>
      <Section padding="lg" background="primary">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <Heading level="1" className="text-white mb-6">
              Privacy Policy
            </Heading>
            <Text variant="lead" className="text-primary-foreground/90">
              Last updated: May 1, 2023
            </Text>
          </div>
        </Container>
      </Section>

      <Section padding="lg">
        <Container>
          <div className="max-w-3xl mx-auto prose prose-headings:font-bold prose-headings:text-foreground prose-p:text-muted-foreground">
            <Heading level="2">Introduction</Heading>
            <Text>
              Veloxforce ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </Text>
            <Text>
              Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site or use our services.
            </Text>

            <Heading level="2">Information We Collect</Heading>
            <Text>
              We may collect information about you in a variety of ways. The information we may collect via the website includes:
            </Text>
            <Heading level="3">Personal Data</Heading>
            <Text>
              Personally identifiable information, such as your name, email address, telephone number, and company name, that you voluntarily give to us when you register with the website or when you choose to participate in various activities related to the website, such as online chat, contact forms, and requests for information or services.
            </Text>
            <Heading level="3">Derivative Data</Heading>
            <Text>
              Information our servers automatically collect when you access the website, such as your IP address, browser type, operating system, access times, and the pages you have viewed directly before and after accessing the website.
            </Text>
            <Heading level="3">Financial Data</Heading>
            <Text>
              Financial information, such as data related to your payment method (e.g., valid credit card number, card brand, expiration date) that we may collect when you purchase, order, return, exchange, or request information about our services from the website.
            </Text>

            <Heading level="2">Use of Your Information</Heading>
            <Text>
              Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the website to:
            </Text>
            <ul>
              <li>Create and manage your account.</li>
              <li>Process your transactions.</li>
              <li>Send you administrative information, such as updates, security alerts, and support messages.</li>
              <li>Respond to your comments, questions, and requests.</li>
              <li>Deliver targeted advertising, newsletters, and other information regarding promotions and the website to you.</li>
              <li>Compile anonymous statistical data and analysis for use internally or with third parties.</li>
              <li>Increase the efficiency and operation of the website.</li>
              <li>Monitor and analyze usage and trends to improve your experience with the website.</li>
              <li>Notify you of updates to the website.</li>
              <li>Resolve disputes and troubleshoot problems.</li>
            </ul>

            <Heading level="2">Disclosure of Your Information</Heading>
            <Text>
              We may share information we have collected about you in certain situations. Your information may be disclosed as follows:
            </Text>
            <Heading level="3">By Law or to Protect Rights</Heading>
            <Text>
              If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.
            </Text>
            <Heading level="3">Third-Party Service Providers</Heading>
            <Text>
              We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.
            </Text>
            <Heading level="3">Marketing Communications</Heading>
            <Text>
              With your consent, or with an opportunity for you to withdraw consent, we may share your information with third parties for marketing purposes, as permitted by law.
            </Text>

            <Heading level="2">Security of Your Information</Heading>
            <Text>
              We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
            </Text>

            <Heading level="2">Contact Us</Heading>
            <Text>
              If you have questions or comments about this Privacy Policy, please contact us at:
            </Text>
            <Text>
              Veloxforce<br />
              Email: privacy@veloxforce.ai<br />
              Phone: +1 (555) 123-4567
            </Text>
          </div>
        </Container>
      </Section>
    </MainLayout>
  )
}
