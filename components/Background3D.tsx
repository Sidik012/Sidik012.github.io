import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import { MorphingVis } from './MorphingVis';

interface Background3DProps {
  scrollProgress: number;
<<<<<<< HEAD
  isAnimating?: boolean;
}

export const Background3D: React.FC<Background3DProps> = ({ scrollProgress, isAnimating = true }) => {
  return (
    <div className="w-full h-full pointer-events-none">
      <Canvas camera={{ position: [0, 0, 18], fov: 35 }} dpr={[1, 2]}>
        <ambientLight intensity={0.5} />
        <Suspense fallback={null}>
           {/* The MorphingVis now handles the entire timeline from Hero to Graph */}
           <MorphingVis scrollProgress={scrollProgress} isAnimating={isAnimating} />
=======
}

export const Background3D: React.FC<Background3DProps> = ({ scrollProgress }) => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 18], fov: 35 }}>
        <ambientLight intensity={0.5} />
        <Suspense fallback={null}>
           {/* The MorphingVis now handles the entire timeline from Hero to Graph */}
           <MorphingVis scrollProgress={scrollProgress} />
>>>>>>> 1d33a5efc97cccab8dda47555884f4a31ddd806b
        </Suspense>
        <Environment preset="city" />
      </Canvas>
    </div>
  );
};
