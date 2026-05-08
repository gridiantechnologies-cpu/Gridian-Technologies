/**
 * JsonLd — Injects JSON-LD structured data into the <head>.
 *
 * Provides Organization + WebSite schema so Google can show
 * rich results (logo, sitelinks search box, etc).
 *
 * Ref: https://schema.org/Organization
 */
export default function JsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Gridian Technologies",
    url: "https://gridiantechnologies-main.vercel.app",
    logo: "https://gridiantechnologies-main.vercel.app/opengraph-image.png",
    description:
      "Premium digital agency building world-class web apps, AI solutions, cloud infrastructure, and mobile experiences.",
    foundingDate: "2023",
    areaServed: "Worldwide",
    serviceType: [
      "Web Application Development",
      "AI Solutions",
      "Cloud Infrastructure",
      "Mobile App Development",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      availableLanguage: "English",
    },
    // Add your social profiles here once available:
    sameAs: [
      // "https://twitter.com/gridiantech",
      // "https://linkedin.com/company/gridian-technologies",
      // "https://github.com/gridiantech",
    ],
  };

  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Gridian Technologies",
    url: "https://gridian-technologies.vercel.app",
    description:
      "We build world-class digital products — web apps, AI solutions, cloud infrastructure, and mobile experiences — for the brands of tomorrow.",
    inLanguage: "en-US",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
      />
    </>
  );
}
