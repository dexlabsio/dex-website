import type { Metadata } from "next";
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
  description: "A unified data platform that helps teams build reliable data pipelines, automate workflows, and get insights faster. Transform your data engineering with powerful automation and collaboration tools.",
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
        url: "/og-image.jpg",
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
    images: ["/og-image.jpg"],
    creator: "@dexlabs",
    site: "@dexlabs",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "dex",
              "description": "A unified data platform that helps teams build reliable data pipelines, automate workflows, and get insights faster.",
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
              }
            })
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
