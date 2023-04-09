import React, { useRef, ReactNode } from "react";
import styled, { keyframes } from "styled-components";
import { Canvas, useFrame } from "react-three-fiber";
import { OrbitControls, Stars } from "@react-three/drei";

interface RotatingGlobeProps {
  children: ReactNode;
}

const RotatingGlobe: React.FC<RotatingGlobeProps> = ({ children }) => {
  const globeRef = useRef<THREE.Group>();

  useFrame(() => {
    if (globeRef.current) {
      globeRef.current.rotation.y += 0.01;
    }
  });

  return <group ref={globeRef}>{children}</group>;
};

const NetworkGlobe: React.FC = () => {
  const nodes = [];
  const lines = [];

  for (let i = 0; i < 10; i++) {
    nodes.push(
      <mesh
        key={`node-${i}`}
        position={[
          Math.random() * 4 - 2,
          Math.random() * 4 - 2,
          Math.random() * 4 - 2,
        ]}
      >
        <sphereBufferGeometry args={[0.1]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
    );

    const linePositions = new Float32Array([
      Math.random() * 4 - 2,
      Math.random() * 4 - 2,
      Math.random() * 4 - 2,
      Math.random() * 4 - 2,
      Math.random() * 4 - 2,
      Math.random() * 4 - 2,
    ]);

    lines.push(
      <line key={`line-${i}`}>
        <bufferGeometry>
          <bufferAttribute
            attach="position"
            count={linePositions.length / 3}
            array={linePositions}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#ffffff" />
      </line>
    );
  }

  return (
    <Canvas style={{ width: "300px", height: "300px", borderRadius: "50%" }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <RotatingGlobe>
        <group>{nodes}</group>
        <group>{lines}</group>
      </RotatingGlobe>
      <Stars />
      <OrbitControls />
    </Canvas>
  );
};
export default NetworkGlobe;
