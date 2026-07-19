import Image from "next/image";

type PostCoverProps = {
  title: string;
  category: string;
  thumbnail?: string;
  className?: string;
  priority?: boolean;
};

export function PostCover({
  title,
  category,
  thumbnail,
  className = "",
  priority = false,
}: PostCoverProps) {
  if (thumbnail) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <Image
          src={thumbnail}
          alt={title}
          fill
          priority={priority}
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    );
  }

  return (
    <div
      className={`dark relative overflow-hidden bg-depth grain ${className}`}
      role="img"
      aria-label={title}
    >
      <div
        className="pointer-events-none absolute inset-0 blueprint-grid opacity-50"
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute inset-0 bg-aurora" aria-hidden="true" />
      <span className="reg-mark left-3 top-3" aria-hidden="true" />
      <span className="reg-mark right-3 bottom-3" aria-hidden="true" />
      <div className="relative flex h-full flex-col justify-between p-6">
        <p className="kicker text-primary-400">{category}</p>
        <p className="max-w-md font-display text-xl font-semibold text-white">
          {title}
        </p>
      </div>
    </div>
  );
}
