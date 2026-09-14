import type { ReactNode } from "react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { JsonLd } from "@/components/json-ld";
import { StickyCta } from "@/components/sticky-cta";

type Active = "Home" | "Pages" | "Services" | "Doctors" | "Blog" | "Contact";

export function SiteShell({
  active,
  children,
}: {
  active: Active;
  children: ReactNode;
}) {
  return (
    <div className="min-h-dvh bg-paper pb-[calc(3.75rem+env(safe-area-inset-bottom,0px))] text-ink lg:pb-0">
      <div className="sda-progress" aria-hidden="true" />
      <JsonLd />
      <SiteHeader active={active} />
      <main id="main">{children}</main>
      <SiteFooter />
      <StickyCta />
    </div>
  );
}
