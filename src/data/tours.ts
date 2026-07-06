import type { Tour } from "@/types";

export const tours: Tour[] = [
  {
    id: "makkah-ziyarah",
    title: "Sacred Makkah Ziyarah",
    destination: "Makkah, Saudi Arabia",
    duration: "Full Day",
    description:
      "Visit the most revered sites in and around Makkah including Jabal al-Noor (Cave of Hira), Jabal Thawr, Jannat al-Mualla cemetery, Masjid al-Jinn, and the historic Hudaybiyyah site.",
    highlights: [
      "Cave of Hira — Where the first revelation descended",
      "Cave of Thawr — The migration shelter",
      "Jannat al-Mualla — Historic cemetery",
      "Masjid al-Jinn",
      "Museum of the Two Holy Mosques",
    ],
    image: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=800&q=80",
  },
  {
    id: "madinah-ziyarah",
    title: "Luminous Madinah Ziyarah",
    destination: "Madinah, Saudi Arabia",
    duration: "Full Day",
    description:
      "Explore the blessed city of the Prophet ﷺ. Visit Masjid Quba, Masjid Qiblatain, the Uhud battlefield and its martyrs, Jannat al-Baqi, and the historic date farms of Madinah.",
    highlights: [
      "Masjid Quba — First mosque in Islam",
      "Masjid Qiblatain — Mosque of Two Qiblas",
      "Mount Uhud & Shuhada graveyard",
      "Jannat al-Baqi — Historic cemetery",
      "Madinah Date Farms",
    ],
    image: "https://images.unsplash.com/photo-1519817914152-22d216bb9170?w=800&q=80",
  },
  {
    id: "taif-excursion",
    title: "Taif Mountain Retreat",
    destination: "Taif, Saudi Arabia",
    duration: "Full Day",
    description:
      "Discover the mountain city of Taif known for its cool climate, fragrant roses, and deep Islamic history. Visit Masjid Abdullah ibn Abbas, Shubra Palace, and the stunning rose gardens.",
    highlights: [
      "Masjid Abdullah ibn Abbas",
      "Shubra Palace Museum",
      "Al-Hada Mountain & cable car",
      "Rose gardens & perfume factories",
      "Traditional souq experience",
    ],
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
  },
  {
    id: "istanbul-heritage",
    title: "Istanbul Islamic Heritage",
    destination: "Istanbul, Turkey",
    duration: "5 Days / 4 Nights",
    description:
      "Walk through centuries of Islamic civilization in Istanbul. From the magnificent Sultan Ahmed Mosque to the awe-inspiring Hagia Sophia, and the sacred relics at Topkapi Palace.",
    highlights: [
      "Sultan Ahmed Mosque (Blue Mosque)",
      "Hagia Sophia Grand Mosque",
      "Topkapi Palace — Sacred Islamic relics",
      "Eyüp Sultan Mosque & Pierre Loti",
      "Grand Bazaar & Spice Market",
      "Bosphorus sunset cruise",
    ],
    image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800&q=80",
  },
  {
    id: "cairo-islamic",
    title: "Cairo & Islamic Egypt",
    destination: "Cairo, Egypt",
    duration: "4 Days / 3 Nights",
    description:
      "Discover the Islamic heritage of Cairo, home to Al-Azhar University and the stunning Citadel of Saladin. Experience the vibrant Khan el-Khalili bazaar and the peace of historic mosques.",
    highlights: [
      "Al-Azhar Mosque & University",
      "Citadel of Saladin",
      "Muhammad Ali Mosque",
      "Khan el-Khalili bazaar",
      "Islamic Art Museum",
    ],
    image: "https://images.unsplash.com/photo-1539768942893-daf853ebf36c?w=800&q=80",
  },
];
