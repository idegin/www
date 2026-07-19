import { NextResponse } from "next/server";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type ContactPayload = {
  name?: string;
  email?: string;
  company?: string;
  industry?: string;
  size?: string;
  challenge?: string;
  time?: string;
};

export async function POST(request: Request) {
  let data: ContactPayload;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = data.name?.trim();
  const email = data.email?.trim();
  const company = data.company?.trim();

  if (!name || !email || !company) {
    return NextResponse.json(
      { error: "Name, work email, and company are required." },
      { status: 422 }
    );
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json(
      { error: "Enter a valid work email." },
      { status: 422 }
    );
  }

  const webhook = process.env.CONTACT_WEBHOOK_URL;
  if (webhook) {
    try {
      const res = await fetch(webhook, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ ...data, name, email, company, source: "discovery-form" }),
      });
      if (!res.ok) throw new Error(`Webhook responded ${res.status}`);
    } catch (error) {
      console.error("[contact] webhook delivery failed", error);
      return NextResponse.json(
        { error: "We couldn't submit your request. Please try again or email us." },
        { status: 502 }
      );
    }
  } else {
    console.info("[contact] discovery request received", {
      name,
      email,
      company,
      industry: data.industry,
      size: data.size,
      time: data.time,
    });
  }

  return NextResponse.json({ ok: true });
}
