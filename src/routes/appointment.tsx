import { createFileRoute } from "@tanstack/react-router";
import { LeadForm } from "@/components/lead-form";
import { PageBanner } from "@/components/page-banner";
import { Reveal } from "@/components/reveal";
import { SiteShell } from "@/components/site-shell";
import { ADDRESS_LINE, HOURS_FOOTER, HOURS_FOOTER_DAYS, NAP } from "@/lib/happysmile";
import { toHome } from "@/lib/home-only";

export const Route = createFileRoute("/appointment")({
  beforeLoad: () => toHome("book"),
  component: Appointment,
  head: () => ({
    meta: [
      { title: "Appointment | Canal Street Family Dentistry" },
      { name: "description", content: "Call (504) 822-8890 to book. Callback form is not a reserved chair." },
    ],
  }),
});

function Appointment() {
  return (
    <SiteShell active="Pages">
      <PageBanner title="Appointment" crumbs={[{ name: "Appointment" }]} />
      <section className="bg-paper py-16">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 lg:grid-cols-2">
          <Reveal variant="flip">
            <p className="kicker">Book a visit</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-navy">Call the desk to confirm a chair</h2>
            <p className="mt-5 text-muted">
              {HOURS_FOOTER}. {HOURS_FOOTER_DAYS}. Call {NAP.phone}. New patients are welcome. Online booking is not
              published on the official site.
            </p>
            <p className="mt-6 text-navy">{ADDRESS_LINE}</p>
            <a href={NAP.phoneHref} className="hs-btn hs-btn-primary mt-8">
              Call {NAP.phone}
            </a>
          </Reveal>
          <Reveal delay={80}>
            <div className="border border-line bg-snow p-6 shadow-card transition-shadow duration-200 hover:shadow-lift">
              <LeadForm variant="appointment" />
            </div>
          </Reveal>
        </div>
      </section>
    </SiteShell>
  );
}
