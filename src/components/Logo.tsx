import Image from "next/image";
import Link from "next/link";

export function Logo({ className = "", inverted = true }: { className?: string; inverted?: boolean }) {
  const main = inverted ? "text-white" : "text-ink";
  const sub = inverted ? "text-white/60" : "text-muted";
  return (
    <Link href="/" aria-label="ZOLA Property Management — Home" className={`group inline-flex items-center gap-2.5 ${className}`}>
      <Image
        src="/images/logo.png"
        alt=""
        width={40}
        height={40}
        priority
        className="h-10 w-10 object-contain"
      />
      <span className="leading-none">
        <span className={`block font-display text-base font-extrabold tracking-tight ${main}`}>ZOLA</span>
        <span className={`block text-[10px] font-semibold uppercase tracking-[0.18em] ${sub}`}>Property Management</span>
      </span>
    </Link>
  );
}
