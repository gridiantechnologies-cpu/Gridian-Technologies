import { MetadataRoute } from "next";

const BASE_URL = "https://gridian-technologies.vercel.app";

/**
 * Next.js 15 built-in robots — auto-served at /robots.txt
 *
 * Allows all crawlers on all public pages.
 * Blocks internal Next.js routes and API endpoints.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",        // Internal API routes
          "/_next/",      // Next.js internals
          "/admin/",      // Admin panel (if added later)
        ],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
