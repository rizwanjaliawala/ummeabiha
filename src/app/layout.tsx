import type { Metadata } from "next";
import { Amiri, Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/layout/SmoothScroll";
import AnimatedBackground from "@/components/layout/AnimatedBackground";
import { COMPANY } from "@/lib/constants";

const headingFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const arabicFont = Amiri({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-arabic",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Umme Abiha Travel & Tours | Premium Umrah, Hajj & Islamic Tours",
    template: "%s | Umme Abiha Travel & Tours",
  },
  description: "Premium Umrah, Hajj & Islamic Tours from Karachi, Pakistan. Personalized guidance, trusted assistance, and a seamless spiritual journey.",
  keywords: ["Umrah Packages", "Hajj Packages", "Islamic Tours", "Karachi", "Pakistan", "Premium Umrah", "VIP Umrah"],
  authors: [{ name: COMPANY.name }],
  creator: COMPANY.name,
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: COMPANY.website,
    title: "Umme Abiha Travel & Tours",
    description: "Premium Umrah, Hajj & Islamic Tours from Karachi, Pakistan.",
    siteName: COMPANY.name,
  },
  twitter: {
    card: "summary_large_image",
    title: "Umme Abiha Travel & Tours",
    description: "Premium Umrah, Hajj & Islamic Tours from Karachi, Pakistan.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // JSON-LD structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": COMPANY.name,
    "image": `${COMPANY.website}/images/og-image.jpg`,
    "@id": COMPANY.website,
    "url": COMPANY.website,
    "telephone": COMPANY.phone,
    "email": COMPANY.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": COMPANY.address,
      "addressLocality": COMPANY.city,
      "addressRegion": "Sindh",
      "postalCode": "75400",
      "addressCountry": "PK"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 24.8607,
      "longitude": 67.0011
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "priceRange": "$$$"
  };

  return (
    <html
      lang="en"
      className={`${headingFont.variable} ${bodyFont.variable} ${arabicFont.variable} h-full antialiased`}
    >
      <head>
        <meta name="theme-color" content="#d62b2b" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col relative bg-[color:var(--background)] text-[color:var(--foreground)]">
        <SmoothScroll>
          <AnimatedBackground />
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
