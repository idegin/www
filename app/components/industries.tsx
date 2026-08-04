import Image from "next/image";
import Link from "next/link";
import { Reveal, SectionHeading } from "./reveal";
import { ArrowUpRightIcon } from "./icons";
import { getIndustries } from "@/lib/industries";

export function Industries() {
  const items = getIndustries();

  return (
    <section
      aria-labelledby="industries-heading"
      className="relative bg-surface-alt py-20 md:py-28"
    >
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Industries we serve"
            title={
              <span id="industries-heading">Built for how your sector works</span>
            }
            lead="We bring AI workforce expertise to the industries driving Nigeria's economy."
          />
          <Reveal index={2}>
            <Link
              href="/industries"
              className="group inline-flex items-center gap-2 text-button text-cobalt-600 transition-colors hover:text-cobalt-700"
            >
              View all industries
              <ArrowUpRightIcon className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {items.map((it, i) => (
            <Reveal key={it.slug} index={i % 4}>
              <Link
                href={`/industries/${it.slug}`}
                className="group relative block aspect-4/5 overflow-hidden rounded-2xl border border-line focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cobalt-500"
              >
                <Image
                  src={it.image}
                  alt={`${it.name} — AI workforce transformation`}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover transition-transform duration-500 ease-out-expo group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-cobalt-950/90 via-cobalt-950/25 to-transparent"
                  aria-hidden
                />
                <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                  <h3 className="text-subheading font-display font-semibold">
                    {it.name}
                  </h3>
                  <p className="mt-1 max-h-0 overflow-hidden text-small text-white/85 opacity-0 transition-all duration-300 ease-out-expo group-hover:max-h-20 group-hover:opacity-100">
                    {it.tagline}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
