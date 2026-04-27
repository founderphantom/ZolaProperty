import { PageHeader } from "@/components/PageHeader";
import { SITE } from "@/lib/site";

export const metadata = {
  title: "Terms of Service",
  description: `Terms of service for ${SITE.name}.`,
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <>
      <PageHeader title="Terms of Service" />
      <section className="section bg-white">
        <div className="container-x mx-auto max-w-3xl text-sm text-ink/80">
          <p>Effective date: {new Date().toLocaleDateString("en-CA", { year: "numeric", month: "long", day: "numeric" })}</p>
          <p className="mt-3">By using zolapropertymanagement.com you agree to the following terms.</p>
          <h2 className="mt-6 font-display text-lg font-bold text-ink">Use of the site</h2>
          <p className="mt-2">This site provides general information about {SITE.name}. Content is informational only and does not constitute legal, financial, or real-estate advice. Specific service terms are governed by a separately signed service agreement.</p>
          <h2 className="mt-6 font-display text-lg font-bold text-ink">Submissions</h2>
          <p className="mt-2">By submitting a form you confirm the information you provide is accurate and consent to be contacted by phone, text, or email regarding your inquiry.</p>
          <h2 className="mt-6 font-display text-lg font-bold text-ink">Limitation of liability</h2>
          <p className="mt-2">To the maximum extent permitted by law, {SITE.name} is not liable for indirect or consequential damages arising from your use of this site.</p>
          <h2 className="mt-6 font-display text-lg font-bold text-ink">Contact</h2>
          <p className="mt-2">Questions? Email <a href={`mailto:${SITE.email}`} className="text-gold hover:underline">{SITE.email}</a>.</p>
        </div>
      </section>
    </>
  );
}
