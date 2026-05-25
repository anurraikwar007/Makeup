import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function AmbientBackground() {
  const glow1 = useRef(null);
  const glow2 = useRef(null);

  useEffect(() => {
    gsap.to(glow1.current, {
      x: 80,
      y: -60,
      duration: 6,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    gsap.to(glow2.current, {
      x: -100,
      y: 80,
      duration: 8,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, []);

  return (
    <>
      <div
        ref={glow1}
        className="fixed top-[-200px] right-[-200px] w-[500px] h-[500px] bg-[#d4af37]/20 blur-[180px] pointer-events-none"
      />

      <div
        ref={glow2}
        className="fixed bottom-[-200px] left-[-200px] w-[600px] h-[600px] bg-pink-500/10 blur-[200px] pointer-events-none"
      />
    </>
  );
}