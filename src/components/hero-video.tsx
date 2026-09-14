import { useEffect, useRef, useState } from "react";

const CLIP = "/mdc/hero.mp4";
const POSTER = "/mdc/hero-poster.jpg";

export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [reduce, setReduce] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReduce(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    if (reduce) return;
    const el = videoRef.current;
    if (!el) return;
    const play = () => {
      const p = el.play();
      if (p && typeof p.catch === "function") p.catch(() => {});
    };
    const mark = () => {
      setReady(true);
      play();
    };
    if (el.readyState >= 2) mark();
    el.addEventListener("loadeddata", mark);
    el.addEventListener("canplay", mark);
    play();
    const unlock = () => play();
    document.addEventListener("click", unlock, { once: true });
    document.addEventListener("touchstart", unlock, { once: true });
    const giveUp = window.setTimeout(() => setReady(true), 2500);
    return () => {
      el.removeEventListener("loadeddata", mark);
      el.removeEventListener("canplay", mark);
      document.removeEventListener("click", unlock);
      document.removeEventListener("touchstart", unlock);
      window.clearTimeout(giveUp);
    };
  }, [reduce]);

  return (
    <>
      <img
        src={POSTER}
        alt=""
        width={1920}
        height={1088}
        fetchPriority="high"
        className="pointer-events-none absolute inset-0 size-full object-cover"
      />
      {reduce ? null : (
        <video
          ref={videoRef}
          className={`pointer-events-none absolute inset-0 size-full object-cover transition-opacity duration-700 ${ready ? "opacity-100" : "opacity-0"}`}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={POSTER}
          aria-hidden="true"
        >
          <source src={CLIP} type="video/mp4" />
        </video>
      )}
    </>
  );
}
