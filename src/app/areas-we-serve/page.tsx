import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { AREAS } from "@/lib/site";

export const metadata = {
  title: "Areas We Serve — GTA & Ontario Property Management",
  description: "ZOLA Property Management serves Toronto, North York, Scarborough, Etobicoke, Markham, Vaughan, Mississauga, Brampton, Oakville, Barrie and beyond.",
  alternates: { canonical: "/areas-we-serve" },
};

export default function AreasPage() {
  return (
    <>
      <PageHeader eyebrow="Areas We Serve" title="Local expertise across the GTA & beyond." subtitle="We know the neighbourhoods, the buildings, and the rents — so your property gets priced and marketed right." />
      <section className="section bg-white">
        <div className="container-x">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {AREAS.map((a) => (
              <div key={a} className="flex items-center gap-2 rounded-lg border border-black/5 bg-white p-4 shadow-sm">
                <MapPin className="h-4 w-4 text-gold" />
                <span className="text-sm font-medium">{a}</span>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm text-ink/70">
            Don&apos;t see your city? We provide Ontario-wide support through our trusted partner network.{" "}
            <Link href="/contact" className="font-semibold text-gold hover:underline">Get in touch <ArrowRight className="inline h-4 w-4" /></Link>
          </p>
        </div>
      </section>
    </>
  );
}
