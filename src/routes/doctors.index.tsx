import { createFileRoute, Link } from "@tanstack/react-router";
import { PageBanner } from "@/components/page-banner";
import { Reveal } from "@/components/reveal";
import { SiteShell } from "@/components/site-shell";
import { Tilt3D } from "@/components/tilt-3d";
import { DOCTORS } from "@/lib/happysmile";
import { toHome } from "@/lib/home-only";

export const Route = createFileRoute("/doctors/")({
  beforeLoad: () => toHome("doctor"),
  component: DoctorsIndex,
  head: () => ({
    meta: [
      { title: "Dr. Rayfield Lotten DDS | Canal Street Family Dentistry" },
      { name: "description", content: "Dr. Rayfield Lotten, DDS, is the named dentist at 2752 Canal St, New Orleans." },
    ],
  }),
});

function DoctorsIndex() {
  return (
    <SiteShell active="Doctors">
      <PageBanner title="Our Doctor" crumbs={[{ name: "Our Doctor" }]} />
      <section className="bg-paper py-16">
        <div className="mx-auto max-w-6xl px-4">
          <Reveal>
            <p className="kicker">Our Doctor</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-navy">
              Dr. Rayfield Lotten, DDS
            </h2>
          </Reveal>
          <div className="stage-3d mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {DOCTORS.map((d) => (
              <Reveal key={d.slug}>
                <Tilt3D>
                  <Link to="/doctors/$slug" params={{ slug: d.slug }} className="card-3d block border border-line bg-snow p-8 text-center">
                    <img src={d.image} alt={d.name} className="mx-auto size-40 rounded-full object-cover transition-transform duration-300 hover:scale-105" />
                    <h3 className="mt-5 font-display text-xl font-semibold text-navy">{d.name}</h3>
                    <p className="text-sm text-muted">{d.role}</p>
                    <p className="mt-3 text-sm text-muted">{d.bio}</p>
                  </Link>
                </Tilt3D>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
