import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "@/styles/colors_and_type.css";
import "@/styles/styles.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://manachai.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "มานะชัย · Manachai Cashews",
    template: "%s · มานะชัย",
  },
  description:
    "เม็ดมะม่วงหิมพานต์คั่วสด จากระนอง ตั้งแต่ปี 2524 · Hand-roasted Thai cashews from Ranong since 1981. Plus Cafe mana·san — gelato & pastry.",
  keywords: [
    "มะม่วงหิมพานต์",
    "เม็ดมะม่วงหิมพานต์",
    "cashew",
    "cashew nuts",
    "ระนอง",
    "Ranong",
    "มานะชัย",
    "Manachai",
    "คาเฟ่ระนอง",
    "เจลาโต้",
    "gelato",
    "cafe mana san",
  ],
  openGraph: {
    title: "มานะชัย · Manachai Cashews + Cafe mana·san",
    description:
      "เม็ดมะม่วงหิมพานต์คั่วสด จากระนอง ตั้งแต่ปี 2524 · Hand-roasted Thai cashews from Ranong since 1981.",
    url: siteUrl,
    siteName: "Manachai Cashews",
    images: [
      {
        url: "/images/hero.JPG",
        width: 1200,
        height: 630,
        alt: "มานะชัย เม็ดมะม่วงหิมพานต์ · Manachai Cashews — Ranong, Thailand",
      },
    ],
    locale: "th_TH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "มานะชัย · Manachai Cashews",
    description:
      "Hand-roasted Thai cashews from Ranong since 1981. Plus Cafe mana·san — gelato & pastry.",
    images: ["/images/hero.JPG"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: siteUrl },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

const shopJsonLd = {
  "@context": "https://schema.org",
  "@type": "Store",
  name: "มานะชัย · Manachai Cashews",
  alternateName: "Manachai Cashews",
  description:
    "เม็ดมะม่วงหิมพานต์คั่วสด จากระนอง ตั้งแต่ปี 2524 · Hand-roasted Thai cashews from Ranong since 1981",
  url: siteUrl,
  telephone: "+66626549893",
  address: {
    "@type": "PostalAddress",
    streetAddress: "145/2 Moo 4, Phetkasem Rd",
    addressLocality: "Mueang Ranong",
    addressRegion: "Ranong",
    postalCode: "85000",
    addressCountry: "TH",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "08:00",
      closes: "18:00",
    },
  ],
  sameAs: [
    "https://line.me/ti/p/%40manachai",
    "https://facebook.com/manachaicashews",
  ],
  image: `${siteUrl}/images/hero.JPG`,
  hasMap: "https://maps.app.goo.gl/6LSfvmXinM7KiAMb7",
};

const cafeJsonLd = {
  "@context": "https://schema.org",
  "@type": "CafeOrCoffeeShop",
  name: "Cafe mana·san · มานะซัง",
  alternateName: "มานะซัง",
  description:
    "คาเฟ่เจลาโต้และเพสตรี้สูตรเฉพาะของบ้านมานะชัย · Gelato & pastry cafe next to Manachai Cashews, Ranong",
  url: siteUrl,
  telephone: "+66626549893",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Phetkasem Rd",
    addressLocality: "Mueang Ranong",
    addressRegion: "Ranong",
    postalCode: "85000",
    addressCountry: "TH",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Sunday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Friday", "Saturday"],
      opens: "08:00",
      closes: "19:00",
    },
  ],
  servesCuisine: ["Gelato", "Pastry", "Coffee"],
  sameAs: [
    "https://line.me/ti/p/%40manachai",
    "https://facebook.com/manachaicashews",
  ],
  hasMap: "https://maps.app.goo.gl/6LSfvmXinM7KiAMb7",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(shopJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(cafeJsonLd) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
