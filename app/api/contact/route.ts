import { NextResponse } from "next/server";
import { siteConfig } from "@/lib/site-config";

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/**
 * Contact / Book-Audit endpoint — delivers leads via ZeptoMail to hello@idegin.com.
 * Requires ZEPTOMAIL_TOKEN + ZEPTOMAIL_FROM (see .env.example). Without them,
 * submissions are accepted and logged (useful in local dev).
 */
export async function POST(req: Request) {
  let data: Record<string, unknown>;
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const name = String(data.name ?? "").trim();
  const email = String(data.email ?? "").trim();
  const company = String(data.company ?? "").trim();

  if (!name || !company || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { error: "Please provide your name, company, and a valid email." },
      { status: 422 },
    );
  }

  const fields: Record<string, string> = {
    Role: String(data.role ?? "—"),
    Phone: String(data.phone ?? "—"),
    "Team size": String(data.teamSize ?? "—"),
    Industry: String(data.industry ?? "—"),
    Message: String(data.message ?? "—"),
  };

  const token = process.env.ZEPTOMAIL_TOKEN;
  const from = process.env.ZEPTOMAIL_FROM;
  const to = process.env.CONTACT_TO ?? siteConfig.contact.email;

  if (token && from) {
    const auth = token.startsWith("Zoho-enczapikey")
      ? token
      : `Zoho-enczapikey ${token}`;
    const url =
      process.env.ZEPTOMAIL_API_URL ?? "https://api.zeptomail.com/v1.1/email";

    const rows = Object.entries(fields)
      .map(
        ([k, v]) =>
          `<tr><td style="padding:4px 16px 4px 0;color:#565e76">${k}</td><td style="padding:4px 0;color:#0a0e1a">${escapeHtml(v)}</td></tr>`,
      )
      .join("");

    const htmlbody = `<div style="font-family:sans-serif">
      <h2 style="color:#175cff">New AI Workflow Audit request</h2>
      <p><strong>${escapeHtml(name)}</strong> — ${escapeHtml(company)}<br/>
      <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
      <table style="border-collapse:collapse">${rows}</table>
    </div>`;

    try {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          Authorization: auth,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          from: { address: from, name: siteConfig.name },
          to: [{ email_address: { address: to, name: siteConfig.shortName } }],
          reply_to: [{ address: email, name }],
          subject: `New audit request — ${name}, ${company}`,
          htmlbody,
        }),
      });
      if (!res.ok) {
        console.error("[contact] ZeptoMail error", res.status, await res.text());
        return NextResponse.json(
          { error: "Could not send right now. Please email us directly." },
          { status: 502 },
        );
      }
    } catch (err) {
      console.error("[contact] ZeptoMail request failed", err);
      return NextResponse.json(
        { error: "Could not send right now. Please email us directly." },
        { status: 502 },
      );
    }
  } else {
    console.warn(
      "[contact] ZEPTOMAIL_TOKEN/ZEPTOMAIL_FROM not set — accepting without delivery.",
      { name, company, email },
    );
  }

  return NextResponse.json({ ok: true });
}
