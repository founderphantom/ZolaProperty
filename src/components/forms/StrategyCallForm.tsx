"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Calendar, CheckCircle2 } from "lucide-react";
import { useLeadSubmit } from "@/lib/useLeadSubmit";

const Schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().min(7, "Enter a valid phone"),
  address: z.string().optional(),
  website: z.string().optional(), // honeypot
});
type FormVals = z.infer<typeof Schema>;

export function StrategyCallForm() {
  const { submit, state, error } = useLeadSubmit();
  const { register, handleSubmit, formState } = useForm<FormVals>({ resolver: zodResolver(Schema) });

  if (state === "success") {
    return (
      <div className="rounded-xl border border-gold/40 bg-ink-2 p-6 text-center">
        <CheckCircle2 className="mx-auto h-10 w-10 text-gold" />
        <h3 className="mt-3 text-lg font-bold text-white">You&apos;re booked in.</h3>
        <p className="mt-2 text-sm text-white/70">
          A leasing expert will reach out within 1 hour to schedule your free strategy call.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit((vals) => submit({ type: "strategy_call", ...vals }))}
      className="space-y-3"
      noValidate
    >
      <input type="text" {...register("website")} tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
      <Field label="Full name" error={formState.errors.name?.message}>
        <input
          type="text"
          autoComplete="name"
          {...register("name")}
          className="w-full rounded-md border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white placeholder:text-white/40 focus:border-gold focus:outline-none"
          placeholder="Your name"
        />
      </Field>
      <Field label="Email" error={formState.errors.email?.message}>
        <input
          type="email"
          autoComplete="email"
          {...register("email")}
          className="w-full rounded-md border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white placeholder:text-white/40 focus:border-gold focus:outline-none"
          placeholder="you@email.com"
        />
      </Field>
      <Field label="Phone" error={formState.errors.phone?.message}>
        <input
          type="tel"
          autoComplete="tel"
          {...register("phone")}
          className="w-full rounded-md border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white placeholder:text-white/40 focus:border-gold focus:outline-none"
          placeholder="(437) 448-6162"
        />
      </Field>
      <Field label="Property address (optional)">
        <input
          type="text"
          autoComplete="street-address"
          {...register("address")}
          className="w-full rounded-md border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white placeholder:text-white/40 focus:border-gold focus:outline-none"
          placeholder="123 Main St, Toronto"
        />
      </Field>

      <button type="submit" disabled={state === "submitting"} className="btn-gold w-full">
        <Calendar className="h-4 w-4" />
        {state === "submitting" ? "Booking..." : "Book My Free Call"}
      </button>
      {error && <p className="text-sm text-red-400">{error}</p>}
      <p className="text-center text-xs text-white/50">100% FREE. No obligation.</p>
    </form>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1 block text-xs font-medium text-white/70">{label}</span>
      {children}
      {error && <span className="mt-1 block text-xs text-red-400">{error}</span>}
    </label>
  );
}
