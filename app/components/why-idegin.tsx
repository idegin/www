import { Reveal, SectionHeading } from "./reveal";
import { CheckIcon, XMarkIcon } from "./feature-icons";

const traditional = [
  "Starts with technology, not your business",
  "Ships software, then walks away",
  "Sells licenses and seats",
  "Adds another tool to learn",
  "Measures success by delivery",
  "Generic features for everyone",
];

const idegin = [
  "Starts with how your business actually runs",
  "Owns outcomes, then keeps optimizing",
  "Builds an AI workforce around your workflows",
  "Works inside the tools you already use",
  "Measures success by business impact",
  "Designed for your operations, specifically",
];

export function WhyIdegin() {
  return (
    <section
      aria-labelledby="why-heading"
      className="relative bg-background py-20 md:py-28"
    >
      <div className="container-page">
        <SectionHeading
          eyebrow="Why iDegin"
          title={<span id="why-heading">Not a software vendor. A transformation partner.</span>}
          lead="Most AI companies begin with technology. We begin with your business—and stay accountable to the results."
          align="center"
        />

        <div className="mx-auto mt-14 grid max-w-4xl gap-4 md:grid-cols-2">
          {/* Traditional */}
          <Reveal>
            <div className="h-full rounded-2xl border border-line bg-surface-alt p-7">
              <h3 className="text-subheading font-display font-semibold text-muted">
                Traditional software vendor
              </h3>
              <ul className="mt-6 flex flex-col gap-4">
                {traditional.map((t) => (
                  <li key={t} className="flex gap-3 text-small text-muted">
                    <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-neutral-500">
                      <XMarkIcon className="size-3.5" />
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* iDegin — highlighted */}
          <Reveal index={1}>
            <div className="relative h-full overflow-hidden rounded-2xl border border-cobalt-300 bg-surface p-7 shadow-glow ring-1 ring-cobalt-100">
              <span
                className="pointer-events-none absolute -right-10 -top-10 size-32 rounded-full bg-cobalt-200/50 blur-3xl"
                aria-hidden
              />
              <h3 className="relative text-subheading font-display font-semibold text-cobalt-700">
                The iDegin way
              </h3>
              <ul className="relative mt-6 flex flex-col gap-4">
                {idegin.map((t) => (
                  <li key={t} className="flex gap-3 text-small text-ink">
                    <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-cobalt-500 text-white">
                      <CheckIcon className="size-3.5" />
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
