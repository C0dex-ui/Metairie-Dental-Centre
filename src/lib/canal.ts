export const SITE_NAME = "Canal Street Family Dentistry";
export const SITE_URL = "https://www.canalstdental.com";
export const PRIMARY_KW = "family dentist New Orleans";

/** 58 characters — audit window 50–60, target 55–60 */
export const TITLE = "Family Dentist New Orleans | Canal Street Family Dentistry";
/** 151 characters — audit window 145–160 */
export const DESCRIPTION =
  "Family dentist New Orleans at 2752 Canal Street. Dr. Rayfield Lotten offers cleanings, kids’ care, crowns, and dentures. Call (504) 822-8890 to book today.";

export const NAP = {
  name: SITE_NAME,
  street: "2752 Canal Street",
  city: "New Orleans",
  region: "LA",
  postal: "70119",
  phone: "(504) 822-8890",
  phoneE164: "+1-504-822-8890",
  phoneHref: "tel:+15048228890",
  lat: 29.9660259,
  lng: -90.0888635,
  country: "US",
} as const;

export const ADDRESS_LINE = `${NAP.street}, ${NAP.city}, ${NAP.region} ${NAP.postal}`;
export const MAPS_HREF = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS_LINE)}`;
export const MAPS_EMBED = `https://maps.google.com/maps?q=${encodeURIComponent(ADDRESS_LINE)}&hl=en&z=16&output=embed`;

/** No official star count. Badge and grid link to Maps without inventing a rating. */
export const GOOGLE_REVIEWS = {
  href: MAPS_HREF,
  source: "Google",
} as const;

export const HOURS = [
  { days: "Monday–Thursday", time: "9:00 AM–5:00 PM" },
  { days: "Friday", time: "9:00 AM–1:00 PM" },
  { days: "Saturday–Sunday", time: "Closed" },
] as const;

export const HOURS_SHORT = "Mon–Thu 9–5 · Fri 9–1";
export const HOURS_NOTE =
  "Hours above are from the official contact page. Chamber, Demandforce, and other directories still disagree. Confirm when you call.";

export const DOCTOR = {
  name: "Dr. Rayfield Lotten",
  credential: "DDS",
} as const;

export const WELCOME =
  "We bring professional dental care directly to you on the historic Canal Street streetcar line. Dr. Rayfield Lotten provides accessible, affordable, and convenient family dentistry for every generation in New Orleans.";

export const BIO_1 =
  "Dr. Rayfield Lotten is dedicated to providing New Orleans families with compassionate, high-quality care that respects your time and your comfort. From gentle kids' cleanings to restorative work, we treat everyone with patience and clear communication.";

export const BIO_2 =
  "With a mission to make quality dental care accessible to every family in New Orleans, Dr. Lotten brings a warm, patient approach to every visit. He is dedicated to building lasting relationships with the community he serves.";

export const ABOUT_LINE =
  "We believe dental care should be as accessible as the Canal Street streetcar line.";

export const ROOTED =
  "We are proud to call Canal Street our home. Our practice is designed to be as accessible as the streetcar line itself, bringing professional dental care directly to the heart of the city.";

export const FAMILY_RANGE =
  "We offer a comprehensive range of dental care designed for every member of your family, from the first smile to the most advanced restorative work.";

export const TAGLINE_OFFICIAL = "Caring Smiles on Canal Street";

export const REVIEWS_KICKER = "Voices from the Line";
export const REVIEWS_INTRO =
  "Four patient quotes published on canalstdental.com. The office does not print a star rating.";

export const STORY = [
  "At Canal Street Family Dentistry, we believe a trip to the dentist should feel calm, kind, and comfortable. For years, families along Canal Street and across New Orleans have trusted us to care for their smiles with a gentle touch and a friendly face.",
  "Our office was built around a simple idea: when you feel relaxed and understood, you can take better care of your health. From the moment you walk through our doors, you’re greeted by a team that knows your name, listens to your concerns, and treats you like family.",
  "Whether you’re coming in for a routine cleaning, fixing a problem tooth, or getting your smile back on track after some time away, we’re here to help, without judgment and without pressure. Our goal is to make every visit a little easier than the last, so you can enjoy a healthy, confident smile for years to come.",
  "At Canal Street Family Dentistry, we’re proud to live up to our tagline every day: “Caring Smiles on Canal Street.”",
] as const;

export const MEET_LOTTEN = [
  "Dr. Lotten is a gentle, down-to-earth family dentist who truly enjoys helping people feel good about their smiles.",
  "With years of experience caring for patients of all ages, Dr. Lotten understands that many people feel nervous about going to the dentist. That’s why he takes extra time to explain each step, answer questions in plain language, and check in often to make sure you’re comfortable.",
  "He believes that great dental care is about more than teeth, it’s about trust. Whether you’re a child at your very first visit, an adult who hasn’t seen a dentist in a while, or a long-time patient, Dr. Lotten meets you right where you are, with patience and respect.",
  "Outside the office, you’ll often find him enjoying the New Orleans community, spending time with family, and staying up to date on the latest advances in gentle, modern dentistry. His favorite part of the job? Seeing a once-nervous patient leave with a relaxed smile and the confidence to come back.",
] as const;

export const MISSION =
  "To provide gentle, honest dental care in a place where every patient feels at home.";

export const VALUES = [
  {
    title: "Kindness",
    body: "We treat every person who walks through our doors with warmth, patience, and respect. No lectures, no shame, just support.",
  },
  {
    title: "Family First",
    body: "We care for kids, teens, adults, and grandparents, and we tailor our approach to each stage of life. We want to be your family’s dental home for many years to come.",
  },
  {
    title: "Clear Communication",
    body: "We explain your options in everyday language, so you always know what’s happening and why. You’re never rushed, and your questions are always welcome.",
  },
  {
    title: "Long-Term Relationships",
    body: "We’re not here for quick fixes, we’re here to partner with you over time. Together, we’ll build healthy habits and a smile you can feel proud of.",
  },
  {
    title: "Gentle Care",
    body: "From cleanings to more advanced treatments, we focus on comfort at every step. We check in often, move at your pace, and use techniques designed to help you relax.",
  },
] as const;

export const JOIN =
  "If you’ve been looking for a friendly, low-stress dental home, we’d love to welcome you to Canal Street Family Dentistry. Whether it’s been six months or several years since your last visit, you’re in the right place.";

export const FIRST_PARAGRAPH =
  "We believe dental care should be as accessible as the Canal Street streetcar line. Dr. Rayfield Lotten is dedicated to providing New Orleans families with compassionate, high-quality care that respects your time and your comfort. From gentle kids' cleanings to restorative work, we treat everyone with patience and clear communication.";

export const PAYMENTS = [
  "Ask the desk about insurance",
  "Confirm your plan when you call",
] as const;

export type ServiceSlug =
  | "cleanings"
  | "crown-bridge"
  | "whitening"
  | "implants"
  | "extractions"
  | "bonding"
  | "dentures-3d"
  | "fillings"
  | "denture-repair"
  | "kids";

export type Service = {
  slug: ServiceSlug;
  title: string;
  keyword: string;
  blurb: string;
  body: string;
  seoTitle: string;
  seoDescription: string;
  h1: string;
};

export const SERVICES: readonly Service[] = [
  {
    slug: "cleanings",
    title: "Dental Cleanings",
    keyword: "dental cleanings New Orleans",
    blurb:
      "Professional cleanings to remove plaque and prevent cavities, keeping your smile healthy and bright.",
    body: "Professional cleanings to remove plaque and prevent cavities, keeping your smile healthy and bright. A visit checks gums, removes buildup, and maps what you need next. Call (504) 822-8890 to schedule.",
    seoTitle: "Dental Cleanings New Orleans | Canal St Family Dentistry",
    seoDescription:
      "Dental cleanings in New Orleans at 2752 Canal St with Dr. Rayfield Lotten. Plaque removal, gum checks, and a clear next step. Call (504) 822-8890 today.",
    h1: "Dental cleanings New Orleans on Canal Street",
  },
  {
    slug: "crown-bridge",
    title: "Crown & Bridge",
    keyword: "crown and bridge New Orleans",
    blurb:
      "Restoring strength and aesthetics to your smile with custom-fitted dental crowns and bridges.",
    body: "Restoring strength and aesthetics to your smile with custom-fitted dental crowns and bridges. Crowns cover a damaged tooth. A bridge replaces a missing tooth by joining to neighbors. Call (504) 822-8890 to book.",
    seoTitle: "Crown and Bridge New Orleans | Canal St Family Dentistry",
    seoDescription:
      "Crown and bridge care in New Orleans at 2752 Canal St. Dr. Rayfield Lotten restores damaged or missing teeth. Call (504) 822-8890 to book your visit.",
    h1: "Crown and bridge New Orleans at 2752 Canal St",
  },
  {
    slug: "whitening",
    title: "Whitening",
    keyword: "teeth whitening New Orleans",
    blurb: "Transform your smile with professional whitening treatments designed for lasting results.",
    body: "Transform your smile with professional whitening treatments designed for lasting results. Bring up stains, sensitivity, or past bleaching so we can set a plan that fits. Call (504) 822-8890.",
    seoTitle: "Teeth Whitening New Orleans | Canal St Family Dentistry",
    seoDescription:
      "Teeth whitening in New Orleans at Canal Street Family Dentistry, 2752 Canal St. Ask Dr. Rayfield Lotten about stains and sensitivity. Call (504) 822-8890.",
    h1: "Teeth whitening New Orleans with Dr. Lotten",
  },
  {
    slug: "implants",
    title: "Dental Implants",
    keyword: "dental implants New Orleans",
    blurb:
      "We surgically place a small, threaded post in the jawbone to act as a replacement root for a missing tooth.",
    body: "We surgically place a small, threaded post in the jawbone to act as a replacement root for a missing tooth. Not every gap is an implant case. Call (504) 822-8890 to ask whether you are a candidate.",
    seoTitle: "Dental Implants New Orleans | Canal St Family Dentistry",
    seoDescription:
      "Dental implants in New Orleans at 2752 Canal St. Dr. Rayfield Lotten places a post to replace a missing root. Call (504) 822-8890 to ask if you qualify.",
    h1: "Dental implants New Orleans on the Canal line",
  },
  {
    slug: "extractions",
    title: "Tooth Extractions",
    keyword: "tooth extractions New Orleans",
    blurb:
      "Expert removal of impacted or damaged teeth with minimal discomfort and maximum precision.",
    body: "Expert removal of impacted or damaged teeth with minimal discomfort and maximum precision. After removal, ask about a filling, bridge, implant, or denture to close the space. Call (504) 822-8890.",
    seoTitle: "Tooth Extractions New Orleans | Canal St Family Dentistry",
    seoDescription:
      "Tooth extractions in New Orleans at 2752 Canal St. Dr. Rayfield Lotten removes teeth that cannot be saved. Call (504) 822-8890 to talk through next steps.",
    h1: "Tooth extractions New Orleans at Canal Street",
  },
  {
    slug: "bonding",
    title: "Esthetic Bonding",
    keyword: "esthetic bonding New Orleans",
    blurb: "Quick, painless bonding to repair chipped teeth and improve the appearance of your smile.",
    body: "Quick, painless bonding to repair chipped teeth and improve the appearance of your smile. Bonding uses tooth-colored material for chips and small gaps when a full crown is more than you need. Call (504) 822-8890.",
    seoTitle: "Esthetic Bonding New Orleans | Canal St Family Dentistry",
    seoDescription:
      "Esthetic bonding in New Orleans at 2752 Canal St. Repair chips and small gaps with Dr. Rayfield Lotten. Call (504) 822-8890 to book a conservative visit.",
    h1: "Esthetic bonding New Orleans for chips and gaps",
  },
  {
    slug: "dentures-3d",
    title: "3D Printed Dentures",
    keyword: "3D printed dentures New Orleans",
    blurb:
      "Advanced technology for a more comfortable, precise, and durable fit for your dentures.",
    body: "Advanced technology for a more comfortable, precise, and durable fit for your dentures. Bring your current denture so we can see the fit. Call (504) 822-8890.",
    seoTitle: "3D Printed Dentures New Orleans | Canal St Family Dentistry",
    seoDescription:
      "3D printed dentures in New Orleans at 2752 Canal St. A digital fit from Canal Street Family Dentistry. Call (504) 822-8890 to bring in your current denture.",
    h1: "3D printed dentures New Orleans on Canal Street",
  },
  {
    slug: "fillings",
    title: "Dental Filling",
    keyword: "dental fillings New Orleans",
    blurb:
      "Restoring your teeth with durable, high-quality materials to protect your enamel and prevent further decay.",
    body: "Restoring your teeth with durable, high-quality materials to protect your enamel and prevent further decay. A filling treats a cavity before it reaches the nerve. Call (504) 822-8890 at the first sign of a catch or sensitivity.",
    seoTitle: "Dental Fillings New Orleans | Canal St Family Dentistry",
    seoDescription:
      "Dental fillings in New Orleans at 2752 Canal St. Dr. Rayfield Lotten treats decay before it reaches the nerve. Call (504) 822-8890 at the first sweet-zinger.",
    h1: "Dental fillings New Orleans before decay spreads",
  },
  {
    slug: "denture-repair",
    title: "Denture Repair",
    keyword: "denture repair New Orleans",
    blurb: "Restoring your confidence with professional denture repair and custom-fit solutions.",
    body: "Restoring your confidence with professional denture repair and custom-fit solutions. Bring a cracked or loose denture rather than waiting. Turnaround is confirmed when you call (504) 822-8890.",
    seoTitle: "Denture Repair New Orleans | Canal Street Family Dentist",
    seoDescription:
      "Denture repair in New Orleans at 2752 Canal St. Bring a cracked or loose denture to Dr. Rayfield Lotten. Call (504) 822-8890 — turnaround is confirmed by phone.",
    h1: "Denture repair New Orleans at 2752 Canal Street",
  },
  {
    slug: "kids",
    title: "Kid's Dentistry",
    keyword: "kids dentistry New Orleans",
    blurb:
      "Gentle kids' cleanings and first visits. Dr. Lotten treats children with patience and clear communication.",
    body: "Gentle first visits and kids' cleanings. Dr. Lotten treats children with patience and clear communication. Call (504) 822-8890 to book your child’s visit.",
    seoTitle: "Kids Dentistry New Orleans | Canal Street Family Dentist",
    seoDescription:
      "Kids dentistry in New Orleans at 2752 Canal St. Gentle first visits and cleanings with Dr. Rayfield Lotten. Call (504) 822-8890 to book your child’s chair.",
    h1: "Kids dentistry New Orleans for first visits",
  },
] as const;

export function getService(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export const REVIEWS = [
  {
    name: "Berilin Johnson",
    text: "The staff is incredibly welcoming and the office is so clean. I feel like I'm getting the care I deserve.",
  },
  {
    name: "Jazmyn Battle",
    text: "I brought my kids for their first visit and the staff made them feel completely comfortable.",
  },
  {
    name: "Nora",
    text: "The office is so well taken care of. I had an emergency visit and they were incredibly efficient.",
  },
  {
    name: "Derrick James",
    text: "Dr. Lotten is so patient and explains everything clearly. My kids are happy to come back.",
  },
] as const;

export const FAQS = [
  {
    q: "Where is Canal Street Family Dentistry?",
    a: "We are at 2752 Canal Street, New Orleans, LA 70119, on the historic Canal Street streetcar line in Mid-City.",
  },
  {
    q: "What is the phone number?",
    a: "Call (504) 822-8890 to book a visit or ask a question.",
  },
  {
    q: "What are your hours?",
    a: "Monday–Thursday 9:00 AM–5:00 PM, Friday 9:00 AM–1:00 PM, Saturday and Sunday closed. Please confirm when you call.",
  },
  {
    q: "Who is the dentist?",
    a: "Dr. Rayfield Lotten, DDS. He is a gentle, down-to-earth family dentist who cares for patients of all ages.",
  },
  {
    q: "Do you see children?",
    a: "Yes. Kid’s dentistry is part of family care here — first visits, gentle cleanings, patience, and clear communication.",
  },
  {
    q: "What services do you offer?",
    a: "Dental cleanings, crown & bridge, whitening, dental implants, tooth extractions, esthetic bonding, 3D printed dentures, dental filling, denture repair, and kid’s dentistry. If you need something else, call and ask.",
  },
  {
    q: "How do I book a visit?",
    a: "Call (504) 822-8890. New patients are welcome. There is no public online scheduler. A web form is a callback request until the desk confirms the chair.",
  },
  {
    q: "Do you take insurance?",
    a: "Ask the desk when you call (504) 822-8890. The official site does not publish a carrier list. Confirm your plan before you assume coverage.",
  },
  {
    q: "Can you see me for an emergency?",
    a: "Call the office. We will tell you what we can do that day. We do not list after-hours or weekend coverage.",
  },
  {
    q: "Are you open Saturday?",
    a: "No. Saturday and Sunday are closed. Friday closes at 1:00 PM.",
  },
  {
    q: "Are you accepting new patients?",
    a: "Yes. Call (504) 822-8890 for the next open chair.",
  },
] as const;

export const NAV = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
] as const;

export const PAGE_SEO = {
  about: {
    title: "Family Dentist Company New Orleans | Canal Street Office",
    description:
      "Meet the family dentist company in New Orleans — Dr. Rayfield Lotten, DDS, at 2752 Canal St, Mid-City. Call (504) 822-8890 to book your visit today.",
  },
  services: {
    title: "Family Dentistry Services New Orleans | Canal St Office",
    description:
      "Family dentistry services in New Orleans: cleanings, crowns, whitening, implants, kids’ care, and dentures at 2752 Canal St. Call (504) 822-8890 now.",
  },
  contact: {
    title: "Dentist Canal Street New Orleans | 2752 Canal St Office",
    description:
      "See a dentist on Canal Street in New Orleans at 2752 Canal St, LA 70119. Call (504) 822-8890. Hours Mon–Thu 9–5, Fri 9–1. Confirm when you call. Book now.",
  },
} as const;
