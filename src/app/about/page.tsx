import Link from "next/link";
import { ArrowRight, Award, HeartHandshake, ShieldCheck, Sparkles } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";

export const metadata = {
  title: "About ZOLA — Ontario's Trusted Leasing Experts",
  description: "ZOLA Property Management has helped 100+ Ontario landlords place AAA tenants — fast. Built on integrity, transparency, and accountability.",
  alternates: { canonical: "/about" },
};

const VALUES = [
  { icon: ShieldCheck, title: "Integrity & Accountability", desc: "Transparent reporting, honest pricing, and zero hidden fees." },
  { icon: Award, title: "10+ Years Experience", desc: "A decade of GTA leasing know-how across condos, houses, and multi-unit." },
  { icon: HeartHandshake, title: "Partnership, Not Just Service", desc: "We treat your property like our own — and your tenants with respect." },
  { icon: Sparkles, title: "Modern & Transparent", desc: "Same-day tenant responses, three quotes for every repair, owner-friendly tech." },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader eyebrow="About ZOLA" title="Service you deserve. People you trust." subtitle="A property management partner built on integrity, transparency, and results." />
      <section className="section bg-white">
        <div className="container-x grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-base text-ink/80">
              At ZOLA Property Management, our foundation is built on integrity, transparency, and accountability — the values that have shaped our reputation for delivering exceptional, results-driven AAA tenant placement and property management services across the Greater Toronto Area.
            </p>
            <p className="mt-4 text-base text-ink/80">
              Our mission is simple: remove the stress and time that often come with leasing a property. We proudly manage a portfolio of AAA+ tenants — respectful, reliable, well-qualified individuals who treat every property with care and pay rent on time.
            </p>
            <div className="mt-6">
              <Link href="/contact" className="btn-gold">Work with us <ArrowRight className="h-4 w-4" /></Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {VALUES.map((v) => (
              <div key={v.title} className="rounded-xl border border-black/5 bg-white p-5 shadow-sm">
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-gold/10 text-gold"><v.icon className="h-5 w-5" /></span>
                <h3 className="mt-3 font-display text-base font-extrabold">{v.title}</h3>
                <p className="mt-1 text-xs text-ink/65">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
