type SectionHeaderProps = {
  index?: string;
  kicker: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  center?: boolean;
  className?: string;
};

export function SectionHeader({
  index,
  kicker,
  title,
  intro,
  center = false,
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={`${center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"} ${className}`}>
      <p className={`kicker inline-flex items-center gap-2 ${center ? "justify-center" : ""}`}>
        {index ? <span className="text-muted">{index}</span> : null}
        {kicker}
      </p>
      <h2 className="mt-4 font-display text-3xl font-semibold text-strong sm:text-4xl">
        {title}
      </h2>
      {intro ? <p className="mt-4 text-lg text-muted">{intro}</p> : null}
    </div>
  );
}
