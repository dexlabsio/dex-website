import type { Metadata, Viewport } from "next";
import { ThemeProvider } from "next-themes";
import { Geist_Mono, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "dex - Unified Data Platform | Build Reliable Data Pipelines",
    template: "%s | dex"
  },
  description: "Unified data platform for reliable pipelines, workflow automation, and faster insights. Transform data engineering with powerful tools.",
  keywords: [
    "data platform",
    "data pipelines",
    "workflow automation",
    "data engineering",
    "ETL platform",
    "data integration",
    "analytics platform",
    "data transformation"
  ],
  authors: [{ name: "dex Labs" }],
  creator: "dex Labs",
  publisher: "dex Labs",
  metadataBase: new URL("https://www.dexlabs.io"),
  alternates: {
    canonical: "/",
  },
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
  openGraph: {
    title: "dex - Unified Data Platform",
    description: "A unified data platform that helps teams build reliable data pipelines, automate workflows, and get insights faster.",
    url: "https://www.dexlabs.io",
    siteName: "dex",
    images: [
      {
        url: "/dex-logo-light.png",
        width: 1200,
        height: 630,
        alt: "dex - Unified Data Platform",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "dex - Unified Data Platform",
    description: "Build reliable data pipelines, automate workflows, and get insights faster with our unified data platform.",
    images: ["/dex-logo-light.png"],
    creator: "@dexlabs",
    site: "@dexlabs",
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="geo.region" content="US" />
        <meta name="geo.placename" content="United States" />
        <meta name="language" content="en" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        
        <meta property="og:title" content="dex - Unified Data Platform" />
        <meta property="og:description" content="Unified data platform for reliable pipelines, workflow automation, and faster insights. Transform data engineering with powerful tools." />
        <meta property="og:url" content="https://www.dexlabs.io" />
        <meta property="og:site_name" content="dex" />
        <meta property="og:image" content="https://www.dexlabs.io/dex-logo-light.png" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="dex - Unified Data Platform" />
        <meta name="twitter:description" content="Unified data platform for reliable pipelines, workflow automation, and faster insights." />
        <meta name="twitter:image" content="https://www.dexlabs.io/dex-logo-light.png" />
        <meta name="twitter:creator" content="@dexlabs" />
        <meta name="twitter:site" content="@dexlabs" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "dex Labs",
                "url": "https://www.dexlabs.io",
                "logo": "https://www.dexlabs.io/dex-logo-light.png",
                "foundingDate": "2024",
                "founders": [{
                  "@type": "Person",
                  "name": "dex Labs Team"
                }],
                "address": {
                  "@type": "PostalAddress",
                  "addressCountry": "US"
                },
                "sameAs": [
                  "https://twitter.com/dexlabs"
                ]
              },
              {
                "@context": "https://schema.org",
                "@type": "SoftwareApplication",
                "name": "dex",
                "description": "Unified data platform for reliable pipelines, workflow automation, and faster insights. Transform data engineering with powerful tools.",
                "url": "https://www.dexlabs.io",
                "applicationCategory": "BusinessApplication",
                "operatingSystem": "Web Browser",
                "offers": {
                  "@type": "Offer",
                  "price": "0",
                  "priceCurrency": "USD"
                },
                "publisher": {
                  "@type": "Organization",
                  "name": "dex Labs",
                  "url": "https://www.dexlabs.io"
                },
                "softwareVersion": "1.0",
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "4.8",
                  "ratingCount": "150"
                },
                "screenshot": "https://www.dexlabs.io/dex-logo-light.png",
                "featureList": [
                  "Data Pipeline Automation",
                  "Workflow Management", 
                  "Real-time Analytics",
                  "Data Integration"
                ]
              }
            ])
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
