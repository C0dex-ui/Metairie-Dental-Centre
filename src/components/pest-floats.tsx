"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";

function MosquitoIcon({ className, style }: { className?: string; style?: CSSProperties }) {
  return (
    <svg viewBox="0 0 64 40" className={className} style={style} fill="currentColor" aria-hidden="true">
      <ellipse cx="42" cy="22" rx="15" ry="5.5" />
      <ellipse cx="24" cy="20" rx="7" ry="6" />
      <circle cx="14" cy="18" r="4.5" />
    </svg>
  );
}

function AntIcon({ className, style }: { className?: string; style?: CSSProperties }) {
  return (
    <svg viewBox="0 0 40 22" className={className} style={style} fill="currentColor" aria-hidden="true">
      <ellipse cx="8" cy="11" rx="4.4" ry="3.6" />
      <ellipse cx="17" cy="11" rx="4.6" ry="4.2" />
      <ellipse cx="28.5" cy="11" rx="7" ry="4.6" />
    </svg>
  );
}

function WaspIcon({ className, style }: { className?: string; style?: CSSProperties }) {
  return (
    <svg viewBox="0 0 48 36" className={className} style={style} fill="currentColor" aria-hidden="true">
      <ellipse cx="16" cy="18" rx="6" ry="5" />
      <ellipse cx="32" cy="19" rx="11" ry="5" />
      <circle cx="10" cy="17" r="3.4" />
    </svg>
  );
}

function MothIcon({ className, style }: { className?: string; style?: CSSProperties }) {
  return (
    <svg viewBox="0 0 48 32" className={className} style={style} fill="currentColor" aria-hidden="true">
      <ellipse cx="14" cy="16" rx="12" ry="13" />
      <ellipse cx="34" cy="16" rx="12" ry="13" />
      <ellipse cx="24" cy="16" rx="4" ry="10" />
    </svg>
  );
}

function BeetleIcon({ className, style }: { className?: string; style?: CSSProperties }) {
  return (
    <svg viewBox="0 0 32 32" className={className} style={style} fill="currentColor" aria-hidden="true">
      <ellipse cx="16" cy="18" rx="8" ry="10" />
      <circle cx="16" cy="8" r="4" />
    </svg>
  );
}

function StationIcon({ className, style }: { className?: string; style?: CSSProperties }) {
  return (
    <svg viewBox="0 0 36 44" className={className} style={style} fill="currentColor" aria-hidden="true">
      <rect x="10" y="16" width="16" height="24" rx="2" />
      <ellipse cx="18" cy="16" rx="8" ry="3.4" />
    </svg>
  );
}

const ICONS = {
  mosquito: MosquitoIcon,
  ant: AntIcon,
  moth: MothIcon,
  wasp: WaspIcon,
  beetle: BeetleIcon,
  station: StationIcon,
} as const;

type Kind = keyof typeof ICONS;
const ALL_KINDS = Object.keys(ICONS) as Kind[];

function rand(min: number, max: number) {
  return min + Math.random() * (max - min);
}

type BugSpot = {
  kind: Kind;
  x: number;
  y: number;
  dx: number;
  dy: number;
  dur: number;
  delay: number;
  size: number;
  path: number;
};

type Box = { x0: number; y0: number; x1: number; y1: number };

const BLOCK =
  "article, figure, form, details, h1, h2, h3, p, a, button, input, select, textarea, label, summary, .tilt-face, .team-roster li, .office-chip, .rail-car, .shot, .stat-board, .about-stack, .lead-form, .pest-well, .hs-btn, .hero-pill, .stamp-float, img, video, ul, nav";

function isBleed(el: Element, host: DOMRect) {
  const r = el.getBoundingClientRect();
  const pos = getComputedStyle(el).position;
  return (pos === "absolute" || pos === "fixed") && r.width > host.width * 0.62 && r.height > host.height * 0.42;
}

function blockerBoxes(layer: HTMLElement): Box[] {
  const host = layer.parentElement;
  if (!host) return [];
  const box = host.getBoundingClientRect();
  if (box.width < 8 || box.height < 8) return [];
  const padX = (18 / box.width) * 100;
  const padY = (18 / box.height) * 100;
  const out: Box[] = [];
  host.querySelectorAll(BLOCK).forEach((el) => {
    if (el === layer || layer.contains(el)) return;
    if (el.closest(".pest-layer, .ant-rail")) return;
    if (isBleed(el, box)) return;
    const r = el.getBoundingClientRect();
    if (r.width < 10 || r.height < 10) return;
    out.push({
      x0: ((r.left - box.left) / box.width) * 100 - padX,
      y0: ((r.top - box.top) / box.height) * 100 - padY,
      x1: ((r.right - box.left) / box.width) * 100 + padX,
      y1: ((r.bottom - box.top) / box.height) * 100 + padY,
    });
  });
  return out;
}

function clipFrom(boxes: Box[]) {
  if (!boxes.length) return "none";
  const holes = boxes
    .map((b) => {
      const x0 = Math.max(0, b.x0).toFixed(2);
      const y0 = Math.max(0, b.y0).toFixed(2);
      const x1 = Math.min(100, b.x1).toFixed(2);
      const y1 = Math.min(100, b.y1).toFixed(2);
      return `${x0}% ${y0}%, ${x0}% ${y1}%, ${x1}% ${y1}%, ${x1}% ${y0}%, ${x0}% ${y0}%`;
    })
    .join(", ");
  return `polygon(evenodd, 0% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 0%, ${holes})`;
}

function hits(x: number, y: number, boxes: Box[]) {
  return boxes.some((b) => x >= b.x0 && x <= b.x1 && y >= b.y0 && y <= b.y1);
}

function scatter(count: number, kinds: Kind[], boxes: Box[]): BugSpot[] {
  const spots: BugSpot[] = [];
  let guard = 0;
  while (spots.length < count && guard < 280) {
    guard += 1;
    const x = rand(3, 94);
    const y = rand(4, 90);
    if (hits(x, y, boxes)) continue;
    if (spots.some((s) => Math.hypot(s.x - x, s.y - y) < 10)) continue;
    const dx = (Math.random() < 0.5 ? -1 : 1) * rand(18, 52);
    const dy = (Math.random() < 0.5 ? -1 : 1) * rand(14, 40);
    if (hits(x + (dx / 12), y + (dy / 12), boxes)) continue;
    spots.push({
      kind: kinds[spots.length % kinds.length] ?? ALL_KINDS[spots.length % ALL_KINDS.length],
      x,
      y,
      dx,
      dy,
      dur: rand(10, 18),
      delay: -rand(0, 14),
      size: rand(12, 18),
      path: Math.floor(Math.random() * 4),
    });
  }
  return spots;
}

function Swarm({
  tone = "gold",
  kinds,
  count = 7,
  quiet = false,
  mist = 0,
}: {
  tone?: "gold" | "navy";
  kinds: Kind[];
  count?: number;
  quiet?: boolean;
  mist?: number;
}) {
  const layerRef = useRef<HTMLDivElement>(null);
  const [spots, setSpots] = useState<BugSpot[]>([]);
  const [drops, setDrops] = useState<{ x: number; y: number; delay: number; dur: number }[]>([]);

  const kindKey = kinds.join(",");

  useEffect(() => {
    const layer = layerRef.current;
    if (!layer) return;
    const list = kindKey.split(",") as Kind[];
    const place = () => {
      const boxes = blockerBoxes(layer);
      layer.style.clipPath = clipFrom(boxes);
      setSpots(scatter(count, list, boxes));
      if (mist) {
        const next = [];
        let g = 0;
        while (next.length < mist && g < 120) {
          g += 1;
          const x = rand(6, 92);
          const y = rand(8, 86);
          if (hits(x, y, boxes)) continue;
          next.push({ x, y, delay: -rand(0, 8), dur: rand(8, 14) });
        }
        setDrops(next);
      }
    };
    const id = window.setTimeout(place, 60);
    const host = layer.parentElement;
    const ro = host ? new ResizeObserver(() => place()) : null;
    if (host) ro?.observe(host);
    window.addEventListener("resize", place);
    return () => {
      window.clearTimeout(id);
      ro?.disconnect();
      window.removeEventListener("resize", place);
    };
  }, [count, kindKey, mist]);

  return (
    <div ref={layerRef} className={`pest-layer pest-${tone}${quiet ? " pest-quiet" : ""}`} aria-hidden="true">
      {spots.map((s, i) => {
        const Icon = ICONS[s.kind];
        return (
          <Icon
            key={i}
            className={`bug-fly wander-${s.path}`}
            style={
              {
                top: `${s.y}%`,
                left: `${s.x}%`,
                width: `${s.size}px`,
                height: `${s.size}px`,
                animationDuration: `${s.dur}s`,
                animationDelay: `${s.delay}s`,
                "--dx": `${s.dx}px`,
                "--dy": `${s.dy}px`,
              } as CSSProperties
            }
          />
        );
      })}
      {drops.map((d, i) => (
        <span
          key={`m${i}`}
          className="mist-drop"
          style={{
            left: `${d.x}%`,
            top: `${d.y}%`,
            animationDelay: `${d.delay}s`,
            animationDuration: `${d.dur}s`,
          }}
        />
      ))}
    </div>
  );
}

export function HeroPests() {
  return <Swarm tone="gold" kinds={["mosquito", "moth", "wasp", "beetle"]} count={9} mist={5} />;
}

export function AntTrail() {
  const [spots, setSpots] = useState<{ x: number; dur: number; delay: number; size: number }[]>([]);
  useEffect(() => {
    setSpots(
      Array.from({ length: 6 }, () => ({
        x: rand(4, 88),
        dur: rand(10, 16),
        delay: -rand(0, 10),
        size: rand(11, 15),
      })),
    );
  }, []);
  return (
    <div className="ant-rail" aria-hidden="true">
      {spots.map((s, i) => (
        <span
          key={i}
          className="ant-march"
          style={{
            left: `${s.x}%`,
            animationDuration: `${s.dur}s`,
            animationDelay: `${s.delay}s`,
            width: `${s.size}px`,
          }}
        >
          <AntIcon />
        </span>
      ))}
    </div>
  );
}

export function TermitePests() {
  return <Swarm tone="gold" kinds={["station", "ant", "beetle", "moth"]} count={7} />;
}

export function LibraryPests() {
  return <Swarm tone="gold" kinds={["wasp", "moth", "mosquito", "beetle", "ant"]} count={8} />;
}

export function EstimatePests() {
  return <Swarm tone="gold" kinds={["mosquito", "moth", "ant", "wasp"]} count={6} quiet />;
}

export function PaperPests({ kinds = ["ant", "beetle", "moth", "mosquito"] }: { kinds?: Kind[] }) {
  return <Swarm tone="navy" kinds={kinds} count={7} />;
}

export function NavyPests({ kinds = ["moth", "beetle", "wasp", "ant"] }: { kinds?: Kind[] }) {
  return <Swarm tone="gold" kinds={kinds} count={7} />;
}
