import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Manachai Cashews · Cafe mana·san",
    short_name: "Manachai",
    description:
      "เม็ดมะม่วงหิมพานต์คั่วมือจากระนอง ตั้งแต่ปี 2524 · Hand-roasted Thai cashews from Ranong since 1981.",
    start_url: "/",
    display: "standalone",
    background_color: "#f6f3ee",
    theme_color: "#000000",
    icons: [
      { src: "/assets/logo-manachai.jpg", sizes: "960x960", type: "image/jpeg" },
    ],
  };
}
