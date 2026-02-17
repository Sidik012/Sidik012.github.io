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
    </div>
  );
};

export default App;