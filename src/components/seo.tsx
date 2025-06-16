import { Metadata } from "next"
import { siteConfig } from "@/config/site"

interface SeoProps {
  title?: string
  description?: string
  keywords?: string[]
  image?: string
  noIndex?: boolean
  pathname?: string
}

export function constructMetadata({
  title,
  description,
  keywords = [],
  image,
  noIndex = false,
  pathname,
}: SeoProps): Metadata {
  const baseUrl = siteConfig.url
  const metaTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.name
  const metaDescription = description || siteConfig.description
  const metaKeywords = [...keywords, ...siteConfig.description.split(" ")]
  const metaImage = image || siteConfig.ogImage
  const metaUrl = pathname ? `${baseUrl}${pathname}` : baseUrl

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: metaKeywords,
    authors: [{ name: siteConfig.name }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: metaUrl,
    },
    icons: {
      icon: [
        { url: '/favicon.ico', sizes: 'any' },
        { url: '/icon.svg', type: 'image/svg+xml' },
      ],
      apple: '/veloxforce-logo-gradient.png',
    },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: metaUrl,
      siteName: siteConfig.name,
      images: [
        {
          url: metaImage,
          width: 1200,
          height: 630,
          alt: metaTitle,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: metaDescription,
      images: [metaImage],
      creator: "@veloxforce",
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
      },
    },
  }
}
