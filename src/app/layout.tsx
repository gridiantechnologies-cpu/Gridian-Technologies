import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/JsonLd";

// ─── Font ─────────────────────────────────────────────────────────────────────
// next/font/google: self-hosted, subsetted, zero layout-shift (font-display:swap)
const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-inter",
});

// ─── Viewport / Theme ─────────────────────────────────────────────────────────
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0047ab",
};

// ─── Site-wide Metadata ───────────────────────────────────────────────────────
const SITE_URL = "https://gridiantechnologies.com";
const SITE_NAME = "Gridian Technologies";
const SITE_TITLE = "Gridian Technologies | Premium Digital Agency";
const SITE_DESCRIPTION =
  "We build world-class digital products — web apps, AI solutions, cloud infrastructure, and mobile experiences — for the brands of tomorrow.";
const OG_IMAGE = `${SITE_URL}/opengraph-image.png`;

export const metadata: Metadata = {
  // ── Basic ──────────────────────────────────────────────────────────────────
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "digital agency",
    "web development",
    "AI solutions",
    "cloud infrastructure",
    "mobile app development",
    "Next.js agency",
    "React development",
    "Gridian Technologies",
  ],

  // ── Robots ─────────────────────────────────────────────────────────────────
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // ── Canonical ──────────────────────────────────────────────────────────────
  alternates: {
    canonical: SITE_URL,
  },

  // ── Open Graph ─────────────────────────────────────────────────────────────
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    url: SITE_URL,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Gridian Technologies — We Build Digital Products That Scale.",
      },
    ],
    locale: "en_US",
  },

  // ── Twitter / X ────────────────────────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [OG_IMAGE],
    // Uncomment and add your handle once you have one:
    // site: "@gridiantech",
    // creator: "@gridiantech",
  },

  // ── Search Engine Verification ─────────────────────────────────────────────
  // Paste your real codes from Search Console / Bing once you have them:
  verification: {
    google: "36e2637eaabb58a0",
    // yandex: "PASTE_YANDEX_VERIFICATION_CODE_HERE",
    other: {
      "msvalidate.01": "PASTE_BING_WEBMASTER_VERIFICATION_CODE_HERE",
    },
  },

  // ── App / Mobile ───────────────────────────────────────────────────────────
  applicationName: SITE_NAME,
  referrer: "origin-when-cross-origin",
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
};

// ─── Root Layout ──────────────────────────────────────────────────────────────
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased bg-white text-neutral-900">
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
