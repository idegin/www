import { NextResponse } from "next/server";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let email: string | undefined;
  try {
    const data = await request.json();
    email = typeof data.email === "string" ? data.email.trim() : undefined;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  if (!email || !EMAIL_RE.test(email)) {
    return NextResponse.json(
      { error: "Enter a valid work email." },
      { status: 422 }
    );
  }

  const webhook = process.env.NEWSLETTER_WEBHOOK_URL;
  if (webhook) {
    try {
      const res = await fetch(webhook, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email, source: "newsletter" }),
      });
      if (!res.ok) throw new Error(`Webhook responded ${res.status}`);
    } catch (error) {
      console.error("[subscribe] webhook delivery failed", error);
      return NextResponse.json(
        { error: "We couldn't subscribe you. Please try again." },
        { status: 502 }
      );
    }
  } else {
    console.info("[subscribe] newsletter signup", { email });
  }

  return NextResponse.json({ ok: true });
}
