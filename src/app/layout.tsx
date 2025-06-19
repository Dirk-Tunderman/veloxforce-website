import type { Metadata, Viewport } from "next";
import { inter } from "@/lib/fonts";
import { constructMetadata } from "@/components/seo";
import { SchemaOrg } from "@/components/schema-org";
import { Toaster } from "@/components/ui/toaster";
import { AnalyticsProvider } from "@/components/analytics/analytics-provider";
import { AnimationProvider } from "@/components/animation-provider";
import "./globals.css";

export const metadata: Metadata = constructMetadata({
  title: "End Operational Chaos. Reclaim Your Growth.",
  description: "Once Your Toughest Manual Processes Are Transformed by This Hybrid AI-Human Model, Costs Typically Slash by up to 50%, Execution Speed Triples, and Your Leadership is Freed to Drive the Business Forward—Guaranteed.",
  keywords: ["AI automation", "business automation", "hybrid automation", "process automation", "operational efficiency", "automation certainty", "human-perfected automation"],
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/favicon-16x16.svg', sizes: '16x16', type: 'image/svg+xml' },
      { url: '/favicon-32x32.svg', sizes: '32x32', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.svg',
  },
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
          <AnimationProvider>
            <SchemaOrg
              type="WebSite"
              title="End Operational Chaos. Reclaim Your Growth."
              description="Once Your Toughest Manual Processes Are Transformed by This Hybrid AI-Human Model, Costs Typically Slash by up to 50%, Execution Speed Triples, and Your Leadership is Freed to Drive the Business Forward—Guaranteed."
            />
            {children}
            <Toaster />
          </AnimationProvider>
        </AnalyticsProvider>
      </body>
    </html>
  );
}
