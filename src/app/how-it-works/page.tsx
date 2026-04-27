import Link from "next/link";
import { ArrowRight, Megaphone, Eye, ClipboardCheck, FileSignature, Home } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";

export const metadata = {
  title: "How It Works — Our 5-Step Leasing Process",
  description: "Our 5-step process to rent your property to AAA tenants in 14 days on average. Marketing, showings, screening, lease signing, handover.",
  alternates: { canonical: "/how-it-works" },
};

const STEPS = [
  { icon: Megaphone, title: "Strategy & Pricing", desc: "We analyze comparable rentals in your neighbourhood, recommend a target rent that maximizes both speed and value, and prepare your listing copy." },
  { icon: Home, title: "Photos & Marketing", desc: "Professional photography (when needed) and high-converting ads syndicated to Kijiji, Facebook Marketplace, Realtor.ca and our private investor network." },
  { icon: Eye, title: "Showings", desc: "We pre-qualify every inquiry and run grouped or 1:1 showings 7 days a week — including evenings and weekends." },
  { icon: ClipboardCheck, title: "AAA Tenant Screening", desc: "SingleKey-powered 7-point screen: credit, identity, employment, income, references, eviction history, and document fraud detection." },
  { icon: FileSignature, title: "Lease Signing & Handover", desc: "We draft the Ontario standard lease, collect first/last and key deposits, and coordinate move-in. You're paid the moment the lease is signed." },
];

export default function HowItWorksPage() {
  return (
    <>
      <PageHeader eyebrow="How It Works" title="A proven 5-step process." subtitle="From listing to lease — we run point on every step so you don't have to." />
      <section className="section bg-white">
        <div className="container-x">
          <ol className="space-y-8">
            {STEPS.map((s, i) => (
              <li key={s.title} className="grid gap-6 rounded-2xl border border-black/5 bg-white p-6 shadow-sm md:grid-cols-[auto_1fr] md:items-start">
                <div className="flex items-center gap-4">
                  <span className="grid h-14 w-14 place-items-center rounded-full bg-ink text-gold ring-4 ring-gold/10">
                    <s.icon className="h-6 w-6" />
                  </span>
                  <span className="font-display text-3xl font-extrabold text-gold">0{i + 1}</span>
                </div>
                <div>
                  <h2 className="font-display text-xl font-extrabold uppercase">{s.title}</h2>
                  <p className="mt-2 text-sm text-ink/70">{s.desc}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="mt-12 text-center">
            <Link href="/contact" className="btn-gold">Book my free strategy call <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
