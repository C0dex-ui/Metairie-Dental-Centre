import { HIGHLIGHTS, STATS } from "@/lib/precision";

export function Highlights() {
  return (
    <section id="highlights" className="bg-paper px-4 py-20 md:py-24">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-bold tracking-[0.22em] text-gold uppercase">Highlights</p>
        <h2 className="mt-4 max-w-5xl font-sans text-4xl font-extrabold leading-none text-navy md:text-5xl lg:text-6xl">
          Four reasons
          <span className="mt-2 block font-display text-4xl font-normal leading-tight md:text-5xl lg:text-6xl">
            <span className="gold-mark">the North Shore calls Precision.</span>
          </span>
        </h2>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted">
          Same-day arrival. Factory-trained techs. A warranty that actually transfers. A phone
          that picks up at 2am. That's the difference between a franchise flyer and a shop
          that's been on the North Shore for 15 years.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {HIGHLIGHTS.map((h) => (
            <article
              key={h.title}
              className="group relative min-h-80 overflow-hidden rounded-card text-snow xl:min-h-96"
            >
              <img
                src={h.img}
                alt={h.alt}
                width={1200}
                height={1600}
                loading="lazy"
                className="absolute inset-0 size-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="hl-scrim absolute inset-0" />
              <div className="relative flex h-full min-h-80 flex-col justify-end p-6 xl:min-h-96">
                <h3 className="font-sans text-3xl font-extrabold leading-tight">{h.title}</h3>
                <p className="mt-2 text-lg font-semibold leading-snug text-ice">{h.kicker}</p>
                <p className="mt-1 text-sm leading-snug text-ice/80">{h.copy}</p>
              </div>
            </article>
          ))}
        </div>

        <h3 className="mt-16 font-sans text-2xl font-extrabold text-navy md:text-3xl">
          The Numbers Don't Lie
        </h3>
        <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-6">
          {STATS.map((s) => (
            <div key={s.l}>
              <p className="font-sans text-4xl font-extrabold tracking-tight text-navy md:text-5xl">
                {s.n}
              </p>
              <p className="mt-1 max-w-36 text-sm leading-snug text-muted">{s.l}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
