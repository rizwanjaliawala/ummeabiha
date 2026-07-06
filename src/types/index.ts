/* ── Lead ─────────────────────────────────────────────── */
export interface Lead {
  id: string;
  referenceId: string;
  createdAt: string;
  status: LeadStatus;
  notes: string;

  // Step 1 — Identity
  fullName: string;
  email: string;
  phone: string;
  whatsapp: string;

  // Step 2 — Departure
  departureCity: string;
  travelMonth: string;
  dateFlexible: boolean;

  // Step 3 — Party
  adults: number;
  children: number;
  infants: number;

  // Step 4 — Tier
  tier: HotelTier;

  // Step 5 & 6 — Hotels
  makkahHotel: string;
  madinahHotel: string;

  // Step 7 — Stay
  makkahNights: number;
  madinahNights: number;

  // Step 8 & 9 — Ports
  portOfEntry: PortCity;
  portOfDeparture: PortCity;

  // Step 10 — Transport
  transportLevel: TransportLevel;

  // Step 11 — Ziyarah
  ziyarahs: string[];

  // Step 12 — Budget & Notes
  budgetRange: string;
  specialRequests: string;

  // Source
  source: "wizard" | "contact" | "whatsapp";
}

export type LeadStatus = "new" | "contacted" | "in-progress" | "converted" | "closed";

export type HotelTier = "3-star" | "4-star" | "5-star" | "7-star-vip";

export type PortCity = "jeddah" | "madinah" | "riyadh";

export type TransportLevel = "shared" | "private-sedan" | "vip-suv";

/* ── Wizard Form Data ────────────────────────────────── */
export interface WizardFormData {
  fullName: string;
  email: string;
  phone: string;
  whatsapp: string;
  departureCity: string;
  travelMonth: string;
  dateFlexible: boolean;
  adults: number;
  children: number;
  infants: number;
  tier: HotelTier;
  makkahHotel: string;
  madinahHotel: string;
  makkahNights: number;
  madinahNights: number;
  portOfEntry: PortCity;
  portOfDeparture: PortCity;
  transportLevel: TransportLevel;
  ziyarahs: string[];
  budgetRange: string;
  specialRequests: string;
}

/* ── Package ─────────────────────────────────────────── */
export interface Package {
  id: string;
  title: string;
  subtitle: string;
  tier: HotelTier;
  description: string;
  highlights: string[];
  makkahNights: number;
  madinahNights: number;
  includes: string[];
  priceLabel: string;
  image: string;
  featured: boolean;
}

/* ── Hotel ───────────────────────────────────────────── */
export interface Hotel {
  id: string;
  name: string;
  city: "makkah" | "madinah";
  stars: number;
  distanceToHaram: string;
  description: string;
  amenities: string[];
  image: string;
}

/* ── Tour ────────────────────────────────────────────── */
export interface Tour {
  id: string;
  title: string;
  destination: string;
  duration: string;
  description: string;
  highlights: string[];
  image: string;
}

/* ── Testimonial ─────────────────────────────────────── */
export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  quote: string;
  avatar?: string;
  travelDate: string;
}

/* ── FAQ ─────────────────────────────────────────────── */
export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: "general" | "umrah" | "hajj" | "visa" | "payment" | "travel";
}

/* ── Contact Form ────────────────────────────────────── */
export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  honeypot?: string;
}

/* ── Nav Link ────────────────────────────────────────── */
export interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
}
