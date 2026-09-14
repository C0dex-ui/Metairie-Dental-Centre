import { ADDRESS_LINE, MAPS_EMBED } from "@/lib/canal";

export function OfficeMap({ className = "min-h-[420px]" }: { className?: string }) {
  return (
    <div className={`overflow-hidden rounded-card border border-line bg-cream shadow-card ${className}`}>
      <iframe
        title={`Map of Canal Street Family Dentistry at ${ADDRESS_LINE}`}
        src={MAPS_EMBED}
        className="h-full w-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
