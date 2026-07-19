import Image from "next/image";

const SOURCES = {
  light: "/brand/logo-light.png",
  dark: "/brand/logo-dark.png",
};

type LogoProps = {
  variant?: "light" | "dark";
  className?: string;
  priority?: boolean;
};

export function Logo({
  variant = "light",
  className = "h-8 w-auto",
  priority = false,
}: LogoProps) {
  return (
    <Image
      src={SOURCES[variant]}
      alt="iDegin Technologies"
      width={716}
      height={166}
      priority={priority}
      className={className}
    />
  );
}
