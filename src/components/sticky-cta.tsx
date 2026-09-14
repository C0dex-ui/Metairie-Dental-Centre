import { Phone } from "@phosphor-icons/react";
import { NAP } from "@/lib/losc";

export function StickyCta() {
  return (
    <div className="sticky-enter fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-navy/20 bg-navy-deep pb-[env(safe-area-inset-bottom,0px)] lg:hidden">
      <a
        href={NAP.phoneHref}
        className="inline-flex min-h-12 items-center justify-center gap-2 bg-navy text-sm font-bold text-snow"
      >
        <Phone className="size-4" weight="fill" />
        Call
      </a>
      <a href="/#register" className="inline-flex min-h-12 items-center justify-center bg-navy text-sm font-bold text-snow">
        Appointments
      </a>
    </div>
  );
}
