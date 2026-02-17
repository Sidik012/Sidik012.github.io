<<<<<<< HEAD
import React, { useRef, Suspense } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BusinessSection } from './components/BusinessSection';
import { SkillsSection } from './components/SkillsSection';
import { ContactSection } from './components/ContactSection';
// import { AIChat } from './components/AIChat';
// import { ScientificPipeline } from './components/ScientificPipeline';

const ScientificPipeline = React.lazy(() => import('./components/ScientificPipeline').then(module => ({ default: module.ScientificPipeline })));
const AIChat = React.lazy(() => import('./components/AIChat').then(module => ({ default: module.AIChat })));

const App = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative w-full bg-background text-white">
      {/* --- Navbar --- */}
      <Navbar />

      <div className="flex min-h-screen">
        {/* --- Scrollable Content Section --- */}
        <div ref={containerRef} className="flex-1">
          <div className="relative z-10 flex flex-col items-center">
            <Hero />
            <Suspense fallback={<div className="h-screen w-full flex items-center justify-center">Loading Pipeline...</div>}>
               <ScientificPipeline />
            </Suspense>
            <BusinessSection />
            <SkillsSection />
            <ContactSection />
          </div>
        </div>
      </div>

      <Suspense fallback={null}>
        <AIChat />
      </Suspense>
=======
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
>>>>>>> 1d33a5efc97cccab8dda47555884f4a31ddd806b
    </div>
  );
};

export default App;