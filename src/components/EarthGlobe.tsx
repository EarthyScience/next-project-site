"use client"

import { useRef } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { TextureLoader, Mesh } from 'three';

interface SphereProps {
  rotationSpeed?: number;
  scale?: number;
  initialRotation?: [number, number, number];
}

const Sphere = ({
  rotationSpeed = 0.001,
  scale = 2.0,
  initialRotation = [0, 0.41, 0]
}: SphereProps) => {
  const texture = useLoader(TextureLoader, './land_ocean_ice_cloud_2048.jpg');
  const meshRef = useRef<Mesh>(null);
  
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += rotationSpeed;
    }
  });
  
  return (
    <mesh ref={meshRef} scale={scale} rotation={initialRotation}>
      <sphereGeometry args={[1.0, 64, 64]} />
      <meshStandardMaterial attach="material" map={texture} />
    </mesh>
  );
};

interface EarthGlobeProps {
  width?: string;
  height?: string;
  cameraPosition?: [number, number, number];
  lightIntensity?: number;
  ambientIntensity?: number;
  enableControls?: boolean;
  className?: string;
}

const EarthGlobe = ({
  width = "740px",
  height = "100%",
  cameraPosition = [0, 0, -3.5],
  lightIntensity = 10,
  ambientIntensity = 0.2,
  enableControls = true,
  className = ""
}: EarthGlobeProps) => {
  return (
    <div className={`earth-globe-container ${className}`} style={{ width, height }}>
      <Canvas
        camera={{
          position: cameraPosition,
          rotateZ: Math.PI
        }}
      >
        <directionalLight position={[-10, 5, 0]} intensity={lightIntensity} />
        <ambientLight intensity={ambientIntensity} />
        <Sphere />
        {enableControls && (
          <OrbitControls 
            enableDamping={true} 
            enablePan={false} 
            enableZoom={false} 
          />
        )}
      </Canvas>
    </div>
  );
};

export default EarthGlobe;