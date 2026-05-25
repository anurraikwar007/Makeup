import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import img1 from "../assets/bridal-makeup (7).webp";
import img2 from "../assets/bridal-makeup (8).webp";

gsap.registerPlugin(ScrollTrigger);

export default function Story() {

  const root = useRef(null);

  useEffect(() => {

    const el = root.current;
    if (!el) return;

    const ctx = gsap.context(() => {

      // =========================
      // TEXT ANIMATION
      // =========================

      gsap.from(".story-fade", {
        y: 60,
        opacity: 0,
        duration: 1.1,
        stagger: 0.15,
        ease: "power3.out",

        scrollTrigger: {
          trigger: el,
          start: "top 75%",
        },
      });

      // =========================
      // IMAGE FLOAT
      // =========================

      gsap.to(".story-img-1", {
        y: -50,
        ease: "none",

        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(".story-img-2", {
        y: 50,
        ease: "none",

        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      // =========================
      // STATS CARD
      // =========================

      gsap.from(".story-stats", {
        y: 80,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",

        scrollTrigger: {
          trigger: ".story-stats",
          start: "top 85%",
        },
      });

    }, root);

    return () => ctx.revert();

  }, []);

  return (
    <section
      ref={root}
      className="
        relative
        overflow-hidden
        bg-black
        py-24
        md:py-32
        lg:py-40
      "
    >

      {/* AMBIENT LIGHT */}
      <div className="
        absolute
        top-[-200px]
        left-[-200px]
        w-[350px]
        md:w-[500px]
        h-[350px]
        md:h-[500px]
        bg-[#d4af37]/10
        blur-[150px]
      " />

      <div className="
        absolute
        bottom-[-200px]
        right-[-200px]
        w-[300px]
        md:w-[450px]
        h-[300px]
        md:h-[450px]
        bg-pink-500/10
        blur-[140px]
      " />

      {/* MAIN */}
      <div className="
        relative
        z-10
        max-w-7xl
        mx-auto
        px-5
        sm:px-6
        md:px-10
        lg:px-20
      ">

        {/* GRID */}
        <div className="
          grid
          lg:grid-cols-2
          gap-16
          lg:gap-20
          items-center
        ">

          {/* TEXT SIDE */}
          <div className="
            order-2
            lg:order-1
            text-center
            lg:text-left
          ">

            {/* BADGE */}
            <div className="
              story-fade
              inline-flex
              items-center
              justify-center
              px-5
              py-2
              rounded-full
              bg-white/5
              border
              border-white/10
              backdrop-blur-xl
              text-[10px]
              sm:text-xs
              tracking-[4px]
              uppercase
              text-gray-300
            ">
              The Bridal Experience
            </div>

            {/* TITLE */}
            <h2 className="
              story-fade
              mt-6
              text-[clamp(2.8rem,8vw,7rem)]
              leading-[0.9]
              font-black
              tracking-[-3px]
              text-white
            ">
              Beauty
              <br />
              Beyond
              <span className="text-[#d4af37]">
                {" "}Makeup
              </span>
            </h2>

            {/* TEXT */}
            <div className="
              mt-8
              space-y-6
              max-w-2xl
              mx-auto
              lg:mx-0
            ">

              <p className="
                story-fade
                text-gray-400
                text-sm
                sm:text-base
                md:text-lg
                leading-relaxed
              ">
                Every bride deserves more than makeup.
                She deserves a cinematic transformation
                crafted with emotion, elegance, and luxury.
              </p>

              <p className="
                story-fade
                text-gray-500
                text-sm
                sm:text-base
                md:text-lg
                leading-relaxed
              ">
                From skin preparation to the final glow,
                every detail is designed to create a
                timeless bridal presence.
              </p>

            </div>

          </div>

          {/* IMAGE SIDE */}
          <div className="
            order-1
            lg:order-2
            relative
            flex
            justify-center
            items-center
            min-h-[420px]
            sm:min-h-[520px]
            lg:min-h-[650px]
          ">

            {/* IMAGE 1 */}
            <div className="
              story-img-1
              absolute
              left-0
              sm:left-8
              lg:left-0
              top-0
              w-[58%]
              sm:w-[52%]
              lg:w-[320px]
              h-[280px]
              sm:h-[360px]
              lg:h-[450px]
              rounded-[24px]
              lg:rounded-[30px]
              overflow-hidden
              border
              border-white/10
              shadow-[0_0_60px_rgba(212,175,55,0.12)]
            ">

              <img
                src={img1}
                alt=""
                className="
                  w-full
                  h-full
                  object-cover
                "
              />

            </div>

            {/* IMAGE 2 */}
            <div className="
              story-img-2
              absolute
              right-0
              sm:right-8
              lg:right-0
              bottom-0
              w-[52%]
              sm:w-[46%]
              lg:w-[300px]
              h-[240px]
              sm:h-[320px]
              lg:h-[380px]
              rounded-[24px]
              lg:rounded-[30px]
              overflow-hidden
              border
              border-white/10
              shadow-[0_0_50px_rgba(255,255,255,0.08)]
            ">

              <img
                src={img2}
                alt=""
                className="
                  w-full
                  h-full
                  object-cover
                "
              />

            </div>

          </div>

        </div>

        {/* STATS */}
        <div className="
          story-stats
          mt-24
          rounded-[30px]
          border
          border-white/10
          bg-white/[0.03]
          backdrop-blur-2xl
          p-6
          sm:p-8
          md:p-12
        ">

          <div className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-10
            text-center
            lg:text-left
          ">

            {/* ITEM */}
            <div>

              <h3 className="
                text-4xl
                md:text-5xl
                font-black
                text-[#d4af37]
              ">
                7+
              </h3>

              <p className="
                mt-3
                text-gray-400
                text-sm
                md:text-base
                leading-relaxed
              ">
                Years creating luxury bridal
                transformations.
              </p>

            </div>

            {/* ITEM */}
            <div>

              <h3 className="
                text-4xl
                md:text-5xl
                font-black
                text-[#d4af37]
              ">
                500+
              </h3>

              <p className="
                mt-3
                text-gray-400
                text-sm
                md:text-base
                leading-relaxed
              ">
                Brides styled with cinematic
                elegance and timeless beauty.
              </p>

            </div>

            {/* ITEM */}
            <div>

              <h3 className="
                text-4xl
                md:text-5xl
                font-black
                text-[#d4af37]
              ">
                Luxury
              </h3>

              <p className="
                mt-3
                text-gray-400
                text-sm
                md:text-base
                leading-relaxed
              ">
                Premium products, skin-focused
                artistry, and modern bridal styling.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}