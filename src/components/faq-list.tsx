import { CaretDown } from "@phosphor-icons/react";
import { Reveal } from "@/components/reveal";

type Item = { q: string; a: string };

export function FaqList({ items }: { items: readonly Item[] }) {
  return (
    <Reveal stagger className="divide-y divide-line">
      {items.map((f, i) => (
        <details key={f.q} className="faq-details group" open={i === 0}>
          <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-4 text-left sm:py-5">
            <h3 className="font-display text-base font-semibold text-navy sm:text-lg">{f.q}</h3>
            <CaretDown className="size-4 shrink-0 text-navy transition-transform duration-200 group-open:rotate-180" />
          </summary>
          <p className="pb-4 text-sm text-pretty text-muted">{f.a}</p>
        </details>
      ))}
    </Reveal>
  );
}