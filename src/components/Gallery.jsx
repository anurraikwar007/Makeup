import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import img1 from "../assets/bridal-makeup (3).webp";
import img2 from "../assets/bridal-makeup (4).webp";
import img3 from "../assets/bridal-makeup (5).webp";
import img4 from "../assets/bridal-makeup (6).webp";

gsap.registerPlugin(ScrollTrigger);

export default function Gallery() {

  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  const images = [img1, img2, img3, img4];

  useEffect(() => {

    const section = sectionRef.current;
    const track = trackRef.current;

    if (!section || !track) return;

    const ctx = gsap.context(() => {

      const totalScroll =
        track.scrollWidth - window.innerWidth;

      // =========================
      // MAIN HORIZONTAL
      // =========================

      gsap.to(track, {

        x: -totalScroll,

        ease: "none",

        force3D: true,

        scrollTrigger: {
          trigger: section,

          start: "top top",

          end: () => `+=${totalScroll}`,

          scrub: 0.6,

          pin: true,

          anticipatePin: 1,

          invalidateOnRefresh: true,
        },
      });

      // =========================
      // SIMPLE IMAGE MOTION
      // =========================

      gsap.utils.toArray(".gallery-image").forEach(
        (img) => {

          gsap.fromTo(
            img,
            {
              scale: 1.1,
            },
            {
              scale: 1,

              ease: "none",

              scrollTrigger: {
                trigger: img,

                start: "left center",
                end: "right center",

                scrub: true,

                horizontal: true,
              },
            }
          );

        }
      );

      // =========================
      // TITLE
      // =========================

      gsap.from(".gallery-title", {
        y: 50,
        opacity: 0,

        duration: 1,

        ease: "power3.out",
      });

    }, sectionRef);

    return () => ctx.revert();

  }, []);

  return (
    <section
      ref={sectionRef}
      className="
        relative
        h-screen
        overflow-hidden
        bg-black
      "
    >

      {/* LIGHTS */}
      <div className="
        absolute
        top-[-200px]
        left-[-200px]
        w-[500px]
        h-[500px]
        bg-[#d4af37]/10
        blur-[180px]
      " />

      {/* HEADER */}
      <div className="
        gallery-title
        absolute
        top-10
        left-6
        md:left-12
        lg:left-20
        z-20
      ">

        <p className="
          text-xs
          tracking-[6px]
          uppercase
          text-gray-400
        ">
          Luxury Portfolio
        </p>

        <h2 className="
          mt-3
          text-3xl
          md:text-5xl
          lg:text-6xl
          font-black
          leading-none
          text-white
        ">
          Cinematic
          <br />
          Gallery
        </h2>

      </div>

      {/* TRACK */}
      <div
        ref={trackRef}
        className="flex h-full"
        style={{
          width: `${images.length * 100}vw`,
        }}
      >

        {images.map((img, i) => (

          <div
            key={i}
            className="
              relative
              w-screen
              h-screen
              flex-shrink-0
              flex
              items-center
              justify-center
              px-5
              md:px-10
            "
          >

            {/* CARD */}
            <div className="
              relative
              w-full
              max-w-[1300px]
              h-[65vh]
              md:h-[75vh]
              rounded-[30px]
              overflow-hidden
              border
              border-white/10
              shadow-[0_0_80px_rgba(212,175,55,0.12)]
            ">

              {/* IMAGE */}
              <img
                src={img}
                alt=""
                className="
                  gallery-image
                  w-full
                  h-full
                  object-cover
                  will-change-transform
                "
              />

              {/* OVERLAY */}
              <div className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black/60
                to-transparent
              " />

              {/* NUMBER */}
              <div className="
                absolute
                bottom-5
                right-5
                text-white/30
                tracking-[4px]
              ">
                0{i + 1}
              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}