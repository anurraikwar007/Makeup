import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function MovieTimeline() {
  useEffect(() => {
    const sections = gsap.utils.toArray(".panel");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
      },
    });

    sections.forEach((section, i) => {
      tl.to(section, {
        scale: 1,
        opacity: 1,
        duration: 1,
      });

      if (sections[i + 1]) {
        tl.to(section, {
          scale: 0.95,
          opacity: 0,
          duration: 1,
        });
      }
    });

    ScrollTrigger.refresh();
  }, []);

  return null;
}