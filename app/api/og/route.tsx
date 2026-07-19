import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const runtime = "edge";

const size = { width: 1200, height: 630 };

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const title = (searchParams.get("title") ?? siteConfig.tagline).slice(0, 120);
  const kicker = (searchParams.get("kicker") ?? "iDegin Technologies").slice(0, 60);
  const eyebrow = searchParams.get("eyebrow") ?? "AI Transformation Partner";
  const logoSrc = `${origin}/brand/logo-dark.png`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          backgroundColor: "#0a1028",
          backgroundImage:
            "radial-gradient(1000px 500px at 12% -10%, rgba(23,92,255,0.45), transparent), radial-gradient(800px 500px at 100% 110%, rgba(245,166,35,0.16), transparent)",
          color: "#ffffff",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: "28px",
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: "8px",
          }}
        />
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <div
              style={{
                width: "14px",
                height: "14px",
                borderRadius: "9999px",
                backgroundColor: "#5884ff",
              }}
            />
            <div
              style={{
                fontSize: "24px",
                letterSpacing: "4px",
                textTransform: "uppercase",
                color: "#8daeff",
              }}
            >
              {eyebrow}
            </div>
          </div>
          <div style={{ fontSize: "22px", letterSpacing: "3px", color: "#6c7589", textTransform: "uppercase" }}>
            {siteConfig.domain}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div style={{ fontSize: "26px", letterSpacing: "3px", color: "#f5a623", textTransform: "uppercase" }}>
            {kicker}
          </div>
          <div
            style={{
              fontSize: title.length > 60 ? "64px" : "82px",
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-2px",
              maxWidth: "1000px",
            }}
          >
            {title}
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoSrc} alt="iDegin Technologies" height={52} width={225} />
          <div style={{ fontSize: "22px", color: "#98a1b4" }}>
            {siteConfig.contact.address.full}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
