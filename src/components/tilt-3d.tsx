import {
  useCallback,
  useEffect,
  useRef,
  type CSSProperties,
  type PointerEvent as REPointerEvent,
  type ReactNode,
} from "react";
import { cn } from "@/lib/utils";

export function Tilt3D({
  children,
  className,
  max = 3,
}: {
  children: ReactNode;
  className?: string;
  max?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const frame = useRef(0);
  const live = useRef(false);

  const reset = useCallback(() => {
    live.current = false;
    const el = ref.current;
    if (!el) return;
    el.classList.remove("is-tilting");
    el.style.setProperty("--tilt-x", "0deg");
    el.style.setProperty("--tilt-y", "0deg");
    el.style.setProperty("--shine-x", "50%");
    el.style.setProperty("--shine-y", "0%");
  }, []);

  const onMove = useCallback(
    (e: REPointerEvent<HTMLDivElement>) => {
      const el = ref.current;
      if (!el) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      if (window.matchMedia("(pointer: coarse)").matches) return;
      const x = e.clientX;
      const y = e.clientY;
      live.current = true;
      el.classList.add("is-tilting");
      cancelAnimationFrame(frame.current);
      frame.current = requestAnimationFrame(() => {
        if (!live.current) return;
        const r = el.getBoundingClientRect();
        const px = (x - r.left) / r.width;
        const py = (y - r.top) / r.height;
        const ry = (px - 0.5) * max * 2;
        const rx = (0.5 - py) * max * 2;
        el.style.setProperty("--tilt-x", `${rx.toFixed(2)}deg`);
        el.style.setProperty("--tilt-y", `${ry.toFixed(2)}deg`);
        el.style.setProperty("--shine-x", `${(px * 100).toFixed(1)}%`);
        el.style.setProperty("--shine-y", `${(py * 100).toFixed(1)}%`);
      });
    },
    [max],
  );

  useEffect(() => () => cancelAnimationFrame(frame.current), []);

  return (
    <div
      ref={ref}
      className={cn("tilt-3d", className)}
      onPointerMove={onMove}
      onPointerLeave={reset}
      onPointerCancel={reset}
      style={
        {
          "--tilt-x": "0deg",
          "--tilt-y": "0deg",
          "--shine-x": "50%",
          "--shine-y": "0%",
        } as CSSProperties
      }
    >
      {children}
    </div>
  );
}
