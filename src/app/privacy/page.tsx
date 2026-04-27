import { PageHeader } from "@/components/PageHeader";
import { SITE } from "@/lib/site";

export const metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${SITE.name}.`,
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <PageHeader title="Privacy Policy" />
      <section className="section bg-white">
        <div className="container-x mx-auto max-w-3xl text-sm text-ink/80">
          <p>Effective date: {new Date().toLocaleDateString("en-CA", { year: "numeric", month: "long", day: "numeric" })}</p>
          <p className="mt-3">{SITE.name} (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) respects your privacy. This page explains what information we collect through this website and how we use it.</p>
          <h2 className="mt-6 font-display text-lg font-bold text-ink">Information we collect</h2>
          <p className="mt-2">When you submit a form (rental strategy call, rent estimate, contact, or reservation), we collect the contact details you provide (name, email, phone, property address, property type, message). We also automatically capture your user-agent string for spam detection.</p>
          <h2 className="mt-6 font-display text-lg font-bold text-ink">How we use it</h2>
          <p className="mt-2">We use your information solely to respond to your inquiry, schedule a consultation, and provide property management services. We do not sell or rent your information to third parties.</p>
          <h2 className="mt-6 font-display text-lg font-bold text-ink">Service providers</h2>
          <p className="mt-2">We use Vercel (hosting), Vercel Postgres (database), and Resend (transactional email) to operate this site. These providers process your data on our behalf under industry-standard security practices.</p>
          <h2 className="mt-6 font-display text-lg font-bold text-ink">Your rights</h2>
          <p className="mt-2">To request access to or deletion of your data, email <a href={`mailto:${SITE.email}`} className="text-gold hover:underline">{SITE.email}</a>.</p>
        </div>
      </section>
    </>
  );
}
