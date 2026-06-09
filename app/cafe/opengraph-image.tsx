import { ImageResponse } from "next/og";

export const alt = "Cafe mana·san — Gelato & Pastry in Ranong";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function CafeOpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px 90px",
          background: "linear-gradient(135deg, #f6f3ee 0%, #efe4d6 100%)",
        }}
      >
        <div
          style={{
            fontSize: 26,
            fontWeight: 700,
            letterSpacing: 8,
            color: "#b8531d",
            textTransform: "uppercase",
          }}
        >
          A Manachai Family Project · Ranong
        </div>
        <div
          style={{
            fontSize: 116,
            fontWeight: 800,
            color: "#1d1d1f",
            lineHeight: 1,
            marginTop: 18,
          }}
        >
          Cafe mana·san
        </div>
        <div
          style={{
            fontSize: 40,
            fontWeight: 600,
            color: "#b8531d",
            marginTop: 24,
          }}
        >
          Gelato &amp; Pastry
        </div>
        <div
          style={{
            marginTop: 40,
            fontSize: 26,
            color: "#7a7a7a",
          }}
        >
          Signature Cashew Gelato · roasted fresh every morning
        </div>
      </div>
    ),
    { ...size }
  );
}
