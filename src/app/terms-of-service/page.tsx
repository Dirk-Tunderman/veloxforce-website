import { Metadata } from "next"
import Link from "next/link"

import { MainLayout } from "@/components/layout/main-layout"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heading, Text } from "@/components/ui/typography"
import { constructMetadata } from "@/components/seo"

export const metadata: Metadata = constructMetadata({
  title: "Terms of Service | Veloxforce",
  description: "Veloxforce's terms of service outline the rules and guidelines for using our website and services.",
  keywords: ["terms of service", "terms and conditions", "legal agreement", "service terms", "user agreement"],
  pathname: "/terms-of-service",
})

export default function TermsOfServicePage() {
  return (
    <MainLayout>
      <Section padding="lg" background="primary">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <Heading level="1" className="text-white mb-6">
              Terms of Service
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
            <Heading level="2">Agreement to Terms</Heading>
            <Text>
              These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and Veloxforce ("we," "us" or "our"), concerning your access to and use of the website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the "Site").
            </Text>
            <Text>
              You agree that by accessing the Site, you have read, understood, and agree to be bound by all of these Terms of Service. If you do not agree with all of these Terms of Service, then you are expressly prohibited from using the Site and you must discontinue use immediately.
            </Text>

            <Heading level="2">Intellectual Property Rights</Heading>
            <Text>
              Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights and unfair competition laws of the United States, international copyright laws, and international conventions.
            </Text>
            <Text>
              The Content and the Marks are provided on the Site "AS IS" for your information and personal use only. Except as expressly provided in these Terms of Service, no part of the Site and no Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without our express prior written permission.
            </Text>

            <Heading level="2">User Representations</Heading>
            <Text>
              By using the Site, you represent and warrant that: (1) you have the legal capacity and you agree to comply with these Terms of Service; (2) you are not a minor in the jurisdiction in which you reside; (3) you will not access the Site through automated or non-human means, whether through a bot, script or otherwise; (4) you will not use the Site for any illegal or unauthorized purpose; and (5) your use of the Site will not violate any applicable law or regulation.
            </Text>
            <Text>
              If you provide any information that is untrue, inaccurate, not current, or incomplete, we have the right to suspend or terminate your account and refuse any and all current or future use of the Site (or any portion thereof).
            </Text>

            <Heading level="2">Prohibited Activities</Heading>
            <Text>
              You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
            </Text>
            <Text>
              As a user of the Site, you agree not to:
            </Text>
            <ul>
              <li>Systematically retrieve data or other content from the Site to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us.</li>
              <li>Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account information such as user passwords.</li>
              <li>Circumvent, disable, or otherwise interfere with security-related features of the Site, including features that prevent or restrict the use or copying of any Content or enforce limitations on the use of the Site and/or the Content contained therein.</li>
              <li>Disparage, tarnish, or otherwise harm, in our opinion, us and/or the Site.</li>
              <li>Use any information obtained from the Site in order to harass, abuse, or harm another person.</li>
              <li>Make improper use of our support services or submit false reports of abuse or misconduct.</li>
              <li>Use the Site in a manner inconsistent with any applicable laws or regulations.</li>
              <li>Use the Site to advertise or offer to sell goods and services.</li>
              <li>Engage in unauthorized framing of or linking to the Site.</li>
              <li>Upload or transmit (or attempt to upload or to transmit) viruses, Trojan horses, or other material, including excessive use of capital letters and spamming (continuous posting of repetitive text), that interferes with any party's uninterrupted use and enjoyment of the Site or modifies, impairs, disrupts, alters, or interferes with the use, features, functions, operation, or maintenance of the Site.</li>
            </ul>

            <Heading level="2">Submissions</Heading>
            <Text>
              You acknowledge and agree that any questions, comments, suggestions, ideas, feedback, or other information regarding the Site ("Submissions") provided by you to us are non-confidential and shall become our sole property. We shall own exclusive rights, including all intellectual property rights, and shall be entitled to the unrestricted use and dissemination of these Submissions for any lawful purpose, commercial or otherwise, without acknowledgment or compensation to you.
            </Text>

            <Heading level="2">Site Management</Heading>
            <Text>
              We reserve the right, but not the obligation, to: (1) monitor the Site for violations of these Terms of Service; (2) take appropriate legal action against anyone who, in our sole discretion, violates the law or these Terms of Service, including without limitation, reporting such user to law enforcement authorities; (3) in our sole discretion and without limitation, refuse, restrict access to, limit the availability of, or disable (to the extent technologically feasible) any of your Contributions or any portion thereof; (4) in our sole discretion and without limitation, notice, or liability, to remove from the Site or otherwise disable all files and content that are excessive in size or are in any way burdensome to our systems; and (5) otherwise manage the Site in a manner designed to protect our rights and property and to facilitate the proper functioning of the Site.
            </Text>

            <Heading level="2">Contact Us</Heading>
            <Text>
              In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at:
            </Text>
            <Text>
              Veloxforce<br />
              Email: legal@veloxforce.ai<br />
              Phone: +1 (555) 123-4567
            </Text>
          </div>
        </Container>
      </Section>
    </MainLayout>
  )
}
