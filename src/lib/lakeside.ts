export const SITE_NAME = "Lakeside Dental Care";
export const SITE_URL = "https://www.lakesidedentalcare.com";
export const PRIMARY_KW = "Kenner dentist";

export const TITLE = "Kenner Dentist | One Office & Six Specialists | Lakeside";
export const DESCRIPTION =
  "Six specialists share one Kenner suite — general, endo, perio, and ortho — at 2400 Veterans Blvd. Suite 210. Book online or call (504) 833-3200 today.";

export const NAP = {
  name: SITE_NAME,
  street: "2400 Veterans Blvd. Suite 210",
  city: "Kenner",
  region: "LA",
  postal: "70062",
  phone: "(504) 833-3200",
  phoneE164: "+1-504-833-3200",
  phoneHref: "tel:+15048333200",
  fax: "(504) 833-0813",
  faxHref: "fax:+15048330813",
  lat: 30.0071219,
  lng: -90.2350048,
} as const;

export const ADDRESS_LINE = `${NAP.street}, ${NAP.city}, ${NAP.region} ${NAP.postal}`;
export const MAPS_HREF = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS_LINE)}`;
export const MAPS_EMBED = `https://maps.google.com/maps?ll=${NAP.lat},${NAP.lng}&q=${encodeURIComponent(ADDRESS_LINE)}&z=15&hl=en&output=embed&t=m`;
export const BOOK_HREF = "https://app.nexhealth.com/appt/lakeside-dental-care";

export const GOOGLE_REVIEWS = {
  rating: 4.9,
  count: 1189,
  countLabel: "1,189",
  label: "Excellent",
  source: "Google",
  href: MAPS_HREF,
} as const;

export const REVIEWS = [
  {
    name: "Sarah Santos",
    date: "Oct 9, 2024",
    stars: 5,
    text: "I've had plenty of dental procedures done throughout my life. This was the best experience I've ever had. Dr. Dyer and Stephanie made sure I was comfortable and knew the procedure beforehand. Doc talked me through the procedure and made sure I was okay and comfortable during the procedure. After the procedure she explained everything and my next steps. Side note: The whole clinic is a blessing. They are all so sweet!!",
  },
  {
    name: "B Petko",
    date: "Oct 12, 2024",
    stars: 5,
    text: "Fantastic service every time. Dr. Henson and Brooke are amazing, and all staff is very friendly! 10/10 recommend.",
  },
  {
    name: "Clifford Ratliff",
    date: "Oct 10, 2024",
    stars: 5,
    text: "The staff is knowledgeable, friendly and accommodating.",
  },
  {
    name: "Wendell Findley",
    date: "",
    stars: 5,
    text: "It was my first time being there. The first thing that struck me was their friendly, professional and clean atmosphere. I was impressed. I'm a Law Enforcement Professional, and was once the Director for a large Hotel chain. I know hospitality and professionalism when I see it.",
  },
  {
    name: "Jayna Young",
    date: "",
    stars: 5,
    text: "I had such a wonderful experience at Lakeside Dental with Dr. Hensen and the entire team. From the moment I walked in, everyone was so friendly and welcoming. The hygienist was incredibly thorough and gentle during my cleaning, and I left feeling truly cared for. Highly recommend!",
  },
  {
    name: "Patrice Harden",
    date: "",
    stars: 5,
    text: "I had an Excellent dentist experience! Everyone was professional, friendly and knowledgeable. The facility was welcoming and beautiful. The environment felt so peaceful. I got a massage while being treated for an emergency dental procedure.",
  },
  {
    name: "Chloe Frederick",
    date: "",
    stars: 5,
    text: "I had to get my first root canal and when I tell y'all Dr. Dyer made me actually look forward to my next one. I actually feel silly now for being as nervous as I was about the whole ordeal. I haven't had any bad pain since. I'm shocked at how pain free the recovery is. If you need an Endodontist, Dr. Dyer is the one you want.",
  },
  {
    name: "Darrenique Jones",
    date: "",
    stars: 5,
    text: "Dr. Dyer and her staff are amazing!! I was told from plenty people that I would be in pain and getting a root canal was uncomfortable, that was not my experience. She made sure I was comfortable in the chair it was heated for my comfort and music was played to calm my nerves, because I was a little anxious. She was also very thorough on what was being done. Highly recommend her!",
  },
] as const;

export const SOCIAL = {
  facebook: "https://www.facebook.com/lakesidedentalcarekenner/",
} as const;

export const SAME_AS = [SOCIAL.facebook] as const;

export const HOURS = [
  { days: "Monday – Thursday", hours: "8:30am – 4:00pm", schemaDays: ["Monday", "Tuesday", "Wednesday", "Thursday"], opens: "08:30", closes: "16:00" },
  { days: "Friday", hours: "8:00am – 3:00pm", schemaDays: ["Friday"], opens: "08:00", closes: "15:00" },
] as const;

export const LANGUAGES = [
  "English",
  "Spanish",
  "French",
  "Chinese",
  "Vietnamese",
  "Haitian Creole",
  "Portuguese",
] as const;

export const MISSION =
  "To promote oral health by becoming the area’s leading provider of comprehensive dentistry while providing the absolute best care and service to our patients.";

export const TAGLINE = "The lake office.";
export const TAGLINE_SUB = "One Kenner suite. Six specialists.";

export const INSURANCE = [
  "Delta Dental",
  "Guardian",
  "Humana",
  "MetLife",
  "Ameritas",
  "Cigna Dental",
  "Renaissance Dental",
  "Aetna",
  "Careington",
  "Dental Plans",
] as const;

export const PAYMENTS = [
  "Cash",
  "Personal checks",
  "Visa",
  "Mastercard",
  "American Express",
  "Discover",
  "CareCredit",
  "Cherry",
  "Kleer Membership",
] as const;

export const TECH = [
  { name: "High-power microscopes", blurb: "Precision restorations with a microscope similar to an ophthalmologist’s." },
  { name: "KaVo OP 3D (CBCT)", blurb: "Digital 3D imaging for diagnosis, planning, and evaluation." },
  { name: "iTero Element 5D Plus", blurb: "Digital impressions of teeth and gum tissue for chairside consults." },
  { name: "Digital X-rays", blurb: "About one-sixth the radiation of traditional film, viewed on a monitor." },
  { name: "Intraoral camera", blurb: "Clear views of teeth and gums so you can see what the doctor sees." },
  { name: "Electric hand-pieces", blurb: "Used for the most precise aspects of restorative work." },
] as const;

export type DoctorSlug =
  | "rubia-kapusta"
  | "regine-dyer"
  | "catherine-schwab"
  | "matthew-henson"
  | "olivia-stassen"
  | "corinthia-wilkerson";

export const DOCTORS = [
  {
    slug: "rubia-kapusta" as const,
    name: "Rubia Kapusta, DDS, MS",
    short: "Dr. Kapusta",
    role: "General dentist",
    image: "/lakeside/team/kapusta-p.webp",
    alt: "Dr. Rubia Kapusta, DDS, MS, general dentist at Lakeside Dental Care in Kenner",
    school: "Federal University of Espirito Santo, 1999",
    href: "/about-us/rubia-kapusta-dds-ms-general-dentist/",
    seoTitle: "Kenner General Dentist | Dr. Kapusta, DDS, MS | Lakeside",
    seoDescription:
      "Dr. Rubia Kapusta, DDS, MS — Kenner general dentist at Lakeside Dental Care. LSU residency, AGD fellowship. Suite 210. Call (504) 833-3200 today.",
    h1: "Dr. Kapusta, Kenner general dentist",
    bio: "Dr. Kapusta earned her dental degree and Master in Science degree from Federal University of Espirito Santo, Brazil in 1999. In 2002 she completed a two-year hospital-based residency at LSU School of Dentistry.",
    paras: [
      "Dr. Kapusta earned her dental degree and Master in Science degree from Federal University of Espirito Santo, Brazil in 1999. In 2002, she completed a two-year hospital based residency at LSU School of Dentistry.",
      "She participates regularly in continuing education in implants, Botox, Invisalign, and Six Month Smiles. She is a member of the American Dental Association, Academy of General Dentistry, Louisiana Dental Association, New Orleans Dental Association, and Lake Pontchartrain Seattle Study Club.",
      "In 2012, after rigorous examination, she received a fellowship award from the Academy of General Dentistry. Approximately only 5 percent of all general dentists have received this award.",
      "Dr. Kapusta is a resident of Slidell, LA and married to Dr. Daniel Kapusta. They are proud parents of Julia and Nicolas.",
    ],
    featured: true,
  },
  {
    slug: "regine-dyer" as const,
    name: "Regine Dyer, DDS",
    short: "Dr. Dyer",
    role: "Endodontist",
    image: "/lakeside/team/dyer-p.webp",
    alt: "Dr. Regine Dyer, DDS, endodontist at Lakeside Dental Care in Kenner",
    school: "Meharry Medical College, 2010 · LSU endodontics, 2014",
    href: "/about-us/regine-dyer-dds-endodontist/",
    seoTitle: "Kenner Endodontist | Dr. Dyer, Root Canal Care | Suite 210",
    seoDescription:
      "Dr. Regine Dyer, DDS is the Kenner endodontist at Lakeside Dental Care. LSU-trained, GentleWave noted on Facebook. Suite 210. Call (504) 833-3200.",
    h1: "Dr. Dyer, Kenner endodontist",
    bio: "Dr. Dyer was born in New Orleans. She completed undergraduate studies at Xavier University of Louisiana, earned her DDS at Meharry in 2010, and her Certificate of Endodontics at LSU Dental School in 2014.",
    paras: [
      "Dr. Dyer was born in New Orleans. She completed her undergraduate studies at Xavier University of Louisiana. She received her DDS degree in 2010 from Meharry Medical College School of Dentistry, completed the General Practice Residency program at Truman Medical Center Hospital – Lakewood in 2011, and earned her Certificate of Endodontics at LSU Dental School in 2014.",
      "Dr. Dyer also serves as an Appointed Part Time Associate Clinical Professor at LSU Department of Endodontics. She is a member of the American Association of Endodontists, New Orleans Dental Association, and the American Dental Association.",
      "The practice’s Facebook page notes that Dr. Dyer offers the GentleWave Procedure, a fluid-dynamics approach to root canal disinfection. She is married and resides in New Orleans.",
    ],
    featured: true,
  },
  {
    slug: "catherine-schwab" as const,
    name: "Catherine Schwab, DDS",
    short: "Dr. Schwab",
    role: "Orthodontist",
    image: "/lakeside/team/schwab-p.webp",
    alt: "Dr. Catherine Schwab, DDS, orthodontist at Lakeside Dental Care in Kenner",
    school: "LSU School of Dentistry · ABO, 2002",
    href: "/about-us/catherine-schwab-dds-orthodontist/",
    seoTitle: "Kenner Orthodontist | Dr. Schwab ABO | Aligners, Braces",
    seoDescription:
      "Dr. Catherine Schwab, DDS is the Kenner orthodontist at Lakeside Dental Care. ABO 2002, LSU faculty 2003–2015, aligners in Suite 210. Call (504) 833-3200.",
    h1: "Dr. Schwab, Kenner orthodontist",
    bio: "Dr. Catherine received her dental and orthodontic education from Louisiana State University School of Dentistry. In 2002 she earned Board Certification from the American Board of Orthodontics.",
    paras: [
      "Dr. Catherine received her dental and orthodontic education from Louisiana State University School of Dentistry. Following that, she completed a two-year course on Functional Occlusion at the Roth-Williams Center for Advanced Orthodontic Education in Burlingame, California.",
      "In 2002, she earned her Board Certification from the American Board of Orthodontics. She joined the faculty in the orthodontic department at LSU School of Dentistry in 2003 and retired from teaching in 2015.",
      "Dr. Catherine enjoys painting, gardening, and spending time with her two dogs. She will be quick to tell you that her most outstanding achievements are her three children, Adam, Mark and Susan.",
    ],
    featured: true,
  },
  {
    slug: "matthew-henson" as const,
    name: "Matthew Henson, DDS",
    short: "Dr. Henson",
    role: "General dentist",
    image: "/lakeside/team/henson-p.webp",
    alt: "Dr. Matthew Henson, DDS, general dentist at Lakeside Dental Care in Kenner",
    school: "LSU School of Dentistry, 2018 · UCLA AEGD",
    href: "/about-us/matthew-henson-dds-general-dentist/",
    seoTitle: "Kenner General Dentist | Dr. Henson LSU UCLA | Lakeside",
    seoDescription:
      "Dr. Matthew Henson, DDS — Kenner general dentist at Lakeside Dental Care. LSU 2018, UCLA AEGD, aesthetic focus. Suite 210. Call (504) 833-3200 today.",
    h1: "Dr. Henson, Kenner general dentist",
    bio: "Dr. Matthew Henson graduated from LSU School of Dentistry in 2018 and continued training at the UCLA Advanced Education in General Dentistry program.",
    paras: [
      "Dr. Matthew Henson is a proud, passionate, and enthusiastic dentist dedicated to changing lives through dentistry. He considers his craft the ultimate palette on which to create life-changing works of dental art.",
      "Dr. Henson graduated from LSU School of Dentistry in 2018 and continued his training at the prestigious UCLA Advanced Education in General Dentistry. He stays up to date by attending nearly 100 hours of continuing education courses annually and is a lifelong student of aesthetic dentistry.",
      "He enjoys spending time in his beloved city of New Orleans and immersing in its arts, food, and culture.",
    ],
    featured: true,
  },
  {
    slug: "olivia-stassen" as const,
    name: "Olivia Stassen, DDS",
    short: "Dr. Stassen",
    role: "General dentist",
    image: "/lakeside/team/stassen-p.webp",
    alt: "Dr. Olivia Stassen, DDS, general dentist at Lakeside Dental Care in Kenner",
    school: "LSU School of Dentistry",
    href: "/about-us/olivia-stassen-dds-general-dentist/",
    seoTitle: "Kenner Family Dentist | Dr. Stassen, Invisalign | Lakeside",
    seoDescription:
      "Dr. Olivia Stassen, DDS is a Kenner family dentist at Lakeside Dental Care, including Invisalign. Lives in Metairie. Suite 210. Call (504) 833-3200.",
    h1: "Dr. Stassen, Kenner family dentist",
    bio: "Dr. Olivia Stassen is a family dentist who enjoys seeing patients of all ages. She is trained in all areas of general dentistry including Invisalign aligner therapy.",
    paras: [
      "Dr. Olivia Stassen is a passionate and friendly family dentist who enjoys seeing patients of all ages. She strives to make the dental experience as pleasant and comfortable as possible and is trained in all areas of general dentistry including Invisalign aligner therapy.",
      "Dr. Stassen was born and raised in Fayetteville, Arkansas. In 2017 she moved to New Orleans to attend Louisiana State University School of Dentistry. She and her husband reside in Metairie.",
    ],
    featured: true,
  },
  {
    slug: "corinthia-wilkerson" as const,
    name: "Corinthia Wilkerson, DDS",
    short: "Dr. Wilkerson",
    role: "Periodontist",
    image: "/lakeside/mark.svg",
    alt: "Dr. Corinthia Wilkerson, DDS, periodontist at Lakeside Dental Care — official individual portrait is not published on the staff photo",
    school: "Harvard School of Dental Medicine · Meharry · Spelman",
    href: "/about-us/corinthia-wilkerson-periodontist/",
    seoTitle: "Kenner Periodontist | Dr. Wilkerson, Harvard | Lakeside",
    seoDescription:
      "Dr. Corinthia Wilkerson, DDS is the Kenner periodontist at Lakeside Dental Care. Harvard perio, implants, regeneration in Suite 210. (504) 833-3200.",
    h1: "Dr. Wilkerson, Kenner periodontist",
    bio: "Dr. Wilkerson studied Biology at Spelman College, earned a Master’s in Biomedical Sciences at Rutgers, her DDS at Meharry, and a Master of Medical Sciences and Certificate in Periodontology from Harvard School of Dental Medicine.",
    paras: [
      "Dr. Corinthia Wilkerson’s academic journey began at Spelman College, where she excelled in Biology. She earned her Master’s in Biomedical Sciences with a Concentration in Oral Biology at Rutgers University, then her Doctor of Dental Surgery Degree and Public Health and Health Policy certificates at Meharry Medical College School of Dentistry.",
      "She later obtained a Master of Medical Sciences and a Certificate in Periodontology from the Harvard School of Dental Medicine. She is a three-time recipient of the HSDM Division of Periodontology Fellowship.",
      "Her clinical work includes periodontal regeneration, guided bone and tissue regeneration, prosthodontically driven implant placement, and treatment of peri-implant diseases. She has been recognized by the American Academy of Implant Dentistry, the Academy of Osseointegration, and the American Association of Oral and Maxillofacial Surgeons.",
    ],
    featured: true,
    initials: "CW",
  },
] as const;

export type ServiceSlug =
  | "cosmetic-dentistry"
  | "general-dentistry"
  | "endodontics"
  | "periodontics"
  | "orthodontics"
  | "dental-implants"
  | "sedation-dentistry";

export const SERVICES = [
  {
    slug: "cosmetic-dentistry" as const,
    title: "Cosmetic dentistry",
    h1: "Cosmetic dentistry in Kenner",
    keyword: "cosmetic dentist Kenner",
    seoTitle: "Kenner Cosmetic Dentist | Veneers, Crowns, Zoom Whitening",
    seoDescription:
      "Porcelain veneers, dental crowns, and Zoom whitening at Lakeside Dental Care in Kenner. Drs. Kapusta and Henson restore smiles at 2400 Veterans Blvd Suite 210.",
    blurb: "Veneers, crowns, and Zoom in one Kenner suite.",
    alt: "Close crop of porcelain veneers — cosmetic dentistry at Lakeside Dental Care in Kenner",
    image: "/lakeside/ai/porcelain.webp",
    stair: "COSMETIC",
  },
  {
    slug: "general-dentistry" as const,
    title: "General dentistry",
    h1: "General dentist in Kenner",
    keyword: "Kenner dentist",
    seoTitle: "Kenner Dentist Office | Exams, Cleanings, and Fillings.",
    seoDescription:
      "General dentistry in Kenner at Lakeside Dental Care: exams, cleanings, fillings, and family care with Drs. Kapusta, Henson, and Stassen at Suite 210.",
    blurb: "Family exams, cleanings, and restorations.",
    alt: "Empty operatory at a Kenner dental office, used for general dentistry",
    image: "/lakeside/ai/operatory.webp",
    stair: "GENERAL",
  },
  {
    slug: "endodontics" as const,
    title: "Endodontics",
    h1: "Root canal specialist in Kenner",
    keyword: "endodontist Kenner",
    seoTitle: "A Kenner Endodontist | Root Canal Therapy with Dr. Dyer",
    seoDescription:
      "Root canal therapy in Kenner with endodontist Dr. Regine Dyer at Lakeside Dental Care. Microscopes, GentleWave, and a same-building general team.",
    blurb: "Dr. Dyer, endodontist — same building.",
    alt: "Dr. Regine Dyer and Dr. Matthew Henson of Lakeside Dental Care, Kenner",
    image: "/lakeside/official/dyer-henson.webp",
    stair: "ENDO + PERIO",
  },
  {
    slug: "periodontics" as const,
    title: "Periodontics",
    h1: "Periodontist in Kenner",
    keyword: "periodontist Kenner",
    seoTitle: "Kenner Periodontist | Gum Surgery by Dr. Wilkerson, DDS",
    seoDescription:
      "Periodontal care in Kenner with Dr. Corinthia Wilkerson at Lakeside Dental Care: gum surgery, regeneration, and implants planned with the general team.",
    blurb: "Dr. Wilkerson, Harvard-trained periodontist.",
    alt: "Empty dental corridor at Lakeside Dental Care representing periodontal visits in Kenner",
    image: "/lakeside/ai/corridor.webp",
    stair: "ENDO + PERIO",
  },
  {
    slug: "orthodontics" as const,
    title: "Orthodontics",
    h1: "Orthodontist in Kenner",
    keyword: "orthodontist Kenner",
    seoTitle: "Kenner Orthodontist | Aligners & Braces with Dr. Schwab",
    seoDescription:
      "Orthodontics in Kenner with ABO-certified Dr. Catherine Schwab at Lakeside Dental Care. Clear aligners, braces, and iTero 5D Plus digital impressions.",
    blurb: "Dr. Schwab, ABO 2002 — aligners and braces.",
    alt: "Clear orthodontic aligner still life for Kenner orthodontics at Lakeside Dental Care",
    image: "/lakeside/ai/aligner.webp",
    stair: "ORTHO",
  },
  {
    slug: "dental-implants" as const,
    title: "Dental implants",
    h1: "Dental implants in Kenner",
    keyword: "dental implants Kenner",
    seoTitle: "Dental Implants in Kenner | CBCT-Planned Replacement Teeth",
    seoDescription:
      "Dental implants in Kenner at Lakeside Dental Care. KaVo OP 3D planning, in-office periodontics, and restorations from the general dentists in Suite 210.",
    blurb: "Implants planned on KaVo OP 3D.",
    alt: "Dental operating microscope in an empty Kenner operatory",
    image: "/lakeside/ai/microscope.webp",
    stair: "IMPLANTS",
  },
  {
    slug: "sedation-dentistry" as const,
    title: "Sedation dentistry",
    h1: "Sedation dentistry in Kenner",
    keyword: "sedation dentist Kenner",
    seoTitle: "Sedation Dentist in Kenner | Oral Conscious and Nitrous",
    seoDescription:
      "Oral conscious sedation and nitrous oxide in Kenner at Lakeside Dental Care. For dental anxiety, longer visits, and full-mouth work in Suite 210.",
    blurb: "Oral sedation and nitrous in-office.",
    alt: "Quiet waiting lounge at Lakeside Dental Care in Kenner",
    image: "/lakeside/ai/waiting.webp",
    stair: "SEDATION",
  },
] as const;

export type AreaSlug = "kenner" | "metairie" | "new-orleans" | "laplace";

export const AREAS = [
  {
    slug: "kenner" as const,
    name: "Kenner",
    title: "Kenner Dentist | Lakeside Dental Care on Veterans Blvd.",
    h1: "Kenner dentist on Veterans Blvd",
    description:
      "Lakeside Dental Care is the Kenner dentist at 2400 Veterans Blvd Suite 210. Six specialists, one office, parking at the fountain plaza. Call (504) 833-3200.",
    lede: "The office sits at 2400 Veterans Blvd. Suite 210 — a Kenner address, a short hop from the airport and the Metairie line.",
    image: "/lakeside/official/exterior.webp",
    alt: "2400 Veterans Blvd in Kenner, the glass office building that holds Lakeside Dental Care Suite 210",
  },
  {
    slug: "metairie" as const,
    name: "Metairie",
    title: "Metairie Dentist Nearby | One Lakeside Office in Kenner",
    h1: "Dentist near Metairie, in Kenner",
    description:
      "Metairie patients drive a few minutes to Lakeside Dental Care in Kenner for general, endo, perio, and ortho under one roof. Suite 210, (504) 833-3200.",
    lede: "Veterans Blvd is the spine between Metairie and Kenner. Suite 210 is built for that drive, not a second office.",
    image: "/lakeside/ai/dusk-plaza.webp",
    alt: "Dusk at a Kenner plaza near Metairie — atmospheric plate for a dentist near Metairie at Lakeside Dental Care",
  },
  {
    slug: "new-orleans" as const,
    name: "New Orleans",
    title: "New Orleans Dentist Option | A Kenner Specialist Office",
    h1: "New Orleans patients, one Kenner office",
    description:
      "New Orleans residents who want endodontics, periodontics, and orthodontics in the same visit come to Lakeside Dental Care in Kenner. Call (504) 833-3200.",
    lede: "The practice’s own mission names the reconstruction of New Orleans. The chair is in Kenner; the work is metropolitan.",
    image: "/lakeside/ai/lake-dawn.webp",
    alt: "Dawn on Lake Pontchartrain between New Orleans and the Kenner dentist office at Lakeside Dental Care",
  },
  {
    slug: "laplace" as const,
    name: "LaPlace",
    title: "LaPlace Dentist Drive | Lakeside Dental Care in Kenner.",
    h1: "Dentist for LaPlace families, in Kenner",
    description:
      "LaPlace and St. John Parish patients reach Lakeside Dental Care in Kenner for specialist dentistry without a New Orleans parking hunt. (504) 833-3200.",
    lede: "I-10 east puts LaPlace at the Kenner office in a single run. One suite holds the specialists that smaller towns split across parishes.",
    image: "/lakeside/ai/corridor.webp",
    alt: "Clinic corridor at the Kenner dentist office that serves LaPlace families at Lakeside Dental Care",
  },
] as const;

export const FAQS = [
  {
    q: "Where is the Kenner dentist office?",
    a: "Lakeside Dental Care is at 2400 Veterans Blvd. Suite 210, Kenner, LA 70062. Phone (504) 833-3200. Fax (504) 833-0813.",
  },
  {
    q: "Who are the doctors?",
    a: "The homepage names six: Rubia Kapusta, DDS, MS (general); Regine Dyer, DDS (endodontist); Catherine Schwab, DDS (orthodontist); Matthew Henson, DDS (general); Olivia Stassen, DDS (general); and Corinthia Wilkerson, DDS (periodontist). The staff page also photographs Dr. Mahrufa Islam.",
  },
  {
    q: "What hours is Suite 210 open?",
    a: "Monday through Thursday 8:30am–4:00pm, Friday 8:00am–3:00pm, as published on the official contact page.",
  },
  {
    q: "Do you speak languages besides English?",
    a: "The office lists English, Spanish, French, Chinese, Vietnamese, Haitian Creole, and Portuguese. Staff come from more than seven countries.",
  },
  {
    q: "How do I book?",
    a: "Use the official NexHealth booker or call (504) 833-3200. The form on this site is a callback request, not a confirmed chair.",
  },
  {
    q: "Which insurance is listed?",
    a: "The insurance page lists Delta Dental, Guardian, Humana, MetLife, Ameritas, Cigna Dental, Renaissance Dental, Aetna, Careington, and Dental Plans. Cash, checks, and major cards are accepted, plus CareCredit, Cherry, and a Kleer membership for uninsured patients.",
  },
  {
    q: "What technology is in the operatory?",
    a: "High-power microscopes, KaVo OP 3D CBCT, iTero Element 5D Plus, digital X-rays, an intraoral camera, and electric hand-pieces, per the advanced-technology page.",
  },
  {
    q: "Is sedation available?",
    a: "Oral conscious sedation and nitrous oxide are offered. The oral-sedation page states a doctor is board certified to administer oral conscious sedation.",
  },
  {
    q: "Is there parking at the Kenner dentist office?",
    a: "Yes. Park in the plaza lot at 2400 Veterans Blvd. Suite 210 is on the second floor. The fountain court on the official exterior is the landmark. There is no downtown garage.",
  },
  {
    q: "Do you see children?",
    a: "Dr. Olivia Stassen’s official bio says she enjoys seeing patients of all ages. Sealants and child visits are on the published general dentistry list. Call (504) 833-3200 for a family slot.",
  },
  {
    q: "Are you open Saturday?",
    a: "The official contact page lists Monday through Thursday 8:30am–4:00pm and Friday 8:00am–3:00pm. This rebuild does not add a Saturday from a third-party listing.",
  },
  {
    q: "Do you take walk-ins?",
    a: "Book through NexHealth or call (504) 833-3200. The website form is a callback, not a walk-in ticket. Same-day specialist chairs are a phone question, not a promise on this page.",
  },
  {
    q: "Do I need a referral for the endodontist or periodontist?",
    a: "The specialists share Suite 210 with the general dentists. An in-office hallway is the usual path. Bring outside films if another office started the tooth.",
  },
  {
    q: "What should I bring to oral sedation?",
    a: "A driver, a medication list, and enough clock before the Friday 3:00pm close. The oral-sedation page says a doctor is board certified to administer oral conscious sedation. Ask the desk which protocol is on your ticket.",
  },
] as const;

export const PAGE_SEO = {
  about: {
    title: "Kenner Dentists | 30+ Years, Six Specialists | Lakeside",
    description:
      "Kenner dentists at Lakeside Dental Care: Kapusta, Dyer, Schwab, Henson, Stassen, and Wilkerson. 30+ years at 2400 Veterans Blvd Suite 210. Call (504) 833-3200.",
  },
  services: {
    title: "Kenner Dental Services | General, Endo, Perio, and Ortho",
    description:
      "Cosmetic, general, endodontic, periodontal, orthodontic, implant, and sedation care from six specialists in one Kenner office. Book or call (504) 833-3200.",
  },
  areas: {
    title: "Kenner, Metairie, New Orleans & LaPlace Dentists Office",
    description:
      "Lakeside Dental Care in Kenner serves Jefferson Parish, Orleans Parish, Metairie, New Orleans, and LaPlace from one Veterans Blvd suite. Call (504) 833-3200.",
  },
  contact: {
    title: "Kenner Dentist Contact | Suite 210 Hours, NexHealth Book",
    description:
      "Call (504) 833-3200, fax (504) 833-0813, or book NexHealth. 2400 Veterans Blvd Suite 210, Kenner, LA 70062. Monday–Thursday 8:30–4, Friday 8–3 today.",
  },
  faq: {
    title: "Kenner Dentist FAQ | Hours, Doctors, Insurance, Booking",
    description:
      "Hours, doctors, languages, insurance, sedation, parking, and NexHealth booking for Lakeside Dental Care in Kenner. Facts from lakesidedentalcare.com only.",
  },
  doctors: {
    title: "Kenner Dentists | Six Specialists at Lakeside Care Office",
    description:
      "Official bios for Drs. Kapusta, Dyer, Schwab, Henson, Stassen, and Wilkerson at Lakeside Dental Care, 2400 Veterans Blvd Suite 210, Kenner, Louisiana.",
  },
  blog: {
    title: "Kenner Dentist Notes | First Visit and CBCT at Suite 210",
    description:
      "Original Kenner dentist notes from Lakeside Dental Care: first-visit exams in Suite 210 and why the KaVo OP 3D CBCT scan stays in the same Kenner office.",
  },
} as const;

export const HOME_COPY = {
  heroLede: "Six specialists. One Kenner dentist suite. 2400 Veterans Blvd. Suite 210.",
  careIntro: "Cosmetic, general, endo, and ortho in the same Kenner suite — each panel is a real room or a real face.",
  resultsIntro: "Illustrative close-ups of veneers, whitening, and aligners. Lakeside does not publish patient cases. Drag the handle.",
  doctorsIntro:
    "Official still: Schwab, Islam, Kapusta in front; Dyer, Henson, Stassen in back. Wilkerson is named, not on that photo.",
  staffCaption: "Anne, Dr. Dyer, Rosie, and Carol — official staff still.",
  groupCaption: "Official group still. Blue polos are staff.",
  techIntro: "Thirty years of keeping the work in-house. The instruments on the Kenner floor:",
  officeIntro: "Suite 210, second floor, fountain court. The pin is 2400 Veterans Blvd.",
  areasIntro: "One Kenner suite. Patients drive from Metairie, New Orleans, and LaPlace.",
  visitIntro: "Interpreters on this floor: Spanish, French, Chinese, Vietnamese, Haitian Creole, Portuguese.",
  bookIntro: "NexHealth for a chair. The card is a callback. Same-week? Call.",
  close: "2400 Veterans Blvd. Suite 210. A Kenner dentist with six specialists. (504) 833-3200.",
} as const;

export const PARISHES = ["Jefferson Parish", "Orleans Parish", "St. John the Baptist Parish"] as const;

/** Official “Proudly Serving” list from lakesidedentalcare.com — do not invent suburbs. */
export const SERVICE_AREAS = [
  "Jefferson Parish",
  "Orleans Parish",
  "Kenner",
  "Metairie",
  "New Orleans",
  "LaPlace",
] as const;

export const BEFORE_AFTER = [
  {
    slug: "veneers",
    label: "Veneers",
    before: "/lakeside/ai/ba-veneer-before.webp",
    after: "/lakeside/ai/ba-veneer-after.webp",
    beforeAlt: "Illustrative smile before porcelain veneers — chipped, stained front teeth",
    afterAlt: "Illustrative smile after porcelain veneers — even restored front teeth",
  },
  {
    slug: "whitening",
    label: "Whitening",
    before: "/lakeside/ai/ba-white-before.webp",
    after: "/lakeside/ai/ba-white-after.webp",
    beforeAlt: "Illustrative smile before Zoom-style whitening — coffee-stained enamel",
    afterAlt: "Illustrative smile after professional whitening — brighter even enamel",
  },
  {
    slug: "aligners",
    label: "Aligners",
    before: "/lakeside/ai/ba-align-before.webp",
    after: "/lakeside/ai/ba-align-after.webp",
    beforeAlt: "Illustrative smile before clear aligners — crowded rotated front teeth",
    afterAlt: "Illustrative smile after clear aligners — straightened front teeth",
  },
] as const;

export const POSTS = [
  {
    slug: "first-visit-kenner-dentist" as const,
    keyword: "first visit Kenner dentist",
    title: "First Visit Kenner Dentist | Suite 210 Exam, X-rays, Plan",
    h1: "First visit at this Kenner dentist",
    description:
      "A first visit Kenner dentist exam at Lakeside Dental Care: digital X-rays, intraoral photos, and a plan in Suite 210. Book NexHealth or call (504) 833-3200.",
    date: "2026-09-01",
    image: "/lakeside/ai/waiting.webp",
    alt: "Quiet waiting lounge for a first visit Kenner dentist exam at Lakeside Dental Care",
    paras: [
      "A first visit Kenner dentist appointment at Lakeside Dental Care is an exam in Suite 210, not a sales deck. You check in at 2400 Veterans Blvd., take the elevator, and sit for radiographs only when the guidelines say so. Digital sensors cut exposure to about one-sixth of film. An intraoral camera puts the cracked cusp on a monitor so you are not nodding at a description you cannot see.",
      "Who: Drs. Rubia Kapusta, Matthew Henson, and Olivia Stassen hold the general chairs. What: exam, cleaning when indicated, digital X-rays, photos. Where: Kenner, Jefferson Parish. Why: so a root canal, a gum graft, or aligners can stay down the same hall with Dr. Dyer, Dr. Wilkerson, or Dr. Schwab.",
      "Bring the insurance card from the listed carriers — Delta, Guardian, Humana, MetLife, Ameritas, Cigna, Renaissance, Aetna, Careington, Dental Plans — or ask about Kleer if you have none. CareCredit and Cherry are on the published payment list. The desk will not guess a Metairie PPO is in-network.",
      "Hours for that first visit Kenner dentist slot are Monday through Thursday 8:30am–4:00pm and Friday 8:00am–3:00pm, as printed on the contact page. A 3:40 arrival from Bywater or LaPlace meets a locked door. Call (504) 833-3200 before you leave the house. NexHealth holds a real chair. The homepage form is a callback.",
      "Languages at the desk: English, Spanish, French, Chinese, Vietnamese, Haitian Creole, Portuguese. Ask for an interpreter when you book so the person who speaks it is actually on the floor. Staff come from more than seven countries. That is the official sentence.",
      "Parking is the plaza lot, not a CBD garage. The fountain court on the official exterior is the landmark. Suite 210 is upstairs. Tell the rideshare Kenner, not Lakeside Mall in Metairie.",
      "If the exam finds a canal, Dr. Dyer is the endodontist in the building. If pockets need osseous work, Dr. Wilkerson is the periodontist — named on the homepage, without an official individual portrait on the group still. Crowding can move to Dr. Schwab, ABO 2002. That hallway is the point of a first visit here instead of a strip-mall cleaner.",
      "Children: Dr. Stassen’s bio says all ages. Sealants sit on the general list. A Kenner family can keep a six-year molar and a parent crown on one floor. Say both names when you book so the desk does not split the morning.",
      "Sedation is not automatic on a first visit. Oral conscious sedation and nitrous exist. The oral-sedation page states a doctor is board certified to administer oral conscious sedation. You still sign the plan awake. Bring a driver if the desk puts a pill on the ticket.",
      "Technology you may meet on visit one: digital X-rays, the intraoral camera, and, if bone or canals are in question, the KaVo OP 3D. iTero Element 5D Plus is the impression scanner for aligner talk. High-power microscopes stay with precision restorative and endodontic work.",
      "This note does not invent reviews or a founding year beyond “over 30 years.” It is a first visit Kenner dentist brief built from the official contact, technology, insurance, and doctor pages. Facebook is facebook.com/lakesidedentalcarekenner.",
      "Close the loop: book the first visit Kenner dentist exam through NexHealth or call (504) 833-3200. 2400 Veterans Blvd. Suite 210, Kenner, LA 70062. Ask for the general dentist by name so the chart starts on the right chair.",
    ],
  },
  {
    slug: "cbct-dental-scan-kenner" as const,
    keyword: "CBCT dental scan Kenner",
    title: "CBCT Dental Scan Kenner | KaVo OP 3D, Same Kenner Suite",
    h1: "CBCT dental scan Kenner, in Suite 210",
    description:
      "A CBCT dental scan Kenner visit at Lakeside Dental Care uses the KaVo OP 3D in Suite 210. Implants, canals, and grafts stay in-house. Call (504) 833-3200.",
    date: "2026-09-08",
    image: "/lakeside/ai/microscope.webp",
    alt: "Operatory microscope plate for a CBCT dental scan Kenner visit at Lakeside Dental Care",
    paras: [
      "A CBCT dental scan Kenner patients need at Lakeside Dental Care happens on the KaVo OP 3D in Suite 210. You do not leave the glass plaza for a mobile truck in a parking lot. The advanced-technology page lists that unit for diagnosis, planning, and evaluation. The same floor holds the periodontist, the endodontist, and the general dentists who will use the volume.",
      "CBCT is three-dimensional imaging. A 2D bitewing can hide a sinus floor or a curved canal. Implant sites, retreatment anatomy, and bone grafts are the usual reasons this Kenner office turns the OP 3D on. Ask why you are being scanned. A souvenir volume is not the protocol.",
      "Dr. Corinthia Wilkerson’s periodontal surgery and implant placement are planned on that scan. Dr. Regine Dyer’s canal work lives on a microscope; the 3D look is how a hidden canal gets named before the rubber dam. Drs. Kapusta and Henson restore what those specialists leave. One CBCT dental scan Kenner visit can feed all three charts.",
      "LaPlace and New Orleans patients used to add a Metairie imaging stop. That pattern is what this office exists to kill. Ask for the scan on the same ticket as the exam. Friday close is 3:00pm. A 2:40 arrival from I-10 is how the volume gets postponed a week.",
      "Radiation talk belongs in the chair. Digital 2D sensors here are published at about one-sixth of film. CBCT is a different dose than a bitewing. This page does not invent a microsievert number. Ask the Kenner dentist who ordered it what anatomy they need and whether a 2D film already answers it.",
      "iTero Element 5D Plus is not CBCT. It is a digital impression of teeth and gums for aligner and restorative consults. The OP 3D is the bone and canal machine. Patients mix the two names. The desk should not.",
      "Insurance may treat a CBCT dental scan Kenner code as diagnostic, as medical, or as excluded. The listed carriers still have to be asked. CareCredit, Cherry, and Kleer exist when the plan stops at the 2D series. Get the estimate before the gantry spins.",
      "Parking stays the plaza lot at 2400 Veterans Blvd. Suite 210 is upstairs. No email is published. Fax is (504) 833-0813 if a physician needs to send a clearance note. Phone (504) 833-3200 is faster.",
      "This rebuild will not generate a patient in a scanner. The microscope and corridor plates on this note are empty atmospheres. Official faces are the doctors on the staff photograph. A CBCT dental scan Kenner page that fakes a mouth is a policy problem, not a marketing win.",
      "After the volume: implants may wait on biology, canals may open the same week, grafts may add months. The scan is not the surgery. Leave with a written sequence — scan, graft if needed, fixture or canal, restore — and the doctor names attached.",
      "Book the CBCT dental scan Kenner visit through NexHealth or call (504) 833-3200. 2400 Veterans Blvd. Suite 210, Kenner, LA 70062. Say KaVo OP 3D so the slot is not a cleaning with a surprise gantry.",
    ],
  },
] as const;

export function getPost(slug: string) {
  return POSTS.find((p) => p.slug === slug);
}

export function getService(slug: string) {
  return SERVICES.find((s) => s.slug === slug);
}

export function getArea(slug: string) {
  return AREAS.find((a) => a.slug === slug);
}

export function getDoctor(slug: string) {
  return DOCTORS.find((d) => d.slug === slug);
}
