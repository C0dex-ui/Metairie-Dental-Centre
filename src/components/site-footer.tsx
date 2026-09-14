import { ArrowRight, Clock, MapPin, Phone } from "@phosphor-icons/react";
import {
  ADDRESS_LINE,
  AREAS,
  FOOTER_SERVICES,
  HOURS_FOOTER,
  HOURS_FOOTER_DAYS,
  MAPS_HREF,
  NAP,
  QUICKLINKS,
  SITE_NAME,
} from "@/lib/losc";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="losc-foot">
      <div className="losc-foot-inner">
        <div className="losc-foot-brand">
          <a href="/#top" className="losc-foot-logo">
            <img src="/mdc/logo-light.webp" alt={SITE_NAME} width={747} height={274} />
          </a>
          <p className="losc-foot-lead">
            Family dentistry at 1304 Clearview Pkwy. Dr. Thomas Murphy and Dr. Bonnie Murphy.
          </p>
          <a href={NAP.phoneHref} className="losc-foot-phone">
            <Phone className="size-4" weight="fill" />
            {NAP.phone}
          </a>
          <a href="/#register" className="hs-btn hs-btn-primary mt-5">
            Appointments
            <ArrowRight className="size-4" />
          </a>
        </div>

        <div>
          <p className="losc-foot-h">Care</p>
          <ul>
            {FOOTER_SERVICES.map((item) => (
              <li key={item.name}>
                <a href={item.href}>{item.name}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="losc-foot-h">On this page</p>
          <ul>
            {QUICKLINKS.map((item) => (
              <li key={item.name}>
                <a href={item.href}>{item.name}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="losc-foot-h">Visit</p>
          <p className="losc-foot-row">
            <MapPin className="size-4 shrink-0 text-primary" weight="fill" />
            <span>{ADDRESS_LINE}</span>
          </p>
          <p className="losc-foot-row">
            <Clock className="size-4 shrink-0 text-primary" />
            <span>
              {HOURS_FOOTER}
              <span className="mt-1 block text-snow/55">{HOURS_FOOTER_DAYS}</span>
            </span>
          </p>
          <p className="mt-4 text-xs leading-relaxed text-snow/50">Areas: {AREAS.join(" · ")}</p>
          <a href={MAPS_HREF} className="losc-foot-maps" rel="noreferrer" target="_blank">
            Open in Google Maps
            <ArrowRight className="size-3.5" />
          </a>
        </div>
      </div>

      <div className="losc-foot-bar">
        <p>
          © {year} {SITE_NAME}. Metairie, LA.
        </p>
        <p>
          <a href="/privacy">Privacy</a>
          <span aria-hidden="true"> · </span>
          <a href="/terms">Terms</a>
        </p>
      </div>
    </footer>
  );
}
