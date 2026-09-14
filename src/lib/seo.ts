import {
  AREAS,
  DESCRIPTION,
  DOCTOR,
  FAQS,
  MAPS_HREF,
  NAP,
  REGISTER_HREF,
  REGISTER_STEPS,
  SERVICES,
  SITE_NAME,
  SITE_URL,
  TITLE,
} from "@/lib/losc";

const url = `${SITE_URL}/`;
const image = `${SITE_URL}/mdc/thomas.webp`;

export function seoHead() {
  return {
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "robots", content: "index,follow" },
      { name: "author", content: `${DOCTOR.name}, ${DOCTOR.credential}` },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_US" },
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: url },
      { property: "og:image", content: image },
      { property: "og:image:alt", content: "Dr. Thomas Murphy, family dentist in Metairie" },
      { property: "og:image:width", content: String(DOCTOR.imageWidth) },
      { property: "og:image:height", content: String(DOCTOR.imageHeight) },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: image },
      { name: "geo.region", content: "US-LA" },
      { name: "geo.placename", content: "Metairie" },
      { name: "geo.position", content: `${NAP.lat};${NAP.lng}` },
      { name: "ICBM", content: `${NAP.lat}, ${NAP.lng}` },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}

export function seoGraph() {
  const orgId = `${SITE_URL}/#organization`;
  const bizId = `${SITE_URL}/#localbusiness`;
  const siteId = `${SITE_URL}/#website`;
  const logoId = `${SITE_URL}/#logo`;
  const personId = `${SITE_URL}/#murphy`;
  const pageId = `${SITE_URL}/#webpage`;
  const faqId = `${SITE_URL}/#faq`;
  const howToId = `${SITE_URL}/#howto-register`;
  const heroId = `${SITE_URL}/#murphy-image`;
  const crumbId = `${SITE_URL}/#breadcrumb`;

  const postalAddress = {
    "@type": "PostalAddress",
    streetAddress: NAP.street,
    addressLocality: NAP.city,
    addressRegion: NAP.region,
    postalCode: NAP.postal,
    addressCountry: "US",
  };

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": orgId,
        name: SITE_NAME,
        url,
        logo: {
          "@type": "ImageObject",
          "@id": logoId,
          url: `${SITE_URL}/mdc/logo.webp`,
          contentUrl: `${SITE_URL}/mdc/logo.webp`,
          width: 258,
          height: 90,
        },
        image: { "@id": logoId },
        telephone: NAP.phoneE164,
        address: postalAddress,
        sameAs: [MAPS_HREF],
      },
      {
        "@type": ["Dentist", "MedicalClinic", "LocalBusiness"],
        "@id": bizId,
        name: SITE_NAME,
        parentOrganization: { "@id": orgId },
        url,
        telephone: NAP.phoneE164,
        image: [image, `${SITE_URL}/mdc/logo.webp`],
        address: postalAddress,
        geo: { "@type": "GeoCoordinates", latitude: NAP.lat, longitude: NAP.lng },
        hasMap: MAPS_HREF,
        medicalSpecialty: "https://schema.org/Dentistry",
        currenciesAccepted: "USD",
        paymentAccepted: "CareCredit, SmartCare, Alphaeon Credit",
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
            opens: "07:00",
            closes: "17:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: "Friday",
            opens: "08:00",
            closes: "15:00",
          },
        ],
        areaServed: AREAS.map((name) =>
          name.includes("Parish")
            ? { "@type": "AdministrativeArea", name }
            : { "@type": "City", name, containedInPlace: { "@type": "State", name: "Louisiana" } },
        ),
        founder: { "@id": personId },
        employee: { "@id": personId },
        sameAs: [MAPS_HREF],
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: NAP.phoneE164,
            contactType: "customer service",
            areaServed: "US",
            availableLanguage: "English",
          },
          {
            "@type": "ContactPoint",
            telephone: NAP.phoneE164,
            contactType: "customer support",
            name: "Front desk",
            availableLanguage: "English",
          },
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Family dentistry services",
          itemListElement: SERVICES.map((s) => ({
            "@type": "Offer",
            itemOffered: { "@id": `${SITE_URL}/#${s.slug}` },
          })),
        },
        availableService: SERVICES.map((s) => ({ "@id": `${SITE_URL}/#${s.slug}` })),
        potentialAction: {
          "@type": "ReserveAction",
          name: "Register as a patient",
          target: REGISTER_HREF,
        },
      },
      {
        "@type": "Person",
        "@id": personId,
        name: DOCTOR.name,
        jobTitle: DOCTOR.role,
        honorificSuffix: "DDS",
        url: `${SITE_URL}/#doctors`,
        worksFor: { "@id": orgId },
        image: { "@id": heroId },
        knowsAbout: [
          "Family dentistry",
          "Preventive dentistry",
          "Cosmetic dentistry",
          "Dental implants",
          "Invisalign",
          "Nitrous oxide sedation",
        ],
        alumniOf: [
          { "@type": "CollegeOrUniversity", name: "University of New Orleans" },
          { "@type": "CollegeOrUniversity", name: "LSU School of Dentistry" },
        ],
      },
      {
        "@type": "ImageObject",
        "@id": heroId,
        url: image,
        contentUrl: image,
        caption: "Dr. Thomas Murphy, family dentist in Metairie",
        width: DOCTOR.imageWidth,
        height: DOCTOR.imageHeight,
        inLanguage: "en-US",
      },
      {
        "@type": "WebSite",
        "@id": siteId,
        url,
        name: SITE_NAME,
        publisher: { "@id": orgId },
        inLanguage: "en-US",
        description: DESCRIPTION,
      },
      {
        "@type": "WebPage",
        "@id": pageId,
        url,
        name: TITLE,
        description: DESCRIPTION,
        isPartOf: { "@id": siteId },
        about: { "@id": bizId },
        mainEntity: { "@id": bizId },
        primaryImageOfPage: { "@id": heroId },
        breadcrumb: { "@id": crumbId },
        hasPart: [{ "@id": faqId }, { "@id": howToId }],
        inLanguage: "en-US",
      },
      ...SERVICES.map((s) => ({
        "@type": "Service",
        "@id": `${SITE_URL}/#${s.slug}`,
        serviceType: s.title,
        name: `${s.title} in Metairie`,
        description: s.blurb,
        provider: { "@id": bizId },
        areaServed: { "@type": "City", name: "Metairie" },
        url: `${SITE_URL}/#${s.slug}`,
      })),
      {
        "@type": "FAQPage",
        "@id": faqId,
        url: `${SITE_URL}/#faq`,
        isPartOf: { "@id": pageId },
        mainEntity: FAQS.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
      {
        "@type": "HowTo",
        "@id": howToId,
        name: "How to request an appointment with Metairie Dental Centre",
        description: "Online registration is a callback request. The Metairie desk confirms appointments by phone.",
        url: `${SITE_URL}/#register`,
        step: REGISTER_STEPS.map((step, i) => ({
          "@type": "HowToStep",
          position: i + 1,
          name: step.name,
          text: step.text,
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": crumbId,
        itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: url }],
      },
    ],
  };
}
