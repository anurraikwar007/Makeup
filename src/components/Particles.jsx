import { Canvas } from "@react-three/fiber";
import { Float, Sphere } from "@react-three/drei";

function Particle({ position }) {
  return (
    <Float speed={1} floatIntensity={1}>
      <Sphere args={[0.05, 10, 10]} position={position}>
        <meshStandardMaterial
          color="#d4af37"
          emissive="#d4af37"
          emissiveIntensity={0.6}
        />
      </Sphere>
    </Float>
  );
}

export default function Particles() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />

        {Array.from({ length: 12 }).map((_, i) => (
          <Particle
            key={i}
            position={[
              (Math.random() - 0.5) * 6,
              (Math.random() - 0.5) * 4,
              (Math.random() - 0.5) * 4,
            ]}
          />
        ))}
      </Canvas>
    </div>
  );
}