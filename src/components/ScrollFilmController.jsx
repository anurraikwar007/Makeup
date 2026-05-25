import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollFilmController() {
  useEffect(() => {
    const sections = gsap.utils.toArray(".panel");

    sections.forEach((section) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: "bottom top",
        pin: true,
        pinSpacing: true,
        snap: 1,
      });
    });

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  return null;
}