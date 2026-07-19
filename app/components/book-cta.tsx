import Link from "next/link";
import { IconArrowRight } from "./icons";

type BookCtaProps = {
  href?: string;
  children?: React.ReactNode;
  variant?: "solid" | "outline" | "ghost";
  size?: "md" | "lg";
  showArrow?: boolean;
  className?: string;
  onClick?: () => void;
};

const VARIANTS = {
  solid: "bg-brand text-on-brand shadow-sm hover:bg-brand-hover hover:shadow-glow",
  outline: "border border-border-strong text-strong hover:bg-surface-sunken",
  ghost: "text-body hover:text-strong",
};

const SIZES = {
  md: "h-11 px-5 text-sm",
  lg: "h-13 px-6 text-base",
};

export function BookCta({
  href = "/contact",
  children = "Book Discovery",
  variant = "solid",
  size = "md",
  showArrow = true,
  className = "",
  onClick,
}: BookCtaProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`group inline-flex items-center justify-center gap-2 rounded-md font-medium transition duration-200 ${VARIANTS[variant]} ${SIZES[size]} ${className}`}
    >
      <span>{children}</span>
      {showArrow ? (
        <IconArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
      ) : null}
    </Link>
  );
}
