import { useEffect, useRef, useState } from "react";

const CLIP = "/canal/operatory.mp4";
const POSTER = "/canal/operatory.webp";

export function HeroStreetcar() {
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
      if (p && p.catch) p.catch(() => {});
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
        alt="Dr. Rayfield Lotten treating a patient at Canal Street Family Dentistry"
        width={1600}
        height={1067}
        fetchPriority="high"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover object-[82%_12%] lg:object-[78%_10%]"
      />
      {reduce ? null : (
        <video
          ref={videoRef}
          className={`pointer-events-none absolute inset-0 h-full w-full object-cover object-[82%_12%] lg:object-[78%_10%] transition-opacity duration-500 ${ready ? "opacity-100" : "opacity-0"}`}
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
