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
      <Canvas camera={{ position: [0, 0, 18], fov: 35 }} dpr={[1, 2]} gl={{ alpha: true }}>
        <ambientLight intensity={0.5} />
        <Suspense fallback={<div className="text-white text-xs">Loading Vis...</div>}>
           {/* The MorphingVis now handles the entire timeline from Hero to Graph */}
           <MorphingVis scrollProgress={scrollProgress} isAnimating={isAnimating} />
        </Suspense>
        <Environment preset="city" />
      </Canvas>
    </div>
  );
};
