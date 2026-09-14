import { Phone } from "@phosphor-icons/react";
import { NAP } from "@/lib/canal";

export function CtaBand({ heading }: { heading: string }) {
  return (
    <section className="bg-navy">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 py-10 sm:flex-row sm:items-center">
        <p className="max-w-xl font-display text-2xl text-snow sm:text-3xl">{heading}</p>
        <div className="flex flex-wrap gap-3">
          <a href={NAP.phoneHref} className="hs-btn hs-btn-primary">
            <Phone className="size-4" weight="fill" />
            Call {NAP.phone}
          </a>
          <a href="/#book" className="hs-btn hs-btn-white">
            Book a visit
          </a>
        </div>
      </div>
    </section>
  );
}
