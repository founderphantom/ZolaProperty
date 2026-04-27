import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { AREAS, SITE } from "@/lib/site";
import { Logo } from "./Logo";

function SocialIcon({ children }: { children: React.ReactNode }) {
  return <span className="grid h-9 w-9 place-items-center rounded-full bg-white/5 hover:bg-gold hover:text-black">{children}</span>;
}

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="container-x grid gap-10 py-14 lg:grid-cols-4">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm text-white/60">
            Ontario&apos;s trusted leasing experts. Placing AAA tenants in GTA rentals — fast, with no upfront fees.
          </p>
          <div className="mt-5 flex items-center gap-3">
            <a href={SITE.social.facebook} aria-label="Facebook"><SocialIcon><svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4"><path d="M13 22v-8h2.7l.4-3H13V9.2c0-.9.3-1.5 1.6-1.5H16V5.1c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3V11H7v3h2.3v8H13z"/></svg></SocialIcon></a>
            <a href={SITE.social.instagram} aria-label="Instagram"><SocialIcon><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg></SocialIcon></a>
            <a href={SITE.social.google} aria-label="Google Maps"><SocialIcon><MapPin className="h-4 w-4" /></SocialIcon></a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-gold">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li><Link href="/" className="hover:text-white">Home</Link></li>
            <li><Link href="/how-it-works" className="hover:text-white">How It Works</Link></li>
            <li><Link href="/services" className="hover:text-white">Services</Link></li>
            <li><Link href="/about" className="hover:text-white">About Us</Link></li>
            <li><Link href="/faq" className="hover:text-white">FAQ</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-gold">Areas We Serve</h3>
          <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-white/70">
            {AREAS.slice(0, 10).map((a) => (
              <li key={a}><Link href="/areas-we-serve" className="hover:text-white">{a}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-gold">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            <li><a href={SITE.phoneHref} className="flex items-center gap-2 hover:text-white"><Phone className="h-4 w-4 text-gold" /> {SITE.phone}</a></li>
            <li><a href={`mailto:${SITE.email}`} className="flex items-center gap-2 hover:text-white"><Mail className="h-4 w-4 text-gold" /> {SITE.email}</a></li>
            <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 text-gold" /> Serving the GTA &amp; Surrounding Regions</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-5 text-xs text-white/50 sm:flex-row">
          <p>© {new Date().getFullYear()} ZOLA Property Management. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
