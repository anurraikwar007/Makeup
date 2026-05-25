import { Canvas } from "@react-three/fiber";
import { Float, Environment } from "@react-three/drei";

function Box() {
  return (
    <Float speed={2} rotationIntensity={2} floatIntensity={2}>
      <mesh rotation={[0.5, 0.5, 0]}>
        <torusKnotGeometry args={[1, 0.3, 100, 16]} />
        <meshStandardMaterial
          color="#d4af37"
          metalness={1}
          roughness={0.2}
        />
      </mesh>
    </Float>
  );
}

export default function Logo3D() {
  return (
    <Canvas className="w-full h-full">
      <ambientLight intensity={0.5} />
      <directionalLight position={[3, 3, 3]} intensity={2} />

      <Environment preset="city" />
      <Box />
    </Canvas>
  );
}