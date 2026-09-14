import {
  useCallback,
  useRef,
  type PointerEvent as REPointerEvent,
  type ReactNode,
} from "react";
import { cn } from "@/lib/utils";

export function Magnetic({
  children,
  className,
  strength = 0.28,
}: {
  children: ReactNode;
  className?: string;
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const reset = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "";
  }, []);

  const onMove = useCallback(
    (e: REPointerEvent<HTMLDivElement>) => {
      const el = ref.current;
      if (!el) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      if (window.matchMedia("(pointer: coarse)").matches) return;
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left - r.width / 2) * strength;
      const y = (e.clientY - r.top - r.height / 2) * strength;
      el.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0)`;
    },
    [strength],
  );

  return (
    <div
      ref={ref}
      className={cn("magnetic", className)}
      onPointerMove={onMove}
      onPointerLeave={reset}
      onPointerCancel={reset}
    >
      {children}
    </div>
  );
}
