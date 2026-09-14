import { GOOGLE_REVIEWS } from "@/lib/losc";
import { GoogleMark, GoogleStars } from "@/components/google-mark";

export function GoogleBadge({
  variant = "light",
  className = "",
}: {
  variant?: "hero" | "light";
  className?: string;
}) {
  return (
    <a
      href={GOOGLE_REVIEWS.href}
      className={`${variant === "hero" ? "g-badge g-badge-hero" : "g-badge g-badge-light"} ${className}`.trim()}
      rel="noreferrer"
      target="_blank"
      aria-label="Find Metairie Dental Centre on Google"
    >
      <span className="g-badge-mark">
        <GoogleMark className="size-6" />
      </span>
      <span className="g-badge-copy">
        <span className="g-badge-row">
          <b>Google</b>
          <GoogleStars />
        </span>
        <span className="g-badge-meta">{GOOGLE_REVIEWS.meta}</span>
      </span>
    </a>
  );
}
