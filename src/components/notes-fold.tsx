import { CaretDown } from "@phosphor-icons/react";

export function NotesFold({
  paras,
  visible = 2,
  label = "Read the published notes",
}: {
  paras: readonly string[];
  visible?: number;
  label?: string;
}) {
  const lead = paras.slice(0, visible);
  const rest = paras.slice(visible);
  return (
    <div className="prose-seo space-y-4 text-pretty text-muted">
      {lead.map((p) => (
        <p key={p.slice(0, 40)}>{p}</p>
      ))}
      {rest.length ? (
        <details className="notes-fold group">
          <summary className="flex min-h-11 cursor-pointer list-none items-center gap-2 text-sm font-semibold tracking-wide text-primary-deep uppercase">
            {label}
            <CaretDown className="size-3.5 transition-transform duration-200 group-open:rotate-180" />
          </summary>
          <div className="mt-4 space-y-4 border-t border-line pt-4">
            {rest.map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
          </div>
        </details>
      ) : null}
    </div>
  );
}
