"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2 } from "lucide-react";
import { useLeadSubmit } from "@/lib/useLeadSubmit";

const Schema = z.object({
  name: z.string().min(2, "Enter your name"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().min(7, "Enter a valid phone"),
  website: z.string().optional(),
});
type FormVals = z.infer<typeof Schema>;

export function ReserveSpotForm({ inverted = true }: { inverted?: boolean }) {
  const { submit, state, error } = useLeadSubmit();
  const { register, handleSubmit, formState } = useForm<FormVals>({ resolver: zodResolver(Schema) });

  if (state === "success") {
    return (
      <div className="flex items-center gap-3 rounded-lg bg-gold/15 px-4 py-3 text-gold">
        <CheckCircle2 className="h-5 w-5" />
        <span className="text-sm font-semibold">Spot reserved — we&apos;ll be in touch shortly.</span>
      </div>
    );
  }

  const inputBase = inverted
    ? "w-full rounded-md border border-white/10 bg-white/10 px-3 py-2.5 text-sm text-white placeholder:text-white/50 focus:border-gold focus:outline-none"
    : "w-full rounded-md border border-black/10 bg-white px-3 py-2.5 text-sm text-ink placeholder:text-muted focus:border-gold focus:outline-none";

  return (
    <form onSubmit={handleSubmit((v) => submit({ type: "reservation", ...v }))} className="grid gap-2 sm:grid-cols-[1fr_1fr_1fr_auto]" noValidate>
      <input type="text" {...register("website")} tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
      <input type="text" autoComplete="name" placeholder="Your name" {...register("name")} className={inputBase} />
      <input type="email" autoComplete="email" placeholder="Email" {...register("email")} className={inputBase} />
      <input type="tel" autoComplete="tel" placeholder="Phone" {...register("phone")} className={inputBase} />
      <button type="submit" disabled={state === "submitting"} className="btn-gold whitespace-nowrap">
        {state === "submitting" ? "Reserving..." : "Reserve My Spot"}
      </button>
      {(formState.errors.name || formState.errors.email || formState.errors.phone || error) && (
        <p className="col-span-full text-xs text-red-400">
          {formState.errors.name?.message || formState.errors.email?.message || formState.errors.phone?.message || error}
        </p>
      )}
    </form>
  );
}
