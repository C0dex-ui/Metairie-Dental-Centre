import { createFileRoute } from "@tanstack/react-router";
import { PageBanner } from "@/components/page-banner";
import { SiteShell } from "@/components/site-shell";
import { NAP, SITE_NAME } from "@/lib/happysmile";

export const Route = createFileRoute("/privacy")({
  component: Privacy,
  head: () => ({
    meta: [
      { title: "Privacy Policy | Metairie Dental Centre" },
      { name: "robots", content: "noindex" },
    ],
  }),
});

function Privacy() {
  return (
    <SiteShell active="Pages">
      <PageBanner title="Privacy Policy" crumbs={[{ name: "Privacy Policy" }]} />
      <article className="mx-auto max-w-3xl space-y-4 px-4 py-16 text-muted">
        <p>
          {SITE_NAME} at 1304 Clearview Pkwy, Metairie, LA 70001 does not operate a public patient portal on this
          website. The callback form stores nothing on a server. Clinical records live at the practice. Call{" "}
          {NAP.phone} to discuss records held by the office. Do not send clinical photos or Social Security
          numbers through the form.
        </p>
        <p>
          This page does not collect analytics cookies beyond what the host injects. We do not sell email lists
          or publish a patient directory. metairiedental.com publishes selected patient quotes on its reviews page.
        </p>
      </article>
    </SiteShell>
  );
}
