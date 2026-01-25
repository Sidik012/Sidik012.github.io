import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import { MorphingVis } from './MorphingVis';

interface Background3DProps {
  scrollProgress: number;
}

export const Background3D: React.FC<Background3DProps> = ({ scrollProgress }) => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 18], fov: 35 }}>
        <ambientLight intensity={0.5} />
        <Suspense fallback={null}>
           {/* The MorphingVis now handles the entire timeline from Hero to Graph */}
           <MorphingVis scrollProgress={scrollProgress} />
        </Suspense>
        <Environment preset="city" />
      </Canvas>
    </div>
  );
};
