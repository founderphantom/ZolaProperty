import Script from "next/script";
import { Star } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { SITE, TESTIMONIALS } from "@/lib/site";

export const metadata = {
  title: "Reviews — What GTA Landlords Say About ZOLA",
  description: "100+ Ontario landlords trust ZOLA with their rentals. Read recent reviews and see why we have a 5-star Google rating.",
  alternates: { canonical: "/reviews" },
};

export default function ReviewsPage() {
  const ld = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE.name,
    aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: TESTIMONIALS.length },
    review: TESTIMONIALS.map((t) => ({
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: t.rating, bestRating: 5 },
      author: { "@type": "Person", name: t.name },
      reviewBody: t.quote,
    })),
  };
  return (
    <>
      <PageHeader eyebrow="Reviews" title="100+ landlords. 5-star service." subtitle="Real words from real GTA landlords we've helped lease faster and smarter." />
      <section className="section bg-white">
        <div className="container-x">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.concat(TESTIMONIALS).map((t, i) => (
              <figure key={`${t.name}-${i}`} className="flex flex-col rounded-xl border border-black/5 bg-white p-5 shadow-sm">
                <div className="flex text-gold">
                  {Array.from({ length: t.rating }).map((_, j) => <Star key={j} className="h-4 w-4 fill-current" />)}
                </div>
                <blockquote className="mt-3 grow text-sm text-ink/80">&ldquo;{t.quote}&rdquo;</blockquote>
                <figcaption className="mt-4 text-xs">
                  <span className="block font-semibold text-ink">— {t.name}</span>
                  <span className="block text-muted">{t.location}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
      <Script id="ld-reviews" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
    </>
  );
}
