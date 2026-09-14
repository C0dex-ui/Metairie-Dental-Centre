export const SITE_NAME = "Billiot Pest Control";
export const SITE_URL = "https://www.billiotpest.com";
export const PRIMARY_KW = "pest control Louisiana";

/** 55 chars */
export const TITLE = "Pest Control for Louisiana Homes | Billiot Family, 1937";
/** 158 chars */
export const DESCRIPTION =
  "Family-owned pest control in Louisiana since 1937 from New Orleans and Covington. Sentricon, Termidor, quarterly plans. Call 866-365-0075 for a free estimate.";

export const NAP = {
  name: SITE_NAME,
  street: "5804 Plauche St",
  city: "New Orleans",
  region: "LA",
  postal: "70123",
  phone: "866-365-0075",
  phoneE164: "+1-866-365-0075",
  phoneHref: "tel:+18663650075",
  email: "info@billiotpest.com",
  mailHref: "mailto:info@billiotpest.com",
  country: "US",
} as const;

export const SOUTH = {
  id: "southshore",
  label: "Southshore Corporate Office",
  street: "5804 Plauche St",
  city: "New Orleans",
  region: "LA",
  postal: "70123",
  phone: "504-365-0075",
  phoneE164: "+1-504-365-0075",
  phoneHref: "tel:+15043650075",
  maps: "https://www.google.com/maps/search/?api=1&query=5804+Plauche+St,+New+Orleans,+LA+70123",
  image: "/billiot/southshore.webp",
  w: 1600,
  h: 900,
} as const;

export const NORTH = {
  id: "northshore",
  label: "Northshore Corporate Office",
  street: "857 N Collins Blvd.",
  city: "Covington",
  region: "LA",
  postal: "70433",
  phone: "985-893-5083",
  phoneE164: "+1-985-893-5083",
  phoneHref: "tel:+19858935083",
  maps: "https://www.google.com/maps/search/?api=1&query=857+N+Collins+Blvd,+Covington,+LA+70433",
  image: "/billiot/northshore.webp",
  lat: 30.4774446,
  lng: -90.0875959,
  w: 1600,
  h: 900,
} as const;

export const ADDRESS_LINE = `${SOUTH.street}, ${SOUTH.city}, ${SOUTH.region} ${SOUTH.postal}`;
export const MAPS_HREF = SOUTH.maps;
export const MAPS_EMBED = SOUTH.maps;

export const HOURS: readonly { days: string; time: string }[] = [];
export const HOURS_SHORT = "Call for availability";
export const HOURS_NOTE = "Hours are not listed on billiotpest.com. Call to confirm.";
export const HOURS_TOP = HOURS_SHORT;
export const HOURS_OVERLAY = HOURS_SHORT;
export const HOURS_FOOTER = "Call 866-365-0075";
export const HOURS_FOOTER_DAYS = "Northshore and Southshore offices";

export const OWNER = {
  name: "Bryan Billiot",
  jobTitle: "Owner",
  image: "/billiot/team/bryan-billiot.webp",
} as const;

export const DOCTOR = { name: OWNER.name, credential: OWNER.jobTitle } as const;

export const SOCIAL = {
  facebook: "https://www.facebook.com/billiotpest",
} as const;

export const SAME_AS = [SOCIAL.facebook] as const;

export const AREAS = [
  {
    slug: "covington",
    name: "Covington",
    parish: "St. Tammany Parish",
    keyword: "pest control Covington",
    h1: "Pest Control in Covington LA",
    title: "Pest Control in Covington LA | Billiot Family Since 1937",
    description:
      "Pest control in Covington LA from Billiot Northshore at 857 N Collins Blvd. Family-owned since 1937. Sentricon and Termidor. Call 985-893-5083 today.",
    office: NORTH,
    image: "/billiot/northshore.webp",
    alt: "Louisiana cottage on a pest control route in Covington",
    lede: "Pest control in Covington starts at Billiot’s Northshore office at 857 N Collins Blvd. Family crews have covered St. Tammany Parish since 1937.",
  },
  {
    slug: "new-orleans",
    name: "New Orleans",
    parish: "Orleans and Jefferson Parish",
    keyword: "pest control New Orleans",
    h1: "Pest Control in New Orleans LA",
    title: "Pest Control in New Orleans LA | Billiot Family Since 1937",
    description:
      "Pest control in New Orleans from Billiot Southshore at 5804 Plauche St. Family-owned since 1937. Sentricon and Termidor. Call 504-365-0075 for an estimate.",
    office: SOUTH,
    image: "/billiot/southshore.webp",
    alt: "Southshore home on a Billiot pest control route in New Orleans",
    lede: "Pest control in New Orleans runs from Billiot’s Southshore office at 5804 Plauche St. Jefferson Parish crews cover homes and businesses along the river and the west bank.",
  },
  {
    slug: "harvey",
    name: "Harvey",
    parish: "Jefferson Parish",
    keyword: "pest control Harvey",
    h1: "Pest Control in Harvey Louisiana",
    title: "Pest Control in Harvey, Louisiana | Billiot Family 1937",
    description:
      "Pest control in Harvey Louisiana from Billiot Southshore at 5804 Plauche St, New Orleans. Family-owned since 1937. Call 504-365-0075 for a free estimate.",
    office: SOUTH,
    image: "/billiot/harvey.webp",
    alt: "West-bank ranch on a Billiot pest control route in Harvey Louisiana",
    lede: "Pest control in Harvey is a named Billiot market. West-bank jobs leave the Southshore office at 5804 Plauche St in New Orleans.",
  },
] as const;

export type AreaSlug = (typeof AREAS)[number]["slug"];

export const REVIEWS: readonly { name: string; text: string }[] = [];
export const REVIEWS_INTRO =
  "Official Pestimonials live on billiotpest.com. This site does not invent quotes or ratings.";
export const REVIEWS_KICKER = "Pestimonials";

export const WELCOME =
  "Family-owned pest control in Louisiana since 1937. Customized plans from New Orleans and Covington.";
export const WELCOME_FULL = WELCOME;
export const FIRST_PARAGRAPH =
  "Family-owned pest control in Louisiana since 1937. Northshore in Covington, Southshore in New Orleans. Sentricon, Termidor, and a free estimate.";
export const ABOUT_LINE = "Family owned since 1937.";
export const FACILITY =
  "Two corporate offices: 5804 Plauche St, New Orleans and 857 N Collins Blvd., Covington.";
export const ROOTED = FACILITY;
export const FAMILY_RANGE = "Quarterly, monthly commercial, one-time, Sentricon, Termidor, specialty pests.";
export const TAGLINE = "Family Owned Since 1937";
export const TAGLINE_OFFICIAL = TAGLINE;
export const TOPBAR = "Call 866-365-0075 · Free estimate";
export const STORY = [WELCOME, FACILITY, FIRST_PARAGRAPH] as const;
export const MEET_NGUYEN = STORY;
export const MEET_LOTTEN = STORY;
export const MISSION = "Superior results, trained technicians, competitive price, long-term relationships.";

export const VALUES = [
  { title: "Trained techs", body: "Current methods. Identify the pest, then treat." },
  { title: "Custom plan", body: "Written on the property you actually have." },
  { title: "Free estimate", body: "A professional comes to you before anyone sells a year." },
  { title: "Since 1937", body: "Family-owned pest control in Louisiana for generations." },
] as const;

export const JOIN = "Call 866-365-0075 for a free estimate.";
export const PAYMENTS = ["Call for a free estimate", "Northshore or Southshore", "SMS updates with consent"] as const;

export type ServiceSlug =
  | "quarterly"
  | "monthly"
  | "onetime"
  | "sentricon"
  | "termidor"
  | "specialty";

export type Service = {
  slug: ServiceSlug;
  title: string;
  keyword: string;
  h1: string;
  blurb: string;
  body: string;
  seoTitle: string;
  seoDescription: string;
  image: string;
  alt: string;
};

export const SERVICES: readonly Service[] = [
  {
    slug: "quarterly",
    title: "Quarterly Pest Control",
    keyword: "Residential & commercial",
    h1: "Quarterly Pest Control in Louisiana",
    blurb: "Ongoing protection on a four-visit year for homes and businesses.",
    seoTitle: "Quarterly Pest Control in Louisiana | Billiot Since 1937",
    seoDescription:
      "Quarterly pest control in Louisiana for homes and businesses. Four-visit plans customized on site by Billiot. Call 866-365-0075 for a free estimate.",
    image: "/billiot/mist.webp",
    alt: "Pest control mist along a Louisiana home foundation",
    body: "",
  },
  {
    slug: "monthly",
    title: "Monthly Commercial",
    keyword: "Commercial",
    h1: "Monthly Commercial Pest Control in Louisiana",
    blurb: "Higher-frequency service for properties that need a tighter schedule.",
    seoTitle: "Monthly Commercial Pest Control LA | Billiot Since 1937",
    seoDescription:
      "Monthly commercial pest control in Louisiana for businesses that need a tighter visit cadence. Call Billiot at 866-365-0075 for a free on-site estimate.",
    image: "/billiot/monthly.webp",
    alt: "Commercial kitchen bait stations on a monthly pest control route",
    body: "",
  },
  {
    slug: "onetime",
    title: "One-time Visit",
    keyword: "Residential & commercial",
    h1: "One-Time Pest Control in Louisiana",
    blurb: "A single visit when a specific problem is plaguing the property.",
    seoTitle: "One-Time Pest Control in Louisiana | Billiot Since 1937",
    seoDescription:
      "One-time pest control in Louisiana when a specific problem needs a single visit. Billiot customizes the work. Call 866-365-0075 for a free estimate.",
    image: "/billiot/cockroach.webp",
    alt: "Cockroaches treated on a one-time pest control visit in Louisiana",
    body: "",
  },
  {
    slug: "sentricon",
    title: "Sentricon Always Active",
    keyword: "Termite baiting",
    h1: "Sentricon Termite Bait in Louisiana",
    blurb: "Exclusive baiting for aggressive Formosan termites. Baiting is Best.",
    seoTitle: "Sentricon Termite Bait in Louisiana | Billiot Since 1937",
    seoDescription:
      "Sentricon Always Active termite bait in Louisiana from Billiot. Exclusive baiting for Formosan termites. Call 866-365-0075 for a free estimate.",
    image: "/billiot/bait.webp",
    alt: "Sentricon above-ground bait station used by Billiot Pest Control",
    body: "",
  },
  {
    slug: "termidor",
    title: "Termidor Liquid",
    keyword: "Termite liquid",
    h1: "Termidor Termite Treatment in Louisiana",
    blurb: "Full-perimeter liquid with a manufacturer residual averaging about 10 years.",
    seoTitle: "Termidor Termite Treatment in Louisiana | Billiot 1937",
    seoDescription:
      "Termidor termite treatment in Louisiana from Billiot. Full-perimeter liquid, not a spot spray. Call 866-365-0075 for a free estimate from either office.",
    image: "/billiot/termidor.webp",
    alt: "Termidor perimeter treatment used by Billiot Pest Control in Louisiana",
    body: "",
  },
  {
    slug: "specialty",
    title: "Specialty Pests",
    keyword: "Specialty",
    h1: "Specialty Pest Treatments in Louisiana",
    blurb: "Fleas, ticks, bed bugs, bees, wasps, moles, rodents, and more.",
    seoTitle: "Specialty Pest Treatments in Louisiana | Billiot 1937",
    seoDescription:
      "Specialty pest treatments in Louisiana for fleas, bed bugs, bees, wasps, moles, and rodents. Billiot since 1937. Call 866-365-0075 for a free estimate.",
    image: "/billiot/bedbugs.webp",
    alt: "Bed bug inspection during specialty pest treatment in Louisiana",
    body: "",
  },
];

export function getService(slug: string) {
  return SERVICES.find((s) => s.slug === slug);
}

export const PESTS = [
  "Rodents",
  "Moles",
  "Spiders",
  "Roaches",
  "Bees / Wasps",
  "Hornets",
  "Caterpillars",
  "Earwigs",
  "Fleas",
  "Ants",
  "Bed bugs",
  "Ticks",
] as const;

export const PEST_LIBRARY = [
  { name: "Fire ants", src: "/billiot/pests/fire-ant.webp" },
  { name: "Bed bugs", src: "/billiot/pests/bed-bug.webp" },
  { name: "Bees", src: "/billiot/pests/bees.webp" },
  { name: "Caterpillars", src: "/billiot/pests/caterpillar.webp" },
  { name: "Earwigs", src: "/billiot/pests/earwig.webp" },
  { name: "Fleas", src: "/billiot/pests/fleas.webp" },
  { name: "Flies", src: "/billiot/pests/fly.webp" },
  { name: "Hornets", src: "/billiot/pests/hornet.webp" },
  { name: "Moles", src: "/billiot/pests/mole.webp" },
  { name: "Mosquitos", src: "/billiot/pests/mosquito.webp" },
  { name: "Roaches", src: "/billiot/pests/roach.webp" },
  { name: "Rodents", src: "/billiot/pests/rodent.webp" },
  { name: "Silverfish", src: "/billiot/pests/silverfish.webp" },
  { name: "Flying pests", src: "/billiot/pests/flying-pest.webp" },
  { name: "Wasps", src: "/billiot/pests/wasp.webp" },
] as const;

export const TEAM = [
  { name: "Bryan Billiot", role: "Owner", src: "/billiot/team/bryan-billiot.webp" },
  { name: "Ernest Esteve", role: "Associate Certified Entomologist", src: "/billiot/team/ernest-esteve.jpg" },
  { name: "Steve Prunty", role: "Customer Service Manager", src: "/billiot/team/steve-prunty.jpg" },
  { name: "Tom Smith", role: "Southshore Pest Control Manager", src: "/billiot/team/tom-smith.jpg" },
  { name: "Brent Cazaubon", role: "Southshore Termite Manager", src: "/billiot/team/brent.jpg" },
  { name: "Dwight Rodrigue", role: "Northshore Termite and Pest Manager", src: "/billiot/team/dwight.jpg" },
] as const;

export const FAQS = [
  {
    q: "Are pest prevention methods safe?",
    a: "Safety depends on a licensed technician using labeled products correctly. Ask what is being applied. Labels and manufacturer contacts should be available for toxicity questions.",
  },
  {
    q: "How can I tell ants from termites?",
    a: "Termite swarmers have a broad waist, straight antennae, and matching wings. Ants have a pinched waist, bent antennae, and smaller hind wings.",
  },
  {
    q: "What should I know before signing a termite contract?",
    a: "Ask which product is in the ground, whether the whole perimeter is treated, and what happens at renewal. Billiot uses Termidor on the full perimeter and Sentricon Always Active for baiting.",
  },
  {
    q: "Does Billiot use Sentricon?",
    a: "Yes. Billiot exclusively uses Sentricon for aggressive Formosan termites. Always Active keeps preventative bait in the stations.",
  },
  {
    q: "What is Termidor used for?",
    a: "Termidor is the liquid perimeter. Manufacturer residual averages about 10 years. A courtesy pest-strength spray is not a soil retreatment.",
  },
  {
    q: "Where are the offices?",
    a: "Southshore Corporate Office: 5804 Plauche St, New Orleans, LA 70123, 504-365-0075. Northshore Corporate Office: 857 N Collins Blvd., Covington, LA 70433, 985-893-5083. Toll-free 866-365-0075.",
  },
  {
    q: "What hours are you open?",
    a: "Hours are not listed on billiotpest.com. Call 866-365-0075 and the desk will confirm a window.",
  },
  {
    q: "Do you offer a free estimate?",
    a: "Yes. A professional comes to the property for a free estimate before anyone writes a year of visits.",
  },
  {
    q: "What pests do you treat?",
    a: "Roaches, ants, spiders, fleas, ticks, bed bugs, bees, wasps, hornets, moles, rodents, caterpillars, earwigs, mosquitos, and Formosan termites.",
  },
  {
    q: "Do specialty pests need a year agreement?",
    a: "Some specialty jobs, including certain bed bug and mole work, may require a one-year service agreement. Ask on the estimate.",
  },
  {
    q: "Is Billiot family-owned?",
    a: "Yes. Family-owned since 1937. Public BBB records list Bryan Billiot as owner.",
  },
  {
    q: "Can over-the-counter products stop Formosan termites?",
    a: "No. Formosan termites need a system in the soil — Sentricon baiting and/or Termidor liquid — not a porch spray.",
  },
  {
    q: "Do you treat commercial properties monthly?",
    a: "Yes. Monthly commercial pest control is the tighter cadence for kitchens, warehouses, and storefronts that cannot wait a quarter.",
  },
  {
    q: "Is a one-time visit the same as a quarterly plan?",
    a: "No. One-time is for a specific problem. Quarterly is four visits a year. If the same pests return with the weather, step up to a plan.",
  },
  {
    q: "Which office covers Harvey?",
    a: "Harvey is a named market on the official homepage. West-bank jobs typically leave the Southshore desk at 5804 Plauche St. Call 504-365-0075.",
  },
  {
    q: "Where can I read customer reviews?",
    a: "Official Pestimonials live on billiotpest.com. This rebuild does not invent quotes or star ratings.",
  },
] as const;

export const PAGE_SEO = {
  about: {
    title: "Pest Control Company in Louisiana | Billiot Family, 1937",
    description:
      "Billiot Pest Control is the Louisiana pest control company family-owned since 1937. Bryan Billiot, owner. New Orleans and Covington. Call 866-365-0075.",
  },
  services: {
    title: "Pest Control Plans in Louisiana | Billiot Family Since 1937",
    description:
      "Pest control plans in Louisiana: quarterly, monthly commercial, one-time, Sentricon, Termidor, and specialty pests. Call 866-365-0075 for a free estimate.",
  },
  contact: {
    title: "New Orleans & Covington Offices | Billiot Pest Control LA",
    description:
      "Call Billiot Pest Control in New Orleans (504-365-0075) or Covington (985-893-5083). Toll-free 866-365-0075. Free estimate. Two corporate offices in Louisiana.",
  },
  faq: {
    title: "Pest Control FAQ in Louisiana | Billiot Family Since 1937",
    description:
      "Pest control FAQ in Louisiana: Sentricon, Termidor, ants versus termites, offices, and free estimates. Billiot family-owned since 1937. Call 866-365-0075.",
  },
  areas: {
    title: "Louisiana Pest Control Areas | Covington New Orleans Harvey",
    description:
      "Pest control areas in Louisiana: Covington, New Orleans, and Harvey. Northshore and Southshore desks. Family-owned since 1937. Call 866-365-0075 today.",
  },
} as const;

export const POSTS = [
  {
    slug: "formosan-termites-louisiana",
    title: "Formosan termites in Louisiana",
    excerpt: "Swarmers, Formosan pressure, and why baiting stays in the ground.",
    image: "/billiot/termite-wood.webp",
    alt: "Termite-damaged wood photographed for Billiot Pest Control",
    seoTitle: "Formosan Termites in Louisiana | Billiot Family Since 1937",
    seoDescription:
      "Formosan termites in Louisiana need Sentricon baiting, not a porch spray. Billiot family-owned since 1937. Call 866-365-0075 for a free termite estimate.",
  },
  {
    slug: "sentricon-vs-termidor-louisiana",
    title: "Sentricon vs Termidor in Louisiana",
    excerpt: "Bait that stays active versus a 10-year perimeter residual.",
    image: "/billiot/ant-vs-termite.webp",
    alt: "Ant versus termite comparison used by Billiot Pest Control",
    seoTitle: "Sentricon vs Termidor in Louisiana | Billiot Since 1937",
    seoDescription:
      "Sentricon vs Termidor in Louisiana: baiting versus liquid perimeter. Billiot uses both. Family-owned since 1937. Call 866-365-0075 for a free estimate.",
  },
] as const;

export const NAV = [
  { name: "About", href: "/about" },
  { name: "Plans", href: "/services" },
  { name: "Areas", href: "/areas" },
  { name: "Offices", href: "/contact" },
] as const;
