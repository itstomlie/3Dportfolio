import { Preload } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense, useRef } from "react";
import * as THREE from "three";

const Stars = () => {
  const starsRef = useRef();

  React.useEffect(() => {
    const createStars = () => {
      const starGeometry = new THREE.BufferGeometry();
      const starsMaterial = new THREE.PointsMaterial({
        color: 0xffffff,
        size: 0.02,
        sizeAttenuation: true,
      });

      const starPositions = [];
      const starCount = 200; // Adjust the number to control the star count
      const radius = 10; // Adjust the radius to control the distance of the stars from the Earth

      for (let i = 0; i < starCount; i++) {
        const x = (Math.random() - 0.5) * radius;
        const y = (Math.random() - 0.5) * radius;
        const z = (Math.random() - 0.5) * radius;
        starPositions.push(x, y, z);
      }

      starGeometry.setAttribute(
        "position",
        new THREE.BufferAttribute(new Float32Array(starPositions), 3)
      );

      const stars = new THREE.Points(starGeometry, starsMaterial);
      starsRef.current.add(stars);
    };

    createStars();
  }, []);

  React.useEffect(() => {
    const interval = setInterval(() => {
      starsRef.current.rotation.y -= 0.004; // Adjust the speed of rotation
    }, 10);
    return () => clearInterval(interval);
  }, []);

  return <group ref={starsRef} />;
};

const StarsCanvas = () => {
  return (
    <div className="w-full h-full absolute inset-0">
      <Canvas>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
