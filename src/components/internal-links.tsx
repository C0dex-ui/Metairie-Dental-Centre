import { AREAS, SERVICES } from "@/lib/losc";

export function InternalLinks() {
  return (
    <nav aria-label="On this page" className="border-t border-line bg-mist py-12">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-3">
        <div>
          <p className="kicker">Office</p>
          <ul className="prose-seo mt-3 grid gap-2 text-sm">
            <li>
              <a href="/#top">Family dentist in Metairie</a>
            </li>
            <li>
              <a href="/#doctors">Dr. Thomas Murphy and Dr. Bonnie Murphy</a>
            </li>
            <li>
              <a href="/#office">1304 Clearview Pkwy</a>
            </li>
            <li>
              <a href="/#reviews">Patient reviews</a>
            </li>
            <li>
              <a href="/#register">New patient appointments</a>
            </li>
            <li>
              <a href="/#faq">Dentist questions</a>
            </li>
          </ul>
        </div>
        <div>
          <p className="kicker">Care</p>
          <ul className="prose-seo mt-3 grid gap-2 text-sm">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <a href={`/#${s.slug}`}>{s.title} in Metairie</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="kicker">Areas named</p>
          <ul className="prose-seo mt-3 grid gap-2 text-sm">
            {AREAS.map((name) => (
              <li key={name}>
                <a href="/#office">{name} dentist</a>
              </li>
            ))}
            <li>
              <a href="/#notes">Published practice notes</a>
            </li>
            <li>
              <a href="/privacy">Privacy policy</a>
            </li>
            <li>
              <a href="/terms">Terms of use</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
