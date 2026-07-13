import type { Metadata } from "next";
import "@fontsource/space-grotesk/500.css";
import "@fontsource/space-grotesk/600.css";
import "@fontsource/space-grotesk/700.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import ThemeProvider from "@/components/ThemeProvider";
import "./globals.css";

const siteUrl = "https://petpalhub.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "PetPalHub",
    template: "%s | PetPalHub",
  },
  description:
    "PetPalHub is the AI-powered Chrome extension for pet owners: smart reminders, pet adoption search, a trusted marketplace, custom merchandise, games, and a caring community, all in one place.",
  keywords: [
    "PetPalHub",
    "pet care app",
    "pet reminders",
    "pet adoption",
    "Chrome extension for pets",
    "pet community",
    "PetMatch",
  ],
  authors: [{ name: "PetPalHub" }],
  openGraph: {
    title: "PetPalHub — Your AI Companion for Every Pet Parent",
    description:
      "Reminders, adoption search, a trusted marketplace, and a community built entirely around your pet.",
    url: siteUrl,
    siteName: "PetPalHub",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "PetPalHub" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "PetPalHub — Your AI Companion for Every Pet Parent",
    description:
      "Reminders, adoption search, a trusted marketplace, and a community built entirely around your pet.",
    images: ["/og-image.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "PetPalHub",
  applicationCategory: "BrowserApplication",
  operatingSystem: "Chrome",
  description:
    "PetPalHub is the AI-powered Chrome extension for pet owners, offering reminders, pet adoption search, a marketplace, custom merchandise, games, and community.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
