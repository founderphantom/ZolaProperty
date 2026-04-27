import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { db } from "@/db/client";
import { leads } from "@/db/schema";
import { LeadSchema } from "@/lib/leads";
import { SITE } from "@/lib/site";

const resendKey = process.env.RESEND_API_KEY;
const notifyEmail = process.env.LEAD_NOTIFY_EMAIL || SITE.email;
const fromEmail = process.env.RESEND_FROM_EMAIL || "ZOLA Leads <leads@zolapropertymanagement.com>";

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = LeadSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ ok: false, error: "Invalid input", issues: parsed.error.flatten() }, { status: 422 });
  }

  if (parsed.data.website && parsed.data.website.length > 0) {
    return NextResponse.json({ ok: true });
  }

  const data = parsed.data;
  const userAgent = req.headers.get("user-agent") ?? "";

  let leadId: number | null = null;
  try {
    if (process.env.POSTGRES_URL) {
      const inserted = await db
        .insert(leads)
        .values({
          type: data.type,
          name: data.name || null,
          email: data.email || null,
          phone: data.phone || null,
          address: data.address || null,
          propertyType: data.propertyType || null,
          message: data.message || null,
          sourcePage: data.sourcePage || null,
          userAgent,
        })
        .returning({ id: leads.id });
      leadId = inserted[0]?.id ?? null;
    }
  } catch (err) {
    console.error("[leads] DB insert failed", err);
  }

  try {
    if (resendKey) {
      const resend = new Resend(resendKey);
      const subject = `New ${data.type.replace("_", " ")} lead${data.name ? ` — ${data.name}` : ""}`;
      const lines = [
        `Type: ${data.type}`,
        data.name && `Name: ${data.name}`,
        data.email && `Email: ${data.email}`,
        data.phone && `Phone: ${data.phone}`,
        data.address && `Address: ${data.address}`,
        data.propertyType && `Property type: ${data.propertyType}`,
        data.message && `Message: ${data.message}`,
        data.sourcePage && `Source: ${data.sourcePage}`,
        leadId && `Lead ID: ${leadId}`,
      ].filter(Boolean) as string[];

      await resend.emails.send({
        from: fromEmail,
        to: notifyEmail,
        replyTo: data.email || undefined,
        subject,
        text: lines.join("\n"),
      });
    }
  } catch (err) {
    console.error("[leads] Email send failed", err);
  }

  return NextResponse.json({ ok: true, id: leadId });
}
