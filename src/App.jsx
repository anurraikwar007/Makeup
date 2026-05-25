import { useState } from "react";
import UltraLoadingScreen from "./components/UltraLoadingScreen";

import Hero from "./components/Hero";
import Story from "./components/Story";
import Gallery from "./components/Gallery";
import BeforeAfter from "./components/BeforeAfter";

import AmbientBackground from "./components/AmbientBackground";

import useCursor from "./hooks/useCursor";
import useMagnetic from "./hooks/useMagnetic";

export default function App() {

  const [loading, setLoading] = useState(true);

  useCursor();
  useMagnetic();

  return (
    <>
      {loading && (
        <UltraLoadingScreen onComplete={() => setLoading(false)} />
      )}

      {!loading && (
        <div className="bg-black text-white overflow-x-hidden">

          <AmbientBackground />

          <Hero />
          <Story />
          <Gallery />
          <BeforeAfter />

        </div>
      )}
    </>
  );
}