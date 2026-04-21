import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  verification: {
    google: "uRTAz7j8N8jDW5BzJaGn-wzrFY5C7KNStVLMKlGzo_4",
  },
  title:
    "JSON to CSV Converter - Convert JSON to CSV Online | json-to-csv",
  description:
    "Free online JSON to CSV converter. Paste JSON, preview as a table, and download CSV instantly. Supports nested objects, custom delimiters, and CSV-to-JSON reverse conversion.",
  keywords: [
    "json to csv",
    "convert json to csv",
    "json csv converter",
    "json to csv online",
    "export json as csv",
  ],
  authors: [{ name: "json-to-csv" }],
  openGraph: {
    title: "JSON to CSV Converter - Convert JSON to CSV Online",
    description:
      "Free online tool to convert JSON arrays to CSV files. Preview, customize delimiters, and download instantly.",
    url: "https://json-to-csv.vercel.app",
    siteName: "json-to-csv",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "JSON to CSV Converter - Convert JSON to CSV Online",
    description:
      "Free online tool to convert JSON arrays to CSV files. Preview, customize delimiters, and download instantly.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://json-to-csv.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "JSON to CSV Converter",
              description:
                "Free online JSON to CSV converter. Paste JSON, preview as a table, and download CSV instantly.",
              url: "https://json-to-csv.vercel.app",
              applicationCategory: "DeveloperApplication",
              operatingSystem: "Any",
              browserRequirements: "Requires JavaScript",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              featureList: [
                "JSON to CSV conversion",
                "CSV to JSON reverse conversion",
                "Table preview",
                "Custom delimiter support",
                "One-click download and copy",
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
