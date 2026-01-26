
import React, { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

const GaussianMesh = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  const geometry = useMemo(() => {
    // Create a plane geometry with high segmentation for smooth curve
    const geo = new THREE.PlaneGeometry(10, 10, 32, 32);
    
    // Modify vertices to form a Gaussian distribution
    const positions = geo.attributes.position;
    const count = positions.count;
    
    for (let i = 0; i < count; i++) {
        const x = positions.getX(i);
        const y = positions.getY(i);
        
        // Gaussian function: a * exp(-(x^2 + y^2) / (2 * c^2))
        // Parameters to tune the shape
        const amplitude = 3;
        const spread = 2.5; 
        
        const z = amplitude * Math.exp(-(x * x + y * y) / (2 * spread));
        positions.setZ(i, z);
    }
    
    geo.computeVertexNormals();
    return geo;
  }, []);

  useFrame((state) => {
    if (meshRef.current) {
        // Subtle rotation if not interacting
       // meshRef.current.rotation.z += 0.001;
    }
  });

  return (
    <mesh ref={meshRef} geometry={geometry} rotation={[-Math.PI / 2.5, 0, 0]}> {/* Tilted to show depth */}
      <meshBasicMaterial 
        color="#00F0FF" 
        wireframe={true} 
        side={THREE.DoubleSide}
        transparent={true}
        opacity={0.8}
      />
    </mesh>
  );
};

export const InteractiveGaussian = () => {
  return (
    <div className="w-full h-[400px] md:h-[500px] bg-surface/30 backdrop-blur-sm rounded-3xl border border-white/10 overflow-hidden relative shadow-2xl">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 2, 8]} />
        <OrbitControls 
            enableZoom={true} 
            enablePan={false} 
            minDistance={4} 
            maxDistance={12}
            autoRotate={true}
            autoRotateSpeed={1.0}
        />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <GaussianMesh />
      </Canvas>
      {/* Decorative corner accents to match "tech" vibe if needed, but keeping it clean for now */}
    </div>
  );
};
