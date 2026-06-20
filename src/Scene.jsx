import { useFrame, useThree } from "@react-three/fiber";
import City from "./components/City";
import Particles from "./components/Particles";

function CameraParallax() {
  const { camera, mouse } = useThree();

  useFrame(() => {
    camera.position.x +=
      (mouse.x * 2 - camera.position.x) * 0.02;

    camera.position.y +=
      (mouse.y * 2 + 5 - camera.position.y) * 0.02;

    camera.lookAt(0, 0, 0);
  });

  return null;
}

export default function Scene() {
  return (
    <>
      <ambientLight intensity={0.8} />

      <pointLight
        position={[0, 10, 10]}
        intensity={5}
        color="#00ffff"
      />

      <pointLight
        position={[10, 5, -10]}
        intensity={3}
        color="#ff00ff"
      />

      <Particles />

      <City />

      {/* Ground Plane */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial color="#050505" wireframe />
      </mesh>

      <CameraParallax />
    </>
  );
}