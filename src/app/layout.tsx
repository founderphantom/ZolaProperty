import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SITE } from "@/lib/site";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | Rent to AAA Tenants — Fast`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  keywords: [
    "Toronto property management",
    "GTA property management",
    "tenant placement Toronto",
    "rental property management Ontario",
    "AAA tenants",
    "rent my property GTA",
    "leasing experts Ontario",
    "Zola Property Management",
  ],
  authors: [{ name: SITE.name }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE.url,
    title: `${SITE.name} | Rent to AAA Tenants — Fast`,
    description: SITE.description,
    siteName: SITE.name,
    locale: "en_CA",
    images: [{ url: "/images/hero.jpg", width: 1536, height: 1024, alt: SITE.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} | Rent to AAA Tenants — Fast`,
    description: SITE.description,
    images: ["/images/hero.jpg"],
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE.url}#business`,
    name: SITE.name,
    url: SITE.url,
    telephone: `+1-${SITE.phone}`,
    email: SITE.email,
    image: `${SITE.url}/images/hero.jpg`,
    priceRange: "$$",
    areaServed: { "@type": "AdministrativeArea", name: "Greater Toronto Area" },
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE.address.locality,
      addressRegion: SITE.address.administrativeArea,
      addressCountry: SITE.address.country,
    },
    sameAs: [SITE.social.facebook, SITE.social.instagram, SITE.social.google],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "100",
    },
  };

  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable} h-full`}>
      <body className="min-h-full bg-ink text-white antialiased">
        <Header />
        <main className="bg-white text-ink">{children}</main>
        <Footer />
        <Script
          id="ld-localbusiness"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </body>
    </html>
  );
}
