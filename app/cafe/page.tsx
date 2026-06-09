import type { Metadata } from "next";
import { Cafe } from "@/components/Cafe";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://manachai.vercel.app";

export const metadata: Metadata = {
  title: "มานะซัง คาเฟ่ · Cafe mana·san",
  description:
    "คาเฟ่เจลาโต้และเพสตรี้สูตรเฉพาะของบ้านมานะชัย เจลาโต้เม็ดมะม่วงหิมพานต์คั่วใหม่ทุกเช้า · Gelato & pastry cafe in Ranong, next to Manachai Cashews.",
  openGraph: {
    title: "มานะซัง คาเฟ่ · Cafe mana·san — Gelato & Pastry",
    description:
      "คาเฟ่เจลาโต้และเพสตรี้สูตรเฉพาะของบ้านมานะชัย · Gelato & pastry cafe in Ranong.",
    url: `${siteUrl}/cafe`,
    siteName: "Cafe mana·san",
    locale: "th_TH",
    type: "website",
  },
  alternates: { canonical: `${siteUrl}/cafe` },
};

const cafeJsonLd = {
  "@context": "https://schema.org",
  "@type": "CafeOrCoffeeShop",
  name: "Cafe mana·san · มานะซัง",
  alternateName: "มานะซัง",
  description:
    "คาเฟ่เจลาโต้และเพสตรี้สูตรเฉพาะของบ้านมานะชัย · Gelato & pastry cafe next to Manachai Cashews, Ranong",
  url: `${siteUrl}/cafe`,
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

export default function CafePage() {
  return (
    <main className="page" data-page="cafe" data-active="true">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(cafeJsonLd) }}
      />
      <Cafe />
    </main>
  );
}
