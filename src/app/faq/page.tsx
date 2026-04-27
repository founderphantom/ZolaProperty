import Script from "next/script";
import { PageHeader } from "@/components/PageHeader";
import { FAQS } from "@/lib/site";

export const metadata = {
  title: "FAQ — Property Management Questions Answered",
  description: "Answers to the questions GTA landlords ask most: pricing, timelines, screening, contracts, and how ZOLA Property Management works.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  const ld = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return (
    <>
      <PageHeader eyebrow="FAQ" title="Questions, answered." subtitle="If you don't see your question here, just call or text us — we respond within an hour." />
      <section className="section bg-white">
        <div className="container-x">
          <div className="mx-auto max-w-3xl space-y-3">
            {FAQS.map((f) => (
              <details key={f.q} className="group rounded-lg border border-black/10 bg-white p-5 open:border-gold/40">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-base font-semibold text-ink">
                  <span>{f.q}</span>
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-black/10 text-gold transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-sm text-ink/70">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <Script id="ld-faq-page" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
    </>
  );
}
