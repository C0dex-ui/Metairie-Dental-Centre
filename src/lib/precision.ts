export const BOOK = "#contact";
export const CALL = "tel:15042244232";
export const SITE = "https://precisiondoorneworleans.com";
export const FACEBOOK = "https://www.facebook.com/PrecisionDoorNewOrleans/";
export const PHONE = "(504) 224-4232";

export const NAP = {
  name: "Precision Garage Door Service of New Orleans",
  street: "5600 Jefferson Hwy, Bldg W-1, Suite 160",
  city: "New Orleans",
  region: "LA",
  postal: "70123",
  country: "US",
  phoneDisplay: "(504) 224-4232",
  phoneE164: "+1-504-224-4232",
  officeDisplay: "(504) 291-3030",
  lat: 29.9422,
  lng: -90.1833,
};

export const TITLE = "Garage Door Repair New Orleans | Precision Garage Doors";
export const DESCRIPTION =
  "Precision Garage Door Service offers garage door repair in New Orleans. Same-day springs, openers, and new doors. Call (504) 224-4232 for service.";

export const PHONES = [
  { area: "New Orleans", tel: "(504) 224-4232" },
  { area: "Office", tel: "(504) 291-3030" },
];

export type Member = {
  name: string;
  role: "Owner" | "Leadership" | "Warehouse Lead" | "Technician";
  file: string;
};

export const TEAM: Member[] = [
  { name: "Bobby Boes", role: "Owner", file: "bobby-boes.jpg" },
  { name: "Brad Cook", role: "Leadership", file: "brad-cook.jpg" },
  { name: "Caleb Fortenberry", role: "Leadership", file: "caleb-fortenberry.jpg" },
  { name: "Nicolas Studzinski", role: "Leadership", file: "nicolas-studzinski.jpg" },
  { name: "Ryan Hackett", role: "Leadership", file: "ryan-hackett.jpg" },
  { name: "Trien Hoang", role: "Warehouse Lead", file: "trien-hoang.jpg" },
  { name: "Andrew Prejean", role: "Technician", file: "andrew-prejean.jpg" },
  { name: "Brandon Guillot", role: "Technician", file: "brandon-guillot.jpg" },
  { name: "Charles Brooks", role: "Technician", file: "charles-brooks.jpg" },
  { name: "James Kaul", role: "Technician", file: "james-kaul.jpg" },
  { name: "Joshua Smith", role: "Technician", file: "joshua-smith.jpg" },
  { name: "Luis Martinez", role: "Technician", file: "luis-martinez.jpg" },
  { name: "Ricardo Zelaya", role: "Technician", file: "ricardo-zelaya.jpg" },
  { name: "Rod Schouest", role: "Technician", file: "rod-schouest.jpg" },
  { name: "Wilson Borskey", role: "Technician", file: "wilson-borskey.jpg" },
];

export const REPAIRS = [
  "Broken springs (torsion & extension)",
  "Cables, rollers, hinges",
  "Bent, misaligned, or rusted track",
  "Section / panel replacement",
  "Hardware overhauls",
  "Noisy door tune-ups",
  "Sensor / safety-eye repairs",
  "Opener repair",
  "Weatherseal",
  "Balance / sagging doors",
  "Emergency same-day service",
];

export const AREAS = [
  "Uptown",
  "Garden District",
  "Lakeview",
  "Mid-City",
  "Gentilly",
  "New Orleans East",
  "Algiers",
  "Lakewood",
  "Audubon",
  "Carrollton",
  "Broadmoor",
  "Bywater",
];

export const NORTHSHORE = [
  "Mandeville",
  "Covington",
  "Madisonville",
  "Slidell",
  "Hammond",
  "Abita Springs",
  "Lacombe",
  "Metairie",
  "Kenner",
  "Harahan",
];

export const HIGHLIGHTS = [
  {
    title: "We Show Up Fast.",
    kicker: "60-Minute Arrival Guarantee.",
    copy: "Family-owned. Local techs. Same-day service.",
    img: "/precision/hl-fast.jpg",
    alt: "White raised-panel garage door on a New Orleans home ready for same-day repair",
  },
  {
    title: "We Fix It Right.",
    kicker: "Factory-Trained Technicians.",
    copy: "15 techs. 14 vans. Real training, not a flyer.",
    img: "/precision/hl-right.jpg",
    alt: "Factory-trained technician repairing a garage door in New Orleans",
  },
  {
    title: "We Stay After The Sale.",
    kicker: "Lifetime Warranty On Springs.",
    copy: "Labor + parts. Transferable. No asterisks.",
    img: "/precision/hl-warranty.jpg",
    alt: "Torsion springs on a New Orleans garage door covered by a lifetime warranty",
  },
  {
    title: "We Don't Disappear.",
    kicker: "24/7 Emergency Service.",
    copy: "Nights. Weekends. Holidays. We pick up.",
    img: "/precision/hl-emergency.jpg",
    alt: "New Orleans home at dusk — 24/7 garage door emergency service",
  },
];

export const STATS = [
  { n: "15", l: "Certified Technicians" },
  { n: "14", l: "Service Vans" },
  { n: "60", l: "Min Arrival Guarantee" },
  { n: "24/7", l: "Emergency Line" },
  { n: "5.0", l: "Google Rating" },
  { n: "15+", l: "Years On The North Shore" },
];

export const SERVICES = [
  {
    title: "Broken Spring Repair",
    img: "/precision/install.jpg",
    alt: "Technician completing garage door spring repair in New Orleans",
    blurb:
      "A broken torsion spring is the garage door repair we run most in New Orleans. The door will not lift, or it slams shut. We replace torsion and extension springs from a stocked truck, then rebalance the door before we leave.",
  },
  {
    title: "New Garage Doors",
    img: "/precision/house.jpg",
    alt: "New insulated garage door installation in New Orleans",
    blurb:
      "Replace a damaged door with insulated steel or a carriage-house style. Measure, haul, and install in one visit.",
  },
  {
    title: "Opener Installation",
    img: "/precision/opener.jpg",
    alt: "LiftMaster garage door opener installed in a New Orleans garage",
    blurb:
      "LiftMaster belt-drive quiet units. We repair sensors and remotes, with $75 off any new opener.",
  },
  {
    title: "Off-Track & Cable Repair",
    img: "/precision/door.jpg",
    alt: "Off-track garage door cable and roller repair in New Orleans",
    blurb:
      "Stop using a jumped door. We realign the track, replace cables and rollers, and test the safety reverse.",
  },
  {
    title: "Commercial Rolling Steel",
    img: "/precision/hero.jpg",
    alt: "Commercial rolling steel garage door service in New Orleans",
    blurb:
      "Rolling steel and commercial sectionals for warehouses, storefronts, and loading docks in New Orleans.",
  },
  {
    title: "Emergency Same-Day Service",
    img: "/precision/emergency-garage-door-repair.jpg",
    alt: "Technician on a same-day garage door repair call in New Orleans",
    blurb:
      "Live operators 24/7. Four-hour arrival during business hours, or the service fee is waived.",
  },
];

export const COUPONS = [
  { amount: "Free", item: "Service call" },
  { amount: "$75 off", item: "Any new opener" },
  { amount: "Ask", item: "Veteran / senior rate" },
];

export const REVIEWS = [
  {
    q: "I know who to call to get Service! They were so prompt and so courteous. I called and they were right here!",
    name: "Eva",
    town: "New Orleans",
    initials: "E",
  },
  {
    q: "One call to Precision, and a phenomenal technician named Andrew came to our home to solve the noisy doors.",
    name: "Homeowner",
    town: "Public review · Andrew Prejean",
    initials: "A",
  },
  {
    q: "They came fast, same day, had all the parts on the truck, and did not try to talk us into a cheap metal door.",
    name: "Homeowner",
    town: "Wood door repair · New Orleans",
    initials: "N",
  },
];

export const FAQS = [
  {
    q: "Do you offer same-day garage door repair in New Orleans?",
    a: "Yes. Precision Garage Door Service advertises same-day repair in New Orleans. During business hours they claim a four-hour arrival window or they waive the service fee. Trucks stock springs, cables, rollers, and common opener parts so most jobs finish in one visit.",
  },
  {
    q: "What are your hours?",
    a: "The About page lists service hours Monday–Sunday 8:00 AM–8:00 PM, phones 24/7, and showroom hours Monday–Friday 8:00 AM–4:00 PM with weekends by appointment. The Contact page lists Monday–Saturday 8:00 AM–6:00 PM and Sunday closed. We publish both so you can confirm when you call.",
  },
  {
    q: "Is the service call free?",
    a: "Yes. Precision lists a free service call and no extra charge for evenings and weekends. The free call is not combined with other offers. Coupons must be presented at the estimate.",
  },
  {
    q: "Do you repair torsion and extension springs?",
    a: "Yes. Broken overhead springs — torsion and extension — are a core garage door repair. We also replace cables, rollers, hinges, bent track, and damaged sections, then run a 25-point safety inspection.",
  },
  {
    q: "Do you install LiftMaster garage door openers?",
    a: "Yes. LiftMaster is the opener line called out on the New Orleans site, including quiet belt-drive systems. We repair sensors and remotes and currently publish $75 off any new opener.",
  },
  {
    q: "What parts of New Orleans do you serve?",
    a: "This page is for Precision Garage Door Service of New Orleans. Technicians run from the Elmwood shop at 5600 Jefferson Hwy to Uptown, Lakeview, Mid-City, Gentilly, New Orleans East, Algiers, and the rest of Orleans Parish. North Shore towns — Mandeville, Covington, Madisonville, Slidell — are on the same dispatch. Call (504) 224-4232.",
  },
  {
    q: "Are you licensed in Louisiana?",
    a: "Yes. Louisiana contractor license 558210, license E30907, and firm F02882 are printed on the official site. BBB lists an A+ rating dating to October 2017 for this location.",
  },
  {
    q: "Do you offer veteran, military, or senior discounts?",
    a: "Yes. Veteran, military, and senior discounts are listed on the About page. Ask when you book so the estimator can apply the rate that fits. Those discounts are separate from the published door and opener coupons.",
  },
  {
    q: "What if a technician misses the four-hour window?",
    a: "Precision states that if they cannot arrive within four hours during business hours, they waive the service fee. Call (504) 224-4232 so the live operator can timestamp the request.",
  },
  {
    q: "Do you work on commercial rolling steel doors?",
    a: "Yes. Commercial rolling steel and commercial sectional service is listed for New Orleans. Warehouse, storefront, and loading-dock operators in the city are part of that work.",
  },
  {
    q: "Where is the Elmwood showroom?",
    a: "5600 Jefferson Hwy, Building W-1, Suite 160, New Orleans, LA 70123. Showroom hours on About: Monday–Friday 8:00 AM–4:00 PM; Saturday and Sunday by appointment. Office line (504) 291-3030.",
  },
  {
    q: "How do I book garage door repair?",
    a: "Call the New Orleans line at (504) 224-4232 or use Book Now on this page. A live operator is advertised 24/7.",
  },
  {
    q: "Do you cover the North Shore?",
    a: "Yes. Precision Garage Door Service of New Orleans runs the North Shore from the same Elmwood shop — Mandeville, Covington, Madisonville, Slidell, and Hammond. The 60-minute arrival window is the advertised standard during business hours.",
  },
  {
    q: "Is the spring warranty transferable?",
    a: "Yes. Lifetime warranty on springs covers labor and parts and transfers with the house. Ask the technician to note it on the invoice so the next owner can call the same shop.",
  },
];
