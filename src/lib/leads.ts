import { z } from "zod";

export const LeadType = z.enum(["strategy_call", "rent_estimate", "contact", "reservation"]);
export type LeadTypeT = z.infer<typeof LeadType>;

export const LeadSchema = z.object({
  type: LeadType,
  name: z.string().trim().max(120).optional().or(z.literal("")),
  email: z.string().trim().email().max(160).optional().or(z.literal("")),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  address: z.string().trim().max(240).optional().or(z.literal("")),
  propertyType: z.string().trim().max(60).optional().or(z.literal("")),
  message: z.string().trim().max(2000).optional().or(z.literal("")),
  sourcePage: z.string().trim().max(240).optional().or(z.literal("")),
  // honeypot — must be empty
  website: z.string().max(0).optional().or(z.literal("")),
});

export type LeadInput = z.infer<typeof LeadSchema>;
