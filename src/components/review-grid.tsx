import { GOOGLE_REVIEWS, REVIEW_CARDS, SITE_NAME } from "@/lib/losc";
import { GoogleMark, GoogleStars } from "@/components/google-mark";
import { Reveal } from "@/components/reveal";

function initials(name: string) {
  const parts = name.split(" ").filter(Boolean);
  if (parts.length === 1) return parts[0].slice(0, 1).toUpperCase();
  return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
}

const AVATARS = ["ti-av-navy", "ti-av-teal", "ti-av-gold", "ti-av-navy"] as const;

export function ReviewGrid() {
  return (
    <div className="ti-grid" data-layout="grid">
      <header className="ti-grid-head">
        <div className="ti-grid-brand">
          <GoogleMark className="size-11" />
          <div>
            <p className="ti-grid-source">Google reviews</p>
            <p className="ti-grid-excellent">{SITE_NAME}</p>
          </div>
        </div>
        <div className="ti-grid-score">
          <p className="ti-grid-rating">
            <b>{GOOGLE_REVIEWS.rating}</b>
            <GoogleStars className="g-stars g-stars-card" />
          </p>
          <p className="ti-grid-based">Based on {GOOGLE_REVIEWS.count} Google reviews</p>
        </div>
        <a className="ti-grid-write hs-btn hs-btn-primary" href={GOOGLE_REVIEWS.href} rel="noreferrer" target="_blank">
          {GOOGLE_REVIEWS.label}
        </a>
      </header>

      <Reveal stagger className="ti-grid-cards">
        {REVIEW_CARDS.map((r, i) => (
          <article key={r.name} className="ti-card">
            <GoogleStars className="g-stars g-stars-card" />
            <p className="ti-text">“{r.text}”</p>
            <footer className="ti-card-foot">
              <span className={`ti-av ${AVATARS[i % AVATARS.length]}`}>{initials(r.name)}</span>
              <div className="min-w-0">
                <p className="ti-name">{r.name}</p>
                <p className="ti-when">{r.source}</p>
              </div>
            </footer>
          </article>
        ))}
      </Reveal>
    </div>
  );
}
