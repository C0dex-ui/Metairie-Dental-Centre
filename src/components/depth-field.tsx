import {
  useCallback,
  useEffect,
  useRef,
  type PointerEvent as REPointerEvent,
  type ReactNode,
} from "react";
import { cn } from "@/lib/utils";

export function DepthField({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const frame = useRef(0);
  const live = useRef(false);

  const reset = useCallback(() => {
    live.current = false;
    const el = ref.current;
    if (!el) return;
    el.classList.remove("is-tracking");
    el.style.setProperty("--mx", "0.5");
    el.style.setProperty("--my", "0.5");
    el.style.setProperty("--tx", "0");
    el.style.setProperty("--ty", "0");
  }, []);

  const onMove = useCallback((e: REPointerEvent<HTMLElement>) => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const x = e.clientX;
    const y = e.clientY;
    live.current = true;
    el.classList.add("is-tracking");
    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      if (!live.current) return;
      const r = el.getBoundingClientRect();
      const mx = Math.min(1, Math.max(0, (x - r.left) / r.width));
      const my = Math.min(1, Math.max(0, (y - r.top) / r.height));
      el.style.setProperty("--mx", mx.toFixed(4));
      el.style.setProperty("--my", my.toFixed(4));
      el.style.setProperty("--tx", (mx - 0.5).toFixed(4));
      el.style.setProperty("--ty", (my - 0.5).toFixed(4));
    });
  }, []);

  useEffect(() => () => cancelAnimationFrame(frame.current), []);

  return (
    <section
      ref={ref}
      id={id}
      className={cn("depth-field", className)}
      onPointerMove={onMove}
      onPointerLeave={reset}
      onPointerCancel={reset}
    >
      {children}
    </section>
  );
}
