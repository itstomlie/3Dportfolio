import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense, useRef } from "react";
import CanvasLoader from "./CanvasLoader";

const Earth = () => {
  const earth = useGLTF("./planet/scene.gltf");
  return (
    <mesh>
      <ambientLight intensity={5} />
      <primitive object={earth.scene} scale={3} />
    </mesh>
  );
};

const EarthCanvas = () => {
  return (
    <div className="h-full w-full">
      <Canvas
        shadows
        frameloop="demand"
        gl={{ preserveDrawingBuffer: true }}
        camera={{ fov: 45, near: 0.1, far: 200, position: [-4, 3, 6] }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <Earth />
          <OrbitControls
            autoRotate={true}
            autoRotateSpeed={2}
            enableZoom={false}
          />
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default EarthCanvas;
