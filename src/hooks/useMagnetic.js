import { useEffect } from "react";
import gsap from "gsap";

export default function useMagnetic() {
  useEffect(() => {
    const buttons = document.querySelectorAll(".magnetic");

    buttons.forEach((btn) => {
      btn.addEventListener("mousemove", (e) => {
        const rect = btn.getBoundingClientRect();

        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        gsap.to(btn, {
          x: x * 0.25,
          y: y * 0.25,
          duration: 0.4,
        });
      });

      btn.addEventListener("mouseleave", () => {
        gsap.to(btn, { x: 0, y: 0, duration: 0.6 });
      });
    });
  }, []);
}