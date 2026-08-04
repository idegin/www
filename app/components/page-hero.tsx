import Link from "next/link";
import type { ReactNode } from "react";
import { AgentGraph } from "./agent-graph";
import { Reveal } from "./reveal";
import { ArrowUpRightIcon } from "./icons";
import { siteConfig } from "@/lib/site-config";

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  cta?: boolean;
  align?: "left" | "center";
};

/** Compact interior-page hero — light, blue-accented, with the node-graph motif. */
export function PageHero({
  eyebrow,
  title,
  lead,
  cta = true,
  align = "left",
}: PageHeroProps) {
  const centered = align === "center";
  return (
    <section className="relative isolate overflow-hidden bg-background pb-14 pt-32 md:pb-20 md:pt-40">
      <div
        className="bg-brand-mesh absolute inset-0 -z-10 opacity-60 blur-3xl"
        aria-hidden
      />
      <AgentGraph className="absolute inset-0 -z-10 h-full w-full opacity-40" />
      <div
        className="bg-grid absolute inset-0 -z-10 text-cobalt-500/50 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]"
        aria-hidden
      />
      <div
        className="absolute inset-x-0 top-0 -z-10 h-56 bg-gradient-to-b from-cobalt-50 to-transparent"
        aria-hidden
      />

      <div className="container-page">
        <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
          <Reveal>
            <span
              className={`eyebrow inline-flex items-center gap-2 text-cobalt-600 ${centered ? "justify-center" : ""}`}
            >
              <span className="h-px w-6 bg-cobalt-400" aria-hidden />
              {eyebrow}
            </span>
          </Reveal>
          <Reveal index={1}>
            <h1 className="mt-4 text-display font-display font-bold text-ink">
              {title}
            </h1>
          </Reveal>
          {lead ? (
            <Reveal index={2}>
              <p
                className={`mt-5 text-body-lg text-muted ${centered ? "mx-auto max-w-2xl" : "max-w-2xl"}`}
              >
                {lead}
              </p>
            </Reveal>
          ) : null}
          {cta ? (
            <Reveal index={3}>
              <div
                className={`mt-8 flex flex-col gap-3 sm:flex-row ${centered ? "sm:justify-center" : ""}`}
              >
                <Link
                  href={siteConfig.cta.href}
                  className="group inline-flex items-center justify-center gap-2 rounded-md bg-cobalt-500 px-6 py-3.5 text-button text-white shadow-glow transition-all duration-200 hover:-translate-y-0.5 hover:bg-cobalt-600 hover:shadow-glow-strong"
                >
                  {siteConfig.cta.label}
                  <ArrowUpRightIcon className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </Reveal>
          ) : null}
        </div>
      </div>
    </section>
  );
}
