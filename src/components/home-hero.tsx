import { Phone } from "@phosphor-icons/react";
import { GoogleBadge } from "@/components/google-badge";
import { HeroVideo } from "@/components/hero-video";
import { HERO_LEAD, HOURS_SHORT, NAP } from "@/lib/losc";

export function HomeHero() {
  return (
    <section id="top" className="losc-hero-stage relative isolate overflow-hidden">
      <div className="sda-hero-media absolute inset-0">
        <HeroVideo />
        <div className="losc-hero-veil pointer-events-none absolute inset-0" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-8 px-4 pb-24 pt-24 sm:min-h-[100svh] sm:gap-10 sm:pb-16 sm:pt-28 lg:grid-cols-[1.05fr_0.9fr] lg:gap-16 lg:pb-20 lg:pt-32">
        <div className="losc-hero-copy text-snow">
          <p className="hero-in hero-in-1 kicker text-primary">Metairie Dental Centre</p>
          <h1 className="hero-in hero-in-2 mt-4 max-w-[14ch] text-balance font-display text-[2.15rem] font-semibold leading-[1.08] tracking-tight text-snow sm:text-5xl lg:text-[3.55rem]">
            Family dentist in Metairie
          </h1>
          <p className="hero-in hero-in-3 mt-5 max-w-md text-pretty text-[1.05rem] leading-relaxed text-snow/92">{HERO_LEAD}</p>
          <div className="hero-in hero-in-4 mt-7 flex flex-wrap items-center gap-3">
            <a href={NAP.phoneHref} className="hs-btn hs-btn-primary">
              <Phone className="size-4" weight="fill" />
              {NAP.phone}
            </a>
            <a href="/#register" className="hs-btn hs-btn-ghost-light">
              Appointments
            </a>
            <GoogleBadge variant="hero" />
          </div>
          <div className="hero-in hero-in-5 mt-6 flex flex-wrap gap-2">
            <span className="losc-chip losc-chip-on-video">Dr. Thomas Murphy</span>
            <span className="losc-chip losc-chip-on-video">Dr. Bonnie Murphy</span>
            <span className="losc-chip losc-chip-on-video">{HOURS_SHORT}</span>
            <span className="losc-chip losc-chip-on-video">Family-block visits</span>
          </div>
        </div>

        <div className="hero-photo-in losc-hero-photo">
          <img
            src="/mdc/thomas.webp"
            alt="Dr. Thomas Murphy, family dentist in Metairie"
            width={1152}
            height={1728}
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-deep/85 via-navy-deep/20 to-transparent px-6 pb-6 pt-16">
            <p className="font-display text-xl text-snow">Dr. Thomas Murphy</p>
            <p className="mt-1 text-sm text-snow/80">DDS · LSU School of Dentistry · 25+ years in Metairie</p>
          </div>
        </div>
      </div>
    </section>
  );
}
