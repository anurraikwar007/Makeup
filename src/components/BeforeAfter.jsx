import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import imgBefore from "../assets/bridal-makeup (7).webp";
import imgAfter from "../assets/bridal-makeup (8).webp";

gsap.registerPlugin(ScrollTrigger);

export default function BeforeAfter() {
  const root = useRef(null);
  const [position, setPosition] = useState(50);

  useEffect(() => {
    const el = root.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.from(".ba-card", {
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
        },
        y: 80,
        opacity: 0,
        scale: 0.95,
        duration: 1,
        ease: "power3.out",
      });
    }, root);

    return () => ctx.revert();
  }, []);

  const handleMove = (e) => {
    const rect = root.current.getBoundingClientRect();
    let x = e.clientX - rect.left;

    let percent = (x / rect.width) * 100;

    if (percent < 0) percent = 0;
    if (percent > 100) percent = 100;

    setPosition(percent);
  };

  const handleTouch = (e) => {
    const rect = root.current.getBoundingClientRect();
    let x = e.touches[0].clientX - rect.left;

    let percent = (x / rect.width) * 100;

    if (percent < 0) percent = 0;
    if (percent > 100) percent = 100;

    setPosition(percent);
  };

  return (
    <section
      ref={root}
      className="relative min-h-screen bg-black flex items-center justify-center px-6 py-28 overflow-hidden"
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute w-[500px] h-[500px] bg-[#d4af37]/20 blur-[180px] top-[-200px] left-[-200px]" />
      <div className="absolute w-[400px] h-[400px] bg-pink-500/10 blur-[160px] bottom-[-200px] right-[-200px]" />

      {/* TITLE */}
      <div className="absolute top-10 text-center">
        <p className="text-xs tracking-[6px] uppercase text-gray-400">
          Transformation Experience
        </p>
        <h2 className="text-3xl md:text-5xl font-black text-white mt-2">
          Before & After Reveal
        </h2>
      </div>

      {/* CARD */}
      <div
        className="ba-card relative w-full max-w-5xl h-[500px] md:h-[650px] rounded-[35px] overflow-hidden border border-white/10 shadow-[0_0_120px_rgba(212,175,55,0.15)]"
        onMouseMove={handleMove}
        onTouchMove={handleTouch}
      >
        {/* BEFORE */}
        <img
          src={imgBefore}
          className="absolute inset-0 w-full h-full object-cover scale-105"
          alt="before"
        />

        {/* AFTER */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${position}%` }}
        >
          <img
            src={imgAfter}
            className="w-full h-full object-cover scale-105"
            alt="after"
          />

          {/* cinematic overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        </div>

        {/* DIVIDER LINE */}
        <div
          className="absolute top-0 bottom-0 w-[2px] bg-[#d4af37] shadow-[0_0_10px_#d4af37]"
          style={{ left: `${position}%` }}
        />

        {/* HANDLE */}
        <div
          className="absolute top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[#d4af37] text-black flex items-center justify-center shadow-lg font-bold cursor-pointer"
          style={{ left: `${position}%` }}
        >
          ⇆
        </div>

        {/* LABELS */}
        <div className="absolute left-5 top-5 text-white/70 text-xs tracking-[4px] uppercase">
          Before
        </div>

        <div className="absolute right-5 top-5 text-white/70 text-xs tracking-[4px] uppercase">
          After
        </div>

        {/* HINT */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/40 text-xs tracking-[3px]">
          Drag to reveal transformation
        </div>
      </div>
    </section>
  );
}