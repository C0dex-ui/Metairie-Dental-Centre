import { createFileRoute, Link } from "@tanstack/react-router";
import { PageBanner } from "@/components/page-banner";
import { SiteShell } from "@/components/site-shell";
import { POSTS } from "@/lib/happysmile";
import { toHome } from "@/lib/home-only";

export const Route = createFileRoute("/blog/")({
  beforeLoad: () => toHome("top"),
  component: BlogIndex,
  head: () => ({
    meta: [
      { title: "Blog | Canal Street Family Dentistry" },
      { name: "description", content: "Canal Street Family Dentistry does not publish a blog on the official site." },
    ],
  }),
});

function BlogIndex() {
  return (
    <SiteShell active="Blog">
      <PageBanner title="Blog" crumbs={[{ name: "Blog" }]} />
      <section className="bg-paper py-16">
        <div className="mx-auto max-w-6xl px-4">
          {POSTS.length === 0 ? (
            <p className="text-center text-muted">
              The official canalstdental.com site does not publish a blog. Call (504) 822-8890 with questions.
            </p>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {POSTS.map((p) => (
                <Link key={p.slug} to="/blog/$slug" params={{ slug: p.slug }} className="group border border-line">
                  <img src={p.image} alt="" className="h-48 w-full object-cover" />
                  <div className="p-5">
                    <p className="text-xs font-semibold uppercase tracking-wide text-primary">{p.date}</p>
                    <h2 className="mt-2 font-display text-lg font-semibold text-navy group-hover:text-primary">{p.title}</h2>
                    <p className="mt-2 line-clamp-3 text-sm text-muted">{p.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </SiteShell>
  );
}
