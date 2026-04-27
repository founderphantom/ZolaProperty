"use client";

import { useState } from "react";
import { z } from "zod";
import { LeadType } from "@/lib/leads";

type SubmitState = "idle" | "submitting" | "success" | "error";

export function useLeadSubmit() {
  const [state, setState] = useState<SubmitState>("idle");
  const [error, setError] = useState<string | null>(null);

  async function submit(payload: { type: z.infer<typeof LeadType> } & Record<string, unknown>) {
    setState("submitting");
    setError(null);
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...payload,
          sourcePage: typeof window !== "undefined" ? window.location.pathname : "",
        }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error || "Something went wrong");
      }
      setState("success");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
      setState("error");
    }
  }

  return { submit, state, error, reset: () => setState("idle") };
}
