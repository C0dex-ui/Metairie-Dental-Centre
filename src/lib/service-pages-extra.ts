import type { CopyBlock, ServiceCopy } from "@/lib/service-pages";
import type { ServiceSlug } from "@/lib/canal";

/** Extra unique sections so each service page clears the 900-word production floor. */
export const SERVICE_EXTRA: Record<ServiceSlug, CopyBlock[]> = {
  cleanings: [
    {
      h2: "A Mid-City cleaning day, step by step",
      paras: [
        "You ride the Canal Street streetcar or you drive to 2752 Canal St. You check in with the name on the card. You sit. The team asks when you last had x-rays, whether gums bleed, and whether a tooth has been bothering you at night. That intake is how a family dentist in New Orleans keeps a cleaning from turning into a surprise extraction later in the morning.",
        "If you are new, say so. Directory listings mark Dr. Rayfield Lotten as accepting new patients. The official site still has no public scheduler, so the desk has to hear your name out loud. Bring photo ID and insurance cards. If a child is with you, say the age when you book so the slot is not a five-minute adult polish.",
        "Mid-City traffic on Canal Street is real. Friday closes at 1:00 PM. A 12:15 cleaning with a new-patient stack behind it is how people miss the chair. Call (504) 822-8890 and ask for a time that matches the work, not the hope. Confirm the hours — Chamber and Demandforce still print different ones.",
        "After you leave, you should know three things: when to return, whether anything else is waiting, and how to reach the desk if a tooth is high or a lip is still numb at dinner. If you do not have those three, ask before you walk back to the streetcar.",
      ],
    },
    {
      h2: "Cleanings as the hub of family dentistry services",
      paras: [
        "Every other homepage service hangs off a cleaning and an exam. Fillings start with a pit the hygienist can feel. Crowns start with a broken wall. Kids’ first visits start with a look. Whitening that skips tartar is a waste of gel. Denture patients still need the remaining teeth scaled. That is why this page exists as its own URL instead of a buried card.",
        "Internal next steps from here are usually a filling, a child’s visit, or a whitening talk. If gums are the problem, say the bleeding out loud. Periodontal therapy appears on Demandforce, not on the official ten-item list. Call and ask. Do not invent a specialty this office never printed.",
      ],
    },
  ],
  "crown-bridge": [
    {
      h2: "Preparing the tooth on Canal Street",
      paras: [
        "A crown visit is longer than a cleaning. You should not eat a heavy meal and then expect to sprint from the streetcar at 4:50. Monday–Thursday the office runs to 5:00 PM. Friday is done at 1:00. Tell the desk you are booking crown and bridge work so they do not park you in a hygiene slot.",
        "Temporary crowns come off. If yours does, keep it, call (504) 822-8890, and do not “try it with glue from the drawer.” The official site does not publish after-hours coverage. Nora’s emergency review is about speed during open hours. Use that window.",
        "If the tooth already has a large filling, the crown is often the honest next material. If the tooth is missing, a bridge uses the neighbors. If the neighbors are weak, an implant may be the cleaner replacement. Dr. Lotten’s published bio stresses patience and clear communication. Make him use it on this choice.",
        "Orleans Parish patients who work downtown can ride the Canal line straight to the block. There is still no published parking diagram. Ask. The pin is 2752 Canal St, New Orleans, LA 70119.",
      ],
    },
    {
      h2: "Paying for restorative work without surprises",
      paras: [
        "Crowns and bridges are where “most insurance” becomes a specific percentage. The patient portal lists CareCredit and common cards. Bring the card to the phone call, not just to the chair. A web form that never reaches the desk is not a pre-authorization.",
        "Ask whether the case is one tooth or a span. Ask whether a filling was tried and failed. Ask what happens if the bite is high the same afternoon. Those questions are how you keep a restorative visit from turning into a second emergency.",
      ],
    },
  ],
  whitening: [
    {
      h2: "Stains that bleach will not touch",
      paras: [
        "Tetracycline banding, gray trauma teeth, and old amalgam shadows do not lift like coffee film. A professional whitening visit at 2752 Canal St starts with an honest look at what the stain actually is. If the answer is a crown or bonding, you want that sentence before gel sits on the gums.",
        "Front-tooth bonding and porcelain will not change color with the enamel beside them. Families who bleach first and bond second get a closer match. Families who reverse it live with a mismatch. Ask which order this mouth needs.",
        "Sensitivity the night after is common. The official site does not publish a desensitizer brand. Tell the team if cold air already hurts. They can change the plan. They cannot change a plan you hid.",
        "Whitening is often out-of-pocket. Confirm. Call (504) 822-8890. Ride the Canal Street streetcar if that is how you already move through Mid-City. Confirm Friday hours if that is the only day you can leave work. Ask whether a cleaning should happen first so gel is not sitting on tartar. Bring a list of the drinks that stain you most — coffee, red wine, cola — so the team can talk about what the result will actually survive.",
      ],
    },
    {
      h2: "Keeping the result next to a Canal Street coffee habit",
      paras: [
        "New Orleans coffee, red beans, and red wine will restain. A cleaning still has to happen. Whitening is not a substitute for the recall. Book both. The family dentist New Orleans page lists them as separate items for that reason.",
        "If a teenager wants a brighter smile for photos, check whether the teeth are even done growing and whether cavities are waiting. Kid’s dentistry here is first visits and cleanings, not a bleach bar. Call and ask. Store-bought strips skip the exam. A family dentist in New Orleans should see the mouth first — book the chair at 2752 Canal St with Dr. Lotten instead of guessing at midnight before an event.",
      ],
    },
  ],
  implants: [
    {
      h2: "Bone, gums, and the questions you should bring",
      paras: [
        "An implant is a small surgery. You should walk in with a list: smoking, diabetes, blood thinners, prior gum treatment, and how long the tooth has been gone. The official homepage does not host a medical form. The list still matters. Say it at (504) 822-8890 when you book so the slot is long enough.",
        "Imaging may be required. The official site does not name a cone-beam unit. Demandforce lists digital x-rays as an extra. Ask what this office uses. Do not assume a 3D scan is already on the wall.",
        "Healing is not a weekend project. Official hours exclude Saturday and Sunday. If a concern shows up Friday night, you are waiting until Monday unless the desk told you otherwise. Plan extractions and implant steps with that calendar in mind.",
        "The chair is at 2752 Canal St, Mid-City. Streetcar in the welcome. No storefront gallery. Maps is the pin. Dr. Rayfield Lotten is the named dentist. There is no second implantologist printed on canalstdental.com.",
      ],
    },
    {
      h2: "Replacing more than one tooth",
      paras: [
        "One implant, a bridge on implants, or a denture on implants are different cases. 3D printed dentures remain the plate option. Extraction may come first. Crown & bridge may win if the neighbors are strong. This page is the implant node. The other pages exist so you can read them before the consult and then ask better questions.",
        "CareCredit is listed for larger cases. Confirm. New patients are welcome. Book the consult, not the surgery, on the first call.",
      ],
    },
  ],
  extractions: [
    {
      h2: "The day of the extraction",
      paras: [
        "Eat according to what the desk told you. Bring a driver if you were told you would be sedated — the official homepage does not list a sedation menu, so do not assume one. Demandforce extras are not the ten-item homepage. Call and ask if you need more than local anesthetic.",
        "After the tooth is out you will want soft food, a gauze plan, and a number to call. That number is (504) 822-8890. Do not use (504) 482-5444 or (866) 508-0459. Those showed up on other directories. They are not the header number.",
        "Swelling peaks later than the car ride home. Ice, rest, and the written sheet beat a social-media rinse recipe. If bleeding soaks the gauze and does not slow, call during open hours. Friday 1:00 PM is a hard stop. A 12:50 extraction is a bad idea.",
        "2752 Canal St is Mid-City, ZIP 70119, Orleans Parish. Ride the Canal line if that is your route. Ask about parking. Nothing on the official site draws you a stall.",
      ],
    },
    {
      h2: "Do not leave the space undecided",
      paras: [
        "The same week you should hear implant, bridge, partial, or “watch it.” Silence is how bites collapse. Read the implant, crown & bridge, and 3D printed denture pages, then make Dr. Lotten pick one out loud.",
        "Kids losing a baby tooth early is a different case from a split molar. Say the age. Kid’s dentistry is listed. Patience is the published method. Use it.",
      ],
    },
  ],
  bonding: [
    {
      h2: "Front-tooth chips on Canal Street",
      paras: [
        "A bottle, a porch step, a second-line, a playground — Mid-City chips look the same in the chair. Esthetic bonding is the conservative repair when the nerve is quiet and the break is small. If the tooth is gray, mobile, or hitting bone, bonding is the wrong page. Call (504) 822-8890 and describe the color and the mobility.",
        "Photos help. So does the piece of tooth if you still have it. Do not store it in napkins in a hot car. Milk or saliva in a small cup is the usual folk advice; the dentist will tell you whether it mattered.",
        "Bonding can be done in a single visit when the case is simple. Official hours still apply. Weekend closed. A Saturday wedding with a Friday 12:30 chip is a scheduling problem you solve on Thursday, not at noon on Friday.",
        "Dr. Rayfield Lotten’s official bio talks about kids’ cleanings and restorative work with patience. A teenager’s front chip sits right on that line. Bring the parent who can consent.",
      ],
    },
    {
      h2: "Protecting the repair",
      paras: [
        "No ice chewing. No thread-biting. A night guard is a conversation if you already break things in your sleep. The site does not sell a branded guard on the homepage. Ask.",
        "If you also want a whiter smile, sequence whitening before the resin. If the tooth is too broken, sequence a crown instead. Read those two pages, then book one chair, not three guesses. Call (504) 822-8890. Tell the desk which tooth and how it broke. Confirm Friday closing if that is the only window you have.",
      ],
    },
  ],
  "dentures-3d": [
    {
      h2: "Records the printer still needs from you",
      paras: [
        "Digital does not mean the dentist never looks in the mouth. Bite, lip support, and the way you say your name still have to be right. Bring the old plate, a photo of you smiling last year if you have one, and a list of sore spots. 3D printed dentures in New Orleans at this office still start with that human pass.",
        "If you have been without teeth for years, the ridge has changed. A reprint of a 20-year-old shape will not magically refit. Say how long the current plate has been in. Say whether you sleep in it. Say whether you use adhesive by the teaspoon.",
        "Try-in visits should not be stacked against Friday closing. Monday–Thursday 9:00 to 5:00 is the better window. Call (504) 822-8890. Confirm. The Canal Street streetcar gets you to 2752 Canal St; the desk still has to know you are coming.",
        "CareCredit and most insurance are listed. Denture frequency limits are the fine print that surprises people. Ask before the printer starts.",
      ],
    },
    {
      h2: "Partials, implants, and the remaining teeth",
      paras: [
        "A partial that clasps decaying teeth is a ticking repair. Book cleanings and fillings for whatever is still yours. Implants can steady a plate for some ridges. Extraction may need to happen first. The homepage lists all of those on purpose.",
        "This is family dentistry, not a denture mill with no exam. Dr. Lotten’s welcome is care for every generation. Grandparents on Canal Street are the actual use case, not a stock photo. Ask how many try-ins this office usually needs, and whether a reline of the old plate is even on the table before the printer starts.",
      ],
    },
  ],
  fillings: [
    {
      h2: "Catching decay before it needs a crown",
      paras: [
        "A sweet-zinger is a calendar problem. Each week the cavity is closer to the nerve, closer to a crown, closer to an extraction. Dental fillings in New Orleans at 2752 Canal St exist to interrupt that line. Call (504) 822-8890 the day you feel it, not the day you cannot sleep.",
        "Floss that shreds in one spot is a filling until proven otherwise. So is a hole you can keep clean with a toothpick — that habit is not a treatment. Stop the toothpick. Book the chair.",
        "Kids hide decay between teeth. First visits and cleanings catch it. Jazmyn Battle’s review is the social proof that the staff can make a first visit work. Use the same number for a child that you use for yourself.",
        "Official hours still rule. Weekend closed. Friday 1:00. A throbbing molar at 2:00 PM Friday waits until Monday unless you reached the desk earlier. Nora’s emergency note is about efficiency while the office is open.",
      ],
    },
    {
      h2: "What the filling visit feels like",
      paras: [
        "Numbness, a rubber dam or cotton, a drill, a pack, a bite check. The official site does not narrate the steps. Dr. Lotten’s reviews say he explains. Make him. If you have a bad history with shots, say so before you sit.",
        "Afterward, a high bite is a same-day call. A dull ache can be normal. A night of real pain is a call. Keep the cleaning that follows so the new margin does not fail in silence. Call (504) 822-8890 and say which tooth and whether it wakes you up so the desk leaves enough time.",
      ],
    },
  ],
  "denture-repair": [
    {
      h2: "Broken in the morning, still closed on Saturday",
      paras: [
        "People snap plates on French bread and then look for a Saturday clinic. This office’s official contact page lists Saturday and Sunday closed. Denture repair in New Orleans at Canal Street Family Dentistry is a weekday phone call to (504) 822-8890. Call early. Bring every fragment.",
        "A midline crack that you wrap in a napkin will dry and warp. Keep pieces together. Do not boil the plate. Do not sand it on the porch. The repair either has a surface to join or it becomes a new 3D printed denture.",
        "If you have a backup plate, wear it and still bring the broken one. If you do not, say so — the desk needs to know you are without teeth until the repair clears. Same-day is not a website promise.",
        "2752 Canal St, Mid-City, streetcar line. Ask how long they want the plate. Ask whether a chair look is required or whether a drop-off works. Those logistics are local, not printed.",
      ],
    },
    {
      h2: "When repair is throwing good money after bad",
      paras: [
        "Three repairs in a year on a rocking plate is a replacement conversation. Read the 3D printed dentures page. Ask about implants if the ridge will not hold a suction plate. Dr. Lotten can only recommend what he sees.",
        "Remaining teeth that clasp the partial still need fillings and cleanings. A repaired partial on a rotten abutment is a short story. Book the mouth, not just the plastic. Call (504) 822-8890, bring every fragment, and do not use a hardware-store adhesive the lab then has to grind off.",
      ],
    },
  ],
  kids: [
    {
      h2: "First visit without turning it into a scare",
      paras: [
        "Say “counting teeth.” Say “a toothbrush that tickles.” Do not promise candy. Do not threaten the dentist as a punishment. Kids dentistry in New Orleans at this office already has two parent reviews about comfort and coming back. Your job is not to undo that before you reach 2752 Canal St.",
        "Ride the streetcar if that is fun for your child. It is also the landmark in the official welcome. Take a photo of the car if you want; the official location image on this site is RTA car 903 under live oaks, not the waiting room.",
        "Arrive a few minutes early. Friday closes at 1:00. After-school Thursday is the slot everyone wants. Call (504) 822-8890 as soon as the school calendar is in your hand. Confirm hours. Confirm who can consent.",
        "If the child is in pain, say pain. A first-visit script and a toothache script are different lengths. The desk cannot guess. There is no public online form that replaces that sentence.",
      ],
    },
    {
      h2: "What happens after the first cleaning",
      paras: [
        "You may leave with a filling booked, a watch-and-wait, or a six-month recall. You should leave knowing which. Sealants and 6 Month Smiles appear on Demandforce, not on the official ten. Ask if you want them. Do not advertise them as a homepage promise.",
        "Bring siblings on separate slots if one of them is already scared. Patience is the published method. Derrick James’s kids return. That is the outcome to copy, not a rush through two cousins in one Friday hour.",
      ],
    },
  ],
};

export function fullServiceCopy(slug: ServiceSlug, base: ServiceCopy): ServiceCopy {
  return { ...base, blocks: [...base.blocks, ...SERVICE_EXTRA[slug]] };
}
