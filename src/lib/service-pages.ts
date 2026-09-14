import type { ServiceSlug } from "@/lib/canal";

export type CopyBlock = { h2: string; paras: string[] };
export type ServiceCopy = {
  firstPara: string;
  blocks: CopyBlock[];
  faqs: { q: string; a: string }[];
  closing: string;
};

export const SERVICE_COPY: Record<ServiceSlug, ServiceCopy> = {
  cleanings: {
    firstPara:
      "Canal Street Family Dentistry is Dr. Rayfield Lotten’s chair at 2752 Canal St in Mid-City. A dental cleaning New Orleans visit here removes plaque, checks gums, and maps what you need next. You book by calling (504) 822-8890 — there is no public online scheduler.",
    blocks: [
      {
        h2: "What a dental cleaning in New Orleans covers",
        paras: [
          "A cleaning is the visit most families book first. Plaque and tartar do not rinse off at the sink. They sit at the gumline, stain, and start cavities. The official homepage lists professional cleanings to remove plaque and prevent cavities, keeping your smile healthy and bright.",
          "In the chair, the team looks at gums, feels for buildup, and tells you what they see. That talk is the point. Derrick James wrote that Dr. Lotten explains everything clearly. You should leave knowing whether you are due again in a few months or whether a filling, a crown, or gum work needs its own visit.",
          "Bring a list of medicines and any bleeding when you brush. If a tooth zings with sweets, say so before the polishing starts. A cleaning is not a filling. It is the map.",
        ],
      },
      {
        h2: "How often to return to this family dentist in New Orleans",
        paras: [
          "The official site does not print a one-interval-fits-all schedule. Some mouths do well twice a year. Some need a shorter gap after gum swelling, pregnancy, dry mouth, or a stretch of missed visits. Ask the chairside team how often you should return. That sentence is the honest rule.",
          "Hours on the official contact page are Monday–Thursday 9:00 AM–5:00 PM, Friday 9:00 AM–1:00 PM, weekend closed. Friday mornings fill fast because the day ends at 1:00. Call (504) 822-8890 and confirm the time. Directories that show Saturday hours are not the contact page.",
        ],
      },
      {
        h2: "Cleanings for kids and for denture wearers",
        paras: [
          "Kid’s dentistry on this site means first visits and gentle cleanings, not a reused denture paragraph. Jazmyn Battle brought her kids for a first visit and wrote that the staff made them comfortable. Derrick James says his kids are happy to come back. Those two notes are on canalstdental.com.",
          "If you wear a denture or a partial, a cleaning visit still matters for the teeth you have left and for the tissue under the plate. Bring the denture. The same visit can flag a crack that belongs on the denture repair page.",
          "Berilin Johnson wrote that the staff is welcoming and the office is clean. Nora described an office that is well taken care of. A cleaning chair should feel like that — not like a rush through a mill.",
        ],
      },
      {
        h2: "What a cleaning is not",
        paras: [
          "A cleaning does not whiten enamel the way a bleaching visit does. It does not crown a broken tooth. It does not place an implant. Those treatments have their own pages because the official homepage lists them as separate items.",
          "If the team finds a cavity, the next step is usually a filling. If the tooth is too broken, the talk turns to a crown, an extraction, or a bridge. None of that is a surprise add-on you have to guess at. You hear it in the room, then you book the next chair by phone.",
        ],
      },
      {
        h2: "Booking dental cleanings on Canal Street",
        paras: [
          "The office sits at 2752 Canal St, New Orleans, LA 70119, on the historic Canal Street streetcar line. The official site does not publish a storefront gallery or a parking diagram. Use Maps, or ask the desk for the nearest stop when you call.",
          "Most insurance and CareCredit appear on the patient portal. Bring cards. Confirm the plan before you assume a cleaning is a $0 visit. New patients are marked as welcome on directory listings for Dr. Lotten. Call (504) 822-8890 to take the next open time.",
        ],
      },
    ],
    faqs: [
      { q: "How long is a dental cleaning?", a: "The official site does not print a minute count. Plan for a standard hygiene visit and ask the desk when you book so you are not rushing a Friday 1:00 close." },
      { q: "Do you clean children’s teeth?", a: "Family care here includes kids. Jazmyn Battle and Derrick James wrote on canalstdental.com about bringing children. Call (504) 822-8890 and say you are booking a child." },
      { q: "Will a cleaning whiten my teeth?", a: "A cleaning removes plaque and surface stain. Professional whitening is a separate homepage service. Ask which visit you actually need." },
      { q: "What if you find a cavity?", a: "The team will tell you. A filling, a crown, or another visit gets its own appointment. You book that by calling the same number." },
    ],
    closing:
      "Dental cleanings in New Orleans at Canal Street Family Dentistry start with a phone call to (504) 822-8890. The chair is at 2752 Canal St. The dentist is Dr. Rayfield Lotten. Book the cleaning, then book whatever the exam actually shows.",
  },
  "crown-bridge": {
    firstPara:
      "Canal Street Family Dentistry offers crown and bridge care at 2752 Canal St in Mid-City New Orleans. Dr. Rayfield Lotten restores a damaged tooth with a crown or replaces a missing tooth with a bridge. Call (504) 822-8890 to ask which path fits the tooth you have.",
    blocks: [
      {
        h2: "When a crown is the right next step",
        paras: [
          "The official homepage describes custom-fitted crowns and bridges that restore strength and aesthetics. A crown covers a tooth that a filling can no longer hold. Large decay, a fracture, or a tooth after root work often needs that full cover. Dr. Lotten will tell you if a filling still wins.",
          "A bridge replaces a missing tooth by joining to neighbors. It is not an implant. It is the option when the teeth on either side can carry the span, or when an implant is not the case in front of you. Both live on the same official list because families ask about them in the same visit.",
          "Bring bite complaints, a broken cusp, or a temporary that will not stay. Photos on your phone help. The official site does not publish a lab name, a same-day-crown promise, or a price list. Those details come from the chair and the desk.",
        ],
      },
      {
        h2: "Crown and bridge versus implants and fillings",
        paras: [
          "A filling treats a smaller cavity. A crown covers more of the tooth. An implant replaces the root in the bone. Extraction removes what cannot be saved. Esthetic bonding repairs a chip when a full cap is more than you need. The ten homepage services are meant to be chosen, not stacked as a package.",
          "If a tooth is already missing, the talk is bridge, implant, or a denture. If the tooth is still there but weak, the talk is filling versus crown. Ask out loud. Derrick James wrote that Dr. Lotten explains everything clearly. Use that.",
        ],
      },
      {
        h2: "What the Canal Street visit actually requires",
        paras: [
          "You reach the office at 2752 Canal St, New Orleans, LA 70119. Hours from the official contact page are Monday–Thursday 9:00 AM–5:00 PM and Friday 9:00 AM–1:00 PM. Crown and bridge work often needs more than one appointment. Do not book the first look on a Friday at 12:30 and expect a full case to finish that hour.",
          "Most insurance and CareCredit are noted on the patient portal. Large restorative cases are where plans diverge. Call (504) 822-8890 with your card in hand before you assume a percentage. New patients are welcome. There is no public online scheduler.",
        ],
      },
      {
        h2: "After the crown or bridge is in",
        paras: [
          "You still need cleanings. A crown does not make plaque disappear. Floss around the margin. If a bridge food-traps, say so at the next visit instead of living with it. Denture wearers who still have a few natural teeth should not skip the remaining enamel — those teeth may be the abutments later.",
          "The official site does not publish a warranty length. If something feels high, sharp, or loose, call. Nora’s review describes an efficient emergency visit. That is not a promise of after-hours coverage. It is a reason to phone the desk the same day.",
        ],
      },
    ],
    faqs: [
      { q: "How many visits does a crown take?", a: "The official site does not print a visit count. Ask when you book. Plan for more than a single Friday hour." },
      { q: "Is a bridge the same as an implant?", a: "No. A bridge joins to neighboring teeth. An implant replaces a root in bone. Dr. Lotten will say which case you are." },
      { q: "Can a filling still work instead?", a: "Sometimes. A crown is for teeth a filling can no longer hold. That decision is made in the chair, not from a photo you send in a form." },
      { q: "Do you take insurance for crowns?", a: "Most insurance and CareCredit are listed on the patient portal. Confirm your plan at (504) 822-8890 before a large case." },
    ],
    closing:
      "Crown and bridge New Orleans care at this office is a phone call to (504) 822-8890. Canal Street Family Dentistry sits at 2752 Canal St. Bring the broken tooth, the gap, and your questions for Dr. Rayfield Lotten.",
  },
  whitening: {
    firstPara:
      "Canal Street Family Dentistry lists professional whitening at 2752 Canal St in Mid-City New Orleans. Dr. Rayfield Lotten treats stains with a plan that respects your enamel and any sensitivity you already have. Call (504) 822-8890 before you buy a kit and guess.",
    blocks: [
      {
        h2: "What teeth whitening in New Orleans means here",
        paras: [
          "The official homepage says professional whitening treatments are designed for lasting results. That is the whole published promise. It does not name a brand, a tray-versus-light system, or a shade chart. You learn the method in the room.",
          "Coffee, tea, red wine, and years of smoke sit on enamel. A cleaning removes plaque and some surface stain. Whitening is the separate visit when you want the color itself to shift. Do not skip the cleaning and expect bleach to work through tartar.",
          "Tell the team about existing sensitivity, pregnant or nursing status, and any past bleaching that burned. Those facts change the plan. The site does not publish a medical-exclusion list, so the honest step is to say it out loud.",
        ],
      },
      {
        h2: "Whitening is not a crown, a filling, or bonding",
        paras: [
          "Bleach will not repair a chip. Esthetic bonding will. Bleach will not cover a gray tooth that needs a crown. A filling that no longer matches after whitening may need a refresh — that is a later conversation, not a bait-and-switch.",
          "If a front tooth is already crowned or bonded, that porcelain will not bleach with the enamel next to it. Ask before you chase a single shade across mixed materials. Dr. Lotten’s published approach is patience and clear communication. Use it on this visit too.",
        ],
      },
      {
        h2: "Booking on Canal Street",
        paras: [
          "The chair is at 2752 Canal St, New Orleans, LA 70119, on the historic Canal Street streetcar line. Official hours are Monday–Thursday 9:00 AM–5:00 PM, Friday 9:00 AM–1:00 PM, weekend closed. Confirm when you call (504) 822-8890.",
          "Whitening is often elective on dental plans. The patient portal notes most insurance and CareCredit. Bring the card. Do not assume a cosmetic visit is covered because a cleaning was.",
          "Berilin Johnson wrote that she feels like she is getting the care she deserves. Whitening should still start with an honest look at the teeth, not a one-shade-fits-all booth.",
        ],
      },
    ],
    faqs: [
      { q: "Will whitening hurt?", a: "Sensitivity is common and should be discussed before gel goes on. The official site does not publish a pain score. Tell the team what you already feel." },
      { q: "Can I whiten if I have crowns?", a: "Porcelain does not bleach with enamel. Ask Dr. Lotten what will actually change color in your mouth." },
      { q: "Is this the same as a cleaning?", a: "No. Cleanings remove plaque. Whitening is a separate homepage service. Many patients need the cleaning first." },
      { q: "How do I book?", a: "Call (504) 822-8890. There is no public online scheduler on canalstdental.com." },
    ],
    closing:
      "Teeth whitening New Orleans families book at Canal Street Family Dentistry by calling (504) 822-8890. The office is 2752 Canal St. Ask Dr. Rayfield Lotten what your enamel can take before anyone starts a tray or a light.",
  },
  implants: {
    firstPara:
      "Canal Street Family Dentistry offers dental implants at 2752 Canal St in Mid-City New Orleans. Dr. Rayfield Lotten surgically places a small, threaded post in the jawbone to act as a replacement root for a missing tooth. Call (504) 822-8890 to ask whether you are a candidate.",
    blocks: [
      {
        h2: "What a dental implant in New Orleans actually is",
        paras: [
          "The official homepage language is specific: a small, threaded post in the jawbone that replaces a root. A crown then sits on that post. That is not a bridge, and it is not a denture. It is the option when the bone and the rest of the mouth can support it.",
          "Not every gap is an implant case. Gum disease, smoking, uncontrolled medical issues, and thin bone change the answer. The official site does not publish a CT-scan protocol, a brand of fixture, or a healing timeline. Those facts come after an exam.",
          "If a tooth is still in the mouth but cannot be saved, extraction may come first. The extraction page and this page belong in the same conversation. Do not assume the implant goes in the same hour the tooth comes out unless the dentist says so.",
        ],
      },
      {
        h2: "Implants versus bridges and dentures",
        paras: [
          "A bridge uses neighboring teeth as anchors. An implant stands on its own root. 3D printed dentures and denture repair cover a different problem — several missing teeth, or a plate that already exists. The homepage lists all of them so you can ask which one matches the gap you have.",
          "Some patients want an implant under a new denture for retention. That is a combined plan, not a menu combo you click online. Call the desk. Bring the current plate if you have one.",
        ],
      },
      {
        h2: "Time, hours, and how you pay",
        paras: [
          "Implant care is not a Friday-at-noon single visit. Official hours are Monday–Thursday 9:00 AM–5:00 PM and Friday 9:00 AM–1:00 PM. Healing between steps is normal. Ask for the sequence when you book so work and streetcar timing match the chair.",
          "The office is at 2752 Canal St, New Orleans, LA 70119. Most insurance and CareCredit appear on the patient portal. Implant benefits vary widely. Call (504) 822-8890 with the card before you budget a number you saw on another website.",
        ],
      },
      {
        h2: "After the post is placed",
        paras: [
          "You still clean around the implant. You still keep the rest of the mouth on a recall. A failed cleaning habit is how implants get into trouble later. The practice’s published tone is accessible, affordable, convenient family dentistry — that includes telling you when home care is the weak link.",
          "If swelling, a high bite, or a loose healing cap shows up, call. Nora’s on-site review describes an efficient emergency visit. That is still not after-hours coverage. Use (504) 822-8890 the same day.",
        ],
      },
    ],
    faqs: [
      { q: "Am I a candidate for an implant?", a: "Only an exam answers that. Bone, gums, and medical history decide. Call (504) 822-8890 and book the look, not the surgery." },
      { q: "Is an implant a denture?", a: "No. An implant replaces a root. A denture is a plate. Some plans combine them. Ask which case you are." },
      { q: "How long does healing take?", a: "The official site does not print a healing number. Dr. Lotten will give you the sequence after he sees the site." },
      { q: "Do you place the crown too?", a: "The homepage lists both implants and crowns. The desk will tell you how this office sequences the parts." },
    ],
    closing:
      "Dental implants in New Orleans at Canal Street Family Dentistry start with a call to (504) 822-8890. The address is 2752 Canal St. Ask Dr. Rayfield Lotten whether a post, a bridge, or a denture is the honest replacement for the tooth you lost.",
  },
  extractions: {
    firstPara:
      "Canal Street Family Dentistry lists tooth extractions at 2752 Canal St in Mid-City New Orleans. Dr. Rayfield Lotten removes teeth that cannot be saved with a filling or a crown. Call (504) 822-8890 to talk through the tooth, the timing, and what fills the space after.",
    blocks: [
      {
        h2: "When a tooth cannot stay",
        paras: [
          "The official homepage describes expert removal of impacted or damaged teeth. A tooth that is split, decayed past a filling, or infected despite other work may need to come out. That is a diagnosis, not a default. Ask whether a crown, a filling, or root work could still win.",
          "Impacted teeth are listed in that same official sentence. Wisdom teeth appear on Demandforce as an extra item, not on the ten-item homepage. If you think you need a wisdom tooth out, call and ask — do not assume a hospital-style surgery is on the menu.",
          "Nora wrote that she had an emergency visit and they were incredibly efficient. An extraction for pain is a reason to phone the same morning. Official hours end at 5:00 PM Monday–Thursday and 1:00 PM Friday. Weekend closed. Do not wait for a Saturday that is not on the contact page.",
        ],
      },
      {
        h2: "What happens after the tooth is out",
        paras: [
          "A hole is not a finished plan. The homepage also lists implants, crown & bridge, 3D printed dentures, and denture repair because the space usually needs something. Leaving it open can shift the bite. Ask in the same conversation, even if the replacement is a later visit.",
          "If you already wear a denture, bring it. An immediate add-on tooth is not promised on the website. The desk will tell you what this office can do with the plate you walked in with.",
        ],
      },
      {
        h2: "Kids, anxiety, and the Canal Street chair",
        paras: [
          "Kid’s dentistry on the official site is first visits, gentle cleanings, patience, and clear talk. An extraction for a child is still possible, but it is not the marketing copy. Call (504) 822-8890 and say the age so the desk books the right length of time.",
          "Derrick James wrote that Dr. Lotten is patient and explains everything clearly. Use that on an extraction day. You should know what you will feel, what you should not chew, and when to call back.",
          "The office sits at 2752 Canal St, New Orleans, LA 70119, on the Canal Street streetcar line. No published parking diagram. No exterior gallery. Maps plus the phone number is how you arrive.",
        ],
      },
      {
        h2: "Insurance and booking",
        paras: [
          "Most insurance and CareCredit are noted on the patient portal. Surgical codes and simple extractions bill differently. Confirm the plan. New patients are welcome. There is no public online scheduler.",
          "Bring a list of blood thinners and medical conditions. The site does not publish a medical-history form you can fill in advance. The desk will tell you what to have in hand.",
        ],
      },
    ],
    faqs: [
      { q: "Will the extraction hurt?", a: "The official copy says minimal discomfort and maximum precision. Your medical history and the tooth itself change that. Ask in the chair before anything starts." },
      { q: "Can I get an implant the same day?", a: "Not unless Dr. Lotten says so after he sees the site. Implants are a separate homepage service with their own rules." },
      { q: "Do you extract wisdom teeth?", a: "Demandforce lists wisdom teeth. The official homepage lists tooth extractions. Call (504) 822-8890 and ask about the specific tooth." },
      { q: "Are you open for dental emergencies on Saturday?", a: "No. Official hours list Saturday and Sunday closed. Call as soon as the office opens." },
    ],
    closing:
      "Tooth extractions in New Orleans at this family dentist start with (504) 822-8890. Canal Street Family Dentistry is at 2752 Canal St. Let Dr. Rayfield Lotten say whether the tooth can be saved — and what replaces it if it cannot.",
  },
  bonding: {
    firstPara:
      "Canal Street Family Dentistry offers esthetic bonding at 2752 Canal St in Mid-City New Orleans. Dr. Rayfield Lotten uses tooth-colored material to repair chips and small gaps without jumping straight to a crown. Call (504) 822-8890 if a front tooth broke on a fork, a bottle, or a fall.",
    blocks: [
      {
        h2: "What esthetic bonding in New Orleans can fix",
        paras: [
          "The official homepage describes quick, painless bonding to repair chipped teeth and improve the appearance of your smile. Bonding is a conservative visit. It adds material. It does not cap the whole tooth. It does not bleach the rest of the mouth.",
          "Small chips on front edges, narrow gaps, and misshapen corners are the usual reasons people ask. A crack that runs under the gum, a tooth that already needs a root canal, or a cusp that lost half its height may need a crown instead. That is the fork in the road. Ask which one you are.",
          "The site does not publish a shade system or a “one-visit Hollywood” promise. Bring a photo of how the tooth looked last month if you have one. Clear talk is the published style of this office.",
        ],
      },
      {
        h2: "Bonding versus whitening, crowns, and veneers",
        paras: [
          "Whitening changes color. Bonding changes shape. Do whitening first if you want both, because bonded resin will not bleach with the enamel next to it. Crowns cover weak teeth. Veneers are not on the official ten-item homepage — do not assume they are offered.",
          "A filling on a back tooth is not the same as esthetic bonding on a front edge, even though both use tooth-colored material. The filling page is for decay. This page is for the look and the chip.",
        ],
      },
      {
        h2: "Kids, sports, and Canal Street hours",
        paras: [
          "Children chip front teeth on playgrounds and water bottles. Kid’s dentistry here is first visits and gentle cleanings, but a chipped adult front tooth on a teenager is a bonding question. Call (504) 822-8890 and say the age and which tooth.",
          "Official hours are Monday–Thursday 9:00 AM–5:00 PM, Friday 9:00 AM–1:00 PM, weekend closed. A Friday afternoon chip waits until Monday unless you reach the desk before 1:00. Nora’s emergency review is about efficiency during open hours, not a night line.",
          "The office is 2752 Canal St, New Orleans, LA 70119. Streetcar line in the welcome sentence. No published exterior gallery. Confirm the time when you call.",
        ],
      },
      {
        h2: "How long bonding lasts — and how you pay",
        paras: [
          "Resin chips again if you bite ice, pens, or bottle caps. The official site does not print a year-count warranty. Treat it as a repair you protect, not a permanent cap.",
          "Most insurance and CareCredit appear on the patient portal. Cosmetic coding varies. Confirm the plan. New patients are welcome. Book by phone only.",
        ],
      },
    ],
    faqs: [
      { q: "Is bonding the same as a veneer?", a: "No. Bonding adds resin to the tooth you have. Veneers are not listed on the official homepage. Ask before you assume." },
      { q: "Can bonding fix a gap?", a: "Small gaps are a common reason to bond. Wide gaps may need a different plan. Dr. Lotten will say which." },
      { q: "Will it match my other teeth?", a: "Shade is chosen in the chair. If you also want whitening, do that conversation first so the resin is not stuck on a darker enamel." },
      { q: "How do I get in after a chip?", a: "Call (504) 822-8890 during published hours. Friday closes at 1:00 PM. Weekend closed." },
    ],
    closing:
      "Esthetic bonding in New Orleans at Canal Street Family Dentistry is a call to (504) 822-8890. The office is 2752 Canal St. Ask Dr. Rayfield Lotten whether a conservative repair is enough, or whether the tooth already needs a crown.",
  },
  "dentures-3d": {
    firstPara:
      "Canal Street Family Dentistry lists 3D printed dentures at 2752 Canal St in Mid-City New Orleans. Dr. Rayfield Lotten uses digital printing for a more comfortable, precise, and durable fit. Call (504) 822-8890 and bring the plate you wear now so the team can see the problem.",
    blocks: [
      {
        h2: "What 3D printed dentures in New Orleans means on this site",
        paras: [
          "The official homepage names advanced technology for a more comfortable, precise, and durable fit. Digital printing can shorten the wait versus a traditional pour. That is the published difference. The site does not name a printer brand, a same-day guarantee, or a price.",
          "Bring your current denture, even if it is cracked. Fit, bite, and the way you already speak are data. A brand-new plate that ignores how you have been chewing will fight you. The team needs the old one in the room.",
          "Kid’s dentistry is not this page. The live official site once pasted denture copy under kids by mistake. This redesign keeps 3D printed dentures on the adult restorative list where they belong.",
        ],
      },
      {
        h2: "New denture versus denture repair",
        paras: [
          "Denture repair is its own homepage service. A tooth that popped off a plate you otherwise like may need a repair, not a reprint. A plate that rocks, hits the nerve, or was made for a ridge that has since shrunk may need a new 3D printed denture. Ask which case you are holding.",
          "Implants can retain a denture for some patients. That is a combined plan. Do not order an implant online. Call (504) 822-8890 and ask whether this office sequences those visits together.",
        ],
      },
      {
        h2: "The Canal Street visit",
        paras: [
          "You come to 2752 Canal St, New Orleans, LA 70119, on the historic Canal Street streetcar line. Official hours: Monday–Thursday 9:00 AM–5:00 PM, Friday 9:00 AM–1:00 PM, weekend closed. Denture try-ins take time. Avoid a Friday 12:40 slot if you need a long look.",
          "Most insurance and CareCredit are listed on the patient portal. Denture benefits and frequency limits are plan-specific. Bring the card. Confirm before you assume a replacement year has rolled over.",
          "Berilin Johnson wrote that the office is clean and the staff welcoming. A denture visit should feel like that — not like a mill that never lets you talk about the sore spot on the left ridge.",
        ],
      },
      {
        h2: "After you pick up the plate",
        paras: [
          "Sore spots in the first days are common. Call instead of suffering through a weekend. Saturday is closed on the official contact page. If a sore is building on Thursday, phone Thursday.",
          "You still need the remaining teeth, if you have any, cleaned. Partial dentures fail when the clasps’ teeth decay. Book the cleaning too.",
        ],
      },
    ],
    faqs: [
      { q: "Are 3D printed dentures same-day?", a: "The official site does not promise same-day. Ask the desk for this office’s turnaround when you call." },
      { q: "Should I repair instead of replace?", a: "If the plate mostly fits and a tooth or crack is the only issue, start on the denture repair page. Bring the denture either way." },
      { q: "Do you take CareCredit for dentures?", a: "CareCredit is listed on the patient portal with most insurance and cards. Confirm the plan at (504) 822-8890." },
      { q: "Can implants hold the denture?", a: "Sometimes. Implants are a separate homepage service. Ask Dr. Lotten after he sees the ridge." },
    ],
    closing:
      "3D printed dentures in New Orleans at Canal Street Family Dentistry start with (504) 822-8890. Bring the plate to 2752 Canal St. Let Dr. Rayfield Lotten say whether you need a reprint, a repair, or a different replacement.",
  },
  fillings: {
    firstPara:
      "Canal Street Family Dentistry treats cavities with dental fillings at 2752 Canal St in Mid-City New Orleans. Dr. Rayfield Lotten restores teeth with durable materials so decay does not reach the nerve. Call (504) 822-8890 at the first catch, hole, or sweet-zinger — waiting turns a filling into a crown.",
    blocks: [
      {
        h2: "What a dental filling in New Orleans is for",
        paras: [
          "The official homepage describes restoring teeth with durable, high-quality materials to protect enamel and prevent further decay. A filling is the conservative repair when a cavity is still small enough. It is not a cleaning. It is not a crown.",
          "Sweet pain, a floss that shreds, or a dark pit you can feel with a nail are the usual reasons people call. Cold sensitivity alone can be gum recession. The exam sorts that. Do not diagnose from the mirror and then skip the visit.",
          "If the decay is already large, the talk turns to a crown. If the nerve is involved, the talk may turn to other treatment or an extraction. Demandforce lists root canals as an extra service. The official homepage does not. Call and ask rather than assuming.",
        ],
      },
      {
        h2: "Fillings, bonding, and kids",
        paras: [
          "Esthetic bonding repairs chips and small gaps for looks. A filling treats decay. Front-tooth decay can look like both. Ask which code you are actually sitting for.",
          "Children get cavities. Kid’s dentistry on this site is first visits, gentle cleanings, patience, and clear communication. A child’s filling is still a filling. Jazmyn Battle and Derrick James both wrote about bringing kids and feeling they could come back. That is the tone you want on a cavity visit, not a rush.",
        ],
      },
      {
        h2: "Booking the chair on Canal Street",
        paras: [
          "The office is 2752 Canal St, New Orleans, LA 70119. Official hours Monday–Thursday 9:00 AM–5:00 PM, Friday 9:00 AM–1:00 PM, weekend closed. A small filling can fit a shorter slot. A deep one should not be jammed against Friday closing. Tell the desk what you feel so they leave enough time.",
          "Most insurance and CareCredit are on the patient portal. Fillings are often covered at a different percentage than crowns. Confirm. New patients are welcome. No public online scheduler — call (504) 822-8890.",
          "The welcome places you on the historic Canal Street streetcar line. No published parking map. Ask when you book.",
        ],
      },
      {
        h2: "After the filling",
        paras: [
          "A high bite is a same-day call, not a wait-and-see. Numb lips need a careful lunch. If the tooth still zings weeks later, call — the filling may be fine and the nerve may not.",
          "Keep the cleaning visits. A filling that is never checked is how a crown shows up two years later. The ten homepage services are a sequence, not a buffet you pick once.",
        ],
      },
    ],
    faqs: [
      { q: "Is a filling the same as a crown?", a: "No. A filling repairs a smaller cavity. A crown covers a tooth a filling can no longer hold. Dr. Lotten will say which." },
      { q: "What material do you use?", a: "The official site says durable, high-quality materials. It does not name a brand. Ask in the chair if you have a metal or resin preference." },
      { q: "Do you fill children’s cavities?", a: "Yes, as part of family care. Jazmyn Battle and Derrick James wrote on canalstdental.com about bringing kids. Call (504) 822-8890 and give the child’s age." },
      { q: "Can I wait until it hurts more?", a: "Waiting is how a filling becomes a crown or an extraction. Call at the first sweet-zinger." },
    ],
    closing:
      "Dental fillings in New Orleans at Canal Street Family Dentistry are booked at (504) 822-8890. The office is 2752 Canal St. Let Dr. Rayfield Lotten catch the cavity while a filling still works.",
  },
  "denture-repair": {
    firstPara:
      "Canal Street Family Dentistry repairs dentures at 2752 Canal St in Mid-City New Orleans. Dr. Rayfield Lotten restores cracked bases and loose teeth so you can eat and speak. Call (504) 822-8890 and bring the plate in — do not glue it at the kitchen table.",
    blocks: [
      {
        h2: "What denture repair in New Orleans can save",
        paras: [
          "The official homepage describes professional denture repair and custom-fit solutions. A tooth that popped off, a midline crack, or a clasp that bent can often be repaired. A plate that no longer matches a ridge that has shrunk may need a new 3D printed denture instead. Bring it in so the team can say which.",
          "Same-day repair is not promised on the website. The office will tell you the turnaround when you call. Friday closes at 1:00 PM. A late Thursday break has a better chance of being seen before the weekend than a Friday at noon.",
          "Kitchen glue wrecks the surfaces a lab needs. Tape is not a bite. Drop the plate in a cup, keep the broken pieces, and ride to 2752 Canal St or call first.",
        ],
      },
      {
        h2: "Repair versus a new 3D printed denture",
        paras: [
          "3D printed dentures are the replacement path when the old plate is the wrong shape. Repair is the path when the shape is still right and a piece failed. Patients mix these up because both live on the official ten-item list. Ask the question with the denture on the counter, not in the abstract.",
          "If you also have remaining teeth, a repair that clasps a decaying abutment is a short win. Book the cleaning and the filling too. The plate will fail again if the tooth it hangs on fails.",
        ],
      },
      {
        h2: "Hours, streetcar, and payment",
        paras: [
          "Official contact-page hours: Monday–Thursday 9:00 AM–5:00 PM, Friday 9:00 AM–1:00 PM, Saturday and Sunday closed. Confirm when you call (504) 822-8890. Directories that show other hours are not the contact page.",
          "The practice sits on the historic Canal Street streetcar line in Mid-City, ZIP 70119. No published exterior photo. Use Maps. Ask the desk for the nearest stop.",
          "Most insurance, CareCredit, and common cards are listed on the patient portal. Repair codes and replacement codes differ. Confirm which one you are buying.",
        ],
      },
      {
        h2: "After the repair",
        paras: [
          "Bite changes when a tooth is added back. If it hits high, call. Do not grind the plastic yourself. Sore spots after a reline or a repair should be seen during open hours — weekend closed.",
          "Berilin Johnson wrote that she feels she is getting the care she deserves. A denture repair should put you back at the table, not send you home with a maybe.",
        ],
      },
    ],
    faqs: [
      { q: "Is denture repair same-day?", a: "Not promised. Call (504) 822-8890 with a description of the break. The desk will give this office’s turnaround." },
      { q: "Should I glue it overnight?", a: "No. Glue contaminates the break. Keep the pieces and bring them in." },
      { q: "When do I need a new denture instead?", a: "When the plate rocks, the ridge has changed, or repairs would stack on a bad fit. See the 3D printed dentures page and ask in person." },
      { q: "Can you add a tooth to my partial?", a: "Often. Bring the partial. The team will say whether an add-on or a new plate is the honest fix." },
    ],
    closing:
      "Denture repair in New Orleans at Canal Street Family Dentistry starts with (504) 822-8890. Bring the plate to 2752 Canal St. Dr. Rayfield Lotten will tell you whether a repair is enough or whether a new 3D printed denture is the better chair time.",
  },
  kids: {
    firstPara:
      "Canal Street Family Dentistry offers kids dentistry at 2752 Canal St in Mid-City New Orleans. Dr. Rayfield Lotten treats children with gentle first visits, cleanings, patience, and clear communication. Call (504) 822-8890 to book your child’s chair — this page is not a denture paragraph.",
    blocks: [
      {
        h2: "What kids dentistry in New Orleans means on Canal Street",
        paras: [
          "The live official site once pasted 3D-denture copy under Kid’s Dentistry. That was a CMS error. Their own language, used here, is gentle kids’ cleanings and first visits. Dr. Lotten treats children with patience and clear communication. That is the whole published kids promise.",
          "Jazmyn Battle wrote: she brought her kids for their first visit and the staff made them feel completely comfortable. Derrick James wrote that Dr. Lotten is patient, explains everything clearly, and his kids are happy to come back. Those two reviews are on canalstdental.com. They are not a star rating.",
          "A first visit is usually a look, a cleaning if the child will tolerate it, and a talk with the adult in the room. It is not a surprise extraction. If a cavity is waiting, you hear it and you book the filling as its own visit.",
        ],
      },
      {
        h2: "What children actually get treated for",
        paras: [
          "Cleanings, fillings, and the occasional extraction sit on the same official list as adult care. Whitening is not a kids product. 3D printed dentures are not a kids product. If a teenager chips a front tooth, esthetic bonding is the likely page. If a baby tooth is abscessed, call — do not wait for a Saturday that is closed.",
          "The official site does not publish an age cutoff, a “first visit free” coupon, or a separate pediatric specialist. Dr. Rayfield Lotten is the named dentist. Demandforce lists Darlene Stanwood on staff. The only posed portrait is Dr. Lotten.",
        ],
      },
      {
        h2: "How to book a child on Canal Street",
        paras: [
          "Call (504) 822-8890 and say you are booking a child, the age, and whether it is a first visit or a toothache. There is no public online scheduler. New patients are welcome.",
          "Official hours are Monday–Thursday 9:00 AM–5:00 PM, Friday 9:00 AM–1:00 PM, weekend closed. After-school slots go. Friday is a short day. Confirm when you call. The office is 2752 Canal St, New Orleans, LA 70119, on the historic Canal Street streetcar line.",
          "Bring the parent or guardian who can consent, the insurance card, and a short list of medicines or allergies. Most insurance and CareCredit are noted on the patient portal. Confirm the child’s plan.",
        ],
      },
      {
        h2: "What to say in the waiting room",
        paras: [
          "Skip the word “shot” if you can. The published style of this office is clear communication, not scare talk. Derrick James’s kids come back. That is the bar.",
          "If your child had a hard visit somewhere else, say so when you book so the desk leaves time. Berilin Johnson wrote that the staff is incredibly welcoming and the office is so clean. That is the room you are walking into — not a mill.",
        ],
      },
    ],
    faqs: [
      { q: "What age do you see children?", a: "The official site does not print an age cutoff. Call (504) 822-8890 with the child’s age and the reason for the visit." },
      { q: "Is this a pediatric-only office?", a: "No. It is a family dentist. Kid’s dentistry is one of ten homepage services under Dr. Rayfield Lotten." },
      { q: "Do you do braces?", a: "Braces and 6 Month Smiles appear on Demandforce, not on the official ten-item homepage. Call and ask. Do not assume." },
      { q: "Can I stay in the room?", a: "Ask the desk when you book. The published tone is patience and clear talk with families — including the adult who brought the child." },
    ],
    closing:
      "Kids dentistry in New Orleans at Canal Street Family Dentistry is a phone call to (504) 822-8890. The office is 2752 Canal St. Tell Dr. Rayfield Lotten it is a first visit or a toothache, and book the child into a chair that already has reviews from parents who came back.",
  },
};

export function relatedSlugs(slug: ServiceSlug): ServiceSlug[] {
  const map: Record<ServiceSlug, ServiceSlug[]> = {
    cleanings: ["kids", "fillings", "whitening"],
    "crown-bridge": ["fillings", "implants", "extractions"],
    whitening: ["cleanings", "bonding", "crown-bridge"],
    implants: ["extractions", "crown-bridge", "dentures-3d"],
    extractions: ["implants", "crown-bridge", "fillings"],
    bonding: ["whitening", "crown-bridge", "fillings"],
    "dentures-3d": ["denture-repair", "implants", "extractions"],
    fillings: ["cleanings", "crown-bridge", "kids"],
    "denture-repair": ["dentures-3d", "implants", "cleanings"],
    kids: ["cleanings", "fillings", "bonding"],
  };
  return map[slug];
}
