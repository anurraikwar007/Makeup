import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import bridal1 from "../assets/bridal-makeup (1).webp";
import Particles from "./Particles";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {

  const root = useRef(null);
  const contentRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {

    const el = root.current;
    if (!el) return;

    const ctx = gsap.context(() => {

      // =========================
      // INITIAL CINEMATIC ENTRY
      // =========================

      gsap.from(contentRef.current, {
        y: 80,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      });

      gsap.from(imageRef.current, {
        scale: 1.15,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out",
      });

      // =========================
      // CINEMATIC SCROLL TIMELINE
      // =========================

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top top",
          end: "bottom top",
          scrub: 1.2,
        },
      });

      tl.to(contentRef.current, {
        y: -120,
        opacity: 0,
        scale: 0.9,
        ease: "none",
      });

      tl.to(
        imageRef.current,
        {
          y: -60,
          scale: 1.3,
          opacity: 0,
          filter: "blur(12px)",
          ease: "none",
        },
        "<"
      );

      // =========================
      // FLOATING IMAGE MOTION
      // =========================

      gsap.to(imageRef.current, {
        y: 20,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

    }, root);

    return () => ctx.revert();

  }, []);

  return (
    <section
      ref={root}
      className="hero film-section relative min-h-screen bg-black overflow-hidden"
    >

      {/* PARTICLES */}
      <Particles />

      {/* AMBIENT DEPTH GLOW */}
      <div className="ambient-glow absolute top-[-250px] right-[-250px] w-[700px] h-[700px] bg-[#d4af37]/20 blur-[220px]" />

      <div className="ambient-glow absolute bottom-[-250px] left-[-250px] w-[600px] h-[600px] bg-pink-500/10 blur-[200px]" />

      {/* FILM CONTENT */}
      <div
        ref={contentRef}
        className="
          hero-content
          film-content
          relative
          z-10
          min-h-screen
          flex
          flex-col
          lg:grid
          lg:grid-cols-2
          items-center
          gap-10
          px-6
          md:px-16
          lg:px-24
          py-20
        "
      >

        {/* LEFT SIDE */}
        <div className="text-center lg:text-left">

          {/* BADGE */}
          <div className="
            inline-block
            px-5
            py-2
            rounded-full
            bg-white/5
            border
            border-white/10
            backdrop-blur-xl
            text-xs
            tracking-[5px]
            uppercase
            text-gray-300
          ">
            Luxury Bridal Artist
          </div>

          {/* TITLE */}
          <h1 className="
            mt-6
            text-[clamp(3.2rem,8vw,8rem)]
            leading-[0.88]
            font-black
            uppercase
            tracking-[-4px]
          ">
            Bridal{" "}
            <span className="text-[#d4af37]">
              Elegance
            </span>{" "}
            Redefined
          </h1>

          {/* TEXT */}
          <p className="
            mt-6
            text-gray-400
            text-base
            md:text-xl
            leading-relaxed
            max-w-xl
            mx-auto
            lg:mx-0
          ">
            Cinematic bridal transformation experience crafted
            with luxury aesthetics and modern storytelling.
          </p>

          {/* CTA */}
          <div className="
            mt-10
            flex
            flex-col
            sm:flex-row
            gap-4
            justify-center
            lg:justify-start
          ">

            <button className="
              px-8
              py-4
              rounded-full
              bg-[#d4af37]
              text-black
              uppercase
              tracking-[2px]
              font-semibold
              hover:scale-105
              transition
              duration-300
            ">
              Book Now
            </button>

            <button className="
              px-8
              py-4
              rounded-full
              border
              border-white/10
              bg-white/5
              backdrop-blur-xl
              uppercase
              tracking-[2px]
              hover:bg-white
              hover:text-black
              transition
              duration-300
            ">
              View Work
            </button>

          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div
          ref={imageRef}
          className="
            hero-image
            flex
            justify-center
            lg:justify-end
          "
        >

          <div className="
            relative
            w-[280px]
            sm:w-[380px]
            md:w-[450px]
            lg:w-[540px]

            h-[420px]
            sm:h-[550px]
            lg:h-[720px]

            rounded-[30px]
            lg:rounded-[42px]

            overflow-hidden

            border
            border-white/10

            shadow-[0_0_140px_rgba(212,175,55,0.18)]
          ">

            {/* IMAGE */}
            <img
              src={bridal1}
              className="w-full h-full object-cover scale-110"
              alt="bridal"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent)]" />

          </div>

        </div>

      </div>

      {/* SCROLL INDICATOR */}
      <div className="
        absolute
        bottom-6
        left-1/2
        -translate-x-1/2
        text-gray-500
        text-xs
        tracking-[6px]
        uppercase
        animate-pulse
      ">
        Scroll to explore
      </div>

    </section>
  );
}