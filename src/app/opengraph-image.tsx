import { ImageResponse } from "next/og";

export const alt = "SBTI - Silly Behavioral Type Indicator (Japanese Edition)";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#000",
          color: "#fafafa",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "80px",
        }}
      >
        <div
          style={{
            fontSize: 22,
            color: "#a3e635",
            letterSpacing: 10,
            marginBottom: 40,
          }}
        >
          JAPANESE EDITION · BETA
        </div>
        <div
          style={{
            fontSize: 240,
            fontWeight: 900,
            letterSpacing: -8,
            lineHeight: 1,
          }}
        >
          SBTI
        </div>
        <div
          style={{
            fontSize: 36,
            color: "#a1a1aa",
            marginTop: 32,
          }}
        >
          Silly Behavioral Type Indicator
        </div>
        <div
          style={{
            fontSize: 24,
            color: "#71717a",
            marginTop: 60,
          }}
        >
          27 types · 10 questions · ~2 min
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
