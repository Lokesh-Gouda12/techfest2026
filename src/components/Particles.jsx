import { Points, PointMaterial } from "@react-three/drei";

export default function Particles() {
  const particles = [];

  for (let i = 0; i < 3000; i++) {
    particles.push(
      (Math.random() - 0.5) * 100,
      (Math.random() - 0.5) * 100,
      (Math.random() - 0.5) * 100
    );
  }

  return (
    <Points positions={particles}>
      <PointMaterial
        transparent
        color="#00ffff"
        size={0.08}
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  );
}