import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageBanner } from "@/components/page-banner";
import { Reveal } from "@/components/reveal";
import { SiteShell } from "@/components/site-shell";
import { DOCTORS } from "@/lib/happysmile";
import { toHome } from "@/lib/home-only";

export const Route = createFileRoute("/doctors/$slug")({
  beforeLoad: () => toHome("doctor"),
  component: DoctorPage,
  head: ({ params }) => {
    const doc = DOCTORS.find((d) => d.slug === params.slug);
    return {
      meta: [
        { title: `${doc?.name ?? "Doctor"} | Canal Street Family Dentistry` },
        { name: "description", content: doc?.bio ?? "" },
      ],
    };
  },
});

function DoctorPage() {
  const { slug } = Route.useParams();
  const doc = DOCTORS.find((d) => d.slug === slug);
  if (!doc) throw notFound();
  return (
    <SiteShell active="Doctors">
      <PageBanner
        title={doc.name}
        crumbs={[{ name: "Our Doctor", href: "/doctors" }, { name: doc.name }]}
      />
      <section className="bg-paper py-16">
        <div className="mx-auto grid max-w-6xl items-start gap-10 px-4 lg:grid-cols-3">
          <Reveal variant="flip">
            <div className="img-zoom overflow-hidden rounded-card shadow-card">
              <img src={doc.image} alt={doc.name} className="w-full rounded-card object-cover" />
            </div>
          </Reveal>
          <Reveal delay={100} className="lg:col-span-2">
            <p className="kicker">Meet Dr. Lotten</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-navy">{doc.name}</h2>
            <p className="mt-1 text-primary">{doc.role}</p>
            {doc.paras.map((para) => (
              <p key={para.slice(0, 32)} className="mt-4 text-muted">
                {para}
              </p>
            ))}
            <Link to="/contact" className="hs-btn hs-btn-primary mt-8">
              Appointment
            </Link>
          </Reveal>
        </div>
      </section>
    </SiteShell>
  );
}
