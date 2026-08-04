import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const runtime = "nodejs";

const BLUE = "#175cff";
const INK = "#0a0e1a";

export function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const title = (searchParams.get("title") ?? siteConfig.tagline).slice(0, 120);
  const eyebrow = (searchParams.get("eyebrow") ?? "AI Workforce Transformation")
    .slice(0, 48)
    .toUpperCase();

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "#ffffff",
          backgroundImage:
            "radial-gradient(1200px 500px at 15% -10%, rgba(23,92,255,0.14), transparent), radial-gradient(900px 500px at 100% 110%, rgba(18,214,232,0.12), transparent)",
        }}
      >
        {/* Top: brand */}
        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          <div
            style={{
              width: "44px",
              height: "44px",
              borderRadius: "12px",
              background: BLUE,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontSize: "26px",
              fontWeight: 800,
            }}
          >
            iD
          </div>
          <div
            style={{
              display: "flex",
              fontSize: "30px",
              fontWeight: 800,
              color: INK,
            }}
          >
            iDegin
            <span style={{ color: BLUE }}>_</span>
          </div>
        </div>

        {/* Middle: title */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              fontSize: "22px",
              fontWeight: 600,
              letterSpacing: "0.14em",
              color: BLUE,
            }}
          >
            <div style={{ width: "40px", height: "3px", background: BLUE }} />
            {eyebrow}
          </div>
          <div
            style={{
              fontSize: title.length > 60 ? "62px" : "76px",
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              color: INK,
              maxWidth: "1000px",
            }}
          >
            {title}
          </div>
        </div>

        {/* Bottom: url */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "24px",
            color: "#565e76",
          }}
        >
          <div>{siteConfig.domain}</div>
          <div style={{ color: INK, fontWeight: 600 }}>
            Book an AI Workflow Audit →
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
