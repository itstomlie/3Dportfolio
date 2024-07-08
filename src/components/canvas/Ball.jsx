import {
  Preload,
  OrbitControls,
  Icosahedron,
  Float,
  Decal,
  useTexture,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";

const Ball = ({ imgUrl }) => {
  const [texture] = useTexture([imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.5} />
      <directionalLight intensity={1.2} position={[1, 3.5, 2.5]} />
      <directionalLight intensity={0.2} position={[-1, -3.5, -2.5]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          map={texture}
        />
        <Decal
          position={[0, 0, -1]}
          rotation={[2 * Math.PI, Math.PI, 6.25]} // Rotate 180 degrees around the y-axis
          map={texture}
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  const [autoRotateSpeed, setAutoRotateSpeed] = useState(0);

  useEffect(() => {
    // Set a random speed between -10 and 10, excluding 0
    const speed = Math.random() > 0.5 ? 2 : -2;
    setAutoRotateSpeed(speed);
  }, []);

  return (
    <div className="h-full">
      <Canvas frameloop="demand" shadows gl={{ preserveDrawingBuffer: true }}>
        <Suspense fallback={null}>
          <OrbitControls
            autoRotate={true}
            autoRotateSpeed={autoRotateSpeed}
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Ball imgUrl={icon} />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default BallCanvas;
