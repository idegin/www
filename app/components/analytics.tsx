import Script from "next/script";
import { siteConfig } from "@/lib/site-config";

/**
 * Google Analytics 4 — loaded only in production, using the gaId from site-config.
 * Uses next/script (afterInteractive) so it never blocks the critical path.
 */
export function Analytics() {
  const id = siteConfig.analytics.gaId;
  if (!id || process.env.NODE_ENV !== "production") return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${id}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${id}',{anonymize_ip:true});`}
      </Script>
    </>
  );
}
