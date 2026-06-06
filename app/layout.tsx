import type { Metadata } from "next";
import "@/styles/colors_and_type.css";
import "@/styles/styles.css";

export const metadata: Metadata = {
  title: "Manachai Cashews · Cafe mana·san",
  description:
    "Hand-roasted Thai cashews from Ranong since 1981, plus Cafe mana·san — gelato & pastry.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th">
      <body>{children}</body>
    </html>
  );
}
