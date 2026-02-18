import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import { MorphingVis } from './MorphingVis';

interface Background3DProps {
  scrollProgress: number;
  isAnimating?: boolean;
}

export const Background3D: React.FC<Background3DProps> = ({ scrollProgress, isAnimating = true }) => {
  return (
    <div className="w-full h-full pointer-events-none">
      <Canvas 
        camera={{ position: [0, 0, 18], fov: 35 }} 
        dpr={[1, 1.5]} // Reduce max DPR for performance
        gl={{ alpha: true, antialias: true, preserveDrawingBuffer: false }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <Suspense fallback={null}>
           {/* The MorphingVis now handles the entire timeline from Hero to Graph */}
           <MorphingVis scrollProgress={scrollProgress} isAnimating={isAnimating} />
        </Suspense>
      </Canvas>
    </div>
  );
};
