import { ImageResponse } from "next/og";
import { siteMetadata } from "@/lib/data/metadata";

export const alt = siteMetadata.seoTitle;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const geist = await fetch(
    "https://fonts.gstatic.com/s/geist/v1/gyByhwUxId8gMEwSGFWNOITddY4.woff2",
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    <div
      style={{
        background: "#120f18",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px",
        fontFamily: "Geist",
        position: "relative",
      }}
    >
      {/* Left accent bar */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: "10%",
          height: "80%",
          width: "4px",
          background: "linear-gradient(to bottom, #a755f7, transparent)",
          borderRadius: "0 4px 4px 0",
        }}
      />

      {/* Tag */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          marginBottom: "32px",
        }}
      >
        <div
          style={{
            width: "8px",
            height: "8px",
            borderRadius: "50%",
            background: "#a755f7",
          }}
        />
        <span
          style={{
            color: "#988bc7",
            fontSize: "16px",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
          }}
        >
          Portfolio
        </span>
      </div>

      {/* Name */}
      <div
        style={{
          color: "#dad2f6",
          fontSize: "72px",
          fontWeight: 700,
          lineHeight: 1.1,
          marginBottom: "16px",
        }}
      >
        {siteMetadata.name}
      </div>

      {/* Title */}
      <div
        style={{
          color: "#a755f7",
          fontSize: "28px",
          fontWeight: 500,
          marginBottom: "24px",
        }}
      >
        {siteMetadata.tagline}
      </div>

      {/* Description */}
      <div
        style={{
          color: "#dad2f670",
          fontSize: "18px",
          lineHeight: 1.6,
          maxWidth: "760px",
        }}
      >
        {siteMetadata.seoDescription}
      </div>

      {/* URL */}
      <div
        style={{
          position: "absolute",
          bottom: "60px",
          right: "80px",
          color: "#988bc7",
          fontSize: "16px",
          letterSpacing: "0.05em",
        }}
      >
        {siteMetadata.url}
      </div>
    </div>,
    {
      ...size,
      fonts: [{ name: "Geist", data: geist, style: "normal", weight: 700 }],
    },
  );
}
