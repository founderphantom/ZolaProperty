import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";

export const metadata = {
  title: "Services — Tenant Placement & Full-Service Property Management",
  description: "Two ways to work with ZOLA: tenant placement (one-time fee) or full-service property management (monthly). Both include AAA screening and zero upfront fees.",
  alternates: { canonical: "/services" },
};

const TIERS = [
  {
    name: "Tenant Placement",
    price: "Pay only when leased",
    sub: "One-time fee.",
    bullets: [
      "Strategy & pricing analysis",
      "Professional photography (where applicable)",
      "Listings on Kijiji, Facebook Marketplace, Realtor.ca",
      "All inquiries and showings handled",
      "7-point AAA tenant screening (SingleKey)",
      "Ontario standard lease prep & signing",
      "Move-in coordination",
    ],
    cta: "Book a free strategy call",
  },
  {
    name: "Full-Service Management",
    price: "Monthly %",
    sub: "Hands-off ownership.",
    bullets: [
      "Everything in Tenant Placement",
      "Monthly rent collection & owner statements",
      "24/7 maintenance request handling",
      "Vetted vendor network with 3 quotes per repair",
      "Annual rent reviews & lease renewals",
      "Same-day tenant response",
      "$1M E&O insurance protection",
    ],
    cta: "Talk to a manager",
    highlight: true,
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader eyebrow="Services" title="Choose how hands-on you want to be." subtitle="From a single tenant placement to fully hands-off management — both come with our AAA tenant guarantee." />
      <section className="section bg-white">
        <div className="container-x grid gap-6 md:grid-cols-2">
          {TIERS.map((t) => (
            <div key={t.name} className={`flex flex-col rounded-2xl border p-7 shadow-sm ${t.highlight ? "border-gold bg-ink text-white" : "border-black/5 bg-white"}`}>
              <h2 className="font-display text-2xl font-extrabold">{t.name}</h2>
              <p className={`mt-1 text-sm ${t.highlight ? "text-white/70" : "text-ink/60"}`}>{t.sub}</p>
              <p className={`mt-4 text-3xl font-extrabold ${t.highlight ? "text-gold" : "text-ink"}`}>{t.price}</p>
              <ul className="mt-6 space-y-2 text-sm">
                {t.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-7">
                <Link href="/contact" className="btn-gold w-full">{t.cta} <ArrowRight className="h-4 w-4" /></Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
