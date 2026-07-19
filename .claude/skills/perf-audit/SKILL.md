---
name: perf-audit
description: Measure and improve web performance / Core Web Vitals for this Next.js site — LCP, CLS, INP, bundle size, image optimization, fonts, and render-blocking resources. Use when the user mentions performance, page speed, Lighthouse, Core Web Vitals, slow load, bundle size, or optimization.
---

# perf-audit

Profile and optimize performance for this Next.js 16 site.

## Measure first (don't guess)
1. Ensure the app is running (`npm run dev`, or `npm run build && npm run start` for production-representative numbers — always benchmark the production build, not dev).
2. Use chrome-devtools MCP tools:
   - `performance_start_trace` → navigate → `performance_stop_trace` → `performance_analyze_insight` for LCP/CLS/INP breakdowns.
   - `lighthouse_audit` for a scored Performance report.
   - `list_network_requests` to find large/slow/uncompressed assets.

## Common Next.js wins (apply what the trace shows)
- **Images**: use `next/image` with correct `sizes`; serve modern formats; set `priority` on the LCP image; give explicit width/height to prevent CLS.
- **Fonts**: use `next/font` (self-hosted, `display: swap`) instead of external `<link>` — eliminates render-blocking font requests and layout shift.
- **JS shipped**: keep components server-side; push `"use client"` to the leaves; lazy-load heavy client widgets with `next/dynamic`. Check bundle with `npm run build` output.
- **Rendering**: prefer static/ISR over dynamic where content allows; stream with Suspense for slow data.
- **Third-party scripts**: load via `next/script` with the right `strategy` (`lazyOnload`/`afterInteractive`).
- **Caching**: verify `Cache-Control` on static assets.

## Output
Report before/after for the metric that regressed (e.g. LCP 4.1s → 1.9s), and list each change with the file touched. Don't claim an improvement you didn't measure.
