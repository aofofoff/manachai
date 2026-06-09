import { ImageResponse } from "next/og";

export const alt = "Manachai Cashews — Hand-Roasted Thai Cashews from Ranong";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
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
          Ranong · Since 1981
        </div>
        <div
          style={{
            fontSize: 132,
            fontWeight: 800,
            color: "#1d1d1f",
            lineHeight: 1,
            marginTop: 18,
          }}
        >
          MANACHAI
        </div>
        <div
          style={{
            fontSize: 40,
            fontWeight: 600,
            color: "#b8531d",
            marginTop: 24,
          }}
        >
          Hand-Roasted Thai Cashews
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginTop: 40,
            fontSize: 26,
            color: "#7a7a7a",
          }}
        >
          <span
            style={{
              background: "#b8531d",
              color: "#fff",
              padding: "8px 20px",
              borderRadius: 999,
              fontSize: 22,
              fontWeight: 600,
            }}
          >
            Cafe mana·san
          </span>
          <span>Gelato &amp; Pastry · est 2524</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
