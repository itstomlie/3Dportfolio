import { useGLTF, Preload, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

const isMobile = false;
const Computer = () => {
  const computer = useGLTF("./desktop_pc/scene.gltf");
  return (
    // <mesh>
    //   <ambientLight intensity={1.5} />
    //   <spotLight intensity={10} />
    //   <primitive
    //     object={computer.scene}
    //     scale={0.25}
    //     position={[0.3, -1.1, 3]}
    //     rotation={[0, -Math.PI / 2, 0]}
    //   />
    // </mesh>
    <mesh>
      <hemisphereLight intensity={1} position={[0, 1, 0]} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight
        position={[-3, 5, 1]}
        angle={1}
        penumbra={1}
        intensity={1000}
        castShadow
        shadow-mapSize={1024}
      />
      <ambientLight intensity={0.5} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.4 : 0.75}
        position={isMobile ? [0, -2, -0.9] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.05]}
      />
    </mesh>
  );
};

const ComputerCanvas = () => {
  return (
    // <Canvas camera={{ fov: 65, position: [0, 2, 5] }}>
    //   <Suspense>
    //     <OrbitControls
    //       enableZoom={false}
    //       minPolarAngle={Math.PI / 2}
    //       maxPolarAngle={Math.PI / 2}
    //     />
    //     <Computer />
    //     <Preload all />
    //   </Suspense>
    // </Canvas>

    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense>
        <OrbitControls
          autoRotate={true}
          autoRotateSpeed={0.3}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computer isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputerCanvas;
