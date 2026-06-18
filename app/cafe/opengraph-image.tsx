import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Cafe mana·san — Homemade Gelato in Ranong";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function CafeOpengraphImage() {
  const photo = await readFile(
    join(process.cwd(), "public/images/cafe/ice-cream-box.JPG")
  );
  const photoSrc = `data:image/jpeg;base64,${photo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={photoSrc}
          width={1200}
          height={630}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            background:
              "linear-gradient(180deg, rgba(0,0,0,0) 38%, rgba(18,11,5,0.85) 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 70,
            bottom: 60,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              fontSize: 24,
              fontWeight: 700,
              letterSpacing: 6,
              color: "#f1cba8",
              textTransform: "uppercase",
            }}
          >
            Ranong · A Manachai Project
          </div>
          <div
            style={{
              fontSize: 94,
              fontWeight: 800,
              color: "#ffffff",
              lineHeight: 1,
              marginTop: 14,
            }}
          >
            Cafe mana·san
          </div>
          <div
            style={{
              fontSize: 38,
              fontWeight: 600,
              color: "#ffffff",
              marginTop: 16,
            }}
          >
            Homemade Gelato
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
