/** @type {import('next').NextConfig} */

const PRODUCTION_DOMAIN = "gridiantechnologies.com";

const nextConfig = {
  // ── Compression ─────────────────────────────────────────────────────────────
  compress: true,

  // ── Remove "X-Powered-By: Next.js" header (minor security hardening) ────────
  poweredByHeader: false,

  // ── Image Optimisation ──────────────────────────────────────────────────────
  images: {
    // Serve AVIF first (smallest), fall back to WebP, then original format
    formats: ["image/avif", "image/webp"],
    // Cache optimised images for 60 days on the CDN
    minimumCacheTTL: 60 * 60 * 24 * 60,
    // Allowed external image hostnames (add more as needed)
    remotePatterns: [],
  },

  // ── Canonical www → non-www redirect ────────────────────────────────────────
  // Ensures https://www.gridiantechnologies.com → https://gridiantechnologies.com
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: `www.${PRODUCTION_DOMAIN}` }],
        destination: `https://${PRODUCTION_DOMAIN}/:path*`,
        permanent: true, // 301 redirect — tells Google the canonical domain
      },
    ];
  },

  // ── Security + Performance Headers ──────────────────────────────────────────
  async headers() {
    return [
      {
        // Block Vercel preview domain from being indexed by Google.
        // X-Robots-Tag: noindex prevents duplicate content penalties.
        source: "/(.*)",
        has: [
          {
            type: "host",
            value: "gridiantechnologies-main.vercel.app",
          },
        ],
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
      {
        // Apply to all routes
        source: "/(.*)",
        headers: [
          // Tell browsers not to sniff content types
          { key: "X-Content-Type-Options", value: "nosniff" },
          // Block clickjacking
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          // Force HTTPS for 1 year, include subdomains
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains",
          },
          // Referrer policy — sends origin only on cross-origin requests
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
      {
        // Long-lived cache for static assets (JS, CSS, images, fonts)
        source: "/_next/static/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        // Medium cache for public folder assets
        source: "/(.*)\\.(png|jpg|jpeg|gif|svg|ico|woff|woff2)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, stale-while-revalidate=604800",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
