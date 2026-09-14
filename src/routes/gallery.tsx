import { createFileRoute } from "@tanstack/react-router";
import { PageBanner } from "@/components/page-banner";
import { Reveal } from "@/components/reveal";
import { SiteShell } from "@/components/site-shell";
import { Tilt3D } from "@/components/tilt-3d";
import { GALLERY } from "@/lib/happysmile";
import { toHome } from "@/lib/home-only";

export const Route = createFileRoute("/gallery")({
  beforeLoad: () => toHome("about"),
  component: Gallery,
  head: () => ({
    meta: [
      { title: "Gallery | Canal Street Family Dentistry" },
      { name: "description", content: "Official Canal Street Family Dentistry photos: logo, Dr. Lotten, streetcar, operatory." },
    ],
  }),
});

function Gallery() {
  return (
    <SiteShell active="Pages">
      <PageBanner title="Gallery" crumbs={[{ name: "Gallery" }]} />
      <section className="bg-paper py-16">
        <div className="stage-3d mx-auto grid max-w-6xl grid-cols-2 gap-3 px-4 md:grid-cols-3 lg:grid-cols-4">
          {GALLERY.map((src, idx) => (
            <Reveal key={src} delay={idx * 70}>
              <Tilt3D max={8}>
                <div className="img-zoom overflow-hidden rounded-card shadow-card">
                  <img src={src} alt="Canal Street Family Dentistry" className="h-44 w-full object-cover" />
                </div>
              </Tilt3D>
            </Reveal>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
