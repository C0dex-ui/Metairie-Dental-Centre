import { createFileRoute } from "@tanstack/react-router";
import { PageBanner } from "@/components/page-banner";
import { SiteShell } from "@/components/site-shell";

export const Route = createFileRoute("/terms")({
  component: Terms,
  head: () => ({
    meta: [
      { title: "Terms | Metairie Dental Centre" },
      { name: "robots", content: "noindex" },
    ],
  }),
});

function Terms() {
  return (
    <SiteShell active="Pages">
      <PageBanner title="Terms of Use" crumbs={[{ name: "Terms" }]} />
      <article className="mx-auto max-w-3xl space-y-4 px-4 py-16 text-muted">
        <p>
          This website is a homepage preview for Metairie Dental Centre at 1304 Clearview Pkwy, Metairie, LA 70001.
          Appointment requests stay in your browser until you call (504) 455-4660. The desk confirms the visit.
        </p>
      </article>
    </SiteShell>
  );
}
