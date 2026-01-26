import React, { useState, useEffect, useRef } from 'react';
import { useScroll, useSpring } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ScientificPipeline } from './components/ScientificPipeline';
import { BusinessSection } from './components/BusinessSection';
import { SkillsSection } from './components/SkillsSection';
import { ContactSection } from './components/ContactSection';
import { Background3D } from './components/Background3D';
import { AIChat } from './components/AIChat';

const App = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  
  // Smooth scroll progress for the 3D model
  // Increased stiffness to 100 (was 60) for faster response to scroll events
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 20, restDelta: 0.001 });
  const [currentProgress, setCurrentProgress] = useState(0);

  useEffect(() => {
    return smoothProgress.onChange((v) => setCurrentProgress(v));
  }, [smoothProgress]);

  return (
    <div ref={containerRef} className="relative w-full bg-background text-white min-h-[400vh]">
      
      {/* --- Fixed 3D Background Layer --- */}
      <Background3D scrollProgress={currentProgress} />

      {/* --- Navbar --- */}
      <Navbar />

      {/* --- Content Sections --- */}
      <div className="relative z-10 flex flex-col items-center">
        <Hero />
        <ScientificPipeline />
        <BusinessSection />
        <SkillsSection />
        <ContactSection />
      </div>

      <AIChat />
    </div>
  );
};

export default App;