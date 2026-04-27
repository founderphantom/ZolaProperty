"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2 } from "lucide-react";
import { useLeadSubmit } from "@/lib/useLeadSubmit";
import { PROPERTY_TYPE_OPTIONS } from "@/lib/site";

const Schema = z.object({
  address: z.string().min(3, "Enter your property address"),
  propertyType: z.string().min(1, "Choose property type"),
  email: z.string().email("Enter a valid email").optional().or(z.literal("")),
  website: z.string().optional(),
});
type FormVals = z.infer<typeof Schema>;

export function RentEstimateForm() {
  const { submit, state, error } = useLeadSubmit();
  const { register, handleSubmit, formState } = useForm<FormVals>({ resolver: zodResolver(Schema) });

  if (state === "success") {
    return (
      <div className="rounded-xl bg-white p-6 text-center shadow">
        <CheckCircle2 className="mx-auto h-10 w-10 text-gold" />
        <h3 className="mt-3 text-lg font-bold">Your estimate is on its way.</h3>
        <p className="mt-2 text-sm text-muted">We&apos;ll reach out shortly with your free rent estimate.</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit((vals) => submit({ type: "rent_estimate", ...vals }))}
      className="space-y-3"
      noValidate
    >
      <input type="text" {...register("website")} tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
      <input
        type="text"
        autoComplete="street-address"
        placeholder="Enter your property address"
        {...register("address")}
        className="w-full rounded-md border border-black/10 bg-white px-4 py-3 text-sm text-ink placeholder:text-muted focus:border-gold focus:outline-none"
      />
      {formState.errors.address && <p className="text-xs text-red-600">{formState.errors.address.message}</p>}

      <select
        {...register("propertyType")}
        defaultValue=""
        className="w-full rounded-md border border-black/10 bg-white px-4 py-3 text-sm text-ink focus:border-gold focus:outline-none"
      >
        <option value="" disabled>Select property type</option>
        {PROPERTY_TYPE_OPTIONS.map((p) => (
          <option key={p} value={p}>{p}</option>
        ))}
      </select>
      {formState.errors.propertyType && <p className="text-xs text-red-600">{formState.errors.propertyType.message}</p>}

      <input
        type="email"
        autoComplete="email"
        placeholder="Email (optional, for written estimate)"
        {...register("email")}
        className="w-full rounded-md border border-black/10 bg-white px-4 py-3 text-sm text-ink placeholder:text-muted focus:border-gold focus:outline-none"
      />

      <button type="submit" disabled={state === "submitting"} className="btn-gold w-full uppercase tracking-wide">
        {state === "submitting" ? "Sending..." : "Get My Free Estimate"}
      </button>
      {error && <p className="text-sm text-red-600">{error}</p>}
      <p className="text-center text-xs text-muted">🔒 We respect your privacy. No spam, ever.</p>
    </form>
  );
}
