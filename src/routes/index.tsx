import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Clock, MapPin, Phone, FirstAid, CreditCard, Tooth, Smiley, Pulse } from "@phosphor-icons/react";
import { HomeHero } from "@/components/home-hero";
import { Reveal } from "@/components/reveal";
import { SiteShell } from "@/components/site-shell";
import { LeadForm } from "@/components/lead-form";
import { FaqList } from "@/components/faq-list";
import { InternalLinks } from "@/components/internal-links";
import { ReviewGrid } from "@/components/review-grid";
import { BeforeAfter } from "@/components/before-after";
import { Tilt3D } from "@/components/tilt-3d";
import { seoHead } from "@/lib/seo";
import {
  ADDRESS_LINE,
  AREAS,
  CLOSING,
  DOCTORS,
  FAQS,
  GOOGLE_REVIEWS,
  HOURS,
  MAPS_HREF,
  MAPS_EMBED,
  MEMBERSHIPS,
  NAP,
  OFFICE_PHOTOS,
  REGISTER_HREF,
  REGISTER_STEPS,
  SERVICES,
  SPECIALS,
} from "@/lib/losc";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => seoHead(),
});

function Home() {
  return (
    <SiteShell active="Home">
      <HomeHero />
      <ServicesBlock />
      <OfficePhotos />
      <ResultsBlock />
      <DoctorsBlock />
      <SpecialsBlock />
      <ReviewsBlock />
      <VisitBlock />
      <RegisterBlock />
      <FaqBlock />
      <InternalLinks />
      <CloseBlock />
    </SiteShell>
  );
}

function ServicesBlock() {
  return (
    <section className="bg-paper py-20 lg:py-28" id="services">
      <Reveal variant="section">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mx-auto max-w-2xl text-center">
            <p className="kicker">Care</p>
            <h2 className="mt-3 text-balance font-display text-3xl font-semibold text-navy sm:text-5xl">
              Family dentistry in Metairie
            </h2>
            <p className="mt-4 text-pretty text-muted">
              Preventive, cosmetic, restorative, periodontal, orthodontics, and anxiety-free visits at 1304 Clearview
              Pkwy.
            </p>
          </div>
          <Reveal stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <a key={s.slug} id={s.slug} href="/#register" className={`losc-svc pos-${s.slug} group block aspect-[3/4]`}>
                <img src={s.image} alt={`${s.title} dentistry in Metairie`} width={s.width} height={s.height} loading="lazy" />
                <span className="losc-svc-shade" />
                <span className="losc-cap">
                  <span className="losc-num text-primary">{s.num}</span>
                  <h3 className="mt-1 font-display text-2xl font-semibold text-snow">{s.title}</h3>
                  <p className="mt-2 text-sm text-pretty">{s.blurb}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                    Book <ArrowRight className="size-3.5" />
                  </span>
                </span>
              </a>
            ))}
          </Reveal>
        </div>
      </Reveal>
    </section>
  );
}

function OfficePhotos() {
  return (
    <section className="bg-navy-deep py-16 text-snow sm:py-20" id="gallery">
      <Reveal variant="section">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="kicker text-primary">Inside the office</p>
              <h2 className="mt-3 max-w-lg text-balance font-display text-3xl font-semibold text-snow sm:text-4xl">
                A family desk on Clearview
              </h2>
            </div>
            <a href="/#register" className="hs-btn hs-btn-ghost-light shrink-0">
              Book a visit
            </a>
          </div>
          <Reveal stagger className="losc-bento mt-10">
            {OFFICE_PHOTOS.map((p) => (
              <a key={p.src} href={p.href} className={`losc-bento-card group ${p.featured ? "is-hero" : ""}`}>
                <img src={p.src} alt={p.alt} width={p.width} height={p.height} loading="lazy" />
                <span className="losc-bento-shade" />
                <span className="losc-bento-copy">
                  <span className="kicker text-primary">{p.label}</span>
                  <span className="mt-1 block font-display text-2xl font-semibold leading-tight text-snow sm:text-[1.85rem]">
                    {p.title}
                  </span>
                  <span className="mt-2 block max-w-sm text-sm text-pretty text-snow/75">{p.fact}</span>
                </span>
              </a>
            ))}
          </Reveal>
        </div>
      </Reveal>
    </section>
  );
}

function ResultsBlock() {
  return (
    <section id="results" className="bg-paper py-20 lg:py-28">
      <Reveal variant="section">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mx-auto max-w-2xl text-center">
            <p className="kicker">Results</p>
            <h2 className="mt-3 text-balance font-display text-3xl font-semibold text-navy sm:text-5xl">
              Before and after
            </h2>
            <p className="mt-4 text-pretty text-muted">
              Illustrative whitening smile. These are not photos of Metairie Dental Centre patients.
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-4xl">
            <BeforeAfter />
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function DoctorsBlock() {
  return (
    <section id="doctors" className="bg-mist py-20 lg:py-28">
      <Reveal variant="section">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mx-auto max-w-2xl text-center">
            <p className="kicker">The dentists</p>
            <h2 className="mt-3 text-balance font-display text-3xl font-semibold text-navy sm:text-5xl">
              Meet the Metairie team
            </h2>
            <p className="mt-4 text-pretty text-muted">
              Dr. Thomas Murphy and Dr. Bonnie Murphy. Family dentistry at 1304 Clearview Pkwy.
            </p>
          </div>
          <Reveal stagger className="mdc-docs">
            {DOCTORS.map((d) => (
              <article key={d.slug} className="mdc-doc">
                <div className="mdc-doc-photo">
                  <img src={d.image} alt={d.name} width={1152} height={1728} loading="lazy" />
                </div>
                <div className="mdc-doc-copy">
                  <p className="kicker">{d.role}</p>
                  <h3>{d.name}</h3>
                  <p>{d.bio}</p>
                  <a href="/#register">Request a visit</a>
                </div>
              </article>
            ))}
          </Reveal>
        </div>
      </Reveal>
    </section>
  );
}

function SpecialsBlock() {
  return (
    <section id="specials" className="bg-paper py-20 lg:py-28">
      <Reveal variant="section">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mx-auto max-w-2xl text-center">
            <p className="kicker">Published offers</p>
            <h2 className="mt-3 text-balance font-display text-3xl font-semibold text-navy sm:text-5xl">
              New patient specials
            </h2>
            <p className="mt-4 text-pretty text-muted">
              From the Metairie Dental Centre offers. Fees are minimums and cannot be combined. Confirm with the desk.
            </p>
          </div>
          <Reveal stagger className="mdc-offers">
            {SPECIALS.map((s) => (
              <Tilt3D key={s.name} max={s.featured ? 12 : 9} className={`mdc-offer card-3d${s.featured ? " is-featured" : ""}`}>
                <p className="mdc-offer-name">{s.name}</p>
                <p className="mdc-offer-kicker">{s.kicker}</p>
                <p className="mdc-offer-price">{s.price}</p>
                <p className="mdc-offer-text">{s.text}</p>
                {s.image ? (
                  <img src={s.image} alt="Philips Sonicare Airfloss" width={1408} height={1408} loading="lazy" />
                ) : null}
                <a href="/#register" className="mdc-offer-btn">
                  View details
                </a>
              </Tilt3D>
            ))}
          </Reveal>
          <div className="mt-10 flex justify-center">
            <a href="https://metairiedental.com/dental-specials/" className="hs-btn mdc-more-btn" rel="noreferrer" target="_blank">
              View more offers
              <ArrowRight className="size-4" />
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function ReviewsBlock() {
  return (
    <section id="reviews" className="bg-paper py-20 lg:py-28">
      <Reveal variant="section">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mx-auto max-w-2xl text-center">
            <p className="kicker">Patient reviews</p>
            <h2 className="mt-3 text-balance font-display text-3xl font-semibold text-navy sm:text-5xl">
              Words from this Metairie office
            </h2>
            <p className="mt-4 text-pretty text-muted">
              Quotes published on metairiedental.com/patient-reviews. Google listing: {GOOGLE_REVIEWS.meta}.
            </p>
          </div>
          <div className="mt-10">
            <ReviewGrid />
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function VisitBlock() {
  return (
    <section id="office" className="losc-visit relative overflow-hidden bg-paper py-20 lg:py-28">
      <div className="losc-floats" aria-hidden="true">
        <Tooth className="losc-float f1" weight="duotone" />
        <Smiley className="losc-float f2" weight="duotone" />
        <Pulse className="losc-float f3" weight="duotone" />
        <FirstAid className="losc-float f5" weight="duotone" />
      </div>
      <Reveal variant="section">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 lg:grid-cols-2">
          <div className="losc-panel border border-line bg-mist p-8 sm:p-10">
            <p className="kicker">Visit</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-navy sm:text-4xl">1304 Clearview Pkwy</h2>
            <p className="mt-4 flex items-start gap-2 text-muted">
              <MapPin className="mt-1 size-5 shrink-0 text-primary-deep" weight="fill" />
              {ADDRESS_LINE}
            </p>
            <p className="mt-3 text-sm text-muted">Areas named on this page: {AREAS.join(" · ")}</p>
            <ul className="mt-8 space-y-0 text-sm">
              {HOURS.map((h) => (
                <li key={h.days} className="flex items-center justify-between gap-4 border-b border-line py-3">
                  <span className="inline-flex items-center gap-2 text-muted">
                    <Clock className="size-4 text-primary-deep" />
                    {h.days}
                  </span>
                  <span className="font-semibold text-navy">{h.time}</span>
                </li>
              ))}
            </ul>
            <div id="insurance" className="mt-8 grid gap-3">
              <div className="losc-tile">
                <FirstAid className="size-5 text-primary-deep" />
                <p className="mt-2 text-sm font-semibold text-navy">Preferred providers</p>
                <p className="mt-1 text-xs text-muted">{MEMBERSHIPS.slice(0, 6).join(" · ")}</p>
              </div>
              <div className="losc-tile">
                <CreditCard className="size-5 text-primary-deep" />
                <p className="mt-2 text-sm font-semibold text-navy">Financing</p>
                <p className="mt-1 text-xs text-muted">No-interest and long-term plans, as published</p>
              </div>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={NAP.phoneHref} className="hs-btn hs-btn-primary">
                <Phone className="size-4" weight="fill" />
                {NAP.phone}
              </a>
              <a href={MAPS_HREF} className="hs-btn hs-btn-ghost" rel="noreferrer" target="_blank">
                Directions
              </a>
            </div>
          </div>
          <div className="losc-map-card">
            <iframe
              title={`Google Map of ${ADDRESS_LINE}`}
              src={MAPS_EMBED}
              className="losc-map-frame"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <a href={MAPS_HREF} className="losc-map-open" rel="noreferrer" target="_blank">
              <span>
                <span className="kicker text-primary">Metairie</span>
                <span className="mt-1 block font-display text-xl font-semibold text-snow">Jefferson Parish</span>
              </span>
              <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary">
                Open in Google Maps <ArrowRight className="size-4" />
              </span>
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function RegisterBlock() {
  return (
    <section id="register" className="bg-navy py-20 text-snow lg:py-28">
      <Reveal variant="section">
        <div className="mx-auto grid max-w-6xl items-start gap-10 px-4 lg:grid-cols-2">
          <div>
            <p className="kicker text-primary">New patients</p>
            <h2 className="mt-3 text-balance font-display text-3xl font-semibold text-snow sm:text-5xl">
              Request a time. Confirm by phone.
            </h2>
            <p className="mt-5 max-w-sm text-pretty text-snow/75">
              The form is a callback request. Call {NAP.phone} so the desk can confirm with the dentist in Metairie.
            </p>
            <ol className="mt-8 space-y-4">
              {REGISTER_STEPS.map((step, i) => (
                <li key={step.name} className="flex gap-4">
                  <span className="losc-num text-primary">{String(i + 1).padStart(2, "0")}</span>
                  <span>
                    <span className="block font-semibold text-snow">{step.name}</span>
                    <span className="mt-1 block text-sm text-snow/70">{step.text}</span>
                  </span>
                </li>
              ))}
            </ol>
            <a href={REGISTER_HREF} className="hs-btn hs-btn-ghost-light mt-8" rel="noreferrer" target="_blank">
              Official contact page
            </a>
          </div>
          <div className="losc-panel bg-paper p-6 text-ink shadow-lift sm:p-8">
            <LeadForm variant="appointment" />
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function FaqBlock() {
  return (
    <section id="faq" className="bg-paper py-20 lg:py-28">
      <Reveal variant="section">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="kicker">FAQ</p>
            <h2 className="mt-3 text-balance font-display text-3xl font-semibold text-navy sm:text-5xl">
              Frequently asked questions
            </h2>
            <p className="mt-4 max-w-sm text-muted">Hours, cleanings, sedation, and insurance — from the official desk.</p>
          </div>
          <FaqList items={FAQS} />
        </div>
      </Reveal>
    </section>
  );
}

function CloseBlock() {
  return (
    <section className="border-t border-line bg-paper py-16" id="schedule">
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="grid grid-cols-2 gap-3">
          <img
            src="/mdc/thomas.webp"
            alt="Dr. Thomas Murphy, dentist in Metairie"
            className="h-56 w-full rounded-[var(--radius-card)] object-cover object-[50%_18%] sm:h-72"
            width={700}
            height={900}
            loading="lazy"
          />
          <img
            src="/mdc/bonnie.webp"
            alt="Dr. Bonnie Murphy, dentist in Metairie"
            className="h-56 w-full rounded-[var(--radius-card)] object-cover object-[50%_18%] sm:h-72"
            width={700}
            height={900}
            loading="lazy"
          />
        </div>
        <div>
          <h2 className="font-display text-2xl font-semibold text-navy sm:text-3xl">Ready to schedule</h2>
          <p className="mt-4 text-pretty text-muted">{CLOSING}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={NAP.phoneHref} className="hs-btn hs-btn-primary">
              <Phone className="size-4" weight="fill" />
              {NAP.phone}
            </a>
            <a href="/#register" className="hs-btn hs-btn-ghost">
              Appointments
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
