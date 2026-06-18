import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { TopNav } from "@/components/TopNav";
import { LINE_URL } from "@/lib/links";
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
        <a
          className="floating-order"
          href={LINE_URL}
          target="_blank"
          rel="noopener"
          aria-label="สั่งซื้อทางไลน์ · Order on LINE"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
            <path d="M12 2C6.48 2 2 5.69 2 10.25c0 4.09 3.64 7.51 8.56 8.15.33.07.79.22.9.5.1.26.07.66.03.92l-.14.87c-.04.26-.2 1.01.89.55 1.09-.46 5.86-3.45 8-5.91 1.47-1.62 2.17-3.26 2.17-5.08C24 5.69 17.52 2 12 2z" />
          </svg>
          สั่งทางไลน์
        </a>
        <Analytics />
      </body>
    </html>
  );
}
