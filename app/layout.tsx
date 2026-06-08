import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { TopNav } from "@/components/TopNav";
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th">
      <body>
        <TopNav />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
