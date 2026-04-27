import { sql } from "drizzle-orm";
import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const leads = pgTable("leads", {
  id: serial("id").primaryKey(),
  type: text("type").notNull(), // strategy_call | rent_estimate | contact | reservation
  name: text("name"),
  email: text("email"),
  phone: text("phone"),
  address: text("address"),
  propertyType: text("property_type"),
  message: text("message"),
  sourcePage: text("source_page"),
  userAgent: text("user_agent"),
  createdAt: timestamp("created_at", { withTimezone: true }).default(sql`now()`).notNull(),
});

export type Lead = typeof leads.$inferSelect;
export type NewLead = typeof leads.$inferInsert;
