import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

function AIHead() {
  const headRef = useRef();
  const ringRef = useRef();

  useFrame(({ clock }) => {
    headRef.current.rotation.y = clock.elapsedTime * 0.5;

    ringRef.current.rotation.z =
      clock.elapsedTime * 0.8;

    ringRef.current.rotation.x =
      clock.elapsedTime * 0.3;
  });

  return (
    <group position={[0, 3, -15]}>

      {/* Head */}
      <mesh ref={headRef}>
        <sphereGeometry args={[2, 64, 64]} />
        <meshStandardMaterial
          color="#111111"
          emissive="#00ffff"
          emissiveIntensity={0.8}
          wireframe
        />
      </mesh>

      {/* Orbit Ring */}
      <mesh ref={ringRef}>
        <torusGeometry args={[3.2, 0.05, 16, 100]} />
        <meshStandardMaterial
          color="#00ffff"
          emissive="#00ffff"
          emissiveIntensity={2}
        />
      </mesh>

      {/* Extra Ring 1 */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[3.5, 0.05, 16, 100]} />
        <meshStandardMaterial
          color="#ff00ff"
          emissive="#ff00ff"
          emissiveIntensity={2}
       />
      </mesh>

{/* Extra Ring 2 */}
<mesh rotation={[0, Math.PI / 2, 0]}>
  <torusGeometry args={[3.5, 0.05, 16, 100]} />
  <meshStandardMaterial
    color="#ff00ff"
    emissive="#ff00ff"
    emissiveIntensity={2}
  />
</mesh>

      {/* Eyes */}
      <mesh position={[-0.7, 0.3, 1.8]}>
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshStandardMaterial
          color="#ff00ff"
          emissive="#ff00ff"
          emissiveIntensity={4}
        />
      </mesh>

      <mesh position={[0.7, 0.3, 1.8]}>
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshStandardMaterial
          color="#00ffff"
          emissive="#00ffff"
          emissiveIntensity={4}
        />
      </mesh>
    </group>
  );
}

export default function City() {
  return <AIHead />;
}