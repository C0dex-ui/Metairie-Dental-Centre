import { createFileRoute } from "@tanstack/react-router";
import { CaretDown } from "@phosphor-icons/react";
import { PageBanner } from "@/components/page-banner";
import { Reveal } from "@/components/reveal";
import { SiteShell } from "@/components/site-shell";
import { FAQS } from "@/lib/happysmile";
import { toHome } from "@/lib/home-only";

export const Route = createFileRoute("/faq")({
  beforeLoad: () => toHome("faq"),
  component: Faq,
  head: () => ({
    meta: [
      { title: "FAQ | Canal Street Family Dentistry" },
      { name: "description", content: "Hours, services, kids’ visits, and how to book at 2752 Canal St, New Orleans." },
    ],
  }),
});

function Faq() {
  return (
    <SiteShell active="Pages">
      <PageBanner title="Frequently Asked Question" crumbs={[{ name: "FAQ" }]} />
      <section className="bg-paper py-16">
        <div className="mx-auto max-w-3xl space-y-3 px-4">
          {FAQS.map((item, idx) => (
            <Reveal key={item.q} delay={idx * 50}>
              <details className="faq-item group border border-line bg-snow p-5">
                <summary className="flex list-none items-center justify-between gap-3 font-display font-semibold text-navy">
                  {item.q}
                  <CaretDown className="size-4 shrink-0 text-primary transition-transform duration-200 group-open:rotate-180" />
                </summary>
                <p className="mt-3 text-sm text-muted">{item.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
