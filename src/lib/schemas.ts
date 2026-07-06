import { z } from "zod";

/* ── Wizard Schemas ───────────────────────────────────── */

// Step 1
export const identitySchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number is too short"),
  whatsapp: z.string().min(10, "WhatsApp number is too short"),
});

// Step 2
export const departureSchema = z.object({
  departureCity: z.string().min(1, "Please select a departure city"),
  travelMonth: z.string().min(1, "Please select a travel month"),
  dateFlexible: z.boolean(),
});

// Step 3
export const partySizeSchema = z.object({
  adults: z.number().min(1, "At least 1 adult is required"),
  children: z.number().min(0),
  infants: z.number().min(0),
});

// Step 4
export const tierSchema = z.object({
  tier: z.enum(["3-star", "4-star", "5-star", "7-star-vip"], {
    message: "Please select a package tier"
  }),
});

// Step 5 & 6
export const makkahHotelSchema = z.object({
  makkahHotel: z.string().min(1, "Please select a hotel preference for Makkah"),
});

export const madinahHotelSchema = z.object({
  madinahHotel: z.string().min(1, "Please select a hotel preference for Madinah"),
});

// Step 7
export const stayMatrixSchema = z.object({
  makkahNights: z.number().min(1),
  madinahNights: z.number().min(1),
});

// Step 8 & 9
export const portsSchema = z.object({
  portOfEntry: z.enum(["jeddah", "madinah", "riyadh"], {
    message: "Please select a port of entry"
  }),
  portOfDeparture: z.enum(["jeddah", "madinah", "riyadh"], {
    message: "Please select a port of departure"
  }),
});

// Step 10
export const transportSchema = z.object({
  transportLevel: z.enum(["shared", "private-sedan", "vip-suv"], {
    message: "Please select a transport preference"
  }),
});

// Step 11
export const ziyarahSchema = z.object({
  ziyarahs: z.array(z.string()),
});

// Step 12
export const budgetNotesSchema = z.object({
  budgetRange: z.string().min(1, "Please select a budget range"),
  specialRequests: z.string().max(1000, "Notes cannot exceed 1000 characters").optional(),
});

/* ── Full Wizard Schema ──────────────────────────────── */
export const wizardSchema = identitySchema
  .merge(departureSchema)
  .merge(partySizeSchema)
  .merge(tierSchema)
  .merge(makkahHotelSchema)
  .merge(madinahHotelSchema)
  .merge(stayMatrixSchema)
  .merge(portsSchema)
  .merge(transportSchema)
  .merge(ziyarahSchema)
  .merge(budgetNotesSchema);

export type WizardSchemaType = z.infer<typeof wizardSchema>;

/* ── Contact Form Schema ─────────────────────────────── */
export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number is too short"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  honeypot: z.string().max(0, "Spam detected").optional(),
});

export type ContactFormType = z.infer<typeof contactFormSchema>;
