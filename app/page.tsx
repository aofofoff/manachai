import { NutShop } from "@/components/NutShop";
import {
  roastedCashews,
  charcoalCashews,
  otherNuts,
  shrimpPastes,
} from "@/lib/content";
import { FACEBOOK_URL, GOOGLE_MAPS_URL, GEO } from "@/lib/links";
import { faqs } from "@/lib/faq";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://manachai.vercel.app";

const priceNum = (s: string) => {
  const n = parseInt(s.replace(/[^0-9]/g, ""), 10);
  return Number.isFinite(n) ? n : null;
};

const brand = { "@type": "Brand", name: "Manachai" };

const cashewProducts = [
  ...roastedCashews,
  ...charcoalCashews,
  ...otherNuts,
].map((p) => {
  const nums = p.prices
    .map((r) => priceNum(r.price))
    .filter((n): n is number => n !== null);
  return {
    "@type": "Product",
    name: p.nameEn,
    description: p.variants.join(" · "),
    image: `${siteUrl}${p.image || "/images/hero.JPG"}`,
    brand,
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "THB",
      lowPrice: Math.min(...nums),
      highPrice: Math.max(...nums),
      offerCount: p.prices.length,
    },
  };
});

const shrimpProducts = shrimpPastes
  .filter((s) => s.image && priceNum(s.price) !== null)
  .map((s) => ({
    "@type": "Product",
    name: s.nameEn,
    image: `${siteUrl}${s.image}`,
    brand,
    offers: {
      "@type": "Offer",
      priceCurrency: "THB",
      price: priceNum(s.price),
      availability: "https://schema.org/InStock",
    },
  }));

const productJsonLd = {
  "@context": "https://schema.org",
  "@graph": [...cashewProducts, ...shrimpProducts],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
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
  geo: {
    "@type": "GeoCoordinates",
    latitude: GEO.latitude,
    longitude: GEO.longitude,
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
  sameAs: ["https://line.me/ti/p/%40manachai", FACEBOOK_URL],
  image: `${siteUrl}/images/hero.JPG`,
  hasMap: GOOGLE_MAPS_URL,
};

export default function Home() {
  return (
    <main className="page" data-page="nuts" data-active="true" id="main-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(shopJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <NutShop />
    </main>
  );
}
