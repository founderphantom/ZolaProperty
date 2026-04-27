import { ContactForm } from "@/components/forms/ContactForm";
import { PageHeader } from "@/components/PageHeader";
import { SITE } from "@/lib/site";
import { Mail, MapPin, Phone, Clock } from "lucide-react";

export const metadata = {
  title: "Contact Us — Free Rental Strategy Call",
  description: "Speak with a ZOLA leasing expert. We respond within 1 hour. Call, text, or send a message — we serve the entire GTA.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHeader title="Let's get your property rented." subtitle="Tell us about your rental — we'll respond within 1 hour during business hours." />
      <section className="section bg-white">
        <div className="container-x grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <ContactForm />
          <div className="space-y-4">
            <InfoCard icon={<Phone className="h-5 w-5" />} title="Call or text">
              <a href={SITE.phoneHref} className="text-ink hover:underline">{SITE.phone}</a>
            </InfoCard>
            <InfoCard icon={<Mail className="h-5 w-5" />} title="Email">
              <a href={`mailto:${SITE.email}`} className="break-all text-ink hover:underline">{SITE.email}</a>
            </InfoCard>
            <InfoCard icon={<MapPin className="h-5 w-5" />} title="Service area">Greater Toronto Area &amp; surrounding Ontario</InfoCard>
            <InfoCard icon={<Clock className="h-5 w-5" />} title="Hours">{SITE.hours}</InfoCard>
          </div>
        </div>
      </section>
    </>
  );
}

function InfoCard({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3 rounded-xl border border-black/5 bg-white p-4 shadow-sm">
      <span className="grid h-10 w-10 place-items-center rounded-lg bg-gold/10 text-gold">{icon}</span>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-ink/60">{title}</p>
        <p className="mt-0.5 text-sm">{children}</p>
      </div>
    </div>
  );
}
