export const SITE_NAME = "Metairie Dental Centre";
export const SITE_URL = "https://www.metairiedental.com";
export const PRIMARY_KW = "dentist Metairie";
export const TITLE = "Dentist in Metairie, LA | Metairie Dental Centre";
export const DESCRIPTION =
  "Family dentists in Metairie at 1304 Clearview Pkwy. Dr. Thomas Murphy and Dr. Bonnie Murphy. Cleanings, cosmetic, implants, Invisalign, and anxiety-free care. Call (504) 455-4660.";

export const NAP = {
  name: SITE_NAME,
  street: "1304 Clearview Pkwy",
  city: "Metairie",
  region: "LA",
  postal: "70001",
  phone: "(504) 455-4660",
  phoneHref: "tel:+15044554660",
  phoneE164: "+1-504-455-4660",
  insurancePhone: "(504) 455-4660",
  insurancePhoneHref: "tel:+15044554660",
  lat: 29.9860541,
  lng: -90.1813903,
} as const;

export const ADDRESS_LINE = "1304 Clearview Pkwy, Metairie, LA 70001";
export const MAPS_HREF = "https://www.google.com/maps/search/?api=1&query=1304%20Clearview%20Pkwy%2C%20Metairie%2C%20LA%2070001";
export const REGISTER_HREF = "https://metairiedental.com/contact/";

export const HOURS = [
  { days: "Monday–Thursday", time: "8:00 AM – 5:00 PM" },
  { days: "Friday", time: "8:00 AM – 2:00 PM" },
  { days: "Saturday–Sunday", time: "Closed" },
] as const;

export const HOURS_SHORT = "Mon–Thu 8–5 · Fri 8–2";
export const HOURS_FOOTER = "Monday–Thursday 8:00 AM – 5:00 PM";
export const HOURS_FOOTER_DAYS = "Friday 8:00 AM – 2:00 PM · Saturday–Sunday closed";
export const TOPBAR = "Family dentistry in Metairie · 1304 Clearview Pkwy";

export const DOCTOR = {
  name: "Dr. Thomas Murphy",
  credential: "DDS",
  role: "Family dentist in Metairie",
  image: "/mdc/thomas.webp",
  imageWidth: 1152,
  imageHeight: 1728,
} as const;

export const CREDENTIALS = [
  "Family-block appointments",
  "Nitrous oxide and oral sedation",
  "First in the New Orleans area to offer PerioLase",
  "Invisalign, Six Month Smiles, braces",
  "Zoom whitening and Lumineers",
  "Digital x-rays and intraoral cameras",
] as const;

export const MEMBERSHIPS = [
  "Aetna",
  "United HealthCare",
  "Assurant",
  "Ameritas",
  "Connection Dental",
  "Cigna Radius",
  "Humana",
  "Guardian",
  "Principal",
  "Maverest",
  "United Concordia (Alliance Network only)",
] as const;

export const BIO = [
  "Dr. Thomas Murphy grew up in Metairie — Bissonet Plaza Elementary, East Jefferson High School, the University of New Orleans, then LSU School of Dentistry. He has practiced for more than 25 years.",
  "Dr. Bonnie Murphy is a family dentist at Metairie Dental Centre on Clearview Pkwy. Patients on the office review page mention her by name.",
] as const;

export const SERVICES = [
  {
    slug: "preventive",
    num: "01",
    title: "Preventive",
    keyword: "dentist Metairie cleaning",
    blurb: "Exams, x-rays, and cleanings. Catching a problem early means a smaller treatment plan.",
    body: "Exams, x-rays, and cleanings. Catching a problem early means a smaller treatment plan.",
    image: "/mdc/preventive.webp",
    width: 1200,
    height: 1600,
  },
  {
    slug: "cosmetic",
    num: "02",
    title: "Cosmetic",
    keyword: "cosmetic dentist Metairie",
    blurb: "Take-home trays, one-visit Zoom whitening, Lumineers, and tooth-colored fillings.",
    body: "Take-home trays, one-visit Zoom whitening, Lumineers, and tooth-colored fillings.",
    image: "/mdc/cosmetic.webp",
    width: 1200,
    height: 1600,
  },
  {
    slug: "restorative",
    num: "03",
    title: "Restorative",
    keyword: "dental implants Metairie",
    blurb: "Crowns, bridges, root canals, implants, and dentures when a smile needs a second chance.",
    body: "Crowns, bridges, root canals, implants, and dentures when a smile needs a second chance.",
    image: "/mdc/restorative.webp",
    width: 1200,
    height: 1600,
  },
  {
    slug: "periodontal",
    num: "04",
    title: "Periodontal",
    keyword: "gum disease Metairie",
    blurb: "Gum screenings and cleanings. First in the New Orleans area to offer Millennium PerioLase.",
    body: "Gum screenings and cleanings. First in the New Orleans area to offer Millennium PerioLase.",
    image: "/mdc/perio.webp",
    width: 1200,
    height: 1600,
  },
  {
    slug: "orthodontics",
    num: "05",
    title: "Orthodontics",
    keyword: "Invisalign Metairie",
    blurb: "Invisalign, Six Month Smiles, and traditional braces for teens and adults.",
    body: "Invisalign, Six Month Smiles, and traditional braces for teens and adults.",
    image: "/mdc/ortho.webp",
    width: 1200,
    height: 1600,
  },
  {
    slug: "anxiety-free",
    num: "06",
    title: "Anxiety-free",
    keyword: "sedation dentist Metairie",
    blurb: "Nitrous oxide and conscious oral sedation so treatment can stay calm.",
    body: "Nitrous oxide and conscious oral sedation so treatment can stay calm.",
    image: "/mdc/anxiety.webp",
    width: 1200,
    height: 1600,
  },
] as const;

export type ServiceSlug = (typeof SERVICES)[number]["slug"];

export const FAQS = [
  {
    q: "Where is the dentist in Metairie?",
    a: "Metairie Dental Centre is at 1304 Clearview Pkwy, Metairie, LA 70001. Call (504) 455-4660.",
  },
  {
    q: "What are the office hours?",
    a: "Monday–Thursday 8:00 AM–5:00 PM. Friday 8:00 AM–2:00 PM. Saturday and Sunday closed.",
  },
  {
    q: "Who are the dentists?",
    a: "Dr. Thomas Murphy (LSU School of Dentistry, 25+ years in practice) and Dr. Bonnie Murphy. The FAQ lists three dentists, including one specially trained in prosthodontics.",
  },
  {
    q: "How often should I get a cleaning?",
    a: "Typically every six months. More frequent visits are recommended if you are more susceptible to decay or gum disease.",
  },
  {
    q: "What happens at the first visit?",
    a: "The team reviews medical and dental history, takes needed x-rays (usually a full-mouth series), and completes a thorough exam.",
  },
  {
    q: "Do you treat dental emergencies?",
    a: "Yes. Times are reserved every day for dental emergencies. Call (504) 455-4660 the same day you are in pain.",
  },
  {
    q: "Can the whole family be seen together?",
    a: "Family-block appointments are offered so several dentists and hygienists can see your family side-by-side or back-to-back.",
  },
  {
    q: "Is sedation available?",
    a: "Nitrous oxide and conscious oral sedation are published for patients who feel nervous about treatment.",
  },
  {
    q: "Which insurance networks are listed?",
    a: "Preferred providers listed: Aetna, United HealthCare, Assurant, Ameritas, Connection Dental, Cigna Radius, Humana, Guardian, Principal, Maverest, and United Concordia (Alliance Network only).",
  },
  {
    q: "Is financing available?",
    a: "The office publishes no-interest payment plans and long-term payment options so care can stay on budget.",
  },
] as const;

export const FIRST_PARAGRAPH =
  "Metairie Dental Centre is the family dentist at 1304 Clearview Pkwy. Dr. Thomas Murphy and Dr. Bonnie Murphy offer preventive, cosmetic, restorative, periodontal, orthodontic, and anxiety-free care. Call (504) 455-4660.";

export const HERO_LEAD = FIRST_PARAGRAPH;
export const OG_IMAGE = "/mdc/thomas.webp";
export const AREAS = ["Metairie", "Jefferson Parish", "New Orleans area"] as const;

export const HOME_LONG = [
  "Metairie Dental Centre is at 1304 Clearview Pkwy, Metairie, LA 70001. Phone (504) 455-4660. Monday–Thursday 8:00 AM–5:00 PM, Friday 8:00 AM–2:00 PM, weekend closed.",
  "Dr. Thomas Murphy has lived in Metairie almost all his life, from Bissonet Plaza Elementary and East Jefferson High School through UNO and LSU School of Dentistry. He has practiced more than 25 years.",
  "Dr. Bonnie Murphy is listed on the official team page. The FAQ states there are three dentists, including one specially trained in prosthodontics. Published patient reviews on this site also mention Dr. Cason.",
  "Services on the official site: preventive, cosmetic, restorative, periodontal, orthodontics, and anxiety-free dentistry.",
  "Cosmetic list: custom take-home whitening trays, Lumineers veneers, one-visit Zoom whitening, tooth-colored fillings, Invisalign, Six Month Smiles, and traditional braces.",
  "Restorative list: porcelain crowns and fixed bridges, endodontics (root canal therapy), dental implants, dentures and removable partial dentures.",
  "The office states it was the first dental practice in the New Orleans area to offer Millennium PerioLase for gum disease, with no scalpel and no suturing.",
  "Anxiety-free care uses nitrous oxide and conscious oral sedation.",
  "Convenience: family-block appointments, same-day emergency times, and flexible financing.",
  "New-patient offers published on the live site include an adult special (exam, x-rays, routine cleaning) and a child special. Confirm current fees with the desk — they are minimum fees and cannot be combined with other offers.",
] as const;

export const CLOSING =
  "Call Metairie Dental Centre at (504) 455-4660, or send the form on this page. 1304 Clearview Pkwy, Metairie, LA 70001 — Dr. Thomas Murphy and Dr. Bonnie Murphy.";

export const REGISTER_STEPS = [
  {
    name: "Call or write",
    text: "Use (504) 455-4660 or the callback form on this page. Official contact is also on metairiedental.com/contact.",
  },
  {
    name: "Bring history",
    text: "The first visit reviews medical and dental history, then x-rays and a full exam.",
  },
  {
    name: "Confirm the time",
    text: "A web form is a request. The Metairie desk still confirms your appointment by phone.",
  },
] as const;

export const TAGLINE_OFFICIAL = "Family dentistry in Metairie.";
export const HOURS_TOP = HOURS_SHORT;
export const HOURS_OVERLAY = HOURS_SHORT;

export const DOCTORS = [
  {
    slug: "thomas-murphy",
    name: "Dr. Thomas Murphy",
    role: "DDS · Family dentist · LSU School of Dentistry",
    image: "/mdc/thomas.webp",
    bio: BIO[0],
    paras: [BIO[0]],
  },
  {
    slug: "bonnie-murphy",
    name: "Dr. Bonnie Murphy",
    role: "Family dentist",
    image: "/mdc/bonnie.webp",
    bio: BIO[1],
    paras: [BIO[1]],
  },
] as const;

export const GALLERY = ["/mdc/logo.webp", "/mdc/thomas.webp", "/mdc/suite.webp"] as const;
export const POSTS: readonly { slug: string; title: string; excerpt: string; body: string; image: string; date: string; category: string }[] = [];
export const TESTIMONIALS: readonly { slug: string; name: string; image: string; quote: string }[] = [];
export const GOOGLE_REVIEWS = {
  href: MAPS_HREF,
  label: "Find us on Google",
  rating: "4.8",
  count: "421",
  meta: "4.8 · 421 Google reviews",
} as const;

export const REVIEW_CARDS = [
  {
    name: "Nick Y.",
    source: "Published on metairiedental.com",
    text: "This was my second visit to Metairie Dental, and I have to say, it was even better than the first. I had a different hygenist (Dr. Bonnie) and she was absolutely amazing. 10/10 I recommend them to everyone!",
  },
  {
    name: "Claire R.",
    source: "Published on metairiedental.com",
    text: "Couldn’t of asked for a more pleasant experience. Dr, hygentist and office personnel are all so helpful and you leave with everything explained to you for your future dental care.",
  },
  {
    name: "Shaciarra D.",
    source: "Published on metairiedental.com",
    text: "Dr. Cason is incredible. Also, the rest of the staff that I’ve encountered take the time to answer my questions, ensure I’m comfortable, and develop rapport with me.",
  },
  {
    name: "Evan R.",
    source: "Published on metairiedental.com",
    text: "I love going here. they make you feel so welcomed and are really nice. I’ve been to a lot of dentists that scare me but they put me right at ease.",
  },
] as const;

export const MAPS_EMBED = `https://maps.google.com/maps?ll=${NAP.lat},${NAP.lng}&q=${encodeURIComponent(ADDRESS_LINE)}&z=16&hl=en&output=embed&t=m`;
export const QUOTE = "Family dentistry in Metairie — convenient, effective, and affordable.";

export const BEFORE_AFTER = [
  {
    slug: "smile",
    label: "Whitening smile",
    before: "/mdc/ba/smile-before.webp",
    after: "/mdc/ba/smile-after.webp",
    beforeAlt: "Illustrative smile with staining before cosmetic dentistry",
    afterAlt: "Illustrative smile after whitening and alignment — not a patient of this office",
  },
] as const;

export const OFFICE_PHOTOS = [
  {
    src: "/mdc/gallery-chair.webp",
    alt: "Patient in a dental chair at Metairie Dental Centre",
    label: "The office",
    title: "Clearview Pkwy suite",
    fact: "Family dentistry at 1304 Clearview Pkwy.",
    href: "/#office",
    featured: true,
    width: 650,
    height: 650,
  },
  {
    src: "/mdc/gallery-smile.webp",
    alt: "Smile from Metairie Dental Centre cosmetic care page",
    label: "Cosmetic",
    title: "Whitening and veneers",
    fact: "Zoom, Lumineers, tooth-colored fillings.",
    href: "/#cosmetic",
    featured: false,
    width: 1000,
    height: 667,
  },
  {
    src: "/mdc/gallery-aligner.webp",
    alt: "Invisalign aligner from Metairie Dental Centre",
    label: "Orthodontics",
    title: "Invisalign and braces",
    fact: "Invisalign, Six Month Smiles, traditional braces.",
    href: "/#orthodontics",
    featured: false,
    width: 400,
    height: 500,
  },
  {
    src: "/mdc/suite.webp",
    alt: "Bright family dental operatory",
    label: "Comfort",
    title: "Calm, modern rooms",
    fact: "Nitrous oxide and oral sedation when you need them.",
    href: "/#anxiety-free",
    featured: false,
    width: 1600,
    height: 1200,
  },
] as const;

export const PAGE_SEO = {
  services: { title: TITLE, description: DESCRIPTION },
  contact: { title: TITLE, description: DESCRIPTION },
} as const;

export const FOOTER_SERVICES = SERVICES.map((s) => ({ name: s.title, href: `/#${s.slug}` }));
export const QUICKLINKS = [
  { name: "Services", href: "/#services" },
  { name: "Doctors", href: "/#doctors" },
  { name: "Results", href: "/#results" },
  { name: "Reviews", href: "/#reviews" },
  { name: "Visit", href: "/#office" },
  { name: "Appointments", href: "/#register" },
  { name: "FAQ", href: "/#faq" },
] as const;

export const ABOUT = {
  kicker: "The dentists",
  title: "Dr. Thomas Murphy and Dr. Bonnie Murphy",
  body: BIO[0],
  body2: BIO[1],
  checks: ["LSU School of Dentistry", "25+ years", "Family-block visits"] as const,
  imgA: "/mdc/thomas.webp",
  imgB: "/mdc/bonnie.webp",
};

export const SPECIALS = [
  {
    name: "Adult New Patient",
    kicker: "Special Offer!",
    price: "$49",
    text: "A full set of X-rays, thorough cleaning, and comprehensive exam for $49.",
    featured: false,
    image: "",
  },
  {
    name: "Free Sonicare Airfloss",
    kicker: "For New Patients With Insurance!",
    price: "FREE",
    text: "Sonicare Airfloss after new patient visit.",
    featured: true,
    image: "/mdc/airfloss.webp",
  },
  {
    name: "Child New Patient Special",
    kicker: "Special Offer!",
    price: "$25",
    text: "Child new patient offer includes routine dental X-rays, thorough cleaning, and comprehensive exam.",
    featured: false,
    image: "",
  },
] as const;

export const MORE_SPECIALS = [
  {
    name: "Zoom! teeth whitening",
    price: "$395",
    text: "Regular price $495. Includes whitening materials and take-home trays.",
  },
  {
    name: "Free orthodontic exam",
    price: "Free",
    text: "Limited exam and consultation. Cannot be combined.",
  },
  {
    name: "Free Invisalign exam",
    price: "Free",
    text: "Limited Invisalign exam and consultation. Cannot be combined.",
  },
] as const;
