import { useEffect, useRef, useState } from "react";
import { List, Phone, X } from "@phosphor-icons/react";
import { NAP, SITE_NAME } from "@/lib/losc";

const NAV = [
  { href: "/#services", label: "Services" },
  { href: "/#doctors", label: "Doctors" },
  { href: "/#results", label: "Results" },
  { href: "/#reviews", label: "Reviews" },
  { href: "/#office", label: "Visit" },
  { href: "/#faq", label: "FAQ" },
] as const;

export function SiteHeader({ active }: { active: string }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headRef = useRef<HTMLElement>(null);
  const solid = scrolled || open;

  useEffect(() => {
    const apply = (on: boolean) => {
      setScrolled(on);
      const el = headRef.current;
      if (!el) return;
      el.classList.toggle("is-solid", on);
      el.classList.toggle("is-top", !on);
    };

    const check = () => {
      const y = Math.max(window.scrollY, document.documentElement.scrollTop, document.body.scrollTop, 0);
      const hero = document.getElementById("top");
      const bottom = hero?.getBoundingClientRect().bottom ?? 999;
      apply(y > 8 || bottom < 96);
    };

    check();
    window.addEventListener("scroll", check, { passive: true, capture: true });
    document.addEventListener("scroll", check, { passive: true, capture: true });
    const tick = window.setInterval(check, 200);
    return () => {
      window.removeEventListener("scroll", check, { capture: true } as EventListenerOptions);
      document.removeEventListener("scroll", check, { capture: true } as EventListenerOptions);
      window.clearInterval(tick);
    };
  }, []);

  return (
    <header ref={headRef} className={`site-head ${solid ? "is-solid" : "is-top"}`}>
      <div className="header-enter mx-auto flex max-w-6xl items-center gap-4 px-4 py-3">
        <a href="/#top" className="site-head-logo shrink-0" onClick={() => setOpen(false)}>
          <img
            className="logo-color"
            src="/mdc/logo.webp"
            alt={SITE_NAME}
            width={747}
            height={274}
          />
          <img
            className="logo-on-video"
            src="/mdc/logo-light.webp"
            alt=""
            width={747}
            height={274}
            aria-hidden="true"
          />
        </a>
        <nav className="site-head-nav ml-4 hidden items-center gap-1 text-[13px] font-semibold lg:flex">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className="px-3 py-2">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="ml-auto hidden items-center gap-4 lg:flex">
          <a href={NAP.phoneHref} className="site-head-phone inline-flex items-center gap-2 text-sm font-semibold">
            <Phone className="size-4 text-primary" weight="fill" />
            {NAP.phone}
          </a>
          <a href="/#register" className="hs-btn hs-btn-primary px-5">
            Appointments
          </a>
        </div>
        <button
          type="button"
          className="site-head-menu ml-auto inline-flex size-11 items-center justify-center rounded-btn border lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-current={active === "Home" ? "page" : undefined}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <List className="size-5" />}
        </button>
      </div>
      {open ? (
        <div className="border-t border-line bg-paper px-4 py-4 lg:hidden">
          <nav className="flex flex-col">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="min-h-11 py-2 font-semibold text-navy"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a href={NAP.phoneHref} className="hs-btn hs-btn-primary mt-3">
              Call {NAP.phone}
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
