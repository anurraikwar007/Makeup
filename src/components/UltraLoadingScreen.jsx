import { useEffect, useRef } from "react";
import gsap from "gsap";
import Logo3D from "./Logo3D"; // optional (3D logo)

export default function UltraLoadingScreen({ onComplete }) {

  const root = useRef(null);

  useEffect(() => {

    const tl = gsap.timeline();

    // ORB ANIMATION
    gsap.to(".orb", {
      scale: 1.3,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: 0.2,
    });

    // TEXT
    tl.from(".title", {
      y: 60,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });

    tl.from(".subtitle", {
      y: 20,
      opacity: 0,
      duration: 0.8,
    }, "-=0.4");

    // PROGRESS BAR
    tl.to(".bar", {
      width: "100%",
      duration: 2,
      ease: "power2.inOut",
    });

    // EXIT
    tl.to(root.current, {
      opacity: 0,
      scale: 1.05,
      duration: 0.8,
      ease: "power2.inOut",
      onComplete: () => onComplete && onComplete(),
    });

  }, []);

  return (
    <div
      ref={root}
      className="fixed inset-0 z-[9999] bg-black flex items-center justify-center overflow-hidden"
    >

      {/* ORBS */}
      <div className="orb absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-[#d4af37]/20 blur-[180px] rounded-full" />
      <div className="orb absolute bottom-[-200px] right-[-200px] w-[600px] h-[600px] bg-pink-500/20 blur-[200px] rounded-full" />

      {/* CENTER */}
      <div className="text-center z-10">

        {/* 3D LOGO (optional) */}
        <div className="w-[180px] h-[180px] mx-auto mb-6">
          <Logo3D />
        </div>

        <h1 className="title text-white text-4xl md:text-6xl font-black tracking-[6px]">
          BRIDAL <span className="text-[#d4af37]">STUDIO</span>
        </h1>

        <p className="subtitle mt-4 text-gray-400 text-xs tracking-[4px] uppercase">
          Loading cinematic experience
        </p>

        {/* BAR */}
        <div className="mt-8 w-[280px] md:w-[400px] h-[2px] bg-white/10 mx-auto overflow-hidden">
          <div className="bar w-0 h-full bg-[#d4af37]" />
        </div>

      </div>

    </div>
  );
}