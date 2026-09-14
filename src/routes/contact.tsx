import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone } from "@phosphor-icons/react";
import { LeadForm } from "@/components/lead-form";
import { PageBanner } from "@/components/page-banner";
import { Reveal } from "@/components/reveal";
import { SiteShell } from "@/components/site-shell";
import { ADDRESS_LINE, HOURS, MAPS_EMBED, NAP, PAGE_SEO } from "@/lib/happysmile";
import { toHome } from "@/lib/home-only";

export const Route = createFileRoute("/contact")({
  beforeLoad: () => toHome("book"),
  component: Contact,
  head: () => ({
    meta: [
      { title: PAGE_SEO.contact.title },
      { name: "description", content: PAGE_SEO.contact.description },
    ],
  }),
});

function Contact() {
  return (
    <SiteShell active="Contact">
      <PageBanner title="Contact Us" crumbs={[{ name: "Contact Us" }]} />
      <section className="bg-paper py-16">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 lg:grid-cols-2">
          <Reveal variant="flip">
            <p className="kicker">Get in Touch</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-navy">2752 Canal Street, Mid-City</h2>
            <p className="mt-5 text-muted">
              Your smile is our priority on Canal Street. Call (504) 822-8890 to book. There is no public online
              scheduler. A form is a callback request until the desk confirms the chair.
            </p>
            <ul className="mt-8 space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="mt-1 size-5 text-primary" weight="fill" />
                <span>{ADDRESS_LINE}</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-1 size-5 text-primary" weight="fill" />
                <a href={NAP.phoneHref} className="hover:text-primary">
                  {NAP.phone}
                </a>
              </li>
            </ul>
            <ul className="mt-8 space-y-2 text-sm">
              {HOURS.map((h) => (
                <li key={h.days} className="flex justify-between gap-4 border-b border-line py-2">
                  <span>{h.days}</span>
                  <span className="font-semibold text-navy">{h.time}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={80}>
            <div className="border border-line bg-snow p-6 shadow-card transition-shadow duration-200 hover:shadow-lift">
              <LeadForm variant="contact" />
            </div>
          </Reveal>
        </div>
        <Reveal delay={60}>
          <div className="map-cyan mx-auto mt-12 h-80 max-w-6xl overflow-hidden px-4">
            <iframe title={`Map of ${ADDRESS_LINE}`} src={MAPS_EMBED} className="h-full w-full border-0" loading="lazy" />
          </div>
        </Reveal>
      </section>
    </SiteShell>
  );
}
