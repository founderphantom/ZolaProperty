import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import {
  ArrowDown,
  ArrowRight,
  Award,
  Building2,
  Calendar,
  CheckCircle2,
  ClipboardCheck,
  Clock,
  DollarSign,
  Fingerprint,
  Home,
  MapPin,
  Megaphone,
  MessageSquare,
  Phone,
  Search,
  Shield,
  ShieldCheck,
  Star,
  Users,
  XCircle,
} from "lucide-react";
import { StrategyCallForm } from "@/components/forms/StrategyCallForm";
import { RentEstimateForm } from "@/components/forms/RentEstimateForm";
import { ReserveSpotForm } from "@/components/forms/ReserveSpotForm";
import { FAQS, SITE, TESTIMONIALS } from "@/lib/site";

export const metadata = {
  title: "Rent Your Property to AAA Tenants — Fast | ZOLA Property Management",
  description:
    "GTA landlords: rent your property to AAA tenants in 14 days on average. We handle marketing, showings, screening, and lease prep. No upfront fees. Pay nothing until the tenant signs.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.slice(0, 8).map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Property Management & Tenant Placement",
    provider: { "@type": "LocalBusiness", name: SITE.name, url: SITE.url, telephone: `+1-${SITE.phone}` },
    areaServed: "Greater Toronto Area, Ontario, Canada",
    description: SITE.description,
  };

  return (
    <>
      <section className="relative isolate overflow-hidden bg-ink text-white">
        <Image
          src="/images/hero.jpg"
          alt="Modern Toronto condo living room at dusk with CN Tower view"
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 -z-10 object-cover opacity-65"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/85 to-ink/30" aria-hidden />
        <div className="container-x grid gap-10 py-12 lg:grid-cols-[1.2fr_0.9fr] lg:gap-12 lg:py-20">
          <div>
            <p className="eyebrow">{SITE.tagline}</p>
            <h1 className="mt-4 font-display text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">
              Rent Your Property to <span className="text-gold">AAA Tenants — Fast.</span>
            </h1>
            <ul className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-white/90">
              {["No bad tenants.", "No long vacancies.", "No stress."].map((t) => (
                <li key={t} className="inline-flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-gold" /> <span className="text-sm font-medium">{t}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 max-w-xl text-base text-white/70">
              We handle rental marketing, showings, screening, and lease preparation so you get reliable tenants and consistent income — without the hassle.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="btn-gold">
                <Calendar className="h-4 w-4" />
                <span className="flex flex-col items-start leading-tight">
                  <span>Get My Free Rental Strategy</span>
                  <span className="text-[11px] font-normal text-black/70">No obligation. Know your options.</span>
                </span>
              </Link>
              <a href={SITE.phoneHref} className="btn-ghost-light">
                <Phone className="h-4 w-4" />
                <span className="flex flex-col items-start leading-tight">
                  <span>Call Now</span>
                  <span className="text-[11px] font-normal text-white/60">{SITE.phone}</span>
                </span>
              </a>
            </div>

            <p className="mt-6 inline-flex items-center gap-2 text-sm text-white/80">
              <Shield className="h-4 w-4 text-gold" /> Trusted by 100+ Ontario landlords.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4 divide-x divide-white/20">
              <Image src="/images/google-rating.jpg" alt="5.0 Google Rating" width={180} height={56} className="h-12 w-auto object-contain" />
              <Image src="/images/eo-insured.jpg" alt="$1M E&O Insured" width={180} height={56} className="h-12 w-auto object-contain pl-4" />
              <div className="flex h-12 items-center gap-2 rounded-lg bg-zinc-900 px-3 pl-4">
                <Award className="h-6 w-6 shrink-0 text-gold" />
                <span className="leading-tight">
                  <span className="block text-xs font-bold text-white">Powered by</span>
                  <span className="block text-[11px] font-bold uppercase tracking-wide text-gold">SingleKey</span>
                </span>
              </div>
              <Image src="/images/properties-rented.jpg" alt="100+ Properties Rented" width={220} height={56} className="h-12 w-auto object-contain pl-4" />
            </div>
          </div>

          <aside className="relative hidden lg:block">
            <div className="rounded-2xl border border-gold/40 bg-ink-2/80 p-6 shadow-2xl backdrop-blur lg:p-7">
              <p className="text-center text-xs font-bold uppercase tracking-[0.18em] text-gold">Get a Free</p>
              <h2 className="text-center font-display text-2xl font-extrabold text-white">Rental Strategy Call</h2>
              <div className="my-4 h-px bg-white/10" />
              <p className="text-sm font-semibold text-white/80">We&apos;ll show you:</p>
              <ul className="mt-3 space-y-2 text-sm">
                {[
                  "What your property can rent for",
                  "How fast we can get it rented",
                  "Our proven tenant screening process",
                  "What upgrades increase rent",
                  "How we market your property",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2 text-white/85">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5">
                <StrategyCallForm />
              </div>
            </div>
          </aside>
        </div>

        <div className="container-x pb-14">
          <div className="grid gap-4 rounded-2xl border border-gold/30 bg-ink-2/70 p-5 lg:grid-cols-2 lg:p-6">
            <div className="flex items-start gap-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-gold/40 text-gold"><DollarSign className="h-6 w-6" /></span>
              <p className="text-sm text-white/80">
                The average GTA rental sits vacant <span className="font-semibold text-white">30–45 days</span>. At $3,200/month, that&apos;s <span className="font-semibold text-white">$3,200–$4,800 in lost rent</span>.<br />
                <span className="mt-1 block font-bold text-gold">Our average: 14 days.</span>
              </p>
            </div>
            <div className="flex items-start gap-4 rounded-xl bg-gold/15 p-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-ink text-gold"><ShieldCheck className="h-6 w-6" /></span>
              <p className="text-sm text-white">
                <span className="font-extrabold uppercase tracking-wide text-gold">Pay nothing until the tenant signs the lease.</span><br />
                <span className="text-white/80">No upfront fees. No risk.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white pt-16 sm:pt-20 lg:pt-24 pb-4">
        <div className="container-x">
          <h2 className="text-center font-display text-2xl font-extrabold sm:text-3xl">TIRED OF DEALING WITH...</h2>
          <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
            <Pain icon={<XCircle className="h-5 w-5" />} title="Bad Tenants" desc="Late payments, damage and constant headaches." />
            <Pain icon={<Calendar className="h-5 w-5" />} title="Endless Showings" desc="No-shows and unqualified people wasting your time." />
            <Pain icon={<DollarSign className="h-5 w-5" />} title="Empty Units" desc="Vacancies cost you money every single day." />
            <Pain icon={<MessageSquare className="h-5 w-5" />} title="Stress & Hassle" desc="Listings, messages, calls, and screening is exhausting." />
            <Pain icon={<MapPin className="h-5 w-5" />} title="Out of Town or Live Too Far" desc="Hard to vet tenants, run showings, or chase issues when you're 5,000 km away." />
          </div>

          <div className="mt-10 flex justify-center">
            <div className="flex w-full max-w-3xl items-center justify-center gap-3 rounded-lg bg-red-600 px-6 py-4 text-white shadow">
              <span className="text-center font-bold uppercase tracking-wide">We take all of that off your plate</span>
              <ArrowDown className="h-5 w-5" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white pt-0 pb-8">
        <div className="container-x">
          <h2 className="text-center font-display text-2xl font-extrabold sm:text-3xl">
            HOW WE <span className="text-gold">GET YOUR PROPERTY RENTED</span>
          </h2>

          {/* Desktop: 3 columns with arrows overlaid at circle height */}
          <div className="relative mt-10 mx-auto max-w-xl hidden md:grid grid-cols-3">
            {/* Arrow between step 1 and step 2 */}
            <div className="absolute top-14 left-1/3 z-10 flex w-20 -translate-x-1/2 -translate-y-1/2 items-center pointer-events-none">
              <div className="flex-1 border-t-[3px] border-dashed border-gold/70" />
              <ArrowRight className="h-5 w-5 shrink-0 text-gold -ml-1" />
            </div>
            {/* Arrow between step 2 and step 3 */}
            <div className="absolute top-14 left-2/3 z-10 flex w-20 -translate-x-1/2 -translate-y-1/2 items-center pointer-events-none">
              <div className="flex-1 border-t-[3px] border-dashed border-gold/70" />
              <ArrowRight className="h-5 w-5 shrink-0 text-gold -ml-1" />
            </div>

            {/* Step 1 */}
            <div className="flex flex-col items-center gap-4 px-2">
              <div className="flex h-28 w-28 items-center justify-center rounded-full bg-black shadow-lg">
                <Megaphone className="h-12 w-12 text-gold" />
              </div>
              <div className="text-center">
                <h3 className="text-sm font-extrabold uppercase tracking-wide text-ink"><span className="text-gold">1.</span> WE MARKET</h3>
                <p className="mt-2 text-xs leading-relaxed text-ink/65">We create high-converting ads on Kijiji, Facebook and rental platforms to attract serious tenants.</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center gap-4 px-2">
              <div className="flex h-28 w-28 items-center justify-center rounded-full bg-black shadow-lg">
                <Users className="h-12 w-12 text-gold" />
              </div>
              <div className="text-center">
                <h3 className="text-sm font-extrabold uppercase tracking-wide text-ink"><span className="text-gold">2.</span> WE SHOW</h3>
                <p className="mt-2 text-xs leading-relaxed text-ink/65">We handle all inquiries, schedule and conduct showings so you don&apos;t have to.</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center gap-4 px-2">
              <div className="flex h-28 w-28 items-center justify-center rounded-full bg-black shadow-lg">
                <Home className="h-12 w-12 text-gold" />
              </div>
              <div className="text-center">
                <h3 className="text-sm font-extrabold uppercase tracking-wide text-ink"><span className="text-gold">3.</span> WE PLACE AAA TENANTS</h3>
                <p className="mt-2 text-xs leading-relaxed text-ink/65">We verify credit, employment, and references directly with the source — pay stubs cross-checked with employers, identity fraud detection on every application.</p>
              </div>
            </div>
          </div>

          {/* Mobile: vertical steps */}
          <div className="md:hidden mt-10 mx-auto max-w-sm flex flex-col items-center gap-3">
            <div className="flex items-center gap-4 w-full">
              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-black">
                <Megaphone className="h-9 w-9 text-gold" />
              </div>
              <div>
                <h3 className="text-sm font-extrabold uppercase tracking-wide text-ink"><span className="text-gold">1.</span> WE MARKET</h3>
                <p className="mt-1 text-xs leading-relaxed text-ink/65">We create high-converting ads on Kijiji, Facebook and rental platforms to attract serious tenants.</p>
              </div>
            </div>
            <ArrowDown className="h-6 w-6 text-gold" />
            <div className="flex items-center gap-4 w-full">
              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-black">
                <Users className="h-9 w-9 text-gold" />
              </div>
              <div>
                <h3 className="text-sm font-extrabold uppercase tracking-wide text-ink"><span className="text-gold">2.</span> WE SHOW</h3>
                <p className="mt-1 text-xs leading-relaxed text-ink/65">We handle all inquiries, schedule and conduct showings so you don&apos;t have to.</p>
              </div>
            </div>
            <ArrowDown className="h-6 w-6 text-gold" />
            <div className="flex items-center gap-4 w-full">
              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-black">
                <Home className="h-9 w-9 text-gold" />
              </div>
              <div>
                <h3 className="text-sm font-extrabold uppercase tracking-wide text-ink"><span className="text-gold">3.</span> WE PLACE AAA TENANTS</h3>
                <p className="mt-1 text-xs leading-relaxed text-ink/65">We verify credit, employment, and references directly with the source.</p>
              </div>
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link href="/how-it-works" className="inline-flex items-center gap-2 text-sm font-semibold text-gold hover:underline">
              See our 5-step detailed process <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-0">
        {/* Desktop: show cropped property-types image */}
        <div className="hidden lg:block container-x overflow-hidden">
          <Image
            src="/images/property-types.jpg"
            alt="We rent all property types: Condos, Basement Apartments, Detached Homes, Semi-Detached Homes, Townhouses, Multi-Unit Properties"
            width={1536}
            height={1024}
            className="w-full h-auto"
            style={{ marginTop: '-13%', marginBottom: '-20%' }}
            sizes="(min-width: 1280px) 1280px, 100vw"
          />
        </div>
        {/* Mobile/tablet: text grid (image is unreadable at small sizes) */}
        <div className="lg:hidden py-12 sm:py-16">
          <div className="container-x">
            <h2 className="text-center font-display text-2xl font-extrabold sm:text-3xl">
              WE RENT ALL <span className="text-gold">PROPERTY TYPES</span>
            </h2>
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {["Condos", "Basement Apartments", "Detached Homes", "Semi-Detached Homes", "Townhouses", "Multi-Unit Properties"].map((type) => (
                <div key={type} className="flex items-center justify-center rounded-xl border border-black/5 bg-white p-4 shadow-sm text-center">
                  <span className="text-sm font-semibold text-ink">{type}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="container-x">
          <h2 className="font-display text-2xl font-extrabold sm:text-3xl">WHAT LANDLORDS SAY</h2>
          <div className="mt-8 grid gap-5 lg:grid-cols-[2fr_1fr]">
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {TESTIMONIALS.map((t) => (
                <figure key={t.name} className="flex flex-col rounded-xl border border-black/5 bg-white p-4 shadow-sm">
                  <Image src="/images/five-stars.jpg" alt="5 stars" width={100} height={24} className="h-5 w-auto object-contain object-left" />
                  <blockquote className="mt-3 grow text-sm text-ink/80">&ldquo;{t.quote}&rdquo;</blockquote>
                  <figcaption className="mt-4 flex items-center gap-3">
                    <span className="grid h-9 w-9 place-items-center rounded-full bg-ink text-xs font-bold text-white">
                      {t.name.split(" ").map((s) => s[0]).join("")}
                    </span>
                    <span className="text-xs">
                      <span className="block font-semibold text-ink">— {t.name}</span>
                      <span className="block text-muted">{t.location}</span>
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>

            <div className="grid grid-cols-1 gap-4 rounded-xl bg-ink p-6 text-white sm:grid-cols-3 lg:grid-cols-1">
              <Stat icon={<Building2 className="h-5 w-5 text-gold" />} top="100+" label="Properties Rented" />
              <Stat icon={<Clock className="h-5 w-5 text-gold" />} top="14 Days*" label="Average Time to Rent" />
              <Stat icon={<Star className="h-5 w-5 text-gold" />} top="5 Star" label="Google Rating" />
              <p className="col-span-full mt-2 text-[10px] text-white/50">*May vary depending on property and market.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white pb-16 sm:pb-20 lg:pb-24">
        <div className="container-x grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="font-display text-3xl font-extrabold leading-tight sm:text-4xl">
              PROUDLY SERVING<br />THE <span className="text-gold">GTA &amp; BEYOND</span>
            </h2>
            <p className="mt-4 max-w-md text-sm text-ink/70">
              We serve the GTA and surrounding regions with local expertise and a proven process.
            </p>
            <ul className="mt-5 space-y-2 text-sm">
              <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-gold" /> Toronto, North York, Scarborough, Etobicoke, Markham, Vaughan &amp; more</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-gold" /> Ontario-wide support through our trusted partner network</li>
            </ul>

            <Image
              src="/images/gta-map.jpg"
              alt="Map of the Greater Toronto Area showing all areas ZOLA Property Management serves"
              width={700}
              height={500}
              className="h-auto w-full max-w-lg object-contain"
            />
          </div>

          <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-lg lg:p-7">
            <h3 className="font-display text-xl font-extrabold">FIND OUT WHAT YOUR<br />PROPERTY CAN RENT FOR</h3>
            <p className="mt-2 text-sm text-muted">Get a free rent estimate in 30 seconds.</p>
            <div className="mt-5">
              <RentEstimateForm />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink text-white">
        <div className="container-x grid gap-6 py-10 md:grid-cols-[1.2fr_2fr] md:items-center">
          <div className="flex items-start gap-4">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-gold/15 text-gold"><Shield className="h-6 w-6" /></span>
            <div>
              <p className="text-sm font-extrabold uppercase tracking-wide text-gold">Our Tenant Guarantee</p>
              <p className="mt-1 text-sm text-white/80">If your tenant breaks the lease within the first 6 months, we&apos;ll replace them at no extra cost.</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 text-xs sm:grid-cols-4">
            <Guarantee icon={<Search className="h-4 w-4 text-gold" />} title="Rigorous 7-Point Screening Process" />
            <Guarantee icon={<ClipboardCheck className="h-4 w-4 text-gold" />} title="Thorough Background &amp; Credit Checks" />
            <Guarantee icon={<Fingerprint className="h-4 w-4 text-gold" />} title="Fraud Detection &amp; Document Verification" badge="NEW" />
            <Guarantee icon={<Users className="h-4 w-4 text-gold" />} title="We Find Tenants That Stay" />
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="container-x grid gap-10 lg:grid-cols-[2fr_1fr]">
          <div>
            <h2 className="font-display text-2xl font-extrabold uppercase tracking-wide">Frequently Asked Questions</h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {FAQS.slice(0, 10).map((f) => (
                <details key={f.q} className="group rounded-lg border border-black/10 bg-white p-4 open:border-gold/40">
                  <summary className="flex cursor-pointer items-center justify-between gap-3 text-sm font-semibold text-ink list-none">
                    <span>{f.q}</span>
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full border border-black/10 text-gold transition group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 text-sm text-ink/70">{f.a}</p>
                </details>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-ink/70">As Featured In</h3>
              <div className="mt-4 grid grid-cols-2 gap-3">
                {["Toronto Star", "The Globe and Mail", "blogTO", "680 NEWS", "RDP"].map((b) => (
                  <div key={b} className="grid h-12 place-items-center rounded-md border border-black/10 bg-white px-3 text-center text-xs font-semibold text-ink/70">
                    {b}
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-xl bg-gradient-to-br from-gold/15 to-gold/5 p-5">
              <div className="mb-4 overflow-hidden rounded-lg">
                <Image src="/images/couple-keys.jpg" alt="Happy landlords holding house keys" width={400} height={220} className="h-40 w-full object-cover" />
              </div>
              <p className="text-sm font-semibold text-ink">We respond to all inquiries within 1 hour.</p>
              <p className="mt-1 text-xs text-ink/70">Speak with a leasing expert today!</p>
              <div className="mt-4 flex flex-col gap-2 sm:flex-row">
                <a href={SITE.phoneHref} className="btn-gold flex-1"><Phone className="h-4 w-4" /> {SITE.phone}</a>
                <a href={SITE.smsHref} className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-ink/20 px-5 py-3 text-sm font-semibold text-ink hover:bg-ink/5">Text Us Now</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink text-white">
        <div className="container-x grid gap-6 py-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div className="flex items-start gap-4">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-gold/15 text-gold"><Calendar className="h-6 w-6" /></span>
            <div>
              <p className="text-sm font-extrabold uppercase tracking-wide text-gold">Limited Landlord Slots This Month</p>
              <p className="mt-1 text-sm text-white/80">We only take on a limited number of properties to ensure white-glove service and fast results.</p>
            </div>
          </div>
          <div>
            <ReserveSpotForm />
            <p className="mt-2 text-xs text-white/60">Don&apos;t let your property sit vacant.</p>
          </div>
        </div>
      </section>

      <Script id="ld-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Script id="ld-service" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
    </>
  );
}

function Pain({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="text-center">
      <span className="mx-auto grid h-12 w-12 place-items-center rounded-full border border-red-300 bg-red-50 text-red-600">
        {icon}
      </span>
      <h3 className="mt-3 text-sm font-bold text-ink">{title}</h3>
      <p className="mt-1 text-xs text-ink/60">{desc}</p>
    </div>
  );
}

function Stat({ icon, top, label }: { icon: React.ReactNode; top: string; label: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="grid h-10 w-10 place-items-center rounded-lg bg-white/5">{icon}</span>
      <span>
        <span className="block text-xl font-extrabold text-white">{top}</span>
        <span className="block text-xs text-white/60">{label}</span>
      </span>
    </div>
  );
}

function Guarantee({ icon, title, badge }: { icon: React.ReactNode; title: string; badge?: string }) {
  return (
    <div className="flex items-center gap-2 text-white/85">
      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-md bg-white/5">{icon}</span>
      <span className="text-[11px] font-semibold leading-tight" dangerouslySetInnerHTML={{ __html: title }} />
      {badge && <span className="rounded bg-gold px-1.5 py-0.5 text-[9px] font-bold text-black">{badge}</span>}
    </div>
  );
}

