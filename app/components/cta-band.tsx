import { BookCta } from "./book-cta";

type CtaBandProps = {
  title?: React.ReactNode;
  intro?: React.ReactNode;
};

export function CtaBand({ title, intro }: CtaBandProps) {
  return (
    <section className="dark relative overflow-hidden bg-depth grain">
      <div
        className="pointer-events-none absolute inset-0 blueprint-grid opacity-40"
        aria-hidden="true"
      />
      <span className="reg-mark left-5 top-6 sm:left-8" aria-hidden="true" />
      <span className="reg-mark right-5 bottom-6 sm:right-8" aria-hidden="true" />
      <div className="shell relative flex flex-col items-center gap-8 py-section text-center">
        <div className="max-w-2xl">
          <p className="kicker text-primary-400">Ready?</p>
          <h2 className="mt-4 font-display text-3xl font-semibold text-white sm:text-4xl">
            {title ?? "Ready to build your AI workforce"}
            <span className="caret text-gold-400" aria-hidden="true" />
          </h2>
          <p className="mt-5 text-lg text-ink-300">
            {intro ??
              "Book an AI Discovery Session and we'll map your highest-ROI automation opportunity — no cost, no obligation."}
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <BookCta size="lg" />
          <BookCta href="/contact" variant="outline" size="lg" showArrow={false}>
            Talk to an engineer
          </BookCta>
        </div>
      </div>
    </section>
  );
}
