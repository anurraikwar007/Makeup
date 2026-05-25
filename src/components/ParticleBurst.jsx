import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function ParticleBurst({ active }) {

  const ref = useRef(null);

  useEffect(() => {

    if (!active) return;

    const particles = gsap.utils.toArray(".dot");

    gsap.to(particles, {
      x: () => gsap.utils.random(-300, 300),
      y: () => gsap.utils.random(-300, 300),
      scale: 0,
      opacity: 0,
      duration: 1.2,
      stagger: 0.01,
      ease: "power4.out",
    });

  }, [active]);

  return (
    <div ref={ref} className="fixed inset-0 z-[10000] flex flex-wrap">
      {Array.from({ length: 80 }).map((_, i) => (
        <div
          key={i}
          className="dot w-2 h-2 bg-[#d4af37] rounded-full m-1"
        />
      ))}
    </div>
  );
}