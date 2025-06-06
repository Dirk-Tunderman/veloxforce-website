import { siteConfig } from "@/config/site"

interface SchemaOrgProps {
  title?: string
  description?: string
  pathname?: string
  image?: string
  type?: "WebSite" | "Organization" | "WebPage" | "Article" | "Service"
  datePublished?: string
  dateModified?: string
  author?: string
}

export function SchemaOrg({
  title,
  description,
  pathname,
  image,
  type = "WebPage",
  datePublished,
  dateModified,
  author,
}: SchemaOrgProps) {
  const baseUrl = siteConfig.url
  const metaTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.name
  const metaDescription = description || siteConfig.description
  const metaImage = image || siteConfig.ogImage
  const url = pathname ? `${baseUrl}${pathname}` : baseUrl

  // Base schema for all pages
  const baseSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: baseUrl,
    description: siteConfig.description,
    potentialAction: {
      "@type": "SearchAction",
      target: `${baseUrl}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  }

  // Organization schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    sameAs: [siteConfig.links.twitter, siteConfig.links.linkedin],
    contactPoint: {
      "@type": "ContactPoint",
      email: siteConfig.contact.email,
      contactType: "customer service",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.zip,
      addressCountry: siteConfig.address.country,
    },
  }

  // Page-specific schema
  let pageSchema = {}

  if (type === "WebPage") {
    pageSchema = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: metaTitle,
      description: metaDescription,
      url,
      image: metaImage,
      datePublished,
      dateModified: dateModified || datePublished,
      publisher: {
        "@type": "Organization",
        name: siteConfig.name,
        logo: {
          "@type": "ImageObject",
          url: `${baseUrl}/logo.png`,
        },
      },
    }
  } else if (type === "Article") {
    pageSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: metaTitle,
      description: metaDescription,
      url,
      image: metaImage,
      datePublished,
      dateModified: dateModified || datePublished,
      author: {
        "@type": "Person",
        name: author || siteConfig.name,
      },
      publisher: {
        "@type": "Organization",
        name: siteConfig.name,
        logo: {
          "@type": "ImageObject",
          url: `${baseUrl}/logo.png`,
        },
      },
    }
  } else if (type === "Service") {
    pageSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      name: metaTitle,
      description: metaDescription,
      url,
      provider: {
        "@type": "Organization",
        name: siteConfig.name,
      },
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify([baseSchema, organizationSchema, pageSchema]),
      }}
    />
  )
}
