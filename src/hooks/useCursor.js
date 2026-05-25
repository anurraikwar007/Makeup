import { useEffect } from "react";
import gsap from "gsap";

export default function useCursor() {
  useEffect(() => {
    const cursor = document.createElement("div");
    cursor.className =
      "fixed w-4 h-4 bg-[#d4af37] rounded-full pointer-events-none z-[9999]";
    document.body.appendChild(cursor);

    window.addEventListener("mousemove", (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.2,
      });
    });
  }, []);
}