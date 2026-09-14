import {
  DESCRIPTION,
  DOCTOR,
  MAPS_HREF,
  NAP,
  PAGE_SEO,
  REVIEWS,
  SERVICES,
  SITE_NAME,
  SITE_URL,
  TITLE,
  WELCOME,
  getService,
  type ServiceSlug,
} from "@/lib/canal";
import { SERVICE_COPY } from "@/lib/service-pages";

const orgId = `${SITE_URL}/#organization`;
const bizId = `${SITE_URL}/#dentist`;
const personId = `${SITE_URL}/#person`;
const siteId = `${SITE_URL}/#website`;
const logoId = `${SITE_URL}/#logo`;

type PageKey = "home" | "about" | "services" | "contact" | "legal" | "service";

export function seoGraph(page: PageKey = "home", serviceSlug?: ServiceSlug) {
  const service = serviceSlug ? getService(serviceSlug) : undefined;

  const pageMeta: Record<
    Exclude<PageKey, "service">,
    { id: string; url: string; name: string; description: string }
  > = {
    home: { id: `${SITE_URL}/#webpage`, url: `${SITE_URL}/`, name: TITLE, description: DESCRIPTION },
    about: {
      id: `${SITE_URL}/about#webpage`,
      url: `${SITE_URL}/about`,
      name: PAGE_SEO.about.title,
      description: PAGE_SEO.about.description,
    },
    services: {
      id: `${SITE_URL}/services#webpage`,
      url: `${SITE_URL}/services`,
      name: PAGE_SEO.services.title,
      description: PAGE_SEO.services.description,
    },
    contact: {
      id: `${SITE_URL}/contact#webpage`,
      url: `${SITE_URL}/contact`,
      name: PAGE_SEO.contact.title,
      description: PAGE_SEO.contact.description,
    },
    legal: {
      id: `${SITE_URL}/privacy#webpage`,
      url: `${SITE_URL}/privacy`,
      name: "Privacy Policy | Canal Street Family Dentistry",
      description: "Privacy policy for Canal Street Family Dentistry.",
    },
  };

  const pageNode =
    page === "service" && service
      ? {
          id: `${SITE_URL}/services/${service.slug}#webpage`,
          url: `${SITE_URL}/services/${service.slug}`,
          name: service.seoTitle,
          description: service.seoDescription,
        }
      : pageMeta[page === "service" ? "services" : page];

  const crumbs =
    page === "home"
      ? null
      : page === "service" && service
        ? [
            { name: "Home", item: `${SITE_URL}/` },
            { name: "Services", item: `${SITE_URL}/services` },
            { name: service.title, item: `${SITE_URL}/services/${service.slug}` },
          ]
        : [
            { name: "Home", item: `${SITE_URL}/` },
            {
              name:
                page === "about"
                  ? "About"
                  : page === "services"
                    ? "Services"
                    : page === "contact"
                      ? "Contact"
                      : "Legal",
              item: pageNode.url,
            },
          ];

  const serviceFaqs = service ? SERVICE_COPY[service.slug].faqs : [];

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": orgId,
        name: NAP.name,
        url: `${SITE_URL}/`,
        logo: {
          "@type": "ImageObject",
          "@id": logoId,
          url: `${SITE_URL}/canal/logo.png`,
          width: 640,
          height: 360,
        },
        telephone: NAP.phoneE164,
      },
      {
        "@type": ["Dentist", "LocalBusiness", "MedicalBusiness"],
        "@id": bizId,
        name: NAP.name,
        parentOrganization: { "@id": orgId },
        url: `${SITE_URL}/`,
        telephone: NAP.phoneE164,
        image: [
          `${SITE_URL}/canal/logo.png`,
          `${SITE_URL}/canal/lotten.jpg`,
          `${SITE_URL}/canal/streetcar.jpg`,
        ],
        address: {
          "@type": "PostalAddress",
          streetAddress: NAP.street,
          addressLocality: NAP.city,
          addressRegion: NAP.region,
          postalCode: NAP.postal,
          addressCountry: NAP.country,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: NAP.lat,
          longitude: NAP.lng,
        },
        areaServed: [
          { "@type": "City", name: "New Orleans" },
          { "@type": "AdministrativeArea", name: "Orleans Parish" },
          { "@type": "Place", name: "Mid-City" },
        ],
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
            opens: "09:00",
            closes: "17:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: "Friday",
            opens: "09:00",
            closes: "13:00",
          },
        ],
        employee: { "@id": personId },
        hasMap: MAPS_HREF,
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Family dentistry services",
          itemListElement: SERVICES.map((s) => ({
            "@type": "Offer",
            itemOffered: { "@id": `${SITE_URL}/services/${s.slug}#service` },
          })),
        },
        review: REVIEWS.map((r) => ({
          "@type": "Review",
          reviewBody: r.text,
          author: { "@type": "Person", name: r.name },
        })),
        description: WELCOME,
      },
      {
        "@type": "Person",
        "@id": personId,
        name: DOCTOR.name,
        jobTitle: DOCTOR.credential,
        worksFor: { "@id": orgId },
        image: `${SITE_URL}/canal/lotten.jpg`,
        knowsAbout: SERVICES.map((s) => s.title),
      },
      {
        "@type": "WebSite",
        "@id": siteId,
        url: `${SITE_URL}/`,
        name: SITE_NAME,
        publisher: { "@id": orgId },
        inLanguage: "en-US",
      },
      {
        "@type": "WebPage",
        "@id": pageNode.id,
        url: pageNode.url,
        name: pageNode.name,
        description: pageNode.description,
        isPartOf: { "@id": siteId },
        about: { "@id": bizId },
        inLanguage: "en-US",
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: `${SITE_URL}/canal/streetcar.jpg`,
        },
        ...(crumbs ? { breadcrumb: { "@id": `${pageNode.url}#breadcrumb` } } : {}),
      },
      ...SERVICES.map((s) => ({
        "@type": "Service",
        "@id": `${SITE_URL}/services/${s.slug}#service`,
        serviceType: s.title,
        name: `${s.title} in New Orleans`,
        description: s.blurb,
        provider: { "@id": bizId },
        areaServed: { "@type": "City", name: "New Orleans" },
        url: `${SITE_URL}/services/${s.slug}`,
      })),
      ...(crumbs
        ? [
            {
              "@type": "BreadcrumbList",
              "@id": `${pageNode.url}#breadcrumb`,
              itemListElement: crumbs.map((c, i) => ({
                "@type": "ListItem",
                position: i + 1,
                name: c.name,
                item: c.item,
              })),
            },
          ]
        : []),
      ...(page === "service" && service && serviceFaqs.length
        ? [
            {
              "@type": "FAQPage",
              "@id": `${SITE_URL}/services/${service.slug}#faq`,
              mainEntity: serviceFaqs.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            },
          ]
        : []),
    ],
  };
}
