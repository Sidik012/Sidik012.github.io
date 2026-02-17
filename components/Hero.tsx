import React from 'react';
import { motion } from 'framer-motion';

<<<<<<< HEAD
import { Canvas } from '@react-three/fiber';
import { HeroParticles } from './HeroParticles';

export const Hero = () => {
  return (
    <section className="relative h-screen w-full flex flex-col justify-center items-center text-center px-6 overflow-hidden" id="hero">
      {/* Background Particles */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 20], fov: 35 }} dpr={[1, 2]}>
           <ambientLight intensity={0.5} />
           <HeroParticles />
        </Canvas>
      </div>

=======
export const Hero = () => {
  return (
    <section className="h-screen w-full flex flex-col justify-center items-center text-center px-6" id="hero">
>>>>>>> 1d33a5efc97cccab8dda47555884f4a31ddd806b
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
<<<<<<< HEAD
        className="relative z-10 max-w-4xl"
=======
        className="max-w-4xl"
>>>>>>> 1d33a5efc97cccab8dda47555884f4a31ddd806b
      >
        <h2 className="text-accent-cyan font-mono mb-4 text-lg tracking-widest">DATA SCIENTIST & AI ENGINEER</h2>
        <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500">
          SIDIK
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Transforming raw data into intelligent systems. <br/>
<<<<<<< HEAD
          Co-Founder of <span className="text-accent-gold font-semibold">Cobalt</span>.
=======
          Co-Founder of <span className="text-accent-gold font-semibold">SuperLaps</span>.
>>>>>>> 1d33a5efc97cccab8dda47555884f4a31ddd806b
        </p>
      </motion.div>
    </section>
  );
};
