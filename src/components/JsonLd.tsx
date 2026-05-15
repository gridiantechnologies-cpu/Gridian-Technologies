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
    url: "https://gridiantechnologies.com",
    logo: "https://gridiantechnologies.com/opengraph-image.png",
    description:
      "Gridian Technologies is a digital technology company in India providing web development, AI solutions, SaaS development, cloud infrastructure, mobile app development, and digital business solutions.",
    foundingDate: "2024",
    areaServed: "Worldwide",
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
    },
    serviceType: [
      "Web Application Development",
      "AI Solutions",
      "SaaS Development",
      "Cloud Infrastructure",
      "Mobile App Development",
      "Digital Business Solutions",
      "Automation Systems",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      availableLanguage: "English",
    },
    sameAs: [
      "https://github.com/gridiantechnologies-cpu",
      "https://www.linkedin.com/in/gridian-technologies-31659840a",
      "https://x.com/gridiantechgt",
      "https://discord.gg/ZVYfmWgZJ",
      "https://www.instagram.com/gridian_technologies",
      "https://www.facebook.com/people/GridianTechnologies-GridianTechnologies/pfbid0ewUeuCNYLvJGW4t6zW76repQeHgQ5xVvGXvTNZeZjwDRsivHKY5yoQ5ffgwUQdQCl/",
      "https://youtube.com/@gridiantechnologies",
    ],
  };

  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Gridian Technologies",
    url: "https://gridiantechnologies.com",
    description:
      "Gridian Technologies is a digital technology company in India providing web development, AI solutions, SaaS development, cloud infrastructure, mobile app development, and digital business solutions.",
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
