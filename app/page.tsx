import { NutShop } from "@/components/NutShop";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://manachai.vercel.app";

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

export default function Home() {
  return (
    <main className="page" data-page="nuts" data-active="true">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(shopJsonLd) }}
      />
      <NutShop />
    </main>
  );
}
