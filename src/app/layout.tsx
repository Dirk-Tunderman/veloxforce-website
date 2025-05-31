import type { Metadata, Viewport } from "next";
import { inter } from "@/lib/fonts";
import { constructMetadata } from "@/components/seo";
import { SchemaOrg } from "@/components/schema-org";
import { Toaster } from "@/components/ui/toaster";
import { AnalyticsProvider } from "@/components/analytics/analytics-provider";
import "./globals.css";

export const metadata: Metadata = constructMetadata({
  title: "End Operational Chaos. Reclaim Your Growth.",
  description: "Once Your Toughest Manual Processes Are Transformed by This Hybrid AI-Human Model, Costs Typically Slash by up to 50%, Execution Speed Triples, and Your Leadership is Freed to Drive the Business Forward—Guaranteed.",
  keywords: ["AI automation", "business automation", "hybrid automation", "process automation", "operational efficiency", "automation certainty", "human-perfected automation"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0F172A" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-background font-sans antialiased">
        <AnalyticsProvider>
          <SchemaOrg
            type="WebSite"
            title="End Operational Chaos. Reclaim Your Growth."
            description="Once Your Toughest Manual Processes Are Transformed by This Hybrid AI-Human Model, Costs Typically Slash by up to 50%, Execution Speed Triples, and Your Leadership is Freed to Drive the Business Forward—Guaranteed."
          />
          {children}
          <Toaster />
        </AnalyticsProvider>
      </body>
    </html>
  );
}
