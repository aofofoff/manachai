import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { TopNav } from "@/components/TopNav";
import "@/styles/colors_and_type.css";
import "@/styles/styles.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-inter",
});

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
    locale: "th_TH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "มานะชัย · Manachai Cashews",
    description:
      "Hand-roasted Thai cashews from Ranong since 1981. Plus Cafe mana·san — gelato & pastry.",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: siteUrl },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th" className={inter.variable}>
      <body>
        <a href="#main-content" className="skip-link">
          ข้ามไปยังเนื้อหา · Skip to content
        </a>
        <TopNav />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
