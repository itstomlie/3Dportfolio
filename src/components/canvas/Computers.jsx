import { useGLTF, Preload, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

const Computer = () => {
  const computer = useGLTF("./desktop_pc/scene.gltf");
  return (
    <mesh>
      <ambientLight intensity={1.5} />
      <spotLight intensity={10} />
      <primitive
        object={computer.scene}
        scale={0.2}
        position={[0, -0.2, 0]}
        rotation={[0, -Math.PI / 2, 0]}
      />
    </mesh>
  );
};

const ComputerCanvas = () => {
  return (
    <Canvas camera={{ position: [0, 1, 2] }}>
      <Suspense>
        <OrbitControls
          enableZoom={false}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 2}
          minAzimuthAngle={-Math.PI / 4}
          maxAzimuthAngle={Math.PI / 4}
        />
        <Computer />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default ComputerCanvas;
