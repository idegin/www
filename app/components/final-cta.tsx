import Image from "next/image";
import Link from "next/link";
import { Reveal } from "./reveal";
import { ArrowUpRightIcon, ArrowRightIcon } from "./icons";
import { siteConfig } from "@/lib/site-config";

export function FinalCta() {
  return (
    <section
      aria-labelledby="final-cta-heading"
      className="relative isolate overflow-hidden bg-cobalt-950"
    >
      {/* Full-bleed background image + brand overlay */}
      <div className="absolute inset-0 -z-10" aria-hidden>
        <Image
          src="https://images.unsplash.com/photo-1524230572899-a752b3835840?auto=format&fit=crop&w=1920&q=70"
          alt=""
          fill
          sizes="100vw"
          className="animate-drift object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-cobalt-950 via-cobalt-900/85 to-cobalt-700/70" />
        <div className="bg-grid absolute inset-0 text-white/50 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      </div>

      <div className="container-page grid place-items-center py-24 text-center md:py-32">
        <Reveal>
          <span className="eyebrow text-cobalt-100">Ready when you are</span>
        </Reveal>
        <Reveal index={1}>
          <h2
            id="final-cta-heading"
            className="mt-5 max-w-3xl text-display font-display font-bold text-white"
          >
            Your business doesn&apos;t need more people. It needs a better
            system.
          </h2>
        </Reveal>
        <Reveal index={2}>
          <p className="mt-5 max-w-xl text-body-lg text-cobalt-100">
            Book your AI Workflow Audit and see exactly where an AI workforce
            pays off—mapped to your operations, in weeks not months.
          </p>
        </Reveal>
        <Reveal index={3}>
          <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
            <Link
              href={siteConfig.cta.href}
              className="group inline-flex items-center justify-center gap-2 rounded-md bg-white px-7 py-4 text-button text-cobalt-700 shadow-glow-strong transition-all duration-200 hover:-translate-y-0.5 hover:bg-cobalt-50"
            >
              {siteConfig.cta.label}
              <ArrowUpRightIcon className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link
              href="/solutions"
              className="group inline-flex items-center justify-center gap-2 rounded-md border border-white/25 px-7 py-4 text-button text-white transition-colors duration-200 hover:border-white hover:bg-white/10"
            >
              Explore solutions
              <ArrowRightIcon className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
