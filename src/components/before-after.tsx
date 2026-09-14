import { useCallback, useRef, useState } from "react";
import { BEFORE_AFTER } from "@/lib/losc";

function Compare({
  before,
  after,
  beforeAlt,
  afterAlt,
}: {
  before: string;
  after: string;
  beforeAlt: string;
  afterAlt: string;
}) {
  const [pos, setPos] = useState(50);
  const frame = useRef<HTMLDivElement>(null);

  const move = useCallback((clientX: number) => {
    const el = frame.current;
    if (!el) return;
    const { left, width } = el.getBoundingClientRect();
    setPos(Math.min(94, Math.max(6, ((clientX - left) / width) * 100)));
  }, []);

  return (
    <div
      ref={frame}
      className="ba-frame"
      style={{ "--pos": `${pos}%` } as React.CSSProperties}
      onPointerDown={(e) => {
        e.currentTarget.setPointerCapture(e.pointerId);
        move(e.clientX);
      }}
      onPointerMove={(e) => {
        if (e.currentTarget.hasPointerCapture(e.pointerId)) move(e.clientX);
      }}
    >
      <img src={after} alt={afterAlt} className="ba-img" width={1792} height={1008} draggable={false} />
      <img src={before} alt={beforeAlt} className="ba-img ba-before" width={1792} height={1008} draggable={false} />
      <div className="ba-handle" aria-hidden="true">
        <span />
      </div>
      <span className="ba-tag ba-tag-before">Before</span>
      <span className="ba-tag ba-tag-after">After</span>
    </div>
  );
}

export function BeforeAfter() {
  const [active, setActive] = useState(0);
  const item = BEFORE_AFTER[active] ?? BEFORE_AFTER[0];

  return (
    <div>
      <div className="ba-tabs" role="tablist" aria-label="Illustrative comparisons">
        {BEFORE_AFTER.map((c, i) => (
          <button
            key={c.slug}
            type="button"
            role="tab"
            aria-selected={i === active}
            className={i === active ? "is-on" : undefined}
            onClick={() => setActive(i)}
          >
            {c.label}
          </button>
        ))}
      </div>
      <Compare
        key={item.slug}
        before={item.before}
        after={item.after}
        beforeAlt={item.beforeAlt}
        afterAlt={item.afterAlt}
      />
    </div>
  );
}
