import { SiteShell } from "@/components/site-shell";

export function NotFoundPage() {
  return (
    <SiteShell active="Home">
      <section className="mx-auto max-w-2xl px-4 py-24 text-center">
        <p className="kicker">404</p>
        <h1 className="mt-2 font-display text-4xl text-navy">Page not found</h1>
        <p className="mt-4 text-muted">That address is not on this Louisiana Oral Surgery Center homepage.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href="/#top" className="hs-btn hs-btn-primary">
            Home
          </a>
          <a href="/#register" className="hs-btn hs-btn-ghost">
            Register
          </a>
        </div>
      </section>
    </SiteShell>
  );
}
