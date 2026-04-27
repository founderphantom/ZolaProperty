"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2 } from "lucide-react";
import { useLeadSubmit } from "@/lib/useLeadSubmit";
import { PROPERTY_TYPE_OPTIONS } from "@/lib/site";

const Schema = z.object({
  name: z.string().min(2, "Enter your name"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().min(7, "Enter a valid phone"),
  address: z.string().optional(),
  propertyType: z.string().optional(),
  message: z.string().optional(),
  website: z.string().optional(),
});
type FormVals = z.infer<typeof Schema>;

export function ContactForm() {
  const { submit, state, error } = useLeadSubmit();
  const { register, handleSubmit, formState } = useForm<FormVals>({ resolver: zodResolver(Schema) });

  if (state === "success") {
    return (
      <div className="rounded-xl border border-gold/30 bg-white p-8 text-center shadow">
        <CheckCircle2 className="mx-auto h-12 w-12 text-gold" />
        <h3 className="mt-4 text-xl font-bold">Thanks — we&apos;ve got it.</h3>
        <p className="mt-2 text-sm text-muted">A leasing expert will respond within 1 hour during business hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit((v) => submit({ type: "contact", ...v }))} className="space-y-4" noValidate>
      <input type="text" {...register("website")} tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Full name" error={formState.errors.name?.message}>
          <input type="text" autoComplete="name" {...register("name")} className="form-input" placeholder="Your name" />
        </Field>
        <Field label="Email" error={formState.errors.email?.message}>
          <input type="email" autoComplete="email" {...register("email")} className="form-input" placeholder="you@email.com" />
        </Field>
        <Field label="Phone" error={formState.errors.phone?.message}>
          <input type="tel" autoComplete="tel" {...register("phone")} className="form-input" placeholder="(437) 448-6162" />
        </Field>
        <Field label="Property type">
          <select {...register("propertyType")} defaultValue="" className="form-input">
            <option value="" disabled>Select</option>
            {PROPERTY_TYPE_OPTIONS.map((p) => <option key={p} value={p}>{p}</option>)}
          </select>
        </Field>
      </div>
      <Field label="Property address">
        <input type="text" autoComplete="street-address" {...register("address")} className="form-input" placeholder="123 Main St, Toronto" />
      </Field>
      <Field label="How can we help?">
        <textarea {...register("message")} rows={4} className="form-input" placeholder="Tell us about your property..." />
      </Field>
      <button type="submit" disabled={state === "submitting"} className="btn-gold w-full sm:w-auto">
        {state === "submitting" ? "Sending..." : "Send Message"}
      </button>
      {error && <p className="text-sm text-red-600">{error}</p>}
      <style jsx>{`
        :global(.form-input) {
          width: 100%;
          border-radius: 0.5rem;
          border: 1px solid rgba(0,0,0,0.12);
          background: white;
          padding: 0.65rem 0.85rem;
          font-size: 0.875rem;
          color: #0a0a0a;
          outline: none;
        }
        :global(.form-input:focus) { border-color: #f59e0b; }
      `}</style>
    </form>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1 block text-xs font-semibold text-ink/70">{label}</span>
      {children}
      {error && <span className="mt-1 block text-xs text-red-600">{error}</span>}
    </label>
  );
}
