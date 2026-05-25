import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function FilmController() {

  useEffect(() => {

    const sections = gsap.utils.toArray(".film-section");

    sections.forEach((section, i) => {

      const content = section.querySelector(".film-content");

      // SCENE REVEAL
      gsap.fromTo(
        content,
        {
          opacity: 0,
          y: 100,
          scale: 0.96,
          filter: "blur(12px)",
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "+=100%",
            scrub: 1,
            pin: true,
            anticipatePin: 1,
          },
        }
      );

      // BACKGROUND DEPTH
      const glow = section.querySelector(".ambient-glow");

      if (glow) {
        gsap.to(glow, {
          y: -150,
          x: 80,
          scale: 1.2,
          opacity: 0.8,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      }

    });

    ScrollTrigger.refresh();

  }, []);

  return null;
}