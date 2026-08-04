import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

const RATIO = 717 / 166;

type LogoProps = {
  /** Use the white mark for dark (Void) backgrounds; blue mark for light. */
  onDark?: boolean;
  /** Rendered height in px (width derived from the logo aspect ratio). */
  height?: number;
  priority?: boolean;
  className?: string;
};

/** Brand wordmark ("iDegin_") — links home. */
export function Logo({
  onDark = true,
  height = 30,
  priority = false,
  className,
}: LogoProps) {
  const src = onDark ? "/brand/logo-dark.png" : "/brand/logo-light.png";
  return (
    <Link
      href="/"
      aria-label={`${siteConfig.name} — home`}
      className={`inline-flex items-center rounded-sm transition-opacity duration-200 hover:opacity-80 focus-visible:opacity-100 ${className ?? ""}`}
    >
      <Image
        src={src}
        alt={siteConfig.name}
        height={height}
        width={Math.round(height * RATIO)}
        priority={priority}
        className="h-7 w-auto"
      />
    </Link>
  );
}
