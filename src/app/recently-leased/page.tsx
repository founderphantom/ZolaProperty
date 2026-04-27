import { Building2 } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { RECENTLY_LEASED } from "@/lib/site";

export const metadata = {
  title: "Recently Leased Properties",
  description: "Recent properties leased by ZOLA Property Management across the GTA — Toronto, Barrie and beyond.",
  alternates: { canonical: "/recently-leased" },
};

export default function RecentlyLeasedPage() {
  return (
    <>
      <PageHeader eyebrow="Recently Leased" title="A snapshot of our latest placements." subtitle="A portfolio of homes recently rented to vetted, AAA tenants." />
      <section className="section bg-white">
        <div className="container-x">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {RECENTLY_LEASED.map((p) => (
              <article key={p.address} className="overflow-hidden rounded-xl border border-black/5 bg-white shadow-sm">
                <div className="relative aspect-[4/3] bg-gradient-to-br from-amber-700 to-amber-950 grid place-items-center text-white">
                  <Building2 className="h-12 w-12 opacity-80" />
                  <span className="absolute right-3 top-3 rounded-full bg-gold px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-black">Leased</span>
                </div>
                <div className="p-4">
                  <p className="font-semibold text-ink">{p.address}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
