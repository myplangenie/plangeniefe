import type { Metadata, Viewport } from "next";
import { Lato, Geist_Mono, Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/seo";
import Script from "next/script";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "700", "800"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.shortName,
  icons: {
    icon: [
      { url: "/images/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/images/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/images/favicon/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/images/favicon/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/images/favicon/apple-touch-icon.png",
    shortcut: "/images/favicon/favicon.ico",
  },
  manifest: "/images/favicon/site.webmanifest",
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: "website",
    images: [
      {
        url: "/images/hero.svg",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} – Plan smarter, execute with clarity`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: siteConfig.twitter.site,
    creator: siteConfig.twitter.creator,
    title: siteConfig.name,
    description: siteConfig.description,
    images: ["/images/hero.svg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
};

export const viewport: Viewport = {
  themeColor: "#1D4374",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lato.variable} ${geistMono.variable} ${manrope.variable} ${spaceGrotesk.variable} antialiased`}>
        {/* Organization & WebSite JSON‑LD */}
        <Script id="ld-org" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: siteConfig.name,
            url: siteConfig.url,
            logo: `${siteConfig.url}/images/favicon/android-chrome-192x192.png`,
            sameAs: siteConfig.sameAs,
          })}
        </Script>
        <Script id="ld-software" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: siteConfig.name,
            applicationCategory: 'BusinessApplication',
            operatingSystem: 'Web',
            url: siteConfig.url,
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'USD',
            },
          })}
        </Script>
        <Script id="ld-website" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: siteConfig.name,
            url: siteConfig.url,
            potentialAction: {
              '@type': 'SearchAction',
              target: `${siteConfig.url}/search?q={search_term_string}`,
              'query-input': 'required name=search_term_string',
            },
          })}
        </Script>
        {children}
      </body>
    </html>
  );
}
