import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Transition() {
  const root = useRef(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.from(".cta-box", {
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
        },
        y: 60,
        opacity: 0,
        scale: 0.95,
        duration: 1,
        ease: "power3.out",
      });

      gsap.to(".cta-glow", {
        scrollTrigger: {
          trigger: el,
          scrub: true,
        },
        y: -120,
        opacity: 0.8,
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden px-6"
    >
      {/* BACKGROUND GLOW */}
      <div className="cta-glow absolute w-[600px] h-[600px] bg-[#d4af37]/20 blur-[200px] top-[-200px] left-[-200px]" />
      <div className="absolute w-[500px] h-[500px] bg-pink-500/10 blur-[180px] bottom-[-200px] right-[-200px]" />

      {/* CTA BOX */}
      <div className="cta-box text-center max-w-2xl w-full bg-white/5 border border-white/10 backdrop-blur-xl rounded-[30px] p-10 md:p-14">

        <p className="text-xs tracking-[6px] uppercase text-gray-400">
          Ready to transform
        </p>

        <h2 className="mt-6 text-[clamp(2.2rem,5vw,4rem)] font-black text-white leading-[1.1] uppercase">
          Your Bridal Look Into
          <span className="text-[#d4af37]"> Cinematic Art</span>
        </h2>

        <p className="mt-6 text-gray-400 text-sm md:text-base">
          Let’s create a timeless bridal transformation that feels like a luxury film scene.
        </p>

        {/* BUTTONS */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">

          <button className="px-8 py-4 rounded-full bg-[#d4af37] text-black font-semibold uppercase tracking-[2px] hover:scale-105 transition">
            Book Appointment
          </button>

          <button className="px-8 py-4 rounded-full border border-white/10 bg-white/5 text-white uppercase tracking-[2px] hover:bg-white hover:text-black transition">
            View Pricing
          </button>

        </div>

      </div>
    </section>
  );
}