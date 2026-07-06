import type { NavLink } from "@/types";

/* ── Company ─────────────────────────────────────────── */
export const COMPANY = {
  name: "Umme Abiha Travel & Tours",
  shortName: "Umme Abiha",
  tagline: "Premium Umrah, Hajj & Islamic Tours",
  phone: "+92 300 325 0250",
  whatsapp: "+923003250250",
  email: "ummeabihatravelandtours@gmail.com",
  address: "Office # 2-3, Plot 1138, Block 3, Federal B Area, Hussainabad, Near Tayyab Medical Store, Karachi",
  city: "Karachi",
  country: "Pakistan",
  website: "https://ummeabihatravels.com",
  foundedYear: 2015,
  social: {
    facebook: "https://facebook.com/ummeabihatravelandtours",
    instagram: "https://instagram.com/ummeabihatravelandtours",
    youtube: "https://youtube.com/@ummeabihatravelandtours",
    tiktok: "https://tiktok.com/@ummeabihatravelandtours",
  },
} as const;

/* ── Navigation ──────────────────────────────────────── */
export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Packages",
    href: "/umrah-packages",
    children: [
      { label: "Umrah Packages", href: "/umrah-packages" },
      { label: "Hajj Packages", href: "/hajj-packages" },
      { label: "Create Your Package", href: "/package-builder" },
    ],
  },
  { label: "Islamic Tours", href: "/islamic-tours" },
  { label: "Hotels", href: "/hotels" },
  { label: "Travel Guide", href: "/travel-guide" },
  { label: "Contact", href: "/contact" },
];

/* ── Package Tiers ───────────────────────────────────── */
export const PACKAGE_TIERS = [
  { value: "3-star", label: "3★ Economy", description: "Comfortable and budget-friendly" },
  { value: "4-star", label: "4★ Premium", description: "Enhanced comfort and proximity" },
  { value: "5-star", label: "5★ Luxury", description: "Closest to Haram, world-class amenities" },
  { value: "7-star-vip", label: "7★ VIP Royal", description: "Ultimate luxury, private services" },
] as const;

/* ── Hotels ───────────────────────────────────────────── */
export const MAKKAH_HOTELS = [
  { value: "recommend", label: "Recommend Best Hotel for Me" },
  { value: "swissotel", label: "Swissôtel" },
  { value: "clock-tower", label: "Clock Tower" },
  { value: "address-hotel", label: "Address Hotel" },
  { value: "le-meridien", label: "Le Meridien" },
  { value: "movenpick-hajar", label: "Mövenpick Hajar Tower" },
  { value: "double-tree", label: "Double Tree by Hilton" },
  { value: "voco", label: "Voco" },
  { value: "m-makkah-millennium", label: "M Makkah by Millennium" },
  { value: "emaar-al-khalil", label: "Emaar Al Khalil" },
  { value: "emaar-al-manar", label: "Emaar Al Manar" },
  { value: "emaar-andalusia", label: "Emaar Andalusia" },
  { value: "badar-al-masa", label: "Badar Al Masa" },
  { value: "nawarat-al-shams", label: "Nawarat Al Shams 3" },
  { value: "majd-al-zahabi", label: "Majd Al Zahabi" },
  { value: "zilal-al-nuzula", label: "Zilal Al Nuzula" },
  { value: "areej-al-wafa", label: "Areej Al Wafa" },
  { value: "jedda-al-khalil", label: "Jedda Al Khalil" },
  { value: "jawarat-al-mahaba", label: "Jawarat Al Mahaba" },
] as const;

export const MADINAH_HOTELS = [
  { value: "recommend", label: "Recommend Best Hotel for Me" },
  { value: "grand-zowar", label: "Grand Zowar" },
  { value: "zowar-international", label: "Zowar International" },
  { value: "ritz-al-madinah", label: "Ritz Al Madinah" },
  { value: "hayat-international", label: "Hayat International" },
  { value: "concord-dar-al-khair", label: "Concord Dar Al Khair" },
  { value: "sky-view", label: "Sky View" },
  { value: "aqeeq", label: "Aqeeq" },
  { value: "odst-al-madinah", label: "Odst Al Madinah" },
  { value: "gulnar-taiba", label: "Gulnar Taiba" },
  { value: "maysan-al-taqwa", label: "Maysan Al Taqwa" },
  { value: "maden-taiba", label: "Maden Taiba" },
  { value: "plaza-inn-ohud", label: "Plaza Inn Ohud" },
  { value: "bir-al-eiman", label: "Bir Al Eiman" },
  { value: "valy-madinah", label: "Valy Madinah" },
  { value: "nusk-al-madina", label: "Nusk Al Madina" },
  { value: "nusk-al-eiman", label: "Nusk Al Eiman" },
  { value: "guest-time", label: "Guest Time" },
  { value: "maien-taiba", label: "Maien Taiba" },
] as const;

/* ── Stay Options ─────────────────────────────────────── */
export const MAKKAH_NIGHTS = [3, 4, 5, 7, 10, 14] as const;
export const MADINAH_NIGHTS = [3, 4, 5, 7, 10] as const;

/* ── Ports ────────────────────────────────────────────── */
export const PORT_CITIES = [
  { value: "jeddah", label: "Jeddah", description: "King Abdulaziz International Airport" },
  { value: "madinah", label: "Madinah", description: "Prince Mohammad bin Abdulaziz Airport" },
  { value: "riyadh", label: "Riyadh", description: "King Khalid International Airport" },
] as const;

/* ── Transport ────────────────────────────────────────── */
export const TRANSPORT_LEVELS = [
  { value: "shared", label: "Shared Transport", description: "Comfortable shared coach with group", icon: "bus" },
  { value: "private-sedan", label: "Private Luxury Sedan", description: "Dedicated sedan with professional driver", icon: "car" },
  { value: "vip-suv", label: "VIP Chauffeur SUV", description: "Premium SUV with VIP chauffeur service", icon: "crown" },
] as const;

/* ── Ziyarah Options ──────────────────────────────────── */
export const ZIYARAH_OPTIONS = [
  { value: "makkah-ziyarah", label: "Makkah Ziyarah", description: "Cave of Hira, Cave of Thawr, Jannat al-Mualla" },
  { value: "madinah-ziyarah", label: "Madinah Ziyarah", description: "Masjid Quba, Masjid Qiblatain, Uhud, Jannat al-Baqi" },
  { value: "taif", label: "Taif Excursion", description: "Mountains, Masjid Abdullah ibn Abbas, Rose gardens" },
  { value: "badr", label: "Badr Battlefield", description: "Historic Battle of Badr site and Shuhada graveyard" },
  { value: "jeddah-tour", label: "Jeddah City Tour", description: "Corniche, Al-Balad historic district, floating mosque" },
] as const;

/* ── Budget ────────────────────────────────────────────── */
export const BUDGET_RANGES = [
  { value: "under-300k", label: "Under PKR 300,000" },
  { value: "300k-500k", label: "PKR 300,000 – 500,000" },
  { value: "500k-800k", label: "PKR 500,000 – 800,000" },
  { value: "800k-1.2m", label: "PKR 800,000 – 1,200,000" },
  { value: "1.2m-2m", label: "PKR 1,200,000 – 2,000,000" },
  { value: "above-2m", label: "Above PKR 2,000,000" },
  { value: "flexible", label: "Flexible — Recommend Best Value" },
] as const;

/* ── Departure Cities ─────────────────────────────────── */
export const DEPARTURE_CITIES = [
  "Karachi",
  "Lahore",
  "Islamabad",
  "Rawalpindi",
  "Peshawar",
  "Multan",
  "Faisalabad",
  "Quetta",
  "Sialkot",
  "Hyderabad",
  "Sukkur",
  "Other",
] as const;

/* ── Travel Months ────────────────────────────────────── */
export const TRAVEL_MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
] as const;
