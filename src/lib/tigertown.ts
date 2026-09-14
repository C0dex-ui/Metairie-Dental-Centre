export const SITE_NAME = "Tiger Town Dental Care";
export const SITE_URL = "https://www.tigertowndental.com";
export const PRIMARY_KW = "family dentist Baton Rouge";

export const TITLE = "Family Dentist Baton Rouge | Tiger Town Dental Care";
export const DESCRIPTION =
  "Family dentist in Baton Rouge at 8160 YMCA Plaza Dr Ste B. Dr. Thunga Nguyen, DDS. New patients welcome. Call (225) 768-8200.";

export const NAP = {
  name: SITE_NAME,
  street: "8160 YMCA Plaza Dr Ste B",
  city: "Baton Rouge",
  region: "LA",
  postal: "70810",
  phone: "(225) 768-8200",
  phoneE164: "+1-225-768-8200",
  phoneHref: "tel:+12257688200",
  email: "info@tigertowndental.com",
  lat: 30.373464,
  lng: -91.0764601,
  country: "US",
} as const;

export const ADDRESS_LINE = `${NAP.street}, ${NAP.city}, ${NAP.region} ${NAP.postal}`;
export const MAPS_HREF = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS_LINE)}`;
export const MAPS_EMBED = `https://maps.google.com/maps?q=${encodeURIComponent(ADDRESS_LINE)}&hl=en&z=16&output=embed`;

export const HOURS = [
  { days: "Monday", time: "8:00 AM–5:00 PM" },
  { days: "Tuesday", time: "7:30 AM–4:00 PM" },
  { days: "Wednesday", time: "8:00 AM–5:00 PM" },
  { days: "Thursday", time: "7:30 AM–4:00 PM" },
  { days: "Friday–Sunday", time: "Closed" },
] as const;

export const HOURS_SHORT = "Mon & Wed 8–5 · Tue & Thu 7:30–4";
export const HOURS_NOTE = "Hours from the official office schedule. Confirm when you call.";

export const DOCTOR = {
  name: "Dr. Thunga Nguyen",
  credential: "DDS",
} as const;

export const WELCOME =
  "Tiger Town Dental is always welcoming new patients and we would love to have you as part of our dental family.";

export const WELCOME_FULL =
  "Welcome to Tiger Town Dental located in Baton Rouge, LA. Tiger Town Dental is always welcoming new patients and we would love to have you as part of our dental family.";

export const BIO_1 =
  "Dr. Thunga Nguyen is a Louisiana native. She was born and raised in New Orleans and is the seventh child among ten siblings. She attended Tulane University in New Orleans and earned her undergraduate degree in Cell & Molecular Biology. Thereafter, she continued her higher education at LSU School of Dentistry and obtained her Doctor of Dental Surgery degree.";

export const BIO_2 =
  "Dr. Nguyen is a member of multiple dental groups that allow her to share with and learn from her dental colleagues. She is dedicated to stay up-to-date with the latest dental materials and technology through continuing education courses.";

export const BIO_3 =
  "Aside from dentistry, Dr. Nguyen enjoys cooking, traveling, playing volleyball, and mostly, spending quality time with her family. She lives in Baton Rouge with her husband, Tuan and her two sons, Toby and Tanner.";

export const ABOUT_LINE = "A beautiful practice for all your dental needs.";

export const FACILITY =
  "We are proud to provide a state-of-the-art facility for the highest quality dental care available. Our office meets and surpasses all OSHA and CDC standards. We welcome all patients as if they were family.";

export const ROOTED = FACILITY;

export const FAMILY_RANGE =
  "Whitening, bonding, porcelain veneers, porcelain crowns, white fillings, periodontal care, dental implants, and sedation dentistry.";

export const TAGLINE_OFFICIAL = "Always welcoming new patients.";

export const REVIEWS_KICKER = "What Our Clients Say About Us";
export const REVIEWS_INTRO = "Coming soon.";

export const STORY = [
  WELCOME_FULL,
  FACILITY,
  "If you would like to make an appointment, please contact our office by phone or email. Emergency calls and appointments are available and welcome, especially for new patients seeking help.",
] as const;

export const MEET_NGUYEN = [BIO_1, BIO_2, BIO_3] as const;
export const MEET_LOTTEN = MEET_NGUYEN;

export const MISSION = "A beautiful practice for all your dental needs.";

export const VALUES = [
  { title: "New patients", body: "Always welcome. We would love to have you as part of our dental family." },
  { title: "OSHA & CDC", body: "Our office meets and surpasses OSHA and CDC standards." },
  { title: "Emergencies", body: "Emergency calls and appointments are available and welcome." },
  { title: "Insurance help", body: "We submit insurance forms and design payment plans for major work." },
] as const;

export const JOIN =
  "Please call us at (225) 768-8200. We love hearing from our patients and anyone who may be interested in becoming one.";

export const FIRST_PARAGRAPH =
  "Tiger Town Dental Care is a family dentist in Baton Rouge at 8160 YMCA Plaza Dr Ste B. Dr. Thunga Nguyen, DDS, welcomes new patients. Call (225) 768-8200.";

export const PAYMENTS = [
  "Insurance forms submitted",
  "Payment plans for major work",
  "Check",
  "Cash",
  "Major credit cards",
] as const;

export type ServiceSlug =
  | "whitening"
  | "bonding"
  | "veneers"
  | "crowns"
  | "fillings"
  | "periodontal"
  | "implants"
  | "sedation";

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
    slug: "whitening",
    title: "Tooth Whitening",
    keyword: "teeth whitening Baton Rouge",
    blurb: "A safe way to brighten your smile after an exam and cleaning.",
    body: "Tooth whitening is a cost effective and safe procedure to create a beautiful, healthy smile. It must be monitored by your dentist and only done after a comprehensive exam and hygiene cleaning. Call (225) 768-8200.",
    seoTitle: "Teeth Whitening Baton Rouge | Tiger Town Dental Care",
    seoDescription:
      "Teeth whitening in Baton Rouge at 8160 YMCA Plaza Dr Ste B. Dr. Thunga Nguyen, DDS. Call (225) 768-8200.",
    h1: "Teeth whitening in Baton Rouge",
  },
  {
    slug: "bonding",
    title: "Bonding",
    keyword: "dental bonding Baton Rouge",
    blurb: "Close gaps and refresh a tooth’s color.",
    body: "Bonding is a cost effective procedure used to fill gaps in front teeth and to change a tooth’s color. Call (225) 768-8200 for a customized plan.",
    seoTitle: "Dental Bonding Baton Rouge | Tiger Town Dental Care",
    seoDescription:
      "Dental bonding in Baton Rouge at Tiger Town Dental Care, 8160 YMCA Plaza Dr Ste B. Call (225) 768-8200.",
    h1: "Dental bonding in Baton Rouge",
  },
  {
    slug: "veneers",
    title: "Porcelain Veneers",
    keyword: "porcelain veneers Baton Rouge",
    blurb: "Thin porcelain to reshape a smile.",
    body: "Porcelain veneers are one of the ways we can improve your smile. For an exact consultation, please contact our office so that we may provide you with a customized treatment plan. Call (225) 768-8200.",
    seoTitle: "Porcelain Veneers Baton Rouge | Tiger Town Dental Care",
    seoDescription:
      "Porcelain veneers in Baton Rouge with Dr. Thunga Nguyen, DDS at 8160 YMCA Plaza Dr Ste B. Call (225) 768-8200.",
    h1: "Porcelain veneers in Baton Rouge",
  },
  {
    slug: "crowns",
    title: "Porcelain Crowns",
    keyword: "porcelain crowns Baton Rouge",
    blurb: "Cover a tooth to change size, shape, and color.",
    body: "Crowns are a permanent cosmetic procedure that covers the entire tooth. It will change the size, shape and color of the teeth in as few as 2 visits. Call (225) 768-8200.",
    seoTitle: "Porcelain Crowns Baton Rouge | Tiger Town Dental Care",
    seoDescription:
      "Porcelain crowns in Baton Rouge at 8160 YMCA Plaza Dr Ste B. Dr. Thunga Nguyen, DDS. Call (225) 768-8200.",
    h1: "Porcelain crowns in Baton Rouge",
  },
  {
    slug: "fillings",
    title: "White Fillings",
    keyword: "white fillings Baton Rouge",
    blurb: "Tooth-colored composite instead of silver.",
    body: "Rather than a gray or silver material in your mouth, the composite color will match the tooth color. Call (225) 768-8200.",
    seoTitle: "White Fillings Baton Rouge | Tiger Town Dental Care",
    seoDescription:
      "White fillings in Baton Rouge at Tiger Town Dental Care. Dr. Thunga Nguyen, DDS. Call (225) 768-8200.",
    h1: "White fillings in Baton Rouge",
  },
  {
    slug: "periodontal",
    title: "Periodontal Care",
    keyword: "gum disease treatment Baton Rouge",
    blurb: "Cleanings, scaling, and care for gum disease.",
    body: "Periodontal disease is a chronic condition that needs immediate attention. Through a series of periodontal cleanings, root planing and scaling, laser therapy and local antibiotics, this condition can be controlled. Call (225) 768-8200.",
    seoTitle: "Periodontal Care Baton Rouge | Tiger Town Dental Care",
    seoDescription:
      "Gum disease treatment in Baton Rouge at 8160 YMCA Plaza Dr Ste B. Call (225) 768-8200.",
    h1: "Periodontal care in Baton Rouge",
  },
  {
    slug: "implants",
    title: "Dental Implants",
    keyword: "dental implants Baton Rouge",
    blurb: "A man-made replacement for a missing tooth.",
    body: "A dental implant is a man-made replacement for a missing tooth or tooth root. With routine dental hygiene and proper home care, a dental implant can last approximately 30 years to a lifetime. Call (225) 768-8200.",
    seoTitle: "Dental Implants Baton Rouge | Tiger Town Dental Care",
    seoDescription:
      "Dental implants in Baton Rouge at Tiger Town Dental Care, 8160 YMCA Plaza Dr Ste B. Call (225) 768-8200.",
    h1: "Dental implants in Baton Rouge",
  },
  {
    slug: "sedation",
    title: "Sedation Dentistry",
    keyword: "sedation dentistry Baton Rouge",
    blurb: "Deep relaxation if the chair makes you anxious.",
    body: "If you have anxiety or fear about going to the dentist you are a candidate for sedation dentistry. You will be in a deep state of relaxation during treatment, able to breathe on your own and communicate. Call (225) 768-8200.",
    seoTitle: "Sedation Dentistry Baton Rouge | Tiger Town Dental Care",
    seoDescription:
      "Sedation dentistry in Baton Rouge with Dr. Thunga Nguyen, DDS. Call (225) 768-8200.",
    h1: "Sedation dentistry in Baton Rouge",
  },
] as const;

export function getService(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export const REVIEWS: readonly { name: string; text: string }[] = [];

export const FAQS = [
  {
    q: "Where is Tiger Town Dental Care?",
    a: "8160 YMCA Plaza Dr Ste B, Baton Rouge, LA 70810.",
  },
  {
    q: "What is the phone number?",
    a: "Call (225) 768-8200.",
  },
  {
    q: "What are your hours?",
    a: "Monday 8:00 AM–5:00 PM, Tuesday 7:30 AM–4:00 PM, Wednesday 8:00 AM–5:00 PM, Thursday 7:30 AM–4:00 PM. Friday, Saturday, and Sunday closed.",
  },
  {
    q: "Who is the dentist?",
    a: "Thunga Nguyen, DDS. She is a Louisiana native, trained at Tulane and LSU School of Dentistry, and lives in Baton Rouge.",
  },
  {
    q: "Are you accepting new patients?",
    a: "Yes. Tiger Town Dental is always welcoming new patients.",
  },
  {
    q: "Do you take emergencies?",
    a: "Emergency calls and appointments are available and welcome, especially for new patients seeking help.",
  },
  {
    q: "How do I book?",
    a: "Call (225) 768-8200 or email the office. A web form is a callback request until the desk confirms the visit.",
  },
  {
    q: "Do you help with insurance?",
    a: "We will be more than happy to submit all insurance forms for you and help you recover the most from your benefits. Payment plans are available for major work. We accept check, cash, or any major credit card.",
  },
  {
    q: "What services do you offer?",
    a: "Tooth whitening, bonding, porcelain veneers, porcelain crowns, white fillings, periodontal care, dental implants, and sedation dentistry.",
  },
  {
    q: "Why are my teeth sensitive?",
    a: "Sensitive teeth often come from gums that have slightly receded. Speak to us in more detail if you have very sensitive teeth.",
  },
  {
    q: "What is tooth whitening?",
    a: "A cost effective and safe procedure to create a beautiful, healthy smile. It must be monitored by your dentist and only done after a comprehensive exam and hygiene cleaning.",
  },
  {
    q: "Who is a candidate for sedation?",
    a: "If you have anxiety or fear about going to the dentist you are a candidate for sedation dentistry. You will not be unconscious — you stay in a deep state of relaxation.",
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
    title: "Our Practice | Tiger Town Dental Care Baton Rouge",
    description:
      "A beautiful practice for all your dental needs. OSHA and CDC standards at 8160 YMCA Plaza Dr Ste B, Baton Rouge. Call (225) 768-8200.",
  },
  services: {
    title: "Dental Services Baton Rouge | Tiger Town Dental Care",
    description:
      "Whitening, bonding, veneers, crowns, fillings, periodontal care, implants, and sedation in Baton Rouge. Call (225) 768-8200.",
  },
  contact: {
    title: "Contact | Tiger Town Dental Care Baton Rouge",
    description:
      "8160 YMCA Plaza Dr Ste B, Baton Rouge, LA 70810. Call (225) 768-8200. Mon & Wed 8–5, Tue & Thu 7:30–4.",
  },
} as const;
