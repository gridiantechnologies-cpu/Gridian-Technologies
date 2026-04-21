import type { Metadata } from "next";
import "./globals.css";
import "@fontsource/inter/300.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/800.css";
import "@fontsource/inter/900.css";

export const metadata: Metadata = {
  title: "Gridian Technologies | Premium Digital Agency",
  description:
    "We build world-class digital products — web apps, AI solutions, cloud infrastructure, and mobile experiences — for the brands of tomorrow.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-inter antialiased bg-white text-neutral-900">
        {children}
      </body>
    </html>
  );
}
